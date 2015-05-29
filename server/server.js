/**
 * Created by WQ on 2015/5/27.
 */
var http = require( 'http' );
var httpServer = http.createServer( function ( req, res ) {
	console.log( "http connect" );
	res.writeHead( 200, {'Content-Type' : 'text/plain'} );
	res.end( 'var a=23' );
} );
httpServer.listen( 8383 );

var WebSocketServer = require( 'ws' ).Server,
	wss = new WebSocketServer( {
		server : httpServer
	} );

wss.on( 'connection', function connection( ws ) {
	console.log( "ws connect" );
	ws.on( 'message', function incoming( message ) {
		console.log( 'received: %s', message );
	} );
	ws.send( 'something' );
} );