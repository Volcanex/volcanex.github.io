import { useEffect, useRef } from 'react';

// Firework Class
class Firework {
  x: number;
  y: number;
  yVol: number;
  height: number;
  R: number;
  G: number;
  B: number;
  radius: number;
  boom: boolean;
  canvas: HTMLCanvasElement | null;
  boomHeight: number;
  
  constructor(x: number, y: number, height: number, yVol: number, R: number, G: number, B: number, canvas: HTMLCanvasElement | null) {
    this.x = x;
    this.y = y;
    this.yVol = yVol;
    this.height = height;
    this.R = R;
    this.G = G;
    this.B = B;
    this.radius = 2;
    this.boom = false;
    this.canvas = canvas;
    this.boomHeight = Math.floor(Math.random() * 200) + 50;
  }

  draw = () => {
    if (!this.canvas) {
      return;
    }

    const ctx = this.canvas.getContext("2d");

    if (ctx) {
      ctx.fillStyle = `rgba(${this.R},${this.G},${this.B})`;
      ctx.strokeStyle = `rgba(${this.R},${this.G},${this.B})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 3, Math.PI * 2, 0, false);
      ctx.fill();
    }
  }

  update = () => {
    this.y -= this.yVol;
    if (this.y <= this.height + this.boomHeight) {
      this.boom = true;
    }
    this.draw();
  }
  
}

// TODO: Define the Particle class similarly, with its properties and methods.
class Particle {
    x: number;
    y: number;
    xVol: number;
    yVol: number;
    alpha: number;
    R: number;
    G: number;
    B: number;
    canvas: HTMLCanvasElement | null;
  
    constructor(x: number, y: number, R: number, G: number, B: number, canvas: HTMLCanvasElement | null) {
      this.x = x;
      this.y = y;
      this.xVol = (Math.random() - 0.5) * 10;
      this.yVol = (Math.random() - 0.5) * 10;
      this.alpha = 1;
      this.R = R;
      this.G = G;
      this.B = B;
      this.canvas = canvas;
    }
  
    draw() {
      if (!this.canvas) {
        return;
      }
  
      const ctx = this.canvas.getContext('2d');
  
      if (ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = `rgba(${this.R},${this.G},${this.B})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.restore();
      }
    }
  
    update() {
      this.x += this.xVol;
      this.y += this.yVol;
      this.alpha -= 0.01;
    }
  }
  

// FireworkComponent
// FireworkComponent
// FireworkComponent
const FireworkComponent = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
    useEffect(() => {
      let fireworkArray: Firework[] = [];
      let particleArray: Particle[] = [];
  
      const handleResize = () => {
        if (canvasRef.current) {
          canvasRef.current.width = window.innerWidth;
          canvasRef.current.height = window.innerHeight;
        }
      };
      
      window.addEventListener("resize", handleResize);
      handleResize();
  
      const animate = () => {
        requestAnimationFrame(animate);
      
        if (!canvasRef.current) {
          return;
        }
      
        const ctx = canvasRef.current.getContext("2d");
            
        if (ctx) {
          ctx.fillStyle = "rgba(0,0,0,0.1)";
          ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      
        fireworkArray.forEach((firework, index) => {
          firework.update();
          firework.draw();
          if (firework.boom) {
            for (let i = 0; i < (10+Math.random()*50); i++) {
              particleArray.push(new Particle(firework.x, firework.y, firework.R, firework.G, firework.B, canvasRef.current));
            }
            fireworkArray.splice(index, 1);
          }
        });
      
        particleArray.forEach((particle, index) => {
          particle.update();
          particle.draw();
          if (particle.alpha <= 0) {
            particleArray.splice(index, 1);
          }
        });
      
        if (fireworkArray.length < 2) {
          const x = Math.random() * (canvasRef.current ? canvasRef.current.width : 0);
          const y = canvasRef.current ? canvasRef.current.height : 0;
          const height = Math.floor(Math.random() * 200) + 50;
          const yVol = 5;
          const R = Math.floor(Math.random() * 255);
          const G = Math.floor(Math.random() * 255);
          const B = Math.floor(Math.random() * 255);
          fireworkArray.push(new Firework(x, y, height, yVol, R, G, B, canvasRef.current));
        }
      };
      
    
      animate();
  
      // Cleanup function
      return () => {
        window.removeEventListener("resize", handleResize);
      };
  
    }, []);
  
    return <canvas ref={canvasRef} id="canvas"></canvas>;
  };
  
  export default FireworkComponent;
  