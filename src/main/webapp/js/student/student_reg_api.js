var global_server;
var global_src;



//for studentTypes
$(document).ready(function () {
    var username = localStorage.getItem('storeduser');
    var password = localStorage.getItem('storedpw');

    $.ajax({
        type: "GET", //API method
        url: global_server + 'user/studentType', // API URL                     
        crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP

        xhrFields: {
            withCredentials: true
        },
        beforeSend: function (xhr) {

            xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ":" + password));
        },
        success: function (data) {
            var content = "";

            $.each(data.studentTypes, function (index, value) {
                content = content + "<option value='" + value.studentTypeName + "' Serial_No='" + value.serialNo + "'>" + value.studentTypeName + "</option>";
            });

            $('#stu_types').append(content);
        }

    });
});




//For Class

$(document).ready(function () {

    var username = localStorage.getItem('storeduser');
    var password = localStorage.getItem('storedpw');

    // var xhr = new XMLHttpRequest();
    $.ajax({
        type: "GET", //API method
        url: global_server + 'school/classes?domain=localhost', // API URL                     
        crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP

        xhrFields: {
            withCredentials: true
        },
        beforeSend: function (xhr) {

            xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ":" + password));
        },
        success: function (data) {
            var content = "";
            alert(data);
            $.each(data.classes, function (index, value) {
                content = content + "<option value='" + value.name + "' classId='" + value.id + "'>" + value.name + "</option>";
            });

            $('#classes').append(content);
        }

    });
});




//For Sections
$(document).ready(function () {
    var username = localStorage.getItem('storeduser');
    var password = localStorage.getItem('storedpw');
    var domain = location.hostname;
    $.ajax({
        type: "GET", //API method
        url: global_server + 'school/sections?domain=localhost', // API URL                     
        crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP

        xhrFields: {
            withCredentials: true
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ":" + password));
        },
        success: function (data) {
            var content = "";

            $.each(data.sections, function (index, value) {
                content = content + "<option value='" + value.name + "' sectionid='" + value.id + "'>" + value.name + "</option>";
            });

            $('#sections').append(content);
        }

    });
});








//For Religions
$(document).ready(function () {
    var username = localStorage.getItem('storeduser');
    var password = localStorage.getItem('storedpw');

    $.ajax({
        type: "GET", //API method
        url: global_server + 'user/religionTypes', // API URL                     
        crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP
        //  var xhr = new XMLHttpRequest();
        xhrFields: {
            withCredentials: true
        },
        beforeSend: function (xhr) {

            xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ":" + password));
        },
        success: function (data) {
            var content = "";

            $.each(data.religionTypes, function (index, value) {
                content = content + "<option value='" + value.religionTypesName + "' Serial_No='" + value.serialNo + "'>" + value.religionTypesName + "</option>";
            });

            $('#religions').append(content);
        }

    });
});




//For castes
$(document).ready(function () {
    var username = localStorage.getItem('storeduser');
    var password = localStorage.getItem('storedpw');

    $.ajax({
        type: "GET", //API method
        url: global_server + 'user/casteTypes', // API URL                     
        crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP
        xhrFields: {
            withCredentials: true
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ":" + password));
        },
        success: function (data) {

            var content = "";

        
            $.each(data.casteTypes, function (index, value) {
                content = content + "<option value='" + value.subcasteTypesName + "' Serial_No='" + value.serialNo + "'>" +  value.subcasteTypesName + "</option>";
            });

            $('#castes').append(content);
        }


    });
});



//For Nationality
$(document).ready(function () {
    var username = localStorage.getItem('storeduser');
    var password = localStorage.getItem('storedpw');

    $.ajax({
        type: "GET", //API method
        url: global_server + 'common/nationality', // API URL                     
        crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP
        xhrFields: {
            withCredentials: true
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ":" + password));
        },
        success: function (data) {
            var content = "";

            //$.each(data.nationalities, function (index, value) {
               // content = content + "<option value='" + value.nationality + "' Serial_No='" + value.serialNo + "'>" + value.nationality + "</option>";
            content = content + "<option value='" + Indian + "' Serial_No='" + 1 + "'>" + Indian + "</option>";
           // });

            $('#nationalities').append(content);
        }

    });
});


