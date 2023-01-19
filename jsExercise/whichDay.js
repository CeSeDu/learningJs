let newLine = "\r\n";

let metin = "1-Monday" + newLine + "2-Tuesday" + newLine + 
            "3-Wednesday" + newLine + "4-Thursday" + newLine + 
            "5-Friday" + newLine + "6-Saturday" + newLine + "Sunday" 
            +   newLine  + "Please enter a number"        ;

let value = prompt(metin);

switch (value) {
    case "1":
     document.write("Today is Monday");
    break;

    case "2":
    document.write("Today is Tuesday");
    break;

    case "3":
    document.write("Today is Wednesday");

    break;
    
    case "4":
        document.write("Today is Thursday");

    break;
    
    case "5":
        document.write("Today is Friday");
    break;
    
    case "6":
        document.write("Today is Saturday");

    break;
    
    case "7":
        document.write("Today is Sunday");
    break;

    default:
    document.write("Please enter a valid number");

    break;
}