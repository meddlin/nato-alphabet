"use client"

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';

export default function Home() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");

  // const debounce = (func: any, wait = 1500) => {
  //   let timer: any;

  //   return (...args:any[]) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => { func.apply(this, args); }, wait);
  //   }
  // };

  const translate = (text: string) => {
    console.log(`Translating ${text}`);

    const newText = text.split('').map((letter) => {
      switch(letter.toLowerCase()) {
        case 'a':
          return 'Alpha';
        case 'b':
          return 'Bravo';
        case 'c':
          return 'Charlie';
        case 'd':
          return 'Delta';
        case 'e':
          return 'Echo';
        case 'f':
          return 'Foxtrot';
        case 'g':
          return 'Golf';
        case 'h':
          return 'Hotel';
        case 'i':
          return 'India';
        case 'j':
          return 'Juliet';
        case 'k':
          return 'Kilo';
        case 'l':
          return 'Lima';
        case 'm':
          return 'Mike';
        case 'n':
          return 'November';
        case 'o':
          return 'Oscar';
        case 'p':
          return 'Papa';
        case 'q':
          return 'Quebec';
        case 'r':
          return 'Romeo';
        case 's':
          return 'Sierra';
        case 't':
          return 'Tango';
        case 'u':
          return 'Uniform';
        case 'v':
          return 'Victor';
        case 'w':
          return 'Whiskey';
        case 'x':
          return 'X-ray';
        case 'y':
          return 'Yankee';
        case 'z':
          return 'Zulu';
        case ' ':
          return ' ';
        default:
          return '';
      }
    });

    console.log(`Translated ${newText}`);
    return newText.join(' ');
  };

  useEffect(() => {
    // console.log(text);
    // debounce(setText(text));
    const newMessage = translate(text);

    setText(text);
    setTranslated(newMessage);
  }, [text]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>NATO Alphabet Translator</h1>

      <Input type="text" onChange={(e) => setText(e.target.value)} value={text} />

      <div>
        <h3>Updated text goes here</h3>
        <p>{text}</p>
        <p>{translated}</p>
      </div>

      <p>
        See more: 
        <a href="https://en.wikipedia.org/wiki/NATO_phonetic_alphabet">
        https://en.wikipedia.org/wiki/NATO_phonetic_alphabet</a>
      </p>
    </main>
  )
}
