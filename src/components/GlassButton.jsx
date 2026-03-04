function GlassButton({
  title,
  icon: Icon,
  onClick,
  href,
  newTab = false,
  className = ""
}) {

  const handleClick = () => {
    if (href) {
      if (newTab) {
        window.open(href, "_blank")
      } else {
        window.location.href = href
      }
    }

    if (onClick) {
      onClick()
    }
  }

  return (
    <button
    onClick={handleClick}
    className={`
        flex items-center justify-center gap-2 w-full
        px-8 py-3
        rounded-2xl
        bg-white/10
        backdrop-blur-md
        border border-white/20
        text-white
        font-semibold
        shadow-lg
        hover:bg-white/20
        transition-all duration-300
        active:scale-95
        ${className}
    `}
    >
      {Icon && <Icon size={18} />}
      {title}
    </button>
  )
}

export default GlassButton