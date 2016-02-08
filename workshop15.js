<script>
function num_grade_changed()
{
	var grade = document.getElementById('sgrade').value;
	switch(grade)
	{
		case 'gb':
			document.getElementById('math_wshop').disabled = true;
			document.getElementById('science_wshop').disabled = true;
			document.getElementById('writing_wshop').disabled = true;
			document.getElementById('pspeaking_wshop').disabled = true;
			document.getElementById('participation_fee').value = 0;
			enable_disable_submit();
			break;
			
		case 'gk':	 //kindergarten
			document.getElementById('math_wshop').enabled = true;
			for (var i=0; i < 4; i++)
			{
				if ( i < 2)  //Enable only level 1 math wshop
					document.getElementById('math_wshop').options[i].disabled = false;
				else
					document.getElementById('math_wshop').options[i].disabled = true;
				
				var test = document.getElementById('math_wshop').options[i];
				console.log('test is %s', test);
				
			}
		
			document.getElementById('science_wshop').disabled = true;
			document.getElementById('writing_wshop').disabled = true;
			document.getElementById('pspeaking_wshop').disabled = true;
			document.getElementById('participation_fee').value = 0;
			enable_disable_submit();
			break;
		
		case 'g1':   //grades 1-2, math 1 workshop and science 1 workshop
		case 'g2':
			document.getElementById('math_wshop').enabled = true;
			for (var i=0; i < 4; i++)
			{
				if ( i < 2)  //Enable only level 1 math wshop
					document.getElementById('math_wshop').options[i].disabled = false;
				else
					document.getElementById('math_wshop').options[i].disabled = true;
				
				//var test = document.getElementById('math_wshop').options[i];
				//console.log('test is %s', test);
			}
		
			document.getElementById('science_wshop').disabled = false;
			for (var i=0; i < 3; i++)
			{
				if ( i < 2)  //Enable only level 1 science wshop
					document.getElementById('science_wshop').options[i].disabled = false;
				else
					document.getElementById('science_wshop').options[i].disabled = true;
			}			
			document.getElementById('writing_wshop').disabled = true;
			document.getElementById('pspeaking_wshop').disabled = true;
			document.getElementById('participation_fee').value = 0;
			enable_disable_submit();
			break;
			
		case 'g3':  // Grades 3,4, 5 - Math level 2, science level 1, writing workshop
		case 'g4':
		case 'g5':
			//Math workshops
			document.getElementById('math_wshop').enabled = true;
			document.getElementById('math_wshop').options[0].disabled = false; //Enable none
			document.getElementById('math_wshop').options[1].disabled = true;
			document.getElementById('math_wshop').options[2].disabled = false;	//Enable level 2
			document.getElementById('math_wshop').options[3].disabled = true;				
		
			//Science workshops
			document.getElementById('science_wshop').disabled = false;
			document.getElementById('science_wshop').options[0].disabled = false; //Enable none
			document.getElementById('science_wshop').options[1].disabled = false;  //Enable level 1
			document.getElementById('science_wshop').options[2].disabled = true;
			
			//Writing workshops
			document.getElementById('writing_wshop').disabled = false;
			document.getElementById('writing_wshop').options[0].disabled = false; //Enable none	
			document.getElementById('writing_wshop').options[1].disabled = false; //Enable the workshop				
			document.getElementById('pspeaking_wshop').disabled = true;
			document.getElementById('participation_fee').value = 0;
			enable_disable_submit();
			break;		

		case 'g6':
		case 'g7':
		case 'g8':
			//Math workshops
			document.getElementById('math_wshop').enabled = true;
			document.getElementById('math_wshop').options[0].disabled = false; //Enable none
			document.getElementById('math_wshop').options[1].disabled = true;
			document.getElementById('math_wshop').options[2].disabled = true;	
			document.getElementById('math_wshop').options[2].disabled = false;	//Enable level 3			
		
			//Science workshops
			document.getElementById('science_wshop').disabled = false;
			document.getElementById('science_wshop').options[0].disabled = false; //Enable none
			document.getElementById('science_wshop').options[1].disabled = true;  
			document.getElementById('science_wshop').options[2].disabled = false; //Enable level 2
			
			//Writing workshops
			document.getElementById('writing_wshop').disabled = false;
			document.getElementById('writing_wshop').options[0].disabled = false; //Enable none	
			document.getElementById('writing_wshop').options[1].disabled = false; //Enable the workshop	
			
			//Writing workshops
			document.getElementById('pspeaking_wshop').disabled = false;
			document.getElementById('pspeaking_wshop').options[0].disabled = false; //Enable none	
			document.getElementById('pspeaking_wshop').options[1].disabled = false; //Enable the workshop				
			document.getElementById('participation_fee').value = 0;
			enable_disable_submit();
			break;			
			
		default:
		
			
	}
}
function enable_disable_submit()
{
	if (parseInt(document.getElementById('participation_fee').value) > 0)
	{
		document.getElementById('submit').disabled = false;	
	}
	else
	{
		document.getElementById('submit').disabled = true;	
	}
}

window.onload = function() {
    //document.getElementsByName('form[performance_category]')[0].checked=true;
	//displayField();
	//num_part_changed();
	//music_required_function();
	enable_disable_submit();
};
</script>