"use client"

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || '95%',
    }
  };

  if (!isClient) {
    return <div style={{ width: width || '95%', height: '100%' }} />;
  }

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;