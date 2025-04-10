function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
  function createGroups() {
    const names = document.getElementById('names').value.split('\n').map(name => name.trim()).filter(name => name !== '');
    const groupCount = parseInt(document.getElementById('groupCount').value);
    const shuffledNames = shuffle(names);
    const groups = Array.from({ length: groupCount }, () => []);
  
    shuffledNames.forEach((name, index) => {
      groups[index % groupCount].push(name);
    });
  
    const groupsDiv = document.getElementById('groups');
    groupsDiv.innerHTML = '';
    groups.forEach((group, index) => {
      const groupDiv = document.createElement('div');
      groupDiv.classList.add('group');
      groupDiv.innerHTML = `<h2>Топ ${index + 1}</h2><ul>${group.map(name => `<li>${name}</li>`).join('')}</ul>`;
      groupsDiv.appendChild(groupDiv);
    });
  }
  