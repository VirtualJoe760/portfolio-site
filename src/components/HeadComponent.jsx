import { Helmet } from 'react-helmet';

const HeadComponent = () => (
    <Helmet>
        <meta property="og:title" content="Dream Big Joe | Web Developer" />
        <meta property="og:description" content="Joseph Sardella is a Full-Stack Web Developer with experience in Reactjs, Nodejs, Threejs, MongoDB, Nextjs & Gatsby. He also is a Generative AI artist, Video & SFX Editor & Graphic Designer. Contact today to elevate your busines and Dream Big with Joe!" />
        <meta property="og:image" content="/src/assets/ai-thumbnail.png" />
        <meta property="og:url" content="https://dreambigjoe.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dream Big Joe | Web Developer" />
        <meta name="twitter:description" content="Joseph Sardella is a Full-Stack Web Developer with experience in Reactjs, Nodejs, Threejs, MongoDB, Nextjs & Gatsby. He also is a Generative AI artist, Video & SFX Editor & Graphic Designer. Contact today to elevate your business and Dream Big with Joe!" />
        <meta name="twitter:image" content="/src/assets/ai-thumbnail.png" />
    </Helmet>
);

export default HeadComponent;
