// Module ID: 15635
// Function ID: 15636
// Name: CutoutableAvatarImage
// Dependencies: [19, 17, 15636, 21, 3, 1411, 15450, 15637, 9437, 5957, 1652, 5876, 1266, 8197, 558, 2]

// Module 15635 (CutoutableAvatarImage)
import LoggerDefault from "Logger" /* 3 */;
import shallowEqualDefault from "shallowEqual" /* 558 */;
import v1 from "v1" /* 1266 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5876 */;
import FastImageDefault from "FastImage" /* 5957 */;
import inlineStyles from "inlineStyles" /* 8197 */;
import ClipView from "ClipView" /* 9437 */;
import getChannelIcon from "getChannelIcon" /* 15450 */;
import ChannelAnimationConstants from "ChannelAnimationConstants" /* 15636 */;
import getReactNativeSVGImageSourceDefault from "getReactNativeSVGImageSource" /* 15637 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

const ClipViewDefault = ClipView;
let obj1, point, tmp, tmp2;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj3;
let obj4;
let tmp11;
const inlineStylesDefault = tmp11(8197);
function StaticNativeCutoutAvatarImage(cutout) {
  let imageStyle;
  let items1;
  let source;
  let style;
  cutout = cutout.cutout;
  let items = [cutout];
  ({ source, style, imageStyle } = cutout);
  const memo = react.useMemo(() => {
    const items = [cutout];
    return items;
  }, items);
  const obj = { style, cutouts: memo, children: metroImportDefault(FastImageDefault, obj2) };
  obj2 = { style: items1, source: getReactNativeSVGImageSourceDefault(source), usesSmallCache: true };
  items1 = [obj2.image, imageStyle];
  const tmp3 = ClipViewDefault;
  return metroImportDefault(tmp3, obj);
}
function AnimatedNativeCutoutAvatarImage(arg0) {
  let cutout;
  let imageStyle;
  let items2;
  let source;
  let style;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  ({ cutout, source, style, imageStyle } = arg0);
  let items = [closure_15, cutout, , , ];
  const useAnimatedProps = _mod1652.useAnimatedProps;
  items[2] = ClipView.CutoutShape;
  items[3] = spring_spring.withSpring;
  items[4] = CHANNEL_SPRING_CONFIG;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  class CutoutableAvatarImageTsx1 {
    constructor() {
      size = closure_0;
      tmp = closure_1;
      if (closure_0.shape === closure_1.RoundedRect) {
        size1 = { shape: null, x: null, y: null, width: null, height: null, cornerRadius: null };
        size1.shape = tmp.RoundedRect;
        tmp4 = closure_2;
        tmp5 = closure_3;
        size1.x = closure_2(size.x, closure_3);
        size1.y = closure_2(size.y, closure_3);
        size1.width = closure_2(size.width, closure_3);
        size1.height = closure_2(size.height, closure_3);
        size1.cornerRadius = closure_2(size.cornerRadius, closure_3);
        point = size1;
      } else {
        point = { shape: null, x: null, y: null, size: null };
        point.shape = tmp.Circle;
        tmp2 = closure_2;
        tmp3 = closure_3;
        point.x = closure_2(size.x, closure_3);
        point.y = closure_2(size.y, closure_3);
        point.size = closure_2(size.size, closure_3);
      }
      obj1 = { cutouts: null };
      items = [];
      items[0] = point;
      obj1.cutouts = items;
      return obj1;
    }
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8];
  CutoutableAvatarImageTsx1.__closure = items1;
  CutoutableAvatarImageTsx1.__workletHash = 1467452427852;
  CutoutableAvatarImageTsx1.__initData = tmp4;
  const animatedProps = useAnimatedProps(CutoutableAvatarImageTsx1);
  let obj = { style, animatedProps, children: metroImportDefault(FastImageDefault, obj2) };
  const tmp10 = getReactNativeSVGImageSourceDefault(source);
  const ClipViewAnimated = ClipView.ClipViewAnimated;
  obj2 = { style: items2, source: tmp10, usesSmallCache: true };
  items2 = [obj2.image, imageStyle];
  return metroImportDefault(ClipViewAnimated, obj);
}
function NativeCutoutAvatarImage(animate) {
  let tmp6;
  if (true === animate.animate) {
    obj2 = {};
    const merged = Object.assign(animate);
    tmp6 = metroImportDefault(AnimatedNativeCutoutAvatarImage, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(animate);
    tmp6 = metroImportDefault(StaticNativeCutoutAvatarImage, obj);
  }
  return tmp6;
}
function CutoutAvatarImage(arg0) {
  let cutout;
  let items;
  let obj3;
  let size5;
  let source;
  let style;
  let tmp11Result;
  let tmp16;
  ({ cutout, size, source, style } = arg0);
  const result = size / 2;
  let radius = cutout.radius;
  if (radius == null) {
    radius = result;
  }
  let num = cutout.inset;
  if (num == null) {
    num = 0;
  }
  let CIRCULAR = cutout.imageType;
  if (CIRCULAR == null) {
    CIRCULAR = obj6.CIRCULAR;
  }
  let diff = size - num;
  let diff1 = size;
  if (CIRCULAR === obj6.CIRCULAR) {
    diff1 = result;
  }
  const direction = cutout.direction;
  if (obj5.BOTTOM_RIGHT === direction) {
    diff = size - radius - num;
    diff1 = size - radius - num;
  } else if (tmp6.BOTTOM_LEFT === direction) {
    diff = radius + num;
    diff1 = size - radius - num;
  }
  const obj = v1;
  const v4Result = obj.v4();
  const tintColor = React3.flatten(style).tintColor;
  if (null != source) {
    let tmp10;
    let tmp12;
    let tmp12Result;
    if (null != tintColor) {
      const size1 = { x: "0", y: "0", height: "100%", width: "100%", mask: "url(#" + v4Result + ")", children: metroImportDefault(tmp16, obj2) };
      const _HermesInternal = HermesInternal;
      const ForeignObject = tmp7(8197).ForeignObject;
      obj2 = { style: obj3, source: getReactNativeSVGImageSourceDefault(source), usesSmallCache: true };
      obj3 = { tintColor };
      tmp16 = FastImageDefault;
      tmp10 = metroImportDefault(ForeignObject, size1);
      tmp12 = metroImportDefault;
    }
    const obj4 = { style, children: metroImportAll(tmp11Result, size5) };
    tmp11Result = inlineStylesDefault;
    const Defs = tmp7(8197).Defs;
    const size2 = { width: size, height: size, id: v4Result, children: items };
    const Mask = tmp7(8197).Mask;
    const tmp17 = hasOwnProperty;
    if (CIRCULAR === obj6.CIRCULAR) {
      obj5 = { cx: result, cy: result, r: result, fill: "white" };
      tmp12Result = tmp12(tmp7(8197).Circle, obj5);
    } else {
      const size3 = { x: 0, y: 0, height: size, width: size, fill: "white" };
      tmp12Result = tmp12(tmp7(8197).Rect, size3);
    }
    obj6 = { children: metroImportAll(Mask, size2) };
    items = [tmp12Result, ];
    const obj7 = { cx: diff, cy: diff1, r: radius, fill: "black" };
    items[1] = tmp12(inlineStyles.Circle, obj7);
    const items1 = [tmp12(Defs, obj6), tmp10, ];
    let tmp21 = null;
    if (null != cutout.border) {
      let tmp12Result2;
      if (CIRCULAR === obj6.CIRCULAR) {
        const _HermesInternal3 = HermesInternal;
        const obj8 = { cx: result, cy: result, r: result, fill: "none", mask: "url(#" + v4Result + ")", stroke: cutout.border.color, strokeWidth: cutout.border.width };
        const Circle = tmp7(8197).Circle;
        tmp12Result2 = tmp12(Circle, obj8);
      } else {
        const size4 = { x: 0, y: 0, height: size, width: size, fill: "none", mask: "url(#" + v4Result + ")", stroke: cutout.border.color, strokeWidth: cutout.border.width };
        const _HermesInternal2 = HermesInternal;
        const Rect = tmp7(8197).Rect;
        tmp12Result2 = tmp12(Rect, size4);
      }
      tmp21 = tmp12Result2;
    }
    size5 = { height: "100%", width: "100%", children: items1 };
    items1[2] = tmp21;
    return tmp12(tmp17, obj4);
  }
  const size6 = { x: "0", y: "0", height: "100%", width: "100%", href: getReactNativeSVGImageSourceDefault(source), mask: "url(#" + v4Result + ")" };
  const Image = tmp7(8197).Image;
  tmp10 = metroImportDefault(Image, size6);
  tmp12 = metroImportDefault;
}
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const CHANNEL_SPRING_CONFIG = ChannelAnimationConstants.CHANNEL_SPRING_CONFIG;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let tmp4 = new LoggerDefault("UIKit - AvatarImage");
const logger = tmp4;
let obj = { XXSMALL: "xxsmall", XSMALL: "xsmall", SMALL: "small", NORMAL: "normal", LARGE: "large", XLARGE: "xlarge", XLARGE_72: "xlarge72", XXLARGE: "xxlarge", PROFILE: "profile", REFRESH_MEDIUM_32: "refreshMedium32", XXSMALL_10: "xsmall10", XSMALL_20: "xsmall20", SIZE_16: "size16", LARGE_48: "large48", EDIT_AVATAR_DECORATION: "editAvatarDecoration", GIFT_START: "giftStart", GIFT_SUCCESS: "giftSuccess", YOUBAR_60: "youBar60", TABS_22: "tabs22" };
const frozen = Object.freeze({ [obj.XXSMALL_10]: 10, [obj.SIZE_16]: 16, [obj.XXSMALL]: 18, [obj.XSMALL_20]: 20, [obj.XSMALL]: 24, [obj.SMALL]: 30, [obj.NORMAL]: 40, [obj.LARGE_48]: 48, [obj.LARGE]: 50, [obj.XLARGE]: 64, [obj.XLARGE_72]: 72, [obj.XXLARGE]: 80, [obj.PROFILE]: 128, [obj.EDIT_AVATAR_DECORATION]: 144, [obj.GIFT_START]: 184, [obj.GIFT_SUCCESS]: 236, [obj.REFRESH_MEDIUM_32]: 32, [obj.YOUBAR_60]: 60, [obj.TABS_22]: 22 });
let obj2 = { image: { width: "100%", height: "100%" }, xxsmall: { width: frozen[obj.XXSMALL], height: frozen[obj.XXSMALL] }, xsmall10: { width: frozen[obj.XXSMALL_10], height: frozen[obj.XXSMALL_10] }, xsmall20: { width: frozen[obj.XSMALL_20], height: frozen[obj.XSMALL_20] }, xsmall: { width: frozen[obj.XSMALL], height: frozen[obj.XSMALL] }, small: { width: frozen[obj.SMALL], height: frozen[obj.SMALL] }, normal: { width: frozen[obj.NORMAL], height: frozen[obj.NORMAL] }, large: { width: frozen[obj.LARGE], height: frozen[obj.LARGE] }, xlarge: { width: frozen[obj.XLARGE], height: frozen[obj.XLARGE] }, xlarge72: { width: frozen[obj.XLARGE_72], height: frozen[obj.XLARGE_72] }, xxlarge: { width: frozen[obj.XXLARGE], height: frozen[obj.XXLARGE] }, refreshMedium32: { width: frozen[obj.REFRESH_MEDIUM_32], height: frozen[obj.REFRESH_MEDIUM_32] }, profile: { width: frozen[obj.PROFILE], height: frozen[obj.PROFILE] }, size16: { width: frozen[obj.SIZE_16], height: frozen[obj.SIZE_16] }, large48: { width: frozen[obj.LARGE_48], height: frozen[obj.LARGE_48] }, editAvatarDecoration: { width: frozen[obj.EDIT_AVATAR_DECORATION], height: frozen[obj.EDIT_AVATAR_DECORATION] }, giftStart: { width: frozen[obj.GIFT_START], height: frozen[obj.GIFT_START] }, giftSuccess: { width: frozen[obj.GIFT_SUCCESS], height: frozen[obj.GIFT_SUCCESS] }, youBar60: { width: frozen[obj.YOUBAR_60], height: frozen[obj.YOUBAR_60] }, tabs22: { width: frozen[obj.TABS_22], height: frozen[obj.TABS_22] }, borderRadii: obj3 };
obj3 = { xxsmall: obj4, xsmall10: { borderRadius: frozen[obj.XXSMALL_10] / 2 }, xsmall20: { borderRadius: frozen[obj.XSMALL_20] / 2 }, xsmall: { borderRadius: frozen[obj.XSMALL] / 2 }, small: { borderRadius: frozen[obj.SMALL] / 2 }, normal: { borderRadius: frozen[obj.NORMAL] / 2 }, large: { borderRadius: frozen[obj.LARGE] / 2 }, xlarge: { borderRadius: frozen[obj.XLARGE] / 2 }, xlarge72: { borderRadius: frozen[obj.XLARGE_72] / 2 }, xxlarge: { borderRadius: frozen[obj.XXLARGE] / 2 }, refreshMedium32: { borderRadius: frozen[obj.REFRESH_MEDIUM_32] / 2 }, profile: { borderRadius: frozen[obj.PROFILE] / 2 }, size16: { borderRadius: frozen[obj.SIZE_16] / 2 }, large48: { borderRadius: frozen[obj.LARGE_48] / 2 }, editAvatarDecoration: { borderRadius: frozen[obj.EDIT_AVATAR_DECORATION] / 2 }, giftStart: { borderRadius: frozen[obj.GIFT_START] / 2 }, giftSuccess: { borderRadius: frozen[obj.GIFT_SUCCESS] / 2 }, youBar60: { borderRadius: frozen[obj.YOUBAR_60] / 2 }, tabs22: { borderRadius: frozen[obj.TABS_22] / 2 } };
obj4 = { borderRadius: frozen[obj.XXSMALL] / 2 };
let obj5 = { RIGHT: 0, [0]: "RIGHT", BOTTOM_RIGHT: 1, [1]: "BOTTOM_RIGHT", BOTTOM_LEFT: 2, [2]: "BOTTOM_LEFT" };
let obj6 = { RECTANGULAR: 0, [0]: "RECTANGULAR", CIRCULAR: 1, [1]: "CIRCULAR" };
let closure_15 = { code: "(function CutoutableAvatarImageTsx1(){let[cutout,CutoutShape,withSpring,CHANNEL_SPRING_CONFIG]=this.__closure;const animatedCutout=cutout.shape===CutoutShape.RoundedRect?{shape:CutoutShape.RoundedRect,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),width:withSpring(cutout.width,CHANNEL_SPRING_CONFIG),height:withSpring(cutout.height,CHANNEL_SPRING_CONFIG),cornerRadius:withSpring(cutout.cornerRadius,CHANNEL_SPRING_CONFIG)}:{shape:CutoutShape.Circle,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),size:withSpring(cutout.size,CHANNEL_SPRING_CONFIG)};return{cutouts:[animatedCutout]};})" };
const memoResult = react.memo(function CutoutableAvatarImage(style) {
  let animate;
  let animate2;
  let avatarSource;
  let channel;
  let cutout;
  let items1;
  let size2;
  let source;
  let tmp23;
  let tmp4;
  let user;
  ({ animate, cutout, size } = style);
  const items = [obj2[size], style.style];
  const obj = { animate: tmp4, size: frozen[size] };
  const merged = Object.assign(style);
  tmp4 = true === animate && null == cutout;
  ({ source, user, channel, animate: animate2, size: size2 } = obj);
  if (null != source) {
    let sourceResult = source;
    if (typeof source === "function") {
      sourceResult = source(animate2);
    }
    avatarSource = sourceResult;
  } else if (null != user) {
    avatarSource = user.getAvatarSource(tmp6, animate2, size2);
  } else if (null != channel) {
    obj2 = getChannelIcon;
    const channelIconURL = obj2.getChannelIconURL(channel, size2);
    let tmp13 = channelIconURL;
    if (typeof channelIconURL !== "number") {
      tmp13 = channelIconURL;
      if (null != channelIconURL) {
        tmp13 = { uri: channelIconURL };
        const obj3 = { uri: channelIconURL };
      }
    }
    avatarSource = tmp13;
  } else {
    logger.warn("No image found from provided data");
  }
  if (null == avatarSource) {
    return null;
  } else {
    let source1;
    let tmp19Result;
    const user2 = obj.user;
    if (null != user2) {
      if (!tmp31) {
        const makeSource = AvatarUtilsDefault.makeSource;
        AvatarUtilsDefault;
        const obj4 = AvatarUtilsDefault;
        source1 = makeSource(obj4.getDefaultAvatarURL(user2.id, user2.discriminator));
      }
    }
    if (null != cutout) {
      let tmp28;
      const nativeCutouts = cutout.nativeCutouts;
      let length;
      if (nativeCutouts != null) {
        length = nativeCutouts.length;
      }
      if (1 === length) {
        obj5 = { animate, cutout: cutout.nativeCutouts[0], source: avatarSource, style: items, imageStyle: obj2.borderRadii[size] };
        tmp28 = metroImportDefault(NativeCutoutAvatarImage, obj5);
      } else {
        obj6 = { style: items, size: frozen[size], animate, cutout, source: avatarSource };
        tmp28 = metroImportDefault(CutoutAvatarImage, obj6);
      }
      tmp19Result = tmp28;
    } else {
      const obj7 = { style: items1, source: avatarSource, placeholder: tmp23, usesSmallCache: true };
      items1 = [items, obj2.borderRadii[size]];
      tmp23 = undefined;
      const tmp19 = metroImportDefault;
      const tmp22 = FastImageDefault;
      if (typeof source1 === "number") {
        tmp23 = source1;
      }
      tmp19Result = tmp19(tmp22, obj7, "image");
    }
    return tmp19Result;
  }
}, function customShallowEqual(source, source2) {
  if (shallowEqualDefault(source, source2, ["source"])) {
    source = source.source;
    const source1 = source2.source;
    if (source === source1) {
      return true;
    } else {
      if (typeof source1 !== "number") {
        if (typeof source1 === typeof source) {
          const _Array2 = Array;
          if (Array.isArray(source1)) {
            const _Array = Array;
            if (Array.isArray(source)) {
              if (source.length !== source1.length) {
                return false;
              } else {
                let num = 0;
                if (0 < source.length) {
                  while (shallowEqualDefault(source[num], source1[num])) {
                    num = num + 1;
                  }
                  return false;
                }
                return true;
              }
            }
          }
          const tmp3 = typeof source1 !== "object" || typeof source !== "object" || shallowEqualDefault(source1, source);
          return tmp3;
        }
      }
      return false;
    }
  } else {
    return false;
  }
});
let size = size_mod;
let result = size.fileFinishedImporting("design/void/CutoutableAvatarImage/native/CutoutableAvatarImage.tsx");

export default memoResult;
export const AvatarSizes = obj;
export const AVATAR_SIZE_MAP = frozen;
export const styles = obj2;
export const CutoutDirection = obj5;
export const CutoutType = obj6;
