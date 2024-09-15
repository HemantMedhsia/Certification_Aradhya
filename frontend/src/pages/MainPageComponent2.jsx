import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import CardComponent from '../components/CardComponent';

const MainPageComponent2 = () => {
  const cardData = [
    { img: img1, title: 'Card Title 1', description: 'This is card 1.' },
    { img: img2, title: 'Card Title 2', description: 'This is card 2.' },
    { img: img1, title: 'Card Title 3', description: 'This is card 3.' },
    { img: img2, title: 'Card Title 4', description: 'This is card 4.' },
    { img: img1, title: 'Card Title 5', description: 'This is card 5.' },
  ];

  return (
    <div className="h-[100vh] flex bg-white my-4">
      <div className="w-[37%] h-full bg-white flex justify-center items-center">
        <h1 className="text-[13rem] font-bold text-teal-500 tracking-widest outline-text leading-none transform -rotate-90">
          YOUR PATH
        </h1>
      </div>

      <CardComponent cardData={cardData} />
    </div>
  );
};

export default MainPageComponent2;
