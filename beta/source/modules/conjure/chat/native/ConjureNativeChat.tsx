// Module ID: 12778
// Function ID: 12779
// Name: ConjureNativeChat
// Dependencies: [32, 19, 17, 2117, 10969, 10987, 10989, 10970, 21, 575, 671, 5140, 504, 12779, 12780, 12781, 12290, 1627, 10998, 12782, 12783, 12784, 12785, 12790, 12792, 12794, 12795, 12796, 12797, 12789, 1113, 4026, 12798, 12799, 5837, 12800, 10971, 12793, 1377, 12803, 7172, 5323, 12804, 12805, 12806, 12807, 12808, 11049, 12809, 12304, 7357, 12812, 12303, 5751, 12835, 12981, 12983, 12986, 12996, 8095, 12967, 13010, 13011, 7104, 5715, 2]
// Exports: default

// Module 12778 (ConjureNativeChat)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import intl5 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import _modDef4026 from "module_4026" /* 4026 */;
import LinearGradientDefault from "LinearGradient" /* 5715 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5837 */;
import _modDef7104 from "module_7104" /* 7104 */;
import useKeyboardIsOpen from "useKeyboardIsOpen" /* 7172 */;
import conjureChatTurns from "conjureChatTurns" /* 10971 */;
import conjurePublishCard from "conjurePublishCard" /* 12782 */;
import conjureQueuedMessage from "conjureQueuedMessage" /* 12783 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 12789 */;
import ConjureClarification from "ConjureClarification" /* 12790 */;
import ConjureTodoState from "ConjureTodoState" /* 12792 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 12793 */;
import ConjureSecretRequestState from "ConjureSecretRequestState" /* 12794 */;
import conjureCardOverrides from "conjureCardOverrides" /* 12795 */;
import conjurePendingPlan from "conjurePendingPlan" /* 12796 */;
import ConjureChatGrouping from "ConjureChatGrouping" /* 12797 */;
import ConjureAppBuildRequest from "ConjureAppBuildRequest" /* 12800 */;
import conjureTranscriptScroll from "conjureTranscriptScroll" /* 12803 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 12806 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 12807 */;
import ConjureMessageRowDefault from "ConjureMessageRow" /* 12835 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 2117 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 10969 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10987 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10989 */;
import ConjureChatStore from "ConjureChatStore" /* 10970 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let map, nativeEvent, set, viewableItems;

let c10;
let c9;
let closure_15;
let closure_16;
let closure_17;
let metroImportAll;
let metroImportDefault;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp;
const ChatInputUtils = tmp(5323);
function TranscriptFade(children) {
  let obj3;
  let obj7;
  children = children.children;
  const clearance = children.clearance;
  const tmp = closure_22();
  let tmp3 = children;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const obj2 = { style: tmp.transcript, maskElement: closure_17(View, obj3), children };
    obj3 = { style: tmp.transcript, children: items };
    items = [, , ];
    const obj4 = { style: tmp.maskSolid };
    const tmp6 = _modDef7104;
    items[0] = closure_15(View, obj4);
    const obj5 = { style: tmp.maskFade, colors: items, locations, start, end };
    items[1] = closure_15(LinearGradientDefault, obj5);
    const obj6 = { style: obj7 };
    const _Math = Math;
    obj7 = { height: Math.max(0, clearance - 52) };
    items[2] = closure_15(View, obj6);
    tmp3 = closure_15(tmp6, obj2);
  }
  return tmp3;
}
const View = react_native.View;
let ConjureConnectionStore = ConjureConnectionStore_mod;
({ ensureConnection: metroImportDefault, interruptTurn: metroImportAll, loadOlderHistory: c9, sendUserMessage: c10 } = ConjureConnectionStore);
ConjureConnectionStore = ConjureConnectionStore_mod;
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = Fragment);
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let items = [BLACK, , ];
let obj = _modDef671(BLACK);
const alphaResult = obj.alpha(0.2);
items[1] = alphaResult.css();
items[2] = "transparent";
const locations = [0, 0.4, 1];
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let createStyles = createStyles_mod;
let obj2 = { container: { flex: 1 }, transcript: { flex: 1 }, maskSolid: { flex: 1, backgroundColor: BLACK }, maskFade: { height: 52 }, transcriptArea: { flex: 1, position: "relative" }, transcriptContent: obj3, transcriptHidden: { opacity: 0 }, bottomStack: { position: "absolute", left: 0, right: 0, bottom: 0 }, notices: obj4, notice: obj5, placeholder: obj6 };
obj3 = { paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj4 = { paddingTop: nativeDefault.space.PX_8 };
obj5 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingBottom: nativeDefault.space.PX_8 };
obj6 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
let closure_22 = createStyles(obj2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeChat.tsx");

export default function ConjureNativeChat(projectId) {
  let FlashList;
  let InlineNotice;
  let Provider;
  let Text;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let _undefined5;
  let _undefined6;
  let _undefined7;
  let blocked;
  let c15;
  let c16;
  let c19;
  let c20;
  let c26;
  let c27;
  let c37;
  let c38;
  let c48;
  let c65;
  let hidden;
  let items63;
  let items64;
  let items65;
  let items66;
  let items68;
  let notices;
  let obj15;
  let obj17;
  let obj20;
  let obj22;
  let obj24;
  let obj26;
  let obj29;
  let obj37;
  let obj39;
  let obj40;
  let obj42;
  let obj44;
  let obj46;
  let obj48;
  let onDismissClarification;
  let open;
  let str4;
  let tmp126Result;
  let tmp126Result11;
  let tmp126Result12;
  let tmp130;
  let tmp135;
  let tmp137;
  let tmp143;
  let tmp152;
  let tmp22;
  let tmp23;
  let tmp2Result27;
  let tmp42;
  let tmp43;
  let tmp63;
  let tmp70;
  let tmp82;
  let tmp83;
  let tmp96;
  const f104235 = () => {
    map = new Map();
    return map;
  };
  const f104238 = () => {
    map = new Map();
    return map;
  };
  projectId = projectId.projectId;
  let num = projectId.transcriptTopInset;
  if (num === undefined) {
    num = 0;
  }
  ({ onRestoreVersion: dependencyMap, hidden } = projectId);
  if (hidden === undefined) {
    hidden = false;
  }
  let stateFromStores1;
  let memo;
  let stateFromStores9;
  let render_id;
  let memo2;
  set = undefined;
  let stateFromStores11;
  let memo3;
  c15 = undefined;
  c16 = undefined;
  let onToggleChecklist;
  let closure_18;
  c19 = undefined;
  c20 = undefined;
  let onTogglePlan;
  closure_22 = undefined;
  let closure_23;
  let closure_24;
  let closure_25;
  c26 = undefined;
  c27 = undefined;
  let dismissedAppBuildRequestId;
  let onDismissAppBuildRequest;
  let sent;
  let id;
  let canSend;
  let memo4;
  let joined;
  let memo6;
  let memo7;
  c37 = undefined;
  c38 = undefined;
  let first1;
  let closure_40;
  let bound;
  let closure_43;
  let ref;
  let ref2;
  let ref3;
  let ref4;
  c48 = undefined;
  let ref5;
  let callback4;
  let closure_51;
  let ref6;
  let callback5;
  let callback6;
  let historySettled;
  let callback7;
  let callback8;
  let ref7;
  let closure_59;
  let c60;
  let ref8;
  let ref9;
  let callback10;
  let ref10;
  c65 = undefined;
  let ref11;
  let ref12;
  let callback13;
  let closure_69;
  let onJumpToReplied;
  let ref13;
  let ref14;
  let closure_73;
  let ref15;
  let tmp = closure_22();
  let tmp2 = projectId;
  let tmp3 = dependencyMap;
  let obj = projectId(504);
  items = [memo];
  const stateFromStores = obj.useStateFromStores(items, () => "active" === memo.getState(), []);
  let tmp5 = num;
  let tmp6 = num(12779)(projectId);
  const tmp7 = num(12780)(projectId);
  let tmp8 = num(12781)(projectId);
  let obj2 = projectId(12290);
  const isConjureManagedCopy = obj2.useIsConjureManagedCopy(projectId);
  let obj3 = projectId(12781);
  const conjureRemixStartedAt = obj3.useConjureRemixStartedAt(projectId);
  const obj4 = stateFromStores1;
  const items1 = [stateFromStores, projectId];
  const bottom = num(1627)().bottom;
  const effect = stateFromStores1.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      metroImportDefault(projectId);
    }
  }, items1);
  const obj5 = projectId(10998);
  const ackConjureProjectWhileViewing = obj5.useAckConjureProjectWhileViewing(projectId, stateFromStores);
  const tmp13 = memo3;
  const items2 = [memo3];
  const items3 = [projectId];
  const obj6 = projectId(504);
  stateFromStores1 = obj6.useStateFromStores(items2, () => ConjureChatStore.getMessages(projectId), items3);
  const items4 = [set];
  const items5 = [projectId];
  const obj8 = projectId(504);
  const stateFromStores2 = obj8.useStateFromStores(items4, () => ConjurePublishStatusStore.getPublishStatus(projectId), items5);
  const items6 = [stateFromStores1, stateFromStores2];
  memo = stateFromStores1.useMemo(() => {
    const obj = conjurePublishCard;
    return obj.withLivePublishCard(stateFromStores1, stateFromStores2);
  }, items6);
  const items7 = [stateFromStores1];
  const memo1 = stateFromStores1.useMemo(() => {
    const obj = conjureQueuedMessage;
    return obj.queuedUserMessages(stateFromStores1);
  }, items7);
  const items8 = [memo3];
  const items9 = [projectId];
  const obj9 = projectId(504);
  const stateFromStores3 = obj9.useStateFromStores(items8, () => ConjureChatStore.isThinking(projectId), items9);
  const items10 = [memo3];
  const items11 = [projectId];
  const obj10 = projectId(504);
  const stateFromStores4 = obj10.useStateFromStores(items10, () => ConjureChatStore.isCompacting(projectId), items11);
  const items12 = [memo3];
  const items13 = [projectId];
  const obj11 = projectId(504);
  const stateFromStores5 = obj11.useStateFromStores(items12, () => ConjureChatStore.isSaving(projectId), items13);
  const items14 = [memo3];
  const items15 = [projectId];
  const obj12 = projectId(504);
  const stateFromStores6 = obj12.useStateFromStores(items14, () => ConjureChatStore.getThinkingActivity(projectId), items15);
  const items16 = [memo3];
  const items17 = [projectId];
  const obj13 = projectId(504);
  const stateFromStores7 = obj13.useStateFromStores(items16, () => ConjureChatStore.getProjectUsage(projectId), items17);
  let tmp20 = stateFromStores;
  [tmp22, tmp23] = stateFromStores(stateFromStores1.useState(null), 2);
  let c8 = tmp23;
  let tmp24 = null == tmp22;
  const tmp21 = stateFromStores(stateFromStores1.useState(null), 2);
  if (!tmp24) {
    let tmp25 = stateFromStores3 && tmp22 === projectId;
    tmp24 = tmp25;
  }
  if (!tmp24) {
    tmp23(null);
  }
  const items18 = [projectId];
  let tmp28 = stateFromStores3;
  const callback = obj4.useCallback(() => _undefined((arg0) => {
    let tmp = null;
    if (arg0 !== projectId) {
      tmp = projectId;
    }
    return tmp;
  }), items18);
  if (stateFromStores3) {
    tmp28 = tmp22 === projectId;
  }
  const items19 = [memo2];
  const items20 = [projectId];
  const tmp2Result = tmp2(504);
  const stateFromStores8 = tmp2Result.useStateFromStores(items19, () => ConjureConnectionStore.getConnState(projectId), items20);
  const items21 = [tmp13];
  const items22 = [projectId];
  const tmp2Result16 = tmp2(504);
  stateFromStores9 = tmp2Result16.useStateFromStores(items21, () => ConjureChatStore.hasLoadedHistory(projectId), items22);
  const items23 = [tmp13];
  const items24 = [projectId];
  const tmp2Result17 = tmp2(504);
  const stateFromStores10 = tmp2Result17.useStateFromStores(items23, () => ConjureChatStore.isHistoryUnavailable(projectId), items24);
  const tmp2Result18 = tmp2(12784);
  const chatEmptyStateResult = tmp2Result18.chatEmptyState({ historyLoaded: stateFromStores9, historyUnavailable: stateFromStores10, connState: stateFromStores8 });
  const tmp2Result19 = tmp2(12785);
  const conjureScopeSetupPending = tmp2Result19.useConjureScopeSetupPending(projectId);
  render_id = null;
  const tmp2Result20 = tmp2(12785);
  const conjureHeldPrompt = tmp2Result20.useConjureHeldPrompt(projectId);
  if (memo.length > 0) {
    let num2 = 1;
    render_id = memo[memo.length - 1].render_id;
  }
  const items25 = [memo];
  memo2 = obj4.useMemo(() => {
    const obj = ConjureClarification;
    const liveClarificationResult = obj.liveClarification(memo);
    id = undefined;
    if (liveClarificationResult != null) {
      id = liveClarificationResult.id;
    }
    return id;
  }, items25);
  const items26 = [memo];
  set = obj4.useMemo(() => {
    const obj = ConjureTodoState;
    return obj.supersededChecklists(memo);
  }, items26);
  const items27 = [stateFromStores11];
  const items28 = [projectId];
  const tmp2Result21 = tmp2(504);
  stateFromStores11 = tmp2Result21.useStateFromStores(items27, () => {
    const settings = ConjureSettingsStore.getSettings(projectId);
    let secrets;
    if (settings != null) {
      secrets = settings.secrets;
    }
    return secrets;
  }, items28);
  const items29 = [memo, stateFromStores11];
  memo3 = obj4.useMemo(() => {
    const obj = ConjureSecretRequestState;
    return obj.secretRequestStatuses(memo, stateFromStores11);
  }, items29);
  [c15, c16] = tmp20(obj4.useState(f104235), 2);
  tmp20(obj4.useState(f104235), 2);
  onToggleChecklist = obj4.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined2((get) => {
      const obj = projectId(closure_2_2[26]);
      return obj.toggleConjureCard(get, closure_0, closure_1);
    });
  }, []);
  const items30 = [memo];
  closure_18 = obj4.useMemo(() => {
    const obj = conjurePendingPlan;
    return obj.planVersions(memo);
  }, items30);
  [c19, c20] = tmp20(obj4.useState(f104238), 2);
  tmp20(obj4.useState(f104238), 2);
  onTogglePlan = obj4.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined3((get) => {
      const obj = projectId(closure_2_2[26]);
      return obj.toggleConjureCard(get, closure_0, closure_1);
    });
  }, []);
  const items31 = [memo];
  closure_22 = obj4.useMemo(() => {
    let obj = ConjureChatGrouping;
    return obj.groupChatRows(memo.map((key) => {
      let tmp;
      let tmp4;
      let user_id;
      const obj = { key: key.render_id, actor: tmp, authorId: user_id, boundary: render_id, separate: tmp4 };
      tmp = null;
      if ("context_boundary" !== key.kind) {
        let str = "assistant";
        if ("user" === key.role) {
          str = "user";
        }
        tmp = str;
      }
      user_id = undefined;
      if ("user" === key.role) {
        user_id = key.user_id;
      }
      render_id = undefined;
      if ("user" !== key.role) {
        render_id = key.render_id;
      }
      tmp4 = "assistant" === key.role;
      if (tmp4) {
        tmp4 = null != key.proposal || null != key.clarification || "side_reply" === key.kind || null != key.in_reply_to;
        const tmp5 = null != key.proposal || null != key.clarification || "side_reply" === key.kind || null != key.in_reply_to;
      }
      return obj;
    }));
  }, items31);
  const items32 = [projectId];
  closure_23 = obj4.useCallback(() => {
    const sendConjureCardReply = conjureAttachmentDrafts.sendConjureCardReply;
    conjureAttachmentDrafts;
    const intl = intl5.intl;
    sendConjureCardReply(projectId, intl.string(_modDef4026.EMgIuY));
  }, items32);
  const items33 = [projectId];
  closure_24 = obj4.useCallback((implementation_prompt) => {
    const obj = conjureAttachmentDrafts;
    obj.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items33);
  const items34 = [projectId];
  [tmp42, tmp43] = tmp20(tmp5(12798)(projectId), 2);
  const items35 = [projectId];
  tmp20(tmp5(12798)(projectId), 2);
  const callback1 = obj4.useCallback(() => {
    const intl = intl5.intl;
    authStore(projectId, intl.string(_modDef4026["t5CN3+"]));
  }, items34);
  closure_25 = obj4.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
    const obj = conjureAttachmentDrafts;
    const obj2 = { clarificationAnswers, attachments };
    obj.sendConjureCardReply(projectId, implementation_prompt, obj2);
  }, items35);
  [c26, c27] = tmp20(obj4.useState(null), 2);
  tmp20(obj4.useState(null), 2);
  const tmp20Result14 = tmp20(obj4.useState(null), 2);
  dismissedAppBuildRequestId = tmp20Result14[0];
  onDismissAppBuildRequest = tmp20Result14[1];
  const tmp48 = tmp5(12799)(projectId);
  sent = tmp48.sent;
  const request = tmp48.request;
  id = undefined;
  if (request != null) {
    id = request.id;
  }
  const items36 = [id, sent];
  let tmp52 = tmp51;
  const callback2 = obj4.useCallback((arr) => {
    let obj2;
    if (null != id) {
      sent(tmp);
    }
    const obj = { text: obj2.appBuildRequestSentToast(arr), variant: "success" };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    obj2 = ConjureAppBuildRequest;
    open("CONJURE_APP_BUILD_REQUEST_SENT", obj);
  }, items36);
  if ("open" !== stateFromStores8) {
    let str = "connecting";
    tmp52 = "connecting" === stateFromStores8;
  }
  canSend = tmp52;
  const items37 = [memo];
  memo4 = obj4.useMemo(() => {
    const obj = conjurePendingPlan;
    return obj.pendingPlanRenderId(memo);
  }, items37);
  const arr = Array.from(memo3, (arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return "" + tmp + ":" + tmp2;
  });
  joined = arr.join(",");
  const items38 = [tmp52, memo4, joined, dismissedAppBuildRequestId, memo2];
  const items39 = [memo];
  const memo5 = obj4.useMemo(() => ({ canSend, pendingPlanId: memo4, secretStatusesKey: joined, dismissedAppBuildRequestId, liveClarificationId: memo2 }), items38);
  memo6 = obj4.useMemo(() => {
    let diff = memo.length - 1;
    if (0 <= diff) {
      while (true) {
        let tmp3 = memo[diff];
        if ("assistant" === tmp3.role) {
          let obj = conjureChatTurns;
          if (!obj.turnSettled(tmp3)) {
            break;
          }
        }
        diff = diff - 1;
      }
      return diff;
    }
    return null;
  }, items39);
  const items40 = [memo, memo6];
  memo7 = obj4.useMemo(() => {
    let tmp2;
    if (null != memo6) {
      tmp2 = memo[tmp];
    }
    let timelineTree = null;
    if (null != tmp2) {
      const obj = ConjureTimelineTree;
      timelineTree = obj.buildTimelineTree(tmp2.steps, { turnActive: true });
    }
    return timelineTree;
  }, items40);
  let tmp58 = null != memo7;
  if (tmp58) {
    tmp58 = memo7.steps.length > 0 || memo7.tasks.length > 0;
  }
  const items41 = [memo7];
  let memo8 = obj4.useMemo(() => {
    let currentStepResult;
    if (null != memo7) {
      const obj = ConjureTimelineTree;
      currentStepResult = obj.currentStep(tmp.steps);
    }
    let describeNodeResult = null;
    if (null != currentStepResult) {
      const obj2 = ConjureTimelineTree;
      describeNodeResult = obj2.describeNode(currentStepResult);
    }
    return describeNodeResult;
  }, items41);
  [obj22, c37] = tmp20(obj4.useState(null), 2);
  tmp20(obj4.useState(null), 2);
  [tmp63, c38] = tmp20(obj4.useState(64), 2);
  tmp20(obj4.useState(64), 2);
  const tmp20Result17 = tmp20(obj4.useState(false), 2);
  first1 = tmp20Result17[0];
  closure_40 = tmp20Result17[1];
  const callback3 = obj4.useCallback((nativeEvent) => {
    let closure_0 = Math.round(nativeEvent.nativeEvent.layout.height);
    let tmp = _undefined5((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
    closure_40(true);
  }, []);
  bound = tmp63;
  const tmp2Result22 = tmp2(1377);
  if (!tmp2Result22.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp63, 52);
  }
  obj4.useRef(null);
  closure_43 = obj4.useRef(null);
  ref = obj4.useRef(false);
  ref2 = obj4.useRef(true);
  ref3 = obj4.useRef(0);
  ref4 = obj4.useRef(0);
  [tmp70, c48] = tmp20(obj4.useState(false), 2);
  tmp20(obj4.useState(false), 2);
  ref5 = obj4.useRef(false);
  callback4 = obj4.useCallback(() => {
    ref5.current = true;
    _undefined6(true);
  }, []);
  closure_51 = obj4.useRef({ viewportHeight: 0, contentHeight: 0, measuredRowCount: null });
  ref6 = obj4.useRef({ rowCount: 0, historySettled: false });
  callback5 = obj4.useCallback((arg0) => {
    let contentHeight;
    let viewportHeight;
    let tmp = arg0;
    const current = closure_51.current;
    ({ viewportHeight, contentHeight } = current);
    const measuredRowCount = current.measuredRowCount;
    if (arg0 == null) {
      let tmp2 = null;
      if (viewportHeight > 0) {
        tmp2 = null;
        if (contentHeight > 0) {
          const current2 = ref.current;
          let num2;
          if (current2 != null) {
            num2 = current2.getAbsoluteLastScrollOffset();
          }
          if (num2 == null) {
            num2 = 0;
          }
          tmp2 = { offsetY: num2, viewportHeight, contentHeight };
          const obj = { offsetY: num2, viewportHeight, contentHeight };
        }
      }
      tmp = tmp2;
    }
    const obj2 = { measuredRowCount, metrics: tmp };
    const decideConjureTranscriptReveal = conjureTranscriptScroll.decideConjureTranscriptReveal;
    conjureTranscriptScroll;
    const merged = Object.assign(ref6.current);
    return decideConjureTranscriptReveal(obj2);
  }, []);
  const items42 = [callback5, callback4];
  callback6 = obj4.useCallback(() => {
    if (!ref5.current) {
      const tmp2 = callback5();
      if ("reveal" !== tmp2) {
        let current = "scroll-then-confirm" === tmp2 && ref2.current;
        if (current) {
          const _requestAnimationFrame = requestAnimationFrame;
          let animationFrame = requestAnimationFrame(() => {
            let current = ref.current;
            if (current != null) {
              current.scrollToEnd({ animated: false });
            }
            const animationFrame = requestAnimationFrame(() => {
              const current = ref.current || "reveal" !== closure_1_53();
              if (!current) {
                closure_1_50();
              }
            });
          });
        }
      } else {
        callback4();
      }
    }
  }, items42);
  historySettled = tmp74;
  const items43 = [memo.length, stateFromStores9 || stateFromStores10, callback6];
  const layoutEffect = obj4.useLayoutEffect(() => {
    const obj = { rowCount: memo.length, historySettled };
    ref6.current = obj;
    let closure_0 = requestAnimationFrame(callback6);
    return () => cancelAnimationFrame(closure_0);
  }, items43);
  callback7 = obj4.useCallback(() => {
    const animationFrame = requestAnimationFrame(() => {
      if (ref2.current) {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd({ animated: false });
        }
      }
    });
  }, []);
  callback8 = obj4.useCallback(() => {
    const timestamp = Date.now();
    ref3.current = timestamp + 500;
    ref4.current = timestamp + 2000;
  }, []);
  const items44 = [projectId, callback8];
  const effect1 = obj4.useEffect(() => {
    ref2.current = true;
    callback8();
  }, items44);
  const items45 = [stateFromStores9, callback8];
  const effect2 = obj4.useEffect(() => {
    const tmp = stateFromStores9;
    if (tmp) {
      callback8();
    }
  }, items45);
  ref7 = obj4.useRef(null);
  const items46 = [callback6];
  const callback9 = obj4.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    ref7.current = height;
    let current = ref7.current;
    const obj = conjureTranscriptScroll;
    if (obj.keepsBottomOnShrink(current, height, closure_43.current)) {
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        const current = ref.current;
        let scrollToEndResult;
        if (current != null) {
          scrollToEndResult = current.scrollToEnd({ animated: false });
        }
        return scrollToEndResult;
      });
    }
    closure_51.current.viewportHeight = height;
    callback6();
  }, items46);
  closure_59 = obj4.useRef(null);
  [tmp82, tmp83] = tmp20(obj4.useState(null), 2);
  c60 = tmp83;
  tmp20(obj4.useState(null), 2);
  const tmp84 = null != tmp82 && tmp82.projectId !== projectId;
  if (tmp84) {
    tmp83(null);
  }
  ref8 = obj4.useRef(null);
  ref9 = obj4.useRef(false);
  callback10 = obj4.useCallback((current) => {
    ref8.current = current;
    ref9.current = false;
    _undefined7(current);
  }, []);
  let projectId1;
  if (tmp82 != null) {
    projectId1 = tmp82.projectId;
  }
  let tmp88 = projectId1 === projectId;
  if (tmp88) {
    const planId = tmp82.planId;
    const atResult = stateFromStores1.at(-1);
    let render_id1;
    if (atResult != null) {
      render_id1 = atResult.render_id;
    }
    tmp88 = planId === render_id1;
  }
  const items47 = [projectId, stateFromStores1, memo, callback10];
  const effect3 = obj4.useEffect(() => {
    let obj = projectId(dependencyMap[27]);
    const takeArrivedPlanResult = obj.takeArrivedPlan(closure_59, projectId, stateFromStores1);
    const tmp = projectId;
    const tmp3 = projectId;
    projectId = takeArrivedPlanResult;
    let current = closure_43.current;
    const tmp2 = dependencyMap;
    if (null != takeArrivedPlanResult) {
      if (null == current) {
        const findIndexResult = memo.findIndex((render_id) => render_id.render_id === takeArrivedPlanResult);
        num = 0;
        if (findIndexResult >= 0) {
          closure_45.current = false;
          closure_44.current = false;
          const obj2 = { projectId: tmp3, planId: takeArrivedPlanResult };
          callback10(obj2);
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(() => {
            const current = ref.current;
            let scrollToIndexResult;
            if (current != null) {
              const obj = { index: num, animated: false, viewPosition: 0 };
              scrollToIndexResult = current.scrollToIndex(obj);
            }
            return scrollToIndexResult;
          });
        }
      } else {
        tmp(tmp2[39]);
      }
    }
  }, items47);
  ref10 = obj4.useRef(false);
  const items48 = [first1, callback4];
  const effect4 = obj4.useEffect(() => {
    if (first1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(callback4, 3000);
      return () => clearTimeout(closure_0);
    }
  }, items48);
  const items49 = [projectId];
  const callback11 = obj4.useCallback(() => {
    React4(projectId);
  }, items49);
  const callback12 = obj4.useCallback(() => {
    ref2.current = false;
    ref9.current = true;
    const obj = useKeyboardIsOpen;
    if (obj.getKeyboardIsOpen()) {
      const tmpResult = ChatInputUtils;
      tmpResult.dismissKeyboard();
    }
  }, []);
  [tmp96, c65] = tmp20(obj4.useState(false), 2);
  tmp20(obj4.useState(false), 2);
  ref11 = obj4.useRef(null);
  ref12 = obj4.useRef(0);
  callback13 = obj4.useCallback(() => {
    const current = ref11.current;
    const current2 = closure_43.current;
    if (null != current) {
      const current3 = ref.current;
      let layout;
      if (current3 != null) {
        layout = current3.getLayout(current);
      }
    }
    let tmp5 = null != current2;
    const tmp4 = c65;
    if (tmp5) {
      tmp5 = null != tmp;
    }
    if (tmp5) {
      tmp5 = tmp.y >= current2.offsetY + current2.viewportHeight - ref12.current;
    }
    tmp4(tmp5);
  }, []);
  const items50 = [callback5, callback4, callback7, callback10, callback13];
  const items51 = [callback6, callback7, callback8, callback13];
  const callback14 = obj4.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    closure_43.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
    if (!ref5.current) {
      const tmp3 = callback5(closure_43.current);
      if ("reveal" === tmp3) {
        callback4();
      } else {
        const current = "scroll-then-confirm" === tmp3 && ref2.current;
        if (current) {
          callback7();
        }
      }
    }
    let current2 = null != ref8.current && ref9.current;
    if (current2) {
      const obj = conjureTranscriptScroll;
      current2 = obj.isNearBottom(tmp.current);
    }
    if (current2) {
      callback10(null);
    }
    callback13();
  }, items50);
  const callback15 = obj4.useCallback((arg0, contentHeight) => {
    closure_51.current.contentHeight = contentHeight;
    closure_51.current.measuredRowCount = ref6.current.rowCount;
    callback6();
    if (!ref10.current) {
      tmp2.current = true;
      callback8();
    }
    const timestamp = Date.now();
    const current = ref2.current && timestamp < ref3.current;
    if (current) {
      const _Math = Math;
      ref3.current = Math.min(timestamp + 500, ref4.current);
      callback7();
    }
    const current2 = closure_43.current;
    if (null != current2) {
      let tmp12;
      const obj2 = { contentHeight };
      const obj = conjureTranscriptScroll;
      const isNearBottomResult = obj.isNearBottom(current2);
      const merged = Object.assign(current2);
      if (isNearBottomResult) {
        const _Math2 = Math;
        obj2.offsetY = Math.max(0, contentHeight - current2.viewportHeight);
        tmp12 = obj2;
      } else {
        tmp12 = obj2;
      }
      tmp11.current = tmp12;
      if (ref.current) {
        tmp13.current = false;
        const current3 = ref.current;
        if (current3 != null) {
          current3.scrollToEnd({ animated: true });
        }
      }
      callback13();
    }
  }, items51);
  const items52 = [callback13];
  const memo9 = obj4.useMemo(() => {
    const obj = { itemVisiblePercentThreshold: projectId(dependencyMap[42]).MIN_VISIBLE_PERCENT };
    return obj;
  }, []);
  const callback16 = obj4.useCallback((viewableItems) => {
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
    callback13();
  }, items52);
  if (stateFromStores5) {
    const intl3 = tmp2(1113).intl;
    memo8 = intl3.string(tmp5(4026).mKK6wB);
  } else if (stateFromStores4) {
    const intl2 = tmp2(1113).intl;
    memo8 = intl2.string(tmp5(4026).xnCAaP);
  } else if (memo8 == null) {
    let intl = tmp2(1113).intl;
    memo8 = intl.string(tmp5(4026).L9EDub);
  }
  const items53 = [memo, memo6];
  let tmp103;
  const memo10 = obj4.useMemo(() => {
    if (null == memo6) {
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
  }, items53);
  if (null != memo6) {
    tmp103 = memo[memo6];
  }
  let checklistLiveResult = null == tmp103;
  if (!checklistLiveResult) {
    const tmp2Result23 = tmp2(12792);
    checklistLiveResult = tmp2Result23.checklistLive(tmp103);
  }
  let conjureTurnStartedAtResult;
  if (null != tmp103) {
    const tmp2Result24 = tmp2(12805);
    conjureTurnStartedAtResult = tmp2Result24.conjureTurnStartedAt(tmp103);
  }
  const items54 = [memo7];
  let tmp107;
  const memo11 = obj4.useMemo(() => {
    let runningTodoAgentsResult;
    if (null != memo7) {
      const obj = ConjureTodoAgents;
      runningTodoAgentsResult = obj.runningTodoAgents(tmp.tasks);
    } else {
      runningTodoAgentsResult = [];
    }
    return runningTodoAgentsResult;
  }, items54);
  if (null != memo6) {
    let render_id2;
    if (memo[memo6] != null) {
      render_id2 = tmp108.render_id;
    }
    tmp107 = render_id2;
  }
  let tmp110 = null != tmp107;
  if (tmp110) {
    tmp110 = null != obj22 && !obj22.has(tmp107) || tmp96;
    null != obj22 && !obj22.has(tmp107) || tmp96;
  }
  let tmp112 = null;
  if (stateFromStores3) {
    tmp112 = null;
    if (tmp58) {
      tmp112 = null;
      if (tmp110) {
        tmp112 = memo8;
      }
    }
  }
  const items55 = [bound, memo6, callback13];
  const effect5 = obj4.useEffect(() => {
    ref11.current = memo6;
    ref12.current = bound;
    let closure_0 = requestAnimationFrame(callback13);
    return () => cancelAnimationFrame(closure_0);
  }, items55);
  const items56 = [memo];
  closure_69 = obj4.useMemo(() => {
    const obj = ConjureRepliedMessage;
    const repliedMessagesByIdResult = obj.repliedMessagesById(memo);
    map = new Map();
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if ("assistant" === nextResult.role) {
        if (null != tmp3.in_reply_to) {
          let value = repliedMessagesByIdResult.get(tmp3.in_reply_to);
          if (null != value) {
            let result = map.set(tmp3.render_id, tmp7);
          }
        }
      }
      continue;
    }
    return map;
  }, items56);
  const items57 = [memo];
  onJumpToReplied = obj4.useCallback((arg0) => {
    let closure_0 = arg0;
    const findIndexResult = memo.findIndex((id) => id.id === closure_0);
    if (findIndexResult >= 0) {
      ref2.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: findIndexResult, animated: true, viewPosition: 0.5 };
        current.scrollToIndex(obj);
      }
    }
  }, items57);
  const items58 = [bound, memo6];
  const callback17 = obj4.useCallback(() => {
    if (null != memo6) {
      ref2.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items58);
  const callback18 = obj4.useCallback(() => {
    const current = closure_43.current;
    let isNearBottomResult = null != current;
    if (isNearBottomResult) {
      const obj = conjureTranscriptScroll;
      isNearBottomResult = obj.isNearBottom(current);
    }
    if (isNearBottomResult) {
      ref.current = true;
    }
  }, []);
  ref13 = obj4.useRef(false);
  ref14 = obj4.useRef(false);
  closure_73 = obj4.useCallback((arg0) => {
    let tmp2 = arg0;
    const tmp = ref13;
    if (arg0) {
      tmp2 = !ref14.current;
    }
    tmp.current = tmp2;
    if (arg0) {
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        const current = ref.current;
        let scrollToEndResult;
        if (current != null) {
          scrollToEndResult = current.scrollToEnd({ animated: true });
        }
        return scrollToEndResult;
      });
    }
  }, []);
  const items59 = [num];
  const effect6 = obj4.useEffect(() => {
    ref14.current = num > 0;
    let current = ref14.current && ref13.current;
    if (current) {
      ref13.current = false;
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        const current = ref.current;
        let scrollToEndResult;
        if (current != null) {
          scrollToEndResult = current.scrollToEnd({ animated: true });
        }
        return scrollToEndResult;
      });
    }
  }, items59);
  ref15 = obj4.useRef(false);
  const callback19 = obj4.useCallback(() => {
    ref15.current = true;
  }, []);
  const callback20 = obj4.useCallback(() => {
    ref15.current = false;
  }, []);
  const items60 = [projectId];
  const callback21 = obj4.useCallback(() => {
    const current = ref15.current;
    let keyboardIsOpen = !current;
    const tmp = ref15;
    if (!current) {
      const obj = useKeyboardIsOpen;
      keyboardIsOpen = obj.getKeyboardIsOpen();
    }
    if (keyboardIsOpen) {
      const obj2 = ChatInputUtils;
      obj2.dismissKeyboard();
    }
    tmp.current = false;
  }, []);
  const items61 = [projectId];
  const callback22 = obj4.useCallback((arg0, arg1) => {
    ref.current = true;
    authStore(projectId, arg0, arg1);
  }, items60);
  let connectionLabelResult = null;
  const callback23 = obj4.useCallback(() => {
    metroImportAll(projectId);
  }, items61);
  if ("open" !== stateFromStores8) {
    const tmp2Result25 = tmp2(12808);
    connectionLabelResult = tmp2Result25.connectionLabel(stateFromStores8);
  }
  const obj7 = { style: tmp.container, children: null };
  const tmp2Result26 = tmp2(11049);
  const conjureControlActive = tmp2Result26.useConjureControlActive(projectId);
  const items62 = [c15(tmp5(12809), { thinking: stateFromStores3, bleedBottom: bottom }), , ];
  const obj14 = { style: tmp.transcriptArea, onTouchEnd: callback21, onTouchCancel: callback20, children: onToggleChecklist(Provider, obj15) };
  obj15 = { value: callback19, children: items66 };
  Provider = tmp2(12304).ConjureCardTouchContext.Provider;
  if (first1) {
    const obj16 = { clearance: tmp63, children: c15(FlashList, obj17) };
    obj17 = {
      ref,
      fadingEdgeLength: 52,
      removeClippedSubviews: tmp2Result27.isIOS() && undefined,
      viewabilityConfig: memo9,
      onViewableItemsChanged: callback16,
      onScroll: callback14,
      onLayout: callback9,
      onScrollBeginDrag: callback12,
      onContentSizeChange: callback15,
      onStartReached: callback11,
      scrollEventThrottle: 16,
      keyboardShouldPersistTaps: "handled",
      contentInset: tmp130,
      ListHeaderComponent: tmp126Result,
      style: items63,
      contentContainerStyle: items64,
      data: memo,
      extraData: memo5,
      maintainVisibleContentPosition: obj24,
      keyExtractor(render_id) {
          return render_id.render_id;
        },
      ListFooterComponent: onToggleChecklist(tmp135, obj26),
      ListEmptyComponent: tmp126Result11,
      renderItem(arg0) {
          let conjureCardExpanded;
          let flag;
          let index;
          let item;
          let obj2;
          let obj3;
          let str;
          let superseded;
          let superseded1;
          let tmp10;
          let tmp14;
          let tmp16;
          let tmp17;
          let tmp18;
          let tmp20;
          let tmp22;
          let tmp23;
          let tmp25;
          let version;
          ({ item, index } = arg0);
          const obj = { projectId, message: item, groupStart: flag, first: 0 === index, isNewest: item.render_id === render_id, checklistSuperseded: set.has(item.render_id), secretRequestStatus: str, checklistExpanded: obj3.conjureCardExpanded(c15, item.render_id, obj2.has(item.render_id)), onToggleChecklist, planVersion: version, planSuperseded: true === superseded, planExpanded: conjureCardExpanded(tmp10, render_id, true === superseded1), onTogglePlan, replied: closure_69.get(item.render_id), onJumpToReplied, onApprovePlan: tmp14, onPickIdea: tmp16, onAnswerClarification: tmp17, clarificationLive: tmp18, clarificationDismissed: tmp20, onDismissClarification, onCardInputFocusChange: tmp22, canSend, appBuildRequestDismissed: tmp23, onDismissAppBuildRequest, onRestoreVersion: tmp25 };
          flag = closure_22[index];
          const tmp = closure_15;
          const tmp3 = ConjureMessageRowDefault;
          if (flag == null) {
            flag = true;
          }
          str = memo3.get(item.render_id);
          obj2 = set;
          if (str == null) {
            str = "open";
          }
          obj3 = conjureCardOverrides;
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
          conjureCardExpanded = conjureCardOverrides.conjureCardExpanded;
          render_id = item.render_id;
          conjureCardOverrides;
          const value4 = obj4.get(item.render_id);
          superseded1 = undefined;
          tmp10 = c19;
          if (value4 != null) {
            superseded1 = value4.superseded;
          }
          tmp14 = undefined;
          if (canSend) {
            if (item.render_id === memo4) {
              tmp14 = closure_23;
            }
          }
          tmp16 = undefined;
          if (canSend) {
            tmp16 = closure_24;
          }
          tmp17 = undefined;
          if (canSend) {
            tmp17 = closure_25;
          }
          tmp22 = undefined;
          tmp18 = null != item.clarification && item.clarification.id === memo2;
          tmp20 = null != item.clarification && item.clarification.id === c26;
          const tmp4Result2 = PlatformUtils;
          if (!tmp4Result2.isIOS()) {
            tmp22 = closure_73;
          }
          tmp25 = undefined;
          tmp23 = null != item.appBuildRequest && item.appBuildRequest.id === first;
          if (!stateFromStores3) {
            tmp25 = dependencyMap;
          }
          return tmp(tmp3, obj);
        }
    };
    FlashList = tmp2(7357).FlashList;
    tmp2Result27 = tmp2(1377);
    tmp2Result27.isIOS() && undefined;
    tmp130 = undefined;
    const tmp128 = closure_23;
    const tmp2Result28 = tmp2(1377);
    if (tmp2Result28.isIOS()) {
      tmp130 = { top: num };
      const obj18 = { top: num };
    }
    tmp126Result = null;
    const tmp2Result29 = tmp2(1377);
    if (!tmp2Result29.isIOS()) {
      tmp126Result = null;
      if (num > 0) {
        const obj19 = { style: obj20 };
        obj20 = { height: num };
        tmp126Result = tmp126(tmp125, obj19);
      }
    }
    items63 = [tmp.transcript, , ];
    const tmp2Result30 = tmp2(1377);
    let tmp133 = !tmp2Result30.isIOS();
    tmp2Result30.isIOS();
    if (tmp133) {
      tmp133 = { marginBottom: tmp63 - bound };
      const obj21 = { marginBottom: tmp63 - bound };
    }
    items63[1] = tmp133;
    items63[2] = !tmp70 && tmp.transcriptHidden;
    items64 = [tmp.transcriptContent, ];
    items64[1] = { paddingBottom: bound + tmp5(575).space.PX_8 };
    let AUTOSCROLL_THRESHOLD;
    const obj23 = { paddingBottom: bound + tmp5(575).space.PX_8 };
    if (!tmp88) {
      AUTOSCROLL_THRESHOLD = tmp2(12803).AUTOSCROLL_THRESHOLD;
    }
    const obj25 = { projectId, messages: memo, draftHasText: tmp42, onAskForIdeas: tmp137, onShow: callback18 };
    tmp137 = undefined;
    obj24 = { startRenderingFromBottom: true, autoscrollToBottomThreshold: AUTOSCROLL_THRESHOLD };
    tmp135 = c16;
    const tmp5Result = tmp5(12812);
    if (tmp52) {
      tmp137 = callback1;
    }
    obj26 = { children: items65 };
    items65 = [c15(tmp5Result, obj25), ];
    const obj27 = { projectId };
    items65[1] = c15(tmp2(12303).ConjureHostApprovalCards, obj27);
    tmp126Result11 = null;
    if ("loading" !== chatEmptyStateResult) {
      let AyiQEp;
      const obj28 = { style: tmp.placeholder, children: c15(Text, obj29) };
      Text = tmp2(5751).Text;
      const intl4 = tmp2(1113).intl;
      const string = intl4.string;
      if ("unavailable" === chatEmptyStateResult) {
        AyiQEp = tmp5(4026).Td4Sf4;
      } else {
        AyiQEp = tmp5(4026).AyiQEp;
      }
      obj29 = { variant: "body-sm/normal", color: "text-muted", children: string(AyiQEp) };
      tmp126Result11 = tmp126(tmp125, obj28);
    }
    tmp126Result12 = tmp126(tmp128, obj16);
  } else {
    const obj30 = { style: tmp.transcript };
    tmp126Result12 = tmp126(tmp125, obj30);
  }
  items66 = [tmp126Result12, , ];
  let tmp126Result13 = null;
  if (tmp28) {
    const obj31 = { projectId };
    tmp126Result13 = tmp126(tmp5(12981), obj31);
  }
  items66[1] = tmp126Result13;
  let tmp126Result14 = null;
  if (null != tmp112) {
    const obj32 = { line: tmp112, onJumpToActivity: callback17, bottom: tmp5(575).space.PX_12 + tmp63, todos: memo10, todosLive: checklistLiveResult, agents: memo11 };
    const tmp5Result4 = tmp5(12983);
    tmp126Result14 = tmp126(tmp5Result4, obj32);
  }
  items66[2] = tmp126Result14;
  items62[1] = c15(stateFromStores2, obj14);
  const obj33 = { style: tmp.bottomStack, onLayout: callback3, children: null };
  const obj34 = { projectId, thinking: stateFromStores3, turnStartedAt: conjureTurnStartedAtResult, remixStartedAt: conjureRemixStartedAt, compacting: stateFromStores4, saving: stateFromStores5, recalling: tmp143, activity: stateFromStores6, projectUsage: stateFromStores7, connLabel: connectionLabelResult, controlling: conjureControlActive, connFailed: "failed" === stateFromStores8, thinkingOpen: tmp28, onToggleThinking: callback, queuedCount: memo1.length };
  tmp143 = "loading" === chatEmptyStateResult;
  const tmp5Result5 = tmp5(12986);
  if (tmp143) {
    tmp143 = 0 === memo.length;
  }
  const items67 = [c15(tmp5Result5, obj34), , ];
  if (!isConjureManagedCopy) {
    if (null == tmp8) {
      if (null == tmp6) {
        if (null == tmp7) {
          let tmp126Result15 = null;
          const obj35 = { style: notices, children: items68 };
          if (isConjureManagedCopy) {
            const obj36 = { style: tmp.notice, children: c15(tmp5(12996), obj37) };
            obj37 = { projectId };
            tmp126Result15 = tmp126(tmp125, obj36);
          }
          items68 = [tmp126Result15, , , , , ];
          let tmp126Result16 = null;
          if (null != tmp8) {
            const obj38 = { style: tmp.notice, children: c15(tmp2(8095).InlineNotice, obj39) };
            obj39 = { type: "critical", role: "alert", message: tmp8.message, action: obj40 };
            obj40 = { text: tmp8.retry.text, onPress: tmp8.retry.onClick };
            tmp126Result16 = tmp126(tmp125, obj38);
          }
          items68[1] = tmp126Result16;
          let tmp126Result17 = null;
          if (null != tmp6) {
            const obj41 = { style: tmp.notice, children: c15(tmp2(8095).InlineNotice, obj42) };
            obj42 = { type: "warning", role: "status", message: null, onDismiss: null };
            ({ message: obj59.message, onDismiss: obj59.onDismiss } = tmp6);
            tmp126Result17 = tmp126(tmp125, obj41);
          }
          items68[2] = tmp126Result17;
          let tmp126Result18 = null;
          if (null != tmp7) {
            let str3 = "warning";
            const obj43 = { style: tmp.notice, children: c15(InlineNotice, obj44) };
            InlineNotice = tmp2(8095).InlineNotice;
            if (tmp7.blocked) {
              str3 = "critical";
            }
            obj44 = { type: str3, role: str4, message: tmp7.message };
            str4 = "status";
            if (tmp7.blocked) {
              str4 = "alert";
            }
            tmp126Result18 = tmp126(tmp125, obj43);
          }
          items68[3] = tmp126Result18;
          let tmp126Result19 = null;
          if (null != tmp48.request) {
            const obj45 = { style: tmp.notice, children: c15(tmp5(12967), obj46, tmp48.request.id) };
            obj46 = { projectId, request: tmp48.request, canSend: tmp52, onDismiss: tmp48.close, onSent: callback2 };
            tmp126Result19 = tmp126(tmp125, obj45);
          }
          items68[4] = tmp126Result19;
          let tmp126Result20 = null;
          if (conjureScopeSetupPending) {
            const obj47 = { style: tmp.notice, children: c15(tmp5(13010), obj48) };
            obj48 = { projectId };
            tmp126Result20 = tmp126(tmp125, obj47);
          }
          items68[5] = tmp126Result20;
          items67[1] = onToggleChecklist(stateFromStores2, obj35);
          const obj49 = { projectId, canSend: tmp52, inputLocked: conjureScopeSetupPending, aiPaused: true === blocked, managedCopy: isConjureManagedCopy, running: stateFromStores3, onSend: callback22, onInterrupt: tmp152, onDraftHasTextChange: tmp43, hidden, onSendToOtherProjects: open };
          blocked = undefined;
          const tmp5Result6 = tmp5(13011);
          if (tmp7 != null) {
            blocked = tmp7.blocked;
          }
          tmp152 = undefined;
          if (stateFromStores3) {
            tmp152 = callback23;
          }
          open = undefined;
          if (null == tmp48.request) {
            open = tmp48.open;
          }
          items67[2] = c15(tmp5Result6, obj49, conjureHeldPrompt);
          obj33.children = items67;
          items62[2] = onToggleChecklist(stateFromStores2, obj33);
          obj7.children = items62;
          return onToggleChecklist(stateFromStores2, obj7);
        }
      }
    }
  }
  notices = tmp.notices;
};
