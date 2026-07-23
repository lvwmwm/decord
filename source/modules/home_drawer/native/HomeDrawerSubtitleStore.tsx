// Module ID: 14804
// Function ID: 112928
// Name: keys
// Dependencies: [621, 2]

// Module 14804 (keys)
import keys from "keys";

let c0 = null;
let obj = keys.create((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return {
    currentType: "voice",
    startTimer() {
      if (null != interval) {
        const _clearInterval = clearInterval;
        clearInterval(interval);
      }
      interval = setInterval(() => {
        const obj = {};
        let str = "voice";
        if ("voice" === outer1_1().currentType) {
          str = "activity";
        }
        obj.currentType = str;
        outer1_0(obj);
      }, 3500);
    },
    stopTimer() {
      if (null != callback) {
        const _clearInterval = clearInterval;
        clearInterval(callback);
        callback = null;
      }
      callback({ currentType: "voice" });
    }
  };
});
const result = require("set").fileFinishedImporting("modules/home_drawer/native/HomeDrawerSubtitleStore.tsx");

export default obj;
