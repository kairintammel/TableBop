let catCount = 0;

function AddCategory() {
  // Get the main container element by ID
  const body = document.getElementsByTagName("body").item(0);

  // Clear the container
  if (body && catCount == 0) {
    catCount += 1;
    body.innerHTML = '';
    const newContent = document.createElement('div');
    newContent.className = 'apps';
    newContent.innerHTML = `
           <button class="newApp"> Kool </button>
           <button class="newApp" onclick="AddCategory()"> New </button>
        `;
    body.appendChild(newContent);
  }
  else {
    catCount += 1;
    const apps = document.getElementsByClassName('apps').item(0);

    if (apps) {
      apps.innerHTML += `
           <button class="newApp"> Kool </button>
           <button class="newApp"> New </button>
        `;
      }
    }

  }


// Attach AddCategory function to the window object
window.AddCategory = AddCategory;