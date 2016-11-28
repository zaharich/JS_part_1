
function countBs(s)
{
	var count = 0;
	for(var i = 0; i < s.length; ++i)
	{
		if(s.charAt(i) == "B")
			++count;
	}
	return count;
}

var str = "Hello, my Brother BoB!";
console.log(countBs(str));

