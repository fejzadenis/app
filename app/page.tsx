"use client";

import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';

export default function Home() {
  // State to manage the visibility of xiojietongue
  const [isTongueVisible, setIsTongueVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Function to show the tongue when the mouse is down
  const handleMouseDown = () => {
    setIsTongueVisible(true);
  };

  // Function to hide the tongue when the mouse is up
  const handleMouseUp = () => {
    setIsTongueVisible(false);
  };

  const handleIncreaseClickCount = () => {
    setClickCount(clickCount + 1);
  }

  return (
    <main className="flex flex-col">
      <div id="star-container">
      <div id="star-pattern"></div>
      <div id="star-gradient-overlay"></div>
      </div>
      <section className="z-10 flex flex-col items-center lg:h-screen pb-96 lg:pb-96">
      <h1 className="text-6xl lg:text-8xl pt-[4rem] tracking-widest">$XIAOJIE</h1>
      <h2 className="text-3xl lg:text-5xl">CA:</h2>
      <div onClick={handleIncreaseClickCount} onTouchStart={handleMouseDown} onTouchEnd={handleMouseDown} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} className="relative flex place-content-center">
        {isTongueVisible ? (
          <Image
            src="/images/xiojietongue2.png"
            width={600}
            height={200}
            alt="Xioji with tongue"
            id="xiojietongue"
            style={{ display: 'block' }}
            className="cursor-pointer"
          />
        ) : (
          <Image
            src="/images/xiojie2.png"
            width={600}
            height={200}
            alt="Xioji"
            id="xiojie"
            style={{ display: 'block' }}
            className="cursor-pointer"
          />
        )}
          <p className="text-4xl lg:text-6xl flex absolute bottom-2 lg:bottom-[5rem]">Click me!</p>
      </div>
      <div className="flex-col lg:flex-row flex lg:space-x-2 text-4xl "><p>I&apos;ve been clicked:</p><span className="flex space-x-2"><p className="tracking-wide">{clickCount}</p><p>times!</p></span></div>
      <p className="text-2xl lg:text-4xl my-8">Don&apos;t aww me, I&apos;m gangsta 💯</p>
  <p className="text-xl lg:text-2xl my-8">1% supply burn at launch, 2% supply burn at 500k, 5% supply burn at 1 mill, 10% at 2 mill.</p>




<div className="flex space-x-6">
  {/* Use the 'Link' component without wrapping it in an anchor tag */}
  <Link href="https://twitter.com/xiaojiecoin" passHref>
    <Image src="/images/xlogo.png" width={75} height={50} alt="x" className="bg-[#FEFFB9] rounded-full p-3 cursor-pointer"/>
  </Link>
  {/* Use the 'Link' component without wrapping it in an anchor tag */}
  <Link href="https://t.me/xiaojieentry" passHref>
    <Image src="/images/telegramlogo.svg" width={75} height={50} alt="telegram" className="cursor-pointer" />
  </Link>
</div>

      </section>

      <section className="h-screen pt-96 lg:pt-350">
        <h3 className="text-3xl lg:text-5xl pt-8 flex justify-center"></h3>
        <div className="flex-col space-y-4 pt-8 place-items-center flex">
          <div className="flex flex-col lg:flex lg:flex-row lg:space-x-2 space-y-4 lg:space-y-0">
          <Image src="/images/xiojie3.jpg" width={300} height={400} alt="Xiaojie" className="hover:scale-110 transition-all" />
          <Image src="/images/xiojie4.jpg" width={300} height={400} alt="Xiaojie" className="hover:scale-110 transition-all"/>
          <Image src="/images/xiojie7.jpg" width={300} height={400} alt="Xiaojie" className="hover:scale-110 transition-all"/>
          </div>
          <div className="flex flex-col lg:flex lg:flex-row lg:space-x-2 space-y-4 lg:space-y-0">
          <Image src="/images/xiojie5.jpg" width={300} height={400} alt="Xiaojie" className="hover:scale-110 transition-all"/>
          <Image src="/images/xiojie6.jpg" width={300} height={400} alt="Xiaojie" className="hover:scale-110 transition-all"/>
          <Image src="/images/xiojie8.jpg" width={300} height={400} alt="Xiaojie" className="hover:scale-110 transition-all"/>
          </div>
        </div>
      </section>
    </main>
  );
}
