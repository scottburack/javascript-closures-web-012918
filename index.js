const app = "I don't do much."

function fatBastard(meal) {
  function whatsForDinner() {
    if (meal === 'Mini-me') {
      console.log('The wee man is in my belly')
    } else {
      console.log(`I'm eatin' a bit of ${meal}! Burp.`)
    }
  }

  return whatsForDinner;
}

function raspyDoorGuy() {
  const password = 'yarr'; // password is a local variable created by raspyDoorGuy()

  function givePassword(givenPassword) { // givePassword() is an inner function, a closure
    if (givenPassword === password) { // givePassword() uses variable declared in the parent function
      console.log('Ye may enter.');
    } else {
      console.log('Begone, landlubber!');
    }
  }

  function willBreakPrinciples(bribeAmount) { // willBreakPrinciples() is the private method
    return bribeAmount >= 50;
  }

  function bribe(amount) { // bribe() is an inner function, a closure
    if (willBreakPrinciples(amount)) { // bribe() uses private method created in the parent function
      return password; // bribe() uses variable declared in the parent function
    } else {
      console.log("Pssht. That won't work.");
    }
  }

  return {
    givePassword,
    bribe
  };
}
