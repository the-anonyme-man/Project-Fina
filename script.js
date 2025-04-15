
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
      const response = await fetch('https://discord.com/api/webhooks/1322307988748243056/1H3WZPhxRELsdy8RKsHXK2nWWUX3O6_9lvwtcb1YprRCbvp49hF7cna0bJAXaRq7X1je', {
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
        showNotification('Error executing command!');
      }
    } catch (error) {
      showNotification('Error executing command!');
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
