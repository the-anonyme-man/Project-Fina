// Lenny if u touch that ur gay with eric
// _     _____ _   _ _   ___   __  ___ ____       _    
//| |   | ____| \ | | \ | \ \ / / |_ _/ ___|     / \   
//| |   |  _| |  \| |  \| |\ V /   | |\___ \    / _ \  
//| |___| |___| |\  | |\  | | |    | | ___) |  / ___ \ 
//|_____|_____|_| \_|_| \_|_|_|___|___|____/  /_/   \_\
//    | | ____\ \      / /_ _/ ___|| | | |             
// _  | |  _|  \ \ /\ / / | |\___ \| |_| |             
//| |_| | |___  \ V  V /  | | ___) |  _  |             
// \___/|_____|  \_/\_/  |___|____/|_| |_|             




document.addEventListener('DOMContentLoaded', function() {
  const textbox = document.querySelector('.textbox');
  const clearButton = document.querySelector('.clear');
  const executeButton = document.querySelector('.execute');

  clearButton.addEventListener('click', function() {
    textbox.value = '';
    showNotification('Cleared!');
  });

  executeButton.addEventListener('click', async function() {
    const content = textbox.value.trim();
    if (!content) return;

    try {
      const response = await fetch('No webhook for u -w-', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: content
        })
      });

      if (response.ok) {
        showNotification('Successfully executed!');
      } else {
        showNotification('Error executing script!');
      }
    } catch (error) {
      showNotification('Error executing the script!');
    }
  });

  function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
});
