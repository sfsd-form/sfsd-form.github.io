let modal = document.getElementById("modalWin"),
btn = document.getElementById("btn_"),
btn_close = document.getElementById("btn_close"),
span = document.getElementsByClassName("close")[0],
outupBB = document.getElementById("outputBB"),
nameBB = document.getElementById("nameBB"),
incedent_num = document.getElementById("incedent_num"),
filed_in = document.getElementById("filed_in"),
incedent_reason = document.getElementById("incedent_reason"),
date_ = document.getElementById("date_"),
time = document.getElementById("time"),
situation_description = document.getElementById('situation_description'),
name_ = document.getElementById("name"),
surname = document.getElementById("surname"),
division = document.getElementById("division"),
marker = document.getElementById("marker"),
adres = document.getElementById("adres"),
phone_num = document.getElementById("phone_num"),
location_ = document.getElementById("location"),
other_sheriffs = document.getElementById("other_sheriffs"),
victims = document.getElementById("victims"),
witnesses = document.getElementById("witnesses"),
suspects = document.getElementById("suspects"),
evidence = document.getElementById("evidence");

btn.onclick = function () {
    modal.style.display = "block";
    outupBB.value = "[doc][doc_h]|SAN FIERRO SHERIFF'S DEPARTMENT \n\
[b]INCIDENTREPORT[/b] #" + incedent_num.value +"|[right][color=#FFFFFF]_[/color] \n\
[size=85][b]Filed in:[/b] " + filed_in.value +"[/right][/size][/doc_h][borderb=#000][/borderb] \n\
[doc_b=ИНФОРМАЦИЯ ОБ ИНЦИДЕНТЕ][coll][ab=Характер инцидента]" + incedent_reason.value + "[/ab]|[ab=Дата]" + date_.value + "[/ab][/coll] \n\
[coll][ab=Локация]" + location_.value + "[/ab]|[ab=Время]" + time.value + "[/ab][/coll] \n\
[ab=Подробное описание ситуации]"+ situation_description.value + "[/ab][/doc_b] \n\
[doc_b=ИНФОРМАЦИЯ О ПОМОЩНИКЕ][coll][ab=Имя]" + name_.value + "[/ab]|[ab=Фамилия]" + surname.value + "[/ab][/coll] \n\
[coll][ab=Дивизион]" + division.value + "[/ab]|[ab=Маркировка]" + marker.value + "[/ab][/coll] \n\
[coll][ab=Адрес места жительства]"+ adres.value + "[/ab]|[ab=Номер телефона для связи]"+ phone_num.value + "[/ab][/coll][/doc_b] \n\
[doc_b=ИНФОРМАЦИЯ ОБ УЧАСТНИКАХ][ab=Прочие помощники на ситуации]"+ other_sheriffs.value + "[/ab] \n\
[ab=Пострадавшие]"+victims.value + "[/ab] \n\
[ab=Свидетели]"+witnesses.value + "[/ab] \n\
[ab=Подозреваемые]"+suspects.value + "[/ab] \n\
[ab=Улики]"+evidence.value + "[/ab][/doc_b] \n\
[borderb=#000][/borderb] \n\
[doc_b=ДЛЯ ДЕТЕКТИВА][coll3][ab=Имя]Заполняется детективом[/ab]|[ab=Фамилия]Заполняется детективом[/ab]|[ab=Звание]Заполняется детективом[/ab][/coll3] \n\
[coll][ab=Передано в]Заполняется детективом[/ab]|[ab=Дата]Заполняется детективом[/ab][/coll][/doc_b] \n\
[doc_f][/doc_f][/doc]";
    nameBB.value = decodeURI("INCIDENT REPORT #" + incedent_num.value + " from " + date_.value);
}

btn_close.onclick = function () {
    modal.style.display = "none"
}

function myFunction() {

    var copyText = document.getElementById("outputBB");
  
    copyText.select();
  
    document.execCommand("copy");
  }