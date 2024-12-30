import React from "react";
import { useState } from "react";
import "../CuriosityCard/curiositycard.css"
import arrowleftImage from "../../assets/img/arrowleft.png"
import arrowrightImage from "../../assets/img/arrowright.png"

import universeImage from "../../assets/img/universeimage.png";
import presentImage from "../../assets/img/presentimg.png";
import oldStarImage from "../../assets/img/oldstar.png";
import yearGalacticImage from "../../assets/img/yeargalactic.png";
import astronautImage from "../../assets/img/astronauta.png";
import blackHoleImage from "../../assets/img/buraconegro.png";


const CuriosityCard = () => {

    const [currentIndex, setCurrentIndex] = useState(0); 
    const [isSliding, setIsSliding] = useState(false);

    const data = [
        {
            img: universeImage,
            itemtitle: 'O que é o Universo?',
            infoitem: 'O universo é tudo. Ele inclui todo o espaço, e toda a matéria e energia que o espaço contém. Ele inclui até mesmo o próprio tempo e, claro, inclui você. <br></br>A Terra e a Lua são parte do universo, assim como os outros planetas e suas muitas dezenas de luas. Junto com asteroides e cometas, os planetas orbitam o Sol. O Sol é uma entre centenas de bilhões de estrelas na galáxia Via Láctea, e a maioria dessas estrelas tem seus próprios planetas, conhecidos como exoplanetas.',
    
        },
        {
            img: presentImage,
            itemtitle: 'O que vemos está no presente?',
            infoitem:'Tudo o que observamos no espaço já aconteceu no passado, pois a luz leva tempo para percorrer grandes distâncias. De acordo com a teoria da relatividade de Einstein, nada viaja mais rápido que a luz. Como ela não chega a todos os lugares instantaneamente, quanto mais longe for sua origem, mais tempo ela demora para ser observada. Por isso, usamos o conceito de “anos-luz” para medir distâncias no Universo. Quanto mais distante algo está, mais atrasada é a imagem que vemos. Por exemplo, se uma estrela está a 100 anos-luz de distância e vemos sua explosão hoje, ela realmente aconteceu há 100 anos.',
        },
        {
            img: oldStarImage,
            itemtitle: 'Estrela mais velha que Universo?',
            infoitem:'A estrela mais antiga, apelidada de Matusalém, intriga astrônomos. De acordo com medições do Telescópio Hubble, ela pode ser mais velha que o próprio Universo. A estrela HD 140283, ou Matusalém, foi descoberta em 2000 por uma equipe de cientistas da Nasa e da ESA, e está localizada a mais de 190 anos-luz da Terra. Sua idade estimada é de 14,5 bilhões de anos, com uma margem de erro de 800 milhões de anos.Por outro lado, o Universo, tem aproximadamente 13,7 bilhões de anos, com uma margem de erro de 200 milhões de anos. Mesmo considerando essas incertezas, a estrela parece ser mais antiga do que o próprio Big Bang.',
        },
        {
            img: yearGalacticImage,
            itemtitle: 'Ano galático?',
            infoitem:'O ano galático é o tempo necessário para que o Sol complete uma volta em torno do centro da nossa galáxia, um tempo de, aproximadamente, 250 milhões de anos. A Via Láctea é uma galáxia espiral, e o Sistema Solar encontra-se em um dos seus braços.O Sistema Solar orbita o centro de nossa galáxia, pois está preso à atração gravitacional exercida pelo Sol. Estima-se que todo o Sistema Solar realize esse movimento orbital a uma velocidade de, aproximadamente, 828 mil quilômetros por hora. No entanto, essa velocidade é muito pequena perante a nossa galáxia, que tem mais de 100 mil anos-luz de diâmetro.',
        },
        {
            img: astronautImage,
            itemtitle: 'Trajes de astronautas?',
            infoitem:'Roupas espaciais servem para muitas funções. As roupas espaciais de hoje são pressurizadas, têm uma provisão de oxigênio, protegem o astronauta contra o bombardeamento de micrometeoróides enquanto estiverem em uma caminhada espacial, e isolam o astronauta de severas mudanças de temperatura que ocorrem no espaço.',
        },
        {
            img: blackHoleImage,
            itemtitle: 'Buraco Negro?',
            infoitem:'Um buraco negro é uma região do espaço com um campo gravitacional tão intenso que nem mesmo a luz consegue escapar de dentro dele. A intensa gravidade comprime a matéria até que não haja mais espaço entre os átomos. Corpos celestes dessa natureza podem surgir em decorrência da morte de estrelas supermassivas.',
        },   
    ];
    const nextItem = () => {
        if (isSliding) return;
        setIsSliding(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      };
    
      const prevItem = () => {
        if (isSliding) return;
        setIsSliding(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
      };
    
      const handleTransitionEnd = () => {
        setIsSliding(false);
      };
    
      const displayedItems = [
        data[(currentIndex - 1 + data.length) % data.length], 
        data[currentIndex], 
        data[(currentIndex + 1) % data.length], 
      ];
    
      return (
        <div className="carousel">
          <img
            className="arrow-img"
            src={arrowleftImage}
            alt="Voltar"
            onClick={prevItem}
          />
    
          <div
            className={`carousel-items ${isSliding ? "slide" : ""}`}
            onTransitionEnd={handleTransitionEnd}
          >
            {displayedItems.map((item, index) => (
              <div
                key={index}
                className={`item ${isSliding ? "hidden" : ""}`}
              >
                <div className="image-item">
                  <img
                    className="universe-img"
                    src={item.img}
                    alt={item.itemtitle}
                  />
                </div>
                <div className="info">
                  <h4 className="item-title">{item.itemtitle}</h4>
                  <span
                    className="info-item"
                    dangerouslySetInnerHTML={{ __html: item.infoitem }}
                  />
                </div>
              </div>
            ))}
          </div>
    
          <img
            className="arrow-img"
            src={arrowrightImage}
            alt="Avançar"
            onClick={nextItem}
          />
        </div>
      );
    };
    
export default CuriosityCard;