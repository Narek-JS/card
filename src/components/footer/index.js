import { LikeIcon } from '../../assets/svgs/LikeIcon';
import { OtherIcon } from '../../assets/svgs/OtherIcon';
import Container from '../container';
import classes from './index.module.css'

const Footer = () => {

    return (
        <footer className={classes.footer}>
            <Container>
                <div className={classes.contnet}>
                    <div className={classes.moreIcon}>
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className={classes.wrapperLike}>
                        <LikeIcon />
                        <OtherIcon />
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;