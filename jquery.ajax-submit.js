(function($) {
    /*
     *** AJAX Submit jQuery plugin ***
     * Provides submittal of forms similarly to the jQuery ajax function
     * Author: Jeremy Nicoll (eltiare on Github & Twitter)
     *
     * Copyright (c) 2011 Jeremy Nicoll
     *
     * Permission is hereby granted, free of charge, to any person obtaining a
     * copy of this software and associated documentation files (the
     * "Software"), to deal in the Software without restriction, including
     * without limitation the rights to use, copy, modify, merge, publish,
     * distribute, sublicense, and/or sell copies of the Software, and to permit
     * persons to whom the Software is furnished to do so, subject to the
     * following conditions:
     *
     * The above copyright notice and this permission notice shall be included
     * in all copies or substantial portions of the Software.
     * 
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
     * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
     * NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
     * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
     * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
     * USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    
    var methods = {
        init : function( target, options) {
            target.each( function (i, item) {
                if (item.tagName.toLowerCase() == 'form') {
                    methods.ajaxSubmit( item, options );
                }
	    });
            return target;
        },
        
        ajaxSubmit : function(item, options) {
            var $item = $(item);
            var ajaxDefaults = {
                type      : item.method || 'get',
                url       : item.action
            };
            options = $.extend(ajaxDefaults, options);
            // Get the variables/values of the form
            var data = {};
            $item.find('input').each(function (i, input) {
                if (!input.name) { return; }
                switch(input.type.toLowerCase()) {
                    case 'radio': 
                    case 'checkbox':
                        if (input.checked) { data[input.name] = input.value; }
                        break;
                    case 'textarea':
                    case 'select':
                        data[input.name] = $(input).val();
                        break;
                    default:
                        data[input.name] = input.value;
                }
            });
            data = $.extend(data, options.data || {});
            options.data = data;
            $.ajax(options);
        }
    };
    
    
    // jQuery function definition
    $.fn.ajaxSubmit = function ( options ) {    
	return methods.init(this, options);
    };
    
})(jQuery);
