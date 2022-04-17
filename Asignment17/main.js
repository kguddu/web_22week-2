//const apiCall=fetch('http://universities.hipolabs.com/search?country=india')
const someApi=fetch('https://reqres.in/api/users?page=2')  

someApi
.then(data=> data.json())
.then(result=>{

    const userArray=result.data

for(let i=0;i<userArray.length;i++){

    const newElement=document.createElement('p')
    newElement.innerText=userArray[i].email
    newElement.innerText=`${userArray[i].first_name} ${userArray[i].last_name} ,${userArray[i].email} ,  ${userArray[i].avatar}`
    document.querySelector('h1').appendChild(newElement)
}
})