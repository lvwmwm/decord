// Module ID: 15944
// Function ID: 15945
// Name: Status
// Dependencies: [32, 19, 17, 1189, 1072, 14843, 21, 5009, 15942, 575, 15945, 15946, 15947, 15948, 15949, 15950, 15951, 15943, 5712, 15952, 5090, 5632, 15930, 2]
// Exports: StatusWithTyping, default

// Module 15944 (Status)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import StatusConstants from "StatusConstants" /* 1189 */;
import spring from "spring" /* 5632 */;
import FastImageDefault from "FastImage" /* 5712 */;
import Status_StatusUtils from "Status/StatusUtils" /* 15942 */;
import getStatusContainerStyleDefault from "getStatusContainerStyle" /* 15943 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelAnimationConstants from "ChannelAnimationConstants" /* 14843 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
let View = react_native.View;
const STATUS_PADDING = StatusConstants.STATUS_PADDING;
const StatusTypes = Constants.StatusTypes;
({ TYPING_ENTERING: metroImportDefault, TYPING_EXITING: metroImportAll, CHANNEL_SPRING_CONFIG: c9 } = ChannelAnimationConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let closure_12 = createStyles.createStyles({ statusIcon: { width: "100%", height: "100%" } });
createStyles = createStyles_mod;
let closure_13 = createStyles.createStyles((arg0, arg1) => {
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
  size = { width: dotSize, height: dotSize, backgroundColor: tmp5(575).colors.WHITE };
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
  const obj = { style: items, children: authStore(tmp6, obj2) };
  items = [, ];
  const tmp = closure_12();
  items[0] = getStatusContainerStyleDefault(size, flag, flag2);
  items[1] = style;
  obj2 = { style: tmp.statusIcon, source: tmp4Result, resizeMode: "stretch" };
  const tmp3 = View;
  tmp6 = FastImageDefault;
  if (streaming) {
    tmp4Result = tmp4(15945);
  } else if (flag2) {
    tmp4Result = tmp4(15946);
  } else if (flag) {
    tmp4Result = tmp4(15947);
  } else if (StatusTypes.IDLE === status) {
    tmp4Result = tmp4(15948);
  } else if (StatusTypes.DND === status) {
    tmp4Result = tmp4(15949);
  } else {
    if (StatusTypes.OFFLINE !== status) {
      if (StatusTypes.INVISIBLE !== status) {
        const ONLINE = tmp7.ONLINE;
        tmp4Result = tmp4(15951);
      }
    }
    tmp4Result = tmp4(15950);
  }
  return authStore(tmp3, obj);
};
export function StatusWithTyping(isMobileOnline) {
  let closure_1;
  let items;
  let items1;
  let obj4;
  let obj6;
  let rect;
  let status;
  let streaming;
  let style;
  let tmp3Result;
  let tmp3Result2;
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
  const tmp = closure_12();
  const tmp2 = closure_13(size, status);
  const size2 = require("getStatusContainerStyle")(size, flag, flag2);
  const useFlashListAnimationDisabler = enableAnimation(width[19]).useFlashListAnimationDisabler;
  enableAnimation(width[19]);
  if (userId == null) {
    userId = "";
  }
  enableAnimation = height(useFlashListAnimationDisabler(userId), 2)[0];
  importDefault = tmp9;
  const tmp7 = height(useFlashListAnimationDisabler(userId), 2);
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
  const tmp12 = typing ? width / 2 : size2.borderRadius;
  closure_4 = tmp12;
  num = 0;
  if (typing) {
    const tmp5Result = enableAnimation(width[8]);
    num = tmp5Result.getAnimatedTypingTranslateX(size2.width);
  }
  const fn = function y() {
    let items;
    let obj2;
    let obj3;
    let obj4;
    let obj6;
    let str = "animate-never";
    if (first.get()) {
      str = "respect-motion-settings";
    }
    size = { width: obj2.withSpring(width, c9, str), height: obj3.withSpring(height, c9, str, closure_1), borderRadius: obj4.withSpring(closure_4, c9, str), transform: items };
    obj2 = spring;
    obj3 = spring;
    obj4 = spring;
    const obj = { translateX: obj6.withSpring(num, c9, str) };
    items = [obj];
    obj6 = spring;
    return size;
  };
  const tmp5Result3 = enableAnimation(width[20]);
  const size1 = { enableAnimation, withSpring: tmp5(tmp4[21]).withSpring, width, CHANNEL_SPRING_CONFIG, height, onAnimationFinished: tmp9, borderRadius: tmp12, translateX: num };
  fn.__closure = size1;
  fn.__workletHash = 2188820017597;
  fn.__initData = __initData;
  num2 = 1;
  const animatedStyle = tmp5Result3.useAnimatedStyle(fn);
  const tmp13 = CHANNEL_SPRING_CONFIG;
  if (typing) {
    num2 = 0;
  }
  const tmp5Result4 = enableAnimation(width[20]);
  class O {
    constructor() {
      let obj2;
      const obj = { opacity: obj2.withSpring(num2, c9) };
      obj2 = spring;
      return obj;
    }
  }
  let obj = { withSpring: tmp5(tmp4[21]).withSpring, statusOpacity: num2, CHANNEL_SPRING_CONFIG: tmp13 };
  O.__closure = obj;
  O.__workletHash = 7224613224414;
  O.__initData = __initData2;
  const animatedStyle1 = tmp5Result4.useAnimatedStyle(O);
  let obj2 = { style: items, collapsable: false, children: items1 };
  items = [size2, animatedStyle, style];
  View = tmp3(tmp4[20]).View;
  const tmp16 = closure_11;
  if (typing) {
    let obj3 = { collapsable: false, entering, exiting, style: rect, children: closure_10(require("Ellipsis"), obj4) };
    rect = { position: "absolute", left: num, top: num };
    const View2 = tmp3(tmp4[20]).View;
    obj4 = { style: null, dotStyle: null, disableScale: true };
    ({ ellipsis: obj9.style, ellipsisDot: obj9.dotStyle } = tmp2);
    typing = closure_10(View2, obj3);
  }
  items1 = [typing, ];
  const obj5 = { style: animatedStyle1, children: closure_10(tmp3Result, obj6) };
  const View3 = tmp3(tmp4[20]).View;
  obj6 = { style: tmp.statusIcon, source: tmp3Result2, resizeMode: "stretch" };
  tmp3Result = require("FastImage");
  if (streaming) {
    tmp3Result2 = tmp3(tmp4[10]);
  } else if (flag2) {
    tmp3Result2 = tmp3(tmp4[11]);
  } else if (flag) {
    tmp3Result2 = tmp3(tmp4[12]);
  } else if (num2.IDLE === status) {
    tmp3Result2 = tmp3(tmp4[13]);
  } else if (num2.DND === status) {
    tmp3Result2 = tmp3(tmp4[14]);
  } else {
    if (num2.OFFLINE !== status) {
      if (num2.INVISIBLE !== status) {
        const ONLINE = tmp23.ONLINE;
        tmp3Result2 = tmp3(tmp4[16]);
      }
    }
    tmp3Result2 = tmp3(tmp4[15]);
  }
  items1[1] = closure_10(View3, obj5);
  return tmp16(View, obj2);
}
