https://maps.googleapis.com/maps/api/js?key=AIzaSyBdidIXz0cP9i80Y2DAvaGoQ5BnL0oNySA&callback=initMap
function singleselection(rbid) {
    rbutton = document.getElementById(rbid);
    rbuttonlist = document.getElementsByTagName("input");
    for (i = 0; i < rbuttonlist.length; i++) {
        if (rbuttonlist[i].type == "radio" && rbuttonlist[i].id !== rbutton.id) {
            rbuttonlist[i].checked = false;
        }
    }
}
function openModal(modlnm) {
    $(modlnm).modal('show');
}
function closeModal(modlnm) {
    $(modlnm).modal('hide');
}
function funcprint(screen, id) {
    window.open(screen + id, '_blank', "");
}

function showtosterr(msg, title) {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "500",
        "timeOut": "1700",
        "extendedTimeOut": "500",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    // toastr['success'](msg, title);
    var d = Date();
    toastr.error(msg, title);
    return false;
}

function showtostsuc(msg, title) {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "500",
        "timeOut": "1700",
        "extendedTimeOut": "500",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    // toastr['success'](msg, title);
    var d = Date();
    toastr.success(msg, title);
    return false;
}

function showtostwarn(msg, title) {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "500",
        "timeOut": "1700",
        "extendedTimeOut": "500",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    // toastr['success'](msg, title);
    var d = Date();
    toastr.warning(msg, title);
    return false;
}

function selectAll(invoker) {
    var inputElements = document.getElementsByTagName('input');
    for (var i = 0; i < inputElements.length; i++) {
        var myElement = inputElements[i];
        if (myElement.type === "checkbox") {
            myElement.checked = invoker.checked;
        }
    }
}
//Validations
function BtnClick() {

    var val = Page_ClientValidate();
    if (!val) {
        var i = 0;
        for (; i < Page_Validators.length; i++) {
            if (!Page_Validators[i].isvalid) {
                $("#" + Page_Validators[i].controltovalidate)
                    .css("border-color", "#f53535");
            }
        }

    }
    return val;
}

var xPos, yPos;
var prm = Sys.WebForms.PageRequestManager.getInstance();

function BeginRequestHandler(sender, args) {
    if ($get('divid') != null) {
        xPos = $get('divid').scrollLeft;
        yPos = $get('divid').scrollTop;
    }
}
function EndRequestHandler(sender, args) {
    if ($get('divid') != null) {
        $get('divid').scrollLeft = xPos;
        $get('divid').scrollTop = yPos;
    }
}
prm.add_beginRequest(BeginRequestHandler);
prm.add_endRequest(EndRequestHandler);

function Search_Gridprod(strKey, serch, grd) {
    var strData = strKey.value.toLowerCase().split(" ");
    var VarTwo = event.srcElement.id.replace(serch, grd);
    var tblData = document.getElementById(VarTwo);
    var rowData;
    for (var i = 1; i < tblData.rows.length; i++) {
        rowData = tblData.rows[i].innerHTML;
        var styleDisplay = 'none';
        for (var j = 0; j < strData.length; j++) {
            if (rowData.toLowerCase().indexOf(strData[j]) >= 0)
                styleDisplay = '';
            else {
                styleDisplay = 'none';
                break;
            }
        }
        tblData.rows[i].style.display = styleDisplay;
    }
}

//Bind DDL With Search
window.onload = function () {
    $('.only-number').on('keypress', function (e) {
        if (e.charCode >= 32 && e.charCode < 127 &&
            !/^-?\d*[.,]?\d*$/.test(this.value + '' + String.fromCharCode(e.charCode))) {
            return false;
        }
    });
    $('.selectpicker').selectpicker({
        liveSearch: true,
        showSubtext: true
    });
    $('.datepicker-rtl').datepicker({
        todayHighlight: true,
        autoclose: true,
        format: "dd/mm/yyyy",
        orientation: "bottom right",
    });
    var result = KTUtil.getByTagName('body');
    if (result && result[0]) {
        KTUtil.removeClass(result[0], 'page-loading');
    }
};
//On UpdatePanel Refresh
var prm = Sys.WebForms.PageRequestManager.getInstance();
if (prm != null) {
    prm.add_endRequest(function (sender, e) {
        if (sender._postBackSettings.panelsToUpdate != null) {
            $('.only-number').on('keypress', function (e) {
                if (e.charCode >= 32 && e.charCode < 127 &&
                    !/^-?\d*[.,]?\d*$/.test(this.value + '' + String.fromCharCode(e.charCode))) {
                    return false;
                }
            });
            $('.selectpicker').selectpicker({
                liveSearch: true,
                showSubtext: true
            });
            $('.datepicker-rtl').datepicker({
                todayHighlight: true,
                autoclose: true,
                format: "dd/mm/yyyy",
                orientation: "bottom right",
            });
            var result = KTUtil.getByTagName('body');
            if (result && result[0]) {
                KTUtil.removeClass(result[0], 'page-loading');
            }
        }
    });
}

function isNumeric(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode == 46 || charCode == 0 || (charCode >= 48 && charCode <= 57)) return true; return false;
}

function printFunc(scrnnm) {
    var w = 900;
    var h = 700;
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    window.open(scrnnm, '_blank', "", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}

function copy_data(elem) {
    var range = document.createRange();
    range.selectNode(document.getElementById(elem));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}