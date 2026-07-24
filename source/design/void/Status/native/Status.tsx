// Module ID: 13069
// Function ID: 100955
// Name: getStatusSource
// Dependencies: [57, 31, 27, 1274, 653, 11978, 33, 4130, 13067, 689, 13070, 13071, 13072, 13073, 13074, 13075, 13076, 13068, 13077, 3991, 4542, 13054, 2]
// Exports: StatusWithTyping, default

// Module 13069 (getStatusSource)
import _slicedToArray from "_slicedToArray";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { STATUS_PADDING } from "STATUS_PADDING";
import { StatusTypes } from "ME";
import n from "n";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
function getStatusSource(status, streaming, flag, flag2) {
  if (streaming) {
    return importDefault(13070);
  } else if (flag2) {
    return importDefault(13071);
  } else if (flag) {
    return importDefault(13072);
  } else if (StatusTypes.IDLE === status) {
    return importDefault(13073);
  } else if (StatusTypes.DND === status) {
    return importDefault(13074);
  } else {
    if (StatusTypes.OFFLINE !== status) {
      if (StatusTypes.INVISIBLE !== status) {
        const ONLINE = StatusTypes.ONLINE;
        return importDefault(13076);
      }
    }
    return importDefault(13075);
  }
}
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ TYPING_ENTERING: closure_8, TYPING_EXITING: closure_9, CHANNEL_SPRING_CONFIG: closure_10 } = n);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = _createForOfIteratorHelperLoose.createStyles({ statusIcon: { width: "100%", height: "100%" } });
let closure_14 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1) => {
  let dotSize;
  let height;
  let obj = require(13067) /* getAnimatedTypingTranslateX */;
  const statusTypingDimensions = obj.getStatusTypingDimensions(arg0);
  ({ height, dotSize } = statusTypingDimensions);
  obj = {};
  obj = {};
  if (StatusTypes.ONLINE === arg1) {
    let PRIMARY_400 = importDefault(689).unsafe_rawColors.GREEN_360;
  } else if (StatusTypes.IDLE === arg1) {
    PRIMARY_400 = importDefault(689).unsafe_rawColors.YELLOW_300;
  } else if (StatusTypes.DND === arg1) {
    PRIMARY_400 = importDefault(689).unsafe_rawColors.RED_400;
  } else if (StatusTypes.STREAMING === arg1) {
    PRIMARY_400 = importDefault(689).unsafe_rawColors.PLATFORM_TWITCH;
  } else {
    if (StatusTypes.INVISIBLE !== arg1) {
      if (StatusTypes.UNKNOWN !== arg1) {
        const OFFLINE = StatusTypes.OFFLINE;
      }
    }
    PRIMARY_400 = importDefault(689).unsafe_rawColors.PRIMARY_400;
  }
  obj.backgroundColor = PRIMARY_400;
  obj.borderRadius = height;
  obj.height = height;
  obj.width = statusTypingDimensions.width;
  obj.paddingStart = 4;
  obj.paddingEnd = 2;
  obj.marginRight = 0;
  obj.ellipsis = obj;
  obj.ellipsisDot = { width: dotSize, height: dotSize, backgroundColor: importDefault(689).colors.WHITE };
  return obj;
});
let closure_15 = { code: "function StatusTsx1(){const{enableAnimation,withSpring,width,CHANNEL_SPRING_CONFIG,height,onAnimationFinished,borderRadius,translateX}=this.__closure;const shouldAnimate=enableAnimation.get()?'respect-motion-settings':'animate-never';return{width:withSpring(width,CHANNEL_SPRING_CONFIG,shouldAnimate),height:withSpring(height,CHANNEL_SPRING_CONFIG,shouldAnimate,onAnimationFinished),borderRadius:withSpring(borderRadius,CHANNEL_SPRING_CONFIG,shouldAnimate),transform:[{translateX:withSpring(translateX,CHANNEL_SPRING_CONFIG,shouldAnimate)}]};}" };
let closure_16 = { code: "function StatusTsx2(){const{withSpring,statusOpacity,CHANNEL_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(statusOpacity,CHANNEL_SPRING_CONFIG)};}" };
const result = require("get ActivityIndicator").fileFinishedImporting("design/void/Status/native/Status.tsx");

