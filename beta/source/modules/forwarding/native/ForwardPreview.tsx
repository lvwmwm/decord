// Module ID: 11819
// Function ID: 11820
// Name: ForwardPreview
// Dependencies: [19, 17, 21, 4758, 580, 558, 568, 4693, 8400, 8195, 8928, 11820, 1982, 11821, 11822, 12, 1119, 11824, 8992, 5307, 10936, 1481, 5802, 9092, 4754, 3004, 8417, 2]

// Module 11819 (ForwardPreview)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import utils_ImageUtilsDefault from "utils/ImageUtils" /* 1481 */;
import _modDef3004 from "module_3004" /* 3004 */;
import useThemeDefault from "useTheme" /* 4693 */;
import FastImageDefault from "FastImage" /* 5802 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 8400 */;
import ChatItemDefault from "ChatItem" /* 8928 */;
import ClipViewDefault from "ClipView" /* 9092 */;
import ForwardPreviewUtils from "ForwardPreviewUtils" /* 11820 */;
import MosaicMediaType from "MosaicMediaType" /* 11822 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = 56;
const createStyles = fn(4758);
let obj2 = { forwardPreview: { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" }, quote: null, contentWrapper: null, attachmentPreview: null, attachmentPreviewVideo: null, videoThumbnail: null, playIcon: null, attachmentPreviewOverflow: null, overflowCount: null, attachmentRow: null, largeIcon: null };
let size = { width: 4, height: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: 2 };
obj2.quote = size;
obj2.contentWrapper = { flexDirection: "column", flex: 1, paddingVertical: 4, gap: 6 };
let size1 = { position: "relative", width: 56, height: 56, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.attachmentPreview = size1;
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" };
obj2.attachmentPreviewVideo = { backgroundColor: nativeDefault.colors.BLACK };
obj2.videoThumbnail = { position: "absolute", top: 0, left: 0, opacity: 0.6 };
obj2.playIcon = { position: "absolute", top: 0, left: 0, margin: 16, zIndex: 100 };
obj2.attachmentPreviewOverflow = { position: "relative" };
let size2 = { position: "absolute", bottom: 0, right: 0, alignItems: "center", justifyContent: "center", textAlign: "center", width: 24, height: 24, lineHeight: 24, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.overflowCount = size2;
obj2.attachmentRow = { flexDirection: "row", alignItems: "center", gap: 6 };
obj2.largeIcon = { width: 20, height: 20 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = attachmentCount(568).c(13);
  ({ message, contentMessage, attachmentCount } = arg0);
  const tmp5 = useThemeDefault();
  if (attachmentCount > 0) {
    let TEXT_SUBTLE = tmp4(580).colors.TEXT_DEFAULT;
  } else {
    TEXT_SUBTLE = tmp4(580).colors.TEXT_SUBTLE;
  }
  if (cResult[0] === TEXT_SUBTLE) {
    if (cResult[1] === tmp5) {
      let tmp6 = cResult[2];
    }
    importDefault = tmp6;
    if (cResult[3] === attachmentCount) {
      if (cResult[4] === tmp6.seeMoreLabelColor) {
        let tmp8 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = new tmp4(8195)();
        obj3.setOptions({ renderEmbeds: false, renderReactions: false, inlineEmbedMedia: false, inlineAttachmentMedia: false, animateEmoji: true, gifAutoPlay: false, timestampHourCycle: 0, renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderComponents: false, renderThreadEmbeds: false, renderReplies: false, renderCommunicationDisabled: false, renderAttachments: false, renderExecutedCommands: false, renderPolls: false, renderSharedClientTheme: false, renderForumPostActions: false, ignoreMentioned: false, ignoreEmbedDescriptionCache: false, forceHideSimpleEmbedContent: false, enableSwipeActions: false, useAlternateEmbedColors: false });
        cResult[6] = obj3;
        let tmp10 = obj3;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] === contentMessage.content) {
        if (cResult[8] === message) {
          let tmp15 = cResult[9];
        }
        if (cResult[10] === tmp8) {
          if (cResult[11] === tmp15) {
            let tmp17 = cResult[12];
          }
          return tmp17;
        }
        const obj2 = { pointerEvents: "none", horizontalOffset: 0, modifyRow: tmp8, message: tmp15, rowGenerator: tmp10 };
        const tmp19 = closure_5(tmp4(8928), obj2);
        cResult[10] = tmp8;
        cResult[11] = tmp15;
        cResult[12] = tmp19;
        tmp17 = tmp19;
      }
      const obj4 = { messageSnapshots: [], content: contentMessage.content };
      const mergeResult = message.merge(obj4);
      cResult[7] = contentMessage.content;
      cResult[8] = message;
      cResult[9] = mergeResult;
      tmp15 = mergeResult;
    }
    const fn = function p(message) {
      message.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
      let num = 2;
      if (attachmentCount > 0) {
        num = 1;
      }
      message.truncation = { numberOfLines: num, expandable: false, seeMoreLabel: "...", seeMoreLabelColor: seeMoreLabelColor.seeMoreLabelColor };
      message.message.edited = "";
    };
    cResult[3] = attachmentCount;
    cResult[4] = tmp6.seeMoreLabelColor;
    cResult[5] = fn;
    tmp8 = fn;
  }
  const obj = attachmentCount(568);
  const tmp7 = attachmentCount(4758).createNativeStyleProperties({ seeMoreLabelColor: TEXT_SUBTLE })(tmp5);
  cResult[0] = TEXT_SUBTLE;
  cResult[1] = tmp5;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((content) => {
  ({ message, attachmentCount } = content);
  importDefault = undefined;
  if (attachmentCount > 0) {
    let TEXT_SUBTLE = tmp(580).colors.TEXT_DEFAULT;
  } else {
    TEXT_SUBTLE = tmp(580).colors.TEXT_SUBTLE;
  }
  const tmp3 = useThemeDefault();
  const tmp4 = attachmentCount(4758).createNativeStyleProperties({ seeMoreLabelColor: TEXT_SUBTLE })(tmp3);
  importDefault = tmp4;
  const items = [tmp4.seeMoreLabelColor, attachmentCount];
  const callback = noop.useCallback((message) => {
    message.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
    let num = 2;
    if (attachmentCount > 0) {
      num = 1;
    }
    message.truncation = { numberOfLines: num, expandable: false, seeMoreLabel: "...", seeMoreLabelColor: closure_1.seeMoreLabelColor };
    message.message.edited = "";
  }, items);
  const memo = noop.useMemo(() => {
    const obj = new closure_1(dependencyMap[9])();
    obj.setOptions({ renderEmbeds: false, renderReactions: false, inlineEmbedMedia: false, inlineAttachmentMedia: false, animateEmoji: true, gifAutoPlay: false, timestampHourCycle: 0, renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderComponents: false, renderThreadEmbeds: false, renderReplies: false, renderCommunicationDisabled: false, renderAttachments: false, renderExecutedCommands: false, renderPolls: false, renderSharedClientTheme: false, renderForumPostActions: false, ignoreMentioned: false, ignoreEmbedDescriptionCache: false, forceHideSimpleEmbedContent: false, enableSwipeActions: false, useAlternateEmbedColors: false });
    return obj;
  }, []);
  const obj2 = { pointerEvents: "none", horizontalOffset: 0, modifyRow: callback, message: null, rowGenerator: null };
  let obj = attachmentCount(4758);
  const obj3 = { messageSnapshots: [], content: content.contentMessage.content };
  obj2.message = message.merge(obj3);
  obj2.rowGenerator = memo;
  return closure_5(ChatItemDefault, obj2);
});
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BLACK };
size = fn(2);
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardPreview.tsx");

export const ForwardPreview = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(84);
  ({ message, channel, forwardOptions } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === channel) {
    if (cResult[1] === forwardOptions) {
      if (cResult[2] === message) {
        let tmp5 = cResult[3];
      }
      const forwardPreviewContent = tmp(11820).useForwardPreviewContent(tmp5);
      ({ attachments, embeds, hasContent, contentMessage } = forwardPreviewContent);
      let checkpointData = null;
      if (contentMessage.components.length > 0) {
        checkpointData = null;
        if (contentMessage.components[0].type === tmp(1982).ComponentType.CHECKPOINT_CARD) {
          checkpointData = contentMessage.components[0].checkpointData;
        }
      }
      let tmp9 = null;
      if (null != checkpointData) {
        let num2 = checkpointData.cardId;
        if (num2 == null) {
          num2 = 0;
        }
        tmp9 = tmp(11821).CHECKPOINT_PERSONA_COLORS[num2];
      }
      if (tmp9 != null) {
        const primaryColor = tmp9.primaryColor;
      }
      if (attachments.length > 0) {
        if (cResult[4] === length) {
          if (cResult[5] === attachments) {
            if (cResult[6] > 0) {
              if (length === tmp13) {
                if (cResult[12] === tmp4.attachmentPreview) {
                  if (cResult[13] === tmp4.attachmentPreviewVideo) {
                    let tmp52 = cResult[14];
                  }
                  if (cResult[15] !== attachments[0].proxy_url) {
                    const obj17 = utils_ImageUtilsDefault;
                    const mobileOptimizedSrc = obj17.getMobileOptimizedSrc(attachments[0].proxy_url, v56, v56, "png");
                    cResult[15] = attachments[0].proxy_url;
                    cResult[16] = mobileOptimizedSrc;
                    let tmp53 = mobileOptimizedSrc;
                  } else {
                    tmp53 = cResult[16];
                  }
                  if (cResult[17] !== tmp53) {
                    const obj2 = { uri: tmp53 };
                    cResult[17] = tmp53;
                    cResult[18] = obj2;
                    let tmp60 = obj2;
                  } else {
                    tmp60 = cResult[18];
                  }
                  if (cResult[19] === tmp4.videoThumbnail) {
                    if (cResult[20] === tmp60) {
                      let tmp61 = cResult[21];
                    }
                    if (cResult[22] !== tmp4.playIcon) {
                      const obj3 = { style: tmp4.playIcon, size: "md", color: "white" };
                      const tmp68 = hasOwnProperty(tmp(8992).CirclePlayIcon, obj3);
                      cResult[22] = tmp4.playIcon;
                      cResult[23] = tmp68;
                      let tmp66 = tmp68;
                    } else {
                      tmp66 = cResult[23];
                    }
                    if (cResult[24] === tmp52) {
                      if (cResult[25] === tmp61) {
                      }
                    }
                    const obj4 = { style: tmp52, children: null };
                    const items = [tmp61, tmp66];
                    obj4.children = items;
                    const tmp72 = timestampProducer(View, obj4);
                    cResult[24] = tmp52;
                    cResult[25] = tmp61;
                    cResult[26] = tmp66;
                    cResult[27] = tmp72;
                  }
                  const size = { style: tmp4.videoThumbnail, source: tmp60, width: v56, height: v56 };
                  const tmp65 = hasOwnProperty(FastImageDefault, size);
                  cResult[19] = tmp4.videoThumbnail;
                  cResult[20] = tmp60;
                  cResult[21] = tmp65;
                  tmp61 = tmp65;
                }
                const items1 = [, ];
                ({ attachmentPreview: arr[0], attachmentPreviewVideo: arr[1] } = tmp4);
                cResult[12] = tmp4.attachmentPreview;
                cResult[13] = tmp4.attachmentPreviewVideo;
                cResult[14] = items1;
                tmp52 = items1;
              }
            }
            if (length > 0) {
              if (cResult[28] !== attachments[0].proxy_url) {
                const mobileOptimizedSrc1 = utils_ImageUtilsDefault.getMobileOptimizedSrc(attachments[0].proxy_url, v56, v56);
                cResult[28] = attachments[0].proxy_url;
                cResult[29] = mobileOptimizedSrc1;
                let tmp39 = mobileOptimizedSrc1;
              } else {
                tmp39 = cResult[29];
              }
              if (cResult[30] !== tmp39) {
                const size1 = { source: null, width: null, height: null };
                const obj5 = { uri: tmp39 };
                size1.source = obj5;
                size1.width = v56;
                size1.height = v56;
                const tmp47 = hasOwnProperty(FastImageDefault, size1);
                cResult[30] = tmp39;
                cResult[31] = tmp47;
                let tmp43 = tmp47;
              } else {
                tmp43 = cResult[31];
              }
              if (cResult[32] === tmp4.attachmentPreview) {
                if (cResult[33] === tmp43) {
                  let tmp48 = cResult[34];
                }
                let tmp10 = tmp48;
                let tmp11 = tmp15;
                let tmp12 = tmp14;
              }
              const obj6 = { style: tmp4.attachmentPreview, children: tmp43 };
              const tmp51 = hasOwnProperty(View, obj6);
              cResult[32] = tmp4.attachmentPreview;
              cResult[33] = tmp43;
              cResult[34] = tmp51;
              tmp48 = tmp51;
            } else {
              const first = embeds[0];
              let proxyURL;
              if (first != null) {
                const thumbnail = first.thumbnail;
                if (thumbnail != null) {
                  proxyURL = thumbnail.proxyURL;
                }
              }
              tmp10 = null;
              tmp11 = tmp15;
              tmp12 = tmp14;
              if (null != proxyURL) {
                if (cResult[35] !== embeds[0].thumbnail.proxyURL) {
                  const mobileOptimizedSrc2 = utils_ImageUtilsDefault.getMobileOptimizedSrc(embeds[0].thumbnail.proxyURL, v56, v56);
                  cResult[35] = embeds[0].thumbnail.proxyURL;
                  cResult[36] = mobileOptimizedSrc2;
                  let tmp26 = mobileOptimizedSrc2;
                } else {
                  tmp26 = cResult[36];
                }
                if (cResult[37] !== tmp26) {
                  const size2 = { source: null, width: null, height: null };
                  const obj7 = { uri: tmp26 };
                  size2.source = obj7;
                  size2.width = v56;
                  size2.height = v56;
                  const tmp34 = hasOwnProperty(FastImageDefault, size2);
                  cResult[37] = tmp26;
                  cResult[38] = tmp34;
                  let tmp30 = tmp34;
                } else {
                  tmp30 = cResult[38];
                }
                if (cResult[39] === tmp4.attachmentPreview) {
                  if (cResult[40] === tmp30) {
                    let tmp35 = cResult[41];
                  }
                  tmp10 = tmp35;
                  tmp11 = tmp15;
                  tmp12 = tmp14;
                }
                const obj8 = { style: tmp4.attachmentPreview, children: tmp30 };
                const tmp38 = hasOwnProperty(View, obj8);
                cResult[39] = tmp4.attachmentPreview;
                cResult[40] = tmp30;
                cResult[41] = tmp38;
                tmp35 = tmp38;
              }
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function k(proxy_url) {
            return MosaicMediaType.getMosaicMediaTypeForAttachment(proxy_url, true);
          };
          cResult[9] = fn;
          let tmp17 = fn;
        } else {
          tmp17 = cResult[9];
        }
        const countByResult = tmp(12).countBy(attachments, tmp17);
        let num4 = countByResult.IMAGE;
        if (num4 == null) {
          num4 = 0;
        }
        let num5 = countByResult.VIDEO;
        if (num5 == null) {
          num5 = 0;
        }
        if (num4 > 0) {
          if (num5 > 0) {
            const intl4 = tmp(1119).intl;
            const obj10 = { image_count: num4, video_count: num5 };
            let formatToPlainStringResult = intl4.formatToPlainString(tmp(1119).t.Lr0Top, obj10);
            let AttachmentIcon = tmp(11824).ImagesIcon;
          }
          cResult[4] = length;
          cResult[5] = attachments;
          cResult[6] = num5;
          cResult[7] = formatToPlainStringResult;
          cResult[8] = AttachmentIcon;
          const intl2 = tmp(1119).intl;
          const obj11 = { count: num4 };
          if (1 === num4) {
            let ImagesIcon = tmp(5307).ImageIcon;
          } else {
            ImagesIcon = tmp(11824).ImagesIcon;
          }
          AttachmentIcon = ImagesIcon;
          formatToPlainStringResult = intl2.formatToPlainString(tmp(1119).t.h4pFfU, obj11);
          const formatToPlainStringResult1 = intl2.formatToPlainString(tmp(1119).t.h4pFfU, obj11);
        }
        if (num5 > 0) {
          const intl3 = tmp(1119).intl;
          const obj12 = { count: num5 };
          formatToPlainStringResult = intl3.formatToPlainString(tmp(1119).t.SJ6pPX, obj12);
          AttachmentIcon = tmp(8992).CirclePlayIcon;
        } else if (num4 <= 0) {
          if (cResult[10] !== length) {
            const intl = tmp(1119).intl;
            const obj14 = { count: length };
            const formatToPlainStringResult2 = intl.formatToPlainString(tmp(1119).t["89ihS8"], obj14);
            cResult[10] = length;
            cResult[11] = formatToPlainStringResult2;
            formatToPlainStringResult = formatToPlainStringResult2;
          } else {
            formatToPlainStringResult = cResult[11];
          }
          AttachmentIcon = tmp(10936).AttachmentIcon;
        }
        const tmpResult3 = tmp(12);
      } else {
        tmp10 = null;
        tmp11 = null;
        tmp12 = null;
      }
      let tmp76 = tmp10;
      if (attachments.length > 1) {
        tmp76 = tmp10;
        if (null != tmp10) {
          const _Symbol3 = Symbol;
          if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
            const size3 = { shape: tmp(9092).CutoutShape.RoundedRect, x: 28, y: 28, width: 32, height: 32, cornerRadius: 12 };
            cResult[42] = size3;
            let tmp77 = size3;
          } else {
            tmp77 = cResult[42];
          }
          const _Symbol2 = Symbol;
          if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
            const items2 = [tmp77];
            cResult[43] = items2;
            let tmp78 = items2;
          } else {
            tmp78 = cResult[43];
          }
          if (cResult[44] !== tmp10) {
            const obj15 = { cutouts: tmp78, children: tmp10 };
            const tmp82 = hasOwnProperty(ClipViewDefault, obj15);
            cResult[44] = tmp10;
            cResult[45] = tmp82;
            let tmp79 = tmp82;
          } else {
            tmp79 = cResult[45];
          }
          const diff = length - 1;
          if (cResult[46] === tmp4.overflowCount) {
            if (cResult[47] === diff) {
              let tmp84 = cResult[48];
            }
            if (cResult[49] === tmp4.attachmentPreviewOverflow) {
              if (cResult[50] === tmp79) {
              }
            }
            const obj16 = { style: tmp4.attachmentPreviewOverflow, children: null };
            const items3 = [tmp79, tmp84];
            obj16.children = items3;
            const tmp90 = timestampProducer(View, obj16);
            cResult[49] = tmp4.attachmentPreviewOverflow;
            cResult[50] = tmp79;
            cResult[51] = tmp84;
            cResult[52] = tmp90;
          }
          const obj18 = { style: tmp4.overflowCount, variant: "text-xs/semibold", color: "text-default", children: null };
          const items4 = ["+", diff];
          obj18.children = items4;
          const tmp86 = timestampProducer(tmp(4754).Text, obj18);
          cResult[46] = tmp4.overflowCount;
          cResult[47] = diff;
          cResult[48] = tmp86;
          tmp84 = tmp86;
        }
      }
      if (cResult[53] !== tmp4.quote) {
        const obj19 = { style: tmp4.quote };
        const tmp95 = hasOwnProperty(View, obj19);
        cResult[53] = tmp4.quote;
        cResult[54] = tmp95;
        let tmp92 = tmp95;
      } else {
        tmp92 = cResult[54];
      }
      if (cResult[55] !== checkpointData) {
        let tmp97 = null != checkpointData;
        if (tmp97) {
          const obj20 = { variant: "text-md/medium", children: null };
          const intl5 = tmp(1119).intl;
          obj20.children = intl5.string(_modDef3004.goiR2u);
          tmp97 = hasOwnProperty(tmp(4754).Text, obj20);
        }
        cResult[55] = checkpointData;
        cResult[56] = tmp97;
        let tmp96 = tmp97;
      } else {
        tmp96 = cResult[56];
      }
      if (cResult[57] === attachments.length) {
        if (cResult[58] === contentMessage) {
          if (cResult[59] === hasContent) {
            if (cResult[60] === message) {
              let tmp100 = cResult[61];
            }
            if (cResult[62] === tmp11) {
              if (cResult[63] === length) {
                if (cResult[64] === tmp12) {
                  if (cResult[65] === hasContent) {
                    if (cResult[66] === tmp4.attachmentRow) {
                      if (cResult[67] === tmp4.largeIcon) {
                        let tmp104 = cResult[68];
                      }
                      if (cResult[69] === tmp4.contentWrapper) {
                        if (cResult[70] === tmp96) {
                          if (cResult[71] === tmp100) {
                            if (cResult[72] === tmp104) {
                              let tmp112 = cResult[73];
                            }
                            if (cResult[74] === checkpointData) {
                              if (cResult[75] === primaryColor) {
                                if (cResult[76] === tmp4.attachmentPreview) {
                                  let tmp116 = cResult[77];
                                }
                                if (cResult[78] === tmp76) {
                                  if (cResult[79] === tmp4.forwardPreview) {
                                    if (cResult[80] === tmp92) {
                                      if (cResult[81] === tmp112) {
                                        if (cResult[82] === tmp116) {
                                          let tmp123 = cResult[83];
                                        }
                                        return tmp123;
                                      }
                                    }
                                  }
                                }
                                const obj21 = { style: tmp4.forwardPreview, children: null };
                                const items5 = [tmp92, tmp112, tmp76, tmp116];
                                obj21.children = items5;
                                const tmp126 = timestampProducer(View, obj21);
                                cResult[78] = tmp76;
                                cResult[79] = tmp4.forwardPreview;
                                cResult[80] = tmp92;
                                cResult[81] = tmp112;
                                cResult[82] = tmp116;
                                cResult[83] = tmp126;
                                tmp123 = tmp126;
                              }
                            }
                            let tmp118Result = null != checkpointData;
                            if (tmp118Result) {
                              const obj22 = { style: tmp4.attachmentPreview, children: null };
                              const size4 = { style: null, width: null, height: null, source: null };
                              const obj23 = { backgroundColor: primaryColor };
                              size4.style = obj23;
                              size4.width = v56;
                              size4.height = v56;
                              const tmp119 = View;
                              const tmp121 = FastImageDefault;
                              let num77 = checkpointData.cardId;
                              if (num77 == null) {
                                num77 = 0;
                              }
                              const obj24 = { uri: tmp(8417).getCardAssetUrl(num77) };
                              size4.source = obj24;
                              obj22.children = hasOwnProperty(tmp121, size4);
                              tmp118Result = tmp118(tmp119, obj22);
                              const tmpResult4 = tmp(8417);
                            }
                            cResult[74] = checkpointData;
                            cResult[75] = primaryColor;
                            cResult[76] = tmp4.attachmentPreview;
                            cResult[77] = tmp118Result;
                            tmp116 = tmp118Result;
                          }
                        }
                      }
                      const obj25 = { style: tmp4.contentWrapper, children: null };
                      const items6 = [tmp96, tmp100, tmp104];
                      obj25.children = items6;
                      const tmp115 = timestampProducer(View, obj25);
                      cResult[69] = tmp4.contentWrapper;
                      cResult[70] = tmp96;
                      cResult[71] = tmp100;
                      cResult[72] = tmp104;
                      cResult[73] = tmp115;
                      tmp112 = tmp115;
                    }
                  }
                }
              }
            }
            let tmp106Result = length > 0;
            if (tmp106Result) {
              const obj26 = { style: tmp4.attachmentRow, children: null };
              let tmp109Result = null != tmp11;
              if (tmp109Result) {
                let str3 = "custom";
                if (hasContent) {
                  str3 = "sm";
                }
                const obj27 = { size: str3, style: null, color: "text-muted" };
                let largeIcon = !hasContent;
                if (!hasContent) {
                  largeIcon = tmp4.largeIcon;
                }
                obj27.style = largeIcon;
                tmp109Result = hasOwnProperty(tmp11, obj27);
              }
              const items7 = [tmp109Result, ];
              let tmp111Result = null != tmp12;
              if (tmp111Result) {
                let str4 = "text-md/medium";
                if (hasContent) {
                  str4 = "text-sm/medium";
                }
                const obj28 = { variant: str4, color: "text-muted", children: tmp12 };
                tmp111Result = hasOwnProperty(tmp(4754).Text, obj28);
              }
              items7[1] = tmp111Result;
              obj26.children = items7;
              tmp106Result = timestampProducer(View, obj26);
            }
            cResult[62] = tmp11;
            cResult[63] = length;
            cResult[64] = tmp12;
            cResult[65] = hasContent;
            cResult[66] = tmp4.attachmentRow;
            cResult[67] = tmp4.largeIcon;
            cResult[68] = tmp106Result;
            tmp104 = tmp106Result;
          }
        }
      }
      let tmp101 = hasContent;
      if (hasContent) {
        const obj29 = { message, contentMessage, attachmentCount: length };
        tmp101 = hasOwnProperty(closure_9, obj29);
      }
      cResult[57] = attachments.length;
      cResult[58] = contentMessage;
      cResult[59] = hasContent;
      cResult[60] = message;
      cResult[61] = tmp101;
      tmp100 = tmp101;
      const tmpResult = tmp(11820);
    }
  }
  const obj30 = { message, channel, forwardOptions };
  cResult[0] = channel;
  cResult[1] = forwardOptions;
  cResult[2] = message;
  cResult[3] = obj30;
  tmp5 = obj30;
}) : ((message) => {
  message = message.message;
  ({ channel, forwardOptions } = message);
  const tmp = closure_8();
  const forwardPreviewContent = ForwardPreviewUtils.useForwardPreviewContent({ message, channel, forwardOptions });
  ({ attachments, embeds, hasContent, contentMessage } = forwardPreviewContent);
  let checkpointData = null;
  if (contentMessage.components.length > 0) {
    checkpointData = null;
    if (contentMessage.components[0].type === tmp2(1982).ComponentType.CHECKPOINT_CARD) {
      checkpointData = contentMessage.components[0].checkpointData;
    }
  }
  let tmp6 = null;
  if (null != checkpointData) {
    let num = checkpointData.cardId;
    if (num == null) {
      num = 0;
    }
    tmp6 = tmp2(11821).CHECKPOINT_PERSONA_COLORS[num];
  }
  if (tmp6 != null) {
    const primaryColor = tmp6.primaryColor;
  }
  if (attachments.length > 0) {
    const countByResult = tmp2(12).countBy(attachments, (proxy_url) => MosaicMediaType.getMosaicMediaTypeForAttachment(proxy_url, true));
    let num2 = countByResult.IMAGE;
    if (num2 == null) {
      num2 = 0;
    }
    let num3 = countByResult.VIDEO;
    if (num3 == null) {
      num3 = 0;
    }
    if (num2 > 0) {
      if (num3 > 0) {
        const intl4 = tmp2(1119).intl;
        const obj2 = { image_count: num2, video_count: num3 };
        let formatToPlainStringResult = intl4.formatToPlainString(tmp2(1119).t.Lr0Top, obj2);
        let AttachmentIcon = tmp2(11824).ImagesIcon;
      }
      if (num3 > 0) {
        if (length === num3) {
          const obj3 = { style: null, children: null };
          const items = [, ];
          ({ attachmentPreview: arr[0], attachmentPreviewVideo: arr[1] } = tmp);
          obj3.style = items;
          const size = { style: tmp.videoThumbnail, source: null, width: null, height: null };
          const obj4 = { uri: null };
          const obj18 = utils_ImageUtilsDefault;
          obj4.uri = obj18.getMobileOptimizedSrc(attachments[0].proxy_url, v56, v56, "png");
          size.source = obj4;
          size.width = v56;
          size.height = v56;
          const items1 = [hasOwnProperty(FastImageDefault, size), ];
          const obj5 = { style: tmp.playIcon, size: "md", color: "white" };
          items1[1] = hasOwnProperty(tmp2(8992).CirclePlayIcon, obj5);
          obj3.children = items1;
          let tmp7 = timestampProducer(View, obj3);
          let tmp8 = AttachmentIcon;
          let tmp9 = formatToPlainStringResult;
        }
      }
      if (length > 0) {
        const obj6 = { style: tmp.attachmentPreview, children: null };
        const size1 = { source: null, width: null, height: null };
        const obj7 = { uri: null };
        const tmp22 = FastImageDefault;
        obj7.uri = utils_ImageUtilsDefault.getMobileOptimizedSrc(attachments[0].proxy_url, v56, v56);
        size1.source = obj7;
        size1.width = v56;
        size1.height = v56;
        obj6.children = hasOwnProperty(tmp22, size1);
        tmp7 = hasOwnProperty(View, obj6);
        tmp8 = AttachmentIcon;
        tmp9 = formatToPlainStringResult;
      } else {
        const first = embeds[0];
        let proxyURL;
        if (first != null) {
          const thumbnail = first.thumbnail;
          if (thumbnail != null) {
            proxyURL = thumbnail.proxyURL;
          }
        }
        tmp7 = null;
        tmp8 = AttachmentIcon;
        tmp9 = formatToPlainStringResult;
        if (null != proxyURL) {
          const obj8 = { style: tmp.attachmentPreview, children: null };
          const size2 = { source: null, width: null, height: null };
          const obj9 = { uri: null };
          const tmp17 = FastImageDefault;
          obj9.uri = utils_ImageUtilsDefault.getMobileOptimizedSrc(embeds[0].thumbnail.proxyURL, v56, v56);
          size2.source = obj9;
          size2.width = v56;
          size2.height = v56;
          obj8.children = hasOwnProperty(tmp17, size2);
          tmp7 = hasOwnProperty(View, obj8);
          tmp8 = AttachmentIcon;
          tmp9 = formatToPlainStringResult;
        }
      }
    }
    if (num3 > 0) {
      const intl3 = tmp2(1119).intl;
      const obj11 = { count: num3 };
      formatToPlainStringResult = intl3.formatToPlainString(tmp2(1119).t.SJ6pPX, obj11);
      AttachmentIcon = tmp2(8992).CirclePlayIcon;
    } else if (num2 > 0) {
      const intl2 = tmp2(1119).intl;
      const obj12 = { count: num2 };
      if (1 === num2) {
        let ImagesIcon = tmp2(5307).ImageIcon;
      } else {
        ImagesIcon = tmp2(11824).ImagesIcon;
      }
      AttachmentIcon = ImagesIcon;
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(1119).t.h4pFfU, obj12);
      const formatToPlainStringResult1 = intl2.formatToPlainString(tmp2(1119).t.h4pFfU, obj12);
    } else {
      const intl = tmp2(1119).intl;
      const obj13 = { count: length };
      formatToPlainStringResult = intl.formatToPlainString(tmp2(1119).t["89ihS8"], obj13);
      AttachmentIcon = tmp2(10936).AttachmentIcon;
    }
    const tmp2Result = tmp2(12);
  } else {
    tmp7 = null;
    tmp8 = null;
    tmp9 = null;
  }
  let tmp33 = tmp7;
  if (attachments.length > 1) {
    tmp33 = tmp7;
    if (null != tmp7) {
      const size3 = { shape: tmp2(9092).CutoutShape.RoundedRect, x: 28, y: 28, width: 32, height: 32, cornerRadius: 12 };
      const obj15 = { style: tmp.attachmentPreviewOverflow, children: null };
      const obj16 = { cutouts: null, children: null };
      const items2 = [size3];
      obj16.cutouts = items2;
      obj16.children = tmp7;
      const items3 = [hasOwnProperty(ClipViewDefault, obj16), ];
      const obj17 = { style: tmp.overflowCount, variant: "text-xs/semibold", color: "text-default", children: null };
      const items4 = ["+", length - 1];
      obj17.children = items4;
      items3[1] = timestampProducer(tmp2(4754).Text, obj17);
      obj15.children = items3;
      tmp33 = timestampProducer(View, obj15);
    }
  }
  const obj19 = { style: tmp.forwardPreview, children: null };
  const items5 = [hasOwnProperty(View, { style: tmp.quote }), , , ];
  const obj21 = { style: tmp.contentWrapper, children: null };
  let tmp36Result = null != checkpointData;
  if (tmp36Result) {
    const obj22 = { variant: "text-md/medium", children: null };
    const intl5 = tmp2(1119).intl;
    obj22.children = intl5.string(_modDef3004.goiR2u);
    tmp36Result = tmp36(tmp2(4754).Text, obj22);
  }
  const items6 = [tmp36Result, , ];
  let tmp36Result5 = hasContent;
  if (hasContent) {
    const obj23 = { message, contentMessage, attachmentCount: length };
    tmp36Result5 = tmp36(closure_9, obj23);
  }
  items6[1] = tmp36Result5;
  let tmp34Result = length > 0;
  if (tmp34Result) {
    const obj24 = { style: tmp.attachmentRow, children: null };
    let tmp36Result6 = null != tmp8;
    if (tmp36Result6) {
      let str2 = "custom";
      if (hasContent) {
        str2 = "sm";
      }
      const obj25 = { size: str2, style: null, color: "text-muted" };
      let largeIcon = !hasContent;
      if (!hasContent) {
        largeIcon = tmp.largeIcon;
      }
      obj25.style = largeIcon;
      tmp36Result6 = tmp36(tmp8, obj25);
    }
    const items7 = [tmp36Result6, ];
    let tmp36Result7 = null != tmp9;
    if (tmp36Result7) {
      let str3 = "text-md/medium";
      if (hasContent) {
        str3 = "text-sm/medium";
      }
      const obj26 = { variant: str3, color: "text-muted", children: tmp9 };
      tmp36Result7 = tmp36(tmp2(4754).Text, obj26);
    }
    items7[1] = tmp36Result7;
    obj24.children = items7;
    tmp34Result = tmp34(tmp35, obj24);
  }
  items6[2] = tmp34Result;
  obj21.children = items6;
  items5[1] = timestampProducer(View, obj21);
  items5[2] = tmp33;
  let tmp36Result8 = null != checkpointData;
  if (tmp36Result8) {
    const obj27 = { style: tmp.attachmentPreview, children: null };
    const size4 = { style: null, width: null, height: null, source: null };
    const obj28 = { backgroundColor: primaryColor };
    size4.style = obj28;
    size4.width = v56;
    size4.height = v56;
    const tmp46 = FastImageDefault;
    let num5 = checkpointData.cardId;
    if (num5 == null) {
      num5 = 0;
    }
    const obj29 = { uri: tmp2(8417).getCardAssetUrl(num5) };
    size4.source = obj29;
    obj27.children = tmp36(tmp46, size4);
    tmp36Result8 = tmp36(tmp35, obj27);
    const tmp2Result2 = tmp2(8417);
  }
  items5[3] = tmp36Result8;
  obj19.children = items5;
  return timestampProducer(View, obj19);
});
