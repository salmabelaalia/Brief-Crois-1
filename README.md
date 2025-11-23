🏢 WorkSphere - Système de Gestion du Personnel
https://img.shields.io/badge/WorkSphere-Management-blue https://img.shields.io/badge/Version-1.0-green https://img.shields.io/badge/License-MIT-yellow

📋 Table des Matières
🌟 Aperçu

🚀 Fonctionnalités

🛠️ Installation

🎯 Utilisation

📁 Structure du Projet

👥 Rôles et Zones

📱 Responsive Design

🔧 Développement

🤝 Contribution

🌟 Aperçu
WorkSphere est une application web moderne de gestion du personnel permettant d'assigner dynamiquement les employés aux différentes zones d'un espace de travail. L'interface intuitive offre une visualisation claire du plan et des affectations.

🚀 Fonctionnalités
👨‍💼 Gestion du Personnel
✅ Ajout d'employés avec formulaire complet

📸 Aperçu photo en temps réel

📝 Gestion des expériences professionnelles

🎯 Validation des données en temps réel

🗺️ Plan d'Étage Interactif
🏢 6 zones configurables :

🎪 Salle de Conférence

🏣 Réception

💻 Salle des Serveurs

🔒 Salle de Sécurité

👥 Salle du Personnel

📚 Salle d'Archives

🎨 Feedback visuel des zones requises

🔄 Logique Métier Intelligente
⚡ Assignation automatique selon les rôles

🚫 Restrictions intelligentes par zone

🔄 Mise à jour dynamique des listes

📱 Design Responsive
💻 Desktop (>1280px)

🖥️ Petit écran (1024px-1279px)

📟 Tablette (768px-1023px)

📱 Mobile (<767px)

🛠️ Installation
Prérequis
Navigateur web moderne

Serveur web local (optionnel)

Étapes d'installation
bash
# Cloner le repository
git clone https://github.com/votre-username/worksphere.git

# Se déplacer dans le dossier
cd worksphere

# Ouvrir dans le navigateur
open index.html
Ou simplement ouvrir index.html dans votre navigateur.

🎯 Utilisation
1. Ajouter un Employé
Cliquez sur "AJOUTER UN PERSONNEL" ✅

Remplissez le formulaire avec :

👤 Nom et prénom

📸 Photo (URL)

🎯 Rôle

📧 Email

📞 Téléphone

💼 Expériences professionnelles

2. Assigner aux Zones
Cliquez sur "+" dans une zone

Sélectionnez un employé éligible

L'employé apparaît dans la zone

3. Gérer les Affectations
❌ Retirer : Cliquez sur "X" sur une carte employé

👀 Voir profil : Cliquez sur une carte employé

🎨 Feedback visuel : Zones requises en rouge si vides

📁 Structure du Projet
text
worksphere/
├── 📄 index.html          # Structure principale
├── 🎨 style.css           # Styles et responsive
├── ⚡ script.js           # Logique JavaScript
├── 📁 img_bg/            # Images du plan
│   ├── 🖼️ plan.jpg        # Version paysage
│   └── 🖼️ plan-portrait.jpg # Version portrait
└── 📖 README.md          # Documentation
👥 Rôles et Zones
🎯 Rôles Disponibles
🏣 Réceptionniste

💻 Technicien IT

🔒 Agent de sécurité

👨‍💼 Manager

🧹 Nettoyage

🗺️ Règles d'Assignation
Zone	Rôles Autorisés
🎪 Conférence	Tous sauf restrictions
🏣 Réception	Réceptionniste uniquement
💻 Serveurs	Technicien IT uniquement
🔒 Sécurité	Agent de sécurité uniquement
👥 Personnel	Tous sauf restrictions
📚 Archives	Tous sauf Nettoyage
📱 Responsive Design
💻 Desktop (>1280px)
Sidebar + Plan côte à côte

Grid complexe pour le plan

🖥️ Petit Écran (1024px-1279px)
Ajustements proportionnels

Optimisation des espaces

📟 Tablette (768px-1023px)
Layout vertical

Image portrait

Navigation adaptée

📱 Mobile (<767px)
Stack vertical complet

Sidebar en bas

Interactions tactiles

🔧 Développement
Plan de Développement - 5 Jours
📅 Jour 1 : Fondation & Structure
✅ Structure HTML et layout

✅ Modèles de données

✅ Modal d'ajout d'employé

✅ Validation formulaire

📅 Jour 2 : Affichage & Visualisation
✅ Liste personnel non assigné

✅ Rendu des zones

✅ Aperçu photo

✅ Sous-formulaire expériences

📅 Jour 3 : Logique Métier
✅ Règles d'assignation

✅ Bouton "+" fonctionnel

✅ Affichage zones

✅ Bouton "X" suppression

📅 Jour 4 : UI/UX & Design
✅ Système de design

✅ Feedback zones requises

✅ Profil détaillé employé

✅ Responsive desktop

📅 Jour 5 : Mobile & Déploiement
✅ Responsive tablette/mobile

✅ Animations CSS

✅ Déploiement

🛠️ Technologies Utilisées
Frontend : HTML5, CSS3, JavaScript Vanilla

Layout : CSS Grid, Flexbox

Design : Responsive Design, Modales

Stockage : JavaScript Arrays (état local)

🤝 Contribution
Les contributions sont les bienvenues ! N'hésitez pas à :

🍴 Fork le projet

🌿 Créer une branche feature

💾 Commiter vos changements

📤 Push vers la branche

🔃 Ouvrir une Pull Request

