

// Function to handle button clicks and manage button states
function handleButtonClick(event) {
    // Check if the clicked element is a button
    if (event.target.tagName === 'BUTTON') {
        // Get the id of the clicked button
        let buttonId = event.target.id;

        // Perform actions based on button id
        switch (buttonId) {
            case 'button1':
                if(storedcheckerString == 'mod1D'){
                    // Store state for button 1 in localStorage and enable button 2
                    localStorage.setItem('button1Enabled', 'true');
                    enableButton('button2');
                    break;
                }else break;
            case 'button2':
                // Store state for button 2 in localStorage and enable button 3
                if(storedcheckerString == 'mod2D'){
                    localStorage.setItem('button2Enabled', 'true');
                    enableButton('button3');
                    break;
                }else break;
            case 'button3':
                // Store state for button 3 in localStorage and enable button 4
                if(storedcheckerString == 'mod2D'){
                    localStorage.setItem('button3Enabled', 'true');
                    enableButton('button4');
                    break;
                }else break;
            // Add more cases for additional buttons if needed
            default:
                console.log('Unknown button clicked.');
        }
    }
}

// Function to enable a button and update its state in localStorage
function enableButton(buttonId) {
    let button = document.getElementById(buttonId);
    if (button) {
        button.disabled = false;
        // Store the enabled state of the button in localStorage
        localStorage.setItem(`${buttonId}Enabled`, 'true');
    }
}

// Function to initialize button states based on localStorage on page load
function initializeButtonStates() {
    if(storedcheckerString3){
        localStorage.setItem('button3Enabled', 'true');
        enableButton('button2');
        enableButton('button3');
        enableButton('button4');   
    }else if(storedcheckerString2){
        localStorage.setItem('button2Enabled', 'true');
        enableButton('button2');
        enableButton('button3');
    }else if(storedcheckerString1){
        localStorage.setItem('button1Enabled', 'true');
        enableButton('button2');
    }else console.log('Unknown button clicked.');
}

let storedcheckerString1 = localStorage.getItem('modcheck1');
let storedcheckerString2 = localStorage.getItem('modcheck2');
let storedcheckerString3 = localStorage.getItem('modcheck3');
// Add event listener to handle button clicks
document.addEventListener('click', handleButtonClick);

// Initialize button states based on localStorage on page load
window.addEventListener('load', initializeButtonStates);

