// Module ID: 13722
// Function ID: 13723
// Name: ForumPostMedia
// Dependencies: [32, 19, 17, 1193, 1192, 21, 5009, 575, 5712, 5595, 13723, 8679, 13724, 1376, 7462, 6974, 7947, 6723, 13725, 5016, 4834, 11113, 1491, 2]
// Exports: ForumPostGridMedia, ForumPostMediaThumbnail, useSharedMediaProps

// Module 13722 (ForumPostMedia)
import nativeDefault from "native" /* 575 */;
import FormConstants from "FormConstants" /* 1192 */;
import utils_ImageUtils from "utils/ImageUtils" /* 1491 */;
import shared from "shared" /* 5016 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5595 */;
import FastImageDefault from "FastImage" /* 5712 */;
import SpoilerIconDefault from "SpoilerIcon" /* 13723 */;
import MessageAttachmentUtils from "MessageAttachmentUtils" /* 13725 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let PixelRatio;
let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let tmp;
let unpackModuleId;
const UserSettings = tmp(4834);
function ForumPostMediaAndroid(arg0) {
  let androidStyle;
  let blurTheme;
  let height;
  let items;
  let items1;
  let shouldSpoiler;
  let source;
  let width;
  ({ shouldSpoiler, androidStyle } = arg0);
  let num = 0;
  ({ blurTheme, source } = arg0);
  if (shouldSpoiler) {
    num = 10;
  }
  let flattenResult = metroRequire.flatten(androidStyle);
  const tmp = metroRequire;
  if (flattenResult == null) {
    flattenResult = {};
  }
  const obj = { style: androidStyle, children: items1 };
  ({ width, height } = flattenResult);
  const obj2 = { style: items, source, blurRadius: num, resizeMode: "cover" };
  items = [tmp.absoluteFill, { width, height }];
  items1 = [React4(FastImageDefault, obj2), React4(ForumPostMediaSpoiler, { shouldSpoiler, blurTheme })];
  return authStore(hasOwnProperty, obj);
}
function ForumPostMediaIOS(arg0) {
  let blurTheme;
  let iosStyle;
  let items;
  let shouldSpoiler;
  let source;
  const obj = { children: items };
  ({ shouldSpoiler, blurTheme, source, iosStyle } = arg0);
  items = [React4(FastImageDefault, { style: iosStyle, source, resizeMode: "cover" }), React4(ForumPostMediaSpoiler, { shouldSpoiler, blurTheme })];
  return authStore(unpackModuleId, obj);
}
class ForumPostMediaSpoiler {
  constructor(arg0) {
    let blurTheme;
    let items;
    let shouldSpoiler;
    ({ shouldSpoiler, blurTheme } = arg0);
    const tmp = closure_14();
    let tmp2 = null;
    if (shouldSpoiler) {
      const obj = { children: items };
      const obj2 = { blurTheme, style: metroRequire.absoluteFill };
      items = [React4(VisualEffectViewDefault, obj2), ];
      const obj3 = { style: tmp.spoilerIconContainer, children: React4(SpoilerIconDefault, size) };
      size = { style: tmp.spoilerIcon, height: 30, width: 30 };
      items[1] = React4(hasOwnProperty, obj3);
      tmp2 = authStore(unpackModuleId, obj);
    }
    return tmp2;
  }
}
function ForumPostMedia(obscureReason) {
  let items;
  let items1;
  let items2;
  let obj6;
  let obj8;
  let tmp12;
  let tmp12Result;
  let tmp6Result;
  _require = obscureReason;
  const tmp = closure_14();
  const ref = react.useRef(null);
  let obj = require("ExplicitMediaRedactionUtils");
  const shouldAgeVerifyForReason = obj.useShouldAgeVerifyForReason(obscureReason.obscureReason);
  if (obscureReason.isMediaPost) {
    let obj2 = {};
    const tmp19 = ref(13724);
    const merged = Object.assign(obscureReason);
    tmp6Result = closure_9(tmp19, obj2);
    tmp12 = closure_9;
  } else {
    const tmp3Result = require("PlatformUtils");
    if (tmp3Result.isAndroid()) {
      const obj3 = {};
      const merged1 = Object.assign(obscureReason);
      tmp6Result = tmp6(ForumPostMediaAndroid, obj3);
      tmp12 = tmp6;
    } else {
      const obj4 = {};
      const merged2 = Object.assign(obscureReason);
      tmp6Result = tmp6(ForumPostMediaIOS, obj4);
      tmp12 = tmp6;
    }
  }
  if (null != obscureReason.obscureReason) {
    const AGE_VERIFICATION_OBSCURABLE_REASONS = tmp3(7462).AGE_VERIFICATION_OBSCURABLE_REASONS;
    if (AGE_VERIFICATION_OBSCURABLE_REASONS.has(obscureReason.obscureReason)) {
      if (shouldAgeVerifyForReason) {
        const obj5 = { style: items, ref, children: tmp12(require("Pressables").PressableOpacity, obj6) };
        items = [tmp.mediaContainer, obscureReason.containerStyle];
        obj6 = {
          androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
          activeOpacity: 0,
          onPress() {
                  const obj = ref(dependencyMap[16]);
                  const obj2 = { entryPoint: obscureReason(dependencyMap[17]).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW };
                  const result = obj.showAgeVerificationGetStartedModal(obj2);
                },
          children: tmp6Result
        };
        tmp12Result = tmp12(closure_5, obj5);
      }
      return tmp12Result;
    }
  }
  if (null != obscureReason.onPress) {
    const obj7 = { style: items1, ref, children: tmp12(require("Pressables").PressableOpacity, obj8) };
    items1 = [tmp.mediaContainer, obscureReason.containerStyle];
    obj8 = {
      androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
      activeOpacity: 0.8,
      onPress() {
          const onPress = obscureReason.onPress;
          let onPressResult;
          if (onPress != null) {
            onPressResult = onPress(ref);
          }
          return onPressResult;
        },
      children: tmp6Result
    };
    tmp12Result = tmp12(closure_5, obj7);
  } else {
    const obj9 = { style: items2, ref, children: tmp6Result };
    items2 = [tmp.mediaContainer, obscureReason.containerStyle];
    tmp12Result = tmp12(closure_5, obj9);
  }
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: hasOwnProperty, StyleSheet: metroRequire, PixelRatio } = react_native);
const ANDROID_FOREGROUND_RIPPLE = FormConstants.ANDROID_FOREGROUND_RIPPLE;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let closure_12 = Math.min(PixelRatio.get(), 4);
let closure_13 = Math.min(PixelRatio.get(), 4);
let createStyles = createStyles_mod;
let obj = { mediaContainer: { position: "relative", overflow: "hidden" }, thumbnailBorder: obj2, thumbnail: { height: 80, width: 80 }, spoilerIconContainer: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center" }, spoilerIcon: obj3, gridMediaContainer: { borderRadius: 2, overflow: "hidden" } };
obj2 = { borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.unsafe_rawColors.PRIMARY_300, alignSelf: "center" };
const authStore3 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostMedia.tsx");

export { ForumPostMediaSpoiler };
export function useSharedMediaProps(arg0) {
  let channel;
  let media;
  let str;
  let tmp4;
  ({ channel, media } = arg0);
  const obj = MessageAttachmentUtils;
  const tmp3 = _slicedToArray(obj.useShouldObscure({ media, channel }), 2);
  const obj2 = { shouldObscure: tmp3[0], obscureReason: tmp3[1], blurTheme: str, format: tmp4 };
  str = "light";
  const obj3 = shared;
  if (obj3.isThemeDark(ThemeStore.theme)) {
    str = "dark";
  }
  const GifAutoPlay = UserSettings.GifAutoPlay;
  tmp4 = "png";
  if (GifAutoPlay.useSetting()) {
    tmp4 = null;
  }
  return obj2;
}
export function ForumPostMediaThumbnail(firstMessageId) {
  let channel;
  let containerStyle;
  let embedLeftBorderColor;
  let flag;
  let format;
  let isLocalDeviceMedia;
  let items2;
  let memo;
  let tmp6;
  ({ channel, isLocalDeviceMedia } = firstMessageId);
  firstMessageId = firstMessageId.firstMessageId;
  const media = firstMessageId.media;
  let isEmbed = firstMessageId.isEmbed;
  react = undefined;
  ({ embedLeftBorderColor, containerStyle } = firstMessageId);
  const tmp = closure_14();
  let obj = { threadId: channel.id };
  const onTapMedia = firstMessageId(media[21])(obj).onTapMedia;
  const obj2 = react;
  let items = [firstMessageId, media, onTapMedia];
  const callback = react.useCallback((containerRef) => {
    let items;
    const obj = { messageId: firstMessageId, mediaItems: items, containerRef };
    items = [media];
    onTapMedia(obj);
  }, items);
  let obj3 = isLocalDeviceMedia(media[18]);
  [flag, tmp6] = onTapMedia(obj3.useShouldObscure({ media, channel }), 2);
  let str = "light";
  const tmp5 = onTapMedia(obj3.useShouldObscure({ media, channel }), 2);
  const obj4 = isLocalDeviceMedia(media[19]);
  const tmp2 = media;
  const tmp4 = isLocalDeviceMedia;
  if (obj4.isThemeDark(ThemeStore.theme)) {
    str = "dark";
  }
  const GifAutoPlay = tmp4(tmp2[20]).GifAutoPlay;
  let tmp7 = "png";
  if (GifAutoPlay.useSetting()) {
    tmp7 = null;
  }
  react = tmp7;
  const items1 = [tmp7, isLocalDeviceMedia, , , , ];
  ({ height: arr2[2], src: arr2[3], width: arr2[4], srcIsAnimated: arr2[5] } = media);
  const obj5 = { iosStyle: tmp.thumbnail, androidStyle: tmp.thumbnail, containerStyle: items2, obscureReason: tmp6, shouldSpoiler: flag, blurTheme: str, source: memo, onPress: callback, isMediaPost: channel.isMediaPost() };
  items2 = [tmp.thumbnailBorder, , ];
  memo = obj2.useMemo(() => {
    let tmp8;
    const obj = { uri: null };
    if (isLocalDeviceMedia) {
      obj.uri = media.src;
      tmp8 = obj;
    } else {
      ({ src: obj2.src, width: obj2.sourceWidth, height: obj2.sourceHeight } = media);
      const _Math = Math;
      const obj3 = { src: null, sourceWidth: null, sourceHeight: null, targetWidth: Math.ceil(80 * closure_12), targetHeight: Math.ceil(80 * closure_12), format, animated: media.srcIsAnimated };
      const getSrcWithWidthAndHeight = utils_ImageUtils.getSrcWithWidthAndHeight;
      utils_ImageUtils;
      const _Math2 = Math;
      obj.uri = getSrcWithWidthAndHeight(obj3);
      tmp8 = obj;
    }
    return tmp8;
  }, items1);
  const tmp10 = ForumPostMedia;
  const tmp9 = closure_9;
  if (isEmbed) {
    isEmbed = { borderLeftWidth: 2, borderLeftColor: embedLeftBorderColor };
    const obj6 = { borderLeftWidth: 2, borderLeftColor: embedLeftBorderColor };
  }
  items2[1] = isEmbed;
  items2[2] = containerStyle;
  return tmp9(tmp10, obj5);
}
export function ForumPostGridMedia(targetWidth) {
  let c4;
  let channel;
  let flag;
  let format;
  let media;
  let memo;
  let tmp5;
  ({ channel, media } = targetWidth);
  targetWidth = targetWidth.targetWidth;
  const targetHeight = targetWidth.targetHeight;
  _slicedToArray = undefined;
  react = undefined;
  let tmp = closure_14();
  let obj = media(targetHeight[18]);
  const tmp4 = _slicedToArray(obj.useShouldObscure({ media, channel }), 2);
  [flag, tmp5] = tmp4;
  const obj2 = media(targetHeight[19]);
  let str = "light";
  const tmp2 = media;
  const tmp3 = targetHeight;
  if (obj2.isThemeDark(ThemeStore.theme)) {
    str = "dark";
  }
  const GifAutoPlay = tmp2(tmp3[20]).GifAutoPlay;
  let tmp6 = "png";
  if (GifAutoPlay.useSetting()) {
    tmp6 = null;
  }
  _slicedToArray = tmp6;
  const isMediaPostResult = channel.isMediaPost();
  react = isMediaPostResult;
  const items = [, , , , , , ];
  ({ src: arr[0], width: arr[1], height: arr[2] } = media);
  items[3] = targetWidth;
  items[4] = targetHeight;
  items[5] = tmp6;
  items[6] = isMediaPostResult;
  let obj3 = { containerStyle: tmp.gridMediaContainer, iosStyle: { height: targetHeight, width: targetWidth }, androidStyle: { height: targetHeight, width: targetWidth }, shouldSpoiler: flag, obscureReason: tmp5, blurTheme: str, source: memo, isPortrait: media.height >= media.width, isMediaPost: isMediaPostResult };
  memo = react.useMemo(() => {
    let getSrcWithWidthAndHeight;
    let getSrcWithWidthAndHeight2;
    let obj7;
    let obj8;
    const tmp = c4;
    if (tmp) {
      const _Math3 = Math;
      const bound = Math.min(1, targetWidth * closure_13 / media.width, targetHeight * closure_13 / media.height);
      const obj3 = { uri: getSrcWithWidthAndHeight2(obj7) };
      ({ src: obj4.src, width: obj4.sourceWidth, height: obj4.sourceHeight } = media);
      const _Math4 = Math;
      obj7 = { src: null, sourceWidth: null, sourceHeight: null, targetWidth: Math.ceil(media.width * bound), targetHeight: Math.ceil(media.height * bound), format };
      getSrcWithWidthAndHeight2 = utils_ImageUtils.getSrcWithWidthAndHeight;
      utils_ImageUtils;
      const _Math5 = Math;
      return obj3;
    } else {
      const obj = { uri: getSrcWithWidthAndHeight(obj8) };
      ({ src: obj2.src, width: obj2.sourceWidth, height: obj2.sourceHeight } = media);
      const _Math = Math;
      obj8 = { src: null, sourceWidth: null, sourceHeight: null, targetWidth: Math.ceil(targetWidth * closure_13), targetHeight: Math.ceil(targetHeight * closure_13), format };
      getSrcWithWidthAndHeight = utils_ImageUtils.getSrcWithWidthAndHeight;
      utils_ImageUtils;
      const _Math2 = Math;
      return obj;
    }
  }, items);
  return closure_9(ForumPostMedia, obj3);
}
