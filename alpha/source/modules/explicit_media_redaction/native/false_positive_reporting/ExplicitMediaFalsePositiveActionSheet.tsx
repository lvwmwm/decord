// Module ID: 11421
// Function ID: 11422
// Name: ExplicitMediaFalsePositiveActionSheet
// Dependencies: [19, 17, 21, 558, 576, 7750, 8410, 6163, 5091, 587, 1200, 5055, 4768, 10376, 10375, 1126, 4767, 8226, 5087, 5376, 6836, 2]
// Exports: handleError, handleSuccess

// Module 11421 (ExplicitMediaFalsePositiveActionSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4767 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8226 */;
import ShieldIcon from "ShieldIcon" /* 10375 */;
import AssetRegistryDefault from "AssetRegistry" /* 10376 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles_mod from "createStyles" /* 5091 */;
import native_mod from "native" /* 1200 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let native;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp;
const utils_UploadUtils = tmp(7750);
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExplicitMediaFalsePositivePreviewEmbed(embed) {
  let url;
  const obj = react2;
  const cResult = obj.c(2);
  embed = embed.embed;
  if (undefined !== embed.video) {
    if ("gifv" !== embed.type) {
      url = embed.video.url;
    }
    let tmp2 = null;
    if (null != url) {
      let tmp3;
      if (cResult[0] !== url) {
        const obj2 = { url };
        const tmp6 = metroRequire(closure_10, obj2);
        cResult[0] = url;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      tmp2 = tmp3;
    }
    return tmp2;
  }
  const thumbnail = embed.thumbnail;
  if (thumbnail != null) {
    url = thumbnail.url;
  }
}) : (function ExplicitMediaFalsePositivePreviewEmbed(embed) {
  let url;
  embed = embed.embed;
  if (undefined !== embed.video) {
    if ("gifv" !== embed.type) {
      url = embed.video.url;
    }
    let tmp = null;
    if (null != url) {
      const obj = { url };
      tmp = metroRequire(closure_10, obj);
    }
    return tmp;
  }
  const thumbnail = embed.thumbnail;
  if (thumbnail != null) {
    url = thumbnail.url;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExplicitMediaFalsePositivePreviewAttachment(attachment) {
  const obj = react2;
  const cResult = obj.c(2);
  const url = attachment.attachment.url;
  let tmp2 = null;
  if (null != url) {
    let tmp3;
    if (cResult[0] !== url) {
      const obj2 = { url };
      const tmp6 = metroRequire(closure_10, obj2);
      cResult[0] = url;
      cResult[1] = tmp6;
      tmp3 = tmp6;
    } else {
      tmp3 = cResult[1];
    }
    tmp2 = tmp3;
  }
  return tmp2;
}) : (function ExplicitMediaFalsePositivePreviewAttachment(attachment) {
  const url = attachment.attachment.url;
  let tmp = null;
  if (null != url) {
    const obj = { url };
    tmp = metroRequire(closure_10, obj);
  }
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExplicitMediaFalsePositivePreview(url) {
  let items;
  let obj4;
  let obj6;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(13);
  url = url.url;
  const tmp4 = closure_11();
  if (cResult[0] !== url) {
    const tmpResult = utils_UploadUtils;
    const isVideoResult = tmpResult.isVideo(url);
    cResult[0] = url;
    cResult[1] = isVideoResult;
    tmp5 = isVideoResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.elevationShadow) {
    let tmp7;
    let tmp9Result;
    if (cResult[3] === tmp4.mediaContainer) {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp4.image) {
        if (cResult[7] === tmp4.media) {
          let tmp8;
          if (cResult[8] === url) {
            tmp8 = cResult[9];
          }
          if (cResult[10] === tmp7) {
            let tmp12;
            if (cResult[11] === tmp8) {
              tmp12 = cResult[12];
            }
            return tmp12;
          }
          const obj2 = { style: tmp7, children: tmp8 };
          const tmp15 = metroRequire(React3, obj2);
          cResult[10] = tmp7;
          cResult[11] = tmp8;
          cResult[12] = tmp15;
          tmp12 = tmp15;
        }
      }
    }
    if (tmp5) {
      const obj3 = { volume: 0, resizeMode: "cover", repeat: true, style: tmp4.media, source: obj4, controls: true, paused: true };
      obj4 = { uri: url };
      tmp9Result = tmp9(tmp10(8410), obj3);
    } else {
      const obj5 = { style: items, source: obj6 };
      items = [, ];
      ({ media: arr2[0], image: arr2[1] } = tmp4);
      obj6 = { uri: url };
      tmp9Result = tmp9(tmp10(6163), obj5);
    }
    cResult[5] = tmp5;
    cResult[6] = tmp4.image;
    cResult[7] = tmp4.media;
    cResult[8] = url;
    cResult[9] = tmp9Result;
    tmp8 = tmp9Result;
  }
  const items1 = [, ];
  ({ mediaContainer: arr[0], elevationShadow: arr[1] } = tmp4);
  cResult[2] = tmp4.elevationShadow;
  cResult[3] = tmp4.mediaContainer;
  cResult[4] = items1;
  tmp7 = items1;
}) : (function ExplicitMediaFalsePositivePreview(url) {
  let items;
  let items1;
  let obj4;
  let obj6;
  let tmp3Result;
  url = url.url;
  const tmp = closure_11();
  const obj2 = { style: items, children: tmp3Result };
  items = [, ];
  ({ mediaContainer: arr[0], elevationShadow: arr[1] } = tmp);
  const obj = utils_UploadUtils;
  const tmp4 = React3;
  if (obj.isVideo(url)) {
    const obj3 = { volume: 0, resizeMode: "cover", repeat: true, style: tmp.media, source: obj4, controls: true, paused: true };
    obj4 = { uri: url };
    tmp3Result = tmp3(tmp5(8410), obj3);
  } else {
    const obj5 = { style: items1, source: obj6 };
    items1 = [, ];
    ({ media: arr2[0], image: arr2[1] } = tmp);
    obj6 = { uri: url };
    tmp3Result = tmp3(tmp5(6163), obj5);
  }
  return metroRequire(tmp4, obj2);
});
let createStyles = createStyles_mod;
let obj = { content: obj2, contentContainer: { justifyContent: "center", textAlign: "center", alignItems: "center" }, heading: obj3, mediaContainer: obj4, elevationShadow: native.generateBoxShadowStyle(native.FOUR_DP_ELEVATION_SHADOW_PARAMS), image: { resizeMode: "contain" }, media: obj5, footer: obj6 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8 };
obj4 = { width: "100%", padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.xs, marginTop: nativeDefault.space.PX_8, aspectRatio: "4 / 3" };
native = native_mod;
obj5 = { flex: 1, borderRadius: nativeDefault.radii.xs };
obj6 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExplicitMediaFalsePositiveActionSheet(channelId) {
  let attachmentPreview;
  let content;
  let contentContainer;
  let embedPreview;
  let heading;
  let intl2;
  let isReportFalsePositiveLoading;
  let items;
  let items1;
  let items2;
  let obj8;
  let onConfirmPress;
  const tmp = channelId;
  let obj = channelId(onConfirmPress[4]);
  const cResult = obj.c(42);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ isReportFalsePositiveLoading, attachmentPreview, embedPreview, onConfirmPress } = channelId);
  const analyticsContext = channelId.analyticsContext;
  const tmp4 = closure_11();
  if (cResult[0] === analyticsContext) {
    if (cResult[1] === channelId) {
      let tmp5;
      if (cResult[2] === messageId) {
        tmp5 = cResult[3];
      }
      if (cResult[4] === analyticsContext) {
        if (cResult[5] === channelId) {
          if (cResult[6] === messageId) {
            let tmp6;
            if (cResult[7] === onConfirmPress) {
              tmp6 = cResult[8];
            }
            if (cResult[9] === analyticsContext) {
              if (cResult[10] === channelId) {
                let tmp7;
                let tmp8;
                let tmp12;
                let tmp14;
                let tmp17;
                let tmp20;
                let tmp25;
                if (cResult[11] === messageId) {
                  tmp7 = cResult[12];
                  tmp8 = cResult[13];
                }
                const effect = analyticsContext.useEffect(tmp7, tmp8);
                const _Symbol = Symbol;
                ({ content, contentContainer, heading } = tmp4);
                if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = tmp(tmp2[15]).intl;
                  const stringResult = intl.string(tmp(onConfirmPress[15]).t.TPpVkI);
                  cResult[14] = stringResult;
                  tmp12 = stringResult;
                } else {
                  tmp12 = cResult[14];
                }
                if (cResult[15] !== tmp4.heading) {
                  let obj2 = { style: heading, variant: "heading-lg/bold", children: tmp12 };
                  const tmp16 = closure_6(tmp(onConfirmPress[18]).Text, obj2);
                  cResult[15] = tmp4.heading;
                  cResult[16] = tmp16;
                  tmp14 = tmp16;
                } else {
                  tmp14 = cResult[16];
                }
                const _Symbol2 = Symbol;
                if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                  let obj3 = { variant: "text-sm/normal", children: intl2.string(tmp(onConfirmPress[15]).t["z4du/I"]) };
                  const Text = tmp(tmp2[18]).Text;
                  intl2 = tmp(tmp2[15]).intl;
                  const tmp19 = closure_6(Text, obj3);
                  cResult[17] = tmp19;
                  tmp17 = tmp19;
                } else {
                  tmp17 = cResult[17];
                }
                if (cResult[18] !== attachmentPreview) {
                  let tmp22 = null != attachmentPreview;
                  if (tmp22) {
                    const obj4 = { attachment: attachmentPreview };
                    tmp22 = closure_6(closure_9, obj4);
                  }
                  cResult[18] = attachmentPreview;
                  cResult[19] = tmp22;
                  tmp20 = tmp22;
                } else {
                  tmp20 = cResult[19];
                }
                if (cResult[20] !== embedPreview) {
                  let tmp27 = null != embedPreview;
                  if (tmp27) {
                    const obj5 = { embed: embedPreview };
                    tmp27 = closure_6(closure_8, obj5);
                  }
                  cResult[20] = embedPreview;
                  cResult[21] = tmp27;
                  tmp25 = tmp27;
                } else {
                  tmp25 = cResult[21];
                }
                if (cResult[22] === tmp4.content) {
                  if (cResult[23] === tmp4.contentContainer) {
                    if (cResult[24] === tmp20) {
                      if (cResult[25] === tmp25) {
                        let tmp30;
                        let tmp34;
                        if (cResult[26] === tmp14) {
                          tmp30 = cResult[27];
                        }
                        const _Symbol3 = Symbol;
                        const footer = tmp4.footer;
                        if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl3 = tmp(tmp2[15]).intl;
                          const stringResult1 = intl3.string(tmp(onConfirmPress[15]).t["cY+Oob"]);
                          cResult[28] = stringResult1;
                          tmp34 = stringResult1;
                        } else {
                          tmp34 = cResult[28];
                        }
                        if (cResult[29] === tmp6) {
                          let tmp36;
                          let tmp39;
                          let tmp41;
                          if (cResult[30] === isReportFalsePositiveLoading) {
                            tmp36 = cResult[31];
                          }
                          const _Symbol4 = Symbol;
                          if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl4 = tmp(tmp2[15]).intl;
                            const stringResult2 = intl4.string(tmp(onConfirmPress[15]).t["ETE/oC"]);
                            cResult[32] = stringResult2;
                            tmp39 = stringResult2;
                          } else {
                            tmp39 = cResult[32];
                          }
                          if (cResult[33] !== tmp5) {
                            const obj6 = { variant: "secondary", size: "md", text: tmp39, onPress: tmp5 };
                            const tmp43 = closure_6(tmp(onConfirmPress[19]).Button, obj6);
                            cResult[33] = tmp5;
                            cResult[34] = tmp43;
                            tmp41 = tmp43;
                          } else {
                            tmp41 = cResult[34];
                          }
                          if (cResult[35] === tmp4.footer) {
                            if (cResult[36] === tmp36) {
                              let tmp44;
                              if (cResult[37] === tmp41) {
                                tmp44 = cResult[38];
                              }
                              if (cResult[39] === tmp30) {
                                let tmp48;
                                if (cResult[40] === tmp44) {
                                  tmp48 = cResult[41];
                                }
                                return tmp48;
                              }
                              const obj7 = { startExpanded: true, children: closure_7(closure_4, obj8) };
                              obj8 = { children: items };
                              items = [tmp30, tmp44];
                              BottomSheet = tmp(tmp2[20]).BottomSheet;
                              const tmp52 = closure_6(BottomSheet, obj7);
                              cResult[39] = tmp30;
                              cResult[40] = tmp44;
                              cResult[41] = tmp52;
                              tmp48 = tmp52;
                            }
                          }
                          const obj9 = { style: footer, children: items1 };
                          items1 = [tmp36, tmp41];
                          const tmp47 = closure_7(closure_4, obj9);
                          cResult[35] = tmp4.footer;
                          cResult[36] = tmp36;
                          cResult[37] = tmp41;
                          cResult[38] = tmp47;
                          tmp44 = tmp47;
                        }
                        const obj10 = { variant: "primary", size: "md", disabled: isReportFalsePositiveLoading, loading: isReportFalsePositiveLoading, text: tmp34, onPress: tmp6 };
                        const tmp38 = closure_6(tmp(onConfirmPress[19]).Button, obj10);
                        cResult[29] = tmp6;
                        cResult[30] = isReportFalsePositiveLoading;
                        cResult[31] = tmp38;
                        tmp36 = tmp38;
                      }
                    }
                  }
                }
                const obj11 = { style: content, contentContainerStyle: contentContainer, children: items2 };
                items2 = [tmp14, tmp17, tmp20, tmp25];
                const tmp33 = closure_7(closure_5, obj11);
                cResult[22] = tmp4.content;
                cResult[23] = tmp4.contentContainer;
                cResult[24] = tmp20;
                cResult[25] = tmp25;
                cResult[26] = tmp14;
                cResult[27] = tmp33;
                tmp30 = tmp33;
              }
            }
            const fn3 = function f() {
              const obj = ExplicitMediaRedactionUtils;
              const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
              const result = obj.trackMediaRedactionAction(obj2);
            };
            const items3 = [channelId, messageId, analyticsContext];
            cResult[9] = analyticsContext;
            cResult[10] = channelId;
            cResult[11] = messageId;
            cResult[12] = fn3;
            cResult[13] = items3;
            tmp8 = items3;
            tmp7 = fn3;
          }
        }
      }
      const fn2 = function y() {
        if (onConfirmPress != null) {
          tmp();
        }
        const obj = ExplicitMediaRedactionUtils;
        const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM, channelId, messageId, context: analyticsContext };
        const result = obj.trackMediaRedactionAction(obj2);
      };
      cResult[4] = analyticsContext;
      cResult[5] = channelId;
      cResult[6] = messageId;
      cResult[7] = onConfirmPress;
      cResult[8] = fn2;
      tmp6 = fn2;
    }
  }
  const fn = function l() {
    const obj = ExplicitMediaRedactionUtils;
    const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
  };
  cResult[0] = analyticsContext;
  cResult[1] = channelId;
  cResult[2] = messageId;
  cResult[3] = fn;
  tmp5 = fn;
}) : (function ExplicitMediaFalsePositiveActionSheet(channelId) {
  let attachmentPreview;
  let embedPreview;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isReportFalsePositiveLoading;
  let items3;
  let items4;
  let items5;
  let obj7;
  let onConfirmPress;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ isReportFalsePositiveLoading, attachmentPreview, embedPreview, onConfirmPress } = channelId);
  const analyticsContext = channelId.analyticsContext;
  const tmp = closure_11();
  const items = [channelId, messageId, analyticsContext];
  const items1 = [channelId, messageId, analyticsContext, onConfirmPress];
  const callback = analyticsContext.useCallback(() => {
    const obj = ExplicitMediaRedactionUtils;
    const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
  }, items);
  const items2 = [channelId, messageId, analyticsContext];
  const callback1 = analyticsContext.useCallback(() => {
    if (onConfirmPress != null) {
      tmp();
    }
    const obj = ExplicitMediaRedactionUtils;
    const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj2);
  }, items1);
  const effect = analyticsContext.useEffect(() => {
    const obj = ExplicitMediaRedactionUtils;
    const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj2);
  }, items2);
  let obj = { style: tmp.content, contentContainerStyle: tmp.contentContainer, children: items3 };
  BottomSheet = channelId(onConfirmPress[20]).BottomSheet;
  let obj2 = { style: tmp.heading, variant: "heading-lg/bold", children: intl.string(channelId(onConfirmPress[15]).t.TPpVkI) };
  const Text = channelId(onConfirmPress[18]).Text;
  intl = channelId(onConfirmPress[15]).intl;
  items3 = [closure_6(Text, obj2), , , ];
  let obj3 = { variant: "text-sm/normal", children: intl2.string(channelId(onConfirmPress[15]).t["z4du/I"]) };
  const Text2 = channelId(onConfirmPress[18]).Text;
  intl2 = channelId(onConfirmPress[15]).intl;
  items3[1] = closure_6(Text2, obj3);
  let tmp5Result = null != attachmentPreview;
  const tmp10 = closure_5;
  if (tmp5Result) {
    const obj4 = { attachment: attachmentPreview };
    tmp5Result = tmp5(closure_9, obj4);
  }
  items3[2] = tmp5Result;
  let tmp5Result2 = null != embedPreview;
  if (tmp5Result2) {
    const obj5 = { embed: embedPreview };
    tmp5Result2 = tmp5(closure_8, obj5);
  }
  const obj6 = { startExpanded: true, children: closure_7(closure_4, obj7) };
  obj7 = { children: items4 };
  items3[3] = tmp5Result2;
  items4 = [closure_7(tmp10, obj), ];
  const obj8 = { style: tmp.footer, children: items5 };
  const obj9 = { variant: "primary", size: "md", disabled: isReportFalsePositiveLoading, loading: isReportFalsePositiveLoading, text: intl3.string(channelId(onConfirmPress[15]).t["cY+Oob"]), onPress: callback1 };
  const Button = tmp6(tmp7[19]).Button;
  intl3 = tmp6(tmp7[15]).intl;
  items5 = [closure_6(Button, obj9), ];
  const obj10 = { variant: "secondary", size: "md", text: intl4.string(channelId(onConfirmPress[15]).t["ETE/oC"]), onPress: callback };
  const Button2 = tmp6(tmp7[19]).Button;
  intl4 = tmp6(tmp7[15]).intl;
  items5[1] = closure_6(Button2, obj10);
  items4[1] = closure_7(closure_4, obj8);
  return closure_6(BottomSheet, obj6);
});
let result = size.fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaFalsePositiveActionSheet.tsx");

export const handleSuccess = function handleSuccess(arg0) {
  let intl;
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(arg0);
  const tmp2 = ToastActionCreatorsDefault;
  const open = tmp2.open;
  const obj2 = { key: "explicit_media_report_false_positive_success", icon: AssetRegistryDefault, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: intl.string(intl5.t.gFsTKu) };
  intl = intl5.intl;
  open(obj2);
};
export const handleError = function handleError() {
  const presentError = ToastUtils.presentError;
  ToastUtils;
  const intl = intl5.intl;
  presentError(intl.string(intl5.t.R0RpRX));
};
export const ExplicitMediaFalsePositiveActionSheet = tmp5;
