import CustomButton from "../CustomButton";

const Hero = () => {
  // TODO aşağıya kaydırma işlemi yapılacak
  const flyTo = (): void => {
    alert("aşşağıya kayrdır");
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">Özgürlüğü Hisset, Yolculuğa Başla</h1>
        <p className="hero__subtitle text-gray-200">
          Yüksek standartta hizmetle unutulmaz bir yolculuğa hazır mısın?
          <br />
          Araç kiralama deneyimini bir çok seçenekle yaşa, her anını özel kıl,
          keyfini çıkart.
        </p>
        <CustomButton
          title="Arabaları Keşfet"
          designs="mt-10"
          handleClick={flyTo}
        />
      </div>
      <div className="flex justify-center">
        <img className="object-contain" src="/hero.png" />
      </div>
    </div>
  );
};

export default Hero;
