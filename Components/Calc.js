import React ,{useState}from 'react'

function Calc() {
  const [result,setResult]=useState(" ");

  const handleButton=(e)=>{
    setResult(result.concat(e.target.name));
  }
  const clear=()=>{
    setResult("");
  }
  const backspace=()=>{
      setResult(result.slice(0,-1))
  }
  const evaluate=()=>{
    try{
      setResult(eval(result).toString());
    }catch{
      setResult("Error");
    }
  }


  return (
    <div className="Main">
        {/* for input */}
        <div className="container">
          <form action="">
            <input type="text" value={result} />
          </form>
        </div>

        {/* for buttons */}
        <div className="keypad">
          <button id="clear" onClick={clear}>Clear</button>
          <button id="c" onClick={backspace}>c</button>
          <button  onClick={handleButton} name="/">/</button>
          <button  onClick={handleButton} name='7'>7</button>
          <button  onClick={handleButton} name='8'>8</button>
          <button  onClick={handleButton}  name='9'>9</button>
          <button  onClick={handleButton} name='*'>x</button>
          <button  onClick={handleButton} name='4'>4</button>
          <button  onClick={handleButton} name='5'>5</button>
          <button  onClick={handleButton} name='6'>6</button>
          <button  onClick={handleButton} name='-'>-</button>
          <button  onClick={handleButton} name='1'>1</button>
          <button  onClick={handleButton} name='2'>2</button>
          <button  onClick={handleButton} name='3'>3</button>
          <button  onClick={handleButton}  name='+'>+</button>
          <button  onClick={handleButton} name='0'>0</button>
          <button  onClick={handleButton}  name='.'>.</button>
          <button id="equals" onClick={evaluate}>=</button>
        </div>
      </div>
  )
}

export default Calc







