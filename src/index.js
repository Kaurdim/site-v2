import { headerMenu } from './components/headerMenu';
import FullPageScroll from './components/full-page-scroll';
import './styles/styles.scss';

headerMenu();
const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
