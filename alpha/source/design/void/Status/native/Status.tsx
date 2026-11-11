// Module ID: 16490
// Function ID: 16491
// Name: Status
// Dependencies: [32, 19, 17, 1188, 1072, 15636, 21, 5243, 16488, 575, 16491, 16492, 16493, 16494, 16495, 16496, 16497, 16489, 5957, 16498, 1652, 5876, 16476, 2]
// Exports: StatusWithTyping, default

// Module 16490 (Status)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import StatusConstants from "StatusConstants" /* 1188 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5876 */;
import FastImageDefault from "FastImage" /* 5957 */;
import EllipsisDefault from "Ellipsis" /* 16476 */;
import Status_StatusUtils from "Status/StatusUtils" /* 16488 */;
import getStatusContainerStyleDefault from "getStatusContainerStyle" /* 16489 */;
import useFlashListAnimationDisabler2 from "useFlashListAnimationDisabler" /* 16498 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelAnimationConstants from "ChannelAnimationConstants" /* 15636 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let obj1, str;

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
let closure_14 = { code: "(function StatusTsx1(){let[enableAnimation,withSpring,width,CHANNEL_SPRING_CONFIG,height,onAnimationFinished,borderRadius,translateX]=this.__closure;const shouldAnimate=enableAnimation.get()?'respect-motion-settings':'animate-never';return{width:withSpring(width,CHANNEL_SPRING_CONFIG,shouldAnimate),height:withSpring(height,CHANNEL_SPRING_CONFIG,shouldAnimate,onAnimationFinished),borderRadius:withSpring(borderRadius,CHANNEL_SPRING_CONFIG,shouldAnimate),transform:[{translateX:withSpring(translateX,CHANNEL_SPRING_CONFIG,shouldAnimate)}]};})" };
let closure_15 = { code: "(function StatusTsx2(){let[withSpring,statusOpacity,CHANNEL_SPRING_CONFIG]=this.__closure;return{opacity:withSpring(statusOpacity,CHANNEL_SPRING_CONFIG)};})" };
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
    tmp4Result = tmp4(16491);
  } else if (flag2) {
    tmp4Result = tmp4(16492);
  } else if (flag) {
    tmp4Result = tmp4(16493);
  } else if (StatusTypes.IDLE === status) {
    tmp4Result = tmp4(16494);
  } else if (StatusTypes.DND === status) {
    tmp4Result = tmp4(16495);
  } else {
    if (StatusTypes.OFFLINE !== status) {
      if (StatusTypes.INVISIBLE !== status) {
        const ONLINE = tmp7.ONLINE;
        tmp4Result = tmp4(16497);
      }
    }
    tmp4Result = tmp4(16496);
  }
  return authStore(tmp3, obj);
};
export function StatusWithTyping(isMobileOnline) {
  let height;
  let items4;
  let items5;
  let obj3;
  let obj6;
  let rect;
  let status;
  let streaming;
  let style;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp3Result;
  let tmp3Result2;
  let tmp8;
  let tmp9;
  let typing;
  let userId;
  let width;
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
  const tmp = closure_12();
  const tmp2 = closure_13(size, status);
  const size2 = getStatusContainerStyleDefault(size, flag, flag2);
  const useFlashListAnimationDisabler = useFlashListAnimationDisabler2.useFlashListAnimationDisabler;
  useFlashListAnimationDisabler2;
  if (userId == null) {
    userId = "";
  }
  [tmp8, tmp9] = useFlashListAnimationDisabler(userId);
  _slicedToArray(useFlashListAnimationDisabler(userId), 2);
  if (typing) {
    width = tmp2.ellipsis.width + 2 * STATUS_PADDING;
  } else {
    width = size2.width;
  }
  if (typing) {
    height = tmp2.ellipsis.height + 2 * STATUS_PADDING;
  } else {
    height = size2.height;
  }
  let num = 0;
  const tmp12 = typing ? width / 2 : size2.borderRadius;
  if (typing) {
    const tmp5Result = Status_StatusUtils;
    num = tmp5Result.getAnimatedTypingTranslateX(size2.width);
  }
  let items = [closure_14, tmp8, , , , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[2] = spring_spring.withSpring;
  items[3] = width;
  items[4] = React4;
  items[5] = height;
  items[6] = tmp9;
  items[7] = tmp12;
  items[8] = num;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items;
  class StatusTsx1 {
    constructor() {
      str = "animate-never";
      if (closure_0.get()) {
        str = "respect-motion-settings";
      }
      size = { width: closure_1(closure_2, closure_3, str), height: closure_1(closure_4, closure_3, str, closure_5), borderRadius: closure_1(closure_6, closure_3, str), transform: null };
      obj1 = { translateX: closure_1(closure_7, closure_3, str) };
      items = [];
      items[0] = obj1;
      size.transform = items;
      return size;
    }
  }
  const items1 = [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23];
  StatusTsx1.__closure = items1;
  StatusTsx1.__workletHash = 2666349708804;
  StatusTsx1.__initData = tmp15;
  let num2 = 1;
  const animatedStyle = useAnimatedStyle(StatusTsx1);
  const tmp14 = React4;
  if (typing) {
    num2 = 0;
  }
  const items2 = [closure_15, , , ];
  const useAnimatedStyle2 = _mod1652.useAnimatedStyle;
  _mod1652;
  items2[1] = spring_spring.withSpring;
  items2[2] = num2;
  items2[3] = tmp14;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp26, tmp27, tmp28, tmp29] = items2;
  class StatusTsx2 {
    constructor() {
      obj = { opacity: closure_0(closure_1, closure_2) };
      return obj;
    }
  }
  const items3 = [tmp27, tmp28, tmp29];
  StatusTsx2.__closure = items3;
  StatusTsx2.__workletHash = 15237621584231;
  StatusTsx2.__initData = tmp26;
  const animatedStyle2 = useAnimatedStyle2(StatusTsx2);
  let obj = { style: items4, collapsable: false, children: items5 };
  items4 = [size2, animatedStyle, style];
  View = tmp3(1652).View;
  const tmp31 = unpackModuleId;
  if (typing) {
    const obj2 = { collapsable: false, entering: metroImportDefault, exiting: metroImportAll, style: rect, children: authStore(EllipsisDefault, obj3) };
    rect = { position: "absolute", left: STATUS_PADDING, top: STATUS_PADDING };
    const View2 = tmp3(1652).View;
    obj3 = { style: null, dotStyle: null, disableScale: true };
    ({ ellipsis: obj5.style, ellipsisDot: obj5.dotStyle } = tmp2);
    typing = authStore(View2, obj2);
  }
  items5 = [typing, ];
  const obj4 = { style: animatedStyle2, children: authStore(tmp3Result, obj6) };
  const View3 = tmp3(1652).View;
  obj6 = { style: tmp.statusIcon, source: tmp3Result2, resizeMode: "stretch" };
  tmp3Result = FastImageDefault;
  if (streaming) {
    tmp3Result2 = tmp3(16491);
  } else if (flag2) {
    tmp3Result2 = tmp3(16492);
  } else if (flag) {
    tmp3Result2 = tmp3(16493);
  } else if (StatusTypes.IDLE === status) {
    tmp3Result2 = tmp3(16494);
  } else if (StatusTypes.DND === status) {
    tmp3Result2 = tmp3(16495);
  } else {
    if (StatusTypes.OFFLINE !== status) {
      if (StatusTypes.INVISIBLE !== status) {
        const ONLINE = tmp38.ONLINE;
        tmp3Result2 = tmp3(16497);
      }
    }
    tmp3Result2 = tmp3(16496);
  }
  items5[1] = authStore(View3, obj4);
  return tmp31(View, obj);
}
