let test = ["|-----------------|", "[B]Get Balance----|", "[D]Deposit--------|", "[W]Withdraw-------|","[S]Show details---|", "[E]Exit account---|", "[N]New Account----|","[L]Log in---------|", "|-----------------|"];
let letter = ["B","D","W","L","S","E","N"]
let id = 2;
let curr = 0;
let input = 0;
let temp = 0;
// 2d array
// account name
// password
// balance
// user id
//
let accounts = [
    ["Sample", "pass", 0, 0],  // Row 1
    ["Peter", "lol", 0, 1],  // Row 2
    ["Simon", "bad", 0, 2]   // Row 3
];



while(curr == 0)
    {
    input = prompt("Welcome user! new account[N] or log in?[L]")
        {
        if(input.toLowerCase().includes(letter[6].toLowerCase()))
            {
            id += 1;
            if (accounts.length <= id) 
                {
                accounts.push([]);  // Dynamically add a new account slot
                }
            accounts[id][0] = prompt("Enter name:");
            accounts[id][1] = prompt("Enter password:");
            accounts[id][2] = prompt("Startnig deposit:");
            accounts[id][3] = id;
            for(let i = 0; i < 4; i++)
                {
                console.log(accounts[[id][i]])
                }
            }
        if(input.toLowerCase().includes(letter[3].toLowerCase()))
            {
            if(id == 0)
                {
                alert("No accounts detected!");
                continue;
                }
            else
                {
                temp = prompt("enter name!:")
                for(let i = 0; i <= id; i++)
                    {
                    if(accounts[i][0] == temp)
                        {
                        curr = i;
                        }
                    }
                if(curr !== 0)
                    {
                    for(var E = 0; E < 3; E ++)
                        {
                        temp = prompt("Enter password:");
                        if(temp == accounts[curr][1])
                            {
                            alert("Welcome!");
                            temp = "Welcome!"
                            break; 
                            }
                        else
                            {
                            alert("password incorrect!");
                            }
                        }
                    if(temp != "Welcome!")
                        {
                        alert("To many fails!")
                        curr = 0;
                        }
                    }
                else
                    {
                    alert("Account not found!");
                    }
                }
            }
        }
    }
for(let i = 0; i < test.length; i++)
    {
    console.log(test[i])
    }
while(curr !== 0)
    {
    input = prompt("Welcome user, pick what you wish to do from the console!")
    for (var i = 0; i < letter.length; i++) 
        {
        if (input.toLowerCase().includes(letter[i].toLowerCase())) 
            {
            input = letter[i];
            break;
            }
        }  
        while (!input || input.trim() === "") {
            input = prompt("Im sorry we didnt recognize your input");
        }
    switch(input)
        {
        case "B":
            alert("Current balance: "+accounts[curr][2])
            console.log("Current balance: "+accounts[curr][2])
            break;
        case "D":
            temp = prompt("How much would you like to deposit?")
            while (isNaN(temp) || temp.trim() === "") {
                input = prompt("Invalid input. Please enter a valid number:");
            }
            accounts[curr][2] += Number(temp);
            alert("Current balance: "+accounts[curr][2])
            console.log("Current balance: "+accounts[curr][2])
            break;
        case "W":
            temp = prompt("How much would you like to withdraw?")
            while (isNaN(temp) || temp.trim() === "") {
                input = prompt("Invalid input. Please enter a valid number:");
            }
            accounts[curr][2] -= Number(temp);
            alert("Current balance: "+accounts[curr][2])
            console.log("Current balance: "+accounts[curr][2])
            break;
        case "L":
            alert("Please exit first!");
            break;
        case "S":
            alert("Name: "+accounts[curr][0]+" password: "+accounts[curr][1]+" Account ID: "+accounts[curr][3])
            break;
        case "E":
            alert("Thank you for visiting!");
            curr = 0;
            break;
        case "N":
            alert("Please exit first!");
            break;
        default:
            alert("Failed");
        }
    }
