import Container from '../container';
import classes from './index.module.css'

const Progress = () => {

    const test_precent = 64;

    return (
        <section className={classes.section}>
            <Container>
                <div className={classes.content}>
                    <p className={classes.precent}>Progress: <span>{test_precent}%</span></p>
                    <div className={classes.precentLine}>
                        <p style={{ width: test_precent + '%' }} />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Progress;