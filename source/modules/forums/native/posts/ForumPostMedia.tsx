// Module ID: 11133
// Function ID: 86638
// Name: ForumPostMediaAndroid
// Dependencies: [57, 31, 27, 1278, 1277, 33, 4130, 689, 5085, 4533, 11134, 6835, 11135, 477, 5674, 4660, 7536, 7538, 11136, 3976, 3803, 10339, 1449, 2]
// Exports: ForumPostGridMedia, ForumPostMediaThumbnail

// Module 11133 (ForumPostMediaAndroid)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ANDROID_FOREGROUND_RIPPLE } from "semanticColor";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let PixelRatio;
let closure_10;
let closure_11;
let closure_12;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function ForumPostMediaAndroid(blurTheme) {
  const shouldSpoiler = blurTheme.shouldSpoiler;
  const obj = { style: blurTheme.androidStyle, source: blurTheme.source };
  let num = 0;
  if (shouldSpoiler) {
    num = 10;
  }
  obj.blurRadius = num;
  obj.resizeMode = "cover";
  obj.children = callback2(ForumPostMediaSpoiler, { shouldSpoiler, blurTheme: blurTheme.blurTheme });
  return callback2(closure_7, obj);
}
function ForumPostMediaIOS(arg0) {
  let blurTheme;
  let iosStyle;
  let shouldSpoiler;
  let source;
  const obj = {};
  ({ shouldSpoiler, blurTheme, source, iosStyle } = arg0);
  const items = [callback2(importDefault(5085), { style: iosStyle, source, resizeMode: "cover" }), callback2(ForumPostMediaSpoiler, { shouldSpoiler, blurTheme })];
  obj.children = items;
  return callback3(closure_11, obj);
}
class ForumPostMediaSpoiler {
  constructor(arg0) {
    ({ shouldSpoiler, blurTheme } = global);
    tmp = c15();
    tmp2 = null;
    if (shouldSpoiler) {
      tmp3 = jsxs;
      tmp4 = Fragment;
      obj = {};
      tmp5 = jsx;
      tmp6 = closure_1;
      tmp7 = closure_2;
      num = 9;
      obj = {};
      obj.blurTheme = blurTheme;
      tmp8 = StyleSheet;
      obj.style = StyleSheet.absoluteFill;
      items = [, ];
      items[0] = jsx(require("getIOSBlurEffect"), obj);
      tmp9 = jsx;
      tmp10 = View;
      obj1 = {};
      obj1.style = tmp.spoilerIconContainer;
      tmp11 = jsx;
      num2 = 10;
      obj2 = { style: null, height: 30, width: 30 };
      obj2.style = tmp.spoilerIcon;
      obj1.children = jsx(require("Spoiler"), obj2);
      items[1] = jsx(View, obj1);
      obj.children = items;
      tmp2 = jsxs(Fragment, obj);
    }
    return tmp2;
  }
}
function ForumPostMedia(obscureReason) {
  const _require = obscureReason;
  const tmp = _createForOfIteratorHelperLoose();
  const ref = React.useRef(null);
  let obj = _require(6835);
  const shouldAgeVerifyForReason = obj.useShouldAgeVerifyForReason(obscureReason.obscureReason);
  if (obscureReason.isMediaPost) {
    obj = {};
    const merged = Object.assign(obscureReason);
    let tmp6Result = callback2(ref(11135), obj);
    const tmp19 = ref(11135);
  } else {
    let obj1 = _require(477);
    if (obj1.isAndroid()) {
      obj = {};
      const merged1 = Object.assign(obscureReason);
      tmp6Result = tmp6(ForumPostMediaAndroid, obj);
    } else {
      obj1 = {};
      const merged2 = Object.assign(obscureReason);
      tmp6Result = tmp6(ForumPostMediaIOS, obj1);
    }
  }
  if (null != obscureReason.obscureReason) {
    const AGE_VERIFICATION_OBSCURABLE_REASONS = _require(5674).AGE_VERIFICATION_OBSCURABLE_REASONS;
    if (AGE_VERIFICATION_OBSCURABLE_REASONS.has(obscureReason.obscureReason)) {
      if (shouldAgeVerifyForReason) {
        const obj2 = {};
        const items = [tmp.mediaContainer, obscureReason.containerStyle];
        obj2.style = items;
        obj2.ref = ref;
        const obj3 = {
          androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
          activeOpacity: 0,
          onPress() {
                  let obj = ref(outer1_2[16]);
                  obj = { entryPoint: obscureReason(outer1_2[17]).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW };
                  const result = obj.showAgeVerificationGetStartedModal(obj);
                },
          children: tmp6Result
        };
        obj2.children = callback2(_require(4660).PressableOpacity, obj3);
        let tmp27 = callback2(closure_5, obj2);
      }
      return tmp27;
    }
  }
  if (null != obscureReason.onPress) {
    const obj4 = {};
    const items1 = [tmp.mediaContainer, obscureReason.containerStyle];
    obj4.style = items1;
    obj4.ref = ref;
    const obj5 = {
      androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
      activeOpacity: 0.8,
      onPress() {
          let onPressResult;
          if (null != obscureReason.onPress) {
            onPressResult = obscureReason.onPress(ref);
          }
          return onPressResult;
        },
      children: tmp6Result
    };
    obj4.children = callback2(_require(4660).PressableOpacity, obj5);
    tmp27 = callback2(closure_5, obj4);
  } else {
    const obj6 = {};
    const items2 = [tmp.mediaContainer, obscureReason.containerStyle];
    obj6.style = items2;
    obj6.ref = ref;
    obj6.children = tmp6Result;
    tmp27 = callback2(closure_5, obj6);
  }
}
function useSharedMediaProps(arg0) {
  let channel;
  let media;
  ({ channel, media } = arg0);
  let obj = require(11136) /* getForumPostShouldObscure */;
  const tmp = callback(obj.useShouldObscure({ media, channel }), 2);
  obj = { shouldObscure: tmp[0], obscureReason: tmp[1] };
  let str = "light";
  if (obj3.isThemeDark(theme.theme)) {
    str = "dark";
  }
  obj.blurTheme = str;
  const GifAutoPlay = require(3803) /* explicitContentFromProto */.GifAutoPlay;
  let tmp2 = "png";
  if (GifAutoPlay.useSetting()) {
    tmp2 = null;
  }
  obj.format = tmp2;
  return obj;
}
({ View: closure_5, StyleSheet: closure_6, ImageBackground: closure_7, PixelRatio } = get_ActivityIndicator);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = Math.min(PixelRatio.get(), 4);
let closure_14 = Math.min(PixelRatio.get(), 4);
_createForOfIteratorHelperLoose = { mediaContainer: { position: "relative", overflow: "hidden" } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.thumbnailBorder = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.thumbnail = { height: 80, width: 80 };
_createForOfIteratorHelperLoose.spoilerIconContainer = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center" };
_createForOfIteratorHelperLoose.spoilerIcon = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_300, alignSelf: "center" };
_createForOfIteratorHelperLoose.gridMediaContainer = { borderRadius: 2, overflow: "hidden" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_300, alignSelf: "center" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/forums/native/posts/ForumPostMedia.tsx");

export { ForumPostMediaSpoiler };
export { useSharedMediaProps };
export const ForumPostMediaThumbnail = function ForumPostMediaThumbnail(firstMessageId) {
  let blurTheme;
  let channel;
  let containerStyle;
  let embedLeftBorderColor;
  let format;
  let isLocalDeviceMedia;
  let obscureReason;
  let shouldObscure;
  ({ channel, isLocalDeviceMedia } = firstMessageId);
  firstMessageId = firstMessageId.firstMessageId;
  const media = firstMessageId.media;
  let isEmbed = firstMessageId.isEmbed;
  ({ embedLeftBorderColor, containerStyle } = firstMessageId);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { threadId: channel.id };
  const onTapMedia = firstMessageId(media[21])(obj).onTapMedia;
  let items = [firstMessageId, media, onTapMedia];
  const callback = format.useCallback((containerRef) => {
    const items = [media];
    onTapMedia({ messageId: firstMessageId, mediaItems: items, containerRef });
  }, items);
  const tmp3 = useSharedMediaProps({ channel, media });
  ({ shouldObscure, format } = tmp3);
  const items1 = [format, isLocalDeviceMedia, , , , ];
  ({ height: arr2[2], src: arr2[3], width: arr2[4], srcIsAnimated: arr2[5] } = media);
  ({ obscureReason, blurTheme } = tmp3);
  obj = { iosStyle: tmp.thumbnail, androidStyle: tmp.thumbnail };
  const items2 = [tmp.thumbnailBorder, , ];
  const memo = format.useMemo(() => {
    let obj = {};
    if (isLocalDeviceMedia) {
      obj.uri = media.src;
      let tmp7 = obj;
    } else {
      obj = {};
      ({ src: obj3.src, width: obj3.sourceWidth, height: obj3.sourceHeight } = media);
      const _Math = Math;
      obj.targetWidth = Math.ceil(80 * outer1_13);
      const _Math2 = Math;
      obj.targetHeight = Math.ceil(80 * outer1_13);
      obj.format = format;
      obj.animated = media.srcIsAnimated;
      obj.uri = isLocalDeviceMedia(media[22]).getSrcWithWidthAndHeight(obj);
      tmp7 = obj;
      const obj2 = isLocalDeviceMedia(media[22]);
    }
    return tmp7;
  }, items1);
  if (isEmbed) {
    obj = { borderLeftWidth: 2, borderLeftColor: embedLeftBorderColor };
    isEmbed = obj;
  }
  items2[1] = isEmbed;
  items2[2] = containerStyle;
  obj.containerStyle = items2;
  obj.obscureReason = obscureReason;
  obj.shouldSpoiler = null != shouldObscure && shouldObscure;
  obj.blurTheme = blurTheme;
  obj.source = memo;
  obj.onPress = callback;
  obj.isMediaPost = channel.isMediaPost();
  return closure_10(ForumPostMedia, obj);
};
export const ForumPostGridMedia = function ForumPostGridMedia(targetWidth) {
  let blurTheme;
  let channel;
  let format;
  let media;
  let obscureReason;
  let shouldObscure;
  ({ channel, media } = targetWidth);
  targetWidth = targetWidth.targetWidth;
  const targetHeight = targetWidth.targetHeight;
  const tmp2 = useSharedMediaProps({ channel, media });
  ({ shouldObscure, format } = tmp2);
  ({ obscureReason, blurTheme } = tmp2);
  const isMediaPostResult = channel.isMediaPost();
  const items = [, , , , , , ];
  ({ src: arr[0], width: arr[1], height: arr[2] } = media);
  items[3] = targetWidth;
  items[4] = targetHeight;
  items[5] = format;
  items[6] = isMediaPostResult;
  let obj = { containerStyle: _createForOfIteratorHelperLoose().gridMediaContainer, iosStyle: { height: targetHeight, width: targetWidth }, androidStyle: { height: targetHeight, width: targetWidth } };
  let tmp7 = null != shouldObscure;
  const memo = isMediaPostResult.useMemo(() => {
    if (result) {
      const _Math3 = Math;
      const bound = Math.min(1, targetWidth * outer1_14 / media.width, targetHeight * outer1_14 / media.height);
      let obj = {};
      obj = {};
      ({ src: obj6.src, width: obj6.sourceWidth, height: obj6.sourceHeight } = media);
      const _Math4 = Math;
      obj.targetWidth = Math.ceil(media.width * bound);
      const _Math5 = Math;
      obj.targetHeight = Math.ceil(media.height * bound);
      obj.format = format;
      obj.uri = media(targetHeight[22]).getSrcWithWidthAndHeight(obj);
      return obj;
    } else {
      obj = {};
      let obj1 = media(targetHeight[22]);
      obj1 = {};
      ({ src: obj3.src, width: obj3.sourceWidth, height: obj3.sourceHeight } = media);
      const _Math = Math;
      obj1.targetWidth = Math.ceil(targetWidth * outer1_14);
      const _Math2 = Math;
      obj1.targetHeight = Math.ceil(targetHeight * outer1_14);
      obj1.format = format;
      obj.uri = obj1.getSrcWithWidthAndHeight(obj1);
      return obj;
    }
  }, items);
  if (tmp7) {
    tmp7 = shouldObscure;
  }
  obj.shouldSpoiler = tmp7;
  obj.obscureReason = obscureReason;
  obj.blurTheme = blurTheme;
  obj.source = memo;
  obj.isPortrait = media.height >= media.width;
  obj.isMediaPost = isMediaPostResult;
  return closure_10(ForumPostMedia, obj);
};
