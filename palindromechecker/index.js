function checkPalindrome(e) {

    let str = document.getElementById("input").value;
    if (str == "")
        return alert("Empty Input")
    console.log(str);
    let reverseStr = str.split("").reverse().join("");
    if (str.toLowerCase() == reverseStr.toLowerCase())
        document.getElementById("result").innerHTML = str + " is a palindrome";
    else
        document.getElementById("result").innerHTML = str + " is not a palindrome";


}


