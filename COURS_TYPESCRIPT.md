# Cours TypeScript — Holberton School
## Guide complet pour débutants

---

# PARTIE 1 — THÉORIE

---

## 1.1 Qu'est-ce que TypeScript ?

### Ce que c'est et à quoi ça sert

TypeScript est un **sur-ensemble de JavaScript** créé par Microsoft. Cela signifie que tout code JavaScript valide est aussi du TypeScript valide — TypeScript ajoute juste des fonctionnalités en plus. La plus importante : le **typage statique**.

En JavaScript, une variable peut changer de type à tout moment. En TypeScript, tu déclares le type d'une variable et le compilateur te crie dessus si tu essaies de lui donner autre chose.

TypeScript n'est pas exécuté directement par le navigateur ou Node.js. Il doit d'abord être **compilé** (transpilé) en JavaScript. C'est le rôle du compilateur `tsc`.

### Analogie concrète

Imagine que JavaScript est un entrepôt où n'importe qui peut déposer n'importe quoi dans n'importe quelle boîte. Un jour tu ouvres la boîte "utilisateurs" et tu trouves une tondeuse à gazon dedans — pas pratique.

TypeScript, c'est le même entrepôt mais avec un **système d'étiquettes strictes**. La boîte "utilisateurs" ne peut contenir QUE des utilisateurs. Si quelqu'un essaie de mettre une tondeuse dedans, le chef d'entrepôt (le compilateur) l'arrête AVANT que ça cause un problème en production.

### Schéma ASCII

```
JavaScript               TypeScript
                         
┌────────────┐           ┌──────────────────┐
│  Ton code  │           │  Ton code .ts    │
│    .js     │   ──►     │  (avec les types)│
└────────────┘           └─────────┬────────┘
      │                            │
      │                      Compilation
      │                         (tsc)
      ▼                            │
 Exécution                         ▼
 directe                  ┌────────────────┐
                          │  Fichier .js   │◄── Exécution
                          │  (JavaScript   │
                          │   classique)   │
                          └────────────────┘
```

### Tableau comparatif : JavaScript vs TypeScript

