import { useRef, useState } from "react";
import './itembox.scss';
import '../contact/contact.scss';
import { motion, useInView } from "framer-motion";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  export default function Product(props) {

        const variantName = props.variantName;
        const variantSource = props.variantSource;
        const [rotate,setRotate] = useState(false);
    return (<>
        <motion.div className="textContainer" variants={variants}
         whileHover={{ x:50,y:50,scale: 1.5,zIndex:2 }}
         whileTap={{ scale: 0.9 }}
        onClick={()=>setRotate(!rotate)}
        >
       
        <motion.div className="item" variants={variants}>
        <motion.div 
    className="rounded-square" 
    >
         <Card variant="outlined" sx={{ width: 320 }}>
        <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={variantSource}
            srcSet={variantSource}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">
          <Link href="#multiple-actions" overlay underline="none">
            Orange Fruit
          </Link>
        </Typography>
        <Typography level="body-sm">
          <Link href="#multiple-actions">India</Link>
        </Typography>
      </CardContent>
      <CardOverflow variant="soft">
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body-xs">

          The orange, a juicy citrus fruit, is a nutritional powerhouse. It's round and plump, with a vibrant orange rind that's both bumpy and a bit glossy 
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
        
        </motion.div>
    </motion.div>
   </motion.div>
   </>
    );
  }