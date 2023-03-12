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





*/
