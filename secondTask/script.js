
const onLoad = () => {
    postData('https://api.catalogopolis.xyz/v1/actors', {})
        .then(data => {              
            var htmlData = '';
            data.map((record)=>{
                htmlData+='<div class="col-md-4">'
                htmlData+='<div class="card mb-4 box-shadow">';               
                htmlData+='<div class="card-body">';
                htmlData+='<p class="card-text">'+record.name+'</p>';
                htmlData+='<p class="card-text">'+record.gender+'</p>';
                htmlData+='</div>';
                htmlData+='</div>';
                htmlData+='</div>';    
            });
                
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
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'            
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer',
        //body: JSON.stringify(data)
    });
    return response.json();
}

