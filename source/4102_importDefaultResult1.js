// Module ID: 4102
// Function ID: 33959
// Name: importDefaultResult1
// Dependencies: [5, 77, 4103, 4104]

// Module 4102 (importDefaultResult1)
import importDefaultResult1 from "_defineProperty";
import importDefaultResult from "asyncGeneratorStep";

const require = arg1;
const importDefaultResult1Result = importDefaultResult1({}, require("isRingerSilent").HapticFeedbackTypes.impactLight, 0.3);
const importDefaultResult1Result1 = importDefaultResult1(importDefaultResult1({}, require("isRingerSilent").HapticFeedbackTypes.impactLight, 0.3), require("isRingerSilent").HapticFeedbackTypes.impactMedium, 0.6);
const importDefaultResult1Result2 = importDefaultResult1(importDefaultResult1(importDefaultResult1({}, require("isRingerSilent").HapticFeedbackTypes.impactLight, 0.3), require("isRingerSilent").HapticFeedbackTypes.impactMedium, 0.6), require("isRingerSilent").HapticFeedbackTypes.impactHeavy, 0.8);
const importDefaultResult1Result3 = importDefaultResult1(importDefaultResult1(importDefaultResult1(importDefaultResult1({}, require("isRingerSilent").HapticFeedbackTypes.impactLight, 0.3), require("isRingerSilent").HapticFeedbackTypes.impactMedium, 0.6), require("isRingerSilent").HapticFeedbackTypes.impactHeavy, 0.8), require("isRingerSilent").HapticFeedbackTypes.rigid, 1);
let closure_4 = importDefaultResult1(importDefaultResult1(importDefaultResult1(importDefaultResult1(importDefaultResult1(importDefaultResult1({}, require("isRingerSilent").HapticFeedbackTypes.impactLight, 0.3), require("isRingerSilent").HapticFeedbackTypes.impactMedium, 0.6), require("isRingerSilent").HapticFeedbackTypes.impactHeavy, 0.8), require("isRingerSilent").HapticFeedbackTypes.rigid, 1), require("isRingerSilent").HapticFeedbackTypes.soft, 0.1), require("isRingerSilent").HapticFeedbackTypes.selection, 0.3);
let closure_5 = { enableVibrateFallback: false, ignoreAndroidSystemSettings: false };
let c6 = true;
let obj = {
  setEnabled(arg0) {
    let closure_6 = arg0;
  },
  isEnabled() {
    return c6;
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
        if (c6) {
          const _Object = Object;
          importDefault(4104).trigger(selection, Object.assign({}, closure_5, tmp2));
          const obj2 = importDefault(4104);
        }
      }
      obj = {};
    }
    selection = require(4103) /* isRingerSilent */.HapticFeedbackTypes.selection;
  },
  stop() {
    if (c6) {
      importDefault(4104).stop();
      const obj = importDefault(4104);
    }
  },
  isSupported() {
    return importDefault(4104).isSupported();
  },
  triggerPattern(arg0) {
    if (arguments.length > 1) {
      if (c6) {
        let obj = importDefault(4104);
        const _Object = Object;
        obj = {};
        obj.triggerPattern(arg0, Object.assign({}, closure_5, tmp2));
      }
    }
  },
  playAHAP(arg0) {
    if (c6) {
      return importDefault(4104).playAHAP(arg0);
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
        if (c6) {
          let num5 = 0.5;
          if (null != table[impactMedium]) {
            num5 = tmp5;
          }
          const _Math = Math;
          const _Math2 = Math;
          const bound = Math.max(0, Math.min(1, num3));
          obj = { time: 0, intensity: bound, sharpness: num5 };
          const items = [obj];
          const _Object = Object;
          importDefault(4104).triggerPattern(items, Object.assign({}, closure_5, tmp2));
          const obj2 = importDefault(4104);
        }
      }
      obj = {};
    }
    impactMedium = require(4103) /* isRingerSilent */.HapticFeedbackTypes.impactMedium;
  }
};
let closure_3 = importDefaultResult(async () => yield outer1_1(outer1_2[3]).getSystemHapticStatus());
obj.getSystemHapticStatus = function getSystemHapticStatus() {
  return callback(...arguments);
};

export default obj;
