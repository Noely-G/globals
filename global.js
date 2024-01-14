

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

} );

_( "oi!" );
