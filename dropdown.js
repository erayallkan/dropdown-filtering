var Itemlist = this.getField("Cinsi_1") ;

if(event.willCommit)
{
switch(event.value){

case "BETON":
    Itemlist.setItems(["C16", "C30", "C40", "C25 END. ZEMİN", "C30 BRÜT"]);
    break;

case "DEMİR":
    Itemlist.setItems(["8", "12", "16"]);
    break;

case "STABİLİZE DOLGU":
    Itemlist.setItems(["0.40"]);
    break;

case "KALIP":
    Itemlist.setItems(["ENDÜSTRİYEL", "BETONARME"]);
    break;

case "DUVAR":
    Itemlist.setItems(["TUĞLA 20", "BİMS 25"]);
    break;

case "İZOLASYON":
    Itemlist.setItems(["XPS 2", "SÜRME TEMEL", "DRENAJ LEVHASI"]);
    break;

case "HASIR ÇELİK":
    Itemlist.setItems(["(Q188/188) "]);
    break;

case "ZEMİN BETONU":
    Itemlist.setItems(["MAKİNELİ PERDAH"]);
    break;

case "SIVA":
    Itemlist.setItems(["KABA", "KABA İNCE", "ALÇI SIVA"]);
    break;

case "ALÇIPAN":
    Itemlist.setItems(["DUVAR", "TAVAN", "YEŞİL TAVAN", "TAŞYÜNÜ TAVAN"]);
    break;

case "SERAMİK":
    Itemlist.setItems([" DUVAR 20*20", " ZEMİN  60*60"]);
    break;

case "BOYA":
    Itemlist.setItems(["İÇ PLASTİK", "DIŞ AKRİLİK"]);
    break;

default:
    Itemlist.setItems([""]);
    break;

}

}
