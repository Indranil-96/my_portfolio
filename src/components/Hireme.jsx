import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-4 sm:px-5 pt-14 pb-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse gap-6 md:gap-8">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="w-full max-w-sm object-contain hidden md:block"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="w-full max-w-sm object-contain md:hidden"
          />
          <div
            data-aos="fade-left"
            className="w-full max-w-sm border-2 border-dark_primary p-6 shadow-sm rounded-xl rounded-br-[8rem] md:min-w-[22rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white">
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
