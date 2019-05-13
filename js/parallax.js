// Conversion Steps

function conversionStep1() {
	$( "#cv_conversionSteps" ).addClass( "step1" );
}

function conversionStep2() {
	$( "#cv_conversionSteps" ).addClass( "step2" );
}

function conversionStep3() {
	$( "#cv_conversionSteps" ).addClass( "step3" );
}

function conversionStep4() {
	$( "#cv_conversionSteps" ).addClass( "step4" );
	$( ".cv_conversion-steps-cta" ).addClass( "active" );
}

// Funnel

function filterToggle1() {
	$( '#cvToggleFunnel').addClass( 'step1' );
	$( '#cvToggleFunnel').removeClass( 'step2 step3' );
}

function filterToggle2() {
	$( '#cvToggleFunnel').addClass( 'step2' );
	$( '#cvToggleFunnel').removeClass( 'step1 step3' );
}

function filterToggle3() {
	$( '#cvToggleFunnel').addClass( 'step3' );
	$( '#cvToggleFunnel').removeClass( 'step1 step2' );
}

function filterStep1() {
	$( '#cv_animationFunnel' ).addClass( 'step1' );
	$( '#cv_funnel1' ).addClass( 'active' );
}

function filterStep2() {
	$( '#cv_animationFunnel' ).addClass( 'step2' );
	$( '#cv_funnel2' ).addClass( 'active' );
}

function filterStep3() {
	$( '#cv_animationFunnel' ).addClass( 'step3' );
	$( '#cv_funnel3' ).addClass( 'active' );
}

function filterStep4() {
	$( '#cv_animationFunnel' ).addClass( 'step4' );
	$( '#cv_funnel4' ).addClass( 'active' );
}
