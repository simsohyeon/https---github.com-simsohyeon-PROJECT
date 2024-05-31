// src/Main.js
import React from 'react';
import Slideshow from './Slideshow';
import Gallery from './Gallery';
import Typewriter from 'typewriter-effect';



const Main = () => {
  return (
    <main>
      <section id="Item">
        <h2>Best Item</h2>
        <Slideshow />
      </section>
      <section id="About">
        <h2>About Us</h2>
        <div>
        <Typewriter options={{ strings: ['당신의 아름다움이 만나는 곳.<br/><br/><br/>독특한 스타일과 트렌디한 품질로 당신을 위한 뷰티 마켓']
                              ,autoStart: true
                              ,loop: true,}}
                    onInit={(typewriter) => { typewriter
                                .typeString('당신의 아름다움이 만나는 곳.<br/><br/><br/>독특한 스타일과 트렌디한 품질로 당신을 위한 뷰티 마켓')
                                .pauseFor(2500)
                                .deleteAll()
                                .start(); }}
          />
        </div>
      </section>
      <section id="Instagram">
        <h2>Instagram</h2>
        <p>Follow us!   @oktoslo
        </p>
        <Gallery />
      </section>
    </main>
  );
};

export default Main;