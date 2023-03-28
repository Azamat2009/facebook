const baseURL = "http://localhost:3000/user";
let wrapper = document.querySelector('.users');

fetch(baseURL)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      let userDiv = document.createElement('div');
      userDiv.classList.add('user');

      userDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p>Company: ${user.company.name}</p>
        <p>Website: ${user.website}</p>
        <p>Phone: ${user.phone}</p>
        <button>Подробнее</button>
      `;

      wrapper.appendChild(userDiv);
    });
  })
  .catch((error) => console.log(error));