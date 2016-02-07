<script>
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