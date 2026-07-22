// Module ID: 11939
// Function ID: 92330
// Name: StaticNativeCutoutAvatarImage
// Dependencies: []

// Module 11939 (StaticNativeCutoutAvatarImage)
function StaticNativeCutoutAvatarImage(cutout) {
  let source;
  let style;
  cutout = cutout.cutout;
  const arg1 = cutout;
  const items = [cutout];
  ({ source, style } = cutout);
  const memo = importAllResult.useMemo(() => {
    const items = [cutout];
    return items;
  }, items);
  let obj = { style, cutouts: memo };
  const tmp2 = importDefault(dependencyMap[7])(source);
  obj = { style: obj.image, source: tmp2, usesSmallCache: true };
  obj.children = callback(importDefault(dependencyMap[9]), obj);
  return callback(importDefault(dependencyMap[8]), obj);
}
function AnimatedNativeCutoutAvatarImage(cutout) {
  let source;
  let style;
  cutout = cutout.cutout;
  const arg1 = cutout;
  ({ source, style } = cutout);
  let obj = arg1(dependencyMap[10]);
  const fn = function o() {
    let obj = {};
    if (cutout.shape === cutout(closure_2[8]).CutoutShape.RoundedRect) {
      obj = { shape: cutout(closure_2[8]).CutoutShape.RoundedRect, x: cutout(closure_2[11]).withSpring(cutout.x, closure_6) };
      const obj3 = cutout(closure_2[11]);
      obj.y = cutout(closure_2[11]).withSpring(cutout.y, closure_6);
      const obj4 = cutout(closure_2[11]);
      obj.width = cutout(closure_2[11]).withSpring(cutout.width, closure_6);
      const obj5 = cutout(closure_2[11]);
      obj.height = cutout(closure_2[11]).withSpring(cutout.height, closure_6);
      const obj6 = cutout(closure_2[11]);
      obj.cornerRadius = cutout(closure_2[11]).withSpring(cutout.cornerRadius, closure_6);
      const obj7 = cutout(closure_2[11]);
    } else {
      obj = { shape: cutout(closure_2[8]).CutoutShape.Circle, x: cutout(closure_2[11]).withSpring(cutout.x, closure_6) };
      const obj9 = cutout(closure_2[11]);
      obj.y = cutout(closure_2[11]).withSpring(cutout.y, closure_6);
      const obj10 = cutout(closure_2[11]);
      obj.size = cutout(closure_2[11]).withSpring(cutout.size, closure_6);
      const obj11 = cutout(closure_2[11]);
    }
    const items = [obj];
    obj.cutouts = items;
    return obj;
  };
  obj = { cutout, CutoutShape: arg1(dependencyMap[8]).CutoutShape, withSpring: arg1(dependencyMap[11]).withSpring, CHANNEL_SPRING_CONFIG };
  fn.__closure = obj;
  fn.__workletHash = 12529564164821;
  fn.__initData = closure_14;
  const animatedProps = obj.useAnimatedProps(fn);
  obj = { style, animatedProps };
  const tmp2 = importDefault(dependencyMap[7])(source);
  obj.children = callback(importDefault(dependencyMap[9]), { style: obj.image, source: importDefault(dependencyMap[7])(source), usesSmallCache: true });
  return callback(arg1(dependencyMap[8]).ClipViewAnimated, obj);
}
function NativeCutoutAvatarImage(animate) {
  if (true === animate.animate) {
    let obj = {};
    const merged = Object.assign(animate);
    let tmp6 = callback(AnimatedNativeCutoutAvatarImage, obj);
  } else {
    obj = {};
    const merged1 = Object.assign(animate);
    tmp6 = callback(StaticNativeCutoutAvatarImage, obj);
  }
  return tmp6;
}
function CutoutAvatarImage(arg0) {
  let cutout;
  let size;
  let source;
  let style;
  ({ cutout, size, source, style } = arg0);
  let color = size / 2;
  const radius = cutout.radius;
  let tmp = color;
  if (null != radius) {
    tmp = radius;
  }
  const inset = cutout.inset;
  let num = 0;
  if (null != inset) {
    num = inset;
  }
  let CIRCULAR = cutout.imageType;
  if (null == CIRCULAR) {
    CIRCULAR = obj21.CIRCULAR;
  }
  let diff = size - num;
  let diff1 = size;
  if (CIRCULAR === obj21.CIRCULAR) {
    diff1 = color;
  }
  const direction = cutout.direction;
  if (obj20.BOTTOM_RIGHT === direction) {
    diff = size - tmp - num;
    diff1 = size - tmp - num;
  } else if (obj20.BOTTOM_LEFT === direction) {
    diff = tmp + num;
    diff1 = size - tmp - num;
  }
  let obj = arg1(dependencyMap[12]);
  const v4Result = obj.v4();
  const tintColor = closure_4.flatten(style).tintColor;
  if (null != source) {
    if (null != tintColor) {
      obj = {};
      const _HermesInternal = HermesInternal;
      obj.mask = "url(#" + v4Result + ")";
      obj = {};
      const obj1 = { tintColor };
      obj.style = obj1;
      obj.source = importDefault(dependencyMap[7])(source);
      obj.usesSmallCache = true;
      obj.children = callback(importDefault(dependencyMap[9]), obj);
      let tmp7 = callback(arg1(dependencyMap[13]).ForeignObject, obj);
      const tmp14 = importDefault(dependencyMap[9]);
    }
    const obj2 = { style };
    let str3 = 13;
    const obj3 = {};
    const obj4 = {};
    const obj5 = { width: size, height: size, id: v4Result };
    if (CIRCULAR === obj21.CIRCULAR) {
      const obj6 = { cx: color, cy: color, r: color, fill: "white" };
      let tmp28 = callback(arg1(dependencyMap[str3]).Circle, obj6);
    } else {
      const obj7 = { WIDGET_ENABLED: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001019495844867, QUESTS_GET_DECISIONS: 943320058702266800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, display: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050927898995, useFramePreviewOverrideStore: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002407807426044999, EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED: -28383587716453180000000000000000000000000000000000000000000000000, height: size, width: size };
      tmp28 = callback(arg1(dependencyMap[str3]).Rect, obj7);
    }
    const items = [tmp28, ];
    const obj8 = { cx: diff, cy: diff1, r: tmp, fill: "black" };
    items[1] = callback(arg1(dependencyMap[str3]).Circle, obj8);
    obj5.children = items;
    obj4.children = closure_8(arg1(dependencyMap[13]).Mask, obj5);
    const items1 = [callback(arg1(dependencyMap[13]).Defs, obj4), tmp7, ];
    if (null == cutout.border) {
      items1[2] = null;
      obj3.children = items1;
      obj2.children = tmp17(tmp20, obj3);
      return tmp15(tmp16, obj2);
    } else if (CIRCULAR === obj21.CIRCULAR) {
      const obj9 = { cx: color, cy: color, r: color, fill: "none" };
      const _HermesInternal2 = HermesInternal;
      str3 = "url(#";
      obj9.mask = "url(#" + v4Result + ")";
      color = cutout.border.color;
      obj9.stroke = color;
      cutout = cutout.border.width;
      obj9.strokeWidth = cutout;
      let tmp41 = callback(arg1(dependencyMap[str3]).Circle, obj9);
    } else {
      const obj10 = { WIDGET_ENABLED: true, QUESTS_GET_DECISIONS: true, display: true, useFramePreviewOverrideStore: true, EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED: true, height: size, width: size };
      const _HermesInternal3 = HermesInternal;
      obj10.mask = "url(#" + v4Result + ")";
      obj10.stroke = cutout.border.color;
      obj10.strokeWidth = cutout.border.width;
      tmp41 = callback(arg1(dependencyMap[`url(#`]).Rect, obj10);
    }
    const tmp15 = callback;
    const tmp16 = closure_5;
    const tmp17 = closure_8;
    const tmp20 = importDefault(dependencyMap[13]);
    const tmp21 = callback;
    const tmp23 = closure_8;
  }
  const obj11 = { href: importDefault(dependencyMap[7])(source), mask: "url(#" + v4Result + ")" };
  tmp7 = callback(arg1(dependencyMap[13]).Image, obj11);
}
const importAllResult = importAll(dependencyMap[0]);
({ StyleSheet: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const CHANNEL_SPRING_CONFIG = arg1(dependencyMap[2]).CHANNEL_SPRING_CONFIG;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let importDefaultResult = importDefault(dependencyMap[4]);
importDefaultResult = new importDefaultResult("UIKit - AvatarImage");
let obj = { XXSMALL: "xxsmall", XSMALL: "xsmall", SMALL: "small", NORMAL: "normal", LARGE: "large", XLARGE: "xlarge", XLARGE_72: "xlarge72", XXLARGE: "xxlarge", PROFILE: "profile", REFRESH_MEDIUM_32: "refreshMedium32", XXSMALL_10: "xsmall10", XSMALL_20: "xsmall20", SIZE_16: "size16", LARGE_48: "large48", EDIT_AVATAR_DECORATION: "editAvatarDecoration", GIFT_START: "giftStart", GIFT_SUCCESS: "giftSuccess", YOUBAR_60: "youBar60", TABS_22: "tabs22" };
const frozen = Object.freeze({ [obj.XXSMALL_10]: 10, [obj.SIZE_16]: 16, [obj.XXSMALL]: 18, [obj.XSMALL_20]: 20, [obj.XSMALL]: 24, [obj.SMALL]: 30, [obj.NORMAL]: 40, [obj.LARGE_48]: 48, [obj.LARGE]: 50, [obj.XLARGE]: 64, [obj.XLARGE_72]: 72, [obj.XXLARGE]: 80, [obj.PROFILE]: 128, [obj.EDIT_AVATAR_DECORATION]: 144, [obj.GIFT_START]: 184, [obj.GIFT_SUCCESS]: 236, [obj.REFRESH_MEDIUM_32]: 32, [obj.YOUBAR_60]: 60, [obj.TABS_22]: 22 });
obj = { image: {}, xxsmall: obj1, xsmall10: obj2, xsmall20: obj3, xsmall: obj4, small: obj5, normal: obj6, large: obj7, xlarge: obj8, xlarge72: obj9, xxlarge: obj10, refreshMedium32: obj11, profile: obj12, size16: obj13, large48: obj14, editAvatarDecoration: obj15, giftStart: obj16, giftSuccess: obj17, youBar60: obj18, tabs22: obj19 };
const obj20 = { RIGHT: 0, [0]: "RIGHT", BOTTOM_RIGHT: 1, [1]: "BOTTOM_RIGHT", BOTTOM_LEFT: 2, [2]: "BOTTOM_LEFT" };
const obj21 = { RECTANGULAR: 0, [0]: "RECTANGULAR", CIRCULAR: 1, [1]: "CIRCULAR" };
let closure_14 = { code: "function CutoutableAvatarImageTsx1(){const{cutout,CutoutShape,withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;const animatedCutout=cutout.shape===CutoutShape.RoundedRect?{shape:CutoutShape.RoundedRect,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),width:withSpring(cutout.width,CHANNEL_SPRING_CONFIG),height:withSpring(cutout.height,CHANNEL_SPRING_CONFIG),cornerRadius:withSpring(cutout.cornerRadius,CHANNEL_SPRING_CONFIG)}:{shape:CutoutShape.Circle,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),size:withSpring(cutout.size,CHANNEL_SPRING_CONFIG)};return{cutouts:[animatedCutout]};}" };
const obj1 = { width: frozen[obj.XXSMALL], height: frozen[obj.XXSMALL], borderRadius: frozen[obj.XXSMALL] / 2 };
const obj10 = { width: frozen[obj.XXLARGE], height: frozen[obj.XXLARGE], borderRadius: frozen[obj.XXLARGE] / 2 };
const obj11 = { width: frozen[obj.REFRESH_MEDIUM_32], height: frozen[obj.REFRESH_MEDIUM_32], borderRadius: frozen[obj.REFRESH_MEDIUM_32] / 2 };
const obj12 = { width: frozen[obj.PROFILE], height: frozen[obj.PROFILE], borderRadius: frozen[obj.PROFILE] / 2 };
const obj13 = { width: frozen[obj.SIZE_16], height: frozen[obj.SIZE_16], borderRadius: frozen[obj.SIZE_16] / 2 };
const obj14 = { width: frozen[obj.LARGE_48], height: frozen[obj.LARGE_48], borderRadius: frozen[obj.LARGE_48] / 2 };
const obj15 = { width: frozen[obj.EDIT_AVATAR_DECORATION], height: frozen[obj.EDIT_AVATAR_DECORATION], borderRadius: frozen[obj.EDIT_AVATAR_DECORATION] / 2 };
const obj16 = { width: frozen[obj.GIFT_START], height: frozen[obj.GIFT_START], borderRadius: frozen[obj.GIFT_START] / 2 };
const obj17 = { width: frozen[obj.GIFT_SUCCESS], height: frozen[obj.GIFT_SUCCESS], borderRadius: frozen[obj.GIFT_SUCCESS] / 2 };
const obj18 = { width: frozen[obj.YOUBAR_60], height: frozen[obj.YOUBAR_60], borderRadius: frozen[obj.YOUBAR_60] / 2 };
const obj19 = { width: frozen[obj.TABS_22], height: frozen[obj.TABS_22], borderRadius: frozen[obj.TABS_22] / 2 };
const obj2 = { width: frozen[obj.XXSMALL_10], height: frozen[obj.XXSMALL_10], borderRadius: frozen[obj.XXSMALL_10] / 2 };
const obj3 = { width: frozen[obj.XSMALL_20], height: frozen[obj.XSMALL_20], borderRadius: frozen[obj.XSMALL_20] / 2 };
const obj4 = { width: frozen[obj.XSMALL], height: frozen[obj.XSMALL], borderRadius: frozen[obj.XSMALL] / 2 };
const obj5 = { width: frozen[obj.SMALL], height: frozen[obj.SMALL], borderRadius: frozen[obj.SMALL] / 2 };
const obj6 = { width: frozen[obj.NORMAL], height: frozen[obj.NORMAL], borderRadius: frozen[obj.NORMAL] / 2 };
const obj7 = { width: frozen[obj.LARGE], height: frozen[obj.LARGE], borderRadius: frozen[obj.LARGE] / 2 };
const obj8 = { width: frozen[obj.XLARGE], height: frozen[obj.XLARGE], borderRadius: frozen[obj.XLARGE] / 2 };
const obj9 = { width: frozen[obj.XLARGE_72], height: frozen[obj.XLARGE_72], borderRadius: frozen[obj.XLARGE_72] / 2 };
const tmp3 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo((arg0) => {
  let animate;
  let animate2;
  let channel;
  let cutout;
  let size;
  let size2;
  let source;
  let style;
  let user;
  ({ animate, cutout, size, style } = arg0);
  let tmp2 = size;
  if ("number" !== typeof size) {
    tmp2 = frozen[size];
  }
  if ("number" === typeof size) {
    let obj = { width: size, height: size };
    const items = [obj, style];
    let items1 = items;
  } else {
    items1 = [obj[size], style];
  }
  obj = {};
  const merged = Object.assign(arg0);
  let tmp6 = true === animate;
  if (tmp6) {
    tmp6 = null == cutout;
  }
  obj["animate"] = tmp6;
  obj["size"] = tmp2;
  ({ source, user, channel, animate: animate2, size: size2 } = obj);
  if (null != source) {
    let sourceResult = source;
    if ("function" === typeof source) {
      sourceResult = source(animate2);
    }
    let avatarSource = sourceResult;
  } else if (null != user) {
    avatarSource = user.getAvatarSource(tmp8, animate2, size2);
  } else if (null != channel) {
    let obj2 = arg1(dependencyMap[6]);
    const channelIconURL = obj2.getChannelIconURL(channel, size2);
    let tmp15 = channelIconURL;
    if ("number" !== typeof channelIconURL) {
      tmp15 = channelIconURL;
      if (null != channelIconURL) {
        obj = { uri: channelIconURL };
        tmp15 = obj;
      }
    }
    avatarSource = tmp15;
  } else {
    importDefaultResult.warn("No image found from provided data");
  }
  if (null == avatarSource) {
    return null;
  } else {
    const user2 = obj.user;
    if (null != user2) {
      if (!tmp32) {
        const obj5 = importDefault(dependencyMap[5]);
        source = obj5.makeSource(importDefault(dependencyMap[5]).getDefaultAvatarURL(user2.id, user2.discriminator));
        const obj6 = importDefault(dependencyMap[5]);
      }
    }
    if (null != cutout) {
      const nativeCutouts = cutout.nativeCutouts;
      let length;
      if (null != nativeCutouts) {
        length = nativeCutouts.length;
      }
      if (1 === length) {
        const obj1 = { animate };
        animate = cutout.nativeCutouts;
        cutout = animate[0];
        obj1.cutout = cutout;
        obj1.source = avatarSource;
        obj1.style = items1;
        let tmp28 = callback(NativeCutoutAvatarImage, obj1);
      } else {
        obj2 = { style: items1, size: tmp2, animate, cutout, source: avatarSource };
        tmp28 = callback(CutoutAvatarImage, obj2);
      }
    } else {
      const obj3 = { style: items1, source: avatarSource };
      let tmp24;
      if ("number" === typeof source) {
        tmp24 = source;
      }
      obj3.placeholder = tmp24;
      obj3.usesSmallCache = true;
      return callback(importDefault(dependencyMap[9]), obj3, "image");
    }
  }
}, function customShallowEqual(source, source2) {
  if (importDefault(dependencyMap[14])(source, source2, [1477468749])) {
    source = source.source;
    const source1 = source2.source;
    if (source === source1) {
      return true;
    } else {
      if ("number" !== typeof source1) {
        if (tmp7 === typeof source) {
          const _Array2 = Array;
          if (Array.isArray(source1)) {
            const _Array = Array;
            if (Array.isArray(source)) {
              if (source.length !== source1.length) {
                return false;
              } else {
                let num = 0;
                if (0 < source.length) {
                  while (importDefault(dependencyMap[14])(source[num], source1[num])) {
                    num = num + 1;
                  }
                  return false;
                }
                return true;
              }
            }
          }
          let tmp2 = "object" !== tmp7 || "object" !== tmp;
          if (!tmp2) {
            tmp2 = importDefault(dependencyMap[14])(source1, source);
          }
          return tmp2;
        }
      }
      return false;
    }
  } else {
    return false;
  }
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("design/void/CutoutableAvatarImage/native/CutoutableAvatarImage.tsx");

export default memoResult;
export const AvatarSizes = obj;
export const AVATAR_SIZE_MAP = frozen;
export const styles = obj;
export const CutoutDirection = obj20;
export const CutoutType = obj21;
