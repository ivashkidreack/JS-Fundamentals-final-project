const teamForm = document.querySelector('#team-form');
const teamInput = document.querySelector('#team-input');
const container = document.querySelector('.container');

teamForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const teamName = teamInput.value.trim();
  if (teamName !== '') {
    addTeam();
    teamInput.value = '';
  }
});

function addTeam() {
  const teamItem = document.createElement('div');
  teamItem.innerHTML = `<form id="team-form">
                          <input type="text" id="team-input" placeholder="Team name">
                        </form>
                        <button class="delete-button">Delete</button>`;
  const deleteButton = teamItem.querySelector('.delete-button');
  deleteButton.addEventListener('click', function() {
    container.removeChild(teamItem);
  });
  container.appendChild(teamItem);
};

fetch('words.json')
  .then(response => response.json())
  .then(data => {
    console.log(data[2]);
  })
  .catch(error => {
    console.error('Error fetching JSON: ', error);
  });