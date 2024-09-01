/**
 * Executed on download button click
 */
const exec = async () => {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    for (const pass of [1, 2]) {
        try {
            await chrome.scripting.executeScript({target: {tabId: tab.id}, files: ['dist/content_script.js']})
            chrome.tabs.sendMessage(tab.id, "", () => {});
            break;
        } catch (err) {
            alert(err);
        }
    }
};

/**
 * Action assigned to download button
 */
document.getElementById("dl-btn").onclick = exec;