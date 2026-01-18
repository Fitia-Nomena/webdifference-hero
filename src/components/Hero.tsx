import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 bg-[var(--color-dark)] text-white">
            <div className="max-h-6xl w-full grid md:grid-cols-2 gap-12 items-center">
                {/* LEFT CONTENT */}
                <div className="space-y-6">
                    {/* BUBBLE */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur">
                    <Image
                        src="/images/logo-bulle.png"
                        alt="Bulle"
                        width={20}
                        height={20}
                    />
                    <span className="text-sm tracking-wide">
                        CREER UN SITE WEB VRAIMENT UNIQUE
                    </span>
                    </div>

                    {/* HEADLINE */}
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Votre site doit donner envie de rester.
                        <br />
                        pas de revenir en arrière.
                    </h1>

                    {/* SUBHEADLINE */}
                    <p className="max-w-xl text-[var---color-muted)]">
                        Design moderne, SEO solide. Suivi complet : on construit un site qui retient vos visiteurs et vous apporte des résultats.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <button className="px-6 py-3 rounded-x1 bg-[var(--color-primary)] font-medium transition hover:scale-[1.02]">
                            Prendre RDV
                        </button>

                        <button className="flex items-center gap-2 text-white/80 hover:text-white transition">
                        Découvrir nos projets
                        <FiArrowRight /></button>
                    </div>
                </div>

                {/* RIGHT DECOR */}
                <div className="relative hidden md:block">
                    <Image
                        src="/images/un-ptit-click.png"
                        alt="Un ptit click"
                        width={300}
                        height={300}
                        className="absolute -top-10-right-10"
                        />
                </div>
            </div>
        </section>
    );
}