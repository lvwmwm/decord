// Module ID: 11122
// Function ID: 86563
// Name: ForumPostMediaAndroid
// Dependencies: []
// Exports: ForumPostGridMedia, ForumPostMediaThumbnail

// Module 11122 (ForumPostMediaAndroid)
let PixelRatio;
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
  const items = [callback2(importDefault(dependencyMap[8]), { style: iosStyle, source, resizeMode: "cover" }), callback2(ForumPostMediaSpoiler, { shouldSpoiler, blurTheme })];
  obj.children = items;
  return callback3(closure_11, obj);
}
class ForumPostMediaSpoiler {
  constructor(arg0) {
    ({ shouldSpoiler, blurTheme } = global);
    tmp = closure_15();
    tmp2 = null;
    if (shouldSpoiler) {
      tmp3 = jsxs;
      tmp4 = Fragment;
      obj = {};
      tmp5 = jsx;
      tmp6 = importDefault;
      tmp7 = dependencyMap;
      num = 9;
      obj = {};
      obj.blurTheme = blurTheme;
      tmp8 = StyleSheet;
      obj.style = StyleSheet.absoluteFill;
      items = [, ];
      items[0] = jsx(importDefault(dependencyMap[9]), obj);
      tmp9 = jsx;
      tmp10 = View;
      obj1 = {};
      obj1.style = tmp.spoilerIconContainer;
      tmp11 = jsx;
      num2 = 10;
      obj2 = {};
      obj2.style = tmp.spoilerIcon;
      obj1.children = jsx(importDefault(dependencyMap[10]), obj2);
      items[1] = jsx(View, obj1);
      obj.children = items;
      tmp2 = jsxs(Fragment, obj);
    }
    return tmp2;
  }
}
function ForumPostMedia(obscureReason) {
  const arg1 = obscureReason;
  const tmp = callback4();
  const ref = React.useRef(null);
  const importDefault = ref;
  let obj = arg1(dependencyMap[11]);
  const shouldAgeVerifyForReason = obj.useShouldAgeVerifyForReason(obscureReason.obscureReason);
  if (obscureReason.isMediaPost) {
    obj = {};
    const merged = Object.assign(obscureReason);
    let tmp6Result = callback2(importDefault(dependencyMap[12]), obj);
    const tmp19 = importDefault(dependencyMap[12]);
  } else {
    let obj1 = arg1(dependencyMap[13]);
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
    const AGE_VERIFICATION_OBSCURABLE_REASONS = arg1(dependencyMap[14]).AGE_VERIFICATION_OBSCURABLE_REASONS;
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
                  let obj = ref(closure_2[16]);
                  obj = { entryPoint: arg0(closure_2[17]).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW };
                  const result = obj.showAgeVerificationGetStartedModal(obj);
                },
          children: tmp6Result
        };
        obj2.children = callback2(arg1(dependencyMap[15]).PressableOpacity, obj3);
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
          if (null != arg0.onPress) {
            onPressResult = arg0.onPress(ref);
          }
          return onPressResult;
        },
      children: tmp6Result
    };
    obj4.children = callback2(arg1(dependencyMap[15]).PressableOpacity, obj5);
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
  let obj = arg1(dependencyMap[18]);
  const tmp = callback(obj.useShouldObscure({ media, channel }), 2);
  obj = { shouldObscure: tmp[0], obscureReason: tmp[1] };
  let str = "light";
  if (obj3.isThemeDark(theme.theme)) {
    str = "dark";
  }
  obj.blurTheme = str;
  const GifAutoPlay = arg1(dependencyMap[20]).GifAutoPlay;
  let tmp2 = "png";
  if (GifAutoPlay.useSetting()) {
    tmp2 = null;
  }
  obj.format = tmp2;
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, StyleSheet: closure_6, ImageBackground: closure_7, PixelRatio } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
const ANDROID_FOREGROUND_RIPPLE = arg1(dependencyMap[4]).ANDROID_FOREGROUND_RIPPLE;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = arg1(dependencyMap[5]));
let closure_13 = Math.min(PixelRatio.get(), 4);
let closure_14 = Math.min(PixelRatio.get(), 4);
let obj = arg1(dependencyMap[6]);
obj = { mediaContainer: {} };
obj = { borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.thumbnailBorder = obj;
obj.thumbnail = {};
obj.spoilerIconContainer = {};
const tmp3 = arg1(dependencyMap[5]);
obj.spoilerIcon = { color: importDefault(dependencyMap[7]).unsafe_rawColors.PRIMARY_300, alignSelf: "center" };
obj.gridMediaContainer = {};
let closure_15 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[7]).unsafe_rawColors.PRIMARY_300, alignSelf: "center" };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/forums/native/posts/ForumPostMedia.tsx");

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
  const arg1 = isLocalDeviceMedia;
  firstMessageId = firstMessageId.firstMessageId;
  const importDefault = firstMessageId;
  const media = firstMessageId.media;
  const dependencyMap = media;
  let isEmbed = firstMessageId.isEmbed;
  ({ embedLeftBorderColor, containerStyle } = firstMessageId);
  const tmp = callback4();
  let obj = { threadId: channel.id };
  const onTapMedia = importDefault(dependencyMap[21])(obj).onTapMedia;
  let closure_3 = onTapMedia;
  const items = [firstMessageId, media, onTapMedia];
  const callback = React.useCallback((containerRef) => {
    const items = [media];
    onTapMedia({ messageId: firstMessageId, mediaItems: items, containerRef });
  }, items);
  const tmp3 = useSharedMediaProps({ channel, media });
  ({ shouldObscure, format } = tmp3);
  const React = format;
  const items1 = [format, isLocalDeviceMedia, , , , ];
  ({ height: arr2[2], src: arr2[3], width: arr2[4], srcIsAnimated: arr2[5] } = media);
  ({ obscureReason, blurTheme } = tmp3);
  obj = { iosStyle: tmp.thumbnail, androidStyle: tmp.thumbnail };
  const items2 = [tmp.thumbnailBorder, , ];
  const memo = React.useMemo(() => {
    let obj = {};
    if (isLocalDeviceMedia) {
      obj.uri = media.src;
      let tmp7 = obj;
    } else {
      obj = {};
      ({ src: obj3.src, width: obj3.sourceWidth, height: obj3.sourceHeight } = media);
      const _Math = Math;
      obj.targetWidth = Math.ceil(80 * closure_13);
      const _Math2 = Math;
      obj.targetHeight = Math.ceil(80 * closure_13);
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
  const arg1 = media;
  targetWidth = targetWidth.targetWidth;
  const importDefault = targetWidth;
  const targetHeight = targetWidth.targetHeight;
  const dependencyMap = targetHeight;
  const tmp2 = useSharedMediaProps({ channel, media });
  ({ shouldObscure, format } = tmp2);
  let closure_3 = format;
  ({ obscureReason, blurTheme } = tmp2);
  const isMediaPostResult = channel.isMediaPost();
  const React = isMediaPostResult;
  const items = [, , , , , , ];
  ({ src: arr[0], width: arr[1], height: arr[2] } = media);
  items[3] = targetWidth;
  items[4] = targetHeight;
  items[5] = format;
  items[6] = isMediaPostResult;
  const obj = { containerStyle: callback4().gridMediaContainer, iosStyle: { height: targetHeight, width: targetWidth }, androidStyle: { height: targetHeight, width: targetWidth } };
  let tmp7 = null != shouldObscure;
  const memo = React.useMemo(() => {
    if (isMediaPostResult) {
      const _Math3 = Math;
      const bound = Math.min(1, targetWidth * closure_14 / media.width, targetHeight * closure_14 / media.height);
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
      obj1.targetWidth = Math.ceil(targetWidth * closure_14);
      const _Math2 = Math;
      obj1.targetHeight = Math.ceil(targetHeight * closure_14);
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
