// Module ID: 13647
// Function ID: 13648
// Name: Status
// Dependencies: [32, 19, 17, 1178, 1074, 12603, 21, 4836, 13645, 576, 13648, 13649, 13650, 13651, 13652, 13653, 13654, 13646, 13655, 4566, 5280, 13632, 2]
// Exports: StatusWithTyping, default

// Module 13647 (Status)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import StatusConstants from "StatusConstants" /* 1178 */;
import spring from "spring" /* 5280 */;
import Status_StatusUtils from "Status/StatusUtils" /* 13645 */;
import getStatusContainerStyleDefault from "getStatusContainerStyle" /* 13646 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelAnimationConstants from "ChannelAnimationConstants" /* 12603 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c10;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let unpackModuleId;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const STATUS_PADDING = StatusConstants.STATUS_PADDING;
const StatusTypes = Constants.StatusTypes;
({ TYPING_ENTERING: metroImportAll, TYPING_EXITING: c9, CHANNEL_SPRING_CONFIG: c10 } = ChannelAnimationConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let closure_13 = createStyles.createStyles({ statusIcon: { width: "100%", height: "100%" } });
createStyles = createStyles_mod;
let closure_14 = createStyles.createStyles((arg0, arg1) => {
  let PRIMARY_400;
  let dotSize;
  let height;
  let tmp5;
  const obj = Status_StatusUtils;
  const statusTypingDimensions = obj.getStatusTypingDimensions(arg0);
  ({ height, dotSize } = statusTypingDimensions);
  const width = statusTypingDimensions.width;
  if (StatusTypes.ONLINE === arg1) {
    PRIMARY_400 = nativeDefault.unsafe_rawColors.GREEN_360;
    tmp5 = importDefault;
  } else if (StatusTypes.IDLE === arg1) {
    PRIMARY_400 = nativeDefault.unsafe_rawColors.YELLOW_300;
    tmp5 = importDefault;
  } else if (StatusTypes.DND === arg1) {
    PRIMARY_400 = nativeDefault.unsafe_rawColors.RED_400;
    tmp5 = importDefault;
  } else if (StatusTypes.STREAMING === arg1) {
    PRIMARY_400 = nativeDefault.unsafe_rawColors.PLATFORM_TWITCH;
    tmp5 = importDefault;
  } else {
    if (StatusTypes.INVISIBLE !== arg1) {
      if (StatusTypes.UNKNOWN !== arg1) {
        const OFFLINE = tmp3.OFFLINE;
      }
    }
    PRIMARY_400 = nativeDefault.unsafe_rawColors.PRIMARY_400;
    tmp5 = importDefault;
  }
  const obj2 = { ellipsis: { backgroundColor: PRIMARY_400, borderRadius: height, height, width, paddingStart: 4, paddingEnd: 2, marginRight: 0 }, ellipsisDot: size };
  size = { width: dotSize, height: dotSize, backgroundColor: tmp5(576).colors.WHITE };
  return obj2;
});
const __initData = { code: "function StatusTsx1(){const{enableAnimation,withSpring,width,CHANNEL_SPRING_CONFIG,height,onAnimationFinished,borderRadius,translateX}=this.__closure;const shouldAnimate=enableAnimation.get()?'respect-motion-settings':'animate-never';return{width:withSpring(width,CHANNEL_SPRING_CONFIG,shouldAnimate),height:withSpring(height,CHANNEL_SPRING_CONFIG,shouldAnimate,onAnimationFinished),borderRadius:withSpring(borderRadius,CHANNEL_SPRING_CONFIG,shouldAnimate),transform:[{translateX:withSpring(translateX,CHANNEL_SPRING_CONFIG,shouldAnimate)}]};}" };
const __initData2 = { code: "function StatusTsx2(){const{withSpring,statusOpacity,CHANNEL_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(statusOpacity,CHANNEL_SPRING_CONFIG)};}" };
let size = size_mod;
const result = size.fileFinishedImporting("design/void/Status/native/Status.tsx");

export default function Status(isMobileOnline) {
  let items;
  let obj2;
  let status;
  let streaming;
  let style;
  let tmp4Result;
  let tmp6;
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
  const obj = { style: items, children: unpackModuleId(tmp6, obj2) };
  items = [, ];
  const tmp = closure_13();
  items[0] = getStatusContainerStyleDefault(size, flag, flag2);
  items[1] = style;
  obj2 = { style: tmp.statusIcon, source: tmp4Result, resizeMode: "stretch" };
  const tmp3 = hasOwnProperty;
  tmp6 = React3;
  if (streaming) {
    tmp4Result = tmp4(13648);
  } else if (flag2) {
    tmp4Result = tmp4(13649);
  } else if (flag) {
    tmp4Result = tmp4(13650);
  } else if (StatusTypes.IDLE === status) {
    tmp4Result = tmp4(13651);
  } else if (StatusTypes.DND === status) {
    tmp4Result = tmp4(13652);
  } else {
    if (StatusTypes.OFFLINE !== status) {
      if (StatusTypes.INVISIBLE !== status) {
        const ONLINE = tmp7.ONLINE;
        tmp4Result = tmp4(13654);
      }
    }
    tmp4Result = tmp4(13653);
  }
  return unpackModuleId(tmp3, obj);
};
export const StatusWithTyping = function StatusWithTyping(isMobileOnline) {
  let closure_1;
  let items;
  let items1;
  let items2;
  let obj4;
  let obj6;
  let status;
  let streaming;
  let style;
  let tmp22;
  let tmp3Result;
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
  let enableAnimation;
  importDefault = undefined;
  let width;
  let height;
  let closure_4;
  let num;
  let num2;
  const tmp = closure_13();
  const tmp2 = closure_14(size, status);
  const size2 = require("getStatusContainerStyle")(size, flag, flag2);
  const useFlashListAnimationDisabler = enableAnimation(width[18]).useFlashListAnimationDisabler;
  enableAnimation(width[18]);
  if (userId == null) {
    userId = "";
  }
  enableAnimation = height(useFlashListAnimationDisabler(userId), 2)[0];
  importDefault = tmp9;
  const tmp7 = height(useFlashListAnimationDisabler(userId), 2);
  if (typing) {
    width = tmp2.ellipsis.width + 2 * num2;
  } else {
    width = size2.width;
  }
  if (typing) {
    height = tmp2.ellipsis.height + 2 * num2;
  } else {
    height = size2.height;
  }
  const tmp12 = typing ? width / 2 : size2.borderRadius;
  closure_4 = tmp12;
  num = 0;
  if (typing) {
    const tmp5Result = enableAnimation(width[8]);
    num = tmp5Result.getAnimatedTypingTranslateX(size2.width);
  }
  const tmp5Result3 = enableAnimation(width[19]);
  class O {
    constructor() {
      let items;
      let obj2;
      let obj3;
      let obj4;
      let obj6;
      let str = "animate-never";
      if (first.get()) {
        str = "respect-motion-settings";
      }
      size = { width: obj2.withSpring(width, c10, str), height: obj3.withSpring(height, c10, str, closure_1), borderRadius: obj4.withSpring(closure_4, c10, str), transform: items };
      obj2 = spring;
      obj3 = spring;
      obj4 = spring;
      const obj = { translateX: obj6.withSpring(num, c10, str) };
      items = [obj];
      obj6 = spring;
      return size;
    }
  }
  const size1 = { enableAnimation, withSpring: tmp5(tmp4[20]).withSpring, width, CHANNEL_SPRING_CONFIG, height, onAnimationFinished: tmp9, borderRadius: tmp12, translateX: num };
  O.__closure = size1;
  O.__workletHash = 2188820017597;
  O.__initData = __initData;
  num2 = 1;
  const animatedStyle = tmp5Result3.useAnimatedStyle(O);
  const tmp13 = CHANNEL_SPRING_CONFIG;
  if (typing) {
    num2 = 0;
  }
  const fn = function f() {
    let obj2;
    const obj = { opacity: obj2.withSpring(num2, c10) };
    obj2 = spring;
    return obj;
  };
  const tmp5Result4 = enableAnimation(width[19]);
  let obj = { withSpring: tmp5(tmp4[20]).withSpring, statusOpacity: num2, CHANNEL_SPRING_CONFIG: tmp13 };
  fn.__closure = obj;
  fn.__workletHash = 7224613224414;
  fn.__initData = __initData2;
  const animatedStyle1 = tmp5Result4.useAnimatedStyle(fn);
  let obj2 = { style: items, collapsable: false, children: items2 };
  items = [size2, animatedStyle, style];
  const View = tmp3(tmp4[19]).View;
  const tmp16 = closure_12;
  if (typing) {
    let obj3 = { collapsable: false, entering, exiting, style: items1, children: closure_11(require("Ellipsis"), obj4) };
    const rect = { position: "absolute", left: num2, top: num2 };
    items1 = [rect];
    const View2 = tmp3(tmp4[19]).View;
    obj4 = { style: null, dotStyle: null, disableScale: true };
    ({ ellipsis: obj9.style, ellipsisDot: obj9.dotStyle } = tmp2);
    typing = closure_11(View2, obj3);
  }
  items2 = [typing, ];
  const obj5 = { style: animatedStyle1, children: closure_11(tmp22, obj6) };
  obj6 = { style: tmp.statusIcon, source: tmp3Result, resizeMode: "stretch" };
  const View3 = tmp3(tmp4[19]).View;
  tmp22 = closure_4;
  if (streaming) {
    tmp3Result = tmp3(tmp4[10]);
  } else if (flag2) {
    tmp3Result = tmp3(tmp4[11]);
  } else if (flag) {
    tmp3Result = tmp3(tmp4[12]);
  } else if (StatusTypes.IDLE === status) {
    tmp3Result = tmp3(tmp4[13]);
  } else if (StatusTypes.DND === status) {
    tmp3Result = tmp3(tmp4[14]);
  } else {
    if (StatusTypes.OFFLINE !== status) {
      if (StatusTypes.INVISIBLE !== status) {
        const ONLINE = tmp23.ONLINE;
        tmp3Result = tmp3(tmp4[16]);
      }
    }
    tmp3Result = tmp3(tmp4[15]);
  }
  items2[1] = closure_11(View3, obj5);
  return tmp16(View, obj2);
};
