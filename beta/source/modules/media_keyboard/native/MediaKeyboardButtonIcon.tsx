// Module ID: 11722
// Function ID: 11723
// Name: MediaKeyboardButtonIcon
// Dependencies: [19, 21, 4703, 4566, 1611, 4837, 4840, 10413, 2]
// Exports: MediaKeyboardButtonIcon

// Module 11722 (MediaKeyboardButtonIcon)
import Fragment from "Fragment" /* 21 */;
import KeyboardTypes from "KeyboardTypes" /* 1611 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 4703 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
const __initData = { code: "function MediaKeyboardButtonIconTsx1(){const{keyboard,KeyboardTypes,withTiming,timingStandard}=this.__closure;const isActive=keyboard===KeyboardTypes.MEDIA||keyboard===KeyboardTypes.APP_LAUNCHER;return{transform:[{rotate:withTiming(isActive?'45deg':'0deg',timingStandard)}]};}" };
const result = size.fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardButtonIcon.tsx");

export const MediaKeyboardButtonIcon = function MediaKeyboardButtonIcon(arg0) {
  let closure_0;
  if (arg0 == null) {
    let str = "Cannot destructure 'undefined' or 'null'.";
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    let tmp4 = dependencyMap;
    const merged = Object.assign(arg0, undefined);
    const tmp5 = useKeyboardTypeDefault();
    _require = tmp5;
    const fn = function s() {
      let items;
      let str = "0deg";
      const tmp4 = closure_0 === KeyboardTypes.KeyboardTypes.MEDIA || closure_0 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER;
      const withTiming = timing.withTiming;
      timing;
      if (tmp4) {
        str = "45deg";
      }
      const obj = { transform: items };
      items = [{ rotate: withTiming(str, timingPresets.timingStandard) }];
      ({ rotate: withTiming(str, timingPresets.timingStandard) });
      return obj;
    };
    let obj = { keyboard: tmp5, KeyboardTypes: require("KeyboardTypes").KeyboardTypes, withTiming: require("timing").withTiming, timingStandard: require("timingPresets").timingStandard };
    const useAnimatedStyle = require("ReanimatedRexport").useAnimatedStyle;
    require("ReanimatedRexport");
    fn.__closure = obj;
    fn.__workletHash = 10698563185643;
    fn.__initData = __initData;
    const animatedStyle = useAnimatedStyle(fn);
    const View = ReanimatedRexportDefault.View;
    const PlusLargeIcon = require("PlusLargeIcon").PlusLargeIcon;
    const merged1 = Object.assign(merged);
    return <View style={animatedStyle}>{null}</View>;
  }
};
