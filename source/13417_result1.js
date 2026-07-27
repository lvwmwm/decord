// Module ID: 13417
// Function ID: 103052
// Name: result1
// Dependencies: []

// Module 13417 (result1)
arg5.default = function benchmark() {
  return (startTimer) => {
    let closure_0 = startTimer;
    startTimer = startTimer.startTimer;
    const features = {
      benchmark(title) {
        let closure_0 = title;
        const items = [];
        let closure_2 = items();
        function step(title) {
          let num = 0;
          if (0 !== items.length) {
            num = items[items.length - 1].time;
          }
          const tmp2 = callback();
          const obj = { title, time: tmp2, delta: tmp2 - num };
          items.push(obj);
        }
        let obj = { title, time: 0, delta: 0 };
        items.push(obj);
        function stop(arg0) {
          step(arg0);
          title.send("benchmark.report", { title, steps: items });
        }
        return { step, stop, last: stop };
      }
    };
    return { features };
  };
};
