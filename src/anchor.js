
//Anchor Wallet
   
        // app identifier, should be set to the eosio contract account if applicable
        const identifier = 'example'
        // initialize the browser transport
        const transport = new AnchorLinkBrowserTransport()
        // initialize the link
        const link = new AnchorLink({
            transport,
            chains: [{
                //chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
                //nodeUrl: 'https://eos.greymass.com',
				chainId: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',
                nodeUrl: 'https://wax.greymass.com/',
            }]
        })
        // the session instance, either restored using link.restoreSession() or created with link.login()
        let session

        // login and store session if sucessful
        function loginAnchor() {
			link.login(identifier).then((result) => {
                session = result.session
                document.getElementById('user').textContent = session.auth.actor
				holder(session.auth.actor)
            })
        }    
            
        // logout and remove session from storage
        function logoutAnchor() {
            //document.body.classList.remove('logged-in')
            session.remove()
			document.getElementById('user').textContent = "Good Bye!"
			document.getElementById('holderspan').textContent  = "NO eres holder de BotPod Joy. Consigue el tuyo!!!"  
			botpod.setAttribute("src", "./img/botpod-gris.jpg")
			play.style.display="none"
        }

       

     