//For subCastes
$(document).ready(function () {
    var username = localStorage.getItem('storeduser');
    var password = localStorage.getItem('storedpw');

    $.ajax({
        type: "GET", //API method
        url: global_server + 'user/casteTypes', // API URL                     
        crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP
        xhrFields: {
            withCredentials: true
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ":" + password));
        },
        success: function (data) {
            var content = "";

            $.each(data.casteTypes, function (index, value) {
                content = content + "<option value='" + value.subcasteTypesName + "' Serial_No='" + value.serialNo + "'>" + value.subcasteTypesName + "</option>";
            });

            $('#sub_castes').append(content);
        }

    });
});





//For Country
$(document).ready(function () {
    $.ajax({
        type: "GET", //API method
        url: global_src + 'country', // API URL
        //url: '//localhost:8081/asms-services/countries/country', // API URL
        crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP
        success: function (data) {
            //console.log(data);
            var content = "";
            $.each(data.countries, function (index, value) {
                content = content + "<option value='" + value.countryName + "' countrycode='" + value.siNo + "'>" + value.countryName + "</option>";
            });
            $('#country').append(content);
        }
    });
});


//For Country for corr
$(document).ready(function () {
    $.ajax({
        type: "GET", //API method
        url: global_src + 'country', // API URL
        //url: '//localhost:8081/asms-services/countries/country', // API URL
        crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP
        success: function (data) {
            //console.log(data);
            var content = "";
            $.each(data.countries, function (index, value) {
                content = content + "<option value='" + value.countryName + "' countrycode='" + value.siNo + "'>" + value.countryName + "</option>";
            });
            $('#country_cor').append(content);
        }
    });
});


//For State
$(document).ready(function () {

    $.ajax({
        type: "GET", //API method
        url: global_src + 'state', // API URL
        //url: '//localhost:8081/asms-services/countries/state', // API URL
        crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP
        success: function (data) {
            //console.log(data);
            var content = "";
            $.each(data.stateEntities, function (index, value) {
                content = content + "<option value='" + value.states + "' statecode='" + value.serialNo + "'>" + value.states + "</option>";
            });

            $('#state').append(content);
        }
    });
});


//For State for corr
$(document).ready(function () {

    $.ajax({
        type: "GET", //API method
        url: global_src + 'state', // API URL
        //url: '//localhost:8081/asms-services/countries/state', // API URL
        crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP
        success: function (data) {
            //console.log(data);
            var content = "";
            $.each(data.stateEntities, function (index, value) {
                content = content + "<option value='" + value.states + "' statecode='" + value.serialNo + "'>" + value.states + "</option>";
            });

            $('#state_cor').append(content);
        }
    });
});


//For District
$(document).ready(function () {
    $('#state').change(function () {
        var resp_dist = $('#state option:selected').attr('statecode');
        //alert(resp_dist);
        var newSrc = global_src + 'district?id=' + resp_dist;
        //var newSrc = '//localhost:8081/asms-services/countries/district?id=' + resp_dist;
        //alert(newSrc);
        $.ajax({
            type: "GET", //API method
            url: newSrc, // API URL
            crossDomain: true,
            contentType: 'application/json; odata=verbose',
            dataType: 'json', // check with both one by one JSON and JSONP
            success: function (data) {
                var content = "";
                var content_sel = "<option value=' ' trustid=' '>Select your District / City</option>";
                $.each(data.districts, function (index, value) {
                    content = content + "<option value='" + value.dName + "' id='" + value.serialNo + "'>" + value.dName + "</option>";
                });
                $('#district').empty(content);
                $('#district').append(content_sel);
                $('#district').append(content);
            }
        });
    });
});


