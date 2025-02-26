import { RiseLoader } from 'react-spinners'
import styles from './loading.module.scss'
import loadingBG from '../../../public/images/loadingBG.png'
import { useEffect } from 'react';


const Loading = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component is mounted
    }, []);

    const LoadingBGStyle = {
        backgroundImage: `url(${loadingBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>

            <section className={`${styles.loading}`} style={LoadingBGStyle}>
                <RiseLoader
                    color="#fff"
                    size={10}
                />
                <h4 className='text-white'>Please Wait...</h4>

            </section>

        </>
    )
}

export default Loading