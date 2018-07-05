# Retour d'expérience sur les framework JS

Code utilisé dans le cadre d'un retour d'expérience sur les 3 principaux framework JS :
- Angular
- React
- Vue

Retour d'expérience : https://docs.google.com/presentation/d/1-DIdrek20kqqUu92EXE9mnmKJNSHarMe1dBCW41rkMQ/edit?usp=sharing

## Application réalisée

Pour mettre en évidence les différences entre les 3 framework, la même application a été faite en Angular, en React et en Vue.  
L'application est une TodoList avec un formulaire d'ajout de Todo selon le template HTML suivant :

```html
<div>
    <form>
        <label>Add todo</label>
        <input type="text" />
    </form>
    <ul>
        <li>
            <input type="checkbox" />
            <span class="done">Texte</span>
        </li>
    </ul>
</div>
```

## Angular

Application créée à partir de la CLI Angular.

Pour lancer l'application Angular :
```
cd ./Angular
npm i
npm start
```

## React

Application créée à partir de la CLI `create-react-app`.

Pour lancer l'application React :
```
cd ./React
npm i
npm start
```

## Vue

Application créée à partir de la CLI Vue.

Pour lancer l'application Vue :
```
cd ./Vue
npm i
npm start
```
