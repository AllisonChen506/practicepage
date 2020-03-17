
/* Make this function print a random title from the list */
function updateTitle() {
    let x = Math.floor(Math.random() * 3);
    const titles = ['Hello', 'title2', 'title3']
    const title = document.getElementById('title')
    title.innerHTML = titles[x];
}

function math()
{

    let n1 = document.getElementById('firstnumber').value;
    let n2 = document.getElementById('secondnumber').value;
    let operator = document.getElementById('operations').value;
    let return1 = document.getElementById('returnvalue').value;
    let return2 = document.getElementById('returnvalue');
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    switch(operator)
    {
        case "+":
            return1 = n1 + n2;
            console.log(return1);
            return2.innerHTML = "The value is " + return1;
            break;
        case "-":
            return1 = n1 - n2;
            console.log(return1);
            return2.innerHTML = "The value is " + return1;
            break;
        case "*":
            return1 = n1 * n2;
            console.log(return1);
            return2.innerHTML = "The value is " + return1;
            break;
        case "/":
            return1 = n1 / n2;
            console.log(return1);
            return2.innerHTML = "The value is " + return1;
            break;

    }
}

function hello()
{
    alert("Welcome");
    let arithmetic = ["+", "-", "*", "/"];
    let i;
    for(i =0; i < arithmetic.length; i++)
    {
        let x = document.getElementById('operations')
        let option = document.createElement('option');
        option.text = arithmetic[i];
        x.add(option);

    }

    let d = new Date();
    let month = d.getMonth() + 1;
    document.getElementById("demo").innerHTML = month + "-" + d.getDate() + "-" + d.getFullYear();
}