| Critère | JavaScript | TypeScript |
|---|---|---|
| Typage | Dynamique (à l'exécution) | Statique (à la compilation) |
| Erreurs détectées | Au moment de l'exécution | À la compilation |
| Extension de fichier | `.js` | `.ts` |
| Exécution directe | Oui (navigateur/Node) | Non (doit être compilé) |
| Autocomplétion IDE | Limitée | Excellente |
| Courbe d'apprentissage | Plus simple | Un peu plus complexe |

---

## 1.2 Les Types de base en TypeScript

### Ce que c'est et à quoi ça sert

Les types permettent de dire à TypeScript **quelle sorte de valeur** une variable peut contenir. TypeScript vérifie que tu respectes ces règles avant même d'exécuter le code.

### Les types fondamentaux

```typescript
// string : pour du texte
let prenom: string = "Alice";

// number : pour tous les nombres (entiers ET décimaux)
let age: number = 25;
let prix: number = 9.99;

// boolean : vrai ou faux seulement
let estConnecte: boolean = true;

// array : tableau d'éléments du même type
let notes: number[] = [12, 15, 18];
// ou la syntaxe alternative :
let prenoms: Array<string> = ["Alice", "Bob"];

// any : désactive le typage (à éviter au maximum !)
let nImporteQuoi: any = "texte";
nImporteQuoi = 42; // TypeScript accepte, mais c'est une mauvaise pratique

// void : pour une fonction qui ne retourne rien
function afficher(message: string): void {
  console.log(message);
}

// undefined et null : représentent l'absence de valeur
let valeurInconnue: undefined = undefined;
let valeurNulle: null = null;
```

### Analogie concrète

Les types en TypeScript, c'est comme les **cases d'un formulaire administratif**. La case "Date de naissance" n'accepte que des dates. Si tu écris "Bonjour" dedans, le fonctionnaire (le compilateur) te renvoie le formulaire. C'est frustrant sur le moment, mais ça évite des erreurs catastrophiques plus tard.

---

## 1.3 Les Interfaces

### Ce que c'est et à quoi ça sert

Une **interface** est un contrat. Elle définit la **forme** qu'un objet doit avoir : quelles propriétés il doit contenir, et de quel type elles sont. Elle ne crée pas d'objet — elle décrit juste à quoi doit ressembler un objet.

Pense à une interface comme à un **formulaire vierge** : il définit les champs obligatoires, mais ce n'est pas encore une fiche remplie.

### Analogie concrète

Une interface, c'est comme le **plan d'une maison**. Le plan dit : "Cette maison doit avoir 2 chambres, 1 salle de bain, et une cuisine." Il ne construit pas la maison — il définit ce qu'une maison doit être. Chaque maison construite à partir de ce plan est garantie d'avoir ces pièces.

### Exemple commenté

```typescript
// On définit ce qu'un "Etudiant" doit contenir
interface Etudiant {
  prenom: string;       // champ obligatoire
  nom: string;          // champ obligatoire
  age: number;          // champ obligatoire
  ville?: string;       // le "?" signifie "optionnel" — peut être absent
}

// On crée un objet qui RESPECTE le contrat Etudiant
const etudiant1: Etudiant = {
  prenom: "Alice",
  nom: "Dupont",
  age: 20,
  ville: "Paris"
};

// Cet objet est aussi valide (ville est optionnelle)
const etudiant2: Etudiant = {
  prenom: "Bob",
  nom: "Martin",
  age: 22
};

// ERREUR TypeScript : age est manquant !
// const etudiant3: Etudiant = { prenom: "Charlie", nom: "Durand" };
```

---

## 1.4 Les Classes

### Ce que c'est et à quoi ça sert

Une **classe** est un moule à objets. Elle définit à la fois la **structure** (les propriétés) ET le **comportement** (les méthodes = les fonctions) d'un type d'objet. À partir d'une classe, on crée des **instances** (objets concrets).

### Analogie concrète

Une classe, c'est comme une **recette de cuisine**. La recette "Gâteau au chocolat" définit les ingrédients nécessaires ET les étapes à suivre. Chaque fois que tu l'utilises, tu obtiens un gâteau concret (une instance). Chaque gâteau peut avoir des variantes (plus ou moins sucré) mais suit la même structure de base.

### Différence Interface vs Classe

```
Interface                      Classe
                               
"Plan / Contrat"               "Moule / Recette"
                               
┌─────────────────┐            ┌─────────────────────────┐
│ interface Chien │            │ class Chien {            │
│   nom: string   │            │   nom: string;           │
│   race: string  │            │   race: string;          │
│   aboyer(): void│            │                          │
└─────────────────┘            │   constructor(n, r) {    │
                               │     this.nom = n;        │
Ne crée pas d'objet            │     this.race = r;       │
Décrit juste la forme          │   }                      │
                               │                          │
                               │   aboyer() {             │
                               │     return "Woof!";      │
                               │   }                      │
                               │ }                        │
                               └─────────────────────────┘
                               
                               Peut créer des objets :
                               new Chien("Rex", "Labrador")
```

### Exemple de classe commenté

```typescript
// La classe est le MOULE
class Voiture {
  // Propriétés : ce que chaque voiture "sait" sur elle-même
  marque: string;
  vitesse: number;

  // Le constructeur est appelé quand on crée une nouvelle voiture
  // "this" désigne l'instance en cours de création
  constructor(marque: string) {
    this.marque = marque;
    this.vitesse = 0; // toutes les voitures démarrent à 0
  }

  // Méthode : ce que la voiture "sait faire"
  accelerer(valeur: number): void {
    this.vitesse += valeur;
  }

  afficherVitesse(): string {
    return `${this.marque} roule à ${this.vitesse} km/h`;
  }
}

// On crée des INSTANCES (objets concrets) à partir du moule
const maVoiture = new Voiture("Renault");
maVoiture.accelerer(50);
console.log(maVoiture.afficherVitesse()); // "Renault roule à 50 km/h"
```

---

## 1.5 Les Types Génériques

### Ce que c'est et à quoi ça sert

Les **génériques** permettent d'écrire du code qui fonctionne avec **n'importe quel type**, tout en gardant la sécurité des types. Au lieu de fixer le type à l'avance, on laisse l'utilisateur le préciser au moment de l'utilisation.

### Analogie concrète

Les génériques, c'est comme une **boîte universelle avec une étiquette amovible**. La boîte peut contenir n'importe quoi, MAIS une fois que tu décides de l'utiliser pour des pommes, elle n'accepte que des pommes. La boîte elle-même ne change pas — c'est ce qu'elle contient qui est flexible.

### Exemple

```typescript
// Sans générique : on doit écrire une fonction par type
function premiereValeurString(tableau: string[]): string {
  return tableau[0];
}
function premiereValeurNumber(tableau: number[]): number {
  return tableau[0];
}

// Avec générique : une seule fonction pour tous les types
// <T> est un "emplacement" pour un type qu'on précisera plus tard
function premiereValeur<T>(tableau: T[]): T {
  return tableau[0];
}

// À l'utilisation, TypeScript comprend automatiquement le type
const firstString = premiereValeur(["a", "b", "c"]); // T = string
const firstNumber = premiereValeur([1, 2, 3]);         // T = number
```

---

## 1.6 Les Namespaces

### Ce que c'est et à quoi ça sert

Un **namespace** est un espace de noms — une façon d'**organiser et regrouper** du code pour éviter les conflits de noms. C'est comme créer des dossiers pour ne pas mélanger des fichiers qui portent le même nom.

### Analogie concrète

Imagine deux collègues qui s'appellent tous les deux "Thomas". Dans une grande entreprise, si tu cries "Thomas !", les deux se retournent. Les namespaces, c'est comme dire "Thomas du département Comptabilité" vs "Thomas du département Informatique". Pas de confusion possible.

### Exemple

```typescript
// Namespace Validation : regroupe tout ce qui concerne la validation
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  export class EmailValidator implements StringValidator {
    isAcceptable(email: string): boolean {
      return email.includes("@");
    }
  }
}

// Namespace Formatage : regroupe tout ce qui concerne le formatage
namespace Formatage {
  export function majuscule(texte: string): string {
    return texte.toUpperCase();
  }
}

// Utilisation : on précise QUEL namespace on utilise
const validateur = new Validation.EmailValidator();
console.log(validateur.isAcceptable("alice@example.com")); // true

const texte = Formatage.majuscule("bonjour"); // "BONJOUR"
```

---

## 1.7 La fusion de déclarations (Declaration Merging)

### Ce que c'est et à quoi ça sert

TypeScript permet de **fusionner plusieurs déclarations** du même nom en une seule entité. C'est utile pour étendre une interface existante sans modifier son code source d'origine.

### Analogie concrète

Imagine un dictionnaire dont tu ne peux pas modifier les pages existantes, mais tu peux ajouter des pages supplémentaires. La fusion de déclarations, c'est TypeScript qui fusionne automatiquement toutes tes pages en un seul dictionnaire cohérent.

### Exemple

```typescript
// Première déclaration de l'interface Animal
interface Animal {
  nom: string;
}

// Deuxième déclaration — TypeScript FUSIONNE les deux !
interface Animal {
  son: string;
}

// L'interface Animal finale contient NOM et SON
const chien: Animal = {
  nom: "Rex",
  son: "Woof"
};
```

---

## 1.8 Les Namespaces ambiants (Ambient Namespaces)

### Ce que c'est et à quoi ça sert

Quand tu utilises une bibliothèque JavaScript externe (comme jQuery, lodash...), TypeScript ne connaît pas ses types. Les **namespaces ambiants** (avec le mot-clé `declare`) permettent d'informer TypeScript des types d'une bibliothèque externe sans modifier son code source.

### Analogie concrète

C'est comme un **traducteur** entre TypeScript et une bibliothèque JavaScript. La bibliothèque parle "JavaScript pur" — le fichier de déclaration ambiant fait la traduction pour que TypeScript comprenne ce que la bibliothèque offre.

### Exemple

```typescript
// Fichier jquery.d.ts (fichier de déclaration pour jQuery)
// "declare" signifie : "cette chose existe en dehors de TypeScript"
declare namespace JQuery {
  function ajax(url: string): void;
  function get(url: string): void;
}

// Maintenant TypeScript sait que $ existe et ce qu'il peut faire
// sans avoir besoin du code source de jQuery
```

---

# PARTIE 2 — WALKTHROUGH DES TÂCHES

---

## Tâche 0 — Créer une interface pour un étudiant

### Objectif
Créer une interface `Student`, instancier deux étudiants, et afficher leurs données dans un tableau HTML en utilisant TypeScript et Vanilla JavaScript.

### Structure de fichiers attendue

```
holbertonschool-web_react/
└── TypeScript/
    └── task_0/
        ├── package.json
        ├── .eslintrc.js
        ├── tsconfig.json
        ├── webpack.config.js
        └── js/
            └── main.ts    ◄── ton code ici
```

### Concepts clés utilisés
- Interface TypeScript
- Tableaux typés (`Array`)
- Manipulation du DOM avec TypeScript
- Typage des éléments HTML

### Code complet avec commentaires

```typescript
// js/main.ts

// On définit l'INTERFACE Student : le "formulaire" que tout étudiant doit remplir
// Une interface n'existe que pour TypeScript — elle disparaît après compilation
interface Student {
  firstName: string;    // prénom obligatoire
  lastName: string;     // nom obligatoire
  age: number;          // âge obligatoire
  location: string;     // ville obligatoire
}

// On crée deux étudiants qui RESPECTENT l'interface Student
// TypeScript vérifie que tous les champs obligatoires sont présents
const student1: Student = {
  firstName: "Alice",
  lastName: "Dupont",
  age: 20,
  location: "Paris"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Martin",
  age: 22,
  location: "Lyon"
};

// On regroupe les deux étudiants dans un tableau typé
// Student[] signifie "tableau qui ne contient que des Student"
const studentsList: Student[] = [student1, student2];

// --- CRÉATION DU TABLEAU HTML ---

// On crée l'élément <table> et on le type correctement
// HTMLTableElement est le type TypeScript pour un élément <table>
const table: HTMLTableElement = document.createElement("table");

// Pour chaque étudiant dans la liste, on crée une ligne de tableau
studentsList.forEach((student: Student) => {
  // On crée une ligne <tr> (table row)
  const row: HTMLTableRowElement = table.insertRow();

  // On crée la première cellule : le prénom
  // insertCell() crée un <td> dans la ligne
  const firstNameCell: HTMLTableCellElement = row.insertCell(0);
  // On met le texte à l'intérieur de la cellule
  firstNameCell.innerHTML = student.firstName;

  // On crée la deuxième cellule : la ville
  const locationCell: HTMLTableCellElement = row.insertCell(1);
  locationCell.innerHTML = student.location;
});

// On ajoute le tableau complet au body de la page HTML
// document.body peut être null — le "!" dit à TypeScript "fais-moi confiance"
document.body.appendChild(table);
```

### Commandes pour tester

```bash
# 1. Aller dans le répertoire de la tâche
cd TypeScript/task_0

# 2. Installer les dépendances (npm lit package.json et télécharge tout)
npm install

# 3. Compiler et lancer le serveur de développement
npm run start-dev

# 4. Ouvrir le navigateur à l'adresse affichée (généralement http://localhost:8080)
# Tu devrais voir un tableau avec "Alice Paris" et "Bob Lyon"

# 5. Pour construire la version de production (vérifie les erreurs de type)
npm run build
# Le terminal doit afficher "No type errors found."
```

### Questions fréquentes

**Q1 : Pourquoi utiliser une interface plutôt que de créer l'objet directement ?**

Sans interface, TypeScript ne sait pas quelle "forme" un étudiant doit avoir. Si tu oublies le champ `age` dans student2, TypeScript ne te prévient pas. Avec l'interface, TypeScript devient ton garde-fou : il t'avertit immédiatement si un champ obligatoire manque ou si le type est mauvais. C'est exactement l'avantage principal de TypeScript sur JavaScript.

**Q2 : C'est quoi `HTMLTableElement` ? Est-ce que je dois mémoriser tous ces types ?**

`HTMLTableElement` est le type TypeScript correspondant à l'élément HTML `<table>`. TypeScript inclut des types pour TOUS les éléments HTML (HTMLDivElement, HTMLInputElement, etc.). Non, tu n'as pas besoin de les mémoriser — ton IDE (VS Code) les suggère automatiquement. Ce qui compte, c'est de comprendre qu'on type les éléments DOM exactement comme on type les variables ordinaires.

**Q3 : Pourquoi `document.body!` avec un point d'exclamation ?**

`document.body` peut théoriquement être `null` (si le script s'exécute avant que le DOM soit chargé). TypeScript nous force à reconnaître cette possibilité. Le `!` est une assertion non-nulle : on dit à TypeScript "je certifie que document.body n'est pas null dans ce contexte". Sans le `!`, TypeScript afficherait une erreur car `appendChild` n'existe pas sur `null`.

---

## Tâche 1 — L'interface Teacher

### Objectif
Créer une interface `Teacher` avec des propriétés obligatoires, optionnelles, en lecture seule, et une propriété d'index pour accepter des attributs supplémentaires arbitraires.

### Structure de fichiers attendue

```
TypeScript/
└── task_1/
    ├── package.json
    ├── tsconfig.json
    ├── webpack.config.js
    └── js/
        └── main.ts    ◄── ton code ici
```

### Concepts clés utilisés
- Interface avec `readonly` (lecture seule)
- Propriétés optionnelles avec `?`
- Index signature `[propName: string]: any`

### Code complet avec commentaires

```typescript
// js/main.ts

// L'interface Teacher définit le contrat pour tout objet "professeur"
interface Teacher {
  // "readonly" : ces propriétés ne peuvent être définies QU'à la création
  // de l'objet. Tenter de les modifier après provoque une erreur TypeScript.
  // C'est utile pour les données qui ne doivent jamais changer.
  readonly firstName: string;
  readonly lastName: string;

  // Propriété obligatoire sans readonly : peut être modifiée après création
  fullTimeEmployee: boolean;

  // Le "?" rend la propriété optionnelle
  // Un Teacher sans yearsOfExperience est tout à fait valide
  yearsOfExperience?: number;

  // Propriété obligatoire standard
  location: string;

  // INDEX SIGNATURE : permet d'ajouter N'IMPORTE quelle propriété supplémentaire
  // [propName: string] signifie "une propriété dont le NOM est une chaîne"
  // : any signifie que la VALEUR peut être de n'importe quel type
  // Grâce à ça, on peut ajouter contract: boolean, salary: number, etc.
  [propName: string]: any;
}

// Exemple d'utilisation : le teacher3 avec une propriété "contract" non prévue
// TypeScript l'accepte grâce à l'index signature
const teacher3: Teacher = {
  firstName: 'John',          // readonly, défini à la création seulement
  lastName: 'Doe',            // readonly, défini à la création seulement
  fullTimeEmployee: false,
  location: 'London',
  contract: false,            // propriété supplémentaire acceptée par [propName: string]
};

console.log(teacher3);
// Affiche: { firstName: "John", lastName: "Doe", fullTimeEmployee: false, 
//            location: "London", contract: false }

// ERREUR si on essaie de modifier un champ readonly après création :
// teacher3.firstName = "Jane"; // ← TypeScript refuse catégoriquement
```

### Commandes pour tester

```bash
cd TypeScript/task_1
npm install
npm run start-dev
# Ouvre http://localhost:8080 et regarde la console du navigateur (F12)
npm run build
# Doit afficher : No type errors found.
```

### Questions fréquentes

**Q1 : Quelle est la différence entre `readonly` et `const` ?**

`const` s'applique à une **variable** : une fois déclarée, elle ne peut pas être réassignée. `readonly` s'applique à une **propriété d'objet** : elle ne peut pas être modifiée après l'initialisation de l'objet. Tu peux avoir une variable `const` dont les propriétés d'objet sont modifiables (si elles ne sont pas `readonly`).

**Q2 : Pourquoi l'index signature utilise `any` comme type de valeur ?**

Parce qu'on veut permettre des propriétés arbitraires qui peuvent avoir n'importe quel type (`contract: boolean`, `salary: number`, `bio: string`, etc.). Si on mettait `string` à la place de `any`, seules les propriétés avec une valeur de type string seraient acceptées. Attention : utiliser `any` désactive les vérifications de type pour ces propriétés.

**Q3 : Est-ce que l'index signature affecte les autres propriétés ?**

Oui ! Quand tu utilises `[propName: string]: any`, TypeScript exige que TOUTES les propriétés nommées de l'interface soient assignables au type de l'index signature. C'est pourquoi on utilise `any` — cela inclut `string`, `boolean`, `number`, etc. Si on utilisait `[propName: string]: string`, les propriétés comme `fullTimeEmployee: boolean` provoqueraient une erreur.

---

## Tâche 2 — Étendre l'interface Teacher avec Directors

### Objectif
Créer une interface `Directors` qui hérite de tous les champs de `Teacher` et en ajoute un nouveau : `numberOfReports`.

### Concepts clés utilisés
- Héritage d'interface avec `extends`
- Ajout de propriétés à une interface héritée

### Code complet avec commentaires

```typescript
// (Suite du fichier task_1/js/main.ts)

// "extends Teacher" signifie : Directors hérite de TOUT ce que Teacher définit
// puis on AJOUTE des propriétés supplémentaires spécifiques aux directeurs
interface Directors extends Teacher {
  // Propriété supplémentaire obligatoire pour les directeurs
  numberOfReports: number;
}

// Un Directors doit avoir TOUTES les propriétés de Teacher + numberOfReports
const director1: Directors = {
  firstName: 'John',        // hérité de Teacher (readonly)
  lastName: 'Doe',          // hérité de Teacher (readonly)
  location: 'London',       // hérité de Teacher
  fullTimeEmployee: true,   // hérité de Teacher
  numberOfReports: 17,      // propriété propre à Directors
};

console.log(director1);
// Object { firstName: "John", fullTimeEmployee: true, lastName: "Doe",
//          location: "London", numberOfReports: 17 }
```

### Schéma de l'héritage

```
┌──────────────────────────────────────┐
│           Interface Teacher          │
│                                      │
│  readonly firstName: string          │
│  readonly lastName: string           │
│  fullTimeEmployee: boolean           │
│  yearsOfExperience?: number          │
│  location: string                    │
│  [propName: string]: any             │
└──────────────────────┬───────────────┘
                       │
                   extends
                       │
                       ▼
┌──────────────────────────────────────┐
│          Interface Directors         │
│                                      │
│  (hérite de tout Teacher)            │
│  + numberOfReports: number  ◄── NEW  │
└──────────────────────────────────────┘
```

### Questions fréquentes

**Q1 : Une interface peut-elle étendre plusieurs interfaces ?**

Oui ! TypeScript supporte l'héritage multiple pour les interfaces : `interface C extends A, B { ... }`. C hérite alors de toutes les propriétés de A et B. C'est une capacité que les classes JavaScript n'ont pas (une classe ne peut étendre qu'une seule autre classe).

**Q2 : Quelle est la différence entre `extends` pour une interface et pour une classe ?**

Pour une **interface**, `extends` crée un nouveau type qui combine tous les champs. Pour une **classe**, `extends` crée une classe enfant qui hérite du comportement (méthodes) et des propriétés de la classe parente. Dans les deux cas, l'idée est la même : réutiliser ce qui existe et ajouter du nouveau.

---

## Tâche 3 — La fonction printTeacher

### Objectif
Écrire une fonction `printTeacher` et définir son type avec une interface de fonction.

### Concepts clés utilisés
- Interface de fonction
- Signature de fonction typée

### Code complet avec commentaires

```typescript
// (Suite du fichier task_1/js/main.ts)

// Une interface peut aussi décrire la FORME d'une fonction
// Ici on dit : "toute fonction printTeacherFunction prend deux strings
// et retourne une string"
// C'est utile pour s'assurer qu'une fonction a la bonne signature
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// L'implémentation doit correspondre exactement à l'interface
// : string après les parenthèses = type de retour
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  // On prend la première lettre du prénom avec [0]
  // On concatène avec ". " puis le nom complet
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher("John", "Doe")); // "J. Doe"
console.log(printTeacher("Alice", "Dupont")); // "A. Dupont"
```

### Questions fréquentes

**Q1 : Pourquoi définir une interface pour une fonction ? On ne peut pas juste écrire la fonction directement ?**

Si ! On peut écrire la fonction directement. L'interface de fonction est utile quand tu veux **garantir** qu'une variable ou un paramètre aura exactement la bonne signature de fonction. Par exemple, si plusieurs endroits dans ton code reçoivent une "fonction de formatage", l'interface garantit qu'elles ont toutes la même signature.

**Q2 : C'est quoi `firstName[0]` ?**

En JavaScript/TypeScript, une chaîne de caractères (`string`) peut être indexée comme un tableau. `firstName[0]` donne le premier caractère de la chaîne. `"Alice"[0]` donne `"A"`. C'est une façon courante d'extraire le premier caractère d'un mot.

---

## Tâche 4 — Écrire une classe

### Objectif
Créer une classe `StudentClass` avec un constructeur typé par une interface et des méthodes décrites par une interface.

### Concepts clés utilisés
- Classes TypeScript
- Interface de constructeur
- Interface de classe
- Méthodes de classe

### Code complet avec commentaires

```typescript
// (Suite du fichier task_1/js/main.ts)

// Interface qui décrit le CONSTRUCTEUR de la classe
// Elle dit : "pour créer un StudentClass, il faut firstName et lastName"
interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

// Interface qui décrit les MÉTHODES que la classe doit avoir
// Elle dit : "tout StudentClass doit avoir workOnHomework et displayName"
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// La classe implémente StudentClassInterface
// "implements" signifie : "je m'engage à avoir toutes les méthodes définies 
// dans cette interface — TypeScript vérifiera"
class StudentClass implements StudentClassInterface {
  // Propriétés de la classe : stockent les données de chaque instance
  firstName: string;
  lastName: string;

  // Le constructeur initialise les propriétés quand on crée un objet
  // Il reçoit les valeurs initiales et les assigne avec "this"
  constructor(firstName: string, lastName: string) {
    // "this" fait référence à l'objet en cours de création
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Méthode requise par StudentClassInterface
  // Retourne une string — TypeScript vérifie que le type de retour correspond
  workOnHomework(): string {
    return "Currently working";
  }

  // Méthode requise par StudentClassInterface
  displayName(): string {
    return this.firstName; // "this" accède aux propriétés de l'instance
  }
}

// Utilisation : on crée une instance avec "new"
const monEtudiant = new StudentClass("Alice", "Dupont");
console.log(monEtudiant.displayName());    // "Alice"
console.log(monEtudiant.workOnHomework()); // "Currently working"
```

### Schéma

```
Interface                   Classe (implémentation)
StudentClassInterface       StudentClass
                            
workOnHomework(): string ──► workOnHomework() { return "Currently working"; }
displayName(): string ────► displayName() { return this.firstName; }
```

### Questions fréquentes

**Q1 : Quelle est la différence entre `implements` et `extends` pour une classe ?**

`extends` : la classe hérite d'une AUTRE CLASSE (elle récupère ses méthodes et propriétés).
`implements` : la classe s'engage à respecter une INTERFACE (elle doit définir toutes les méthodes de l'interface, mais n'hérite de rien).
Une classe peut `extends` une seule classe et `implements` plusieurs interfaces simultanément.

**Q2 : Pourquoi y a-t-il deux interfaces (une pour le constructeur, une pour la classe) ?**

En TypeScript, il y a une subtilité : le type d'une classe (ce qu'on obtient quand on utilise `new`) et le type de ses instances sont différents. L'interface de constructeur décrit COMMENT créer un objet. L'interface de classe décrit ce qu'un objet PEUT FAIRE. Cette distinction est importante quand on veut passer des constructeurs comme arguments de fonctions.

