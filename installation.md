Installation
Installing

-React
-node-sass
-Git / Github repo


INSTALL REACT
npx create-react-app
{I may need to install concurrently later if I am doing more than just saas}
npm start

INSTALL SAAS
npm install --save-dev node-sass
{then I created a new directory "styles"}

INSTALL MATERIALIZE
STEP1: npm install materialize-css@next 
STEP 2:  in index.html

<!--Import Google Icon Font-->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css">

ELEMENTS WITH JAVASCRIPT ON MATERILIZE
STEP1: To Index.html ADD  <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
STEP2: Add relavant eventListener to component

INSTALL GITHUB / GIT
echo "# stateEx" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/PaulAyling/stateEx.git
git push -u origin master