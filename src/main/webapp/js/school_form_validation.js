function registerform() {

    var trust_name = $('#trust_name').val();
//    var trust_reg_no = $('#trust_reg_no').val();
    var trust_address = $('#trust_address').val();
    var school_name = $('#school_name').val();
    var affiliation_id = $('#affiliation_id').val();
    var school_code = $('#school_code').val();
    var addressline_one = $('#addressline_one').val();
    var email = $('#email_address').val();
    var scl_website = $('#school_website').val();
    var email_add_scl = $('#email_address_school').val();
    var mobile = $('#phone_numbe').val();
    var trust_dropdown = $('.trust_dropdown').val();
    var locationarea_dropdown = $('.locationarea_dropdown').val();
    var country_dropdown = $('.country_dropdown').val();
    var state_dropdown = $('.state_dropdown').val();
    var districtcity_dropdown = $('.districtcity_dropdown').val();
    var thaluka_dropdown = $('.thaluka_dropdown').val();
    var contact = $('#contact').val();
    var education_dropdown = $('.education_dropdown').val();
    var tags = $('#tags').val();
    var school_person = $('#school_person').val();
    var school_gps = $('#school_gps').val();
    var latitude = $('#latitude').val();
    var longitude = $('#longitude').val();
    var upload_logo = $('#upload_logo').val();
    var pin_code = $('#pin_code').val();
    var specials = /[*|\":<>[\]{}`\\()';@&$#]/;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    str = email.split('@').slice(1);
    var allowedDomains = ['gmail.com', 'yahoo.com', 'yahoo.in', 'yahoo.co.in', 'hotmail.com', 'rediff.com', 'aol.com', 'live.com', 'rocketmail.com'];
    var pattern = /^\d{10}$/;
    var contact_pattern = /^\d{13}$/;
    var website = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
    var alphaExp = /^[a-zA-Z\s-, ]+$/;
    var domain_scl = $('#domain_scl').val();
    var valid = true;


    //trust name
    if ($("#add_trust_field").css("display") == "block") {

        if (trust_name == '') {
            $('#trust_name').addClass('red');
            error = "Please enter text only.\n";
            $('#trust_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (specials.test(trust_name)) {
            $('#trust_name').addClass('red');
            error = 'Special characters are not allowed';
            $('#trust_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (!trust_name.match(alphaExp)) {

            error = 'Name should be alaphabets only';
            $('#trust_name').addClass('red');
            $('#trust_name').closest(".form-control").next().text(error).show();
            valid = false;

        } else if (!isNaN(trust_name)) {
            error = 'Numbers are not allowed';
            $('#trust_name').addClass('red');
            $('#trust_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((trust_name.length > 100)) {
            error = "This field have wrong length.\n";
            $('#trust_name').addClass('red');
            $('#trust_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#trust_name').next().hide();
            $('#trust_name').removeClass('red');
        }

        //trust reg no
//        if (trust_reg_no == '') {
//            $('#trust_reg_no').addClass('red');
//            error = "This can't be empty.\n";
//            $('#trust_reg_no').closest(".form-control").next().text(error).show();
//            valid = false;
//        } else if (specials.test(trust_reg_no)) {
//            $('#trust_reg_no').addClass('red');
//            error = 'Special characters are not allowed';
//            $('#trust_reg_no').closest(".form-control").next().text(error).show();
//            valid = false;
//        } else if (!isNaN(trust_reg_no)) {
//            error = 'Numbers are not allowed';
//            $('#trust_reg_no').addClass('red');
//            $('#trust_reg_no').closest(".form-control").next().text(error).show();
//            valid = false;
//        } else if ((trust_reg_no.length > 100)) {
//            error = "This field have wrong length.\n";
//            $('#trust_reg_no').addClass('red');
//            $('#trust_reg_no').closest(".form-control").next().text(error).show();
//            valid = false;
//        } else {
//            $('#trust_reg_no').next().hide();
//            $('#trust_reg_no').removeClass('red');
//        }

        //trust address
        if (trust_address == '') {
            $('#trust_address').addClass('red');
            error = "This can't be empty.\n";
            $('#trust_address').closest(".form-control").next().text(error).show();
            valid = false;
        }
//        else if (specials.test(trust_address)) {
//            $('#trust_address').addClass('red');
//            error = 'Special characters are not allowed';
//            $('#trust_address').closest(".form-control").next().text(error).show();
//            valid = false;
//        }
//        else if (!isNaN(trust_address)) {
//            error = 'Numbers are not allowed';
//            $('#trust_address').addClass('red');
//            $('#trust_address').closest(".form-control").next().text(error).show();
//            valid = false;
//        }
        else if ((trust_address.length > 100)) {
            error = "This field have wrong length.\n";
            $('#trust_address').addClass('red');
            $('#trust_address').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#trust_address').next().hide();
            $('#trust_address').removeClass('red');
        }
    }
    //school name
    if (school_name == '') {
        $('#school_name').addClass('red');
        error = "This can't be empty.\n";
        $('#school_name').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (specials.test(school_name)) {
        $('#school_name').addClass('red');
        error = 'Special characters are not allowed';
        $('#school_name').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (!school_name.match(alphaExp)) {

        error = 'Name should be alaphabets only';
        $('#school_name').addClass('red');
        $('#school_name').closest(".form-control").next().text(error).show();
        valid = false;

    } else if (!isNaN(school_name)) {
        error = 'Numbers are not allowed';
        $('#school_name').addClass('red');
        $('#school_name').closest(".form-control").next().text(error).show();
        valid = false;
    } else if ((school_name.length > 100)) {
        error = "This field have wrong length.\n";
        $('#school_name').addClass('red');
        $('#school_name').closest(".form-control").next().text(error).show();
        valid = false;
    } else {
        $('#school_name').next().hide();
        $('#school_name').removeClass('red');
    }

    //affiliation id
    if (affiliation_id == '') {
        $('#affiliation_id').addClass('red');
        error = "This can't be empty.\n";
        $('#affiliation_id').closest(".form-control").next().text(error).show();
        valid = false;
    } else {
        $('#affiliation_id').next().hide();
        $('#affiliation_id').removeClass('red');
    }

    //school code
    if (school_code == '') {
        $('#school_code').addClass('red');
        error = "This can't be empty.\n";
        $('#school_code').closest(".form-control").next().text(error).show();
        valid = false;
    } else {
        $('#school_code').next().hide();
        $('#school_code').removeClass('red');
    }

    //address line one
    if (addressline_one == '') {
        $('#addressline_one').addClass('red');
        error = "Please enter the address.\n";
        $('#addressline_one').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (specials.test(addressline_one)) {
        $('#addressline_one').addClass('red');
        error = 'Special characters are not allowed';
        $('#addressline_one').closest(".form-control").next().text(error).show();
        valid = false;
    } else {
        $('#addressline_one').next().hide();
        $('#addressline_one').removeClass('red');
    }

    //email
    if (email == '') {
        $('#email_address').addClass('red');
        error = "Please enter valid email ID.\n";
        $('#email_address').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (regex.test(email) == false) {
        $('#email_address').addClass('red');
        error = "Please enter a valid email Id.\n";
        $('#email_address').closest(".form-control").next().text(error).show();
        valid = false;
    } else if ($.inArray(str[0], allowedDomains) == -1) {
        $('#email_address').addClass('red');
        error = str + " is not a valid email url.\n";
        $('#email_address').closest(".form-control").next().text(error).show();
        valid = false;
    } else {
        $('#email_address').closest(".form-control").next().hide();
        $('#email_address').removeClass('red');
    }

    //School_website
    if (scl_website == '') {
        $('#school_website').addClass('red');
        error = "Please enter valid domain ID.\n";
        $('#school_website').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (website.test(scl_website) == false) {

        $('#school_website').addClass('red');
        error = "Please enter a valid domain Id.\n";
        $('#school_website').closest(".form-control").next().text(error).show();
        valid = false;
    }
    // else if ($.inArray(str[0], allowedDomains) == -1) {
    //     alert();
    //     $('#school_website').addClass('red');
    //     error = str + " is not a valid email domain.\n";
    //     $('#school_website').closest(".form-control").next().text(error).show();
    //     valid = false;
    // }
    else {
        $('#school_website').closest(".form-control").next().hide();
        $('#school_website').removeClass('red');
    }

    //mobile
    if (mobile == '') {
        $('#phone_numbe').addClass('red');
        error = "Please enter numbers only.\n";
        $('#phone_numbe').next().text(error).show();
        valid = false;
    } else if (pattern.test(mobile) == false) {
        $('#phone_numbe').addClass('red');
        error = "Please specify a valid mobile number.\n";
        $('#phone_numbe').next().text(error).show();
        valid = false;
    } else {
        $('#phone_numbe').closest(".form-control").next().hide();
        $('#phone_numbe').removeClass('red');
    }

    //trust dropdown
    if (trust_dropdown == 0) {
        var error = "Please select from dropdown.\n";
        $('.trust_dropdown').addClass('red');
        error = "Please select from dropdown.\n";
        $('.trust_dropdown').next('.errmsg').text(error).show();
        valid = false;
    } else {
        $('.trust_dropdown').removeClass('red');
        $('.trust_dropdown').next('.errmsg').hide();
    }

    //location / area dropdown
    if (locationarea_dropdown == 0) {
        var error = "Please select from dropdown.\n";
        $('.locationarea_dropdown').addClass('red');
        error = "Please select from dropdown.\n";
        $('.locationarea_dropdown').next('.errmsg').text(error).show();
        valid = false;
    } else {
        $('.locationarea_dropdown').removeClass('red');
        $('.locationarea_dropdown').next('.errmsg').hide();
    }

    //country dropdown
    if (country_dropdown == 0) {
        var error = "Please select from dropdown.\n";
        $('.country_dropdown').addClass('red');
        error = "Please select from dropdown.\n";
        $('.country_dropdown').next('.errmsg').text(error).show();
        valid = false;
    } else {
        $('.country_dropdown').removeClass('red');
        $('.country_dropdown').next('.errmsg').hide();
    }

    //state dropdown
    if (state_dropdown == 0) {
        var error = "Please select from dropdown.\n";
        $('.state_dropdown').addClass('red');
        error = "Please select from dropdown.\n";
        $('.state_dropdown').next('.errmsg').text(error).show();
        valid = false;
    } else {
        $('.state_dropdown').removeClass('red');
        $('.state_dropdown').next('.errmsg').hide();
    }

    //district city dropdown
    if (districtcity_dropdown == 0) {
        var error = "Please select from dropdown.\n";
        $('.districtcity_dropdown').addClass('red');
        error = "Please select from dropdown.\n";
        $('.districtcity_dropdown').next('.errmsg').text(error).show();
        valid = false;
    } else {
        $('.districtcity_dropdown').removeClass('red');
        $('.districtcity_dropdown').next('.errmsg').hide();
    }

    //thaluka dropdown
    if (thaluka_dropdown == 0) {
        var error = "Please select from dropdown.\n";
        $('.thaluka_dropdown').addClass('red');
        error = "Please select from dropdown.\n";
        $('.thaluka_dropdown').next('.errmsg').text(error).show();
        valid = false;
    } else {
        $('.thaluka_dropdown').removeClass('red');
        $('.thaluka_dropdown').next('.errmsg').hide();
    }

    //Education Board Dropdown
    if (education_dropdown == 0) {
        var error = "Please select from dropdown.\n";
        $('.education_dropdown').addClass('red');
        error = "Please select from dropdown.\n";
        $('.education_dropdown').next('.errmsg').text(error).show();
        valid = false;
    } else {
        $('.education_dropdown').removeClass('red');
        $('.education_dropdown').next('.errmsg').hide();
    }

    //Contact
    if (contact == '') {
        $('#contact').addClass('red');
        error = "Please enter numbers only.\n";
        $('#contact').next().text(error).show();
        valid = false;
    } else if (contact_pattern.test(contact) == false) {
        $('#contact').addClass('red');

        error = "Please enter a valid only.\n";
        $('#contact').next().text(error).show();
        valid = false;
    } else {
        $('#contact').closest(".form-control").next().hide();
        $('#contact').removeClass('red');
    }

    //Tags Total No Of Students
    if (tags == '') {
        $('#tags').addClass('red');
        error = "This can't be empty.\n";
        $('#tags').next().text(error).show();
        valid = false;
    } else if (pattern.test(mobile) == false) {
        $('#tags').addClass('red');
        error = "This can't be empty.\n";
        $('#tags').next().text(error).show();
        valid = false;
    } else {
        $('#tags').closest(".form-control").next().hide();
        $('#tags').removeClass('red');
    }


    //school name
    if (school_person == '') {
        $('#school_person').addClass('red');
        error = "Please enter text only.\n";
        $('#school_person').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (specials.test(school_name)) {
        $('#school_person').addClass('red');
        error = 'Special characters are not allowed';
        $('#school_person').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (!school_person.match(alphaExp)) {

        error = 'Name should be alaphabets only';
        $('#school_person').addClass('red');
        $('#school_person').closest(".form-control").next().text(error).show();
        valid = false;

    } else if (!isNaN(school_person)) {
        error = 'Numbers are not allowed';
        $('#school_person').addClass('red');
        $('#school_person').closest(".form-control").next().text(error).show();
        valid = false;
    } else if ((school_person.length > 100)) {
        error = "This field have wrong length.\n";
        $('#school_person').addClass('red');
        $('#school_person').closest(".form-control").next().text(error).show();
        valid = false;
    } else {
        $('#school_person').next().hide();
        $('#school_person').removeClass('red');
    }

    //email school 
    if (email_add_scl == '') {
        $('#email_address_school').addClass('red');
        error = "Please enter valid email ID.\n";
        $('#email_address_school').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (regex.test(email) == false) {
        $('#email_address_school').addClass('red');
        error = "Please enter a valid email Id.\n";
        $('#email_address_school').closest(".form-control").next().text(error).show();
        valid = false;
    } else if ($.inArray(str[0], allowedDomains) == -1) {
        $('#email_address_school').addClass('red');
        error = str + " is not a valid email url.\n";
        $('#email_address_school').closest(".form-control").next().text(error).show();
        valid = false;
    } else {
        $('#email_address_school').closest(".form-control").next().hide();
        $('#email_address_school').removeClass('red');
    }


    //School GPS
    if (school_gps == '') {
        $('#school_gps').addClass('red');
        error = "Please specify your School GPS.\n";
        $('#school_gps').closest(".form-control").next().text(error).show();
        valid = false;
    } else {
        $('#school_gps').next().hide();
        $('#school_gps').removeClass('red');
    }

//Latitude & Longitude
    if (latitude == '') {
        $('#latitude').addClass('red');
        error = "This can't be empty.\n";
        $('#latitude').closest(".form-control").next().text(error).show();
        valid = false;
    } else {
        $('#latitude').next().hide();
        $('#latitude').removeClass('red');
    }

    if (longitude == '') {
        $('#longitude').addClass('red');
        error = "This can't be empty.\n";
        $('#longitude').closest(".form-control").next().text(error).show();
        valid = false;
    } else {
        $('#longitude').next().hide();
        $('#longitude').removeClass('red');
    }

    var attachement = document.getElementById('upload_logo');
    var filess = attachement.files[0];
    //upload Logo
    if (upload_logo == '') {
        $('#upload_logo').addClass('red');
        error = "This can't be empty.\n";
        $('#upload_logo').closest(".form-control").next().text(error).show();
        valid = false;
    } else if ((filess.size > 150000)) {
        error = "File size should be 150kb.\n";
        $('#upload_logo').closest(".form-control").next().text(error).show();
        valid = false;

    } else {
        $('#upload_logo').closest(".form-control").next().hide();
        $('#upload_logo').removeClass('red');
    }

// pincode
    if (pin_code == '') {
        $('#pin_code').addClass('red');
        error = "Please enter numbers only.\n";
        $('#pin_code').next().text(error).show();
        valid = false;
    } else {
        $('#pin_code').closest(".form-control").next().hide();
        $('#pin_code').removeClass('red');
    }
    
    
    
    
    
    
    
 //school Domain
    if (domain_scl == '') {
        $('#domain_scl').addClass('red');
        error = "This can't be empty.\n";
        $('#domain_scl').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (specials.test(domain_scl)) {
        $('#domain_scl').addClass('red');
        error = 'Special characters are not allowed';
        $('#domain_scl').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (!domain_scl.match(alphaExp)) {

        error = 'Name should be alaphabets only';
        $('#domain_scl').addClass('red');
        $('#domain_scl').closest(".form-control").next().text(error).show();
        valid = false;

    } else if (!isNaN(domain_scl)) {
        error = 'Numbers are not allowed';
        $('#domain_scl').addClass('red');
        $('#domain_scl').closest(".form-control").next().text(error).show();
        valid = false;
    } else if ((domain_scl.length > 100)) {
        error = "This field have wrong length.\n";
        $('#domain_scl').addClass('red');
        $('#domain_scl').closest(".form-control").next().text(error).show();
        valid = false;
    } else {
        $('#domain_scl').next().hide();
        $('#domain_scl').removeClass('red');
    }



    return valid;
}

//show hide the fields

function show(toBlock) {
    setDisplay(toBlock, 'block');
}
function hide(toNone) {
    setDisplay(toNone, 'none');
}
function setDisplay(target, str) {
    document.getElementById(target).style.display = str;
}

// Auto fill For Total no of Students

$(document).ready(function () {

    $(function () {
        var availableTags = [
            "1900 - 2000",
            "1800 - 1900",
            "1700 - 1800",
            "1600 - 1700",
            "1500 - 1600",
            "1400 - 1500",
            "1300 - 1400",
            "1200 - 1300",
            "1100 - 1200",
            "1000 - 1100",
            "900 - 1000",
            "800 - 900",
            "700 - 800",
            "600 - 700",
            "500 - 600",
            "400 - 500",
            "300 - 400",
            "200 - 300",
            "100 - 200"
        ];

        $("#tags").autocomplete({
            source: availableTags
        });
    });

});


