// Module ID: 13238
// Function ID: 100437
// Name: benchmark
// Dependencies: []

// Module 13238 (benchmark)
arg5.default = function benchmark() {
  return (startTimer) => {
    startTimer = startTimer.startTimer;
    const features = {
      benchmark(title) {
        const items = [];
        const startTimer = items;
        let closure_2 = startTimer();
        function step(title) {
          let num = 0;
          if (0 !== items.length) {
            num = items[closure_1.length - 1].time;
          }
          const tmp2 = callback();
          const obj = { title, time: tmp2, delta: tmp2 - num };
          items.push(obj);
        }
        items.push({ title });
        function stop(arg0) {
          step(arg0);
          arg0.send("benchmark.report", { title: arg0, steps: items });
        }
        return { step, stop, last: stop };
      }
    };
    return { features };
  };
};
