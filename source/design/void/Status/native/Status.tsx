// Module ID: 12896
// Function ID: 98443
// Name: getStatusSource
// Dependencies: []
// Exports: StatusWithTyping, default

// Module 12896 (getStatusSource)
function getStatusSource(status, streaming, flag, flag2) {
  if (streaming) {
    return importDefault(dependencyMap[10]);
  } else if (flag2) {
    return importDefault(dependencyMap[11]);
  } else if (flag) {
    return importDefault(dependencyMap[12]);
  } else if (StatusTypes.IDLE === status) {
    return importDefault(dependencyMap[13]);
  } else if (StatusTypes.DND === status) {
    return importDefault(dependencyMap[14]);
  } else {
    if (StatusTypes.OFFLINE !== status) {
      if (StatusTypes.INVISIBLE !== status) {
        const ONLINE = StatusTypes.ONLINE;
        return importDefault(dependencyMap[16]);
      }
    }
    return importDefault(dependencyMap[15]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[2]));
const STATUS_PADDING = arg1(dependencyMap[3]).STATUS_PADDING;
const StatusTypes = arg1(dependencyMap[4]).StatusTypes;
const tmp3 = arg1(dependencyMap[2]);
({ TYPING_ENTERING: closure_8, TYPING_EXITING: closure_9, CHANNEL_SPRING_CONFIG: closure_10 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[5]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[6]));
const tmp5 = arg1(dependencyMap[6]);
let closure_13 = arg1(dependencyMap[7]).createStyles({ statusIcon: {} });
const obj = arg1(dependencyMap[7]);
let closure_14 = arg1(dependencyMap[7]).createStyles((arg0, arg1) => {
  let dotSize;
  let height;
  let obj = arg1(dependencyMap[8]);
  const statusTypingDimensions = obj.getStatusTypingDimensions(arg0);
  ({ height, dotSize } = statusTypingDimensions);
  obj = {};
  obj = {};
  if (StatusTypes.ONLINE === arg1) {
    let PRIMARY_400 = importDefault(dependencyMap[9]).unsafe_rawColors.GREEN_360;
  } else if (StatusTypes.IDLE === arg1) {
    PRIMARY_400 = importDefault(dependencyMap[9]).unsafe_rawColors.YELLOW_300;
  } else if (StatusTypes.DND === arg1) {
    PRIMARY_400 = importDefault(dependencyMap[9]).unsafe_rawColors.RED_400;
  } else if (StatusTypes.STREAMING === arg1) {
    PRIMARY_400 = importDefault(dependencyMap[9]).unsafe_rawColors.PLATFORM_TWITCH;
  } else {
    if (StatusTypes.INVISIBLE !== arg1) {
      if (StatusTypes.UNKNOWN !== arg1) {
        const OFFLINE = StatusTypes.OFFLINE;
      }
    }
    PRIMARY_400 = importDefault(dependencyMap[9]).unsafe_rawColors.PRIMARY_400;
  }
  obj.backgroundColor = PRIMARY_400;
  obj.borderRadius = height;
  obj.height = height;
  obj.width = statusTypingDimensions.width;
  obj.paddingStart = 4;
  obj.paddingEnd = 2;
  obj.marginRight = 0;
  obj.ellipsis = obj;
  obj.ellipsisDot = { width: dotSize, height: dotSize, backgroundColor: importDefault(dependencyMap[9]).colors.WHITE };
  return obj;
});
let closure_15 = { code: "function StatusTsx1(){const{enableAnimation,withSpring,width,CHANNEL_SPRING_CONFIG,height,onAnimationFinished,borderRadius,translateX}=this.__closure;const shouldAnimate=enableAnimation.get()?'respect-motion-settings':'animate-never';return{width:withSpring(width,CHANNEL_SPRING_CONFIG,shouldAnimate),height:withSpring(height,CHANNEL_SPRING_CONFIG,shouldAnimate,onAnimationFinished),borderRadius:withSpring(borderRadius,CHANNEL_SPRING_CONFIG,shouldAnimate),transform:[{translateX:withSpring(translateX,CHANNEL_SPRING_CONFIG,shouldAnimate)}]};}" };
let closure_16 = { code: "function StatusTsx2(){const{withSpring,statusOpacity,CHANNEL_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(statusOpacity,CHANNEL_SPRING_CONFIG)};}" };
const obj2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("design/void/Status/native/Status.tsx");

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
  const items = [importDefault(dependencyMap[17])(size, flag, flag2), style];
  obj.style = items;
  obj = { style: callback3().statusIcon, source: getStatusSource(status, streaming, flag, flag2), resizeMode: "stretch" };
  obj.children = callback2(closure_4, obj);
  return callback2(closure_5, obj);
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
  let arg1;
  let importDefault;
  let dependencyMap;
  let callback;
  let tmp8;
  let num2;
  let STATUS_PADDING;
  const tmp2 = callback4(size, status);
  const size2 = importDefault(dependencyMap[17])(size, flag, flag2);
  let obj = arg1(dependencyMap[18]);
  let str = "";
  if (null != userId) {
    str = userId;
  }
  const tmp3 = callback(obj.useFlashListAnimationDisabler(str), 2);
  const first = tmp3[0];
  arg1 = first;
  let num = 1;
  importDefault = tmp5;
  if (typing) {
    let width = tmp2.ellipsis.width + 2 * STATUS_PADDING;
  } else {
    width = size2.width;
  }
  dependencyMap = width;
  if (typing) {
    let height = tmp2.ellipsis.height + 2 * STATUS_PADDING;
  } else {
    height = size2.height;
  }
  callback = height;
  tmp8 = typing ? width / 2 : size2.borderRadius;
  num2 = 0;
  if (typing) {
    let obj1 = arg1(dependencyMap[8]);
    num2 = obj1.getAnimatedTypingTranslateX(size2.width);
  }
  let obj2 = arg1(dependencyMap[19]);
  class O {
    constructor() {
      str = "animate-never";
      if (closure_0.get()) {
        str = "respect-motion-settings";
      }
      obj = {};
      obj2 = closure_0(width[20]);
      obj.width = obj2.withSpring(width, closure_10, str);
      obj3 = closure_0(width[20]);
      obj.height = obj3.withSpring(height, closure_10, str, closure_1);
      obj4 = closure_0(width[20]);
      obj.borderRadius = obj4.withSpring(borderRadius, closure_10, str);
      obj = {};
      obj6 = closure_0(width[20]);
      obj.translateX = obj6.withSpring(closure_5, closure_10, str);
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  obj = { enableAnimation: first, withSpring: arg1(dependencyMap[20]).withSpring, width, CHANNEL_SPRING_CONFIG: closure_10, height, onAnimationFinished: tmp3[1], borderRadius: tmp8, translateX: num2 };
  O.__closure = obj;
  O.__workletHash = 2188820017597;
  O.__initData = closure_15;
  const animatedStyle = obj2.useAnimatedStyle(O);
  if (typing) {
    num = 0;
  }
  STATUS_PADDING = num;
  let obj4 = arg1(dependencyMap[19]);
  const fn = function f() {
    const obj = { opacity: first(width[20]).withSpring(num, closure_10) };
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[20]).withSpring, statusOpacity: num, CHANNEL_SPRING_CONFIG: closure_10 };
  fn.__closure = obj;
  fn.__workletHash = 7224613224414;
  fn.__initData = closure_16;
  const animatedStyle1 = obj4.useAnimatedStyle(fn);
  obj1 = { style: items, collapsable: false };
  const items = [size2, animatedStyle, style];
  if (typing) {
    obj2 = { collapsable: false, entering: closure_8, exiting: closure_9 };
    const obj3 = { position: "absolute", left: STATUS_PADDING, top: STATUS_PADDING };
    const items1 = [obj3];
    obj2.style = items1;
    obj4 = {};
    ({ ellipsis: obj10.style, ellipsisDot: obj10.dotStyle } = tmp2);
    obj4.disableScale = true;
    obj2.children = callback2(importDefault(dependencyMap[21]), obj4);
    typing = callback2(importDefault(dependencyMap[19]).View, obj2);
  }
  const items2 = [typing, ];
  const obj5 = { style: animatedStyle1 };
  const obj6 = { style: callback3().statusIcon, source: getStatusSource(status, streaming, flag, flag2), resizeMode: "stretch" };
  obj5.children = callback2(tmp8, obj6);
  items2[1] = callback2(importDefault(dependencyMap[19]).View, obj5);
  obj1.children = items2;
  return closure_12(importDefault(dependencyMap[19]).View, obj1);
};
