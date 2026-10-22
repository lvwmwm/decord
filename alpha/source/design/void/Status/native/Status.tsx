// Module ID: 15347
// Function ID: 15348
// Name: Status
// Dependencies: [32, 19, 17, 1203, 1087, 14248, 21, 4969, 15345, 587, 15348, 15349, 15350, 15351, 15352, 15353, 15354, 558, 576, 15346, 5655, 15355, 5038, 5233, 15333, 2]

// Module 15347 (Status)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import StatusConstants from "StatusConstants" /* 1203 */;
import spring from "spring" /* 5233 */;
import FastImageDefault from "FastImage" /* 5655 */;
import Status_StatusUtils from "Status/StatusUtils" /* 15345 */;
import getStatusContainerStyleDefault from "getStatusContainerStyle" /* 15346 */;
import AssetRegistryDefault from "AssetRegistry" /* 15348 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 15349 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 15350 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 15351 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 15352 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 15353 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 15354 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelAnimationConstants from "ChannelAnimationConstants" /* 14248 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, obj1;

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
let closure_13 = createStyles.createStyles((statusSizeOverride, arg1) => {
  let PRIMARY_400;
  let dotSize;
  let height;
  let tmp5;
  const obj = Status_StatusUtils;
  const statusTypingDimensions = obj.getStatusTypingDimensions(statusSizeOverride);
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
  size = { width: dotSize, height: dotSize, backgroundColor: tmp5(587).colors.WHITE };
  return obj2;
});
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function StatusTsx1(){const{enableAnimation,withSpring,width,CHANNEL_SPRING_CONFIG,height,onAnimationFinished,borderRadius,translateX}=this.__closure;const shouldAnimate=enableAnimation.get()?\"respect-motion-settings\":\"animate-never\";return{width:withSpring(width,CHANNEL_SPRING_CONFIG,shouldAnimate),height:withSpring(height,CHANNEL_SPRING_CONFIG,shouldAnimate,onAnimationFinished),borderRadius:withSpring(borderRadius,CHANNEL_SPRING_CONFIG,shouldAnimate),transform:[{translateX:withSpring(translateX,CHANNEL_SPRING_CONFIG,shouldAnimate)}]};}" };
const __initData2 = { code: "function StatusTsx2(){const{withSpring,statusOpacity,CHANNEL_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(statusOpacity,CHANNEL_SPRING_CONFIG)};}" };
const __initData3 = { code: "function StatusTsx3(){const{enableAnimation,withSpring,width,CHANNEL_SPRING_CONFIG,height,onAnimationFinished,borderRadius,translateX}=this.__closure;const shouldAnimate=enableAnimation.get()?'respect-motion-settings':'animate-never';return{width:withSpring(width,CHANNEL_SPRING_CONFIG,shouldAnimate),height:withSpring(height,CHANNEL_SPRING_CONFIG,shouldAnimate,onAnimationFinished),borderRadius:withSpring(borderRadius,CHANNEL_SPRING_CONFIG,shouldAnimate),transform:[{translateX:withSpring(translateX,CHANNEL_SPRING_CONFIG,shouldAnimate)}]};}" };
const __initData4 = { code: "function StatusTsx4(){const{withSpring,statusOpacity,CHANNEL_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(statusOpacity,CHANNEL_SPRING_CONFIG)};}" };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function Status(arg0) {
  let isMobileOnline;
  let isVROnline;
  let status;
  let streaming;
  let style;
  const obj = react2;
  const cResult = obj.c(18);
  ({ isMobileOnline, isVROnline, style, status, size, streaming } = arg0);
  const tmp6 = closure_12();
  if (cResult[0] === (undefined !== isMobileOnline && isMobileOnline)) {
    if (cResult[1] === (undefined !== isVROnline && isVROnline)) {
      let tmp7;
      if (cResult[2] === size) {
        tmp7 = cResult[3];
      }
      if (cResult[4] === style) {
        let tmp9;
        let tmp14;
        if (cResult[5] === tmp7) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === (undefined !== isMobileOnline && isMobileOnline)) {
          if (cResult[8] === (undefined !== isVROnline && isVROnline)) {
            if (cResult[9] === status) {
              let tmp11;
              if (cResult[10] === (undefined !== streaming && streaming)) {
                tmp11 = cResult[11];
              }
              if (cResult[12] === tmp6.statusIcon) {
                let tmp21;
                if (cResult[13] === tmp11) {
                  tmp21 = cResult[14];
                }
                if (cResult[15] === tmp9) {
                  let tmp25;
                  if (cResult[16] === tmp21) {
                    tmp25 = cResult[17];
                  }
                  return tmp25;
                }
                const obj2 = { style: tmp9, children: tmp21 };
                const tmp28 = authStore(View, obj2);
                cResult[15] = tmp9;
                cResult[16] = tmp21;
                cResult[17] = tmp28;
                tmp25 = tmp28;
              }
              const obj3 = { style: tmp10, source: tmp11, resizeMode: "stretch" };
              const tmp24 = authStore(FastImageDefault, obj3);
              cResult[12] = tmp6.statusIcon;
              cResult[13] = tmp11;
              cResult[14] = tmp24;
              tmp21 = tmp24;
            }
          }
        }
        if (undefined !== streaming && streaming) {
          tmp14 = AssetRegistryDefault;
        } else if (undefined !== isVROnline && isVROnline) {
          tmp14 = AssetRegistryDefault2;
        } else if (undefined !== isMobileOnline && isMobileOnline) {
          tmp14 = AssetRegistryDefault3;
        } else if (StatusTypes.IDLE === status) {
          tmp14 = AssetRegistryDefault4;
        } else if (StatusTypes.DND === status) {
          tmp14 = AssetRegistryDefault5;
        } else {
          if (StatusTypes.OFFLINE !== status) {
            if (StatusTypes.INVISIBLE !== status) {
              const ONLINE = tmp12.ONLINE;
              tmp14 = AssetRegistryDefault7;
            }
          }
          tmp14 = AssetRegistryDefault6;
        }
        cResult[7] = undefined !== isMobileOnline && isMobileOnline;
        cResult[8] = undefined !== isVROnline && isVROnline;
        cResult[9] = status;
        cResult[10] = undefined !== streaming && streaming;
        cResult[11] = tmp14;
        tmp11 = tmp14;
      }
      const items = [tmp7, style];
      cResult[4] = style;
      cResult[5] = tmp7;
      cResult[6] = items;
      tmp9 = items;
    }
  }
  const tmp8 = getStatusContainerStyleDefault(size, undefined !== isMobileOnline && isMobileOnline, undefined !== isVROnline && isVROnline);
  cResult[0] = undefined !== isMobileOnline && isMobileOnline;
  cResult[1] = undefined !== isVROnline && isVROnline;
  cResult[2] = size;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : (function Status(isMobileOnline) {
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
    tmp4Result = tmp4(15348);
  } else if (flag2) {
    tmp4Result = tmp4(15349);
  } else if (flag) {
    tmp4Result = tmp4(15350);
  } else if (StatusTypes.IDLE === status) {
    tmp4Result = tmp4(15351);
  } else if (StatusTypes.DND === status) {
    tmp4Result = tmp4(15352);
  } else {
    if (StatusTypes.OFFLINE !== status) {
      if (StatusTypes.INVISIBLE !== status) {
        const ONLINE = tmp7.ONLINE;
        tmp4Result = tmp4(15354);
      }
    }
    tmp4Result = tmp4(15353);
  }
  return authStore(tmp3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function StatusWithTyping(arg0) {
  let closure_1;
  let enableAnimation;
  let height;
  let isMobileOnline;
  let isVROnline;
  let items;
  let num;
  let obj7;
  let rect;
  let status;
  let streaming;
  let style;
  let typing;
  let userId;
  let width;
  let obj = enableAnimation(width[18]);
  const cResult = obj.c(22);
  ({ isMobileOnline, isVROnline, style, status, size, streaming, typing, userId } = arg0);
  const tmp7 = closure_12();
  const tmp8 = closure_13(size, status);
  const size2 = require("getStatusContainerStyle")(size, tmp4, tmp5);
  const useFlashListAnimationDisabler = enableAnimation(width[21]).useFlashListAnimationDisabler;
  enableAnimation(width[21]);
  if (userId == null) {
    userId = "";
  }
  enableAnimation = height(useFlashListAnimationDisabler(userId), 2)[0];
  importDefault = tmp13;
  const tmp11 = height(useFlashListAnimationDisabler(userId), 2);
  if (typing) {
    width = tmp8.ellipsis.width + 2 * num;
  } else {
    width = size2.width;
  }
  if (typing) {
    height = tmp8.ellipsis.height + 2 * num;
  } else {
    height = size2.height;
  }
  const tmp16 = typing ? width / 2 : size2.borderRadius;
  let closure_4 = tmp16;
  num = 0;
  if (typing) {
    const tmpResult4 = enableAnimation(width[8]);
    num = tmpResult4.getAnimatedTypingTranslateX(size2.width);
  }
  const fn = function o() {
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
  const tmpResult5 = enableAnimation(width[22]);
  const size1 = { enableAnimation, withSpring: tmp(tmp2[23]).withSpring, width, CHANNEL_SPRING_CONFIG, height, onAnimationFinished: tmp13, borderRadius: tmp16, translateX: num };
  fn.__closure = size1;
  fn.__workletHash = 2297404611197;
  fn.__initData = __initData;
  const animatedStyle = tmpResult5.useAnimatedStyle(fn);
  let num2 = 1;
  const tmp17 = CHANNEL_SPRING_CONFIG;
  if (typing) {
    num2 = 0;
  }
  const fn2 = function l() {
    let obj2;
    const obj = { opacity: obj2.withSpring(num2, c9) };
    obj2 = spring;
    return obj;
  };
  const tmpResult6 = enableAnimation(width[22]);
  let obj2 = { withSpring: tmp(tmp2[23]).withSpring, statusOpacity: num2, CHANNEL_SPRING_CONFIG: tmp17 };
  fn2.__closure = obj2;
  fn2.__workletHash = 7224613224414;
  fn2.__initData = __initData2;
  const animatedStyle1 = tmpResult6.useAnimatedStyle(fn2);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === size2) {
      let tmp20;
      if (cResult[2] === style) {
        tmp20 = cResult[3];
      }
      if (cResult[4] === typing) {
        let tmp21;
        let tmp9Result;
        if (cResult[5] === tmp8) {
          tmp21 = cResult[6];
        }
        if (cResult[7] === (undefined !== isMobileOnline && isMobileOnline)) {
          if (cResult[8] === (undefined !== isVROnline && isVROnline)) {
            if (cResult[9] === status) {
              let tmp28;
              if (cResult[10] === (undefined !== streaming && streaming)) {
                tmp28 = cResult[11];
              }
              if (cResult[12] === tmp7.statusIcon) {
                let tmp31;
                if (cResult[13] === tmp28) {
                  tmp31 = cResult[14];
                }
                if (cResult[15] === animatedStyle1) {
                  let tmp34;
                  if (cResult[16] === tmp31) {
                    tmp34 = cResult[17];
                  }
                  if (cResult[18] === tmp20) {
                    if (cResult[19] === tmp21) {
                      let tmp37;
                      if (cResult[20] === tmp34) {
                        tmp37 = cResult[21];
                      }
                      return tmp37;
                    }
                  }
                  let obj3 = { style: tmp20, collapsable: false, children: items };
                  items = [tmp21, tmp34];
                  const tmp39 = closure_11(require("ReanimatedRexport").View, obj3);
                  cResult[18] = tmp20;
                  cResult[19] = tmp21;
                  cResult[20] = tmp34;
                  cResult[21] = tmp39;
                  tmp37 = tmp39;
                }
                let obj4 = { style: animatedStyle1, children: tmp31 };
                const tmp36 = closure_10(require("ReanimatedRexport").View, obj4);
                cResult[15] = animatedStyle1;
                cResult[16] = tmp31;
                cResult[17] = tmp36;
                tmp34 = tmp36;
              }
              const obj5 = { style: tmp27, source: tmp28, resizeMode: "stretch" };
              const tmp33 = closure_10(require("FastImage"), obj5);
              cResult[12] = tmp7.statusIcon;
              cResult[13] = tmp28;
              cResult[14] = tmp33;
              tmp31 = tmp33;
            }
          }
        }
        if (undefined !== streaming && streaming) {
          tmp9Result = tmp9(tmp2[10]);
        } else if (undefined !== isVROnline && isVROnline) {
          tmp9Result = tmp9(tmp2[11]);
        } else if (undefined !== isMobileOnline && isMobileOnline) {
          tmp9Result = tmp9(tmp2[12]);
        } else if (num2.IDLE === status) {
          tmp9Result = tmp9(tmp2[13]);
        } else if (num2.DND === status) {
          tmp9Result = tmp9(tmp2[14]);
        } else {
          if (num2.OFFLINE !== status) {
            if (num2.INVISIBLE !== status) {
              const ONLINE = tmp29.ONLINE;
              tmp9Result = tmp9(tmp2[16]);
            }
          }
          tmp9Result = tmp9(tmp2[15]);
        }
        cResult[7] = undefined !== isMobileOnline && isMobileOnline;
        cResult[8] = undefined !== isVROnline && isVROnline;
        cResult[9] = status;
        cResult[10] = undefined !== streaming && streaming;
        cResult[11] = tmp9Result;
        tmp28 = tmp9Result;
      }
      let tmp22 = typing;
      if (tmp22) {
        let obj6 = { collapsable: false, entering, exiting, style: rect, children: closure_10(require("Ellipsis"), obj7) };
        rect = { position: "absolute", left: num, top: num };
        View = tmp9(tmp2[22]).View;
        obj7 = { style: null, dotStyle: null, disableScale: true };
        ({ ellipsis: obj9.style, ellipsisDot: obj9.dotStyle } = tmp8);
        tmp22 = closure_10(View, obj6);
      }
      cResult[4] = typing;
      cResult[5] = tmp8;
      cResult[6] = tmp22;
      tmp21 = tmp22;
    }
  }
  const items1 = [size2, animatedStyle, style];
  cResult[0] = animatedStyle;
  cResult[1] = size2;
  cResult[2] = style;
  cResult[3] = items1;
  tmp20 = items1;
}) : (function StatusWithTyping(isMobileOnline) {
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
  const useFlashListAnimationDisabler = enableAnimation(width[21]).useFlashListAnimationDisabler;
  enableAnimation(width[21]);
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
  const tmp5Result3 = enableAnimation(width[22]);
  class O {
    constructor() {
      str = "animate-never";
      if (closure_0.get()) {
        str = "respect-motion-settings";
      }
      size = { width: null, height: null, borderRadius: null, transform: null };
      obj2 = closure_0(closure_2[23]);
      size.width = obj2.withSpring(width, CHANNEL_SPRING_CONFIG, str);
      obj3 = closure_0(closure_2[23]);
      size.height = obj3.withSpring(height, CHANNEL_SPRING_CONFIG, str, closure_1);
      obj4 = closure_0(closure_2[23]);
      size.borderRadius = obj4.withSpring(borderRadius, CHANNEL_SPRING_CONFIG, str);
      obj1 = { translateX: null };
      obj6 = closure_0(closure_2[23]);
      obj1.translateX = obj6.withSpring(closure_5, CHANNEL_SPRING_CONFIG, str);
      items = [];
      items[0] = obj1;
      size.transform = items;
      return size;
    }
  }
  const size1 = { enableAnimation, withSpring: tmp5(tmp4[23]).withSpring, width, CHANNEL_SPRING_CONFIG, height, onAnimationFinished: tmp9, borderRadius: tmp12, translateX: num };
  O.__closure = size1;
  O.__workletHash = 3069006846527;
  O.__initData = __initData3;
  num2 = 1;
  const animatedStyle = tmp5Result3.useAnimatedStyle(O);
  const tmp13 = CHANNEL_SPRING_CONFIG;
  if (typing) {
    num2 = 0;
  }
  const tmp5Result4 = enableAnimation(width[22]);
  class E {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[23]);
      obj.opacity = obj2.withSpring(c6, CHANNEL_SPRING_CONFIG);
      return obj;
    }
  }
  let obj = { withSpring: tmp5(tmp4[23]).withSpring, statusOpacity: num2, CHANNEL_SPRING_CONFIG: tmp13 };
  E.__closure = obj;
  E.__workletHash = 9624745330520;
  E.__initData = __initData4;
  const animatedStyle1 = tmp5Result4.useAnimatedStyle(E);
  let obj2 = { style: items, collapsable: false, children: items1 };
  items = [size2, animatedStyle, style];
  View = tmp3(tmp4[22]).View;
  const tmp16 = closure_11;
  if (typing) {
    let obj3 = { collapsable: false, entering, exiting, style: rect, children: closure_10(require("Ellipsis"), obj4) };
    rect = { position: "absolute", left: num, top: num };
    const View2 = tmp3(tmp4[22]).View;
    obj4 = { style: null, dotStyle: null, disableScale: true };
    ({ ellipsis: obj9.style, ellipsisDot: obj9.dotStyle } = tmp2);
    typing = closure_10(View2, obj3);
  }
  items1 = [typing, ];
  const obj5 = { style: animatedStyle1, children: closure_10(tmp3Result, obj6) };
  const View3 = tmp3(tmp4[22]).View;
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
});
let size = size_mod;
const result = size.fileFinishedImporting("design/void/Status/native/Status.tsx");

export default tmp5;
export const StatusWithTyping = tmp6;
