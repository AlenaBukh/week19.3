// Функция для создания HTML-разметки поста
function createPostHTML(post) {
  return `
    <div class="post">
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    </div>
  `;
}

// Функция для добавления HTML-разметки в контейнер
function addPostToContainer(container, postHTML) {
  container.innerHTML += postHTML;
}

// Функция для отправки POST-запроса и добавления поста в DOM
function addPost(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((post) => {
      const postContainer = document.getElementById("post-container");
      const postHTML = createPostHTML(post);
      addPostToContainer(postContainer, postHTML);

      // Очистка формы после добавления поста
      document.getElementById("post-form").reset();
    })
    .catch((error) => {
      console.error("Произошла ошибка при добавлении поста:", error);
    });
}

// Добавление обработчика события на форму
document.getElementById("post-form").addEventListener("submit", addPost);