---

## Tâche 5 — Types avancés Partie 1

### Objectif
Créer deux interfaces `DirectorInterface` et `TeacherInterface`, deux classes qui les implémentent, et une factory function `createEmployee` qui retourne l'un ou l'autre selon le salaire.

### Structure de fichiers attendue

```
TypeScript/
└── task_2/
    ├── package.json
    ├── tsconfig.json
    ├── webpack.config.js
    └── js/
        └── main.ts    ◄── ton code ici
```

### Concepts clés utilisés
- Interfaces avec méthodes
- Classes implémentant des interfaces
- Union types (`number | string`)
- Factory function

### Code complet avec commentaires

```typescript
// js/main.ts

// --- INTERFACES ---
// DirectorInterface : contrat que tout directeur doit respecter
// Chaque méthode doit retourner une string
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface : contrat que tout professeur doit respecter
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string; // différent de workDirectorTasks !
}

// --- CLASSES ---
// Director implémente DirectorInterface
// TypeScript vérifie que les 3 méthodes sont bien présentes
class Director implements DirectorInterface {
  // Les directeurs peuvent travailler de chez eux
  workFromHome(): string {
    return "Working from home";
  }

  // Les directeurs ont droit aux pauses café
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  // Tâches spécifiques aux directeurs
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher implémente TeacherInterface
class Teacher implements TeacherInterface {
  // Les professeurs ne peuvent pas travailler de chez eux (contrainte)
  workFromHome(): string {
    return "Cannot work from home";
  }

  // Pas de pause café pour les profs non plus
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  // Tâches spécifiques aux professeurs
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// --- FACTORY FUNCTION ---
// Une "factory function" est une fonction qui crée et retourne des objets
// Le type de retour "Director | Teacher" est un UNION TYPE
// Cela signifie : "cette fonction retourne SOIT un Director SOIT un Teacher"

// salary est de type "number | string" : peut être les deux
function createEmployee(salary: number | string): Director | Teacher {
  // Si le salaire est un nombre ET qu'il est inférieur à 500 → Teacher
  // "typeof salary === 'number'" vérifie le type à l'exécution
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  // Dans tous les autres cas (nombre >= 500 OU chaîne de caractères) → Director
  return new Director();
}

// Tests
console.log(createEmployee(200));    // Teacher { }
console.log(createEmployee(1000));   // Director { }
console.log(createEmployee('$500')); // Director { }
```

