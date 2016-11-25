// мы же проходим циклы... так что по максимуму)))
var str = '', white = false;
for (var i = 0; i < 15; ++i)
{
	if(i%2) 
		console.log('\n');

	else   
	{
		if(white)
		{
			for(var j = 0; j < 8; ++j)
			{
				if(j%2)
					str += " ";
				else
					str += "#";
			}
		}
		else
		{
			for(var j = 0; j < 8; ++j)
			{
				if(j%2)
					str +="#";
				else
					str +=" ";
			}
		}
		console.log(str);
		str = "";
 		white = !white;
	}
}


//уже всем известный вариант :)
// var str1, str2, count = 4;
// str1 = "# ".repeat(count) + "\n\n";
// str2 = " #".repeat(count) + "\n";
// console.log((str1 + str2 + "\n").repeat(count-1));
// console.log(str1 + str2); // чтобы не выводил 9-ую строчку пустой
