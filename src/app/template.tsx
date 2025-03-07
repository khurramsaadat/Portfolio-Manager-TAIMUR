'use client';

import { useEffect } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Remove the loading indicator element if it exists
    const loadingIndicator = document.querySelector('[data-next-mark-loading]');
    if (loadingIndicator) {
      loadingIndicator.remove();
    }
  }, []);

  return <>{children}</>;
} 