---
layout: blog-post
title:  "Les meilleurs outils pour les sites statiques"
date:   2022-12-23 10:00 +0100
poster: tools-static.png
categories: "blog"
excerpt_separator: <!--more-->

---

Pour rappel, un site web statique est un site dont le contenu ne s'adapte pas en fonction de l'utilisateur. Ce site en est un bon exemple. Pour plus de détaile, vous pouvez retrouver une description plus détaillée [dans cet article consacré au sujet]({% post_url 2021-10-08-site-statique %}).

Malgré cette contrainte on peut utiliser des outils tiers pour combler ce manque. Et des outils il y en a beaucoup. On va ici regrouper les services et outils les plus utilisés et utiles pour un site statique.

<!--more-->

# Outils

## CMS headless

On commence directement par un outils un peu technique mais très apprécié.

Derrière ces termes, on parle d'un concept assez simple. Les CMS sont des outils qui permettent de modifier un site Internet très facilement sans modifier le code source. Les plus connus étant WordPress, Joomla ou encore Shopify...

A l'inverse un site statique n'a pas d'interface d'administration pour changer le contenu des articles ou des pages. Ces outils vont nous permettre de contourner cette limitation et d'avoir une interface sur laquelle on pourra modifier notre site. C'est pour cette raison qu'on parle de "CMS headless" (aka "sans tête").

Certains demandent un peu de configuration, d'autre au contraire sont assez simple à prendre en main.

Voici quelques exemples des plus CMS headless les connus :

### Netlify CMS

Netlify est un service très connus qui permet de gérer l'hébergement de site Internet et l'intégration avec les outils de développement. Ils ont également créé un outils pour avoir un CMS sur un site statique. Il est assez simple à installer et gratuit!

[Netlify CMS](https://www.netlifycms.org/){:target="_blank"}

### dotCMS

Un peu plus joli et sympa à utiliser est dotCMS. Il est gratuit pour un projet simple et ne comprend pas l'hébergement. Il devient beaucoup plus cher si cette option n'est pas suffisante.

[dotCMS](https://www.dotcms.com/){:target="_blank"}

### DatoCMS

DatoCMS est un autre CMS headless populaire. Il permet aux équipes techniques et non techniques de travailler ensemble facilement.

[DatoCMS](https://www.datocms.com){:target="_blank"}

Il en existe beaucoup d'autre si ceux-ci ne conviennent pas.

## Formulaire

Pour récupérer les résultats d'un formulaire, il faut un serveur et un espace de stockage, habituellement une base de données, outils que l'on n'a pas sur un site statique. Ces outils gèrent donc l'hébergement à notre place.

### Basin

Basin permet aisément d'ajouter un formulaire sur son site sans avoir besoin de gérer les données. Il s'intègre facielement sur son site et avec les outils que vous utilisez déjà : Mailchimp, Slack, Trello...
Il n'est pas gratuit cependant mais relativement bon marché.

[Basin](https://usebasin.com/){:target="_blank"}

### Getform

Un équivalent et au moins aussi populaire à Basin, Getform permet de aussi de créer un formulaire et de le connecter avec Zapier. Zapier est un autre service qui permet de faire le liens entre tous vos outils / services.
Getform a une version gratuite.

[Getform](https://getform.io/){:target="_blank"}

## Utilisateurs

Il existe de nombreux service pour gérer les utilisateurs. On peut d'abord penser à l'authentification.

### Passage

Passage permet de gérer tout le process de création de compte et de connexion sur votre site. Il est plutôt complet et possède aussi une version gratuite en-dessous de 500 utilisateurs par mois.

[Passage](https://passage.id/){:target="_blank"}

### Auth0

Un des services les plus connus dans l'authentification utilisateur, Auth0 est utilisé sur de nombreux sites. Il possède les fonctionnalités les plus utilisés sur ce type d'outils.

[Auth0](https://auth0.com/){:target="_blank"}


## E-commerce

Vous pouvez également créer un site e-commerce sur un site statique.

### Snipcart

L'un des plus populaire est Snipcart, il permet de gérer tout l'aspect e-commerce sur votre site web.

[Snipcart](https://snipcart.com/){:target="_blank"}

### Commerce.js

Commerce.js est un puissant moteur e-commerce qui s'intègre avec d'autres outils pour vous proposer une suite complète pour créer un vrai site marchand.

[Commerce.js](https://commercejs.com/){:target="_blank"}

## Feedback

Vous voulez rajouter un peu d'interraction avec vos utilisateurs ? Quoi de mieux que de rajouter des fonctions sociales ?

### Disqus

C'est l'un des service les plus utilisés pour la gestion des commentaires. Il permet d'ajouter une zone commentaire sur vos pages très facilement. Vous pouvez ensuite les gérer via leur interface.

[Disqus](https://disqus.com/){:target="_blank"}

### Lyket

Lyket permet d'ajouter des boutons "pouce", "like" ou "vote" sur votre site.

[Lyket](https://lyket.dev/){:target="_blank"}

## Autre

Il existe encore des tas d'autres catégories ou d'autres services qui ne sont pas mentionnés ici. Vous pouvez en retrouver certains sur [JamTools](https://jamstacktools.org/browse){:target="_blank"} qui liste de nombreux outils.

