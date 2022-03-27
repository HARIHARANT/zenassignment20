const onLoad = () => {
    postData('https://bobsburgers-api.herokuapp.com/characters/', {})
        .then(data => {            
            var htmlData = '';
            data.map((record)=>{
                
                htmlData+='<div class="col-md-4">'
                htmlData+='<div class="card mb-4 box-shadow">';
                htmlData+='<img class="card-img-top small" src="'+record.image+'" width="250" height="250" alt="Card image cap">'
                htmlData+='<div class="card-body">';
                htmlData+='<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>';
                htmlData+='<div class="d-flex justify-content-between align-items-center">';
                htmlData+='<div class="btn-group">';
                htmlData+='<button type="button" class="btn btn-sm btn-outline-secondary">View</button>';
                htmlData+='<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>';
                htmlData+='</div>';
                htmlData+='<small class="text-muted">9 mins</small>';
                htmlData+='</div>';
                htmlData+='</div>';
                htmlData+='</div>';
                htmlData+='</div>'; 
            });
            
            document.getElementById('paintCards').innerHTML = htmlData;       
        });
}
onLoad();

async function postData(url = '', data = {}) {    
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

