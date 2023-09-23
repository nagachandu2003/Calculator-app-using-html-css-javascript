let container = document.getElementById("container1");
let displayScreen = document.getElementById("displayScreen");
let displaytext = document.getElementById("resulttext");
let themebackground = document.getElementById("themebackground");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let numpad = document.getElementById("numPad");
//NUMPAD KEYS
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let del = document.getElementById("del");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let add = document.getElementById("add");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let minus = document.getElementById("minus");
let dot = document.getElementById("dot");
let zero = document.getElementById("zero");
let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");
let reset = document.getElementById("reset");
let result = document.getElementById("result");

let calc = document.getElementById("calc");
let theme = document.getElementById("theme");
let ones = document.getElementById("ones");
let twos = document.getElementById("twos");
let threes = document.getElementById("threes");


btn2.style.backgroundColor = "#232C43";
btn3.style.backgroundColor = "#232C43";


let arr = "399981";
function printResult(arg){

    let valu = arg;
    let st = [];
for(let values of valu)
{
    if(["+","-","*","/"].includes(values))
    st.push(values);
}
const operatorsRegex = /[+\-*\/]/g;
valu = valu.trim(" ").replace(operatorsRegex," ");
let c = 0;
let res = "";

for(let values of valu.trim(" ").split(" "))
{
    if(st[c]!=undefined)
    res += (Number(values).toLocaleString()+st[c]);
    else
    res += (Number(values).toLocaleString());
    c += 1;
}
return res;

}


seven.addEventListener("click",()=>{
    arr += "7";
    resulttext.textContent = printResult(arr);
});
eight.addEventListener("click",() => {
    arr += "8";
    resulttext.textContent = printResult(arr);
});
nine.addEventListener("click",() => {
    arr += "9";
    resulttext.textContent = printResult(arr);
});
four.addEventListener("click",() => {
    arr += "4";
    resulttext.textContent = printResult(arr);
});
five.addEventListener("click",() => {
    arr += "5";
    resulttext.textContent = printResult(arr);
});
six.addEventListener("click",() => {
    arr += "6";
    resulttext.textContent = printResult(arr);
});
one.addEventListener("click",() => {
    arr += "1";
    resulttext.textContent = printResult(arr);
});
two.addEventListener("click",() => {
    arr += "2";
    resulttext.textContent = printResult(arr);
});
three.addEventListener("click",() => {
    arr += "3";
    resulttext.textContent = printResult(arr);
});
zero.addEventListener("click",() => {
    arr += "0";
    resulttext.textContent = printResult(arr);
});
dot.addEventListener("click",() => {
    arr += ".";
    resulttext.textContent = printResult(arr);
});
add.addEventListener("click",() => {
    arr += "+";
    resulttext.textContent = printResult(arr);
});
minus.addEventListener("click",() => {
    arr += "-";
    resulttext.textContent = printResult(arr);
});
multiply.addEventListener("click",() => {
    arr += "*";
    resulttext.textContent = printResult(arr);
});
divide.addEventListener("click",() => {
    arr += "/";
    resulttext.textContent = printResult(arr);
});

result.addEventListener("click",() => {
    try{
        let res = eval(arr);
        resulttext.textContent = res.toLocaleString();
        arr = res.toString();

    }
    catch(e){
        resulttext.textContent = "MATH ERROR";
    }
});

reset.addEventListener("click",() => {
    arr = "";
    resulttext.textContent = "0";
});

del.addEventListener("click",() => {
        if(arr!=""){
            arr = arr.split("");
            arr.pop();
            arr = arr.join("");
            if(arr=="")
            resulttext.textContent = "";
            else
            resulttext.textContent = printResult(arr);
        }
        else{
            resulttext.textContent = "";
            arr = "";
        }

});






btn1.addEventListener("click",function(event){
    calc.style.color = "white";
    theme.style.color = "white";
    ones.style.color = "white";
    twos.style.color = "white";
    threes.style.color = "white";
    container.classList.remove("bg2");
    container.classList.remove("bg3");
    numpad.classList.remove("numpad2");
    numpad.classList.remove("numpad3");
    themebackground.style.backgroundColor = "#232C43";
    displayScreen.classList.remove("screen2");
    displayScreen.classList.remove("screen3");
    //NUMPAD KEYS
    seven.classList.remove("numbers2","numbers3");
    eight.classList.remove("numbers2","numbers3");
    nine.classList.remove("numbers2","numbers3");
    four.classList.remove("numbers2","numbers3");
    five.classList.remove("numbers2","numbers3");
    six.classList.remove("numbers2","numbers3");
    add.classList.remove("numbers2","numbers3");
    one.classList.remove("numbers2","numbers3");
    two.classList.remove("numbers2","numbers3");
    three.classList.remove("numbers2","numbers3");
    minus.classList.remove("numbers2","numbers3");
    dot.classList.remove("numbers2","numbers3");
    zero.classList.remove("numbers2","numbers3");
    divide.classList.remove("numbers2","numbers3");
    multiply.classList.remove("numbers2","numbers3");

    del.classList.remove("del2","del3");
    reset.classList.remove("del2","del3");
    result.classList.remove("res2","res3");


    btn2.style.backgroundColor = "#232C43";
    btn3.style.backgroundColor = "#232C43";
    btn1.style.backgroundColor = "#CA5502";
});

