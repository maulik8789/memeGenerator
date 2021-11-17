var mainPage = document.querySelector('#mainPage')
var typImg = document.querySelector('#urlImg');
var typTopText = document.querySelector('#topText');
var typBottomText = document.querySelector('#bottomText');
var memeCounter = 0;



mainPage.addEventListener('submit', function(e){
    e.preventDefault();
    newmemeImg();
    typImg.value = "";
    typTopText.value = "";
    typBottomText.value = "";
});

function newmemeImg(evt)
{
    if (typImg.value == "")
    {
        alert("Please enter Image URL");
    }
    else
    {
        memeCounter++;

        //creating Image Div
        var newDiv = document.createElement("div");
        document.body.append(newDiv);
        newDiv.id = "meme_" + memeCounter;
        var img = document.createElement('img');
        img.classList.add('img-top');
        img.src = document.querySelector("#urlImg").value;
        newDiv.appendChild(img);
        var remv = document.querySelector('#meme_' + memeCounter);        

        //Creating TOP text Div
        var tTextDiv = document.createElement('div');
        newDiv.append(tTextDiv);
        tTextDiv.classList.add('tSentc');
        tTextDiv.innerText = document.querySelector("#topText").value;
        console.log(document.querySelector("#topText").value)
        newDiv.append(tTextDiv);

        //Creating BOTTOM text Div
        var bTextDiv = document.createElement('div');
        bTextDiv.classList.add('bSentc');
        bTextDiv.innerText = document.querySelector("#bottomText").value;
        newDiv.append(bTextDiv);
        
        //handling DELETE meme function
        remv.addEventListener('click', function(e){
            e.preventDefault();
            var decide = confirm("DO YOU WANT TO DELETE MEME!");;
            if( decide == true)
            {
                newDiv.remove();
            }
        });
        
    }
    
}


    
