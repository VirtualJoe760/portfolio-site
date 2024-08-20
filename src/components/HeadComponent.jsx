import { Helmet } from 'react-helmet';
import { thumbnail } from '../assets';

const HeadComponent = () => (
    <Helmet>
        <meta property="og:title" content="Think Big Joe | Web Developer" />
        <meta property="og:description" content="Joseph Sardella is a Full-Stack Web Developer with experience in Reactjs, Nodejs, Threejs, MongoDB, Nextjs & Gatsby. He also is a Generative AI artist, Video & SFX Editor & Graphic Designer. Contact today to elevate your busines and Dream Big with Joe!" />
        <meta property="og:image" content={thumbnail} />
        <meta property="og:url" content="https://dreambigjoe.com" />
        <meta property="og:type" content="website" />
    </Helmet>
);

export default HeadComponent;
