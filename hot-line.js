function getElement(id){
    const element = document.getElementById(id);
    return element;
}

document.getElementById('heart-icon').addEventListener('click', function(){
    const heartCount = getElement('heart-count');
    let count = parseInt(heartCount.innerText);
    count += 1;
    heartCount.innerText = count;
})

// document.getElementById('copy-btn').addEventListener('click', function(){
//     const copyCount = getElement('copy-count');
//     let count = parseInt(copyCount.innerText);
//     count += 1;
//     copyCount.innerText = count;
// })


  document.getElementById('copy-btn').addEventListener('click', function (e) {
    const copyCount = getElement('copy-count');
    let count = parseInt(copyCount.innerText);
    count += 1;
    copyCount.innerText = count;
    const section = e.target.closest("section");
    const paragraph = section.querySelector("p");
    navigator.clipboard.writeText(paragraph.innerText)
      .then(() => {
        alert("Copied: " + paragraph.innerText);
      })
      
  });

document.getElementById('call-btn').addEventListener('click', function()
{
    const coinCount = getElement('coin-count');
    let count = parseInt(coinCount.innerText);
    if(count <20){
        alert('Do not have enough coin');
        return;
    }
    count -= 20;
    coinCount.innerText = count;

    const title = document.querySelector('.card-title').innerText;
    const Number = document.querySelector('.number').innerText;
    const data = {
        date: new Date().toLocaleTimeString(),
    }
    const historyContainer = getElement('history-container')
    const newHistory = document.createElement('div')
    newHistory.innerHTML = `
                    <div class="flex justify-between items-center bg-slate-100 rounded-lg">
                        <div>
                            <h1>${title}</h1>
                            <p>${Number}</p>
                        </div>
                        <p>${data.date}</p>
                    </div>
    `;
    historyContainer.append(newHistory)
})