### Schéma de la factory function

```
createEmployee(salary)
        │
        ▼
  typeof salary === 'number'
  ET salary < 500 ?
        │
   OUI  │  NON
    ┌───┴───┐
    ▼       ▼
 Teacher  Director
(nouveau) (nouveau)
```

### Questions fréquentes

**Q1 : Qu'est-ce qu'un union type `number | string` ?**

Un union type signifie "ce peut être l'un OU l'autre". La variable `salary` peut recevoir `200` (number) ou `"$500"` (string). TypeScript vous oblige à vérifier le type réel avant d'utiliser des opérations spécifiques à l'un ou l'autre (comme comparer avec `< 500` qui ne fonctionne qu'avec des nombres).

**Q2 : Pourquoi `'$500'` (une string) retourne un Director ?**

Parce que la condition vérifie `typeof salary === 'number' && salary < 500`. `'$500'` est une string, donc `typeof salary === 'number'` est `false`. On ne rentre pas dans le `if`, donc on retourne un `Director`. La logique est : si on peut calculer que le salaire est < 500, c'est un Teacher. Dans le doute (salaire exprimé autrement), c'est un Director.

**Q3 : C'est quoi une "factory function" ?**

Le terme "factory" (usine) vient du design pattern du même nom. C'est une fonction dont le rôle principal est de **créer et retourner des objets**, en cachant les détails de leur création. Au lieu d'appeler `new Teacher()` ou `new Director()` directement dans ton code, tu appelles `createEmployee(salary)` et la factory décide quel objet créer. Ça centralise la logique de création.

