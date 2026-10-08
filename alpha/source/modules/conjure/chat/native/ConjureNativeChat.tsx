// Module ID: 16932
// Function ID: 16933
// Name: ConjureNativeChat
// Dependencies: [32, 19, 17, 1998, 13072, 11251, 13073, 1085, 21, 587, 16933, 683, 5090, 16935, 558, 576, 16941, 1126, 3827, 5086, 6164, 5373, 16942, 16943, 16946, 16948, 16949, 16950, 16953, 5077, 16955, 16960, 16962, 16964, 5375, 6186, 4763, 6933, 16965, 16966, 16967, 16968, 16969, 1381, 5387, 6245, 16920, 16993, 16839, 16994, 16939, 16924, 16995, 17000, 16936, 17001, 17002, 16940, 6809, 17003, 17005, 17007, 17008, 17009, 17010, 17011, 17012, 17022, 17026, 17027, 504, 1630, 16441, 16997, 17028, 17024, 17029, 17030, 17019, 17031, 16998, 17033, 17034, 17035, 17036, 12372, 17037, 8600, 17040, 17041, 17042, 17046, 2]

// Module 16932 (ConjureNativeChat)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import Constants from "Constants" /* 1085 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import _modDef3827 from "module_3827" /* 3827 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5077 */;
import Stack_Stack from "Stack/Stack" /* 5373 */;
import LinearGradientDefault from "LinearGradient" /* 5387 */;
import FastImageDefault from "FastImage" /* 6164 */;
import _modDef6245 from "module_6245" /* 6245 */;
import ConjureChatStore2 from "ConjureChatStore" /* 13073 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 16839 */;
import ConjureHistoryFormat from "ConjureHistoryFormat" /* 16920 */;
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm" /* 16924 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 16933 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 16935 */;
import ConjureMessageAuthor from "ConjureMessageAuthor" /* 16936 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 16939 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 16941 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 16948 */;
import ConjureNativeCollapsibleSectionDefault from "ConjureNativeCollapsibleSection" /* 16949 */;
import ConjurePlanTypeTagsDefault from "ConjurePlanTypeTags" /* 16950 */;
import ConjurePlanWidgetDefault from "ConjurePlanWidget" /* 16964 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 16965 */;
import ConjureNativeStepImagesDefault from "ConjureNativeStepImages" /* 16967 */;
import ConjureSubagentMark from "ConjureSubagentMark" /* 16969 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 16993 */;
import ConjureChatRestore from "ConjureChatRestore" /* 16994 */;
import ConjurePublishNoticeLineDefault from "ConjurePublishNoticeLine" /* 16995 */;
import conjurePublishCard from "conjurePublishCard" /* 16997 */;
import ConjureIdeasOfferDefault from "ConjureIdeasOffer" /* 17000 */;
import ConjureTodoState from "ConjureTodoState" /* 17011 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 17019 */;
import ConjureSecretRequestState from "ConjureSecretRequestState" /* 17024 */;
import conjurePendingPlan from "conjurePendingPlan" /* 17029 */;
import ConjureChatGrouping from "ConjureChatGrouping" /* 17030 */;
import chat_ConjureRepliedMessage from "chat/ConjureRepliedMessage" /* 17035 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AppStateStore from "AppStateStore" /* 1998 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 13072 */;
import ConjureProjectStore from "ConjureProjectStore" /* 11251 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureNativeStatusLineDefault = ConjureNativeStatusLine;
const ConjureChatStore = ConjureChatStore2;
let _require, autoscrollToBottomThreshold, dependencyMap, fadingEdgeLength, map, nativeEvent, set, version, viewableItems;

let c10;
let c9;
let closure_12;
let closure_18;
let closure_19;
let closure_20;
let hasOwnProperty;
let map1;
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
let tmp;
let unpackModuleId;
const intl14 = tmp(1126);
const Text_Text = tmp(5086);
const components_Button_Button = tmp(5375);
const conjurePlanFormat = tmp(16942);
const conjurePlanWidget2 = tmp(16943);
const useConjurePlanBotPreviewItems = tmp(16946);
const ConjureNativeCollapsibleSection = tmp(16949);
const conjurePlanTags = tmp(16953);
const ConjureNativeMarkdown = tmp(16955);
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: hasOwnProperty, Pressable: metroRequire, View: metroImportDefault } = react_native);
let ConjureConnectionStore = ConjureConnectionStore_mod;
({ ensureConnection: c9, getAttachmentUrl: c10, interruptTurn: unpackModuleId, loadOlderHistory: closure_12, sendUserMessage: map1 } = ConjureConnectionStore);
ConjureConnectionStore = ConjureConnectionStore_mod;
let turnSettled = ConjureChatStore2.turnSettled;
const Fonts = Constants.Fonts;
let Fragment = Fragment_mod;
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
let diff = ConjureNativeStatusLine.MESSAGE_CONTENT_INSET - ConjureNativeStatusLine.MESSAGE_EDGE_INSET;
let c21 = 0.2;
let c22 = 500;
let c23 = 52;
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
obj4 = { position: "relative", paddingLeft: ConjureNativeStatusLine.MESSAGE_CONTENT_INSET, paddingRight: ConjureNativeStatusLine.MESSAGE_EDGE_INSET, paddingVertical: 2, gap: PX_8 };
rect = { position: "absolute", left: ConjureNativeStatusLine.MESSAGE_EDGE_INSET, top: 2 };
rect1 = { left: ConjureNativeStatusLine.MESSAGE_EDGE_INSET - ConjureNativeStatusLine.MESSAGE_CONTENT_INSET, top: 0 };
obj5 = { top: ConjureRepliedMessage.REPLY_PREVIEW_HEIGHT + PX_8 };
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
let closure_28 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanDesign(arg0) {
  let design;
  let handleError;
  let intl2;
  let intl3;
  let obj7;
  let obj9;
  let projectId;
  let src;
  const obj = react2;
  const cResult = obj.c(10);
  ({ projectId, design } = arg0);
  const tmp4 = closure_28();
  const obj2 = useConjureAttachmentImage;
  const conjureAttachmentImage = obj2.useConjureAttachmentImage(projectId, design.id);
  ({ src, handleError } = conjureAttachmentImage);
  if (conjureAttachmentImage.gone) {
    return null;
  } else {
    let first;
    let tmp10;
    let tmp18;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(_modDef3827["3/aHX6"]);
      cResult[0] = stringResult;
      first = stringResult;
    } else {
      first = cResult[0];
    }
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: intl2.string(_modDef3827.X15LLY) };
      const Text = tmp(5086).Text;
      intl2 = tmp(1126).intl;
      const tmp13 = authStore5(Text, obj3);
      cResult[1] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[1];
    }
    if (cResult[2] === handleError) {
      if (cResult[3] === src) {
        if (cResult[4] === tmp4.designImage) {
          let tmp14;
          let tmp22;
          let tmp26;
          if (cResult[5] === tmp4.designPlaceholder) {
            tmp14 = cResult[6];
          }
          const _Symbol3 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { variant: "text-xs/normal", color: "text-muted", children: intl3.string(_modDef3827.nR4B8P) };
            const Text2 = tmp(5086).Text;
            intl3 = tmp(1126).intl;
            const tmp25 = authStore5(Text2, obj4);
            cResult[7] = tmp25;
            tmp22 = tmp25;
          } else {
            tmp22 = cResult[7];
          }
          if (cResult[8] !== tmp14) {
            const obj5 = { direction: "vertical", spacing: 4, children: items };
            items = [tmp10, tmp14, tmp22];
            const tmp28 = closure_19(Stack_Stack.Stack, obj5);
            cResult[8] = tmp14;
            cResult[9] = tmp28;
            tmp26 = tmp28;
          } else {
            tmp26 = cResult[9];
          }
          return tmp26;
        }
      }
    }
    if (null == src) {
      const obj6 = { style: tmp4.designPlaceholder, children: authStore5(hasOwnProperty, obj7) };
      obj7 = { size: "small", accessibilityLabel: first };
      tmp18 = authStore5(metroImportDefault, obj6);
    } else {
      const obj8 = { source: obj9, style: tmp4.designImage, resizeMode: "cover", onError: handleError, accessible: true, accessibilityRole: "image", accessibilityLabel: first };
      obj9 = { uri: src };
      tmp18 = authStore5(FastImageDefault, obj8);
    }
    cResult[2] = handleError;
    cResult[3] = src;
    cResult[4] = tmp4.designImage;
    cResult[5] = tmp4.designPlaceholder;
    cResult[6] = tmp18;
    tmp14 = tmp18;
  }
}) : (function PlanDesign(arg0) {
  let design;
  let intl2;
  let intl3;
  let obj4;
  let obj6;
  let projectId;
  ({ projectId, design } = arg0);
  const tmp = closure_28();
  const obj = useConjureAttachmentImage;
  const conjureAttachmentImage = obj.useConjureAttachmentImage(projectId, design.id);
  const src = conjureAttachmentImage.src;
  if (conjureAttachmentImage.gone) {
    return null;
  } else {
    let tmp9Result;
    const intl = tmp2(1126).intl;
    const stringResult = intl.string(_modDef3827["3/aHX6"]);
    const Stack = tmp2(5373).Stack;
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl2.string(_modDef3827.X15LLY) };
    const Text = tmp2(5086).Text;
    intl2 = tmp2(1126).intl;
    items = [authStore5(Text, obj2), , ];
    const tmp8 = closure_19;
    if (null == src) {
      const obj3 = { style: tmp.designPlaceholder, children: authStore5(hasOwnProperty, obj4) };
      obj4 = { size: "small", accessibilityLabel: stringResult };
      tmp9Result = tmp9(metroImportDefault, obj3);
    } else {
      const obj5 = { source: obj6, style: tmp.designImage, resizeMode: "cover", onError: tmp5, accessible: true, accessibilityRole: "image", accessibilityLabel: stringResult };
      obj6 = { uri: src };
      tmp9Result = tmp9(tmp6(6164), obj5);
    }
    const obj7 = { direction: "vertical", spacing: 4, children: items };
    items[1] = tmp9Result;
    const obj8 = { variant: "text-xs/normal", color: "text-muted", children: intl3.string(_modDef3827.nR4B8P) };
    const Text2 = tmp2(5086).Text;
    intl3 = tmp2(1126).intl;
    items[2] = authStore5(Text2, obj8);
    return tmp8(Stack, obj7);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProposalCard(arg0) {
  let botExchanges;
  let botInteraction;
  let expanded;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl3;
  let intl7;
  let intl8;
  let intl9;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let onApprove;
  let onToggleExpanded;
  let projectId;
  let proposal;
  let superseded;
  let tmp15;
  let tmp8;
  let tmpResult4;
  let tmp = require;
  let tmp2 = dependencyMap;
  let obj = react2;
  const cResult = obj.c(64);
  ({ projectId, proposal, version, superseded, expanded, onToggleExpanded, onApprove } = arg0);
  let tmp4 = undefined !== superseded && superseded;
  let tmp5 = undefined === expanded || expanded;
  const tmp6 = closure_28();
  const str = proposal.summary;
  const trimmed = str.trim();
  if (cResult[0] !== proposal.what_changed) {
    let str3;
    if (proposal.what_changed != null) {
      str3 = str2.trim();
    }
    if (str3 == null) {
      str3 = "";
    }
    cResult[0] = proposal.what_changed;
    cResult[1] = str3;
    tmp8 = str3;
  } else {
    tmp8 = cResult[1];
  }
  let bot_permissions = proposal.bot_permissions;
  if (bot_permissions == null) {
    bot_permissions = [];
  }
  const mapped = bot_permissions.map(conjurePlanFormat.formatConjurePlanRequirementName);
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  const mapped1 = privileged_intents.map(conjurePlanFormat.formatConjurePlanRequirementName);
  const automod = proposal.automod;
  const tmpResult = conjurePlanWidget2;
  const conjurePlanWidget = tmpResult.useConjurePlanWidget(projectId, proposal);
  const tmpResult3 = useConjurePlanBotPreviewItems;
  const conjurePlanBotExchanges = tmpResult3.useConjurePlanBotExchanges(proposal);
  ({ botInteraction, botExchanges } = conjurePlanBotExchanges);
  const tmp13 = ConjureNativeCardSurfaceDefault;
  const tmp14 = ConjureNativeCollapsibleSectionDefault;
  if (cResult[2] === tmp4) {
    let tmp17;
    let tmp22;
    let tmp21;
    if (cResult[3] === version) {
      tmp15 = cResult[4];
    }
    if (cResult[5] !== tmp4) {
      let tmp18 = null;
      if (tmp4) {
        let obj2 = { children: intl3.string(_modDef3827.hF2c41) };
        const ConjureNativeCollapsibleMeta = ConjureNativeCollapsibleSection.ConjureNativeCollapsibleMeta;
        intl3 = intl14.intl;
        tmp18 = authStore5(ConjureNativeCollapsibleMeta, obj2);
      }
      cResult[5] = tmp4;
      cResult[6] = tmp18;
      tmp17 = tmp18;
    } else {
      tmp17 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = intl14.intl;
      const stringResult = intl4.string(_modDef3827.yD8EJS);
      const intl5 = intl14.intl;
      const stringResult1 = intl5.string(_modDef3827.nSPGNb);
      cResult[7] = stringResult;
      cResult[8] = stringResult1;
      tmp22 = stringResult1;
      tmp21 = stringResult;
    } else {
      tmp21 = cResult[7];
      tmp22 = cResult[8];
    }
    const Stack = Stack_Stack.Stack;
    if (cResult[9] === botInteraction) {
      if (cResult[10] === proposal) {
        let tmp25;
        let tmp29;
        let stringResult2;
        let tmp32;
        let tmp35;
        if (cResult[11] === tmp4) {
          tmp25 = cResult[12];
        }
        if (cResult[13] !== tmp8) {
          let tmp30 = null;
          if ("" !== tmp8) {
            let obj3 = { direction: "vertical", spacing: 4, children: items };
            const Stack6 = Stack_Stack.Stack;
            const obj4 = { variant: "text-sm/semibold", color: "text-muted", children: intl13.string(_modDef3827.iNS4dl) };
            const Text8 = Text_Text.Text;
            intl13 = intl14.intl;
            items = [authStore5(Text8, obj4), ];
            const obj5 = { variant: "text-md/normal", color: "text-default", children: tmp8 };
            items[1] = authStore5(Text_Text.Text, obj5);
            tmp30 = closure_19(Stack6, obj3);
          }
          cResult[13] = tmp8;
          cResult[14] = tmp30;
          tmp29 = tmp30;
        } else {
          tmp29 = cResult[14];
        }
        if ("" === trimmed) {
          const intl6 = intl14.intl;
          stringResult2 = intl6.string(tmp12(3827)["0+RUWx"]);
        } else {
          const tmp12Result = MarkupUtilsDefault;
          stringResult2 = tmp12Result.parse(trimmed, true, ConjureNativeMarkdown.CONJURE_MARKUP_OPTIONS);
        }
        if (cResult[15] !== stringResult2) {
          const obj6 = { variant: "text-md/normal", color: "text-default", children: stringResult2 };
          const tmp34 = authStore5(Text_Text.Text, obj6);
          cResult[15] = stringResult2;
          cResult[16] = tmp34;
          tmp32 = tmp34;
        } else {
          tmp32 = cResult[16];
        }
        if (cResult[17] !== automod) {
          let tmp36 = null;
          if (null != automod) {
            tmp36 = null;
            if (automod.examples.length > 0) {
              const obj7 = { automod };
              tmp36 = authStore5(tmp12(16960), obj7);
            }
          }
          cResult[17] = automod;
          cResult[18] = tmp36;
          tmp35 = tmp36;
        } else {
          tmp35 = cResult[18];
        }
        if (cResult[19] === automod) {
          if (cResult[20] === projectId) {
            let tmp38;
            if (cResult[21] === proposal.design_image) {
              tmp38 = cResult[22];
            }
            if (cResult[23] === botExchanges) {
              let tmp42;
              if (cResult[24] === projectId) {
                tmp42 = cResult[25];
              }
              if (cResult[26] === automod) {
                let tmp45;
                let tmp52;
                let tmp56;
                if (cResult[27] === conjurePlanWidget) {
                  tmp45 = cResult[28];
                }
                if (cResult[29] !== proposal.changes) {
                  let tmp53 = null;
                  if (proposal.changes.length > 0) {
                    const obj8 = { direction: "vertical", spacing: 4, children: items1 };
                    const Stack2 = Stack_Stack.Stack;
                    const obj9 = { variant: "text-sm/semibold", color: "text-muted", children: intl7.string(_modDef3827["5+mG1z"]) };
                    let Text = Text_Text.Text;
                    intl7 = intl14.intl;
                    items1 = [authStore5(Text, obj9), ];
                    const changes = proposal.changes;
                    items1[1] = changes.map((item, index) => {
                      const obj = { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item };
                      const Text = require("Text/Text").Text;
                      return closure_1_18(Text, obj, index);
                    });
                    tmp53 = closure_19(Stack2, obj8);
                  }
                  cResult[29] = proposal.changes;
                  cResult[30] = tmp53;
                  tmp52 = tmp53;
                } else {
                  tmp52 = cResult[30];
                }
                if (cResult[31] !== proposal.commands) {
                  let tmp57 = null;
                  if (proposal.commands.length > 0) {
                    const obj10 = { direction: "vertical", spacing: 4, children: items2 };
                    const Stack3 = Stack_Stack.Stack;
                    const obj11 = { variant: "text-sm/semibold", color: "text-muted", children: intl8.string(intl14.t["0hKkS+"]) };
                    const Text2 = Text_Text.Text;
                    intl8 = intl14.intl;
                    items2 = [authStore5(Text2, obj11), ];
                    const commands = proposal.commands;
                    items2[1] = commands.map((name, index) => {
                      let obj2;
                      const obj = { variant: "text-sm/medium", color: "text-default", children: "" + obj2.conjurePlanCommandPrefix(name) + name.name };
                      const Text = require("Text/Text").Text;
                      obj2 = require("conjurePlanFormat");
                      const children = [closure_1_18(Text, obj), ];
                      let tmp3Result = null;
                      const tmp = closure_1_19;
                      const tmp2 = closure_1_7;
                      const tmp3 = closure_1_18;
                      const tmp4 = _require;
                      const tmp5 = dependencyMap;
                      if (null != name.description) {
                        tmp3Result = null;
                        if ("" !== name.description) {
                          const obj3 = { variant: "text-sm/normal", color: "text-muted", children: name.description };
                          tmp3Result = tmp3(tmp4(tmp5[19]).Text, obj3);
                        }
                      }
                      children[1] = tmp3Result;
                      return tmp(tmp2, { children }, index);
                    });
                    tmp57 = closure_19(Stack3, obj10);
                  }
                  cResult[31] = proposal.commands;
                  cResult[32] = tmp57;
                  tmp56 = tmp57;
                } else {
                  tmp56 = cResult[32];
                }
                let tmp60 = null;
                if (mapped.length > 0) {
                  const obj12 = { direction: "vertical", spacing: 4, children: items3 };
                  const Stack4 = Stack_Stack.Stack;
                  const obj13 = { variant: "text-sm/semibold", color: "text-muted", children: intl9.string(_modDef3827["2UbW6r"]) };
                  const Text3 = Text_Text.Text;
                  intl9 = intl14.intl;
                  items3 = [authStore5(Text3, obj13), ];
                  const obj14 = { variant: "text-sm/normal", color: "text-default", children: mapped.join(", ") };
                  const Text4 = Text_Text.Text;
                  items3[1] = authStore5(Text4, obj14);
                  tmp60 = closure_19(Stack4, obj12);
                }
                let tmp63 = null;
                if (mapped1.length > 0) {
                  const obj15 = { direction: "vertical", spacing: 4, children: items4 };
                  const Stack5 = Stack_Stack.Stack;
                  const obj16 = { variant: "text-sm/semibold", color: "text-muted", children: intl10.string(_modDef3827["7TKfpj"]) };
                  const Text5 = Text_Text.Text;
                  intl10 = intl14.intl;
                  items4 = [authStore5(Text5, obj16), ];
                  const obj17 = { variant: "text-sm/normal", color: "text-default", children: mapped1.join(", ") };
                  const Text6 = Text_Text.Text;
                  items4[1] = authStore5(Text6, obj17);
                  tmp63 = closure_19(Stack5, obj15);
                }
                if (cResult[33] === onApprove) {
                  if (cResult[34] === tmp6) {
                    let tmp66;
                    if (cResult[35] === tmp4) {
                      tmp66 = cResult[36];
                    }
                    if (cResult[37] === Stack) {
                      if (cResult[38] === tmp25) {
                        if (cResult[39] === tmp29) {
                          if (cResult[40] === tmp32) {
                            if (cResult[41] === tmp35) {
                              if (cResult[42] === tmp38) {
                                if (cResult[43] === tmp42) {
                                  if (cResult[44] === tmp45) {
                                    if (cResult[45] === tmp52) {
                                      if (cResult[46] === tmp56) {
                                        if (cResult[47] === tmp60) {
                                          if (cResult[48] === tmp63) {
                                            let tmp71;
                                            if (cResult[49] === tmp66) {
                                              tmp71 = cResult[50];
                                            }
                                            if (cResult[51] === tmp14) {
                                              if (cResult[52] === tmp5) {
                                                if (cResult[53] === onToggleExpanded) {
                                                  if (cResult[54] === tmp4) {
                                                    if (cResult[55] === tmp71) {
                                                      if (cResult[56] === tmp15) {
                                                        if (cResult[57] === tmp17) {
                                                          if (cResult[58] === tmp21) {
                                                            let tmp74;
                                                            if (cResult[59] === tmp22) {
                                                              tmp74 = cResult[60];
                                                            }
                                                            if (cResult[61] === tmp13) {
                                                              let tmp77;
                                                              if (cResult[62] === tmp74) {
                                                                tmp77 = cResult[63];
                                                              }
                                                              return tmp77;
                                                            }
                                                            const obj18 = { children: tmp74 };
                                                            const tmp79 = authStore5(tmp13, obj18);
                                                            cResult[61] = tmp13;
                                                            cResult[62] = tmp74;
                                                            cResult[63] = tmp79;
                                                            tmp77 = tmp79;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            const obj19 = { title: tmp15, meta: tmp17, superseded: tmp4, expanded: tmp5, onToggleExpanded, showLabel: tmp21, hideLabel: tmp22, children: tmp71 };
                                            const tmp76 = authStore5(tmp14, obj19);
                                            cResult[51] = tmp14;
                                            cResult[52] = tmp5;
                                            cResult[53] = onToggleExpanded;
                                            cResult[54] = tmp4;
                                            cResult[55] = tmp71;
                                            cResult[56] = tmp15;
                                            cResult[57] = tmp17;
                                            cResult[58] = tmp21;
                                            cResult[59] = tmp22;
                                            cResult[60] = tmp76;
                                            tmp74 = tmp76;
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
                    const obj20 = { direction: "vertical", spacing: 8, children: items5 };
                    items5 = [tmp25, tmp29, tmp32, tmp35, tmp38, tmp42, tmp45, tmp52, tmp56, tmp60, tmp63, tmp66];
                    const tmp73 = closure_19(Stack, obj20);
                    cResult[37] = Stack;
                    cResult[38] = tmp25;
                    cResult[39] = tmp29;
                    cResult[40] = tmp32;
                    cResult[41] = tmp35;
                    cResult[42] = tmp38;
                    cResult[43] = tmp42;
                    cResult[44] = tmp45;
                    cResult[45] = tmp52;
                    cResult[46] = tmp56;
                    cResult[47] = tmp60;
                    cResult[48] = tmp63;
                    cResult[49] = tmp66;
                    cResult[50] = tmp73;
                    tmp71 = tmp73;
                  }
                }
                let tmp67 = null;
                if (null != onApprove) {
                  tmp67 = null;
                  if (!tmp4) {
                    const obj21 = { style: tmp6.planActions, children: items6 };
                    const obj22 = { text: intl11.string(_modDef3827["6S+wRM"]), variant: "primary", onPress: onApprove };
                    const Button = components_Button_Button.Button;
                    intl11 = intl14.intl;
                    items6 = [authStore5(Button, obj22), ];
                    const obj23 = { variant: "text-sm/normal", color: "text-muted", style: tmp6.planReplyHint, children: intl12.string(_modDef3827.IZoqbR) };
                    const Text7 = Text_Text.Text;
                    intl12 = intl14.intl;
                    items6[1] = authStore5(Text7, obj23);
                    tmp67 = closure_19(metroImportDefault, obj21);
                  }
                }
                cResult[33] = onApprove;
                cResult[34] = tmp6;
                cResult[35] = tmp4;
                cResult[36] = tmp67;
                tmp66 = tmp67;
              }
              let tmp46 = null;
              if (null == automod) {
                tmp46 = null;
                if (null != conjurePlanWidget) {
                  const obj24 = {};
                  const tmp12Result3 = ConjurePlanWidgetDefault;
                  const merged = Object.assign(conjurePlanWidget);
                  tmp46 = authStore5(tmp12Result3, obj24);
                }
              }
              cResult[26] = automod;
              cResult[27] = conjurePlanWidget;
              cResult[28] = tmp46;
              tmp45 = tmp46;
            }
            let tmp43 = null;
            if (botExchanges.length > 0) {
              const obj25 = { projectId, exchanges: botExchanges };
              tmp43 = authStore5(tmp12(16962), obj25);
            }
            cResult[23] = botExchanges;
            cResult[24] = projectId;
            cResult[25] = tmp43;
            tmp42 = tmp43;
          }
        }
        let tmp39 = null;
        if (null == automod) {
          tmp39 = null;
          if (null != proposal.design_image) {
            const obj26 = { projectId, design: proposal.design_image };
            tmp39 = authStore5(closure_29, obj26);
          }
        }
        cResult[19] = automod;
        cResult[20] = projectId;
        cResult[21] = proposal.design_image;
        cResult[22] = tmp39;
        tmp38 = tmp39;
      }
    }
    let tmp26 = null;
    if (!tmp4) {
      const obj27 = { tags: tmpResult4.getConjurePlanTags(proposal, botInteraction) };
      const tmp12Result4 = ConjurePlanTypeTagsDefault;
      tmpResult4 = conjurePlanTags;
      tmp26 = authStore5(tmp12Result4, obj27);
    }
    cResult[9] = botInteraction;
    cResult[10] = proposal;
    cResult[11] = tmp4;
    cResult[12] = tmp26;
    tmp25 = tmp26;
  }
  if (tmp4) {
    let formatToPlainStringResult;
    if (null != version) {
      const intl2 = intl14.intl;
      const obj28 = { version };
      formatToPlainStringResult = intl2.formatToPlainString(tmp12(3827).YZ3qJs, obj28);
    }
    cResult[2] = tmp4;
    cResult[3] = version;
    cResult[4] = formatToPlainStringResult;
    tmp15 = formatToPlainStringResult;
  }
  const intl = intl14.intl;
  formatToPlainStringResult = intl.string(tmp12(3827)["3b6e7o"]);
}) : (function ProposalCard(expanded) {
  let Stack;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
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
  let items6;
  let obj27;
  let projectId;
  let proposal;
  let superseded;
  let tmp3Result4;
  let tmp7Result;
  ({ projectId, proposal, version, superseded } = expanded);
  if (superseded === undefined) {
    superseded = false;
  }
  let flag = expanded.expanded;
  if (flag === undefined) {
    flag = true;
  }
  const onApprove = expanded.onApprove;
  const onToggleExpanded = expanded.onToggleExpanded;
  let tmp = closure_28();
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
  let tmp3 = require;
  let tmp4 = dependencyMap;
  const mapped = bot_permissions.map(conjurePlanFormat.formatConjurePlanRequirementName);
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  const mapped1 = privileged_intents.map(conjurePlanFormat.formatConjurePlanRequirementName);
  const automod = proposal.automod;
  let tmp3Result = conjurePlanWidget2;
  const conjurePlanWidget = tmp3Result.useConjurePlanWidget(projectId, proposal);
  const tmp3Result3 = useConjurePlanBotPreviewItems;
  const conjurePlanBotExchanges = tmp3Result3.useConjurePlanBotExchanges(proposal);
  const botExchanges = conjurePlanBotExchanges.botExchanges;
  const botInteraction = conjurePlanBotExchanges.botInteraction;
  const tmp9 = ConjureNativeCardSurfaceDefault;
  if (superseded) {
    let formatToPlainStringResult;
    let stringResult;
    if (null != version) {
      const intl2 = intl14.intl;
      let obj = { version };
      formatToPlainStringResult = intl2.formatToPlainString(tmp8(3827).YZ3qJs, obj);
    }
    let obj2 = { title: formatToPlainStringResult, meta: tmp7Result, superseded, expanded: flag, onToggleExpanded, showLabel: intl4.string(_modDef3827.yD8EJS), hideLabel: intl5.string(_modDef3827.nSPGNb), children: closure_19(Stack, obj27) };
    tmp7Result = null;
    if (superseded) {
      let obj3 = { children: intl3.string(_modDef3827.hF2c41) };
      const ConjureNativeCollapsibleMeta = ConjureNativeCollapsibleSection.ConjureNativeCollapsibleMeta;
      intl3 = intl14.intl;
      tmp7Result = tmp7(ConjureNativeCollapsibleMeta, obj3);
    }
    intl4 = intl14.intl;
    intl5 = intl14.intl;
    let tmp7Result6 = null;
    Stack = Stack_Stack.Stack;
    if (!superseded) {
      const obj4 = { tags: tmp3Result4.getConjurePlanTags(proposal, botInteraction) };
      const tmp8Result = ConjurePlanTypeTagsDefault;
      tmp3Result4 = conjurePlanTags;
      tmp7Result6 = tmp7(tmp8Result, obj4);
    }
    items = [tmp7Result6, , , , , , , , , , , ];
    let tmp13Result = null;
    if ("" !== str3) {
      const obj5 = { direction: "vertical", spacing: 4, children: items1 };
      const Stack6 = Stack_Stack.Stack;
      const obj6 = { variant: "text-sm/semibold", color: "text-muted", children: intl13.string(_modDef3827.iNS4dl) };
      const Text9 = Text_Text.Text;
      intl13 = intl14.intl;
      items1 = [authStore5(Text9, obj6), ];
      const obj7 = { variant: "text-md/normal", color: "text-default", children: str3 };
      items1[1] = authStore5(Text_Text.Text, obj7);
      tmp13Result = tmp13(Stack6, obj5);
    }
    items[1] = tmp13Result;
    let Text = Text_Text.Text;
    if ("" === trimmed) {
      const intl6 = intl14.intl;
      stringResult = intl6.string(tmp8(3827)["0+RUWx"]);
    } else {
      const tmp8Result3 = MarkupUtilsDefault;
      stringResult = tmp8Result3.parse(trimmed, true, ConjureNativeMarkdown.CONJURE_MARKUP_OPTIONS);
    }
    const obj8 = { variant: "text-md/normal", color: "text-default", children: stringResult };
    items[2] = authStore5(Text, obj8);
    let tmp7Result7 = null;
    if (null != automod) {
      tmp7Result7 = null;
      if (automod.examples.length > 0) {
        const obj9 = { automod };
        tmp7Result7 = tmp7(tmp8(16960), obj9);
      }
    }
    items[3] = tmp7Result7;
    let tmp7Result8 = null;
    if (null == automod) {
      tmp7Result8 = null;
      if (null != proposal.design_image) {
        const obj10 = { projectId, design: proposal.design_image };
        tmp7Result8 = tmp7(closure_29, obj10);
      }
    }
    items[4] = tmp7Result8;
    let tmp7Result9 = null;
    if (botExchanges.length > 0) {
      const obj11 = { projectId, exchanges: botExchanges };
      tmp7Result9 = tmp7(tmp8(16962), obj11);
    }
    items[5] = tmp7Result9;
    let tmp7Result10 = null;
    if (null == automod) {
      tmp7Result10 = null;
      if (null != conjurePlanWidget) {
        const obj12 = {};
        const tmp8Result4 = ConjurePlanWidgetDefault;
        const merged = Object.assign(conjurePlanWidget);
        tmp7Result10 = tmp7(tmp8Result4, obj12);
      }
    }
    items[6] = tmp7Result10;
    let tmp13Result6 = null;
    if (proposal.changes.length > 0) {
      const obj13 = { direction: "vertical", spacing: 4, children: items2 };
      const Stack2 = Stack_Stack.Stack;
      const obj14 = { variant: "text-sm/semibold", color: "text-muted", children: intl7.string(_modDef3827["5+mG1z"]) };
      const Text2 = Text_Text.Text;
      intl7 = intl14.intl;
      items2 = [authStore5(Text2, obj14), ];
      const changes = proposal.changes;
      items2[1] = changes.map((item, index) => {
        const obj = { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item };
        const Text = require("Text/Text").Text;
        return closure_1_18(Text, obj, index);
      });
      tmp13Result6 = tmp13(Stack2, obj13);
    }
    items[7] = tmp13Result6;
    let tmp13Result7 = null;
    if (proposal.commands.length > 0) {
      const obj15 = { direction: "vertical", spacing: 4, children: items3 };
      const Stack3 = Stack_Stack.Stack;
      const obj16 = { variant: "text-sm/semibold", color: "text-muted", children: intl8.string(intl14.t["0hKkS+"]) };
      const Text3 = Text_Text.Text;
      intl8 = intl14.intl;
      items3 = [authStore5(Text3, obj16), ];
      const commands = proposal.commands;
      items3[1] = commands.map((name, index) => {
        let obj2;
        const obj = { variant: "text-sm/medium", color: "text-default", children: "" + obj2.conjurePlanCommandPrefix(name) + name.name };
        const Text = require("Text/Text").Text;
        obj2 = require("conjurePlanFormat");
        const children = [closure_1_18(Text, obj), ];
        let tmp3Result = null;
        const tmp = closure_1_19;
        const tmp2 = closure_1_7;
        const tmp3 = closure_1_18;
        const tmp4 = _require;
        const tmp5 = dependencyMap;
        if (null != name.description) {
          tmp3Result = null;
          if ("" !== name.description) {
            const obj3 = { variant: "text-sm/normal", color: "text-muted", children: name.description };
            tmp3Result = tmp3(tmp4(tmp5[19]).Text, obj3);
          }
        }
        children[1] = tmp3Result;
        return tmp(tmp2, { children }, index);
      });
      tmp13Result7 = tmp13(Stack3, obj15);
    }
    items[8] = tmp13Result7;
    let tmp13Result8 = null;
    if (mapped.length > 0) {
      const obj17 = { direction: "vertical", spacing: 4, children: items4 };
      const Stack4 = Stack_Stack.Stack;
      const obj18 = { variant: "text-sm/semibold", color: "text-muted", children: intl9.string(_modDef3827["2UbW6r"]) };
      const Text4 = Text_Text.Text;
      intl9 = intl14.intl;
      items4 = [authStore5(Text4, obj18), ];
      const obj19 = { variant: "text-sm/normal", color: "text-default", children: mapped.join(", ") };
      const Text5 = Text_Text.Text;
      items4[1] = authStore5(Text5, obj19);
      tmp13Result8 = tmp13(Stack4, obj17);
    }
    items[9] = tmp13Result8;
    let tmp13Result9 = null;
    if (mapped1.length > 0) {
      const obj20 = { direction: "vertical", spacing: 4, children: items5 };
      const Stack5 = Stack_Stack.Stack;
      const obj21 = { variant: "text-sm/semibold", color: "text-muted", children: intl10.string(_modDef3827["7TKfpj"]) };
      const Text6 = Text_Text.Text;
      intl10 = intl14.intl;
      items5 = [authStore5(Text6, obj21), ];
      const obj22 = { variant: "text-sm/normal", color: "text-default", children: mapped1.join(", ") };
      const Text7 = Text_Text.Text;
      items5[1] = authStore5(Text7, obj22);
      tmp13Result9 = tmp13(Stack5, obj20);
    }
    items[10] = tmp13Result9;
    let tmp13Result10 = null;
    if (null != onApprove) {
      tmp13Result10 = null;
      if (!superseded) {
        const obj23 = { style: tmp.planActions, children: items6 };
        const obj24 = { text: intl11.string(_modDef3827["6S+wRM"]), variant: "primary", onPress: onApprove };
        const Button = components_Button_Button.Button;
        intl11 = intl14.intl;
        items6 = [authStore5(Button, obj24), ];
        const obj25 = { variant: "text-sm/normal", color: "text-muted", style: tmp.planReplyHint, children: intl12.string(_modDef3827.IZoqbR) };
        const Text8 = Text_Text.Text;
        intl12 = intl14.intl;
        items6[1] = authStore5(Text8, obj25);
        tmp13Result10 = tmp13(metroImportDefault, obj23);
      }
    }
    obj27 = { direction: "vertical", spacing: 8, children: items };
    items[11] = tmp13Result10;
    const obj26 = { children: authStore5(tmp10, obj2) };
    return authStore5(tmp9, obj26);
  }
  const intl = intl14.intl;
  formatToPlainStringResult = intl.string(tmp8(3827)["3b6e7o"]);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? (function IdeaCards(arg0) {
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
  let tmp4 = closure_28();
  const ideaCards = tmp4.ideaCards;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3827["wx/o8Y"]) };
    const Text = tmp(5086).Text;
    intl = tmp(1126).intl;
    const tmp8 = closure_18(Text, obj2);
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
    const tmp15 = closure_19(closure_7, obj3);
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
        accessibilityLabel: intl.formatToPlainString(_modDef3827.H8G39M, obj2),
        children: tmp4(Stack, { direction: "vertical", spacing: 4, children: items })
      };
      const Card = onPick(dependencyMap[35]).Card;
      intl = onPick(dependencyMap[17]).intl;
      obj2 = { title: title.title };
      Stack = onPick(dependencyMap[21]).Stack;
      items = [, ];
      const obj3 = { variant: "text-md/semibold", color: "text-default", children: title.title };
      items[0] = closure_1_18(onPick(dependencyMap[19]).Text, obj3);
      let tmpResult = null;
      const tmp2 = onPick;
      const tmp3 = dependencyMap;
      tmp4 = closure_1_19;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = tmp(tmp2(tmp3[19]).Text, obj4);
      }
      items[1] = tmpResult;
      return closure_1_18(Card, obj, title.id);
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
}) : (function IdeaCards(arg0) {
  let ideas;
  let intl;
  let require;
  ({ ideas, onPick: require } = arg0);
  let obj = { style: closure_28().ideaCards, children: items };
  let obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3827["wx/o8Y"]) };
  const Text = Text_Text.Text;
  intl = intl14.intl;
  items = [
    closure_18(Text, obj2),
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
        accessibilityLabel: intl.formatToPlainString(_modDef3827.H8G39M, obj2),
        children: tmp4(Stack, { direction: "vertical", spacing: 4, children: items })
      };
      const Card = require("Card/Card").Card;
      intl = require("intl").intl;
      obj2 = { title: title.title };
      Stack = require("Stack/Stack").Stack;
      items = [, ];
      const obj3 = { variant: "text-md/semibold", color: "text-default", children: title.title };
      items[0] = closure_1_18(require("Text/Text").Text, obj3);
      let tmpResult = null;
      const tmp2 = _require;
      const tmp3 = dependencyMap;
      tmp4 = closure_1_19;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = tmp(tmp2(tmp3[19]).Text, obj4);
      }
      items[1] = tmpResult;
      return closure_1_18(Card, obj, title.id);
    })
  ];
  return closure_19(closure_7, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? (function AttachmentPills(projectId) {
  let closure_2;
  let tmp3;
  let tmp5;
  let obj = projectId(576);
  const cResult = obj.c(12);
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp2 = closure_28();
  let closure_1 = tmp2;
  if (cResult[0] !== projectId) {
    const fn = function n(arg0) {
      const promise = authStore(projectId, arg0);
      const nextPromise = promise.then((result) => {
        const obj = closure_1_1(closure_1_2[36]);
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
      const tmp11 = closure_18(closure_7, obj2);
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
        accessibilityLabel: intl.formatToPlainString(closure_1(closure_2[18]).GtNukg, obj2),
        children: closure_1_18(projectId(closure_2[19]).Text, obj3)
      };
      const Card = projectId(closure_2[35]).Card;
      intl = projectId(closure_2[17]).intl;
      obj2 = { name: id.name };
      obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
      tmp12 = closure_1_18(Card, obj, id.id);
    } else {
      const obj4 = { style: closure_1.attachmentPill, children: closure_1_18(Text, obj5) };
      obj5 = { variant: "text-xs/medium", color: "text-muted", children: intl2.formatToPlainString(closure_1(closure_2[18]).nd81jR, obj6) };
      Text = projectId(closure_2[19]).Text;
      intl2 = projectId(closure_2[17]).intl;
      const _HermesInternal = HermesInternal;
      obj6 = { name: id.name };
      tmp12 = closure_1_18(closure_1_7, obj4, "" + id.name + "-" + arg1);
    }
    return tmp12;
  };
  cResult[6] = tmp3;
  cResult[7] = tmp2.attachmentPill;
  cResult[8] = fn2;
  tmp6 = fn2;
}) : (function AttachmentPills(projectId) {
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp = closure_28();
  let closure_1 = tmp;
  items = [projectId];
  let closure_2 = react.useCallback((arg0) => {
    const promise = authStore(projectId, arg0);
    const nextPromise = promise.then((result) => {
      const obj = closure_1_1(closure_1_2[36]);
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
          accessibilityLabel: intl.formatToPlainString(closure_1(closure_2[18]).GtNukg, obj2),
          children: closure_1_18(projectId(closure_2[19]).Text, obj3)
        };
        const Card = projectId(closure_2[35]).Card;
        intl = projectId(closure_2[17]).intl;
        obj2 = { name: id.name };
        obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
        tmp12 = closure_1_18(Card, obj, id.id);
      } else {
        const obj4 = { style: closure_1.attachmentPill, children: closure_1_18(Text, obj5) };
        obj5 = { variant: "text-xs/medium", color: "text-muted", children: intl2.formatToPlainString(closure_1(closure_2[18]).nd81jR, obj6) };
        Text = projectId(closure_2[19]).Text;
        intl2 = projectId(closure_2[17]).intl;
        const _HermesInternal = HermesInternal;
        obj6 = { name: id.name };
        tmp12 = closure_1_18(closure_1_7, obj4, "" + id.name + "-" + index);
      }
      return tmp12;
    })
  };
  return closure_18(closure_7, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? (function TimelineRow(arg0) {
  let arr;
  let closure_0;
  let crestColor;
  let detail;
  let epoch;
  let inGutter;
  let live;
  let node;
  let obj5;
  let projectId;
  let tmp10;
  let tmp13;
  let tmpResult2;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(28);
  ({ projectId, node, inGutter, live, crestColor, epoch } = arg0);
  let num = 0;
  if (undefined !== epoch) {
    num = epoch;
  }
  const tmp6 = closure_28();
  _require = tmp6;
  if (cResult[0] !== node.attachments) {
    let tmp8;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function l(id) {
        if (null != id.id) {
          const CONJURE_VIEWABLE_IMAGE_TYPES = closure_0(dependencyMap[37]).CONJURE_VIEWABLE_IMAGE_TYPES;
          if (CONJURE_VIEWABLE_IMAGE_TYPES.has(id.content_type)) {
            const obj = { id: id.id };
            const merged = Object.assign(id);
            items = [obj];
          }
          return [];
        }
      };
      cResult[2] = fn;
      tmp8 = fn;
    } else {
      tmp8 = cResult[2];
    }
    const attachments = node.attachments;
    const flatMapResult = attachments.flatMap(tmp8);
    cResult[0] = node.attachments;
    cResult[1] = flatMapResult;
    arr = flatMapResult;
  } else {
    arr = cResult[1];
  }
  if (cResult[3] !== node) {
    const tmpResult = tmp(16965);
    const describeNodeResult = tmpResult.describeNode(node);
    cResult[3] = node;
    cResult[4] = describeNodeResult;
    tmp10 = describeNodeResult;
  } else {
    tmp10 = cResult[4];
  }
  let str3 = "detail";
  const status = node.status;
  if (undefined !== live && live) {
    str3 = "headline";
  }
  if (cResult[5] !== node.durationMs) {
    let tmp14 = null;
    if (null != node.durationMs) {
      const obj2 = { variant: "text-xs/normal", color: "text-subtle", children: tmpResult2.describeDuration(node.durationMs) };
      let Text = tmp(5086).Text;
      tmpResult2 = tmp(16966);
      tmp14 = closure_18(Text, obj2);
    }
    cResult[5] = node.durationMs;
    cResult[6] = tmp14;
    tmp13 = tmp14;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] === crestColor) {
    if (cResult[8] === num) {
      if (cResult[9] === (undefined !== inGutter && inGutter)) {
        if (cResult[10] === (undefined !== live && live)) {
          if (cResult[11] === tmp10) {
            if (cResult[12] === (!(undefined !== live && live) && "failed" !== node.status)) {
              if (cResult[13] === "failed" === status) {
                if (cResult[14] === str3) {
                  let tmp17;
                  if (cResult[15] === tmp13) {
                    tmp17 = cResult[16];
                  }
                  if (cResult[17] === node.detail) {
                    let tmp19;
                    if (cResult[18] === tmp6) {
                      tmp19 = cResult[19];
                    }
                    if (cResult[20] === arr) {
                      if (cResult[21] === projectId) {
                        let tmp23;
                        if (cResult[22] === tmp6) {
                          tmp23 = cResult[23];
                        }
                        if (cResult[24] === tmp17) {
                          if (cResult[25] === tmp19) {
                            let tmp29;
                            if (cResult[26] === tmp23) {
                              tmp29 = cResult[27];
                            }
                            return tmp29;
                          }
                        }
                        const obj3 = { children: items };
                        items = [tmp17, tmp19, tmp23];
                        const tmp32 = closure_19(closure_7, obj3);
                        cResult[24] = tmp17;
                        cResult[25] = tmp19;
                        cResult[26] = tmp23;
                        cResult[27] = tmp32;
                        tmp29 = tmp32;
                      }
                    }
                    let tmp25 = null;
                    if (null != projectId) {
                      tmp25 = null;
                      if (arr.length > 0) {
                        const obj4 = { style: tmp6.stepDetail, children: closure_18(ConjureNativeStepImagesDefault, obj5) };
                        obj5 = { projectId, images: arr };
                        tmp25 = closure_18(closure_7, obj4);
                      }
                    }
                    cResult[20] = arr;
                    cResult[21] = projectId;
                    cResult[22] = tmp6;
                    cResult[23] = tmp25;
                    tmp23 = tmp25;
                  }
                  let tmp20 = null;
                  if (node.detail.length > 0) {
                    const obj6 = {
                      style: tmp6.stepDetail,
                      children: detail.map((children, index) => {
                                          const Text = Text_Text.Text;
                                          let stepCommand;
                                          const tmp = authStore5;
                                          if (children.startsWith("$ ")) {
                                            stepCommand = closure_0.stepCommand;
                                          }
                                          const obj = { variant: "text-sm/normal", color: "text-muted", style: stepCommand, children };
                                          return tmp(Text, obj, index);
                                        })
                    };
                    detail = node.detail;
                    tmp20 = closure_18(closure_7, obj6);
                  }
                  cResult[17] = node.detail;
                  cResult[18] = tmp6;
                  cResult[19] = tmp20;
                  tmp19 = tmp20;
                }
              }
            }
          }
        }
      }
    }
  }
  const tmp18 = closure_18(ConjureNativeStatusLineDefault, { line: tmp10, live: undefined !== live && live, settled: !(undefined !== live && live) && "failed" !== node.status, failed: "failed" === status, presentation: str3, crestColor, inGutter: undefined !== inGutter && inGutter, epoch: num, trailing: tmp13 });
  cResult[7] = crestColor;
  cResult[8] = num;
  cResult[9] = undefined !== inGutter && inGutter;
  cResult[10] = undefined !== live && live;
  cResult[11] = tmp10;
  cResult[12] = !(undefined !== live && live) && "failed" !== node.status;
  cResult[13] = "failed" === status;
  cResult[14] = str3;
  cResult[15] = tmp13;
  cResult[16] = tmp18;
  tmp17 = tmp18;
}) : (function TimelineRow(live) {
  let closure_0;
  let crestColor;
  let detail;
  let epoch;
  let inGutter;
  let node;
  let obj2;
  let obj6;
  let projectId;
  let str2;
  let tmp4Result;
  let tmp8Result;
  let tmp9;
  ({ projectId, node, inGutter } = live);
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
  let tmp = closure_28();
  _require = tmp;
  const attachments = node.attachments;
  const flatMapResult = attachments.flatMap((id) => {
    if (null != id.id) {
      const CONJURE_VIEWABLE_IMAGE_TYPES = closure_0(dependencyMap[37]).CONJURE_VIEWABLE_IMAGE_TYPES;
      if (CONJURE_VIEWABLE_IMAGE_TYPES.has(id.content_type)) {
        const obj = { id: id.id };
        const merged = Object.assign(id);
        items = [obj];
      }
      return [];
    }
  });
  let obj = { line: obj2.describeNode(node), live: flag, settled: tmp9, failed: "failed" === node.status, presentation: str2, crestColor, inGutter, epoch, trailing: tmp4Result };
  const tmp7 = ConjureNativeStatusLineDefault;
  str2 = "detail";
  obj2 = require("ConjureTimelineTree");
  const tmp2 = closure_19;
  tmp9 = !flag && "failed" !== node.status;
  if (flag) {
    str2 = "headline";
  }
  tmp4Result = null;
  if (null != node.durationMs) {
    const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: tmp8Result.describeDuration(node.durationMs) };
    let Text = tmp8(5086).Text;
    tmp8Result = require("ConjureDuration");
    tmp4Result = tmp4(Text, obj3);
  }
  const children = [tmp4(tmp7, obj), , ];
  let tmp4Result3 = null;
  if (node.detail.length > 0) {
    const obj4 = {
      style: tmp.stepDetail,
      children: detail.map((children, index) => {
          const Text = Text_Text.Text;
          let stepCommand;
          const tmp = authStore5;
          if (children.startsWith("$ ")) {
            stepCommand = closure_0.stepCommand;
          }
          const obj = { variant: "text-sm/normal", color: "text-muted", style: stepCommand, children };
          return tmp(Text, obj, index);
        })
    };
    detail = node.detail;
    tmp4Result3 = tmp4(tmp3, obj4);
  }
  children[1] = tmp4Result3;
  let tmp4Result4 = null;
  if (null != projectId) {
    tmp4Result4 = null;
    if (flatMapResult.length > 0) {
      const obj5 = { style: tmp.stepDetail, children: closure_18(ConjureNativeStepImagesDefault, obj6) };
      obj6 = { projectId, images: flatMapResult };
      tmp4Result4 = tmp4(tmp3, obj5);
    }
  }
  children[2] = tmp4Result4;
  return tmp2(closure_7, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? (function TurnStatusLine(projectId) {
  let describeTurnDurationResult;
  let epoch;
  let first;
  let steps1;
  let tmp6;
  let tree;
  let turn3;
  let turnActive;
  let tmp = projectId;
  let tmp2 = epoch;
  let obj = projectId(epoch[15]);
  const cResult = obj.c(31);
  projectId = projectId.projectId;
  ({ tree, turnActive } = projectId);
  epoch = projectId.epoch;
  const besideAvatar = projectId.besideAvatar;
  const tmp4 = closure_28();
  const tmp5 = _slicedToArray(react.useState(false), 2);
  [tmp6, _slicedToArray] = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function i() {
      return _slicedToArray((arg0) => !arg0);
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
          react = cResult[5];
          tmp12 = cResult[6];
        }
        if (cResult[9] !== tree.steps) {
          let someResult = tree.steps.length > 1;
          if (!someResult) {
            const steps = tree.steps;
            someResult = steps.some((detail) => detail.detail.length > 0 || detail.attachments.length > 0);
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
                            if (cResult[23] === projectId) {
                              if (cResult[24] === tmp4) {
                                if (cResult[25] === tree.steps) {
                                  let tmp32;
                                  if (cResult[26] === turnActive) {
                                    tmp32 = cResult[27];
                                  }
                                  if (cResult[28] === tmp28) {
                                    let tmp36;
                                    if (cResult[29] === tmp32) {
                                      tmp36 = cResult[30];
                                    }
                                    return tmp36;
                                  }
                                  const obj2 = { children: items };
                                  items = [tmp28, tmp32];
                                  const tmp39 = closure_19(closure_7, obj2);
                                  cResult[28] = tmp28;
                                  cResult[29] = tmp32;
                                  cResult[30] = tmp39;
                                  tmp36 = tmp39;
                                }
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
                                                  const obj = { projectId, node, live: tmp3, epoch };
                                                  tmp3 = turnActive;
                                                  const tmp = authStore5;
                                                  const tmp2 = closure_33;
                                                  if (turnActive) {
                                                    tmp3 = node === react;
                                                  }
                                                  return tmp(tmp2, obj, node.id);
                                                })
                        };
                        steps1 = tree.steps;
                        tmp33 = closure_18(closure_7, obj3);
                      }
                    }
                    cResult[19] = tmp11;
                    cResult[20] = epoch;
                    cResult[21] = tmp6;
                    cResult[22] = tmp23;
                    cResult[23] = projectId;
                    cResult[24] = tmp4;
                    cResult[25] = tree.steps;
                    cResult[26] = turnActive;
                    cResult[27] = tmp33;
                    tmp32 = tmp33;
                  }
                }
              }
            }
          }
        }
        const obj4 = { line: tmp12, live: turnActive, settled: !turnActive, inGutter: true, glyph: tmp26, epoch, expanded: tmp6, onToggle: tmp27 };
        const tmp31 = closure_18(turnActive(tmp2[10]), obj4);
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
  const tmpResult = tmp(tmp2[38]);
  const currentStepResult = tmpResult.currentStep(tree.steps);
  react = currentStepResult;
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
    const tmpResult3 = tmp(tmp2[39]);
    describeTurnDurationResult = tmpResult3.describeTurnDuration(tmp14);
  } else if (null != currentStepResult) {
    const tmpResult4 = tmp(tmp2[38]);
    describeTurnDurationResult = tmpResult4.describeNode(currentStepResult);
  } else if (describeTurnDurationResult == null) {
    const intl = tmp(tmp2[17]).intl;
    describeTurnDurationResult = intl.string(turnActive(tmp2[18]).t8skVB);
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
}) : (function TurnStatusLine(epoch) {
  let _undefined;
  let c3;
  let c4;
  let projectId;
  let require;
  let steps1;
  let tmp19;
  let tmp20;
  let tmp3;
  let tree;
  let turnActive;
  ({ projectId: require, tree, turnActive } = epoch);
  epoch = epoch.epoch;
  _slicedToArray = undefined;
  react = undefined;
  const besideAvatar = epoch.besideAvatar;
  let tmp = closure_28();
  let tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c3] = tmp2;
  const callback = react.useCallback(() => _undefined((arg0) => !arg0), []);
  let obj = require("ConjureTimelineTree");
  const currentStepResult = obj.currentStep(tree.steps);
  react = currentStepResult;
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
    const tmp5Result = require("ConjureDuration");
    groupLabel = tmp5Result.describeTurnDuration(tmp8);
  } else if (null != currentStepResult) {
    const tmp5Result2 = require("ConjureTimelineTree");
    groupLabel = tmp5Result2.describeNode(currentStepResult);
  } else if (groupLabel == null) {
    const intl = tmp5(tmp6[17]).intl;
    groupLabel = intl.string(turnActive(tmp6[18]).t8skVB);
  }
  let someResult = tree.steps.length > 1;
  if (!someResult) {
    const steps = tree.steps;
    someResult = steps.some((detail) => detail.detail.length > 0 || detail.attachments.length > 0);
  }
  const obj2 = { line: groupLabel, live: turnActive, settled: !turnActive, inGutter: true, glyph: tmp19, epoch, expanded: tmp3, onToggle: tmp20 };
  tmp19 = undefined;
  const tmp15 = closure_19;
  const tmp18 = turnActive(epoch[10]);
  if (besideAvatar) {
    tmp19 = null;
  }
  tmp20 = undefined;
  if (someResult) {
    tmp20 = callback;
  }
  const children = [closure_18(tmp18, obj2), ];
  let tmp17Result = null;
  if (tmp3) {
    tmp17Result = null;
    if (someResult) {
      const obj3 = {
        style: tmp.activityDetail,
        children: steps1.map((node) => {
              let tmp3;
              const obj = { projectId: require, node, live: tmp3, epoch };
              tmp3 = turnActive;
              const tmp = authStore5;
              const tmp2 = closure_33;
              if (turnActive) {
                tmp3 = node === c4;
              }
              return tmp(tmp2, obj, node.id);
            })
      };
      steps1 = tree.steps;
      tmp17Result = tmp17(tmp16, obj3);
    }
  }
  children[1] = tmp17Result;
  return tmp15(closure_7, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? (function LaneStatusLine(projectId) {
  let describeTaskOutcomeResult;
  let epoch;
  let first;
  let items1;
  let lane;
  let mark;
  let tmp6;
  let turnActive;
  let obj = projectId(epoch[15]);
  const cResult = obj.c(33);
  projectId = projectId.projectId;
  ({ lane, mark } = projectId);
  ({ turnActive, epoch } = projectId);
  const tmp4 = closure_28();
  const tmp5 = _slicedToArray(react.useState(false), 2);
  [tmp6, _slicedToArray] = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function i() {
      return _slicedToArray((arg0) => !arg0);
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
          react = cResult[6];
          tmp11 = cResult[7];
        }
        const status = lane.task.status;
        if (cResult[8] !== mark.Illocon) {
          const tmp20 = closure_18(mark.Illocon, { size: 16, accessible: false });
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
                                      if (cResult[27] === projectId) {
                                        let tmp27;
                                        if (cResult[28] === tmp4) {
                                          tmp27 = cResult[29];
                                        }
                                        if (cResult[30] === tmp23) {
                                          let tmp31;
                                          if (cResult[31] === tmp27) {
                                            tmp31 = cResult[32];
                                          }
                                          return tmp31;
                                        }
                                        const obj2 = { children: items };
                                        items = [tmp23, tmp27];
                                        const tmp34 = closure_19(closure_7, obj2);
                                        cResult[30] = tmp23;
                                        cResult[31] = tmp27;
                                        cResult[32] = tmp34;
                                        tmp31 = tmp34;
                                      }
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
                                                          return closure_1_18(projectId(epoch[19]).Text, obj, index);
                                                        }),

                            ];
                            const steps = lane.steps;
                            items1[1] = steps.map((node) => {
                              const obj = { projectId, node, live: node === react, crestColor: mark.tint, epoch };
                              return authStore5(closure_33, obj, node.id);
                            });
                            tmp28 = closure_19(closure_7, obj3);
                          }
                        }
                        cResult[20] = epoch;
                        cResult[21] = tmp6;
                        cResult[22] = tmp9;
                        cResult[23] = lane.steps;
                        cResult[24] = lane.task.detail;
                        cResult[25] = tmp10;
                        cResult[26] = mark.tint;
                        cResult[27] = projectId;
                        cResult[28] = tmp4;
                        cResult[29] = tmp28;
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
        const tmp26 = closure_18(mark(epoch[10]), obj4);
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
    const tmpResult = projectId(epoch[38]);
    currentStepResult = tmpResult.currentStep(lane.steps);
  }
  react = currentStepResult;
  const tmp13 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" === lane.task.status) {
    let describeNodeResult;
    if (null != currentStepResult) {
      const tmpResult4 = projectId(epoch[38]);
      describeNodeResult = tmpResult4.describeNode(currentStepResult);
    } else {
      const tmpResult5 = projectId(epoch[41]);
      describeNodeResult = tmpResult5.taskTitle(lane.task);
    }
    describeTaskOutcomeResult = describeNodeResult;
  } else {
    const tmpResult6 = projectId(epoch[41]);
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
}) : (function LaneStatusLine(arg0) {
  let _undefined;
  let c3;
  let c4;
  let describeTaskOutcomeResult;
  let epoch;
  let items1;
  let lane;
  let mark;
  let projectId;
  let require;
  let tmp11;
  let tmp23;
  let tmp24;
  let tmp3;
  let turnActive;
  ({ projectId: require, lane, mark } = arg0);
  ({ turnActive, epoch } = arg0);
  _slicedToArray = undefined;
  react = undefined;
  const tmp = closure_28();
  [tmp3, c3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(() => _undefined((arg0) => !arg0), []);
  if (turnActive) {
    turnActive = tmp5;
  }
  let currentStepResult;
  if (turnActive) {
    let obj = require("ConjureTimelineTree");
    currentStepResult = obj.currentStep(lane.steps);
  }
  react = currentStepResult;
  const tmp9 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" === lane.task.status) {
    let describeNodeResult;
    let tmp15;
    if (null != currentStepResult) {
      const obj4 = require("ConjureTimelineTree");
      describeNodeResult = obj4.describeNode(currentStepResult);
      tmp15 = epoch;
    } else {
      tmp15 = epoch;
      const obj3 = require("ConjureTaskOutcome");
      describeNodeResult = obj3.taskTitle(lane.task);
    }
    tmp11 = tmp15;
    describeTaskOutcomeResult = describeNodeResult;
  } else {
    tmp11 = epoch;
    const obj2 = require("ConjureTaskOutcome");
    describeTaskOutcomeResult = obj2.describeTaskOutcome(lane.task);
  }
  const obj5 = { line: describeTaskOutcomeResult, live: turnActive, settled: tmp23, failed: "failed" === lane.task.status, glyph: closure_18(mark.Illocon, { size: 16, accessible: false }), crestColor: mark.tint, inGutter: true, epoch, expanded: tmp3, onToggle: tmp24 };
  tmp23 = !turnActive;
  const tmp22 = mark(tmp11[10]);
  if (!turnActive) {
    tmp23 = "failed" !== lane.task.status;
  }
  tmp24 = undefined;
  if (tmp9) {
    tmp24 = callback;
  }
  const children = [closure_18(tmp22, obj5), ];
  let tmp19Result = null;
  if (tmp3) {
    tmp19Result = null;
    if (tmp9) {
      const detail = lane.task.detail;
      const obj6 = { style: tmp.activityDetail, children: items1 };
      items1 = [
        detail.map((children, index) => {
              const obj = { variant: "text-xs/normal", color: "text-feedback-critical", children };
              return closure_1_18(require("Text/Text").Text, obj, index);
            }),

      ];
      const steps = lane.steps;
      items1[1] = steps.map((node) => {
        const obj = { projectId: require, node, live: node === c4, crestColor: mark.tint, epoch };
        return authStore5(closure_33, obj, node.id);
      });
      tmp19Result = tmp19(tmp20, obj6);
    }
  }
  children[1] = tmp19Result;
  return closure_19(closure_7, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityBox(projectId) {
  let length;
  let tmp6;
  let tmp7;
  let tree;
  let turnActive;
  let obj = projectId(length[15]);
  const cResult = obj.c(14);
  const tmp = projectId;
  projectId = projectId.projectId;
  ({ tree, turnActive } = projectId);
  const besideAvatar = projectId.besideAvatar;
  let tmp5 = closure_28();
  const tmp2 = length;
  if (0 === tree.steps.length) {
    if (0 === tree.tasks.length) {
      return null;
    }
  }
  length = tree.tasks.length;
  if (cResult[0] === (undefined !== besideAvatar && besideAvatar)) {
    if (cResult[1] === length) {
      if (cResult[2] === projectId) {
        if (cResult[3] === tmp5.activityBox) {
          if (cResult[4] === tree) {
            if (cResult[5] === turnActive) {
              tmp6 = cResult[6];
            }
            return tmp6;
          }
        }
      }
    }
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function f(taskId) {
      return taskId.taskId;
    };
    cResult[7] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[7];
  }
  const tasks = tree.tasks;
  const tmpResult = tmp(tmp2[42]);
  let closure_3 = tmpResult.subagentIllocons(tasks.map(tmp7));
  if (cResult[8] === (undefined !== besideAvatar && besideAvatar)) {
    if (cResult[9] === length) {
      if (cResult[10] === projectId) {
        if (cResult[11] === tree) {
          let tmp8;
          if (cResult[12] === turnActive) {
            tmp8 = cResult[13];
          }
          let obj2 = { style: tmp5.activityBox, children: items };
          items = [tmp8, ];
          const tasks1 = tree.tasks;
          items[1] = tasks1.map((task) => {
            let familiarMarkResult;
            if (null != task.task.helperMark) {
              const obj = ConjureSubagentMark;
              familiarMarkResult = obj.familiarMark(task.task.helperMark);
            }
            if (familiarMarkResult == null) {
              familiarMarkResult = closure_3.get(task.taskId);
            }
            let tmp5 = null;
            if (null != familiarMarkResult) {
              const obj2 = { projectId, lane: task, mark: familiarMarkResult, turnActive, epoch: length };
              tmp5 = authStore5(closure_35, obj2, task.taskId);
            }
            return tmp5;
          });
          const tmp12 = closure_19(closure_7, obj2);
          cResult[0] = undefined !== besideAvatar && besideAvatar;
          cResult[1] = length;
          cResult[2] = projectId;
          cResult[3] = tmp5.activityBox;
          cResult[4] = tree;
          cResult[5] = turnActive;
          cResult[6] = tmp12;
          tmp6 = tmp12;
        }
      }
    }
  }
  const tmp9 = closure_18(closure_34, { projectId, tree, turnActive, epoch: length, besideAvatar: undefined !== besideAvatar && besideAvatar });
  cResult[8] = undefined !== besideAvatar && besideAvatar;
  cResult[9] = length;
  cResult[10] = projectId;
  cResult[11] = tree;
  cResult[12] = turnActive;
  cResult[13] = tmp9;
  tmp8 = tmp9;
}) : (function ActivityBox(projectId) {
  let tree;
  let turnActive;
  projectId = projectId.projectId;
  ({ tree, turnActive } = projectId);
  let flag = projectId.besideAvatar;
  if (flag === undefined) {
    flag = false;
  }
  let length;
  let closure_3;
  const tmp = closure_28();
  if (0 === tree.steps.length) {
    if (0 === tree.tasks.length) {
      return null;
    }
  }
  length = tree.tasks.length;
  let obj = projectId(length[42]);
  const tasks = tree.tasks;
  closure_3 = obj.subagentIllocons(tasks.map((taskId) => taskId.taskId));
  let obj2 = { style: tmp.activityBox, children: items };
  items = [closure_18(closure_34, { projectId, tree, turnActive, epoch: length, besideAvatar: flag }), ];
  const tasks1 = tree.tasks;
  items[1] = tasks1.map((task) => {
    let familiarMarkResult;
    if (null != task.task.helperMark) {
      const obj = ConjureSubagentMark;
      familiarMarkResult = obj.familiarMark(task.task.helperMark);
    }
    if (familiarMarkResult == null) {
      familiarMarkResult = closure_3.get(task.taskId);
    }
    let tmp5 = null;
    if (null != familiarMarkResult) {
      const obj2 = { projectId, lane: task, mark: familiarMarkResult, turnActive, epoch: length };
      tmp5 = authStore5(closure_35, obj2, task.taskId);
    }
    return tmp5;
  });
  return closure_19(closure_7, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? (function TranscriptFade(children) {
  let obj6;
  let transcript;
  let transcript2;
  const obj = react2;
  const cResult = obj.c(15);
  children = children.children;
  const clearance = children.clearance;
  const tmp3 = closure_28();
  const obj2 = PlatformUtils;
  if (obj2.isIOS()) {
    let tmp4;
    let tmp8;
    let tmp19;
    ({ transcript, transcript: transcript2 } = tmp3);
    if (cResult[0] !== tmp3.maskSolid) {
      const obj3 = { style: tmp3.maskSolid };
      const tmp7 = authStore5(metroImportDefault, obj3);
      cResult[0] = tmp3.maskSolid;
      cResult[1] = tmp7;
      tmp4 = tmp7;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] !== tmp3.maskFade) {
      const obj4 = { style: tmp3.maskFade, colors: items, locations, start, end };
      const tmp15 = authStore5(LinearGradientDefault, obj4);
      cResult[2] = tmp3.maskFade;
      cResult[3] = tmp15;
      tmp8 = tmp15;
    } else {
      tmp8 = cResult[3];
    }
    const _Math = Math;
    const bound = Math.max(0, clearance - c23);
    if (cResult[4] !== bound) {
      const obj5 = { style: obj6 };
      obj6 = { height: bound };
      const tmp22 = authStore5(metroImportDefault, obj5);
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
          const tmp30 = authStore5(_modDef6245, obj7);
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
    const tmp26 = closure_19(metroImportDefault, obj8);
    cResult[6] = tmp3.transcript;
    cResult[7] = tmp4;
    cResult[8] = tmp8;
    cResult[9] = tmp19;
    cResult[10] = tmp26;
    tmp23 = tmp26;
  } else {
    return children;
  }
}) : (function TranscriptFade(children) {
  let obj3;
  let obj7;
  children = children.children;
  const clearance = children.clearance;
  const tmp = closure_28();
  let tmp3 = children;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const obj2 = { style: tmp.transcript, maskElement: closure_19(metroImportDefault, obj3), children };
    obj3 = { style: tmp.transcript, children: items };
    items = [, , ];
    const obj4 = { style: tmp.maskSolid };
    const tmp6 = _modDef6245;
    items[0] = authStore5(metroImportDefault, obj4);
    const obj5 = { style: tmp.maskFade, colors: items, locations, start, end };
    items[1] = authStore5(LinearGradientDefault, obj5);
    const obj6 = { style: obj7 };
    const _Math = Math;
    obj7 = { height: Math.max(0, clearance - c23) };
    items[2] = authStore5(metroImportDefault, obj6);
    tmp3 = authStore5(tmp6, obj2);
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_38 = ReactCompilerGating.isReactCompilerEnabled() ? (function RestoreProposalCard(arg0) {
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
    const tmpResult = ConjureHistoryFormat;
    const formatAuthoredAtResult = tmpResult.formatAuthoredAt(proposal.authored_at);
    cResult[0] = proposal.authored_at;
    cResult[1] = formatAuthoredAtResult;
    tmp4 = formatAuthoredAtResult;
  } else {
    tmp4 = cResult[1];
  }
  const relative = tmp4.relative;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3827["t+b0rz"]) };
    const Text = tmp(5086).Text;
    intl = tmp(1126).intl;
    const tmp9 = authStore5(Text, obj2);
    cResult[2] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== proposal.subject) {
    const obj3 = { variant: "text-md/medium", color: "text-default", children: proposal.subject };
    const tmp12 = authStore5(Text_Text.Text, obj3);
    cResult[3] = proposal.subject;
    cResult[4] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== relative) {
    let tmp14 = null;
    if (null != relative) {
      const obj4 = { variant: "text-sm/normal", color: "text-muted", children: relative };
      tmp14 = authStore5(tmp(5086).Text, obj4);
    }
    cResult[5] = relative;
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
        const obj5 = { text: intl2.string(_modDef3827.H8Jfhu), variant: "secondary", onPress: onRestore };
        const Button = tmp(5375).Button;
        intl2 = tmp(1126).intl;
        tmp19 = authStore5(Button, obj5);
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
    const obj6 = { children: closure_19(Stack_Stack.Stack, obj7) };
    obj7 = { direction: "vertical", spacing: 8, children: items };
    items = [tmp6, tmp16, tmp18];
    const tmp25 = ConjureNativeCardSurfaceDefault;
    const tmp27 = authStore5(tmp25, obj6);
    cResult[12] = tmp16;
    cResult[13] = tmp18;
    cResult[14] = tmp27;
    tmp22 = tmp27;
  }
  const obj8 = { direction: "vertical", spacing: 4, children: items1 };
  items1 = [tmp10, tmp13];
  const tmp17 = closure_19(Stack_Stack.Stack, obj8);
  cResult[7] = tmp10;
  cResult[8] = tmp13;
  cResult[9] = tmp17;
  tmp16 = tmp17;
}) : (function RestoreProposalCard(arg0) {
  let intl;
  let intl2;
  let onRestore;
  let proposal;
  ({ proposal, onRestore } = arg0);
  const obj = ConjureHistoryFormat;
  const relative = obj.formatAuthoredAt(proposal.authored_at).relative;
  const tmp5 = ConjureNativeCardSurfaceDefault;
  const Stack = Stack_Stack.Stack;
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3827["t+b0rz"]) };
  const Text = Text_Text.Text;
  intl = intl14.intl;
  items = [authStore5(Text, obj2), , ];
  const Stack2 = Stack_Stack.Stack;
  const items1 = [, ];
  const obj3 = { variant: "text-md/medium", color: "text-default", children: proposal.subject };
  items1[0] = authStore5(Text_Text.Text, obj3);
  let tmp3Result = null;
  if (null != relative) {
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: relative };
    tmp3Result = tmp3(tmp(5086).Text, obj4);
  }
  items1[1] = tmp3Result;
  items[1] = closure_19(Stack2, { direction: "vertical", spacing: 4, children: items1 });
  let tmp3Result2 = null;
  if (null != onRestore) {
    const obj5 = { text: intl2.string(_modDef3827.H8Jfhu), variant: "secondary", onPress: onRestore };
    const Button = tmp(5375).Button;
    intl2 = tmp(1126).intl;
    tmp3Result2 = tmp3(Button, obj5);
  }
  items[2] = tmp3Result2;
  const obj6 = { children: closure_19(Stack, { direction: "vertical", spacing: 8, children: items }) };
  return authStore5(tmp5, obj6);
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_39 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MessageRow(projectId) {
  let StopIcon;
  let checklistExpanded;
  let checklistSuperseded;
  let clarificationDismissed;
  let closure_17;
  let first;
  let groupStart;
  let hostsReminder;
  let id;
  let isNewest;
  let items1;
  let items2;
  let items3;
  let obj11;
  let obj13;
  let obj19;
  let obj4;
  let obj8;
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
  let secretRequestStatus;
  let tmp5;
  let tmp = projectId;
  const tmp2 = groupStart;
  let obj = projectId(groupStart[15]);
  const cResult = obj.c(237);
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
  const tmp4 = closure_28();
  closure_12 = tmp4;
  let steps = message.steps;
  if (cResult[0] !== message) {
    let tmp7 = turnSettled(message);
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
        const tmpResult = tmp(tmp2[38]);
        const latestTodosResult = tmpResult.latestTodos(message.steps);
        cResult[10] = message.steps;
        cResult[11] = latestTodosResult;
        let tmp17 = latestTodosResult;
      } else {
        tmp17 = cResult[11];
      }
      if (cResult[12] !== tmp9.tasks) {
        const tmpResult6 = tmp(tmp2[47]);
        const runningTodoAgentsResult = tmpResult6.runningTodoAgents(tmp9.tasks);
        cResult[12] = tmp9.tasks;
        cResult[13] = runningTodoAgentsResult;
        let tmp19 = runningTodoAgentsResult;
      } else {
        tmp19 = cResult[13];
      }
      if (cResult[14] === checklistSuperseded) {
        if (cResult[15] === message.render_id) {
          if (cResult[18] === message.render_id) {
            if (cResult[19] === onTogglePlan) {
              if (cResult[22] === onJumpToReplied) {
                let tmp24;
                let tmp28;
                if (cResult[25] !== message.content) {
                  const tmpResult7 = tmp(tmp2[48]);
                  const result = tmpResult7.parseConjureDesignRemark(message.content);
                  cResult[25] = message.content;
                  cResult[26] = result;
                  tmp24 = result;
                } else {
                  tmp24 = cResult[26];
                }
                let body;
                if (tmp24 != null) {
                  body = tmp24.body;
                }
                if (body == null) {
                  body = message.content;
                }
                if (cResult[27] !== body) {
                  const trimmed = body.trim();
                  cResult[27] = body;
                  cResult[28] = trimmed;
                  tmp28 = trimmed;
                } else {
                  tmp28 = cResult[28];
                }
                const content = tmp28;
                let attachments = null;
                if (null != message.attachments) {
                  attachments = null;
                  if (message.attachments.length > 0) {
                    attachments = message.attachments;
                  }
                }
                if (cResult[29] === tmp4.row) {
                  let tmp32;
                  if (cResult[30] === (groupStart && !first && tmp4.rowGroupStart)) {
                    tmp32 = cResult[31];
                  }
                  let user_id;
                  if ("user" === message.role) {
                    user_id = message.user_id;
                  }
                  if (cResult[32] === message) {
                    let tmp34;
                    if (cResult[33] === onRestoreVersion) {
                      tmp34 = cResult[34];
                    }
                    turnSettled = tmp34;
                    if (cResult[35] === user_id) {
                      if (cResult[36] === tmp28) {
                        if (cResult[37] === onRestoreVersion) {
                          if ("" === tmp28) {
                            if (cResult[40] === onAskForIdeas) {
                              if (cResult[41] === projectId) {
                                if (cResult[42] === tmp4.avatar) {
                                  if (cResult[43] === tmp4.avatarSpoken) {
                                    if (cResult[44] === tmp4.header) {
                                      if (cResult[45] === tmp4.reminderSeparated) {
                                        if (cResult[46] === tmp4.reminderTip) {
                                          let tmp39;
                                          if (cResult[47] === tmp4.spoken) {
                                            tmp39 = cResult[48];
                                          }
                                          if (cResult[49] === hostsReminder) {
                                            if (cResult[50] === reminder) {
                                              if (cResult[51] === tmp39) {
                                                let tmp40;
                                                if (cResult[52] === tmp4.reminderSlot) {
                                                  tmp40 = cResult[53];
                                                }
                                                if ("user" === message.role) {
                                                  let tmp90;
                                                  if ("" === tmp28) {
                                                    if (null == tmp24) {
                                                      if (null == attachments) {
                                                        return null;
                                                      }
                                                    }
                                                  }
                                                  if (cResult[54] !== message.agentReaction) {
                                                    const tmpResult8 = tmp(tmp2[56]);
                                                    const conjureAgentReactionLabel = tmpResult8.getConjureAgentReactionLabel(message.agentReaction);
                                                    cResult[54] = message.agentReaction;
                                                    cResult[55] = conjureAgentReactionLabel;
                                                    tmp90 = conjureAgentReactionLabel;
                                                  } else {
                                                    tmp90 = cResult[55];
                                                  }
                                                  if (cResult[56] === groupStart) {
                                                    if (cResult[57] === message.user_id) {
                                                      let tmp92;
                                                      if (cResult[58] === tmp4.avatar) {
                                                        tmp92 = cResult[59];
                                                      }
                                                      if (cResult[60] === groupStart) {
                                                        if (cResult[61] === message.created_at) {
                                                          if (cResult[62] === message.user_id) {
                                                            let tmp96;
                                                            let tmp102Result;
                                                            if (cResult[63] === tmp4.header) {
                                                              tmp96 = cResult[64];
                                                            }
                                                            if (cResult[65] === tmp28) {
                                                              if (cResult[66] === groupStart) {
                                                                let tmp100;
                                                                if (cResult[67] === tmp24) {
                                                                  tmp100 = cResult[68];
                                                                }
                                                                if (cResult[69] === attachments) {
                                                                  let tmp108;
                                                                  if (cResult[70] === projectId) {
                                                                    tmp108 = cResult[71];
                                                                  }
                                                                  if (cResult[72] === message.agentReaction) {
                                                                    if (cResult[73] === tmp90) {
                                                                      if (cResult[74] === tmp4.agentReaction) {
                                                                        let tmp112;
                                                                        if (cResult[75] === tmp4.agentReactionEmoji) {
                                                                          tmp112 = cResult[76];
                                                                        }
                                                                        if (cResult[77] === tmp38) {
                                                                          if (cResult[78] === tmp32) {
                                                                            if (cResult[79] === tmp92) {
                                                                              if (cResult[80] === tmp96) {
                                                                                if (cResult[81] === tmp100) {
                                                                                  if (cResult[82] === tmp108) {
                                                                                    let tmp117;
                                                                                    if (cResult[83] === tmp112) {
                                                                                      tmp117 = cResult[84];
                                                                                    }
                                                                                    return tmp117;
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                        let obj2 = { style: tmp32, onLongPress: tmp38, accessible: false, children: items };
                                                                        items = [tmp92, tmp96, tmp100, tmp108, tmp112];
                                                                        const tmp120 = closure_19(onTogglePlan, obj2);
                                                                        cResult[77] = tmp38;
                                                                        cResult[78] = tmp32;
                                                                        cResult[79] = tmp92;
                                                                        cResult[80] = tmp96;
                                                                        cResult[81] = tmp100;
                                                                        cResult[82] = tmp108;
                                                                        cResult[83] = tmp112;
                                                                        cResult[84] = tmp120;
                                                                        tmp117 = tmp120;
                                                                      }
                                                                    }
                                                                  }
                                                                  let tmp113 = null;
                                                                  if (null != message.agentReaction) {
                                                                    tmp113 = null;
                                                                    if (null != tmp90) {
                                                                      let obj3 = { style: tmp4.agentReaction, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp90, children: closure_18(message(tmp2[58]), obj4) };
                                                                      obj4 = { name: message.agentReaction, fastImageStyle: tmp4.agentReactionEmoji };
                                                                      tmp113 = closure_18(replied, obj3);
                                                                    }
                                                                  }
                                                                  cResult[72] = message.agentReaction;
                                                                  cResult[73] = tmp90;
                                                                  cResult[74] = tmp4.agentReaction;
                                                                  cResult[75] = tmp4.agentReactionEmoji;
                                                                  cResult[76] = tmp113;
                                                                  tmp112 = tmp113;
                                                                }
                                                                let tmp109 = null;
                                                                if (null != attachments) {
                                                                  let obj5 = { projectId, attachments };
                                                                  tmp109 = closure_18(closure_32, obj5);
                                                                }
                                                                cResult[69] = attachments;
                                                                cResult[70] = projectId;
                                                                cResult[71] = tmp109;
                                                                tmp108 = tmp109;
                                                              }
                                                            }
                                                            if ("" !== tmp28) {
                                                              let combined;
                                                              const Text = tmp(tmp2[19]).Text;
                                                              const tmp102 = closure_19;
                                                              if (!groupStart) {
                                                                const intl2 = tmp(tmp2[17]).intl;
                                                                const _HermesInternal = HermesInternal;
                                                                combined = "" + intl2.string(tmp(tmp2[17]).t.KD6OJJ) + ": " + tmp28;
                                                              }
                                                              let obj6 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: items1 };
                                                              let tmp105 = null;
                                                              if (null != tmp24) {
                                                                let obj7 = { label: tmp24.label, variant: "text-md/medium" };
                                                                tmp105 = closure_18(message(tmp2[57]), obj7);
                                                              }
                                                              items1 = [tmp105, , ];
                                                              let str9 = null;
                                                              if (null != tmp24) {
                                                                str9 = null;
                                                                if ("" !== tmp28) {
                                                                  str9 = " ";
                                                                }
                                                              }
                                                              items1[1] = str9;
                                                              items1[2] = tmp28;
                                                              tmp102Result = tmp102(Text, obj6);
                                                            } else {
                                                              tmp102Result = null;
                                                            }
                                                            cResult[65] = tmp28;
                                                            cResult[66] = groupStart;
                                                            cResult[67] = tmp24;
                                                            cResult[68] = tmp102Result;
                                                            tmp100 = tmp102Result;
                                                          }
                                                        }
                                                      }
                                                      let tmp97 = null;
                                                      if (groupStart) {
                                                        const obj9 = { style: tmp4.header, children: closure_18(tmp(tmp2[54]).ConjureUserHeader, obj11) };
                                                        obj11 = { userId: null, at: null };
                                                        ({ user_id: obj23.userId, created_at: obj23.at } = message);
                                                        tmp97 = closure_18(replied, obj9);
                                                      }
                                                      cResult[60] = groupStart;
                                                      cResult[61] = message.created_at;
                                                      cResult[62] = message.user_id;
                                                      cResult[63] = tmp4.header;
                                                      cResult[64] = tmp97;
                                                      tmp96 = tmp97;
                                                    }
                                                  }
                                                  let tmp93 = null;
                                                  if (groupStart) {
                                                    const obj12 = { style: tmp4.avatar, children: closure_18(tmp(tmp2[54]).ConjureUserAvatar, obj13) };
                                                    obj13 = { userId: message.user_id };
                                                    tmp93 = closure_18(replied, obj12);
                                                  }
                                                  cResult[56] = groupStart;
                                                  cResult[57] = message.user_id;
                                                  cResult[58] = tmp4.avatar;
                                                  cResult[59] = tmp93;
                                                  tmp92 = tmp93;
                                                } else {
                                                  if ("project_event" === message.kind) {
                                                    if (null != message.projectEvent) {
                                                      if (cResult[85] === message.projectEvent) {
                                                        let tmp82;
                                                        if (cResult[86] === projectId) {
                                                          tmp82 = cResult[87];
                                                        }
                                                        if (cResult[88] === tmp32) {
                                                          let tmp86;
                                                          if (cResult[89] === tmp82) {
                                                            tmp86 = cResult[90];
                                                          }
                                                          return tmp86;
                                                        }
                                                        const obj14 = { style: tmp32, children: tmp82 };
                                                        const tmp89 = closure_18(replied, obj14);
                                                        cResult[88] = tmp32;
                                                        cResult[89] = tmp82;
                                                        cResult[90] = tmp89;
                                                        tmp86 = tmp89;
                                                      }
                                                      const obj15 = { projectId, event: message.projectEvent };
                                                      const tmp85 = closure_18(message(tmp2[59]), obj15);
                                                      cResult[85] = message.projectEvent;
                                                      cResult[86] = projectId;
                                                      cResult[87] = tmp85;
                                                      tmp82 = tmp85;
                                                    }
                                                  }
                                                  if ("publish_notice" === message.kind) {
                                                    if (null != message.publishNotice) {
                                                      if (cResult[91] === message.publishNotice) {
                                                        let tmp74;
                                                        if (cResult[92] === projectId) {
                                                          tmp74 = cResult[93];
                                                        }
                                                        if (cResult[94] === tmp40) {
                                                          if (cResult[95] === tmp32) {
                                                            let tmp78;
                                                            if (cResult[96] === tmp74) {
                                                              tmp78 = cResult[97];
                                                            }
                                                            return tmp78;
                                                          }
                                                        }
                                                        const obj16 = { style: tmp32, children: items2 };
                                                        items2 = [tmp74, tmp40];
                                                        const tmp81 = closure_19(replied, obj16);
                                                        cResult[94] = tmp40;
                                                        cResult[95] = tmp32;
                                                        cResult[96] = tmp74;
                                                        cResult[97] = tmp81;
                                                        tmp78 = tmp81;
                                                      }
                                                      const obj17 = { projectId, notice: message.publishNotice };
                                                      const tmp77 = closure_18(message(tmp2[52]), obj17);
                                                      cResult[91] = message.publishNotice;
                                                      cResult[92] = projectId;
                                                      cResult[93] = tmp77;
                                                      tmp74 = tmp77;
                                                    }
                                                  }
                                                  if (true === message.interrupted) {
                                                    let tmp58;
                                                    let tmp61;
                                                    let tmp66;
                                                    const _Symbol2 = Symbol;
                                                    const activityBox = tmp4.activityBox;
                                                    if (cResult[98] === Symbol.for("react.memo_cache_sentinel")) {
                                                      const intl = tmp(tmp2[17]).intl;
                                                      const stringResult = intl.string(message(tmp2[18]).oOmBdX);
                                                      cResult[98] = stringResult;
                                                      tmp58 = stringResult;
                                                    } else {
                                                      tmp58 = cResult[98];
                                                    }
                                                    const _Symbol3 = Symbol;
                                                    if (cResult[99] === Symbol.for("react.memo_cache_sentinel")) {
                                                      const obj18 = { line: tmp58, live: false, settled: true, inGutter: true, glyph: closure_18(StopIcon, obj19) };
                                                      obj19 = { size: "refresh_sm", color: message(tmp2[9]).colors.TEXT_MUTED };
                                                      const tmp64 = message(tmp2[10]);
                                                      StopIcon = tmp(tmp2[60]).StopIcon;
                                                      const tmp65 = closure_18(tmp64, obj18);
                                                      cResult[99] = tmp65;
                                                      tmp61 = tmp65;
                                                    } else {
                                                      tmp61 = cResult[99];
                                                    }
                                                    if (cResult[100] !== tmp4.activityBox) {
                                                      const obj20 = { style: activityBox, children: tmp61 };
                                                      const tmp69 = closure_18(replied, obj20);
                                                      cResult[100] = tmp4.activityBox;
                                                      cResult[101] = tmp69;
                                                      tmp66 = tmp69;
                                                    } else {
                                                      tmp66 = cResult[101];
                                                    }
                                                    if (cResult[102] === tmp40) {
                                                      if (cResult[103] === tmp32) {
                                                        let tmp70;
                                                        if (cResult[104] === tmp66) {
                                                          tmp70 = cResult[105];
                                                        }
                                                        return tmp70;
                                                      }
                                                    }
                                                    const obj21 = { style: tmp32, children: items3 };
                                                    items3 = [tmp66, tmp40];
                                                    const tmp73 = closure_19(replied, obj21);
                                                    cResult[102] = tmp40;
                                                    cResult[103] = tmp32;
                                                    cResult[104] = tmp66;
                                                    cResult[105] = tmp73;
                                                    tmp70 = tmp73;
                                                  } else {
                                                    if (cResult[106] !== message.steps) {
                                                      let tmp45;
                                                      const _Symbol = Symbol;
                                                      if (cResult[108] === Symbol.for("react.memo_cache_sentinel")) {
                                                        class Le {
                                                          constructor(kind) {
                                                            return "error" === kind.kind || "terminal_error" === kind.kind;
                                                          }
                                                        }
                                                        cResult[108] = Le;
                                                        tmp45 = Le;
                                                      } else {
                                                        class Le {
                                                          constructor(kind) {
                                                            return "error" === kind.kind || "terminal_error" === kind.kind;
                                                          }
                                                        }
                                                      }
                                                      const steps1 = message.steps;
                                                      const found = steps1.find(tmp45);
                                                      cResult[106] = message.steps;
                                                      cResult[107] = found;
                                                    } else {
                                                      class Le {
                                                        constructor(kind) {
                                                          return "error" === kind.kind || "terminal_error" === kind.kind;
                                                        }
                                                      }
                                                    }
                                                    if ("proposal" === message.kind) {
                                                      class Le {
                                                        constructor(kind) {
                                                          return "error" === kind.kind || "terminal_error" === kind.kind;
                                                        }
                                                      }
                                                    }
                                                    const tmp48 = turnSettled(message);
                                                    if (tmp48) {
                                                      class Le {
                                                        constructor(kind) {
                                                          return "error" === kind.kind || "terminal_error" === kind.kind;
                                                        }
                                                      }
                                                      if (null != message.ideas) {
                                                        class Le {
                                                          constructor(kind) {
                                                            return "error" === kind.kind || "terminal_error" === kind.kind;
                                                          }
                                                        }
                                                        if (message.ideas.length > 0) {
                                                          class Le {
                                                            constructor(kind) {
                                                              return "error" === kind.kind || "terminal_error" === kind.kind;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    if (tmp48) {
                                                      class Le {
                                                        constructor(kind) {
                                                          return "error" === kind.kind || "terminal_error" === kind.kind;
                                                        }
                                                      }
                                                      if (tmp51 == null) {
                                                        class Le {
                                                          constructor(kind) {
                                                            return "error" === kind.kind || "terminal_error" === kind.kind;
                                                          }
                                                        }
                                                      }
                                                    }
                                                    if (tmp48) {
                                                      class Le {
                                                        constructor(kind) {
                                                          return "error" === kind.kind || "terminal_error" === kind.kind;
                                                        }
                                                      }
                                                      if (tmp53 == null) {
                                                        class Le {
                                                          constructor(kind) {
                                                            return "error" === kind.kind || "terminal_error" === kind.kind;
                                                          }
                                                        }
                                                      }
                                                    }
                                                    if (cResult[109] === isNewest) {
                                                      class Le {
                                                        constructor(kind) {
                                                          return "error" === kind.kind || "terminal_error" === kind.kind;
                                                        }
                                                      }
                                                    }
                                                    let tmp55;
                                                    if ("open" === secretRequestStatus) {
                                                      class Le {
                                                        constructor(kind) {
                                                          return "error" === kind.kind || "terminal_error" === kind.kind;
                                                        }
                                                      }
                                                      const activeAwaitingUserResult = obj10.activeAwaitingUser(message, isNewest);
                                                      if (activeAwaitingUserResult == null) {
                                                        class Le {
                                                          constructor(kind) {
                                                            return "error" === kind.kind || "terminal_error" === kind.kind;
                                                          }
                                                        }
                                                      }
                                                      tmp55 = activeAwaitingUserResult;
                                                    }
                                                    cResult[109] = isNewest;
                                                    cResult[110] = message;
                                                    cResult[111] = secretRequestStatus;
                                                    cResult[112] = tmp55;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          let tmp41 = null;
                                          if (hostsReminder) {
                                            class Le {
                                              constructor(kind) {
                                                return "error" === kind.kind || "terminal_error" === kind.kind;
                                              }
                                            }
                                            const obj22 = { style: tmp4.reminderSlot, reminder, renderReminder: tmp39 };
                                            tmp41 = closure_18(message(tmp2[55]), obj22);
                                          }
                                          cResult[49] = hostsReminder;
                                          cResult[50] = reminder;
                                          cResult[51] = tmp39;
                                          cResult[52] = tmp4.reminderSlot;
                                          cResult[53] = tmp41;
                                          tmp40 = tmp41;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            function renderReminder(arg0) {
                              let items1;
                              let obj3;
                              let obj4;
                              let obj5;
                              let obj6;
                              let tmp7;
                              if ("outdated" === arg0) {
                                const obj2 = { style: closure_12.reminderTip, children: authStore5(metroImportDefault, obj3) };
                                obj3 = { style: closure_12.spoken, children: authStore5(ConjurePublishNoticeLineDefault, obj4) };
                                obj4 = { projectId, notice: "outdated" };
                                return authStore5(metroImportDefault, obj2);
                              } else if ("ideas" === arg0) {
                                const obj = { style: closure_12.reminderSeparated, children: authStore5(tmp7, obj5) };
                                obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: closure_19(closure_20, obj6) };
                                obj6 = { children: items1 };
                                const obj7 = { style: items, children: authStore5(ConjureMessageAuthor.ConjureAvatar, {}) };
                                items = [, ];
                                ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                tmp7 = ConjureIdeasOfferDefault;
                                items1 = [authStore5(metroImportDefault, obj7), ];
                                const obj8 = { style: closure_12.header, children: authStore5(ConjureMessageAuthor.ConjureHeader, {}) };
                                items1[1] = authStore5(metroImportDefault, obj8);
                                return authStore5(metroImportDefault, obj);
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
                            cResult[48] = renderReminder;
                            tmp39 = renderReminder;
                          }
                        }
                      }
                    }
                    function _e() {
                      let fn;
                      let obj = { content, userId: user_id, onRestoreVersion: fn };
                      fn = undefined;
                      const showConjureMessageActions = ConjureMessageActionSheet.showConjureMessageActions;
                      ConjureMessageActionSheet;
                      if (null != closure_17) {
                        if (null != onRestoreVersion) {
                          fn = () => {
                            const obj = projectId(groupStart[51]);
                            const obj2 = {
                              onConfirm() {
                                return closure_1_11(closure_1_17);
                              }
                            };
                            return obj.confirmRestoreVersion(obj2);
                          };
                        }
                      }
                      return showConjureMessageActions(obj);
                    }
                    cResult[35] = user_id;
                    cResult[36] = tmp28;
                    cResult[37] = onRestoreVersion;
                    cResult[38] = tmp34;
                    cResult[39] = _e;
                  }
                  let turnRestoreEntryResult = null;
                  if (null != onRestoreVersion) {
                    class Le {
                      constructor(kind) {
                        return "error" === kind.kind || "terminal_error" === kind.kind;
                      }
                    }
                    turnRestoreEntryResult = obj8.turnRestoreEntry(message);
                  }
                  cResult[32] = message;
                  cResult[33] = onRestoreVersion;
                  cResult[34] = turnRestoreEntryResult;
                  tmp34 = turnRestoreEntryResult;
                }
                const items4 = [tmp4.row, groupStart && !first && tmp4.rowGroupStart];
                cResult[29] = tmp4.row;
                cResult[30] = groupStart && !first && tmp4.rowGroupStart;
                cResult[31] = items4;
                tmp32 = items4;
              }
              function ce() {
                if (null != replied) {
                  if (onJumpToReplied != null) {
                    tmp2(tmp.id);
                  }
                }
              }
              cResult[22] = onJumpToReplied;
              cResult[23] = replied;
              cResult[24] = ce;
            }
          }
          function oe() {
            return onTogglePlan(message.render_id, planSuperseded);
          }
          cResult[18] = message.render_id;
          cResult[19] = onTogglePlan;
          cResult[20] = planSuperseded;
          cResult[21] = oe;
        }
      }
      function ae() {
        return onToggleChecklist(message.render_id, checklistSuperseded);
      }
      cResult[14] = checklistSuperseded;
      cResult[15] = message.render_id;
      cResult[16] = onToggleChecklist;
      cResult[17] = ae;
    }
    const obj24 = { turnActive: !tmp11 };
    const tmpResult9 = tmp(tmp2[38]);
    const turnSegmentsResult = tmpResult9.turnSegments(steps2, obj24);
    cResult[7] = message.steps;
    cResult[8] = !tmp11;
    cResult[9] = turnSegmentsResult;
    tmp15 = turnSegmentsResult;
  }
  const tmpResult10 = tmp(tmp2[38]);
  const timelineTree = tmpResult10.buildTimelineTree(steps, { turnActive: tmp8 });
  cResult[2] = message.steps;
  cResult[3] = tmp8;
  cResult[4] = timelineTree;
  tmp9 = timelineTree;
}) : (function MessageRow(projectId) {
  let StopIcon;
  let Text2;
  let c20;
  let checklistExpanded;
  let checklistSuperseded;
  let clarificationDismissed;
  let closure_10;
  let closure_9;
  let first;
  let fn;
  let hostsReminder;
  let intl;
  let intl2;
  let isNewest;
  let items11;
  let items12;
  let items13;
  let items14;
  let items18;
  let obj14;
  let obj16;
  let obj21;
  let obj22;
  let obj29;
  let obj33;
  let obj39;
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
  let tmp38Result5;
  let tmp38Result6;
  let tmp52;
  let tmp91;
  projectId = projectId.projectId;
  const message = projectId.message;
  const groupStart = projectId.groupStart;
  ({ isNewest, reminder, checklistSuperseded } = projectId);
  ({ secretRequestStatus, onToggleChecklist } = projectId);
  const planSuperseded = projectId.planSuperseded;
  const onTogglePlan = projectId.onTogglePlan;
  const replied = projectId.replied;
  const onJumpToReplied = projectId.onJumpToReplied;
  ({ onAskForIdeas: closure_9, onDismissClarification: closure_10, onRestoreVersion } = projectId);
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
  let tmp = closure_28();
  closure_12 = tmp;
  let obj = onToggleChecklist;
  items = [message];
  const memo = onToggleChecklist.useMemo(() => {
    const obj = ConjureTimelineTree;
    const obj2 = { turnActive: !turnSettled(message) };
    return obj.buildTimelineTree(message.steps, obj2);
  }, items);
  let items1 = [message];
  const memo1 = onToggleChecklist.useMemo(() => {
    const obj = ConjureTimelineTree;
    const obj2 = { turnActive: !turnSettled(message) };
    return obj.turnSegments(message.steps, obj2);
  }, items1);
  const items2 = [message];
  const memo2 = onToggleChecklist.useMemo(() => {
    const obj = ConjureTimelineTree;
    return obj.latestTodos(message.steps);
  }, items2);
  const items3 = [memo];
  const items4 = [onToggleChecklist, message.render_id, checklistSuperseded];
  const memo3 = onToggleChecklist.useMemo(() => {
    const obj = ConjureTodoAgents;
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
    const obj = ConjureDesignFeedback;
    return obj.parseConjureDesignRemark(message.content);
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
      const obj = ConjureChatRestore;
      turnRestoreEntryResult = obj.turnRestoreEntry(message);
    }
    return turnRestoreEntryResult;
  }, items9);
  const items10 = [trimmed, user_id, memo5, onRestoreVersion];
  const callback3 = obj.useCallback(() => {
    let fn;
    let obj = { content: trimmed, userId: user_id, onRestoreVersion: fn };
    fn = undefined;
    const showConjureMessageActions = ConjureMessageActionSheet.showConjureMessageActions;
    ConjureMessageActionSheet;
    if (null != memo5) {
      if (null != onRestoreVersion) {
        fn = () => {
          const obj = projectId(groupStart[51]);
          const obj2 = {
            onConfirm() {
              return closure_1_11(closure_1_17);
            }
          };
          return obj.confirmRestoreVersion(obj2);
        };
      }
    }
    return showConjureMessageActions(obj);
  }, items10);
  if ("" === trimmed) {
    let tmp17 = null;
    if (hostsReminder) {
      const tmp19 = message;
      let tmp20 = groupStart;
      let obj2 = {
        style: tmp.reminderSlot,
        reminder,
        renderReminder(arg0) {
              let items1;
              let obj3;
              let obj4;
              let obj5;
              let obj6;
              let tmp7;
              if ("outdated" === arg0) {
                const obj2 = { style: closure_12.reminderTip, children: authStore5(metroImportDefault, obj3) };
                obj3 = { style: closure_12.spoken, children: authStore5(ConjurePublishNoticeLineDefault, obj4) };
                obj4 = { projectId, notice: "outdated" };
                return authStore5(metroImportDefault, obj2);
              } else if ("ideas" === arg0) {
                const obj = { style: closure_12.reminderSeparated, children: authStore5(tmp7, obj5) };
                obj5 = { style: closure_12.spoken, onAsk, attribution: clarification(closure_20, obj6) };
                obj6 = { children: items1 };
                const obj7 = { style: items, children: authStore5(ConjureMessageAuthor.ConjureAvatar, {}) };
                items = [, ];
                ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                tmp7 = ConjureIdeasOfferDefault;
                items1 = [authStore5(metroImportDefault, obj7), ];
                const obj8 = { style: closure_12.header, children: authStore5(ConjureMessageAuthor.ConjureHeader, {}) };
                items1[1] = authStore5(metroImportDefault, obj8);
                return authStore5(metroImportDefault, obj);
              }
            }
      };
      tmp17 = restoreProposal(message(groupStart[55]), obj2);
    }
    if ("user" === message.role) {
      let tmp105Result;
      if ("" === trimmed) {
        if (null == memo4) {
          if (null == attachments) {
            return null;
          }
        }
      }
      const obj43 = projectId(groupStart[56]);
      const conjureAgentReactionLabel = obj43.getConjureAgentReactionLabel(message.agentReaction);
      let obj5 = { style: items8, onLongPress: tmp16, accessible: false, children: items11 };
      let tmp107 = null;
      const tmp106 = onTogglePlan;
      if (groupStart) {
        let obj6 = { style: tmp.avatar, children: restoreProposal(projectId(groupStart[54]).ConjureUserAvatar, obj7) };
        obj7 = { userId: message.user_id };
        tmp107 = restoreProposal(replied, obj6);
      }
      items11 = [tmp107, , , , ];
      let tmp110 = null;
      if (groupStart) {
        let obj8 = { style: tmp.header, children: restoreProposal(projectId(groupStart[54]).ConjureUserHeader, obj9) };
        obj9 = { userId: null, at: null };
        ({ user_id: obj48.userId, created_at: obj48.at } = message);
        tmp110 = restoreProposal(replied, obj8);
      }
      items11[1] = tmp110;
      if ("" !== trimmed) {
        let combined;
        const Text3 = tmp102(tmp103[19]).Text;
        if (!groupStart) {
          const intl3 = tmp102(tmp103[17]).intl;
          const _HermesInternal = HermesInternal;
          combined = "" + intl3.string(tmp102(tmp103[17]).t.KD6OJJ) + ": " + trimmed;
        }
        let tmp116 = null;
        const obj10 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: items12 };
        if (null != memo4) {
          const obj11 = { label: memo4.label, variant: "text-md/medium" };
          tmp116 = restoreProposal(message(tmp103[57]), obj11);
        }
        items12 = [tmp116, , ];
        let str6 = null;
        if (null != memo4) {
          str6 = null;
          if ("" !== trimmed) {
            str6 = " ";
          }
        }
        items12[1] = str6;
        items12[2] = trimmed;
        tmp105Result = tmp105(Text3, obj10);
      } else {
        tmp105Result = null;
      }
      items11[2] = tmp105Result;
      let tmp119 = null;
      if (null != attachments) {
        const obj12 = { projectId, attachments };
        tmp119 = restoreProposal(closure_32, obj12);
      }
      items11[3] = tmp119;
      let tmp122 = null;
      if (null != message.agentReaction) {
        tmp122 = null;
        if (null != conjureAgentReactionLabel) {
          const obj13 = { style: tmp.agentReaction, accessible: true, accessibilityRole: "image", accessibilityLabel: conjureAgentReactionLabel, children: restoreProposal(message(groupStart[58]), obj14) };
          obj14 = { name: message.agentReaction, fastImageStyle: tmp.agentReactionEmoji };
          tmp122 = restoreProposal(replied, obj13);
        }
      }
      items11[4] = tmp122;
      return clarification(tmp106, obj5);
    } else {
      if ("project_event" === message.kind) {
        if (null != message.projectEvent) {
          const obj15 = { style: items8, children: restoreProposal(message(groupStart[59]), obj16) };
          obj16 = { projectId, event: message.projectEvent };
          return restoreProposal(replied, obj15);
        }
      }
      if ("publish_notice" === message.kind) {
        if (null != message.publishNotice) {
          const obj17 = { style: items8, children: items13 };
          const obj18 = { projectId, notice: message.publishNotice };
          items13 = [restoreProposal(message(groupStart[52]), obj18), tmp17];
          return clarification(replied, obj17);
        }
      }
      if (true === message.interrupted) {
        const obj19 = { style: items8, children: items14 };
        const obj20 = { style: tmp.activityBox, children: restoreProposal(tmp91, obj21) };
        obj21 = { line: intl2.string(message(groupStart[18]).oOmBdX), live: false, settled: true, inGutter: true, glyph: restoreProposal(StopIcon, obj22) };
        tmp91 = message(groupStart[10]);
        intl2 = projectId(groupStart[17]).intl;
        obj22 = { size: "refresh_sm", color: message(groupStart[9]).colors.TEXT_MUTED };
        StopIcon = projectId(groupStart[60]).StopIcon;
        items14 = [restoreProposal(replied, obj20), tmp17];
        return clarification(replied, obj19);
      } else {
        let provisionalTodo;
        let tmp53Result18;
        let steps = message.steps;
        const found = steps.find((kind) => "error" === kind.kind || "terminal_error" === kind.kind);
        let proposal;
        if ("proposal" === message.kind) {
          proposal = message.proposal;
        }
        const tmp23 = memo5(message);
        let ideas = null;
        const tmp22 = memo5;
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
          let obj3 = projectId(groupStart[61]);
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
        let obj4 = projectId(groupStart[62]);
        const obj23 = { steps: message.steps, content: trimmed, hasProposal: null != proposal, hasAttachments: null != attachments };
        const turnPresentation = obj4.resolveTurnPresentation(obj23);
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
        const tmp38Result = projectId(groupStart[62]);
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
        const obj24 = { turnActive: tmp45 };
        const tmp38Result4 = projectId(groupStart[38]);
        open = tmp38Result4.turnLifecycle(memo1, obj24).open;
        let avatarSpokenReplying = groupStart && null != replied;
        let tmp49Result = null;
        const tmp47 = c20;
        if (avatarSpokenReplying) {
          const obj25 = { replied, onJump: tmp52 };
          tmp52 = undefined;
          const tmp49 = restoreProposal;
          const tmp51 = message(groupStart[13]);
          if (null != onJumpToReplied) {
            tmp52 = callback2;
          }
          tmp49Result = tmp49(tmp51, obj25);
        }
        const items15 = [tmp49Result, , ];
        const items16 = [, , ];
        ({ avatar: arr15[0], avatarSpoken: arr15[1] } = tmp);
        if (avatarSpokenReplying) {
          avatarSpokenReplying = tmp.avatarSpokenReplying;
        }
        const obj26 = { children: items15 };
        items16[2] = avatarSpokenReplying;
        const obj27 = { style: items16, children: restoreProposal(projectId(groupStart[54]).ConjureAvatar, {}) };
        items15[1] = restoreProposal(replied, obj27);
        const obj28 = { style: tmp.header, children: restoreProposal(projectId(groupStart[54]).ConjureHeader, obj29) };
        obj29 = { at: message.created_at };
        items15[2] = restoreProposal(replied, obj28);
        const tmp46Result = clarification(tmp47, obj26);
        const obj30 = { style: items8, onLongPress: tmp16, accessible: false, children: null };
        let tmp53Result = null;
        const tmp56 = onTogglePlan;
        if (turnLeadsWithStretchResult) {
          tmp53Result = null;
          if (groupStart) {
            const obj31 = { style: tmp.spoken, children: tmp46Result };
            tmp53Result = tmp53(tmp54, obj31);
          }
        }
        const items17 = [
          tmp53Result,
          memo1.map((prose, index) => {
                  let ConjureRevealedMarkdown;
                  let obj3;
                  let steps;
                  let tasks;
                  let tmp5;
                  let tmp19Result = null;
                  const Fragment = react.Fragment;
                  const tmp = closure_19;
                  if (null != prose.prose) {
                    tmp19Result = null;
                    if (prose.prose.key !== c20) {
                      const obj2 = { style: closure_12.spoken, children: authStore5(ConjureRevealedMarkdown, obj3) };
                      obj3 = { source: prose.prose.content, streaming: tmp5 };
                      tmp5 = closure_23;
                      ConjureRevealedMarkdown = ConjureNativeMarkdown.ConjureRevealedMarkdown;
                      const tmp20 = metroImportDefault;
                      if (closure_23) {
                        tmp5 = index === memo1.length - 1;
                      }
                      if (tmp5) {
                        tmp5 = !prose.hasWork;
                      }
                      tmp19Result = tmp19(tmp20, obj2);
                    }
                  }
                  const children = [tmp19Result, ];
                  let tmp7Result = null;
                  if (prose.hasWork) {
                    const obj = { projectId, tree: null, turnActive: null, besideAvatar: null };
                    const obj4 = { steps: steps.filter((segment) => segment.segment === index), tasks: tasks.filter((task) => task.task.segment === index) };
                    steps = memo.steps;
                    index = prose.index;
                    tasks = memo.tasks;
                    const tmp7 = authStore5;
                    const tmp8 = closure_36;
                    if (index === index) {
                      let obj6;
                      if (null != memo.turn) {
                        obj6 = { turn: memo.turn };
                        const obj5 = { turn: memo.turn };
                      }
                      const merged = Object.assign(obj6);
                      obj.tree = obj4;
                      obj.turnActive = prose.index === open;
                      let tmp16 = c21 && groupStart && 0 === index;
                      if (tmp16) {
                        tmp16 = null == prose.prose || prose.prose.key === c20;
                        const tmp17 = null == prose.prose || prose.prose.key === c20;
                      }
                      obj.besideAvatar = tmp16;
                      tmp7Result = tmp7(tmp8, obj);
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
                              const obj32 = { style: tmp.spoken, children: restoreProposal(Text2, obj33) };
                              obj33 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(message(groupStart[18]).YR8A2v) };
                              Text2 = tmp38(tmp39[19]).Text;
                              intl = tmp38(tmp39[17]).intl;
                              tmp53Result14 = tmp53(tmp54, obj32);
                            }
                            items17[3] = tmp53Result14;
                            items17[4] = tmp17;
                            obj30.children = items17;
                            return clarification(tmp56, obj30);
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
        const obj34 = { style: tmp.spoken, children: items18 };
        if (groupStart) {
          tmp59 = null;
          if (!turnLeadsWithStretchResult) {
            tmp59 = tmp46Result;
          }
        }
        items18 = [tmp59, , , , , , , , , , , , ];
        let tmp53Result15 = null;
        if (showsClosingMessage) {
          const obj35 = { source: closingContent };
          tmp53Result15 = tmp53(message(tmp39[30]), obj35);
        }
        items18[1] = tmp53Result15;
        let tmp53Result16 = null;
        if ("side_reply" === message.kind) {
          const obj36 = { variant: "text-xs/normal", color: "text-muted", children: tmp38Result5.midTurnCaption(message.acknowledges) };
          const Text = tmp38(tmp39[19]).Text;
          tmp38Result5 = projectId(groupStart[63]);
          tmp53Result16 = tmp53(Text, obj36);
        }
        items18[2] = tmp53Result16;
        let tmp53Result17 = null;
        if (null != attachments) {
          const obj37 = { projectId, attachments };
          tmp53Result17 = tmp53(closure_32, obj37);
        }
        items18[3] = tmp53Result17;
        if (null != items19) {
          const tmp67 = message(groupStart[25]);
          const tmp68 = message(groupStart[64]);
          if (items19 == null) {
            items19 = [];
          }
          const obj38 = { children: restoreProposal(tmp68, obj39) };
          obj39 = { todos: items19, provisional: provisionalTodo, agents: memo3, live: tmp38Result6.checklistLive(message), superseded: checklistSuperseded, expanded: checklistExpanded, onToggleExpanded: callback };
          tmp38Result6 = projectId(groupStart[65]);
          tmp53Result18 = tmp53(tmp67, obj38);
        } else {
          tmp53Result18 = null;
        }
        items18[4] = tmp53Result18;
        let tmp53Result19 = null;
        if (null != proposal) {
          const obj40 = { projectId, proposal, version: planVersion, superseded: planSuperseded, expanded: planExpanded, onToggleExpanded: callback1, onApprove: onApprovePlan };
          tmp53Result19 = tmp53(closure_30, obj40);
        }
        items18[5] = tmp53Result19;
        let tmp53Result20 = null;
        if (null != clarification) {
          const obj41 = {
            projectId,
            clarification,
            onSubmit: onAnswerClarification,
            onDismiss() {
                      return closure_10(clarification.id);
                    }
          };
          tmp53Result20 = tmp53(message(tmp39[66]), obj41);
        }
        items18[6] = tmp53Result20;
        let tmp53Result21 = null;
        if (null != tmp27) {
          const obj42 = { projectId, cardId: message.render_id, request: tmp27, status: secretRequestStatus, awaiting: tmp29 };
          tmp53Result21 = tmp53(message(tmp39[67]), obj42);
        }
        items18[7] = tmp53Result21;
        let tmp53Result22 = null;
        if (null != tmp33) {
          const obj44 = { projectId, request: tmp33 };
          tmp53Result22 = tmp53(message(tmp39[68]), obj44);
        }
        items18[8] = tmp53Result22;
        let tmp53Result23 = null;
        if (null != tmp25) {
          const obj45 = { projectId };
          tmp53Result23 = tmp53(message(tmp39[69]), obj45);
        }
        items18[9] = tmp53Result23;
        let tmp53Result24 = null;
        if (null != ideas) {
          const obj46 = { ideas, onPick: onPickIdea };
          tmp53Result24 = tmp53(closure_31, obj46);
        }
        items18[10] = tmp53Result24;
        let tmp53Result25 = null;
        if (null != restoreProposal) {
          const obj47 = { proposal: restoreProposal, onRestore: fn };
          fn = undefined;
          const tmp82 = closure_38;
          if (isNewest) {
            if (null != onRestoreVersion) {
              fn = () => {
                let obj = ConjureVersionRestoreConfirm;
                const obj2 = {
                  onConfirm() {
                    const obj = projectId(groupStart[49]);
                    return onRestoreVersion(obj.proposalRestoreEntry(restoreProposal));
                  }
                };
                return obj.confirmRestoreVersion(obj2);
              };
            }
          }
          tmp53Result25 = tmp53(tmp82, obj47);
        }
        items18[11] = tmp53Result25;
        let tmp53Result26 = null;
        if (null != found) {
          tmp53Result26 = null;
          if ("message" in found) {
            const obj49 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
            tmp53Result26 = tmp53(tmp38(tmp39[19]).Text, obj49);
          }
        }
        items18[12] = tmp53Result26;
        tmp46Result2 = tmp46(tmp54, obj34);
      }
    }
  }
  tmp16 = callback3;
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeChat(projectId) {
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
  let tmp73;
  let tmp74;
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
    const fn = function o() {
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
  const tmp2Result = tmp2(tmp4[70]);
  stateFromStores = tmp2Result.useStateFromStores(tmp8, tmp9, tmp10);
  const bottom = onRestoreVersion(tmp4[71])().bottom;
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
    const tmp2Result15 = tmp2(tmp4[72]);
    const ackConjureProjectWhileViewing = tmp2Result15.useAckConjureProjectWhileViewing(projectId);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ConjureChatStore];
      cResult[7] = items2;
      tmp19 = items2;
    } else {
      tmp19 = cResult[7];
    }
    if (cResult[8] !== projectId) {
      class N {
        constructor() {
          return ConjureChatStore.getMessages(projectId);
        }
      }
      const items3 = [projectId];
      cResult[8] = projectId;
      cResult[9] = N;
      cResult[10] = items3;
      tmp22 = items3;
      tmp21 = N;
    } else {
      class N {
        constructor() {
          return ConjureChatStore.getMessages(projectId);
        }
      }
      tmp22 = cResult[10];
    }
    const tmp2Result16 = tmp2(tmp4[70]);
    const stateFromStores1 = tmp2Result16.useStateFromStores(tmp19, tmp21, tmp22);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          return ConjureChatStore.getMessages(projectId);
        }
      }
      const items4 = [ConjureProjectStore];
      cResult[11] = items4;
      tmp26 = items4;
    } else {
      class N {
        constructor() {
          return ConjureChatStore.getMessages(projectId);
        }
      }
    }
    if (cResult[12] !== projectId) {
      class U {
        constructor() {
          const publishStatus = ConjureProjectStore.getPublishStatus(projectId);
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
          const publishStatus = ConjureProjectStore.getPublishStatus(projectId);
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
    const tmp2Result17 = tmp2(tmp4[70]);
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
      let tmp63;
      let tmp65;
      let tmp64;
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
          const publishStatus = ConjureProjectStore.getPublishStatus(projectId);
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
            const publishStatus = ConjureProjectStore.getPublishStatus(projectId);
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
        const items6 = [ConjureChatStore];
        cResult[18] = items6;
        tmp36 = items6;
      } else {
        class U {
          constructor() {
            const publishStatus = ConjureProjectStore.getPublishStatus(projectId);
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
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items7 = [projectId];
        cResult[19] = projectId;
        cResult[20] = Y;
        cResult[21] = items7;
        tmp38 = items7;
        tmp37 = Y;
      } else {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        tmp38 = cResult[21];
      }
      const tmp2Result18 = tmp2(tmp4[70]);
      stateFromStores3 = tmp2Result18.useStateFromStores(tmp36, tmp37, tmp38);
      const _Symbol4 = Symbol;
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items8 = [ConjureChatStore];
        cResult[22] = items8;
        tmp42 = items8;
      } else {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[23] !== projectId) {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items9 = [projectId];
        cResult[23] = projectId;
        cResult[24] = tmp45;
        cResult[25] = items9;
        tmp44 = items9;
        tmp43 = tmp45;
      } else {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        tmp44 = cResult[25];
      }
      const tmp2Result19 = tmp2(tmp4[70]);
      const stateFromStores4 = tmp2Result19.useStateFromStores(tmp42, tmp43, tmp44);
      const _Symbol5 = Symbol;
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items10 = [ConjureChatStore];
        cResult[26] = items10;
        tmp49 = items10;
      } else {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[27] !== projectId) {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items11 = [projectId];
        cResult[27] = projectId;
        cResult[28] = tmp52;
        cResult[29] = items11;
        tmp51 = items11;
        tmp50 = tmp52;
      } else {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        tmp51 = cResult[29];
      }
      const tmp2Result20 = tmp2(tmp4[70]);
      const stateFromStores5 = tmp2Result20.useStateFromStores(tmp49, tmp50, tmp51);
      const _Symbol6 = Symbol;
      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items12 = [ConjureChatStore];
        cResult[30] = items12;
      } else {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[31] !== projectId) {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items13 = [projectId];
        cResult[31] = projectId;
        cResult[32] = tmp59;
        cResult[33] = items13;
      } else {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
      }
      tmp2(tmp4[70]);
      class P {
        constructor() {
          const tmp = stateFromStores;
          if (tmp) {
            React4(projectId);
          }
        }
      }
      const _Symbol7 = Symbol;
      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items14 = [ConjureChatStore];
        cResult[34] = items14;
        tmp63 = items14;
      } else {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[35] !== projectId) {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items15 = [projectId];
        cResult[35] = projectId;
        cResult[36] = tmp66;
        cResult[37] = items15;
        tmp65 = items15;
        tmp64 = tmp66;
      } else {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        tmp65 = cResult[37];
      }
      const tmp2Result22 = tmp2(tmp4[70]);
      const stateFromStores6 = tmp2Result22.useStateFromStores(tmp63, tmp64, tmp65);
      [tmp73, tmp74] = obj3.useState(null);
      let tmp75 = null == tmp73;
      _slicedToArray(obj3.useState(null), 2);
      if (!tmp75) {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        tmp75 = tmp76;
      }
      if (!tmp75) {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[38] !== projectId) {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        cResult[38] = projectId;
        cResult[39] = tmp78;
      } else {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
      }
      const _Symbol8 = Symbol;
      if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items16 = [ConjureConnectionStore];
        cResult[40] = items16;
        tmp80 = items16;
      } else {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[41] !== projectId) {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items17 = [projectId];
        cResult[41] = projectId;
        cResult[42] = tmp83;
        cResult[43] = items17;
        tmp82 = items17;
        tmp81 = tmp83;
      } else {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        tmp82 = cResult[43];
      }
      const tmp2Result23 = tmp2(tmp4[70]);
      const stateFromStores7 = tmp2Result23.useStateFromStores(tmp80, tmp81, tmp82);
      const _Symbol9 = Symbol;
      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items18 = [ConjureConnectionStore];
        cResult[44] = items18;
        tmp87 = items18;
      } else {
        class Y {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[45] !== projectId) {
        class Re {
          constructor() {
            return ConjureConnectionStore.isChatStopped(projectId);
          }
        }
        const items19 = [projectId];
        cResult[45] = projectId;
        cResult[46] = Re;
        cResult[47] = items19;
        tmp89 = items19;
        tmp88 = Re;
      } else {
        class Re {
          constructor() {
            return ConjureConnectionStore.isChatStopped(projectId);
          }
        }
        tmp89 = cResult[47];
      }
      const tmp2Result24 = tmp2(tmp4[70]);
      const stateFromStores8 = tmp2Result24.useStateFromStores(tmp87, tmp88, tmp89);
      const _Symbol10 = Symbol;
      if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
        class Re {
          constructor() {
            return ConjureConnectionStore.isChatStopped(projectId);
          }
        }
        const items20 = [ConjureChatStore];
        cResult[48] = items20;
        tmp93 = items20;
      } else {
        class Re {
          constructor() {
            return ConjureConnectionStore.isChatStopped(projectId);
          }
        }
      }
      if (cResult[49] !== projectId) {
        class Ae {
          constructor() {
            return ConjureChatStore.hasLoadedHistory(projectId);
          }
        }
        const items21 = [projectId];
        cResult[49] = projectId;
        cResult[50] = Ae;
        cResult[51] = items21;
        tmp95 = items21;
        tmp94 = Ae;
      } else {
        class Ae {
          constructor() {
            return ConjureChatStore.hasLoadedHistory(projectId);
          }
        }
        tmp95 = cResult[51];
      }
      const tmp2Result25 = tmp2(tmp4[70]);
      const stateFromStores9 = tmp2Result25.useStateFromStores(tmp93, tmp94, tmp95);
      const _Symbol11 = Symbol;
      if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
        class Ae {
          constructor() {
            return ConjureChatStore.hasLoadedHistory(projectId);
          }
        }
        const items22 = [ConjureChatStore];
        cResult[52] = items22;
        tmp99 = items22;
      } else {
        class Ae {
          constructor() {
            return ConjureChatStore.hasLoadedHistory(projectId);
          }
        }
      }
      if (cResult[53] !== projectId) {
        class De {
          constructor() {
            return ConjureChatStore.isHistoryUnavailable(projectId);
          }
        }
        const items23 = [projectId];
        cResult[53] = projectId;
        cResult[54] = De;
        cResult[55] = items23;
        tmp101 = items23;
        tmp100 = De;
      } else {
        class De {
          constructor() {
            return ConjureChatStore.isHistoryUnavailable(projectId);
          }
        }
        tmp101 = cResult[55];
      }
      const tmp2Result26 = tmp2(tmp4[70]);
      const stateFromStores10 = tmp2Result26.useStateFromStores(tmp99, tmp100, tmp101);
      if (cResult[56] === stateFromStores7) {
        class De {
          constructor() {
            return ConjureChatStore.isHistoryUnavailable(projectId);
          }
        }
      }
      let obj2 = { historyLoaded: stateFromStores9, historyUnavailable: stateFromStores10, connState: stateFromStores7 };
      const tmp2Result27 = tmp2(tmp4[74]);
      cResult[56] = stateFromStores7;
      cResult[57] = stateFromStores9;
      cResult[58] = stateFromStores10;
      cResult[59] = tmp2Result27.chatEmptyState(obj2);
      const chatEmptyStateResult = tmp2Result27.chatEmptyState(obj2);
    }
    const tmp2Result28 = tmp2(tmp4[73]);
    cResult[15] = stateFromStores1;
    cResult[16] = stateFromStores2;
    cResult[17] = tmp2Result28.withLivePublishCard(stateFromStores1, stateFromStores2);
    tmp2Result28.withLivePublishCard(stateFromStores1, stateFromStores2);
    class P {
      constructor() {
        const tmp = stateFromStores;
        if (tmp) {
          React4(projectId);
        }
      }
    }
  }
  class P {
    constructor() {
      const tmp = stateFromStores;
      if (tmp) {
        React4(projectId);
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
}) : (function ConjureNativeChat(projectId) {
  let FlashList;
  let Text;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let _undefined5;
  let c14;
  let c15;
  let c18;
  let c19;
  let c27;
  let c28;
  let c34;
  let c35;
  let c45;
  let closure_21;
  let items55;
  let items56;
  let items57;
  let items58;
  let items59;
  let obj14;
  let obj17;
  let obj19;
  let obj21;
  let obj23;
  let onDismissClarification;
  let onPickIdea;
  let tmp106;
  let tmp18;
  let tmp19;
  let tmp2Result27;
  let tmp39;
  let tmp40;
  let tmp55;
  let tmp67;
  let tmp92Result;
  let tmp92Result4;
  let tmp95;
  const f127305 = () => {
    map = new Map();
    return map;
  };
  const f127308 = () => {
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
  let stateFromStores10;
  let render_id;
  let render_id1;
  set = undefined;
  let stateFromStores12;
  let memo1;
  c14 = undefined;
  c15 = undefined;
  let onToggleChecklist;
  let closure_17;
  c18 = undefined;
  c19 = undefined;
  let onTogglePlan;
  autoscrollToBottomThreshold = undefined;
  let closure_22;
  fadingEdgeLength = undefined;
  let conjureReminder;
  let closure_25;
  let closure_26;
  c27 = undefined;
  c28 = undefined;
  let canSend;
  let memo2;
  let joined;
  let memo4;
  let memo5;
  c34 = undefined;
  c35 = undefined;
  let bound;
  let ref;
  let ref2;
  let ref3;
  let ref4;
  let ref5;
  let callback2;
  let callback3;
  c45 = undefined;
  let ref6;
  let ref7;
  let callback6;
  let closure_49;
  let onJumpToReplied;
  let tmp = c28();
  let tmp2 = projectId;
  let tmp3 = stateFromStores;
  let obj = projectId(stateFromStores[70]);
  items = [stateFromStores10];
  stateFromStores = obj.useStateFromStores(items, () => "active" === stateFromStores10.getState(), []);
  let tmp5 = onRestoreVersion;
  let obj2 = stateFromStores2;
  const items1 = [stateFromStores, projectId];
  const bottom = onRestoreVersion(stateFromStores[71])().bottom;
  const effect = stateFromStores2.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      React4(projectId);
    }
  }, items1);
  let obj3 = projectId(stateFromStores[72]);
  const ackConjureProjectWhileViewing = obj3.useAckConjureProjectWhileViewing(projectId);
  const obj4 = projectId(stateFromStores[70]);
  let tmp8 = onToggleChecklist;
  const items2 = [onToggleChecklist];
  const items3 = [projectId];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => ConjureChatStore.getMessages(projectId), items3);
  const items4 = [c15];
  const items5 = [projectId];
  const obj5 = projectId(stateFromStores[70]);
  stateFromStores2 = obj5.useStateFromStores(items4, () => {
    const publishStatus = ConjureProjectStore.getPublishStatus(projectId);
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
    const obj = conjurePublishCard;
    return obj.withLivePublishCard(stateFromStores1, stateFromStores2);
  }, items6);
  const items7 = [onToggleChecklist];
  const items8 = [projectId];
  const obj6 = projectId(stateFromStores[70]);
  const stateFromStores3 = obj6.useStateFromStores(items7, () => ConjureChatStore.isThinking(projectId), items8);
  const items9 = [onToggleChecklist];
  const items10 = [projectId];
  const obj7 = projectId(stateFromStores[70]);
  const stateFromStores4 = obj7.useStateFromStores(items9, () => ConjureChatStore.isCompacting(projectId), items10);
  const items11 = [onToggleChecklist];
  const items12 = [projectId];
  const obj8 = projectId(stateFromStores[70]);
  const stateFromStores5 = obj8.useStateFromStores(items11, () => ConjureChatStore.isSaving(projectId), items12);
  const items13 = [onToggleChecklist];
  const items14 = [projectId];
  const obj9 = projectId(stateFromStores[70]);
  const stateFromStores6 = obj9.useStateFromStores(items13, () => ConjureChatStore.getThinkingActivity(projectId), items14);
  const items15 = [onToggleChecklist];
  const items16 = [projectId];
  const obj10 = projectId(stateFromStores[70]);
  const stateFromStores7 = obj10.useStateFromStores(items15, () => ConjureChatStore.getProjectUsage(projectId), items16);
  let tmp17 = stateFromStores1(stateFromStores2.useState(null), 2);
  [tmp18, tmp19] = tmp17;
  let c7 = tmp19;
  let tmp20 = null == tmp18;
  if (!tmp20) {
    let tmp21 = stateFromStores3 && tmp18 === projectId;
    tmp20 = tmp21;
  }
  if (!tmp20) {
    tmp19(null);
  }
  const items17 = [projectId];
  let tmp24 = stateFromStores3;
  const callback = obj2.useCallback(() => _undefined((arg0) => {
    let tmp = null;
    if (arg0 !== projectId) {
      tmp = projectId;
    }
    return tmp;
  }), items17);
  if (stateFromStores3) {
    tmp24 = tmp18 === projectId;
  }
  const items18 = [c14];
  const items19 = [projectId];
  const tmp2Result = tmp2(tmp3[70]);
  const stateFromStores8 = tmp2Result.useStateFromStores(items18, () => ConjureConnectionStore.getConnState(projectId), items19);
  const items20 = [c14];
  const items21 = [projectId];
  const tmp2Result16 = tmp2(tmp3[70]);
  const stateFromStores9 = tmp2Result16.useStateFromStores(items20, () => ConjureConnectionStore.isChatStopped(projectId), items21);
  const items22 = [tmp8];
  const items23 = [projectId];
  const tmp2Result17 = tmp2(tmp3[70]);
  stateFromStores10 = tmp2Result17.useStateFromStores(items22, () => ConjureChatStore.hasLoadedHistory(projectId), items23);
  const items24 = [tmp8];
  const items25 = [projectId];
  const tmp2Result18 = tmp2(tmp3[70]);
  const stateFromStores11 = tmp2Result18.useStateFromStores(items24, () => ConjureChatStore.isHistoryUnavailable(projectId), items25);
  const tmp2Result19 = tmp2(tmp3[74]);
  const chatEmptyStateResult = tmp2Result19.chatEmptyState({ historyLoaded: stateFromStores10, historyUnavailable: stateFromStores11, connState: stateFromStores8 });
  render_id = null;
  const tmp25 = c14;
  if (memo.length > 0) {
    render_id = memo[memo.length - 1].render_id;
  }
  const findLastResult = memo.findLast((role) => {
    const tmp = "assistant" === role.role && closure_17(role);
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
    const obj = ConjureTodoState;
    return obj.supersededChecklists(memo);
  }, items26);
  const items27 = [tmp25];
  const items28 = [projectId];
  const tmp2Result20 = tmp2(tmp3[70]);
  stateFromStores12 = tmp2Result20.useStateFromStores(items27, () => {
    const settings = ConjureConnectionStore.getSettings(projectId);
    let secrets;
    if (settings != null) {
      secrets = settings.secrets;
    }
    return secrets;
  }, items28);
  const items29 = [memo, stateFromStores12];
  memo1 = obj2.useMemo(() => {
    const obj = ConjureSecretRequestState;
    return obj.secretRequestStatuses(memo, stateFromStores12);
  }, items29);
  [c14, c15] = stateFromStores1(obj2.useState(f127305), 2);
  stateFromStores1(obj2.useState(f127305), 2);
  onToggleChecklist = obj2.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined2((get) => {
      const obj = projectId(stateFromStores[65]);
      return obj.toggleChecklist(get, closure_0, closure_1);
    });
  }, []);
  const items30 = [memo];
  closure_17 = obj2.useMemo(() => {
    const obj = conjurePendingPlan;
    return obj.planVersions(memo);
  }, items30);
  [c18, c19] = stateFromStores1(obj2.useState(f127308), 2);
  stateFromStores1(obj2.useState(f127308), 2);
  onTogglePlan = obj2.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined3((get) => {
      const obj = projectId(stateFromStores[76]);
      return obj.togglePlanCard(get, closure_0, closure_1);
    });
  }, []);
  const items31 = [memo];
  autoscrollToBottomThreshold = obj2.useMemo(() => {
    let obj = ConjureChatGrouping;
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
  closure_22 = obj2.useCallback(() => {
    const sendConjureCardReply = conjureAttachmentDrafts.sendConjureCardReply;
    conjureAttachmentDrafts;
    const intl = intl14.intl;
    sendConjureCardReply(projectId, intl.string(_modDef3827.EMgIuY));
  }, items32);
  const items33 = [projectId];
  fadingEdgeLength = obj2.useCallback((implementation_prompt) => {
    const obj = conjureAttachmentDrafts;
    obj.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items33);
  [tmp39, tmp40] = stateFromStores1(tmp5(tmp3[79])(projectId), 2);
  stateFromStores1(tmp5(tmp3[79])(projectId), 2);
  const tmp2Result21 = tmp2(tmp3[80]);
  conjureReminder = tmp2Result21.useConjureReminder(projectId, memo, tmp39);
  const items34 = [projectId];
  closure_25 = obj2.useCallback(() => {
    const intl = intl14.intl;
    map1(projectId, intl.string(_modDef3827["t5CN3+"]));
  }, items34);
  const items35 = [projectId];
  closure_26 = obj2.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
    const obj = conjureAttachmentDrafts;
    const obj2 = { clarificationAnswers, attachments };
    obj.sendConjureCardReply(projectId, implementation_prompt, obj2);
  }, items35);
  [c27, c28] = stateFromStores1(obj2.useState(null), 2);
  let tmp44 = tmp43;
  stateFromStores1(obj2.useState(null), 2);
  if (!tmp44) {
    let str = "connecting";
    tmp44 = "connecting" === stateFromStores8;
  }
  if (tmp44) {
    tmp44 = !stateFromStores9;
  }
  canSend = tmp44;
  const items36 = [memo];
  memo2 = obj2.useMemo(() => {
    const obj = conjurePendingPlan;
    return obj.pendingPlanRenderId(memo);
  }, items36);
  const arr = Array.from(memo1, (arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return "" + tmp + ":" + tmp2;
  });
  joined = arr.join(",");
  const items37 = [conjureReminder, tmp44, memo2, joined];
  const items38 = [memo];
  const memo3 = obj2.useMemo(() => ({ reminder: conjureReminder, canSend, pendingPlanId: memo2, secretStatusesKey: joined }), items37);
  memo4 = obj2.useMemo(() => {
    let diff = memo.length - 1;
    if (0 <= diff) {
      while (true) {
        let tmp3 = memo[diff];
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
  }, items38);
  const items39 = [memo, memo4];
  memo5 = obj2.useMemo(() => {
    let tmp2;
    if (null != memo4) {
      tmp2 = memo[tmp];
    }
    let timelineTree = null;
    if (null != tmp2) {
      const obj = ConjureTimelineTree;
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
      const obj = ConjureTimelineTree;
      currentStepResult = obj.currentStep(tmp.steps);
    }
    let describeNodeResult = null;
    if (null != currentStepResult) {
      const obj2 = ConjureTimelineTree;
      describeNodeResult = obj2.describeNode(currentStepResult);
    }
    return describeNodeResult;
  }, items40);
  [obj19, c34] = stateFromStores1(obj2.useState(null), 2);
  stateFromStores1(obj2.useState(null), 2);
  [tmp55, c35] = stateFromStores1(obj2.useState(64), 2);
  stateFromStores1(obj2.useState(64), 2);
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
  const tmp2Result22 = tmp2(tmp3[43]);
  if (!tmp2Result22.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp55, fadingEdgeLength);
  }
  obj2.useRef(null);
  ref = obj2.useRef(null);
  ref2 = obj2.useRef(false);
  ref3 = obj2.useRef(true);
  ref4 = obj2.useRef(0);
  ref5 = obj2.useRef(0);
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
    ref4.current = timestamp + c22;
    ref5.current = timestamp + 2000;
  }, []);
  const items41 = [projectId, callback3];
  const effect1 = obj2.useEffect(() => {
    ref3.current = true;
    callback3();
  }, items41);
  const items42 = [stateFromStores10, callback3];
  const effect2 = obj2.useEffect(() => {
    const tmp = stateFromStores10;
    if (tmp) {
      callback3();
    }
  }, items42);
  const items43 = [projectId];
  const callback4 = obj2.useCallback(() => {
    stateFromStores12(projectId);
  }, items43);
  const callback5 = obj2.useCallback(() => {
    ref3.current = false;
  }, []);
  [tmp67, c45] = stateFromStores1(obj2.useState(false), 2);
  stateFromStores1(obj2.useState(false), 2);
  ref6 = obj2.useRef(null);
  ref7 = obj2.useRef(0);
  callback6 = obj2.useCallback(() => {
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
    const tmp4 = c45;
    if (tmp5) {
      tmp5 = null != tmp;
    }
    if (tmp5) {
      tmp5 = tmp.y >= current2.offsetY + current2.viewportHeight - ref7.current;
    }
    tmp4(tmp5);
  }, []);
  const items44 = [callback6];
  const items45 = [callback2, callback6];
  const callback7 = obj2.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    ref.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
    callback6();
  }, items44);
  const callback8 = obj2.useCallback((arg0, contentHeight) => {
    const timestamp = Date.now();
    const current = ref3.current && timestamp < ref4.current;
    if (current) {
      const _Math = Math;
      ref4.current = Math.min(timestamp + c22, ref5.current);
      callback2();
    }
    const current2 = ref.current;
    if (null != current2) {
      let obj;
      if (current2.contentHeight - current2.offsetY - current2.viewportHeight <= c21 * current2.viewportHeight) {
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
      callback6();
    }
  }, items45);
  const items46 = [callback6];
  const memo7 = obj2.useMemo(() => {
    const obj = { itemVisiblePercentThreshold: projectId(stateFromStores[81]).MIN_VISIBLE_PERCENT };
    return obj;
  }, []);
  const callback9 = obj2.useCallback((viewableItems) => {
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
    callback6();
  }, items46);
  if (stateFromStores5) {
    const intl3 = tmp2(tmp3[17]).intl;
    memo6 = intl3.string(tmp5(tmp3[18]).mKK6wB);
  } else if (stateFromStores4) {
    const intl2 = tmp2(tmp3[17]).intl;
    memo6 = intl2.string(tmp5(tmp3[18]).xnCAaP);
  } else if (memo6 == null) {
    let intl = tmp2(tmp3[17]).intl;
    memo6 = intl.string(tmp5(tmp3[18]).L9EDub);
  }
  const items47 = [memo, memo4];
  let tmp74;
  const memo8 = obj2.useMemo(() => {
    if (null == memo4) {
      return null;
    } else if (null == memo[tmp]) {
      return null;
    } else {
      const obj = ConjureTimelineTree;
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
    const tmp2Result23 = tmp2(tmp3[65]);
    checklistLiveResult = tmp2Result23.checklistLive(tmp74);
  }
  let conjureTurnStartedAtResult;
  if (null != tmp74) {
    const tmp2Result24 = tmp2(tmp3[82]);
    conjureTurnStartedAtResult = tmp2Result24.conjureTurnStartedAt(tmp74);
  }
  const items48 = [memo5];
  let tmp78;
  const memo9 = obj2.useMemo(() => {
    let runningTodoAgentsResult;
    if (null != memo5) {
      const obj = ConjureTodoAgents;
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
  const items49 = [bound, memo4, callback6];
  const effect3 = obj2.useEffect(() => {
    ref6.current = memo4;
    ref7.current = bound;
    let closure_0 = requestAnimationFrame(callback6);
    return () => cancelAnimationFrame(closure_0);
  }, items49);
  const items50 = [memo];
  closure_49 = obj2.useMemo(() => {
    map = new Map();
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if ("assistant" === nextResult.role) {
        if (null != tmp3.in_reply_to) {
          let obj2 = chat_ConjureRepliedMessage;
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
  const callback10 = obj2.useCallback(() => {
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
  const callback11 = obj2.useCallback((arg0, arg1) => {
    ref2.current = true;
    map1(projectId, arg0, arg1);
  }, items53);
  let connectionLabelResult = null;
  const callback12 = obj2.useCallback(() => {
    unpackModuleId(projectId);
  }, items54);
  if ("open" !== stateFromStores8) {
    const tmp2Result25 = tmp2(tmp3[84]);
    connectionLabelResult = tmp2Result25.connectionLabel(stateFromStores8);
  }
  const obj11 = { style: tmp.container, children: items55 };
  const tmp2Result26 = tmp2(tmp3[85]);
  const conjureControlActive = tmp2Result26.useConjureControlActive(projectId);
  items55 = [c18(tmp5(tmp3[86]), { thinking: stateFromStores3, bleedBottom: bottom }), , ];
  const obj12 = { style: tmp.transcriptArea, children: items58 };
  const obj13 = { clearance: tmp55, children: c18(FlashList, obj14) };
  obj14 = {
    ref,
    fadingEdgeLength,
    removeClippedSubviews: tmp2Result27.isIOS() && undefined,
    viewabilityConfig: memo7,
    onViewableItemsChanged: callback9,
    onScroll: callback7,
    onScrollBeginDrag: callback5,
    onContentSizeChange: callback8,
    onStartReached: callback4,
    scrollEventThrottle: 16,
    contentInset: tmp95,
    ListHeaderComponent: tmp92Result,
    style: items56,
    contentContainerStyle: items57,
    data: memo,
    extraData: memo3,
    maintainVisibleContentPosition: obj21,
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
      ({ item, index } = arg0);
      const obj = { projectId, message: item, groupStart: flag, first: 0 === index, isNewest: item.render_id === render_id, hostsReminder: item.render_id === render_id1, reminder: tmp3, checklistSuperseded: set.has(item.render_id), secretRequestStatus: str, checklistExpanded: obj3.checklistExpanded(c14, item.render_id, obj2.has(item.render_id)), onToggleChecklist, planVersion: version, planSuperseded: true === superseded, planExpanded: planCardExpanded(tmp11, render_id, true === superseded1), onTogglePlan, replied: closure_49.get(item.render_id), onJumpToReplied, onApprovePlan: tmp15, onPickIdea, onAskForIdeas: tmp17, onAnswerClarification: tmp18, clarificationDismissed: tmp19, onDismissClarification, onRestoreVersion: tmp21 };
      flag = closure_21[index];
      const tmp = authStore5;
      const tmp2 = closure_39;
      if (flag == null) {
        flag = true;
      }
      tmp3 = null;
      if (item.render_id === render_id1) {
        tmp3 = conjureReminder;
      }
      str = memo1.get(item.render_id);
      obj2 = set;
      if (str == null) {
        str = "open";
      }
      obj3 = ConjureTodoState;
      const value = closure_17.get(item.render_id);
      version = undefined;
      if (value != null) {
        version = value.version;
      }
      const value3 = obj4.get(item.render_id);
      superseded = undefined;
      if (value3 != null) {
        superseded = value3.superseded;
      }
      planCardExpanded = tmp4(17029).planCardExpanded;
      render_id = item.render_id;
      conjurePendingPlan;
      const value4 = obj4.get(item.render_id);
      superseded1 = undefined;
      tmp11 = c18;
      if (value4 != null) {
        superseded1 = value4.superseded;
      }
      tmp15 = undefined;
      if (canSend) {
        if (item.render_id === memo2) {
          tmp15 = closure_22;
        }
      }
      tmp17 = undefined;
      if (canSend) {
        tmp17 = closure_25;
      }
      tmp18 = undefined;
      if (canSend) {
        tmp18 = closure_26;
      }
      tmp21 = undefined;
      tmp19 = null != item.clarification && item.clarification.id === c27;
      if (!stateFromStores3) {
        tmp21 = onRestoreVersion;
      }
      return tmp(tmp2, obj);
    }
  };
  FlashList = tmp2(tmp3[87]).FlashList;
  tmp2Result27 = tmp2(tmp3[43]);
  tmp2Result27.isIOS() && undefined;
  tmp95 = undefined;
  const tmp2Result28 = tmp2(tmp3[43]);
  const tmp93 = ref;
  if (tmp2Result28.isIOS()) {
    tmp95 = { top: num };
    const obj15 = { top: num };
  }
  tmp92Result = null;
  const tmp2Result29 = tmp2(tmp3[43]);
  if (!tmp2Result29.isIOS()) {
    tmp92Result = null;
    if (num > 0) {
      const obj16 = { style: obj17 };
      obj17 = { height: num };
      tmp92Result = tmp92(tmp91, obj16);
    }
  }
  items56 = [tmp.transcript, ];
  const tmp2Result30 = tmp2(tmp3[43]);
  let tmp98 = !tmp2Result30.isIOS();
  tmp2Result30.isIOS();
  if (tmp98) {
    tmp98 = { marginBottom: tmp55 - bound };
    const obj18 = { marginBottom: tmp55 - bound };
  }
  items56[1] = tmp98;
  items57 = [tmp.transcriptContent, { paddingBottom: bound + tmp5(tmp3[9]).space.PX_8 }];
  let tmp99 = "loading" === chatEmptyStateResult;
  tmp92Result4 = null;
  obj21 = { startRenderingFromBottom: true, autoscrollToBottomThreshold };
  ({ paddingBottom: bound + tmp5(tmp3[9]).space.PX_8 });
  if (!tmp99) {
    let AyiQEp;
    const obj22 = { style: tmp.placeholder, children: c18(Text, obj23) };
    Text = tmp2(tmp3[19]).Text;
    const intl4 = tmp2(tmp3[17]).intl;
    const string = intl4.string;
    if ("unavailable" === chatEmptyStateResult) {
      AyiQEp = tmp5(tmp3[18]).Td4Sf4;
    } else {
      AyiQEp = tmp5(tmp3[18]).AyiQEp;
    }
    obj23 = { variant: "text-sm/normal", color: "text-muted", children: string(AyiQEp) };
    tmp92Result4 = tmp92(tmp91, obj22);
  }
  items58 = [c18(tmp93, obj13), , ];
  let tmp92Result5 = null;
  if (tmp24) {
    const obj24 = { projectId };
    tmp92Result5 = tmp92(tmp5(tmp3[88]), obj24);
  }
  items58[1] = tmp92Result5;
  let tmp92Result6 = null;
  if (null != tmp83) {
    const obj25 = { line: tmp83, onJumpToActivity: callback10, bottom: tmp5(tmp3[9]).space.PX_12 + tmp55, todos: memo8, todosLive: checklistLiveResult, agents: memo9 };
    const tmp5Result = tmp5(tmp3[89]);
    tmp92Result6 = tmp92(tmp5Result, obj25);
  }
  items58[2] = tmp92Result6;
  items55[1] = c19(c7, obj12);
  const obj26 = { style: tmp.bottomStack, onLayout: callback1, children: items59 };
  const obj27 = { projectId, thinking: stateFromStores3, turnStartedAt: conjureTurnStartedAtResult, compacting: stateFromStores4, saving: stateFromStores5, recalling: tmp99, activity: stateFromStores6, projectUsage: stateFromStores7, connLabel: connectionLabelResult, controlling: conjureControlActive, connFailed: "failed" === stateFromStores8, thinkingOpen: tmp24, onToggleThinking: callback };
  const tmp5Result3 = tmp5(tmp3[90]);
  if (tmp99) {
    tmp99 = 0 === memo.length;
  }
  items59 = [c18(tmp5Result3, obj27), ];
  const obj28 = { projectId, canSend: tmp44, running: stateFromStores3, stopped: stateFromStores9, onSend: callback11, onInterrupt: tmp106, onDraftHasTextChange: tmp40 };
  tmp106 = undefined;
  const tmp5Result4 = tmp5(tmp3[91]);
  if (stateFromStores3) {
    tmp106 = callback12;
  }
  items59[1] = c18(tmp5Result4, obj28);
  items55[2] = c19(c7, obj26);
  return c19(c7, obj11);
});
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeChat.tsx");

export default tmp8;
