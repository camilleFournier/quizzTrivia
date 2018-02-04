const express = require('express');
const request = require("request");
const EventEmitter = require('events');
const ejs = require('ejs');

const app = express();

var tableauQuestions;

app.route('/')
  .get(function (req, res) {
	  request('https://opentdb.com/api.php?amount=10&type=boolean', function(error, response, body){
	  quizz=JSON.parse(body);
	  tableauQuestions = quizz.results;
	  var questions = new Array();
	  for (var i=0; i<10; i++){
		  questions[i] = tableauQuestions[i].question.toString();
	  };
      res.render('index.ejs', {q1 : questions[0], 
	                           q2 : questions[1], 
							   q3 : questions[2],
							   q4 : questions[3],
							   q5 : questions[4],
							   q6 : questions[5],							   
							   q7 : questions[6],
							   q8 : questions[7],
							   q9 : questions[8],
							   q10 : questions[9]});
	});
});

app.route('/resultat')
  .get(function(req, res, next){
	var resultat = 0;
	var i=0;
	for (var numeroQuestion in req.query){
		var reponse=req.query[numeroQuestion];
		if (reponse===tableauQuestions[i].correct_answer.toString()){
			resultat++;
		}
		i++;
	}
	res.render('resultat.ejs', {resultat : resultat});
	next();
});

app.listen(3000);