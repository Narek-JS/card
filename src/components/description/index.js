import Container from '../container';
import classes from './index.module.css'

const Description = () => {

    const test_name = 'Nana McDougall'; 

    return (
        <section className={classes.section}>
            <Container>
                <div className={classes.content}>
                    <h1 className={classes.title}>Everything about pineaples and other tropical fruits</h1>
                    <p className={classes.name}>By: {test_name}</p>
                </div>
            </Container>
        </section>
    );
};

export default Description;