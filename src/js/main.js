const url = 'https://api.github.com/users/arcfives'
const repos = 'https://api.github.com/users/ARCFives/repos'
const userAvatar = document.querySelectorAll('.userAvatar')

function getUser() {
  fetch(url)
    .then(response => response.json())
    .then(item => {
      for(let i = 0; i < 2; i++) {
        userAvatar[i].src = item.avatar_url
      }
      local.textContent = item.location
    })
    .catch(err => console.error(err))
}

function reposi() {
  fetch(repos)
    .then(response => response.json())
    .then(repository => {
      for(let i = 0; i <= 5; i++) {
        repositorys.innerHTML += `
        <div class="repo card">
          <div class="name-project">
            <img src="src/img/folder.svg">
            <span class="nameRepo">${repository[i].name}</span>
          </div>
          <p class="description">${repository[i].description}</p>
          <div class="star-base">
            <div class="stars">
              <p><img src="src/img/star.svg">${repository[i].stargazers_count}</p>
              <p><img src="src/img/git-branch.svg">${repository[i].forks_count}</p>
            </div>
            <p class="language ${repository[i].language}"><span><i class="fa-solid fa-circle ${repository[i].language}"></i></span> ${repository[i].language}</p>
            </div>
        </div>`
      }
    })
    .catch(err => console.error(err))
}

getUser()
reposi()