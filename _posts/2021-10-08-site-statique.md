---
layout: blog-post
title:  "Qu'est-ce qu'un site statique ?"
date:   2021-10-08 15:00 +0100
poster: subway-notstatic.jpg
categories: "blog"
excerpt_separator: <!--more-->

---

Un site web statique n'est pas un site immobile, c'est un site dont le contenu ne change pas en fonction de l'utilisateur.

A l'inverse, un site dynamique présente un contenu différent selon l'utilisateur. Par exemple votre profil Facebook qui n'est accessible que par vous. Les pages sont alors construites "à la volée" grâce à un langage de programmation qui s'exécute sur un serveur. En informatique, on appelle cette partie le backend. À l'opposé on trouve le frontend qui est la partie visible du site internet.

La plupart des sites internet sont dynamiques.

Quel est alors l'intérêt d'un site statique ? Et dans quel cas est-ce avantageux ?

<!--more-->

# Comment ça fonctionne ?

Un site statique est la forme la plus simple possible d'un site Internet. Un simple fichier HTML suffit pour créer un site statique. Il est ensuite facile de déposer ce fichier sur un serveur web pour le rendre accessible à tout le monde.

On peut également styliser et animer n'importe quel site grâce aux technologies comme le CSS et le Javascript. Il n'y a donc pas de différence visuelle entre un site statique et un site dynamique. Ce sont les mêmes technologies utilisées.

