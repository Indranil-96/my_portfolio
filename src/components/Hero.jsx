// import content
import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  const hireMe = () => {
    window.open(
      "https://wa.me/918436423150?text=Hi Indranil, I’d like to hire you!",
      "_blank",
    );
  };

  return (
    <section id="home" className="overflow-hidden">
      <div className="relative min-h-screen md:h-screen flex flex-col md:flex-row items-center justify-center md:gap-12 lg:gap-20 pt-24 pb-12 md:py-0">
        {/* Background Right Side */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute inset-x-0 bottom-0 h-[20%] sm:h-[25%] md:inset-y-0 md:left-auto md:right-0 md:w-5/12 md:h-full bg-primaryLinear -z-10"
        >
          {/* UPDATED MOBILE CLASSES:
              - Swapped layout so it behaves normally horizontally underneath the top image on mobile viewports.
              - Desktop layout isolates custom writing-modes (`md:[writing-mode:vertical-lr]`) and right-alignment parameters (`md:right-4`).
          */}
          <h1
            className="
              absolute
              top-4
              left-1/2
              -translate-x-1/2
              text-2xl
              sm:text-4xl
              font-bold
              text-[#EAF2FA]/40
              whitespace-nowrap
              z-0

              md:top-1/2
              md:-translate-y-1/2
              md:translate-x-0
              md:left-auto
              md:right-4
              md:[writing-mode:vertical-lr]
              lg:text-6xl
              md:text-[#EAF2FA]
            "
          >
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* Right Image */}
        <div
          data-aos="slide-up"
          className="
            relative
            z-20
            w-full
            md:w-auto
            flex
            justify-center
            items-center
            px-4
            order-1
            md:order-2
          "
        >
          <img
            src={hero.image}
            alt="Hero"
            className="
              w-52
              sm:w-64
              md:w-80
              lg:w-[400px]
              xl:w-[460px]
              h-auto
              object-contain
            "
          />
        </div>

        {/* Left Content */}
        <div
          data-aos="fade-down"
          className="
            relative
            z-20
            w-full
            md:w-1/2
            max-w-xl
            p-6
            sm:p-4
            md:p-4
            text-center
            md:text-left
            order-2
            md:order-1
            mb-10
          "
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {hero.title}
          </h2>

          <div className="mt-4 flex gap-4 justify-center md:justify-start">
            <button
              onClick={hireMe}
              className="btn text-dark_primary hover:bg-dark_primary hover:text-white transition-all ease-in"
            >
              {hero.btnText}
            </button>
            {/* Addational Button for project showcase */}
            <button className="btn text-dark_primary py-4 hover:bg-dark_primary hover:text-white transition-all ease-in">
              Digital Heros
            </button>
          </div>

          {/* Writeups */}
          <div className="mt-8 space-y-6 sm:space-y-8">
            {hero.hero_content.map((item, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center gap-4 text-left ${
                  i === 1 ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                <h3 className="text-3xl sm:text-4xl font-bold shrink-0">
                  {item.count}
                </h3>

                <p className="text-sm sm:text-base leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
