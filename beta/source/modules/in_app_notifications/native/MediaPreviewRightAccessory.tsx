// Module ID: 9634
// Function ID: 9635
// Name: MediaPreviewRightAccessory
// Dependencies: [19, 17, 4825, 9555, 21, 4836, 576, 7722, 4832, 4531, 1364, 5269, 5395, 6389, 563, 7020, 9635, 9590, 7582, 7713, 1478, 5899, 6710, 6715, 7755, 9636, 1177, 8276, 2]
// Exports: MediaPreviewRightAccessory

// Module 9634 (MediaPreviewRightAccessory)
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import utils_ImageUtils from "utils/ImageUtils" /* 1478 */;
import useToken from "useToken" /* 4531 */;
import Text_Text from "Text/Text" /* 4832 */;
import FastImageDefault from "FastImage" /* 5899 */;
import EyeIcon from "EyeIcon" /* 6389 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 6710 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 6715 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7020 */;
import ExplicitMediaUtils from "ExplicitMediaUtils" /* 7582 */;
import MediaSourceUtil from "MediaSourceUtil" /* 7713 */;
import PlayIcon from "PlayIcon" /* 7722 */;
import common_VideoDefault from "common/Video" /* 7755 */;
import ClipView from "ClipView" /* 8276 */;
import InAppNotificationConstants from "InAppNotificationConstants" /* 9555 */;
import usePreviewableMedia from "usePreviewableMedia" /* 9590 */;
import useContentHarmTypes from "useContentHarmTypes" /* 9635 */;
import StickerDefault from "Sticker" /* 9636 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const ClipViewDefault = ClipView;

let StyleSheet;
let c10;
let c9;
let closure_4;
let metroImportAll;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let size1;
let tmp4;
const VisualEffectViewDefault = tmp4(5269);
function VideoBadge() {
  let obj2;
  const tmp = closure_11();
  const obj = { style: tmp.badge, children: metroImportAll(PlayIcon.PlayIcon, obj2) };
  obj2 = { style: tmp.icon, size: "custom", color: "white" };
  return metroImportAll(View, obj);
}
function CountBadge(total) {
  total = total.total;
  const obj = { style: closure_12().badge, children: metroImportAll(Text_Text.Text, { variant: "text-xs/semibold", color: "text-default", children: total }) };
  return metroImportAll(View, obj);
}
function ObscuredMediaOverlay(isSpoiler) {
  let children;
  let isObscured;
  let tmp14Result;
  ({ isObscured, children } = isSpoiler);
  isSpoiler = isSpoiler.isSpoiler;
  const tmp = closure_13();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND);
  if (!isObscured) {
    if (!isSpoiler) {
      return children;
    }
  }
  let str = "light";
  const tmp2Result = PlatformUtils;
  if (tmp2Result.isAndroid()) {
    str = "dark";
  }
  const items = [children, , , ];
  let tmp8 = isObscured;
  const tmp6 = authStore;
  const tmp7 = React4;
  if (isObscured) {
    const obj2 = { style: tmp.obscureBackground };
    tmp8 = metroImportAll(View, obj2);
  }
  items[1] = tmp8;
  let tmp11 = !isObscured;
  if (tmp11) {
    const obj3 = { blurTheme: str, android_fallbackColor: token, style: StyleSheet.absoluteFill };
    tmp11 = metroImportAll(VisualEffectViewDefault, obj3);
  }
  items[2] = tmp11;
  const obj4 = { style: tmp.spoilerIconContainer, children: tmp14Result };
  if (isObscured) {
    tmp14Result = tmp14(tmp2(5395).ImageWarningIcon, { size: "sm", color: "white" });
  } else {
    const obj5 = { style: tmp.spoilerPill, children: metroImportAll(EyeIcon.EyeIcon, { size: "sm", color: "white" }) };
    tmp14Result = tmp14(tmp15, obj5);
  }
  const obj6 = { children: items };
  items[3] = metroImportAll(View, obj4);
  return tmp6(tmp7, obj6);
}
function SinglePreviewableMedia(arg0) {
  let height;
  let icon;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let media;
  let message;
  let obj10;
  let obj12;
  let obj16;
  let obj19;
  let obj8;
  let previewableMedia;
  let size1;
  let str3;
  let tmp26;
  let tmp27;
  let type;
  let useReducedMotion;
  let width;
  ({ previewableMedia, size, message } = arg0);
  const tmp = closure_13();
  const items = [AccessibilityStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  ({ type, media, icon } = previewableMedia);
  const obj2 = ExplicitMediaRedactionUtils;
  const shouldAgeVerifyForExplicitMedia = obj2.useShouldAgeVerifyForExplicitMedia();
  const obj3 = useContentHarmTypes;
  const enabledHarmTypesBitmaskForMessage = obj3.useEnabledHarmTypesBitmaskForMessage(message);
  if (usePreviewableMedia.PreviewableMediaTypes.VOICE_MESSAGE === type) {
    const obj4 = { style: size1, children: icon };
    size1 = { width: size, height: size };
    return metroImportAll(View, obj4);
  } else {
    if (usePreviewableMedia.PreviewableMediaTypes.AUDIO !== type) {
      if (usePreviewableMedia.PreviewableMediaTypes.FILE !== type) {
        if (usePreviewableMedia.PreviewableMediaTypes.IMAGE !== type) {
          if (usePreviewableMedia.PreviewableMediaTypes.VIDEO !== type) {
            if (usePreviewableMedia.PreviewableMediaTypes.GIF === type) {
              let url;
              const video = media.video;
              if (video != null) {
                url = video.url;
              }
              const thumbnail = media.thumbnail;
              if (null == thumbnail) {
                return null;
              } else {
                const author = message.author;
                let id;
                const getEnabledHarmTypesForChannelAndAuthorId = ObscuredMediaUtils.getEnabledHarmTypesForChannelAndAuthorId;
                const channel_id = message.channel_id;
                ObscuredMediaUtils;
                if (author != null) {
                  id = author.id;
                }
                const enabledHarmTypesForChannelAndAuthorId = getEnabledHarmTypesForChannelAndAuthorId(channel_id, id);
                ({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media });
                const getMediaObscuredReasonFromBitmask = ObscuredMediaUtils.getMediaObscuredReasonFromBitmask;
                ObscuredMediaUtils;
                if (null != thumbnail.proxyURL) {
                  let url2;
                  if ("" !== thumbnail.proxyURL) {
                    url2 = thumbnail.proxyURL;
                  }
                  const obj6 = { style: items1, children: null };
                  items1 = [tmp.mediaThumbnailContainer, ];
                  const size2 = { width: size, height: size };
                  items1[1] = size2;
                  const obj7 = { isObscured: tmp15, isSpoiler: false, children: null };
                  if (null != url) {
                    if ("" !== url) {
                      let tmp16Result;
                      if (!stateFromStores) {
                        const size3 = { resizeMode: "cover", width: size, height: size, paused: false, src: obj8, poster: url2, postponeRender: false };
                        obj8 = { videoURI: url };
                        tmp16Result = tmp16(common_VideoDefault, size3);
                      }
                      obj7.children = tmp16Result;
                      obj6.children = metroImportAll(tmp18, obj7);
                      return metroImportAll(tmp17, obj6);
                    }
                  }
                  const obj9 = { source: obj10, style: tmp.mediaThumbnail, resizeMode: "cover" };
                  obj10 = { uri: url2 };
                  tmp16Result = tmp16(FastImageDefault, obj9);
                }
                url2 = thumbnail.url;
              }
            } else if (usePreviewableMedia.PreviewableMediaTypes.STICKER === type) {
              const obj11 = { style: items2, children: metroImportAll(StickerDefault, obj12) };
              items2 = [tmp.mediaThumbnailContainer, ];
              const size4 = { width: size, height: size };
              items2[1] = size4;
              obj12 = { sticker: media, size, animated: !stateFromStores };
              return metroImportAll(View, obj11);
            } else {
              return null;
            }
          }
        }
        ({ width, height } = media);
        if (null != width) {
          if (width > 0) {
            if (null != height) {
              if (height > 0) {
                const obj13 = { attachment: media, shouldObscureSpoiler: true, enabledContentHarmTypeFlags: enabledHarmTypesBitmaskForMessage, shouldAgeVerify: shouldAgeVerifyForExplicitMedia };
                const tmp2Result6 = ExplicitMediaUtils;
                const attachmentObscurityProps = tmp2Result6.getAttachmentObscurityProps(obj13);
                const tmp2Result7 = MediaSourceUtil;
                const attachmentUrl = tmp2Result7.getAttachmentUrl(media);
                const obj14 = { src: attachmentUrl, sourceWidth: width, sourceHeight: height, targetWidth: 2 * size, targetHeight: 2 * size, animated: false, format: str3 };
                const getSrcWithWidthAndHeight = utils_ImageUtils.getSrcWithWidthAndHeight;
                str3 = undefined;
                utils_ImageUtils;
                if (type === usePreviewableMedia.PreviewableMediaTypes.VIDEO) {
                  str3 = "png";
                }
                const obj15 = { style: items3, children: tmp26(tmp27, obj16) };
                items3 = [tmp.mediaThumbnailContainer, ];
                const size5 = { width: size, height: size };
                items3[1] = size5;
                obj16 = { isObscured: null, isSpoiler: null, children: items4 };
                ({ obscure: obj17.isObscured, isSpoiler: obj17.isSpoiler } = attachmentObscurityProps);
                const srcWithWidthAndHeight = getSrcWithWidthAndHeight(obj14);
                const obj18 = { source: obj19, style: tmp.mediaThumbnail, resizeMode: "cover" };
                obj19 = { uri: srcWithWidthAndHeight };
                items4 = [metroImportAll(FastImageDefault, obj18), ];
                let tmp24Result = null;
                const tmp25 = View;
                tmp26 = authStore;
                tmp27 = ObscuredMediaOverlay;
                if (type === usePreviewableMedia.PreviewableMediaTypes.VIDEO) {
                  tmp24Result = tmp24(VideoBadge, {});
                }
                items4[1] = tmp24Result;
                return metroImportAll(tmp25, obj15);
              }
            }
          }
        }
        return null;
      }
    }
    const obj20 = { style: items5, children: icon };
    items5 = [tmp.iconContainer, ];
    const size6 = { width: size, height: size };
    items5[1] = size6;
    return metroImportAll(View, obj20);
  }
}
function MultiplePreviewableMedia(arg0) {
  let items;
  let items1;
  let message;
  let previewableMedia;
  let totalMediaCount;
  ({ previewableMedia, totalMediaCount, message } = arg0);
  const obj = { style: closure_14().container, children: items1 };
  const memo = react.useMemo(() => {
    let roundToNearestPixelResult1;
    const BADGE_PADDING = native.BADGE_PADDING;
    const sum = BADGE_PADDING + 5;
    const roundToNearestPixelResult = closure_1_4.roundToNearestPixel(20 + 2 * BADGE_PADDING);
    size = { shape: ClipView.CutoutShape.RoundedRect, x: 56 - roundToNearestPixelResult + sum, y: -sum, width: roundToNearestPixelResult, height: roundToNearestPixelResult, cornerRadius: roundToNearestPixelResult1 };
    roundToNearestPixelResult1 = closure_1_4.roundToNearestPixel(roundToNearestPixelResult / 2);
    return size;
  }, []);
  const obj2 = { cutouts: items, children: metroImportAll(SinglePreviewableMedia, { previewableMedia, size: 56, message }) };
  items = [memo];
  const tmp3 = ClipViewDefault;
  items1 = [metroImportAll(tmp3, obj2), metroImportAll(CountBadge, { total: totalMediaCount })];
  return authStore(View, obj);
}
function MediaPreviewRightAccessoryContent(arg0) {
  let message;
  let tmp4;
  let totalMediaCount;
  ({ totalMediaCount, message } = arg0);
  const first = arg0.previewableMedia[0];
  if (1 === totalMediaCount) {
    const obj2 = { previewableMedia: first, size: 64, message };
    tmp4 = metroImportAll(SinglePreviewableMedia, obj2);
  } else {
    const obj = { previewableMedia: first, totalMediaCount, message };
    tmp4 = metroImportAll(MultiplePreviewableMedia, obj);
  }
  return tmp4;
}
({ PixelRatio: closure_4, StyleSheet } = react_native);
const View = react_native.View;
const RIGHT_ACCESSORY_LEFT_MARGIN = InAppNotificationConstants.RIGHT_ACCESSORY_LEFT_MARGIN;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { badge: size, icon: { width: 10, height: 10 } };
size = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.xs, width: 16, height: 16, position: "absolute", bottom: 4, left: 4 };
let closure_11 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let obj2 = { badge: size1 };
size1 = { width: 20, height: 20, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", position: "absolute", right: -5, top: -5 };
let closure_12 = createStyles.createStyles(obj2);
createStyles = createStyles_mod;
let obj3 = { mediaThumbnailContainer: obj4, mediaThumbnail: { width: "100%", height: "100%" }, iconContainer: obj5, obscureBackground: obj6, spoilerIconContainer: obj7, spoilerPill: obj8 };
obj4 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj5 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.sm };
obj6 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj7 = { justifyContent: "center", alignItems: "center" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj8 = { padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
let closure_13 = createStyles(obj3);
createStyles = createStyles_mod;
let closure_14 = createStyles.createStyles({ container: { overflow: "visible" } });
createStyles = createStyles_mod;
let obj9 = { rightAccessoryContainer: { marginLeft: RIGHT_ACCESSORY_LEFT_MARGIN } };
let closure_15 = createStyles.createStyles(obj9);
size = size_mod;
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MediaPreviewRightAccessory.tsx");

export const MediaPreviewRightAccessory = function MediaPreviewRightAccessory(message) {
  let obj3;
  message = message.message;
  const tmp = closure_15();
  const obj = usePreviewableMedia;
  const previewableMedia = obj.usePreviewableMedia(message);
  let tmp2 = null;
  if (0 !== previewableMedia.length) {
    const obj2 = { style: tmp.rightAccessoryContainer, children: metroImportAll(MediaPreviewRightAccessoryContent, obj3) };
    obj3 = { previewableMedia, totalMediaCount: previewableMedia.length, message };
    tmp2 = metroImportAll(View, obj2);
  }
  return tmp2;
};
