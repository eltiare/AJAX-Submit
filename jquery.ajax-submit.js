(function($) {
    /*
     *** AJAX Submit jQuery plugin ***
     * Provides submittal of forms similarly to the jQuery ajax function
     * Author: Jeremy Nicoll (eltiare on Github & Twitter)
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
                    case 'checkbox':
                        if (input.checked) { data[input.name] = input.value; }
                        break;
                    default:
                        data[input.name] = input.value;
                }
            });
            data = $.extend(data, options.data || {});
            options.data = data;
            console.info(options);
            $.ajax(options);
        }
    };
    
    
    // jQuery function definition
    $.fn.ajaxSubmit = function ( options ) {
	return methods.init(this, options);
    };
    
})(jQuery);