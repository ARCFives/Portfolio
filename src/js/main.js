const repos = 'https://api.github.com/users/ARCFives/repos'

async function reposi() {
  const response = await fetch(repos)
  const repository = await response.json()
  repository.map(repo => {
    repositorys.innerHTML += `<div class="repo card">
    <div class="name-project">
      <img src="./src/img/folder.svg">
      <a href="${repo.html_url}" target="_blank" class="nameRepo">${repo.name}</a>
    </div>
    <p class="description">${repo.description}</p>
    <div class="star-base">
      <div class="stars">
        <p><img src="./src/img/star.svg">${repo.stargazers_count}</p>
        <p><img src="./src/img/git-branch.svg">${repo.forks_count}</p>
      </div>
      <p class="language ${repo.language}"><span><i class="fa-solid fa-circle ${repo.language}"></i></span> ${repo.language}</p>
      </div>
  </div>`
  })}

reposi()