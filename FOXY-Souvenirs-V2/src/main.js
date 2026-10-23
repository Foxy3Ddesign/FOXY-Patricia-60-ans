
import "./css/main.css";

const lienAlbum =
    "https://guestalbum.so/a/les-50-ans-d-anne?ref=link";

document.querySelector("#app").innerHTML = `
    <section class="hero">
        <div class="hero-content">

            <p class="surtitre">Un jour, mille souvenirs</p>

            <h1>Les Plus Beaux Souvenirs</h1>

            <p class="bienvenue">
                Bienvenue aux 50 ans d'Anne
            </p>

            <p class="description">
                Partageons ensemble les souvenirs de cette belle journée.
                Retrouvez les photos et laissez un petit mot à Anne.
            </p>

            <div class="actions-album">

                <a
                    class="btn"
                    href="${lienAlbum}"
                    target="_blank"
                    rel="noopener noreferrer">
                    Découvrir l'album
                </a>

                <a
                    class="btn btn-secondaire"
                    href="${lienAlbum}"
                    target="_blank"
                    rel="noopener noreferrer">
                    Ajouter mes photos
                </a>

                <a
                    class="lien-livre-or"
                    href="${lienAlbum}"
                    target="_blank"
                    rel="noopener noreferrer">
                    Écrire dans le livre d'or
                </a>

            </div>

        </div>
    </section>
`;
