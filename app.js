const friendsNamesList = []
const friendNameInput = document.getElementById('friend')
const friendsList = document.getElementById('friendsList')
const result = document.getElementById('result')

function appendFriendToDOM(friendName) {
  const friendNameItem = document.createElement('li');
  friendNameItem.textContent = friendName;
  friendsList.appendChild(friendNameItem);
}

function addFriend() {
  const friendName = friendNameInput.value.trim();

  if (!friendName) {
    alert('Por favor, insira um nome.');
    return;
  }

  if (friendsNamesList.includes(friendName)) {
    alert('Este nome já foi adicionado à lista.');
    return;
  }

  friendsNamesList.push(friendName);
  appendFriendToDOM(friendName);

  friendNameInput.value = '';
  friendNameInput.focus();
}

function sortFriend() {
  if (friendsNamesList.length === 0) {
    alert('Adicione amigos na lista antes de sortear.');
    return;
  }

  const randomIndex = Math.floor(Math.random() * friendsNamesList.length);
  const selectedFriend = friendsNamesList[randomIndex];
  result.textContent = `O amigo secreto sorteado é: ${selectedFriend}`;
}


