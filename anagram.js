
const destination = document.getElementById('destination')

function createNewElement(content){
    let newElement = document.createElement('div');
    // Place a text label inside the new div.
    let newText = document.createTextNode(content);
    newElement.appendChild(newText);
    destination.appendChild(newElement);

}
function alphabetize(a) {
    return String(a).toLowerCase().split("").sort().join("").trim();
}

document.getElementById("findButton").onclick = function(){
 
    const typedText = document.getElementById("input").value   
// must be in the loop because I have to get the element when I click the button
    const Arrayagram = []   
    const sortedtypedText= alphabetize(typedText)


    for (i = 0; i < words.length; i ++){
        let x = alphabetize(words[i])
        
        if (x === sortedtypedText ){
            Arrayagram.push(words[i] + " ")
            // console.log(typedText)
        }
    }
    // console.log(Arrayagram)

    console.log(typedText)
    createNewElement(Arrayagram)
}
