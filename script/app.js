const num = prompt("Add number");

function counter(someValue = 0) {
  let foo = someValue;
  function increase() {
    foo++;
  }
  function decrease() {
    foo--;
  }
  function value() {
    return foo;
  }
  function setToZero() {
    foo = 0;
  }
  return {
    increase,
    decrease,
    value,
    setToZero,
  };
}

const independentCounter = counter(num);

independentCounter.increase();
independentCounter.decrease();
independentCounter.decrease();
independentCounter.decrease();
independentCounter.setToZero();
independentCounter.increase();

alert(independentCounter.value());
