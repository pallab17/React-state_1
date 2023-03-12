import React from "react";

//var isDone = false;

function strike() {
  //  isDone = true;
  document.getElementById("root").style.textDecoration = "line-through";
}

function unStrike() {
  // isDone = false;
  document.getElementById("root").style.textDecoration = null;
}

function App() {
  return (
    <div>
      {/* <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p> */}
      <p>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;

/* 
ebar jodi ekhane amra dekhi 
duto button baniyechi ebar duto button e duto alada fn diyechi jate 
buy milk text ta strike off aar on hoye
eibar ei strike on aar off korte giye 
amra old method of imperative programming use korechi i.e. 
  document.getElementById("root").style.textDecoration = "line-through";
tar mane amra js e jerom doc.getebyid use kore ekta particular element ke target kortam
thik serom bhabei amra ei buy milk take change korchi

but react e eita korar best way hocche using react state and hooks
i.e.

import React from "react";

var isDone = false;

function strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;

ekhane var isDone = false;
isDone variable take ekta state or situation hisabe use korchi
but ei code ta kaj korbena as
<div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>

    ei gota div element ta ebong tar bhetorer mal gulo karon changeable noye
    element gulo ke re- render/abar produce korte hobe jate screen e change gulo bojha jaye
    eta korar jonno we need to use react hooks



    react State - eta hooche basically declarative programming jekhane amra
    ekta varaible ke ekta state or situation hisabe treat kore ui ta change kori
    ekhane variable take state  variable bola hoye
    i.e. example ice aar water r
    jodi ekta variable use kori ekhane
    var Temperature = 5;
    ebar temperature variable take use kore amra ui take change korbo

    i.e. jodi temperature<=5 hoye
    water will convert to ice
    and if temperature=>25
    ice will convert into water



    toh ei example diye amra etai bujhlam je
    temperature variable take amra state varaible hisabe use korchi i.e.
    temperature variable r ghar e bonduk rekhe amra ui take change korchi
    considering ui has 2 components i.e. ice aar water component
