import Header from "./header";
import Description from "./description";
import classes from './card.module.css';
import Footer from "./footer";
import Progress from "./progress";

const Card = () => {

    return (
        <div className={classes.card}>
            <Header />
            <Description />
            <Progress />
            <Footer />
        </div>
    );
};

export default Card;