//For District for corr
$(document).ready(function () {
    $('#state_cor').change(function () {
        var resp_dist = $('#state_cor option:selected').attr('statecode');
        //alert(resp_dist);
        var newSrc = global_src + 'district?id=' + resp_dist;
        //var newSrc = '//localhost:8081/asms-services/countries/district?id=' + resp_dist;
        //alert(newSrc);
        $.ajax({
            type: "GET", //API method
            url: newSrc, // API URL
            crossDomain: true,
            contentType: 'application/json; odata=verbose',
            dataType: 'json', // check with both one by one JSON and JSONP
            success: function (data) {
                var content = "";
                var content_sel = "<option value=' ' trustid=' '>Select your District / City</option>";
                $.each(data.districts, function (index, value) {
                    content = content + "<option value='" + value.dName + "' id='" + value.serialNo + "'>" + value.dName + "</option>";
                });
                $('#district_cor').empty(content);
                $('#district_cor').append(content_sel);
                $('#district_cor').append(content);
            }
        });
    });
});




//For Tehsil
$(document).ready(function () {
    $('#district').change(function () {
        var resp_tehsil = $('#district option:selected').attr('id');
        var newSrc = global_src + 'tehsil?id=' + resp_tehsil;
        $.ajax({
            type: "GET", //API method
            url: newSrc, // API URL
            crossDomain: true,
            contentType: 'application/json; odata=verbose',
            dataType: 'json', // check with both one by one JSON and JSONP
            success: function (data) {
                //console.log(data);
                var content = "";
                var content_sel = "<option value=' ' trustid=' '>Select your Thaluka</option>";
                $.each(data.tehsils, function (index, value) {
                    //var id = index+1;
                    content = content + "<option value='" + value.tehsilName + "' id='" + value.serialNo + "'>" + value.tehsilName + "</option>";
                });
                $('#thaluka').empty(content);
                $('#thaluka').append(content_sel);
                $('#thaluka').append(content);
            }
        });
    });
});


//For Tehsil for corr
$(document).ready(function () {
    $('#district_cor').change(function () {
        var resp_tehsil = $('#district_cor option:selected').attr('id');
        var newSrc = global_src + 'tehsil?id=' + resp_tehsil;
        $.ajax({
            type: "GET", //API method
            url: newSrc, // API URL
            crossDomain: true,
            contentType: 'application/json; odata=verbose',
            dataType: 'json', // check with both one by one JSON and JSONP
            success: function (data) {
                //console.log(data);
                var content = "";
                var content_sel = "<option value=' ' trustid=' '>Select your Thaluka</option>";
                $.each(data.tehsils, function (index, value) {
                    //var id = index+1;
                    content = content + "<option value='" + value.tehsilName + "' id='" + value.serialNo + "'>" + value.tehsilName + "</option>";
                });
                $('#thaluka_cor').empty(content);
                $('#thaluka_cor').append(content_sel);
                $('#thaluka_cor').append(content);
            }
        });
    });
});


//For hobli
$(document).ready(function () {
    $('#district').change(function () {
        var resp_subdiv = $('#district option:selected').attr('id');
        var newSrc = global_src + 'subDivision?id=' + resp_subdiv;
        alert(newSrc);
        $.ajax({
            type: "GET", //API method
            url: newSrc, // API URL
            crossDomain: true,
            contentType: 'application/json; odata=verbose',
            dataType: 'json', // check with both one by one JSON and JSONP
            success: function (data) {
                var content = "";
                var content_sel = "<option value=' ' trustid=' '>Select your Hobli</option>";
                $.each(data.subDivisions, function (index, value) {
                    //var id = index+1;
                    content = content + "<option value='" + value.subDivisionName + "' id='" + value.serialNo + "'>" + value.subDivisionName + "</option>";
                });
                $('#hobli').empty(content);
                $('#hobli').append(content_sel);
                $('#hobli').append(content);
            }
        });
    });
});

