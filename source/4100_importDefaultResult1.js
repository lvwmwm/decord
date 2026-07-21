// Module ID: 4100
// Function ID: 33943
// Name: importDefaultResult1
// Dependencies: []

// Module 4100 (importDefaultResult1)
const importDefaultResult1 = importDefault(dependencyMap[1]);
const importDefaultResult = importDefault(dependencyMap[0]);
const importDefaultResult1Result = importDefaultResult1({}, arg1(dependencyMap[2]).HapticFeedbackTypes.impactLight, 0.3);
const importDefaultResult1Result1 = importDefaultResult1(importDefaultResult1({}, arg1(dependencyMap[2]).HapticFeedbackTypes.impactLight, 0.3), arg1(dependencyMap[2]).HapticFeedbackTypes.impactMedium, 0.6);
const importDefaultResult1Result2 = importDefaultResult1(importDefaultResult1(importDefaultResult1({}, arg1(dependencyMap[2]).HapticFeedbackTypes.impactLight, 0.3), arg1(dependencyMap[2]).HapticFeedbackTypes.impactMedium, 0.6), arg1(dependencyMap[2]).HapticFeedbackTypes.impactHeavy, 0.8);
const importDefaultResult1Result3 = importDefaultResult1(importDefaultResult1(importDefaultResult1(importDefaultResult1({}, arg1(dependencyMap[2]).HapticFeedbackTypes.impactLight, 0.3), arg1(dependencyMap[2]).HapticFeedbackTypes.impactMedium, 0.6), arg1(dependencyMap[2]).HapticFeedbackTypes.impactHeavy, 0.8), arg1(dependencyMap[2]).HapticFeedbackTypes.rigid, 1);
let closure_4 = importDefaultResult1(importDefaultResult1(importDefaultResult1(importDefaultResult1(importDefaultResult1(importDefaultResult1({}, arg1(dependencyMap[2]).HapticFeedbackTypes.impactLight, 0.3), arg1(dependencyMap[2]).HapticFeedbackTypes.impactMedium, 0.6), arg1(dependencyMap[2]).HapticFeedbackTypes.impactHeavy, 0.8), arg1(dependencyMap[2]).HapticFeedbackTypes.rigid, 1), arg1(dependencyMap[2]).HapticFeedbackTypes.soft, 0.1), arg1(dependencyMap[2]).HapticFeedbackTypes.selection, 0.3);
let closure_5 = { landscapeSelector: null, vai-Latn: null };
let closure_6 = true;
const obj = {
  setEnabled(arg0) {
    let closure_6 = arg0;
  },
  isEnabled() {
    return closure_6;
  },
  trigger() {
    if (arguments.length > 0) {
      if (undefined !== arguments[0]) {
        let selection = arguments[0];
      }
      if (arguments.length > 1) {
        if (undefined !== arguments[1]) {
          let obj = arguments[1];
        }
        if (closure_6) {
          const _Object = Object;
          importDefault(dependencyMap[3]).trigger(selection, Object.assign({}, closure_5, tmp2));
          const obj2 = importDefault(dependencyMap[3]);
        }
      }
      obj = {};
    }
    selection = arg1(dependencyMap[2]).HapticFeedbackTypes.selection;
  },
  stop() {
    if (closure_6) {
      importDefault(dependencyMap[3]).stop();
      const obj = importDefault(dependencyMap[3]);
    }
  },
  isSupported() {
    return importDefault(dependencyMap[3]).isSupported();
  },
  triggerPattern(arg0) {
    if (arguments.length > 1) {
      if (closure_6) {
        let obj = importDefault(dependencyMap[3]);
        const _Object = Object;
        obj = {};
        obj.triggerPattern(arg0, Object.assign({}, closure_5, tmp2));
      }
    }
  },
  playAHAP(arg0) {
    if (closure_6) {
      return importDefault(dependencyMap[3]).playAHAP(arg0);
    } else {
      return Promise.resolve();
    }
  },
  impact() {
    if (arguments.length > 0) {
      if (undefined !== arguments[0]) {
        let impactMedium = arguments[0];
      }
      let num3 = 0.7;
      if (arguments.length > 1) {
        num3 = 0.7;
        if (undefined !== arguments[1]) {
          num3 = arguments[1];
        }
      }
      if (arguments.length > 2) {
        if (undefined !== arguments[2]) {
          let obj = arguments[2];
        }
        if (closure_6) {
          let num5 = 0.5;
          if (null != closure_4[impactMedium]) {
            num5 = tmp5;
          }
          const _Math = Math;
          const _Math2 = Math;
          const bound = Math.max(0, Math.min(1, num3));
          obj = { time: 0, intensity: bound, sharpness: num5 };
          const items = [obj];
          const _Object = Object;
          importDefault(dependencyMap[3]).triggerPattern(items, Object.assign({}, closure_5, tmp2));
          const obj2 = importDefault(dependencyMap[3]);
        }
      }
      obj = {};
    }
    impactMedium = arg1(dependencyMap[2]).HapticFeedbackTypes.impactMedium;
  }
};
let closure_3 = importDefaultResult(async () => yield callback(closure_2[3]).getSystemHapticStatus());
obj.getSystemHapticStatus = function getSystemHapticStatus() {
  return callback(...arguments);
};

export default obj;
