// Module ID: 12172
// Function ID: 12173
// Name: MediaKeyboardButtonIcon
// Dependencies: [19, 21, 4345, 4218, 1625, 4482, 4485, 10882, 2]
// Exports: MediaKeyboardButtonIcon

// Module 12172 (MediaKeyboardButtonIcon)
import noopAll from "noop" /* 19 */;
import _modDef4218 from "module_4218" /* 4218 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 4345 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
let closure_4 = { code: "function MediaKeyboardButtonIconTsx1(){const{keyboard,KeyboardTypes,withTiming,timingStandard}=this.__closure;const isActive=keyboard===KeyboardTypes.MEDIA||keyboard===KeyboardTypes.APP_LAUNCHER;return{transform:[{rotate:withTiming(isActive?'45deg':'0deg',timingStandard)}]};}" };
const result = require("set").fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardButtonIcon.tsx");

export const MediaKeyboardButtonIcon = function MediaKeyboardButtonIcon(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    let _require;
    const merged = Object.assign(arg0, undefined);
    const tmp6 = useKeyboardTypeDefault();
    _require = tmp6;
    let obj = _require(4218);
    const fn = function s() {
      const tmp = callback;
      const tmp4 = callback === callback(closure_1_2[4]).KeyboardTypes.MEDIA || callback === callback(closure_1_2[4]).KeyboardTypes.APP_LAUNCHER;
      let str = "0deg";
      if (tmp4) {
        str = "45deg";
      }
      let obj = { transform: null };
      obj = { rotate: callback(closure_1_2[5]).withTiming(str, tmp2(tmp3[6]).timingStandard) };
      const items = [obj];
      obj[0] = items;
      return obj;
    };
    obj = { keyboard: null, KeyboardTypes: null, withTiming: null, timingStandard: null };
    obj[0] = tmp6;
    obj[1] = _require(1625).KeyboardTypes;
    obj[2] = _require(4482).withTiming;
    obj[3] = _require(4485).timingStandard;
    fn.__closure = obj;
    fn.__workletHash = 10698563185643;
    fn.__initData = closure_4;
    const animatedStyle = obj.useAnimatedStyle(fn);
    obj = { style: null, children: null };
    obj[0] = animatedStyle;
    obj1 = {};
    const merged1 = Object.assign(merged);
    obj[1] = jsx(_require(10882).PlusLargeIcon, {});
    return jsx(_modDef4218.View, { style: null, children: null });
  }
};
