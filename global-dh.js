

"use strict";
/* == [ properties ]
== == == == == == == == ==  */
const 
	_ = ( ...v ) => console.log( ...v ),
	$ = v => document.querySelector( v ),
	$$ = v => document.querySelectorAll( v )
;
/* -- -- -- -- -- -- -- -- -- */

addEventListener( "load", ev => {
	let 
		NavLinks = $$( "navlink" ),
      rightAnswers = $$( "[choice]" ),
      videoTags = $$( "video" )
   ;
 
   
	NavLinks.forEach( nv => {
		nv.addEventListener( "click", ev => {
			window.open( nv.getAttribute( "to" ), "_blank" );
		} );
	} );

   rightAnswers.forEach( ra => {
      if( ra.getAttribute( "choice" ) != "" ) {
         ra.querySelector( "input" ).setAttribute( "checked", "checked" );
         ra.setAttribute( "choice", "certa" );
         _( "checked" );
      }
   } );

   videoTags.forEach( vt => {
      vt.setAttribute( "controls", "controls" );
   } );



   /* == [ code template ] == == == == == == == == == */
   let codeTemplate = `
   <style>
      code {
         display: block;
         background: #212329;
         position: relative;
         min-height: calc( 36px + 48px );
         overflow: hidden;
         border-radius: 7px;
      }
      code > top-bar {
         display: grid;
         align-items: center;
         background: #16181c;
         color: #fc0;
         position: absolute;
         top: 0; left: 0;
         width: 100%;
         height: 36px;
         padding: 0 2vw;
      }
      code > side-bar {
         display: block;
         background: #1b1d22;
         position: absolute;
         top: calc( 36px + 4px ); left: 0;
         width: 48px;
         height: calc( 100% - 40px );
         padding: 2px 4px;
      }
      code > bg {
         display: block;
         position: relative;
         top: 36px; right: 0;
         margin: 0 0 0 auto;
         padding: 10px 0;
         width: calc( 98% - 48px );
         height: calc( 100% - 36px );
         max-height: 650px;
         overflow: scroll;
         white-space-collapse: break-spaces;
         white-space-collapse: preserve-breaks;
         color: #eee;
      }
   </style>
   <code>
      <top-bar></top-bar>
      <side-bar></side-bar>
      <bg></bg>
   </code>
   `;
   
   class Code extends HTMLElement {
      constructor() {
         super();
         let code = document.createElement( "template" );
         code.innerHTML = codeTemplate;
         this.attachShadow( { mode: "open" } );
         this.shadowRoot.append( code.content.cloneNode( true ) );
         this.shadowRoot.querySelector( "bg" ).innerHTML = this.innerHTML;
         this.shadowRoot.querySelector( "bg" ).style.height = this.getAttribute( "h" );
         this.shadowRoot.querySelector( "top-bar" ).innerHTML = this.getAttribute( "file" );
   
      } 
      connectedCallback() {
         this.render();
      }
      render() {
      }
   }
   window.customElements.define( "co-de", Code );
} );

_( "Full Stack Node - DH: " );


