const countEl = document.getElementById('count');

function updateVisitCount() {
  fetch('https://api.counterapi.dev/v1/count?key=jgortiz96-Professional_Portfolio')
    .then(res => res.json())
    .then(data => {
      countEl.innerText = data.count;
    })
    .catch(err => {
      console.error('Error fetching counter:', err);
      countEl.innerText = 'Error';
    });
}

updateVisitCount()
