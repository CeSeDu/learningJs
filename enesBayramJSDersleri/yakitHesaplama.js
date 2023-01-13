let dizel = 22.11;
    benzin = 20.2;
    lpg = 10.95;

const yenisatir = "\r\n";

const yakitMetni = "1-Dizel" + yenisatir + "2-Benzin" + yenisatir
                    + "3-LPG" + yenisatir + " Yakıt Türünü Giriniz";

let yakitTipi = prompt(yakitMetni);


let yakitLitresi = Number(prompt("yakıt litresi giriniz"));
let bakiye        = Number(prompt("bakiyenizi giriniz"));

if(yakitTipi=="1"){
    //dizel
    let odenecekTutar = dizel*yakitLitresi;

    if(odenecekTutar<bakiye){
        alert( "yakıt alma işleminiz başarılı" + yenisatir + "kalan bakiyeniz:" + bakiye);
    }else{
        alert( "bakiyeniz yeterli değil" + yenisatir + "ödenecek tutar" + odenecekTutar + yenisatir + "bakiyeniz:" + bakiye + "eksik tutar :" + (odenecekTutar-bakiye));
    }
}else if(yakitTipi=="2"){
    //benzin
    let odenecekTutar = benzin*yakitLitresi;
    if(odenecekTutar<bakiye){
        alert( "yakıt alma işleminiz başarılı" + yenisatir + "kalan bakiyeniz:" + bakiye);
    }else{
        alert( "bakiyeniz yeterli değil" + yenisatir + "ödenecek tutar" + odenecekTutar + yenisatir + "bakiyeniz:" + bakiye + "eksik tutar :" + (odenecekTutar-bakiye));
    }
}else if(yakitTipi=="3"){
    //lpg
    let odenecekTutar = lpg*yakitLitresi;
    if(odenecekTutar<bakiye){
        alert( "yakıt alma işleminiz başarılı" + yenisatir + "kalan bakiyeniz:" + bakiye);
    }else{
        alert( "bakiyeniz yeterli değil" + yenisatir + "ödenecek tutar" + odenecekTutar + yenisatir + "bakiyeniz:" + bakiye + "eksik tutar :" + (odenecekTutar-bakiye));
    }
}else{
    alert("lütfen geçerli bir giriş yapınız");
}