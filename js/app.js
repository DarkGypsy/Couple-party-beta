//Variables
const scoreHtml = document.getElementById('score');
const gameHtml = document.getElementById("game");
let boy = {
    name:``,
    pnts: 0,
    shots: 0,
    parts: ["Hands" , "Legs" , "Ears" ,"Thighs"  , "Neck" , "Back" , "Abdomen" , "Arms" , "Dick" , "Chest"],
    turn: 0 
};
let girl = {
    name:``,
    pnts: 0,
    shots: 0,
    parts: ["Hands" , "Legs" , "Ears" ,"Thighs"  , "Neck" , "Back" , "Abdomen" , "Arms" , "Boobs" , "Vagina" , "Ass"],
    turn: 0 
};
let game =  {
    time: 0 ,
    role: ["Doctor" , "Cop" , "Cleaning service" , "Child" , "Delivery" , "Teacher" , "Babysitter" , "Massage therapist" , "Personal trainer"],
    win: ["Smelling" , "Giving a speech" , "Dancing" , "Licking"],
    num: 0,
    winPnts: 0,
};
const play = document.getElementById("game-start");

play.addEventListener('click' , ()=>{
    let boyname = document.getElementById('boy-name').value;
    let girlname = document.getElementById('girl-name').value;
    boy.name = boyname;
    girl.name = girlname;
    let gamepoints = document.getElementById('win-pnt');
    game.winPnts = gamepoints.value;
    if(boy.name === "" || girl.name === ""){
        alert('Please insert both names')
    }else{
        scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>` 
        gameHtml.innerHTML = '';
        
        
        playGame();

    }
});


//Game function
function playGame() {
    scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>` 
    gameHtml.innerHTML = '';
let gameTitle = document.createElement('h2');
let gameDescription = document.createElement('div');
let gameBtn = document.createElement('div');
let gameTimer = document.createElement('div');
    gameTimer.classList.add('timer');
    gameBtn.id = 'game-btn';
let gameBtnYes = document.createElement('button');
let gameBtnNo = document.createElement('button');
    gameBtnYes.id = 'yes';
    gameBtnNo.id = 'no';
    gameBtn.appendChild(gameBtnYes);
    gameBtn.appendChild(gameBtnNo);
    gameBtnYes.innerHTML = `<span class="material-symbols-outlined">
    done
    </span>`;
    gameBtnNo.innerHTML = `<span class="material-symbols-outlined">
    close
    </span>`;
    gameBtnYes.style.display = 'none';
    gameBtnNo.style.display = 'none'; 
    gameBtnYes.setAttribute('disabled', '');
    gameBtnNo.setAttribute('disabled', '');
    gameTitle.classList.add('gameTitle');
    gameDescription.classList.add('gameDesctription');
    gameHtml.appendChild(gameTitle);
    gameHtml.appendChild(gameDescription);
    gameHtml.appendChild(gameTimer)
    gameHtml.appendChild(gameBtn);

//TURN SELECTION
boy.turn = randomNum(1 , 7);
girl.turn = randomNum(1 , 7);

console.log(`${boy.turn} ${girl.turn}`)

//Boy's turn
if(boy.turn > girl.turn){
   gameTitle.innerText = `${boy.name}'s turn`;
   gameDescription.innerHTML = `<button id="continue">Continue</button>`;

   let continueBtn = document.getElementById('continue');
    continueBtn.addEventListener('click', ()=>{
    miniGame(boy, girl, game);
});
};

//Girl's turn
if(girl.turn > boy.turn){
    gameTitle.innerText = `${girl.name}'s turn`;
    gameDescription.innerHTML = `<button id="continue">Continue</button>`;

    let continueBtn = document.getElementById('continue');
    continueBtn.addEventListener('click', ()=>{
        miniGame(girl, boy, game);;
});
};

//Both's turn
if(boy.turn == girl.turn){
    gameTitle.innerText = `${boy.name} and ${girl.name} plays together`;
    gameDescription.innerHTML = `<button id="continue">Continue</button>`;

    let continueBtn = document.getElementById('continue');
    continueBtn.addEventListener('click', ()=>{
        coupleGame(boy, girl, game);
});
};


//Mini gammes functions

function miniGame(player, coplayer, game) {
    gameBtnYes.style.display = 'flex';
    gameBtnNo.style.display = 'flex';
    game.num = randomNum(1 , 22);
    switch (game.num) {
        case 1:

        game.time = randomNum(15 , 61);
        gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
        gameTitle.innerText = `Ice cream time!`;
        gameDescription.innerHTML = `<p><span>${player.name}</span> should lick a <span>${coplayer.name}'s</span> body part, but it's ice cream time, so you can only use your tongue. <span>${player.name}</span> will lick <span>${coplayer.name}'s ${coplayer.parts[randomNum(0 , coplayer.parts.length)]}</span> enjoy! 👅</p>`;
        
        
        //Game buttons 
        gameBtnYes.addEventListener('click', () => {
            player.pnts++;
            scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
            if (player.pnts >= game.winPnts) {
                gameTitle.innerText = `${player.name} Wins!`
                gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                gameTimer.innerHTML = ``;
                gameBtn.innerHTML = ``;

            }else {
                playGame();
            }
            
            })
        
        gameBtnNo.addEventListener('click', () => {
            player.pnts--;
            if (player.pnts < 0) {
                player.pnts = 0;
            }
            playGame();
        })
            break;

        case 2:

            game.time = randomNum(15 , 61);
            gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
            gameTitle.innerText = `Love is in the air`;
            gameDescription.innerHTML = `<p><span>${player.name}</span> time to show how much do you love by kissing <span>${coplayer.name}'s</span> body part. <span>${player.name}</span> will be kissing <span>${coplayer.name}'s ${coplayer.parts[randomNum(0 , coplayer.parts.length)]}</span> can you feel the love? ❤️</p>`;

             //Game buttons 
             gameBtnYes.addEventListener('click', () => {
                player.pnts++;
                scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
                if (player.pnts >= game.winPnts) {
                    gameTitle.innerText = `${player.name} Wins!`
                    gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                    gameTimer.innerHTML = ``;
                    gameBtn.innerHTML = ``;
    
                }else {
                    playGame();
                }
                
                })
        
            gameBtnNo.addEventListener('click', () => {
            player.pnts--;
            if (player.pnts < 0) {
                player.pnts = 0;
            }
            playGame();
        })

            break;

        case 3:

            game.time = randomNum(15 , 61);
            gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
            gameTitle.innerText = `Burning Hands`;
            gameDescription.innerHTML = `<p><span>${player.name}</span> show your hands skills giving a massage to <span>${coplayer.name}</span>.<br> <span>${player.name}</span> will be massaging <span>${coplayer.name}'s ${coplayer.parts[randomNum(0 , coplayer.parts.length)]}</span>, give it the magic touch 😉</p>`;

             //Game buttons 
             gameBtnYes.addEventListener('click', () => {
                player.pnts++;
                scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
                if (player.pnts >= game.winPnts) {
                    gameTitle.innerText = `${player.name} Wins!`
                    gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                    gameTimer.innerHTML = ``;
                    gameBtn.innerHTML = ``;
    
                }else {
                    playGame();
                }
                
                })
        
            gameBtnNo.addEventListener('click', () => {
            player.pnts--;
            if (player.pnts < 0) {
                player.pnts = 0;
            }
            playGame();
        })

            break;

        case 4: 

        game.time = randomNum(10 , 61);
        gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
        gameTitle.innerText = `Icy touch`;
        gameDescription.innerHTML = `<p><span>${player.name}</span> will have to endure <span>${coplayer.name}'s</span> icy touch.<br> <span>${coplayer.name}</span> will put some ice on <span>${player.name}'s ${player.parts[randomNum(0 , player.parts.length)]}</span>. It's freezing! 🥶</p>`;

            //Game buttons 
            gameBtnYes.addEventListener('click', () => {
                player.pnts++;
                scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
                if (player.pnts >= game.winPnts) {
                    gameTitle.innerText = `${player.name} Wins!`
                    gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                    gameTimer.innerHTML = ``;
                    gameBtn.innerHTML = ``;
    
                }else {
                    playGame();
                }
                
                })
    
        gameBtnNo.addEventListener('click', () => {
        player.pnts--;
        if (player.pnts < 0) {
            player.pnts = 0;
        }
        playGame();
    })

            break;

        case 5:

        game.time = randomNum(15 , 61);
        gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
        gameTitle.innerText = `Hotline service`;
        gameDescription.innerHTML = `<p><span>${player.name}</span> you're working in a hotline center and <span>${coplayer.name}</span> is your client. <br><span>${player.name}</span> time to use your social skills to put <span>${coplayer.name} on the perfect mood.</span> Feeling hot? 🥵</p>`;

            //Game buttons 
            gameBtnYes.addEventListener('click', () => {
                player.pnts++;
                scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
                if (player.pnts >= game.winPnts) {
                    gameTitle.innerText = `${player.name} Wins!`
                    gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                    gameTimer.innerHTML = ``;
                    gameBtn.innerHTML = ``;
    
                }else {
                    playGame();
                }
                
                })
    
        gameBtnNo.addEventListener('click', () => {
        player.pnts--;
        if (player.pnts < 0) {
            player.pnts = 0;
        }
        playGame();
    })
            break;

        case 6:

        game.time = randomNum(15 , 31);
        gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
        gameTitle.innerText = `Best pickup line`;
        gameDescription.innerHTML = `<p><span>${player.name}</span> time to show your social skills to seduce <span>${coplayer.name}</span>.<br> <span>${player.name}</span> you can try until the timer ends <span>${coplayer.name}</span> will judge your pickups lines. Time to flirt 😉</p>`;

            //Game buttons 
            gameBtnYes.addEventListener('click', () => {
                player.pnts++;
                scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
                if (player.pnts >= game.winPnts) {
                    gameTitle.innerText = `${player.name} Wins!`
                    gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                    gameTimer.innerHTML = ``;
                    gameBtn.innerHTML = ``;
    
                }else {
                    playGame();
                }
                
                })
    
        gameBtnNo.addEventListener('click', () => {
        player.pnts--;
        if (player.pnts < 0) {
            player.pnts = 0;
        }
        playGame();
    })
            break;

        case 7:

        game.time = randomNum(10 , 21);
        gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
        gameTitle.innerText = `Taste tester`;
        gameDescription.innerHTML = `<p><span>${coplayer.name}</span> must blindfold <span>${player.name}</span>.<br> <span>${player.name} should guess what you're giving to try. <br>${coplayer.name}</span> can use anything for the test 🤐</p>`;

            //Game buttons 
            gameBtnYes.addEventListener('click', () => {
                player.pnts++;
                scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
                if (player.pnts >= game.winPnts) {
                    gameTitle.innerText = `${player.name} Wins!`
                    gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                    gameTimer.innerHTML = ``;
                    gameBtn.innerHTML = ``;
    
                }else {
                    playGame();
                }
                
                })
    
        gameBtnNo.addEventListener('click', () => {
        player.pnts--;
        if (player.pnts < 0) {
            player.pnts = 0;
        }
        playGame();
    })

            break;

        case 8:

        game.time = randomNum(15 , 31);
        gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
        gameTitle.innerText = `The funny one is rewarded`;
        gameDescription.innerHTML = `<p>They say that if you can make people laugh you can make them groan. <br>So <span>${player.name}</span> must ask <span>${coplayer.name} for an item of clothing </span>in a funny way if it laughs you can keep the item for 2 turns.<br> <span>${player.name} you have only 1 chance </span> 🤪</p>`;

            //Game buttons 
            gameBtnYes.addEventListener('click', () => {
                player.pnts++;
                scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
                if (player.pnts >= game.winPnts) {
                    gameTitle.innerText = `${player.name} Wins!`
                    gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                    gameTimer.innerHTML = ``;
                    gameBtn.innerHTML = ``;
    
                }else {
                    playGame();
                }
                
                })
    
        gameBtnNo.addEventListener('click', () => {
        player.pnts--;
        if (player.pnts < 0) {
            player.pnts = 0;
        }
        playGame();
    })
            break;

        case 9: 

        game.time = randomNum(60 , 361);
        gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
        gameTitle.innerText = `The Oscar goes to...`;
        gameDescription.innerHTML = `<p><span>${player.name}</span> is your time to shine, like a Hollywood star. You will have to play a certain role for a certain amount of time but there is a problem, we have no script so you will have to improvise so that <span>${coplayer.name} can follow you on stage.</span> <br><br> <span>${player.name}</span> your role to play is <span>${game.role[randomNum(0 , game.role.length)]}</span> while <span>${coplayer.name}</span> will say whether the scene is left or not 🎥</p>`;

            //Game buttons 
            gameBtnYes.addEventListener('click', () => {
                player.pnts++;
                scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
                if (player.pnts >= game.winPnts) {
                    gameTitle.innerText = `${player.name} Wins!`
                    gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                    gameTimer.innerHTML = ``;
                    gameBtn.innerHTML = ``;
    
                }else {
                    playGame();
                }
                
                })
    
        gameBtnNo.addEventListener('click', () => {
        player.pnts--;
        if (player.pnts < 0) {
            player.pnts = 0;
        }
        playGame();
    })
            break;

        case 10:


        game.time = randomNum(15 , 61);
        gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
        gameTitle.innerText = `The voice`;
        gameDescription.innerHTML = `<p><span>${player.name}</span> it's your turn to go on stage and sing a song for <span>${coplayer.name}</span>, it will be a song of your choice and <span>you can use both the song and the supporting lyrics.</span>  Don't disappoint your fans! 😎</p>`;

            //Game buttons 
            gameBtnYes.addEventListener('click', () => {
                player.pnts++;
                scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
                if (player.pnts >= game.winPnts) {
                    gameTitle.innerText = `${player.name} Wins!`
                    gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                    gameTimer.innerHTML = ``;
                    gameBtn.innerHTML = ``;
    
                }else {
                    playGame();
                }
                
                })
    
        gameBtnNo.addEventListener('click', () => {
        player.pnts--;
        if (player.pnts < 0) {
            player.pnts = 0;
        }
        playGame();
    })

            break;
    

        case 11:

            game.time = randomNum(15 , 61);
            gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
            gameTitle.innerText = `Like a winner`;
            gameDescription.innerHTML = `<p><span>${player.name}</span> you just won and your prize will be a <span>${coplayer.name}'s</span> clothing item and as every winner you must celebrate with that item for a certain time<br><br><span>${player.name} you must ask for the clothes before continuing.</span><br>You will be celebrating <span>${game.win[randomNum(0 , game.win.length)]}</span> It is not every day you get a prize like this 😅</p>`;

            //Game buttons 
            gameBtnYes.addEventListener('click', () => {
                player.pnts++;
                scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
                if (player.pnts >= game.winPnts) {
                    gameTitle.innerText = `${player.name} Wins!`
                    gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                    gameTimer.innerHTML = ``;
                    gameBtn.innerHTML = ``;
    
                }else {
                    playGame();
                }
                
                })
    
            gameBtnNo.addEventListener('click', () => {
            player.pnts--;
            if (player.pnts < 0) {
                player.pnts = 0;
            }
            playGame();
            })

            break;

        case 12:

            game.time = randomNum(15 , 61);
            gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
            gameTitle.innerText = `Seductive dance`;
            gameDescription.innerHTML = `<p><span>${player.name}</span> you must use your best steps to seduce <span>${coplayer.name}</span> who will choose the song you will dance to for a certain time<br>Time to dance! 🎵</p>`;

            //Game buttons 
            gameBtnYes.addEventListener('click', () => {
                player.pnts++;
                scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
                if (player.pnts >= game.winPnts) {
                    gameTitle.innerText = `${player.name} Wins!`
                    gameDescription.innerHTML = '';
                    gameTimer.innerHTML = ``;
                    gameBtn.innerHTML = ``;
    
                }else {
                    playGame();
                }
                
                })

            gameBtnNo.addEventListener('click', () => {
            player.pnts--;
            if (player.pnts < 0) {
                player.pnts = 0;
            }
            playGame();
            })
            break;

        case 13: 


            game.time = randomNum(15 , 61);
            gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
            gameTitle.innerText = `Bedtime`;
            gameDescription.innerHTML = `<p><span>${player.name}</span> must be blindfolded and pretend to sleep peacefully, you must not move or make any noise because you are sleeping... while <span>${coplayer.name}</span> will do its best to wake you up<br>Keep sleeping until the timer ends 😴</p>`;

            //Game buttons 
            gameBtnYes.addEventListener('click', () => {
                player.pnts++;
                scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
                if (player.pnts >= game.winPnts) {
                    gameTitle.innerText = `${player.name} Wins!`
                    gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                    gameTimer.innerHTML = ``;
                    gameBtn.innerHTML = ``;
    
                }else {
                    playGame();
                }
                
                })

            gameBtnNo.addEventListener('click', () => {
            player.pnts--;
            if (player.pnts < 0) {
                player.pnts = 0;
            }
            playGame();
            })
            break;

        case 14:
            game.time = randomNum(60 , 361);
            gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
            gameTitle.innerText = `The best seat in the place`;
            gameDescription.innerHTML = `<p><span>${player.name}</span> ou must be the best seat, able to satisfy the needs of <span>${coplayer.name} wwho will sit where and how it pleases him/her</span>. Don't be alarmed, it will only be for a while, then you can go back to your human life 💺</p>`;

            //Game buttons 
            gameBtnYes.addEventListener('click', () => {
                player.pnts++;
                scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
                if (player.pnts >= game.winPnts) {
                    gameTitle.innerText = `${player.name} Wins!`
                    gameDescription.innerHTML = '';
                    gameTimer.innerHTML = ``;
                    gameBtn.innerHTML = ``;
    
                }else {
                    playGame();
                }
                
                })

            gameBtnNo.addEventListener('click', () => {
            player.pnts--;
            if (player.pnts < 0) {
                player.pnts = 0;
            }
            playGame();
            })
            break;


        case 15:

        game.time = randomNum(60 , 361);
        gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
        gameTitle.innerText = `Surprise challenge!!!`;
        gameDescription.innerHTML = `<p>Only <span>${player.name}</span> can read this.</p>
        <div class="hidden"><p><br><span>${player.name}</span> you must give an <span>oral</span> to <span>${coplayer.name}</span> without saying a word or giving an explanation</p></div>`;
            
        //Game buttons 
        gameBtnYes.addEventListener('click', () => {
            player.pnts++;
            scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
            if (player.pnts >= game.winPnts) {
                gameTitle.innerText = `${player.name} Wins!`
                gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                gameTimer.innerHTML = ``;
                gameBtn.innerHTML = ``;

            }else {
                playGame();
            }
            
            })

        gameBtnNo.addEventListener('click', () => {
        player.pnts--;
        if (player.pnts < 0) {
            player.pnts = 0;
        }
        playGame();
        })
            break;

        case 16:

        game.time = randomNum(60 , 361);
        gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
        gameTitle.innerText = `Surprise challenge!!!`;
        gameDescription.innerHTML = `<p>Only <span>${player.name}</span> can read this.</p>
        <div class="hidden"><p><br><span>${player.name}</span> you must <span>masturbate</span> <span>${coplayer.name}</span> without saying a word or giving an explanation</p></div>`;
        
        //Game buttons 
        gameBtnYes.addEventListener('click', () => {
            player.pnts++;
            scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
            if (player.pnts >= game.winPnts) {
                gameTitle.innerText = `${player.name} Wins!`
                gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                gameTimer.innerHTML = ``;
                gameBtn.innerHTML = ``;

            }else {
                playGame();
            }
            
            })

        gameBtnNo.addEventListener('click', () => {
        player.pnts--;
        if (player.pnts < 0) {
            player.pnts = 0;
        }
        playGame();
        })

            break;

        case 17:

        game.time = randomNum(60 , 121);
        gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
        gameTitle.innerText = `This is how art looks`;
        gameDescription.innerHTML = `<p><span>${player.name}</span> show your beauty, that you are a sculpture carved by the gods...you should take a <span>picture that you would only show</span> to <span>${coplayer.name}</span> if he/she likes the picture you will have won.</p> <br> <p><span>${player.name} you have only</span> 1 <span>chance</span></p>📸`;

        //Game buttons 
        gameBtnYes.addEventListener('click', () => {
            player.pnts++;
            scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
            if (player.pnts >= game.winPnts) {
                gameTitle.innerText = `${player.name} Wins!`
                gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                gameTimer.innerHTML = ``;
                gameBtn.innerHTML = ``;

            }else {
                playGame();
            }
            
            })

        gameBtnNo.addEventListener('click', () => {
        player.pnts--;
        if (player.pnts < 0) {
            player.pnts = 0;
        }
        playGame();
        })
        case 18:

        game.time = randomNum(60 , 361);
        gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
        gameTitle.innerText = `Revenge of the boyscout`;
        gameDescription.innerHTML = `<p><span>${coplayer.name}</span> has mocked you, it is something you cannot allow to happen... as a former boyscout <span>${player.name} must bind ${coplayer.name}</span> to carry out his revenge. If <span>${coplayer.name}</span> breaks free you will have lost.😡</p>`;

        //Game buttons 
        gameBtnYes.addEventListener('click', () => {
            player.pnts++;
            scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
            if (player.pnts >= game.winPnts) {
                gameTitle.innerText = `${player.name} Wins!`
                gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                gameTimer.innerHTML = ``;
                gameBtn.innerHTML = ``;

            }else {
                playGame();
            }
            
            })

        gameBtnNo.addEventListener('click', () => {
        player.pnts--;
        if (player.pnts < 0) {
            player.pnts = 0;
        }
        playGame();
        })
            break;

        case 19:

        game.time = randomNum(90 , 381);
        gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
        gameTitle.innerText = `Hide n' seek`;
        gameDescription.innerHTML = `<p><span>${player.name}</span> you must <span>count 20 seconds</span> for <span>${coplayer.name} to hide</span> in a completely dark room and you must find him/her before the time runs out. If you find <span>${coplayer.name}</span> you <span>can do whatever you want with the remaining time</span>.👀</p>`;

        //Game buttons 
        gameBtnYes.addEventListener('click', () => {
            player.pnts++;
            scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
            if (player.pnts >= game.winPnts) {
                gameTitle.innerText = `${player.name} Wins!`
                gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                gameTimer.innerHTML = ``;
                gameBtn.innerHTML = ``;

            }else {
                playGame();
            }
            
            })

        gameBtnNo.addEventListener('click', () => {
        player.pnts--;
        if (player.pnts < 0) {
            player.pnts = 0;
        }
        playGame();
        })

            break;
        
        case 20:

        game.time = randomNum(60 , 361);
        gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
        gameTitle.innerText = `Torture room`;
        gameDescription.innerHTML = `<p>Don't panic <span>${player.name}</span> just that <span>${coplayer.name}</span> found out that you are a spy and will "torture" you to get the information out of you, during which time <span>you will be at ${coplayer.name}'s disposal</span>. You will <span>not be able to move or complain... not even cum</span>.💦</p>`;

        //Game buttons 
        gameBtnYes.addEventListener('click', () => {
            player.pnts++;
            scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
            if (player.pnts >= game.winPnts) {
                gameTitle.innerText = `${player.name} Wins!`
                gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                gameTimer.innerHTML = ``;
                gameBtn.innerHTML = ``;

            }else {
                playGame();
            }
            
            })

        gameBtnNo.addEventListener('click', () => {
        player.pnts--;
        if (player.pnts < 0) {
            player.pnts = 0;
        }
        playGame();
        })

            break;

        case 21:

        game.time = randomNum(60 , 361);
        gameTimer.innerHTML = `<p class="timer">${game.time} secs</p> <button id="gametime">Start</button>`;
        gameTitle.innerText = `With topping please`;
        gameDescription.innerHTML = `<p><span>${player.name}</span> knows how much you love desserts, that's why <span>${coplayer.name}</span> offers you a certain part of his/her <span>body for a certain time so you can put the topping</span> of your choice. <span>${coplayer.name}'s ${coplayer.parts[randomNum(0 , coplayer.parts.length)]}</span> will be your dessert. I hope you enjoy your dessert! 👅</p>`;

        //Game buttons 
        gameBtnYes.addEventListener('click', () => {
            player.pnts++;
            scoreHtml.innerHTML = `<h2>${boy.name}: ${boy.pnts}</h2> <h2>${girl.name}: ${girl.pnts}</h2> <h3>Points to win: ${game.winPnts}</h3>`;
            if (player.pnts >= game.winPnts) {
                gameTitle.innerText = `${player.name} Wins!`
                gameDescription.innerHTML = '<a href="./index.html" class="fk-btn">Play again</a>';
                gameTimer.innerHTML = ``;
                gameBtn.innerHTML = ``;

            }else {
                playGame();
            }
            
            })

        gameBtnNo.addEventListener('click', () => {
        player.pnts--;
        if (player.pnts < 0) {
            player.pnts = 0;
        }
        playGame();
        })
            break;
        
        default:
            break;
    }



    let gameTime = document.getElementById('gametime');
    gameTime.addEventListener('click', ()=>{
        timer();
        
    })

    function timer() {
        let time = setInterval(() => {
            gameTimer.innerHTML = `<p class="timer">${game.time} secs</p>`;
            if (game.time <= 0) {
                game.time = 0;
                gameTimer.innerHTML = `<p class="timer">${game.time} secs</p>`;
                gameBtnYes.removeAttribute('disabled');
                gameBtnNo.removeAttribute('disabled')
                clearInterval(time);
                
            }
            game.time--
        }, 1000);
    }
}
function coupleGame(player, coplayer, game) {
    game.num = randomNum(1, 11);
    gameBtn.innerHTML = `<button id="continue">Continue</button>`;



    switch (game.num) {
        case 1:
            gameTimer.innerHTML = ``;
            gameTitle.innerText = `Like a wedding`;
            gameDescription.innerHTML = `<p><span>${player.name}</span> and <span>${coplayer.name}</span> should take turns to make a toast in honor of each other, saying something special. At the end <span>you should drink by crossing your arms with each other</span>.🤵🏻👰🏻</p>`;
            
            continueBtn = document.getElementById('continue');
            continueBtn.addEventListener('click', ()=>{
                playGame();
        });
            break;

        case 2:

        gameTimer.innerHTML = ``;
        gameTitle.innerText = `Laughs better with a partner`;
        gameDescription.innerHTML = `<p><span>${player.name}</span> and <span>${coplayer.name}</span> should take turns drinking and then <span>telling a joke or making their partner laugh</span>.🍺</p>`;
        
        continueBtn = document.getElementById('continue');
        continueBtn.addEventListener('click', ()=>{
            playGame();
    });

            break;

        case 3:

        gameTimer.innerHTML = ``;
        gameTitle.innerText = `Beautiful betrayal`;
        gameDescription.innerHTML = `<p><span>${player.name}</span> and <span>${coplayer.name}</span> should take turns <span>pouring a drink for their partner as if you were trying to poison him/her</span>, as if it were a movie, they should dramatize as much as they can.</p>`;
        
        continueBtn = document.getElementById('continue');
        continueBtn.addEventListener('click', ()=>{
            playGame();
    });

            break;

        case 4: 

        gameTimer.innerHTML = ``;
        gameTitle.innerText = `Memories of love`;
        gameDescription.innerHTML = `<p><span>${player.name}</span> and <span>${coplayer.name}</span> should take turns to <span>tell a memory together and then take a picture as a couple</span>.👩‍❤️‍💋‍👨</p>`;
        
        continueBtn = document.getElementById('continue');
        continueBtn.addEventListener('click', ()=>{
            playGame();
    });

            break;

        case 5:

        gameTimer.innerHTML = ``;
        gameTitle.innerText = `Food is not to be toyed with`;
        gameDescription.innerHTML = `<p>As children we were educated not to play with food, but as adults we discovered that with certain foods you can play, that said <span>${player.name}</span> and <span>${coplayer.name}</span> must <span>pass a candy from mouth to mouth until it is gone</span>, if you do not have a candy <span>you can use something else to replace it</span>, the imagination has no limits...</p>`;
        
        continueBtn = document.getElementById('continue');
        continueBtn.addEventListener('click', ()=>{
            playGame();
    });

            break;

        case 6:

        gameTimer.innerHTML = ``;
        gameTitle.innerText = `I can't remember its name...`;
        gameDescription.innerHTML = `<p><span>${player.name}</span> and <span>${coplayer.name}</span>  will take turns to <span>guess or describe as worst as they can a series or movie</span>, each will have 3 guesses.</p>`;
        
        continueBtn = document.getElementById('continue');
        continueBtn.addEventListener('click', ()=>{
            playGame();
    });

            break;

        case 7:

        gameTimer.innerHTML = ``;
        gameTitle.innerText = `In duet it sounds better`;
        gameDescription.innerHTML = `<p><span>${player.name}</span> and <span>${coplayer.name}</span> should sing a <span>duet song</span>.</p>`;
        
        continueBtn = document.getElementById('continue');
        continueBtn.addEventListener('click', ()=>{
            playGame();
    });

            break;

        case 8:

        gameTimer.innerHTML = ``;
        gameTitle.innerText = `Musical souvenir`;
        gameDescription.innerHTML = `<p><span>${player.name}</span> and <span>${coplayer.name}</span> should select a song that reminds them of the <span>beginning of their relationship</span>.</p>`;
        
        continueBtn = document.getElementById('continue');
        continueBtn.addEventListener('click', ()=>{
            playGame();
    });

            break;

        case 9:

        gameTimer.innerHTML = ``;
        gameTitle.innerText = `The letters are carried in the heart`;
        gameDescription.innerHTML = `<p><span>${player.name}</span> and <span>${coplayer.name}</span> should dedicate a song to each other, which they would <span>always dedicate to each other</span>.</p>`;
        
        continueBtn = document.getElementById('continue');
        continueBtn.addEventListener('click', ()=>{
            playGame();
    });

            break;

        case 10:


        gameTimer.innerHTML = ``;
        gameTitle.innerText = `First dance`;
        gameDescription.innerHTML = `<p><span>${player.name}</span> and <span>${coplayer.name}</span> must dance to a song as if it were <span>their first dance</span>.</p>`;
        
        continueBtn = document.getElementById('continue');
        continueBtn.addEventListener('click', ()=>{
            playGame();
    });
            break;
        default:
            break;
    }


}
};
//Number generator
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

//Crear retos para el perdedor y hacer un boton de reinicio con un <a> para que vuelva a cargar la pagina, los retos pueden ir desde cosas sexuales hasta cosas divertidas... ideas: worship, oral sex, posiciones especificas, pensar retos divertidos de hacer

/*
Para los juegos debo crear 2 botones uno de aprobado y otro de denegado, cada uno con un event listener, ambos haran el llamado a playGame() pero el de continuar antes del juego debera llamar a miniGame().
al final de switch case pondre los event listener de cada boton el cual subira un punto al parametro player para que suba 1 punto al jugador correspondiente... los juegos de pareja solo contaran con 1 boton los juegos de 1vs1 no estaran en esta version pero sera compensado con otros juegos.

Agregar otro espacio donde ira el temporizador y un boton de comenzar, agregar <span> para hacer que ciertas palabras sean mas faciles de diferenciar como las partes. Para facilitar la creacion del temporizador solo se manejara en segundos, en caso de ser 2 minutos el temporizador marcara 120 segundos, poner una alarma cuando el temporizador llegue a 0 y que haga clear interval.

NOTA IMPORTANTE: la funcion de numeros al azar no afecta a los arrays si les pongo .length debido a que el 0 lo cuenta como 1, por lo tanto debo poner en valor minimo 0 y en valor maximo el parametro.parts.length 

Los juegos que requieran temporizador tendran los botones bloqueados hasta que termine el tiempo, lo que no requieran teporizador se mostrara en 0.
*/