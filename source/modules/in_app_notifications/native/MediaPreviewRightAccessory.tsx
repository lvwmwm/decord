// Module ID: 10309
// Function ID: 79548
// Name: VideoBadge
// Dependencies: [31, 27, 4122, 10237, 33, 4130, 689, 8286, 4126, 3834, 477, 4533, 4639, 8738, 624, 6835, 9870, 8298, 10271, 7807, 8276, 1449, 5085, 5670, 5675, 8302, 9615, 1273, 7873, 3991, 2]
// Exports: MediaPreviewRightAccessory

// Module 10309 (VideoBadge)
import result from "result";
import get_ActivityIndicator from "Button";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_10;
let closure_4;
let closure_8;
let closure_9;
const require = arg1;
function VideoBadge() {
  const tmp = _createForOfIteratorHelperLoose();
  obj = { style: tmp.badge, children: callback(require(8286) /* PlayIcon */.PlayIcon, obj) };
  obj = { style: tmp.icon, size: "custom", color: "white" };
  return callback(View, obj);
}
function CountBadge(total) {
  obj = { style: callback3().badge, children: callback(require(4126) /* Text */.Text, obj) };
  obj = { variant: "text-xs/semibold", color: "text-default", children: total.total };
  return callback(View, obj);
}
function ObscuredMediaOverlay(isSpoiler) {
  let children;
  let isObscured;
  ({ isObscured, children } = isSpoiler);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).colors.SPOILER_HIDDEN_BACKGROUND);
  if (!isObscured) {
    if (!isSpoiler.isSpoiler) {
      return children;
    }
  }
  let obj1 = require(477) /* set */;
  let str = "light";
  if (obj1.isAndroid()) {
    str = "dark";
  }
  obj = {};
  const items = [children, , , ];
  let tmp5 = isObscured;
  if (isObscured) {
    obj = { style: tmp.obscureBackground };
    tmp5 = callback(View, obj);
  }
  items[1] = tmp5;
  let tmp8 = !isObscured;
  if (tmp8) {
    obj1 = { blurTheme: str, android_fallbackColor: token, style: StyleSheet.absoluteFill };
    tmp8 = callback(importDefault(4533), obj1);
  }
  items[2] = tmp8;
  const obj2 = { style: tmp.spoilerIconContainer };
  if (isObscured) {
    let tmp15Result = tmp15(require(4639) /* ImageWarningIcon */.ImageWarningIcon, { size: "sm", color: "white" });
  } else {
    const obj3 = { style: tmp.spoilerPill, children: callback(require(8738) /* EyeIcon */.EyeIcon, { size: "sm", color: "white" }) };
    tmp15Result = tmp15(View, obj3);
  }
  obj2.children = tmp15Result;
  items[3] = callback(View, obj2);
  obj.children = items;
  return closure_10(closure_9, obj);
}
function SinglePreviewableMedia(arg0) {
  let height;
  let icon;
  let media;
  let message;
  let previewableMedia;
  let size;
  let type;
  let width;
  ({ previewableMedia, size, message } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.useReducedMotion);
  ({ type, media, icon } = previewableMedia);
  let obj1 = require(6835) /* timeoutAttachmentsAndEmbedsForMessage */;
  const shouldAgeVerifyForExplicitMedia = obj1.useShouldAgeVerifyForExplicitMedia();
  let obj2 = require(9870) /* useEnabledHarmTypesBitmaskForChannelAndAuthorId */;
  const enabledHarmTypesBitmaskForMessage = obj2.useEnabledHarmTypesBitmaskForMessage(message);
  let obj3 = require(8298) /* apexExperiment */;
  const rnvHttpEngine = obj3.useRnvHttpEngine();
  if (require(10271) /* _createForOfIteratorHelperLoose */.PreviewableMediaTypes.VOICE_MESSAGE === type) {
    obj = {};
    obj = { width: size, height: size };
    obj.style = obj;
    obj.children = icon;
    return callback(View, obj);
  } else {
    if (require(10271) /* _createForOfIteratorHelperLoose */.PreviewableMediaTypes.AUDIO !== type) {
      if (require(10271) /* _createForOfIteratorHelperLoose */.PreviewableMediaTypes.FILE !== type) {
        if (require(10271) /* _createForOfIteratorHelperLoose */.PreviewableMediaTypes.IMAGE !== type) {
          if (require(10271) /* _createForOfIteratorHelperLoose */.PreviewableMediaTypes.VIDEO !== type) {
            if (require(10271) /* _createForOfIteratorHelperLoose */.PreviewableMediaTypes.GIF === type) {
              const video = media.video;
              if (null != video) {
                const url = video.url;
              }
              const thumbnail = media.thumbnail;
              if (null == thumbnail) {
                return null;
              } else {
                const author = message.author;
                let id;
                if (null != author) {
                  id = author.id;
                }
                const enabledHarmTypesForChannelAndAuthorId = require(5670) /* _createForOfIteratorHelperLoose */.getEnabledHarmTypesForChannelAndAuthorId(message.channel_id, id);
                const obj25 = require(5670) /* _createForOfIteratorHelperLoose */;
                obj1 = {};
                const getMediaObscuredReasonFromBitmask = require(5670) /* _createForOfIteratorHelperLoose */.getMediaObscuredReasonFromBitmask;
                obj1.type = require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Embed;
                obj1.media = media;
                if (null != thumbnail.proxyURL) {
                  if ("" !== thumbnail.proxyURL) {
                    let url2 = thumbnail.proxyURL;
                  }
                  obj2 = {};
                  const items1 = [tmp.mediaThumbnailContainer, ];
                  obj3 = { width: size, height: size };
                  items1[1] = obj3;
                  obj2.style = items1;
                  const obj4 = { isObscured: tmp18, isSpoiler: false };
                  if (null != url) {
                    if ("" !== url) {
                      if (!stateFromStores) {
                        const obj5 = { resizeMode: "cover", width: size, height: size, paused: false };
                        const obj6 = { videoURI: url };
                        obj5.src = obj6;
                        obj5.poster = url2;
                        obj5.postponeRender = false;
                        obj5.httpEngine = rnvHttpEngine;
                        let tmp26 = callback(importDefault(8302), obj5);
                      }
                      obj4.children = tmp26;
                      obj2.children = tmp21(tmp22, obj4);
                      return tmp19(tmp20, obj2);
                    }
                  }
                  const obj7 = {};
                  const obj8 = { uri: url2 };
                  obj7.source = obj8;
                  obj7.style = tmp.mediaThumbnail;
                  obj7.resizeMode = "cover";
                  tmp26 = callback(importDefault(5085), obj7);
                }
                url2 = thumbnail.url;
                const tmp17 = require(5670) /* _createForOfIteratorHelperLoose */;
              }
            } else if (require(10271) /* _createForOfIteratorHelperLoose */.PreviewableMediaTypes.STICKER === type) {
              const obj9 = {};
              const items2 = [tmp.mediaThumbnailContainer, ];
              const obj10 = { width: size, height: size };
              items2[1] = obj10;
              obj9.style = items2;
              const obj11 = { sticker: media, size, animated: !stateFromStores };
              obj9.children = callback(importDefault(9615), obj11);
              return callback(View, obj9);
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
                const obj12 = { attachment: media, shouldObscureSpoiler: true, enabledContentHarmTypeFlags: enabledHarmTypesBitmaskForMessage, shouldAgeVerify: shouldAgeVerifyForExplicitMedia };
                const attachmentObscurityProps = require(7807) /* getContentScanVersionFromMedia */.getAttachmentObscurityProps(obj12);
                const obj26 = require(7807) /* getContentScanVersionFromMedia */;
                const attachmentUrl = require(8276) /* _createForOfIteratorHelperLoose */.getAttachmentUrl(media);
                const obj28 = require(8276) /* _createForOfIteratorHelperLoose */;
                const obj13 = { src: attachmentUrl, sourceWidth: width, sourceHeight: height, targetWidth: 2 * size, targetHeight: 2 * size, animated: false };
                let str5;
                if (type === require(10271) /* _createForOfIteratorHelperLoose */.PreviewableMediaTypes.VIDEO) {
                  str5 = "png";
                }
                obj13.format = str5;
                const obj14 = {};
                const items3 = [tmp.mediaThumbnailContainer, ];
                const obj15 = { width: size, height: size };
                items3[1] = obj15;
                obj14.style = items3;
                const obj16 = {};
                ({ obscure: obj18.isObscured, isSpoiler: obj18.isSpoiler } = attachmentObscurityProps);
                const srcWithWidthAndHeight = require(1449) /* clampDimension */.getSrcWithWidthAndHeight(obj13);
                const obj17 = {};
                const obj18 = { uri: srcWithWidthAndHeight };
                obj17.source = obj18;
                obj17.style = tmp.mediaThumbnail;
                obj17.resizeMode = "cover";
                const items4 = [callback(importDefault(5085), obj17), ];
                let tmp40 = null;
                if (type === require(10271) /* _createForOfIteratorHelperLoose */.PreviewableMediaTypes.VIDEO) {
                  tmp40 = callback(VideoBadge, {});
                }
                items4[1] = tmp40;
                obj16.children = items4;
                obj14.children = closure_10(ObscuredMediaOverlay, obj16);
                return callback(View, obj14);
              }
            }
          }
        }
        return null;
      }
    }
    const obj19 = {};
    const items5 = [tmp.iconContainer, ];
    const obj20 = { width: size, height: size };
    items5[1] = obj20;
    obj19.style = items5;
    obj19.children = icon;
    return callback(View, obj19);
  }
}
function MultiplePreviewableMedia(arg0) {
  let message;
  let previewableMedia;
  let totalMediaCount;
  ({ previewableMedia, totalMediaCount, message } = arg0);
  let obj = { style: callback4().container };
  const memo = React.useMemo(() => {
    const BADGE_PADDING = outer1_0(outer1_2[27]).BADGE_PADDING;
    const sum = BADGE_PADDING + 5;
    const roundToNearestPixelResult = outer1_4.roundToNearestPixel(20 + 2 * BADGE_PADDING);
    const obj = { shape: outer1_0(outer1_2[28]).CutoutShape.RoundedRect, x: 56 - roundToNearestPixelResult + sum, y: -sum, width: roundToNearestPixelResult, height: roundToNearestPixelResult, cornerRadius: outer1_4.roundToNearestPixel(roundToNearestPixelResult / 2) };
    return obj;
  }, []);
  obj = { cutouts: items };
  items = [memo];
  const tmp = callback4();
  obj.children = callback(SinglePreviewableMedia, { previewableMedia, size: 56, message });
  const items1 = [callback(importDefault(7873), obj), callback(CountBadge, { total: totalMediaCount })];
  obj.children = items1;
  return callback2(View, obj);
}
function MediaPreviewRightAccessoryContent(arg0) {
  let message;
  let totalMediaCount;
  ({ totalMediaCount, message } = arg0);
  const first = arg0.previewableMedia[0];
  if (1 === totalMediaCount) {
    let obj = { previewableMedia: first, size: 64, message };
    let tmp4 = callback(SinglePreviewableMedia, obj);
  } else {
    obj = { previewableMedia: first, totalMediaCount, message };
    tmp4 = callback(MultiplePreviewableMedia, obj);
  }
  return tmp4;
}
function ExpandableMediaPreview(accessoryExitProgressSV) {
  let message;
  let previewableMedia;
  let totalMediaCount;
  accessoryExitProgressSV = accessoryExitProgressSV.accessoryExitProgressSV;
  ({ message, totalMediaCount, previewableMedia } = accessoryExitProgressSV);
  let obj = accessoryExitProgressSV(3991);
  const fn = function l() {
    const value = accessoryExitProgressSV.get();
    let obj = { opacity: 1 - value, transform: items };
    obj = { scale: 1 - value };
    items = [obj];
    return obj;
  };
  fn.__closure = { accessoryExitProgressSV };
  fn.__workletHash = 9116777278421;
  fn.__initData = closure_16;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items };
  items = [callback5().rightAccessoryAbsolute, animatedStyle];
  obj.children = callback(MediaPreviewRightAccessoryContent, { previewableMedia, totalMediaCount, message });
  return callback(importDefault(3991).View, obj);
}
function SimpleMediaPreview(arg0) {
  let message;
  let previewableMedia;
  let totalMediaCount;
  ({ message, previewableMedia, totalMediaCount } = arg0);
  return callback(View, { style: callback5().rightAccessoryContainer, children: callback(MediaPreviewRightAccessoryContent, { previewableMedia, totalMediaCount, message }) });
}
({ PixelRatio: closure_4, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, width: 16, height: 16, position: "absolute", bottom: 4, left: 4 };
_createForOfIteratorHelperLoose.badge = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.icon = { width: 10, height: 10 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = {};
let obj2 = { width: 20, height: 20, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", justifyContent: "center", position: "absolute", right: -5, top: -5 };
obj1.badge = obj2;
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj1);
_createForOfIteratorHelperLoose = { mediaThumbnailContainer: { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" }, mediaThumbnail: { width: "100%", height: "100%" } };
let obj5 = { alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.iconContainer = obj5;
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["backgroundColor"] = require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_500;
_createForOfIteratorHelperLoose.obscureBackground = _createForOfIteratorHelperLoose;
let obj7 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj7["justifyContent"] = "center";
obj7["alignItems"] = "center";
_createForOfIteratorHelperLoose.spoilerIconContainer = obj7;
let obj4 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.spoilerPill = { padding: require("_createForOfIteratorHelperLoose").space.PX_4, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_14 = _createForOfIteratorHelperLoose.createStyles({ container: { overflow: "visible" } });
let obj9 = { rightAccessoryContainer: { marginLeft: require("set").RIGHT_ACCESSORY_LEFT_MARGIN } };
let obj8 = { padding: require("_createForOfIteratorHelperLoose").space.PX_4, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
obj9.rightAccessoryAbsolute = { position: "absolute", right: require("_createForOfIteratorHelperLoose").space.PX_12, top: require("_createForOfIteratorHelperLoose").space.PX_12 };
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj9);
let closure_16 = { code: "function MediaPreviewRightAccessoryTsx1(){const{accessoryExitProgressSV}=this.__closure;const progress=accessoryExitProgressSV.get();return{opacity:1-progress,transform:[{scale:1-progress}]};}" };
let obj10 = { position: "absolute", right: require("_createForOfIteratorHelperLoose").space.PX_12, top: require("_createForOfIteratorHelperLoose").space.PX_12 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/in_app_notifications/native/MediaPreviewRightAccessory.tsx");

export const PREVIEW_SIZE = 64;
export const MediaPreviewRightAccessory = function MediaPreviewRightAccessory(arg0) {
  let accessoryExitProgressSV;
  let message;
  ({ message, accessoryExitProgressSV } = arg0);
  let obj = require(10271) /* _createForOfIteratorHelperLoose */;
  const previewableMedia = obj.usePreviewableMedia(message);
  if (0 === previewableMedia.length) {
    return null;
  } else if (null != accessoryExitProgressSV) {
    obj = { message, previewableMedia, totalMediaCount: length, accessoryExitProgressSV };
    let tmp3 = callback(ExpandableMediaPreview, obj);
  } else {
    obj = { message, previewableMedia, totalMediaCount: length };
    tmp3 = callback(SimpleMediaPreview, obj);
  }
};
