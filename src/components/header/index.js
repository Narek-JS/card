import Container from '../container';
import classes from './index.module.css'

const Header = () => {

    const test_views = 1237;
    const test_day = 1; 

    return (
        <header className={classes.header}>
            <div className={classes.headerBg}>
            <div className={classes.headerBgColor}/>
                <Container>
                    <div className={classes.content}>
                        <img
                            src='https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik'
                            className={classes.userImage}
                        />
                        <p className={classes.aboutViews}>
                            <span className={classes.views}>{test_views} views</span>
                            <span className={classes.day}>{test_day} day</span>
                        </p>
                    </div>
                </Container>
            </div>
        </header>
    );
};

export default Header;