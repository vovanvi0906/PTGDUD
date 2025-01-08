var avrD = [97, 112, 101]
var avrK = [109, 95 , 106]

function avgC ( arr )
{
    var sum = 0;
    for (const a of arr)
    {
        sum += a
    }
    var avg = sum / arr.length
    return avg
}
console.log("Calculate the average score of Dolphins: " + avgC(avrD))
console.log("Calculate the average score of Koalas: " + avgC(avrK))


if( avgC(avrD) == avgC(avrK))
{
    console.log("Hoa")
}
else if ( avgC(avrD) >  avgC(avrK) )
{
    console.log("Dolphin co diem trung binh cao hon");
}
 else 
{
    console.log("Koalas co diem trung binh cao hon");
}


    if( avgC(avrD) == avgC(avrK) && avgC(avrK) >= 100 && avgC(avrD) >= 100)
    {
        console.log("Hoa")
    }
    else if ( avgC(avrD) >  avgC(avrK) && avgC(avrD) >= 100 )
    {
        console.log("Dolphin thang");
    }
     else if( avgC(avrD) <  avgC(avrK) && avgC(avrK) >= 100)
    {
        console.log("Koalas thang");
    }
    else
    {
        console.log("Khong co doi nao thang");
    }





