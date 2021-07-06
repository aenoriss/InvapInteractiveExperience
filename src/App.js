import styles from './App.module.css';
import React, { useState } from 'react';
import { Button, CardContent } from '@material-ui/core';
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import RenderBox from "./Components/RenderBox.js";
import SimpleModal from "./Components/modal"

function App() {
  const alternatives = {
    energy: {
      title: "Energia",
      body: "La colonización del espacio sera alimentada por nuevas tecnologias que nos permitiran producir energia de manera limpia y segura, brindando mayor autonomia en la exploración del cosmos.",
      header: "Iluminando el cosmos",
      device: "Reactor Antu",
      text: "Los Reactores Antu producen grandes cantidades de energia a traves del proceso de fisión nuclear. Esto los vuelve mas eficientes y seguros que las alternativas convencionales. Su diminuto tamaño permite implementarlo en naves y estaciones espaciales de pequeña envergadura. El mantenimiento requequerido es infimo por lo que incrementa ampliamente la autonomia del viaje estelar. ",
    },
    transport: {
      title: "Transporte",
      body: "El espacio siempre ha cautivado la imaginación humana. Lo que antes era un sueño hoy es posible. Descubri como INVAP te permite ir a donde nadie se atrevio.",
      header: "Desafiando la ultima frontera.",
      device: "Patoruzu",
      text: "Nuestro proceso de manufactura hibrido combina la producción terrestre de modulos altamente complejos con el avanzadas tecnicas de ensamblaje en orbita lunar. Esto nos permite ofrecer costos insuperables, posicionandonos como uno de los principalescomo uno de los principales productores de naves de carga interestelar en el mundo.",

    },
    habitat: {
      title: "Habitat",
      body: "Cuando pensamos en el espacio solemos imaginarlo como un lugar frio y desolado. Conoce como INVAP esta cambiando esta realidad, llevando La Tierra a los colonos mas distantes.",
      header: "Llevando la tierra al espacio",
      device: "Elmapu",
      text: "Los Domos Ecologicos Elmapu representan el pinaculo de la ingenieria en terraformación. Dentro de ellos un ecosistema controlado imita las condiciones de vida en la tierra y permite a los colonos disfrutas de un estandar de vida elevado en lso confines del sistema solar. ",

    },
    communication: {
      title: "Comunicación",
      body: "El universo se ha convertido en un sistema interconectado e INVAP se encuentra en el centro de este nuevo paradigma, permitiendo la transmisión casi inmediata de información entre los puntos mas remotos de la galaxia.",
      header: "Conectando las estrellas",
      device: "MAFALDA II",
      text: "El Satelite de Comunicación de Alta Frecuencia Mafalda II se ha convertido en el estandar para la transmisión en el espacio. Orbitando en las proximidades de las principales colonias humanas recibe datos por radiofrecuencia y los retransmite mediante un complejo proceso de entrelazamiento cuantico que supera las limitaciones que impone la velocidad de la luz y permite el desarrollo de la Internet Universal",

    },
  }

  const [showVideo, setshowVideo] = useState(1);
  const [description, setDescription] = useState(alternatives["habitat"]);

  function startVideo() {
    setshowVideo(2);
    console.log("Show Video!", showVideo);
  }

  function videoEnded() {
    console.log("FINISHED");

    if(showVideo == 2){
      setshowVideo(3);
    } else {
      setshowVideo(5);
      }
    }

  const buttonStyle = {
    backgroundColor: "white",
    color: "black",
    font: "20px Garamond , sans-serif"
  }



  return (
    <div className={styles.container}>
      {showVideo == 1 && <div className={styles.headerr}>
        <div className={styles.videoContainer} >
          <video src="earthbackground.mp4" width="100%" height="100%" preload="auto" autoplay="autoplay" loop="true" />
        </div>

        <motion.div

          className={styles.invapTitle}

          initial={{
            y: -100,
            opacity: 0,
          }}

          animate={{
            y: 0,
            opacity: 1,
          }}

          transition={{ duration: 2, delay: 5 }}>

          <img className={styles.lul} src="invap.svg" width="500" height="300" />

          <motion.div
            className={styles.invapTitle}

            initial={{
              x: 100,
              opacity: 0,
            }}

            animate={{
              x: 0,
              opacity: 1,
            }}

            transition={{ duration: 2, delay: 7 }}>

            <Button variant="contained" size="large" color="primary" onClick={startVideo} style={buttonStyle} >
              Sumate al futuro
            </Button>

          </motion.div>
        </motion.div>

        <Button className={styles.satelite}>
          <AnimatePresence>
            <motion.img src="SAOCOM.gif" width="500" height="300"
              initial={{
                x: 0,
                y: -300,
              }}

              animate={{
                x: -600,
                y: 0,
              }}
              transition={{ duration: 6, delay: 1 }}
              exit={{ x: -300, opacity: 0 }}
            />
          </AnimatePresence>
        </Button>

      </div>}

      {showVideo == 2 && <div className={styles.videoContainer}>
        <video id="earthVideo" src="intro.mp4" width="100%" height="100%" preload="auto" autoplay="autoplay" onEnded={videoEnded} />
      </div>}


      {showVideo == 3 && <div className={styles.menu}>

        <div className={styles.videoContainer} >
          <img src="spacexbackground.png" width="100%" height="100%" preload="auto" autoplay="autoplay" loop="true" />
        </div>


        <Button>
          <div>
            <img src="InvapTitle.png" width="30%" className={styles.titlee} />
          </div>
        </Button>

        <div className={styles.sceneContainer}>
          <Button>
            <motion.div className={styles.sceneCard}
              initial={{
                y: 150,
                opacity: 0,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{ duration: 2, delay: 2 }}

              onMouseEnter={() => setDescription(alternatives["habitat"])}

              onClick={() => setshowVideo(4)}

              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
            >

              <video className={styles.videoCircle} src="habitat.mp4" preload="auto" autoPlay="true" loop="true" />
            </motion.div>
          </Button>

          <Button >
            <motion.div className={styles.sceneCard}
              initial={{
                y: 150,
                opacity: 0,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{ duration: 2, delay: 3 }}

              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}

              onMouseEnter={() => setDescription(alternatives["transport"])}

              onClick={() => setshowVideo(4)}


            >
              <video className={styles.videoCircle} src="transporte.mp4" preload="auto" autoPlay="true" loop="true" />
            </motion.div>
          </Button>

          <Button>
            <motion.div className={styles.sceneCard}
              initial={{
                y: 150,
                opacity: 0,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{ duration: 2, delay: 4 }}

              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}

              onMouseEnter={() => setDescription(alternatives["communication"])}

              onClick={() => setshowVideo(4)}

            >

              <video className={styles.videoCircle} src="comunicacion.mp4" preload="auto" autoPlay="true" loop="true" />
            </motion.div>
          </Button>

          <Button>
            <motion.div className={styles.sceneCardFirst}
              initial={{
                y: 150,
                opacity: 0,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}

              transition={{ duration: 2, delay: 5 }}

              onMouseEnter={() => setDescription(alternatives["energy"])}

              onClick={() => setshowVideo(4)}

            >
              <video className={styles.videoCircle} src="energia.mp4" preload="auto" autoPlay="true" loop="true" />
            </motion.div>
          </Button>
        </div>

        <div className={styles.description}>
          <Button className={styles.spaceshipButton}><img className={styles.spaceship} src="spacexship.gif" /></Button>
          <Button>
            <motion.div className={styles.descrBox}

              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}



              transition={{ duration: 2, delay: 6 }}

            >
              <h1 className={styles.descrTitle}>{description.title}</h1>
              <p>{description.body}</p>
            </motion.div>
          </Button>
        </div>
      </div>}


      {showVideo == 4 && <div className={styles.videoContainer}>
        {description.title == "Comunicación" && <video id="commVideo" src="commVideo.mp4" width="100%" height="100%" preload="auto" autoplay="autoplay" onEnded={videoEnded} />}
        {description.title == "Habitat" && <video id="habitatVideo" src="habitatVideo.mp4" width="100%" height="100%" preload="auto" autoplay="autoplay" onEnded={videoEnded} />}
        {description.title == "Transporte" && <video id="transVideo" src="transVideo.mp4" width="100%" height="100%" preload="auto" autoplay="autoplay" onEnded={videoEnded} />}
        {description.title == "Energia" && <video id="enerVideo" src="enerVideo.mp4" width="100%" height="100%" preload="auto" autoplay="autoplay" onEnded={videoEnded} />}
      </div>}



      {showVideo == 5 && <div className={styles.singleView}>
        <div className={styles.videoContainer} >
          <img src="marsBackground2.png" width="100%" height="100%" preload="auto" autoplay="autoplay" loop="true"  />
        </div>

        <div>
          <Button><motion.img onClick = {() => {setshowVideo(3)}} src="InvapTitle2.png" className={styles.videoTitle} /> </Button>
        </div>
        <Button><motion.div className={styles.typewriter}
          transition={{ duration: 2, delay: 3 }}
          >
          <h1>{description.header}</h1>
        </motion.div></Button>
        <div className={styles.display}>
          <Button> <div className={styles.renderContainer}>
            <RenderBox className={styles.model} />
          </div></Button>
          <motion.div className={styles.modelDescription}
            initial={{
              y: 150,
              opacity: 0,
            }}

            animate={{
              opacity: 1,
              y: 0,
              
            }
          }

          transition={{ duration: 2, delay: 3 }}
          >
            <h1 className={styles.modelTitle}>{description.device}</h1>
            <p className={styles.modelText}>
              {description.text}
            </p>

            <SimpleModal />
          </motion.div>
        </div>

      </div>}
    </div>
  )


}

export default App;

