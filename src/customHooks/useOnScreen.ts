import React from 'react';
import { useState, useEffect } from 'react';

export const useOnScreen = (ref: React.RefObject<HTMLDivElement>) => {
	const [isOnScreen, setOnScreen] = useState(false);

	const observer = new IntersectionObserver(
		([entry]) => setOnScreen(entry.isIntersecting),
		{
			threshold: [0.25, 0.5, 0.75],
		}
	);

	useEffect(() => 
	{   if(ref.current){
		observer.observe(ref.current);
		}
		return () => {
			observer.disconnect();
		};
	});

	return isOnScreen;
};
