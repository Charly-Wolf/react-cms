import heroImg from '../assets/hero2.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            numquam veniam sint incidunt sapiente earum? Mollitia vero
            perferendis reprehenderit. A ducimus fuga, eum non ex saepe porro
            natus harum culpa!s
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="proud coder" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
