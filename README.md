Voici une application web permettant de réaliser des quizz de 10 questions aléatoires prélevées de l'api Open Trivia.

Ce projet comporte un fichier main.js pour le comportement de l'application, 2 pages html pour afficher le quizz puis les résultats et un fichier css pour faciliter l'affichage du résultat de chaque question.

Comme vous le savez, je n'avais aucune connaissance en web avant ce projet donc j'ai mis quelques temps à comprendre globalement la structure d'une application web et comment utiliser les outils à ma disposition.
L'intégration des différentes fonctionnalités est ensuite allée beaucoup plus vite.

A cause de l'utilisation du module ejs (permettant l'envoi de paramètres dans les pages html), j'ai eu des difficultés à inclure le fichier css dans un fichier html.
La seule solution trouvée a été d'enregistrer le contenu du fichier css dans une variable dans le fichier javascript (via le module fs) pour ensuite l'envoyer dans le fichier html.

