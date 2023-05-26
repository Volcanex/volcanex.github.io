import { createBoard } from '@wixc3/react-board';
import Firework from '../../../components/firework/firework';

export default createBoard({
    name: 'Firework',
    Board: () => <Firework />
});