---

# PARTIE 3 — TABLEAU RÉCAPITULATIF

---

## Résumé des tâches

| Tâche | Répertoire | Fichier principal | Ce qui est créé | Concepts clés |
|---|---|---|---|---|
| 0 | `task_0/js/` | `main.ts` | Interface `Student`, tableau HTML | Interface, DOM, tableaux typés |
| 1 | `task_1/js/` | `main.ts` | Interface `Teacher` | `readonly`, optionnel `?`, index signature |
| 2 | `task_1/js/` | `main.ts` | Interface `Directors` | Héritage d'interface `extends` |
| 3 | `task_1/js/` | `main.ts` | Fonction `printTeacher` | Interface de fonction |
| 4 | `task_1/js/` | `main.ts` | Classe `StudentClass` | Classe, `implements`, interface de constructeur |
| 5 | `task_2/js/` | `main.ts` | Classes `Director`/`Teacher`, factory `createEmployee` | Union types, factory function |

---

## Toutes les commandes utiles

```bash
# ─── INSTALLATION ───────────────────────────────────────────────

# Installer les dépendances d'un répertoire de tâche
cd TypeScript/task_0 && npm install

# ─── DÉVELOPPEMENT ──────────────────────────────────────────────

# Lancer le serveur de développement avec rechargement automatique
npm run start-dev
# → Ouvre http://localhost:8080 dans le navigateur

# ─── VÉRIFICATION ET COMPILATION ────────────────────────────────

# Compiler le projet et vérifier les types (mode production)
npm run build
# → Doit afficher "No type errors found." si tout est correct

# Compiler manuellement TypeScript sans webpack
npx tsc
# → Crée les fichiers .js correspondants selon tsconfig.json

# Vérifier les types sans générer de fichiers
npx tsc --noEmit
# → Pratique pour voir les erreurs sans modifier le système de fichiers

# ─── QUALITÉ DU CODE ────────────────────────────────────────────

# Vérifier le style du code avec ESLint
npx eslint js/main.ts
# → Signale les problèmes de style et les erreurs potentielles

# Corriger automatiquement les problèmes de style
npx eslint js/main.ts --fix

# ─── DÉBOGAGE ───────────────────────────────────────────────────

# Voir la version de TypeScript installée
npx tsc --version

# Voir la configuration TypeScript active
npx tsc --showConfig

# ─── GIT ────────────────────────────────────────────────────────

# Vérifier l'état du dépôt
git status

# Ajouter tous les fichiers d'une tâche
git add TypeScript/task_0/

# Créer un commit
git commit -m "feat: add task_0 Student interface"

# Pousser sur GitHub
git push origin main
```

---

## Tâche 6 — Fonctions spécifiques aux employés

### Objectif
Écrire `isDirector` comme type predicate et `executeWork` qui appelle la bonne méthode selon le type d'employé.

### Concepts clés utilisés
- Type predicate (`employee is Director`)
- Narrowing (réduction du type)
- Polymorphisme

### Code complet avec commentaires

```typescript
// (Suite du fichier task_2/js/main.ts)

// TYPE PREDICATE : une fonction qui retourne un boolean MAIS qui dit aussi
// à TypeScript "si cette fonction retourne true, alors le paramètre EST de ce type"
// La syntaxe "employee is Director" est le type predicate
// Sans ça, TypeScript ne saurait pas que dans le bloc if, employee est un Director
function isDirector(employee: Director | Teacher): employee is Director {
  // On vérifie si l'objet possède la méthode workDirectorTasks
  // qui n'existe que sur Director et pas sur Teacher
  // "in" est un opérateur JS qui vérifie si une propriété existe dans un objet
  return (employee as Director).workDirectorTasks !== undefined;
}

// executeWork reçoit soit un Director soit un Teacher
// Grâce au type predicate, TypeScript sait quel type c'est dans chaque branche
function executeWork(employee: Director | Teacher): string {
  // Si isDirector retourne true, TypeScript SAIT que employee est un Director
  // On peut donc appeler workDirectorTasks sans erreur de type
  if (isDirector(employee)) {
    return employee.workDirectorTasks(); // accessible car on sait que c'est un Director
  }
  // Dans le else, TypeScript SAIT que c'est forcément un Teacher
  return employee.workTeacherTasks(); // accessible car on sait que c'est un Teacher
}

console.log(executeWork(createEmployee(200)));   // "Getting to work"
console.log(executeWork(createEmployee(1000)));  // "Getting to director tasks"
```

### Schéma du narrowing

```
employee: Director | Teacher
           │
    isDirector(employee) ?
           │
     true  │  false
      ┌────┴────┐
      ▼         ▼
  Director    Teacher
  (TypeScript  (TypeScript
   le sait)    le sait)
      │         │
  workDirector  workTeacher
  Tasks()       Tasks()
```

