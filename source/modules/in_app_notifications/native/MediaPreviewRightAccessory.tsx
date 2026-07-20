// Module ID: 10289
// Function ID: 79432
// Name: VideoBadge
// Dependencies: []
// Exports: MediaPreviewRightAccessory

// Module 10289 (VideoBadge)
let StyleSheet;
function VideoBadge() {
  const tmp = callback3();
  let obj = { style: tmp.badge, children: callback(arg1(dependencyMap[7]).PlayIcon, obj) };
  obj = { "Bool(true)": "text-sm/bold", "Bool(true)": "text-muted", "Bool(true)": "BUG_REPORTER", style: tmp.icon };
  return callback(View, obj);
}
function CountBadge(total) {
  let obj = { style: callback4().badge, children: callback(arg1(dependencyMap[8]).Text, obj) };
  obj = { INTEGRATION_CREATE: 16, ConstraintReasonCode: true, children: total.total };
  return callback(View, obj);
}
function ObscuredMediaOverlay(isSpoiler) {
  let children;
  let isObscured;
  ({ isObscured, children } = isSpoiler);
  const tmp = callback5();
  let obj = arg1(dependencyMap[9]);
  const token = obj.useToken(importDefault(dependencyMap[6]).colors.SPOILER_HIDDEN_BACKGROUND);
  if (!isObscured) {
    if (!isSpoiler.isSpoiler) {
      return children;
    }
  }
  let obj1 = arg1(dependencyMap[10]);
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
    tmp8 = callback(importDefault(dependencyMap[11]), obj1);
  }
  items[2] = tmp8;
  const obj2 = { style: tmp.spoilerIconContainer };
  if (isObscured) {
    let tmp15Result = tmp15(arg1(dependencyMap[12]).ImageWarningIcon, { flexDirection: null, alignItems: "4550be26e4ce88ab0a8f2d917df660a6" });
  } else {
    const obj3 = { style: tmp.spoilerPill, children: callback(arg1(dependencyMap[13]).EyeIcon, { flexDirection: null, alignItems: "4550be26e4ce88ab0a8f2d917df660a6" }) };
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
  const tmp = callback5();
  let obj = arg1(dependencyMap[14]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  ({ type, media, icon } = previewableMedia);
  let obj1 = arg1(dependencyMap[15]);
  const shouldAgeVerifyForExplicitMedia = obj1.useShouldAgeVerifyForExplicitMedia();
  let obj2 = arg1(dependencyMap[16]);
  const enabledHarmTypesBitmaskForMessage = obj2.useEnabledHarmTypesBitmaskForMessage(message);
  let obj3 = arg1(dependencyMap[17]);
  const rnvHttpEngine = obj3.useRnvHttpEngine();
  if (arg1(dependencyMap[18]).PreviewableMediaTypes.VOICE_MESSAGE === type) {
    obj = {};
    obj = { width: size, height: size };
    obj.style = obj;
    obj.children = icon;
    return callback(View, obj);
  } else {
    if (arg1(dependencyMap[18]).PreviewableMediaTypes.AUDIO !== type) {
      if (arg1(dependencyMap[18]).PreviewableMediaTypes.FILE !== type) {
        if (arg1(dependencyMap[18]).PreviewableMediaTypes.IMAGE !== type) {
          if (arg1(dependencyMap[18]).PreviewableMediaTypes.VIDEO !== type) {
            if (arg1(dependencyMap[18]).PreviewableMediaTypes.GIF === type) {
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
                const enabledHarmTypesForChannelAndAuthorId = arg1(dependencyMap[23]).getEnabledHarmTypesForChannelAndAuthorId(message.channel_id, id);
                const obj25 = arg1(dependencyMap[23]);
                obj1 = {};
                const getMediaObscuredReasonFromBitmask = arg1(dependencyMap[23]).getMediaObscuredReasonFromBitmask;
                obj1.type = arg1(dependencyMap[24]).ObscuredMediaTypes.Embed;
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
                        let tmp26 = callback(importDefault(dependencyMap[25]), obj5);
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
                  tmp26 = callback(importDefault(dependencyMap[22]), obj7);
                }
                url2 = thumbnail.url;
                const tmp17 = arg1(dependencyMap[23]);
              }
            } else if (arg1(dependencyMap[18]).PreviewableMediaTypes.STICKER === type) {
              const obj9 = {};
              const items2 = [tmp.mediaThumbnailContainer, ];
              const obj10 = { width: size, height: size };
              items2[1] = obj10;
              obj9.style = items2;
              const obj11 = { sticker: media, size, animated: !stateFromStores };
              obj9.children = callback(importDefault(dependencyMap[26]), obj11);
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
                const attachmentObscurityProps = arg1(dependencyMap[19]).getAttachmentObscurityProps(obj12);
                const obj26 = arg1(dependencyMap[19]);
                const attachmentUrl = arg1(dependencyMap[20]).getAttachmentUrl(media);
                const obj28 = arg1(dependencyMap[20]);
                const obj13 = { src: attachmentUrl, sourceWidth: width, sourceHeight: height, targetWidth: 2 * size, targetHeight: 2 * size, animated: false };
                let str5;
                if (type === arg1(dependencyMap[18]).PreviewableMediaTypes.VIDEO) {
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
                const srcWithWidthAndHeight = arg1(dependencyMap[21]).getSrcWithWidthAndHeight(obj13);
                const obj17 = {};
                const obj18 = { uri: srcWithWidthAndHeight };
                obj17.source = obj18;
                obj17.style = tmp.mediaThumbnail;
                obj17.resizeMode = "cover";
                const items4 = [callback(importDefault(dependencyMap[22]), obj17), ];
                let tmp40 = null;
                if (type === arg1(dependencyMap[18]).PreviewableMediaTypes.VIDEO) {
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
  let obj = { style: callback6().container };
  const memo = React.useMemo(() => {
    const BADGE_PADDING = callback(closure_2[27]).BADGE_PADDING;
    const sum = BADGE_PADDING + 5;
    const roundToNearestPixelResult = closure_4.roundToNearestPixel(20 + 2 * BADGE_PADDING);
    const obj = { shape: callback(closure_2[28]).CutoutShape.RoundedRect, x: 56 - roundToNearestPixelResult + sum, y: -sum, width: roundToNearestPixelResult, height: roundToNearestPixelResult, cornerRadius: closure_4.roundToNearestPixel(roundToNearestPixelResult / 2) };
    return obj;
  }, []);
  obj = { cutouts: items };
  const items = [memo];
  const tmp = callback6();
  obj.children = callback(SinglePreviewableMedia, { previewableMedia, size: 56, message });
  const items1 = [callback(importDefault(dependencyMap[28]), obj), callback(CountBadge, { total: totalMediaCount })];
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
  const arg1 = accessoryExitProgressSV;
  ({ message, totalMediaCount, previewableMedia } = accessoryExitProgressSV);
  let obj = arg1(dependencyMap[29]);
  const fn = function l() {
    const value = accessoryExitProgressSV.get();
    let obj = { opacity: 1 - value, transform: items };
    obj = { scale: 1 - value };
    const items = [obj];
    return obj;
  };
  fn.__closure = { accessoryExitProgressSV };
  fn.__workletHash = 9116777278421;
  fn.__initData = closure_16;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items };
  const items = [callback7().rightAccessoryAbsolute, animatedStyle];
  obj.children = callback(MediaPreviewRightAccessoryContent, { previewableMedia, totalMediaCount, message });
  return callback(importDefault(dependencyMap[29]).View, obj);
}
function SimpleMediaPreview(arg0) {
  let message;
  let previewableMedia;
  let totalMediaCount;
  ({ message, previewableMedia, totalMediaCount } = arg0);
  return callback(View, { style: callback7().rightAccessoryContainer, children: callback(MediaPreviewRightAccessoryContent, { previewableMedia, totalMediaCount, message }) });
}
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
({ PixelRatio: closure_4, StyleSheet } = tmp2);
const View = tmp2.View;
let closure_7 = importDefault(dependencyMap[2]);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { manifest: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010472572970246282, handlePushToTalk: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000518728505263, EXPIRING_POWERUP_COACHMARK: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068474915992896, didSelfVote: 703994466960.0001, isExpired: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023413677163652, POLL_CREATION: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000380720549069409, maxPayloadKBSize: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000042174412906258135, STICKER_PICKER_UPSELL_BUTTON: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004383619097214926, alignButton: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000026806750031723775, backgroundColor: importDefault(dependencyMap[6]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[6]).radii.xs };
obj.badge = obj;
obj.icon = {};
let closure_11 = obj.createStyles(obj);
let obj3 = arg1(dependencyMap[5]);
const obj1 = {};
const obj2 = { marginStart: false, borderWidth: false, marginEnd: false, marginTop: false, marginBottom: false, muted: false, mute_config: false, marginLeft: false, maxWidth: false, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_SUBTLE, borderRadius: importDefault(dependencyMap[6]).radii.round };
obj1.badge = obj2;
let closure_12 = obj3.createStyles(obj1);
let obj6 = arg1(dependencyMap[5]);
obj3 = {};
const tmp3 = arg1(dependencyMap[4]);
obj3.mediaThumbnailContainer = { borderRadius: importDefault(dependencyMap[6]).radii.sm, overflow: "hidden" };
obj3.mediaThumbnail = { aze: 30271555, azj: 22092032 };
const obj4 = { borderRadius: importDefault(dependencyMap[6]).radii.sm, overflow: "hidden" };
obj3.iconContainer = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_SUBTLE, borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj6 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj6["backgroundColor"] = importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_500;
obj3.obscureBackground = obj6;
const obj7 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj7["justifyContent"] = "center";
obj7["alignItems"] = "center";
obj3.spoilerIconContainer = obj7;
const obj5 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_SUBTLE, borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj3.spoilerPill = { padding: importDefault(dependencyMap[6]).space.PX_4, borderRadius: importDefault(dependencyMap[6]).radii.xs, backgroundColor: importDefault(dependencyMap[6]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
let closure_13 = obj6.createStyles(obj3);
const obj8 = { padding: importDefault(dependencyMap[6]).space.PX_4, borderRadius: importDefault(dependencyMap[6]).radii.xs, backgroundColor: importDefault(dependencyMap[6]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
let closure_14 = arg1(dependencyMap[5]).createStyles({ container: { overflow: "visible" } });
const obj14 = arg1(dependencyMap[5]);
const obj9 = { rightAccessoryContainer: { marginLeft: arg1(dependencyMap[3]).RIGHT_ACCESSORY_LEFT_MARGIN } };
const obj15 = arg1(dependencyMap[5]);
obj9.rightAccessoryAbsolute = { position: "absolute", right: importDefault(dependencyMap[6]).space.PX_12, top: importDefault(dependencyMap[6]).space.PX_12 };
let closure_15 = obj15.createStyles(obj9);
let closure_16 = { code: "function MediaPreviewRightAccessoryTsx1(){const{accessoryExitProgressSV}=this.__closure;const progress=accessoryExitProgressSV.get();return{opacity:1-progress,transform:[{scale:1-progress}]};}" };
const obj10 = { position: "absolute", right: importDefault(dependencyMap[6]).space.PX_12, top: importDefault(dependencyMap[6]).space.PX_12 };
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/in_app_notifications/native/MediaPreviewRightAccessory.tsx");

export const PREVIEW_SIZE = 64;
export const MediaPreviewRightAccessory = function MediaPreviewRightAccessory(arg0) {
  let accessoryExitProgressSV;
  let message;
  ({ message, accessoryExitProgressSV } = arg0);
  let obj = arg1(dependencyMap[18]);
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
