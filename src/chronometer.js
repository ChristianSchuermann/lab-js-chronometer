class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime =  0; 
    this.intervalId = null; 
    this.centiseconds = 0;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    return this.currentTime / 60;
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }

  getCentiseconds(){
    return this.currentTime % 100
  } 

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return String('00' + value).slice(-2);
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`
  }
} 
