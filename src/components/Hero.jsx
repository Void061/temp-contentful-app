import heroImg from '../assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae
            sit eveniet rerum impedit, earum distinctio, est laboriosam sed in
            accusantium modi. Iste similique in doloribus fuga fugit nobis
            earum.
          </p>
        </div>
        <div className="img-container">
          <img className="img" src={heroImg} alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
