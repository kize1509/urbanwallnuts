import "../styles/components/Hero.scss";
import walnut from "../assets/wallnut-sticker.png";
function Hero() {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <h1 className='hero-title'>
          <span>Urban Wallnuts</span>
        </h1>
        <p className='hero-subtitle'>Wallnuts for your walls</p>
        <div className='link-button'>
          <img src={walnut} alt='arrow' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
