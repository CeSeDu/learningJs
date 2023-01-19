let newLine = "\r\n";
let balance = 1000;

let text = "1-Bakiye Görüntüleme" + newLine +"2-Para Çekme" +newLine
          + "3-Para Yatırma" + newLine + " 4-Çıkış" + newLine
          + "Lütfen bir değer seçiniz.";

let selection = prompt(text);
switch(selection){
    case "1":
        alert("Bakiyeniz :" + balance);
    break;
    
    case "2":
        let pullAmount = Number(prompt("çekmek istediğiniz tutarı giriniz."));

        if(pullAmount<balance){
            balance = balance-pullAmount;
            alert("Kalan Bakiye :" + balance );
        }else{
            alert("Bakiyenizden fazla para Çekemezsiniz !" 
                  + newLine + "Bakiyeniz " + balance + "Çekilecek Tutar:" + pullAmount );
        }
        break;    

    case "3":
        let depositAmount = Number(prompt("Yatırmak istediğiniz miktarı giriniz:")) ;
        balance = balance+ depositAmount;
        alert("Toplam Bakiye :" + balance);
     break;
     
     case "4":
        alert("Sistemden çıkış yapılmıştır...");
      break;
      
      default:
        alert("lütfen geçerli bir rakam giriniz !");
      break;  
}

