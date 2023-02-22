import { Link } from "./components/Link";
import { LinkProps } from "./ts/link";

const links: LinkProps[] = [
  {
    title: "Github",
    url: "https://github.com/isacgpaz",
    description: "Some projects I developed",
  },
  {
    title: "Linkedin",
    url: "https://linkedin.com/in/isacgpaz",
    description: "Legal publications about technology",
  },
  {
    title: "Email",
    url: "mailto:isacgomesp@gmail.com",
    description: "Contact me",
  },
];

export function App() {
  return (
    <div className="bg-gradient-to-t from-gray-900 to-emerald-900 min-h-screen min-w-full">
      <div className="max-w-md mx-auto flex flex-col items-center">
        <header className="pt-12 text-center text-white">
          <img
            src="https://github.com/isacgpaz.png"
            alt="Foto de Isac Paz"
            className="rounded-full border-emerald-600 border-2 w-28 h-28"
          />

          <span className="block mt-3 text-lg font-medium">Isac Paz</span>

          <span className="block text-xs opacity-60">@isacgpaz</span>
        </header>

        <main className="text-white text-center mt-6">
          <h1 className="text-lg font-medium">
            💻 Brazilian Front-End developer
          </h1>

          <div className="text-sm mt-4 flex flex-col">
            <p>🚀 Enthusiastic about technology</p>
            <p>🤓 I love to study and develop efficient solutions</p>
            <p>🎯 Focused on evolving</p>
          </div>

          <div className="mt-8 flex flex-col gap-3">
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
