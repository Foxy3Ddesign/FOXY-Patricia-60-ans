
import './style.css'

const lienAlbum = 'https://guestalbum.so/a/les-60-ans-de-patricia?ref=link'
const lienPhotosLivreOr = 'https://guestalbum.so/a/la-soiree-des-60-ans-de-patricia?ref=link'

document.querySelector('#app').innerHTML = `
  <main class="page-patricia">
    <section class="carte-anniversaire">
      <div class="photo-fond" aria-hidden="true"></div>
      <div class="voile" aria-hidden="true"></div>

      <header class="entete">
        <p class="surtitre">UNE JOURNÉE INOUBLIABLE</p>
        <h1>
          Bienvenue aux
          <span class="age">60 ans</span>
          <span class="prenom">de Patricia ♡</span>
        </h1>
        <p class="message">
          Les plus beaux souvenirs se partagent ensemble.
        </p>
      </header>

      <nav class="acces" aria-label="Les souvenirs de Patricia">
        <a class="bouton bouton-principal" href="${lienAlbum}">
          Découvrir l’album
        </a>
        <a class="bouton" href="${lienPhotosLivreOr}">
          Ajouter mes photos
        </a>
        <a class="bouton" href="${lienPhotosLivreOr}">
          Écrire dans le livre d’or
        </a>
      </nav>
    </section>
  </main>
`

`
