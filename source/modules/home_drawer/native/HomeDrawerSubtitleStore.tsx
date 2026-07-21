// Module ID: 14681
// Function ID: 110721
// Dependencies: []

// Module 14681
let closure_0 = null;
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/home_drawer/native/HomeDrawerSubtitleStore.tsx");

export default _module.create((arg0, arg1) => {
  let closure_0 = arg0;
  return {
    currentType: "voice",
    startTimer() {
      if (null != interval) {
        const _clearInterval = clearInterval;
        clearInterval(interval);
      }
      const interval = setInterval(() => {
        const obj = {};
        let str = "voice";
        if ("voice" === callback().currentType) {
          str = "activity";
        }
        obj.currentType = str;
        closure_0(obj);
      }, 3500);
    },
    stopTimer() {
      if (null != callback) {
        const _clearInterval = clearInterval;
        clearInterval(callback);
        const callback = null;
      }
      callback({ currentType: "voice" });
    }
  };
});
