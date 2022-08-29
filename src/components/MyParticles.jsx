import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const MyParticles = () => {

    const particlesInit = useCallback(async (engine) => {
        //console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        //console.log(container);
    }, []);

    return ( 
        <div className="MyParticles" >
            <Particles 
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
             options={{
                particles: {
                    number: {
                      value: 20,
                      density: {
                        enable: true,
                        value_area: 800
                      }
                    },
                    color: {
                      value: '#43a5fa'
                    },
                    shape: {
                      type: 'circle',
                      stroke: {
                        width: 0,
                        color: '#ff0000'
                      },
                      polygon: {
                        nb_sides: 5
                      },
                      image: {
                        src: '',
                        width: 5,
                        height: 5
                      }
                    },
                    opacity: {
                      value: 1,
                      random: false,
                      anim: {
                        enable: false,
                        speed: 2,
                        opacity_min: 0,
                        sync: false
                      }
                    },
                    size: {
                      value: 1,
                      random: false,
                      anim: {
                        enable: false,
                        speed: 20,
                        size_min: 0,
                        sync: false
                      }
                    },
                    line_linked: {
                      enable: true,
                      distance: 100,
                      color: '#43a5fa',
                      opacity: 1,
                      width: 1
                    },
                    move: {
                      enable: true,
                      speed: 2,
                      direction: 'none',
                      random: false,
                      straight: false,
                      out_mode: 'out',
                      bounce: false,
                      attract: {
                        enable: false,
                        rotateX: 3000,
                        rotateY: 3000
                      }
                    },
                    array: []
                  },
                  interactivity: {
                    detect_on: 'canvas',
                    events: {
                      onhover: {
                        enable: true,
                        mode: 'grab'
                      },
                      onclick: {
                        enable: true,
                        mode: 'repulse'
                      },
                      resize: true
                    },
                    modes: {
                      grab:{
                        distance: 100,
                        line_linked:{
                          opacity: 1
                        }
                      },
                      bubble:{
                        distance: 200,
                        size: 80,
                        duration: 0.4
                      },
                      repulse:{
                        distance: 200,
                        duration: 0.4
                      },
                      push:{
                        particles_nb: 4
                      },
                      remove:{
                        particles_nb: 2
                      }
                    },
                    mouse:{}
                  },
                  retina_detect: false,
                  fn: {
                    interact: {},
                    modes: {},
                    vendors:{}
                  },
                  tmp: {}
             }}
            />
        </div>

    )
}

export default MyParticles;