//For hobli for cor
$(document).ready(function () {
    $('#district_cor').change(function () {
        var resp_subdiv = $('#district_cor option:selected').attr('id');
        var newSrc = global_src + 'subDivision?id=' + resp_subdiv;
        alert(newSrc);
        $.ajax({
            type: "GET", //API method
            url: newSrc, // API URL
            crossDomain: true,
            contentType: 'application/json; odata=verbose',
            dataType: 'json', // check with both one by one JSON and JSONP
            success: function (data) {
                var content = "";
                var content_sel = "<option value=' ' trustid=' '>Select your Hobli</option>";
                $.each(data.subDivisions, function (index, value) {
                    //var id = index+1;
                    content = content + "<option value='" + value.subDivisionName + "' id='" + value.serialNo + "'>" + value.subDivisionName + "</option>";
                });
                $('#hobli_cor').empty(content);
                $('#hobli_cor').append(content_sel);
                $('#hobli_cor').append(content);
            }
        });
    });
});




//For Village
$(document).ready(function () {
    $('#thaluka').change(function () {
        var resp_village = $('#thaluka option:selected').attr('id');
        var newSrc = global_src + 'village?id=' + resp_village;
        //alert(newSrc);
        $.ajax({
            type: "GET", //API method
            url: newSrc, // API URL
            crossDomain: true,
            contentType: 'application/json; odata=verbose',
            dataType: 'json', // check with both one by one JSON and JSONP
            success: function (data) {
                var content = "";
                var content_sel = "<option value=' ' trustid=' '>Select your Village / Area</option>";
                $.each(data.villages, function (index, value) {
                    //var id = index+1;
                    content = content + "<option value='" + value.villageName + "' id='" + value.serialNo + "'>" + value.villageName + "</option>";
                });
                $('#village').empty(content);
                $('#village').append(content_sel);
                $('#village').append(content);
            }
        });
    });
});




//For Village for cor
$(document).ready(function () {
    $('#thaluka_cor').change(function () {
        var resp_village = $('#thaluka_cor option:selected').attr('id');
        var newSrc = global_src + 'village?id=' + resp_village;
        //alert(newSrc);
        $.ajax({
            type: "GET", //API method
            url: newSrc, // API URL
            crossDomain: true,
            contentType: 'application/json; odata=verbose',
            dataType: 'json', // check with both one by one JSON and JSONP
            success: function (data) {
                var content = "";
                var content_sel = "<option value=' ' trustid=' '>Select your Village / Area</option>";
                $.each(data.villages, function (index, value) {
                    //var id = index+1;
                    content = content + "<option value='" + value.villageName + "' id='" + value.serialNo + "'>" + value.villageName + "</option>";
                });
                $('#village_1_cor').empty(content);
                $('#village_1_cor').append(content_sel);
                $('#village_1_cor').append(content);
            }
        });
    });
});





