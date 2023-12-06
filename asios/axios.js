
let getData= document.getElementById('data')
getData.addEventListener('click',makeRequest)

function makeRequest(){
    console.log("button click")
    axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    .then((res)=>{
        res.data.data.forEach(element => {
            document.getElementById("A").innerHTML=element.Nation
            document.getElementById("B").innerHTML=element.Population
            document.getElementById("C").innerHTML=element.Year
        });   
        console.log("Ok")
    })
}