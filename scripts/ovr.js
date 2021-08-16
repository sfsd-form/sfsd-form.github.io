let modal = document.getElementById("modalWin"),
modal_ii = document.getElementById("modalWin_ii"),
modal_iii = document.getElementById("modalWin_iii"),
btn = document.getElementById("btn_"),
btn_close = document.getElementById("btn_close"),
btn_ii = document.getElementById("btn_ii"),
btn_close_ii = document.getElementById("btn_close_ii"),
btn_iii = document.getElementById("btn_iii"),
btn_close_iii = document.getElementById("btn_close_iii"),
span = document.getElementsByClassName("close")[0],
outputBB = document.getElementById("outputBB"),
outputBB_ii = document.getElementById("outputBB_ii"),
outputBB_iii = document.getElementById("outputBB_iii"),
nameBB = document.getElementById("nameBB"),
number_d = document.getElementById("number_d"),
date_start = document.getElementById("date_start"),
date_end = document.getElementById("date_end"),
character_id = document.getElementById("character_id"),
sheriffs = document.getElementById("sheriffs"),
base_id = document.getElementById("base_id"),
place = document.getElementById("place"),
date_time = document.getElementById("date_time"),
proof = document.getElementById("proof"),
description = document.getElementById("description"),
victims = document.getElementById("victims"),
witnesses = document.getElementById("witnesses"),
suspects = document.getElementById("suspects"),
date_rassled = document.getElementById("date_rassled"),
hod_rasl = document.getElementById("hod_rasl"),
date_iii = document.getElementById("date_iii"),
number_d_iii = document.getElementById("number_d_iii"),
facts = document.getElementById("facts"),
solution = document.getElementById("solution"),
order = document.getElementById("order"),
name_surname_iii = document.getElementById("name_surname_iii"),
name_surname = document.getElementById("name_surname"),
position = document.getElementById("position");


btn.onclick = function () {
    modal.style.display = "block";
    outputBB.value = "[doc][font=Times New Roman][center][size=125]ДЕПАРТАМЕНТ ШЕРИФА ОКРУГА САН-ФИЕРРО[/size]\n\
[size=135][b]ОТДЕЛ ВНУТРЕННИХ РАССЛЕДОВАНИЙ[/b][/size]\n\
\n\
[size=180][b]ДЕЛО № [u]" + number_d.value + "[/u][/b][/size][/center]\n\
\n\
[size=115][b]Дата открытия дела:[/b] " + date_start.value + ".\n\
[b]Дата закрытия дела:[/b] " + date_end.value + ".\n\
[b]Характер:[/b] " + character_id.value + ".\n\
[b]Группа ответственных детективов:[/b] " + sheriffs.value + "[/size][hr][/hr][center][size=150]\n\
\n\
[b]I. ПЕРВИЧНЫЙ ИНЦИДЕНТ[/b][/size][/center]\n\
\n\
[size=115][b]Основание:[/b] " + base_id.value + ".[/size]\n\
\n\
[size=125][coll3][a=Место]" + place.value + "[/a]|[a=Дата, время]" + date_time.value + "[/a]|[a=Доказательства]" + proof.value + "[/a][/coll3][/size]\n\
[size=125][a=Описание][/size][size=115]" + description.value + "[/size][/a][/font]\n\
\n\
[size=125][coll3][a=Пострадавшие(-е)]" + victims.value + "[/a]|[a=Свидетель(-и)]" + witnesses.value + "[/a]|[a=Подозреваемый(-е)]" + suspects.value +"[/a][/coll3][/size]\n\
\n\
[size=115][b]Предварительная позиция следствия:[/b] " + position.value + "[/doc][/size]";
    nameBB.value = "CF #"+number_d.value;
};
btn_ii.onclick = function () {
    modal_ii.style.display = "block";
    outputBB_ii.value = "[doc][hr][/hr][center][size=130][b]II. ХОД РАССЛЕДОВАНИЯ[/b][/size][/center]\n\
\n\
[size=100][b]" + date_rassled.value + "[/b]\n\
\n\
[list=1][*] " + hod_rasl.value + "\n\
\n\
[i]San Fierro Sheriff Department, Internal Affairs Unit,[/i] Detective [b]" + name_surname.value + "[/b].\n\
\n\
[/list][/size][/doc]";
}

btn_iii.onclick = function () {
    modal_iii.style.display = "block";
    outputBB_iii.value = "[doc][center][size=130][b]III. ВЕРДИКТ РАССЛЕДОВАНИЯ[/b][/size][/center]\n\
\n\
[b]" + date_iii.value + "[/b]\n\
\n\
[center][size=130][i]ДЕПАРТАМЕНТ ШЕРИФА ОКРУГА САН-ФИЕРРО[/i][/size][/center]\n\
[center][size=125][b]ОТДЕЛ ВНУТРЕННИХ РАССЛЕДОВАНИЙ[/b][/size][/center]\n\
\n\
[size=120][center][b]ВЕРДИКТ ПО ДЕЛУ № [u]" + number_d_iii.value + "[/u][/b][/size][/center]\n\
\n\
[u]У С Т А Н О В Л Е Н О :[/u]\n\
[list]" + facts.value + "[/list]\n\
\n\
[u]П Р И З Н А Т Ь :[/u]\n\
[list] " + solution.value + "[/list]\n\
\n\
[u]П О С Т А Н О В И Т Ь :[/u]\n\
[list] " + order.value + "[/list]\n\
\n\
[i]San Fierro Sheriff Department, Internal Affairs Unit,[/i] Detective [b]" + name_surname_iii.value + "[/b].[/doc]"
}
btn_close.onclick = function () {
    modal.style.display = "none";
}
btn_close_ii.onclick = function () {
    modal_ii.style.display = "none";
}
btn_close_iii.onclick = function () {
    modal_iii.style.display = "none";
}
function myFunction() {

    var copyText = document.getElementById("outputBB");
  
    copyText.select();
  
    document.execCommand("copy");
  }
function myFunctionii() {

    var copyText = document.getElementById("outputBB_ii");
  
    copyText.select();
  
    document.execCommand("copy");
  }
function myFunctioniii() {

    var copyText = document.getElementById("outputBB_iii");
  
    copyText.select();
  
    document.execCommand("copy");
  }