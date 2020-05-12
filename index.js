	

//Grabbing news container
	let newsAccordion=document.getElementById('newsaccordion');
	//Creating get request
	const xhr=new XMLHttpRequest();
	xhr.open('GET','https://newsapi.org/v2/top-headlines?country=in&apikey=4d30488866f942d4af6e8cbaf1882f19',true);
	xhr.onload=function(){
		if(this.status==200){
			let json=JSON.parse(this.responseText);
			let articles=json.articles;
			console.log(json);
			let newsHTML="";
		articles.forEach(function(element,index){
				let news=`
						 <div class="card">
						    <div class="card-header" id="heading${index}">
						      <h2 class="mb-0">
						        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
						         <b>#${index+1}</b> ${element["title"]}
						        </button>
						      </h2>
						    </div>

						    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsaccordion">
						      <div class="cardbody">
						        ${element["content"]}.<a href="${element["url"]}" target="_blank">Read more...</a>

						      </div>
						    </div>
						</div>
  						`;
  						newsHTML+=news;
			});
			newsaccordion.innerHTML=newsHTML;
			}
		else{
			console.log("some error occured");
		}
	}

	xhr.send();
	

	