var express = require('express');
var app = express();
var media = __dirname + '/www';

app.configure(function() {
  app.use(express.logger({format: 'dev'}));
});

app.get('/', function (req, res) {
  // Simulate how github pages serves the static files.
  res.redirect('/translator/');
});

// Serve static files such as /www/img/*, /www/manifest.webapp, etc.
app.configure(function() {
  app.use('/translator', express.static(media));
});

// Placeholder for word reference
app.get('/fake-results', function (req, res) {
  res.send({
"term0" : {
"PrincipalTranslations" : {
	"0" :{
		"OriginalTerm" : { "term" : "or", "POS" : "conj", "sense" : "connects alternatives", "usage" : ""},
		"FirstTranslation" : {"term" : "o", "POS" : "conj", "sense" : ""}, "Note" : ""}},
"AdditionalTranslations" : {
	"0" :{
		"OriginalTerm" : { "term" : "or, OR", "POS" : "abbr", "sense" : "Oregon", "usage" : ""},
		"FirstTranslation" : {"term" : "Oregón", "POS" : "nm", "sense" : ""}, "Note" : ""},
	"1" :{
		"OriginalTerm" : { "term" : "or", "POS" : "conj", "sense" : "connects alternative terms for sthg", "usage" : ""},
		"FirstTranslation" : {"term" : "o", "POS" : "conj", "sense" : ""}, "Note" : ""},
	"2" :{
		"OriginalTerm" : { "term" : "or", "POS" : "conj", "sense" : "correlative", "usage" : ""},
		"FirstTranslation" : {"term" : "o", "POS" : "conj", "sense" : ""}, "Note" : ""},
	"3" :{
		"OriginalTerm" : { "term" : "or", "POS" : "conj", "sense" : "correction", "usage" : ""},
		"FirstTranslation" : {"term" : "mejor dicho", "POS" : "loc conj", "sense" : ""}, "Note" : ""},
	"4" :{
		"OriginalTerm" : { "term" : "or", "POS" : "conj", "sense" : "approximation", "usage" : ""},
		"FirstTranslation" : {"term" : "o", "POS" : "conj", "sense" : ""}, "Note" : ""}}},
"original" : {
"Compounds" : {
	"0" :{
		"OriginalTerm" : { "term" : "all-or-nothing", "POS" : "adj", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "todo o nada", "POS" : "", "sense" : ""}, "Note" : ""},
	"1" :{
		"OriginalTerm" : { "term" : "black or white", "POS" : "adj", "sense" : "viewed simplistically", "usage" : ""},
		"FirstTranslation" : {"term" : "blanco y negro", "POS" : "adj", "sense" : "Esp"}, "Note" : ""},
	"2" :{
		"OriginalTerm" : { "term" : "black or white", "POS" : "adj", "sense" : "viewed simplistically", "usage" : ""},
		"FirstTranslation" : {"term" : "blanco o negro", "POS" : "adj", "sense" : "España"}, "Note" : ""},
	"3" :{
		"OriginalTerm" : { "term" : "come hell or high water", "POS" : "adv", "sense" : "whatever the difficulties, whatever happens", "usage" : ""},
		"FirstTranslation" : {"term" : "contra viento y marea", "POS" : "loc adv", "sense" : ""}, "Note" : ""},
	"4" :{
		"OriginalTerm" : { "term" : "come hell or high water", "POS" : "adv", "sense" : "whatever the difficulties, whatever happens", "usage" : ""},
		"FirstTranslation" : {"term" : "llueva, truene o relampaguee", "POS" : "loc adv", "sense" : ""}, "Note" : ""},
	"5" :{
		"OriginalTerm" : { "term" : "come hell or high water", "POS" : "adv", "sense" : "whatever the difficulties, whatever happens", "usage" : ""},
		"FirstTranslation" : {"term" : "aunque me muera", "POS" : "loc adv", "sense" : ""}, "Note" : ""},
	"6" :{
		"OriginalTerm" : { "term" : "come rain or shine", "POS" : "adv", "sense" : "whatever the weather", "usage" : "literal"},
		"FirstTranslation" : {"term" : "llueva o truene", "POS" : "loc adv", "sense" : ""}, "Note" : ""},
	"7" :{
		"OriginalTerm" : { "term" : "come rain or shine", "POS" : "adv", "sense" : "whatever the weather", "usage" : "literal"},
		"FirstTranslation" : {"term" : "llueva, truene o relampaguee", "POS" : "loc verb", "sense" : ""}, "Note" : ""},
	"8" :{
		"OriginalTerm" : { "term" : "come rain or shine", "POS" : "adv", "sense" : "whatever the weather", "usage" : "literal"},
		"FirstTranslation" : {"term" : "así caigan chuzos de punta", "POS" : "loc adv", "sense" : "España"}, "Note" : ""},
	"9" :{
		"OriginalTerm" : { "term" : "come rain or shine", "POS" : "adv", "sense" : "whatever happens", "usage" : "figurative"},
		"FirstTranslation" : {"term" : "pase lo que pase", "POS" : "loc adv", "sense" : ""}, "Note" : ""},
	"10" :{
		"OriginalTerm" : { "term" : "come rain or shine", "POS" : "adv", "sense" : "whatever happens", "usage" : "figurative"},
		"FirstTranslation" : {"term" : "venga lo que venga", "POS" : "loc adv", "sense" : ""}, "Note" : ""},
	"11" :{
		"OriginalTerm" : { "term" : "decision-making body or service", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "órgano decisorio", "POS" : "nm", "sense" : ""}, "Note" : ""},
	"12" :{
		"OriginalTerm" : { "term" : "do or die", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "de vida o muerte", "POS" : "adj", "sense" : ""}, "Note" : ""},
	"13" :{
		"OriginalTerm" : { "term" : "double or nothing", "POS" : "n", "sense" : "gambling: type of bet", "usage" : ""},
		"FirstTranslation" : {"term" : "doble o nada", "POS" : "loc nom", "sense" : ""}, "Note" : ""},
	"14" :{
		"OriginalTerm" : { "term" : "either or", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "uno u otro", "POS" : "", "sense" : ""}, "Note" : ""},
	"15" :{
		"OriginalTerm" : { "term" : "for better or for worse", "POS" : "adv", "sense" : "whatever the consequences", "usage" : ""},
		"FirstTranslation" : {"term" : "para bien o para mal", "POS" : "fr hecha", "sense" : ""}, "Note" : ""},
	"16" :{
		"OriginalTerm" : { "term" : "for better or for worse", "POS" : "adv", "sense" : "whatever the consequences", "usage" : ""},
		"FirstTranslation" : {"term" : "nos guste o no", "POS" : "loc adv", "sense" : ""}, "Note" : ""},
	"17" :{
		"OriginalTerm" : { "term" : "for better or for worse", "POS" : "adv", "sense" : "whatever the consequences", "usage" : ""},
		"FirstTranslation" : {"term" : "en las buenas y en las malas", "POS" : "fr hecha", "sense" : "fam"}, "Note" : ""},
	"18" :{
		"OriginalTerm" : { "term" : "for better or for worse", "POS" : "adv", "sense" : "whatever the consequences", "usage" : ""},
		"FirstTranslation" : {"term" : "en la fortuna y en la adversidad", "POS" : "fr hecha", "sense" : "Rel"}, "Note" : ""},
	"19" :{
		"OriginalTerm" : { "term" : "for better or for worse", "POS" : "adv", "sense" : "whatever the consequences", "usage" : ""},
		"FirstTranslation" : {"term" : "en las alegrías y en las penas", "POS" : "fr hecha", "sense" : ""}, "Note" : ""},
	"20" :{
		"OriginalTerm" : { "term" : "for better or for worse", "POS" : "adv", "sense" : "whatever the consequences", "usage" : ""},
		"FirstTranslation" : {"term" : "estar a las duras y a las maduras", "POS" : "fr hecha", "sense" : "España coloq"}, "Note" : ""},
	"21" :{
		"OriginalTerm" : { "term" : "have beard or moustache", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "tener barba o bigote", "POS" : "v", "sense" : ""}, "Note" : ""},
	"22" :{
		"OriginalTerm" : { "term" : "heads or tails", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "cara o cruz", "POS" : "n", "sense" : ""}, "Note" : ""},
	"23" :{
		"OriginalTerm" : { "term" : "herd of bulls or horses", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "manada de toros o caballos", "POS" : "n", "sense" : ""}, "Note" : ""},
	"24" :{
		"OriginalTerm" : { "term" : "hit or miss", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "al azar", "POS" : "adj", "sense" : ""}, "Note" : ""},
	"25" :{
		"OriginalTerm" : { "term" : "in one way or another", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "de un modo u otro", "POS" : "", "sense" : ""}, "Note" : ""},
	"26" :{
		"OriginalTerm" : { "term" : "in some way or other", "POS" : "adv", "sense" : "somehow", "usage" : ""},
		"FirstTranslation" : {"term" : "de una u otra forma", "POS" : "loc adv", "sense" : ""}, "Note" : ""},
	"27" :{
		"OriginalTerm" : { "term" : "in some way or other", "POS" : "adv", "sense" : "somehow", "usage" : ""},
		"FirstTranslation" : {"term" : "de uno u otro modo", "POS" : "loc adv", "sense" : ""}, "Note" : ""},
	"28" :{
		"OriginalTerm" : { "term" : "in some way or other", "POS" : "adv", "sense" : "somehow", "usage" : ""},
		"FirstTranslation" : {"term" : "de una u otra manera", "POS" : "loc adv", "sense" : ""}, "Note" : ""},
	"29" :{
		"OriginalTerm" : { "term" : "know a thing or two", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "tener ciertos conocimientos", "POS" : "", "sense" : ""}, "Note" : ""},
	"30" :{
		"OriginalTerm" : { "term" : "lash out at or against sth or sb", "POS" : "", "sense" : "physically, verbally", "usage" : ""},
		"FirstTranslation" : {"term" : "atacar", "POS" : "vt", "sense" : "físicamente, verbalmente"}, "Note" : ""},
	"31" :{
		"OriginalTerm" : { "term" : "lash out at or against sth or sb", "POS" : "", "sense" : "verbally", "usage" : ""},
		"FirstTranslation" : {"term" : "arremeter contra algo o alguien ", "POS" : "vi", "sense" : "verbalmente"}, "Note" : ""},
	"32" :{
		"OriginalTerm" : { "term" : "laugh at sth or sb", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "reírse de alguien o algo", "POS" : "vi", "sense" : ""}, "Note" : ""},
	"33" :{
		"OriginalTerm" : { "term" : "lay into sth or sb", "POS" : "", "sense" : "physically, verbally", "usage" : ""},
		"FirstTranslation" : {"term" : "arremeter contra algo o alguien", "POS" : "vt", "sense" : "físicamente, verbalmente"}, "Note" : ""},
	"34" :{
		"OriginalTerm" : { "term" : "lean on sth or sb", "POS" : "", "sense" : "rest on", "usage" : ""},
		"FirstTranslation" : {"term" : "depender de algo o alguien", "POS" : "vi", "sense" : ""}, "Note" : ""},
	"35" :{
		"OriginalTerm" : { "term" : "lean on sth or sb", "POS" : "", "sense" : "put pressure on", "usage" : ""},
		"FirstTranslation" : {"term" : "presionar a alguien", "POS" : "vt", "sense" : ""}, "Note" : ""},
	"36" :{
		"OriginalTerm" : { "term" : "learn a thing or two", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "aprender un par de cosas", "POS" : "vt", "sense" : ""}, "Note" : ""},
	"37" :{
		"OriginalTerm" : { "term" : "little or no", "POS" : "adj", "sense" : "hardly any", "usage" : ""},
		"FirstTranslation" : {"term" : "poco o ninguno", "POS" : "adj", "sense" : ""}, "Note" : ""},
	"38" :{
		"OriginalTerm" : { "term" : "live or die", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "vivir o morir", "POS" : "vi", "sense" : ""}, "Note" : ""},
	"39" :{
		"OriginalTerm" : { "term" : "make or break", "POS" : "", "sense" : "", "usage" : "colloquial"},
		"FirstTranslation" : {"term" : "lograrlo o morir", "POS" : "", "sense" : "coloquial"}, "Note" : ""},
	"40" :{
		"OriginalTerm" : { "term" : "make rich or richer", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "enriquecer", "POS" : "v", "sense" : ""}, "Note" : ""},
	"41" :{
		"OriginalTerm" : { "term" : "matter of life or death", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "asunto de vida o muerte", "POS" : "", "sense" : ""}, "Note" : ""},
	"42" :{
		"OriginalTerm" : { "term" : "mean or hard person", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "persona mezquina", "POS" : "", "sense" : ""}, "Note" : ""},
	"43" :{
		"OriginalTerm" : { "term" : "more or less", "POS" : "adv", "sense" : "to a greater or lesser extent", "usage" : ""},
		"FirstTranslation" : {"term" : "más o menos", "POS" : "loc adv", "sense" : ""}, "Note" : ""},
	"44" :{
		"OriginalTerm" : { "term" : "more or less", "POS" : "adv", "sense" : "to a greater or lesser extent", "usage" : ""},
		"FirstTranslation" : {"term" : "más o menos", "POS" : "loc adj", "sense" : ""}, "Note" : ""},
	"45" :{
		"OriginalTerm" : { "term" : "no ifs, ands, or buts", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "sin condiciones ni excusas", "POS" : "", "sense" : ""}, "Note" : ""},
	"46" :{
		"OriginalTerm" : { "term" : "not for love or money", "POS" : "adv", "sense" : "impossible to obtain by any means", "usage" : ""},
		"FirstTranslation" : {"term" : "ni por todo el oro del mundo", "POS" : "fr hecha", "sense" : ""}, "Note" : ""},
	"47" :{
		"OriginalTerm" : { "term" : "not for love or money", "POS" : "adv", "sense" : "impossible to obtain by any means", "usage" : ""},
		"FirstTranslation" : {"term" : "de ninguna manera", "POS" : "loc adv", "sense" : ""}, "Note" : ""},
	"48" :{
		"OriginalTerm" : { "term" : "now or never", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "ahora o nunca", "POS" : "adv", "sense" : ""}, "Note" : ""},
	"49" :{
		"OriginalTerm" : { "term" : "one hundred or so", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "alrededor de cien", "POS" : "", "sense" : ""}, "Note" : ""},
	"50" :{
		"OriginalTerm" : { "term" : "or else", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "si no", "POS" : "", "sense" : ""}, "Note" : ""},
	"51" :{
		"OriginalTerm" : { "term" : "or not", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "o no", "POS" : "", "sense" : ""}, "Note" : ""},
	"52" :{
		"OriginalTerm" : { "term" : "or so", "POS" : "adv", "sense" : "approximately", "usage" : ""},
		"FirstTranslation" : {"term" : "más o menos", "POS" : "loc adv", "sense" : ""}, "Note" : ""},
	"53" :{
		"OriginalTerm" : { "term" : "put sb in an awkward position or situation", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "poner a alguien en una situación embarazosa", "POS" : "", "sense" : ""}, "Note" : ""},
	"54" :{
		"OriginalTerm" : { "term" : "sink or swim", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "abandonar a su suerte", "POS" : "v", "sense" : ""}, "Note" : ""},
	"55" :{
		"OriginalTerm" : { "term" : "somehow or other", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "de una forma u otra", "POS" : "", "sense" : ""}, "Note" : ""},
	"56" :{
		"OriginalTerm" : { "term" : "something or other", "POS" : "n", "sense" : "sth not remembered precisely", "usage" : ""},
		"FirstTranslation" : {"term" : "algo por el estilo", "POS" : "pron", "sense" : ""}, "Note" : ""},
	"57" :{
		"OriginalTerm" : { "term" : "something or other", "POS" : "n", "sense" : "sth not remembered precisely", "usage" : ""},
		"FirstTranslation" : {"term" : "un algo", "POS" : "", "sense" : ""}, "Note" : ""},
	"58" :{
		"OriginalTerm" : { "term" : "something or other", "POS" : "n", "sense" : "sth not remembered precisely", "usage" : ""},
		"FirstTranslation" : {"term" : "algo así ", "POS" : "loc nom", "sense" : ""}, "Note" : ""},
	"59" :{
		"OriginalTerm" : { "term" : "sooner or later", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "tarde o temprano", "POS" : "", "sense" : ""}, "Note" : ""},
	"60" :{
		"OriginalTerm" : { "term" : "spread butter or jam", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "untar mantequilla o conservas", "POS" : "v", "sense" : ""}, "Note" : ""},
	"61" :{
		"OriginalTerm" : { "term" : "ten or so", "POS" : "adj", "sense" : "about 10", "usage" : ""},
		"FirstTranslation" : {"term" : "unos diez", "POS" : "loc adj", "sense" : ""}, "Note" : ""},
	"62" :{
		"OriginalTerm" : { "term" : "ten or so", "POS" : "adj", "sense" : "about 10", "usage" : ""},
		"FirstTranslation" : {"term" : "como diez", "POS" : "loc adj", "sense" : ""}, "Note" : ""},
	"63" :{
		"OriginalTerm" : { "term" : "ten or so", "POS" : "adj", "sense" : "about 10", "usage" : ""},
		"FirstTranslation" : {"term" : "diez o así", "POS" : "loc adj", "sense" : ""}, "Note" : ""},
	"64" :{
		"OriginalTerm" : { "term" : "that or the other", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "éste o aquél", "POS" : "pronm", "sense" : ""}, "Note" : ""},
	"65" :{
		"OriginalTerm" : { "term" : "trick or treat", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "frase que dicen los niños en la noche de Halloween para pedir dulces, amenazando con travesuras y ma", "POS" : "loc", "sense" : ""}, "Note" : ""},
	"66" :{
		"OriginalTerm" : { "term" : "trick or treating", "POS" : "n", "sense" : "Halloween door-to-door tradition", "usage" : ""},
		"FirstTranslation" : {"term" : "pedir dulces para el Halloween o la noche de brujas ", "POS" : "vtr", "sense" : ""}, "Note" : ""},
	"67" :{
		"OriginalTerm" : { "term" : "trick or treating", "POS" : "n", "sense" : "Halloween door-to-door tradition", "usage" : ""},
		"FirstTranslation" : {"term" : "trato o truco", "POS" : "nm", "sense" : ""}, "Note" : ""},
	"68" :{
		"OriginalTerm" : { "term" : "unfrocked priest or monk", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "sacerdote o monje despojado de los privilegios eclesiásticos", "POS" : "", "sense" : ""}, "Note" : ""},
	"69" :{
		"OriginalTerm" : { "term" : "whether or not", "POS" : "conj", "sense" : "no matter if, even if", "usage" : ""},
		"FirstTranslation" : {"term" : "sin importar si", "POS" : "loc conj", "sense" : ""}, "Note" : ""},
	"70" :{
		"OriginalTerm" : { "term" : "whether or not", "POS" : "conj", "sense" : "no matter if, even if", "usage" : ""},
		"FirstTranslation" : {"term" : "llueva o no llueva", "POS" : "expr", "sense" : ""}, "Note" : ""},
	"71" :{
		"OriginalTerm" : { "term" : "without rhyme or reason", "POS" : "", "sense" : "", "usage" : ""},
		"FirstTranslation" : {"term" : "sin pies ni cabeza", "POS" : "", "sense" : ""}, "Note" : ""}}},
"Lines" : "End Reached", "END" : true
});

});


var host = process.env['HOST'] || '0.0.0.0';
var port = process.env['PORT'] || 3000;
app.listen(port, host);
console.log('Listening at ' + host + ':' + port);