### Questions fréquentes

**Q1 : Qu'est-ce que le "narrowing" ?**

Le narrowing (réduction de type) est le processus par lequel TypeScript réduit un type large (comme `Director | Teacher`) à un type plus précis dans un contexte spécifique. Après un `if (isDirector(employee))`, TypeScript "sait" que dans ce bloc, `employee` est forcément un `Director`. C'est comme un entonnoir qui réduit les possibilités.

**Q2 : Pourquoi ne pas utiliser `instanceof` plutôt que `in` ?**

`instanceof` fonctionne très bien ici aussi : `employee instanceof Director`. La différence : `instanceof` vérifie la chaîne de prototypes (la vraie classe de l'objet) alors que l'opérateur `in` vérifie si une propriété existe sur l'objet. Les deux fonctionnent dans ce cas, mais `instanceof` est souvent plus lisible.

**Q3 : Si je n'utilise pas de type predicate, que se passe-t-il ?**

Sans type predicate, si la fonction retourne juste `boolean`, TypeScript ne fait pas le lien entre "la fonction a retourné true" et "le paramètre est un Director". Tu devras alors faire un cast manuel ou utiliser une autre technique de narrowing. Le type predicate est la façon "propre" de TypeScript d'exprimer ce lien.

---

## Tâche 7 — String literal types

### Objectif
Créer un type littéral de chaîne `Subjects` qui n'accepte que `"Math"` ou `"History"`, et une fonction `teachClass` qui s'adapte selon la valeur.

### Concepts clés utilisés
- String literal types
- Union de littéraux de chaînes
- Exhaustivité des branches

### Code complet avec commentaires

```typescript
// (Suite du fichier task_2/js/main.ts)

// STRING LITERAL TYPE : un type qui n'accepte PAS toutes les strings
// mais SEULEMENT les valeurs listées
// Subjects ne peut être QUE "Math" ou "History" — rien d'autre
type Subjects = "Math" | "History";

// La fonction reçoit un paramètre de type Subjects
// TypeScript GARANTIT que todayClass ne peut être que "Math" ou "History"
// Si tu passes "English", TypeScript affiche une erreur à la compilation
function teachClass(todayClass: Subjects): string {
  // On peut utiliser if/else ou switch — les deux sont valides
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  // Pas besoin de vérifier "else if History" — TypeScript sait que
  // si ce n'est pas "Math", c'est forcément "History"
  return "Teaching History";
}

console.log(teachClass("Math"));    // "Teaching Math"
console.log(teachClass("History")); // "Teaching History"
// teachClass("English"); // ← ERREUR TypeScript : "English" n'est pas dans Subjects
```

### Analogie concrète

Un string literal type, c'est comme un **menu de restaurant** à choix limité. Au lieu de commander n'importe quoi (string libre), tu ne peux commander que ce qui est sur le menu ("Math" ou "History"). Si tu essaies de commander autre chose, le serveur (TypeScript) te dit que ce n'est pas disponible — AVANT que tu aies même faim (avant l'exécution).

### Questions fréquentes

**Q1 : Quelle est la différence entre `type` et `interface` ?**

`interface` est principalement pour décrire la forme d'un objet. `type` (alias de type) est plus polyvalent : il peut aussi créer des unions, des intersections, des alias pour des types primitifs, etc. Pour les objets, les deux sont souvent interchangeables. Pour les unions de littéraux (`"Math" | "History"`), on utilise `type`.

**Q2 : Peut-on avoir plus de deux valeurs dans un string literal type ?**

Absolument ! `type Direction = "nord" | "sud" | "est" | "ouest"` est tout à fait valide. Il n'y a pas de limite au nombre de valeurs. C'est très utilisé pour remplacer les enums dans certains cas.

---

## Tâche 8 — Namespaces ambiants

### Objectif
Créer une bibliothèque CRUD externe avec ses fichiers de déclaration TypeScript (`.d.ts`) et utiliser les directives triple-slash pour intégrer des types externes.

### Structure de fichiers attendue

```
TypeScript/
└── task_3/
    ├── package.json
    ├── tsconfig.json
    ├── webpack.config.js
    └── js/
        ├── interface.ts    ◄── types RowID et RowElement
        ├── crud.js         ◄── bibliothèque externe (JavaScript pur)
        ├── crud.d.ts       ◄── déclarations de types pour crud.js
        └── main.ts         ◄── code principal
```

### Concepts clés utilisés
- Fichiers de déclaration `.d.ts`
- Directives triple-slash `/// <reference path="..." />`
- Type alias avec `type`
- Namespaces ambiants (`declare module`)

### Fichier interface.ts

```typescript
// interface.ts

// TYPE ALIAS : un simple raccourci pour nommer un type existant
// RowID est juste un "number" avec un nom plus parlant
// C'est utile pour la lisibilité : on comprend immédiatement que c'est un ID de ligne
export type RowID = number;

// Interface pour une ligne de données dans notre "base de données"
// age est optionnel car on peut insérer un enregistrement sans l'âge
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
```

### Fichier crud.js (la bibliothèque externe)

```javascript
// crud.js — bibliothèque JavaScript PURE (pas de TypeScript)
// C'est une simulation d'une bibliothèque que tu télécharges
// Tu ne peux PAS la modifier

export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000)); // retourne un ID aléatoire
}

export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}
```

### Fichier crud.d.ts (fichier de déclarations)

```typescript
// crud.d.ts
// Ce fichier "explique" à TypeScript ce que crud.js exporte
// Il ne contient PAS d'implémentation — seulement des déclarations de types

// On importe les types dont on a besoin pour décrire les signatures
import { RowID, RowElement } from "./interface";

// "declare function" signifie : "cette fonction existe quelque part en JavaScript,
// voici sa signature TypeScript"
// TypeScript fait confiance à ces déclarations sans pouvoir les vérifier

export declare function insertRow(row: RowElement): RowID;
// insertRow prend un RowElement et retourne un RowID (number)

export declare function deleteRow(rowId: RowID): void;
// deleteRow prend un RowID et ne retourne rien

export declare function updateRow(rowId: RowID, row: RowElement): RowID;
// updateRow prend un RowID et un RowElement, retourne le RowID mis à jour
```

### Fichier main.ts

```typescript
// main.ts

// DIRECTIVE TRIPLE-SLASH : une façon ancienne mais encore valide d'inclure
// des dépendances de types. Le "///" (trois slashes) est obligatoire.
// "reference path" indique à TypeScript de charger les types de ce fichier
// avant de compiler le fichier actuel
/// <reference path="crud.d.ts"/>

// On importe les TYPES depuis interface.ts
// (import de types, pas d'implémentation)
import { RowID, RowElement } from "./interface";

// On importe TOUT ce que crud.js exporte, sous l'alias "CRUD"
// "* as CRUD" crée un namespace CRUD avec toutes les fonctions exportées
import * as CRUD from "./crud";

// On crée un objet conforme à l'interface RowElement
// TypeScript vérifie que firstName et lastName sont bien des strings
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  // age est absent car il est optionnel dans RowElement
};

// insertRow retourne un RowID (number) — TypeScript le sait grâce à crud.d.ts
// "as RowID" est un cast pour être explicite, bien que le type soit déjà correct
const newRowID: RowID = CRUD.insertRow(row);
// Affiche: Insert row { firstName: "Guillaume", lastName: "Salva" }

// On crée une version mise à jour de la ligne avec l'âge ajouté
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,  // on ajoute l'âge qui était optionnel
};

CRUD.updateRow(newRowID, updatedRow);
// Affiche: Update row 125 { firstName: "Guillaume", lastName: "Salva", age: 23 }

CRUD.deleteRow(newRowID);
// Affiche: Delete row id 125
```

