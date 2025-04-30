# [My Favorite Films](https://elenka9.github.io/FavFilms_RTK/)
*☝️ клик, чтобы посмотреть. можно добавить свои фильмы*
## Frontend Project
**Skills:** Java Script, React, Rudux, Vite

**About proejct:** Одно из моих первых приложений на JS. Приложение, где можно добавлять и удалять фильмы в список избранных. При перезагрузке список сохраняется (потому что данные записываются в localStorage с помощью библиотеки redux-persist). Также из существующего списка можно осуществлять поиск фильмов, добавленных в избранное. Приложение не самое эстетичное, но функциональное.

![Снимок экрана 2025-04-30 154931](https://github.com/user-attachments/assets/ecb66f81-3314-4cec-842a-4232eb805ad6)

***
Для опубликования проекта на GitHub Pages на потребовалось внести изменения в файлы: 
1. Установка зависимости в проект - npm i gh-pages 
2. В package.json добавлены 2 скрипта -
  ```
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  ```

3. В vite.config.js добавлена строка:
```
base: '/Название репозитория'
```

4. После `git push origin` дополнительно делаем - `npm run deploy`