function registerStudent(next_fs, current_fs) {
    var username = localStorage.getItem('storeduser');
    var password = localStorage.getItem('storedpw');
    var registeredUserId = localStorage.getItem('RegisteredUserId');
    var domain = location.hostname;
    var xhr = new XMLHttpRequest();
    var formData = JSON.stringify({
        "requestType": "create",
        "userRole": "Student",
        "subRole": "Student",

        "userDetails": {
            "email": $("input#email_address").val(),
            "userId":registeredUserId,

            "studentDetails": {
                "admissionNo": $("input#admission_number").val(),
                "studentType": $("select#stu_types").val(),
                "admissionDate": $("input#admission_date").val(),
                "studentClass": $("select#classes").val(),
                "studentSection": $("select#sections").val(),
                "studentFirstName": $("input#student_first_name").val(),
                "studentMiddleName": $("input#student_middle_name").val(),
                "studentLastName": $("input#student_last_name").val(),
                "studentDob": $("input#date_of_birth").val(),
                "studentGender": $("input[name='radio']:checked").val(),
                "studentIdentificationMarks": $("input#identification_mark").val(),
                "studentAgeInYears": $("input#age_in_year").val(),
                "studentBirthplace": $("input#place_in_birth").val(),
                "studentNationality": $("select#nationalities").val(),
                "studentReligion": $("select#religions").val(),
                "studentCasteCategory": $("select#castes").val(),
                "studentSubCaste": $("select#sub_castes").val(),
                "studentMotherTongue": $("input#mother_tongue").val(),
                "studentPhoto": $("input#upload_student_photo").val(),
                "emergencyContactNo": $("input#emergency_contact").val(),
                "bloodGroup": $("select#blood_group").val()
            }

        }

    })

    $.ajax({
        type: "POST",
        url: global_server + 'user/register?domain='+domain,
        data: formData,
        crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP
        xhrFields: {
            withCredentials: true
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ":" + password));
        },
        success: function (response) {
            localStorage.setItem('RegisteredUserId', response.userId);
            next_fs.show();
            current_fs.hide();
        },
        error: function (response) {
            alert(response.responseJSON.errorDescription);
            next_fs.hide();
            current_fs.show();
        }
    });
}


function studentAddress(next_fs, current_fs) {
    var username = localStorage.getItem('storeduser');
    var password = localStorage.getItem('storedpw');
    var registeredUserId = localStorage.getItem('RegisteredUserId');
    if (registeredUserId) {
        
        var domain = location.hostname;

        var xhr = new XMLHttpRequest();
//
//        var parmanentAddressSameAsCurrent;
//        if ($('input#checkbox').is(':checked')) {
//            parmanentAddressSameAsCurrent = true;
//        } else {
//            parmanentAddressSameAsCurrent = false;
//        }


        var formData = JSON.stringify({



            "requestType": "details",
            "userRole": "Student",
            "subRole": "Student",
            "detailType": "addressInfo",
            "userDetails": {
                "userId": registeredUserId,

                "studentDetails": {
                    "addressDetails": {
                        "pAddressLine1": $("textarea#student_addressline_one").val(),
                        "pAddressLine2": $("textarea#student_addressline_two").val(),
                        "pCountry": $("select#country").val(),
                        "pState": $("select#state").val(),
                        "pDistrict": $("select#district").val(),
                        "pSubDivision": $("select#hobli").val(),
                        "pPincode": $("input#pincode").val(),
                        "pLocation": $("select#location").val(),
                        "pTehsil": $("select#thaluka").val(),
                        "pVillage": $("select#village").val(),
                 
                        "cAddressLine1": $("textarea#student_addressline_one_cor").val(),
                        "cAddressLine2": $("textarea#student_addressline_two_cor").val(),
                        "cCountry": $("select#country_cor").val(),
                        "cState": $("select#state_cor").val(),
                        "cDistrict": $("select#district_cor").val(),
                        "cSubDivision": $("select#hobli_cor").val(),
                        "cTehsil": $("select#thaluka_cor").val(),
                        "cVillage": $("select#village_1_cor").val(),
                        "cPincode": $("input#pincode_cor").val(),
                        "cLocation": $("select#location_cor").val(),


                    }

                }
            }


        })
        $.ajax({
            type: "POST",
            url: global_server + 'user/register/details?domain='+domain,
            data: formData,
            crossDomain: true,
            contentType: 'application/json; odata=verbose',
            dataType: 'json', // check with both one by one JSON and JSONP
            xhrFields: {
                withCredentials: true
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ":" + password));
            },
            success: function (response) {
                next_fs.show();
                current_fs.hide();
            },
            error: function (response) {
                alert(response.responseJSON.errorDescription);
                next_fs.hide();
                current_fs.show();
            }
        });
    } else {
        alert("add primary details first");

    }
}




