// Module ID: 246
// Function ID: 3303
// Dependencies: []

// Module 246
let closure_2 = [];
importDefault(dependencyMap[0]).addListener("hardwareBackPress", () => {
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
const obj = {
  exitApp() {
    if (importDefault(dependencyMap[1])) {
      const result = importDefault(dependencyMap[1]).invokeDefaultBackPressHandler();
      const obj = importDefault(dependencyMap[1]);
    }
  },
  addEventListener(arg0, arg1) {
    const importDefault = arg1;
    if (-1 === arr.indexOf(arg1)) {
      const arr = arr.push(arg1);
    }
    return {
      remove() {
        const index = arr.indexOf(arg1);
        if (-1 !== index) {
          arr.splice(index, 1);
        }
      }
    };
  }
};

export default obj;
