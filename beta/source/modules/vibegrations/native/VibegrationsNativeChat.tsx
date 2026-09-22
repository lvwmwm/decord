// Module ID: 17023
// Function ID: 17024
// Name: VibegrationsNativeChat
// Dependencies: [32, 19, 17, 1983, 13365, 13364, 21, 580, 17024, 676, 4758, 17026, 558, 568, 17032, 1119, 3682, 4754, 5186, 4748, 17033, 5188, 5824, 4455, 17038, 17039, 17040, 17041, 1368, 5198, 5881, 17043, 16940, 17030, 17027, 17031, 16257, 17044, 17045, 17047, 17049, 504, 1616, 17050, 17051, 17052, 17053, 13182, 17054, 8995, 17057, 17059, 17060, 17061, 17063, 2]

// Module 17023 (VibegrationsNativeChat)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import _modDef676 from "module_676" /* 676 */;
import util from "util" /* 1119 */;
import _modDef3682 from "module_3682" /* 3682 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4748 */;
import Text_Text from "Text/Text" /* 4754 */;
import Stack_Stack from "Stack/Stack" /* 5186 */;
import components_Button_Button from "components/Button/Button" /* 5188 */;
import LinearGradientDefault from "LinearGradient" /* 5198 */;
import _modDef5881 from "module_5881" /* 5881 */;
import VibegrationsDesignFeedback from "VibegrationsDesignFeedback" /* 16940 */;
import VibegrationsNativeStatusLineDefault from "VibegrationsNativeStatusLine" /* 17024 */;
import VibegrationsMessageActionSheet from "VibegrationsMessageActionSheet" /* 17030 */;
import useVibegrationsPlanDesign from "useVibegrationsPlanDesign" /* 17032 */;
import VibegrationsNativeMarkdown from "VibegrationsNativeMarkdown" /* 17033 */;
import VibegrationsTimelineTree from "VibegrationsTimelineTree" /* 17038 */;
import VibegrationsSubagentMark from "VibegrationsSubagentMark" /* 17041 */;
import VibegrationsTodoAgents from "VibegrationsTodoAgents" /* 17043 */;
import VibegrationsChatGrouping from "VibegrationsChatGrouping" /* 17050 */;
import vibegrations_VibegrationsRepliedMessage from "vibegrations/VibegrationsRepliedMessage" /* 17052 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1983 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 13365 */;
import VibegrationsConnectionStore_mod from "VibegrationsConnectionStore" /* 13364 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, Image: metroRequire, Pressable: closure_7, View: closure_8 } = get_ActivityIndicator);
let turnSettled = fn(13365).turnSettled;
let VibegrationsConnectionStore = fn(13364);
({ ensureConnection: closure_12, getAttachmentUrl: map1, interruptTurn: closure_14, sendUserMessage: closure_15 } = VibegrationsConnectionStore);
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
let diff = fn(17024).MESSAGE_CONTENT_INSET - fn(17024).MESSAGE_EDGE_INSET;
let c20 = 0.2;
let c21 = 52;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let items = [BLACK, , ];
let obj2 = _modDef676(BLACK);
items[1] = _modDef676(BLACK).alpha(0.2).css();
items[2] = "transparent";
const locations = [0, 0.4, 1];
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const createStyles = fn(4758);
let obj = { container: { flex: 1 }, transcript: { flex: 1 }, maskSolid: { flex: 1, backgroundColor: BLACK }, maskFade: { height: 52 }, transcriptArea: { flex: 1, position: "relative" }, transcriptContent: null, bottomStack: null, row: null, rowGroupStart: null, avatar: null, spoken: null, spokenAfterWork: null, avatarSpoken: null, avatarSpokenReplying: null, header: null, surface: null, designImage: null, designPlaceholder: null, ideaCards: null, activityBox: null, activityDetail: null, stepDetail: null, attachmentPills: null, attachmentPill: null, ideasOffer: null, ideasOfferHint: null, placeholder: null };
const alphaResult = _modDef676(BLACK).alpha(0.2);
obj.transcriptContent = { paddingTop: nativeDefault.space.PX_8 };
obj.bottomStack = { position: "absolute", left: 0, right: 0, bottom: 0 };
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj.row = { position: "relative", paddingLeft: fn(17024).MESSAGE_CONTENT_INSET, paddingRight: fn(17024).MESSAGE_EDGE_INSET, paddingVertical: 2, gap: PX_8 };
obj.rowGroupStart = { marginTop: nativeDefault.space.PX_12 };
const rect = { position: "absolute", left: fn(17024).MESSAGE_EDGE_INSET, top: 2 };
obj.avatar = rect;
obj.spoken = { position: "relative", gap: PX_8 };
obj.spokenAfterWork = { marginTop: PX_8 };
const rect1 = { left: fn(17024).MESSAGE_EDGE_INSET - fn(17024).MESSAGE_CONTENT_INSET, top: 0 };
obj.avatarSpoken = rect1;
let obj5 = { position: "relative", paddingLeft: fn(17024).MESSAGE_CONTENT_INSET, paddingRight: fn(17024).MESSAGE_EDGE_INSET, paddingVertical: 2, gap: PX_8 };
obj.avatarSpokenReplying = { top: fn(17026).REPLY_PREVIEW_HEIGHT + PX_8 };
let obj6 = { top: fn(17026).REPLY_PREVIEW_HEIGHT + PX_8 };
obj.header = { marginBottom: -nativeDefault.space.PX_4 };
let obj7 = { marginBottom: -nativeDefault.space.PX_4 };
obj.surface = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12 };
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12 };
obj.designImage = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj9 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj.designPlaceholder = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
obj.ideaCards = { gap: PX_8 };
obj.activityBox = { marginLeft: -diff };
obj.activityDetail = { paddingLeft: diff };
let obj10 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
obj.stepDetail = { marginTop: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_12, borderLeftWidth: 2, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, gap: 2 };
let obj11 = { marginTop: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_12, borderLeftWidth: 2, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, gap: 2 };
obj.attachmentPills = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj12 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj.attachmentPill = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
obj.ideasOffer = { flexDirection: "row", alignItems: "center", gap: PX_8 };
obj.ideasOfferHint = { flexShrink: 1 };
let obj13 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
obj.placeholder = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
let closure_26 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ projectId, design } = arg0);
  let designPlaceholder = closure_26();
  const vibegrationsPlanDesign = useVibegrationsPlanDesign.useVibegrationsPlanDesign(projectId, design.id);
  ({ src, handleError } = vibegrationsPlanDesign);
  if (vibegrationsPlanDesign.gone) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1119).intl;
      const stringResult = intl.string(_modDef3682.FW8UcU);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl2 = tmp(1119).intl;
      obj3.children = intl2.string(_modDef3682["9W8SbY"]);
      const tmp12 = constants(tmp(4754).Text, obj3);
      cResult[1] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[1];
    }
    if (cResult[2] === handleError) {
      if (cResult[3] === src) {
        if (cResult[4] === designPlaceholder.designImage) {
          if (cResult[5] === designPlaceholder.designPlaceholder) {
            return cResult[6];
          }
        }
      }
    }
    items = [tmp9, ];
    if (null == src) {
      const obj4 = { style: designPlaceholder.designPlaceholder, children: null };
      const obj5 = { size: "small", accessibilityLabel: first };
      obj4.children = constants(hasOwnProperty, obj5);
      let tmp17 = constants(closure_1_8, obj4);
    } else {
      const obj6 = { source: null, style: null, resizeMode: "cover", onError: null, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
      const obj7 = { uri: src };
      obj6.source = obj7;
      obj6.style = designPlaceholder.designImage;
      obj6.onError = handleError;
      obj6.accessibilityLabel = first;
      tmp17 = constants(timestampProducer, obj6);
    }
    const obj8 = { direction: "vertical", spacing: 4, children: null };
    items[1] = tmp17;
    obj8.children = items;
    const tmp13Result = collapsedCategories(tmp(5186).Stack, obj8);
    cResult[2] = handleError;
    cResult[3] = src;
    src = designPlaceholder.designImage;
    cResult[4] = src;
    designPlaceholder = designPlaceholder.designPlaceholder;
    cResult[5] = designPlaceholder;
    cResult[6] = tmp13Result;
  }
}) : ((arg0) => {
  ({ projectId, design } = arg0);
  const tmp = closure_26();
  const vibegrationsPlanDesign = useVibegrationsPlanDesign.useVibegrationsPlanDesign(projectId, design.id);
  const src = vibegrationsPlanDesign.src;
  if (vibegrationsPlanDesign.gone) {
    return null;
  } else {
    const intl = tmp2(1119).intl;
    const stringResult = intl.string(_modDef3682.FW8UcU);
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl2 = tmp2(1119).intl;
    obj2.children = intl2.string(_modDef3682["9W8SbY"]);
    items = [constants(tmp2(4754).Text, obj2), ];
    if (null == src) {
      const obj3 = { style: tmp.designPlaceholder, children: null };
      const obj4 = { size: "small", accessibilityLabel: stringResult };
      obj3.children = tmp9(hasOwnProperty, obj4);
      let tmp9Result = tmp9(closure_1_8, obj3);
    } else {
      const obj5 = { source: null, style: null, resizeMode: "cover", onError: null, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
      const obj6 = { uri: src };
      obj5.source = obj6;
      obj5.style = tmp.designImage;
      obj5.onError = tmp5;
      obj5.accessibilityLabel = stringResult;
      tmp9Result = tmp9(timestampProducer, obj5);
    }
    const obj7 = { direction: "vertical", spacing: 4, children: null };
    items[1] = tmp9Result;
    obj7.children = items;
    return collapsedCategories(tmp2(5186).Stack, obj7);
  }
});
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(53);
  ({ projectId, proposal, actionable, onApprove } = arg0);
  let str = closure_26();
  if (cResult[0] === proposal.bot_permissions) {
    if (cResult[1] === proposal.privileged_intents) {
      if (cResult[2] === proposal.summary) {
        if (cResult[3] === str.surface) {
          if (cResult[21] === cResult[4]) {
            if (cResult[22] === tmp7) {
              if (cResult[23] === tmp8) {
                if (cResult[24] === tmp9) {
                  let tmp27 = cResult[25];
                }
                if (cResult[26] === projectId) {
                  if (cResult[27] === proposal.design_image) {
                    let tmp30 = cResult[28];
                  }
                  if (cResult[29] !== proposal.changes) {
                    let tmp35 = null;
                    if (proposal.changes.length > 0) {
                      const obj2 = { direction: "vertical", spacing: 4, children: null };
                      const obj4 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                      const intl3 = tmp(1119).intl;
                      obj4.children = intl3.string(_modDef3682.KLyB8Y);
                      items = [constants(tmp(4754).Text, obj4), ];
                      const changes = proposal.changes;
                      items[1] = changes.map((item, index) => closure_1_17(require("Text/Text").Text, { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item }, index));
                      obj2.children = items;
                      tmp35 = collapsedCategories(tmp(5186).Stack, obj2);
                    }
                    cResult[29] = proposal.changes;
                    cResult[30] = tmp35;
                    let tmp34 = tmp35;
                  } else {
                    tmp34 = cResult[30];
                  }
                  if (cResult[31] !== arr2) {
                    let tmp40 = null;
                    if (arr2.length > 0) {
                      const obj5 = { direction: "vertical", spacing: 4, children: null };
                      const obj6 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                      const intl4 = tmp(1119).intl;
                      obj6.children = intl4.string(_modDef3682.ieqTtP);
                      const items1 = [constants(tmp(4754).Text, obj6), ];
                      const obj7 = { variant: "text-sm/normal", color: "text-default", children: arr2.join(", ") };
                      items1[1] = constants(tmp(4754).Text, obj7);
                      obj5.children = items1;
                      tmp40 = collapsedCategories(tmp(5186).Stack, obj5);
                    }
                    cResult[31] = arr2;
                    cResult[32] = tmp40;
                    let tmp39 = tmp40;
                  } else {
                    tmp39 = cResult[32];
                  }
                  if (cResult[33] !== arr) {
                    let tmp45 = null;
                    if (arr.length > 0) {
                      const obj8 = { direction: "vertical", spacing: 4, children: null };
                      const obj9 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                      const intl5 = tmp(1119).intl;
                      obj9.children = intl5.string(_modDef3682.Cn9qix);
                      const items2 = [constants(tmp(4754).Text, obj9), ];
                      const obj10 = { variant: "text-sm/normal", color: "text-default", children: arr.join(", ") };
                      items2[1] = constants(tmp(4754).Text, obj10);
                      obj8.children = items2;
                      tmp45 = collapsedCategories(tmp(5186).Stack, obj8);
                    }
                    cResult[33] = arr;
                    cResult[34] = tmp45;
                    let tmp44 = tmp45;
                  } else {
                    tmp44 = cResult[34];
                  }
                  if (cResult[35] === actionable) {
                    if (cResult[36] === onApprove) {
                      let tmp49 = cResult[37];
                    }
                    if (cResult[38] === tmp5) {
                      if (cResult[39] === tmp34) {
                        if (cResult[40] === tmp39) {
                          if (cResult[41] === tmp44) {
                            if (cResult[42] === tmp49) {
                              if (cResult[43] === tmp10) {
                                if (cResult[44] === tmp11) {
                                  if (cResult[45] === tmp12) {
                                    if (cResult[46] === tmp27) {
                                      if (cResult[47] === tmp30) {
                                        let tmp53 = cResult[48];
                                      }
                                      if (cResult[49] === tmp6) {
                                        if (cResult[50] === tmp53) {
                                          if (cResult[51] === tmp13) {
                                            let tmp56 = cResult[52];
                                          }
                                          return tmp56;
                                        }
                                      }
                                      const obj11 = { style: tmp13, children: tmp53 };
                                      const tmp58 = constants(tmp6, obj11);
                                      cResult[49] = tmp6;
                                      cResult[50] = tmp53;
                                      cResult[51] = tmp13;
                                      cResult[52] = tmp58;
                                      tmp56 = tmp58;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj12 = { direction: tmp10, spacing: tmp11, children: null };
                    const items3 = [tmp12, tmp27, tmp30, tmp34, tmp39, tmp44, tmp49];
                    obj12.children = items3;
                    const tmp55 = collapsedCategories(tmp5, obj12);
                    cResult[38] = tmp5;
                    cResult[39] = tmp34;
                    cResult[40] = tmp39;
                    cResult[41] = tmp44;
                    cResult[42] = tmp49;
                    cResult[43] = tmp10;
                    cResult[44] = tmp11;
                    cResult[45] = tmp12;
                    cResult[46] = tmp27;
                    cResult[47] = tmp30;
                    cResult[48] = tmp55;
                    tmp53 = tmp55;
                  }
                  let tmp50 = null;
                  if (actionable) {
                    const obj13 = { text: null, variant: "primary", onPress: null };
                    const intl6 = tmp(1119).intl;
                    obj13.text = intl6.string(_modDef3682.GYoWRk);
                    obj13.onPress = onApprove;
                    tmp50 = constants(tmp(5188).Button, obj13);
                  }
                  cResult[35] = actionable;
                  cResult[36] = onApprove;
                  cResult[37] = tmp50;
                  tmp49 = tmp50;
                }
                let tmp31 = null;
                if (null != proposal.design_image) {
                  const obj14 = { projectId, design: proposal.design_image };
                  tmp31 = constants(closure_27, obj14);
                }
                cResult[26] = projectId;
                cResult[27] = proposal.design_image;
                cResult[28] = tmp31;
                tmp30 = tmp31;
              }
            }
          }
          const obj15 = { variant: cResult[9], color: cResult[10], children: cResult[11] };
          const tmp29 = constants(cResult[4], obj15);
          cResult[21] = cResult[4];
          cResult[22] = cResult[9];
          cResult[23] = cResult[10];
          cResult[24] = cResult[11];
          cResult[25] = tmp29;
          tmp27 = tmp29;
        }
      }
    }
  }
  const trimmed = proposal.summary.trim();
  if (cResult[16] !== proposal.bot_permissions) {
    let bot_permissions = proposal.bot_permissions;
    if (bot_permissions == null) {
      bot_permissions = [];
    }
    cResult[16] = proposal.bot_permissions;
    cResult[17] = bot_permissions;
    let tmp15 = bot_permissions;
  } else {
    tmp15 = cResult[17];
  }
  if (cResult[18] !== proposal.privileged_intents) {
    let privileged_intents = proposal.privileged_intents;
    if (privileged_intents == null) {
      privileged_intents = [];
    }
    cResult[18] = proposal.privileged_intents;
    cResult[19] = privileged_intents;
    let tmp17 = privileged_intents;
  } else {
    tmp17 = cResult[19];
  }
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    const obj16 = { variant: "heading-md/bold", color: "text-default", children: null };
    const intl = tmp(1119).intl;
    obj16.children = intl.string(_modDef3682["60htw+"]);
    const tmp23 = constants(tmp(4754).Text, obj16);
    cResult[20] = tmp23;
    let tmp20 = tmp23;
  } else {
    tmp20 = cResult[20];
  }
  if ("" === trimmed) {
    const intl2 = tmp(1119).intl;
    let stringResult = intl2.string(_modDef3682.IHCafX);
  } else {
    stringResult = MarkupUtilsDefault.parse(trimmed, true, tmp(17033).VIBEGRATIONS_MARKUP_OPTIONS);
  }
  cResult[0] = proposal.bot_permissions;
  cResult[1] = proposal.privileged_intents;
  cResult[2] = proposal.summary;
  cResult[3] = str.surface;
  cResult[4] = Text_Text.Text;
  cResult[5] = Stack_Stack.Stack;
  cResult[6] = closure_1_8;
  cResult[7] = tmp17;
  cResult[8] = tmp15;
  str = "text-md/normal";
  cResult[9] = "text-md/normal";
  cResult[10] = "text-default";
  cResult[11] = stringResult;
  cResult[12] = "vertical";
  cResult[13] = 8;
  cResult[14] = tmp20;
  cResult[15] = str.surface;
}) : ((proposal) => {
  proposal = proposal.proposal;
  ({ projectId, actionable, onApprove } = proposal);
  const trimmed = proposal.summary.trim();
  let bot_permissions = proposal.bot_permissions;
  if (bot_permissions == null) {
    bot_permissions = [];
  }
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  const obj = { style: closure_26().surface, children: null };
  const obj2 = { variant: "heading-md/bold", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3682["60htw+"]);
  items = [constants(Text_Text.Text, obj2), , , , , , ];
  if ("" === trimmed) {
    const intl2 = tmp6(1119).intl;
    let stringResult = intl2.string(tmp8(3682).IHCafX);
  } else {
    stringResult = tmp8(4748).parse(trimmed, true, tmp6(17033).VIBEGRATIONS_MARKUP_OPTIONS);
    const tmp8Result = tmp8(4748);
  }
  items[1] = constants(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children: stringResult });
  let tmp3Result = null;
  if (null != proposal.design_image) {
    const obj3 = { projectId, design: proposal.design_image };
    tmp3Result = tmp3(closure_27, obj3);
  }
  items[2] = tmp3Result;
  let tmp5Result = null;
  if (proposal.changes.length > 0) {
    const obj4 = { direction: "vertical", spacing: 4, children: null };
    const obj5 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl3 = tmp6(1119).intl;
    obj5.children = intl3.string(tmp8(3682).KLyB8Y);
    const items1 = [tmp3(tmp6(4754).Text, obj5), ];
    const changes = proposal.changes;
    items1[1] = changes.map((item, index) => closure_1_17(require("Text/Text").Text, { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item }, index));
    obj4.children = items1;
    tmp5Result = tmp5(tmp6(5186).Stack, obj4);
  }
  items[3] = tmp5Result;
  let tmp5Result3 = null;
  if (bot_permissions.length > 0) {
    const obj6 = { direction: "vertical", spacing: 4, children: null };
    const obj7 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl4 = tmp6(1119).intl;
    obj7.children = intl4.string(tmp8(3682).ieqTtP);
    const items2 = [tmp3(tmp6(4754).Text, obj7), ];
    const obj8 = { variant: "text-sm/normal", color: "text-default", children: bot_permissions.join(", ") };
    items2[1] = tmp3(tmp6(4754).Text, obj8);
    obj6.children = items2;
    tmp5Result3 = tmp5(tmp6(5186).Stack, obj6);
  }
  items[4] = tmp5Result3;
  let tmp5Result4 = null;
  if (privileged_intents.length > 0) {
    const obj9 = { direction: "vertical", spacing: 4, children: null };
    const obj10 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl5 = tmp6(1119).intl;
    obj10.children = intl5.string(tmp8(3682).Cn9qix);
    const items3 = [tmp3(tmp6(4754).Text, obj10), ];
    const obj11 = { variant: "text-sm/normal", color: "text-default", children: privileged_intents.join(", ") };
    items3[1] = tmp3(tmp6(4754).Text, obj11);
    obj9.children = items3;
    tmp5Result4 = tmp5(tmp6(5186).Stack, obj9);
  }
  items[5] = tmp5Result4;
  let tmp3Result2 = null;
  if (actionable) {
    const obj12 = { text: null, variant: "primary", onPress: null };
    const intl6 = tmp6(1119).intl;
    obj12.text = intl6.string(tmp8(3682).GYoWRk);
    obj12.onPress = onApprove;
    tmp3Result2 = tmp3(tmp6(5188).Button, obj12);
  }
  items[6] = tmp3Result2;
  obj.children = collapsedCategories(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items });
  return constants(closure_1_8, obj);
});
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = onPick(568).c(9);
  ({ ideas, onPick } = arg0);
  const tmp4 = closure_26();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    let intl = tmp(1119).intl;
    obj2.children = intl.string(_modDef3682.DAvYsi);
    const tmp8 = closure_17(tmp(4754).Text, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === ideas) {
    if (cResult[2] === onPick) {
      if (cResult[6] === tmp4.ideaCards) {
        if (cResult[7] === tmp9) {
          let tmp12 = cResult[8];
        }
        return tmp12;
      }
      const obj3 = { style: tmp4.ideaCards, children: null };
      items = [first, cResult[3]];
      obj3.children = items;
      const tmp15 = closure_18(closure_8, obj3);
      cResult[6] = tmp4.ideaCards;
      cResult[7] = cResult[3];
      cResult[8] = tmp15;
      tmp12 = tmp15;
    }
  }
  if (cResult[4] !== onPick) {
    const fn = function i(title) {
      closure_0 = title;
      const obj = {
        onPress() {
          return onPick(closure_0);
        },
        accessibilityLabel: null,
        children: null
      };
      const intl = onPick(1119).intl;
      obj.accessibilityLabel = intl.formatToPlainString(_modDef3682.pztRGi, { title: title.title });
      items = [closure_1_17(onPick(4754).Text, { variant: "text-md/semibold", color: "text-default", children: title.title }), ];
      let tmpResult = null;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = tmp(onPick(4754).Text, obj4);
      }
      items[1] = tmpResult;
      obj.children = closure_1_18(onPick(5186).Stack, { direction: "vertical", spacing: 4, children: items });
      return closure_1_17(onPick(5824).Card, obj, title.id);
    };
    cResult[4] = onPick;
    cResult[5] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[5];
  }
  const mapped = ideas.map(tmp10);
  cResult[1] = ideas;
  cResult[2] = onPick;
  cResult[3] = mapped;
}) : ((arg0) => {
  ({ ideas, onPick: require } = arg0);
  let obj = { style: closure_26().ideaCards, children: null };
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
  let intl = util.intl;
  obj2.children = intl.string(_modDef3682.DAvYsi);
  items = [
    closure_17(Text_Text.Text, obj2),
    ideas.map((title) => {
      closure_0 = title;
      const obj = {
        onPress() {
          return _require(closure_0);
        },
        accessibilityLabel: null,
        children: null
      };
      const intl = require("util").intl;
      obj.accessibilityLabel = intl.formatToPlainString(_modDef3682.pztRGi, { title: title.title });
      items = [closure_1_17(require("Text/Text").Text, { variant: "text-md/semibold", color: "text-default", children: title.title }), ];
      let tmpResult = null;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = tmp(require("Text/Text").Text, obj4);
      }
      items[1] = tmpResult;
      obj.children = closure_1_18(require("Stack/Stack").Stack, { direction: "vertical", spacing: 4, children: items });
      return closure_1_17(require("Card").Card, obj, title.id);
    })
  ];
  obj.children = items;
  return closure_18(closure_8, obj);
});
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = projectId(attachmentPill[13]).c(12);
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp2 = closure_26();
  closure_1 = tmp2;
  if (cResult[0] !== projectId) {
    const fn = function n(arg0) {
      const promise = __initData2(projectId, arg0);
      __initData2(projectId, arg0).then((result) => closure_1_1(attachmentPill[23]).openURL(result)).catch(() => {

      });
    };
    cResult[0] = projectId;
    cResult[1] = fn;
    attachmentPill = fn;
  } else {
    attachmentPill = cResult[1];
  }
  if (cResult[2] === attachments) {
    if (cResult[3] === attachmentPill) {
      if (cResult[4] === tmp2.attachmentPill) {
        if (cResult[9] === tmp2.attachmentPills) {
          if (cResult[10] === tmp4) {
            let tmp8 = cResult[11];
          }
          return tmp8;
        }
        let obj2 = { style: tmp3, children: cResult[5] };
        const tmp11 = closure_17(closure_8, obj2);
        cResult[9] = tmp2.attachmentPills;
        cResult[10] = cResult[5];
        cResult[11] = tmp11;
        tmp8 = tmp11;
      }
    }
  }
  if (cResult[6] === attachmentPill) {
    if (cResult[7] === tmp2.attachmentPill) {
      let tmp5 = cResult[8];
    }
    const mapped = attachments.map(tmp5);
    cResult[2] = attachments;
    cResult[3] = attachmentPill;
    attachmentPill = tmp2.attachmentPill;
    cResult[4] = attachmentPill;
    cResult[5] = mapped;
  }
  const fn2 = function p(id, arg1) {
    if (null != id.id) {
      const obj = {
        style: closure_1.attachmentPill,
        onPress() {
            return attachmentPill(id.id);
          },
        accessibilityLabel: null,
        children: null
      };
      const intl = projectId(attachmentPill[15]).intl;
      const obj2 = { name: id.name };
      obj.accessibilityLabel = intl.formatToPlainString(closure_1(attachmentPill[16]).QUFLUq, obj2);
      const obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
      obj.children = closure_1_17(projectId(attachmentPill[17]).Text, obj3);
      let tmp12 = closure_1_17(projectId(attachmentPill[22]).Card, obj, id.id);
    } else {
      const obj4 = { style: closure_1.attachmentPill, children: null };
      const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl2 = projectId(attachmentPill[15]).intl;
      const obj6 = { name: id.name };
      obj5.children = intl2.formatToPlainString(closure_1(attachmentPill[16]).OBr7WW, obj6);
      obj4.children = closure_1_17(projectId(attachmentPill[17]).Text, obj5);
      const _HermesInternal = HermesInternal;
      tmp12 = closure_1_17(closure_1_8, obj4, "" + id.name + "-" + arg1);
    }
    return tmp12;
  };
  cResult[6] = attachmentPill;
  cResult[7] = tmp2.attachmentPill;
  cResult[8] = fn2;
  tmp5 = fn2;
}) : ((projectId) => {
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp = closure_26();
  closure_1 = tmp;
  items = [projectId];
  dependencyMap = noop.useCallback((arg0) => {
    const promise = __initData2(projectId, arg0);
    __initData2(projectId, arg0).then((result) => closure_1_1(dependencyMap[23]).openURL(result)).catch(() => {

    });
  }, items);
  return closure_17(closure_8, {
    style: tmp.attachmentPills,
    children: attachments.map((id, index) => {
      if (null != id.id) {
        const obj = {
          style: closure_1.attachmentPill,
          onPress() {
              return closure_2(id.id);
            },
          accessibilityLabel: null,
          children: null
        };
        const intl = projectId(1119).intl;
        const obj2 = { name: id.name };
        obj.accessibilityLabel = intl.formatToPlainString(closure_1(3682).QUFLUq, obj2);
        const obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
        obj.children = closure_1_17(projectId(4754).Text, obj3);
        let tmp12 = closure_1_17(projectId(5824).Card, obj, id.id);
      } else {
        const obj4 = { style: closure_1.attachmentPill, children: null };
        const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
        const intl2 = projectId(1119).intl;
        const obj6 = { name: id.name };
        obj5.children = intl2.formatToPlainString(closure_1(3682).OBr7WW, obj6);
        obj4.children = closure_1_17(projectId(4754).Text, obj5);
        const _HermesInternal = HermesInternal;
        tmp12 = closure_1_17(closure_1_8, obj4, "" + id.name + "-" + index);
      }
      return tmp12;
    })
  });
});
ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? ((onAsk) => {
  const cResult = c.c(11);
  onAsk = onAsk.onAsk;
  const tmp4 = closure_26();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl = tmp(1119).intl;
    obj2.children = intl.string(_modDef3682.tG5PBo);
    const tmp8 = constants(tmp(4754).Text, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.ideasOfferHint) {
    const obj3 = { style: tmp4.ideasOfferHint, children: first };
    const tmp12 = constants(closure_1_8, obj3);
    cResult[1] = tmp4.ideasOfferHint;
    cResult[2] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1119).intl;
    const stringResult = intl2.string(_modDef3682.cwTe5o);
    cResult[3] = stringResult;
    let tmp14 = stringResult;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] === onAsk) {
    if (cResult[5] === tmp13) {
      let tmp17 = cResult[6];
    }
    if (cResult[7] === tmp4.ideasOffer) {
      if (cResult[8] === tmp9) {
        if (cResult[9] === tmp17) {
          let tmp19 = cResult[10];
        }
        return tmp19;
      }
    }
    const obj4 = { style: tmp4.ideasOffer, children: null };
    items = [tmp9, tmp17];
    obj4.children = items;
    const tmp22 = collapsedCategories(closure_1_8, obj4);
    cResult[7] = tmp4.ideasOffer;
    cResult[8] = tmp9;
    cResult[9] = tmp17;
    cResult[10] = tmp22;
    tmp19 = tmp22;
  }
  const tmp18 = constants(components_Button_Button.Button, { variant: "secondary", size: "sm", disabled: null == onAsk, onPress: onAsk, text: tmp14 });
  cResult[4] = onAsk;
  cResult[5] = null == onAsk;
  cResult[6] = tmp18;
  tmp17 = tmp18;
}) : ((onAsk) => {
  onAsk = onAsk.onAsk;
  const tmp = closure_26();
  const obj = { style: tmp.ideasOffer, children: null };
  const obj2 = { style: tmp.ideasOfferHint, children: null };
  const obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj3.children = intl.string(_modDef3682.tG5PBo);
  obj2.children = constants(Text_Text.Text, obj3);
  items = [constants(closure_1_8, obj2), ];
  const obj4 = { variant: "secondary", size: "sm", disabled: null == onAsk, onPress: onAsk, text: null };
  const intl2 = util.intl;
  obj4.text = intl2.string(_modDef3682.cwTe5o);
  items[1] = constants(components_Button_Button.Button, obj4);
  obj.children = items;
  return collapsedCategories(closure_1_8, obj);
});
ReactCompilerGating = fn(558);
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(20);
  ({ node, inGutter, live, crestColor, epoch } = arg0);
  let num = 0;
  if (undefined !== epoch) {
    num = epoch;
  }
  const tmp6 = closure_26();
  if (cResult[0] !== node) {
    const describeNodeResult = tmp(17038).describeNode(node);
    cResult[0] = node;
    cResult[1] = describeNodeResult;
    let tmp7 = describeNodeResult;
    const tmpResult = tmp(17038);
  } else {
    tmp7 = cResult[1];
  }
  let tmp9 = !tmp5;
  if (!(undefined !== live && live)) {
    tmp9 = "failed" !== node.status;
  }
  let str2 = "detail";
  if (undefined !== live && live) {
    str2 = "headline";
  }
  if (cResult[2] !== node.durationMs) {
    let tmp11 = null;
    if (null != node.durationMs) {
      const obj2 = { variant: "text-xs/normal", color: "text-subtle", children: tmp(17039).describeDuration(node.durationMs) };
      tmp11 = constants(tmp(4754).Text, obj2);
      const tmpResult2 = tmp(17039);
    }
    cResult[2] = node.durationMs;
    cResult[3] = tmp11;
    let tmp10 = tmp11;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === crestColor) {
    if (cResult[5] === num) {
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp7) {
            if (cResult[9] === tmp9) {
              if (cResult[10] === tmp13) {
                if (cResult[11] === str2) {
                  if (cResult[12] === tmp10) {
                    let tmp14 = cResult[13];
                  }
                  if (cResult[14] === node.detail) {
                    if (cResult[15] === tmp6) {
                      let tmp16 = cResult[16];
                    }
                    if (cResult[17] === tmp16) {
                      if (cResult[18] === tmp14) {
                        let tmp20 = cResult[19];
                      }
                      return tmp20;
                    }
                    const obj3 = { children: null };
                    items = [tmp14, tmp16];
                    obj3.children = items;
                    const tmp23 = collapsedCategories(closure_1_8, obj3);
                    cResult[17] = tmp16;
                    cResult[18] = tmp14;
                    cResult[19] = tmp23;
                    tmp20 = tmp23;
                  }
                  let tmp17 = null;
                  if (node.detail.length > 0) {
                    const obj4 = { style: tmp6.stepDetail, children: null };
                    const detail = node.detail;
                    obj4.children = detail.map((children, index) => closure_1_17(require("Text/Text").Text, { variant: "text-sm/normal", color: "text-muted", children }, index));
                    tmp17 = constants(closure_1_8, obj4);
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
  const tmp15 = constants(VibegrationsNativeStatusLineDefault, { line: tmp7, live: undefined !== live && live, settled: tmp9, failed: "failed" === node.status, presentation: str2, crestColor, inGutter: undefined !== inGutter && inGutter, epoch: num, trailing: tmp10 });
  cResult[4] = crestColor;
  cResult[5] = num;
  cResult[6] = undefined !== inGutter && inGutter;
  cResult[7] = undefined !== live && live;
  cResult[8] = tmp7;
  cResult[9] = tmp9;
  cResult[10] = "failed" === node.status;
  cResult[11] = str2;
  cResult[12] = tmp10;
  cResult[13] = tmp15;
  tmp14 = tmp15;
}) : ((live) => {
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
  const obj = { line: null, live: null, settled: null, failed: null, presentation: null, crestColor: null, inGutter: null, epoch: null, trailing: null };
  const tmp = closure_26();
  const tmp2 = collapsedCategories;
  const tmp6 = VibegrationsNativeStatusLineDefault;
  obj.line = VibegrationsTimelineTree.describeNode(node);
  obj.live = flag;
  let tmp8 = !flag;
  if (!flag) {
    tmp8 = "failed" !== node.status;
  }
  obj.settled = tmp8;
  obj.failed = "failed" === node.status;
  let str2 = "detail";
  if (flag) {
    str2 = "headline";
  }
  obj.presentation = str2;
  obj.crestColor = crestColor;
  obj.inGutter = inGutter;
  obj.epoch = epoch;
  let tmp4Result = null;
  if (null != node.durationMs) {
    const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: tmp7(17039).describeDuration(node.durationMs) };
    tmp4Result = tmp4(tmp7(4754).Text, obj3);
    const tmp7Result = tmp7(17039);
  }
  obj.trailing = tmp4Result;
  const children = [constants(tmp6, obj), ];
  let tmp4Result2 = null;
  if (node.detail.length > 0) {
    const obj4 = { style: tmp.stepDetail, children: null };
    const detail = node.detail;
    obj4.children = detail.map((children, index) => closure_1_17(require("Text/Text").Text, { variant: "text-sm/normal", color: "text-muted", children }, index));
    tmp4Result2 = tmp4(tmp3, obj4);
  }
  children[1] = tmp4Result2;
  return tmp2(closure_1_8, { children });
});
ReactCompilerGating = fn(558);
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? ((epoch) => {
  const cResult = turnActive(568).c(29);
  ({ tree, turnActive } = epoch);
  epoch = epoch.epoch;
  const tmp4 = closure_26();
  let obj = turnActive(568);
  [tmp6, dependencyMap] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function i() {
      return dependencyMap((arg0) => !arg0);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tree.steps) {
    if (cResult[2] === tree.tasks) {
      const turn = tree.turn;
      let durationMs;
      if (turn != null) {
        durationMs = turn.durationMs;
      }
      if (cResult[3] === durationMs) {
        if (cResult[4] === turnActive) {
          _slicedToArray = cResult[5];
          let tmp11 = cResult[6];
        }
        if (cResult[9] !== tree.steps) {
          let someResult = tree.steps.length > 1;
          if (!someResult) {
            const steps = tree.steps;
            someResult = steps.some((detail) => detail.detail.length > 0);
          }
          cResult[9] = tree.steps;
          cResult[10] = someResult;
          let tmp22 = someResult;
        } else {
          tmp22 = cResult[10];
        }
        let tmp25;
        if (tmp22) {
          tmp25 = first;
        }
        if (cResult[11] === epoch) {
          if (cResult[12] === tmp6) {
            if (cResult[13] === tmp11) {
              if (cResult[14] === tmp24) {
                if (cResult[15] === tmp25) {
                  if (cResult[16] === turnActive) {
                    let tmp26 = cResult[17];
                  }
                  if (cResult[18] === tmp10) {
                    if (cResult[19] === epoch) {
                      if (cResult[20] === tmp6) {
                        if (cResult[21] === tmp22) {
                          if (cResult[22] === tmp4) {
                            if (cResult[23] === tree.steps) {
                              if (cResult[24] === turnActive) {
                                let tmp30 = cResult[25];
                              }
                              if (cResult[26] === tmp26) {
                                if (cResult[27] === tmp30) {
                                  let tmp34 = cResult[28];
                                }
                                return tmp34;
                              }
                              const obj2 = { children: null };
                              items = [tmp26, tmp30];
                              obj2.children = items;
                              const tmp37 = closure_18(closure_8, obj2);
                              cResult[26] = tmp26;
                              cResult[27] = tmp30;
                              cResult[28] = tmp37;
                              tmp34 = tmp37;
                            }
                          }
                        }
                      }
                    }
                  }
                  let tmp31 = null;
                  if (tmp6) {
                    tmp31 = null;
                    if (tmp22) {
                      const obj3 = { style: tmp4.activityDetail, children: null };
                      const steps1 = tree.steps;
                      obj3.children = steps1.map((node) => {
                        const obj = { node, live: null, epoch: null };
                        let tmp3 = turnActive;
                        if (turnActive) {
                          tmp3 = node === currentStepResult;
                        }
                        obj.live = tmp3;
                        obj.epoch = epoch;
                        return constants(closure_32, obj, node.id);
                      });
                      tmp31 = closure_17(closure_8, obj3);
                    }
                  }
                  cResult[18] = tmp10;
                  cResult[19] = epoch;
                  cResult[20] = tmp6;
                  cResult[21] = tmp22;
                  cResult[22] = tmp4;
                  cResult[23] = tree.steps;
                  cResult[24] = turnActive;
                  cResult[25] = tmp31;
                  tmp30 = tmp31;
                }
              }
            }
          }
        }
        const obj4 = { line: tmp11, live: turnActive, settled: !turnActive, inGutter: true, epoch, expanded: tmp6, onToggle: tmp25 };
        const tmp29 = closure_17(epoch(17024), obj4);
        cResult[11] = epoch;
        cResult[12] = tmp6;
        cResult[13] = tmp11;
        cResult[14] = !turnActive;
        cResult[15] = tmp25;
        cResult[16] = turnActive;
        cResult[17] = tmp29;
        tmp26 = tmp29;
      }
    }
  }
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  const currentStepResult = turnActive(17038).currentStep(tree.steps);
  _slicedToArray = currentStepResult;
  let tmp13;
  if (!turnActive) {
    const turn2 = tree.turn;
    let durationMs1;
    if (turn2 != null) {
      durationMs1 = turn2.durationMs;
    }
    tmp13 = durationMs1;
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
    let describeTurnDurationResult = groupLabel;
  } else {
    describeTurnDurationResult = cResult[8];
  }
  if (null != tmp13) {
    describeTurnDurationResult = tmp(17039).describeTurnDuration(tmp13);
    const tmpResult3 = tmp(17039);
  } else if (null != currentStepResult) {
    describeTurnDurationResult = tmp(17038).describeNode(currentStepResult);
    const tmpResult4 = tmp(17038);
  } else if (describeTurnDurationResult == null) {
    const intl = tmp(1119).intl;
    describeTurnDurationResult = intl.string(epoch(3682).nv6pUM);
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
  tmp11 = describeTurnDurationResult;
}) : ((epoch) => {
  ({ tree, turnActive } = epoch);
  epoch = epoch.epoch;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_26();
  [tmp3, c2] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const currentStepResult = turnActive(17038).currentStep(tree.steps);
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
    groupLabel = tmp5(17039).describeTurnDuration(tmp8);
    const tmp5Result = tmp5(17039);
  } else if (null != currentStepResult) {
    groupLabel = tmp5(17038).describeNode(currentStepResult);
    const tmp5Result2 = tmp5(17038);
  } else if (groupLabel == null) {
    const intl = tmp5(1119).intl;
    groupLabel = intl.string(epoch(3682).nv6pUM);
  }
  let someResult = tree.steps.length > 1;
  if (!someResult) {
    const steps = tree.steps;
    someResult = steps.some((detail) => detail.detail.length > 0);
  }
  const obj2 = { line: groupLabel, live: turnActive, settled: !turnActive, inGutter: true, epoch, expanded: tmp3, onToggle: null };
  let tmp19;
  let obj = turnActive(17038);
  const tmp15 = closure_18;
  if (someResult) {
    tmp19 = callback;
  }
  obj2.onToggle = tmp19;
  const children = [closure_17(epoch(17024), obj2), ];
  let tmp17Result = null;
  if (tmp3) {
    tmp17Result = null;
    if (someResult) {
      const obj3 = { style: tmp.activityDetail, children: null };
      const steps1 = tree.steps;
      obj3.children = steps1.map((node) => {
        const obj = { node, live: null, epoch: null };
        let tmp3 = turnActive;
        if (turnActive) {
          tmp3 = node === c3;
        }
        obj.live = tmp3;
        obj.epoch = epoch;
        return constants(closure_32, obj, node.id);
      });
      tmp17Result = tmp17(tmp16, obj3);
    }
  }
  children[1] = tmp17Result;
  return tmp15(closure_8, { children });
});
ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let obj = mark;
  const cResult = mark(568).c(32);
  ({ lane, mark } = arg0);
  ({ turnActive, epoch } = arg0);
  const tmp3 = closure_26();
  const obj2 = mark(568);
  [tmp5, dependencyMap] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function i() {
      return dependencyMap((arg0) => !arg0);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (turnActive) {
    turnActive = tmp7;
  }
  if (cResult[1] === "running" === lane.task.status) {
    if (cResult[2] === lane.steps) {
      if (cResult[3] === lane.task) {
        if (cResult[4] === turnActive) {
          _slicedToArray = tmp9;
          let tmp18 = !turnActive;
          if (!turnActive) {
            tmp18 = "failed" !== lane.task.status;
          }
          if (cResult[8] !== mark.Illocon) {
            const tmp21 = closure_17(mark.Illocon, { size: 16, accessible: false });
            cResult[8] = mark.Illocon;
            cResult[9] = tmp21;
            let tmp19 = tmp21;
          } else {
            tmp19 = cResult[9];
          }
          let tmp22;
          if (cResult[5]) {
            tmp22 = first;
          }
          if (cResult[10] === epoch) {
            if (cResult[11] === tmp5) {
              if (cResult[12] === turnActive) {
                if (cResult[13] === tmp10) {
                  if (cResult[14] === mark.tint) {
                    if (cResult[15] === tmp18) {
                      if (cResult[16] === tmp23) {
                        if (cResult[17] === tmp19) {
                          if (cResult[18] === tmp22) {
                            let tmp24 = cResult[19];
                          }
                          if (cResult[20] === epoch) {
                            if (cResult[21] === tmp5) {
                              if (cResult[22] === tmp8) {
                                if (cResult[23] === lane.steps) {
                                  if (cResult[24] === lane.task.detail) {
                                    if (cResult[25] === tmp9) {
                                      if (cResult[26] === mark.tint) {
                                        if (cResult[27] === tmp3) {
                                          let tmp28 = cResult[28];
                                        }
                                        if (cResult[29] === tmp24) {
                                          if (cResult[30] === tmp28) {
                                            let tmp32 = cResult[31];
                                          }
                                          return tmp32;
                                        }
                                        const obj3 = { children: null };
                                        items = [tmp24, tmp28];
                                        obj3.children = items;
                                        const tmp35 = closure_18(closure_8, obj3);
                                        cResult[29] = tmp24;
                                        cResult[30] = tmp28;
                                        cResult[31] = tmp35;
                                        tmp32 = tmp35;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          let tmp29 = null;
                          if (tmp5) {
                            tmp29 = null;
                            if (tmp8) {
                              const obj4 = { style: tmp3.activityDetail, children: null };
                              const detail = lane.task.detail;
                              const items1 = [detail.map((children, index) => closure_1_17(mark(4754).Text, { variant: "text-xs/normal", color: "text-feedback-critical", children }, index)), ];
                              const steps = lane.steps;
                              items1[1] = steps.map((node) => constants(closure_32, { node, live: node === currentStepResult, crestColor: mark.tint, epoch }, node.id));
                              obj4.children = items1;
                              tmp29 = closure_18(closure_8, obj4);
                            }
                          }
                          cResult[20] = epoch;
                          cResult[21] = tmp5;
                          cResult[22] = tmp8;
                          cResult[23] = lane.steps;
                          cResult[24] = lane.task.detail;
                          cResult[25] = tmp9;
                          cResult[26] = mark.tint;
                          cResult[27] = tmp3;
                          cResult[28] = tmp29;
                          tmp28 = tmp29;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj5 = { line: cResult[7], live: turnActive, settled: tmp18, failed: "failed" === lane.task.status, glyph: tmp19, crestColor: mark.tint, inGutter: true, epoch, expanded: tmp5, onToggle: tmp22 };
          const tmp27 = closure_17(epoch(17024), obj5);
          cResult[10] = epoch;
          cResult[11] = tmp5;
          cResult[12] = turnActive;
          cResult[13] = cResult[7];
          cResult[14] = mark.tint;
          cResult[15] = tmp18;
          cResult[16] = "failed" === lane.task.status;
          cResult[17] = tmp19;
          cResult[18] = tmp22;
          cResult[19] = tmp27;
          tmp24 = tmp27;
        }
      }
    }
  }
  let currentStepResult;
  if (turnActive) {
    currentStepResult = obj(17038).currentStep(lane.steps);
    const objResult = obj(17038);
  }
  _slicedToArray = currentStepResult;
  const tmp12 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" !== lane.task.status) {
    const describeTaskOutcomeResult = obj(17040).describeTaskOutcome(lane.task);
    cResult[1] = tmp7;
    cResult[2] = lane.steps;
    cResult[3] = lane.task;
    cResult[4] = turnActive;
    cResult[5] = tmp12;
    cResult[6] = currentStepResult;
    cResult[7] = describeTaskOutcomeResult;
    const objResult3 = obj(17040);
  }
  if (null != currentStepResult) {
    obj = obj(17038);
    obj.describeNode(currentStepResult);
  } else {
    obj(17040).taskTitle(lane.task);
    const objResult4 = obj(17040);
  }
}) : ((arg0) => {
  ({ lane, mark } = arg0);
  ({ turnActive, epoch } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_26();
  [tmp3, c2] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  if (turnActive) {
    turnActive = tmp5;
  }
  let currentStepResult;
  if (turnActive) {
    currentStepResult = mark(17038).currentStep(lane.steps);
    const obj = mark(17038);
  }
  _slicedToArray = currentStepResult;
  const tmp9 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" === lane.task.status) {
    if (null != currentStepResult) {
      let describeNodeResult = mark(17038).describeNode(currentStepResult);
      const obj4 = mark(17038);
    } else {
      describeNodeResult = mark(17040).taskTitle(lane.task);
      const obj3 = mark(17040);
    }
  } else {
    const obj2 = mark(17040);
    const obj5 = { line: mark(17040).describeTaskOutcome(lane.task), live: turnActive, settled: null, failed: null, glyph: null, crestColor: null, inGutter: true, epoch: null, expanded: null, onToggle: null };
    let tmp26 = !turnActive;
    const describeTaskOutcomeResult = mark(17040).describeTaskOutcome(lane.task);
    if (!turnActive) {
      tmp26 = "failed" !== lane.task.status;
    }
    obj5.settled = tmp26;
    obj5.failed = "failed" === lane.task.status;
    obj5.glyph = closure_17(mark.Illocon, { size: 16, accessible: false });
    obj5.crestColor = mark.tint;
    obj5.epoch = epoch;
    obj5.expanded = tmp3;
    let tmp27;
    if (tmp9) {
      tmp27 = callback;
    }
    obj5.onToggle = tmp27;
    items = [closure_17(epoch(17024), obj5), ];
    let tmp21Result = null;
    if (tmp3) {
      tmp21Result = null;
      if (tmp9) {
        const obj6 = { style: tmp.activityDetail, children: null };
        const detail = lane.task.detail;
        const items1 = [detail.map((children, index) => closure_1_17(mark(_undefined[17]).Text, { variant: "text-xs/normal", color: "text-feedback-critical", children }, index)), ];
        const steps = lane.steps;
        items1[1] = steps.map((node) => constants(closure_32, { node, live: node === c3, crestColor: mark.tint, epoch }, node.id));
        obj6.children = items1;
        tmp21Result = tmp21(tmp22, obj6);
      }
    }
    const obj7 = { children: null };
    items[1] = tmp21Result;
    obj7.children = items;
    return closure_18(closure_8, obj7);
  }
});
ReactCompilerGating = fn(558);
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = turnActive(568).c(10);
  ({ tree, turnActive } = arg0);
  let activityBox = closure_26();
  let num = 0;
  if (0 === tree.steps.length) {
    if (num === tree.tasks.length) {
      return null;
    }
  }
  const length = tree.tasks.length;
  if (cResult[0] === length) {
    if (cResult[1] === activityBox.activityBox) {
      if (cResult[2] === tree) {
        if (cResult[3] === turnActive) {
          return cResult[4];
        }
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p(taskId) {
      return taskId.taskId;
    };
    cResult[5] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[5];
  }
  let obj = turnActive(568);
  const tasks = tree.tasks;
  dependencyMap = turnActive(17041).subagentIllocons(tasks.map(tmp4));
  if (cResult[6] === length) {
    if (cResult[7] === tree) {
      if (cResult[8] === turnActive) {
        let tmp5 = cResult[9];
      }
      let obj2 = { style: activityBox.activityBox, children: null };
      items = [tmp5, ];
      const tasks1 = tree.tasks;
      items[1] = tasks1.map((task) => {
        let familiarMarkResult;
        if (null != task.task.helperMark) {
          familiarMarkResult = VibegrationsSubagentMark.familiarMark(task.task.helperMark);
        }
        if (familiarMarkResult == null) {
          familiarMarkResult = closure_2.get(task.taskId);
        }
        let tmp5 = null;
        if (null != familiarMarkResult) {
          const obj2 = { lane: task, mark: familiarMarkResult, turnActive, epoch: length };
          tmp5 = constants(closure_34, obj2, task.taskId);
        }
        return tmp5;
      });
      obj2.children = items;
      const tmp9 = closure_18(closure_8, obj2);
      cResult[num] = length;
      activityBox = activityBox.activityBox;
      cResult[1] = activityBox;
      cResult[2] = tree;
      cResult[3] = turnActive;
      num = 4;
      cResult[4] = tmp9;
    }
  }
  const tmp6 = closure_17(closure_33, { tree, turnActive, epoch: length });
  cResult[6] = length;
  cResult[7] = tree;
  cResult[8] = turnActive;
  cResult[9] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  ({ tree, turnActive } = arg0);
  let length;
  dependencyMap = undefined;
  if (0 === tree.steps.length) {
    if (0 === tree.tasks.length) {
      return null;
    }
  }
  length = tree.tasks.length;
  const tmp = closure_26();
  const tasks = tree.tasks;
  dependencyMap = turnActive(17041).subagentIllocons(tasks.map((taskId) => taskId.taskId));
  let obj2 = { style: tmp.activityBox, children: null };
  items = [closure_17(closure_33, { tree, turnActive, epoch: length }), ];
  const tasks1 = tree.tasks;
  items[1] = tasks1.map((task) => {
    let familiarMarkResult;
    if (null != task.task.helperMark) {
      familiarMarkResult = VibegrationsSubagentMark.familiarMark(task.task.helperMark);
    }
    if (familiarMarkResult == null) {
      familiarMarkResult = closure_2.get(task.taskId);
    }
    let tmp5 = null;
    if (null != familiarMarkResult) {
      const obj2 = { lane: task, mark: familiarMarkResult, turnActive, epoch: length };
      tmp5 = constants(closure_34, obj2, task.taskId);
    }
    return tmp5;
  });
  obj2.children = items;
  return closure_18(closure_8, obj2);
});
ReactCompilerGating = fn(558);
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(15);
  children = children.children;
  const tmp3 = closure_26();
  if (obj2.isIOS()) {
    ({ transcript, transcript: transcript2 } = tmp3);
    if (cResult[0] !== tmp3.maskSolid) {
      const obj3 = { style: tmp3.maskSolid };
      const tmp7 = constants(closure_1_8, obj3);
      cResult[0] = tmp3.maskSolid;
      cResult[1] = tmp7;
      let tmp4 = tmp7;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] !== tmp3.maskFade) {
      const obj4 = { style: tmp3.maskFade, colors: items, locations, start, end };
      const tmp15 = constants(LinearGradientDefault, obj4);
      cResult[2] = tmp3.maskFade;
      cResult[3] = tmp15;
      let tmp8 = tmp15;
    } else {
      tmp8 = cResult[3];
    }
    const _Math = Math;
    const bound = Math.max(0, children.clearance - c21);
    if (cResult[4] !== bound) {
      const obj5 = { style: null };
      const obj6 = { height: bound };
      obj5.style = obj6;
      const tmp22 = constants(closure_1_8, obj5);
      cResult[4] = bound;
      cResult[5] = tmp22;
      let tmp19 = tmp22;
    } else {
      tmp19 = cResult[5];
    }
    if (cResult[6] === tmp3.transcript) {
      if (cResult[7] === tmp4) {
        if (cResult[8] === tmp8) {
          if (cResult[9] === tmp19) {
            let tmp23 = cResult[10];
          }
          if (cResult[11] === children) {
            if (cResult[12] === tmp3.transcript) {
              if (cResult[13] === tmp23) {
                let tmp27 = cResult[14];
              }
              return tmp27;
            }
          }
          const obj7 = { style: transcript, maskElement: tmp23, children };
          const tmp30 = constants(_modDef5881, obj7);
          cResult[11] = children;
          cResult[12] = tmp3.transcript;
          cResult[13] = tmp23;
          cResult[14] = tmp30;
          tmp27 = tmp30;
        }
      }
    }
    const obj8 = { style: transcript2, children: null };
    items = [tmp4, tmp8, tmp19];
    obj8.children = items;
    const tmp26 = collapsedCategories(closure_1_8, obj8);
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
  children = children.children;
  const tmp = closure_26();
  let tmp3 = children;
  if (obj.isIOS()) {
    const obj2 = { style: tmp.transcript, maskElement: null, children: null };
    const obj3 = { style: tmp.transcript, children: null };
    const obj4 = { style: tmp.maskSolid };
    items = [constants(closure_1_8, obj4), , ];
    const obj5 = { style: tmp.maskFade, colors: items, locations, start, end };
    items[1] = constants(LinearGradientDefault, obj5);
    const obj6 = { style: null };
    const obj7 = { height: null };
    const _Math = Math;
    obj7.height = Math.max(0, children.clearance - c21);
    obj6.style = obj7;
    items[2] = constants(closure_1_8, obj6);
    obj3.children = items;
    obj2.maskElement = collapsedCategories(closure_1_8, obj3);
    obj2.children = children;
    tmp3 = constants(_modDef5881, obj2);
  }
  return tmp3;
});
ReactCompilerGating = fn(558);
let closure_37 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((onJumpToReplied) => {
  const cResult = message(onJumpToReplied[13]).c(130);
  ({ projectId, message } = onJumpToReplied);
  ({ groupStart, isNewest, replied } = onJumpToReplied);
  onJumpToReplied = onJumpToReplied.onJumpToReplied;
  ({ onApprove, onPickIdea, onAskForIdeas, onAnswerClarification } = onJumpToReplied);
  const tmp4 = closure_26();
  if (cResult[0] !== message) {
    const tmp7 = turnSettled(message);
    cResult[0] = message;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === message.steps) {
    if (cResult[3] === tmp8) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] !== message.steps) {
      const announcementNotesResult = tmp(tmp2[24]).announcementNotes(message.steps);
      cResult[5] = message.steps;
      cResult[6] = announcementNotesResult;
      let arr = announcementNotesResult;
      const tmpResult = tmp(tmp2[24]);
    } else {
      arr = cResult[6];
    }
    if (cResult[7] !== message.steps) {
      const streamedMessagesResult = tmp(tmp2[24]).streamedMessages(message.steps);
      cResult[7] = message.steps;
      cResult[8] = streamedMessagesResult;
      let arr2 = streamedMessagesResult;
      const tmpResult6 = tmp(tmp2[24]);
    } else {
      arr2 = cResult[8];
    }
    if (cResult[9] !== message.steps) {
      const latestTodosResult = tmp(tmp2[24]).latestTodos(message.steps);
      cResult[9] = message.steps;
      cResult[10] = latestTodosResult;
      let tmp13 = latestTodosResult;
      const tmpResult7 = tmp(tmp2[24]);
    } else {
      tmp13 = cResult[10];
    }
    if (cResult[11] !== tmp9.tasks) {
      const runningTodoAgentsResult = tmp(tmp2[31]).runningTodoAgents(tmp9.tasks);
      cResult[11] = tmp9.tasks;
      cResult[12] = runningTodoAgentsResult;
      let tmp15 = runningTodoAgentsResult;
      const tmpResult8 = tmp(tmp2[31]);
    } else {
      tmp15 = cResult[12];
    }
    if (cResult[13] === onJumpToReplied) {
      if (cResult[14] === replied) {
        let tmp17 = cResult[15];
      }
      if (cResult[16] !== message.content) {
        const result = tmp(tmp2[32]).parseVibegrationsDesignRemark(message.content);
        cResult[16] = message.content;
        cResult[17] = result;
        let tmp18 = result;
        const tmpResult9 = tmp(tmp2[32]);
      } else {
        tmp18 = cResult[17];
      }
      let body;
      if (tmp18 != null) {
        body = tmp18.body;
      }
      if (body == null) {
        body = message.content;
      }
      if (cResult[18] !== body) {
        const trimmed = body.trim();
        cResult[18] = body;
        cResult[19] = trimmed;
        let tmp22 = trimmed;
      } else {
        tmp22 = cResult[19];
      }
      class V {
        constructor() {
          if (null != replied) {
            if (onJumpToReplied != null) {
              tmp2Result = tmp2(tmp.id);
            }
          }
          return;
        }
      }
      let attachments = null;
      if (null != message.attachments) {
        attachments = null;
        if (message.attachments.length > 0) {
          attachments = message.attachments;
        }
      }
      let rowGroupStart = groupStart;
      if (groupStart) {
        rowGroupStart = !onJumpToReplied.first;
      }
      if (rowGroupStart) {
        rowGroupStart = tmp4.rowGroupStart;
      }
      if (cResult[20] === tmp4.row) {
        if (cResult[21] === rowGroupStart) {
          let tmp25 = cResult[22];
        }
        let user_id;
        if ("user" === message.role) {
          user_id = message.user_id;
        }
        if (cResult[23] === user_id) {
          if ("user" === message.role) {
            if ("" === tmp22) {
              if (null == tmp18) {
                if (null == attachments) {
                  return null;
                }
              }
            }
            if (cResult[26] === groupStart) {
              if (cResult[27] === message.user_id) {
                if (cResult[28] === tmp4.avatar) {
                  let tmp148 = cResult[29];
                }
                if (cResult[30] === groupStart) {
                  if (cResult[31] === message.created_at) {
                    if (cResult[32] === message.user_id) {
                      if (cResult[33] === tmp4.header) {
                        let tmp152 = cResult[34];
                      }
                      if (cResult[35] === tmp22) {
                        if (cResult[36] === groupStart) {
                          if (cResult[37] === tmp18) {
                            let tmp156 = cResult[38];
                          }
                          if (cResult[39] === attachments) {
                            if (cResult[40] === projectId) {
                              let tmp162 = cResult[41];
                            }
                            if (cResult[42] === tmp29) {
                              if (cResult[43] === tmp25) {
                                if (cResult[44] === tmp148) {
                                  if (cResult[45] === tmp152) {
                                    if (cResult[46] === tmp156) {
                                    }
                                  }
                                }
                              }
                            }
                            const obj2 = { style: tmp25, onLongPress: tmp29, accessible: false, children: null };
                            class V {
                              constructor() {
                                if (null != replied) {
                                  if (onJumpToReplied != null) {
                                    tmp2Result = tmp2(tmp.id);
                                  }
                                }
                                return;
                              }
                            }
                            tmp169[0] = tmp148;
                            tmp169[1] = tmp152;
                            tmp169[2] = tmp156;
                            tmp169[3] = tmp162;
                            obj2.children = tmp169;
                            const tmp170 = closure_18(closure_7, obj2);
                            cResult[42] = tmp29;
                            cResult[43] = tmp25;
                            cResult[44] = tmp148;
                            cResult[45] = tmp152;
                            cResult[46] = tmp156;
                            cResult[47] = tmp162;
                            cResult[48] = tmp170;
                          }
                          let tmp163 = null;
                          if (null != attachments) {
                            const obj3 = { projectId, attachments };
                            tmp163 = closure_17(closure_30, obj3);
                          }
                          cResult[39] = attachments;
                          class V {
                            constructor() {
                              if (null != replied) {
                                if (onJumpToReplied != null) {
                                  tmp2Result = tmp2(tmp.id);
                                }
                              }
                              return;
                            }
                          }
                          cResult[41] = tmp163;
                          tmp162 = tmp163;
                        }
                      }
                      if (tmp28) {
                        let combined;
                        if (!groupStart) {
                          const intl3 = tmp(tmp2[15]).intl;
                          const _HermesInternal = HermesInternal;
                          combined = "" + intl3.string(tmp(tmp2[15]).t.KD6OJJ) + ": " + tmp22;
                        }
                        const obj4 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: null };
                        class V {
                          constructor() {
                            if (null != replied) {
                              if (onJumpToReplied != null) {
                                tmp2Result = tmp2(tmp.id);
                              }
                            }
                            return;
                          }
                        }
                        items = [null, , ];
                        let str12 = null;
                        if (null != tmp18) {
                          str12 = null;
                          if (tmp28) {
                            str12 = " ";
                          }
                        }
                        items[1] = str12;
                        items[2] = tmp22;
                        obj4.children = items;
                        let tmp158Result = closure_18(tmp(tmp2[17]).Text, obj4);
                      } else {
                        tmp158Result = null;
                      }
                      cResult[35] = tmp22;
                      cResult[36] = groupStart;
                      class V {
                        constructor() {
                          if (null != replied) {
                            if (onJumpToReplied != null) {
                              tmp2Result = tmp2(tmp.id);
                            }
                          }
                          return;
                        }
                      }
                      cResult[37] = tmp18;
                      cResult[38] = tmp158Result;
                      tmp156 = tmp158Result;
                    }
                  }
                }
                let tmp153 = null;
                if (groupStart) {
                  const obj5 = { style: tmp4.header, children: null };
                  ({ user_id: obj34.userId, created_at: obj34.at } = message);
                  class V {
                    constructor() {
                      if (null != replied) {
                        if (onJumpToReplied != null) {
                          tmp2Result = tmp2(tmp.id);
                        }
                      }
                      return;
                    }
                  }
                  tmp153 = closure_17(closure_8, obj5);
                }
                cResult[30] = groupStart;
                class V {
                  constructor() {
                    if (null != replied) {
                      if (onJumpToReplied != null) {
                        tmp2Result = tmp2(tmp.id);
                      }
                    }
                    return;
                  }
                }
                cResult[32] = message.user_id;
                cResult[33] = tmp4.header;
                cResult[34] = tmp153;
                tmp152 = tmp153;
              }
            }
            if (groupStart) {
              const obj7 = { style: tmp4.avatar, children: null };
              const obj8 = { userId: message.user_id };
              obj7.children = closure_17(tmp(tmp2[34]).VibegrationsUserAvatar, obj8);
              class V {
                constructor() {
                  if (null != replied) {
                    if (onJumpToReplied != null) {
                      tmp2Result = tmp2(tmp.id);
                    }
                  }
                  return;
                }
              }
            }
            cResult[26] = groupStart;
            class V {
              constructor() {
                if (null != replied) {
                  if (onJumpToReplied != null) {
                    tmp2Result = tmp2(tmp.id);
                  }
                }
                return;
              }
            }
            cResult[28] = tmp4.avatar;
            cResult[29] = null;
            tmp148 = tmp149;
          } else if (true === message.interrupted) {
            const _Symbol3 = Symbol;
            if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(tmp2[15]).intl;
              const stringResult = intl2.string(replied(tmp2[16])["5T7DSm"]);
              cResult[49] = stringResult;
              let tmp130 = stringResult;
            } else {
              tmp130 = cResult[49];
            }
            const _Symbol4 = Symbol;
            class V {
              constructor() {
                if (null != replied) {
                  if (onJumpToReplied != null) {
                    tmp2Result = tmp2(tmp.id);
                  }
                }
                return;
              }
            }
            if (tmp133 === Symbol.for("react.memo_cache_sentinel")) {
              const obj9 = { line: tmp130, live: false, settled: true, inGutter: true, glyph: null };
              class V {
                constructor() {
                  if (null != replied) {
                    if (onJumpToReplied != null) {
                      tmp2Result = tmp2(tmp.id);
                    }
                  }
                  return;
                }
              }
              obj9.glyph = closure_17(tmp(tmp2[36]).StopIcon, { size: "refresh_sm", color: null });
              const tmp138 = closure_17(replied(tmp2[8]), obj9);
              cResult[50] = tmp138;
              let tmp134 = tmp138;
              const obj10 = { size: "refresh_sm", color: null };
              const tmp137 = replied(tmp2[8]);
            } else {
              tmp134 = cResult[50];
            }
            if (cResult[51] !== tmp4.activityBox) {
              const obj11 = { style: tmp4.activityBox, children: tmp134 };
              const tmp142 = closure_17(closure_8, obj11);
              class V {
                constructor() {
                  if (null != replied) {
                    if (onJumpToReplied != null) {
                      tmp2Result = tmp2(tmp.id);
                    }
                  }
                  return;
                }
              }
              cResult[52] = tmp142;
              let tmp139 = tmp142;
            } else {
              tmp139 = cResult[52];
            }
            if (cResult[53] === tmp25) {
              if (cResult[54] === tmp139) {
                let tmp143 = cResult[55];
              }
              return tmp143;
            }
            const obj12 = { style: tmp25, children: tmp139 };
            const tmp146 = closure_17(closure_8, obj12);
            cResult[53] = tmp25;
            cResult[54] = tmp139;
            cResult[55] = tmp146;
            tmp143 = tmp146;
          } else if (cResult[56] !== message.steps) {
            const _Symbol = Symbol;
            if (cResult[58] === Symbol.for("react.memo_cache_sentinel")) {
              function de(kind) {
                let tmp = "error" === kind.kind;
                if (!tmp) {
                  tmp = "terminal_error" === kind.kind;
                }
                return tmp;
              }
              cResult[58] = de;
              let tmp32 = de;
            } else {
              tmp32 = cResult[58];
            }
            const steps = message.steps;
            const found = steps.find(tmp32);
            class V {
              constructor() {
                if (null != replied) {
                  if (onJumpToReplied != null) {
                    tmp2Result = tmp2(tmp.id);
                  }
                }
                return;
              }
            }
            cResult[56] = message.steps;
            cResult[57] = found;
          } else {
            if ("proposal" === message.kind) {
              const proposal = message.proposal;
            }
            let ideas = null;
            if (null != message.ideas) {
              ideas = null;
              if (message.ideas.length > 0) {
                ideas = message.ideas;
              }
            }
            const secretRequest = message.secretRequest;
            class V {
              constructor() {
                if (null != replied) {
                  if (onJumpToReplied != null) {
                    tmp2Result = tmp2(tmp.id);
                  }
                }
                return;
              }
            }
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
            if (tmp13 == null) {
              let todos = null;
              if (null != message.todos) {
                todos = null;
                if (message.todos.length > 0) {
                  todos = message.todos;
                }
              }
              tmp13 = todos;
            }
            if (null == tmp13) {
              if (null != message.provisionalTodo) {
                if ("" !== message.provisionalTodo) {
                  const provisionalTodo = message.provisionalTodo;
                }
              }
            }
            if (cResult[59] === tmp22) {
              if (cResult[60] === tmp39) {
                let tmp40 = cResult[61];
              }
              if (!(tmp9.steps.length > 0 || tmp9.tasks.length > 0)) {
                if (0 === arr.length) {
                  if (0 === arr2.length) {
                    if ("" === tmp22) {
                      if (null == proposal) {
                        if (null == tmp30) {
                          if (null == ideas) {
                            if (null == tmp13) {
                              if (null == provisionalTodo) {
                                if (null == secretRequest) {
                                  if (null == settingsRequest) {
                                    if (null == attachments) {
                                      if (null == clarification) {
                                        if (!tmp43) {
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
              class V {
                constructor() {
                  if (null != replied) {
                    if (onJumpToReplied != null) {
                      tmp2Result = tmp2(tmp.id);
                    }
                  }
                  return;
                }
              }
              const tmp46 = arr2.length > 0 || null == proposal && tmp28 && !tmp40 || null != proposal || null != clarification || null != ideas || null != secretRequest || null != settingsRequest || null != attachments || null != tmp30 || null != tmp13 || null != provisionalTodo || "plan_implemented" === message.kind && isNewest;
              let avatarSpokenReplying = groupStart;
              if (groupStart) {
                avatarSpokenReplying = null != replied;
              }
              if (cResult[62] === tmp17) {
                if (cResult[63] === onJumpToReplied) {
                  if (cResult[64] === replied) {
                    if (cResult[65] === avatarSpokenReplying) {
                      let tmp47 = cResult[66];
                    }
                    if (avatarSpokenReplying) {
                      avatarSpokenReplying = tmp4.avatarSpokenReplying;
                    }
                    if (cResult[67] === tmp4.avatar) {
                      if (cResult[68] === tmp4.avatarSpoken) {
                        if (cResult[69] === avatarSpokenReplying) {
                          let tmp53 = cResult[70];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[71] === Symbol.for("react.memo_cache_sentinel")) {
                          const tmp57 = closure_17(tmp(tmp2[34]).VibegrationsConjureAvatar, {});
                          cResult[71] = tmp57;
                          let tmp55 = tmp57;
                        } else {
                          tmp55 = cResult[71];
                        }
                        if (cResult[72] !== tmp53) {
                          const obj13 = { style: tmp53, children: tmp55 };
                          const tmp61 = closure_17(closure_8, obj13);
                          class V {
                            constructor() {
                              if (null != replied) {
                                if (onJumpToReplied != null) {
                                  tmp2Result = tmp2(tmp.id);
                                }
                              }
                              return;
                            }
                          }
                          cResult[73] = tmp61;
                          let tmp58 = tmp61;
                        } else {
                          tmp58 = cResult[73];
                        }
                        class V {
                          constructor() {
                            if (null != replied) {
                              if (onJumpToReplied != null) {
                                tmp2Result = tmp2(tmp.id);
                              }
                            }
                            return;
                          }
                        }
                        if (cResult[76] === tmp4.header) {
                          if (cResult[77] === tmp62) {
                            let tmp63 = cResult[78];
                          }
                          if (cResult[79] === tmp47) {
                            if (cResult[80] === tmp58) {
                              if (cResult[81] === tmp63) {
                                let tmp67 = cResult[82];
                              }
                              if (cResult[83] === tmp67) {
                                if (cResult[84] === groupStart) {
                                  if (cResult[85] === arr) {
                                    if (cResult[86] === tmp45) {
                                      if (cResult[87] === tmp4.spoken) {
                                        let tmp71 = cResult[88];
                                      }
                                      if (cResult[89] !== message) {
                                        const tmp78 = turnSettled(message);
                                        cResult[89] = message;
                                        cResult[90] = tmp78;
                                        let tmp76 = tmp78;
                                      } else {
                                        tmp76 = cResult[90];
                                      }
                                      if (cResult[91] === !tmp76) {
                                        if (cResult[92] === tmp9) {
                                          let tmp80 = cResult[93];
                                        }
                                        if (cResult[94] === attachments) {
                                          if (cResult[95] === tmp67) {
                                            if (cResult[96] === clarification) {
                                              if (cResult[97] === tmp46) {
                                                if (cResult[98] === tmp22) {
                                                  if (cResult[99] === tmp30) {
                                                    if (cResult[100] === groupStart) {
                                                      if (cResult[101] === tmp44) {
                                                        if (cResult[102] === ideas) {
                                                          if (cResult[103] === isNewest) {
                                                            if (cResult[104] === message) {
                                                              if (cResult[105] === onAnswerClarification) {
                                                                if (cResult[106] === onApprove) {
                                                                  if (cResult[107] === onAskForIdeas) {
                                                                    if (cResult[108] === onPickIdea) {
                                                                      if (cResult[109] === tmp45) {
                                                                        if (cResult[110] === projectId) {
                                                                          if (cResult[111] === proposal) {
                                                                            if (cResult[112] === provisionalTodo) {
                                                                              if (cResult[113] === secretRequest) {
                                                                                if (cResult[114] === settingsRequest) {
                                                                                  if (cResult[115] === tmp42) {
                                                                                    if (cResult[116] === tmp43) {
                                                                                      if (cResult[117] === arr2) {
                                                                                        if (cResult[118] === tmp4.spoken) {
                                                                                          if (cResult[119] === tmp4.spokenAfterWork) {
                                                                                            if (cResult[120] === tmp4.surface) {
                                                                                              if (cResult[121] === tmp15) {
                                                                                                if (cResult[122] === tmp13) {
                                                                                                  let tmp84 = cResult[123];
                                                                                                }
                                                                                                if (cResult[124] === tmp29) {
                                                                                                  if (cResult[125] === tmp25) {
                                                                                                    if (cResult[126] === tmp71) {
                                                                                                      if (cResult[127] === tmp80) {
                                                                                                        if (cResult[128] === tmp84) {
                                                                                                          let tmp124 = cResult[129];
                                                                                                        }
                                                                                                        return tmp124;
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                                const obj14 = { style: tmp25, onLongPress: tmp29, accessible: false, children: null };
                                                                                                class V {
                                                                                                  constructor() {
                                                                                                    if (null != replied) {
                                                                                                      if (onJumpToReplied != null) {
                                                                                                        tmp2Result = tmp2(tmp.id);
                                                                                                      }
                                                                                                    }
                                                                                                    return;
                                                                                                  }
                                                                                                }
                                                                                                tmp127[0] = tmp71;
                                                                                                tmp127[1] = tmp80;
                                                                                                tmp127[2] = tmp84;
                                                                                                obj14.children = tmp127;
                                                                                                const tmp128 = closure_18(closure_7, obj14);
                                                                                                cResult[124] = tmp29;
                                                                                                cResult[125] = tmp25;
                                                                                                cResult[126] = tmp71;
                                                                                                cResult[127] = tmp80;
                                                                                                cResult[128] = tmp84;
                                                                                                cResult[129] = tmp128;
                                                                                                tmp124 = tmp128;
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
                                        let tmp86Result = null;
                                        if (tmp46) {
                                          const items1 = [tmp4.spoken, ];
                                          let tmp88 = tmp44;
                                          if (tmp44) {
                                            tmp88 = groupStart;
                                          }
                                          if (tmp88) {
                                            tmp88 = !tmp45;
                                          }
                                          class V {
                                            constructor() {
                                              if (null != replied) {
                                                if (onJumpToReplied != null) {
                                                  tmp2Result = tmp2(tmp.id);
                                                }
                                              }
                                              return;
                                            }
                                          }
                                          const obj15 = { style: null, children: null };
                                          items1[1] = tmp88;
                                          obj15.style = items1;
                                          let tmp89 = null;
                                          if (groupStart) {
                                            tmp89 = null;
                                            if (!tmp45) {
                                              tmp89 = tmp67;
                                            }
                                          }
                                          const items2 = [
                                            tmp89,
                                            arr2.map((content, index) => {
                                                                                      const obj = { source: content.content, streaming: null };
                                                                                      const tmp2 = turnSettled(message);
                                                                                      let tmp3 = !tmp2;
                                                                                      if (!tmp2) {
                                                                                        tmp3 = index === arr2.length - 1;
                                                                                      }
                                                                                      obj.streaming = tmp3;
                                                                                      return constants(VibegrationsNativeMarkdown.VibegrationsRevealedMarkdown, obj, content.key);
                                                                                    }),
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,

                                          ];
                                          let tmp90 = null;
                                          if (tmp42) {
                                            const obj16 = { source: tmp22 };
                                            tmp90 = closure_17(replied(tmp2[20]), obj16);
                                          }
                                          items2[2] = tmp90;
                                          if ("side_reply" === message.kind) {
                                            const Text = tmp(tmp2[17]).Text;
                                            const intl = tmp(tmp2[15]).intl;
                                            { variant: "text-xs/normal", color: "text-muted", children: null }.children = intl.string(replied(tmp2[16]).OAjkIT);
                                            class V {
                                              constructor() {
                                                if (null != replied) {
                                                  if (onJumpToReplied != null) {
                                                    tmp2Result = tmp2(tmp.id);
                                                  }
                                                }
                                                return;
                                              }
                                            }
                                            const obj17 = { variant: "text-xs/normal", color: "text-muted", children: null };
                                          }
                                          items2[3] = null;
                                          let tmp96 = null;
                                          if (null != attachments) {
                                            const obj18 = { projectId, attachments };
                                            tmp96 = closure_17(closure_30, obj18);
                                          }
                                          items2[4] = tmp96;
                                          if (null != tmp13) {
                                            const obj19 = { style: tmp4.surface, children: null };
                                            let items3 = tmp13;
                                            if (tmp13 == null) {
                                              items3 = [];
                                            }
                                            class V {
                                              constructor() {
                                                if (null != replied) {
                                                  if (onJumpToReplied != null) {
                                                    tmp2Result = tmp2(tmp.id);
                                                  }
                                                }
                                                return;
                                              }
                                            }
                                            tmp103[0] = items3;
                                            tmp103[1] = provisionalTodo;
                                            tmp103[2] = tmp15;
                                            obj19.children = closure_17(replied(tmp2[37]), tmp103);
                                            let tmp100Result = tmp100(tmp87, obj19);
                                            const tmp102 = replied(tmp2[37]);
                                          } else {
                                            tmp100Result = null;
                                          }
                                          items2[5] = tmp100Result;
                                          if (null != proposal) {
                                            const obj20 = { projectId, proposal, actionable: isNewest, onApprove };
                                            class V {
                                              constructor() {
                                                if (null != replied) {
                                                  if (onJumpToReplied != null) {
                                                    tmp2Result = tmp2(tmp.id);
                                                  }
                                                }
                                                return;
                                              }
                                            }
                                          }
                                          items2[6] = null;
                                          let tmp107 = null;
                                          if (null != clarification) {
                                            const obj21 = { clarification, onSubmit: onAnswerClarification };
                                            tmp107 = closure_17(replied(tmp2[38]), obj21);
                                          }
                                          items2[7] = tmp107;
                                          let tmp110 = null;
                                          if (null != secretRequest) {
                                            const obj22 = { projectId, request: secretRequest };
                                            tmp110 = closure_17(replied(tmp2[39]), obj22);
                                          }
                                          items2[8] = tmp110;
                                          let tmp113 = null;
                                          if (null != settingsRequest) {
                                            const obj23 = { projectId, request: settingsRequest };
                                            tmp113 = closure_17(replied(tmp2[40]), obj23);
                                          }
                                          items2[9] = tmp113;
                                          let tmp116 = null;
                                          if (null != ideas) {
                                            const obj24 = { ideas, onPick: onPickIdea };
                                            tmp116 = closure_17(closure_29, obj24);
                                          }
                                          items2[10] = tmp116;
                                          let tmp119 = null;
                                          if (tmp43) {
                                            const obj25 = { onAsk: onAskForIdeas };
                                            tmp119 = closure_17(closure_31, obj25);
                                          }
                                          items2[11] = tmp119;
                                          let tmp122 = null;
                                          if (null != tmp30) {
                                            tmp122 = null;
                                            if ("message" in tmp30) {
                                              const obj26 = { variant: "text-sm/normal", color: "text-feedback-critical", children: tmp30.message };
                                              tmp122 = closure_17(tmp(tmp2[17]).Text, obj26);
                                            }
                                          }
                                          items2[12] = tmp122;
                                          obj15.children = items2;
                                          tmp86Result = closure_18(tmp87, obj15);
                                        }
                                        cResult[94] = attachments;
                                        class V {
                                          constructor() {
                                            if (null != replied) {
                                              if (onJumpToReplied != null) {
                                                tmp2Result = tmp2(tmp.id);
                                              }
                                            }
                                            return;
                                          }
                                        }
                                        cResult[96] = clarification;
                                        cResult[97] = tmp46;
                                        cResult[98] = tmp22;
                                        cResult[99] = tmp30;
                                        cResult[100] = groupStart;
                                        cResult[101] = tmp44;
                                        cResult[102] = ideas;
                                        cResult[103] = isNewest;
                                        cResult[104] = message;
                                        cResult[105] = onAnswerClarification;
                                        cResult[106] = onApprove;
                                        cResult[107] = onAskForIdeas;
                                        cResult[108] = onPickIdea;
                                        cResult[109] = tmp45;
                                        cResult[110] = projectId;
                                        cResult[111] = proposal;
                                        cResult[112] = provisionalTodo;
                                        cResult[113] = secretRequest;
                                        cResult[114] = settingsRequest;
                                        cResult[115] = tmp42;
                                        cResult[116] = tmp43;
                                        cResult[117] = arr2;
                                        cResult[118] = tmp4.spoken;
                                        cResult[119] = tmp4.spokenAfterWork;
                                        cResult[120] = tmp4.surface;
                                        cResult[121] = tmp15;
                                        cResult[122] = tmp13;
                                        cResult[123] = tmp86Result;
                                        tmp84 = tmp86Result;
                                      }
                                      const obj27 = { tree: null, turnActive: null };
                                      class V {
                                        constructor() {
                                          if (null != replied) {
                                            if (onJumpToReplied != null) {
                                              tmp2Result = tmp2(tmp.id);
                                            }
                                          }
                                          return;
                                        }
                                      }
                                      obj27.turnActive = !tmp76;
                                      const tmp83 = closure_17(closure_35, obj27);
                                      cResult[91] = !tmp76;
                                      cResult[92] = tmp9;
                                      cResult[93] = tmp83;
                                      tmp80 = tmp83;
                                    }
                                  }
                                }
                              }
                              let tmp73Result = null;
                              if (tmp45) {
                                const obj28 = { style: tmp4.spoken, children: null };
                                const items4 = [, ];
                                class V {
                                  constructor() {
                                    if (null != replied) {
                                      if (onJumpToReplied != null) {
                                        tmp2Result = tmp2(tmp.id);
                                      }
                                    }
                                    return;
                                  }
                                }
                                items4[1] = arr.map((children) => closure_1_17(message(onJumpToReplied[17]).Text, { variant: "text-md/normal", color: "text-default", children: children.content }, children.key));
                                obj28.children = items4;
                                tmp73Result = closure_18(closure_8, obj28);
                              }
                              cResult[83] = tmp67;
                              class V {
                                constructor() {
                                  if (null != replied) {
                                    if (onJumpToReplied != null) {
                                      tmp2Result = tmp2(tmp.id);
                                    }
                                  }
                                  return;
                                }
                              }
                              cResult[85] = arr;
                              cResult[86] = tmp45;
                              cResult[87] = tmp4.spoken;
                              cResult[88] = tmp73Result;
                              tmp71 = tmp73Result;
                            }
                          }
                          const obj29 = { children: null };
                          const items5 = [tmp47, , ];
                          class V {
                            constructor() {
                              if (null != replied) {
                                if (onJumpToReplied != null) {
                                  tmp2Result = tmp2(tmp.id);
                                }
                              }
                              return;
                            }
                          }
                          items5[2] = tmp63;
                          obj29.children = items5;
                          const tmp70 = closure_18(closure_19, obj29);
                          cResult[79] = tmp47;
                          cResult[80] = tmp58;
                          cResult[81] = tmp63;
                          cResult[82] = tmp70;
                          tmp67 = tmp70;
                        }
                        const obj30 = { style: tmp4.header, children: tmp62 };
                        const tmp66 = closure_17(closure_8, obj30);
                        cResult[76] = tmp4.header;
                        cResult[77] = tmp62;
                        cResult[78] = tmp66;
                        tmp63 = tmp66;
                      }
                    }
                    const items6 = [, , ];
                    ({ avatar: arr5[0], avatarSpoken: arr5[1] } = tmp4);
                    items6[2] = avatarSpokenReplying;
                    class V {
                      constructor() {
                        if (null != replied) {
                          if (onJumpToReplied != null) {
                            tmp2Result = tmp2(tmp.id);
                          }
                        }
                        return;
                      }
                    }
                    cResult[67] = tmp4.avatar;
                    cResult[68] = tmp4.avatarSpoken;
                    cResult[69] = avatarSpokenReplying;
                    cResult[70] = items6;
                    tmp53 = items6;
                  }
                }
              }
              let tmp49Result = null;
              if (avatarSpokenReplying) {
                const obj31 = { replied, onJump: null };
                class V {
                  constructor() {
                    if (null != replied) {
                      if (onJumpToReplied != null) {
                        tmp2Result = tmp2(tmp.id);
                      }
                    }
                    return;
                  }
                }
                tmp49Result = closure_17(replied(tmp2[11]), obj31);
                const tmp51 = replied(tmp2[11]);
              }
              cResult[62] = tmp17;
              cResult[63] = onJumpToReplied;
              cResult[64] = replied;
              cResult[65] = avatarSpokenReplying;
              cResult[66] = tmp49Result;
              tmp47 = tmp49Result;
            }
            let tmp41 = null != tmp39;
            if (tmp41) {
              tmp41 = tmp39.content.trim() === tmp22;
            }
            cResult[59] = tmp22;
            cResult[60] = arr2[arr2.length - 1];
            cResult[61] = tmp41;
            tmp40 = tmp41;
          }
        }
        function te() {
          return VibegrationsMessageActionSheet.showVibegrationsMessageActions({ content, userId: user_id });
        }
        class V {
          constructor() {
            if (null != replied) {
              if (onJumpToReplied != null) {
                tmp2Result = tmp2(tmp.id);
              }
            }
            return;
          }
        }
        cResult[23] = user_id;
        cResult[24] = tmp22;
        cResult[25] = te;
      }
      const items7 = [tmp4.row, rowGroupStart];
      cResult[20] = tmp4.row;
      cResult[21] = rowGroupStart;
      cResult[22] = items7;
      tmp25 = items7;
    }
    class V {
      constructor() {
        if (null != replied) {
          if (onJumpToReplied != null) {
            tmp2Result = tmp2(tmp.id);
          }
        }
        return;
      }
    }
    cResult[13] = onJumpToReplied;
    cResult[14] = replied;
    cResult[15] = V;
    tmp17 = V;
  }
  let obj = message(onJumpToReplied[13]);
  const timelineTree = message(onJumpToReplied[24]).buildTimelineTree(message.steps, { turnActive: tmp8 });
  cResult[2] = message.steps;
  cResult[3] = !tmp5;
  cResult[4] = timelineTree;
  tmp9 = timelineTree;
}) : ((onJumpToReplied) => {
  ({ projectId, message } = onJumpToReplied);
  ({ groupStart, isNewest, replied } = onJumpToReplied);
  onJumpToReplied = onJumpToReplied.onJumpToReplied;
  let memo2;
  let trimmed;
  let user_id;
  ({ first, onApprove, onPickIdea, onAskForIdeas, onAnswerClarification } = onJumpToReplied);
  let tmp = closure_26();
  items = [message];
  const memo = memo2.useMemo(() => {
    const obj = VibegrationsTimelineTree;
    return obj.buildTimelineTree(message.steps, { turnActive: !turnSettled(message) });
  }, items);
  const items1 = [message];
  const memo1 = memo2.useMemo(() => VibegrationsTimelineTree.announcementNotes(message.steps), items1);
  const items2 = [message];
  memo2 = memo2.useMemo(() => VibegrationsTimelineTree.streamedMessages(message.steps), items2);
  const items3 = [message];
  const memo3 = memo2.useMemo(() => VibegrationsTimelineTree.latestTodos(message.steps), items3);
  const items4 = [memo];
  const items5 = [onJumpToReplied, replied];
  const memo4 = memo2.useMemo(() => VibegrationsTodoAgents.runningTodoAgents(memo.tasks), items4);
  const items6 = [message.content];
  const callback = memo2.useCallback(() => {
    if (null != replied) {
      if (onJumpToReplied != null) {
        tmp2(tmp.id);
      }
    }
  }, items5);
  const memo5 = memo2.useMemo(() => VibegrationsDesignFeedback.parseVibegrationsDesignRemark(message.content), items6);
  let body;
  if (memo5 != null) {
    body = memo5.body;
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
  const items7 = [tmp.row, ];
  let rowGroupStart = groupStart;
  if (groupStart) {
    rowGroupStart = !first;
  }
  if (rowGroupStart) {
    rowGroupStart = tmp.rowGroupStart;
  }
  items7[1] = rowGroupStart;
  user_id = undefined;
  if ("user" === message.role) {
    user_id = message.user_id;
  }
  const items8 = [trimmed, user_id];
  if ("" !== trimmed) {
    const callback1 = memo2.useCallback(() => VibegrationsMessageActionSheet.showVibegrationsMessageActions({ content: trimmed, userId: user_id }), items8);
  }
  if ("user" === message.role) {
    if ("" === trimmed) {
      if (null == memo5) {
        let tmp75Result2 = null;
      }
      return tmp75Result2;
    }
    const obj2 = { style: items7, onLongPress: callback1, accessible: false, children: null };
    let tmp77 = null;
    if (groupStart) {
      const obj3 = { style: tmp.avatar, children: null };
      const obj4 = { userId: message.user_id };
      obj3.children = closure_17(message(onJumpToReplied[34]).VibegrationsUserAvatar, obj4);
      tmp77 = closure_17(closure_8, obj3);
    }
    const items9 = [tmp77, , , ];
    let tmp82 = null;
    if (groupStart) {
      const obj5 = { style: tmp.header, children: null };
      ({ user_id: obj31.userId, created_at: obj31.at } = message);
      obj5.children = closure_17(message(onJumpToReplied[34]).VibegrationsUserHeader, { userId: null, at: null });
      tmp82 = closure_17(closure_8, obj5);
      const obj6 = { userId: null, at: null };
    }
    items9[1] = tmp82;
    if (tmp11) {
      let combined;
      if (!groupStart) {
        const intl3 = tmp88(tmp89[15]).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + intl3.string(tmp88(tmp89[15]).t.KD6OJJ) + ": " + trimmed;
      }
      const obj7 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: null };
      let tmp92 = null;
      if (null != memo5) {
        const obj8 = { label: memo5.label, variant: "text-md/medium" };
        tmp92 = closure_17(replied(tmp89[35]), obj8);
      }
      const items10 = [tmp92, , ];
      let str6 = null;
      if (null != memo5) {
        str6 = null;
        if (tmp11) {
          str6 = " ";
        }
      }
      items10[1] = str6;
      items10[2] = trimmed;
      obj7.children = items10;
      let tmp75Result = tmp75(message(onJumpToReplied[17]).Text, obj7);
    } else {
      tmp75Result = null;
    }
    items9[2] = tmp75Result;
    let tmp95 = null;
    if (null != attachments) {
      const obj9 = { projectId, attachments };
      tmp95 = closure_17(closure_30, obj9);
    }
    items9[3] = tmp95;
    obj2.children = items9;
    tmp75Result2 = tmp75(closure_7, obj2);
  } else if (true === message.interrupted) {
    const obj10 = { style: items7, children: null };
    const obj11 = { style: tmp.activityBox, children: null };
    const obj12 = { line: null, live: false, settled: true, inGutter: true, glyph: null };
    const intl2 = message(onJumpToReplied[15]).intl;
    obj12.line = intl2.string(replied(onJumpToReplied[16])["5T7DSm"]);
    const obj13 = { size: "refresh_sm", color: replied(onJumpToReplied[7]).colors.TEXT_MUTED };
    obj12.glyph = closure_17(message(onJumpToReplied[36]).StopIcon, obj13);
    obj11.children = closure_17(replied(onJumpToReplied[8]), obj12);
    obj10.children = closure_17(closure_8, obj11);
    return closure_17(closure_8, obj10);
  } else {
    const steps = message.steps;
    const found = steps.find((kind) => {
      let tmp = "error" === kind.kind;
      if (!tmp) {
        tmp = "terminal_error" === kind.kind;
      }
      return tmp;
    });
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
    let items17 = memo3;
    if (memo3 == null) {
      let todos = null;
      if (null != message.todos) {
        todos = null;
        if (message.todos.length > 0) {
          todos = message.todos;
        }
      }
      items17 = todos;
    }
    let provisionalTodo;
    if (null == items17) {
      if (null != message.provisionalTodo) {
        if ("" !== message.provisionalTodo) {
          provisionalTodo = message.provisionalTodo;
        }
      }
    }
    let tmp21 = null != tmp20;
    if (tmp21) {
      tmp21 = tmp20.content.trim() === trimmed;
    }
    let spokenAfterWork = memo.steps.length > 0 || memo.tasks.length > 0;
    if (!spokenAfterWork) {
      if (0 === memo1.length) {
        if (0 === memo2.length) {
          if ("" === trimmed) {
            if (null == proposal) {
              if (null == found) {
                if (null == ideas) {
                  if (null == items17) {
                    if (null == provisionalTodo) {
                      if (null == secretRequest) {
                        if (null == settingsRequest) {
                          if (null == attachments) {
                            if (null == clarification) {
                              if (!tmp23) {
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
    let avatarSpokenReplying = groupStart;
    if (groupStart) {
      avatarSpokenReplying = null != replied;
    }
    let tmp29Result = null;
    if (avatarSpokenReplying) {
      const obj14 = { replied, onJump: null };
      let tmp33;
      if (null != onJumpToReplied) {
        tmp33 = callback;
      }
      obj14.onJump = tmp33;
      tmp29Result = closure_17(replied(onJumpToReplied[11]), obj14);
      const tmp32 = replied(onJumpToReplied[11]);
    }
    const items11 = [tmp29Result, , ];
    const items12 = [, , ];
    ({ avatar: arr14[0], avatarSpoken: arr14[1] } = tmp);
    if (avatarSpokenReplying) {
      avatarSpokenReplying = tmp.avatarSpokenReplying;
    }
    const obj15 = { children: null };
    const obj16 = { style: null, children: null };
    items12[2] = avatarSpokenReplying;
    obj16.style = items12;
    obj16.children = closure_17(message(onJumpToReplied[34]).VibegrationsConjureAvatar, {});
    items11[1] = closure_17(closure_8, obj16);
    const obj17 = { style: tmp.header, children: null };
    const obj18 = { at: message.created_at };
    obj17.children = closure_17(message(onJumpToReplied[34]).VibegrationsConjureHeader, obj18);
    items11[2] = closure_17(closure_8, obj17);
    obj15.children = items11;
    const tmp26Result = closure_18(closure_19, obj15);
    const obj19 = { style: items7, onLongPress: callback1, accessible: false, children: null };
    let tmp26Result3 = null;
    if (memo1.length > 0) {
      const obj20 = { style: tmp.spoken, children: null };
      let tmp41 = null;
      if (groupStart) {
        tmp41 = tmp26Result;
      }
      const items13 = [tmp41, memo1.map((children) => closure_1_17(message(onJumpToReplied[17]).Text, { variant: "text-md/normal", color: "text-default", children: children.content }, children.key))];
      obj20.children = items13;
      tmp26Result3 = tmp26(tmp35, obj20);
    }
    const items14 = [tmp26Result3, , ];
    const obj21 = { tree: memo, turnActive: !turnSettled(message) };
    items14[1] = closure_17(closure_35, obj21);
    let tmp26Result4 = null;
    if (tmp25) {
      const items15 = [tmp.spoken, ];
      if (spokenAfterWork) {
        spokenAfterWork = groupStart;
      }
      if (spokenAfterWork) {
        spokenAfterWork = !tmp24;
      }
      if (spokenAfterWork) {
        spokenAfterWork = tmp.spokenAfterWork;
      }
      const obj22 = { style: null, children: null };
      items15[1] = spokenAfterWork;
      obj22.style = items15;
      let tmp45 = null;
      if (groupStart) {
        tmp45 = null;
        if (!tmp24) {
          tmp45 = tmp26Result;
        }
      }
      const items16 = [
        tmp45,
        memo2.map((content, index) => {
              const obj = { source: content.content, streaming: null };
              const tmp2 = turnSettled(message);
              let tmp3 = !tmp2;
              if (!tmp2) {
                tmp3 = index === memo2.length - 1;
              }
              obj.streaming = tmp3;
              return constants(VibegrationsNativeMarkdown.VibegrationsRevealedMarkdown, obj, content.key);
            }),
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,

      ];
      let tmp34Result = null;
      if (tmp22) {
        const obj23 = { source: trimmed };
        tmp34Result = tmp34(replied(tmp37[20]), obj23);
      }
      items16[2] = tmp34Result;
      let tmp34Result11 = null;
      if ("side_reply" === message.kind) {
        const obj24 = { variant: "text-xs/normal", color: "text-muted", children: null };
        const intl = tmp36(tmp37[15]).intl;
        obj24.children = intl.string(replied(tmp37[16]).OAjkIT);
        tmp34Result11 = tmp34(tmp36(tmp37[17]).Text, obj24);
      }
      items16[3] = tmp34Result11;
      let tmp34Result12 = null;
      if (null != attachments) {
        const obj25 = { projectId, attachments };
        tmp34Result12 = tmp34(closure_30, obj25);
      }
      items16[4] = tmp34Result12;
      if (null != items17) {
        const obj26 = { style: tmp.surface, children: null };
        if (items17 == null) {
          items17 = [];
        }
        const obj27 = { todos: items17, provisional: provisionalTodo, agents: memo4 };
        obj26.children = tmp34(replied(tmp37[37]), obj27);
        let tmp34Result13 = tmp34(tmp35, obj26);
        const tmp54 = replied(tmp37[37]);
      } else {
        tmp34Result13 = null;
      }
      items16[5] = tmp34Result13;
      let tmp34Result14 = null;
      if (null != proposal) {
        const obj28 = { projectId, proposal, actionable: isNewest, onApprove };
        tmp34Result14 = tmp34(closure_28, obj28);
      }
      items16[6] = tmp34Result14;
      let tmp34Result15 = null;
      if (null != clarification) {
        const obj29 = { clarification, onSubmit: onAnswerClarification };
        tmp34Result15 = tmp34(replied(tmp37[38]), obj29);
      }
      items16[7] = tmp34Result15;
      let tmp34Result16 = null;
      if (null != secretRequest) {
        const obj30 = { projectId, request: secretRequest };
        tmp34Result16 = tmp34(replied(tmp37[39]), obj30);
      }
      items16[8] = tmp34Result16;
      let tmp34Result17 = null;
      if (null != settingsRequest) {
        const obj32 = { projectId, request: settingsRequest };
        tmp34Result17 = tmp34(replied(tmp37[40]), obj32);
      }
      items16[9] = tmp34Result17;
      let tmp34Result18 = null;
      if (null != ideas) {
        const obj33 = { ideas, onPick: onPickIdea };
        tmp34Result18 = tmp34(closure_29, obj33);
      }
      items16[10] = tmp34Result18;
      let tmp34Result19 = null;
      if (tmp23) {
        const obj34 = { onAsk: onAskForIdeas };
        tmp34Result19 = tmp34(closure_31, obj34);
      }
      items16[11] = tmp34Result19;
      let tmp34Result20 = null;
      if (null != found) {
        tmp34Result20 = null;
        if ("message" in found) {
          const obj67 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
          tmp34Result20 = tmp34(tmp36(tmp37[17]).Text, obj67);
        }
      }
      items16[12] = tmp34Result20;
      obj22.children = items16;
      tmp26Result4 = tmp26(tmp35, obj22);
    }
    items14[2] = tmp26Result4;
    obj19.children = items14;
    return closure_18(closure_7, obj19);
  }
}));
ReactCompilerGating = fn(558);
let obj14 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeChat.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = projectId(stateFromStores1[13]).c(173);
  projectId = projectId.projectId;
  closure_26();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [Pe];
    const fn = function o() {
      return "active" === Pe.getState();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp7 = items;
    tmp8 = fn;
    tmp9 = items1;
  } else {
    [tmp7, tmp8, tmp9] = cResult;
  }
  let obj = projectId(stateFromStores1[13]);
  const stateFromStores = projectId(stateFromStores1[41]).useStateFromStores(tmp7, tmp8, tmp9);
  const bottom = stateFromStores(tmp4[42])().bottom;
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === projectId) {
      let tmp12 = cResult[5];
      let tmp13 = cResult[6];
    }
    const effect = render_id.useEffect(tmp12, tmp13);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [VibegrationsChatStore];
      cResult[7] = items2;
      let tmp15 = items2;
    } else {
      tmp15 = cResult[7];
    }
    if (cResult[8] !== projectId) {
      class R {
        constructor() {
          return closure_10.getMessages(projectId);
        }
      }
      const items3 = [projectId];
      cResult[8] = projectId;
      cResult[9] = R;
      cResult[10] = items3;
      let tmp18 = items3;
      const tmp17 = R;
    } else {
      class R {
        constructor() {
          return closure_10.getMessages(projectId);
        }
      }
      tmp18 = cResult[10];
    }
    stateFromStores1 = tmp2(tmp4[41]).useStateFromStores(tmp15, tmp17, tmp18);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return closure_10.getMessages(projectId);
        }
      }
      const items4 = [VibegrationsChatStore];
      cResult[11] = items4;
      const tmp21 = items4;
    } else {
      class R {
        constructor() {
          return closure_10.getMessages(projectId);
        }
      }
    }
    if (cResult[12] !== projectId) {
      class F {
        constructor() {
          return closure_10.isThinking(projectId);
        }
      }
      const items5 = [projectId];
      cResult[12] = projectId;
      cResult[13] = F;
      cResult[14] = items5;
      let tmp23 = items5;
      const tmp22 = F;
    } else {
      class F {
        constructor() {
          return closure_10.isThinking(projectId);
        }
      }
      tmp23 = cResult[14];
    }
    const obj3 = render_id;
    const tmp2Result10 = tmp2(tmp4[41]);
    const stateFromStores2 = tmp2(tmp4[41]).useStateFromStores(tmp21, tmp22, tmp23);
    const _Symbol3 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          return closure_10.isThinking(projectId);
        }
      }
      const items6 = [VibegrationsChatStore];
      cResult[15] = items6;
      const tmp27 = items6;
    } else {
      class F {
        constructor() {
          return closure_10.isThinking(projectId);
        }
      }
    }
    if (cResult[16] !== projectId) {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      const items7 = [projectId];
      cResult[16] = projectId;
      cResult[17] = H;
      cResult[18] = items7;
      let tmp29 = items7;
      const tmp28 = H;
    } else {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      tmp29 = cResult[18];
    }
    const tmp2Result11 = tmp2(tmp4[41]);
    const stateFromStores3 = tmp2(tmp4[41]).useStateFromStores(tmp27, tmp28, tmp29);
    class C {
      constructor() {
        if (closure_1) {
          tmp = ensureConnection;
          tmp2 = projectId;
          tmp3 = ensureConnection(projectId);
        }
        return;
      }
    }
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      const items8 = [VibegrationsChatStore];
      cResult[19] = items8;
      const tmp33 = items8;
    } else {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
    }
    if (cResult[20] !== projectId) {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      const items9 = [projectId];
      cResult[20] = projectId;
      cResult[21] = tmp36;
      cResult[22] = items9;
      let tmp35 = items9;
      const tmp34 = tmp36;
    } else {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      tmp35 = cResult[22];
    }
    const tmp2Result12 = tmp2(tmp4[41]);
    const stateFromStores4 = tmp2(tmp4[41]).useStateFromStores(tmp33, tmp34, tmp35);
    const _Symbol4 = Symbol;
    if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      const items10 = [VibegrationsChatStore];
      cResult[23] = items10;
      const tmp40 = items10;
    } else {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
    }
    if (cResult[24] !== projectId) {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      const items11 = [projectId];
      cResult[24] = projectId;
      cResult[25] = tmp43;
      cResult[26] = items11;
      let tmp42 = items11;
      const tmp41 = tmp43;
    } else {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      tmp42 = cResult[26];
    }
    const tmp2Result13 = tmp2(tmp4[41]);
    const stateFromStores5 = tmp2(tmp4[41]).useStateFromStores(tmp40, tmp41, tmp42);
    const tmp2Result14 = tmp2(tmp4[41]);
    [tmp50, tmp51] = obj3.useState(null);
    _slicedToArray = tmp51;
    let tmp52 = null == tmp50;
    if (!tmp52) {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      if (stateFromStores2) {
        class H {
          constructor() {
            return closure_10.isCompacting(projectId);
          }
        }
      }
      tmp52 = tmp53;
    }
    if (!tmp52) {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
    }
    if (cResult[27] !== projectId) {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      cResult[27] = projectId;
      cResult[28] = tmp55;
    } else {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
    }
    if (stateFromStores2) {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
    }
    const _Symbol5 = Symbol;
    if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      const items12 = [ref];
      cResult[29] = items12;
      const tmp57 = items12;
    } else {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
    }
    if (cResult[30] !== projectId) {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      const items13 = [projectId];
      cResult[30] = projectId;
      cResult[31] = tmp60;
      cResult[32] = items13;
      let tmp59 = items13;
      const tmp58 = tmp60;
    } else {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      tmp59 = cResult[32];
    }
    const tmp49 = _slicedToArray(obj3.useState(null), 2);
    const stateFromStores6 = tmp2(tmp4[41]).useStateFromStores(tmp57, tmp58, tmp59);
    const _Symbol6 = Symbol;
    if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      const items14 = [ref];
      cResult[33] = items14;
      const tmp64 = items14;
    } else {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
    }
    if (cResult[34] !== projectId) {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      const items15 = [projectId];
      cResult[34] = projectId;
      cResult[35] = tmp67;
      cResult[36] = items15;
      let tmp66 = items15;
      const tmp65 = tmp67;
    } else {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      tmp66 = cResult[36];
    }
    const tmp2Result15 = tmp2(tmp4[41]);
    const stateFromStores7 = tmp2(tmp4[41]).useStateFromStores(tmp64, tmp65, tmp66);
    const _Symbol7 = Symbol;
    if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      const items16 = [VibegrationsChatStore];
      cResult[37] = items16;
      const tmp71 = items16;
    } else {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
    }
    if (cResult[38] !== projectId) {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      const items17 = [projectId];
      cResult[38] = projectId;
      cResult[39] = tmp74;
      cResult[40] = items17;
      let tmp73 = items17;
      const tmp72 = tmp74;
    } else {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      tmp73 = cResult[40];
    }
    const tmp2Result16 = tmp2(tmp4[41]);
    const stateFromStores8 = tmp2(tmp4[41]).useStateFromStores(tmp71, tmp72, tmp73);
    render_id = null;
    if (stateFromStores1.length > 0) {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      render_id = stateFromStores1[stateFromStores1.length - 1].render_id;
    }
    if (cResult[41] !== stateFromStores1) {
      class H {
        constructor() {
          return closure_10.isCompacting(projectId);
        }
      }
      if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
        class Se {
          constructor(arg0) {
            obj = { key: projectId.render_id, actor: null, authorId: null, boundary: null, separate: null };
            str = "assistant";
            if ("user" === projectId.role) {
              str = "user";
            }
            obj.actor = str;
            user_id = undefined;
            if ("user" === projectId.role) {
              user_id = projectId.user_id;
            }
            obj.authorId = user_id;
            render_id = undefined;
            if ("user" !== projectId.role) {
              render_id = projectId.render_id;
            }
            obj.boundary = render_id;
            tmp3 = "assistant" === projectId.role;
            if (tmp3) {
              tmp4 = null;
              tmp5 = null != projectId.proposal || null != projectId.clarification;
              if (!tmp5) {
                str2 = "side_reply";
                tmp5 = "side_reply" === projectId.kind;
              }
              if (!tmp5) {
                tmp5 = null != projectId.in_reply_to;
              }
              tmp3 = tmp5;
            }
            obj.separate = tmp3;
            return obj;
          }
        }
        cResult[43] = Se;
        const tmp80 = Se;
      } else {
        class Se {
          constructor(arg0) {
            obj = { key: projectId.render_id, actor: null, authorId: null, boundary: null, separate: null };
            str = "assistant";
            if ("user" === projectId.role) {
              str = "user";
            }
            obj.actor = str;
            user_id = undefined;
            if ("user" === projectId.role) {
              user_id = projectId.user_id;
            }
            obj.authorId = user_id;
            render_id = undefined;
            if ("user" !== projectId.role) {
              render_id = projectId.render_id;
            }
            obj.boundary = render_id;
            tmp3 = "assistant" === projectId.role;
            if (tmp3) {
              tmp4 = null;
              tmp5 = null != projectId.proposal || null != projectId.clarification;
              if (!tmp5) {
                str2 = "side_reply";
                tmp5 = "side_reply" === projectId.kind;
              }
              if (!tmp5) {
                tmp5 = null != projectId.in_reply_to;
              }
              tmp3 = tmp5;
            }
            obj.separate = tmp3;
            return obj;
          }
        }
      }
      const groupChatRowsResult = tmp2(tmp4[43]).groupChatRows(stateFromStores1.map(tmp80));
      cResult[41] = stateFromStores1;
      cResult[42] = groupChatRowsResult;
      const tmp2Result18 = tmp2(tmp4[43]);
    } else {
      class Se {
        constructor(arg0) {
          obj = { key: projectId.render_id, actor: null, authorId: null, boundary: null, separate: null };
          str = "assistant";
          if ("user" === projectId.role) {
            str = "user";
          }
          obj.actor = str;
          user_id = undefined;
          if ("user" === projectId.role) {
            user_id = projectId.user_id;
          }
          obj.authorId = user_id;
          render_id = undefined;
          if ("user" !== projectId.role) {
            render_id = projectId.render_id;
          }
          obj.boundary = render_id;
          tmp3 = "assistant" === projectId.role;
          if (tmp3) {
            tmp4 = null;
            tmp5 = null != projectId.proposal || null != projectId.clarification;
            if (!tmp5) {
              str2 = "side_reply";
              tmp5 = "side_reply" === projectId.kind;
            }
            if (!tmp5) {
              tmp5 = null != projectId.in_reply_to;
            }
            tmp3 = tmp5;
          }
          obj.separate = tmp3;
          return obj;
        }
      }
      if (cResult[44] !== projectId) {
        class Se {
          constructor(arg0) {
            obj = { key: projectId.render_id, actor: null, authorId: null, boundary: null, separate: null };
            str = "assistant";
            if ("user" === projectId.role) {
              str = "user";
            }
            obj.actor = str;
            user_id = undefined;
            if ("user" === projectId.role) {
              user_id = projectId.user_id;
            }
            obj.authorId = user_id;
            render_id = undefined;
            if ("user" !== projectId.role) {
              render_id = projectId.render_id;
            }
            obj.boundary = render_id;
            tmp3 = "assistant" === projectId.role;
            if (tmp3) {
              tmp4 = null;
              tmp5 = null != projectId.proposal || null != projectId.clarification;
              if (!tmp5) {
                str2 = "side_reply";
                tmp5 = "side_reply" === projectId.kind;
              }
              if (!tmp5) {
                tmp5 = null != projectId.in_reply_to;
              }
              tmp3 = tmp5;
            }
            obj.separate = tmp3;
            return obj;
          }
        }
        cResult[44] = projectId;
        cResult[45] = tmp86;
        const tmp85 = tmp86;
      } else {
        class Se {
          constructor(arg0) {
            obj = { key: projectId.render_id, actor: null, authorId: null, boundary: null, separate: null };
            str = "assistant";
            if ("user" === projectId.role) {
              str = "user";
            }
            obj.actor = str;
            user_id = undefined;
            if ("user" === projectId.role) {
              user_id = projectId.user_id;
            }
            obj.authorId = user_id;
            render_id = undefined;
            if ("user" !== projectId.role) {
              render_id = projectId.render_id;
            }
            obj.boundary = render_id;
            tmp3 = "assistant" === projectId.role;
            if (tmp3) {
              tmp4 = null;
              tmp5 = null != projectId.proposal || null != projectId.clarification;
              if (!tmp5) {
                str2 = "side_reply";
                tmp5 = "side_reply" === projectId.kind;
              }
              if (!tmp5) {
                tmp5 = null != projectId.in_reply_to;
              }
              tmp3 = tmp5;
            }
            obj.separate = tmp3;
            return obj;
          }
        }
      }
      const onApprove = tmp85;
      if (cResult[46] !== projectId) {
        class Ie {
          constructor(arg0) {
            tmp = sendUserMessage(projectId, projectId.implementation_prompt);
            return;
          }
        }
        cResult[46] = projectId;
        cResult[47] = Ie;
        const tmp87 = Ie;
      } else {
        class Ie {
          constructor(arg0) {
            tmp = sendUserMessage(projectId, projectId.implementation_prompt);
            return;
          }
        }
      }
      Ie = tmp87;
      if (cResult[48] !== projectId) {
        class Ee {
          constructor() {
            intl = closure_0(closure_2[15]).intl;
            tmp = sendUserMessage(projectId, intl.string(closure_1(closure_2[16])["3sTTBu"]));
            return;
          }
        }
        cResult[48] = projectId;
        cResult[49] = Ee;
        const tmp88 = Ee;
      } else {
        class Ee {
          constructor() {
            intl = closure_0(closure_2[15]).intl;
            tmp = sendUserMessage(projectId, intl.string(closure_1(closure_2[16])["3sTTBu"]));
            return;
          }
        }
      }
      Ee = tmp88;
      if (cResult[50] !== projectId) {
        class Pe {
          constructor(arg0) {
            tmp = sendUserMessage(projectId, projectId);
            return;
          }
        }
        cResult[50] = projectId;
        cResult[51] = Pe;
        const tmp89 = Pe;
      } else {
        class Pe {
          constructor(arg0) {
            tmp = sendUserMessage(projectId, projectId);
            return;
          }
        }
      }
      Pe = tmp89;
      let tmp91 = tmp90;
      if ("open" !== stateFromStores6) {
        class Pe {
          constructor(arg0) {
            tmp = sendUserMessage(projectId, projectId);
            return;
          }
        }
        tmp91 = "connecting" === stateFromStores6;
      }
      if (tmp91) {
        class Pe {
          constructor(arg0) {
            tmp = sendUserMessage(projectId, projectId);
            return;
          }
        }
      }
      VibegrationsChatStore = tmp91;
      const diff = stateFromStores1.length - 1;
      let tmp93 = null;
      if (0 <= diff) {
        class Pe {
          constructor(arg0) {
            tmp = sendUserMessage(projectId, projectId);
            return;
          }
        }
        while (true) {
          class Pe {
            constructor(arg0) {
              tmp = sendUserMessage(projectId, projectId);
              return;
            }
          }
          if ("assistant" !== tmp94.role) {
            class Pe {
              constructor(arg0) {
                tmp = sendUserMessage(projectId, projectId);
                return;
              }
            }
            tmp93 = null;
            if (0 > diff) {
              class Pe {
                constructor(arg0) {
                  tmp = sendUserMessage(projectId, projectId);
                  return;
                }
              }
            } else {
              class Pe {
                constructor(arg0) {
                  tmp = sendUserMessage(projectId, projectId);
                  return;
                }
              }
            }
          } else {
            class Pe {
              constructor(arg0) {
                tmp = sendUserMessage(projectId, projectId);
                return;
              }
            }
            tmp93 = diff;
            if (!turnSettled(tmp94)) {
              class Pe {
                constructor(arg0) {
                  tmp = sendUserMessage(projectId, projectId);
                  return;
                }
              }
            }
          }
          break;
        }
      }
      turnSettled = tmp93;
      if (tmp96) {
        class Pe {
          constructor(arg0) {
            tmp = sendUserMessage(projectId, projectId);
            return;
          }
        }
      }
      if (cResult[52] !== undefined) {
        class Pe {
          constructor(arg0) {
            tmp = sendUserMessage(projectId, projectId);
            return;
          }
        }
        if (null != tmp97) {
          class Pe {
            constructor(arg0) {
              tmp = sendUserMessage(projectId, projectId);
              return;
            }
          }
          const timelineTree = projectId(stateFromStores1[24]).buildTimelineTree(tmp97.steps, { turnActive: true });
          const obj13 = projectId(stateFromStores1[24]);
        }
        cResult[52] = tmp97;
        cResult[53] = timelineTree;
        const tmp98 = timelineTree;
      } else {
        class Pe {
          constructor(arg0) {
            tmp = sendUserMessage(projectId, projectId);
            return;
          }
        }
      }
      let tmp103 = null != tmp98;
      if (tmp103) {
        class Pe {
          constructor(arg0) {
            tmp = sendUserMessage(projectId, projectId);
            return;
          }
        }
        tmp103 = tmp104;
      }
      class C {
        constructor() {
          if (closure_1) {
            tmp = ensureConnection;
            tmp2 = projectId;
            tmp3 = ensureConnection(projectId);
          }
          return;
        }
      }
      [r10362, closure_12] = render_id.useState(null);
      let num54 = 64;
      const tmp106 = _slicedToArray;
      const tmp107 = _slicedToArray(render_id.useState(null), 2);
      tmp96 = null != tmp93;
      [tmp109, closure_13] = render_id.useState(64);
      const _Symbol8 = Symbol;
      if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
        class Ve {
          constructor(arg0) {
            closure_0 = Math.round(projectId.nativeEvent.layout.height);
            tmp = closure_13((arg0) => {
              let tmp = closure_0;
              if (arg0 === closure_0) {
                tmp = arg0;
              }
              return tmp;
            });
            return;
          }
        }
        cResult[56] = Ve;
      } else {
        class Ve {
          constructor(arg0) {
            closure_0 = Math.round(projectId.nativeEvent.layout.height);
            tmp = closure_13((arg0) => {
              let tmp = closure_0;
              if (arg0 === closure_0) {
                tmp = arg0;
              }
              return tmp;
            });
            return;
          }
        }
      }
      if (cResult[57] !== tmp109) {
        class Ve {
          constructor(arg0) {
            closure_0 = Math.round(projectId.nativeEvent.layout.height);
            tmp = closure_13((arg0) => {
              let tmp = closure_0;
              if (arg0 === closure_0) {
                tmp = arg0;
              }
              return tmp;
            });
            return;
          }
        }
        let bound = tmp109;
        if (!obj15.isIOS()) {
          class Ve {
            constructor(arg0) {
              closure_0 = Math.round(projectId.nativeEvent.layout.height);
              tmp = closure_13((arg0) => {
                let tmp = closure_0;
                if (arg0 === closure_0) {
                  tmp = arg0;
                }
                return tmp;
              });
              return;
            }
          }
          bound = Math.min(tmp109, c21);
        }
        cResult[57] = tmp109;
        cResult[58] = bound;
        obj15 = projectId(stateFromStores1[28]);
        const tmp111 = bound;
      } else {
        class Ve {
          constructor(arg0) {
            closure_0 = Math.round(projectId.nativeEvent.layout.height);
            tmp = closure_13((arg0) => {
              let tmp = closure_0;
              if (arg0 === closure_0) {
                tmp = arg0;
              }
              return tmp;
            });
            return;
          }
        }
      }
      bound = tmp111;
      obj14.useRef(null);
      ref = obj14.useRef(null);
      render_id.useRef(false);
      const tmp108 = _slicedToArray(render_id.useState(64), 2);
      [r10403, closure_18] = tmp106(render_id.useState(false), 2);
      render_id.useRef(null);
      render_id.useRef(0);
      const _Symbol9 = Symbol;
      if (cResult[59] === Symbol.for("react.memo_cache_sentinel")) {
        class Ve {
          constructor(arg0) {
            closure_0 = Math.round(projectId.nativeEvent.layout.height);
            tmp = closure_13((arg0) => {
              let tmp = closure_0;
              if (arg0 === closure_0) {
                tmp = arg0;
              }
              return tmp;
            });
            return;
          }
        }
        cResult[59] = tmp120;
        const tmp119 = tmp120;
      } else {
        class Ve {
          constructor(arg0) {
            closure_0 = Math.round(projectId.nativeEvent.layout.height);
            tmp = closure_13((arg0) => {
              let tmp = closure_0;
              if (arg0 === closure_0) {
                tmp = arg0;
              }
              return tmp;
            });
            return;
          }
        }
      }
      c21 = tmp119;
      const _Symbol10 = Symbol;
      if (cResult[60] === Symbol.for("react.memo_cache_sentinel")) {
        class Ve {
          constructor(arg0) {
            closure_0 = Math.round(projectId.nativeEvent.layout.height);
            tmp = closure_13((arg0) => {
              let tmp = closure_0;
              if (arg0 === closure_0) {
                tmp = arg0;
              }
              return tmp;
            });
            return;
          }
        }
        cResult[60] = tmp122;
      } else {
        class Ve {
          constructor(arg0) {
            closure_0 = Math.round(projectId.nativeEvent.layout.height);
            tmp = closure_13((arg0) => {
              let tmp = closure_0;
              if (arg0 === closure_0) {
                tmp = arg0;
              }
              return tmp;
            });
            return;
          }
        }
      }
      const _Symbol11 = Symbol;
      if (cResult[61] === Symbol.for("react.memo_cache_sentinel")) {
        class Ve {
          constructor(arg0) {
            closure_0 = Math.round(projectId.nativeEvent.layout.height);
            tmp = closure_13((arg0) => {
              let tmp = closure_0;
              if (arg0 === closure_0) {
                tmp = arg0;
              }
              return tmp;
            });
            return;
          }
        }
        cResult[61] = tmp124;
      } else {
        class Ve {
          constructor(arg0) {
            closure_0 = Math.round(projectId.nativeEvent.layout.height);
            tmp = closure_13((arg0) => {
              let tmp = closure_0;
              if (arg0 === closure_0) {
                tmp = arg0;
              }
              return tmp;
            });
            return;
          }
        }
      }
      const _Symbol12 = Symbol;
      if (cResult[62] === Symbol.for("react.memo_cache_sentinel")) {
        class Ve {
          constructor(arg0) {
            closure_0 = Math.round(projectId.nativeEvent.layout.height);
            tmp = closure_13((arg0) => {
              let tmp = closure_0;
              if (arg0 === closure_0) {
                tmp = arg0;
              }
              return tmp;
            });
            return;
          }
        }
        tmp126[0] = projectId(stateFromStores1[44]).MIN_VISIBLE_PERCENT;
        cResult[62] = tmp126;
      } else {
        class Ve {
          constructor(arg0) {
            closure_0 = Math.round(projectId.nativeEvent.layout.height);
            tmp = closure_13((arg0) => {
              let tmp = closure_0;
              if (arg0 === closure_0) {
                tmp = arg0;
              }
              return tmp;
            });
            return;
          }
        }
      }
      const _Symbol13 = Symbol;
      if (cResult[63] === Symbol.for("react.memo_cache_sentinel")) {
        class Ve {
          constructor(arg0) {
            closure_0 = Math.round(projectId.nativeEvent.layout.height);
            tmp = closure_13((arg0) => {
              let tmp = closure_0;
              if (arg0 === closure_0) {
                tmp = arg0;
              }
              return tmp;
            });
            return;
          }
        }
        cResult[63] = tmp132;
      } else {
        class Ve {
          constructor(arg0) {
            closure_0 = Math.round(projectId.nativeEvent.layout.height);
            tmp = closure_13((arg0) => {
              let tmp = closure_0;
              if (arg0 === closure_0) {
                tmp = arg0;
              }
              return tmp;
            });
            return;
          }
        }
      }
      if (cResult[64] === tmp105) {
        class Ve {
          constructor(arg0) {
            closure_0 = Math.round(projectId.nativeEvent.layout.height);
            tmp = closure_13((arg0) => {
              let tmp = closure_0;
              if (arg0 === closure_0) {
                tmp = arg0;
              }
              return tmp;
            });
            return;
          }
        }
      }
      if (stateFromStores3) {
        class Ve {
          constructor(arg0) {
            closure_0 = Math.round(projectId.nativeEvent.layout.height);
            tmp = closure_13((arg0) => {
              let tmp = closure_0;
              if (arg0 === closure_0) {
                tmp = arg0;
              }
              return tmp;
            });
            return;
          }
        }
        const intl2 = projectId(stateFromStores1[15]).intl;
        let stringResult = intl2.string(stateFromStores(stateFromStores1[16])["0vH/5G"]);
      } else {
        class Ve {
          constructor(arg0) {
            closure_0 = Math.round(projectId.nativeEvent.layout.height);
            tmp = closure_13((arg0) => {
              let tmp = closure_0;
              if (arg0 === closure_0) {
                tmp = arg0;
              }
              return tmp;
            });
            return;
          }
        }
        if (tmp105 == null) {
          class Ve {
            constructor(arg0) {
              closure_0 = Math.round(projectId.nativeEvent.layout.height);
              tmp = closure_13((arg0) => {
                let tmp = closure_0;
                if (arg0 === closure_0) {
                  tmp = arg0;
                }
                return tmp;
              });
              return;
            }
          }
          let intl = projectId(stateFromStores1[15]).intl;
          stringResult = intl.string(stateFromStores(stateFromStores1[16]).QDGuNS);
        }
      }
      cResult[num54] = tmp105;
      cResult[65] = stateFromStores3;
      num54 = 66;
      cResult[66] = stringResult;
      const tmp106Result = tmp106(render_id.useState(false), 2);
    }
    const tmp2Result17 = tmp2(tmp4[41]);
  }
  class C {
    constructor() {
      if (closure_1) {
        tmp = ensureConnection;
        tmp2 = projectId;
        tmp3 = ensureConnection(projectId);
      }
      return;
    }
  }
  const items18 = [stateFromStores, projectId];
  cResult[3] = stateFromStores;
  cResult[4] = projectId;
  cResult[5] = C;
  cResult[6] = items18;
  tmp13 = items18;
  tmp12 = C;
}) : ((projectId) => {
  projectId = projectId.projectId;
  let stateFromStores1;
  let render_id;
  closure_5 = undefined;
  let onApprove;
  let onPickIdea;
  closure_8 = undefined;
  state = undefined;
  closure_10 = undefined;
  let memo;
  let memo1;
  c13 = undefined;
  c14 = undefined;
  let bound;
  let ref;
  let ref2;
  c19 = undefined;
  autoscrollToBottomThreshold = undefined;
  fadingEdgeLength = undefined;
  let callback2;
  closure_23 = undefined;
  let onJumpToReplied;
  let tmp = closure_26();
  items = [state];
  const stateFromStores = projectId(stateFromStores1[41]).useStateFromStores(items, () => "active" === state.getState(), []);
  const items1 = [stateFromStores, projectId];
  const effect = render_id.useEffect(() => {
    if (stateFromStores) {
      __initData(projectId);
    }
  }, items1);
  let obj = projectId(stateFromStores1[41]);
  const items2 = [closure_10];
  const items3 = [projectId];
  stateFromStores1 = projectId(stateFromStores1[41]).useStateFromStores(items2, () => VibegrationsChatStore.getMessages(projectId), items3);
  const obj3 = projectId(stateFromStores1[41]);
  let tmp7 = closure_10;
  const items4 = [closure_10];
  const items5 = [projectId];
  const stateFromStores2 = projectId(stateFromStores1[41]).useStateFromStores(items4, () => VibegrationsChatStore.isThinking(projectId), items5);
  const obj4 = projectId(stateFromStores1[41]);
  const items6 = [closure_10];
  const items7 = [projectId];
  const stateFromStores3 = projectId(stateFromStores1[41]).useStateFromStores(items6, () => VibegrationsChatStore.isCompacting(projectId), items7);
  const obj5 = projectId(stateFromStores1[41]);
  const items8 = [closure_10];
  const items9 = [projectId];
  const stateFromStores4 = projectId(stateFromStores1[41]).useStateFromStores(items8, () => VibegrationsChatStore.getThinkingActivity(projectId), items9);
  const obj6 = projectId(stateFromStores1[41]);
  const items10 = [closure_10];
  const items11 = [projectId];
  const stateFromStores5 = projectId(stateFromStores1[41]).useStateFromStores(items10, () => VibegrationsChatStore.getProjectUsage(projectId), items11);
  const obj7 = projectId(stateFromStores1[41]);
  [tmp14, tmp15] = render_id.useState(null);
  _slicedToArray = tmp15;
  let tmp16 = null == tmp14;
  if (!tmp16) {
    let tmp17 = stateFromStores2;
    if (stateFromStores2) {
      tmp17 = tmp14 === projectId;
    }
    tmp16 = tmp17;
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
  const tmp13 = _slicedToArray(render_id.useState(null), 2);
  const items13 = [ref];
  const items14 = [projectId];
  const stateFromStores6 = projectId(stateFromStores1[41]).useStateFromStores(items13, () => VibegrationsConnectionStore.getConnState(projectId), items14);
  const tmp2Result = projectId(stateFromStores1[41]);
  const items15 = [ref];
  const items16 = [projectId];
  const stateFromStores7 = projectId(stateFromStores1[41]).useStateFromStores(items15, () => VibegrationsConnectionStore.isChatStopped(projectId), items16);
  const tmp2Result8 = projectId(stateFromStores1[41]);
  const items17 = [tmp7];
  const items18 = [projectId];
  render_id = null;
  const stateFromStores8 = projectId(stateFromStores1[41]).useStateFromStores(items17, () => VibegrationsChatStore.hasLoadedHistory(projectId), items18);
  if (stateFromStores1.length > 0) {
    render_id = stateFromStores1[stateFromStores1.length - 1].render_id;
  }
  const items19 = [stateFromStores1];
  closure_5 = obj2.useMemo(() => VibegrationsChatGrouping.groupChatRows(stateFromStores1.map((key) => {
    const obj = { key: key.render_id, actor: null, authorId: null, boundary: null, separate: null };
    let str = "assistant";
    if ("user" === key.role) {
      str = "user";
    }
    obj.actor = str;
    let user_id;
    if ("user" === key.role) {
      user_id = key.user_id;
    }
    obj.authorId = user_id;
    render_id = undefined;
    if ("user" !== key.role) {
      render_id = key.render_id;
    }
    obj.boundary = render_id;
    let tmp3 = "assistant" === key.role;
    if (tmp3) {
      let tmp5 = null != key.proposal || null != key.clarification;
      if (!tmp5) {
        tmp5 = "side_reply" === key.kind;
      }
      if (!tmp5) {
        tmp5 = null != key.in_reply_to;
      }
      tmp3 = tmp5;
    }
    obj.separate = tmp3;
    return obj;
  })), items19);
  const items20 = [projectId];
  onApprove = obj2.useCallback(() => {
    const intl = util.intl;
    closure_2_15(projectId, intl.string(_modDef3682.Jj8Ftb));
  }, items20);
  const items21 = [projectId];
  onPickIdea = obj2.useCallback((implementation_prompt) => {
    closure_2_15(projectId, implementation_prompt.implementation_prompt);
  }, items21);
  const items22 = [projectId];
  closure_8 = obj2.useCallback(() => {
    const intl = util.intl;
    closure_2_15(projectId, intl.string(_modDef3682["3sTTBu"]));
  }, items22);
  const items23 = [projectId];
  state = obj2.useCallback((arg0) => {
    closure_2_15(projectId, arg0);
  }, items23);
  let tmp26 = tmp25;
  if ("open" !== stateFromStores6) {
    tmp26 = "connecting" === stateFromStores6;
  }
  if (tmp26) {
    tmp26 = !stateFromStores7;
  }
  closure_10 = tmp26;
  const items24 = [stateFromStores1];
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
  }, items24);
  const items25 = [stateFromStores1, memo];
  memo1 = obj2.useMemo(() => {
    let tmp2;
    if (null != memo) {
      tmp2 = stateFromStores1[tmp];
    }
    let timelineTree = null;
    if (null != tmp2) {
      timelineTree = VibegrationsTimelineTree.buildTimelineTree(tmp2.steps, { turnActive: true });
    }
    return timelineTree;
  }, items25);
  let tmp29 = null != memo1;
  if (tmp29) {
    tmp29 = memo1.steps.length > 0 || memo1.tasks.length > 0;
    const tmp30 = memo1.steps.length > 0 || memo1.tasks.length > 0;
  }
  const items26 = [memo1];
  let memo2 = obj2.useMemo(() => {
    let currentStepResult;
    if (null != memo1) {
      currentStepResult = VibegrationsTimelineTree.currentStep(tmp.steps);
    }
    let describeNodeResult = null;
    if (null != currentStepResult) {
      describeNodeResult = VibegrationsTimelineTree.describeNode(currentStepResult);
    }
    return describeNodeResult;
  }, items26);
  const tmp2Result9 = projectId(stateFromStores1[41]);
  [obj11, c13] = render_id.useState(null);
  const tmp12Result = _slicedToArray(render_id.useState(null), 2);
  [tmp34, c14] = render_id.useState(64);
  const callback1 = obj2.useCallback((nativeEvent) => {
    closure_0 = Math.round(nativeEvent.nativeEvent.layout.height);
    _undefined3((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  const tmp12Result3 = _slicedToArray(render_id.useState(64), 2);
  bound = tmp34;
  if (!tmp2Result10.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp34, fadingEdgeLength);
  }
  obj2.useRef(null);
  ref = obj2.useRef(null);
  ref2 = obj2.useRef(false);
  tmp2Result10 = projectId(stateFromStores1[28]);
  [tmp41, c19] = render_id.useState(false);
  autoscrollToBottomThreshold = obj2.useRef(null);
  fadingEdgeLength = obj2.useRef(0);
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
    if (tmp5) {
      tmp5 = null != tmp;
    }
    if (tmp5) {
      tmp5 = tmp.y >= current2.offsetY + current2.viewportHeight - ref4.current;
    }
    _undefined(tmp5);
  }, []);
  const items27 = [callback2];
  const items28 = [callback2];
  const callback3 = obj2.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    closure_17.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
    callback2();
  }, items27);
  const callback4 = obj2.useCallback((arg0, contentHeight) => {
    const current = ref.current;
    if (null != current) {
      if (current.contentHeight - current.offsetY - current.viewportHeight <= c20 * current.viewportHeight) {
        const obj2 = {};
        const merged = Object.assign(current);
        obj2.contentHeight = contentHeight;
        const _Math = Math;
        obj2.offsetY = Math.max(0, contentHeight - current.viewportHeight);
        let obj = obj2;
      } else {
        obj = {};
        const merged1 = Object.assign(current);
        obj.contentHeight = contentHeight;
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
  }, items28);
  const items29 = [callback2];
  const memo3 = obj2.useMemo(() => ({ itemVisiblePercentThreshold: projectId(stateFromStores1[44]).MIN_VISIBLE_PERCENT }), []);
  const callback5 = obj2.useCallback((arg0) => {
    const set = new Set();
    const iter = arg0.viewableItems[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.key) {
        let addResult = set.add(tmp2.key);
      }
      continue;
    }
    _undefined2(set);
    callback2();
  }, items29);
  if (stateFromStores3) {
    const intl2 = tmp2(tmp3[15]).intl;
    memo2 = intl2.string(tmp5(tmp3[16])["0vH/5G"]);
  } else if (memo2 == null) {
    let intl = tmp2(tmp3[15]).intl;
    memo2 = intl.string(tmp5(tmp3[16]).QDGuNS);
  }
  const items30 = [stateFromStores1, memo];
  const items31 = [memo1];
  const memo4 = obj2.useMemo(() => {
    if (null == memo) {
      return null;
    } else if (null == stateFromStores1[tmp]) {
      return null;
    } else {
      let latestTodosResult = VibegrationsTimelineTree.latestTodos(tmp3.steps);
      if (null == latestTodosResult) {
        let todos = null;
        if (null != tmp3.todos) {
          todos = null;
          if (tmp3.todos.length > 0) {
            todos = tmp3.todos;
          }
        }
        latestTodosResult = todos;
      }
      return latestTodosResult;
    }
  }, items30);
  let tmp49;
  const memo5 = obj2.useMemo(() => {
    if (null != memo1) {
      let runningTodoAgentsResult = VibegrationsTodoAgents.runningTodoAgents(tmp.tasks);
    } else {
      runningTodoAgentsResult = [];
    }
    return runningTodoAgentsResult;
  }, items31);
  if (null != memo) {
    let render_id1;
    if (stateFromStores1[memo] != null) {
      render_id1 = tmp50.render_id;
    }
    tmp49 = render_id1;
  }
  let tmp52 = null != tmp49;
  if (tmp52) {
    tmp52 = null != obj11 && !obj11.has(tmp49) || tmp41;
    const tmp53 = null != obj11 && !obj11.has(tmp49) || tmp41;
  }
  let tmp54 = null;
  if (stateFromStores2) {
    tmp54 = null;
    if (tmp29) {
      tmp54 = null;
      if (tmp52) {
        tmp54 = memo2;
      }
    }
  }
  const items32 = [bound, memo, callback2];
  const effect1 = obj2.useEffect(() => {
    closure_20.current = memo;
    closure_21.current = bound;
    closure_0 = requestAnimationFrame(callback2);
    return () => cancelAnimationFrame(closure_0);
  }, items32);
  const items33 = [stateFromStores1];
  closure_23 = obj2.useMemo(() => {
    const map = new Map();
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
  }, items33);
  const items34 = [stateFromStores1];
  onJumpToReplied = obj2.useCallback((arg0) => {
    closure_0 = arg0;
    const findIndexResult = stateFromStores1.findIndex((id) => id.id === closure_0);
    if (findIndexResult >= 0) {
      const current = ref.current;
      if (current != null) {
        const obj = { index: findIndexResult, animated: true, viewPosition: 0.5 };
        current.scrollToIndex(obj);
      }
    }
  }, items34);
  const items35 = [bound, memo];
  const items36 = [projectId];
  const callback6 = obj2.useCallback(() => {
    if (null != memo) {
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items35);
  const items37 = [projectId];
  const callback7 = obj2.useCallback((arg0, arg1) => {
    closure_18.current = true;
    closure_2_15(projectId, arg0, arg1);
  }, items36);
  let connectionLabelResult = null;
  const callback8 = obj2.useCallback(() => {
    state(projectId);
  }, items37);
  if ("open" !== stateFromStores6) {
    connectionLabelResult = tmp2(tmp3[46]).connectionLabel(stateFromStores6);
    const tmp2Result11 = tmp2(tmp3[46]);
  }
  const tmp12Result4 = _slicedToArray(render_id.useState(false), 2);
  const obj8 = { style: tmp.container, children: null };
  const vibegrationsControlActive = projectId(stateFromStores1[47]).useVibegrationsControlActive(projectId);
  const items38 = [ref(stateFromStores(stateFromStores1[48]), { thinking: stateFromStores2, bleedBottom: stateFromStores(stateFromStores1[42])().bottom }), , ];
  const obj9 = { style: tmp.transcriptArea, children: null };
  const obj10 = { clearance: tmp34, children: null };
  const obj12 = { ref, fadingEdgeLength, removeClippedSubviews: null, viewabilityConfig: null, onViewableItemsChanged: null, onScroll: null, onContentSizeChange: null, scrollEventThrottle: 16, style: null, contentContainerStyle: null, data: null, maintainVisibleContentPosition: null, keyExtractor: null, ListEmptyComponent: null, renderItem: null };
  const tmp2Result12 = projectId(stateFromStores1[47]);
  const tmp64 = closure_36;
  const tmp2Result13 = projectId(stateFromStores1[28]);
  obj12.removeClippedSubviews = projectId(stateFromStores1[28]).isIOS() && undefined;
  obj12.viewabilityConfig = memo3;
  obj12.onViewableItemsChanged = callback5;
  obj12.onScroll = callback3;
  obj12.onContentSizeChange = callback4;
  const items39 = [tmp.transcript, ];
  const tmp65 = projectId(stateFromStores1[28]).isIOS() && undefined;
  const isIOSResult = projectId(stateFromStores1[28]).isIOS();
  let tmp67 = !isIOSResult;
  if (!isIOSResult) {
    const obj13 = { marginBottom: tmp34 - bound };
    tmp67 = obj13;
  }
  items39[1] = tmp67;
  obj12.style = items39;
  const items40 = [tmp.transcriptContent, ];
  const tmp2Result14 = projectId(stateFromStores1[28]);
  items40[1] = { paddingBottom: bound + stateFromStores(stateFromStores1[7]).space.PX_8 };
  obj12.contentContainerStyle = items40;
  obj12.data = stateFromStores1;
  obj12.maintainVisibleContentPosition = { startRenderingFromBottom: true, autoscrollToBottomThreshold };
  obj12.keyExtractor = function keyExtractor(render_id) {
    return render_id.render_id;
  };
  const obj16 = { style: tmp.placeholder, children: null };
  if (stateFromStores8) {
    const obj17 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl4 = tmp2(tmp3[15]).intl;
    obj17.children = intl4.string(tmp5(tmp3[16]).jTuX7C);
    let tmp63Result = tmp63(tmp2(tmp3[17]).Text, obj17);
  } else {
    const obj18 = { size: "small", accessibilityLabel: null };
    const intl3 = tmp2(tmp3[15]).intl;
    obj18.accessibilityLabel = intl3.string(tmp2(tmp3[15]).t.ZTNur7);
    tmp63Result = tmp63(closure_5, obj18);
  }
  obj16.children = tmp63Result;
  obj12.ListEmptyComponent = ref(closure_8, obj16);
  obj12.renderItem = function renderItem(arg0) {
    ({ item, index } = arg0);
    const obj = { projectId, message: item, groupStart: null, first: null, isNewest: null, replied: null, onJumpToReplied: null, onApprove: null, onPickIdea: null, onAskForIdeas: null, onAnswerClarification: null };
    let flag = closure_5[index];
    if (flag == null) {
      flag = true;
    }
    obj.groupStart = flag;
    obj.first = 0 === index;
    obj.isNewest = item.render_id === render_id;
    obj.replied = closure_23.get(item.render_id);
    obj.onJumpToReplied = onJumpToReplied;
    obj.onApprove = onApprove;
    obj.onPickIdea = onPickIdea;
    let tmp4;
    if (closure_10) {
      tmp4 = closure_8;
    }
    obj.onAskForIdeas = tmp4;
    let tmp5;
    if (closure_10) {
      tmp5 = closure_9;
    }
    obj.onAnswerClarification = tmp5;
    return constants(closure_37, obj);
  };
  obj10.children = ref(projectId(stateFromStores1[49]).FlashList, obj12);
  const items41 = [ref(tmp64, obj10), , , ];
  let tmp71 = stateFromStores2;
  const obj14 = { paddingBottom: bound + stateFromStores(stateFromStores1[7]).space.PX_8 };
  const obj15 = { startRenderingFromBottom: true, autoscrollToBottomThreshold };
  if (stateFromStores2) {
    tmp71 = !tmp20;
  }
  items41[1] = ref(stateFromStores(stateFromStores1[50]), { open: tmp71 });
  let tmp63Result3 = null;
  if (tmp20) {
    const obj19 = { projectId };
    tmp63Result3 = tmp63(tmp5(tmp3[51]), obj19);
  }
  items41[2] = tmp63Result3;
  let tmp63Result4 = null;
  if (null != tmp54) {
    const obj20 = { line: tmp54, onJumpToActivity: callback6, bottom: tmp5(tmp3[7]).space.PX_12 + tmp34, todos: memo4, agents: memo5 };
    tmp63Result4 = tmp63(tmp5(tmp3[52]), obj20);
    const tmp5Result3 = tmp5(tmp3[52]);
  }
  items41[3] = tmp63Result4;
  obj9.children = items41;
  items38[1] = ref2(closure_8, obj9);
  const obj21 = { style: tmp.bottomStack, onLayout: callback1, children: null };
  const items42 = [ref(stateFromStores(stateFromStores1[53]), { projectId, thinking: stateFromStores2, compacting: stateFromStores3, activity: stateFromStores4, projectUsage: stateFromStores5, connLabel: connectionLabelResult, controlling: vibegrationsControlActive, connFailed: "failed" === stateFromStores6, thinkingOpen: tmp20, onToggleThinking: callback }), ];
  const obj23 = { projectId, canSend: tmp26, running: stateFromStores2, stopped: stateFromStores7, onSend: callback7, onInterrupt: null };
  let tmp76;
  const obj22 = { projectId, thinking: stateFromStores2, compacting: stateFromStores3, activity: stateFromStores4, projectUsage: stateFromStores5, connLabel: connectionLabelResult, controlling: vibegrationsControlActive, connFailed: "failed" === stateFromStores6, thinkingOpen: tmp20, onToggleThinking: callback };
  const tmp5Result = stateFromStores(stateFromStores1[50]);
  if (stateFromStores2) {
    tmp76 = callback8;
  }
  obj23.onInterrupt = tmp76;
  items42[1] = ref(stateFromStores(stateFromStores1[54]), obj23);
  obj21.children = items42;
  items38[2] = ref2(closure_8, obj21);
  obj8.children = items38;
  return ref2(closure_8, obj8);
});
