import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 100 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      type: 'spring',
      stiffness: 100,
    },
  }),
};

const CardComponent = ({ cardData }) => (
  <div className="w-[63%] h-full rounded-xl bg-white flex flex-col">
    <div className="flex-1 p-2 bg-gray-100 rounded-lg overflow-x-scroll">
      <div className="flex space-x-8">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="min-w-[500px] h-full bg-white shadow-md p-2 rounded-lg flex flex-col items-center"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: false, amount: 0.1 }}
          >
            <Card
              img={card.img}
              title={card.title}
              description={card.description}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default CardComponent;

const Card = ({ img, title, description, index }) => (
  <div className="w-full bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
    <img
      src={img}
      alt={`Card ${index + 1}`}
      className="rounded-lg mb-4 w-full h-64 object-cover"
    />
    <h2 className="text-4xl font-bold text-[#] text-center">
      {title}
    </h2>
    <p className="mt-4 text-lg text-gray-600 text-center">
      {description}
    </p>
  </div>
);