//$(document).ready(function(){
//       alert("1");
//       if ($('input#checkbox').is(':checked')) {
//           
// 	           $("input#student_addressline_one").val()=$("input#student_addressline_one_cor").val(),  
//               $("input#student_addressline_one").val()=$("input#student_addressline_two_cor").val(),
//                $("select#country").val()=$("select#country_cor").val(),
//                $("select#state").val()=$("select#state_cor").val(),
//                $("select#district").val()=$("select#district_cor").val(),
//                $("select#hobli").val()=$("select#hobli_cor").val(),
//                $("select#thaluka").val()=$("select#thaluka_cor").val(),
//                $("select#village").val()=$("select#village_1_cor").val(),
//                $("input#pincode").val()=$("input#pincode_cor").val(),
//                $("select#location").val()=$("select#location_cor").val(),
//    }
//});

function FillBilling(f) {
    if (f.billingtoo.checked === true) {
        f.student_addressline_one_cor.value = f.student_addressline_one.value;
        f.student_addressline_two_cor.value = f.student_addressline_two.value;
        f.country_cor.value=f.country.value;
        f.state_cor.value=f.state.value;
        f.district_cor.value=f.district.value;
        f.hobli_cor.value=f.hobli.value;
        f.thaluka_cor.value=f.thaluka.value;
        f.village_1_cor.value=f.village.value;
        f.pincode_cor.value=f.pincode.value;
        f.location_cor.value=f.location.value;
    } else {
        f.student_addressline_one.value = "";
        f.student_addressline_two.value = "";
         f.country.value="";
         f.state.value="";
        f.district.value="";
         f.hobli.value="";
        f.thaluka.value="";
         f.village.value="";
           f.pincode.value="";
          f.location.value="";
    }
}






function parentRegister(next_fs, current_fs) {
    
  var username = localStorage.getItem('storeduser');
    var password = localStorage.getItem('storedpw');
    var registeredUserId = localStorage.getItem('RegisteredUserId');
    if (registeredUserId) {
        
        var domain = location.hostname;

        var xhr = new XMLHttpRequest();
//
//        var parmanentAddressSameAsCurrent;
//        if ($('input#checkbox').is(':checked')) {
//            parmanentAddressSameAsCurrent = true;
//        } else {
//            parmanentAddressSameAsCurrent = false;
//        }


        var formData = JSON.stringify({	
	"requestType" :"details",
	"userRole" :"Student",
	"detailType":"parentInfo",
	"userDetails" : {
		"userId":registeredUserId,
		"studentDetails":{
			"parentDetails":{
				"fFirstName": $("input#father_first_name").val(),
				"fMiddleName": $("input#father_middle_name").val(),
				"fLastName": $("input#father_last_name").val(),
				"fQualification": $("input#father_quali").val(),
				"fOccupation": $("input#father_occup").val(),
				"fContactNumber": $("input#father_con_num").val(),
				"fEmail": $("input#father_email").val(),
				"mFirstName": $("input#mother_first_name").val(),
				"mMiddleName": $("input#mother_middle_name").val(),
				"mLastName": $("input#mother_last_name").val(),
				"mQualification": $("input#mother_quali").val(),
				"mOccupation": $("input#student_addressline_one").val(),
				"mContactNumber": $("input#mother_con_num").val(),
				"mEmail": $("input#mother_email").val(),
			"fIncome":$("input#father_income").val(),
                "mIncome":$("input#mother_income").val(),
				
			}
			
		}
		
	}	
}
)
        $.ajax({
            type: "POST",
            url: global_server + 'user/register/details?domain='+domain,
            data: formData,
            crossDomain: true,
            contentType: 'application/json; odata=verbose',
            dataType: 'json', // check with both one by one JSON and JSONP
            xhrFields: {
                withCredentials: true
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ":" + password));
            },
            success: function (response) {
                next_fs.show();
                current_fs.hide();
            },
            error: function (response) {
                alert(response.responseJSON.errorDescription);
                next_fs.hide();
                current_fs.show();
            }
        });
    } else {
        alert("add primary details first");

    }
}


