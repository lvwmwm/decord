// Module ID: 13228
// Function ID: 100394
// Name: defaultPerformanceNow
// Dependencies: []

// Module 13228 (defaultPerformanceNow)
arg5.start = undefined;
let tmp2 = "undefined" !== typeof window && window;
if (tmp2) {
  const _window = window;
  let webkitPerformance = window.performance;
  if (!webkitPerformance) {
    const _window2 = window;
    webkitPerformance = window.msPerformance;
  }
  if (!webkitPerformance) {
    const _window3 = window;
    webkitPerformance = window.webkitPerformance;
  }
  tmp2 = webkitPerformance;
}
let performanceNow = function defaultPerformanceNow(arg0) {
  return Date.now();
};
if (nativePerformanceNow.nativePerformanceNow) {
  performanceNow = nativePerformanceNow.nativePerformanceNow;
} else if (tmp2) {
  performanceNow = function performanceNow() {
    let now = tmp2.now;
    if (now) {
      now = tmp2.now();
    }
    return now;
  };
}
arg5.start = function start() {
  let closure_0 = performanceNow();
  return () => callback() - closure_0;
};
