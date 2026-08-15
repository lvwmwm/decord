// Module ID: 11403
// Function ID: 11404
// Name: MediaKeyboardButtonIcon
// Dependencies: [19, 21, 4239, 1367, 4115, 1627, 4664, 4667, 9975, 2]
// Exports: MediaKeyboardButtonIcon

// Module 11403 (MediaKeyboardButtonIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
let closure_4 = { code: "function MediaKeyboardButtonIconTsx1(){const{keyboard,KeyboardTypes,chatInputFloating,withTiming,timingStandard}=this.__closure;const isActive=keyboard===KeyboardTypes.MEDIA||chatInputFloating&&keyboard===KeyboardTypes.APP_LAUNCHER;return{transform:[{rotate:withTiming(isActive?'45deg':'0deg',timingStandard)}]};}" };
const result = require("useKeyboardType").fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardButtonIcon.tsx");

export const MediaKeyboardButtonIcon = function MediaKeyboardButtonIcon(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    let _require;
    let chatInputFloating;
    const merged = Object.assign(arg0, undefined);
    const tmp6 = chatInputFloating(4239)();
    _require = tmp6;
    let obj = _require(1367);
    chatInputFloating = obj.useMobileVisualRefreshConfig({ location: "MediaKeyboardButtonIcon" }).chatInputFloating;
    let obj1 = _require(4115);
    const fn = function s() {
      let tmp4 = _undefined === _undefined(outer1_2[5]).KeyboardTypes.MEDIA;
      if (!tmp4) {
        let tmp5 = chatInputFloating;
        if (chatInputFloating) {
          tmp5 = _undefined === tmp2(tmp3[5]).KeyboardTypes.APP_LAUNCHER;
        }
        tmp4 = tmp5;
      }
      let str = "0deg";
      if (tmp4) {
        str = "45deg";
      }
      let obj = { transform: null };
      obj = { rotate: _undefined(outer1_2[6]).withTiming(str, tmp2(tmp3[7]).timingStandard) };
      const items = [obj];
      obj[0] = items;
      return obj;
    };
    obj = { keyboard: null, KeyboardTypes: null, chatInputFloating: null, withTiming: null, timingStandard: null };
    obj[0] = tmp6;
    obj[1] = _require(1627).KeyboardTypes;
    obj[2] = chatInputFloating;
    obj[3] = _require(4664).withTiming;
    obj[4] = _require(4667).timingStandard;
    fn.__closure = obj;
    fn.__workletHash = 12686941860647;
    fn.__initData = closure_4;
    const animatedStyle = obj1.useAnimatedStyle(fn);
    obj = { style: null, children: null };
    obj[0] = animatedStyle;
    obj1 = {};
    const merged1 = Object.assign(merged);
    obj[1] = jsx(_require(9975).PlusLargeIcon, {});
    return jsx(chatInputFloating(4115).View, { style: null, children: null });
  }
};
