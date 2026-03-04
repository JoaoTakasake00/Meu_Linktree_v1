import Grainient from "@/components/Grainient"
import fotoPerfil from "@/assets/imagens/foto_eu_2.jpeg"
import CardPerfil from "@/components/CardPerfil"
import GlassButton from "@/components/GlassButton"

import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa"
import { MdWork, MdEmail } from "react-icons/md"
import { IoLogoWhatsapp } from "react-icons/io"

function Home() {

  const links = [
    {
      title: "Currículo",
      href: "/CV_Joao_victor_takasake_5.pdf",
      icon: FaFilePdf,
    },
    {
      title: "Portfólio",
      href: "https://portifolio-joao-takasake.vercel.app/",
      icon: MdWork,
    },
    {
      title: "Whatsapp",
      href: "https://api.whatsapp.com/send/?phone=5511970820335",
      icon: IoLogoWhatsapp,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/joao-victor-takasake/",
      icon: FaLinkedin,
    },
    {
      title: "GitHub",
      href: "https://github.com/JoaoTakasake00",
      icon: FaGithub,
    },
    {
      title: "Email",
      href: "mailto:jv2takasake@gmail.com",
      icon: MdEmail,
    },
  ]

  return (
    <section className="w-full min-h-screen bg-[var(--color-background)] flex items-center justify-center px-4 py-8">

      {/* Container principal */}
      <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl">

        {/* Fundo animado */}
        <Grainient
          className="absolute inset-0"
          color1="#020764"
          color2="#0059ff"
          color3="#020764"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col items-center gap-6 p-6 sm:p-8">

          <CardPerfil
            fotoPerfil={fotoPerfil}
            nome="João Victor Takasake"
            descricao="Desenvolvedor Full-Stack"
          />

          <div className="flex flex-col gap-4 w-full">
            {links.map((item, index) => (
              <GlassButton
                key={index}
                title={item.title}
                href={item.href}
                newTab
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home