import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Pomogranite",
    img: "https://as1.ftcdn.net/v2/jpg/07/04/04/26/1000_F_704042651_fkvxvSgmxQqvS8IuVGvG7Fpae654AGkN.jpg",
    desc: "The pomegranate (Punica granatum) is a fruit native to the Middle East, but cultivated widely across Asia, Africa, and the Mediterranean. It's a vibrant fruit with a unique appearance and flavor.",
  },
  {
    id: 2,
    title: "Red Chillies",
    img: "https://as1.ftcdn.net/v2/jpg/06/17/23/80/1000_F_617238081_rTNx6XGU6iuIjbpzJpD5ebdk8vvLtMtU.jpg",
    desc: "Red chillies are ripe red chilli peppers, coming in many shapes and sizes. They're generally hotter than other colored peppers of the same variety and pack a spicy punch with a hint of sweetness or fruitiness.",
  },
  {
    id: 3,
    title: "Sweet Lime",
    img: "https://wildroots.in/wp-content/uploads/2022/05/mosambiee.jpg",
    desc: "Mosambi is simply sweet lime. It's like a lime, but rounder, with a thinner skin and a sweeter taste.",
  },
  {
    id: 4,
    title: "Green Chillies",
    img: "https://www.asiafarming.com/wp-content/uploads/2022/08/Grow-Green-Chilli-4.jpg",
    desc: "Green chillies are unripe chilli peppers. They come in various shapes and sizes, but are typically smaller than their red counterparts. They pack a spicy punch and lack the sweetness of red chillies",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Book Order</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h2>Demand Exports</h2>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
