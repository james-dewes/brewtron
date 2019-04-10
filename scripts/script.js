$(document).ready(function(){
	$('.make').click(function(){
		makebrew();
		$(this).remove();
		$('.retry').html('<a onClick="makebrew()"><img src="images/cup-312127_640.png" class="make" title="Make a brew!"></a>');
		});
	});
var makebrew = function(){
	var brewmisters = ['James','Nicole','Jake','Mike'];
	var brews =["chia latte","tea","coffee","dogs milk","propper coffee","green tea"];
	$('.brewmaker').html("The brewmaker is "+brewmisters[Math.floor((Math.random() * brewmisters.length))]);
	$('.randombrew').html("and we all get "+brews[Math.floor((Math.random() * brews.length))] + "!");
	
	}
