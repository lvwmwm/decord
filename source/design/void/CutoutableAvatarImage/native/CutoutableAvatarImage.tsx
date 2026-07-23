// Module ID: 11951
// Function ID: 92383
// Name: StaticNativeCutoutAvatarImage
// Dependencies: [31, 27, 11952, 33, 3, 1392, 11953, 11954, 7873, 5085, 3991, 4542, 491, 8018, 620, 2]

// Module 11951 (StaticNativeCutoutAvatarImage)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { CHANNEL_SPRING_CONFIG } from "n";
import jsxProd from "jsxProd";
import importDefaultResult from "jsxProd";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
function StaticNativeCutoutAvatarImage(cutout) {
  let imageStyle;
  let source;
  let style;
  cutout = cutout.cutout;
  let items = [cutout];
  ({ source, style, imageStyle } = cutout);
  const memo = importAllResult.useMemo(() => {
    const items = [cutout];
    return items;
  }, items);
  const obj = { style, cutouts: memo };
  const tmp2 = importDefault(11954)(source);
  const items1 = [obj.image, imageStyle];
  obj.children = callback(importDefault(5085), { style: items1, source: tmp2, usesSmallCache: true });
  return callback(importDefault(7873), obj);
}
function AnimatedNativeCutoutAvatarImage(cutout) {
  let imageStyle;
  let source;
  let style;
  cutout = cutout.cutout;
  ({ source, style, imageStyle } = cutout);
  let obj = cutout(3991);
  const fn = function h() {
    let obj = {};
    if (cutout.shape === cutout(outer1_2[8]).CutoutShape.RoundedRect) {
      obj = { shape: cutout(outer1_2[8]).CutoutShape.RoundedRect, x: cutout(outer1_2[11]).withSpring(cutout.x, outer1_6) };
      const obj3 = cutout(outer1_2[11]);
      obj.y = cutout(outer1_2[11]).withSpring(cutout.y, outer1_6);
      const obj4 = cutout(outer1_2[11]);
      obj.width = cutout(outer1_2[11]).withSpring(cutout.width, outer1_6);
      const obj5 = cutout(outer1_2[11]);
      obj.height = cutout(outer1_2[11]).withSpring(cutout.height, outer1_6);
      const obj6 = cutout(outer1_2[11]);
      obj.cornerRadius = cutout(outer1_2[11]).withSpring(cutout.cornerRadius, outer1_6);
      const obj7 = cutout(outer1_2[11]);
    } else {
      obj = { shape: cutout(outer1_2[8]).CutoutShape.Circle, x: cutout(outer1_2[11]).withSpring(cutout.x, outer1_6) };
      const obj9 = cutout(outer1_2[11]);
      obj.y = cutout(outer1_2[11]).withSpring(cutout.y, outer1_6);
      const obj10 = cutout(outer1_2[11]);
      obj.size = cutout(outer1_2[11]).withSpring(cutout.size, outer1_6);
      const obj11 = cutout(outer1_2[11]);
    }
    const items = [obj];
    obj.cutouts = items;
    return obj;
  };
  obj = { cutout, CutoutShape: cutout(7873).CutoutShape, withSpring: cutout(4542).withSpring, CHANNEL_SPRING_CONFIG };
  fn.__closure = obj;
  fn.__workletHash = 12529564164821;
  fn.__initData = closure_14;
  const animatedProps = obj.useAnimatedProps(fn);
  obj = { style, animatedProps };
  let items = [obj.image, imageStyle];
  obj.children = callback(importDefault(5085), { style: items, source: importDefault(11954)(source), usesSmallCache: true });
  return callback(cutout(7873).ClipViewAnimated, obj);
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
    CIRCULAR = obj40.CIRCULAR;
  }
  let diff = size - num;
  let diff1 = size;
  if (CIRCULAR === obj40.CIRCULAR) {
    diff1 = color;
  }
  const direction = cutout.direction;
  if (obj39.BOTTOM_RIGHT === direction) {
    diff = size - tmp - num;
    diff1 = size - tmp - num;
  } else if (obj39.BOTTOM_LEFT === direction) {
    diff = tmp + num;
    diff1 = size - tmp - num;
  }
  let obj = require(491) /* v1 */;
  const v4Result = obj.v4();
  const tintColor = closure_4.flatten(style).tintColor;
  if (null != source) {
    if (null != tintColor) {
      obj = { x: "0", y: "0", height: "100%", width: "100%" };
      const _HermesInternal = HermesInternal;
      obj.mask = "url(#" + v4Result + ")";
      obj = {};
      const obj1 = { tintColor };
      obj.style = obj1;
      obj.source = importDefault(11954)(source);
      obj.usesSmallCache = true;
      obj.children = callback(importDefault(5085), obj);
      let tmp7 = callback(require(8018) /* inlineStyles */.ForeignObject, obj);
      const tmp14 = importDefault(5085);
    }
    const obj2 = { style };
    let str3 = 13;
    const obj3 = { height: "100%", width: "100%" };
    const obj4 = {};
    const obj5 = { width: size, height: size, id: v4Result };
    if (CIRCULAR === obj40.CIRCULAR) {
      const obj6 = { cx: color, cy: color, r: color, fill: "white" };
      let tmp28 = callback(require(dependencyMap[str3]).Circle, obj6);
    } else {
      const obj7 = { x: 0, y: 0, height: size, width: size, fill: "white" };
      tmp28 = callback(require(dependencyMap[str3]).Rect, obj7);
    }
    const items = [tmp28, ];
    const obj8 = { cx: diff, cy: diff1, r: tmp, fill: "black" };
    items[1] = callback(require(dependencyMap[str3]).Circle, obj8);
    obj5.children = items;
    obj4.children = closure_8(require(8018) /* inlineStyles */.Mask, obj5);
    const items1 = [callback(require(8018) /* inlineStyles */.Defs, obj4), tmp7, ];
    if (null == cutout.border) {
      items1[2] = null;
      obj3.children = items1;
      obj2.children = tmp17(tmp20, obj3);
      return tmp15(tmp16, obj2);
    } else if (CIRCULAR === obj40.CIRCULAR) {
      const obj9 = { cx: color, cy: color, r: color, fill: "none" };
      const _HermesInternal2 = HermesInternal;
      str3 = "url(#";
      obj9.mask = "url(#" + v4Result + ")";
      color = cutout.border.color;
      obj9.stroke = color;
      cutout = cutout.border.width;
      obj9.strokeWidth = cutout;
      let tmp41 = callback(require(dependencyMap[str3]).Circle, obj9);
    } else {
      const obj10 = { x: 0, y: 0, height: size, width: size, fill: "none" };
      const _HermesInternal3 = HermesInternal;
      obj10.mask = "url(#" + v4Result + ")";
      obj10.stroke = cutout.border.color;
      obj10.strokeWidth = cutout.border.width;
      tmp41 = callback(require(dependencyMap[`url(#`]).Rect, obj10);
    }
    tmp15 = callback;
    tmp16 = closure_5;
    tmp17 = closure_8;
    tmp20 = importDefault(8018);
    const tmp21 = callback;
    const tmp23 = closure_8;
  }
  const obj11 = { x: "0", y: "0", height: "100%", width: "100%", href: importDefault(11954)(source), mask: "url(#" + v4Result + ")" };
  tmp7 = callback(require(8018) /* inlineStyles */.Image, obj11);
}
({ StyleSheet: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
importDefaultResult = new importDefaultResult("UIKit - AvatarImage");
let obj = { XXSMALL: "xxsmall", XSMALL: "xsmall", SMALL: "small", NORMAL: "normal", LARGE: "large", XLARGE: "xlarge", XLARGE_72: "xlarge72", XXLARGE: "xxlarge", PROFILE: "profile", REFRESH_MEDIUM_32: "refreshMedium32", XXSMALL_10: "xsmall10", XSMALL_20: "xsmall20", SIZE_16: "size16", LARGE_48: "large48", EDIT_AVATAR_DECORATION: "editAvatarDecoration", GIFT_START: "giftStart", GIFT_SUCCESS: "giftSuccess", YOUBAR_60: "youBar60", TABS_22: "tabs22" };
const frozen = Object.freeze({ [obj.XXSMALL_10]: 10, [obj.SIZE_16]: 16, [obj.XXSMALL]: 18, [obj.XSMALL_20]: 20, [obj.XSMALL]: 24, [obj.SMALL]: 30, [obj.NORMAL]: 40, [obj.LARGE_48]: 48, [obj.LARGE]: 50, [obj.XLARGE]: 64, [obj.XLARGE_72]: 72, [obj.XXLARGE]: 80, [obj.PROFILE]: 128, [obj.EDIT_AVATAR_DECORATION]: 144, [obj.GIFT_START]: 184, [obj.GIFT_SUCCESS]: 236, [obj.REFRESH_MEDIUM_32]: 32, [obj.YOUBAR_60]: 60, [obj.TABS_22]: 22 });
obj = { image: { width: "100%", height: "100%" }, xxsmall: obj1, xsmall10: obj2, xsmall20: obj3, xsmall: obj4, small: obj5, normal: obj6, large: obj7, xlarge: obj8, xlarge72: obj9, xxlarge: obj10, refreshMedium32: obj11, profile: obj12, size16: obj13, large48: obj14, editAvatarDecoration: obj15, giftStart: obj16, giftSuccess: obj17, youBar60: obj18, tabs22: obj19, borderRadii: { xxsmall: obj20, xsmall10: obj21, xsmall20: obj22, xsmall: obj23, small: obj24, normal: obj25, large: obj26, xlarge: obj27, xlarge72: obj28, xxlarge: obj29, refreshMedium32: obj30, profile: obj31, size16: obj32, large48: obj33, editAvatarDecoration: obj34, giftStart: obj35, giftSuccess: obj36, youBar60: obj37, tabs22: obj38 } };
const obj39 = { RIGHT: 0, [0]: "RIGHT", BOTTOM_RIGHT: 1, [1]: "BOTTOM_RIGHT", BOTTOM_LEFT: 2, [2]: "BOTTOM_LEFT" };
const obj40 = { RECTANGULAR: 0, [0]: "RECTANGULAR", CIRCULAR: 1, [1]: "CIRCULAR" };
let closure_14 = { code: "function CutoutableAvatarImageTsx1(){const{cutout,CutoutShape,withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;const animatedCutout=cutout.shape===CutoutShape.RoundedRect?{shape:CutoutShape.RoundedRect,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),width:withSpring(cutout.width,CHANNEL_SPRING_CONFIG),height:withSpring(cutout.height,CHANNEL_SPRING_CONFIG),cornerRadius:withSpring(cutout.cornerRadius,CHANNEL_SPRING_CONFIG)}:{shape:CutoutShape.Circle,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),size:withSpring(cutout.size,CHANNEL_SPRING_CONFIG)};return{cutouts:[animatedCutout]};}" };
const memoResult = importAllResult.memo((style) => {
  let animate;
  let animate2;
  let channel;
  let cutout;
  let size;
  let size2;
  let source;
  let user;
  ({ animate, cutout, size } = style);
  const items = [obj[size], style.style];
  obj = {};
  const merged = Object.assign(style);
  let tmp4 = true === animate;
  if (tmp4) {
    tmp4 = null == cutout;
  }
  obj["animate"] = tmp4;
  obj["size"] = frozen[size];
  ({ source, user, channel, animate: animate2, size: size2 } = obj);
  if (null != source) {
    let sourceResult = source;
    if ("function" === typeof source) {
      sourceResult = source(animate2);
    }
    let avatarSource = sourceResult;
  } else if (null != user) {
    avatarSource = user.getAvatarSource(tmp6, animate2, size2);
  } else if (null != channel) {
    let obj1 = require(11953) /* getChannelIconURL */;
    const channelIconURL = obj1.getChannelIconURL(channel, size2);
    let tmp13 = channelIconURL;
    if ("number" !== typeof channelIconURL) {
      tmp13 = channelIconURL;
      if (null != channelIconURL) {
        obj = { uri: channelIconURL };
        tmp13 = obj;
      }
    }
    avatarSource = tmp13;
  } else {
    importDefaultResult.warn("No image found from provided data");
  }
  if (null == avatarSource) {
    return null;
  } else {
    const user2 = obj.user;
    if (null != user2) {
      if (!tmp30) {
        const obj4 = importDefault(1392);
        source = obj4.makeSource(importDefault(1392).getDefaultAvatarURL(user2.id, user2.discriminator));
        const obj5 = importDefault(1392);
      }
    }
    if (null != cutout) {
      const nativeCutouts = cutout.nativeCutouts;
      let length;
      if (null != nativeCutouts) {
        length = nativeCutouts.length;
      }
      if (1 === length) {
        obj = { animate };
        animate = cutout.nativeCutouts;
        cutout = animate[0];
        obj.cutout = cutout;
        obj.source = avatarSource;
        obj.style = items;
        obj.imageStyle = tmp2;
        let tmp26 = callback(NativeCutoutAvatarImage, obj);
      } else {
        obj1 = { style: items, size: tmp, animate, cutout, source: avatarSource };
        tmp26 = callback(CutoutAvatarImage, obj1);
      }
    } else {
      const obj2 = {};
      const items1 = [items, tmp2];
      obj2.style = items1;
      obj2.source = avatarSource;
      let tmp22;
      if ("number" === typeof source) {
        tmp22 = source;
      }
      obj2.placeholder = tmp22;
      obj2.usesSmallCache = true;
      return callback(importDefault(5085), obj2, "image");
    }
  }
}, function customShallowEqual(source, source2) {
  if (importDefault(620)(source, source2, ["source"])) {
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
                  while (importDefault(620)(source[num], source1[num])) {
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
            tmp2 = importDefault(620)(source1, source);
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
obj1 = { width: frozen[obj.XXSMALL], height: frozen[obj.XXSMALL] };
obj10 = { width: frozen[obj.XXLARGE], height: frozen[obj.XXLARGE] };
obj11 = { width: frozen[obj.REFRESH_MEDIUM_32], height: frozen[obj.REFRESH_MEDIUM_32] };
obj12 = { width: frozen[obj.PROFILE], height: frozen[obj.PROFILE] };
obj13 = { width: frozen[obj.SIZE_16], height: frozen[obj.SIZE_16] };
obj14 = { width: frozen[obj.LARGE_48], height: frozen[obj.LARGE_48] };
obj15 = { width: frozen[obj.EDIT_AVATAR_DECORATION], height: frozen[obj.EDIT_AVATAR_DECORATION] };
obj16 = { width: frozen[obj.GIFT_START], height: frozen[obj.GIFT_START] };
obj17 = { width: frozen[obj.GIFT_SUCCESS], height: frozen[obj.GIFT_SUCCESS] };
obj18 = { width: frozen[obj.YOUBAR_60], height: frozen[obj.YOUBAR_60] };
obj19 = { width: frozen[obj.TABS_22], height: frozen[obj.TABS_22] };
obj2 = { width: frozen[obj.XXSMALL_10], height: frozen[obj.XXSMALL_10] };
obj20 = { borderRadius: frozen[obj.XXSMALL] / 2 };
obj21 = { borderRadius: frozen[obj.XXSMALL_10] / 2 };
obj22 = { borderRadius: frozen[obj.XSMALL_20] / 2 };
obj23 = { borderRadius: frozen[obj.XSMALL] / 2 };
obj24 = { borderRadius: frozen[obj.SMALL] / 2 };
obj25 = { borderRadius: frozen[obj.NORMAL] / 2 };
obj26 = { borderRadius: frozen[obj.LARGE] / 2 };
obj27 = { borderRadius: frozen[obj.XLARGE] / 2 };
obj28 = { borderRadius: frozen[obj.XLARGE_72] / 2 };
obj29 = { borderRadius: frozen[obj.XXLARGE] / 2 };
obj3 = { width: frozen[obj.XSMALL_20], height: frozen[obj.XSMALL_20] };
obj30 = { borderRadius: frozen[obj.REFRESH_MEDIUM_32] / 2 };
obj31 = { borderRadius: frozen[obj.PROFILE] / 2 };
obj32 = { borderRadius: frozen[obj.SIZE_16] / 2 };
obj33 = { borderRadius: frozen[obj.LARGE_48] / 2 };
obj34 = { borderRadius: frozen[obj.EDIT_AVATAR_DECORATION] / 2 };
obj35 = { borderRadius: frozen[obj.GIFT_START] / 2 };
obj36 = { borderRadius: frozen[obj.GIFT_SUCCESS] / 2 };
obj37 = { borderRadius: frozen[obj.YOUBAR_60] / 2 };
obj38 = { borderRadius: frozen[obj.TABS_22] / 2 };
obj4 = { width: frozen[obj.XSMALL], height: frozen[obj.XSMALL] };
obj5 = { width: frozen[obj.SMALL], height: frozen[obj.SMALL] };
obj6 = { width: frozen[obj.NORMAL], height: frozen[obj.NORMAL] };
obj7 = { width: frozen[obj.LARGE], height: frozen[obj.LARGE] };
obj8 = { width: frozen[obj.XLARGE], height: frozen[obj.XLARGE] };
obj9 = { width: frozen[obj.XLARGE_72], height: frozen[obj.XLARGE_72] };
const result = require("n").fileFinishedImporting("design/void/CutoutableAvatarImage/native/CutoutableAvatarImage.tsx");

export default memoResult;
export const AvatarSizes = obj;
export const AVATAR_SIZE_MAP = frozen;
export const styles = obj;
export const CutoutDirection = obj39;
export const CutoutType = obj40;
