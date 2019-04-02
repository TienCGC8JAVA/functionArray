function task1()
{
    let array = ["Money","Honey","Funny","Kitty","Really"];
    document.getElementById("demo").innerText = ' " ' + array + ' " ';

}

function task2()
{
    let num = prompt("Nhập vào kí tự, số,... bất kì");
    let str = num.toString();
    let result = [str[0]];
    for (let i = 0; i < str.length; i++)
    {
        if ((str[i] % 2 == 0) && (str[i + 1] % 2 == 0))
        {
            result.push(str[i + 1] , "-");
        }
        else
        {
            result.push(str[ i ]);
        }
    }
    document.getElementById("demo").innerHTML = result.join("");
}

function task3()
{
    let string = prompt("Nhập vào 1 chuỗi có cả chữ Hoa và chữ thường");
    let str = string.toString();
    let result = [str[0]];
    for (let i = 0; i < str.length; i++)
    {
        if (str[i] === str[i].toLocaleUpperCase())
        {
            result[i] = str[i].toLocaleLowerCase();
        }
        else
        {
            result[i] = str[i].toLocaleUpperCase();
        }
    }
    document.getElementById("demo").innerHTML = result.join("");
}