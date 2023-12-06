
let getData= document.getElementById('data')
getData.addEventListener('click',makeRequest)

function makeRequest($e){
    e.preventDeafult()
    //get id form 
    
  const config={
    method:'POST',
    url: 'https://my-json-server.typicode.com/typicode/demo/posts',
    data:{
        "id" :"1",
        "title": "no post"

        // data:json-stringigy{id:id, title:title}
    }

  }
  axios(config).then((res)=>{
        console.log("axios called")
        console.log(res.data)
        console.log("ok")
  })
}