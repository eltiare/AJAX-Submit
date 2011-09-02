AJAX Submit jQuery Plugin
==========================

This little plugin will take all the values of a form (or multiple forms) and submit it to the URL specified on the form's `action` attribute. So if you have the following form:

	<form method='get' action='/some'  id="some-form">
		<input type="text" name="mom" value="noway">
		<input type="radio" name="bypass" value="yes">
		<input type="radio" name="bypass" value="no">
 		<input type="submit">
	</form>

To submit the values via AJAX to the action URL of /some:

	$('#some-form').ajaxSubmit();

The plugin passes all options straight to jQuery's `ajax` function --- with the exception of data, which is merged with the names/values from the form. So if you want to add some more data to the form, all you have to do is include it:

	$('#some-form').ajaxSubmit({
		data : {
			customName1 : 'Custom Value',
			customName2: 'Another Custom Value'
		}
	});

Any other arguments can be overridden or passed along:

	$('#some-form').ajaxSubmit({
		type		:	'post',
		url			:	'/something_else',
		success 	:	function() { alert('Yay! The form posted!'); }
	});

Copyright Notice
====================

Copyright (c) 2011 Jeremy Nicoll

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.