### Schéma de l'architecture

```
interface.ts              crud.js
(types TypeScript)        (JavaScript pur)
      │                        │
      │                        │
      ▼                        ▼
crud.d.ts ──────────────────── ┘
(pont entre TS et JS :
 déclare les types de crud.js)
      │
      ▼
main.ts
(/// <reference path="crud.d.ts"/>
 + import types depuis interface.ts
 + import * as CRUD depuis crud.js)
```

### Commandes pour tester

```bash
cd TypeScript/task_3
npm install

# Crée les fichiers crud.js, interface.ts, crud.d.ts, main.ts
# puis :
npm run build
# Vérifie : No type errors found.
```

### Questions fréquentes

**Q1 : Pourquoi créer un fichier `.d.ts` plutôt que de réécrire la bibliothèque en TypeScript ?**

Dans le monde réel, tu télécharges souvent des bibliothèques JavaScript que tu ne peux pas modifier. Les fichiers `.d.ts` ("d" pour "declaration") permettent d'ajouter des informations de types à ces bibliothèques sans toucher à leur code. La communauté publie des définitions de types pour des milliers de bibliothèques populaires sur le package `@types/` (ex: `@types/jquery`, `@types/lodash`).

**Q2 : C'est quoi la différence entre `import type` et `import` ?**

`import type { RowID }` n'importe que le type — il sera effacé à la compilation (il n'existe que pour TypeScript). `import { RowID }` importerait aussi la valeur JavaScript si elle existait. Pour des types purs (interfaces, type aliases), les deux fonctionnent, mais `import type` est plus explicite et légèrement plus optimal.

**Q3 : Pourquoi utiliser `/// <reference path="..."/>` et pas juste `import` ?**

Les directives triple-slash sont une ancienne technique (avant les modules ES6). Elles sont encore utiles pour référencer des fichiers de déclaration ambiante (`.d.ts`) qui ne sont pas des modules. Dans ce projet, `crud.d.ts` utilise `declare function` sans `export`, ce qui en fait un fichier de déclaration global — la directive triple-slash est la façon correcte d'en dépendre. Avec `export`, on utiliserait `import`.

---

## Tâche 9 — Namespace & Declaration merging

### Objectif
Organiser le code en namespaces avec plusieurs fichiers, utiliser la fusion de déclarations pour enrichir l'interface Teacher selon les matières, et créer des classes par matière.

### Structure de fichiers attendue

```
TypeScript/
└── task_4/
    ├── package.json
    ├── tsconfig.json
    └── js/
        └── subjects/
            ├── Teacher.ts    ◄── interface Teacher de base
            ├── Subject.ts    ◄── classe Subject de base
            ├── Cpp.ts        ◄── matière C++ (fusionne Teacher + classe Cpp)
            ├── React.ts      ◄── matière React (fusionne Teacher + classe React)
            └── Java.ts       ◄── matière Java (fusionne Teacher + classe Java)
```

### Fichier Teacher.ts

```typescript
// js/subjects/Teacher.ts

// Tout est dans le namespace "Subjects" pour éviter les conflits de noms
// Tous les fichiers du projet task_4 utilisent le même namespace
namespace Subjects {
  // Interface de base pour un Teacher
  // D'autres fichiers vont FUSIONNER cette interface pour y ajouter
  // des propriétés spécifiques à chaque matière
  export interface Teacher {
    firstName: string;
    lastName: string;
  }
}
```

### Fichier Subject.ts

```typescript
// js/subjects/Subject.ts

namespace Subjects {
  // Classe de base pour toutes les matières
  // Les classes Cpp, React, Java vont ÉTENDRE cette classe
  export class Subject {
    // L'attribut teacher utilise l'interface Teacher définie dans Teacher.ts
    // Les deux sont dans le même namespace "Subjects" — pas besoin de préfixer
    teacher: Teacher;

    // Setter : méthode spéciale pour assigner la valeur de teacher
    // En TypeScript, "set" crée un accesseur — on peut l'appeler comme une propriété
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
```

### Fichier Cpp.ts

```typescript
// js/subjects/Cpp.ts

namespace Subjects {
  // DECLARATION MERGING : on redéclare l'interface Teacher dans ce fichier
  // TypeScript FUSIONNE automatiquement cette déclaration avec celle de Teacher.ts
  // Résultat : l'interface Teacher a maintenant AUSSI experienceTeachingC
  export interface Teacher {
    experienceTeachingC?: number; // optionnel : tous les profs n'enseignent pas le C
  }

  // Cpp étend Subject — elle hérite de l'attribut teacher et de setTeacher
  export class Cpp extends Subject {
    // Retourne les prérequis pour enseigner le C++
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    // Retourne le professeur disponible pour le C++
    // Vérifie si le prof a de l'expérience en C avant de le proposer
    getAvailableTeacher(): string {
      // Si experienceTeachingC n'est pas défini ou vaut 0 → pas disponible
      // L'opérateur "!" avant une valeur la convertit en boolean et l'inverse
      if (!this.teacher.experienceTeachingC) {
        return "No available teacher";
      }
      // On accède à firstName via this.teacher (hérité de Subject)
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
```

### Fichier React.ts

```typescript
// js/subjects/React.ts

namespace Subjects {
  // Fusion de déclaration : on ajoute experienceTeachingReact à Teacher
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingReact) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
```

### Fichier Java.ts

```typescript
// js/subjects/Java.ts

namespace Subjects {
  // Fusion de déclaration : on ajoute experienceTeachingJava à Teacher
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingJava) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
```

### Schéma de la fusion de déclarations

```
Teacher.ts              Cpp.ts                React.ts             Java.ts
                        
interface Teacher       interface Teacher     interface Teacher    interface Teacher
  firstName               experienceTeachingC   experienceTeachingReact  experienceTeachingJava
  lastName
  
                    TypeScript fusionne tout en UNE interface :
                    ┌─────────────────────────────────────────────┐
                    │  interface Teacher (fusionnée)              │
                    │    firstName: string                        │
                    │    lastName: string                         │
                    │    experienceTeachingC?: number             │
                    │    experienceTeachingReact?: number         │
                    │    experienceTeachingJava?: number          │
                    └─────────────────────────────────────────────┘
```

### Questions fréquentes

**Q1 : Pourquoi mettre des propriétés d'expérience spécifiques dans des fichiers séparés plutôt que dans Teacher.ts dès le départ ?**

C'est le principe de **séparation des responsabilités**. Le fichier Teacher.ts définit ce qu'est un professeur en général. Les fichiers Cpp.ts, React.ts, Java.ts ajoutent seulement ce qui est pertinent pour leur matière. Si on ajoute une 10ème matière plus tard, on n'a pas à toucher à Teacher.ts — on crée juste un nouveau fichier avec sa fusion de déclaration.

**Q2 : Est-ce que les fichiers `.ts` dans des sous-dossiers ont besoin d'être importés explicitement ?**

