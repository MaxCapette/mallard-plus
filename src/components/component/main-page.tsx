/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { Button } from "@/components/ui/button";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
import ContactPage from "../contact/contact"

export function MainPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary/90 text-primary-foreground py-4 px-6 sticky top-0 z-50  backdrop-blur flex items-center justify-between">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          
          <img src="/logo.png" width="40" height="40" alt="Logo" />
          <span className="text-xl font-bold px-4">Mallard Plus</span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Acceuil
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            À Propos
          </Link>
          <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Services
          </Link>
          <Link href="#references" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Références
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
          
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="default" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-full max-w-xs  p-6 backgroundCustom"
            side="right"
          >
            <div className="flex flex-col gap-6">
              <SheetClose asChild>
                <Link
                  className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  href="#about"
                >
                   À propos
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  href="#services"
                >
                  Services
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  href="#references"
                >
                  Références
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  href="#contact"
                >
                  Contact
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-secondary to-primary w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Optimiser votre entreprise avec Mallard Plus
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Mallard Plus, votre partenaire de confiance pour la gestion et les systèmes informatiques.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Conseil en gestion et en informatique
                  </div>
                  <p className="text-muted-foreground md:text-xl">
                    Nos experts vous accompagnent pour optimiser vos processus et votre infrastructure IT.
                  </p>
                </div>
                <div className="space-x-4">
                  <Link
                    href="#services"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 my-4"
                    prefetch={false}
                  >
                    Découvrir nos services
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
            <img
              src="/lightbulb.png"
              width="1270"
              height="300"
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
            />
          </div>
        </section>
        <section className="flex justify-center py-12 md:py-20" id="about">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">À propos de Mallard Plus</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Notre mission : votre réussite</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mallard Plus est une entreprise de conseil en gestion et systèmes informatiques, fondée en 2010 avec
                  pour mission d&apos;accompagner les entreprises dans leur transformation numérique et l&apos;optimisation de
                  leurs processus.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Notre histoire</h3>
                <p className="text-sm text-muted-foreground">
                  Mallard Plus a été fondée par une équipe d&apos;experts en gestion et en informatique, désireuse de mettre
                  leur savoir-faire au service des entreprises.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Notre mission</h3>
                <p className="text-sm text-muted-foreground">
                  Accompagner nos clients dans l&apos;amélioration de leurs performances opérationnelles et la mise en place
                  de solutions informatiques adaptées.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Notre équipe</h3>
                <p className="text-sm text-muted-foreground">
                  Une équipe pluridisciplinaire d&apos;experts en gestion, en informatique et en transformation digitale.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-muted" id="services">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Nos services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Des solutions sur-mesure pour votre entreprise
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mallard Plus vous accompagne dans tous vos projets de gestion et d&apos;informatique, de la stratégie à la
                  mise en œuvre.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Conseil en gestion</h3>
                <p className="text-sm text-muted-foreground">
                  Optimisation des processus, amélioration de la productivité, stratégie de développement.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Conseil en informatique</h3>
                <p className="text-sm text-muted-foreground">
                  Audit et mise en place d&apos;infrastructures IT, développement de solutions sur-mesure, cybersécurité.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Transformation digitale</h3>
                <p className="text-sm text-muted-foreground">
                  Accompagnement dans la digitalisation des processus, intégration d&apos;outils collaboratifs, formation
                  des équipes.
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Demander un devis
              </Link>
              
            </div>
          </div>
        </section>
        <section className="flex justify-center w-full py-12 md:py-24 lg:py-32" id="references">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Nos références</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nos clients satisfaits</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Découvrez quelques-uns de nos clients qui ont fait confiance à Mallard Plus pour optimiser leur
                  entreprise.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/customer.jpeg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">David Faur</h3>
                      <p className="text-muted-foreground">
                      &quot;Mallard Plus a su comprendre nos enjeux et nous proposer des solutions adaptées. Nous sommes
                        très satisfaits de leur accompagnement.&quot;
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Sabrina Dutch</h3>
                      <p className="text-muted-foreground">
                      &quot;L&apos;équipe de Mallard Plus a fait preuve d&apos;expertise et de réactivité tout au long de notre
                        projet de transformation digitale.&quot;
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Élodie Garisson</h3>
                      <p className="text-muted-foreground">
                      &quot;Nous recommandons vivement Mallard Plus pour leur approche sur-mesure et leur capacité à
                        résoudre nos problématiques complexes.&quot;
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-muted" id="contact">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Contactez-nous pour en savoir plus
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Notre équipe sera ravie de vous conseiller et de répondre à toutes vos questions.
              </p>
            </div>
            <div className="flex gap-4 justify-center">
              <ContactPage />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary py-8 text-primary-foreground ">
        <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">© 2024 Mallard Plus.</p>
          <p className="  "> Tous droits réservés.</p>
        </div>
        <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">14 RUE CURIE</p>
          <p className="   ">06000 NICE</p>
          <p className="  mt-4 ">contact@mallard-plus.fr</p>

          <p className="  mt-4 ">TEL: 09 72 17 00 28</p>
        </div>
      </footer>
    </div>
  )
}



function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
