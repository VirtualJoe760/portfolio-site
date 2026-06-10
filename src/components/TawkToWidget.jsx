import { useEffect } from 'react';

const TawkToWidget = () => {
  useEffect(() => {
    // Ensure Tawk_API and Tawk_LoadStart are defined on the window object
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/66d1066350c10f7a00a1dbb4/1i6g81tcl';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    document.body.appendChild(script);

    return () => {
      // Clean up the script if the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default TawkToWidget;
