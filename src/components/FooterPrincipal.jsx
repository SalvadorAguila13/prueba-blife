import './styles/FooterPrincipal.css'
const FooterPrincipal = () => {
  return (
    <footer className='container__principal'>
        <article className='footer'>
            <section className='footerSup'>
                <div className='footerSup__text'>
                    <i className='bx bx-send'></i>
                    <h3>AI trained to generate realistic 3D objects</h3>
                </div>
                <div className='footerSup__circule'>
                    <i className='bx bxs-star rotating'></i>
                </div>
            </section>

            <section className='footerInf'>
                <div className='footerInf__info'>
                    <div className='footerInf__infoIcon'><i className='bx bxs-star'></i></div>
                    <div className='footerInf__infoText'>
                        <h3>Style</h3>
                        <p>Choose your style</p>
                    </div>
                </div>

                <div className='footerInf__info'>
                    <div className='footerInf__infoIcon'><i className='bx bx-square'></i></div>
                    <div className='footerInf__infoText'>
                        <h3>Material</h3>
                        <p>Choose material</p>
                    </div>
                </div>

                <div className='footerInf__info'>
                    <div className='footerInf__infoIcon'><i className='bx bx-up-arrow'></i></div>
                    <div className='footerInf__infoText'>
                        <h3>Creavity</h3>
                        <p>High-level</p>
                    </div>
                </div>
                
                <div className='footerInf__info'>
                    <div className='footerInf__infoIcon'><i className='bx bxs-barcode'></i></div>
                    <div className='footerInf__infoText'>
                        <h3>AI model</h3>
                        <p>Midjourney 5.0</p>
                    </div>
                </div>
            </section>
        </article>
    </footer>
  )
}

export default FooterPrincipal