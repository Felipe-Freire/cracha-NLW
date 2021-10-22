const LinksSocialmedia = {
  github: 'Felipe-Freire',
  youtube: 'channel/UC1ymQUxMvtnzHXBqpxOOMUw',
  facebook: 'felipe.izidoro.18',
  instagram: 'felipeifreire',
  twitter: 'l1p3_GIF'
}

function changeSocialMediaLink() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialmedia[social]}`
  }
}

changeSocialMediaLink()

function getGitHubProfilesInfos() {
  const url = `https://api.github.com/users/${LinksSocialmedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGit.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
      titlePage.textContent = `${data.name} - DoWhile`
    })
}

getGitHubProfilesInfos()
