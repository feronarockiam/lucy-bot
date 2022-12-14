var table = ('#student');

async function mock() {
    let tbody = document.getElementById('tbody')
    console.log("In");
    let response = await fetch('https://638f5b8c4ddca317d7f644f9.mockapi.io/form_pg')
    let result = await (response.json())
    console.log(result);


    console.log("In1");
    let no = 1;
    result.forEach(element => {
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerHTML = no;
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = element.name
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = element.phno
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = element.email
        tr.appendChild(td)

        // td = document.createElement('td')
        // td.innerHTML = element.id
        // tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = element.tenth
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = element.twelve
        tr.appendChild(td)

        td = document.createElement('td')
        var deltext = 'Dear Young learner, Your enrollment is rejected by the college! Contact lucy bot for further information.'
        var suctext = 'Dear Young learner, Your enrollment is successful! Contact lucy bot for further information.'
        td.innerHTML = `<div>
            <button class="tick" type = "submit" style="margin-right: 20px" onclick="sucmail('${element.email}','${element.id}','${suctext}','${element.phno}')" ><i class="fa fa-check" style="color: rgb(8, 250, 8);"></i></button><button class="cancel" style="margin-right: 20px" onclick="delete_id('${element.id}','${element.email}','${deltext}','${element.phno}')" ><i class="fa fa-times" style="color: red;"></i></button>
            </div>`

        tr.appendChild(td)
        tbody.append(tr)
        no = no + 1
    });
}



mock()

async function sendmail(email, id, text) {
    response = await fetch('/admin/sendMail/' + email+'/'+text)
    console.log(id);
    let result = await (response.json())
    console.log(result);

}

async function sucmail(email,id,suctext,phno){
    sendmail(email, id,suctext);
    var ajxReq = await $.ajax({
        url: 'https://638f5b8c4ddca317d7f644f9.mockapi.io/form_pg/' + id,
        type: 'DELETE',
        async: false,
        dataType: 'json',
        enctype: 'multipart/form-data',
        success: function (data) {

        },
        error: function (jqXhr, textStatus, errorMessage) {

        }
    });
    var post = await $.post("https://638f5b8c4ddca317d7f644f9.mockapi.io/status",
    {
      phno: phno,
      status: "Approved"
    });
}

async function delete_id(id, email,deltext,phno) {
    sendmail(email, id,deltext);
    var ajxReq = await $.ajax({
        url: 'https://638f5b8c4ddca317d7f644f9.mockapi.io/form_pg/' + id,
        type: 'DELETE',
        async: false,
        dataType: 'json',
        enctype: 'multipart/form-data',
        success: function (data) {

        },
        error: function (jqXhr, textStatus, errorMessage) {

        }
    });

    var post = await $.post("https://638f5b8c4ddca317d7f644f9.mockapi.io/status",
    {
      phno: phno,
      status: "Rejected"
    });

}