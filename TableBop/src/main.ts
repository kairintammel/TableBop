import { writeFile, BaseDirectory } from "@tauri-apps/plugin-fs";

//const containerId = "nameless-container";	
//const placeholder = "Enter a name for the new window...";
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Saved File</title>
</head>
<body>
  <h1>Hello, this file was saved to disk!</h1>
</body>
</html>
`;

const addBtn = document.getElementById("addBtn");

if (addBtn) {
  console.log("Button found.");
  addBtn.addEventListener("click", () => {
    console.log("Button clicked.");
    bopRequest('main', 'Whats Boppin?');
  });
}




//bopRequest(containerId, placeholder);

function bopRequest(containerId: string, placeholder: string): void {

  console.log("Adding text field to container...");
  
  const container = document.getElementById(containerId);

  // Check if the container exists
  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }

  // Create a new input element
  const textField = document.createElement("input");

  // Set the type and placeholder for the input field
  textField.type = "text";
  textField.placeholder = placeholder;
  
  // Wrap the newWindow function in an event handler
  textField.oninput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    console.log(`Input value: ${input.value}`);
  };

  const icon = document.createElement("a");
  const img = document.createElement("img");

  icon.id = "nameless-icon";
  img.src = "../src-tauri/icons/food_11558146.png";
  img.width = 50;
  img.height = 50;
  img.alt = "icon";

  icon.appendChild(img);
  container.appendChild(icon);  

  // Append the input field to the container
  container.appendChild(textField);

  console.log("Text field added successfully.");
}

async function createNewWindow(fileName: string): Promise<void> {
  try {
    // Write to the file in the AppData directory
    let encoder = new TextEncoder();
    let data = encoder.encode(htmlContent);
    await writeFile(fileName, data, { baseDir: BaseDirectory.AppLocalData });

    console.log(`File "${fileName}" created successfully.`);
  } catch (err) {
    console.error("Failed to create the file:", err);
  }
}
