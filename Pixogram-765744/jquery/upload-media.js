(function ($) {
    $.fn.checkFileType = function (options) {
        var defaults = {
            allowedExtensions: [],
            success: function () { },
            error: function () { }
        };
        options = $.extend(defaults, options);

        return this.each(function () {

            $(this).on('change', function () {
                var value = $(this).val(),
                    file = value.toLowerCase(),
                    extension = file.substring(file.lastIndexOf('.') + 1);

                if ($.inArray(extension, options.allowedExtensions) == -1) {
                    options.error();
                    $(this).focus();
                } else {
                    options.success();

                }

            });

        });
    };

})(jQuery);

$(function () {
    $('#image').checkFileType({
        allowedExtensions: ['jpg', 'jpeg', 'gif', 'png'],
        success: function () {
            alert('Success');
        },
        error: function () {
            alert('Please upload valid file format');
        }
    });

});