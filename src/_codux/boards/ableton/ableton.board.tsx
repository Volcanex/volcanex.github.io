import { createBoard } from '@wixc3/react-board';
import Ableton from '../../../components/ableton/ableton';

export default createBoard({
    name: 'Ableton',
    Board: () => <Ableton />
});
