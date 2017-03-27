//console.log("JS file is connected to HTML! Woo!")
 var cards = ['queen', 'queen', 'king', 'king'];
 
 var cardsInPlay =[] ;

 

			 function createBoard() {

			 	// loop in array cards +
			   
			   for (var i=0; i<cards.length; i++) {
			
			     //  Div element 
			    var cardElement = document.createElement('div');


			
			    // get a class name for css
			    cardElement.className = 'card';

				
			    
			    // Set an attribute what we can use 
			    cardElement.setAttribute('data-card', cards[i]);

				// add click event listener
			    cardElement.addEventListener('click', isTwoCards);			 	    			  

			   
			  }
			

            function isTwoCards() {
			  // 
			  cardsInPlay.push(this.getAttribute('data-card'));
			  // 
				console.log(this.getAttribute('data-card'));
				if (this.getAttribute('data-card') === 'king') {
					this.innerHTML = "<img src='http://i.imgur.com/Ou79B5C.png'>"; // If the Data card is King , this image should be too :)
				} else {
					this.innerHTML = "<img src='http://i.imgur.com/Xf3ubmM.png'>"; 
				}
			            
			  if (cardsInPlay.length === 2) {
			  


			    isMatch(cardsInPlay);   // is match not created yet


			    //  Lets Start again :) 
			    cardsInPlay = [];
			  }
			}
			