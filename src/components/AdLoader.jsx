// src/components/AdLoader.jsx
import { useEffect } from 'react';

const AdLoader = () => {
  useEffect(() => {
    const socialScript = document.createElement('script');
    socialScript.src = '//pl26937317.profitableratecpm.com/fd/f3/75/fdf375637f89235203f7963036ec734f.js';
    socialScript.async = true;
    socialScript.onerror = () => console.warn("Social script failed");
    document.head.appendChild(socialScript);

    const propounderScript = document.createElement('script');
    propounderScript.src = '//pl26937281.profitableratecpm.com/6e/4e/d7/6e4ed7959cba75654deb1f58fa69d10d.js';
    propounderScript.async = true;
    propounderScript.onerror = () => console.warn("Propounder script failed");
    document.head.appendChild(propounderScript);

    return () => {
      // Clean up only if scripts are found
      if (document.head.contains(socialScript)) {
        document.head.removeChild(socialScript);
      }
      if (document.head.contains(propounderScript)) {
        document.head.removeChild(propounderScript);
      }
    };
  }, []);

  return null;
};

export default AdLoader;
