let modal = document.getElementById("modalWin"),
btn = document.getElementById("btn_"),
btn_close = document.getElementById("btn_close"),
span = document.getElementsByClassName("close")[0],
outputBB = document.getElementById("outputBB"),
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
    nameBB.value = "CF #"+number_d.value
}

btn_close.onclick = function () {
    modal.style.display = "none";
}

function myFunction() {

    var copyText = document.getElementById("outputBB");
  
    copyText.select();
  
    document.execCommand("copy");
  }