Un simple fichier HTML suffit pour créer un site mais il est possible d'utiliser un générateur de site statique. Cela permet d'avoir une plus grande facilité à la création et à la maintenance. Par exemple [Jekyll](https://jekyllrb.com/){:target="_blank"} dispose de nombreux outils pour faciliter la création d'un site. Il est d'ailleurs utilisé sur ce site. Il existe d'ailleurs [beaucoup d'autres générateurs](https://www.staticgen.com/){:target="_blank"}.

L'ensemble sera ensuite hébergé sur un serveur, le plus basique possible. Celui-ci se contente de transmettre les pages aux navigateurs clients. Il n'y a pas de code, pas de base de données, pas de calcul.

On est donc limité par ce qu'on peut faire : pas d'administration, pas d'envoi de mail, rien "d'intelligent"... mais on se retrouve avec un site extrêmement rapide et simple à gérer.

En contrepartie on peut utiliser ou créer des services tiers, c'est-à-dire hébergés sur des serveurs externes, pour gérer certaines fonctionnalités qui ne sont pas possible de gérer directement : gestion des commentaires sur les articles, panier d'achat...

# Avantages et inconvénients d'un site statique

On va voir ici quels sont les points forts et les points faibles d'un site statique par rapport à un site dynamique.

## Avantages

### Simplicité

L'avantage le plus évident d'un site statique est évidemment sa simplicité, que ce soit dans le code source utilisé pour le créer ou pour gérer l'hébergement et la maintenance.

Cela permet d'avoir un site peu onéreux et facile à mettre à jour.

### Rapide

Un site statique est beaucoup plus rapide qu'un site dynamique, forcément il n'y a pas de backend donc pas de base de données et pas de code. Le serveur n'a pas de calcul à effectuer. Seule la partie visible (frontend) est chargée par l'utilisateur.

### Sécurisé

Un autre point extrêmement important est la gestion liée à la sécurité. Comme on l'a vu plus haut, il n'y a pas de code sur le serveur, donc beaucoup moins de failles de sécurités possible que ce soit via le code, les outils ou les serveurs.

Les problèmes restants sont liés au serveur sur lequel est hébergé votre site web : système d'exploitation, serveur web... Problèmes qui sont également présents sur des sites dynamiques.

A savoir que tout ce que vous publiez sur un site statique peut être visible par n'importe qui. Il faut donc être prudent quand on met à jour son site.

### Mise à jour

La mise à jour se fait très facilement. On le fait soit via une ligne de commande soit via un outil - comme un client FTP - pour transmettre les fichiers qu'on a sur son poste vers le serveur.

C'est quelque chose de très courant et il existe beaucoup de documentation pour faciliter la montée en compétence sur ce sujet.

### Bon marché

Un autre avantage est qu'il est bon marché. En effet, comme on l'a vu, il n'y a pas de backend, donc le serveur nécessaire est le plus basique possible. Pas de code, pas de base de données, un serveur simple est donc suffisant.

Il existe également des solutions (comme [Github Pages](https://pages.github.com/){:target="_blank"}) qui hébergent gratuitement le code et le déploie sur un serveur. Seul le nom de domaine est à votre charge.

### Limité mais possible d'externaliser

On le verra dans la partie suivante mais le fait de ne pas avoir de backend peut limiter grandement ce qu'on veut faire. Il faut donc bien réfléchir à quel type de site on veut.

D'un autre côté, il est possible d'externaliser les fonctionnalités intelligentes du site en utilisant des services tiers. Par exemple, on peut afficher des commentaires via [Disqus](https://disqus.com/){:target="_blank"}, c'est donc ce service qui va gérer tous les commentaires de votre site. Il se base sur l'URL de la page pour afficher ce qu'il faut.

On peut aussi confier les statistiques des visites à [Google Analytics](https://www.google.fr/intl/fr/analytics/){:target="_blank"}.

Il existe de plus en plus de services tiers qui peuvent vous faire profiter de fonctionnalités que vous ne pourrez pas faire sur un site statique. Vous pouvez aussi le faire vous-même sur un autre site. Mais si vous en avez vraiment besoin, ce n'est peut-être pas un site statique qu'il vous faut.

## Inconvénients

### Pas d'administration

L'inconvénient le plus considérable d'un site statique est qu'il est limité. On ne peut pas faire de chose "intelligente". C'est-à-dire qu'on ne peut pas utiliser de formulaire, donc pas d'administration ou de connexion/inscription. Ça veut aussi dire pas de backend, donc pas possibilité d'envoi de mail ou d'enregistrer dans une base de données par exemple.

Si vous vous demandez si ce que vous voulez faire est possible, il suffit de se poser la question: "Est-ce que j'ai besoin de code sur le serveur ?". Si la réponse est oui alors un site statique n'est pas fait pour vous.

On ne peut pas avoir quelque chose de très simple, de bon marché et de très complet.

Il ne faut pas négliger cet inconvénient pour prendre la décision du type de site web qu'on veut. On utilisera donc plus facilement un site statique sur un site plutôt simple, qu'on ne mettra pas à jour trop régulièrement.

### Compétences

L'utilisation d'un générateur de site statique demande du temps d'apprentissage. L'outil n'est pas obligatoire mais il facilite grandement la vie d'un site. Il faut donc comprendre la structure des dossiers, les syntaxes utilisées et la configuration du site ainsi que la façon dont le générateur fonctionne.

De plus, la majorité des générateurs utilise la ligne de commande pour la plupart des tâches (par exemple : lancer le serveur). Il faut donc connaître les commandes les plus basiques d'un terminal pour être efficace et comprendre ce que l'on fait.

# Dans quels cas privilégie t-on un site statique ?

On conseille généralement un site statique pour des sites relativement simples, par exemple des sites de présentations : CV, portfolio, sites vitrines d'entreprise ou de produit, ou également pour de la documentation technique ou non.

La qualité perçue peut être la même que ce soit un site statique ou dynamique : ce sont les mêmes technologies qui peuvent être utilisées.

Les sites statiques font généralement moins de mise à jour que des sites dynamiques sur lesquels la modification est simplifiée via des CMS (exemple : [Wordpress](https://fr.wordpress.com/){:target="_blank"}) pour ajouter ou modifier des articles ou des pages.

Pour finir, un site statique a des limites et des inconvénients qu'il faut connaître mais qu'on peut parfois contourner en utilisant des services externes. On peut donc tout à fait utiliser un site statique pour de nombreux besoins, bien plus que ceux présentés ci-dessus.

Pour finir, je conseille, dans la mesure du possible, d'utiliser un site statique qui sera plus rapide, simple et sûr.