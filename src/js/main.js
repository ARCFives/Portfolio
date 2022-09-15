const url = 'https://api.github.com/users/arcfives'
const repos = 'https://api.github.com/users/ARCFives/repos'
const userAvatar = document.querySelectorAll('.userAvatar')

async function getUser() {
  const response = await fetch(url)
  const data = await response.json()
  const { location, avatar_url } = await data
  for (let i = 0; i < 2; i++) {
    userAvatar[i].src = avatar_url
  }
  local.textContent = location
}

async function reposi() {
  const response = await fetch(repos)
  const repository = await response.json()
  const {name, description, stargazers_count, forks_count, language, } = await repository
  console.log(repository)
  repository.map(repo => {
    repositorys.innerHTML += `<div class="repo card">
    <div class="name-project">
      <img src="src/img/folder.svg">
      <span class="nameRepo">${repo.name}</span>
    </div>
    <p class="description">${repo.description}</p>
    <div class="star-base">
      <div class="stars">
        <p><img src="src/img/star.svg">${repo.stargazers_count}</p>
        <p><img src="src/img/git-branch.svg">${repo.forks_count}</p>
      </div>
      <p class="language ${repo.language}"><span><i class="fa-solid fa-circle ${repo.language}"></i></span> ${repo.language}</p>
      </div>
  </div>`
  })

  // fetch(repos)
  //   .then(response => response.json())
  //   .then(repository => {
  //     for (let i = 0; i <= 5; i++) {
  //       repositorys.innerHTML += `
  //       <div class="repo card">
  //         <div class="name-project">
  //           <img src="src/img/folder.svg">
  //           <span class="nameRepo">${repository[i].name}</span>
  //         </div>
  //         <p class="description">${repository[i].description}</p>
  //         <div class="star-base">
  //           <div class="stars">
  //             <p><img src="src/img/star.svg">${repository[i].stargazers_count}</p>
  //             <p><img src="src/img/git-branch.svg">${repository[i].forks_count}</p>
  //           </div>
  //           <p class="language ${repository[i].language}"><span><i class="fa-solid fa-circle ${repository[i].language}"></i></span> ${repository[i].language}</p>
  //           </div>
  //       </div>`
  //     }
  //   })
  //   .catch(err => console.error(err))
}

getUser()
reposi()