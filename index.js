let input = document.getElementById('input-area')
let submitBtn = document.querySelector('#text-submit');
let notesMainContainer = document.querySelector(".notes-container")
// let delBtn;
let localData = [];
let inputVal;
let receivedText 


submitBtn.addEventListener('click', () => {
    fetchInput(input.value)
    createTextarea(input.value)
    clearInputArea()
    receiverLocaldata()
    // console.log('clicked')


})

const fetchInput = (inputText) => {
    receivedText=input.value
    localData.push(input.value.trim())
    localData = [...new Set(localData)]
    console.log(localData);
    // inputVal = inputText.value
    // localData.push(inputVal)
    // localData = [...new Set(localData)]

    return localData

}

// const dataForNode = (dataFornode) =>{

// }


const clearInputArea = () => {
    input.value = ''
}

const eleCreator = (receivedText) => {

    let newTextarea = document.createElement("div")
    newTextarea.className = 'container'
    notesMainContainer.appendChild(newTextarea)

    let delBtn = document.createElement("button")
    delBtn.className = 'delBtn'


    delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    newTextarea.appendChild(delBtn)


    let spanText = document.createElement("span")
    // console.log(receivedText)
    spanText.textContent = receivedText
    newTextarea.appendChild(spanText)

    newTextarea.querySelector('.delBtn').addEventListener('click', () => {
        // console.log('del btn clicked');
        newTextarea.remove()
    })

    return newTextarea
}

const createTextarea = () => {
  
    eleCreator(receivedText)
}


const deleteNode = (newTextarea) => {
    // console.log('del btn clicked')
    // document.querySelector('.container').remove()
    newTextarea.querySelector('')


}


//local storage
const receiverLocaldata = () => {
    // console.log(fetchInput()  
    // for (const iterator of localData) {
    //     console.log(iterator);
    // }
    console.log('new text')

    // for (let index = 0; index < localData.length; index++) {
    //     console.log(localData[index]);

    // }
    localStorage.setItem("myLocalData", JSON.stringify(fetchInput()))

}

document.querySelector('#undo').addEventListener('click', () => {
    // console.log('undo');
    // receiverLocaldata()
    let data = [...new Set(JSON.parse(localStorage.getItem(("myLocalData"))))]
    // for (let index = 0; index < data.length; index++) {
    //     console.log(data[index]);

    // }
   for (const iterator of data) {
    console.log(iterator);
    eleCreator(iterator)
   }
   

    })