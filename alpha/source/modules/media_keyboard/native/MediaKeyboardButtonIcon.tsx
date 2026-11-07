// Module ID: 14032
// Function ID: 14033
// Name: MediaKeyboardButtonIcon
// Dependencies: [19, 21, 5325, 1652, 1625, 5370, 5373, 10947, 2]
// Exports: MediaKeyboardButtonIcon

// Module 14032 (MediaKeyboardButtonIcon)
import Fragment from "Fragment" /* 21 */;
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import _mod1652 from "module_1652" /* 1652 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 5325 */;
import timing_timing from "timing/timing" /* 5370 */;
import timingPresets from "timingPresets" /* 5373 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let obj, obj1;

const jsx = Fragment.jsx;
let closure_4 = { code: "(function MediaKeyboardButtonIconTsx1(){let[keyboard,KeyboardTypes,withTiming,timingStandard]=this.__closure;const isActive=keyboard===KeyboardTypes.MEDIA||keyboard===KeyboardTypes.APP_LAUNCHER;return{transform:[{rotate:withTiming(isActive?'45deg':'0deg',timingStandard)}]};})" };
const result = size.fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardButtonIcon.tsx");

export function MediaKeyboardButtonIcon(arg0) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  if (arg0 == null) {
    let str = "Cannot destructure 'undefined' or 'null'.";
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const merged = Object.assign(arg0, undefined);
    let items = [closure_4, useKeyboardTypeDefault(), , , ];
    const tmp15 = useKeyboardTypeDefault();
    const useAnimatedStyle = _mod1652.useAnimatedStyle;
    _mod1652;
    items[2] = KeyboardTypes.KeyboardTypes;
    items[3] = timing_timing.withTiming;
    items[4] = timingPresets.timingStandard;
    let c0;
    let c1;
    let c2;
    let c3;
    [tmp, tmp2, tmp3, tmp4, tmp5] = items;
    const tmp13 = importDefault;
    const tmp16 = require;
    class MediaKeyboardButtonIconTsx1 {
      constructor() {
        tmp2 = closure_0 === closure_1.MEDIA || tmp === closure_1.APP_LAUNCHER;
        str = "0deg";
        tmp3 = closure_2;
        if (tmp2) {
          str = "45deg";
        }
        obj = { transform: null };
        obj1 = { rotate: tmp3(str, closure_3) };
        items = [];
        items[0] = obj1;
        obj.transform = items;
        return obj;
      }
    }
    const items1 = [tmp2, tmp3, tmp4, tmp5];
    MediaKeyboardButtonIconTsx1.__closure = items1;
    MediaKeyboardButtonIconTsx1.__workletHash = 8539740243314;
    MediaKeyboardButtonIconTsx1.__initData = tmp;
    const animatedStyle = useAnimatedStyle(MediaKeyboardButtonIconTsx1);
    const View = tmp13(1652).View;
    const obj2 = {};
    const PlusLargeIcon = tmp16(10947).PlusLargeIcon;
    const merged1 = Object.assign(merged);
    return <View style={animatedStyle}>{null}</View>;
  }
}
