// Module ID: 246
// Function ID: 3303
// Dependencies: [101, 247]

// Module 246
let closure_2 = [];
require("_isNativeReflectConstruct").addListener("hardwareBackPress", () => {
  let obj;
  let diff = arr.length - 1;
  if (diff >= 0) {
    while (true) {
      let tmp2 = arr;
      obj = arr[diff];
      if (null != obj) {
        let tmp3 = arr;
        if (obj.call(arr)) {
          break;
        }
      }
      diff = diff - 1;
    }
  }
  obj.exitApp();
});
let obj = {
  exitApp() {
    if (importDefault(247)) {
      const result = importDefault(247).invokeDefaultBackPressHandler();
      const obj = importDefault(247);
    }
  },
  addEventListener(arg0, arg1) {
    let closure_0 = arg1;
    if (-1 === arr.indexOf(arg1)) {
      arr = arr.push(arg1);
    }
    return {
      remove() {
        const index = outer1_2.indexOf(closure_0);
        if (-1 !== index) {
          outer1_2.splice(index, 1);
        }
      }
    };
  }
};

export default obj;
