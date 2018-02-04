const express = require('express');
const request = require("request");
const EventEmitter = require('events');

const app = express();

var tableauQuestions;

app.route('/')
  .get(function (req, res) {
	  request('https://opentdb.com/api.php?amount=10&type=boolean', function(error, response, body){
	  quizz=JSON.parse(body);
	  tableauQuestions = quizz.results;
      res.render('index.ejs', {q1 : tableauQuestions[0].question, 
	                           q2 : tableauQuestions[1].question, 
							   q3 : tableauQuestions[2].question,
							   q4 : tableauQuestions[3].question,
							   q5 : tableauQuestions[4].question,
							   q6 : tableauQuestions[5].question,
							   q7 : tableauQuestions[6].question,
							   q8 : tableauQuestions[7].question,
							   q9 : tableauQuestions[8].question,
							   q10 : tableauQuestions[9].question});
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