btn2.addEventListener("click",function(event){
    calc.style.color = "#35352C";
    theme.style.color = "#35352C";
    ones.style.color = "#35352C";
    twos.style.color = "#35352C";
    threes.style.color = "#35352C";
    
    container.classList.add("bg2");
    container.classList.remove("bg3");
    numpad.classList.add("numpad2");
    numpad.classList.remove("numpad3");
    themebackground.style.backgroundColor = "#D1CCCC";
    displayScreen.classList.add("screen2");
    displayScreen.classList.remove("screen3");
    //NUMPAD KEYS
    seven.classList.remove("numbers3");
    seven.classList.add("numbers2");

    eight.classList.remove("numbers3");
    eight.classList.add("numbers2");
    
    nine.classList.remove("numbers3");
    nine.classList.add("numbers2");

    four.classList.remove("numbers3");
    four.classList.add("numbers2");

    five.classList.remove("numbers3");
    five.classList.add("numbers2");

    six.classList.remove("numbers3");
    six.classList.add("numbers2");

    add.classList.remove("numbers3");
    add.classList.add("numbers2");

    one.classList.remove("numbers3");
    one.classList.add("numbers2");

    two.classList.remove("numbers3");
    two.classList.add("numbers2");

    three.classList.remove("numbers3");
    three.classList.add("numbers2");

    divide.classList.remove("numbers3");
    divide.classList.add("numbers2");

    multiply.classList.remove("numbers3");
    multiply.classList.add("numbers2");

    dot.classList.remove("numbers3");
    dot.classList.add("numbers2");

    zero.classList.remove("numbers3");
    zero.classList.add("numbers2");

    minus.classList.remove("numbers3");
    minus.classList.add("numbers2");

    del.classList.add("del2");
    del.classList.remove("del3");

    reset.classList.add("del2");
    reset.classList.remove("del3");

    result.classList.add("res2");
    result.classList.remove("res3");

    btn1.style.backgroundColor = "#D1CCCC";
    btn3.style.backgroundColor = "#D1CCCC";
    btn2.style.backgroundColor = "#CA5502";
});

btn3.addEventListener("click",function(event){
    calc.style.color = "#FFE53D";
    theme.style.color = "#FFE53D";
    ones.style.color = "#FFE53D";
    twos.style.color = "#FFE53D";
    threes.style.color = "#FFE53D";
    container.classList.add("bg3");
    container.classList.remove("bg2");
    numpad.classList.remove("numpad2");
    numpad.classList.add("numpad3");
    themebackground.style.backgroundColor = "#1D0934";
    displayScreen.classList.remove("screen2");
    displayScreen.classList.add("screen3");
    //NUMPAD KEYS
    seven.classList.remove("numbers2");
    seven.classList.add("numbers3");

    eight.classList.remove("numbers2");
    eight.classList.add("numbers3");
    
    nine.classList.remove("numbers2");
    nine.classList.add("numbers3");

    four.classList.remove("numbers2");
    four.classList.add("numbers3");

    five.classList.remove("numbers2");
    five.classList.add("numbers3");

    six.classList.remove("numbers2");
    six.classList.add("numbers3");

    add.classList.remove("numbers2");
    add.classList.add("numbers3");

    one.classList.remove("numbers2");
    one.classList.add("numbers3");

    two.classList.remove("numbers2");
    two.classList.add("numbers3");

    three.classList.remove("numbers2");
    three.classList.add("numbers3");

    divide.classList.remove("numbers2");
    divide.classList.add("numbers3");

    multiply.classList.remove("numbers2");
    multiply.classList.add("numbers3");

    dot.classList.remove("numbers2");
    dot.classList.add("numbers3");

    zero.classList.remove("numbers2");
    zero.classList.add("numbers3");

    minus.classList.remove("numbers2");
    minus.classList.add("numbers3");

    del.classList.add("del3");
    del.classList.remove("del2");

    reset.classList.add("del3");
    reset.classList.remove("del2");

    result.classList.add("res3");
    result.classList.remove("res2");

    btn1.style.backgroundColor = "#1D0934";
    btn2.style.backgroundColor = "#1D0934";
    btn3.style.backgroundColor = "#00E0D1";

});