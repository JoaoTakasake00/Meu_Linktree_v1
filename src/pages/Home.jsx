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
      description: "Baixar PDF completo",
      href: "/CV_Joao_victor_takasake_5.pdf",
      icon: FaFilePdf,
    },
    {
      title: "Portfólio",
      description: "Projetos e estudos de caso",
      href: "https://portifolio-joao-takasake.vercel.app/",
      icon: MdWork,
    },
    {
      title: "Whatsapp",
      description: "Contato rápido",
      href: "https://api.whatsapp.com/send/?phone=5511970820335",
      icon: IoLogoWhatsapp,
    },
    {
      title: "LinkedIn",
      description: "Experiência profissional",
      href: "https://www.linkedin.com/in/joao-victor-takasake/",
      icon: FaLinkedin,
    },
    {
      title: "GitHub",
      description: "Repositórios e contribuições",
      href: "https://github.com/JoaoTakasake00",
      icon: FaGithub,
    },
    {
      title: "Email",
      description: "Fale comigo por e-mail",
      href: "mailto:jv2takasake@gmail.com",
      icon: MdEmail,
    },
  ]

  return (
    <section className="relative w-screen h-[100dvh] overflow-hidden bg-[var(--color-background)] flex items-center justify-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(0,89,255,0.24),transparent_35%),radial-gradient(circle_at_82%_86%,rgba(2,7,100,0.42),transparent_42%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute left-[-120px] top-[18%] h-72 w-72 rounded-full bg-[var(--color-primary)]/30 blur-[120px]" />
        <div className="absolute right-[-120px] bottom-[14%] h-72 w-72 rounded-full bg-[var(--color-primary)]/30 blur-[120px]" />
      </div>
      
      <div className="relative z-10 w-[calc(100vw-1.25rem)] max-w-sm rounded-3xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/10">
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

        <div className="relative z-10 flex flex-col items-center gap-3.5 p-4 sm:p-5">
          <CardPerfil
            fotoPerfil={fotoPerfil}
            nome="João Victor Takasake"
            descricao="Desenvolvedor Full-Stack"
          />

          <div className="w-full rounded-2xl border border-white/15 bg-black/15 px-4 py-2 text-center backdrop-blur-sm">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/75">
              Vamos construir algo juntos
            </p>
            <p className="mt-0.5 text-[0.82rem] text-white/90">
              Escolha o melhor canal para falar comigo
            </p>
          </div>

          <div className="flex w-full flex-col gap-2.5">
            {links.map((item) => (
              <GlassButton
                key={item.title}
                title={item.title}
                description={item.description}
                href={item.href}
                newTab
                icon={item.icon}
                ariaLabel={`Abrir ${item.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
