// Module ID: 11376
// Function ID: 88237
// Name: MediaKeyboardButtonIcon
// Dependencies: [31, 33, 4031, 1324, 4026, 1555, 4166, 4169, 10190, 2]
// Exports: MediaKeyboardButtonIcon

// Module 11376 (MediaKeyboardButtonIcon)
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
    const tmp7 = chatInputFloating(4031)();
    _require = tmp7;
    let obj = _require(1324);
    obj = { location: "MediaKeyboardButtonIcon" };
    chatInputFloating = obj.useMobileVisualRefreshConfig(obj).chatInputFloating;
    let obj2 = _require(4026);
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
    obj = { keyboard: tmp7, KeyboardTypes: _require(1555).KeyboardTypes, chatInputFloating, withTiming: _require(4166).withTiming, timingStandard: _require(4169).timingStandard };
    fn.__closure = obj;
    fn.__workletHash = 12686941860647;
    fn.__initData = closure_4;
    const animatedStyle = obj2.useAnimatedStyle(fn);
    const obj1 = { style: animatedStyle };
    obj2 = {};
    const merged1 = Object.assign(merged);
    obj1.children = jsx(_require(10190).PlusLargeIcon, {});
    return jsx(chatInputFloating(4026).View, { style: animatedStyle });
  }
};
