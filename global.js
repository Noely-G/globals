

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
		NavLinks = $$( "navlink" )
   ;
 
   
	NavLinks.forEach( nv => {
		nv.addEventListener( "click", ev => {
			window.open( nv.getAttribute( "to" ), "_blank" );
		} );
	} );
} );

_( "oi!" );
