// Module ID: 11346
// Function ID: 88217
// Name: MediaKeyboardButtonIcon
// Dependencies: [31, 33, 3996, 1324, 3991, 1555, 4131, 4134, 10197, 2]
// Exports: MediaKeyboardButtonIcon

// Module 11346 (MediaKeyboardButtonIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_4 = { code: "function MediaKeyboardButtonIconTsx1(){const{keyboard,KeyboardTypes,chatInputFloating,withTiming,timingStandard}=this.__closure;const isActive=keyboard===KeyboardTypes.MEDIA||chatInputFloating&&keyboard===KeyboardTypes.APP_LAUNCHER;return{transform:[{rotate:withTiming(isActive?'45deg':'0deg',timingStandard)}]};}" };
const result = require("getKeyboardContextForType").fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardButtonIcon.tsx");

export const MediaKeyboardButtonIcon = function MediaKeyboardButtonIcon(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    let _require;
    let chatInputFloating;
    const merged = Object.assign(arg0, undefined);
    const tmp7 = chatInputFloating(3996)();
    _require = tmp7;
    let obj = _require(1324);
    obj = { location: "MediaKeyboardButtonIcon" };
    chatInputFloating = obj.useMobileVisualRefreshConfig(obj).chatInputFloating;
    let obj2 = _require(3991);
    const fn = function s() {
      let tmp = _undefined === _undefined(outer1_2[5]).KeyboardTypes.MEDIA;
      if (!tmp) {
        let tmp2 = chatInputFloating;
        if (chatInputFloating) {
          tmp2 = _undefined === _undefined(outer1_2[5]).KeyboardTypes.APP_LAUNCHER;
        }
        tmp = tmp2;
      }
      let obj = {};
      obj = {};
      let str = "0deg";
      if (tmp) {
        str = "45deg";
      }
      obj.rotate = _undefined(outer1_2[6]).withTiming(str, _undefined(outer1_2[7]).timingStandard);
      const items = [obj];
      obj.transform = items;
      return obj;
    };
    obj = { keyboard: tmp7, KeyboardTypes: _require(1555).KeyboardTypes, chatInputFloating, withTiming: _require(4131).withTiming, timingStandard: _require(4134).timingStandard };
    fn.__closure = obj;
    fn.__workletHash = 12686941860647;
    fn.__initData = closure_4;
    const animatedStyle = obj2.useAnimatedStyle(fn);
    const obj1 = { style: animatedStyle };
    obj2 = {};
    const merged1 = Object.assign(merged);
    obj1.children = jsx(_require(10197).PlusLargeIcon, {});
    return jsx(chatInputFloating(3991).View, { style: animatedStyle });
  }
};
