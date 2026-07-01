// import content
import { useEffect } from "react";
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center pt-16 md:pt-0">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute inset-x-0 bottom-0 h-[35%] md:h-full md:w-4/12 md:left-auto md:right-0 md:top-0 bg-primaryLinear -z-10"
        >
          <h1 className="absolute left-6 top-6 md:top-[30%] md:right-[-15%] md:left-auto md:rotate-90 text-[#EAF2FA] text-3xl sm:text-4xl md:text-5xl">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div
          className="w-full max-w-xl pb-16 px-4 py-4 sm:px-6 pt-5 ml-8 text-center md:text-left"
          data-aos="fade-down"
        >
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-center md:justify-end">
            <button className="btn">{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-6 sm:gap-8 mt-8 sm:mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center gap-5 w-full max-w-md mx-auto md:mx-0 ${
                  i === 1
                    ? "md:flex-row-reverse md:text-right flex-row text-left"
                    : ""
                }`}
              >
                <h3 className="shrink-0">{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        {/* sm:h-80 max-w-[30rem] sm:max-w-[30rem] md:max-w-none md:h-[37rem] */}
        <div className="w-72 max-w-[22rem] sm:max-w-[24rem] md:max-w-none md:h-[37rem] h-72 sm:h-80 flex justify-end items-center">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-auto w-auto object-contain md:object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
