// Module ID: 16336
// Function ID: 16337
// Name: VibegrationsNativeChat
// Dependencies: [32, 19, 17, 1986, 12645, 12644, 21, 588, 16337, 684, 4837, 16339, 558, 576, 16345, 1127, 3718, 4833, 5280, 4824, 16346, 5282, 5918, 4528, 16351, 16352, 16353, 16354, 1370, 5292, 5975, 16378, 16240, 16343, 16340, 16344, 15549, 16379, 16380, 16381, 16382, 16383, 16385, 16388, 504, 1619, 16389, 16390, 16391, 16392, 16393, 16394, 16254, 16395, 12444, 16396, 8176, 16399, 16400, 16401, 16405, 2]

// Module 16336 (VibegrationsNativeChat)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import _modDef684 from "module_684" /* 684 */;
import intl7 from "intl" /* 1127 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import _modDef3718 from "module_3718" /* 3718 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4824 */;
import Text_Text from "Text/Text" /* 4833 */;
import Stack_Stack from "Stack/Stack" /* 5280 */;
import components_Button_Button from "components/Button/Button" /* 5282 */;
import LinearGradientDefault from "LinearGradient" /* 5292 */;
import Card_Card from "Card/Card" /* 5918 */;
import _modDef5975 from "module_5975" /* 5975 */;
import VibegrationsChatStore2 from "VibegrationsChatStore" /* 12645 */;
import VibegrationsDesignFeedback from "VibegrationsDesignFeedback" /* 16240 */;
import VibegrationsNativeStatusLine from "VibegrationsNativeStatusLine" /* 16337 */;
import VibegrationsRepliedMessage from "VibegrationsRepliedMessage" /* 16339 */;
import VibegrationsMessageActionSheet from "VibegrationsMessageActionSheet" /* 16343 */;
import useVibegrationsPlanDesign from "useVibegrationsPlanDesign" /* 16345 */;
import VibegrationsNativeMarkdown from "VibegrationsNativeMarkdown" /* 16346 */;
import VibegrationsTimelineTree from "VibegrationsTimelineTree" /* 16351 */;
import VibegrationsDuration from "VibegrationsDuration" /* 16352 */;
import VibegrationsSubagentMark from "VibegrationsSubagentMark" /* 16354 */;
import VibegrationsTodoAgents from "VibegrationsTodoAgents" /* 16378 */;
import VibegrationsTodoState from "VibegrationsTodoState" /* 16382 */;
import VibegrationsChatGrouping from "VibegrationsChatGrouping" /* 16390 */;
import vibegrationsAttachmentDrafts from "vibegrationsAttachmentDrafts" /* 16391 */;
import vibegrations_VibegrationsRepliedMessage from "vibegrations/VibegrationsRepliedMessage" /* 16394 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import VibegrationsConnectionStore_mod from "VibegrationsConnectionStore" /* 12644 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const VibegrationsNativeStatusLineDefault = VibegrationsNativeStatusLine;
const VibegrationsChatStore = VibegrationsChatStore2;
let dependencyMap, fadingEdgeLength, map, nativeEvent, onAsk, set, viewableItems;

let closure_12;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_19;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let rect1;
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: hasOwnProperty, Image: metroRequire, Pressable: metroImportDefault, View: metroImportAll } = react_native);
const turnSettled = VibegrationsChatStore2.turnSettled;
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
({ ensureConnection: closure_12, getAttachmentUrl: map1, interruptTurn: closure_14, sendUserMessage: closure_15 } = VibegrationsConnectionStore);
VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
let Fragment = Fragment_mod;
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
let diff = VibegrationsNativeStatusLine.MESSAGE_CONTENT_INSET - VibegrationsNativeStatusLine.MESSAGE_EDGE_INSET;
let c20 = 0.2;
let c21 = 52;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let items = [BLACK, , ];
let obj = _modDef684(BLACK);
const alphaResult = obj.alpha(0.2);
items[1] = alphaResult.css();
items[2] = "transparent";
const locations = [0, 0.4, 1];
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let createStyles = createStyles_mod;
let obj2 = { container: { flex: 1 }, transcript: { flex: 1 }, transcriptDimmed: { opacity: 0.4 }, maskSolid: { flex: 1, backgroundColor: BLACK }, maskFade: { height: 52 }, transcriptArea: { flex: 1, position: "relative" }, transcriptContent: obj3, bottomStack: { position: "absolute", left: 0, right: 0, bottom: 0 }, row: obj4, rowGroupStart: { marginTop: PX_12 }, avatar: rect, spoken: { position: "relative", gap: PX_8 }, avatarSpoken: rect1, avatarSpokenReplying: obj5, header: obj6, surface: obj7, designImage: obj8, designPlaceholder: obj9, ideaCards: { gap: PX_8 }, activityBox: { marginLeft: -diff }, activityDetail: { paddingLeft: diff }, stepDetail: obj10, attachmentPills: obj11, attachmentPill: obj12, ideasOffer: { flexDirection: "row", alignItems: "center", gap: PX_8 }, ideasOfferHint: { flexShrink: 1 }, placeholder: obj13 };
obj3 = { paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj4 = { position: "relative", paddingLeft: VibegrationsNativeStatusLine.MESSAGE_CONTENT_INSET, paddingRight: VibegrationsNativeStatusLine.MESSAGE_EDGE_INSET, paddingVertical: 2, gap: PX_8 };
rect = { position: "absolute", left: VibegrationsNativeStatusLine.MESSAGE_EDGE_INSET, top: 2 };
rect1 = { left: VibegrationsNativeStatusLine.MESSAGE_EDGE_INSET - VibegrationsNativeStatusLine.MESSAGE_CONTENT_INSET, top: 0 };
obj5 = { top: VibegrationsRepliedMessage.REPLY_PREVIEW_HEIGHT + PX_8 };
obj6 = { marginBottom: -nativeDefault.space.PX_4 };
obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12 };
obj8 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj9 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
obj10 = { marginTop: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_12, borderLeftWidth: 2, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, gap: 2 };
obj11 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj12 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
obj13 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
let closure_26 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
  const tmp4 = closure_26();
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
      const intl = tmp(1127).intl;
      const stringResult = intl.string(_modDef3718.FW8UcU);
      cResult[0] = stringResult;
      first = stringResult;
    } else {
      first = cResult[0];
    }
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: intl2.string(_modDef3718["9W8SbY"]) };
      const Text = tmp(4833).Text;
      intl2 = tmp(1127).intl;
      const tmp13 = closure_17(Text, obj3);
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
    const Stack = tmp(5280).Stack;
    const tmp15 = authStore4;
    if (null == src) {
      const obj4 = { style: tmp4.designPlaceholder, children: closure_17(hasOwnProperty, obj5) };
      obj5 = { size: "small", accessibilityLabel: first };
      tmp19 = closure_17(metroImportAll, obj4);
    } else {
      const obj6 = { source: obj7, style: tmp4.designImage, resizeMode: "cover", onError: handleError, accessible: true, accessibilityRole: "image", accessibilityLabel: first };
      obj7 = { uri: src };
      tmp19 = closure_17(metroRequire, obj6);
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
  const tmp = closure_26();
  const obj = useVibegrationsPlanDesign;
  const vibegrationsPlanDesign = obj.useVibegrationsPlanDesign(projectId, design.id);
  const src = vibegrationsPlanDesign.src;
  if (vibegrationsPlanDesign.gone) {
    return null;
  } else {
    let tmp9Result;
    const intl = tmp2(1127).intl;
    const stringResult = intl.string(_modDef3718.FW8UcU);
    const Stack = tmp2(5280).Stack;
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl2.string(_modDef3718["9W8SbY"]) };
    const Text = tmp2(4833).Text;
    intl2 = tmp2(1127).intl;
    items = [closure_17(Text, obj2), ];
    const tmp8 = authStore4;
    if (null == src) {
      const obj3 = { style: tmp.designPlaceholder, children: closure_17(hasOwnProperty, obj4) };
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
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Button;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items3;
  let obj12;
  let onApprove;
  let projectId;
  let proposal;
  let stringResult;
  let tmp12;
  let tmp14;
  let tmp17;
  let obj = react2;
  const cResult = obj.c(52);
  ({ projectId, proposal, onApprove } = arg0);
  const tmp4 = closure_26();
  if (cResult[0] === proposal.bot_permissions) {
    if (cResult[1] === proposal.privileged_intents) {
      if (cResult[2] === proposal.summary) {
        let tmp5;
        let tmp6;
        let tmp7;
        let arr;
        let arr2;
        let str;
        let str2;
        let tmp8;
        let str3;
        let num;
        let tmp9;
        let tmp10;
        if (cResult[3] === tmp4.surface) {
          tmp5 = cResult[4];
          tmp6 = cResult[5];
          tmp7 = cResult[6];
          arr = cResult[7];
          arr2 = cResult[8];
          str = cResult[9];
          str2 = cResult[10];
          tmp8 = cResult[11];
          str3 = cResult[12];
          num = cResult[13];
          tmp9 = cResult[14];
          tmp10 = cResult[15];
        }
        if (cResult[21] === tmp5) {
          if (cResult[22] === str) {
            if (cResult[23] === str2) {
              let tmp24;
              if (cResult[24] === tmp8) {
                tmp24 = cResult[25];
              }
              if (cResult[26] === projectId) {
                let tmp27;
                let tmp31;
                let tmp36;
                let tmp41;
                let tmp46;
                if (cResult[27] === proposal.design_image) {
                  tmp27 = cResult[28];
                }
                if (cResult[29] !== proposal.changes) {
                  let tmp32 = null;
                  if (proposal.changes.length > 0) {
                    const obj2 = { direction: "vertical", spacing: 4, children: items };
                    const Stack2 = tmp(5280).Stack;
                    const obj4 = { variant: "text-sm/semibold", color: "text-muted", children: intl3.string(_modDef3718.KLyB8Y) };
                    const Text3 = tmp(4833).Text;
                    intl3 = tmp(1127).intl;
                    items = [closure_17(Text3, obj4), ];
                    const changes = proposal.changes;
                    items[1] = changes.map((item, index) => {
                      const obj = { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item };
                      const Text = Text_Text.Text;
                      return closure_1_17(Text, obj, index);
                    });
                    tmp32 = authStore4(Stack2, obj2);
                  }
                  cResult[29] = proposal.changes;
                  cResult[30] = tmp32;
                  tmp31 = tmp32;
                } else {
                  tmp31 = cResult[30];
                }
                if (cResult[31] !== arr2) {
                  let tmp37 = null;
                  if (arr2.length > 0) {
                    const obj5 = { direction: "vertical", spacing: 4, children: items1 };
                    const Stack3 = tmp(5280).Stack;
                    const obj6 = { variant: "text-sm/semibold", color: "text-muted", children: intl4.string(_modDef3718.ieqTtP) };
                    const Text4 = tmp(4833).Text;
                    intl4 = tmp(1127).intl;
                    items1 = [closure_17(Text4, obj6), ];
                    const obj7 = { variant: "text-sm/normal", color: "text-default", children: arr2.join(", ") };
                    const Text5 = tmp(4833).Text;
                    items1[1] = closure_17(Text5, obj7);
                    tmp37 = authStore4(Stack3, obj5);
                  }
                  cResult[31] = arr2;
                  cResult[32] = tmp37;
                  tmp36 = tmp37;
                } else {
                  tmp36 = cResult[32];
                }
                if (cResult[33] !== arr) {
                  let tmp42 = null;
                  if (arr.length > 0) {
                    const obj8 = { direction: "vertical", spacing: 4, children: items2 };
                    const Stack4 = tmp(5280).Stack;
                    const obj9 = { variant: "text-sm/semibold", color: "text-muted", children: intl5.string(_modDef3718.Cn9qix) };
                    const Text6 = tmp(4833).Text;
                    intl5 = tmp(1127).intl;
                    items2 = [closure_17(Text6, obj9), ];
                    const obj10 = { variant: "text-sm/normal", color: "text-default", children: arr.join(", ") };
                    const Text7 = tmp(4833).Text;
                    items2[1] = closure_17(Text7, obj10);
                    tmp42 = authStore4(Stack4, obj8);
                  }
                  cResult[33] = arr;
                  cResult[34] = tmp42;
                  tmp41 = tmp42;
                } else {
                  tmp41 = cResult[34];
                }
                if (cResult[35] !== onApprove) {
                  let tmp47 = null;
                  if (null != onApprove) {
                    const obj11 = { direction: "horizontal", children: closure_17(Button, obj12) };
                    const Stack5 = tmp(5280).Stack;
                    obj12 = { text: intl6.string(_modDef3718["hG0Y0+"]), variant: "primary", onPress: onApprove };
                    Button = tmp(5282).Button;
                    intl6 = tmp(1127).intl;
                    tmp47 = closure_17(Stack5, obj11);
                  }
                  cResult[35] = onApprove;
                  cResult[36] = tmp47;
                  tmp46 = tmp47;
                } else {
                  tmp46 = cResult[36];
                }
                if (cResult[37] === tmp6) {
                  if (cResult[38] === tmp31) {
                    if (cResult[39] === tmp36) {
                      if (cResult[40] === tmp41) {
                        if (cResult[41] === tmp46) {
                          if (cResult[42] === str3) {
                            if (cResult[43] === num) {
                              if (cResult[44] === tmp9) {
                                if (cResult[45] === tmp24) {
                                  let tmp50;
                                  if (cResult[46] === tmp27) {
                                    tmp50 = cResult[47];
                                  }
                                  if (cResult[48] === tmp7) {
                                    if (cResult[49] === tmp50) {
                                      let tmp53;
                                      if (cResult[50] === tmp10) {
                                        tmp53 = cResult[51];
                                      }
                                      return tmp53;
                                    }
                                  }
                                  const obj13 = { style: tmp10, children: tmp50 };
                                  const tmp55 = closure_17(tmp7, obj13);
                                  cResult[48] = tmp7;
                                  cResult[49] = tmp50;
                                  cResult[50] = tmp10;
                                  cResult[51] = tmp55;
                                  tmp53 = tmp55;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                const obj14 = { direction: str3, spacing: num, children: items3 };
                items3 = [tmp9, tmp24, tmp27, tmp31, tmp36, tmp41, tmp46];
                const tmp52 = authStore4(tmp6, obj14);
                cResult[37] = tmp6;
                cResult[38] = tmp31;
                cResult[39] = tmp36;
                cResult[40] = tmp41;
                cResult[41] = tmp46;
                cResult[42] = str3;
                cResult[43] = num;
                cResult[44] = tmp9;
                cResult[45] = tmp24;
                cResult[46] = tmp27;
                cResult[47] = tmp52;
                tmp50 = tmp52;
              }
              let tmp28 = null;
              if (null != proposal.design_image) {
                const obj15 = { projectId, design: proposal.design_image };
                tmp28 = closure_17(closure_27, obj15);
              }
              cResult[26] = projectId;
              cResult[27] = proposal.design_image;
              cResult[28] = tmp28;
              tmp27 = tmp28;
            }
          }
        }
        const obj16 = { variant: str, color: str2, children: tmp8 };
        const tmp26 = closure_17(tmp5, obj16);
        cResult[21] = tmp5;
        cResult[22] = str;
        cResult[23] = str2;
        cResult[24] = tmp8;
        cResult[25] = tmp26;
        tmp24 = tmp26;
      }
    }
  }
  const str4 = proposal.summary;
  const trimmed = str4.trim();
  if (cResult[16] !== proposal.bot_permissions) {
    let bot_permissions = proposal.bot_permissions;
    if (bot_permissions == null) {
      bot_permissions = [];
    }
    cResult[16] = proposal.bot_permissions;
    cResult[17] = bot_permissions;
    tmp12 = bot_permissions;
  } else {
    tmp12 = cResult[17];
  }
  if (cResult[18] !== proposal.privileged_intents) {
    let privileged_intents = proposal.privileged_intents;
    if (privileged_intents == null) {
      privileged_intents = [];
    }
    cResult[18] = proposal.privileged_intents;
    cResult[19] = privileged_intents;
    tmp14 = privileged_intents;
  } else {
    tmp14 = cResult[19];
  }
  const surface = tmp4.surface;
  const Stack = tmp(5280).Stack;
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    const obj17 = { variant: "heading-md/bold", color: "text-default", children: intl.string(_modDef3718["60htw+"]) };
    let Text = tmp(4833).Text;
    intl = tmp(1127).intl;
    const tmp20 = closure_17(Text, obj17);
    cResult[20] = tmp20;
    tmp17 = tmp20;
  } else {
    tmp17 = cResult[20];
  }
  const Text2 = tmp(4833).Text;
  if ("" === trimmed) {
    const intl2 = tmp(1127).intl;
    stringResult = intl2.string(_modDef3718.IHCafX);
  } else {
    const obj3 = MarkupUtilsDefault;
    stringResult = obj3.parse(trimmed, true, tmp(16346).VIBEGRATIONS_MARKUP_OPTIONS);
  }
  cResult[0] = proposal.bot_permissions;
  cResult[1] = proposal.privileged_intents;
  cResult[2] = proposal.summary;
  cResult[3] = tmp4.surface;
  cResult[4] = Text2;
  cResult[5] = Stack;
  cResult[6] = metroImportAll;
  cResult[7] = tmp14;
  cResult[8] = tmp12;
  cResult[9] = "text-md/normal";
  cResult[10] = "text-default";
  cResult[11] = stringResult;
  cResult[12] = "vertical";
  cResult[13] = 8;
  cResult[14] = tmp17;
  cResult[15] = surface;
  tmp8 = stringResult;
  tmp10 = surface;
  tmp9 = tmp17;
  num = 8;
  str3 = "vertical";
  str2 = "text-default";
  str = "text-md/normal";
  arr2 = tmp12;
  arr = tmp14;
  tmp7 = tmp16;
  tmp6 = Stack;
  tmp5 = Text2;
}) : ((projectId) => {
  let Button;
  let Stack;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items3;
  let obj13;
  let onApprove;
  let proposal;
  let stringResult;
  ({ proposal, onApprove } = projectId);
  projectId = projectId.projectId;
  const str = proposal.summary;
  const tmp = closure_26();
  const trimmed = str.trim();
  let bot_permissions = proposal.bot_permissions;
  if (bot_permissions == null) {
    bot_permissions = [];
  }
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  let obj = { style: tmp.surface, children: authStore4(Stack, { direction: "vertical", spacing: 8, children: items }) };
  Stack = Stack_Stack.Stack;
  const obj2 = { variant: "heading-md/bold", color: "text-default", children: intl.string(_modDef3718["60htw+"]) };
  let Text = Text_Text.Text;
  intl = intl7.intl;
  items = [closure_17(Text, obj2), , , , , , ];
  const Text2 = Text_Text.Text;
  const tmp4 = metroImportAll;
  if ("" === trimmed) {
    const intl2 = tmp6(1127).intl;
    stringResult = intl2.string(tmp8(3718).IHCafX);
  } else {
    const tmp8Result = MarkupUtilsDefault;
    stringResult = tmp8Result.parse(trimmed, true, tmp6(16346).VIBEGRATIONS_MARKUP_OPTIONS);
  }
  items[1] = closure_17(Text2, { variant: "text-md/normal", color: "text-default", children: stringResult });
  let tmp3Result = null;
  if (null != proposal.design_image) {
    const obj3 = { projectId, design: proposal.design_image };
    tmp3Result = tmp3(closure_27, obj3);
  }
  items[2] = tmp3Result;
  let tmp5Result = null;
  if (proposal.changes.length > 0) {
    const obj4 = { direction: "vertical", spacing: 4, children: items1 };
    const Stack2 = tmp6(5280).Stack;
    const obj5 = { variant: "text-sm/semibold", color: "text-muted", children: intl3.string(_modDef3718.KLyB8Y) };
    const Text3 = tmp6(4833).Text;
    intl3 = tmp6(1127).intl;
    items1 = [closure_17(Text3, obj5), ];
    const changes = proposal.changes;
    items1[1] = changes.map((item, index) => {
      const obj = { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item };
      const Text = Text_Text.Text;
      return closure_1_17(Text, obj, index);
    });
    tmp5Result = tmp5(Stack2, obj4);
  }
  items[3] = tmp5Result;
  let tmp5Result3 = null;
  if (bot_permissions.length > 0) {
    const obj6 = { direction: "vertical", spacing: 4, children: items2 };
    const Stack3 = tmp6(5280).Stack;
    const obj7 = { variant: "text-sm/semibold", color: "text-muted", children: intl4.string(_modDef3718.ieqTtP) };
    const Text4 = tmp6(4833).Text;
    intl4 = tmp6(1127).intl;
    items2 = [closure_17(Text4, obj7), ];
    const obj8 = { variant: "text-sm/normal", color: "text-default", children: bot_permissions.join(", ") };
    const Text5 = tmp6(4833).Text;
    items2[1] = closure_17(Text5, obj8);
    tmp5Result3 = tmp5(Stack3, obj6);
  }
  items[4] = tmp5Result3;
  let tmp5Result4 = null;
  if (privileged_intents.length > 0) {
    const obj9 = { direction: "vertical", spacing: 4, children: items3 };
    const Stack4 = tmp6(5280).Stack;
    const obj10 = { variant: "text-sm/semibold", color: "text-muted", children: intl5.string(_modDef3718.Cn9qix) };
    const Text6 = tmp6(4833).Text;
    intl5 = tmp6(1127).intl;
    items3 = [closure_17(Text6, obj10), ];
    const obj11 = { variant: "text-sm/normal", color: "text-default", children: privileged_intents.join(", ") };
    const Text7 = tmp6(4833).Text;
    items3[1] = closure_17(Text7, obj11);
    tmp5Result4 = tmp5(Stack4, obj9);
  }
  items[5] = tmp5Result4;
  let tmp3Result2 = null;
  if (null != onApprove) {
    const obj12 = { direction: "horizontal", children: closure_17(Button, obj13) };
    const Stack5 = tmp6(5280).Stack;
    obj13 = { text: intl6.string(_modDef3718["hG0Y0+"]), variant: "primary", onPress: onApprove };
    Button = tmp6(5282).Button;
    intl6 = tmp6(1127).intl;
    tmp3Result2 = tmp3(Stack5, obj12);
  }
  items[6] = tmp3Result2;
  return closure_17(tmp4, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
  let tmp4 = closure_26();
  const ideaCards = tmp4.ideaCards;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3718.DAvYsi) };
    const Text = tmp(4833).Text;
    intl = tmp(1127).intl;
    const tmp8 = closure_17(Text, obj2);
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
    const tmp15 = closure_18(closure_8, obj3);
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
        accessibilityLabel: intl.formatToPlainString(_modDef3718.pztRGi, obj2),
        children: tmp4(Stack, { direction: "vertical", spacing: 4, children: items })
      };
      const Card = onPick(dependencyMap[22]).Card;
      intl = onPick(dependencyMap[15]).intl;
      obj2 = { title: title.title };
      Stack = onPick(dependencyMap[18]).Stack;
      items = [, ];
      const obj3 = { variant: "text-md/semibold", color: "text-default", children: title.title };
      items[0] = closure_1_17(onPick(dependencyMap[17]).Text, obj3);
      let tmpResult = null;
      const tmp2 = onPick;
      const tmp3 = dependencyMap;
      tmp4 = closure_1_18;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = tmp(tmp2(tmp3[17]).Text, obj4);
      }
      items[1] = tmpResult;
      return closure_1_17(Card, obj, title.id);
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
  ({ ideas, onPick: require } = arg0);
  let obj = { style: closure_26().ideaCards, children: items };
  let obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3718.DAvYsi) };
  const Text = Text_Text.Text;
  intl = intl7.intl;
  items = [
    closure_17(Text, obj2),
    ideas.map((title) => {
      let Stack;
      let intl;
      let obj2;
      let tmp4;
      require = title;
      const obj = {
        onPress() {
          return require(title);
        },
        accessibilityLabel: intl.formatToPlainString(_modDef3718.pztRGi, obj2),
        children: tmp4(Stack, { direction: "vertical", spacing: 4, children: items })
      };
      const Card = Card_Card.Card;
      intl = intl7.intl;
      obj2 = { title: title.title };
      Stack = Stack_Stack.Stack;
      items = [, ];
      const obj3 = { variant: "text-md/semibold", color: "text-default", children: title.title };
      items[0] = closure_1_17(Text_Text.Text, obj3);
      let tmpResult = null;
      const tmp2 = require;
      const tmp3 = dependencyMap;
      tmp4 = closure_1_18;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = tmp(tmp2(tmp3[17]).Text, obj4);
      }
      items[1] = tmpResult;
      return closure_1_17(Card, obj, title.id);
    })
  ];
  return closure_18(closure_8, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let closure_2;
  let tmp3;
  let tmp5;
  let obj = projectId(576);
  const cResult = obj.c(12);
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp2 = closure_26();
  let closure_1 = tmp2;
  if (cResult[0] !== projectId) {
    const fn = function n(arg0) {
      const promise = map1(projectId, arg0);
      const nextPromise = promise.then((result) => {
        const obj = closure_1_1(closure_1_2[23]);
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
      const tmp11 = closure_17(closure_8, obj2);
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
        accessibilityLabel: intl.formatToPlainString(closure_1(closure_2[16]).QUFLUq, obj2),
        children: closure_1_17(projectId(closure_2[17]).Text, obj3)
      };
      const Card = projectId(closure_2[22]).Card;
      intl = projectId(closure_2[15]).intl;
      obj2 = { name: id.name };
      obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
      tmp12 = closure_1_17(Card, obj, id.id);
    } else {
      const obj4 = { style: closure_1.attachmentPill, children: closure_1_17(Text, obj5) };
      obj5 = { variant: "text-xs/medium", color: "text-muted", children: intl2.formatToPlainString(closure_1(closure_2[16]).OBr7WW, obj6) };
      Text = projectId(closure_2[17]).Text;
      intl2 = projectId(closure_2[15]).intl;
      const _HermesInternal = HermesInternal;
      obj6 = { name: id.name };
      tmp12 = closure_1_17(closure_1_8, obj4, "" + id.name + "-" + arg1);
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
  const tmp = closure_26();
  let closure_1 = tmp;
  items = [projectId];
  let closure_2 = react.useCallback((arg0) => {
    const promise = map1(projectId, arg0);
    const nextPromise = promise.then((result) => {
      const obj = closure_1_1(closure_1_2[23]);
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
          accessibilityLabel: intl.formatToPlainString(closure_1(closure_2[16]).QUFLUq, obj2),
          children: closure_1_17(projectId(closure_2[17]).Text, obj3)
        };
        const Card = projectId(closure_2[22]).Card;
        intl = projectId(closure_2[15]).intl;
        obj2 = { name: id.name };
        obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
        tmp12 = closure_1_17(Card, obj, id.id);
      } else {
        const obj4 = { style: closure_1.attachmentPill, children: closure_1_17(Text, obj5) };
        obj5 = { variant: "text-xs/medium", color: "text-muted", children: intl2.formatToPlainString(closure_1(closure_2[16]).OBr7WW, obj6) };
        Text = projectId(closure_2[17]).Text;
        intl2 = projectId(closure_2[15]).intl;
        const _HermesInternal = HermesInternal;
        obj6 = { name: id.name };
        tmp12 = closure_1_17(closure_1_8, obj4, "" + id.name + "-" + index);
      }
      return tmp12;
    })
  };
  return closure_17(closure_8, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? ((onAsk) => {
  let first;
  let intl;
  let tmp14;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(11);
  onAsk = onAsk.onAsk;
  const tmp4 = closure_26();
  const ideasOffer = tmp4.ideasOffer;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(_modDef3718.tG5PBo) };
    const Text = tmp(4833).Text;
    intl = tmp(1127).intl;
    const tmp8 = closure_17(Text, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.ideasOfferHint) {
    const obj3 = { style: tmp4.ideasOfferHint, children: first };
    const tmp12 = closure_17(metroImportAll, obj3);
    cResult[1] = tmp4.ideasOfferHint;
    cResult[2] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1127).intl;
    const stringResult = intl2.string(_modDef3718.cwTe5o);
    cResult[3] = stringResult;
    tmp14 = stringResult;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] === onAsk) {
    let tmp17;
    if (cResult[5] === null == onAsk) {
      tmp17 = cResult[6];
    }
    if (cResult[7] === tmp4.ideasOffer) {
      if (cResult[8] === tmp9) {
        let tmp19;
        if (cResult[9] === tmp17) {
          tmp19 = cResult[10];
        }
        return tmp19;
      }
    }
    const obj4 = { style: ideasOffer, children: items };
    items = [tmp9, tmp17];
    const tmp22 = authStore4(metroImportAll, obj4);
    cResult[7] = tmp4.ideasOffer;
    cResult[8] = tmp9;
    cResult[9] = tmp17;
    cResult[10] = tmp22;
    tmp19 = tmp22;
  }
  const tmp18 = closure_17(components_Button_Button.Button, { variant: "secondary", size: "sm", disabled: null == onAsk, onPress: onAsk, text: tmp14 });
  cResult[4] = onAsk;
  cResult[5] = null == onAsk;
  cResult[6] = tmp18;
  tmp17 = tmp18;
}) : ((onAsk) => {
  let Text;
  let intl;
  let intl2;
  let obj3;
  onAsk = onAsk.onAsk;
  const tmp = closure_26();
  const obj = { style: tmp.ideasOffer, children: items };
  const obj2 = { style: tmp.ideasOfferHint, children: closure_17(Text, obj3) };
  obj3 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(_modDef3718.tG5PBo) };
  Text = Text_Text.Text;
  intl = intl7.intl;
  items = [closure_17(metroImportAll, obj2), ];
  const obj4 = { variant: "secondary", size: "sm", disabled: null == onAsk, onPress: onAsk, text: intl2.string(_modDef3718.cwTe5o) };
  const Button = components_Button_Button.Button;
  intl2 = intl7.intl;
  items[1] = closure_17(Button, obj4);
  return authStore4(metroImportAll, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let crestColor;
  let detail;
  let epoch;
  let inGutter;
  let live;
  let node;
  let tmp10;
  let tmp7;
  let tmpResult2;
  let obj = react2;
  const cResult = obj.c(20);
  ({ node, inGutter, live, crestColor, epoch } = arg0);
  let num = 0;
  if (undefined !== epoch) {
    num = epoch;
  }
  const tmp6 = closure_26();
  if (cResult[0] !== node) {
    const tmpResult = VibegrationsTimelineTree;
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
      const Text = tmp(4833).Text;
      tmpResult2 = VibegrationsDuration;
      tmp11 = closure_17(Text, obj2);
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
                    const tmp23 = authStore4(metroImportAll, obj3);
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
                                          const obj = { variant: "text-sm/normal", color: "text-muted", children };
                                          return closure_1_17(Text_Text.Text, obj, index);
                                        })
                    };
                    detail = node.detail;
                    tmp17 = closure_17(metroImportAll, obj4);
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
  const tmp15 = closure_17(VibegrationsNativeStatusLineDefault, { line: tmp7, live: undefined !== live && live, settled: !tmp5 && "failed" !== node.status, failed: "failed" === status, presentation: str2, crestColor, inGutter: undefined !== inGutter && inGutter, epoch: num, trailing: tmp10 });
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
  let obj = { line: obj2.describeNode(node), live: flag, settled: tmp8, failed: "failed" === node.status, presentation: str2, crestColor, inGutter, epoch, trailing: tmp4Result };
  const tmp = closure_26();
  const tmp6 = VibegrationsNativeStatusLineDefault;
  tmp8 = !flag;
  obj2 = VibegrationsTimelineTree;
  const tmp2 = authStore4;
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
    const Text = tmp7(4833).Text;
    tmp7Result = VibegrationsDuration;
    tmp4Result = tmp4(Text, obj3);
  }
  const children = [closure_17(tmp6, obj), ];
  let tmp4Result2 = null;
  if (node.detail.length > 0) {
    const obj4 = {
      style: tmp.stepDetail,
      children: detail.map((children, index) => {
          const obj = { variant: "text-sm/normal", color: "text-muted", children };
          return closure_1_17(Text_Text.Text, obj, index);
        })
    };
    detail = node.detail;
    tmp4Result2 = tmp4(tmp3, obj4);
  }
  children[1] = tmp4Result2;
  return tmp2(metroImportAll, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? ((epoch) => {
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
  const cResult = obj.c(29);
  ({ tree, turnActive } = epoch);
  epoch = epoch.epoch;
  const tmp4 = closure_26();
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
        if (tmp23) {
          tmp26 = first;
        }
        if (cResult[11] === epoch) {
          if (cResult[12] === tmp6) {
            if (cResult[13] === tmp12) {
              if (cResult[14] === !turnActive) {
                if (cResult[15] === tmp26) {
                  let tmp27;
                  if (cResult[16] === turnActive) {
                    tmp27 = cResult[17];
                  }
                  if (cResult[18] === tmp11) {
                    if (cResult[19] === epoch) {
                      if (cResult[20] === tmp6) {
                        if (cResult[21] === tmp23) {
                          if (cResult[22] === tmp4) {
                            if (cResult[23] === tree.steps) {
                              let tmp31;
                              if (cResult[24] === turnActive) {
                                tmp31 = cResult[25];
                              }
                              if (cResult[26] === tmp27) {
                                let tmp35;
                                if (cResult[27] === tmp31) {
                                  tmp35 = cResult[28];
                                }
                                return tmp35;
                              }
                              const obj2 = { children: items };
                              items = [tmp27, tmp31];
                              const tmp38 = closure_18(closure_8, obj2);
                              cResult[26] = tmp27;
                              cResult[27] = tmp31;
                              cResult[28] = tmp38;
                              tmp35 = tmp38;
                            }
                          }
                        }
                      }
                    }
                  }
                  let tmp32 = null;
                  if (tmp6) {
                    tmp32 = null;
                    if (tmp23) {
                      const obj3 = {
                        style: tmp4.activityDetail,
                        children: steps1.map((node) => {
                                              let tmp3;
                                              const obj = { node, live: tmp3, epoch };
                                              tmp3 = turnActive;
                                              const tmp = closure_17;
                                              const tmp2 = closure_32;
                                              if (turnActive) {
                                                tmp3 = node === _slicedToArray;
                                              }
                                              return tmp(tmp2, obj, node.id);
                                            })
                      };
                      steps1 = tree.steps;
                      tmp32 = closure_17(closure_8, obj3);
                    }
                  }
                  cResult[18] = tmp11;
                  cResult[19] = epoch;
                  cResult[20] = tmp6;
                  cResult[21] = tmp23;
                  cResult[22] = tmp4;
                  cResult[23] = tree.steps;
                  cResult[24] = turnActive;
                  cResult[25] = tmp32;
                  tmp31 = tmp32;
                }
              }
            }
          }
        }
        const obj4 = { line: tmp12, live: turnActive, settled: !turnActive, inGutter: true, epoch, expanded: tmp6, onToggle: tmp26 };
        const tmp30 = closure_17(epoch(16337), obj4);
        cResult[11] = epoch;
        cResult[12] = tmp6;
        cResult[13] = tmp12;
        cResult[14] = !turnActive;
        cResult[15] = tmp26;
        cResult[16] = turnActive;
        cResult[17] = tmp30;
        tmp27 = tmp30;
      }
    }
  }
  const tmpResult = tmp(16351);
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
    const tmpResult3 = tmp(16352);
    describeTurnDurationResult = tmpResult3.describeTurnDuration(tmp14);
  } else if (null != currentStepResult) {
    const tmpResult4 = tmp(16351);
    describeTurnDurationResult = tmpResult4.describeNode(currentStepResult);
  } else if (describeTurnDurationResult == null) {
    const intl = tmp(1127).intl;
    describeTurnDurationResult = intl.string(epoch(3718).nv6pUM);
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
  let tmp3;
  let tree;
  let turnActive;
  ({ tree, turnActive } = epoch);
  epoch = epoch.epoch;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let tmp = closure_26();
  let tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c2] = tmp2;
  const callback = react.useCallback(() => _undefined((arg0) => !arg0), []);
  let obj = turnActive(16351);
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
    const tmp5Result = turnActive(16352);
    groupLabel = tmp5Result.describeTurnDuration(tmp8);
  } else if (null != currentStepResult) {
    const tmp5Result2 = turnActive(16351);
    groupLabel = tmp5Result2.describeNode(currentStepResult);
  } else if (groupLabel == null) {
    const intl = tmp5(1127).intl;
    groupLabel = intl.string(epoch(3718).nv6pUM);
  }
  let someResult = tree.steps.length > 1;
  if (!someResult) {
    const steps = tree.steps;
    someResult = steps.some((detail) => detail.detail.length > 0);
  }
  const obj2 = { line: groupLabel, live: turnActive, settled: !turnActive, inGutter: true, epoch, expanded: tmp3, onToggle: tmp19 };
  tmp19 = undefined;
  const tmp15 = closure_18;
  const tmp18 = epoch(16337);
  if (someResult) {
    tmp19 = callback;
  }
  const children = [closure_17(tmp18, obj2), ];
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
              const tmp = closure_17;
              const tmp2 = closure_32;
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
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
  const tmp4 = closure_26();
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
          const tmp20 = closure_17(mark.Illocon, { size: 16, accessible: false });
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
                                      const tmp34 = closure_18(closure_8, obj2);
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
                                                          return closure_1_17(mark(dependencyMap[17]).Text, obj, index);
                                                        }),

                            ];
                            const steps = lane.steps;
                            items1[1] = steps.map((node) => {
                              const obj = { node, live: node === _slicedToArray, crestColor: mark.tint, epoch };
                              return closure_17(closure_32, obj, node.id);
                            });
                            tmp28 = closure_18(closure_8, obj3);
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
        const tmp26 = closure_17(epoch(16337), obj4);
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
    const tmpResult = mark(16351);
    currentStepResult = tmpResult.currentStep(lane.steps);
  }
  _slicedToArray = currentStepResult;
  const tmp13 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" === lane.task.status) {
    let describeNodeResult;
    if (null != currentStepResult) {
      const tmpResult4 = mark(16351);
      describeNodeResult = tmpResult4.describeNode(currentStepResult);
    } else {
      const tmpResult5 = mark(16353);
      describeNodeResult = tmpResult5.taskTitle(lane.task);
    }
    describeTaskOutcomeResult = describeNodeResult;
  } else {
    const tmpResult6 = mark(16353);
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
  const tmp = closure_26();
  [tmp3, c2] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(() => c2((arg0) => !arg0), []);
  if (turnActive) {
    turnActive = tmp5;
  }
  let currentStepResult;
  if (turnActive) {
    let obj = mark(16351);
    currentStepResult = obj.currentStep(lane.steps);
  }
  _slicedToArray = currentStepResult;
  const tmp9 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" === lane.task.status) {
    let describeNodeResult;
    if (null != currentStepResult) {
      const obj4 = mark(16351);
      describeNodeResult = obj4.describeNode(currentStepResult);
    } else {
      const obj3 = mark(16353);
      describeNodeResult = obj3.taskTitle(lane.task);
    }
    describeTaskOutcomeResult = describeNodeResult;
  } else {
    const obj2 = mark(16353);
    describeTaskOutcomeResult = obj2.describeTaskOutcome(lane.task);
  }
  const obj5 = { line: describeTaskOutcomeResult, live: turnActive, settled: tmp23, failed: "failed" === lane.task.status, glyph: closure_17(mark.Illocon, { size: 16, accessible: false }), crestColor: mark.tint, inGutter: true, epoch, expanded: tmp3, onToggle: tmp24 };
  tmp23 = !turnActive;
  const tmp22 = epoch(16337);
  if (!turnActive) {
    tmp23 = "failed" !== lane.task.status;
  }
  tmp24 = undefined;
  if (tmp9) {
    tmp24 = callback;
  }
  const children = [closure_17(tmp22, obj5), ];
  let tmp19Result = null;
  if (tmp3) {
    tmp19Result = null;
    if (tmp9) {
      const detail = lane.task.detail;
      const obj6 = { style: tmp.activityDetail, children: items1 };
      items1 = [
        detail.map((children, index) => {
              const obj = { variant: "text-xs/normal", color: "text-feedback-critical", children };
              return closure_1_17(mark(c2[17]).Text, obj, index);
            }),

      ];
      const steps = lane.steps;
      items1[1] = steps.map((node) => {
        const obj = { node, live: node === c3, crestColor: mark.tint, epoch };
        return closure_17(closure_32, obj, node.id);
      });
      tmp19Result = tmp19(tmp20, obj6);
    }
  }
  children[1] = tmp19Result;
  return closure_18(closure_8, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_2;
  let tmp5;
  let tmp6;
  let tree;
  let turnActive;
  let obj = turnActive(576);
  const cResult = obj.c(10);
  const tmp = turnActive;
  ({ tree, turnActive } = arg0);
  const tmp4 = closure_26();
  if (0 === tree.steps.length) {
    if (0 === tree.tasks.length) {
      return null;
    }
  }
  const length = tree.tasks.length;
  if (cResult[0] === length) {
    if (cResult[1] === tmp4.activityBox) {
      if (cResult[2] === tree) {
        if (cResult[3] === turnActive) {
          tmp5 = cResult[4];
        }
        return tmp5;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p(taskId) {
      return taskId.taskId;
    };
    cResult[5] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[5];
  }
  const tasks = tree.tasks;
  const tmpResult = tmp(16354);
  dependencyMap = tmpResult.subagentIllocons(tasks.map(tmp6));
  if (cResult[6] === length) {
    if (cResult[7] === tree) {
      let tmp7;
      if (cResult[8] === turnActive) {
        tmp7 = cResult[9];
      }
      let obj2 = { style: tmp4.activityBox, children: items };
      items = [tmp7, ];
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
          tmp5 = closure_17(closure_34, obj2, task.taskId);
        }
        return tmp5;
      });
      const tmp11 = closure_18(closure_8, obj2);
      cResult[0] = length;
      cResult[1] = tmp4.activityBox;
      cResult[2] = tree;
      cResult[3] = turnActive;
      cResult[4] = tmp11;
      tmp5 = tmp11;
    }
  }
  const tmp8 = closure_17(closure_33, { tree, turnActive, epoch: length });
  cResult[6] = length;
  cResult[7] = tree;
  cResult[8] = turnActive;
  cResult[9] = tmp8;
  tmp7 = tmp8;
}) : ((arg0) => {
  let closure_2;
  let tree;
  let turnActive;
  ({ tree, turnActive } = arg0);
  let length;
  dependencyMap = undefined;
  const tmp = closure_26();
  if (0 === tree.steps.length) {
    if (0 === tree.tasks.length) {
      return null;
    }
  }
  length = tree.tasks.length;
  let obj = turnActive(16354);
  const tasks = tree.tasks;
  dependencyMap = obj.subagentIllocons(tasks.map((taskId) => taskId.taskId));
  let obj2 = { style: tmp.activityBox, children: items };
  items = [closure_17(closure_33, { tree, turnActive, epoch: length }), ];
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
      tmp5 = closure_17(closure_34, obj2, task.taskId);
    }
    return tmp5;
  });
  return closure_18(closure_8, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let obj6;
  let transcript;
  let transcript2;
  const obj = react2;
  const cResult = obj.c(15);
  children = children.children;
  const clearance = children.clearance;
  const tmp3 = closure_26();
  const obj2 = PlatformUtils;
  if (obj2.isIOS()) {
    let tmp4;
    let tmp8;
    let tmp19;
    ({ transcript, transcript: transcript2 } = tmp3);
    if (cResult[0] !== tmp3.maskSolid) {
      const obj3 = { style: tmp3.maskSolid };
      const tmp7 = closure_17(metroImportAll, obj3);
      cResult[0] = tmp3.maskSolid;
      cResult[1] = tmp7;
      tmp4 = tmp7;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] !== tmp3.maskFade) {
      const obj4 = { style: tmp3.maskFade, colors: items, locations, start, end };
      const tmp15 = closure_17(LinearGradientDefault, obj4);
      cResult[2] = tmp3.maskFade;
      cResult[3] = tmp15;
      tmp8 = tmp15;
    } else {
      tmp8 = cResult[3];
    }
    const _Math = Math;
    const bound = Math.max(0, clearance - c21);
    if (cResult[4] !== bound) {
      const obj5 = { style: obj6 };
      obj6 = { height: bound };
      const tmp22 = closure_17(metroImportAll, obj5);
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
          const tmp30 = closure_17(_modDef5975, obj7);
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
    const tmp26 = authStore4(metroImportAll, obj8);
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
  const tmp = closure_26();
  let tmp3 = children;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const obj2 = { style: tmp.transcript, maskElement: authStore4(metroImportAll, obj3), children };
    obj3 = { style: tmp.transcript, children: items };
    items = [, , ];
    const obj4 = { style: tmp.maskSolid };
    const tmp6 = _modDef5975;
    items[0] = closure_17(metroImportAll, obj4);
    const obj5 = { style: tmp.maskFade, colors: items, locations, start, end };
    items[1] = closure_17(LinearGradientDefault, obj5);
    const obj6 = { style: obj7 };
    const _Math = Math;
    obj7 = { height: Math.max(0, clearance - c21) };
    items[2] = closure_17(metroImportAll, obj6);
    tmp3 = closure_17(tmp6, obj2);
  }
  return tmp3;
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((replied) => {
  let checklistExpanded;
  let checklistSuperseded;
  let groupStart;
  let isNewest;
  let message;
  let onAnswerClarification;
  let onApprovePlan;
  let onAskForIdeas;
  let onPickIdea;
  let onToggleChecklist;
  let projectId;
  let tmp5;
  let tmp = message;
  const tmp2 = onToggleChecklist;
  let obj = message(onToggleChecklist[13]);
  const cResult = obj.c(178);
  ({ projectId, message } = replied);
  ({ groupStart, isNewest, checklistSuperseded } = replied);
  ({ checklistExpanded, onToggleChecklist } = replied);
  replied = replied.replied;
  const onJumpToReplied = replied.onJumpToReplied;
  ({ onApprovePlan, onPickIdea, onAskForIdeas, onAnswerClarification } = replied);
  const first = replied.first;
  const tmp4 = closure_26();
  const spoken = tmp4;
  let steps = message.steps;
  if (cResult[0] !== message) {
    let tmp6 = turnSettled;
    const tmp7 = turnSettled(message);
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
    let closure_6 = tmp9;
    const steps2 = message.steps;
    if (cResult[5] !== message) {
      const tmp13 = turnSettled(message);
      cResult[5] = message;
      cResult[6] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] === message.steps) {
      let tmp15;
      if (cResult[8] === !tmp11) {
        tmp15 = cResult[9];
      }
      const length = tmp15;
      if (cResult[10] !== message.steps) {
        cResult[10] = message.steps;
        const tmpResult = tmp(tmp2[24]);
        const latestTodosResult = tmpResult.latestTodos(message.steps);
        class K {
          constructor() {
            return onToggleChecklist(message.render_id, checklistSuperseded);
          }
        }
        let tmp17 = latestTodosResult;
      } else {
        tmp17 = cResult[11];
      }
      if (cResult[12] !== tmp9.tasks) {
        cResult[12] = tmp9.tasks;
        const tmpResult5 = tmp(tmp2[31]);
        const runningTodoAgentsResult = tmpResult5.runningTodoAgents(tmp9.tasks);
        class K {
          constructor() {
            return onToggleChecklist(message.render_id, checklistSuperseded);
          }
        }
      }
      if (cResult[14] === checklistSuperseded) {
        if (cResult[15] === message.render_id) {
          if (cResult[18] === onJumpToReplied) {
            let tmp23;
            if (cResult[21] !== message.content) {
              const tmpResult6 = tmp(tmp2[32]);
              const result = tmpResult6.parseVibegrationsDesignRemark(message.content);
              cResult[21] = message.content;
              class K {
                constructor() {
                  return onToggleChecklist(message.render_id, checklistSuperseded);
                }
              }
              tmp23 = result;
            } else {
              tmp23 = cResult[22];
            }
            let body;
            if (tmp23 != null) {
              body = tmp23.body;
            }
            class K {
              constructor() {
                return onToggleChecklist(message.render_id, checklistSuperseded);
              }
            }
            if (cResult[23] !== body) {
              const trimmed = body.trim();
              cResult[23] = body;
              cResult[24] = trimmed;
              class K {
                constructor() {
                  return onToggleChecklist(message.render_id, checklistSuperseded);
                }
              }
            }
            const content = tmp27;
            let attachments = null;
            if (null != message.attachments) {
              attachments = null;
              if (message.attachments.length > 0) {
                attachments = message.attachments;
              }
            }
            if (cResult[25] === tmp4.row) {
              let user_id;
              if ("user" === message.role) {
                user_id = message.user_id;
              }
              class K {
                constructor() {
                  return onToggleChecklist(message.render_id, checklistSuperseded);
                }
              }
              function oe() {
                const obj = VibegrationsMessageActionSheet;
                const obj2 = { content, userId: user_id };
                return obj.showVibegrationsMessageActions(obj2);
              }
              cResult[28] = user_id;
              cResult[29] = tmp27;
              cResult[30] = oe;
            }
            items = [tmp4.row, groupStart && !first && tmp4.rowGroupStart];
            cResult[25] = tmp4.row;
            cResult[26] = groupStart && !first && tmp4.rowGroupStart;
            cResult[27] = items;
          }
          const fn = function $() {
            if (null != replied) {
              if (onJumpToReplied != null) {
                tmp2(tmp.id);
              }
            }
          };
          cResult[18] = onJumpToReplied;
          class K {
            constructor() {
              return onToggleChecklist(message.render_id, checklistSuperseded);
            }
          }
          cResult[19] = replied;
          cResult[20] = fn;
        }
      }
      class K {
        constructor() {
          return onToggleChecklist(message.render_id, checklistSuperseded);
        }
      }
      cResult[14] = checklistSuperseded;
      cResult[15] = message.render_id;
      cResult[16] = onToggleChecklist;
      cResult[17] = K;
    }
    let obj2 = { turnActive: !tmp11 };
    const tmpResult7 = tmp(tmp2[24]);
    const turnSegmentsResult = tmpResult7.turnSegments(steps2, obj2);
    cResult[7] = message.steps;
    cResult[8] = !tmp11;
    cResult[9] = turnSegmentsResult;
    tmp15 = turnSegmentsResult;
  }
  const tmpResult8 = tmp(tmp2[24]);
  const timelineTree = tmpResult8.buildTimelineTree(steps, { turnActive: tmp8 });
  cResult[2] = message.steps;
  cResult[3] = tmp8;
  cResult[4] = timelineTree;
  tmp9 = timelineTree;
}) : ((onToggleChecklist) => {
  let StopIcon;
  let Text2;
  let c10;
  let callback2;
  let checklistExpanded;
  let checklistSuperseded;
  let first;
  let groupStart;
  let intl;
  let intl2;
  let intl3;
  let isNewest;
  let items10;
  let items14;
  let items9;
  let message;
  let obj12;
  let obj13;
  let obj14;
  let obj21;
  let obj25;
  let obj31;
  let obj5;
  let obj7;
  let onAnswerClarification;
  let onApprovePlan;
  let onAskForIdeas;
  let onPickIdea;
  let projectId;
  let showsClosingMessage;
  let tmp17Result6;
  let tmp37;
  let tmp53;
  let tmp56;
  let tmp74;
  ({ projectId, message } = onToggleChecklist);
  ({ groupStart, isNewest, checklistSuperseded } = onToggleChecklist);
  onToggleChecklist = onToggleChecklist.onToggleChecklist;
  const replied = onToggleChecklist.replied;
  const onJumpToReplied = onToggleChecklist.onJumpToReplied;
  let trimmed;
  let user_id;
  c10 = undefined;
  let index;
  closure_12 = undefined;
  let open;
  ({ first, checklistExpanded, onApprovePlan, onPickIdea, onAskForIdeas, onAnswerClarification } = onToggleChecklist);
  let tmp = closure_26();
  const spoken = tmp;
  let obj = onJumpToReplied;
  items = [message];
  const memo = onJumpToReplied.useMemo(() => {
    const obj = VibegrationsTimelineTree;
    const obj2 = { turnActive: !turnSettled(message) };
    return obj.buildTimelineTree(message.steps, obj2);
  }, items);
  const items1 = [message];
  const memo1 = onJumpToReplied.useMemo(() => {
    const obj = VibegrationsTimelineTree;
    const obj2 = { turnActive: !turnSettled(message) };
    return obj.turnSegments(message.steps, obj2);
  }, items1);
  const items2 = [message];
  const memo2 = onJumpToReplied.useMemo(() => {
    const obj = VibegrationsTimelineTree;
    return obj.latestTodos(message.steps);
  }, items2);
  const items3 = [memo];
  const items4 = [onToggleChecklist, message.render_id, checklistSuperseded];
  const memo3 = onJumpToReplied.useMemo(() => {
    const obj = VibegrationsTodoAgents;
    return obj.runningTodoAgents(memo.tasks);
  }, items3);
  const items5 = [onJumpToReplied, replied];
  const callback = onJumpToReplied.useCallback(() => onToggleChecklist(message.render_id, checklistSuperseded), items4);
  const items6 = [message.content];
  const callback1 = onJumpToReplied.useCallback(() => {
    if (null != replied) {
      if (onJumpToReplied != null) {
        tmp2(tmp.id);
      }
    }
  }, items5);
  const memo4 = onJumpToReplied.useMemo(() => {
    const obj = VibegrationsDesignFeedback;
    return obj.parseVibegrationsDesignRemark(message.content);
  }, items6);
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
  const items7 = [tmp.row, groupStart && !first && tmp.rowGroupStart];
  user_id = undefined;
  if ("user" === message.role) {
    user_id = message.user_id;
  }
  const items8 = [trimmed, user_id];
  if ("" !== trimmed) {
    callback2 = obj.useCallback(() => {
      const obj = VibegrationsMessageActionSheet;
      const obj2 = { content: trimmed, userId: user_id };
      return obj.showVibegrationsMessageActions(obj2);
    }, items8);
  }
  if ("user" === message.role) {
    let tmp77Result;
    if ("" === trimmed) {
      let tmp77Result2;
      if (null == memo4) {
        tmp77Result2 = null;
      }
      return tmp77Result2;
    }
    let obj3 = { style: items7, onLongPress: callback2, accessible: false, children: items9 };
    let tmp79 = null;
    const tmp78 = memo1;
    if (groupStart) {
      let obj4 = { style: tmp.avatar, children: closure_17(message(onToggleChecklist[34]).VibegrationsUserAvatar, obj5) };
      obj5 = { userId: message.user_id };
      tmp79 = closure_17(trimmed, obj4);
    }
    items9 = [tmp79, , , ];
    let tmp84 = null;
    if (groupStart) {
      let obj6 = { style: tmp.header, children: closure_17(message(onToggleChecklist[34]).VibegrationsUserHeader, obj7) };
      obj7 = { userId: null, at: null };
      ({ user_id: obj40.userId, created_at: obj40.at } = message);
      tmp84 = closure_17(trimmed, obj6);
    }
    items9[1] = tmp84;
    if ("" !== trimmed) {
      let combined;
      const Text3 = message(onToggleChecklist[17]).Text;
      if (!groupStart) {
        const intl4 = tmp90(tmp91[15]).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + intl4.string(tmp90(tmp91[15]).t.KD6OJJ) + ": " + trimmed;
      }
      let tmp94 = null;
      const obj8 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: items10 };
      if (null != memo4) {
        const obj9 = { label: memo4.label, variant: "text-md/medium" };
        tmp94 = closure_17(checklistSuperseded(tmp91[35]), obj9);
      }
      items10 = [tmp94, , ];
      let str5 = null;
      if (null != memo4) {
        str5 = null;
        if ("" !== trimmed) {
          str5 = " ";
        }
      }
      items10[1] = str5;
      items10[2] = trimmed;
      tmp77Result = tmp77(Text3, obj8);
    } else {
      tmp77Result = null;
    }
    items9[2] = tmp77Result;
    let tmp97 = null;
    if (null != attachments) {
      const obj10 = { projectId, attachments };
      tmp97 = closure_17(closure_30, obj10);
    }
    items9[3] = tmp97;
    tmp77Result2 = tmp77(tmp78, obj3);
  } else if (true === message.interrupted) {
    const obj11 = { style: items7, children: closure_17(trimmed, obj12) };
    obj12 = { style: tmp.activityBox, children: closure_17(tmp74, obj13) };
    obj13 = { line: intl3.string(checklistSuperseded(onToggleChecklist[16])["5T7DSm"]), live: false, settled: true, inGutter: true, glyph: closure_17(StopIcon, obj14) };
    tmp74 = checklistSuperseded(onToggleChecklist[8]);
    intl3 = message(onToggleChecklist[15]).intl;
    obj14 = { size: "refresh_sm", color: checklistSuperseded(onToggleChecklist[7]).colors.TEXT_MUTED };
    StopIcon = message(onToggleChecklist[36]).StopIcon;
    return closure_17(trimmed, obj11);
  } else {
    let provisionalTodo;
    let tmp38Result17;
    let steps = message.steps;
    const found = steps.find((kind) => "error" === kind.kind || "terminal_error" === kind.kind);
    let proposal;
    if ("proposal" === message.kind) {
      proposal = message.proposal;
    }
    let ideas = null;
    if (null != message.ideas) {
      ideas = null;
      if (message.ideas.length > 0) {
        ideas = message.ideas;
      }
    }
    let secretRequest = message.secretRequest;
    if (secretRequest == null) {
      secretRequest = null;
    }
    let tmp17 = message;
    let obj2 = message(onToggleChecklist[37]);
    const activeAwaitingUserResult = obj2.activeAwaitingUser(message, isNewest);
    let settingsRequest = message.settingsRequest;
    if (settingsRequest == null) {
      settingsRequest = null;
    }
    let clarification = null;
    if (isNewest) {
      clarification = null;
      if (null != message.clarification) {
        clarification = null;
        if (message.clarification.questions.length > 0) {
          clarification = message.clarification;
        }
      }
    }
    let items15 = memo2;
    if (memo2 == null) {
      let todos = null;
      if (null != message.todos) {
        todos = null;
        if (message.todos.length > 0) {
          todos = message.todos;
        }
      }
      items15 = todos;
    }
    if (null == items15) {
      if (null != message.provisionalTodo) {
        if ("" !== message.provisionalTodo) {
          provisionalTodo = message.provisionalTodo;
        }
      }
    }
    const obj15 = { steps: message.steps, content: trimmed, hasProposal: null != proposal, hasAttachments: null != attachments };
    const tmp17Result = tmp17(onToggleChecklist[38]);
    const turnPresentation = tmp17Result.resolveTurnPresentation(obj15);
    ({ showsClosingMessage, replyKey: c10 } = turnPresentation);
    let tmp24 = "plan_implemented" === message.kind;
    const closingContent = turnPresentation.closingContent;
    if (tmp24) {
      tmp24 = isNewest;
    }
    if (!(memo.steps.length > 0 || memo.tasks.length > 0)) {
      if (0 === turnPresentation.streamed.length) {
        if ("" === trimmed) {
          if (null == proposal) {
            if (null == found) {
              if (null == ideas) {
                if (null == items15) {
                  if (null == provisionalTodo) {
                    if (null == secretRequest) {
                      if (null == settingsRequest) {
                        if (null == attachments) {
                          if (null == clarification) {
                            if (!tmp24) {
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
    const tmp17Result4 = tmp17(onToggleChecklist[38]);
    const turnLeadsWithStretchResult = tmp17Result4.turnLeadsWithStretch(memo.steps.length > 0 || memo.tasks.length > 0, turnPresentation);
    const found1 = memo1.filter((hasWork) => hasWork.hasWork);
    const atResult = found1.at(-1);
    index = undefined;
    if (atResult != null) {
      index = atResult.index;
    }
    const tmp30 = !index(message);
    closure_12 = tmp30;
    const obj16 = { turnActive: tmp30 };
    const tmp17Result5 = tmp17(onToggleChecklist[24]);
    open = tmp17Result5.turnLifecycle(memo1, obj16).open;
    let avatarSpokenReplying = groupStart && null != replied;
    let tmp34Result = null;
    const tmp32 = closure_19;
    if (avatarSpokenReplying) {
      const obj17 = { replied, onJump: tmp37 };
      tmp37 = undefined;
      const tmp34 = closure_17;
      const tmp36 = checklistSuperseded(onToggleChecklist[11]);
      if (null != onJumpToReplied) {
        tmp37 = callback1;
      }
      tmp34Result = tmp34(tmp36, obj17);
    }
    const items11 = [tmp34Result, , ];
    const items12 = [, , ];
    ({ avatar: arr13[0], avatarSpoken: arr13[1] } = tmp);
    if (avatarSpokenReplying) {
      avatarSpokenReplying = tmp.avatarSpokenReplying;
    }
    const obj18 = { children: items11 };
    items12[2] = avatarSpokenReplying;
    const obj19 = { style: items12, children: closure_17(tmp17(onToggleChecklist[34]).VibegrationsConjureAvatar, {}) };
    items11[1] = closure_17(trimmed, obj19);
    const obj20 = { style: tmp.header, children: closure_17(tmp17(onToggleChecklist[34]).VibegrationsConjureHeader, obj21) };
    obj21 = { at: message.created_at };
    items11[2] = closure_17(trimmed, obj20);
    const tmp31Result = closure_18(tmp32, obj18);
    const obj22 = { style: items7, onLongPress: callback2, accessible: false, children: null };
    let tmp38Result = null;
    const tmp41 = memo1;
    if (turnLeadsWithStretchResult) {
      tmp38Result = null;
      if (groupStart) {
        const obj23 = { style: tmp.spoken, children: tmp31Result };
        tmp38Result = tmp38(tmp39, obj23);
      }
    }
    const items13 = [
      tmp38Result,
      memo1.map((prose, index) => {
          let VibegrationsRevealedMarkdown;
          let obj3;
          let steps;
          let tasks;
          let tmp6;
          let tmp16Result = null;
          const Fragment = react.Fragment;
          const tmp = authStore4;
          if (null != prose.prose) {
            tmp16Result = null;
            if (prose.prose.key !== c10) {
              const obj2 = { style: spoken.spoken, children: closure_17(VibegrationsRevealedMarkdown, obj3) };
              obj3 = { source: prose.prose.content, streaming: tmp6 };
              tmp6 = closure_12;
              VibegrationsRevealedMarkdown = VibegrationsNativeMarkdown.VibegrationsRevealedMarkdown;
              const tmp17 = metroImportAll;
              if (closure_12) {
                tmp6 = index === memo1.length - 1;
              }
              if (tmp6) {
                tmp6 = !prose.hasWork;
              }
              tmp16Result = tmp16(tmp17, obj2);
            }
          }
          const children = [tmp16Result, ];
          let tmp8Result = null;
          if (prose.hasWork) {
            const obj = { steps: steps.filter((segment) => segment.segment === index), tasks: tasks.filter((task) => task.task.segment === index) };
            steps = memo.steps;
            index = prose.index;
            tasks = memo.tasks;
            const tmp8 = closure_17;
            const tmp9 = closure_35;
            if (index === index) {
              let obj6;
              if (null != memo.turn) {
                obj6 = { turn: memo.turn };
                const obj4 = { turn: memo.turn };
              }
              const obj5 = { tree: obj, turnActive: prose.index === open };
              const merged = Object.assign(obj6);
              tmp8Result = tmp8(tmp9, obj5);
            }
            obj6 = {};
          }
          children[1] = tmp8Result;
          return tmp(Fragment, { children }, prose.key);
        }),
  ,

    ];
    if (!showsClosingMessage) {
      if (null == proposal) {
        if (null == clarification) {
          if (null == ideas) {
            if (null == secretRequest) {
              if (null == settingsRequest) {
                if (null == attachments) {
                  if (null == found) {
                    if (null == items15) {
                      let tmp31Result2;
                      if (null == provisionalTodo) {
                        tmp31Result2 = null;
                      }
                      items13[2] = tmp31Result2;
                      let tmp38Result13 = null;
                      if (null != activeAwaitingUserResult) {
                        const obj24 = { style: tmp.spoken, children: closure_17(Text2, obj25) };
                        obj25 = { variant: "text-xs/normal", color: "text-muted", children: intl2.string(checklistSuperseded(onToggleChecklist[16])["1LEnd8"]) };
                        Text2 = tmp17(tmp18[17]).Text;
                        intl2 = tmp17(tmp18[15]).intl;
                        tmp38Result13 = tmp38(tmp39, obj24);
                      }
                      items13[3] = tmp38Result13;
                      obj22.children = items13;
                      return closure_18(tmp41, obj22);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    let tmp44 = null;
    const obj26 = { style: tmp.spoken, children: items14 };
    if (groupStart) {
      tmp44 = null;
      if (!turnLeadsWithStretchResult) {
        tmp44 = tmp31Result;
      }
    }
    items14 = [tmp44, , , , , , , , , , , ];
    let tmp38Result14 = null;
    if (showsClosingMessage) {
      const obj27 = { source: closingContent };
      tmp38Result14 = tmp38(checklistSuperseded(tmp18[20]), obj27);
    }
    items14[1] = tmp38Result14;
    let tmp38Result15 = null;
    if ("side_reply" === message.kind) {
      const obj28 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(checklistSuperseded(onToggleChecklist[16]).OAjkIT) };
      const Text = tmp17(tmp18[17]).Text;
      intl = tmp17(tmp18[15]).intl;
      tmp38Result15 = tmp38(Text, obj28);
    }
    items14[2] = tmp38Result15;
    let tmp38Result16 = null;
    if (null != attachments) {
      const obj29 = { projectId, attachments };
      tmp38Result16 = tmp38(closure_30, obj29);
    }
    items14[3] = tmp38Result16;
    if (null != items15) {
      const obj30 = { style: tmp.surface, children: closure_17(tmp53, obj31) };
      tmp53 = checklistSuperseded(onToggleChecklist[39]);
      if (items15 == null) {
        items15 = [];
      }
      obj31 = { todos: items15, provisional: provisionalTodo, agents: memo3, live: tmp17Result6.checklistLive(message), superseded: checklistSuperseded, expanded: checklistExpanded, onToggleExpanded: callback };
      tmp17Result6 = tmp17(onToggleChecklist[40]);
      tmp38Result17 = tmp38(tmp39, obj30);
    } else {
      tmp38Result17 = null;
    }
    items14[4] = tmp38Result17;
    let tmp38Result18 = null;
    if (null != proposal) {
      const obj32 = { projectId, proposal, onApprove: tmp56 };
      tmp56 = undefined;
      const tmp55 = closure_28;
      if (isNewest) {
        tmp56 = onApprovePlan;
      }
      tmp38Result18 = tmp38(tmp55, obj32);
    }
    items14[5] = tmp38Result18;
    let tmp38Result19 = null;
    if (null != clarification) {
      const obj33 = { clarification, onSubmit: onAnswerClarification };
      tmp38Result19 = tmp38(checklistSuperseded(tmp18[41]), obj33);
    }
    items14[6] = tmp38Result19;
    let tmp38Result20 = null;
    if (null != secretRequest) {
      const obj34 = { projectId, request: secretRequest, awaiting: activeAwaitingUserResult };
      tmp38Result20 = tmp38(checklistSuperseded(tmp18[42]), obj34);
    }
    items14[7] = tmp38Result20;
    let tmp38Result21 = null;
    if (null != settingsRequest) {
      const obj35 = { projectId, request: settingsRequest };
      tmp38Result21 = tmp38(checklistSuperseded(tmp18[43]), obj35);
    }
    items14[8] = tmp38Result21;
    let tmp38Result22 = null;
    if (null != ideas) {
      const obj36 = { ideas, onPick: onPickIdea };
      tmp38Result22 = tmp38(closure_29, obj36);
    }
    items14[9] = tmp38Result22;
    let tmp38Result23 = null;
    if (tmp24) {
      const obj37 = { onAsk: onAskForIdeas };
      tmp38Result23 = tmp38(closure_31, obj37);
    }
    items14[10] = tmp38Result23;
    let tmp38Result24 = null;
    if (null != found) {
      tmp38Result24 = null;
      if ("message" in found) {
        const obj38 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
        tmp38Result24 = tmp38(tmp17(tmp18[17]).Text, obj38);
      }
    }
    items14[11] = tmp38Result24;
    tmp31Result2 = tmp31(tmp39, obj26);
  }
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let closure_3;
  let onJumpToReplied;
  let onPickIdea;
  let onToggleChecklist;
  let ref;
  let ref2;
  let ref3;
  let ref4;
  let state;
  let stateFromStores1;
  let tmp50;
  let tmp51;
  let tmp7;
  let tmp8;
  let tmp9;
  let tmp = projectId;
  let tmp2 = projectId;
  let tmp3 = stateFromStores1;
  let tmp4 = stateFromStores1;
  let obj = projectId(stateFromStores1[13]);
  const cResult = obj.c(196);
  projectId = projectId.projectId;
  let tmp6 = closure_26();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [AppStateStore];
    const fn = function s() {
      return "active" === state.getState();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp9 = items1;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8, tmp9] = cResult;
  }
  const tmp2Result = tmp2(tmp4[44]);
  const stateFromStores = tmp2Result.useStateFromStores(tmp7, tmp8, tmp9);
  const bottom = stateFromStores(tmp4[45])().bottom;
  if (cResult[3] === stateFromStores) {
    let tmp12;
    let tmp13;
    let tmp15;
    let tmp18;
    let tmp17;
    let tmp22;
    let tmp24;
    let tmp23;
    let tmp29;
    let tmp31;
    let tmp30;
    let tmp35;
    let tmp37;
    let tmp36;
    let tmp41;
    let tmp43;
    let tmp42;
    let tmp56;
    let tmp58;
    let tmp57;
    let tmp63;
    let tmp65;
    let tmp64;
    let tmp70;
    let tmp72;
    let tmp71;
    let tmp77;
    let tmp79;
    let tmp78;
    if (cResult[4] === projectId) {
      tmp12 = cResult[5];
      tmp13 = cResult[6];
    }
    const effect = react.useEffect(tmp12, tmp13);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [VibegrationsChatStore];
      cResult[7] = items2;
      tmp15 = items2;
    } else {
      tmp15 = cResult[7];
    }
    if (cResult[8] !== projectId) {
      class P {
        constructor() {
          return VibegrationsChatStore.getMessages(projectId);
        }
      }
      const items3 = [projectId];
      cResult[8] = projectId;
      cResult[9] = P;
      cResult[10] = items3;
      tmp18 = items3;
      tmp17 = P;
    } else {
      class P {
        constructor() {
          return VibegrationsChatStore.getMessages(projectId);
        }
      }
      tmp18 = cResult[10];
    }
    const tmp2Result11 = tmp2(tmp4[44]);
    stateFromStores1 = tmp2Result11.useStateFromStores(tmp15, tmp17, tmp18);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          return VibegrationsChatStore.getMessages(projectId);
        }
      }
      const items4 = [VibegrationsChatStore];
      cResult[11] = items4;
      tmp22 = items4;
    } else {
      class P {
        constructor() {
          return VibegrationsChatStore.getMessages(projectId);
        }
      }
    }
    if (cResult[12] !== projectId) {
      class P {
        constructor() {
          return VibegrationsChatStore.getMessages(projectId);
        }
      }
      const items5 = [projectId];
      cResult[12] = projectId;
      cResult[13] = tmp25;
      cResult[14] = items5;
      tmp24 = items5;
      tmp23 = tmp25;
    } else {
      class P {
        constructor() {
          return VibegrationsChatStore.getMessages(projectId);
        }
      }
      tmp24 = cResult[14];
    }
    const tmp2Result12 = tmp2(tmp4[44]);
    const stateFromStores2 = tmp2Result12.useStateFromStores(tmp22, tmp23, tmp24);
    const _Symbol3 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          return VibegrationsChatStore.getMessages(projectId);
        }
      }
      const items6 = [VibegrationsChatStore];
      cResult[15] = items6;
      tmp29 = items6;
    } else {
      class P {
        constructor() {
          return VibegrationsChatStore.getMessages(projectId);
        }
      }
    }
    if (cResult[16] !== projectId) {
      class N {
        constructor() {
          return VibegrationsChatStore.isCompacting(projectId);
        }
      }
      const items7 = [projectId];
      cResult[16] = projectId;
      cResult[17] = N;
      cResult[18] = items7;
      tmp31 = items7;
      tmp30 = N;
    } else {
      class N {
        constructor() {
          return VibegrationsChatStore.isCompacting(projectId);
        }
      }
      tmp31 = cResult[18];
    }
    const tmp2Result13 = tmp2(tmp4[44]);
    const stateFromStores3 = tmp2Result13.useStateFromStores(tmp29, tmp30, tmp31);
    class C {
      constructor() {
        const tmp = stateFromStores;
        if (tmp) {
          closure_12(projectId);
        }
      }
    }
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          return VibegrationsChatStore.isCompacting(projectId);
        }
      }
      const items8 = [VibegrationsChatStore];
      cResult[19] = items8;
      tmp35 = items8;
    } else {
      class N {
        constructor() {
          return VibegrationsChatStore.isCompacting(projectId);
        }
      }
    }
    if (cResult[20] !== projectId) {
      class X {
        constructor() {
          return VibegrationsChatStore.getThinkingActivity(projectId);
        }
      }
      const items9 = [projectId];
      cResult[20] = projectId;
      cResult[21] = X;
      cResult[22] = items9;
      tmp37 = items9;
      tmp36 = X;
    } else {
      class X {
        constructor() {
          return VibegrationsChatStore.getThinkingActivity(projectId);
        }
      }
      tmp37 = cResult[22];
    }
    const tmp2Result14 = tmp2(tmp4[44]);
    const stateFromStores4 = tmp2Result14.useStateFromStores(tmp35, tmp36, tmp37);
    const _Symbol4 = Symbol;
    if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor() {
          return VibegrationsChatStore.getThinkingActivity(projectId);
        }
      }
      const items10 = [VibegrationsChatStore];
      cResult[23] = items10;
      tmp41 = items10;
    } else {
      class X {
        constructor() {
          return VibegrationsChatStore.getThinkingActivity(projectId);
        }
      }
    }
    if (cResult[24] !== projectId) {
      class J {
        constructor() {
          return VibegrationsChatStore.getProjectUsage(projectId);
        }
      }
      const items11 = [projectId];
      cResult[24] = projectId;
      cResult[25] = J;
      cResult[26] = items11;
      tmp43 = items11;
      tmp42 = J;
    } else {
      class J {
        constructor() {
          return VibegrationsChatStore.getProjectUsage(projectId);
        }
      }
      tmp43 = cResult[26];
    }
    const tmp2Result15 = tmp2(tmp4[44]);
    const stateFromStores5 = tmp2Result15.useStateFromStores(tmp41, tmp42, tmp43);
    [tmp50, tmp51] = react.useState(null);
    _slicedToArray(react.useState(null), 2);
    _slicedToArray = tmp51;
    let tmp52 = null == tmp50;
    if (!tmp52) {
      class J {
        constructor() {
          return VibegrationsChatStore.getProjectUsage(projectId);
        }
      }
      tmp52 = tmp53;
    }
    if (!tmp52) {
      class J {
        constructor() {
          return VibegrationsChatStore.getProjectUsage(projectId);
        }
      }
    }
    if (cResult[27] !== projectId) {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
      cResult[27] = projectId;
      cResult[28] = Z;
    } else {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
    }
    const _Symbol5 = Symbol;
    if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
      const items12 = [VibegrationsConnectionStore];
      cResult[29] = items12;
      tmp56 = items12;
    } else {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
    }
    if (cResult[30] !== projectId) {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
      const items13 = [projectId];
      cResult[30] = projectId;
      cResult[31] = tmp59;
      cResult[32] = items13;
      tmp58 = items13;
      tmp57 = tmp59;
    } else {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
      tmp58 = cResult[32];
    }
    const tmp2Result16 = tmp2(tmp4[44]);
    const stateFromStores6 = tmp2Result16.useStateFromStores(tmp56, tmp57, tmp58);
    const _Symbol6 = Symbol;
    if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
      const items14 = [VibegrationsConnectionStore];
      cResult[33] = items14;
      tmp63 = items14;
    } else {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
    }
    if (cResult[34] !== projectId) {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
      const items15 = [projectId];
      cResult[34] = projectId;
      cResult[35] = tmp66;
      cResult[36] = items15;
      tmp65 = items15;
      tmp64 = tmp66;
    } else {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
      tmp65 = cResult[36];
    }
    const tmp2Result17 = tmp2(tmp4[44]);
    const stateFromStores7 = tmp2Result17.useStateFromStores(tmp63, tmp64, tmp65);
    const _Symbol7 = Symbol;
    if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
      const items16 = [VibegrationsChatStore];
      cResult[37] = items16;
      tmp70 = items16;
    } else {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
    }
    if (cResult[38] !== projectId) {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
      const items17 = [projectId];
      cResult[38] = projectId;
      cResult[39] = tmp73;
      cResult[40] = items17;
      tmp72 = items17;
      tmp71 = tmp73;
    } else {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
      tmp72 = cResult[40];
    }
    const tmp2Result18 = tmp2(tmp4[44]);
    const stateFromStores8 = tmp2Result18.useStateFromStores(tmp70, tmp71, tmp72);
    const _Symbol8 = Symbol;
    if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
      const items18 = [VibegrationsChatStore];
      cResult[41] = items18;
      tmp77 = items18;
    } else {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
    }
    if (cResult[42] !== projectId) {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
      const items19 = [projectId];
      cResult[42] = projectId;
      cResult[43] = tmp80;
      cResult[44] = items19;
      tmp79 = items19;
      tmp78 = tmp80;
    } else {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
      tmp79 = cResult[44];
    }
    const tmp2Result19 = tmp2(tmp4[44]);
    const stateFromStores9 = tmp2Result19.useStateFromStores(tmp77, tmp78, tmp79);
    if (cResult[45] === stateFromStores6) {
      class Z {
        constructor() {
          return closure_3((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          });
        }
      }
    }
    let obj2 = { historyLoaded: stateFromStores8, historyUnavailable: stateFromStores9, connState: stateFromStores6 };
    const tmp2Result20 = tmp2(tmp4[46]);
    cResult[45] = stateFromStores6;
    cResult[46] = stateFromStores8;
    cResult[47] = stateFromStores9;
    cResult[48] = tmp2Result20.chatEmptyState(obj2);
    const chatEmptyStateResult = tmp2Result20.chatEmptyState(obj2);
  }
  class C {
    constructor() {
      const tmp = stateFromStores;
      if (tmp) {
        closure_12(projectId);
      }
    }
  }
  const items20 = [stateFromStores, projectId];
  cResult[3] = stateFromStores;
  cResult[4] = projectId;
  cResult[5] = C;
  cResult[6] = items20;
  tmp13 = items20;
  tmp12 = C;
}) : ((projectId) => {
  let FlashList;
  let Text;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let _undefined5;
  let c17;
  let c18;
  let c23;
  let c29;
  let c6;
  let c7;
  let items42;
  let items43;
  let items44;
  let items45;
  let items46;
  let obj11;
  let obj13;
  let obj15;
  let obj17;
  let str2;
  let tmp14;
  let tmp15;
  let tmp2Result21;
  let tmp37;
  let tmp44;
  let tmp64;
  let tmp73Result;
  let tmp85;
  const f124591 = () => {
    map = new Map();
    return map;
  };
  projectId = projectId.projectId;
  let stateFromStores1;
  _slicedToArray = undefined;
  let render_id;
  set = undefined;
  c6 = undefined;
  c7 = undefined;
  let onToggleChecklist;
  let state;
  let closure_10;
  let onPickIdea;
  closure_12 = undefined;
  let closure_13;
  let closure_14;
  let memo;
  let memo1;
  c17 = undefined;
  c18 = undefined;
  let bound;
  let ref;
  fadingEdgeLength = undefined;
  let ref2;
  c23 = undefined;
  let ref3;
  let ref4;
  let callback2;
  closure_27 = undefined;
  let onJumpToReplied;
  c29 = undefined;
  let tmp = callback2();
  let tmp2 = projectId;
  let tmp3 = stateFromStores1;
  let obj = projectId(stateFromStores1[44]);
  items = [state];
  const stateFromStores = obj.useStateFromStores(items, () => "active" === state.getState(), []);
  let tmp5 = stateFromStores;
  let obj2 = render_id;
  const items1 = [stateFromStores, projectId];
  const bottom = stateFromStores(stateFromStores1[45])().bottom;
  const effect = render_id.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      closure_12(projectId);
    }
  }, items1);
  let tmp7 = closure_10;
  const items2 = [closure_10];
  const items3 = [projectId];
  const obj3 = projectId(stateFromStores1[44]);
  stateFromStores1 = obj3.useStateFromStores(items2, () => VibegrationsChatStore.getMessages(projectId), items3);
  const items4 = [closure_10];
  const items5 = [projectId];
  const obj4 = projectId(stateFromStores1[44]);
  const stateFromStores2 = obj4.useStateFromStores(items4, () => VibegrationsChatStore.isThinking(projectId), items5);
  const items6 = [closure_10];
  const items7 = [projectId];
  const obj5 = projectId(stateFromStores1[44]);
  const stateFromStores3 = obj5.useStateFromStores(items6, () => VibegrationsChatStore.isCompacting(projectId), items7);
  const items8 = [closure_10];
  const items9 = [projectId];
  const obj6 = projectId(stateFromStores1[44]);
  const stateFromStores4 = obj6.useStateFromStores(items8, () => VibegrationsChatStore.getThinkingActivity(projectId), items9);
  const items10 = [closure_10];
  const items11 = [projectId];
  const obj7 = projectId(stateFromStores1[44]);
  const stateFromStores5 = obj7.useStateFromStores(items10, () => VibegrationsChatStore.getProjectUsage(projectId), items11);
  let tmp12 = _slicedToArray;
  [tmp14, tmp15] = _slicedToArray(render_id.useState(null), 2);
  const tmp13 = _slicedToArray(render_id.useState(null), 2);
  _slicedToArray = tmp15;
  let tmp16 = null == tmp14;
  if (!tmp16) {
    tmp16 = stateFromStores2 && tmp14 === projectId;
  }
  if (!tmp16) {
    tmp15(null);
  }
  const items12 = [projectId];
  let tmp20 = stateFromStores2;
  const callback = obj2.useCallback(() => _undefined((arg0) => {
    let tmp = null;
    if (arg0 !== projectId) {
      tmp = projectId;
    }
    return tmp;
  }), items12);
  if (stateFromStores2) {
    tmp20 = tmp14 === projectId;
  }
  const items13 = [memo1];
  const items14 = [projectId];
  const tmp2Result = tmp2(tmp3[44]);
  const stateFromStores6 = tmp2Result.useStateFromStores(items13, () => VibegrationsConnectionStore.getConnState(projectId), items14);
  const items15 = [memo1];
  const items16 = [projectId];
  const tmp2Result12 = tmp2(tmp3[44]);
  const stateFromStores7 = tmp2Result12.useStateFromStores(items15, () => VibegrationsConnectionStore.isChatStopped(projectId), items16);
  const items17 = [tmp7];
  const items18 = [projectId];
  const tmp2Result13 = tmp2(tmp3[44]);
  const stateFromStores8 = tmp2Result13.useStateFromStores(items17, () => VibegrationsChatStore.hasLoadedHistory(projectId), items18);
  const items19 = [tmp7];
  const items20 = [projectId];
  const tmp2Result14 = tmp2(tmp3[44]);
  const stateFromStores9 = tmp2Result14.useStateFromStores(items19, () => VibegrationsChatStore.isHistoryUnavailable(projectId), items20);
  const tmp2Result15 = tmp2(tmp3[46]);
  const chatEmptyStateResult = tmp2Result15.chatEmptyState({ historyLoaded: stateFromStores8, historyUnavailable: stateFromStores9, connState: stateFromStores6 });
  render_id = null;
  if (stateFromStores1.length > 0) {
    render_id = stateFromStores1[stateFromStores1.length - 1].render_id;
  }
  const items21 = [stateFromStores1];
  set = obj2.useMemo(() => {
    const obj = VibegrationsTodoState;
    return obj.supersededChecklists(stateFromStores1);
  }, items21);
  [c6, c7] = tmp12(obj2.useState(f124591), 2);
  tmp12(obj2.useState(f124591), 2);
  onToggleChecklist = obj2.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined2((get) => {
      const obj = projectId(stateFromStores1[40]);
      return obj.toggleChecklist(get, closure_0, closure_1);
    });
  }, []);
  const items22 = [stateFromStores1];
  state = obj2.useMemo(() => {
    let obj = VibegrationsChatGrouping;
    return obj.groupChatRows(stateFromStores1.map((key) => {
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
  }, items22);
  const items23 = [projectId];
  closure_10 = obj2.useCallback(() => {
    const sendVibegrationsCardReply = vibegrationsAttachmentDrafts.sendVibegrationsCardReply;
    vibegrationsAttachmentDrafts;
    const intl = intl7.intl;
    const result = sendVibegrationsCardReply(projectId, intl.string(_modDef3718.ga8too));
  }, items23);
  const items24 = [projectId];
  onPickIdea = obj2.useCallback((implementation_prompt) => {
    const obj = vibegrationsAttachmentDrafts;
    const result = obj.sendVibegrationsCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items24);
  const items25 = [projectId];
  closure_12 = obj2.useCallback(() => {
    const intl = intl7.intl;
    memo(projectId, intl.string(_modDef3718["3sTTBu"]));
  }, items25);
  const items26 = [projectId];
  closure_13 = obj2.useCallback((implementation_prompt) => {
    const obj = vibegrationsAttachmentDrafts;
    const result = obj.sendVibegrationsCardReply(projectId, implementation_prompt);
  }, items26);
  let tmp29 = tmp28;
  if (!tmp29) {
    let str = "connecting";
    tmp29 = "connecting" === stateFromStores6;
  }
  if (tmp29) {
    tmp29 = !stateFromStores7;
  }
  closure_14 = tmp29;
  const items27 = [stateFromStores1];
  memo = obj2.useMemo(() => {
    let diff = stateFromStores1.length - 1;
    if (0 <= diff) {
      while (true) {
        let tmp3 = stateFromStores1[diff];
        if ("assistant" === tmp3.role) {
          if (!turnSettled(tmp3)) {
            break;
          }
        }
        diff = diff - 1;
      }
      return diff;
    }
    return null;
  }, items27);
  const items28 = [stateFromStores1, memo];
  memo1 = obj2.useMemo(() => {
    let tmp2;
    if (null != memo) {
      tmp2 = stateFromStores1[tmp];
    }
    let timelineTree = null;
    if (null != tmp2) {
      const obj = VibegrationsTimelineTree;
      timelineTree = obj.buildTimelineTree(tmp2.steps, { turnActive: true });
    }
    return timelineTree;
  }, items28);
  let tmp32 = null != memo1;
  if (tmp32) {
    tmp32 = memo1.steps.length > 0 || memo1.tasks.length > 0;
  }
  const items29 = [memo1];
  let memo2 = obj2.useMemo(() => {
    let currentStepResult;
    if (null != memo1) {
      const obj = VibegrationsTimelineTree;
      currentStepResult = obj.currentStep(tmp.steps);
    }
    let describeNodeResult = null;
    if (null != currentStepResult) {
      const obj2 = VibegrationsTimelineTree;
      describeNodeResult = obj2.describeNode(currentStepResult);
    }
    return describeNodeResult;
  }, items29);
  [obj13, c17] = tmp12(obj2.useState(null), 2);
  tmp12(obj2.useState(null), 2);
  [tmp37, c18] = tmp12(obj2.useState(64), 2);
  tmp12(obj2.useState(64), 2);
  const callback1 = obj2.useCallback((nativeEvent) => {
    let closure_0 = Math.round(nativeEvent.nativeEvent.layout.height);
    let tmp = _undefined4((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  bound = tmp37;
  const tmp2Result16 = tmp2(tmp3[28]);
  if (!tmp2Result16.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp37, fadingEdgeLength);
  }
  ref = obj2.useRef(null);
  fadingEdgeLength = obj2.useRef(null);
  ref2 = obj2.useRef(false);
  [tmp44, c23] = tmp12(obj2.useState(false), 2);
  tmp12(obj2.useState(false), 2);
  ref3 = obj2.useRef(null);
  ref4 = obj2.useRef(0);
  callback2 = obj2.useCallback(() => {
    const current = ref3.current;
    const current2 = ref.current;
    if (null != current) {
      const current3 = ref.current;
      let layout;
      if (current3 != null) {
        layout = current3.getLayout(current);
      }
    }
    let tmp5 = null != current2;
    const tmp4 = c23;
    if (tmp5) {
      tmp5 = null != tmp;
    }
    if (tmp5) {
      tmp5 = tmp.y >= current2.offsetY + current2.viewportHeight - ref4.current;
    }
    tmp4(tmp5);
  }, []);
  const items30 = [callback2];
  const items31 = [callback2];
  const callback3 = obj2.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    ref.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
    callback2();
  }, items30);
  const callback4 = obj2.useCallback((arg0, contentHeight) => {
    const current = ref.current;
    if (null != current) {
      let obj;
      if (current.contentHeight - current.offsetY - current.viewportHeight <= c20 * current.viewportHeight) {
        const obj2 = { contentHeight, offsetY: Math.max(0, contentHeight - current.viewportHeight) };
        const merged = Object.assign(current);
        const _Math = Math;
        obj = obj2;
      } else {
        obj = { contentHeight };
        const merged1 = Object.assign(current);
      }
      tmp.current = obj;
      if (ref2.current) {
        tmp9.current = false;
        const current2 = ref.current;
        if (current2 != null) {
          current2.scrollToEnd({ animated: true });
        }
      }
      callback2();
    }
  }, items31);
  const items32 = [callback2];
  const memo3 = obj2.useMemo(() => {
    const obj = { itemVisiblePercentThreshold: projectId(stateFromStores1[49]).MIN_VISIBLE_PERCENT };
    return obj;
  }, []);
  const callback5 = obj2.useCallback((viewableItems) => {
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
    _undefined3(set);
    callback2();
  }, items32);
  if (stateFromStores3) {
    const intl2 = tmp2(tmp3[15]).intl;
    memo2 = intl2.string(tmp5(tmp3[16])["0vH/5G"]);
  } else if (memo2 == null) {
    let intl = tmp2(tmp3[15]).intl;
    memo2 = intl.string(tmp5(tmp3[16]).QDGuNS);
  }
  const items33 = [stateFromStores1, memo];
  let tmp51;
  const memo4 = obj2.useMemo(() => {
    if (null == memo) {
      return null;
    } else if (null == stateFromStores1[tmp]) {
      return null;
    } else {
      const obj = VibegrationsTimelineTree;
      let latestTodosResult = obj.latestTodos(tmp3.steps);
      if (null == latestTodosResult) {
        let todos = null;
        if (null != stateFromStores1[tmp].todos) {
          todos = null;
          if (stateFromStores1[tmp].todos.length > 0) {
            todos = tmp3.todos;
          }
        }
        latestTodosResult = todos;
      }
      return latestTodosResult;
    }
  }, items33);
  if (null != memo) {
    tmp51 = stateFromStores1[memo];
  }
  let checklistLiveResult = null == tmp51;
  if (!checklistLiveResult) {
    const tmp2Result17 = tmp2(tmp3[40]);
    checklistLiveResult = tmp2Result17.checklistLive(tmp51);
  }
  let result;
  if (null != tmp51) {
    const tmp2Result18 = tmp2(tmp3[50]);
    result = tmp2Result18.vibegrationsTurnStartedAt(tmp51);
  }
  const items34 = [memo1];
  let tmp55;
  const memo5 = obj2.useMemo(() => {
    let runningTodoAgentsResult;
    if (null != memo1) {
      const obj = VibegrationsTodoAgents;
      runningTodoAgentsResult = obj.runningTodoAgents(tmp.tasks);
    } else {
      runningTodoAgentsResult = [];
    }
    return runningTodoAgentsResult;
  }, items34);
  if (null != memo) {
    let render_id1;
    if (stateFromStores1[memo] != null) {
      render_id1 = tmp56.render_id;
    }
    tmp55 = render_id1;
  }
  let tmp58 = null != tmp55;
  if (tmp58) {
    tmp58 = null != obj13 && !obj13.has(tmp55) || tmp44;
    null != obj13 && !obj13.has(tmp55) || tmp44;
  }
  let tmp60 = null;
  if (stateFromStores2) {
    tmp60 = null;
    if (tmp32) {
      tmp60 = null;
      if (tmp58) {
        tmp60 = memo2;
      }
    }
  }
  const items35 = [bound, memo, callback2];
  const effect1 = obj2.useEffect(() => {
    ref3.current = memo;
    ref4.current = bound;
    let closure_0 = requestAnimationFrame(callback2);
    return () => cancelAnimationFrame(closure_0);
  }, items35);
  const items36 = [stateFromStores1];
  closure_27 = obj2.useMemo(() => {
    map = new Map();
    const iter = stateFromStores1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if ("assistant" === nextResult.role) {
        if (null != tmp3.in_reply_to) {
          let obj2 = vibegrations_VibegrationsRepliedMessage;
          let repliedMessageResult = obj2.repliedMessage(stateFromStores1, tmp3.in_reply_to);
          if (null != repliedMessageResult) {
            let result = map.set(tmp3.render_id, tmp10);
          }
        }
      }
      continue;
    }
    return map;
  }, items36);
  const items37 = [stateFromStores1];
  onJumpToReplied = obj2.useCallback((arg0) => {
    let closure_0 = arg0;
    const findIndexResult = stateFromStores1.findIndex((id) => id.id === closure_0);
    if (findIndexResult >= 0) {
      const current = ref.current;
      if (current != null) {
        const obj = { index: findIndexResult, animated: true, viewPosition: 0.5 };
        current.scrollToIndex(obj);
      }
    }
  }, items37);
  const items38 = [bound, memo];
  const callback6 = obj2.useCallback(() => {
    if (null != memo) {
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items38);
  [tmp64, c29] = tmp12(obj2.useState(false), 2);
  const items39 = [projectId];
  tmp12(obj2.useState(false), 2);
  const effect2 = obj2.useEffect(() => {
    let closure_0;
    let timeout;
    let obj = projectId(stateFromStores1[52]);
    if (obj.shouldShowVibegrationsConjureTip(timeout)) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        const obj = projectId(stateFromStores1[52]);
        const result = obj.markVibegrationsConjureTipShown();
        _undefined5(true);
      }, 0);
      return () => clearTimeout(closure_0);
    }
  }, items39);
  const items40 = [projectId];
  const callback7 = obj2.useCallback(() => _undefined5(false), []);
  const items41 = [projectId];
  const callback8 = obj2.useCallback((arg0, arg1) => {
    ref2.current = true;
    memo(projectId, arg0, arg1);
  }, items40);
  let connectionLabelResult = null;
  const callback9 = obj2.useCallback(() => {
    authStore2(projectId);
  }, items41);
  if ("open" !== stateFromStores6) {
    const tmp2Result19 = tmp2(tmp3[53]);
    connectionLabelResult = tmp2Result19.connectionLabel(stateFromStores6);
  }
  const obj8 = { style: tmp.container, children: items42 };
  const tmp2Result20 = tmp2(tmp3[54]);
  const vibegrationsControlActive = tmp2Result20.useVibegrationsControlActive(projectId);
  items42 = [c17(tmp5(tmp3[55]), { thinking: stateFromStores2, bleedBottom: bottom }), , ];
  const obj9 = { style: tmp.transcriptArea, children: items45 };
  const obj10 = { clearance: tmp37, children: c17(FlashList, obj11) };
  obj11 = {
    ref,
    fadingEdgeLength,
    removeClippedSubviews: tmp2Result21.isIOS() && undefined,
    viewabilityConfig: memo3,
    onViewableItemsChanged: callback5,
    onScroll: callback3,
    onContentSizeChange: callback4,
    scrollEventThrottle: 16,
    pointerEvents: str2,
    style: items43,
    contentContainerStyle: items44,
    data: stateFromStores1,
    maintainVisibleContentPosition: obj15,
    keyExtractor(render_id) {
      return render_id.render_id;
    },
    ListEmptyComponent: tmp73Result,
    renderItem(arg0) {
      let flag;
      let index;
      let item;
      let obj2;
      let tmp4;
      let tmp5;
      let tmp6;
      ({ item, index } = arg0);
      const obj = { projectId, message: item, groupStart: flag, first: 0 === index, isNewest: item.render_id === render_id, checklistSuperseded: set.has(item.render_id), checklistExpanded: obj2.checklistExpanded(c6, item.render_id, set.has(item.render_id)), onToggleChecklist, replied: closure_27.get(item.render_id), onJumpToReplied, onApprovePlan: tmp4, onPickIdea, onAskForIdeas: tmp5, onAnswerClarification: tmp6 };
      flag = state[index];
      const tmp = closure_17;
      const tmp2 = closure_37;
      if (flag == null) {
        flag = true;
      }
      tmp4 = undefined;
      obj2 = VibegrationsTodoState;
      if (closure_14) {
        tmp4 = closure_10;
      }
      tmp5 = undefined;
      if (closure_14) {
        tmp5 = closure_12;
      }
      tmp6 = undefined;
      if (closure_14) {
        tmp6 = closure_13;
      }
      return tmp(tmp2, obj);
    }
  };
  FlashList = tmp2(tmp3[56]).FlashList;
  tmp2Result21 = tmp2(tmp3[28]);
  str2 = "auto";
  tmp2Result21.isIOS() && undefined;
  const tmp74 = closure_36;
  if (tmp64) {
    str2 = "none";
  }
  items43 = [tmp.transcript, tmp64 && tmp.transcriptDimmed, ];
  const tmp2Result22 = tmp2(tmp3[28]);
  let tmp77 = !tmp2Result22.isIOS();
  tmp2Result22.isIOS();
  if (tmp77) {
    tmp77 = { marginBottom: tmp37 - bound };
    const obj12 = { marginBottom: tmp37 - bound };
  }
  items43[2] = tmp77;
  items44 = [tmp.transcriptContent, { paddingBottom: bound + tmp5(tmp3[7]).space.PX_8 }];
  let tmp78 = "loading" === chatEmptyStateResult;
  tmp73Result = null;
  obj15 = { startRenderingFromBottom: true, autoscrollToBottomThreshold: ref };
  ({ paddingBottom: bound + tmp5(tmp3[7]).space.PX_8 });
  if (!tmp78) {
    let jTuX7C;
    const obj16 = { style: tmp.placeholder, children: c17(Text, obj17) };
    Text = tmp2(tmp3[17]).Text;
    const intl3 = tmp2(tmp3[15]).intl;
    const string = intl3.string;
    if ("unavailable" === chatEmptyStateResult) {
      jTuX7C = tmp5(tmp3[16]).s4oxNv;
    } else {
      jTuX7C = tmp5(tmp3[16]).jTuX7C;
    }
    obj17 = { variant: "text-sm/normal", color: "text-muted", children: string(jTuX7C) };
    tmp73Result = tmp73(tmp72, obj16);
  }
  items45 = [c17(tmp74, obj10), , ];
  let tmp73Result3 = null;
  if (tmp20) {
    const obj18 = { projectId };
    tmp73Result3 = tmp73(tmp5(tmp3[57]), obj18);
  }
  items45[1] = tmp73Result3;
  let tmp73Result4 = null;
  if (null != tmp60) {
    const obj19 = { line: tmp60, onJumpToActivity: callback6, bottom: tmp5(tmp3[7]).space.PX_12 + tmp37, todos: memo4, todosLive: checklistLiveResult, agents: memo5 };
    const tmp5Result = tmp5(tmp3[58]);
    tmp73Result4 = tmp73(tmp5Result, obj19);
  }
  items45[2] = tmp73Result4;
  items42[1] = c18(onToggleChecklist, obj9);
  const obj20 = { style: tmp.bottomStack, onLayout: callback1, children: items46 };
  const obj21 = { projectId, thinking: stateFromStores2, turnStartedAt: result, compacting: stateFromStores3, recalling: tmp78, activity: stateFromStores4, projectUsage: stateFromStores5, connLabel: connectionLabelResult, controlling: vibegrationsControlActive, connFailed: "failed" === stateFromStores6, thinkingOpen: tmp20, onToggleThinking: callback };
  const tmp5Result3 = tmp5(tmp3[59]);
  if (tmp78) {
    tmp78 = 0 === stateFromStores1.length;
  }
  items46 = [c17(tmp5Result3, obj21), ];
  const obj22 = { projectId, canSend: tmp29, running: stateFromStores2, stopped: stateFromStores7, onSend: callback8, onInterrupt: tmp85, tipOpen: tmp64, onDismissTip: callback7 };
  tmp85 = undefined;
  const tmp5Result4 = tmp5(tmp3[60]);
  if (stateFromStores2) {
    tmp85 = callback9;
  }
  items46[1] = c17(tmp5Result4, obj22);
  items42[2] = c18(onToggleChecklist, obj20);
  return c18(onToggleChecklist, obj8);
});
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeChat.tsx");

export default tmp8;
