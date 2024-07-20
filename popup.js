async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

document.addEventListener('DOMContentLoaded', async function() {
  // Call the function and get the response
  const currentTab = await getCurrentTab();

  if (currentTab === undefined || currentTab === null) {
    console.log('No URL to share');
    var qrcode = document.getElementById('qrcode');
    qrcode.value = 'Empty URL';
  } else {
    console.log('Generating QR code for - ' +  currentTab.url);
    var qrcode = new QRCode(document.getElementById('qrcode'), {
        text: currentTab.url,
        width: 300,
        height: 300
      });
  }
});


