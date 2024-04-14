
	
	
	async function holder(user) {
		const urlHolder = "https://wax.api.atomicassets.io/atomicassets/v1/accounts?template_id=782954&page=1&limit=1000&order=desc";
		const wallet = user;
		
		const response = await fetch(`${urlHolder}`);
		const records = await response.text();
		isHolder = records.includes(`${wallet}`);
		
		if (isHolder == true){
			document.getElementById('holderspan').textContent  = "Eres holder de BotPod Joy. Puedes Jugar!!!";
			botpod.setAttribute("src", "./img/botpod-color.jpg");
			play.style.display="flow";
		  } else{
			document.getElementById('holderspan').textContent  = "NO eres holder de BotPod Joy. Consigue el tuyo!!!";  
			botpod.setAttribute("src", "./img/botpod-gris.jpg");
		  } 
	}
	
	
	
    
   
		
    