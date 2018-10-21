
function blocks() 
{
	count = 0;
	for(i=0; i<arguments.length; i++){
		d = new Dict(arguments[i])
		keys = d.getkeys();
		if (keys != null){
			if(d.get('type') == "lightpad"){
				count++;
			}
		}
	}
	outlet(0, count)
}

