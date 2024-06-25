import { useState,useRef } from "react";
import { color, motion, useScroll, useTransform } from "framer-motion";



const ImageSlider = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
const slideStyles = {
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position:"relative",
  left:"10%"
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "130px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "130px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "50%",
  width:'50%',
  display:'flex',
  right:'20px'
};
const sliderText = {
    position: "relative",
    height: "50%",
    width:'50%',
    display:'flex',
    top:'10%'
  };
const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};
const imagesliderdiv = {
    display:'flex',
    position:'relative',
    width:'inherit',
    height:'inherit'
};
    const slides = [
        { url: "https://i2.wp.com/www.floraip.com/wp-content/uploads/2023/01/Millet-e1696528582871.jpeg?w=900&ssl=1", title: "Corn, also known as maize, is a tall cereal grass with large ears of kernels. It's a versatile crop used for food (think cornbread!), animal feed, and even biofuel." },
        { url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Japanese_Foxtail_millet_02.jpg", title: "Foxtail millet is a gluten-free whole grain that's high in protein, fiber, and several important nutrients. It has a mild, nutty flavor and a slightly chewy texture when cooked. It's a popular ingredient in many Asian and African dishes." },
        { url: "https://www.asiafarming.com/wp-content/uploads/2024/05/Why-is-Citrus-Tree-Leaves-Turning-Yellow1.jpg", title: "Millets are tiny, nutrient-rich powerhouses. These gluten-free grains pack a punch with protein, fiber, and essential vitamins and minerals. They're naturally drought-tolerant, making them perfect for drier regions. Enjoy their mild, nutty flavor and slightly chewy texture in dishes around the world!" }
      ];
      const containerStyles = {
       fontSize:'25px',
       color:'#f6f6f2',
       fontFamily:'monospace',
       y: yText,
       width:'100%',
       height:'100%'
      };
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`
  };

  return (
    <div style={imagesliderdiv}>
        <div style={sliderText}>{slides[currentIndex].title}</div>
    <div style={sliderStyles}>
   
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <motion.div style={containerStyles}
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
        whileHover={{scale:1.05}}
        >
           <motion.img key={slides[currentIndex].url} animated={{x:100}}src={slides[currentIndex].url} style={{width:'inherit',height:'inherit',borderRadius:'10px'}}/>
        </motion.div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      
    </div>
  );
};

export default ImageSlider;