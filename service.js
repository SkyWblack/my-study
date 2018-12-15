const url = require('url');

exports.sampleRequest = function(req,res){
	var reqUrl = url.parse(req.url,true)
	var name = 'Worle'
	if(reqUrl.query.name){
		name = reqUrl.query.name
	}
	var response = {
		'text':`Hello ${name}`
	}
	res.statusCode = 200
	res.setHeader('Content-Type','application/json')
	res.end(JSON.stringify(response))
}

exports.testRequest = function(req,res){
	var body = '';
	var postBody;
	req.on('data',(chunk)=>{
		body += chunk
	})
	req.on('end',()=>{
		postBody = JSON.parse(body)
		var response = {
			'text':`POST Request Value is ${postBody.value}`
		}
		res.statusCode = 200
		res.setHeader('Content-Type','application/json')
		res.end(JSON.stringify(response))
	})
}

exports.invalidRequest = function(req,res){
	res.statusCode = 404
	res.setHeader('Content-Type','text/plain')
	res.end('Invalid Request')
}