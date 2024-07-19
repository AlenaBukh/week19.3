# Posts

Программа, которая добавляет посты на страницу.

<img src="./assets/images/posts.png" alt="posts" />

Написана функция для создания постов, в ней идет вызов fetch, с двумя обработчиками then, который:

1. делает POST-запрос по адресу https://jsonplaceholder.typicode.com/posts;
2. с телом - JSON с двумя свойствами title и body;
3. со свойством headers с единственным заголовком: 'Content-Type': 'application/json; charset=UTF-8';
4. добавляет созданный пост в DOM.

<a href="https://jsonplaceholder.typicode.com/">Документация</a> сервиса JSONplaceholder.

Технологии:

<div align="center">  
<a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a> 
<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>   
<a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>  
<a href="https://github.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" /></a>  
<a href="https://code.visualstudio.com/" target="_blank"><img style="margin: 10px" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg" alt="VS Code" height="50" /></a>