export default function Status(isMobileOnline) {
  let size;
  let status;
  let streaming;
  let style;
  let flag = isMobileOnline.isMobileOnline;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isMobileOnline.isVROnline;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ status, streaming, style, size } = isMobileOnline);
  if (streaming === undefined) {
    streaming = false;
  }
  let obj = {};
  const items = [importDefault(13068)(size, flag, flag2), style];
  obj.style = items;
  obj = { style: callback2().statusIcon, source: getStatusSource(status, streaming, flag, flag2), resizeMode: "stretch" };
  obj.children = callback(closure_4, obj);
  return callback(closure_5, obj);
};
export const StatusWithTyping = function StatusWithTyping(isMobileOnline) {
  let size;
  let status;
  let streaming;
  let style;
  let typing;
  let userId;
  let flag = isMobileOnline.isMobileOnline;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isMobileOnline.isVROnline;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ status, size, streaming, style } = isMobileOnline);
  if (streaming === undefined) {
    streaming = false;
  }
  ({ typing, userId } = isMobileOnline);
  let first;
  let importDefault;
  let width;
  let height;
  let c4;
  let num2;
  let num;
  const tmp2 = callback3(size, status);
  const size2 = importDefault(width[17])(size, flag, flag2);
  let obj = first(width[18]);
  let str = "";
  if (null != userId) {
    str = userId;
  }
  const tmp3 = height(obj.useFlashListAnimationDisabler(str), 2);
  first = tmp3[0];
  num = 1;
  importDefault = tmp5;
  if (typing) {
    width = tmp2.ellipsis.width + 2 * num;
  } else {
    width = size2.width;
  }
  if (typing) {
    height = tmp2.ellipsis.height + 2 * num;
  } else {
    height = size2.height;
  }
  const tmp8 = typing ? width / 2 : size2.borderRadius;
  c4 = tmp8;
  num2 = 0;
  if (typing) {
    let obj1 = first(width[8]);
    num2 = obj1.getAnimatedTypingTranslateX(size2.width);
  }
  let obj2 = first(width[19]);
  class O {
    constructor() {
      str = "animate-never";
      if (c0.get()) {
        str = "respect-motion-settings";
      }
      obj = {};
      obj2 = c0(width[20]);
      obj.width = obj2.withSpring(width, outer1_10, str);
      obj3 = c0(width[20]);
      obj.height = obj3.withSpring(height, outer1_10, str, c1);
      obj4 = c0(width[20]);
      obj.borderRadius = obj4.withSpring(borderRadius, outer1_10, str);
      obj = {};
      obj6 = c0(width[20]);
      obj.translateX = obj6.withSpring(c5, outer1_10, str);
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  obj = { enableAnimation: first, withSpring: first(width[20]).withSpring, width, CHANNEL_SPRING_CONFIG: closure_10, height, onAnimationFinished: tmp3[1], borderRadius: tmp8, translateX: num2 };
  O.__closure = obj;
  O.__workletHash = 2188820017597;
  O.__initData = closure_15;
  const animatedStyle = obj2.useAnimatedStyle(O);
  if (typing) {
    num = 0;
  }
  let obj4 = first(width[19]);
  const fn = function f() {
    const obj = { opacity: first(width[20]).withSpring(num, outer1_10) };
    return obj;
  };
  obj = { withSpring: first(width[20]).withSpring, statusOpacity: num, CHANNEL_SPRING_CONFIG: closure_10 };
  fn.__closure = obj;
  fn.__workletHash = 7224613224414;
  fn.__initData = closure_16;
  const animatedStyle1 = obj4.useAnimatedStyle(fn);
  obj1 = { style: items, collapsable: false };
  items = [size2, animatedStyle, style];
  if (typing) {
    obj2 = { collapsable: false, entering: closure_8, exiting: closure_9 };
    let obj3 = { position: "absolute", left: num, top: num };
    const items1 = [obj3];
    obj2.style = items1;
    obj4 = {};
    ({ ellipsis: obj10.style, ellipsisDot: obj10.dotStyle } = tmp2);
    obj4.disableScale = true;
    obj2.children = callback(importDefault(width[21]), obj4);
    typing = callback(importDefault(width[19]).View, obj2);
  }
  const items2 = [typing, ];
  const obj5 = { style: animatedStyle1 };
  const obj6 = { style: callback2().statusIcon, source: getStatusSource(status, streaming, flag, flag2), resizeMode: "stretch" };
  obj5.children = callback(c4, obj6);
  items2[1] = callback(importDefault(width[19]).View, obj5);
  obj1.children = items2;
  return closure_12(importDefault(width[19]).View, obj1);
};