Ça dépend de la configuration TypeScript (`tsconfig.json`). Si `include` pointe vers `js/**/*.ts`, TypeScript compilera automatiquement tous les fichiers `.ts` du dossier `js`. Dans ce projet, les namespaces (et non les modules ES6) sont utilisés, ce qui signifie que les fichiers partagent le même espace global une fois compilés.

---

## Tâche 10 — Brand convention & Nominal typing

### Objectif
Créer deux interfaces `MajorCredits` et `MinorCredits` avec une propriété `brand` pour les distinguer à la compilation (typage nominal), et des fonctions qui n'acceptent que le bon type.

### Structure de fichiers attendue

```
TypeScript/
└── task_5/
    ├── package.json
    ├── tsconfig.json
    ├── webpack.config.js
    └── js/
        └── main.ts    ◄── ton code ici
```

### Concepts clés utilisés
- Typage nominal simulé avec branding
- Différence typage structurel vs nominal
- Propriétés de type littéral pour la distinction

### Code complet avec commentaires

```typescript
// js/main.ts

// PROBLÈME : TypeScript est structurellement typé
// Cela signifie que deux types IDENTIQUES en structure sont interchangeables
// Exemple SANS branding :
// interface MajorCredits { credits: number; }
// interface MinorCredits { credits: number; }
// TypeScript les considérerait comme LE MÊME TYPE !
// On pourrait passer un MinorCredits là où un MajorCredits est attendu — bug !

// SOLUTION : le "brand" (marque de fabrique)
// On ajoute une propriété qui ne peut avoir QU'UNE valeur possible
// Cela rend les deux interfaces structurellement DIFFÉRENTES
// même si elles ont la même forme de base

interface MajorCredits {
  credits: number;
  // La valeur de brand ne peut être QUE la string "major"
  // C'est un type littéral : pas n'importe quelle string, exactement "major"
  brand: "major";
}

interface MinorCredits {
  credits: number;
  // La valeur de brand ne peut être QUE la string "minor"
  // Maintenant les deux interfaces sont DISTINCTES pour TypeScript
  brand: "minor";
}

// Cette fonction n'accepte QUE des MajorCredits
// Passer un MinorCredits provoque une erreur de compilation
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major", // on doit préciser le brand pour TypeScript
  };
}

// Cette fonction n'accepte QUE des MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor",
  };
}

// Utilisation
const major1: MajorCredits = { credits: 3, brand: "major" };
const major2: MajorCredits = { credits: 4, brand: "major" };

const minor1: MinorCredits = { credits: 1, brand: "minor" };
const minor2: MinorCredits = { credits: 2, brand: "minor" };

const totalMajor = sumMajorCredits(major1, major2); // { credits: 7, brand: "major" }
const totalMinor = sumMinorCredits(minor1, minor2); // { credits: 3, brand: "minor" }

// ERREUR TypeScript si on mélange les types :
// sumMajorCredits(major1, minor1); // ← brand "minor" incompatible avec brand "major"
```

### Analogie concrète

Imagine deux billets de banque, tous les deux rectangulaires et de la même taille : l'un est un billet de 20€, l'autre un bon de réduction de 20€. Sans marquage, une caissière (TypeScript structurel) pourrait les confondre car ils ont la même forme. Le "brand" (tampon officiel de la Banque Centrale), c'est ce qui les rend distinguables malgré leur forme identique.

### Schéma typage structurel vs nominal

```
TYPAGE STRUCTUREL (TypeScript par défaut)
──────────────────────────────────────────
MajorCredits { credits: number }
                    ↕ identiques !
MinorCredits { credits: number }

→ TypeScript les considère interchangeables

TYPAGE NOMINAL SIMULÉ (avec brand)
──────────────────────────────────────────
MajorCredits { credits: number, brand: "major" }
                    ≠ différents !
MinorCredits { credits: number, brand: "minor" }

→ TypeScript les distingue grâce au brand
```

### Questions fréquentes

**Q1 : Pourquoi TypeScript est-il "structurellement" typé par défaut ?**

TypeScript a été conçu pour s'adapter à JavaScript qui est déjà structurellement typé. En pratique, le typage structurel est souvent pratique : si deux objets ont la même forme, ils sont compatibles. Mais parfois (comme ici), on veut distinguer des types même s'ils ont la même structure — c'est là qu'on simule le typage nominal avec des brands.

**Q2 : La propriété `brand` est-elle vraiment stockée dans l'objet à l'exécution ?**

Oui ! Contrairement aux interfaces pures (qui disparaissent à la compilation), la propriété `brand: "major"` sera présente dans l'objet JavaScript final. C'est un compromis du branding TypeScript. Des techniques plus avancées (comme les symbols uniques) permettent de rendre le brand invisible à l'exécution, mais c'est hors portée de ce projet.

---

## Résumé des tâches (mis à jour)

| Tâche | Répertoire | Fichier principal | Ce qui est créé | Concepts clés |
|---|---|---|---|---|
| 0 | `task_0/js/` | `main.ts` | Interface `Student`, tableau HTML | Interface, DOM, tableaux typés |
| 1 | `task_1/js/` | `main.ts` | Interface `Teacher` | `readonly`, optionnel `?`, index signature |
| 2 | `task_1/js/` | `main.ts` | Interface `Directors` | Héritage d'interface `extends` |
| 3 | `task_1/js/` | `main.ts` | Fonction `printTeacher` | Interface de fonction |
| 4 | `task_1/js/` | `main.ts` | Classe `StudentClass` | Classe, `implements`, interface de constructeur |
| 5 | `task_2/js/` | `main.ts` | Classes `Director`/`Teacher`, factory `createEmployee` | Union types, factory function |
| 6 | `task_2/js/` | `main.ts` | `isDirector` (predicate), `executeWork` | Type predicate, narrowing |
| 7 | `task_2/js/` | `main.ts` | Type `Subjects`, fonction `teachClass` | String literal types |
| 8 | `task_3/js/` | `main.ts`, `crud.d.ts`, `interface.ts` | Namespaces ambiants, fichiers `.d.ts` | Ambient declarations, triple-slash |
| 9 | `task_4/js/` | `subjects/*.ts` | Namespace multi-fichiers avec fusion | Namespaces, declaration merging |
| 10 | `task_5/js/` | `main.ts` | Types brandés `MajorCredits`/`MinorCredits` | Nominal typing, branding |

---

## Glossaire rapide

| Terme | Définition en une ligne |
|---|---|
| Interface | Contrat décrivant la forme d'un objet — disparaît après compilation |
| `readonly` | Propriété qui ne peut être définie qu'à la création de l'objet |
| `?` (optionnel) | Propriété qui peut être absente sans erreur |
| `extends` | Une interface/classe hérite d'une autre |
| `implements` | Une classe s'engage à respecter une interface |
| Union type `A \| B` | Une valeur qui peut être de type A ou de type B |
| Index signature | `[key: string]: any` — permet des propriétés arbitraires |
| Factory function | Fonction qui crée et retourne des objets selon des conditions |
| `typeof` | Opérateur qui retourne le type d'une valeur à l'exécution |
| `new` | Mot-clé pour créer une instance d'une classe |
| Transpilation | Conversion de TypeScript en JavaScript |
| `any` | Type qui désactive les vérifications TypeScript (à éviter) |
| Namespace | Espace de noms pour organiser et regrouper du code |
| Générique `<T>` | Type paramétrable défini à l'utilisation |
```
