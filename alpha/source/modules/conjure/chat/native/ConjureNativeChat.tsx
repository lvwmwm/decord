// Module ID: 12800
// Function ID: 12801
// Name: ConjureNativeChat
// Dependencies: [32, 19, 17, 2122, 11034, 11051, 11053, 11035, 21, 575, 671, 5143, 504, 12801, 12802, 12803, 1627, 11062, 12804, 12805, 12806, 12807, 12812, 12814, 12816, 12817, 12818, 12819, 12811, 1113, 3995, 12820, 12821, 5849, 12822, 11036, 12815, 1377, 12826, 7250, 5333, 12827, 12828, 12829, 12830, 12831, 11111, 12832, 12341, 7433, 12835, 12340, 5763, 12858, 13005, 13007, 13010, 8170, 12991, 13020, 13021, 7182, 5725, 2]
// Exports: default

// Module 12800 (ConjureNativeChat)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import intl5 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import _modDef3995 from "module_3995" /* 3995 */;
import LinearGradientDefault from "LinearGradient" /* 5725 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5849 */;
import _modDef7182 from "module_7182" /* 7182 */;
import useKeyboardIsOpen from "useKeyboardIsOpen" /* 7250 */;
import conjureChatTurns from "conjureChatTurns" /* 11036 */;
import conjurePublishCard from "conjurePublishCard" /* 12804 */;
import conjureQueuedMessage from "conjureQueuedMessage" /* 12805 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 12811 */;
import ConjureClarification from "ConjureClarification" /* 12812 */;
import ConjureTodoState from "ConjureTodoState" /* 12814 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 12815 */;
import ConjureSecretRequestState from "ConjureSecretRequestState" /* 12816 */;
import conjureCardOverrides from "conjureCardOverrides" /* 12817 */;
import conjurePendingPlan from "conjurePendingPlan" /* 12818 */;
import ConjureChatGrouping from "ConjureChatGrouping" /* 12819 */;
import ConjureAppBuildRequest from "ConjureAppBuildRequest" /* 12822 */;
import conjureTranscriptScroll from "conjureTranscriptScroll" /* 12826 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 12829 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 12830 */;
import ConjureMessageRowDefault from "ConjureMessageRow" /* 12858 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 2122 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 11034 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 11051 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 11053 */;
import ConjureChatStore from "ConjureChatStore" /* 11035 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
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
const ChatInputUtils = tmp(5333);
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
    const tmp6 = _modDef7182;
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
  let obj14;
  let obj16;
  let obj19;
  let obj21;
  let obj23;
  let obj25;
  let obj28;
  let obj36;
  let obj37;
  let obj39;
  let obj41;
  let obj43;
  let obj45;
  let onDismissClarification;
  let open;
  let str4;
  let tmp125Result;
  let tmp125Result10;
  let tmp125Result11;
  let tmp129;
  let tmp134;
  let tmp136;
  let tmp142;
  let tmp150;
  let tmp21;
  let tmp22;
  let tmp2Result27;
  let tmp41;
  let tmp42;
  let tmp62;
  let tmp69;
  let tmp81;
  let tmp82;
  let tmp95;
  const f103622 = () => {
    map = new Map();
    return map;
  };
  const f103625 = () => {
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
  let tmp6 = num(12801)(projectId);
  const tmp7 = num(12802)(projectId);
  let tmp8 = num(12803)(projectId);
  let obj2 = projectId(12803);
  const conjureRemixStartedAt = obj2.useConjureRemixStartedAt(projectId);
  let obj3 = stateFromStores1;
  const items1 = [stateFromStores, projectId];
  const bottom = num(1627)().bottom;
  const effect = stateFromStores1.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      metroImportDefault(projectId);
    }
  }, items1);
  const obj4 = projectId(11062);
  const ackConjureProjectWhileViewing = obj4.useAckConjureProjectWhileViewing(projectId, stateFromStores);
  let tmp12 = memo3;
  const items2 = [memo3];
  const items3 = [projectId];
  const obj5 = projectId(504);
  stateFromStores1 = obj5.useStateFromStores(items2, () => ConjureChatStore.getMessages(projectId), items3);
  const items4 = [set];
  const items5 = [projectId];
  const obj7 = projectId(504);
  const stateFromStores2 = obj7.useStateFromStores(items4, () => ConjurePublishStatusStore.getPublishStatus(projectId), items5);
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
  const obj8 = projectId(504);
  const stateFromStores3 = obj8.useStateFromStores(items8, () => ConjureChatStore.isThinking(projectId), items9);
  const items10 = [memo3];
  const items11 = [projectId];
  const obj9 = projectId(504);
  const stateFromStores4 = obj9.useStateFromStores(items10, () => ConjureChatStore.isCompacting(projectId), items11);
  const items12 = [memo3];
  const items13 = [projectId];
  const obj10 = projectId(504);
  const stateFromStores5 = obj10.useStateFromStores(items12, () => ConjureChatStore.isSaving(projectId), items13);
  const items14 = [memo3];
  const items15 = [projectId];
  const obj11 = projectId(504);
  const stateFromStores6 = obj11.useStateFromStores(items14, () => ConjureChatStore.getThinkingActivity(projectId), items15);
  const items16 = [memo3];
  const items17 = [projectId];
  const obj12 = projectId(504);
  const stateFromStores7 = obj12.useStateFromStores(items16, () => ConjureChatStore.getProjectUsage(projectId), items17);
  let tmp20 = stateFromStores(stateFromStores1.useState(null), 2);
  [tmp21, tmp22] = tmp20;
  let c8 = tmp22;
  let tmp23 = null == tmp21;
  if (!tmp23) {
    tmp23 = stateFromStores3 && tmp21 === projectId;
    const tmp24 = stateFromStores3 && tmp21 === projectId;
  }
  if (!tmp23) {
    tmp22(null);
  }
  const items18 = [projectId];
  let tmp27 = stateFromStores3;
  const callback = obj3.useCallback(() => _undefined((arg0) => {
    let tmp = null;
    if (arg0 !== projectId) {
      tmp = projectId;
    }
    return tmp;
  }), items18);
  if (stateFromStores3) {
    tmp27 = tmp21 === projectId;
  }
  const items19 = [memo2];
  const items20 = [projectId];
  const tmp2Result = tmp2(504);
  const stateFromStores8 = tmp2Result.useStateFromStores(items19, () => ConjureConnectionStore.getConnState(projectId), items20);
  const items21 = [tmp12];
  const items22 = [projectId];
  const tmp2Result16 = tmp2(504);
  stateFromStores9 = tmp2Result16.useStateFromStores(items21, () => ConjureChatStore.hasLoadedHistory(projectId), items22);
  const items23 = [tmp12];
  const items24 = [projectId];
  const tmp2Result17 = tmp2(504);
  const stateFromStores10 = tmp2Result17.useStateFromStores(items23, () => ConjureChatStore.isHistoryUnavailable(projectId), items24);
  const tmp2Result18 = tmp2(12806);
  const chatEmptyStateResult = tmp2Result18.chatEmptyState({ historyLoaded: stateFromStores9, historyUnavailable: stateFromStores10, connState: stateFromStores8 });
  const tmp2Result19 = tmp2(12807);
  const conjureScopeSetupPending = tmp2Result19.useConjureScopeSetupPending(projectId);
  render_id = null;
  const tmp2Result20 = tmp2(12807);
  const conjureHeldPrompt = tmp2Result20.useConjureHeldPrompt(projectId);
  if (memo.length > 0) {
    let num2 = 1;
    render_id = memo[memo.length - 1].render_id;
  }
  const items25 = [memo];
  memo2 = obj3.useMemo(() => {
    const obj = ConjureClarification;
    const liveClarificationResult = obj.liveClarification(memo);
    id = undefined;
    if (liveClarificationResult != null) {
      id = liveClarificationResult.id;
    }
    return id;
  }, items25);
  const items26 = [memo];
  set = obj3.useMemo(() => {
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
  memo3 = obj3.useMemo(() => {
    const obj = ConjureSecretRequestState;
    return obj.secretRequestStatuses(memo, stateFromStores11);
  }, items29);
  [c15, c16] = stateFromStores(obj3.useState(f103622), 2);
  stateFromStores(obj3.useState(f103622), 2);
  onToggleChecklist = obj3.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined2((get) => {
      const obj = projectId(closure_2_2[25]);
      return obj.toggleConjureCard(get, closure_0, closure_1);
    });
  }, []);
  const items30 = [memo];
  closure_18 = obj3.useMemo(() => {
    const obj = conjurePendingPlan;
    return obj.planVersions(memo);
  }, items30);
  [c19, c20] = stateFromStores(obj3.useState(f103625), 2);
  stateFromStores(obj3.useState(f103625), 2);
  onTogglePlan = obj3.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined3((get) => {
      const obj = projectId(closure_2_2[25]);
      return obj.toggleConjureCard(get, closure_0, closure_1);
    });
  }, []);
  const items31 = [memo];
  closure_22 = obj3.useMemo(() => {
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
  closure_23 = obj3.useCallback(() => {
    const sendConjureCardReply = conjureAttachmentDrafts.sendConjureCardReply;
    conjureAttachmentDrafts;
    const intl = intl5.intl;
    sendConjureCardReply(projectId, intl.string(_modDef3995.EMgIuY));
  }, items32);
  const items33 = [projectId];
  closure_24 = obj3.useCallback((implementation_prompt) => {
    const obj = conjureAttachmentDrafts;
    obj.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items33);
  const items34 = [projectId];
  [tmp41, tmp42] = stateFromStores(tmp5(12820)(projectId), 2);
  const items35 = [projectId];
  stateFromStores(tmp5(12820)(projectId), 2);
  const callback1 = obj3.useCallback(() => {
    const intl = intl5.intl;
    authStore(projectId, intl.string(_modDef3995["t5CN3+"]));
  }, items34);
  closure_25 = obj3.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
    const obj = conjureAttachmentDrafts;
    const obj2 = { clarificationAnswers, attachments };
    obj.sendConjureCardReply(projectId, implementation_prompt, obj2);
  }, items35);
  [c26, c27] = stateFromStores(obj3.useState(null), 2);
  stateFromStores(obj3.useState(null), 2);
  const tmp19Result14 = stateFromStores(obj3.useState(null), 2);
  dismissedAppBuildRequestId = tmp19Result14[0];
  onDismissAppBuildRequest = tmp19Result14[1];
  const tmp47 = tmp5(12821)(projectId);
  sent = tmp47.sent;
  const request = tmp47.request;
  id = undefined;
  if (request != null) {
    id = request.id;
  }
  const items36 = [id, sent];
  let tmp51 = tmp50;
  const callback2 = obj3.useCallback((arr) => {
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
    tmp51 = "connecting" === stateFromStores8;
  }
  canSend = tmp51;
  const items37 = [memo];
  memo4 = obj3.useMemo(() => {
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
  const items38 = [tmp51, memo4, joined, dismissedAppBuildRequestId, memo2];
  const items39 = [memo];
  const memo5 = obj3.useMemo(() => ({ canSend, pendingPlanId: memo4, secretStatusesKey: joined, dismissedAppBuildRequestId, liveClarificationId: memo2 }), items38);
  memo6 = obj3.useMemo(() => {
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
  memo7 = obj3.useMemo(() => {
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
  let tmp57 = null != memo7;
  if (tmp57) {
    tmp57 = memo7.steps.length > 0 || memo7.tasks.length > 0;
  }
  const items41 = [memo7];
  let memo8 = obj3.useMemo(() => {
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
  [obj21, c37] = stateFromStores(obj3.useState(null), 2);
  stateFromStores(obj3.useState(null), 2);
  [tmp62, c38] = stateFromStores(obj3.useState(64), 2);
  stateFromStores(obj3.useState(64), 2);
  const tmp19Result17 = stateFromStores(obj3.useState(false), 2);
  first1 = tmp19Result17[0];
  closure_40 = tmp19Result17[1];
  const callback3 = obj3.useCallback((nativeEvent) => {
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
  bound = tmp62;
  const tmp2Result22 = tmp2(1377);
  if (!tmp2Result22.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp62, 52);
  }
  obj3.useRef(null);
  closure_43 = obj3.useRef(null);
  ref = obj3.useRef(false);
  ref2 = obj3.useRef(true);
  ref3 = obj3.useRef(0);
  ref4 = obj3.useRef(0);
  [tmp69, c48] = stateFromStores(obj3.useState(false), 2);
  stateFromStores(obj3.useState(false), 2);
  ref5 = obj3.useRef(false);
  callback4 = obj3.useCallback(() => {
    ref5.current = true;
    _undefined6(true);
  }, []);
  closure_51 = obj3.useRef({ viewportHeight: 0, contentHeight: 0, measuredRowCount: null });
  ref6 = obj3.useRef({ rowCount: 0, historySettled: false });
  callback5 = obj3.useCallback((arg0) => {
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
  callback6 = obj3.useCallback(() => {
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
  historySettled = tmp73;
  const items43 = [memo.length, stateFromStores9 || stateFromStores10, callback6];
  const layoutEffect = obj3.useLayoutEffect(() => {
    const obj = { rowCount: memo.length, historySettled };
    ref6.current = obj;
    let closure_0 = requestAnimationFrame(callback6);
    return () => cancelAnimationFrame(closure_0);
  }, items43);
  callback7 = obj3.useCallback(() => {
    const animationFrame = requestAnimationFrame(() => {
      if (ref2.current) {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd({ animated: false });
        }
      }
    });
  }, []);
  callback8 = obj3.useCallback(() => {
    const timestamp = Date.now();
    ref3.current = timestamp + 500;
    ref4.current = timestamp + 2000;
  }, []);
  const items44 = [projectId, callback8];
  const effect1 = obj3.useEffect(() => {
    ref2.current = true;
    callback8();
  }, items44);
  const items45 = [stateFromStores9, callback8];
  const effect2 = obj3.useEffect(() => {
    const tmp = stateFromStores9;
    if (tmp) {
      callback8();
    }
  }, items45);
  ref7 = obj3.useRef(null);
  const items46 = [callback6];
  const callback9 = obj3.useCallback((nativeEvent) => {
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
  closure_59 = obj3.useRef(null);
  [tmp81, tmp82] = stateFromStores(obj3.useState(null), 2);
  c60 = tmp82;
  stateFromStores(obj3.useState(null), 2);
  const tmp83 = null != tmp81 && tmp81.projectId !== projectId;
  if (tmp83) {
    tmp82(null);
  }
  ref8 = obj3.useRef(null);
  ref9 = obj3.useRef(false);
  callback10 = obj3.useCallback((current) => {
    ref8.current = current;
    ref9.current = false;
    _undefined7(current);
  }, []);
  let projectId1;
  if (tmp81 != null) {
    projectId1 = tmp81.projectId;
  }
  let tmp87 = projectId1 === projectId;
  if (tmp87) {
    const planId = tmp81.planId;
    const atResult = stateFromStores1.at(-1);
    let render_id1;
    if (atResult != null) {
      render_id1 = atResult.render_id;
    }
    tmp87 = planId === render_id1;
  }
  const items47 = [projectId, stateFromStores1, memo, callback10];
  const effect3 = obj3.useEffect(() => {
    let obj = projectId(dependencyMap[26]);
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
        tmp(tmp2[38]);
      }
    }
  }, items47);
  ref10 = obj3.useRef(false);
  const items48 = [first1, callback4];
  const effect4 = obj3.useEffect(() => {
    if (first1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(callback4, 3000);
      return () => clearTimeout(closure_0);
    }
  }, items48);
  const items49 = [projectId];
  const callback11 = obj3.useCallback(() => {
    React4(projectId);
  }, items49);
  const callback12 = obj3.useCallback(() => {
    ref2.current = false;
    ref9.current = true;
    const obj = useKeyboardIsOpen;
    if (obj.getKeyboardIsOpen()) {
      const tmpResult = ChatInputUtils;
      tmpResult.dismissKeyboard();
    }
  }, []);
  [tmp95, c65] = stateFromStores(obj3.useState(false), 2);
  stateFromStores(obj3.useState(false), 2);
  ref11 = obj3.useRef(null);
  ref12 = obj3.useRef(0);
  callback13 = obj3.useCallback(() => {
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
  const callback14 = obj3.useCallback((nativeEvent) => {
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
  const callback15 = obj3.useCallback((arg0, contentHeight) => {
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
  const memo9 = obj3.useMemo(() => {
    const obj = { itemVisiblePercentThreshold: projectId(dependencyMap[41]).MIN_VISIBLE_PERCENT };
    return obj;
  }, []);
  const callback16 = obj3.useCallback((viewableItems) => {
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
    memo8 = intl3.string(tmp5(3995).mKK6wB);
  } else if (stateFromStores4) {
    const intl2 = tmp2(1113).intl;
    memo8 = intl2.string(tmp5(3995).xnCAaP);
  } else if (memo8 == null) {
    let intl = tmp2(1113).intl;
    memo8 = intl.string(tmp5(3995).L9EDub);
  }
  const items53 = [memo, memo6];
  let tmp102;
  const memo10 = obj3.useMemo(() => {
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
    tmp102 = memo[memo6];
  }
  let checklistLiveResult = null == tmp102;
  if (!checklistLiveResult) {
    const tmp2Result23 = tmp2(12814);
    checklistLiveResult = tmp2Result23.checklistLive(tmp102);
  }
  let conjureTurnStartedAtResult;
  if (null != tmp102) {
    const tmp2Result24 = tmp2(12828);
    conjureTurnStartedAtResult = tmp2Result24.conjureTurnStartedAt(tmp102);
  }
  const items54 = [memo7];
  let tmp106;
  const memo11 = obj3.useMemo(() => {
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
      render_id2 = tmp107.render_id;
    }
    tmp106 = render_id2;
  }
  let tmp109 = null != tmp106;
  if (tmp109) {
    tmp109 = null != obj21 && !obj21.has(tmp106) || tmp95;
    null != obj21 && !obj21.has(tmp106) || tmp95;
  }
  let tmp111 = null;
  if (stateFromStores3) {
    tmp111 = null;
    if (tmp57) {
      tmp111 = null;
      if (tmp109) {
        tmp111 = memo8;
      }
    }
  }
  const items55 = [bound, memo6, callback13];
  const effect5 = obj3.useEffect(() => {
    ref11.current = memo6;
    ref12.current = bound;
    let closure_0 = requestAnimationFrame(callback13);
    return () => cancelAnimationFrame(closure_0);
  }, items55);
  const items56 = [memo];
  closure_69 = obj3.useMemo(() => {
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
  onJumpToReplied = obj3.useCallback((arg0) => {
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
  const callback17 = obj3.useCallback(() => {
    if (null != memo6) {
      ref2.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items58);
  const callback18 = obj3.useCallback(() => {
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
  ref13 = obj3.useRef(false);
  ref14 = obj3.useRef(false);
  closure_73 = obj3.useCallback((arg0) => {
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
  const effect6 = obj3.useEffect(() => {
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
  ref15 = obj3.useRef(false);
  const callback19 = obj3.useCallback(() => {
    ref15.current = true;
  }, []);
  const callback20 = obj3.useCallback(() => {
    ref15.current = false;
  }, []);
  const items60 = [projectId];
  const callback21 = obj3.useCallback(() => {
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
  const callback22 = obj3.useCallback((arg0, arg1) => {
    ref.current = true;
    authStore(projectId, arg0, arg1);
  }, items60);
  let connectionLabelResult = null;
  const callback23 = obj3.useCallback(() => {
    metroImportAll(projectId);
  }, items61);
  if ("open" !== stateFromStores8) {
    const tmp2Result25 = tmp2(12831);
    connectionLabelResult = tmp2Result25.connectionLabel(stateFromStores8);
  }
  const obj6 = { style: tmp.container, children: null };
  const tmp2Result26 = tmp2(11111);
  const conjureControlActive = tmp2Result26.useConjureControlActive(projectId);
  const items62 = [c15(tmp5(12832), { thinking: stateFromStores3, bleedBottom: bottom }), , ];
  const obj13 = { style: tmp.transcriptArea, onTouchEnd: callback21, onTouchCancel: callback20, children: onToggleChecklist(Provider, obj14) };
  obj14 = { value: callback19, children: items66 };
  Provider = tmp2(12341).ConjureCardTouchContext.Provider;
  if (first1) {
    const obj15 = { clearance: tmp62, children: c15(FlashList, obj16) };
    obj16 = {
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
      contentInset: tmp129,
      ListHeaderComponent: tmp125Result,
      style: items63,
      contentContainerStyle: items64,
      data: memo,
      extraData: memo5,
      maintainVisibleContentPosition: obj23,
      keyExtractor(render_id) {
          return render_id.render_id;
        },
      ListFooterComponent: onToggleChecklist(tmp134, obj25),
      ListEmptyComponent: tmp125Result10,
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
    FlashList = tmp2(7433).FlashList;
    tmp2Result27 = tmp2(1377);
    tmp2Result27.isIOS() && undefined;
    tmp129 = undefined;
    const tmp127 = closure_23;
    const tmp2Result28 = tmp2(1377);
    if (tmp2Result28.isIOS()) {
      tmp129 = { top: num };
      const obj17 = { top: num };
    }
    tmp125Result = null;
    const tmp2Result29 = tmp2(1377);
    if (!tmp2Result29.isIOS()) {
      tmp125Result = null;
      if (num > 0) {
        const obj18 = { style: obj19 };
        obj19 = { height: num };
        tmp125Result = tmp125(tmp124, obj18);
      }
    }
    items63 = [tmp.transcript, , ];
    const tmp2Result30 = tmp2(1377);
    let tmp132 = !tmp2Result30.isIOS();
    tmp2Result30.isIOS();
    if (tmp132) {
      tmp132 = { marginBottom: tmp62 - bound };
      const obj20 = { marginBottom: tmp62 - bound };
    }
    items63[1] = tmp132;
    items63[2] = !tmp69 && tmp.transcriptHidden;
    items64 = [tmp.transcriptContent, ];
    items64[1] = { paddingBottom: bound + tmp5(575).space.PX_8 };
    let AUTOSCROLL_THRESHOLD;
    const obj22 = { paddingBottom: bound + tmp5(575).space.PX_8 };
    if (!tmp87) {
      AUTOSCROLL_THRESHOLD = tmp2(12826).AUTOSCROLL_THRESHOLD;
    }
    const obj24 = { projectId, messages: memo, draftHasText: tmp41, onAskForIdeas: tmp136, onShow: callback18 };
    tmp136 = undefined;
    obj23 = { startRenderingFromBottom: true, autoscrollToBottomThreshold: AUTOSCROLL_THRESHOLD };
    tmp134 = c16;
    const tmp5Result = tmp5(12835);
    if (tmp51) {
      tmp136 = callback1;
    }
    obj25 = { children: items65 };
    items65 = [c15(tmp5Result, obj24), ];
    const obj26 = { projectId };
    items65[1] = c15(tmp2(12340).ConjureHostApprovalCards, obj26);
    tmp125Result10 = null;
    if ("loading" !== chatEmptyStateResult) {
      let AyiQEp;
      const obj27 = { style: tmp.placeholder, children: c15(Text, obj28) };
      Text = tmp2(5763).Text;
      const intl4 = tmp2(1113).intl;
      const string = intl4.string;
      if ("unavailable" === chatEmptyStateResult) {
        AyiQEp = tmp5(3995).Td4Sf4;
      } else {
        AyiQEp = tmp5(3995).AyiQEp;
      }
      obj28 = { variant: "body-sm/normal", color: "text-muted", children: string(AyiQEp) };
      tmp125Result10 = tmp125(tmp124, obj27);
    }
    tmp125Result11 = tmp125(tmp127, obj15);
  } else {
    const obj29 = { style: tmp.transcript };
    tmp125Result11 = tmp125(tmp124, obj29);
  }
  items66 = [tmp125Result11, , ];
  let tmp125Result12 = null;
  if (tmp27) {
    const obj30 = { projectId };
    tmp125Result12 = tmp125(tmp5(13005), obj30);
  }
  items66[1] = tmp125Result12;
  let tmp125Result13 = null;
  if (null != tmp111) {
    const obj31 = { line: tmp111, onJumpToActivity: callback17, bottom: tmp5(575).space.PX_12 + tmp62, todos: memo10, todosLive: checklistLiveResult, agents: memo11 };
    const tmp5Result4 = tmp5(13007);
    tmp125Result13 = tmp125(tmp5Result4, obj31);
  }
  items66[2] = tmp125Result13;
  items62[1] = c15(stateFromStores2, obj13);
  const obj32 = { style: tmp.bottomStack, onLayout: callback3, children: null };
  const obj33 = { projectId, thinking: stateFromStores3, turnStartedAt: conjureTurnStartedAtResult, remixStartedAt: conjureRemixStartedAt, compacting: stateFromStores4, saving: stateFromStores5, recalling: tmp142, activity: stateFromStores6, projectUsage: stateFromStores7, connLabel: connectionLabelResult, controlling: conjureControlActive, connFailed: "failed" === stateFromStores8, thinkingOpen: tmp27, onToggleThinking: callback, queuedCount: memo1.length };
  tmp142 = "loading" === chatEmptyStateResult;
  const tmp5Result5 = tmp5(13010);
  if (tmp142) {
    tmp142 = 0 === memo.length;
  }
  const items67 = [c15(tmp5Result5, obj33), , ];
  if (null == tmp8) {
    if (null == tmp6) {
      if (null == tmp7) {
        let tmp125Result14 = null;
        const obj34 = { style: notices, children: items68 };
        if (null != tmp8) {
          const obj35 = { style: tmp.notice, children: c15(tmp2(8170).InlineNotice, obj36) };
          obj36 = { type: "critical", role: "alert", message: tmp8.message, action: obj37 };
          obj37 = { text: tmp8.retry.text, onPress: tmp8.retry.onClick };
          tmp125Result14 = tmp125(tmp124, obj35);
        }
        items68 = [tmp125Result14, , , , ];
        let tmp125Result15 = null;
        if (null != tmp6) {
          const obj38 = { style: tmp.notice, children: c15(tmp2(8170).InlineNotice, obj39) };
          obj39 = { type: "warning", role: "status", message: null, onDismiss: null };
          ({ message: obj56.message, onDismiss: obj56.onDismiss } = tmp6);
          tmp125Result15 = tmp125(tmp124, obj38);
        }
        items68[1] = tmp125Result15;
        let tmp125Result16 = null;
        if (null != tmp7) {
          let str3 = "warning";
          const obj40 = { style: tmp.notice, children: c15(InlineNotice, obj41) };
          InlineNotice = tmp2(8170).InlineNotice;
          if (tmp7.blocked) {
            str3 = "critical";
          }
          obj41 = { type: str3, role: str4, message: tmp7.message };
          str4 = "status";
          if (tmp7.blocked) {
            str4 = "alert";
          }
          tmp125Result16 = tmp125(tmp124, obj40);
        }
        items68[2] = tmp125Result16;
        let tmp125Result17 = null;
        if (null != tmp47.request) {
          const obj42 = { style: tmp.notice, children: c15(tmp5(12991), obj43, tmp47.request.id) };
          obj43 = { projectId, request: tmp47.request, canSend: tmp51, onDismiss: tmp47.close, onSent: callback2 };
          tmp125Result17 = tmp125(tmp124, obj42);
        }
        items68[3] = tmp125Result17;
        let tmp125Result18 = null;
        if (conjureScopeSetupPending) {
          const obj44 = { style: tmp.notice, children: c15(tmp5(13020), obj45) };
          obj45 = { projectId };
          tmp125Result18 = tmp125(tmp124, obj44);
        }
        items68[4] = tmp125Result18;
        items67[1] = onToggleChecklist(stateFromStores2, obj34);
        const obj46 = { projectId, canSend: tmp51, inputLocked: conjureScopeSetupPending, aiPaused: true === blocked, running: stateFromStores3, onSend: callback22, onInterrupt: tmp150, onDraftHasTextChange: tmp42, hidden, onSendToOtherProjects: open };
        blocked = undefined;
        const tmp5Result6 = tmp5(13021);
        if (tmp7 != null) {
          blocked = tmp7.blocked;
        }
        tmp150 = undefined;
        if (stateFromStores3) {
          tmp150 = callback23;
        }
        open = undefined;
        if (null == tmp47.request) {
          open = tmp47.open;
        }
        items67[2] = c15(tmp5Result6, obj46, conjureHeldPrompt);
        obj32.children = items67;
        items62[2] = onToggleChecklist(stateFromStores2, obj32);
        obj6.children = items62;
        return onToggleChecklist(stateFromStores2, obj6);
      }
    }
  }
  notices = tmp.notices;
};
