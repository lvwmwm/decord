// Module ID: 16642
// Function ID: 16643
// Name: VibegrationsNativeChat
// Dependencies: [32, 19, 17, 1986, 12905, 12904, 8699, 1085, 21, 587, 16643, 683, 4890, 16645, 558, 576, 16651, 1126, 3723, 4886, 5593, 16652, 16653, 16654, 4877, 16656, 5594, 5995, 4565, 16661, 16662, 16663, 16664, 1369, 5605, 6052, 16615, 16688, 16540, 16689, 16649, 16690, 16695, 16646, 16696, 16697, 16650, 6625, 16698, 16700, 16701, 16702, 16703, 16704, 16706, 16710, 16711, 504, 1618, 16138, 16692, 16712, 16708, 16713, 16714, 16715, 16716, 16693, 16718, 16719, 16720, 16721, 8973, 16722, 8371, 16725, 16726, 16727, 16731, 2]

// Module 16642 (VibegrationsNativeChat)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import Constants from "Constants" /* 1085 */;
import intl13 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import _modDef3723 from "module_3723" /* 3723 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4877 */;
import Text_Text from "Text/Text" /* 4886 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import _modDef6052 from "module_6052" /* 6052 */;
import VibegrationsDesignFeedback from "VibegrationsDesignFeedback" /* 16540 */;
import VibegrationsVersionHistorySheet from "VibegrationsVersionHistorySheet" /* 16615 */;
import VibegrationsNativeStatusLine from "VibegrationsNativeStatusLine" /* 16643 */;
import VibegrationsRepliedMessage from "VibegrationsRepliedMessage" /* 16645 */;
import VibegrationsMessageAuthor from "VibegrationsMessageAuthor" /* 16646 */;
import VibegrationsMessageActionSheet from "VibegrationsMessageActionSheet" /* 16649 */;
import useVibegrationsPlanDesign from "useVibegrationsPlanDesign" /* 16651 */;
import VibegrationsNativeCardSurfaceDefault from "VibegrationsNativeCardSurface" /* 16652 */;
import VibegrationsNativeCollapsibleSectionDefault from "VibegrationsNativeCollapsibleSection" /* 16653 */;
import VibegrationsPlanAutomodExamplesDefault from "VibegrationsPlanAutomodExamples" /* 16654 */;
import VibegrationsTimelineTree from "VibegrationsTimelineTree" /* 16661 */;
import VibegrationsSubagentMark from "VibegrationsSubagentMark" /* 16664 */;
import VibegrationsTodoAgents from "VibegrationsTodoAgents" /* 16688 */;
import VibegrationsChatRestore from "VibegrationsChatRestore" /* 16689 */;
import VibegrationsPublishNoticeLineDefault from "VibegrationsPublishNoticeLine" /* 16690 */;
import vibegrationsPublishCard from "vibegrationsPublishCard" /* 16692 */;
import VibegrationsIdeasOfferDefault from "VibegrationsIdeasOffer" /* 16695 */;
import VibegrationsTodoState from "VibegrationsTodoState" /* 16703 */;
import VibegrationsSecretRequestState from "VibegrationsSecretRequestState" /* 16708 */;
import vibegrationsPendingPlan from "vibegrationsPendingPlan" /* 16713 */;
import VibegrationsChatGrouping from "VibegrationsChatGrouping" /* 16714 */;
import vibegrationsAttachmentDrafts from "vibegrationsAttachmentDrafts" /* 16715 */;
import vibegrations_VibegrationsRepliedMessage from "vibegrations/VibegrationsRepliedMessage" /* 16720 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import VibegrationsChatStore_mod from "VibegrationsChatStore" /* 12905 */;
import VibegrationsConnectionStore_mod from "VibegrationsConnectionStore" /* 12904 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8699 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const VibegrationsNativeStatusLineDefault = VibegrationsNativeStatusLine;
let _require, autoscrollToBottomThreshold, closure_12, dependencyMap, fadingEdgeLength, map, nativeEvent, set, stepCommand, viewableItems;

let c10;
let closure_14;
let closure_15;
let closure_16;
let closure_19;
let closure_20;
let closure_21;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let rect1;
let tmp8;
let unpackModuleId;
const Stack_Stack = tmp8(5593);
const components_Button_Button = tmp8(5594);
const VibegrationsNativeCollapsibleSection = tmp8(16653);
const VibegrationsPlanAutomodExamples = tmp8(16654);
const VibegrationsNativeMarkdown = tmp8(16656);
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: hasOwnProperty, Image: metroRequire, Pressable: metroImportDefault, View: metroImportAll } = react_native);
let VibegrationsChatStore = VibegrationsChatStore_mod;
({ getOlderHistoryCursor: c10, turnSettled: unpackModuleId } = VibegrationsChatStore);
VibegrationsChatStore = VibegrationsChatStore_mod;
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
({ ensureConnection: map1, getAttachmentUrl: closure_14, interruptTurn: closure_15, sendUserMessage: closure_16 } = VibegrationsConnectionStore);
VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
const Fonts = Constants.Fonts;
let Fragment = Fragment_mod;
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
let diff = VibegrationsNativeStatusLine.MESSAGE_CONTENT_INSET - VibegrationsNativeStatusLine.MESSAGE_EDGE_INSET;
let c22 = 0.2;
let c23 = 500;
let c24 = 52;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let items = [BLACK, , ];
let obj = _modDef683(BLACK);
const alphaResult = obj.alpha(0.2);
items[1] = alphaResult.css();
items[2] = "transparent";
const locations = [0, 0.4, 1];
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let createStyles = createStyles_mod;
let obj2 = { container: { flex: 1 }, transcript: { flex: 1 }, maskSolid: { flex: 1, backgroundColor: BLACK }, maskFade: { height: 52 }, transcriptArea: { flex: 1, position: "relative" }, transcriptContent: obj3, bottomStack: { position: "absolute", left: 0, right: 0, bottom: 0 }, row: obj4, rowGroupStart: { marginTop: PX_12 }, avatar: rect, spoken: { position: "relative", gap: PX_8 }, avatarSpoken: rect1, avatarSpokenReplying: obj5, reminderSlot: { marginTop: -PX_8 }, reminderTip: { paddingTop: PX_8 }, reminderSeparated: obj6, header: obj7, planActions: obj8, planReplyHint: { flexShrink: 1 }, designImage: obj9, designPlaceholder: obj10, ideaCards: { gap: PX_8 }, activityBox: { marginLeft: -diff }, activityDetail: { paddingLeft: diff }, stepDetail: obj11, stepCommand: { fontFamily: Fonts.CODE_NORMAL, fontSize: 12, lineHeight: 18 }, attachmentPills: obj12, agentReaction: obj13, agentReactionEmoji: { width: 18, height: 18 }, attachmentPill: obj14, placeholder: obj15 };
obj3 = { paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj4 = { position: "relative", paddingLeft: VibegrationsNativeStatusLine.MESSAGE_CONTENT_INSET, paddingRight: VibegrationsNativeStatusLine.MESSAGE_EDGE_INSET, paddingVertical: 2, gap: PX_8 };
rect = { position: "absolute", left: VibegrationsNativeStatusLine.MESSAGE_EDGE_INSET, top: 2 };
rect1 = { left: VibegrationsNativeStatusLine.MESSAGE_EDGE_INSET - VibegrationsNativeStatusLine.MESSAGE_CONTENT_INSET, top: 0 };
obj5 = { top: VibegrationsRepliedMessage.REPLY_PREVIEW_HEIGHT + PX_8 };
obj6 = { paddingTop: PX_12 + 4 };
obj7 = { marginBottom: -nativeDefault.space.PX_4 };
obj8 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12 };
obj9 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj10 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
obj11 = { marginTop: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_12, borderLeftWidth: 2, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, gap: 2 };
obj12 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj13 = { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", marginTop: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_6, paddingVertical: 2, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj14 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
obj15 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
let closure_29 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let design;
  let handleError;
  let intl2;
  let obj5;
  let obj7;
  let projectId;
  let src;
  const obj = react2;
  const cResult = obj.c(7);
  ({ projectId, design } = arg0);
  const tmp4 = closure_29();
  const obj2 = useVibegrationsPlanDesign;
  const vibegrationsPlanDesign = obj2.useVibegrationsPlanDesign(projectId, design.id);
  ({ src, handleError } = vibegrationsPlanDesign);
  if (vibegrationsPlanDesign.gone) {
    return null;
  } else {
    let first;
    let tmp10;
    let tmp19;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(_modDef3723.FW8UcU);
      cResult[0] = stringResult;
      first = stringResult;
    } else {
      first = cResult[0];
    }
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: intl2.string(_modDef3723["9W8SbY"]) };
      const Text = tmp(4886).Text;
      intl2 = tmp(1126).intl;
      const tmp13 = closure_19(Text, obj3);
      cResult[1] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[1];
    }
    if (cResult[2] === handleError) {
      if (cResult[3] === src) {
        if (cResult[4] === tmp4.designImage) {
          let tmp14;
          if (cResult[5] === tmp4.designPlaceholder) {
            tmp14 = cResult[6];
          }
          return tmp14;
        }
      }
    }
    items = [tmp10, ];
    const Stack = tmp(5593).Stack;
    const tmp15 = closure_20;
    if (null == src) {
      const obj4 = { style: tmp4.designPlaceholder, children: closure_19(hasOwnProperty, obj5) };
      obj5 = { size: "small", accessibilityLabel: first };
      tmp19 = closure_19(metroImportAll, obj4);
    } else {
      const obj6 = { source: obj7, style: tmp4.designImage, resizeMode: "cover", onError: handleError, accessible: true, accessibilityRole: "image", accessibilityLabel: first };
      obj7 = { uri: src };
      tmp19 = closure_19(metroRequire, obj6);
    }
    const obj8 = { direction: "vertical", spacing: 4, children: items };
    items[1] = tmp19;
    const tmp15Result = tmp15(Stack, obj8);
    cResult[2] = handleError;
    cResult[3] = src;
    cResult[4] = tmp4.designImage;
    cResult[5] = tmp4.designPlaceholder;
    cResult[6] = tmp15Result;
    tmp14 = tmp15Result;
  }
}) : ((arg0) => {
  let design;
  let intl2;
  let obj4;
  let obj6;
  let projectId;
  ({ projectId, design } = arg0);
  const tmp = closure_29();
  const obj = useVibegrationsPlanDesign;
  const vibegrationsPlanDesign = obj.useVibegrationsPlanDesign(projectId, design.id);
  const src = vibegrationsPlanDesign.src;
  if (vibegrationsPlanDesign.gone) {
    return null;
  } else {
    let tmp9Result;
    const intl = tmp2(1126).intl;
    const stringResult = intl.string(_modDef3723.FW8UcU);
    const Stack = tmp2(5593).Stack;
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl2.string(_modDef3723["9W8SbY"]) };
    const Text = tmp2(4886).Text;
    intl2 = tmp2(1126).intl;
    items = [closure_19(Text, obj2), ];
    const tmp8 = closure_20;
    if (null == src) {
      const obj3 = { style: tmp.designPlaceholder, children: closure_19(hasOwnProperty, obj4) };
      obj4 = { size: "small", accessibilityLabel: stringResult };
      tmp9Result = tmp9(metroImportAll, obj3);
    } else {
      const obj5 = { source: obj6, style: tmp.designImage, resizeMode: "cover", onError: tmp5, accessible: true, accessibilityRole: "image", accessibilityLabel: stringResult };
      obj6 = { uri: src };
      tmp9Result = tmp9(metroRequire, obj5);
    }
    const obj7 = { direction: "vertical", spacing: 4, children: items };
    items[1] = tmp9Result;
    return tmp8(Stack, obj7);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let arr;
  let arr2;
  let expanded;
  let intl10;
  let intl11;
  let intl12;
  let intl3;
  let intl7;
  let intl8;
  let intl9;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let num;
  let onApprove;
  let onToggleExpanded;
  let projectId;
  let proposal;
  let str;
  let str2;
  let str3;
  let superseded;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp23;
  let tmp25;
  let tmp27;
  let tmp32;
  let tmp7;
  let tmp8;
  let tmp9;
  let version;
  let obj = react2;
  const cResult = obj.c(90);
  ({ projectId, proposal, version, superseded, expanded, onToggleExpanded, onApprove } = arg0);
  const tmp6 = closure_29();
  if (cResult[0] === (undefined === expanded || expanded)) {
    if (cResult[1] === onToggleExpanded) {
      if (cResult[2] === proposal) {
        if (cResult[3] === (undefined !== superseded && superseded)) {
          if (cResult[4] === version) {
            tmp7 = cResult[5];
            tmp8 = cResult[6];
            tmp9 = cResult[7];
            tmp10 = cResult[8];
            tmp11 = cResult[9];
            arr = cResult[10];
            arr2 = cResult[11];
            tmp12 = cResult[12];
            tmp13 = cResult[13];
            tmp14 = cResult[14];
            tmp15 = cResult[15];
            tmp16 = cResult[16];
            tmp17 = cResult[17];
            tmp18 = cResult[18];
            str = cResult[19];
            str2 = cResult[20];
            tmp19 = cResult[21];
            str3 = cResult[22];
            num = cResult[23];
            tmp20 = cResult[24];
            tmp21 = cResult[25];
          }
          if (cResult[43] === tmp7) {
            if (cResult[44] === str) {
              if (cResult[45] === str2) {
                let tmp49;
                let tmp52;
                if (cResult[46] === tmp19) {
                  tmp49 = cResult[47];
                }
                if (cResult[48] !== tmp11) {
                  let tmp54 = null;
                  if (null != tmp11) {
                    tmp54 = null;
                    if (tmp11.examples.length > 0) {
                      const obj2 = { automod: tmp11 };
                      tmp54 = closure_19(VibegrationsPlanAutomodExamplesDefault, obj2);
                    }
                  }
                  cResult[48] = tmp11;
                  cResult[49] = tmp54;
                  tmp52 = tmp54;
                } else {
                  tmp52 = cResult[49];
                }
                if (cResult[50] === tmp11) {
                  if (cResult[51] === projectId) {
                    let tmp57;
                    let tmp62;
                    let tmp67;
                    let tmp72;
                    if (cResult[52] === proposal.design_image) {
                      tmp57 = cResult[53];
                    }
                    if (cResult[54] !== proposal.changes) {
                      let tmp63 = null;
                      if (proposal.changes.length > 0) {
                        const obj3 = { direction: "vertical", spacing: 4, children: items };
                        const Stack2 = tmp(5593).Stack;
                        const obj4 = { variant: "text-sm/semibold", color: "text-muted", children: intl7.string(_modDef3723.KLyB8Y) };
                        const Text2 = tmp(4886).Text;
                        intl7 = tmp(1126).intl;
                        items = [closure_19(Text2, obj4), ];
                        const changes = proposal.changes;
                        items[1] = changes.map((item, index) => {
                          const obj = { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item };
                          const Text = require("Text/Text").Text;
                          return closure_1_19(Text, obj, index);
                        });
                        tmp63 = closure_20(Stack2, obj3);
                      }
                      cResult[54] = proposal.changes;
                      cResult[55] = tmp63;
                      tmp62 = tmp63;
                    } else {
                      tmp62 = cResult[55];
                    }
                    if (cResult[56] !== arr2) {
                      let tmp68 = null;
                      if (arr2.length > 0) {
                        const obj5 = { direction: "vertical", spacing: 4, children: items1 };
                        const Stack3 = tmp(5593).Stack;
                        const obj6 = { variant: "text-sm/semibold", color: "text-muted", children: intl8.string(_modDef3723.ieqTtP) };
                        const Text3 = tmp(4886).Text;
                        intl8 = tmp(1126).intl;
                        items1 = [closure_19(Text3, obj6), ];
                        const obj7 = { variant: "text-sm/normal", color: "text-default", children: arr2.join(", ") };
                        const Text4 = tmp(4886).Text;
                        items1[1] = closure_19(Text4, obj7);
                        tmp68 = closure_20(Stack3, obj5);
                      }
                      cResult[56] = arr2;
                      cResult[57] = tmp68;
                      tmp67 = tmp68;
                    } else {
                      tmp67 = cResult[57];
                    }
                    if (cResult[58] !== arr) {
                      let tmp73 = null;
                      if (arr.length > 0) {
                        const obj8 = { direction: "vertical", spacing: 4, children: items2 };
                        const Stack4 = tmp(5593).Stack;
                        const obj9 = { variant: "text-sm/semibold", color: "text-muted", children: intl9.string(_modDef3723.Cn9qix) };
                        const Text5 = tmp(4886).Text;
                        intl9 = tmp(1126).intl;
                        items2 = [closure_19(Text5, obj9), ];
                        const obj10 = { variant: "text-sm/normal", color: "text-default", children: arr.join(", ") };
                        const Text6 = tmp(4886).Text;
                        items2[1] = closure_19(Text6, obj10);
                        tmp73 = closure_20(Stack4, obj8);
                      }
                      cResult[58] = arr;
                      cResult[59] = tmp73;
                      tmp72 = tmp73;
                    } else {
                      tmp72 = cResult[59];
                    }
                    if (cResult[60] === onApprove) {
                      if (cResult[61] === tmp6) {
                        let tmp77;
                        if (cResult[62] === (undefined !== superseded && superseded)) {
                          tmp77 = cResult[63];
                        }
                        if (cResult[64] === tmp8) {
                          if (cResult[65] === tmp49) {
                            if (cResult[66] === tmp52) {
                              if (cResult[67] === tmp57) {
                                if (cResult[68] === tmp62) {
                                  if (cResult[69] === tmp67) {
                                    if (cResult[70] === tmp72) {
                                      if (cResult[71] === tmp77) {
                                        if (cResult[72] === str3) {
                                          if (cResult[73] === num) {
                                            if (cResult[74] === tmp20) {
                                              let tmp84;
                                              if (cResult[75] === tmp21) {
                                                tmp84 = cResult[76];
                                              }
                                              if (cResult[77] === tmp9) {
                                                if (cResult[78] === tmp12) {
                                                  if (cResult[79] === tmp13) {
                                                    if (cResult[80] === tmp14) {
                                                      if (cResult[81] === tmp15) {
                                                        if (cResult[82] === tmp16) {
                                                          if (cResult[83] === tmp17) {
                                                            if (cResult[84] === tmp18) {
                                                              let tmp87;
                                                              if (cResult[85] === tmp84) {
                                                                tmp87 = cResult[86];
                                                              }
                                                              if (cResult[87] === tmp10) {
                                                                let tmp90;
                                                                if (cResult[88] === tmp87) {
                                                                  tmp90 = cResult[89];
                                                                }
                                                                return tmp90;
                                                              }
                                                              const obj11 = { children: tmp87 };
                                                              const tmp92 = closure_19(tmp10, obj11);
                                                              cResult[87] = tmp10;
                                                              cResult[88] = tmp87;
                                                              cResult[89] = tmp92;
                                                              tmp90 = tmp92;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              const obj12 = { title: tmp12, meta: tmp13, superseded: tmp14, expanded: tmp15, onToggleExpanded: tmp16, showLabel: tmp17, hideLabel: tmp18, children: tmp84 };
                                              const tmp89 = closure_19(tmp9, obj12);
                                              cResult[77] = tmp9;
                                              cResult[78] = tmp12;
                                              cResult[79] = tmp13;
                                              cResult[80] = tmp14;
                                              cResult[81] = tmp15;
                                              cResult[82] = tmp16;
                                              cResult[83] = tmp17;
                                              cResult[84] = tmp18;
                                              cResult[85] = tmp84;
                                              cResult[86] = tmp89;
                                              tmp87 = tmp89;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        const obj13 = { direction: str3, spacing: num, children: items3 };
                        items3 = [tmp20, tmp21, tmp49, tmp52, tmp57, tmp62, tmp67, tmp72, tmp77];
                        const tmp86 = closure_20(tmp8, obj13);
                        cResult[64] = tmp8;
                        cResult[65] = tmp49;
                        cResult[66] = tmp52;
                        cResult[67] = tmp57;
                        cResult[68] = tmp62;
                        cResult[69] = tmp67;
                        cResult[70] = tmp72;
                        cResult[71] = tmp77;
                        cResult[72] = str3;
                        cResult[73] = num;
                        cResult[74] = tmp20;
                        cResult[75] = tmp21;
                        cResult[76] = tmp86;
                        tmp84 = tmp86;
                      }
                    }
                    let tmp79 = null;
                    if (null != onApprove) {
                      tmp79 = null;
                      if (!(undefined !== superseded && superseded)) {
                        const obj14 = { style: tmp6.planActions, children: items4 };
                        const obj15 = { text: intl10.string(_modDef3723["hG0Y0+"]), variant: "primary", onPress: onApprove };
                        const Button = tmp(5594).Button;
                        intl10 = tmp(1126).intl;
                        items4 = [closure_19(Button, obj15), ];
                        const obj16 = { variant: "text-sm/normal", color: "text-muted", style: tmp6.planReplyHint, children: intl11.string(_modDef3723.Vl3IL0) };
                        const Text7 = tmp(4886).Text;
                        intl11 = tmp(1126).intl;
                        items4[1] = closure_19(Text7, obj16);
                        tmp79 = closure_20(metroImportAll, obj14);
                      }
                    }
                    cResult[60] = onApprove;
                    cResult[61] = tmp6;
                    cResult[62] = undefined !== superseded && superseded;
                    cResult[63] = tmp79;
                    tmp77 = tmp79;
                  }
                }
                let tmp59 = null;
                if (null == tmp11) {
                  tmp59 = null;
                  if (null != proposal.design_image) {
                    const obj17 = { projectId, design: proposal.design_image };
                    tmp59 = closure_19(closure_30, obj17);
                  }
                }
                cResult[50] = tmp11;
                cResult[51] = projectId;
                cResult[52] = proposal.design_image;
                cResult[53] = tmp59;
                tmp57 = tmp59;
              }
            }
          }
          const obj18 = { variant: str, color: str2, children: tmp19 };
          const tmp51 = closure_19(tmp7, obj18);
          cResult[43] = tmp7;
          cResult[44] = str;
          cResult[45] = str2;
          cResult[46] = tmp19;
          cResult[47] = tmp51;
          tmp49 = tmp51;
        }
      }
    }
  }
  const str4 = proposal.summary;
  const trimmed = str4.trim();
  if (cResult[26] !== proposal.what_changed) {
    let str6;
    if (proposal.what_changed != null) {
      str6 = str5.trim();
    }
    if (str6 == null) {
      str6 = "";
    }
    cResult[26] = proposal.what_changed;
    cResult[27] = str6;
    tmp23 = str6;
  } else {
    tmp23 = cResult[27];
  }
  if (cResult[28] !== proposal.bot_permissions) {
    let bot_permissions = proposal.bot_permissions;
    if (bot_permissions == null) {
      bot_permissions = [];
    }
    cResult[28] = proposal.bot_permissions;
    cResult[29] = bot_permissions;
    tmp25 = bot_permissions;
  } else {
    tmp25 = cResult[29];
  }
  if (cResult[30] !== proposal.privileged_intents) {
    let privileged_intents = proposal.privileged_intents;
    if (privileged_intents == null) {
      privileged_intents = [];
    }
    cResult[30] = proposal.privileged_intents;
    cResult[31] = privileged_intents;
    tmp27 = privileged_intents;
  } else {
    tmp27 = cResult[31];
  }
  const automod = proposal.automod;
  const tmp30 = VibegrationsNativeCardSurfaceDefault;
  const tmp31 = VibegrationsNativeCollapsibleSectionDefault;
  if (cResult[32] === (undefined !== superseded && superseded)) {
    let tmp35;
    let tmp40;
    let tmp39;
    let tmp43;
    let tmp46;
    let stringResult2;
    if (cResult[33] === version) {
      tmp32 = cResult[34];
    }
    if (cResult[35] !== (undefined !== superseded && superseded)) {
      let tmp36 = null;
      if (undefined !== superseded && superseded) {
        const obj19 = { children: intl3.string(_modDef3723.o2zmBB) };
        const VibegrationsNativeCollapsibleMeta = tmp(16653).VibegrationsNativeCollapsibleMeta;
        intl3 = tmp(1126).intl;
        tmp36 = closure_19(VibegrationsNativeCollapsibleMeta, obj19);
      }
      cResult[35] = undefined !== superseded && superseded;
      cResult[36] = tmp36;
      tmp35 = tmp36;
    } else {
      tmp35 = cResult[36];
    }
    const _Symbol = Symbol;
    if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1126).intl;
      const stringResult = intl4.string(_modDef3723["1AKkZ2"]);
      const intl5 = tmp(1126).intl;
      const stringResult1 = intl5.string(_modDef3723.dm6fQ8);
      cResult[37] = stringResult;
      cResult[38] = stringResult1;
      tmp40 = stringResult1;
      tmp39 = stringResult;
    } else {
      tmp39 = cResult[37];
      tmp40 = cResult[38];
    }
    const Stack = tmp(5593).Stack;
    if (cResult[39] !== automod) {
      let tmp44 = null;
      if (null != automod) {
        tmp44 = closure_19(tmp(16654).VibegrationsPlanAutomodTypeTag, {});
      }
      cResult[39] = automod;
      cResult[40] = tmp44;
      tmp43 = tmp44;
    } else {
      tmp43 = cResult[40];
    }
    if (cResult[41] !== tmp23) {
      let tmp47 = null;
      if ("" !== tmp23) {
        const obj20 = { direction: "vertical", spacing: 4, children: items5 };
        const Stack5 = tmp(5593).Stack;
        const obj21 = { variant: "text-sm/semibold", color: "text-muted", children: intl12.string(_modDef3723.ucdH2a) };
        const Text8 = tmp(4886).Text;
        intl12 = tmp(1126).intl;
        items5 = [closure_19(Text8, obj21), ];
        const obj22 = { variant: "text-md/normal", color: "text-default", children: tmp23 };
        items5[1] = closure_19(Text_Text.Text, obj22);
        tmp47 = closure_20(Stack5, obj20);
      }
      cResult[41] = tmp23;
      cResult[42] = tmp47;
      tmp46 = tmp47;
    } else {
      tmp46 = cResult[42];
    }
    let Text = tmp(4886).Text;
    if ("" === trimmed) {
      const intl6 = tmp(1126).intl;
      stringResult2 = intl6.string(tmp29(3723).IHCafX);
    } else {
      const tmp29Result = MarkupUtilsDefault;
      stringResult2 = tmp29Result.parse(trimmed, true, tmp(16656).VIBEGRATIONS_MARKUP_OPTIONS);
    }
    cResult[0] = undefined === expanded || expanded;
    cResult[1] = onToggleExpanded;
    cResult[2] = proposal;
    cResult[3] = undefined !== superseded && superseded;
    cResult[4] = version;
    cResult[5] = Text;
    cResult[6] = Stack;
    cResult[7] = tmp31;
    cResult[8] = tmp30;
    cResult[9] = automod;
    cResult[10] = tmp27;
    cResult[11] = tmp25;
    cResult[12] = tmp32;
    cResult[13] = tmp35;
    cResult[14] = undefined !== superseded && superseded;
    cResult[15] = undefined === expanded || expanded;
    cResult[16] = onToggleExpanded;
    cResult[17] = tmp39;
    cResult[18] = tmp40;
    cResult[19] = "text-md/normal";
    cResult[20] = "text-default";
    cResult[21] = stringResult2;
    cResult[22] = "vertical";
    cResult[23] = 8;
    cResult[24] = tmp43;
    cResult[25] = tmp46;
    tmp19 = stringResult2;
    tmp21 = tmp46;
    tmp20 = tmp43;
    num = 8;
    str3 = "vertical";
    str2 = "text-default";
    str = "text-md/normal";
    tmp18 = tmp40;
    tmp17 = tmp39;
    tmp16 = onToggleExpanded;
    tmp15 = tmp5;
    tmp14 = tmp4;
    tmp13 = tmp35;
    tmp12 = tmp32;
    arr2 = tmp25;
    arr = tmp27;
    tmp11 = automod;
    tmp10 = tmp30;
    tmp9 = tmp31;
    tmp8 = Stack;
    tmp7 = Text;
  }
  if (undefined !== superseded && superseded) {
    let formatToPlainStringResult;
    if (null != version) {
      const intl2 = tmp(1126).intl;
      const obj23 = { version };
      formatToPlainStringResult = intl2.formatToPlainString(tmp29(3723).KdZinO, obj23);
    }
    cResult[32] = undefined !== superseded && superseded;
    cResult[33] = version;
    cResult[34] = formatToPlainStringResult;
    tmp32 = formatToPlainStringResult;
  }
  const intl = tmp(1126).intl;
  formatToPlainStringResult = intl.string(tmp29(3723)["60htw+"]);
}) : ((projectId) => {
  let Stack;
  let intl10;
  let intl11;
  let intl12;
  let intl3;
  let intl4;
  let intl5;
  let intl7;
  let intl8;
  let intl9;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj22;
  let proposal;
  let superseded;
  let tmp3Result;
  let version;
  ({ proposal, version, superseded } = projectId);
  projectId = projectId.projectId;
  if (superseded === undefined) {
    superseded = false;
  }
  let flag = projectId.expanded;
  if (flag === undefined) {
    flag = true;
  }
  const onApprove = projectId.onApprove;
  const onToggleExpanded = projectId.onToggleExpanded;
  const tmp = closure_29();
  const str = proposal.summary;
  const trimmed = str.trim();
  let str3;
  if (proposal.what_changed != null) {
    str3 = str2.trim();
  }
  if (str3 == null) {
    str3 = "";
  }
  let bot_permissions = proposal.bot_permissions;
  if (bot_permissions == null) {
    bot_permissions = [];
  }
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  const automod = proposal.automod;
  const tmp6 = VibegrationsNativeCardSurfaceDefault;
  if (superseded) {
    let formatToPlainStringResult;
    let stringResult;
    if (null != version) {
      const intl2 = intl13.intl;
      let obj = { version };
      formatToPlainStringResult = intl2.formatToPlainString(tmp4(3723).KdZinO, obj);
    }
    const obj2 = { title: formatToPlainStringResult, meta: tmp3Result, superseded, expanded: flag, onToggleExpanded, showLabel: intl4.string(_modDef3723["1AKkZ2"]), hideLabel: intl5.string(_modDef3723.dm6fQ8), children: closure_20(Stack, obj22) };
    tmp3Result = null;
    if (superseded) {
      const obj3 = { children: intl3.string(_modDef3723.o2zmBB) };
      const VibegrationsNativeCollapsibleMeta = VibegrationsNativeCollapsibleSection.VibegrationsNativeCollapsibleMeta;
      intl3 = intl13.intl;
      tmp3Result = tmp3(VibegrationsNativeCollapsibleMeta, obj3);
    }
    intl4 = intl13.intl;
    intl5 = intl13.intl;
    let tmp3Result4 = null;
    Stack = Stack_Stack.Stack;
    if (null != automod) {
      tmp3Result4 = tmp3(VibegrationsPlanAutomodExamples.VibegrationsPlanAutomodTypeTag, {});
    }
    items = [tmp3Result4, , , , , , , , ];
    let tmp12Result = null;
    if ("" !== str3) {
      const obj4 = { direction: "vertical", spacing: 4, children: items1 };
      const Stack5 = Stack_Stack.Stack;
      const obj5 = { variant: "text-sm/semibold", color: "text-muted", children: intl12.string(_modDef3723.ucdH2a) };
      const Text8 = Text_Text.Text;
      intl12 = intl13.intl;
      items1 = [closure_19(Text8, obj5), ];
      const obj6 = { variant: "text-md/normal", color: "text-default", children: str3 };
      items1[1] = closure_19(Text_Text.Text, obj6);
      tmp12Result = tmp12(Stack5, obj4);
    }
    items[1] = tmp12Result;
    let Text = Text_Text.Text;
    if ("" === trimmed) {
      const intl6 = intl13.intl;
      stringResult = intl6.string(tmp4(3723).IHCafX);
    } else {
      const tmp4Result = MarkupUtilsDefault;
      stringResult = tmp4Result.parse(trimmed, true, VibegrationsNativeMarkdown.VIBEGRATIONS_MARKUP_OPTIONS);
    }
    const obj7 = { variant: "text-md/normal", color: "text-default", children: stringResult };
    items[2] = closure_19(Text, obj7);
    let tmp3Result5 = null;
    if (null != automod) {
      tmp3Result5 = null;
      if (automod.examples.length > 0) {
        const obj8 = { automod };
        tmp3Result5 = tmp3(tmp4(16654), obj8);
      }
    }
    items[3] = tmp3Result5;
    let tmp3Result6 = null;
    if (null == automod) {
      tmp3Result6 = null;
      if (null != proposal.design_image) {
        const obj9 = { projectId, design: proposal.design_image };
        tmp3Result6 = tmp3(closure_30, obj9);
      }
    }
    items[4] = tmp3Result6;
    let tmp12Result5 = null;
    if (proposal.changes.length > 0) {
      const obj10 = { direction: "vertical", spacing: 4, children: items2 };
      const Stack2 = Stack_Stack.Stack;
      const obj11 = { variant: "text-sm/semibold", color: "text-muted", children: intl7.string(_modDef3723.KLyB8Y) };
      const Text2 = Text_Text.Text;
      intl7 = intl13.intl;
      items2 = [closure_19(Text2, obj11), ];
      const changes = proposal.changes;
      items2[1] = changes.map((item, index) => {
        const obj = { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item };
        const Text = require("Text/Text").Text;
        return closure_1_19(Text, obj, index);
      });
      tmp12Result5 = tmp12(Stack2, obj10);
    }
    items[5] = tmp12Result5;
    let tmp12Result6 = null;
    if (bot_permissions.length > 0) {
      const obj12 = { direction: "vertical", spacing: 4, children: items3 };
      const Stack3 = Stack_Stack.Stack;
      const obj13 = { variant: "text-sm/semibold", color: "text-muted", children: intl8.string(_modDef3723.ieqTtP) };
      const Text3 = Text_Text.Text;
      intl8 = intl13.intl;
      items3 = [closure_19(Text3, obj13), ];
      const obj14 = { variant: "text-sm/normal", color: "text-default", children: bot_permissions.join(", ") };
      const Text4 = Text_Text.Text;
      items3[1] = closure_19(Text4, obj14);
      tmp12Result6 = tmp12(Stack3, obj12);
    }
    items[6] = tmp12Result6;
    let tmp12Result7 = null;
    if (privileged_intents.length > 0) {
      const obj15 = { direction: "vertical", spacing: 4, children: items4 };
      const Stack4 = Stack_Stack.Stack;
      const obj16 = { variant: "text-sm/semibold", color: "text-muted", children: intl9.string(_modDef3723.Cn9qix) };
      const Text5 = Text_Text.Text;
      intl9 = intl13.intl;
      items4 = [closure_19(Text5, obj16), ];
      const obj17 = { variant: "text-sm/normal", color: "text-default", children: privileged_intents.join(", ") };
      const Text6 = Text_Text.Text;
      items4[1] = closure_19(Text6, obj17);
      tmp12Result7 = tmp12(Stack4, obj15);
    }
    items[7] = tmp12Result7;
    let tmp12Result8 = null;
    if (null != onApprove) {
      tmp12Result8 = null;
      if (!superseded) {
        const obj18 = { style: tmp.planActions, children: items5 };
        const obj19 = { text: intl10.string(_modDef3723["hG0Y0+"]), variant: "primary", onPress: onApprove };
        const Button = components_Button_Button.Button;
        intl10 = intl13.intl;
        items5 = [closure_19(Button, obj19), ];
        const obj20 = { variant: "text-sm/normal", color: "text-muted", style: tmp.planReplyHint, children: intl11.string(_modDef3723.Vl3IL0) };
        const Text7 = Text_Text.Text;
        intl11 = intl13.intl;
        items5[1] = closure_19(Text7, obj20);
        tmp12Result8 = tmp12(metroImportAll, obj18);
      }
    }
    obj22 = { direction: "vertical", spacing: 8, children: items };
    items[8] = tmp12Result8;
    const obj21 = { children: closure_19(tmp7, obj2) };
    return closure_19(tmp6, obj21);
  }
  const intl = intl13.intl;
  formatToPlainStringResult = intl.string(tmp4(3723)["60htw+"]);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let ideas;
  let intl;
  let onPick;
  let tmp10;
  const tmp = onPick;
  let tmp2 = dependencyMap;
  let obj = onPick(576);
  const cResult = obj.c(9);
  ({ ideas, onPick } = arg0);
  let tmp4 = closure_29();
  const ideaCards = tmp4.ideaCards;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3723.DAvYsi) };
    const Text = tmp(4886).Text;
    intl = tmp(1126).intl;
    const tmp8 = closure_19(Text, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === ideas) {
    let tmp9;
    if (cResult[2] === onPick) {
      tmp9 = cResult[3];
    }
    if (cResult[6] === tmp4.ideaCards) {
      let tmp12;
      if (cResult[7] === tmp9) {
        tmp12 = cResult[8];
      }
      return tmp12;
    }
    let obj3 = { style: ideaCards, children: items };
    items = [first, tmp9];
    const tmp15 = closure_20(closure_8, obj3);
    cResult[6] = tmp4.ideaCards;
    cResult[7] = tmp9;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
  if (cResult[4] !== onPick) {
    const fn = function i(title) {
      let Stack;
      let intl;
      let obj2;
      let tmp4;
      let closure_0 = title;
      const obj = {
        onPress() {
          return onPick(title);
        },
        accessibilityLabel: intl.formatToPlainString(_modDef3723.pztRGi, obj2),
        children: tmp4(Stack, { direction: "vertical", spacing: 4, children: items })
      };
      const Card = onPick(dependencyMap[27]).Card;
      intl = onPick(dependencyMap[17]).intl;
      obj2 = { title: title.title };
      Stack = onPick(dependencyMap[20]).Stack;
      items = [, ];
      const obj3 = { variant: "text-md/semibold", color: "text-default", children: title.title };
      items[0] = closure_1_19(onPick(dependencyMap[19]).Text, obj3);
      let tmpResult = null;
      const tmp2 = onPick;
      const tmp3 = dependencyMap;
      tmp4 = closure_1_20;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = tmp(tmp2(tmp3[19]).Text, obj4);
      }
      items[1] = tmpResult;
      return closure_1_19(Card, obj, title.id);
    };
    cResult[4] = onPick;
    cResult[5] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[5];
  }
  const mapped = ideas.map(tmp10);
  cResult[1] = ideas;
  cResult[2] = onPick;
  cResult[3] = mapped;
  tmp9 = mapped;
}) : ((arg0) => {
  let ideas;
  let intl;
  let require;
  ({ ideas, onPick: require } = arg0);
  let obj = { style: closure_29().ideaCards, children: items };
  let obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3723.DAvYsi) };
  const Text = Text_Text.Text;
  intl = intl13.intl;
  items = [
    closure_19(Text, obj2),
    ideas.map((title) => {
      let Stack;
      let intl;
      let obj2;
      let tmp4;
      const require = title;
      const obj = {
        onPress() {
          return _require(title);
        },
        accessibilityLabel: intl.formatToPlainString(_modDef3723.pztRGi, obj2),
        children: tmp4(Stack, { direction: "vertical", spacing: 4, children: items })
      };
      const Card = require("Card/Card").Card;
      intl = require("intl").intl;
      obj2 = { title: title.title };
      Stack = require("Stack/Stack").Stack;
      items = [, ];
      const obj3 = { variant: "text-md/semibold", color: "text-default", children: title.title };
      items[0] = closure_1_19(require("Text/Text").Text, obj3);
      let tmpResult = null;
      const tmp2 = _require;
      const tmp3 = dependencyMap;
      tmp4 = closure_1_20;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = tmp(tmp2(tmp3[19]).Text, obj4);
      }
      items[1] = tmpResult;
      return closure_1_19(Card, obj, title.id);
    })
  ];
  return closure_20(closure_8, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let closure_2;
  let tmp3;
  let tmp5;
  let obj = projectId(576);
  const cResult = obj.c(12);
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp2 = closure_29();
  let closure_1 = tmp2;
  if (cResult[0] !== projectId) {
    const fn = function n(arg0) {
      const promise = authStore2(projectId, arg0);
      const nextPromise = promise.then((result) => {
        const obj = closure_1_1(closure_1_2[28]);
        return obj.openURL(result);
      });
      nextPromise.catch(() => {

      });
    };
    cResult[0] = projectId;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  dependencyMap = tmp3;
  if (cResult[2] === attachments) {
    if (cResult[3] === tmp3) {
      if (cResult[4] === tmp2.attachmentPill) {
        tmp5 = cResult[5];
      }
      if (cResult[9] === tmp2.attachmentPills) {
        let tmp8;
        if (cResult[10] === tmp5) {
          tmp8 = cResult[11];
        }
        return tmp8;
      }
      let obj2 = { style: tmp4, children: tmp5 };
      const tmp11 = closure_19(closure_8, obj2);
      cResult[9] = tmp2.attachmentPills;
      cResult[10] = tmp5;
      cResult[11] = tmp11;
      tmp8 = tmp11;
    }
  }
  if (cResult[6] === tmp3) {
    let tmp6;
    if (cResult[7] === tmp2.attachmentPill) {
      tmp6 = cResult[8];
    }
    const mapped = attachments.map(tmp6);
    cResult[2] = attachments;
    cResult[3] = tmp3;
    cResult[4] = tmp2.attachmentPill;
    cResult[5] = mapped;
    tmp5 = mapped;
  }
  const fn2 = function p(id, arg1) {
    let Text;
    let intl;
    let intl2;
    let obj2;
    let obj3;
    let obj5;
    let obj6;
    let tmp12;
    if (null != id.id) {
      const obj = {
        style: closure_1.attachmentPill,
        onPress() {
            return closure_2(id.id);
          },
        accessibilityLabel: intl.formatToPlainString(closure_1(closure_2[18]).QUFLUq, obj2),
        children: closure_1_19(projectId(closure_2[19]).Text, obj3)
      };
      const Card = projectId(closure_2[27]).Card;
      intl = projectId(closure_2[17]).intl;
      obj2 = { name: id.name };
      obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
      tmp12 = closure_1_19(Card, obj, id.id);
    } else {
      const obj4 = { style: closure_1.attachmentPill, children: closure_1_19(Text, obj5) };
      obj5 = { variant: "text-xs/medium", color: "text-muted", children: intl2.formatToPlainString(closure_1(closure_2[18]).OBr7WW, obj6) };
      Text = projectId(closure_2[19]).Text;
      intl2 = projectId(closure_2[17]).intl;
      const _HermesInternal = HermesInternal;
      obj6 = { name: id.name };
      tmp12 = closure_1_19(closure_1_8, obj4, "" + id.name + "-" + arg1);
    }
    return tmp12;
  };
  cResult[6] = tmp3;
  cResult[7] = tmp2.attachmentPill;
  cResult[8] = fn2;
  tmp6 = fn2;
}) : ((projectId) => {
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp = closure_29();
  let closure_1 = tmp;
  items = [projectId];
  let closure_2 = react.useCallback((arg0) => {
    const promise = authStore2(projectId, arg0);
    const nextPromise = promise.then((result) => {
      const obj = closure_1_1(closure_1_2[28]);
      return obj.openURL(result);
    });
    nextPromise.catch(() => {

    });
  }, items);
  let obj = {
    style: tmp.attachmentPills,
    children: attachments.map((id, index) => {
      let Text;
      let intl;
      let intl2;
      let obj2;
      let obj3;
      let obj5;
      let obj6;
      let tmp12;
      if (null != id.id) {
        const obj = {
          style: closure_1.attachmentPill,
          onPress() {
              return closure_2(id.id);
            },
          accessibilityLabel: intl.formatToPlainString(closure_1(closure_2[18]).QUFLUq, obj2),
          children: closure_1_19(projectId(closure_2[19]).Text, obj3)
        };
        const Card = projectId(closure_2[27]).Card;
        intl = projectId(closure_2[17]).intl;
        obj2 = { name: id.name };
        obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
        tmp12 = closure_1_19(Card, obj, id.id);
      } else {
        const obj4 = { style: closure_1.attachmentPill, children: closure_1_19(Text, obj5) };
        obj5 = { variant: "text-xs/medium", color: "text-muted", children: intl2.formatToPlainString(closure_1(closure_2[18]).OBr7WW, obj6) };
        Text = projectId(closure_2[19]).Text;
        intl2 = projectId(closure_2[17]).intl;
        const _HermesInternal = HermesInternal;
        obj6 = { name: id.name };
        tmp12 = closure_1_19(closure_1_8, obj4, "" + id.name + "-" + index);
      }
      return tmp12;
    })
  };
  return closure_19(closure_8, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let crestColor;
  let detail;
  let epoch;
  let inGutter;
  let live;
  let node;
  let tmp10;
  let tmp7;
  let tmpResult2;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(20);
  ({ node, inGutter, live, crestColor, epoch } = arg0);
  let num = 0;
  if (undefined !== epoch) {
    num = epoch;
  }
  const tmp6 = closure_29();
  _require = tmp6;
  if (cResult[0] !== node) {
    const tmpResult = tmp(16661);
    const describeNodeResult = tmpResult.describeNode(node);
    cResult[0] = node;
    cResult[1] = describeNodeResult;
    tmp7 = describeNodeResult;
  } else {
    tmp7 = cResult[1];
  }
  let str2 = "detail";
  const status = node.status;
  if (undefined !== live && live) {
    str2 = "headline";
  }
  if (cResult[2] !== node.durationMs) {
    let tmp11 = null;
    if (null != node.durationMs) {
      const obj2 = { variant: "text-xs/normal", color: "text-subtle", children: tmpResult2.describeDuration(node.durationMs) };
      let Text = tmp(4886).Text;
      tmpResult2 = tmp(16662);
      tmp11 = closure_19(Text, obj2);
    }
    cResult[2] = node.durationMs;
    cResult[3] = tmp11;
    tmp10 = tmp11;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === crestColor) {
    if (cResult[5] === num) {
      if (cResult[6] === (undefined !== inGutter && inGutter)) {
        if (cResult[7] === (undefined !== live && live)) {
          if (cResult[8] === tmp7) {
            if (cResult[9] === (!tmp5 && "failed" !== node.status)) {
              if (cResult[10] === "failed" === status) {
                if (cResult[11] === str2) {
                  let tmp14;
                  if (cResult[12] === tmp10) {
                    tmp14 = cResult[13];
                  }
                  if (cResult[14] === node.detail) {
                    let tmp16;
                    if (cResult[15] === tmp6) {
                      tmp16 = cResult[16];
                    }
                    if (cResult[17] === tmp16) {
                      let tmp20;
                      if (cResult[18] === tmp14) {
                        tmp20 = cResult[19];
                      }
                      return tmp20;
                    }
                    const obj3 = { children: items };
                    items = [tmp14, tmp16];
                    const tmp23 = closure_20(closure_8, obj3);
                    cResult[17] = tmp16;
                    cResult[18] = tmp14;
                    cResult[19] = tmp23;
                    tmp20 = tmp23;
                  }
                  let tmp17 = null;
                  if (node.detail.length > 0) {
                    const obj4 = {
                      style: tmp6.stepDetail,
                      children: detail.map((children, index) => {
                                          const Text = Text_Text.Text;
                                          stepCommand = undefined;
                                          const tmp = closure_19;
                                          if (children.startsWith("$ ")) {
                                            stepCommand = stepCommand.stepCommand;
                                          }
                                          const obj = { variant: "text-sm/normal", color: "text-muted", style: stepCommand, children };
                                          return tmp(Text, obj, index);
                                        })
                    };
                    detail = node.detail;
                    tmp17 = closure_19(closure_8, obj4);
                  }
                  cResult[14] = node.detail;
                  cResult[15] = tmp6;
                  cResult[16] = tmp17;
                  tmp16 = tmp17;
                }
              }
            }
          }
        }
      }
    }
  }
  const tmp15 = closure_19(VibegrationsNativeStatusLineDefault, { line: tmp7, live: undefined !== live && live, settled: !tmp5 && "failed" !== node.status, failed: "failed" === status, presentation: str2, crestColor, inGutter: undefined !== inGutter && inGutter, epoch: num, trailing: tmp10 });
  cResult[4] = crestColor;
  cResult[5] = num;
  cResult[6] = undefined !== inGutter && inGutter;
  cResult[7] = undefined !== live && live;
  cResult[8] = tmp7;
  cResult[9] = !tmp5 && "failed" !== node.status;
  cResult[10] = "failed" === status;
  cResult[11] = str2;
  cResult[12] = tmp10;
  cResult[13] = tmp15;
  tmp14 = tmp15;
}) : ((live) => {
  let crestColor;
  let detail;
  let epoch;
  let inGutter;
  let node;
  let obj2;
  let str2;
  let tmp4Result;
  let tmp7Result;
  let tmp8;
  ({ node, inGutter } = live);
  if (inGutter === undefined) {
    inGutter = false;
  }
  let flag = live.live;
  if (flag === undefined) {
    flag = false;
  }
  ({ epoch, crestColor } = live);
  if (epoch === undefined) {
    epoch = 0;
  }
  let tmp = closure_29();
  _require = tmp;
  let obj = { line: obj2.describeNode(node), live: flag, settled: tmp8, failed: "failed" === node.status, presentation: str2, crestColor, inGutter, epoch, trailing: tmp4Result };
  const tmp6 = VibegrationsNativeStatusLineDefault;
  tmp8 = !flag;
  obj2 = require("VibegrationsTimelineTree");
  const tmp2 = closure_20;
  if (tmp8) {
    tmp8 = "failed" !== node.status;
  }
  str2 = "detail";
  if (flag) {
    str2 = "headline";
  }
  tmp4Result = null;
  if (null != node.durationMs) {
    const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: tmp7Result.describeDuration(node.durationMs) };
    let Text = tmp7(4886).Text;
    tmp7Result = require("VibegrationsDuration");
    tmp4Result = tmp4(Text, obj3);
  }
  const children = [closure_19(tmp6, obj), ];
  let tmp4Result2 = null;
  if (node.detail.length > 0) {
    const obj4 = {
      style: tmp.stepDetail,
      children: detail.map((children, index) => {
          const Text = Text_Text.Text;
          stepCommand = undefined;
          const tmp = closure_19;
          if (children.startsWith("$ ")) {
            stepCommand = stepCommand.stepCommand;
          }
          const obj = { variant: "text-sm/normal", color: "text-muted", style: stepCommand, children };
          return tmp(Text, obj, index);
        })
    };
    detail = node.detail;
    tmp4Result2 = tmp4(tmp3, obj4);
  }
  children[1] = tmp4Result2;
  return tmp2(closure_8, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? ((epoch) => {
  let describeTurnDurationResult;
  let first;
  let steps1;
  let tmp6;
  let tree;
  let turn3;
  let turnActive;
  let tmp = turnActive;
  let tmp2 = dependencyMap;
  let obj = turnActive(576);
  const cResult = obj.c(30);
  ({ tree, turnActive } = epoch);
  epoch = epoch.epoch;
  const besideAvatar = epoch.besideAvatar;
  const tmp4 = closure_29();
  [tmp6, dependencyMap] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function i() {
      return dependencyMap((arg0) => !arg0);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tree.steps) {
    if (cResult[2] === tree.tasks) {
      const turn = tree.turn;
      let durationMs;
      const tmp8 = cResult[3];
      if (turn != null) {
        durationMs = turn.durationMs;
      }
      if (tmp8 === durationMs) {
        let tmp12;
        let tmp23;
        if (cResult[4] === turnActive) {
          _slicedToArray = cResult[5];
          tmp12 = cResult[6];
        }
        if (cResult[9] !== tree.steps) {
          let someResult = tree.steps.length > 1;
          if (!someResult) {
            const steps = tree.steps;
            someResult = steps.some((detail) => detail.detail.length > 0);
          }
          cResult[9] = tree.steps;
          cResult[10] = someResult;
          tmp23 = someResult;
        } else {
          tmp23 = cResult[10];
        }
        let tmp26;
        if (besideAvatar) {
          tmp26 = null;
        }
        let tmp27;
        if (tmp23) {
          tmp27 = first;
        }
        if (cResult[11] === epoch) {
          if (cResult[12] === tmp6) {
            if (cResult[13] === tmp12) {
              if (cResult[14] === !turnActive) {
                if (cResult[15] === tmp26) {
                  if (cResult[16] === tmp27) {
                    let tmp28;
                    if (cResult[17] === turnActive) {
                      tmp28 = cResult[18];
                    }
                    if (cResult[19] === tmp11) {
                      if (cResult[20] === epoch) {
                        if (cResult[21] === tmp6) {
                          if (cResult[22] === tmp23) {
                            if (cResult[23] === tmp4) {
                              if (cResult[24] === tree.steps) {
                                let tmp32;
                                if (cResult[25] === turnActive) {
                                  tmp32 = cResult[26];
                                }
                                if (cResult[27] === tmp28) {
                                  let tmp36;
                                  if (cResult[28] === tmp32) {
                                    tmp36 = cResult[29];
                                  }
                                  return tmp36;
                                }
                                const obj2 = { children: items };
                                items = [tmp28, tmp32];
                                const tmp39 = closure_20(closure_8, obj2);
                                cResult[27] = tmp28;
                                cResult[28] = tmp32;
                                cResult[29] = tmp39;
                                tmp36 = tmp39;
                              }
                            }
                          }
                        }
                      }
                    }
                    let tmp33 = null;
                    if (tmp6) {
                      tmp33 = null;
                      if (tmp23) {
                        const obj3 = {
                          style: tmp4.activityDetail,
                          children: steps1.map((node) => {
                                                  let tmp3;
                                                  const obj = { node, live: tmp3, epoch };
                                                  tmp3 = turnActive;
                                                  const tmp = closure_19;
                                                  const tmp2 = closure_34;
                                                  if (turnActive) {
                                                    tmp3 = node === _slicedToArray;
                                                  }
                                                  return tmp(tmp2, obj, node.id);
                                                })
                        };
                        steps1 = tree.steps;
                        tmp33 = closure_19(closure_8, obj3);
                      }
                    }
                    cResult[19] = tmp11;
                    cResult[20] = epoch;
                    cResult[21] = tmp6;
                    cResult[22] = tmp23;
                    cResult[23] = tmp4;
                    cResult[24] = tree.steps;
                    cResult[25] = turnActive;
                    cResult[26] = tmp33;
                    tmp32 = tmp33;
                  }
                }
              }
            }
          }
        }
        const obj4 = { line: tmp12, live: turnActive, settled: !turnActive, inGutter: true, glyph: tmp26, epoch, expanded: tmp6, onToggle: tmp27 };
        const tmp31 = closure_19(epoch(16643), obj4);
        cResult[11] = epoch;
        cResult[12] = tmp6;
        cResult[13] = tmp12;
        cResult[14] = !turnActive;
        cResult[15] = tmp26;
        cResult[16] = tmp27;
        cResult[17] = turnActive;
        cResult[18] = tmp31;
        tmp28 = tmp31;
      }
    }
  }
  const tmpResult = tmp(16661);
  const currentStepResult = tmpResult.currentStep(tree.steps);
  _slicedToArray = currentStepResult;
  let tmp14;
  if (!turnActive) {
    const turn2 = tree.turn;
    let durationMs1;
    if (turn2 != null) {
      durationMs1 = turn2.durationMs;
    }
    tmp14 = durationMs1;
  }
  if (cResult[7] !== tree.tasks) {
    const tasks = tree.tasks;
    const found = tasks.find((task) => null != task.task.groupLabel);
    let groupLabel;
    if (found != null) {
      groupLabel = found.task.groupLabel;
    }
    cResult[7] = tree.tasks;
    cResult[8] = groupLabel;
    describeTurnDurationResult = groupLabel;
  } else {
    describeTurnDurationResult = cResult[8];
  }
  if (null != tmp14) {
    const tmpResult3 = tmp(16662);
    describeTurnDurationResult = tmpResult3.describeTurnDuration(tmp14);
  } else if (null != currentStepResult) {
    const tmpResult4 = tmp(16661);
    describeTurnDurationResult = tmpResult4.describeNode(currentStepResult);
  } else if (describeTurnDurationResult == null) {
    const intl = tmp(1126).intl;
    describeTurnDurationResult = intl.string(epoch(3723).nv6pUM);
  }
  ({ steps: tmp3[1], tasks: tmp3[2], turn: turn3 } = tree);
  let durationMs2;
  if (turn3 != null) {
    durationMs2 = turn3.durationMs;
  }
  cResult[3] = durationMs2;
  cResult[4] = turnActive;
  cResult[5] = currentStepResult;
  cResult[6] = describeTurnDurationResult;
  tmp12 = describeTurnDurationResult;
}) : ((epoch) => {
  let _undefined;
  let c2;
  let c3;
  let steps1;
  let tmp19;
  let tmp20;
  let tmp3;
  let tree;
  let turnActive;
  ({ tree, turnActive } = epoch);
  epoch = epoch.epoch;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const besideAvatar = epoch.besideAvatar;
  let tmp = closure_29();
  let tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c2] = tmp2;
  const callback = react.useCallback(() => _undefined((arg0) => !arg0), []);
  let obj = turnActive(16661);
  const currentStepResult = obj.currentStep(tree.steps);
  _slicedToArray = currentStepResult;
  let tmp8;
  if (!turnActive) {
    const turn = tree.turn;
    let durationMs;
    if (turn != null) {
      durationMs = turn.durationMs;
    }
    tmp8 = durationMs;
  }
  const tasks = tree.tasks;
  const found = tasks.find((task) => null != task.task.groupLabel);
  let groupLabel;
  if (found != null) {
    groupLabel = found.task.groupLabel;
  }
  if (null != tmp8) {
    const tmp5Result = turnActive(16662);
    groupLabel = tmp5Result.describeTurnDuration(tmp8);
  } else if (null != currentStepResult) {
    const tmp5Result2 = turnActive(16661);
    groupLabel = tmp5Result2.describeNode(currentStepResult);
  } else if (groupLabel == null) {
    const intl = tmp5(1126).intl;
    groupLabel = intl.string(epoch(3723).nv6pUM);
  }
  let someResult = tree.steps.length > 1;
  if (!someResult) {
    const steps = tree.steps;
    someResult = steps.some((detail) => detail.detail.length > 0);
  }
  const obj2 = { line: groupLabel, live: turnActive, settled: !turnActive, inGutter: true, glyph: tmp19, epoch, expanded: tmp3, onToggle: tmp20 };
  tmp19 = undefined;
  const tmp15 = closure_20;
  const tmp18 = epoch(16643);
  if (besideAvatar) {
    tmp19 = null;
  }
  tmp20 = undefined;
  if (someResult) {
    tmp20 = callback;
  }
  const children = [closure_19(tmp18, obj2), ];
  let tmp17Result = null;
  if (tmp3) {
    tmp17Result = null;
    if (someResult) {
      const obj3 = {
        style: tmp.activityDetail,
        children: steps1.map((node) => {
              let tmp3;
              const obj = { node, live: tmp3, epoch };
              tmp3 = turnActive;
              const tmp = closure_19;
              const tmp2 = closure_34;
              if (turnActive) {
                tmp3 = node === c3;
              }
              return tmp(tmp2, obj, node.id);
            })
      };
      steps1 = tree.steps;
      tmp17Result = tmp17(tmp16, obj3);
    }
  }
  children[1] = tmp17Result;
  return tmp15(closure_8, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let describeTaskOutcomeResult;
  let epoch;
  let first;
  let items1;
  let lane;
  let mark;
  let tmp6;
  let turnActive;
  let obj = mark(576);
  const cResult = obj.c(32);
  ({ lane, mark } = arg0);
  ({ turnActive, epoch } = arg0);
  const tmp4 = closure_29();
  [tmp6, dependencyMap] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function i() {
      return dependencyMap((arg0) => !arg0);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (turnActive) {
    turnActive = tmp8;
  }
  if (cResult[1] === "running" === lane.task.status) {
    if (cResult[2] === lane.steps) {
      if (cResult[3] === lane.task) {
        let tmp9;
        let tmp11;
        let tmp18;
        if (cResult[4] === turnActive) {
          tmp9 = cResult[5];
          _slicedToArray = cResult[6];
          tmp11 = cResult[7];
        }
        const status = lane.task.status;
        if (cResult[8] !== mark.Illocon) {
          const tmp20 = closure_19(mark.Illocon, { size: 16, accessible: false });
          cResult[8] = mark.Illocon;
          cResult[9] = tmp20;
          tmp18 = tmp20;
        } else {
          tmp18 = cResult[9];
        }
        let tmp21;
        if (tmp9) {
          tmp21 = first;
        }
        if (cResult[10] === epoch) {
          if (cResult[11] === tmp6) {
            if (cResult[12] === turnActive) {
              if (cResult[13] === tmp11) {
                if (cResult[14] === mark.tint) {
                  if (cResult[15] === (!turnActive && "failed" !== lane.task.status)) {
                    if (cResult[16] === "failed" === status) {
                      if (cResult[17] === tmp18) {
                        let tmp23;
                        if (cResult[18] === tmp21) {
                          tmp23 = cResult[19];
                        }
                        if (cResult[20] === epoch) {
                          if (cResult[21] === tmp6) {
                            if (cResult[22] === tmp9) {
                              if (cResult[23] === lane.steps) {
                                if (cResult[24] === lane.task.detail) {
                                  if (cResult[25] === tmp10) {
                                    if (cResult[26] === mark.tint) {
                                      let tmp27;
                                      if (cResult[27] === tmp4) {
                                        tmp27 = cResult[28];
                                      }
                                      if (cResult[29] === tmp23) {
                                        let tmp31;
                                        if (cResult[30] === tmp27) {
                                          tmp31 = cResult[31];
                                        }
                                        return tmp31;
                                      }
                                      const obj2 = { children: items };
                                      items = [tmp23, tmp27];
                                      const tmp34 = closure_20(closure_8, obj2);
                                      cResult[29] = tmp23;
                                      cResult[30] = tmp27;
                                      cResult[31] = tmp34;
                                      tmp31 = tmp34;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        let tmp28 = null;
                        if (tmp6) {
                          tmp28 = null;
                          if (tmp9) {
                            const detail = lane.task.detail;
                            const obj3 = { style: tmp4.activityDetail, children: items1 };
                            items1 = [
                              detail.map((children, index) => {
                                                          const obj = { variant: "text-xs/normal", color: "text-feedback-critical", children };
                                                          return closure_1_19(mark(dependencyMap[19]).Text, obj, index);
                                                        }),

                            ];
                            const steps = lane.steps;
                            items1[1] = steps.map((node) => {
                              const obj = { node, live: node === _slicedToArray, crestColor: mark.tint, epoch };
                              return closure_19(closure_34, obj, node.id);
                            });
                            tmp28 = closure_20(closure_8, obj3);
                          }
                        }
                        cResult[20] = epoch;
                        cResult[21] = tmp6;
                        cResult[22] = tmp9;
                        cResult[23] = lane.steps;
                        cResult[24] = lane.task.detail;
                        cResult[25] = tmp10;
                        cResult[26] = mark.tint;
                        cResult[27] = tmp4;
                        cResult[28] = tmp28;
                        tmp27 = tmp28;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj4 = { line: tmp11, live: turnActive, settled: !turnActive && "failed" !== lane.task.status, failed: "failed" === status, glyph: tmp18, crestColor: mark.tint, inGutter: true, epoch, expanded: tmp6, onToggle: tmp21 };
        const tmp26 = closure_19(epoch(16643), obj4);
        cResult[10] = epoch;
        cResult[11] = tmp6;
        cResult[12] = turnActive;
        cResult[13] = tmp11;
        cResult[14] = mark.tint;
        cResult[15] = !turnActive && "failed" !== lane.task.status;
        cResult[16] = "failed" === status;
        cResult[17] = tmp18;
        cResult[18] = tmp21;
        cResult[19] = tmp26;
        tmp23 = tmp26;
      }
    }
  }
  let currentStepResult;
  if (turnActive) {
    const tmpResult = mark(16661);
    currentStepResult = tmpResult.currentStep(lane.steps);
  }
  _slicedToArray = currentStepResult;
  const tmp13 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" === lane.task.status) {
    let describeNodeResult;
    if (null != currentStepResult) {
      const tmpResult4 = mark(16661);
      describeNodeResult = tmpResult4.describeNode(currentStepResult);
    } else {
      const tmpResult5 = mark(16663);
      describeNodeResult = tmpResult5.taskTitle(lane.task);
    }
    describeTaskOutcomeResult = describeNodeResult;
  } else {
    const tmpResult6 = mark(16663);
    describeTaskOutcomeResult = tmpResult6.describeTaskOutcome(lane.task);
  }
  cResult[1] = "running" === lane.task.status;
  cResult[2] = lane.steps;
  cResult[3] = lane.task;
  cResult[4] = turnActive;
  cResult[5] = tmp13;
  cResult[6] = currentStepResult;
  cResult[7] = describeTaskOutcomeResult;
  tmp11 = describeTaskOutcomeResult;
  tmp9 = tmp13;
}) : ((arg0) => {
  let _undefined;
  let c2;
  let c3;
  let describeTaskOutcomeResult;
  let epoch;
  let items1;
  let lane;
  let mark;
  let tmp23;
  let tmp24;
  let tmp3;
  let turnActive;
  ({ lane, mark } = arg0);
  ({ turnActive, epoch } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_29();
  [tmp3, c2] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(() => c2((arg0) => !arg0), []);
  if (turnActive) {
    turnActive = tmp5;
  }
  let currentStepResult;
  if (turnActive) {
    let obj = mark(16661);
    currentStepResult = obj.currentStep(lane.steps);
  }
  _slicedToArray = currentStepResult;
  const tmp9 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" === lane.task.status) {
    let describeNodeResult;
    if (null != currentStepResult) {
      const obj4 = mark(16661);
      describeNodeResult = obj4.describeNode(currentStepResult);
    } else {
      const obj3 = mark(16663);
      describeNodeResult = obj3.taskTitle(lane.task);
    }
    describeTaskOutcomeResult = describeNodeResult;
  } else {
    const obj2 = mark(16663);
    describeTaskOutcomeResult = obj2.describeTaskOutcome(lane.task);
  }
  const obj5 = { line: describeTaskOutcomeResult, live: turnActive, settled: tmp23, failed: "failed" === lane.task.status, glyph: closure_19(mark.Illocon, { size: 16, accessible: false }), crestColor: mark.tint, inGutter: true, epoch, expanded: tmp3, onToggle: tmp24 };
  tmp23 = !turnActive;
  const tmp22 = epoch(16643);
  if (!turnActive) {
    tmp23 = "failed" !== lane.task.status;
  }
  tmp24 = undefined;
  if (tmp9) {
    tmp24 = callback;
  }
  const children = [closure_19(tmp22, obj5), ];
  let tmp19Result = null;
  if (tmp3) {
    tmp19Result = null;
    if (tmp9) {
      const detail = lane.task.detail;
      const obj6 = { style: tmp.activityDetail, children: items1 };
      items1 = [
        detail.map((children, index) => {
              const obj = { variant: "text-xs/normal", color: "text-feedback-critical", children };
              return closure_1_19(mark(c2[19]).Text, obj, index);
            }),

      ];
      const steps = lane.steps;
      items1[1] = steps.map((node) => {
        const obj = { node, live: node === c3, crestColor: mark.tint, epoch };
        return closure_19(closure_34, obj, node.id);
      });
      tmp19Result = tmp19(tmp20, obj6);
    }
  }
  children[1] = tmp19Result;
  return closure_20(closure_8, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? ((besideAvatar) => {
  let closure_2;
  let tmp6;
  let tmp7;
  let tree;
  let turnActive;
  let obj = turnActive(576);
  const cResult = obj.c(12);
  const tmp = turnActive;
  ({ tree, turnActive } = besideAvatar);
  besideAvatar = besideAvatar.besideAvatar;
  let tmp5 = closure_29();
  if (0 === tree.steps.length) {
    if (0 === tree.tasks.length) {
      return null;
    }
  }
  const length = tree.tasks.length;
  if (cResult[0] === (undefined !== besideAvatar && besideAvatar)) {
    if (cResult[1] === length) {
      if (cResult[2] === tmp5.activityBox) {
        if (cResult[3] === tree) {
          if (cResult[4] === turnActive) {
            tmp6 = cResult[5];
          }
          return tmp6;
        }
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function v(taskId) {
      return taskId.taskId;
    };
    cResult[6] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[6];
  }
  const tasks = tree.tasks;
  const tmpResult = tmp(16664);
  dependencyMap = tmpResult.subagentIllocons(tasks.map(tmp7));
  if (cResult[7] === (undefined !== besideAvatar && besideAvatar)) {
    if (cResult[8] === length) {
      if (cResult[9] === tree) {
        let tmp8;
        if (cResult[10] === turnActive) {
          tmp8 = cResult[11];
        }
        let obj2 = { style: tmp5.activityBox, children: items };
        items = [tmp8, ];
        const tasks1 = tree.tasks;
        items[1] = tasks1.map((task) => {
          let familiarMarkResult;
          if (null != task.task.helperMark) {
            const obj = VibegrationsSubagentMark;
            familiarMarkResult = obj.familiarMark(task.task.helperMark);
          }
          if (familiarMarkResult == null) {
            familiarMarkResult = closure_2.get(task.taskId);
          }
          let tmp5 = null;
          if (null != familiarMarkResult) {
            const obj2 = { lane: task, mark: familiarMarkResult, turnActive, epoch: length };
            tmp5 = closure_19(closure_36, obj2, task.taskId);
          }
          return tmp5;
        });
        const tmp12 = closure_20(closure_8, obj2);
        cResult[0] = undefined !== besideAvatar && besideAvatar;
        cResult[1] = length;
        cResult[2] = tmp5.activityBox;
        cResult[3] = tree;
        cResult[4] = turnActive;
        cResult[5] = tmp12;
        tmp6 = tmp12;
      }
    }
  }
  const tmp9 = closure_19(closure_35, { tree, turnActive, epoch: length, besideAvatar: undefined !== besideAvatar && besideAvatar });
  cResult[7] = undefined !== besideAvatar && besideAvatar;
  cResult[8] = length;
  cResult[9] = tree;
  cResult[10] = turnActive;
  cResult[11] = tmp9;
  tmp8 = tmp9;
}) : ((besideAvatar) => {
  let closure_2;
  let tree;
  let turnActive;
  ({ tree, turnActive } = besideAvatar);
  let flag = besideAvatar.besideAvatar;
  if (flag === undefined) {
    flag = false;
  }
  let length;
  dependencyMap = undefined;
  const tmp = closure_29();
  if (0 === tree.steps.length) {
    if (0 === tree.tasks.length) {
      return null;
    }
  }
  length = tree.tasks.length;
  let obj = turnActive(16664);
  const tasks = tree.tasks;
  dependencyMap = obj.subagentIllocons(tasks.map((taskId) => taskId.taskId));
  let obj2 = { style: tmp.activityBox, children: items };
  items = [closure_19(closure_35, { tree, turnActive, epoch: length, besideAvatar: flag }), ];
  const tasks1 = tree.tasks;
  items[1] = tasks1.map((task) => {
    let familiarMarkResult;
    if (null != task.task.helperMark) {
      const obj = VibegrationsSubagentMark;
      familiarMarkResult = obj.familiarMark(task.task.helperMark);
    }
    if (familiarMarkResult == null) {
      familiarMarkResult = closure_2.get(task.taskId);
    }
    let tmp5 = null;
    if (null != familiarMarkResult) {
      const obj2 = { lane: task, mark: familiarMarkResult, turnActive, epoch: length };
      tmp5 = closure_19(closure_36, obj2, task.taskId);
    }
    return tmp5;
  });
  return closure_20(closure_8, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_38 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let obj6;
  let transcript;
  let transcript2;
  const obj = react2;
  const cResult = obj.c(15);
  children = children.children;
  const clearance = children.clearance;
  const tmp3 = closure_29();
  const obj2 = PlatformUtils;
  if (obj2.isIOS()) {
    let tmp4;
    let tmp8;
    let tmp19;
    ({ transcript, transcript: transcript2 } = tmp3);
    if (cResult[0] !== tmp3.maskSolid) {
      const obj3 = { style: tmp3.maskSolid };
      const tmp7 = closure_19(metroImportAll, obj3);
      cResult[0] = tmp3.maskSolid;
      cResult[1] = tmp7;
      tmp4 = tmp7;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] !== tmp3.maskFade) {
      const obj4 = { style: tmp3.maskFade, colors: items, locations, start, end };
      const tmp15 = closure_19(LinearGradientDefault, obj4);
      cResult[2] = tmp3.maskFade;
      cResult[3] = tmp15;
      tmp8 = tmp15;
    } else {
      tmp8 = cResult[3];
    }
    const _Math = Math;
    const bound = Math.max(0, clearance - c24);
    if (cResult[4] !== bound) {
      const obj5 = { style: obj6 };
      obj6 = { height: bound };
      const tmp22 = closure_19(metroImportAll, obj5);
      cResult[4] = bound;
      cResult[5] = tmp22;
      tmp19 = tmp22;
    } else {
      tmp19 = cResult[5];
    }
    if (cResult[6] === tmp3.transcript) {
      if (cResult[7] === tmp4) {
        if (cResult[8] === tmp8) {
          let tmp23;
          if (cResult[9] === tmp19) {
            tmp23 = cResult[10];
          }
          if (cResult[11] === children) {
            if (cResult[12] === tmp3.transcript) {
              let tmp27;
              if (cResult[13] === tmp23) {
                tmp27 = cResult[14];
              }
              return tmp27;
            }
          }
          const obj7 = { style: transcript, maskElement: tmp23, children };
          const tmp30 = closure_19(_modDef6052, obj7);
          cResult[11] = children;
          cResult[12] = tmp3.transcript;
          cResult[13] = tmp23;
          cResult[14] = tmp30;
          tmp27 = tmp30;
        }
      }
    }
    const obj8 = { style: transcript2, children: items };
    items = [tmp4, tmp8, tmp19];
    const tmp26 = closure_20(metroImportAll, obj8);
    cResult[6] = tmp3.transcript;
    cResult[7] = tmp4;
    cResult[8] = tmp8;
    cResult[9] = tmp19;
    cResult[10] = tmp26;
    tmp23 = tmp26;
  } else {
    return children;
  }
}) : ((children) => {
  let obj3;
  let obj7;
  children = children.children;
  const clearance = children.clearance;
  const tmp = closure_29();
  let tmp3 = children;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const obj2 = { style: tmp.transcript, maskElement: closure_20(metroImportAll, obj3), children };
    obj3 = { style: tmp.transcript, children: items };
    items = [, , ];
    const obj4 = { style: tmp.maskSolid };
    const tmp6 = _modDef6052;
    items[0] = closure_19(metroImportAll, obj4);
    const obj5 = { style: tmp.maskFade, colors: items, locations, start, end };
    items[1] = closure_19(LinearGradientDefault, obj5);
    const obj6 = { style: obj7 };
    const _Math = Math;
    obj7 = { height: Math.max(0, clearance - c24) };
    items[2] = closure_19(metroImportAll, obj6);
    tmp3 = closure_19(tmp6, obj2);
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_39 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let intl;
  let intl2;
  let items1;
  let obj7;
  let onRestore;
  let proposal;
  let tmp10;
  let tmp13;
  let tmp4;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(15);
  ({ proposal, onRestore } = arg0);
  if (cResult[0] !== proposal.authored_at) {
    const tmpResult = VibegrationsVersionHistorySheet;
    const authoredAgoResult = tmpResult.authoredAgo(proposal.authored_at);
    cResult[0] = proposal.authored_at;
    cResult[1] = authoredAgoResult;
    tmp4 = authoredAgoResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3723.khdMoL) };
    const Text = tmp(4886).Text;
    intl = tmp(1126).intl;
    const tmp9 = closure_19(Text, obj2);
    cResult[2] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== proposal.subject) {
    const obj3 = { variant: "text-md/medium", color: "text-default", children: proposal.subject };
    const tmp12 = closure_19(Text_Text.Text, obj3);
    cResult[3] = proposal.subject;
    cResult[4] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== tmp4) {
    let tmp14 = null;
    if (null != tmp4) {
      const obj4 = { variant: "text-sm/normal", color: "text-muted", children: tmp4 };
      tmp14 = closure_19(tmp(4886).Text, obj4);
    }
    cResult[5] = tmp4;
    cResult[6] = tmp14;
    tmp13 = tmp14;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] === tmp10) {
    let tmp16;
    let tmp18;
    if (cResult[8] === tmp13) {
      tmp16 = cResult[9];
    }
    if (cResult[10] !== onRestore) {
      let tmp19 = null;
      if (null != onRestore) {
        const obj5 = { text: intl2.string(_modDef3723.eSDVDt), variant: "secondary", onPress: onRestore };
        const Button = tmp(5594).Button;
        intl2 = tmp(1126).intl;
        tmp19 = closure_19(Button, obj5);
      }
      cResult[10] = onRestore;
      cResult[11] = tmp19;
      tmp18 = tmp19;
    } else {
      tmp18 = cResult[11];
    }
    if (cResult[12] === tmp16) {
      let tmp22;
      if (cResult[13] === tmp18) {
        tmp22 = cResult[14];
      }
      return tmp22;
    }
    const obj6 = { children: closure_20(Stack_Stack.Stack, obj7) };
    obj7 = { direction: "vertical", spacing: 8, children: items };
    items = [tmp6, tmp16, tmp18];
    const tmp25 = VibegrationsNativeCardSurfaceDefault;
    const tmp27 = closure_19(tmp25, obj6);
    cResult[12] = tmp16;
    cResult[13] = tmp18;
    cResult[14] = tmp27;
    tmp22 = tmp27;
  }
  const obj8 = { direction: "vertical", spacing: 4, children: items1 };
  items1 = [tmp10, tmp13];
  const tmp17 = closure_20(Stack_Stack.Stack, obj8);
  cResult[7] = tmp10;
  cResult[8] = tmp13;
  cResult[9] = tmp17;
  tmp16 = tmp17;
}) : ((arg0) => {
  let intl;
  let intl2;
  let onRestore;
  let proposal;
  ({ proposal, onRestore } = arg0);
  const obj = VibegrationsVersionHistorySheet;
  const authoredAgoResult = obj.authoredAgo(proposal.authored_at);
  const tmp6 = VibegrationsNativeCardSurfaceDefault;
  const Stack = Stack_Stack.Stack;
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3723.khdMoL) };
  const Text = Text_Text.Text;
  intl = intl13.intl;
  items = [closure_19(Text, obj2), , ];
  const Stack2 = Stack_Stack.Stack;
  const items1 = [, ];
  const obj3 = { variant: "text-md/medium", color: "text-default", children: proposal.subject };
  items1[0] = closure_19(Text_Text.Text, obj3);
  let tmp4Result = null;
  if (null != authoredAgoResult) {
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: authoredAgoResult };
    tmp4Result = tmp4(tmp(4886).Text, obj4);
  }
  items1[1] = tmp4Result;
  items[1] = closure_20(Stack2, { direction: "vertical", spacing: 4, children: items1 });
  let tmp4Result2 = null;
  if (null != onRestore) {
    const obj5 = { text: intl2.string(_modDef3723.eSDVDt), variant: "secondary", onPress: onRestore };
    const Button = tmp(5594).Button;
    intl2 = tmp(1126).intl;
    tmp4Result2 = tmp4(Button, obj5);
  }
  items[2] = tmp4Result2;
  const obj6 = { children: closure_20(Stack, { direction: "vertical", spacing: 8, children: items }) };
  return closure_19(tmp6, obj6);
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_40 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let _null;
  let checklistExpanded;
  let checklistSuperseded;
  let clarificationDismissed;
  let closingContent;
  let first;
  let groupStart;
  let hostsReminder;
  let isNewest;
  let items1;
  let onAnswerClarification;
  let onApprovePlan;
  let onAskForIdeas;
  let onDismissClarification;
  let onPickIdea;
  let onToggleChecklist;
  let onTogglePlan;
  let planExpanded;
  let planSuperseded;
  let planVersion;
  let reminder;
  let replyKey;
  let restoreProposal;
  let secretRequestStatus;
  let showsClosingMessage;
  let tmp5;
  let turnLeadsWithStretchResult;
  let tmp = projectId;
  const tmp2 = groupStart;
  let obj = projectId(groupStart[15]);
  const cResult = obj.c(229);
  projectId = projectId.projectId;
  const message = projectId.message;
  groupStart = projectId.groupStart;
  ({ isNewest, hostsReminder, reminder, checklistSuperseded } = projectId);
  ({ checklistExpanded, secretRequestStatus, onToggleChecklist } = projectId);
  ({ planVersion, planSuperseded } = projectId);
  ({ planExpanded, onTogglePlan } = projectId);
  const replied = projectId.replied;
  const onJumpToReplied = projectId.onJumpToReplied;
  ({ onApprovePlan, onPickIdea, onAskForIdeas } = projectId);
  ({ onAnswerClarification, onDismissClarification } = projectId);
  const onRestoreVersion = projectId.onRestoreVersion;
  ({ first, clarificationDismissed } = projectId);
  const tmp4 = closure_29();
  VibegrationsChatStore = tmp4;
  let steps = message.steps;
  if (cResult[0] !== message) {
    let tmp7 = onRestoreVersion(message);
    cResult[0] = message;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  let tmp8 = !tmp5;
  if (cResult[2] === message.steps) {
    let tmp9;
    let tmp11;
    if (cResult[3] === tmp8) {
      tmp9 = cResult[4];
    }
    let closure_13 = tmp9;
    const steps2 = message.steps;
    if (cResult[5] !== message) {
      const tmp13 = onRestoreVersion(message);
      cResult[5] = message;
      cResult[6] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] === message.steps) {
      let arr;
      let tmp16;
      if (cResult[8] === !tmp11) {
        arr = cResult[9];
      }
      if (cResult[10] !== message.steps) {
        const tmpResult = tmp(tmp2[29]);
        const latestTodosResult = tmpResult.latestTodos(message.steps);
        cResult[10] = message.steps;
        cResult[11] = latestTodosResult;
        tmp16 = latestTodosResult;
      } else {
        tmp16 = cResult[11];
      }
      if (cResult[12] !== tmp9.tasks) {
        const tmpResult11 = tmp(tmp2[37]);
        const runningTodoAgentsResult = tmpResult11.runningTodoAgents(tmp9.tasks);
        cResult[12] = tmp9.tasks;
        cResult[13] = runningTodoAgentsResult;
        let tmp18 = runningTodoAgentsResult;
      } else {
        tmp18 = cResult[13];
      }
      if (cResult[14] === checklistSuperseded) {
        if (cResult[15] === message.render_id) {
          if (cResult[18] === message.render_id) {
            if (cResult[19] === onTogglePlan) {
              if (cResult[22] === onJumpToReplied) {
                let tmp23;
                let tmp25;
                let tmp29;
                if (cResult[23] === replied) {
                  tmp23 = cResult[24];
                }
                if (cResult[25] !== message.content) {
                  const tmpResult12 = tmp(tmp2[38]);
                  const result = tmpResult12.parseVibegrationsDesignRemark(message.content);
                  cResult[25] = message.content;
                  cResult[26] = result;
                  tmp25 = result;
                } else {
                  tmp25 = cResult[26];
                }
                let body;
                if (tmp25 != null) {
                  body = tmp25.body;
                }
                if (body == null) {
                  body = message.content;
                }
                if (cResult[27] !== body) {
                  const trimmed = body.trim();
                  cResult[27] = body;
                  cResult[28] = trimmed;
                  tmp29 = trimmed;
                } else {
                  tmp29 = cResult[28];
                }
                const content = tmp29;
                let attachments = null;
                if (null != message.attachments) {
                  attachments = null;
                  if (message.attachments.length > 0) {
                    attachments = message.attachments;
                  }
                }
                if (cResult[29] === tmp4.row) {
                  let tmp33;
                  if (cResult[30] === (groupStart && !first && tmp4.rowGroupStart)) {
                    tmp33 = cResult[31];
                  }
                  let user_id;
                  if ("user" === message.role) {
                    user_id = message.user_id;
                  }
                  if (cResult[32] === message) {
                    let tmp35;
                    if (cResult[33] === onRestoreVersion) {
                      tmp35 = cResult[34];
                    }
                    let closure_17 = tmp35;
                    if (cResult[35] === user_id) {
                      if (cResult[36] === tmp29) {
                        if (cResult[37] === onRestoreVersion) {
                          if ("" === tmp29) {
                            if (cResult[40] === onAskForIdeas) {
                              if (cResult[41] === projectId) {
                                if (cResult[42] === tmp4.avatar) {
                                  if (cResult[43] === tmp4.avatarSpoken) {
                                    if (cResult[44] === tmp4.header) {
                                      if (cResult[45] === tmp4.reminderSeparated) {
                                        if (cResult[46] === tmp4.reminderTip) {
                                          let tmp40;
                                          let tmp42;
                                          if (cResult[47] === tmp4.spoken) {
                                            tmp40 = cResult[48];
                                          }
                                          if (cResult[49] === hostsReminder) {
                                            if (cResult[50] === reminder) {
                                              if (cResult[51] === tmp40) {
                                                let tmp41;
                                                if (cResult[52] === tmp4.reminderSlot) {
                                                  tmp41 = cResult[53];
                                                }
                                                if ("user" === message.role) {
                                                  if ("" === tmp29) {
                                                    if (null == tmp25) {
                                                      if (null == attachments) {
                                                        return null;
                                                      }
                                                    }
                                                  }
                                                  if (cResult[54] !== message.agentReaction) {
                                                    const tmpResult13 = tmp(tmp2[45]);
                                                    const vibegrationsAgentReactionLabel = tmpResult13.getVibegrationsAgentReactionLabel(message.agentReaction);
                                                    class Ce {
                                                      constructor(arg0) {
                                                        let items1;
                                                        let obj3;
                                                        let obj4;
                                                        let obj5;
                                                        let obj6;
                                                        let tmp7;
                                                        if ("outdated" === arg0) {
                                                          const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                          obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                          obj4 = { projectId, notice: "outdated" };
                                                          return restoreProposal(metroImportAll, obj2);
                                                        } else if ("ideas" === arg0) {
                                                          const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                          obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                          obj6 = { children: items1 };
                                                          const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                          items = [, ];
                                                          ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                          tmp7 = VibegrationsIdeasOfferDefault;
                                                          items1 = [restoreProposal(metroImportAll, obj7), ];
                                                          const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                          items1[1] = restoreProposal(metroImportAll, obj8);
                                                          return restoreProposal(metroImportAll, obj);
                                                        }
                                                      }
                                                    }
                                                    cResult[54] = message.agentReaction;
                                                    cResult[55] = vibegrationsAgentReactionLabel;
                                                  }
                                                  class Ce {
                                                    constructor(arg0) {
                                                      let items1;
                                                      let obj3;
                                                      let obj4;
                                                      let obj5;
                                                      let obj6;
                                                      let tmp7;
                                                      if ("outdated" === arg0) {
                                                        const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                        obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                        obj4 = { projectId, notice: "outdated" };
                                                        return restoreProposal(metroImportAll, obj2);
                                                      } else if ("ideas" === arg0) {
                                                        const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                        obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                        obj6 = { children: items1 };
                                                        const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                        items = [, ];
                                                        ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                        tmp7 = VibegrationsIdeasOfferDefault;
                                                        items1 = [restoreProposal(metroImportAll, obj7), ];
                                                        const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                        items1[1] = restoreProposal(metroImportAll, obj8);
                                                        return restoreProposal(metroImportAll, obj);
                                                      }
                                                    }
                                                  }
                                                  let tmp123 = null;
                                                  if (groupStart) {
                                                    class Ce {
                                                      constructor(arg0) {
                                                        let items1;
                                                        let obj3;
                                                        let obj4;
                                                        let obj5;
                                                        let obj6;
                                                        let tmp7;
                                                        if ("outdated" === arg0) {
                                                          const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                          obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                          obj4 = { projectId, notice: "outdated" };
                                                          return restoreProposal(metroImportAll, obj2);
                                                        } else if ("ideas" === arg0) {
                                                          const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                          obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                          obj6 = { children: items1 };
                                                          const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                          items = [, ];
                                                          ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                          tmp7 = VibegrationsIdeasOfferDefault;
                                                          items1 = [restoreProposal(metroImportAll, obj7), ];
                                                          const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                          items1[1] = restoreProposal(metroImportAll, obj8);
                                                          return restoreProposal(metroImportAll, obj);
                                                        }
                                                      }
                                                    }
                                                    tmp126[0] = tmp4.avatar;
                                                    let obj2 = { userId: message.user_id };
                                                    tmp126[1] = restoreProposal(tmp(tmp2[43]).VibegrationsUserAvatar, obj2);
                                                    tmp123 = restoreProposal(onJumpToReplied, tmp126);
                                                  }
                                                  cResult[56] = groupStart;
                                                  cResult[57] = message.user_id;
                                                  cResult[58] = tmp4.avatar;
                                                  cResult[59] = tmp123;
                                                } else {
                                                  if ("publish_notice" === message.kind) {
                                                    if (null != message.publishNotice) {
                                                      if (cResult[85] === message.publishNotice) {
                                                        let tmp114;
                                                        if (cResult[86] === projectId) {
                                                          tmp114 = cResult[87];
                                                        }
                                                        if (cResult[88] === tmp41) {
                                                          if (cResult[89] === tmp33) {
                                                            let tmp117;
                                                            if (cResult[90] === tmp114) {
                                                              tmp117 = cResult[91];
                                                            }
                                                            return tmp117;
                                                          }
                                                        }
                                                        class Ce {
                                                          constructor(arg0) {
                                                            let items1;
                                                            let obj3;
                                                            let obj4;
                                                            let obj5;
                                                            let obj6;
                                                            let tmp7;
                                                            if ("outdated" === arg0) {
                                                              const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                              obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                              obj4 = { projectId, notice: "outdated" };
                                                              return restoreProposal(metroImportAll, obj2);
                                                            } else if ("ideas" === arg0) {
                                                              const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                              obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                              obj6 = { children: items1 };
                                                              const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                              items = [, ];
                                                              ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                              tmp7 = VibegrationsIdeasOfferDefault;
                                                              items1 = [restoreProposal(metroImportAll, obj7), ];
                                                              const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                              items1[1] = restoreProposal(metroImportAll, obj8);
                                                              return restoreProposal(metroImportAll, obj);
                                                            }
                                                          }
                                                        }
                                                        let obj3 = { style: tmp33, children: items };
                                                        items = [tmp114, tmp41];
                                                        const tmp119 = c20(onJumpToReplied, obj3);
                                                        cResult[88] = tmp41;
                                                        cResult[89] = tmp33;
                                                        cResult[90] = tmp114;
                                                        cResult[91] = tmp119;
                                                        tmp117 = tmp119;
                                                      }
                                                      class Ce {
                                                        constructor(arg0) {
                                                          let items1;
                                                          let obj3;
                                                          let obj4;
                                                          let obj5;
                                                          let obj6;
                                                          let tmp7;
                                                          if ("outdated" === arg0) {
                                                            const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                            obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                            obj4 = { projectId, notice: "outdated" };
                                                            return restoreProposal(metroImportAll, obj2);
                                                          } else if ("ideas" === arg0) {
                                                            const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                            obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                            obj6 = { children: items1 };
                                                            const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                            items = [, ];
                                                            ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                            tmp7 = VibegrationsIdeasOfferDefault;
                                                            items1 = [restoreProposal(metroImportAll, obj7), ];
                                                            const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                            items1[1] = restoreProposal(metroImportAll, obj8);
                                                            return restoreProposal(metroImportAll, obj);
                                                          }
                                                        }
                                                      }
                                                      let obj4 = { projectId, notice: message.publishNotice };
                                                      const tmp116 = restoreProposal(message(tmp2[41]), obj4);
                                                      cResult[85] = message.publishNotice;
                                                      cResult[86] = projectId;
                                                      cResult[87] = tmp116;
                                                      tmp114 = tmp116;
                                                    }
                                                  }
                                                  class Ce {
                                                    constructor(arg0) {
                                                      let items1;
                                                      let obj3;
                                                      let obj4;
                                                      let obj5;
                                                      let obj6;
                                                      let tmp7;
                                                      if ("outdated" === arg0) {
                                                        const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                        obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                        obj4 = { projectId, notice: "outdated" };
                                                        return restoreProposal(metroImportAll, obj2);
                                                      } else if ("ideas" === arg0) {
                                                        const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                        obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                        obj6 = { children: items1 };
                                                        const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                        items = [, ];
                                                        ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                        tmp7 = VibegrationsIdeasOfferDefault;
                                                        items1 = [restoreProposal(metroImportAll, obj7), ];
                                                        const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                        items1[1] = restoreProposal(metroImportAll, obj8);
                                                        return restoreProposal(metroImportAll, obj);
                                                      }
                                                    }
                                                  }
                                                  if (true === message.interrupted) {
                                                    let tmp95;
                                                    let tmp99;
                                                    let tmp105;
                                                    const _Symbol3 = Symbol;
                                                    class Ce {
                                                      constructor(arg0) {
                                                        let items1;
                                                        let obj3;
                                                        let obj4;
                                                        let obj5;
                                                        let obj6;
                                                        let tmp7;
                                                        if ("outdated" === arg0) {
                                                          const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                          obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                          obj4 = { projectId, notice: "outdated" };
                                                          return restoreProposal(metroImportAll, obj2);
                                                        } else if ("ideas" === arg0) {
                                                          const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                          obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                          obj6 = { children: items1 };
                                                          const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                          items = [, ];
                                                          ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                          tmp7 = VibegrationsIdeasOfferDefault;
                                                          items1 = [restoreProposal(metroImportAll, obj7), ];
                                                          const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                          items1[1] = restoreProposal(metroImportAll, obj8);
                                                          return restoreProposal(metroImportAll, obj);
                                                        }
                                                      }
                                                    }
                                                    const activityBox = tmp4.activityBox;
                                                    if (cResult[92] === Symbol.for("react.memo_cache_sentinel")) {
                                                      const intl = tmp(tmp2[17]).intl;
                                                      class Ce {
                                                        constructor(arg0) {
                                                          let items1;
                                                          let obj3;
                                                          let obj4;
                                                          let obj5;
                                                          let obj6;
                                                          let tmp7;
                                                          if ("outdated" === arg0) {
                                                            const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                            obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                            obj4 = { projectId, notice: "outdated" };
                                                            return restoreProposal(metroImportAll, obj2);
                                                          } else if ("ideas" === arg0) {
                                                            const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                            obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                            obj6 = { children: items1 };
                                                            const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                            items = [, ];
                                                            ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                            tmp7 = VibegrationsIdeasOfferDefault;
                                                            items1 = [restoreProposal(metroImportAll, obj7), ];
                                                            const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                            items1[1] = restoreProposal(metroImportAll, obj8);
                                                            return restoreProposal(metroImportAll, obj);
                                                          }
                                                        }
                                                      }
                                                      const tmp96Result = tmp96(message(tmp2[18])["5T7DSm"]);
                                                      cResult[92] = tmp96Result;
                                                      tmp95 = tmp96Result;
                                                    } else {
                                                      tmp95 = cResult[92];
                                                    }
                                                    const _Symbol4 = Symbol;
                                                    if (cResult[93] === Symbol.for("react.memo_cache_sentinel")) {
                                                      class Ce {
                                                        constructor(arg0) {
                                                          let items1;
                                                          let obj3;
                                                          let obj4;
                                                          let obj5;
                                                          let obj6;
                                                          let tmp7;
                                                          if ("outdated" === arg0) {
                                                            const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                            obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                            obj4 = { projectId, notice: "outdated" };
                                                            return restoreProposal(metroImportAll, obj2);
                                                          } else if ("ideas" === arg0) {
                                                            const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                            obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                            obj6 = { children: items1 };
                                                            const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                            items = [, ];
                                                            ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                            tmp7 = VibegrationsIdeasOfferDefault;
                                                            items1 = [restoreProposal(metroImportAll, obj7), ];
                                                            const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                            items1[1] = restoreProposal(metroImportAll, obj8);
                                                            return restoreProposal(metroImportAll, obj);
                                                          }
                                                        }
                                                      }
                                                      tmp103[0] = tmp95;
                                                      let obj5 = { size: "refresh_sm", color: message(tmp2[9]).colors.TEXT_MUTED };
                                                      const tmp102 = message(tmp2[10]);
                                                      const StopIcon = tmp(tmp2[48]).StopIcon;
                                                      tmp103[4] = restoreProposal(StopIcon, obj5);
                                                      const tmp104 = restoreProposal(tmp102, tmp103);
                                                      cResult[93] = tmp104;
                                                      tmp99 = tmp104;
                                                    } else {
                                                      tmp99 = cResult[93];
                                                    }
                                                    if (cResult[94] !== tmp4.activityBox) {
                                                      class Ce {
                                                        constructor(arg0) {
                                                          let items1;
                                                          let obj3;
                                                          let obj4;
                                                          let obj5;
                                                          let obj6;
                                                          let tmp7;
                                                          if ("outdated" === arg0) {
                                                            const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                            obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                            obj4 = { projectId, notice: "outdated" };
                                                            return restoreProposal(metroImportAll, obj2);
                                                          } else if ("ideas" === arg0) {
                                                            const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                            obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                            obj6 = { children: items1 };
                                                            const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                            items = [, ];
                                                            ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                            tmp7 = VibegrationsIdeasOfferDefault;
                                                            items1 = [restoreProposal(metroImportAll, obj7), ];
                                                            const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                            items1[1] = restoreProposal(metroImportAll, obj8);
                                                            return restoreProposal(metroImportAll, obj);
                                                          }
                                                        }
                                                      }
                                                      tmp108[0] = activityBox;
                                                      tmp108[1] = tmp99;
                                                      const tmp109 = restoreProposal(onJumpToReplied, tmp108);
                                                      cResult[94] = tmp4.activityBox;
                                                      cResult[95] = tmp109;
                                                      tmp105 = tmp109;
                                                    } else {
                                                      tmp105 = cResult[95];
                                                    }
                                                    if (cResult[96] === tmp41) {
                                                      if (cResult[97] === tmp33) {
                                                        let tmp110;
                                                        if (cResult[98] === tmp105) {
                                                          tmp110 = cResult[99];
                                                        }
                                                        return tmp110;
                                                      }
                                                    }
                                                    let obj6 = { style: tmp33, children: items1 };
                                                    items1 = [tmp105, tmp41];
                                                    const tmp113 = c20(onJumpToReplied, obj6);
                                                    cResult[96] = tmp41;
                                                    cResult[97] = tmp33;
                                                    cResult[98] = tmp105;
                                                    cResult[99] = tmp113;
                                                    tmp110 = tmp113;
                                                  } else {
                                                    let tmp46;
                                                    let proposal;
                                                    if (cResult[100] !== message.steps) {
                                                      let tmp48;
                                                      const _Symbol = Symbol;
                                                      class Ce {
                                                        constructor(arg0) {
                                                          let items1;
                                                          let obj3;
                                                          let obj4;
                                                          let obj5;
                                                          let obj6;
                                                          let tmp7;
                                                          if ("outdated" === arg0) {
                                                            const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                            obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                            obj4 = { projectId, notice: "outdated" };
                                                            return restoreProposal(metroImportAll, obj2);
                                                          } else if ("ideas" === arg0) {
                                                            const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                            obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                            obj6 = { children: items1 };
                                                            const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                            items = [, ];
                                                            ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                            tmp7 = VibegrationsIdeasOfferDefault;
                                                            items1 = [restoreProposal(metroImportAll, obj7), ];
                                                            const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                            items1[1] = restoreProposal(metroImportAll, obj8);
                                                            return restoreProposal(metroImportAll, obj);
                                                          }
                                                        }
                                                      }
                                                      if (cResult[102] === Symbol.for("react.memo_cache_sentinel")) {
                                                        function we(kind) {
                                                          return "error" === kind.kind || "terminal_error" === kind.kind;
                                                        }
                                                        class Ce {
                                                          constructor(arg0) {
                                                            let items1;
                                                            let obj3;
                                                            let obj4;
                                                            let obj5;
                                                            let obj6;
                                                            let tmp7;
                                                            if ("outdated" === arg0) {
                                                              const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                              obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                              obj4 = { projectId, notice: "outdated" };
                                                              return restoreProposal(metroImportAll, obj2);
                                                            } else if ("ideas" === arg0) {
                                                              const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                              obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                              obj6 = { children: items1 };
                                                              const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                              items = [, ];
                                                              ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                              tmp7 = VibegrationsIdeasOfferDefault;
                                                              items1 = [restoreProposal(metroImportAll, obj7), ];
                                                              const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                              items1[1] = restoreProposal(metroImportAll, obj8);
                                                              return restoreProposal(metroImportAll, obj);
                                                            }
                                                          }
                                                        }
                                                        tmp48 = we;
                                                      } else {
                                                        tmp48 = cResult[102];
                                                      }
                                                      const steps1 = message.steps;
                                                      const found = steps1.find(tmp48);
                                                      cResult[100] = message.steps;
                                                      cResult[101] = found;
                                                      tmp46 = found;
                                                    } else {
                                                      tmp46 = cResult[101];
                                                    }
                                                    class Ce {
                                                      constructor(arg0) {
                                                        let items1;
                                                        let obj3;
                                                        let obj4;
                                                        let obj5;
                                                        let obj6;
                                                        let tmp7;
                                                        if ("outdated" === arg0) {
                                                          const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                          obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                          obj4 = { projectId, notice: "outdated" };
                                                          return restoreProposal(metroImportAll, obj2);
                                                        } else if ("ideas" === arg0) {
                                                          const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                          obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                          obj6 = { children: items1 };
                                                          const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                          items = [, ];
                                                          ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                          tmp7 = VibegrationsIdeasOfferDefault;
                                                          items1 = [restoreProposal(metroImportAll, obj7), ];
                                                          const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                          items1[1] = restoreProposal(metroImportAll, obj8);
                                                          return restoreProposal(metroImportAll, obj);
                                                        }
                                                      }
                                                    }
                                                    if ("proposal" === message.kind) {
                                                      proposal = message.proposal;
                                                    }
                                                    const tmp51 = onRestoreVersion(message);
                                                    let tmp52 = null;
                                                    const tmp50 = onRestoreVersion;
                                                    if (tmp51) {
                                                      tmp52 = null;
                                                      if (null != message.ideas) {
                                                        tmp52 = null;
                                                        class Ce {
                                                          constructor(arg0) {
                                                            let items1;
                                                            let obj3;
                                                            let obj4;
                                                            let obj5;
                                                            let obj6;
                                                            let tmp7;
                                                            if ("outdated" === arg0) {
                                                              const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                              obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                              obj4 = { projectId, notice: "outdated" };
                                                              return restoreProposal(metroImportAll, obj2);
                                                            } else if ("ideas" === arg0) {
                                                              const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                              obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                              obj6 = { children: items1 };
                                                              const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                              items = [, ];
                                                              ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                              tmp7 = VibegrationsIdeasOfferDefault;
                                                              items1 = [restoreProposal(metroImportAll, obj7), ];
                                                              const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                              items1[1] = restoreProposal(metroImportAll, obj8);
                                                              return restoreProposal(metroImportAll, obj);
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    if (tmp51) {
                                                      let publishCta = message.publishCta;
                                                      if (publishCta == null) {
                                                        publishCta = null;
                                                      }
                                                      class Ce {
                                                        constructor(arg0) {
                                                          let items1;
                                                          let obj3;
                                                          let obj4;
                                                          let obj5;
                                                          let obj6;
                                                          let tmp7;
                                                          if ("outdated" === arg0) {
                                                            const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                            obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                            obj4 = { projectId, notice: "outdated" };
                                                            return restoreProposal(metroImportAll, obj2);
                                                          } else if ("ideas" === arg0) {
                                                            const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                            obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                            obj6 = { children: items1 };
                                                            const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                            items = [, ];
                                                            ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                            tmp7 = VibegrationsIdeasOfferDefault;
                                                            items1 = [restoreProposal(metroImportAll, obj7), ];
                                                            const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                            items1[1] = restoreProposal(metroImportAll, obj8);
                                                            return restoreProposal(metroImportAll, obj);
                                                          }
                                                        }
                                                      }
                                                    }
                                                    if (tmp51) {
                                                      let secretRequest = message.secretRequest;
                                                      if (secretRequest == null) {
                                                        secretRequest = null;
                                                      }
                                                      class Ce {
                                                        constructor(arg0) {
                                                          let items1;
                                                          let obj3;
                                                          let obj4;
                                                          let obj5;
                                                          let obj6;
                                                          let tmp7;
                                                          if ("outdated" === arg0) {
                                                            const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                            obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                            obj4 = { projectId, notice: "outdated" };
                                                            return restoreProposal(metroImportAll, obj2);
                                                          } else if ("ideas" === arg0) {
                                                            const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                            obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                            obj6 = { children: items1 };
                                                            const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                            items = [, ];
                                                            ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                            tmp7 = VibegrationsIdeasOfferDefault;
                                                            items1 = [restoreProposal(metroImportAll, obj7), ];
                                                            const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                            items1[1] = restoreProposal(metroImportAll, obj8);
                                                            return restoreProposal(metroImportAll, obj);
                                                          }
                                                        }
                                                      }
                                                    }
                                                    if (cResult[103] === isNewest) {
                                                      if (cResult[104] === message) {
                                                        let provisionalTodo;
                                                        let tmp68;
                                                        let tmp67;
                                                        class Ce {
                                                          constructor(arg0) {
                                                            let items1;
                                                            let obj3;
                                                            let obj4;
                                                            let obj5;
                                                            let obj6;
                                                            let tmp7;
                                                            if ("outdated" === arg0) {
                                                              const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                              obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                              obj4 = { projectId, notice: "outdated" };
                                                              return restoreProposal(metroImportAll, obj2);
                                                            } else if ("ideas" === arg0) {
                                                              const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                              obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                              obj6 = { children: items1 };
                                                              const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                              items = [, ];
                                                              ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                              tmp7 = VibegrationsIdeasOfferDefault;
                                                              items1 = [restoreProposal(metroImportAll, obj7), ];
                                                              const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                              items1[1] = restoreProposal(metroImportAll, obj8);
                                                              return restoreProposal(metroImportAll, obj);
                                                            }
                                                          }
                                                        }
                                                        restoreProposal = message.restoreProposal;
                                                        if (restoreProposal == null) {
                                                          restoreProposal = null;
                                                        }
                                                        let tmp62 = null;
                                                        if (isNewest) {
                                                          tmp62 = null;
                                                          if (!clarificationDismissed) {
                                                            tmp62 = null;
                                                            if (null != message.clarification) {
                                                              tmp62 = null;
                                                              class Ce {
                                                                constructor(arg0) {
                                                                  let items1;
                                                                  let obj3;
                                                                  let obj4;
                                                                  let obj5;
                                                                  let obj6;
                                                                  let tmp7;
                                                                  if ("outdated" === arg0) {
                                                                    const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                                    obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                                    obj4 = { projectId, notice: "outdated" };
                                                                    return restoreProposal(metroImportAll, obj2);
                                                                  } else if ("ideas" === arg0) {
                                                                    const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                                    obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                                    obj6 = { children: items1 };
                                                                    const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                                    items = [, ];
                                                                    ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                                    tmp7 = VibegrationsIdeasOfferDefault;
                                                                    items1 = [restoreProposal(metroImportAll, obj7), ];
                                                                    const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                                    items1[1] = restoreProposal(metroImportAll, obj8);
                                                                    return restoreProposal(metroImportAll, obj);
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                        c20 = tmp62;
                                                        if (tmp16 == null) {
                                                          if (null != message.todos) {
                                                            class Ce {
                                                              constructor(arg0) {
                                                                let items1;
                                                                let obj3;
                                                                let obj4;
                                                                let obj5;
                                                                let obj6;
                                                                let tmp7;
                                                                if ("outdated" === arg0) {
                                                                  const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                                  obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                                  obj4 = { projectId, notice: "outdated" };
                                                                  return restoreProposal(metroImportAll, obj2);
                                                                } else if ("ideas" === arg0) {
                                                                  const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                                  obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                                  obj6 = { children: items1 };
                                                                  const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                                  items = [, ];
                                                                  ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                                  tmp7 = VibegrationsIdeasOfferDefault;
                                                                  items1 = [restoreProposal(metroImportAll, obj7), ];
                                                                  const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                                  items1[1] = restoreProposal(metroImportAll, obj8);
                                                                  return restoreProposal(metroImportAll, obj);
                                                                }
                                                              }
                                                            }
                                                          }
                                                          class Ce {
                                                            constructor(arg0) {
                                                              let items1;
                                                              let obj3;
                                                              let obj4;
                                                              let obj5;
                                                              let obj6;
                                                              let tmp7;
                                                              if ("outdated" === arg0) {
                                                                const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                                obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                                obj4 = { projectId, notice: "outdated" };
                                                                return restoreProposal(metroImportAll, obj2);
                                                              } else if ("ideas" === arg0) {
                                                                const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                                obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                                obj6 = { children: items1 };
                                                                const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                                items = [, ];
                                                                ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                                tmp7 = VibegrationsIdeasOfferDefault;
                                                                items1 = [restoreProposal(metroImportAll, obj7), ];
                                                                const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                                items1[1] = restoreProposal(metroImportAll, obj8);
                                                                return restoreProposal(metroImportAll, obj);
                                                              }
                                                            }
                                                          }
                                                        }
                                                        if (null == tmp16) {
                                                          if (null != message.provisionalTodo) {
                                                            if ("" !== message.provisionalTodo) {
                                                              provisionalTodo = message.provisionalTodo;
                                                            }
                                                          }
                                                        }
                                                        if (cResult[107] === attachments) {
                                                          if (cResult[108] === tmp62) {
                                                            if (cResult[109] === tmp29) {
                                                              if (cResult[110] === tmp46) {
                                                                if (cResult[111] === tmp52) {
                                                                  if (cResult[112] === message.steps) {
                                                                    if (cResult[113] === proposal) {
                                                                      if (cResult[114] === provisionalTodo) {
                                                                        if (cResult[115] === null) {
                                                                          if (cResult[116] === reminder) {
                                                                            if (cResult[117] === restoreProposal) {
                                                                              if (cResult[118] === null) {
                                                                                if (cResult[119] === null) {
                                                                                  if (cResult[120] === tmp16) {
                                                                                    if (cResult[121] === tmp9.steps.length) {
                                                                                      if (cResult[122] === tmp9.tasks) {
                                                                                        class Ce {
                                                                                          constructor(arg0) {
                                                                                            let items1;
                                                                                            let obj3;
                                                                                            let obj4;
                                                                                            let obj5;
                                                                                            let obj6;
                                                                                            let tmp7;
                                                                                            if ("outdated" === arg0) {
                                                                                              const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                                                              obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                                                              obj4 = { projectId, notice: "outdated" };
                                                                                              return restoreProposal(metroImportAll, obj2);
                                                                                            } else if ("ideas" === arg0) {
                                                                                              const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                                                              obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                                                              obj6 = { children: items1 };
                                                                                              const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                                                              items = [, ];
                                                                                              ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                                                              tmp7 = VibegrationsIdeasOfferDefault;
                                                                                              items1 = [restoreProposal(metroImportAll, obj7), ];
                                                                                              const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                                                              items1[1] = restoreProposal(metroImportAll, obj8);
                                                                                              return restoreProposal(metroImportAll, obj);
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                        tmp67 = cResult[126];
                                                                                        tmp68 = cResult[127];
                                                                                      }
                                                                                      class Ce {
                                                                                        constructor(arg0) {
                                                                                          let items1;
                                                                                          let obj3;
                                                                                          let obj4;
                                                                                          let obj5;
                                                                                          let obj6;
                                                                                          let tmp7;
                                                                                          if ("outdated" === arg0) {
                                                                                            const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                                                            obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                                                            obj4 = { projectId, notice: "outdated" };
                                                                                            return restoreProposal(metroImportAll, obj2);
                                                                                          } else if ("ideas" === arg0) {
                                                                                            const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                                                            obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                                                            obj6 = { children: items1 };
                                                                                            const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                                                            items = [, ];
                                                                                            ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                                                            tmp7 = VibegrationsIdeasOfferDefault;
                                                                                            items1 = [restoreProposal(metroImportAll, obj7), ];
                                                                                            const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                                                            items1[1] = restoreProposal(metroImportAll, obj8);
                                                                                            return restoreProposal(metroImportAll, obj);
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                      if (tmp68 !== Symbol.for("react.early_return_sentinel")) {
                                                                                        return tmp68;
                                                                                      } else {
                                                                                        let tmp80;
                                                                                        let closure_21 = tmp67;
                                                                                        if (cResult[128] !== arr) {
                                                                                          const found1 = arr.filter((hasWork) => hasWork.hasWork);
                                                                                          class Ce {
                                                                                            constructor(arg0) {
                                                                                              let items1;
                                                                                              let obj3;
                                                                                              let obj4;
                                                                                              let obj5;
                                                                                              let obj6;
                                                                                              let tmp7;
                                                                                              if ("outdated" === arg0) {
                                                                                                const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                                                                obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                                                                obj4 = { projectId, notice: "outdated" };
                                                                                                return restoreProposal(metroImportAll, obj2);
                                                                                              } else if ("ideas" === arg0) {
                                                                                                const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                                                                obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                                                                obj6 = { children: items1 };
                                                                                                const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                                                                items = [, ];
                                                                                                ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                                                                tmp7 = VibegrationsIdeasOfferDefault;
                                                                                                items1 = [restoreProposal(metroImportAll, obj7), ];
                                                                                                const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                                                                items1[1] = restoreProposal(metroImportAll, obj8);
                                                                                                return restoreProposal(metroImportAll, obj);
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                          let index;
                                                                                          if (tmp78 != null) {
                                                                                            index = tmp78.index;
                                                                                          }
                                                                                          cResult[128] = arr;
                                                                                          cResult[129] = index;
                                                                                        }
                                                                                        class Ce {
                                                                                          constructor(arg0) {
                                                                                            let items1;
                                                                                            let obj3;
                                                                                            let obj4;
                                                                                            let obj5;
                                                                                            let obj6;
                                                                                            let tmp7;
                                                                                            if ("outdated" === arg0) {
                                                                                              const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                                                              obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                                                              obj4 = { projectId, notice: "outdated" };
                                                                                              return restoreProposal(metroImportAll, obj2);
                                                                                            } else if ("ideas" === arg0) {
                                                                                              const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                                                              obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                                                              obj6 = { children: items1 };
                                                                                              const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                                                              items = [, ];
                                                                                              ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                                                              tmp7 = VibegrationsIdeasOfferDefault;
                                                                                              items1 = [restoreProposal(metroImportAll, obj7), ];
                                                                                              const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                                                              items1[1] = restoreProposal(metroImportAll, obj8);
                                                                                              return restoreProposal(metroImportAll, obj);
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                        if (cResult[130] !== message) {
                                                                                          const tmp50Result = tmp50(message);
                                                                                          class Ce {
                                                                                            constructor(arg0) {
                                                                                              let items1;
                                                                                              let obj3;
                                                                                              let obj4;
                                                                                              let obj5;
                                                                                              let obj6;
                                                                                              let tmp7;
                                                                                              if ("outdated" === arg0) {
                                                                                                const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                                                                obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                                                                obj4 = { projectId, notice: "outdated" };
                                                                                                return restoreProposal(metroImportAll, obj2);
                                                                                              } else if ("ideas" === arg0) {
                                                                                                const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                                                                obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                                                                obj6 = { children: items1 };
                                                                                                const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                                                                items = [, ];
                                                                                                ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                                                                tmp7 = VibegrationsIdeasOfferDefault;
                                                                                                items1 = [restoreProposal(metroImportAll, obj7), ];
                                                                                                const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                                                                items1[1] = restoreProposal(metroImportAll, obj8);
                                                                                                return restoreProposal(metroImportAll, obj);
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                          cResult[131] = tmp50Result;
                                                                                          tmp80 = tmp50Result;
                                                                                        } else {
                                                                                          tmp80 = cResult[131];
                                                                                        }
                                                                                        let closure_23 = tmp82;
                                                                                        if (cResult[132] === !tmp80) {
                                                                                          let tmp83;
                                                                                          if (cResult[133] === arr) {
                                                                                            tmp83 = cResult[134];
                                                                                          }
                                                                                          const open = tmp83.open;
                                                                                          class Ce {
                                                                                            constructor(arg0) {
                                                                                              let items1;
                                                                                              let obj3;
                                                                                              let obj4;
                                                                                              let obj5;
                                                                                              let obj6;
                                                                                              let tmp7;
                                                                                              if ("outdated" === arg0) {
                                                                                                const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                                                                obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                                                                obj4 = { projectId, notice: "outdated" };
                                                                                                return restoreProposal(metroImportAll, obj2);
                                                                                              } else if ("ideas" === arg0) {
                                                                                                const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                                                                obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                                                                obj6 = { children: items1 };
                                                                                                const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                                                                items = [, ];
                                                                                                ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                                                                tmp7 = VibegrationsIdeasOfferDefault;
                                                                                                items1 = [restoreProposal(metroImportAll, obj7), ];
                                                                                                const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                                                                items1[1] = restoreProposal(metroImportAll, obj8);
                                                                                                return restoreProposal(metroImportAll, obj);
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                          let avatarSpokenReplying = groupStart && null != replied;
                                                                                          if (cResult[135] === tmp23) {
                                                                                            if (cResult[136] === onJumpToReplied) {
                                                                                              if (cResult[137] === replied) {
                                                                                                if (avatarSpokenReplying) {
                                                                                                  avatarSpokenReplying = tmp4.avatarSpokenReplying;
                                                                                                }
                                                                                                class Ce {
                                                                                                  constructor(arg0) {
                                                                                                    let items1;
                                                                                                    let obj3;
                                                                                                    let obj4;
                                                                                                    let obj5;
                                                                                                    let obj6;
                                                                                                    let tmp7;
                                                                                                    if ("outdated" === arg0) {
                                                                                                      const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                                                                      obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                                                                      obj4 = { projectId, notice: "outdated" };
                                                                                                      return restoreProposal(metroImportAll, obj2);
                                                                                                    } else if ("ideas" === arg0) {
                                                                                                      const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                                                                      obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                                                                      obj6 = { children: items1 };
                                                                                                      const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                                                                      items = [, ];
                                                                                                      ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                                                                      tmp7 = VibegrationsIdeasOfferDefault;
                                                                                                      items1 = [restoreProposal(metroImportAll, obj7), ];
                                                                                                      const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                                                                      items1[1] = restoreProposal(metroImportAll, obj8);
                                                                                                      return restoreProposal(metroImportAll, obj);
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                                const items2 = [, , ];
                                                                                                ({ avatar: arr4[0], avatarSpoken: arr4[1] } = tmp4);
                                                                                                items2[2] = avatarSpokenReplying;
                                                                                                cResult[140] = tmp4.avatar;
                                                                                                cResult[141] = tmp4.avatarSpoken;
                                                                                                cResult[142] = avatarSpokenReplying;
                                                                                                cResult[143] = items2;
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                          let tmp88Result = null;
                                                                                          if (avatarSpokenReplying) {
                                                                                            const tmp88 = restoreProposal;
                                                                                            class Ce {
                                                                                              constructor(arg0) {
                                                                                                let items1;
                                                                                                let obj3;
                                                                                                let obj4;
                                                                                                let obj5;
                                                                                                let obj6;
                                                                                                let tmp7;
                                                                                                if ("outdated" === arg0) {
                                                                                                  const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                                                                  obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                                                                  obj4 = { projectId, notice: "outdated" };
                                                                                                  return restoreProposal(metroImportAll, obj2);
                                                                                                } else if ("ideas" === arg0) {
                                                                                                  const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                                                                  obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                                                                  obj6 = { children: items1 };
                                                                                                  const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                                                                  items = [, ];
                                                                                                  ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                                                                  tmp7 = VibegrationsIdeasOfferDefault;
                                                                                                  items1 = [restoreProposal(metroImportAll, obj7), ];
                                                                                                  const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                                                                  items1[1] = restoreProposal(metroImportAll, obj8);
                                                                                                  return restoreProposal(metroImportAll, obj);
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                            tmp91[0] = replied;
                                                                                            let tmp92;
                                                                                            const tmp90 = message(tmp2[13]);
                                                                                            if (null != onJumpToReplied) {
                                                                                              tmp92 = tmp23;
                                                                                            }
                                                                                            tmp91[1] = tmp92;
                                                                                            tmp88Result = tmp88(tmp90, tmp91);
                                                                                          }
                                                                                          cResult[135] = tmp23;
                                                                                          cResult[136] = onJumpToReplied;
                                                                                          cResult[137] = replied;
                                                                                          cResult[138] = avatarSpokenReplying;
                                                                                          cResult[139] = tmp88Result;
                                                                                        }
                                                                                        let obj7 = { turnActive: !tmp80 };
                                                                                        const tmpResult14 = tmp(tmp2[29]);
                                                                                        const turnLifecycleResult = tmpResult14.turnLifecycle(arr, obj7);
                                                                                        cResult[132] = !tmp80;
                                                                                        cResult[133] = arr;
                                                                                        cResult[134] = turnLifecycleResult;
                                                                                        tmp83 = turnLifecycleResult;
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                        const _Symbol2 = Symbol;
                                                        let obj8 = { steps: message.steps, content: tmp29, hasProposal: null != proposal, hasAttachments: null != attachments };
                                                        const forResult = Symbol.for("react.early_return_sentinel");
                                                        const tmpResult15 = tmp(tmp2[50]);
                                                        const turnPresentation = tmpResult15.resolveTurnPresentation(obj8);
                                                        ({ showsClosingMessage, closingContent, replyKey } = turnPresentation);
                                                        if (!(tmp9.steps.length > 0 || tmp9.tasks.length > 0)) {
                                                          if (0 === turnPresentation.streamed.length) {
                                                            if ("" === tmp29) {
                                                              if (null == proposal) {
                                                                if (null == tmp46) {
                                                                  if (null == tmp52) {
                                                                    if (null == tmp16) {
                                                                      if (null == provisionalTodo) {
                                                                        if (null == null) {
                                                                          if (null == null) {
                                                                            if (null == attachments) {
                                                                              if (null == tmp62) {
                                                                                if (null == restoreProposal) {
                                                                                  let tmp73;
                                                                                  if (null == null) {
                                                                                    tmp73 = null;
                                                                                    class Ce {
                                                                                      constructor(arg0) {
                                                                                        let items1;
                                                                                        let obj3;
                                                                                        let obj4;
                                                                                        let obj5;
                                                                                        let obj6;
                                                                                        let tmp7;
                                                                                        if ("outdated" === arg0) {
                                                                                          const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                                                          obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                                                          obj4 = { projectId, notice: "outdated" };
                                                                                          return restoreProposal(metroImportAll, obj2);
                                                                                        } else if ("ideas" === arg0) {
                                                                                          const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                                                          obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                                                          obj6 = { children: items1 };
                                                                                          const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                                                          items = [, ];
                                                                                          ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                                                          tmp7 = VibegrationsIdeasOfferDefault;
                                                                                          items1 = [restoreProposal(metroImportAll, obj7), ];
                                                                                          const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                                                          items1[1] = restoreProposal(metroImportAll, obj8);
                                                                                          return restoreProposal(metroImportAll, obj);
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                  class Ce {
                                                                                    constructor(arg0) {
                                                                                      let items1;
                                                                                      let obj3;
                                                                                      let obj4;
                                                                                      let obj5;
                                                                                      let obj6;
                                                                                      let tmp7;
                                                                                      if ("outdated" === arg0) {
                                                                                        const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                                                        obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                                                        obj4 = { projectId, notice: "outdated" };
                                                                                        return restoreProposal(metroImportAll, obj2);
                                                                                      } else if ("ideas" === arg0) {
                                                                                        const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                                                        obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                                                        obj6 = { children: items1 };
                                                                                        const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                                                        items = [, ];
                                                                                        ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                                                        tmp7 = VibegrationsIdeasOfferDefault;
                                                                                        items1 = [restoreProposal(metroImportAll, obj7), ];
                                                                                        const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                                                        items1[1] = restoreProposal(metroImportAll, obj8);
                                                                                        return restoreProposal(metroImportAll, obj);
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                  cResult[108] = tmp62;
                                                                                  cResult[109] = tmp29;
                                                                                  cResult[110] = tmp46;
                                                                                  cResult[111] = tmp52;
                                                                                  cResult[112] = message.steps;
                                                                                  cResult[113] = proposal;
                                                                                  cResult[114] = provisionalTodo;
                                                                                  cResult[115] = null;
                                                                                  cResult[116] = reminder;
                                                                                  cResult[117] = restoreProposal;
                                                                                  cResult[118] = null;
                                                                                  cResult[119] = null;
                                                                                  cResult[120] = tmp16;
                                                                                  cResult[121] = tmp9.steps.length;
                                                                                  cResult[122] = tmp9.tasks;
                                                                                  cResult[123] = closingContent;
                                                                                  cResult[124] = replyKey;
                                                                                  cResult[125] = showsClosingMessage;
                                                                                  cResult[126] = turnLeadsWithStretchResult;
                                                                                  cResult[127] = tmp73;
                                                                                  tmp68 = tmp73;
                                                                                  tmp67 = turnLeadsWithStretchResult;
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                        const tmpResult16 = tmp(tmp2[50]);
                                                        turnLeadsWithStretchResult = tmpResult16.turnLeadsWithStretch(tmp9.steps.length > 0 || tmp9.tasks.length > 0, turnPresentation);
                                                        tmp73 = forResult;
                                                      }
                                                    }
                                                    let tmp58;
                                                    if ("open" === secretRequestStatus) {
                                                      const tmpResult17 = tmp(tmp2[49]);
                                                      const activeAwaitingUserResult = tmpResult17.activeAwaitingUser(message, isNewest);
                                                      class Ce {
                                                        constructor(arg0) {
                                                          let items1;
                                                          let obj3;
                                                          let obj4;
                                                          let obj5;
                                                          let obj6;
                                                          let tmp7;
                                                          if ("outdated" === arg0) {
                                                            const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                            obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                            obj4 = { projectId, notice: "outdated" };
                                                            return restoreProposal(metroImportAll, obj2);
                                                          } else if ("ideas" === arg0) {
                                                            const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                            obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                            obj6 = { children: items1 };
                                                            const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                            items = [, ];
                                                            ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                            tmp7 = VibegrationsIdeasOfferDefault;
                                                            items1 = [restoreProposal(metroImportAll, obj7), ];
                                                            const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                            items1[1] = restoreProposal(metroImportAll, obj8);
                                                            return restoreProposal(metroImportAll, obj);
                                                          }
                                                        }
                                                      }
                                                      tmp58 = activeAwaitingUserResult;
                                                    }
                                                    cResult[103] = isNewest;
                                                    cResult[104] = message;
                                                    cResult[105] = secretRequestStatus;
                                                    cResult[106] = tmp58;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          class Ce {
                                            constructor(arg0) {
                                              let items1;
                                              let obj3;
                                              let obj4;
                                              let obj5;
                                              let obj6;
                                              let tmp7;
                                              if ("outdated" === arg0) {
                                                const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                obj4 = { projectId, notice: "outdated" };
                                                return restoreProposal(metroImportAll, obj2);
                                              } else if ("ideas" === arg0) {
                                                const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                obj6 = { children: items1 };
                                                const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                items = [, ];
                                                ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                tmp7 = VibegrationsIdeasOfferDefault;
                                                items1 = [restoreProposal(metroImportAll, obj7), ];
                                                const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                items1[1] = restoreProposal(metroImportAll, obj8);
                                                return restoreProposal(metroImportAll, obj);
                                              }
                                            }
                                          }
                                          if (hostsReminder) {
                                            class Ce {
                                              constructor(arg0) {
                                                let items1;
                                                let obj3;
                                                let obj4;
                                                let obj5;
                                                let obj6;
                                                let tmp7;
                                                if ("outdated" === arg0) {
                                                  const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                                  obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                                  obj4 = { projectId, notice: "outdated" };
                                                  return restoreProposal(metroImportAll, obj2);
                                                } else if ("ideas" === arg0) {
                                                  const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                                  obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                                  obj6 = { children: items1 };
                                                  const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                                  items = [, ];
                                                  ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                  tmp7 = VibegrationsIdeasOfferDefault;
                                                  items1 = [restoreProposal(metroImportAll, obj7), ];
                                                  const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                                  items1[1] = restoreProposal(metroImportAll, obj8);
                                                  return restoreProposal(metroImportAll, obj);
                                                }
                                              }
                                            }
                                            tmp45[0] = tmp4.reminderSlot;
                                            tmp45[1] = reminder;
                                            tmp45[2] = tmp40;
                                            tmp42 = restoreProposal(message(tmp2[44]), tmp45);
                                          }
                                          cResult[49] = hostsReminder;
                                          cResult[50] = reminder;
                                          cResult[51] = tmp40;
                                          cResult[52] = tmp4.reminderSlot;
                                          cResult[53] = tmp42;
                                          tmp41 = tmp42;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            class Ce {
                              constructor(arg0) {
                                let items1;
                                let obj3;
                                let obj4;
                                let obj5;
                                let obj6;
                                let tmp7;
                                if ("outdated" === arg0) {
                                  const obj2 = { style: closure_12.reminderTip, children: restoreProposal(metroImportAll, obj3) };
                                  obj3 = { style: closure_12.spoken, children: restoreProposal(VibegrationsPublishNoticeLineDefault, obj4) };
                                  obj4 = { projectId, notice: "outdated" };
                                  return restoreProposal(metroImportAll, obj2);
                                } else if ("ideas" === arg0) {
                                  const obj = { style: closure_12.reminderSeparated, children: restoreProposal(tmp7, obj5) };
                                  obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: _null(closure_21, obj6) };
                                  obj6 = { children: items1 };
                                  const obj7 = { style: items, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                                  items = [, ];
                                  ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                  tmp7 = VibegrationsIdeasOfferDefault;
                                  items1 = [restoreProposal(metroImportAll, obj7), ];
                                  const obj8 = { style: closure_12.header, children: restoreProposal(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                                  items1[1] = restoreProposal(metroImportAll, obj8);
                                  return restoreProposal(metroImportAll, obj);
                                }
                              }
                            }
                            cResult[40] = onAskForIdeas;
                            cResult[41] = projectId;
                            cResult[42] = tmp4.avatar;
                            cResult[43] = tmp4.avatarSpoken;
                            cResult[44] = tmp4.header;
                            cResult[45] = tmp4.reminderSeparated;
                            cResult[46] = tmp4.reminderTip;
                            cResult[47] = tmp4.spoken;
                            cResult[48] = Ce;
                            tmp40 = Ce;
                          }
                        }
                      }
                    }
                    function _e() {
                      let fn;
                      let obj = { content, userId: user_id, onRestoreVersion: fn };
                      fn = undefined;
                      const showVibegrationsMessageActions = VibegrationsMessageActionSheet.showVibegrationsMessageActions;
                      VibegrationsMessageActionSheet;
                      if (null != closure_17) {
                        if (null != onRestoreVersion) {
                          fn = () => {
                            const obj = projectId(groupStart[36]);
                            return obj.confirmRestoreVersion(() => closure_1_11(closure_1_17));
                          };
                        }
                      }
                      return showVibegrationsMessageActions(obj);
                    }
                    cResult[35] = user_id;
                    cResult[36] = tmp29;
                    cResult[37] = onRestoreVersion;
                    cResult[38] = tmp35;
                    cResult[39] = _e;
                  }
                  let turnRestoreEntryResult = null;
                  if (null != onRestoreVersion) {
                    const tmpResult18 = tmp(tmp2[39]);
                    turnRestoreEntryResult = tmpResult18.turnRestoreEntry(message);
                  }
                  cResult[32] = message;
                  cResult[33] = onRestoreVersion;
                  cResult[34] = turnRestoreEntryResult;
                  tmp35 = turnRestoreEntryResult;
                }
                const items3 = [tmp4.row, groupStart && !first && tmp4.rowGroupStart];
                cResult[29] = tmp4.row;
                cResult[30] = groupStart && !first && tmp4.rowGroupStart;
                cResult[31] = items3;
                tmp33 = items3;
              }
              cResult[22] = onJumpToReplied;
              cResult[23] = replied;
              cResult[24] = tmp24;
              tmp23 = tmp24;
            }
          }
          cResult[18] = message.render_id;
          cResult[19] = onTogglePlan;
          cResult[20] = planSuperseded;
          cResult[21] = tmp22;
        }
      }
      function ie() {
        return onToggleChecklist(message.render_id, checklistSuperseded);
      }
      cResult[14] = checklistSuperseded;
      cResult[15] = message.render_id;
      cResult[16] = onToggleChecklist;
      cResult[17] = ie;
    }
    const obj9 = { turnActive: !tmp11 };
    const tmpResult19 = tmp(tmp2[29]);
    const turnSegmentsResult = tmpResult19.turnSegments(steps2, obj9);
    cResult[7] = message.steps;
    cResult[8] = !tmp11;
    cResult[9] = turnSegmentsResult;
    arr = turnSegmentsResult;
  }
  const tmpResult20 = tmp(tmp2[29]);
  const timelineTree = tmpResult20.buildTimelineTree(steps, { turnActive: tmp8 });
  cResult[2] = message.steps;
  cResult[3] = tmp8;
  cResult[4] = timelineTree;
  tmp9 = timelineTree;
}) : ((projectId) => {
  let StopIcon;
  let Text2;
  let _undefined;
  let c20;
  let checklistExpanded;
  let checklistSuperseded;
  let clarificationDismissed;
  let closure_10;
  let first;
  let fn;
  let hostsReminder;
  let intl;
  let intl2;
  let intl3;
  let isNewest;
  let items11;
  let items12;
  let items13;
  let items14;
  let items18;
  let obj14;
  let obj19;
  let obj20;
  let obj27;
  let obj31;
  let obj37;
  let obj7;
  let obj9;
  let onAnswerClarification;
  let onApprovePlan;
  let onAsk;
  let onPickIdea;
  let onRestoreVersion;
  let onToggleChecklist;
  let planExpanded;
  let planVersion;
  let reminder;
  let secretRequestStatus;
  let showsClosingMessage;
  let tmp16;
  let tmp38Result4;
  let tmp52;
  let tmp92;
  projectId = projectId.projectId;
  const message = projectId.message;
  const groupStart = projectId.groupStart;
  ({ isNewest, reminder, checklistSuperseded } = projectId);
  ({ secretRequestStatus, onToggleChecklist } = projectId);
  const planSuperseded = projectId.planSuperseded;
  const onTogglePlan = projectId.onTogglePlan;
  const replied = projectId.replied;
  const onJumpToReplied = projectId.onJumpToReplied;
  ({ onAskForIdeas: AppStateStore, onDismissClarification: closure_10, onRestoreVersion } = projectId);
  let trimmed;
  let user_id;
  let memo5;
  let restoreProposal;
  let clarification;
  c20 = undefined;
  let c21;
  let index;
  let closure_23;
  let open;
  ({ first, hostsReminder, checklistExpanded, planVersion, planExpanded, onApprovePlan, onPickIdea, onAnswerClarification, clarificationDismissed } = projectId);
  let tmp = closure_29();
  closure_12 = tmp;
  let obj = onToggleChecklist;
  items = [message];
  const memo = onToggleChecklist.useMemo(() => {
    const obj = VibegrationsTimelineTree;
    const obj2 = { turnActive: !unpackModuleId(message) };
    return obj.buildTimelineTree(message.steps, obj2);
  }, items);
  let items1 = [message];
  const memo1 = onToggleChecklist.useMemo(() => {
    const obj = VibegrationsTimelineTree;
    const obj2 = { turnActive: !unpackModuleId(message) };
    return obj.turnSegments(message.steps, obj2);
  }, items1);
  const items2 = [message];
  const memo2 = onToggleChecklist.useMemo(() => {
    const obj = VibegrationsTimelineTree;
    return obj.latestTodos(message.steps);
  }, items2);
  const items3 = [memo];
  const items4 = [onToggleChecklist, message.render_id, checklistSuperseded];
  const memo3 = onToggleChecklist.useMemo(() => {
    const obj = VibegrationsTodoAgents;
    return obj.runningTodoAgents(memo.tasks);
  }, items3);
  const items5 = [onTogglePlan, message.render_id, planSuperseded];
  const callback = onToggleChecklist.useCallback(() => onToggleChecklist(message.render_id, checklistSuperseded), items4);
  const items6 = [onJumpToReplied, replied];
  const callback1 = onToggleChecklist.useCallback(() => onTogglePlan(message.render_id, planSuperseded), items5);
  const items7 = [message.content];
  const callback2 = onToggleChecklist.useCallback(() => {
    if (null != replied) {
      if (onJumpToReplied != null) {
        tmp2(tmp.id);
      }
    }
  }, items6);
  const memo4 = onToggleChecklist.useMemo(() => {
    const obj = VibegrationsDesignFeedback;
    return obj.parseVibegrationsDesignRemark(message.content);
  }, items7);
  let body;
  if (memo4 != null) {
    body = memo4.body;
  }
  if (body == null) {
    body = message.content;
  }
  trimmed = body.trim();
  let attachments = null;
  if (null != message.attachments) {
    attachments = null;
    if (message.attachments.length > 0) {
      attachments = message.attachments;
    }
  }
  const items8 = [tmp.row, groupStart && !first && tmp.rowGroupStart];
  user_id = undefined;
  if ("user" === message.role) {
    user_id = message.user_id;
  }
  const items9 = [message, onRestoreVersion];
  memo5 = obj.useMemo(() => {
    let turnRestoreEntryResult = null;
    if (null != onRestoreVersion) {
      const obj = VibegrationsChatRestore;
      turnRestoreEntryResult = obj.turnRestoreEntry(message);
    }
    return turnRestoreEntryResult;
  }, items9);
  const items10 = [trimmed, user_id, memo5, onRestoreVersion];
  let tmp15 = "" !== trimmed;
  const callback3 = obj.useCallback(() => {
    let fn;
    let obj = { content: trimmed, userId: user_id, onRestoreVersion: fn };
    fn = undefined;
    const showVibegrationsMessageActions = VibegrationsMessageActionSheet.showVibegrationsMessageActions;
    VibegrationsMessageActionSheet;
    if (null != memo5) {
      if (null != onRestoreVersion) {
        fn = () => {
          const obj = projectId(groupStart[36]);
          return obj.confirmRestoreVersion(() => closure_1_11(closure_1_17));
        };
      }
    }
    return showVibegrationsMessageActions(obj);
  }, items10);
  if (!tmp15) {
    let tmp17 = null;
    if (hostsReminder) {
      const tmp18 = clarification;
      let tmp19 = message;
      let obj2 = {
        style: tmp.reminderSlot,
        reminder,
        renderReminder(c2) {
              let items1;
              let obj3;
              let obj4;
              let obj5;
              let obj6;
              let tmp7;
              if ("outdated" === c2) {
                const obj2 = { style: closure_12.reminderTip, children: clarification(metroImportAll, obj3) };
                obj3 = { style: closure_12.spoken, children: clarification(VibegrationsPublishNoticeLineDefault, obj4) };
                obj4 = { projectId, notice: "outdated" };
                return clarification(metroImportAll, obj2);
              } else if ("ideas" === c2) {
                const obj = { style: closure_12.reminderSeparated, children: clarification(tmp7, obj5) };
                obj5 = { style: closure_12.spoken, onAsk: AppStateStore, attribution: _undefined(closure_21, obj6) };
                obj6 = { children: items1 };
                const obj7 = { style: items, children: clarification(VibegrationsMessageAuthor.VibegrationsConjureAvatar, {}) };
                items = [, ];
                ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                tmp7 = VibegrationsIdeasOfferDefault;
                items1 = [clarification(metroImportAll, obj7), ];
                const obj8 = { style: closure_12.header, children: clarification(VibegrationsMessageAuthor.VibegrationsConjureHeader, {}) };
                items1[1] = clarification(metroImportAll, obj8);
                return clarification(metroImportAll, obj);
              }
            }
      };
      tmp17 = clarification(message(groupStart[44]), obj2);
    }
    if ("user" === message.role) {
      let tmp102Result;
      if ("" === trimmed) {
        if (null == memo4) {
          if (null == attachments) {
            return null;
          }
        }
      }
      const obj40 = projectId(groupStart[45]);
      const vibegrationsAgentReactionLabel = obj40.getVibegrationsAgentReactionLabel(message.agentReaction);
      let obj5 = { style: items8, onLongPress: tmp16, accessible: false, children: items11 };
      let tmp104 = null;
      const tmp103 = replied;
      if (groupStart) {
        let obj6 = { style: tmp.avatar, children: clarification(projectId(groupStart[43]).VibegrationsUserAvatar, obj7) };
        obj7 = { userId: message.user_id };
        tmp104 = clarification(onJumpToReplied, obj6);
      }
      items11 = [tmp104, , , , ];
      let tmp107 = null;
      if (groupStart) {
        let obj8 = { style: tmp.header, children: clarification(projectId(groupStart[43]).VibegrationsUserHeader, obj9) };
        obj9 = { userId: null, at: null };
        ({ user_id: obj45.userId, created_at: obj45.at } = message);
        tmp107 = clarification(onJumpToReplied, obj8);
      }
      items11[1] = tmp107;
      if (tmp15) {
        let combined;
        const Text3 = tmp99(tmp100[19]).Text;
        if (!groupStart) {
          const intl4 = tmp99(tmp100[17]).intl;
          const _HermesInternal = HermesInternal;
          combined = "" + intl4.string(tmp99(tmp100[17]).t.KD6OJJ) + ": " + trimmed;
        }
        let tmp113 = null;
        const obj10 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: items12 };
        if (null != memo4) {
          const obj11 = { label: memo4.label, variant: "text-md/medium" };
          tmp113 = clarification(message(tmp100[46]), obj11);
        }
        items12 = [tmp113, , ];
        let str5 = null;
        if (null != memo4) {
          str5 = null;
          if (tmp15) {
            str5 = " ";
          }
        }
        items12[1] = str5;
        items12[2] = trimmed;
        tmp102Result = tmp102(Text3, obj10);
      } else {
        tmp102Result = null;
      }
      items11[2] = tmp102Result;
      let tmp116 = null;
      if (null != attachments) {
        const obj12 = { projectId, attachments };
        tmp116 = clarification(closure_33, obj12);
      }
      items11[3] = tmp116;
      let tmp119 = null;
      if (null != message.agentReaction) {
        tmp119 = null;
        if (null != vibegrationsAgentReactionLabel) {
          const obj13 = { style: tmp.agentReaction, accessible: true, accessibilityRole: "image", accessibilityLabel: vibegrationsAgentReactionLabel, children: clarification(message(groupStart[47]), obj14) };
          obj14 = { name: message.agentReaction, fastImageStyle: tmp.agentReactionEmoji };
          tmp119 = clarification(onJumpToReplied, obj13);
        }
      }
      items11[4] = tmp119;
      return c20(tmp103, obj5);
    } else {
      if ("publish_notice" === message.kind) {
        if (null != message.publishNotice) {
          const obj15 = { style: items8, children: items13 };
          const obj16 = { projectId, notice: message.publishNotice };
          items13 = [clarification(message(groupStart[41]), obj16), tmp17];
          return c20(onJumpToReplied, obj15);
        }
      }
      if (true === message.interrupted) {
        const obj17 = { style: items8, children: items14 };
        const obj18 = { style: tmp.activityBox, children: clarification(tmp92, obj19) };
        obj19 = { line: intl3.string(message(groupStart[18])["5T7DSm"]), live: false, settled: true, inGutter: true, glyph: clarification(StopIcon, obj20) };
        tmp92 = message(groupStart[10]);
        intl3 = projectId(groupStart[17]).intl;
        obj20 = { size: "refresh_sm", color: message(groupStart[9]).colors.TEXT_MUTED };
        StopIcon = projectId(groupStart[48]).StopIcon;
        items14 = [clarification(onJumpToReplied, obj18), tmp17];
        return c20(onJumpToReplied, obj17);
      } else {
        let provisionalTodo;
        let tmp53Result18;
        let steps = message.steps;
        const found = steps.find((kind) => "error" === kind.kind || "terminal_error" === kind.kind);
        let proposal;
        if ("proposal" === message.kind) {
          proposal = message.proposal;
        }
        const tmp23 = onRestoreVersion(message);
        let ideas = null;
        const tmp22 = onRestoreVersion;
        if (tmp23) {
          ideas = null;
          if (null != message.ideas) {
            ideas = null;
            if (message.ideas.length > 0) {
              ideas = message.ideas;
            }
          }
        }
        let tmp25 = null;
        if (tmp23) {
          let publishCta = message.publishCta;
          if (publishCta == null) {
            publishCta = null;
          }
          tmp25 = publishCta;
        }
        let tmp27 = null;
        if (tmp23) {
          let secretRequest = message.secretRequest;
          if (secretRequest == null) {
            secretRequest = null;
          }
          tmp27 = secretRequest;
        }
        if ("open" === secretRequestStatus) {
          let obj3 = projectId(groupStart[49]);
          obj3.activeAwaitingUser(message, isNewest);
        }
        let tmp33 = null;
        if (tmp23) {
          let settingsRequest = message.settingsRequest;
          if (settingsRequest == null) {
            settingsRequest = null;
          }
          tmp33 = settingsRequest;
        }
        restoreProposal = message.restoreProposal;
        if (restoreProposal == null) {
          restoreProposal = null;
        }
        clarification = null;
        if (isNewest) {
          clarification = null;
          if (!clarificationDismissed) {
            clarification = null;
            if (null != message.clarification) {
              clarification = null;
              if (message.clarification.questions.length > 0) {
                clarification = message.clarification;
              }
            }
          }
        }
        let items19 = memo2;
        if (memo2 == null) {
          let todos = null;
          if (null != message.todos) {
            todos = null;
            if (message.todos.length > 0) {
              todos = message.todos;
            }
          }
          items19 = todos;
        }
        if (null == items19) {
          if (null != message.provisionalTodo) {
            if ("" !== message.provisionalTodo) {
              provisionalTodo = message.provisionalTodo;
            }
          }
        }
        let obj4 = projectId(groupStart[50]);
        const obj21 = { steps: message.steps, content: trimmed, hasProposal: null != proposal, hasAttachments: null != attachments };
        const turnPresentation = obj4.resolveTurnPresentation(obj21);
        ({ showsClosingMessage, replyKey: c20 } = turnPresentation);
        let tmp41 = memo.steps.length > 0;
        const closingContent = turnPresentation.closingContent;
        if (!tmp41) {
          tmp41 = memo.tasks.length > 0;
        }
        if (!tmp41) {
          if (0 === turnPresentation.streamed.length) {
            if ("" === trimmed) {
              if (null == proposal) {
                if (null == found) {
                  if (null == ideas) {
                    if (null == items19) {
                      if (null == provisionalTodo) {
                        if (null == tmp27) {
                          if (null == tmp33) {
                            if (null == attachments) {
                              if (null == clarification) {
                                if (null == restoreProposal) {
                                  if (null == tmp25) {
                                    if (null == reminder) {
                                      return null;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const tmp38Result = projectId(groupStart[50]);
        const turnLeadsWithStretchResult = tmp38Result.turnLeadsWithStretch(tmp41, turnPresentation);
        c21 = turnLeadsWithStretchResult;
        const found1 = memo1.filter((hasWork) => hasWork.hasWork);
        const atResult = found1.at(-1);
        index = undefined;
        if (atResult != null) {
          index = atResult.index;
        }
        const tmp45 = !tmp22(message);
        closure_23 = tmp45;
        const obj22 = { turnActive: tmp45 };
        const tmp38Result3 = projectId(groupStart[29]);
        open = tmp38Result3.turnLifecycle(memo1, obj22).open;
        let avatarSpokenReplying = groupStart && null != replied;
        let tmp49Result = null;
        const tmp47 = c21;
        if (avatarSpokenReplying) {
          const obj23 = { replied, onJump: tmp52 };
          tmp52 = undefined;
          const tmp49 = clarification;
          const tmp51 = message(groupStart[13]);
          if (null != onJumpToReplied) {
            tmp52 = callback2;
          }
          tmp49Result = tmp49(tmp51, obj23);
        }
        const items15 = [tmp49Result, , ];
        const items16 = [, , ];
        ({ avatar: arr15[0], avatarSpoken: arr15[1] } = tmp);
        if (avatarSpokenReplying) {
          avatarSpokenReplying = tmp.avatarSpokenReplying;
        }
        const obj24 = { children: items15 };
        items16[2] = avatarSpokenReplying;
        const obj25 = { style: items16, children: clarification(projectId(groupStart[43]).VibegrationsConjureAvatar, {}) };
        items15[1] = clarification(onJumpToReplied, obj25);
        const obj26 = { style: tmp.header, children: clarification(projectId(groupStart[43]).VibegrationsConjureHeader, obj27) };
        obj27 = { at: message.created_at };
        items15[2] = clarification(onJumpToReplied, obj26);
        const tmp46Result = c20(tmp47, obj24);
        const obj28 = { style: items8, onLongPress: tmp16, accessible: false, children: null };
        let tmp53Result = null;
        const tmp56 = replied;
        if (turnLeadsWithStretchResult) {
          tmp53Result = null;
          if (groupStart) {
            const obj29 = { style: tmp.spoken, children: tmp46Result };
            tmp53Result = tmp53(tmp54, obj29);
          }
        }
        const items17 = [
          tmp53Result,
          memo1.map((prose, index) => {
                  let VibegrationsRevealedMarkdown;
                  let obj3;
                  let steps;
                  let tasks;
                  let tmp15;
                  let tmp5;
                  let tmp18Result = null;
                  const Fragment = react.Fragment;
                  const tmp = closure_20;
                  if (null != prose.prose) {
                    tmp18Result = null;
                    if (prose.prose.key !== c20) {
                      const obj2 = { style: closure_12.spoken, children: clarification(VibegrationsRevealedMarkdown, obj3) };
                      obj3 = { source: prose.prose.content, streaming: tmp5 };
                      tmp5 = closure_23;
                      VibegrationsRevealedMarkdown = VibegrationsNativeMarkdown.VibegrationsRevealedMarkdown;
                      const tmp19 = metroImportAll;
                      if (closure_23) {
                        tmp5 = index === memo1.length - 1;
                      }
                      if (tmp5) {
                        tmp5 = !prose.hasWork;
                      }
                      tmp18Result = tmp18(tmp19, obj2);
                    }
                  }
                  const children = [tmp18Result, ];
                  let tmp7Result = null;
                  if (prose.hasWork) {
                    const obj = { steps: steps.filter((segment) => segment.segment === index), tasks: tasks.filter((task) => task.task.segment === index) };
                    steps = memo.steps;
                    index = prose.index;
                    tasks = memo.tasks;
                    const tmp7 = clarification;
                    const tmp8 = closure_37;
                    if (index === index) {
                      let obj6;
                      if (null != memo.turn) {
                        obj6 = { turn: memo.turn };
                        const obj4 = { turn: memo.turn };
                      }
                      const obj5 = { tree: obj, turnActive: prose.index === open, besideAvatar: tmp15 };
                      const merged = Object.assign(obj6);
                      tmp15 = c21 && groupStart && 0 === index;
                      if (tmp15) {
                        tmp15 = null == prose.prose || prose.prose.key === c20;
                        const tmp16 = null == prose.prose || prose.prose.key === c20;
                      }
                      tmp7Result = tmp7(tmp8, obj5);
                    }
                    obj6 = {};
                  }
                  children[1] = tmp7Result;
                  return tmp(Fragment, { children }, prose.key);
                }),
  ,
  ,

        ];
        if (!showsClosingMessage) {
          if (null == proposal) {
            if (null == clarification) {
              if (null == restoreProposal) {
                if (null == ideas) {
                  if (null == tmp27) {
                    if (null == tmp33) {
                      if (null == attachments) {
                        if (null == found) {
                          if (null == items19) {
                            let tmp46Result2;
                            if (null == provisionalTodo) {
                              tmp46Result2 = null;
                            }
                            items17[2] = tmp46Result2;
                            let tmp53Result14 = null;
                            if (null != tmp29) {
                              const obj30 = { style: tmp.spoken, children: clarification(Text2, obj31) };
                              obj31 = { variant: "text-xs/normal", color: "text-muted", children: intl2.string(message(groupStart[18])["1LEnd8"]) };
                              Text2 = tmp38(tmp39[19]).Text;
                              intl2 = tmp38(tmp39[17]).intl;
                              tmp53Result14 = tmp53(tmp54, obj30);
                            }
                            items17[3] = tmp53Result14;
                            items17[4] = tmp17;
                            obj28.children = items17;
                            return c20(tmp56, obj28);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        let tmp59 = null;
        const obj32 = { style: tmp.spoken, children: items18 };
        if (groupStart) {
          tmp59 = null;
          if (!turnLeadsWithStretchResult) {
            tmp59 = tmp46Result;
          }
        }
        items18 = [tmp59, , , , , , , , , , , , ];
        let tmp53Result15 = null;
        if (showsClosingMessage) {
          const obj33 = { source: closingContent };
          tmp53Result15 = tmp53(message(tmp39[25]), obj33);
        }
        items18[1] = tmp53Result15;
        let tmp53Result16 = null;
        if ("side_reply" === message.kind) {
          const obj34 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(message(groupStart[18]).OAjkIT) };
          const Text = tmp38(tmp39[19]).Text;
          intl = tmp38(tmp39[17]).intl;
          tmp53Result16 = tmp53(Text, obj34);
        }
        items18[2] = tmp53Result16;
        let tmp53Result17 = null;
        if (null != attachments) {
          const obj35 = { projectId, attachments };
          tmp53Result17 = tmp53(closure_33, obj35);
        }
        items18[3] = tmp53Result17;
        if (null != items19) {
          const tmp68 = message(groupStart[21]);
          const tmp69 = message(groupStart[51]);
          if (items19 == null) {
            items19 = [];
          }
          const obj36 = { children: clarification(tmp69, obj37) };
          obj37 = { todos: items19, provisional: provisionalTodo, agents: memo3, live: tmp38Result4.checklistLive(message), superseded: checklistSuperseded, expanded: checklistExpanded, onToggleExpanded: callback };
          tmp38Result4 = projectId(groupStart[52]);
          tmp53Result18 = tmp53(tmp68, obj36);
        } else {
          tmp53Result18 = null;
        }
        items18[4] = tmp53Result18;
        let tmp53Result19 = null;
        if (null != proposal) {
          const obj38 = { projectId, proposal, version: planVersion, superseded: planSuperseded, expanded: planExpanded, onToggleExpanded: callback1, onApprove: onApprovePlan };
          tmp53Result19 = tmp53(closure_31, obj38);
        }
        items18[5] = tmp53Result19;
        let tmp53Result20 = null;
        if (null != clarification) {
          const obj39 = {
            clarification,
            onSubmit: onAnswerClarification,
            onDismiss() {
                      return closure_10(clarification.id);
                    }
          };
          tmp53Result20 = tmp53(message(tmp39[53]), obj39);
        }
        items18[6] = tmp53Result20;
        let tmp53Result21 = null;
        if (null != tmp27) {
          const obj41 = { projectId, cardId: message.render_id, request: tmp27, status: secretRequestStatus, awaiting: tmp29 };
          tmp53Result21 = tmp53(message(tmp39[54]), obj41);
        }
        items18[7] = tmp53Result21;
        let tmp53Result22 = null;
        if (null != tmp33) {
          const obj42 = { projectId, request: tmp33 };
          tmp53Result22 = tmp53(message(tmp39[55]), obj42);
        }
        items18[8] = tmp53Result22;
        let tmp53Result23 = null;
        if (null != tmp25) {
          const obj43 = { projectId };
          tmp53Result23 = tmp53(message(tmp39[56]), obj43);
        }
        items18[9] = tmp53Result23;
        let tmp53Result24 = null;
        if (null != ideas) {
          const obj44 = { ideas, onPick: onPickIdea };
          tmp53Result24 = tmp53(closure_32, obj44);
        }
        items18[10] = tmp53Result24;
        let tmp53Result25 = null;
        if (null != restoreProposal) {
          const obj46 = { proposal: restoreProposal, onRestore: fn };
          fn = undefined;
          const tmp83 = closure_39;
          if (isNewest) {
            if (null != onRestoreVersion) {
              fn = () => {
                let obj = VibegrationsVersionHistorySheet;
                return obj.confirmRestoreVersion(() => {
                  const obj = projectId(groupStart[39]);
                  return onRestoreVersion(obj.proposalRestoreEntry(restoreProposal));
                });
              };
            }
          }
          tmp53Result25 = tmp53(tmp83, obj46);
        }
        items18[11] = tmp53Result25;
        let tmp53Result26 = null;
        if (null != found) {
          tmp53Result26 = null;
          if ("message" in found) {
            const obj47 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
            tmp53Result26 = tmp53(tmp38(tmp39[19]).Text, obj47);
          }
        }
        items18[12] = tmp53Result26;
        tmp46Result2 = tmp46(tmp54, obj32);
      }
    }
  }
  tmp16 = callback3;
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let closure_3;
  let closure_5;
  let current;
  let onDismissClarification;
  let onJumpToReplied;
  let onPickIdea;
  let onRestoreVersion;
  let onToggleChecklist;
  let onTogglePlan;
  let ref;
  let ref2;
  let ref3;
  let ref4;
  let ref5;
  let ref6;
  let ref7;
  let stateFromStores;
  let stateFromStores3;
  let tmp10;
  let tmp66;
  let tmp67;
  let tmp8;
  let tmp9;
  let transcriptTopInset;
  let tmp = projectId;
  let tmp2 = projectId;
  let tmp3 = stateFromStores;
  let tmp4 = stateFromStores;
  let obj = projectId(stateFromStores[15]);
  const cResult = obj.c(254);
  projectId = projectId.projectId;
  ({ transcriptTopInset, onRestoreVersion } = projectId);
  current();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp11 = AppStateStore;
    items = [AppStateStore];
    const fn = function s() {
      return "active" === state.getState();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp8 = items;
    tmp10 = items1;
    tmp9 = fn;
  } else {
    [tmp8, tmp9, tmp10] = cResult;
  }
  const tmp2Result = tmp2(tmp4[57]);
  stateFromStores = tmp2Result.useStateFromStores(tmp8, tmp9, tmp10);
  const bottom = onRestoreVersion(tmp4[58])().bottom;
  if (cResult[3] === stateFromStores) {
    let tmp13;
    let tmp14;
    let tmp19;
    let tmp22;
    let tmp21;
    let tmp26;
    let tmp28;
    let tmp27;
    if (cResult[4] === projectId) {
      tmp13 = cResult[5];
      tmp14 = cResult[6];
    }
    let obj3 = stateFromStores3;
    const effect = stateFromStores3.useEffect(tmp13, tmp14);
    let tmp17 = tmp3;
    const tmp2Result15 = tmp2(tmp4[59]);
    const ackVibegrationsProjectWhileViewing = tmp2Result15.useAckVibegrationsProjectWhileViewing(projectId);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [VibegrationsChatStore];
      cResult[7] = items2;
      tmp19 = items2;
    } else {
      tmp19 = cResult[7];
    }
    if (cResult[8] !== projectId) {
      class D {
        constructor() {
          return VibegrationsChatStore.getMessages(projectId);
        }
      }
      const items3 = [projectId];
      cResult[8] = projectId;
      cResult[9] = D;
      cResult[10] = items3;
      tmp22 = items3;
      tmp21 = D;
    } else {
      class D {
        constructor() {
          return VibegrationsChatStore.getMessages(projectId);
        }
      }
      tmp22 = cResult[10];
    }
    const tmp2Result16 = tmp2(tmp4[57]);
    const stateFromStores1 = tmp2Result16.useStateFromStores(tmp19, tmp21, tmp22);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class D {
        constructor() {
          return VibegrationsChatStore.getMessages(projectId);
        }
      }
      const items4 = [VibegrationsProjectStore];
      cResult[11] = items4;
      tmp26 = items4;
    } else {
      class D {
        constructor() {
          return VibegrationsChatStore.getMessages(projectId);
        }
      }
    }
    if (cResult[12] !== projectId) {
      class U {
        constructor() {
          const publishStatus = VibegrationsProjectStore.getPublishStatus(projectId);
          state = undefined;
          if (publishStatus != null) {
            state = publishStatus.state;
          }
          if (state == null) {
            state = null;
          }
          return state;
        }
      }
      const items5 = [projectId];
      cResult[12] = projectId;
      cResult[13] = U;
      cResult[14] = items5;
      tmp28 = items5;
      tmp27 = U;
    } else {
      class U {
        constructor() {
          const publishStatus = VibegrationsProjectStore.getPublishStatus(projectId);
          state = undefined;
          if (publishStatus != null) {
            state = publishStatus.state;
          }
          if (state == null) {
            state = null;
          }
          return state;
        }
      }
      tmp28 = cResult[14];
    }
    const tmp2Result17 = tmp2(tmp4[57]);
    const stateFromStores2 = tmp2Result17.useStateFromStores(tmp26, tmp27, tmp28);
    if (cResult[15] === stateFromStores1) {
      let tmp36;
      let tmp38;
      let tmp37;
      let tmp42;
      let tmp44;
      let tmp43;
      let tmp49;
      let tmp51;
      let tmp50;
      let tmp73;
      let tmp75;
      let tmp74;
      let tmp80;
      let tmp82;
      let tmp81;
      let tmp87;
      let tmp89;
      let tmp88;
      let tmp93;
      let tmp95;
      let tmp94;
      let tmp99;
      let tmp101;
      let tmp100;
      class U {
        constructor() {
          const publishStatus = VibegrationsProjectStore.getPublishStatus(projectId);
          state = undefined;
          if (publishStatus != null) {
            state = publishStatus.state;
          }
          if (state == null) {
            state = null;
          }
          return state;
        }
      }
      _slicedToArray = tmp32;
      const _Symbol3 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            const publishStatus = VibegrationsProjectStore.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        const items6 = [VibegrationsChatStore];
        cResult[18] = items6;
        tmp36 = items6;
      } else {
        class U {
          constructor() {
            const publishStatus = VibegrationsProjectStore.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
      }
      if (cResult[19] !== projectId) {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        const items7 = [projectId];
        cResult[19] = projectId;
        cResult[20] = K;
        cResult[21] = items7;
        tmp38 = items7;
        tmp37 = K;
      } else {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        tmp38 = cResult[21];
      }
      const tmp2Result18 = tmp2(tmp4[57]);
      stateFromStores3 = tmp2Result18.useStateFromStores(tmp36, tmp37, tmp38);
      const _Symbol4 = Symbol;
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        const items8 = [VibegrationsChatStore];
        cResult[22] = items8;
        tmp42 = items8;
      } else {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[23] !== projectId) {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        const items9 = [projectId];
        cResult[23] = projectId;
        cResult[24] = tmp45;
        cResult[25] = items9;
        tmp44 = items9;
        tmp43 = tmp45;
      } else {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        tmp44 = cResult[25];
      }
      const tmp2Result19 = tmp2(tmp4[57]);
      const stateFromStores4 = tmp2Result19.useStateFromStores(tmp42, tmp43, tmp44);
      const _Symbol5 = Symbol;
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        const items10 = [VibegrationsChatStore];
        cResult[26] = items10;
        tmp49 = items10;
      } else {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[27] !== projectId) {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        const items11 = [projectId];
        cResult[27] = projectId;
        cResult[28] = tmp52;
        cResult[29] = items11;
        tmp51 = items11;
        tmp50 = tmp52;
      } else {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        tmp51 = cResult[29];
      }
      const tmp2Result20 = tmp2(tmp4[57]);
      const stateFromStores5 = tmp2Result20.useStateFromStores(tmp49, tmp50, tmp51);
      const _Symbol6 = Symbol;
      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        const items12 = [VibegrationsChatStore];
        cResult[30] = items12;
      } else {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[31] !== projectId) {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        const items13 = [projectId];
        cResult[31] = projectId;
        cResult[32] = tmp59;
        cResult[33] = items13;
      } else {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
      }
      tmp2(tmp4[57]);
      class P {
        constructor() {
          const tmp = stateFromStores;
          if (tmp) {
            map1(projectId);
          }
        }
      }
      [tmp66, tmp67] = obj3.useState(null);
      let tmp68 = null == tmp66;
      _slicedToArray(obj3.useState(null), 2);
      if (!tmp68) {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        tmp68 = tmp69;
      }
      if (!tmp68) {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[34] !== projectId) {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        cResult[34] = projectId;
        cResult[35] = tmp71;
      } else {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
      }
      const _Symbol7 = Symbol;
      if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        const items14 = [VibegrationsConnectionStore];
        cResult[36] = items14;
        tmp73 = items14;
      } else {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[37] !== projectId) {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        const items15 = [projectId];
        cResult[37] = projectId;
        cResult[38] = tmp76;
        cResult[39] = items15;
        tmp75 = items15;
        tmp74 = tmp76;
      } else {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        tmp75 = cResult[39];
      }
      const tmp2Result22 = tmp2(tmp4[57]);
      const stateFromStores6 = tmp2Result22.useStateFromStores(tmp73, tmp74, tmp75);
      const _Symbol8 = Symbol;
      if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        const items16 = [VibegrationsConnectionStore];
        cResult[40] = items16;
        tmp80 = items16;
      } else {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[41] !== projectId) {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        const items17 = [projectId];
        cResult[41] = projectId;
        cResult[42] = tmp83;
        cResult[43] = items17;
        tmp82 = items17;
        tmp81 = tmp83;
      } else {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        tmp82 = cResult[43];
      }
      const tmp2Result23 = tmp2(tmp4[57]);
      const stateFromStores7 = tmp2Result23.useStateFromStores(tmp80, tmp81, tmp82);
      const _Symbol9 = Symbol;
      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
        const items18 = [VibegrationsChatStore];
        cResult[44] = items18;
        tmp87 = items18;
      } else {
        class K {
          constructor() {
            return VibegrationsChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[45] !== projectId) {
        class Ie {
          constructor() {
            return VibegrationsChatStore.hasLoadedHistory(projectId);
          }
        }
        const items19 = [projectId];
        cResult[45] = projectId;
        cResult[46] = Ie;
        cResult[47] = items19;
        tmp89 = items19;
        tmp88 = Ie;
      } else {
        class Ie {
          constructor() {
            return VibegrationsChatStore.hasLoadedHistory(projectId);
          }
        }
        tmp89 = cResult[47];
      }
      const tmp2Result24 = tmp2(tmp4[57]);
      const stateFromStores8 = tmp2Result24.useStateFromStores(tmp87, tmp88, tmp89);
      const _Symbol10 = Symbol;
      if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
        class Ie {
          constructor() {
            return VibegrationsChatStore.hasLoadedHistory(projectId);
          }
        }
        const items20 = [VibegrationsChatStore];
        cResult[48] = items20;
        tmp93 = items20;
      } else {
        class Ie {
          constructor() {
            return VibegrationsChatStore.hasLoadedHistory(projectId);
          }
        }
      }
      if (cResult[49] !== projectId) {
        class Me {
          constructor() {
            let hasLoadedHistoryResult = VibegrationsChatStore.hasLoadedHistory(projectId);
            const tmp = projectId;
            if (hasLoadedHistoryResult) {
              hasLoadedHistoryResult = null != authStore(tmp);
            }
            return hasLoadedHistoryResult;
          }
        }
        const items21 = [projectId];
        cResult[49] = projectId;
        cResult[50] = Me;
        cResult[51] = items21;
        tmp95 = items21;
        tmp94 = Me;
      } else {
        class Me {
          constructor() {
            let hasLoadedHistoryResult = VibegrationsChatStore.hasLoadedHistory(projectId);
            const tmp = projectId;
            if (hasLoadedHistoryResult) {
              hasLoadedHistoryResult = null != authStore(tmp);
            }
            return hasLoadedHistoryResult;
          }
        }
        tmp95 = cResult[51];
      }
      const tmp2Result25 = tmp2(tmp4[57]);
      const stateFromStores9 = tmp2Result25.useStateFromStores(tmp93, tmp94, tmp95);
      const _Symbol11 = Symbol;
      if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
        class Me {
          constructor() {
            let hasLoadedHistoryResult = VibegrationsChatStore.hasLoadedHistory(projectId);
            const tmp = projectId;
            if (hasLoadedHistoryResult) {
              hasLoadedHistoryResult = null != authStore(tmp);
            }
            return hasLoadedHistoryResult;
          }
        }
        const items22 = [VibegrationsChatStore];
        cResult[52] = items22;
        tmp99 = items22;
      } else {
        class Me {
          constructor() {
            let hasLoadedHistoryResult = VibegrationsChatStore.hasLoadedHistory(projectId);
            const tmp = projectId;
            if (hasLoadedHistoryResult) {
              hasLoadedHistoryResult = null != authStore(tmp);
            }
            return hasLoadedHistoryResult;
          }
        }
      }
      if (cResult[53] !== projectId) {
        class Me {
          constructor() {
            let hasLoadedHistoryResult = VibegrationsChatStore.hasLoadedHistory(projectId);
            const tmp = projectId;
            if (hasLoadedHistoryResult) {
              hasLoadedHistoryResult = null != authStore(tmp);
            }
            return hasLoadedHistoryResult;
          }
        }
        const items23 = [projectId];
        cResult[53] = projectId;
        cResult[54] = tmp102;
        cResult[55] = items23;
        tmp101 = items23;
        tmp100 = tmp102;
      } else {
        class Me {
          constructor() {
            let hasLoadedHistoryResult = VibegrationsChatStore.hasLoadedHistory(projectId);
            const tmp = projectId;
            if (hasLoadedHistoryResult) {
              hasLoadedHistoryResult = null != authStore(tmp);
            }
            return hasLoadedHistoryResult;
          }
        }
        tmp101 = cResult[55];
      }
      const tmp2Result26 = tmp2(tmp4[57]);
      const stateFromStores10 = tmp2Result26.useStateFromStores(tmp99, tmp100, tmp101);
      if (cResult[56] === stateFromStores6) {
        class Me {
          constructor() {
            let hasLoadedHistoryResult = VibegrationsChatStore.hasLoadedHistory(projectId);
            const tmp = projectId;
            if (hasLoadedHistoryResult) {
              hasLoadedHistoryResult = null != authStore(tmp);
            }
            return hasLoadedHistoryResult;
          }
        }
      }
      let obj2 = { historyLoaded: stateFromStores8, historyUnavailable: stateFromStores10, connState: stateFromStores6 };
      const tmp2Result27 = tmp2(tmp4[61]);
      cResult[56] = stateFromStores6;
      cResult[57] = stateFromStores8;
      cResult[58] = stateFromStores10;
      cResult[59] = tmp2Result27.chatEmptyState(obj2);
      const chatEmptyStateResult = tmp2Result27.chatEmptyState(obj2);
    }
    const tmp2Result28 = tmp2(tmp4[60]);
    cResult[15] = stateFromStores1;
    cResult[16] = stateFromStores2;
    cResult[17] = tmp2Result28.withLivePublishCard(stateFromStores1, stateFromStores2);
    tmp2Result28.withLivePublishCard(stateFromStores1, stateFromStores2);
    class P {
      constructor() {
        const tmp = stateFromStores;
        if (tmp) {
          map1(projectId);
        }
      }
    }
  }
  class P {
    constructor() {
      const tmp = stateFromStores;
      if (tmp) {
        map1(projectId);
      }
    }
  }
  const items24 = [stateFromStores, projectId];
  cResult[3] = stateFromStores;
  cResult[4] = projectId;
  cResult[5] = P;
  cResult[6] = items24;
  tmp14 = items24;
  tmp13 = P;
}) : ((projectId) => {
  let FlashList;
  let Text;
  let _undefined;
  let _undefined2;
  let _undefined22;
  let _undefined3;
  let _undefined4;
  let _undefined5;
  let c15;
  let c16;
  let c19;
  let c20;
  let c28;
  let c29;
  let c35;
  let c36;
  let c47;
  let closure_22;
  let items55;
  let items56;
  let items57;
  let items58;
  let items59;
  let obj13;
  let obj16;
  let obj19;
  let obj20;
  let obj22;
  let onDismissClarification;
  let onPickIdea;
  let tmp106;
  let tmp17;
  let tmp18;
  let tmp2Result29;
  let tmp39;
  let tmp40;
  let tmp55;
  let tmp67;
  let tmp92Result;
  let tmp92Result4;
  let tmp95;
  const f125780 = () => {
    map = new Map();
    return map;
  };
  const f125783 = () => {
    map = new Map();
    return map;
  };
  projectId = projectId.projectId;
  let num = projectId.transcriptTopInset;
  if (num === undefined) {
    num = 0;
  }
  const onRestoreVersion = projectId.onRestoreVersion;
  let stateFromStores;
  let stateFromStores2;
  let stateFromStores9;
  let stateFromStores10;
  let render_id;
  let render_id1;
  set = undefined;
  let stateFromStores12;
  let memo1;
  c15 = undefined;
  c16 = undefined;
  let onToggleChecklist;
  let closure_18;
  c19 = undefined;
  c20 = undefined;
  let onTogglePlan;
  autoscrollToBottomThreshold = undefined;
  let closure_23;
  fadingEdgeLength = undefined;
  let vibegrationsReminder;
  let closure_26;
  let closure_27;
  c28 = undefined;
  c29 = undefined;
  let canSend;
  let memo2;
  let joined;
  let memo4;
  let memo5;
  c35 = undefined;
  c36 = undefined;
  let bound;
  let ref2;
  let ref3;
  let ref4;
  let ref5;
  let ref;
  let callback2;
  let callback3;
  c47 = undefined;
  let ref6;
  let ref7;
  let callback5;
  let closure_51;
  let onJumpToReplied;
  let tmp = c29();
  let tmp2 = projectId;
  let tmp3 = stateFromStores;
  let obj = projectId(stateFromStores[57]);
  items = [stateFromStores10];
  stateFromStores = obj.useStateFromStores(items, () => "active" === stateFromStores10.getState(), []);
  let tmp5 = onRestoreVersion;
  let obj2 = stateFromStores2;
  const items1 = [stateFromStores, projectId];
  const bottom = onRestoreVersion(stateFromStores[58])().bottom;
  const effect = stateFromStores2.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      map1(projectId);
    }
  }, items1);
  let obj3 = projectId(stateFromStores[59]);
  const ackVibegrationsProjectWhileViewing = obj3.useAckVibegrationsProjectWhileViewing(projectId);
  const obj4 = projectId(stateFromStores[57]);
  let tmp8 = set;
  const items2 = [set];
  const items3 = [projectId];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => VibegrationsChatStore.getMessages(projectId), items3);
  const items4 = [closure_18];
  const items5 = [projectId];
  const obj5 = projectId(stateFromStores[57]);
  stateFromStores2 = obj5.useStateFromStores(items4, () => {
    const publishStatus = VibegrationsProjectStore.getPublishStatus(projectId);
    let state;
    if (publishStatus != null) {
      state = publishStatus.state;
    }
    if (state == null) {
      state = null;
    }
    return state;
  }, items5);
  const items6 = [stateFromStores1, stateFromStores2];
  const memo = stateFromStores2.useMemo(() => {
    const obj = vibegrationsPublishCard;
    return obj.withLivePublishCard(stateFromStores1, stateFromStores2);
  }, items6);
  const items7 = [set];
  const items8 = [projectId];
  const obj6 = projectId(stateFromStores[57]);
  const stateFromStores3 = obj6.useStateFromStores(items7, () => VibegrationsChatStore.isThinking(projectId), items8);
  const items9 = [set];
  const items10 = [projectId];
  const obj7 = projectId(stateFromStores[57]);
  const stateFromStores4 = obj7.useStateFromStores(items9, () => VibegrationsChatStore.isCompacting(projectId), items10);
  const items11 = [set];
  const items12 = [projectId];
  const obj8 = projectId(stateFromStores[57]);
  const stateFromStores5 = obj8.useStateFromStores(items11, () => VibegrationsChatStore.getThinkingActivity(projectId), items12);
  const items13 = [set];
  const items14 = [projectId];
  const obj9 = projectId(stateFromStores[57]);
  const stateFromStores6 = obj9.useStateFromStores(items13, () => VibegrationsChatStore.getProjectUsage(projectId), items14);
  let tmp15 = stateFromStores1;
  [tmp17, tmp18] = stateFromStores1(stateFromStores2.useState(null), 2);
  let c7 = tmp18;
  let tmp19 = null == tmp17;
  const tmp16 = stateFromStores1(stateFromStores2.useState(null), 2);
  if (!tmp19) {
    tmp19 = stateFromStores3 && tmp17 === projectId;
    const tmp20 = stateFromStores3 && tmp17 === projectId;
  }
  if (!tmp19) {
    tmp18(null);
  }
  const items15 = [projectId];
  let tmp23 = stateFromStores3;
  const callback = obj2.useCallback(() => _undefined((arg0) => {
    let tmp = null;
    if (arg0 !== projectId) {
      tmp = projectId;
    }
    return tmp;
  }), items15);
  if (stateFromStores3) {
    tmp23 = tmp17 === projectId;
  }
  const items16 = [onToggleChecklist];
  const items17 = [projectId];
  const tmp2Result = tmp2(tmp3[57]);
  const stateFromStores7 = tmp2Result.useStateFromStores(items16, () => VibegrationsConnectionStore.getConnState(projectId), items17);
  const items18 = [onToggleChecklist];
  const items19 = [projectId];
  const tmp2Result17 = tmp2(tmp3[57]);
  const stateFromStores8 = tmp2Result17.useStateFromStores(items18, () => VibegrationsConnectionStore.isChatStopped(projectId), items19);
  const items20 = [tmp8];
  const items21 = [projectId];
  const tmp2Result18 = tmp2(tmp3[57]);
  stateFromStores9 = tmp2Result18.useStateFromStores(items20, () => VibegrationsChatStore.hasLoadedHistory(projectId), items21);
  const items22 = [tmp8];
  const items23 = [projectId];
  const tmp2Result19 = tmp2(tmp3[57]);
  stateFromStores10 = tmp2Result19.useStateFromStores(items22, () => {
    let hasLoadedHistoryResult = VibegrationsChatStore.hasLoadedHistory(projectId);
    const tmp = projectId;
    if (hasLoadedHistoryResult) {
      hasLoadedHistoryResult = null != authStore(tmp);
    }
    return hasLoadedHistoryResult;
  }, items23);
  const items24 = [tmp8];
  const items25 = [projectId];
  const tmp2Result20 = tmp2(tmp3[57]);
  const stateFromStores11 = tmp2Result20.useStateFromStores(items24, () => VibegrationsChatStore.isHistoryUnavailable(projectId), items25);
  const tmp2Result21 = tmp2(tmp3[61]);
  const chatEmptyStateResult = tmp2Result21.chatEmptyState({ historyLoaded: stateFromStores9, historyUnavailable: stateFromStores11, connState: stateFromStores7 });
  render_id = null;
  const tmp24 = onToggleChecklist;
  if (memo.length > 0) {
    render_id = memo[memo.length - 1].render_id;
  }
  const findLastResult = memo.findLast((role) => {
    const tmp = "assistant" === role.role && render_id1(role);
    return tmp;
  });
  render_id1 = undefined;
  if (findLastResult != null) {
    render_id1 = findLastResult.render_id;
  }
  if (render_id1 == null) {
    render_id1 = null;
  }
  const items26 = [memo];
  set = obj2.useMemo(() => {
    const obj = VibegrationsTodoState;
    return obj.supersededChecklists(memo);
  }, items26);
  const items27 = [tmp24];
  const items28 = [projectId];
  const tmp2Result22 = tmp2(tmp3[57]);
  stateFromStores12 = tmp2Result22.useStateFromStores(items27, () => {
    const settings = VibegrationsConnectionStore.getSettings(projectId);
    let secrets;
    if (settings != null) {
      secrets = settings.secrets;
    }
    return secrets;
  }, items28);
  const items29 = [memo, stateFromStores12];
  memo1 = obj2.useMemo(() => {
    const obj = VibegrationsSecretRequestState;
    return obj.secretRequestStatuses(memo, stateFromStores12);
  }, items29);
  [c15, c16] = tmp15(obj2.useState(f125780), 2);
  tmp15(obj2.useState(f125780), 2);
  onToggleChecklist = obj2.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined22((get) => {
      const obj = projectId(stateFromStores[52]);
      return obj.toggleChecklist(get, closure_0, closure_1);
    });
  }, []);
  const items30 = [memo];
  closure_18 = obj2.useMemo(() => {
    const obj = vibegrationsPendingPlan;
    return obj.planVersions(memo);
  }, items30);
  [c19, c20] = tmp15(obj2.useState(f125783), 2);
  tmp15(obj2.useState(f125783), 2);
  onTogglePlan = obj2.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined3((get) => {
      const obj = projectId(stateFromStores[63]);
      return obj.togglePlanCard(get, closure_0, closure_1);
    });
  }, []);
  const items31 = [memo];
  autoscrollToBottomThreshold = obj2.useMemo(() => {
    let obj = VibegrationsChatGrouping;
    return obj.groupChatRows(memo.map((key) => {
      let str;
      let tmp3;
      let user_id;
      const obj = { key: key.render_id, actor: str, authorId: user_id, boundary: render_id, separate: tmp3 };
      str = "assistant";
      if ("user" === key.role) {
        str = "user";
      }
      user_id = undefined;
      if ("user" === key.role) {
        user_id = key.user_id;
      }
      render_id = undefined;
      if ("user" !== key.role) {
        render_id = key.render_id;
      }
      tmp3 = "assistant" === key.role;
      if (tmp3) {
        tmp3 = null != key.proposal || null != key.clarification || "side_reply" === key.kind || null != key.in_reply_to;
        const tmp5 = null != key.proposal || null != key.clarification || "side_reply" === key.kind || null != key.in_reply_to;
      }
      return obj;
    }));
  }, items31);
  const items32 = [projectId];
  closure_23 = obj2.useCallback(() => {
    const sendVibegrationsCardReply = vibegrationsAttachmentDrafts.sendVibegrationsCardReply;
    vibegrationsAttachmentDrafts;
    const intl = intl13.intl;
    const result = sendVibegrationsCardReply(projectId, intl.string(_modDef3723.ga8too));
  }, items32);
  const items33 = [projectId];
  fadingEdgeLength = obj2.useCallback((implementation_prompt) => {
    const obj = vibegrationsAttachmentDrafts;
    const result = obj.sendVibegrationsCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items33);
  [tmp39, tmp40] = tmp15(tmp5(tmp3[66])(projectId), 2);
  tmp15(tmp5(tmp3[66])(projectId), 2);
  const tmp2Result23 = tmp2(tmp3[67]);
  vibegrationsReminder = tmp2Result23.useVibegrationsReminder(projectId, memo, tmp39);
  const items34 = [projectId];
  closure_26 = obj2.useCallback(() => {
    const intl = intl13.intl;
    authStore3(projectId, intl.string(_modDef3723["3sTTBu"]));
  }, items34);
  const items35 = [projectId];
  closure_27 = obj2.useCallback((implementation_prompt, clarificationAnswers) => {
    const obj = vibegrationsAttachmentDrafts;
    const obj2 = { clarificationAnswers };
    const result = obj.sendVibegrationsCardReply(projectId, implementation_prompt, obj2);
  }, items35);
  [c28, c29] = tmp15(obj2.useState(null), 2);
  let tmp44 = tmp43;
  tmp15(obj2.useState(null), 2);
  if (!tmp44) {
    let str = "connecting";
    tmp44 = "connecting" === stateFromStores7;
  }
  if (tmp44) {
    tmp44 = !stateFromStores8;
  }
  canSend = tmp44;
  const items36 = [memo];
  memo2 = obj2.useMemo(() => {
    const obj = vibegrationsPendingPlan;
    return obj.pendingPlanRenderId(memo);
  }, items36);
  const arr = Array.from(memo1, (arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return "" + tmp + ":" + tmp2;
  });
  joined = arr.join(",");
  const items37 = [vibegrationsReminder, tmp44, memo2, joined];
  const items38 = [memo];
  const memo3 = obj2.useMemo(() => ({ reminder: vibegrationsReminder, canSend, pendingPlanId: memo2, secretStatusesKey: joined }), items37);
  memo4 = obj2.useMemo(() => {
    let diff = memo.length - 1;
    if (0 <= diff) {
      while (true) {
        let tmp3 = memo[diff];
        if ("assistant" === tmp3.role) {
          if (!unpackModuleId(tmp3)) {
            break;
          }
        }
        diff = diff - 1;
      }
      return diff;
    }
    return null;
  }, items38);
  const items39 = [memo, memo4];
  memo5 = obj2.useMemo(() => {
    let tmp2;
    if (null != memo4) {
      tmp2 = memo[tmp];
    }
    let timelineTree = null;
    if (null != tmp2) {
      const obj = VibegrationsTimelineTree;
      timelineTree = obj.buildTimelineTree(tmp2.steps, { turnActive: true });
    }
    return timelineTree;
  }, items39);
  let tmp50 = null != memo5;
  if (tmp50) {
    tmp50 = memo5.steps.length > 0 || memo5.tasks.length > 0;
  }
  const items40 = [memo5];
  let memo6 = obj2.useMemo(() => {
    let currentStepResult;
    if (null != memo5) {
      const obj = VibegrationsTimelineTree;
      currentStepResult = obj.currentStep(tmp.steps);
    }
    let describeNodeResult = null;
    if (null != currentStepResult) {
      const obj2 = VibegrationsTimelineTree;
      describeNodeResult = obj2.describeNode(currentStepResult);
    }
    return describeNodeResult;
  }, items40);
  [obj19, c35] = tmp15(obj2.useState(null), 2);
  tmp15(obj2.useState(null), 2);
  [tmp55, c36] = tmp15(obj2.useState(64), 2);
  tmp15(obj2.useState(64), 2);
  const callback1 = obj2.useCallback((nativeEvent) => {
    let closure_0 = Math.round(nativeEvent.nativeEvent.layout.height);
    let tmp = _undefined5((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  bound = tmp55;
  const tmp2Result24 = tmp2(tmp3[33]);
  if (!tmp2Result24.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp55, fadingEdgeLength);
  }
  obj2.useRef(null);
  obj2.useRef(null);
  ref2 = obj2.useRef(false);
  ref3 = obj2.useRef(true);
  ref4 = obj2.useRef(0);
  ref5 = obj2.useRef(0);
  ref = obj2.useRef(false);
  callback2 = obj2.useCallback(() => {
    const animationFrame = requestAnimationFrame(() => {
      if (ref2.current) {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd({ animated: false });
        }
      }
    });
  }, []);
  callback3 = obj2.useCallback(() => {
    const timestamp = Date.now();
    ref4.current = timestamp + c23;
    ref5.current = timestamp + 2000;
  }, []);
  const items41 = [projectId, callback3];
  const effect1 = obj2.useEffect(() => {
    ref3.current = true;
    callback3();
  }, items41);
  const items42 = [stateFromStores9, callback3];
  const effect2 = obj2.useEffect(() => {
    const tmp = stateFromStores9;
    if (tmp) {
      callback3();
    }
  }, items42);
  const items43 = [stateFromStores10, memo.length, callback2, callback3];
  const effect3 = obj2.useEffect(() => {
    if (stateFromStores10) {
      ref.current = true;
      callback3();
    } else if (ref.current) {
      ref.current = false;
      callback3();
      callback2();
    }
  }, items43);
  const callback4 = obj2.useCallback(() => {
    ref3.current = false;
  }, []);
  [tmp67, c47] = tmp15(obj2.useState(false), 2);
  tmp15(obj2.useState(false), 2);
  ref6 = obj2.useRef(null);
  ref7 = obj2.useRef(0);
  callback5 = obj2.useCallback(() => {
    const current = ref6.current;
    const current2 = ref.current;
    if (null != current) {
      const current3 = ref.current;
      let layout;
      if (current3 != null) {
        layout = current3.getLayout(current);
      }
    }
    let tmp5 = null != current2;
    const tmp4 = c47;
    if (tmp5) {
      tmp5 = null != tmp;
    }
    if (tmp5) {
      tmp5 = tmp.y >= current2.offsetY + current2.viewportHeight - ref7.current;
    }
    tmp4(tmp5);
  }, []);
  const items44 = [callback5];
  const items45 = [callback2, callback5];
  const callback6 = obj2.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    ref.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
    callback5();
  }, items44);
  const callback7 = obj2.useCallback((arg0, contentHeight) => {
    const timestamp = Date.now();
    const current = ref3.current && timestamp < ref4.current;
    if (current) {
      const _Math = Math;
      ref4.current = Math.min(timestamp + c23, ref5.current);
      callback2();
    }
    const current2 = ref.current;
    if (null != current2) {
      let obj;
      if (current2.contentHeight - current2.offsetY - current2.viewportHeight <= c22 * current2.viewportHeight) {
        const obj2 = { contentHeight, offsetY: Math.max(0, contentHeight - current2.viewportHeight) };
        const merged = Object.assign(current2);
        const _Math2 = Math;
        obj = obj2;
      } else {
        obj = { contentHeight };
        const merged1 = Object.assign(current2);
      }
      tmp8.current = obj;
      if (ref2.current) {
        tmp15.current = false;
        const current3 = ref.current;
        if (current3 != null) {
          current3.scrollToEnd({ animated: true });
        }
      }
      callback5();
    }
  }, items45);
  const items46 = [callback5];
  const memo7 = obj2.useMemo(() => {
    const obj = { itemVisiblePercentThreshold: projectId(stateFromStores[68]).MIN_VISIBLE_PERCENT };
    return obj;
  }, []);
  const callback8 = obj2.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    set = new Set();
    const iter = viewableItems[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.key) {
        let addResult = set.add(tmp2.key);
      }
      continue;
    }
    _undefined4(set);
    callback5();
  }, items46);
  if (stateFromStores4) {
    const intl2 = tmp2(tmp3[17]).intl;
    memo6 = intl2.string(tmp5(tmp3[18])["0vH/5G"]);
  } else if (memo6 == null) {
    let intl = tmp2(tmp3[17]).intl;
    memo6 = intl.string(tmp5(tmp3[18]).QDGuNS);
  }
  const items47 = [memo, memo4];
  let tmp74;
  const memo8 = obj2.useMemo(() => {
    if (null == memo4) {
      return null;
    } else if (null == memo[tmp]) {
      return null;
    } else {
      const obj = VibegrationsTimelineTree;
      let latestTodosResult = obj.latestTodos(tmp3.steps);
      if (null == latestTodosResult) {
        let todos = null;
        if (null != memo[tmp].todos) {
          todos = null;
          if (memo[tmp].todos.length > 0) {
            todos = tmp3.todos;
          }
        }
        latestTodosResult = todos;
      }
      return latestTodosResult;
    }
  }, items47);
  if (null != memo4) {
    tmp74 = memo[memo4];
  }
  let checklistLiveResult = null == tmp74;
  if (!checklistLiveResult) {
    const tmp2Result25 = tmp2(tmp3[52]);
    checklistLiveResult = tmp2Result25.checklistLive(tmp74);
  }
  let result;
  if (null != tmp74) {
    const tmp2Result26 = tmp2(tmp3[69]);
    result = tmp2Result26.vibegrationsTurnStartedAt(tmp74);
  }
  const items48 = [memo5];
  let tmp78;
  const memo9 = obj2.useMemo(() => {
    let runningTodoAgentsResult;
    if (null != memo5) {
      const obj = VibegrationsTodoAgents;
      runningTodoAgentsResult = obj.runningTodoAgents(tmp.tasks);
    } else {
      runningTodoAgentsResult = [];
    }
    return runningTodoAgentsResult;
  }, items48);
  if (null != memo4) {
    let render_id2;
    if (memo[memo4] != null) {
      render_id2 = tmp79.render_id;
    }
    tmp78 = render_id2;
  }
  let tmp81 = null != tmp78;
  if (tmp81) {
    tmp81 = null != obj19 && !obj19.has(tmp78) || tmp67;
    null != obj19 && !obj19.has(tmp78) || tmp67;
  }
  let tmp83 = null;
  if (stateFromStores3) {
    tmp83 = null;
    if (tmp50) {
      tmp83 = null;
      if (tmp81) {
        tmp83 = memo6;
      }
    }
  }
  const items49 = [bound, memo4, callback5];
  const effect4 = obj2.useEffect(() => {
    ref6.current = memo4;
    ref7.current = bound;
    let closure_0 = requestAnimationFrame(callback5);
    return () => cancelAnimationFrame(closure_0);
  }, items49);
  const items50 = [memo];
  closure_51 = obj2.useMemo(() => {
    map = new Map();
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if ("assistant" === nextResult.role) {
        if (null != tmp3.in_reply_to) {
          let obj2 = vibegrations_VibegrationsRepliedMessage;
          let repliedMessageResult = obj2.repliedMessage(memo, tmp3.in_reply_to);
          if (null != repliedMessageResult) {
            let result = map.set(tmp3.render_id, tmp10);
          }
        }
      }
      continue;
    }
    return map;
  }, items50);
  const items51 = [memo];
  onJumpToReplied = obj2.useCallback((arg0) => {
    let closure_0 = arg0;
    const findIndexResult = memo.findIndex((id) => id.id === closure_0);
    if (findIndexResult >= 0) {
      ref3.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: findIndexResult, animated: true, viewPosition: 0.5 };
        current.scrollToIndex(obj);
      }
    }
  }, items51);
  const items52 = [bound, memo4];
  const items53 = [projectId];
  const callback9 = obj2.useCallback(() => {
    if (null != memo4) {
      ref3.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items52);
  const items54 = [projectId];
  const callback10 = obj2.useCallback((arg0, arg1) => {
    ref2.current = true;
    authStore3(projectId, arg0, arg1);
  }, items53);
  let connectionLabelResult = null;
  const callback11 = obj2.useCallback(() => {
    _undefined2(projectId);
  }, items54);
  if ("open" !== stateFromStores7) {
    const tmp2Result27 = tmp2(tmp3[71]);
    connectionLabelResult = tmp2Result27.connectionLabel(stateFromStores7);
  }
  const obj10 = { style: tmp.container, children: items55 };
  const tmp2Result28 = tmp2(tmp3[72]);
  const vibegrationsControlActive = tmp2Result28.useVibegrationsControlActive(projectId);
  items55 = [c19(tmp5(tmp3[73]), { thinking: stateFromStores3, bleedBottom: bottom }), , ];
  const obj11 = { style: tmp.transcriptArea, children: items58 };
  const obj12 = { clearance: tmp55, children: c19(FlashList, obj13) };
  obj13 = {
    ref,
    fadingEdgeLength,
    removeClippedSubviews: tmp2Result29.isIOS() && undefined,
    viewabilityConfig: memo7,
    onViewableItemsChanged: callback8,
    onScroll: callback6,
    onScrollBeginDrag: callback4,
    onContentSizeChange: callback7,
    scrollEventThrottle: 16,
    contentInset: tmp95,
    ListHeaderComponent: tmp92Result,
    style: items56,
    contentContainerStyle: items57,
    data: memo,
    extraData: memo3,
    maintainVisibleContentPosition: obj20,
    keyExtractor(render_id) {
      return render_id.render_id;
    },
    ListEmptyComponent: tmp92Result4,
    renderItem(arg0) {
      let flag;
      let index;
      let item;
      let obj2;
      let obj3;
      let planCardExpanded;
      let str;
      let superseded;
      let superseded1;
      let tmp11;
      let tmp15;
      let tmp17;
      let tmp18;
      let tmp19;
      let tmp21;
      let tmp3;
      let version;
      ({ item, index } = arg0);
      const obj = { projectId, message: item, groupStart: flag, first: 0 === index, isNewest: item.render_id === render_id, hostsReminder: item.render_id === render_id1, reminder: tmp3, checklistSuperseded: set.has(item.render_id), secretRequestStatus: str, checklistExpanded: obj3.checklistExpanded(c15, item.render_id, obj2.has(item.render_id)), onToggleChecklist, planVersion: version, planSuperseded: true === superseded, planExpanded: planCardExpanded(tmp11, render_id, true === superseded1), onTogglePlan, replied: closure_51.get(item.render_id), onJumpToReplied, onApprovePlan: tmp15, onPickIdea, onAskForIdeas: tmp17, onAnswerClarification: tmp18, clarificationDismissed: tmp19, onDismissClarification, onRestoreVersion: tmp21 };
      flag = closure_22[index];
      const tmp = closure_19;
      const tmp2 = closure_40;
      if (flag == null) {
        flag = true;
      }
      tmp3 = null;
      if (item.render_id === render_id1) {
        tmp3 = vibegrationsReminder;
      }
      str = memo1.get(item.render_id);
      obj2 = set;
      if (str == null) {
        str = "open";
      }
      obj3 = VibegrationsTodoState;
      const value = closure_18.get(item.render_id);
      version = undefined;
      if (value != null) {
        version = value.version;
      }
      const value3 = obj4.get(item.render_id);
      superseded = undefined;
      if (value3 != null) {
        superseded = value3.superseded;
      }
      planCardExpanded = tmp4(16713).planCardExpanded;
      render_id = item.render_id;
      vibegrationsPendingPlan;
      const value4 = obj4.get(item.render_id);
      superseded1 = undefined;
      tmp11 = c19;
      if (value4 != null) {
        superseded1 = value4.superseded;
      }
      tmp15 = undefined;
      if (canSend) {
        if (item.render_id === memo2) {
          tmp15 = closure_23;
        }
      }
      tmp17 = undefined;
      if (canSend) {
        tmp17 = closure_26;
      }
      tmp18 = undefined;
      if (canSend) {
        tmp18 = closure_27;
      }
      tmp21 = undefined;
      tmp19 = null != item.clarification && item.clarification.id === c28;
      if (!stateFromStores3) {
        tmp21 = onRestoreVersion;
      }
      return tmp(tmp2, obj);
    }
  };
  FlashList = tmp2(tmp3[74]).FlashList;
  tmp2Result29 = tmp2(tmp3[33]);
  tmp2Result29.isIOS() && undefined;
  tmp95 = undefined;
  const tmp2Result30 = tmp2(tmp3[33]);
  const tmp93 = ref;
  if (tmp2Result30.isIOS()) {
    tmp95 = { top: num };
    const obj14 = { top: num };
  }
  tmp92Result = null;
  const tmp2Result31 = tmp2(tmp3[33]);
  if (!tmp2Result31.isIOS()) {
    tmp92Result = null;
    if (num > 0) {
      const obj15 = { style: obj16 };
      obj16 = { height: num };
      tmp92Result = tmp92(tmp91, obj15);
    }
  }
  items56 = [tmp.transcript, ];
  const tmp2Result32 = tmp2(tmp3[33]);
  let tmp98 = !tmp2Result32.isIOS();
  tmp2Result32.isIOS();
  if (tmp98) {
    tmp98 = { marginBottom: tmp55 - bound };
    const obj17 = { marginBottom: tmp55 - bound };
  }
  items56[1] = tmp98;
  items57 = [tmp.transcriptContent, { paddingBottom: bound + tmp5(tmp3[9]).space.PX_8 }];
  let tmp99 = "loading" === chatEmptyStateResult;
  tmp92Result4 = null;
  obj20 = { startRenderingFromBottom: true, autoscrollToBottomThreshold };
  ({ paddingBottom: bound + tmp5(tmp3[9]).space.PX_8 });
  if (!tmp99) {
    let jTuX7C;
    const obj21 = { style: tmp.placeholder, children: c19(Text, obj22) };
    Text = tmp2(tmp3[19]).Text;
    const intl3 = tmp2(tmp3[17]).intl;
    const string = intl3.string;
    if ("unavailable" === chatEmptyStateResult) {
      jTuX7C = tmp5(tmp3[18]).s4oxNv;
    } else {
      jTuX7C = tmp5(tmp3[18]).jTuX7C;
    }
    obj22 = { variant: "text-sm/normal", color: "text-muted", children: string(jTuX7C) };
    tmp92Result4 = tmp92(tmp91, obj21);
  }
  items58 = [c19(tmp93, obj12), , ];
  let tmp92Result5 = null;
  if (tmp23) {
    const obj23 = { projectId };
    tmp92Result5 = tmp92(tmp5(tmp3[75]), obj23);
  }
  items58[1] = tmp92Result5;
  let tmp92Result6 = null;
  if (null != tmp83) {
    const obj24 = { line: tmp83, onJumpToActivity: callback9, bottom: tmp5(tmp3[9]).space.PX_12 + tmp55, todos: memo8, todosLive: checklistLiveResult, agents: memo9 };
    const tmp5Result = tmp5(tmp3[76]);
    tmp92Result6 = tmp92(tmp5Result, obj24);
  }
  items58[2] = tmp92Result6;
  items55[1] = c20(stateFromStores9, obj11);
  const obj25 = { style: tmp.bottomStack, onLayout: callback1, children: items59 };
  const obj26 = { projectId, thinking: stateFromStores3, turnStartedAt: result, compacting: stateFromStores4, recalling: tmp99, activity: stateFromStores5, projectUsage: stateFromStores6, connLabel: connectionLabelResult, controlling: vibegrationsControlActive, connFailed: "failed" === stateFromStores7, thinkingOpen: tmp23, onToggleThinking: callback };
  const tmp5Result3 = tmp5(tmp3[77]);
  if (tmp99) {
    tmp99 = 0 === memo.length;
  }
  items59 = [c19(tmp5Result3, obj26), ];
  const obj27 = { projectId, canSend: tmp44, running: stateFromStores3, stopped: stateFromStores8, onSend: callback10, onInterrupt: tmp106, onDraftHasTextChange: tmp40 };
  tmp106 = undefined;
  const tmp5Result4 = tmp5(tmp3[78]);
  if (stateFromStores3) {
    tmp106 = callback11;
  }
  items59[1] = c19(tmp5Result4, obj27);
  items55[2] = c20(stateFromStores9, obj25);
  return c20(stateFromStores9, obj10);
});
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeChat.tsx");

export default tmp9;
