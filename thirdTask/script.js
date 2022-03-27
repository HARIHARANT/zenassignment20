
const statusCode = ()=>{
    let stsCode = document.getElementById("statusCode").value;
    
}
const onLoad = () => {
    postData('https://zoo-animal-api.herokuapp.com/animals/rand', {})
        .then(data => {              
            var htmlData = '';            
            htmlData+='<div class="col-md-4">'
                htmlData+='<div class="card mb-4 box-shadow">';  
                htmlData+='<img class="img" src="'+data.image_link+'">';              
                htmlData+='<div class="card-body">';
                htmlData+='<p class="card-text">Name '+data.name+'</p>';
                htmlData+='<p class="card-text">Animal Type'+data.animal_type+'</p>';
                htmlData+='<p class="card-text"> Life Span'+data.lifespan+'</p>';
                htmlData+='</div>';
                htmlData+='</div>';
                htmlData+='</div>';
        document.getElementById('paintCards').innerHTML = htmlData;       
    });
}
onLoad();

async function postData(url = '', data = {}) { 
    console.log(url);   
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'            
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer',
        //body: JSON.stringify(data)
    });
    return response.json();
}

