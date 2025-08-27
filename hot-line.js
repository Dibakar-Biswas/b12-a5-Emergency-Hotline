function getElement(id){
    const element = document.getElementById(id);
    return element;
}

const heartBtns = document.getElementsByClassName(' heart-btn')
console.log(heartBtns)
for(let heartButton of heartBtns){
    heartButton.addEventListener('click', function(){
        const heartCount = heartButton.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[0].children[0];
        let count = parseInt(heartCount.innerText);
        count += 1;
        heartCount.innerText = count;
    })
}

const copyBtns = document.getElementsByClassName('copy-btn')
console.log(copyBtns)
for(let copyButton of copyBtns){
    copyButton.addEventListener('click', function(){
        const helpNumber = copyButton.parentNode.parentNode.children[3].innerText;
        console.log(helpNumber)
        alert('Copied: ' + helpNumber)
        const copyCount = copyButton.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[2].children[0];
        let count = parseInt(copyCount.innerText);
        count += 1;
        copyCount.innerText = count;
        navigator.clipboard.writeText(helpNumber)
    })
}


const callBtns = document.getElementsByClassName('call-line-btn')
console.log(callBtns)

for(let callButton of callBtns){
    callButton.addEventListener('click', function(){
        const helpHeading = callButton.parentNode.parentNode.children[1].innerText;
        const helpNumber = callButton.parentNode.parentNode.children[3].innerText;
        const callTime = new Date().toLocaleTimeString();
        console.log(helpHeading, helpNumber, callTime)
        
        alert(`Calling ${helpHeading} ${helpNumber}`)
        const coinCount = callButton.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[1].children[0];
        let count = parseInt(coinCount.innerText);
        if(count < 20){
            alert('Do not have enough coin');
            return;
        }
        count -=20;
        coinCount.innerText = count;


        const historyContainer = getElement('history-container');

        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
                    <div class="flex justify-between items-center rounded-lg bg-white p-4">
                        <div>
                            <h1>${helpHeading}</h1>
                            <p>${helpNumber}</p>
                        </div>
                        <p>${callTime}</p>
                    </div>
        `
        historyContainer.append(newHistory)
    })
}

document.getElementById('btn-clear').addEventListener('click', function(){
    const historyContainer = getElement('history-container');
    historyContainer.innerHTML = '';
})

