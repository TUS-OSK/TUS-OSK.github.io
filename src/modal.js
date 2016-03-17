$(function(){

var nowModalSyncer = null ;		
var modalClassSyncer = "modal-syncer" ;	

var modals = document.getElementsByClassName( modalClassSyncer ) ;

for(var i=0,l=modals.length; l>i; i++){
	modals[i].onclick = function(){
		this.blur() ;
		var target = this.getAttribute( "data-target" ) ;
		if( typeof( target )=="undefined" || !target || target==null ){
			return false ;
		}
		nowModalSyncer = document.getElementById( target ) ;
		if( nowModalSyncer == null ){
			return false ;
		}
		if( $( "#modal-overlay" )[0] ) return false ;
		$( "body" ).append( '<div id="modal-overlay"></div>' ) ;
		$( "#modal-overlay" ).fadeIn( "fast" ) ;
		centeringModalSyncer() ;
		$( nowModalSyncer ).fadeIn( "slow" ) ;
		$( "#modal-overlay,.modal-content" ).unbind().click( function() {
			$( "#" + target + ",#modal-overlay" ).fadeOut( "fast" , function() {
				$( '#modal-overlay' ).remove() ;
			} ) ;
			nowModalSyncer = null ;
		} ) ;
	}
}
	$( window ).resize( centeringModalSyncer ) ;
	function centeringModalSyncer() {
		if( nowModalSyncer == null ) return false ;
		var w = $( window ).width() ;
		var h = $( window ).height() ;
		var cw = $( nowModalSyncer ).outerWidth() ;
		var ch = $( nowModalSyncer ).outerHeight() ;
		$( nowModalSyncer ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;
	}
} ) ;
