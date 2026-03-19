import { IoIosArrowForward } from "react-icons/io";
function GlassButton({
  title,
  description = "",
  ariaLabel,
  icon: Icon,
  onClick,
  href,
  newTab = false,
  className = ""
}) {
  const baseClassName = `
    group
    flex items-center justify-between w-full
    px-5 py-2.5
    rounded-2xl
    bg-white/10
    backdrop-blur-md
    border border-white/20
    text-white
    font-semibold
    shadow-lg shadow-black/20
    hover:bg-white/20
    hover:-translate-y-0.5
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1d55]
    transition-all duration-300
    active:scale-[0.98]
    ${className}
  `

  const content = (
    <>
      <span className="flex min-w-0 items-center gap-2.5">
        {Icon && (
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/12 border border-white/20">
            <Icon size={16} />
          </span>
        )}
        <span className="min-w-0 text-left">
          <span className="block text-[0.95rem] leading-tight">{title}</span>
          {description && (
            <span className="mt-0.5 block text-[0.72rem] leading-4 font-medium text-white/75">
              {description}
            </span>
          )}
        </span>
      </span>
      <span className="text-base text-white/75 transition-transform duration-300 group-hover:translate-x-1">
        <IoIosArrowForward />
      </span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel || title}
        className={baseClassName}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel || title}
      className={baseClassName}
    >
      {content}
    </button>
  )
}

export default GlassButton
