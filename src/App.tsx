import { useEffect, useState } from "react";
import { FiShare2 } from "react-icons/fi";

import { Link } from "./components/Link";
import { LinkProps } from "./ts/link";

const links: LinkProps[] = [
  {
    title: "WhatsApp",
    url: "https://api.whatsapp.com/send?phone=5588981294728",
    description: "Quer falar comigo de forma rápida?",
  },
  {
    title: "Github",
    url: "https://github.com/isacgpaz",
    description: "Alguns projetos que desenvolvi",
  },
  {
    title: "Linkedin",
    url: "https://linkedin.com/in/isacgpaz",
    description: "Alguns posts legais (ou não) sobre tecnologia",
  },
  {
    title: "E-mail",
    url: "mailto:isacgomesp@gmail.com",
    description: "Entre em contato comigo",
  },
  {
    title: "Currículo",
    url: "/resume.pdf",
    description: "Apresentação, formação, cursos e mais",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/isacgpaz",
  },
];

const slideTexts = [
  "🚀 Entusiasta por tecnologia",
  "🤓 Amo estudar e desenvolver coisas",
  "🎯 Foco na evolução",
];

export function App() {
  const [currentSlideText, setCurrentSlideText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideText((currentSlideText) =>
        currentSlideText === slideTexts.length - 1 ? 0 : currentSlideText + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlideText]);

  return (
    <div className="bg-gradient-to-t from-gray-900 to-emerald-900 min-h-screen min-w-full pb-16">
      <div className="max-w-md mx-auto flex flex-col items-center">
        <header className="pt-12 text-center text-white relative w-full">
          <img
            src="https://github.com/isacgpaz.png"
            alt="Foto de Isac Paz"
            className="rounded-full border-emerald-600 border-4 w-28 h-28 mx-auto"
          />
          <span className="block mt-3 text-2xl font-medium">Isac Paz</span>
          <span className="block text-sm opacity-60">@isacgpaz</span>

          <button
            className="absolute right-5 top-5 text-2xl text-zinc-100 bg-emerald-800 p-2 rounded-full"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  text: "Olá! Meu nome é Isac! Sou desenvolvedor Front End. Gostaria de saber mais sobre meus serviços?",
                  url: import.meta.env.VITE_APP_SHORT_URL,
                });
              }
            }}
          >
            <FiShare2 />
          </button>
        </header>

        <main className="text-white text-center mt-6 w-full">
          <h1 className="text-xl font-medium">💻 Desenvolvedor Front End</h1>

          <span className="block text-sm opacity-60 max-w-xs text-center mx-auto mt-2">
            Sites, aplicações web, desenvolvimento mobile, landing pages e MAIS!
          </span>

          <div className="text-md mt-4 flex flex-col relative">
            <p className="transition-all animate-wiggle absolute w-max">
              {slideTexts[currentSlideText]}
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-3 px-6">
            {links.map((link) => (
              <Link
                title={link.title}
                url={link.url}
                description={link.description}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
