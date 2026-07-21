// Module ID: 11335
// Function ID: 88154
// Name: MediaKeyboardButtonIcon
// Dependencies: []
// Exports: MediaKeyboardButtonIcon

// Module 11335 (MediaKeyboardButtonIcon)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_4 = { code: "function MediaKeyboardButtonIconTsx1(){const{keyboard,KeyboardTypes,chatInputFloating,withTiming,timingStandard}=this.__closure;const isActive=keyboard===KeyboardTypes.MEDIA||chatInputFloating&&keyboard===KeyboardTypes.APP_LAUNCHER;return{transform:[{rotate:withTiming(isActive?'45deg':'0deg',timingStandard)}]};}" };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardButtonIcon.tsx");

export const MediaKeyboardButtonIcon = function MediaKeyboardButtonIcon(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    let arg1;
    let importDefault;
    const merged = Object.assign(arg0, undefined);
    const tmp7 = importDefault(dependencyMap[2])();
    arg1 = tmp7;
    let obj = arg1(dependencyMap[3]);
    obj = { location: "MediaKeyboardButtonIcon" };
    const chatInputFloating = obj.useMobileVisualRefreshConfig(obj).chatInputFloating;
    importDefault = chatInputFloating;
    let obj2 = arg1(dependencyMap[4]);
    const fn = function s() {
      let tmp = tmp7 === tmp7(closure_2[5]).KeyboardTypes.MEDIA;
      if (!tmp) {
        let tmp2 = chatInputFloating;
        if (chatInputFloating) {
          tmp2 = tmp7 === tmp7(closure_2[5]).KeyboardTypes.APP_LAUNCHER;
        }
        tmp = tmp2;
      }
      let obj = {};
      obj = {};
      let str = "0deg";
      if (tmp) {
        str = "45deg";
      }
      obj.rotate = tmp7(closure_2[6]).withTiming(str, tmp7(closure_2[7]).timingStandard);
      const items = [obj];
      obj.transform = items;
      return obj;
    };
    obj = { keyboard: tmp7, KeyboardTypes: arg1(dependencyMap[5]).KeyboardTypes, chatInputFloating, withTiming: arg1(dependencyMap[6]).withTiming, timingStandard: arg1(dependencyMap[7]).timingStandard };
    fn.__closure = obj;
    fn.__workletHash = 12686941860647;
    fn.__initData = closure_4;
    const animatedStyle = obj2.useAnimatedStyle(fn);
    const obj1 = { style: animatedStyle };
    obj2 = {};
    const merged1 = Object.assign(merged);
    obj1.children = jsx(arg1(dependencyMap[8]).PlusLargeIcon, obj2);
    return jsx(importDefault(dependencyMap[4]).View, obj1);
  }
};
