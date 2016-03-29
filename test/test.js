'use strict';

// MODULES //

var tape = require( 'tape' );
var pow = require( 'math-power' );
var MIN_INT8 = require( './../lib' );


// TESTS //

tape( 'the main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof MIN_INT8, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value equals -2**7', function test( t ) {
	t.equal( MIN_INT8, -pow(2,7), 'equals -1 * 2**7' );
	t.end();
});
