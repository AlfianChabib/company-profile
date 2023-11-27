import Button from "../components/Button";
import Header from "../components/Header";
import HeroSwiper from "../components/HeroSwiper";

export default function Home() {
  return (
    <section>
      <Header />
      <main id="home" className="flex relative w-full justify-center">
        {/* swiper */}
        <div className="flex justify-center absolute w-full h-full -z-0">
          <HeroSwiper />
        </div>

        {/* content */}
        <div className="content flex flex-col w-2/3 pr-60 pl-10 h-full justify-center gap-6 z-10 whitespace-pre-wrap text-light">
          <h3 className="font-bold text-4xl">Melampaui Impian Terliar Anda</h3>
          <h2 className="font-extrabold text-6xl">
            Mewujudkan Apa Yang Anda Butuhkan Dengan Cepat.
          </h2>
          <p className="md:pr-40 pr-0 font-semibold">
            Setiap proses pengerjaan di tangani oleh team professional internal
            kami, yang memiliki pengalaman lebuh dari sepulauh tahun dibidang
            pengembangan perangkat digital
          </p>
          <a href="#about" className="flex">
            <Button text="Get Started" width="160" height="40" theme="light" />
          </a>
        </div>
        <div className="flex w-1/3">
          <div className="w-full"></div>
        </div>
      </main>
    </section>
  );
}
