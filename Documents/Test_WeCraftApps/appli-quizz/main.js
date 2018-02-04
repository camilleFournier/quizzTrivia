const express = require('express');
const request = require("request"); //permet d'effectuer simplement la requête http de l'API
const fs = require('fs');
const app = express();

var tableauQuestions; //tableau rendu par la requête http contenant les questions et les bonnes réponses devant être 
/*
Configuration de la page d'accueil et du questionnaire
*/
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

/*
Configuration de la page de résultat et calcul du résultat
*/
app.route('/resultat')
  .get(function(req, res, next){
	var cssFile= {style : fs.readFileSync('views/styleResultat.css','utf8')};
	var tableauResultats= new Array();
	var tableauReponses = new Array();
	var total = 0;
	var i=0;
	for (var numeroQuestion in req.query){
		tableauReponses.push(req.query[numeroQuestion]);
		if (tableauReponses[i]==tableauQuestions[i].correct_answer){
			total++;
			tableauResultats.push("Correct");
		}else{
			tableauResultats.push("Incorrect");
		};
		i++;
	}
	res.render('resultat.ejs', {total : total,
	                            q1 : tableauQuestions[0].question, 
	                            q2 : tableauQuestions[1].question, 
							    q3 : tableauQuestions[2].question,
							    q4 : tableauQuestions[3].question,
							    q5 : tableauQuestions[4].question,
							    q6 : tableauQuestions[5].question,							   
							    q7 : tableauQuestions[6].question,
							    q8 : tableauQuestions[7].question,
							    q9 : tableauQuestions[8].question,
							    q10 : tableauQuestions[9].question,
								resultat1 : tableauResultats[0],
								resultat2 : tableauResultats[1],
								resultat3 : tableauResultats[2],
								resultat4 : tableauResultats[3],
								resultat5 : tableauResultats[4],
								resultat6 : tableauResultats[5],
								resultat7 : tableauResultats[6],
								resultat8 : tableauResultats[7],
								resultat9 : tableauResultats[8],
								resultat10 : tableauResultats[9],
								reponse1 : tableauReponses[0],
								reponse2 : tableauReponses[1],
								reponse3 : tableauReponses[2],
								reponse4 : tableauReponses[3],
								reponse5 : tableauReponses[4],
								reponse6 : tableauReponses[5],
								reponse7 : tableauReponses[6],
								reponse8 : tableauReponses[7],
								reponse9 : tableauReponses[8],
								reponse10 : tableauReponses[9],
								cssFile : cssFile});
});

app.listen(3000);  //Envoi à localhost:3000