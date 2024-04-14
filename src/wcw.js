
const wax = new waxjs.WaxJS({
		rpcEndpoint: 'https://wax.greymass.com'
	});

	async function login() {
		try {
		  const userAccount = await wax.login();
		  document.getElementById('user').textContent = userAccount;
		  holder(userAccount);
		  
		} catch(e) {
		  document.getElementById('response').append(e.message);
		}
	}
	
	async function logout() {
		try {
		  const userAccount = await wax.logout();
		  document.getElementById('user').value = "Good Bye!";
		  document.getElementById('holderspan').textContent  = "NO eres holder de BotPod Joy. Consigue el tuyo!!!";  
		  botpod.setAttribute("src", "./img/botpod-gris.jpg");
		  play.style.display="none";
		} catch(e) {
		  document.getElementById('response').append(e.message);
		}
	}	