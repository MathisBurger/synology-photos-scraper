chrome.runtime.onMessage.addListener(async function(message, sender, sendResponse) {

    const imgRows = document.getElementsByClassName("synofoto-row-wrapper")
    for (let i=0; i<imgRows.length; i++) {
        const row = imgRows[i];
        for (let j=0; j<row.children.length; j++) {
            const imageUrl = (row.children[j].children[0].children[0].children[0].children[0].children[0] as HTMLImageElement).src;
            fetch(imageUrl)
                .then(response => response.blob())
                .then(blob => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "Download.jpg";
                link.click();
            })
        }
    }
});