function countVowel() {

    let str = document.getElementById("input").value;
    if (str == "")
        return alert("Empty Input")

    let arr = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    str = str.toLowerCase();
    for (i = 0; i < str.length; i++)
        if (arr.includes(str[i]))
            count++;

    document.getElementById("result").innerHTML = count + " Vowels.";


}


