const url = "https://reqres.in/api/users/";
const table = document.getElementById("data-table");


let getData = async () => {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    };
    
    const data = await response.json();
    console.log(data);

    data.data.forEach((user) => {
    const row = document.createElement("tr");
    const btn = document.createElement("button");

    btn.innerText = "";
    btn.classList.add("menu-button");
      
    // Create the options menu as a <div> and initially hide it
    const menu = document.createElement("div");
    menu.className = "options-menu";
    menu.style.display = "none";

    // Add options to the menu
    const editOption = document.createElement("button");
    editOption.innerText = "Edit";
    editOption.className = "option";
    editOption.addEventListener("click", () => {
    // Define the action for the "Edit" option
    alert("Edit option clicked for user: " + user.id);
     });

    const deleteOption = document.createElement("button");
    deleteOption.innerText = "Delete";
    deleteOption.className = "option";
    deleteOption.addEventListener("click", () => {
    // Define the action for the "Delete" optiona
    alert("Delete option clicked for user: " + user.id);
    });

    menu.appendChild(editOption);
    menu.appendChild(deleteOption);

    // Add a click event listener to the button for some action
    btn.addEventListener("click", function () {
    // Define what happens when the button is clicked, e.g.display options menu
    if (menu.style.display === "none") {
      menu.style.display = "flex"
    } else {
      menu.style.display = "none"
    }
    });
      
    row.innerHTML = `
    <td>${user.id}</td>
    <td><div class= "person" ><img src= ${user.avatar}></img> ${user.first_name} ${user.last_name}</div></td>
    <td>${user.email}</td>
    <td></td>`;

    // Append the button to the last cell in the row
    row.querySelector("td:last-child").appendChild(btn);
    row.querySelector("td:last-child").appendChild(menu);
      
    table.appendChild(row);  
      });
    
  } catch (error) {
    console.log(error);
  }

   // Add a click event listener to the document
    document.addEventListener('click', function(event) {
    // Check if the click target is not inside the options menu
    if (!event.target.matches('.menu-button') && !event.target.closest('.options-menu')) {
    // Close the options menu by hiding it
    const menus = document.querySelectorAll('.options-menu');
    menus.forEach(function(menu) {
    menu.style.display = 'none';
        });
      }
    });
  
};
  
getData();


