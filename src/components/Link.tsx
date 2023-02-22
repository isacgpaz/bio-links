import { LinkProps } from "../ts/link";

export function Link({ title, url, description }: LinkProps) {
  return (
    <a
      href={url}
      className={`flex flex-col text-white bg-emerald-700 rounded-md py-3 hover:bg-emerald-800 transition-colors`}
    >
      <span className="">{title}</span>

      {description && <span className="text-sm opacity-70">{description}</span>}
    </a>
  );
}
