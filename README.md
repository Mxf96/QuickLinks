# QuickLinks

**QuickLinks** est une page web simple qui offre des redirections vers plusieurs sites web utiles. Ce projet est conçu pour fournir un accès rapide à des outils en ligne et des applications web.

## Fonctionnalités

- Redirection rapide vers des sites web spécifiés
- Affichage des logos des sites pour une identification visuelle rapide

## Sites Redirigés

- [TaskWaves](https://mxf96.github.io/TaskWaves/)
- [Outils en Ligne](https://mxf96.github.io/Outils-en-Ligne/)
- [AzerType](https://mxf96.github.io/AzerType/)

## Démo

Vous pouvez consulter le site **QuickLinks** en ligne à l'adresse suivante : [QuickLinks](https://mxf96.github.io/QuickLinks/)

## Prérequis

Aucun prérequis particulier n'est nécessaire pour utiliser ce projet.

## Installation

1. Clonez le dépôt :
    
    `git clone https://github.com/votre-utilisateur/QuickLinks.git`
    
2. Accédez au répertoire du projet :
    
    `cd QuickLinks`
    

## Utilisation

1. Ouvrez le fichier `index.html` dans votre navigateur :
    
    `open index.html`
    

## Personnalisation

Pour ajouter ou modifier les liens de redirection ou les logos des sites :

1. Ouvrez le fichier `index.html`.
2. Modifiez les balises `<a>` et `<img>` selon vos besoins. Par exemple :
    
    
    `<ul>   <li>     <a href="https://mxf96.github.io/TaskWaves/" target="_blank">       <img src="./assets/img/logo_TaskWave-rbg.png" alt="TaskWaves Logo" class="logo">       TaskWaves     </a>   </li>   <li>     <a href="https://mxf96.github.io/Outils-en-Ligne/" target="_blank">       <img src="./assets/img/convertisseur-rbg.png" alt="Outils en Ligne Logo" class="logo">       Outils en Ligne     </a>   </li>   <li>     <a href="https://mxf96.github.io/AzerType/" target="_blank">       <img src="./assets/img/logo_AZERTY.png" alt="AzerType Logo" class="logo">       AzerType     </a>   </li> </ul>`
    

## Sécurité

Pour éviter toute injection de code malveillant ou manipulation non voulue, nous avons ajouté un fichier `sanitization.js` qui filtre les entrées utilisateur.

## Contributions

Les contributions sont les bienvenues ! Pour proposer des modifications, veuillez suivre les étapes suivantes :

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalité`)
3. Commitez vos modifications (`git commit -m 'Ajouter une nouvelle fonctionnalité'`)
4. Poussez votre branche (`git push origin feature/nouvelle-fonctionnalité`)
5. Ouvrez une Pull Request