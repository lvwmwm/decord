// Module ID: 12388
// Function ID: 12389
// Name: ConjureNativeChat
// Dependencies: [32, 19, 17, 1999, 10807, 10824, 10826, 10808, 21, 587, 683, 5005, 558, 576, 504, 12389, 12390, 12391, 1631, 10834, 12392, 12393, 12394, 12399, 12401, 12402, 12403, 12404, 12398, 1125, 3864, 12405, 12406, 5701, 12407, 10809, 12400, 1381, 12411, 12412, 12413, 12414, 12415, 12416, 10875, 12417, 7280, 12420, 12278, 5271, 12441, 12592, 12593, 12596, 8011, 12578, 12605, 12606, 5295, 7026, 2]

// Module 12388 (ConjureNativeChat)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import intl5 from "intl" /* 1125 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import _modDef3864 from "module_3864" /* 3864 */;
import LinearGradientDefault from "LinearGradient" /* 5295 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import _modDef7026 from "module_7026" /* 7026 */;
import conjureChatTurns from "conjureChatTurns" /* 10809 */;
import conjurePublishCard from "conjurePublishCard" /* 12392 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 12398 */;
import ConjureTodoState from "ConjureTodoState" /* 12399 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 12400 */;
import ConjureSecretRequestState from "ConjureSecretRequestState" /* 12401 */;
import conjureCardOverrides from "conjureCardOverrides" /* 12402 */;
import conjurePendingPlan from "conjurePendingPlan" /* 12403 */;
import ConjureChatGrouping from "ConjureChatGrouping" /* 12404 */;
import ConjureAppBuildRequest from "ConjureAppBuildRequest" /* 12407 */;
import conjureTranscriptScroll from "conjureTranscriptScroll" /* 12411 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 12414 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 12415 */;
import ConjureMessageRowDefault from "ConjureMessageRow" /* 12441 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 1999 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 10807 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10824 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10826 */;
import ConjureChatStore from "ConjureChatStore" /* 10808 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let fadingEdgeLength, map, nativeEvent, set, version, viewableItems;

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
let View = react_native.View;
let ConjureConnectionStore = ConjureConnectionStore_mod;
({ ensureConnection: metroImportDefault, interruptTurn: metroImportAll, loadOlderHistory: c9, sendUserMessage: c10 } = ConjureConnectionStore);
ConjureConnectionStore = ConjureConnectionStore_mod;
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = Fragment);
let c18 = 500;
let c19 = 52;
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
let obj2 = { container: { flex: 1 }, transcript: { flex: 1 }, maskSolid: { flex: 1, backgroundColor: BLACK }, maskFade: { height: 52 }, transcriptArea: { flex: 1, position: "relative" }, transcriptContent: obj3, transcriptHidden: { opacity: 0 }, bottomStack: { position: "absolute", left: 0, right: 0, bottom: 0 }, notices: obj4, notice: obj5, placeholder: obj6 };
obj3 = { paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj4 = { paddingTop: nativeDefault.space.PX_8 };
obj5 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingBottom: nativeDefault.space.PX_8 };
obj6 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
let closure_24 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeChat(projectId) {
  let canSend;
  let closure_5;
  let closure_7;
  let historySettled;
  let num;
  let onDismissAppBuildRequest;
  let onJumpToReplied;
  let onRestoreVersion;
  let onToggleChecklist;
  let onTogglePlan;
  let ref;
  let ref10;
  let ref11;
  let ref12;
  let ref13;
  let ref14;
  let ref2;
  let ref3;
  let ref4;
  let ref5;
  let ref6;
  let ref7;
  let ref8;
  let ref9;
  let stateFromStores1;
  let stateFromStores3;
  let tmp28;
  let tmp5;
  let tmp6;
  let tmp7;
  let transcriptTopInset;
  let tmp = projectId;
  let tmp2 = num;
  let obj = projectId(num[13]);
  const cResult = obj.c(293);
  projectId = projectId.projectId;
  ({ transcriptTopInset, onRestoreVersion } = projectId);
  const hidden = projectId.hidden;
  num = 0;
  if (undefined !== transcriptTopInset) {
    num = transcriptTopInset;
  }
  let tmp4 = onDismissClarification();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [stateFromStores3];
    class T {
      constructor() {
        return "active" === closure_6.getState();
      }
    }
    const items1 = [];
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = T;
    cResult[2] = items1;
    tmp5 = items;
    tmp6 = T;
    tmp7 = items1;
  } else {
    [tmp5, tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(tmp2[14]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6, tmp7);
  let tmp10 = onRestoreVersion(tmp2[15])(projectId);
  onRestoreVersion(tmp2[16])(projectId);
  const tmp12 = onRestoreVersion(tmp2[17])(projectId);
  const tmpResult14 = tmp(tmp2[17]);
  const conjureRemixStartedAt = tmpResult14.useConjureRemixStartedAt(projectId);
  const bottom = onRestoreVersion(tmp2[18])().bottom;
  if (cResult[3] === stateFromStores) {
    let tmp14;
    let tmp15;
    let tmp18;
    let tmp21;
    let tmp20;
    let tmp23;
    let tmp25;
    let tmp24;
    if (cResult[4] === projectId) {
      tmp14 = cResult[5];
      tmp15 = cResult[6];
    }
    const obj4 = stateFromStores1;
    const effect = stateFromStores1.useEffect(tmp14, tmp15);
    class T {
      constructor() {
        return "active" === closure_6.getState();
      }
    }
    const ackConjureProjectWhileViewing = obj5.useAckConjureProjectWhileViewing(projectId, stateFromStores);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ConjureChatStore];
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[7] = items2;
      tmp18 = items2;
    } else {
      tmp18 = cResult[7];
    }
    if (cResult[8] !== projectId) {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      const items3 = [projectId];
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[8] = projectId;
      cResult[9] = items3;
      cResult[10] = V;
      tmp21 = V;
      tmp20 = items3;
    } else {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      tmp21 = cResult[10];
    }
    const tmpResult15 = tmp(tmp2[14]);
    stateFromStores1 = tmpResult15.useStateFromStores(tmp18, tmp21, tmp20);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      const items4 = [ConjurePublishStatusStore];
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[11] = items4;
      tmp23 = items4;
    } else {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
    }
    if (cResult[12] !== projectId) {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      const items5 = [projectId];
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[12] = projectId;
      cResult[13] = tmp26;
      cResult[14] = items5;
      tmp25 = items5;
      tmp24 = tmp26;
    } else {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      tmp25 = cResult[14];
    }
    const tmpResult16 = tmp(tmp2[14]);
    const stateFromStores2 = tmpResult16.useStateFromStores(tmp23, tmp24, tmp25);
    if (cResult[15] === stateFromStores1) {
      let tmp31;
      let tmp33;
      let tmp32;
      let tmp36;
      let tmp38;
      let tmp37;
      let tmp41;
      let tmp43;
      let tmp42;
      let tmp46;
      let tmp48;
      let tmp47;
      let tmp51;
      let tmp53;
      let tmp52;
      let tmp65;
      let tmp67;
      let tmp66;
      let tmp69;
      let tmp71;
      let tmp70;
      let tmp73;
      let tmp75;
      let tmp74;
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      View = tmp28;
      const _Symbol3 = Symbol;
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      if (tmp30 === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items6 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[18] = items6;
        tmp31 = items6;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
      }
      if (cResult[19] !== projectId) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items7 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[19] = projectId;
        cResult[20] = tmp34;
        cResult[21] = items7;
        tmp33 = items7;
        tmp32 = tmp34;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp33 = cResult[21];
      }
      const tmpResult17 = tmp(tmp2[14]);
      stateFromStores3 = tmpResult17.useStateFromStores(tmp31, tmp32, tmp33);
      const _Symbol4 = Symbol;
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items8 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[22] = items8;
        tmp36 = items8;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
      }
      if (cResult[23] !== projectId) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items9 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[23] = projectId;
        cResult[24] = tmp39;
        cResult[25] = items9;
        tmp38 = items9;
        tmp37 = tmp39;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp38 = cResult[25];
      }
      const tmpResult18 = tmp(tmp2[14]);
      const stateFromStores4 = tmpResult18.useStateFromStores(tmp36, tmp37, tmp38);
      const _Symbol5 = Symbol;
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items10 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[26] = items10;
        tmp41 = items10;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
      }
      if (cResult[27] !== projectId) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items11 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[27] = projectId;
        cResult[28] = tmp44;
        cResult[29] = items11;
        tmp43 = items11;
        tmp42 = tmp44;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp43 = cResult[29];
      }
      const tmpResult19 = tmp(tmp2[14]);
      const stateFromStores5 = tmpResult19.useStateFromStores(tmp41, tmp42, tmp43);
      const _Symbol6 = Symbol;
      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items12 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[30] = items12;
        tmp46 = items12;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
      }
      if (cResult[31] !== projectId) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items13 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[31] = projectId;
        cResult[32] = tmp49;
        cResult[33] = items13;
        tmp48 = items13;
        tmp47 = tmp49;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp48 = cResult[33];
      }
      const tmpResult20 = tmp(tmp2[14]);
      const stateFromStores6 = tmpResult20.useStateFromStores(tmp46, tmp47, tmp48);
      const _Symbol7 = Symbol;
      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items14 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[34] = items14;
        tmp51 = items14;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
      }
      if (cResult[35] !== projectId) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items15 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[35] = projectId;
        cResult[36] = tmp54;
        cResult[37] = items15;
        tmp53 = items15;
        tmp52 = tmp54;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp53 = cResult[37];
      }
      const tmpResult21 = tmp(tmp2[14]);
      const stateFromStores7 = tmpResult21.useStateFromStores(tmp51, tmp52, tmp53);
      const first = stateFromStores(obj4.useState(null), 2)[0];
      stateFromStores(obj4.useState(null), 2);
      class M {
        constructor() {
          tmp = closure_3;
          if (tmp) {
            tmp2 = ensureConnection;
            tmp3 = projectId;
            tmp4 = ensureConnection(projectId);
          }
          return;
        }
      }
      let tmp61 = null == first;
      if (!tmp61) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp61 = tmp62;
      }
      if (!tmp61) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
      }
      if (cResult[38] !== projectId) {
        class Ce {
          constructor() {
            return closure_7(function() { /* body not rendered: F151908 */ });
          }
        }
        cResult[38] = projectId;
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[39] = Ce;
      } else {
        class Ce {
          constructor() {
            return closure_7(function() { /* body not rendered: F151908 */ });
          }
        }
      }
      const _Symbol8 = Symbol;
      if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
        class Ce {
          constructor() {
            return closure_7(function() { /* body not rendered: F151908 */ });
          }
        }
        const items16 = [ConjureConnectionStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[40] = items16;
        tmp65 = items16;
      } else {
        class Ce {
          constructor() {
            return closure_7(function() { /* body not rendered: F151908 */ });
          }
        }
      }
      if (cResult[41] !== projectId) {
        class Ee {
          constructor() {
            return closure_11.getConnState(projectId);
          }
        }
        const items17 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[41] = projectId;
        cResult[42] = Ee;
        cResult[43] = items17;
        tmp67 = items17;
        tmp66 = Ee;
      } else {
        class Ee {
          constructor() {
            return closure_11.getConnState(projectId);
          }
        }
        tmp67 = cResult[43];
      }
      const tmpResult22 = tmp(tmp2[14]);
      const stateFromStores8 = tmpResult22.useStateFromStores(tmp65, tmp66, tmp67);
      const _Symbol9 = Symbol;
      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
        class Ee {
          constructor() {
            return closure_11.getConnState(projectId);
          }
        }
        const items18 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[44] = items18;
        tmp69 = items18;
      } else {
        class Ee {
          constructor() {
            return closure_11.getConnState(projectId);
          }
        }
      }
      if (cResult[45] !== projectId) {
        class Pe {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
        const items19 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[45] = projectId;
        cResult[46] = Pe;
        cResult[47] = items19;
        tmp71 = items19;
        tmp70 = Pe;
      } else {
        class Pe {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
        tmp71 = cResult[47];
      }
      const tmpResult23 = tmp(tmp2[14]);
      const stateFromStores9 = tmpResult23.useStateFromStores(tmp69, tmp70, tmp71);
      const _Symbol10 = Symbol;
      if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
        class Pe {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
        const items20 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[48] = items20;
        tmp73 = items20;
      } else {
        class Pe {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
      }
      if (cResult[49] !== projectId) {
        class Be {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
        const items21 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[49] = projectId;
        cResult[50] = Be;
        cResult[51] = items21;
        tmp75 = items21;
        tmp74 = Be;
      } else {
        class Be {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
        tmp75 = cResult[51];
      }
      const tmpResult24 = tmp(tmp2[14]);
      const stateFromStores10 = tmpResult24.useStateFromStores(tmp73, tmp74, tmp75);
      if (cResult[52] === stateFromStores8) {
        class Be {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
      }
      let obj2 = { historyLoaded: stateFromStores9, historyUnavailable: stateFromStores10, connState: stateFromStores8 };
      const tmpResult25 = tmp(tmp2[21]);
      cResult[52] = stateFromStores8;
      cResult[53] = stateFromStores9;
      cResult[54] = stateFromStores10;
      cResult[55] = tmpResult25.chatEmptyState(obj2);
      const chatEmptyStateResult = tmpResult25.chatEmptyState(obj2);
    }
    const tmpResult26 = tmp(tmp2[20]);
    const withLivePublishCardResult = tmpResult26.withLivePublishCard(stateFromStores1, stateFromStores2);
    cResult[15] = stateFromStores1;
    cResult[16] = stateFromStores2;
    cResult[17] = withLivePublishCardResult;
    tmp28 = withLivePublishCardResult;
  }
  class M {
    constructor() {
      tmp = closure_3;
      if (tmp) {
        tmp2 = ensureConnection;
        tmp3 = projectId;
        tmp4 = ensureConnection(projectId);
      }
      return;
    }
  }
  const items22 = [stateFromStores, projectId];
  cResult[3] = stateFromStores;
  cResult[4] = projectId;
  cResult[5] = M;
  cResult[6] = items22;
  tmp15 = items22;
  tmp14 = M;
}) : (function ConjureNativeChat(projectId) {
  let FlashList;
  let InlineNotice;
  let Text;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let _undefined5;
  let _undefined6;
  let _undefined7;
  let blocked;
  let c14;
  let c15;
  let c19;
  let c25;
  let c26;
  let c36;
  let c37;
  let c47;
  let c64;
  let hidden;
  let items61;
  let items62;
  let items63;
  let items64;
  let items66;
  let notices;
  let obj15;
  let obj18;
  let obj21;
  let obj22;
  let obj24;
  let obj27;
  let obj35;
  let obj36;
  let obj38;
  let obj40;
  let obj42;
  let obj44;
  let onDismissClarification;
  let open;
  let str4;
  let tmp122Result;
  let tmp122Result10;
  let tmp122Result11;
  let tmp127;
  let tmp132;
  let tmp134;
  let tmp140;
  let tmp148;
  let tmp21;
  let tmp22;
  let tmp2Result27;
  let tmp40;
  let tmp41;
  let tmp61;
  let tmp69;
  let tmp81;
  let tmp82;
  let tmp95;
  const f116216 = () => {
    map = new Map();
    return map;
  };
  const f116219 = () => {
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
  set = undefined;
  let stateFromStores11;
  let memo1;
  c14 = undefined;
  c15 = undefined;
  let onToggleChecklist;
  let closure_17;
  c18 = undefined;
  fadingEdgeLength = undefined;
  let onTogglePlan;
  let closure_21;
  let closure_22;
  let closure_23;
  closure_24 = undefined;
  c25 = undefined;
  c26 = undefined;
  let dismissedAppBuildRequestId;
  let onDismissAppBuildRequest;
  let sent;
  let id;
  let canSend;
  let memo2;
  let joined;
  let memo4;
  let memo5;
  c36 = undefined;
  c37 = undefined;
  let first1;
  let closure_39;
  let bound;
  let closure_42;
  let ref;
  let ref2;
  let ref3;
  let ref4;
  c47 = undefined;
  let ref5;
  let callback4;
  let closure_50;
  let ref6;
  let callback5;
  let callback6;
  let historySettled;
  let callback7;
  let callback8;
  let ref7;
  let closure_58;
  let c59;
  let ref8;
  let ref9;
  let callback10;
  let ref10;
  c64 = undefined;
  let ref11;
  let ref12;
  let callback13;
  let closure_68;
  let onJumpToReplied;
  let ref13;
  let ref14;
  let closure_72;
  let tmp = closure_24();
  let tmp2 = projectId;
  let tmp3 = dependencyMap;
  let obj = projectId(504);
  items = [memo];
  const stateFromStores = obj.useStateFromStores(items, () => "active" === memo.getState(), []);
  let tmp5 = num;
  let tmp6 = num(12389)(projectId);
  const tmp7 = num(12390)(projectId);
  let tmp8 = num(12391)(projectId);
  let obj2 = projectId(12391);
  const conjureRemixStartedAt = obj2.useConjureRemixStartedAt(projectId);
  let obj3 = stateFromStores1;
  const items1 = [stateFromStores, projectId];
  const bottom = num(1631)().bottom;
  const effect = stateFromStores1.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      metroImportDefault(projectId);
    }
  }, items1);
  const obj4 = projectId(10834);
  const ackConjureProjectWhileViewing = obj4.useAckConjureProjectWhileViewing(projectId, stateFromStores);
  const tmp12 = c14;
  const items2 = [c14];
  const items3 = [projectId];
  const obj5 = projectId(504);
  stateFromStores1 = obj5.useStateFromStores(items2, () => ConjureChatStore.getMessages(projectId), items3);
  const items4 = [stateFromStores11];
  const items5 = [projectId];
  const obj7 = projectId(504);
  const stateFromStores2 = obj7.useStateFromStores(items4, () => ConjurePublishStatusStore.getPublishStatus(projectId), items5);
  const items6 = [stateFromStores1, stateFromStores2];
  memo = stateFromStores1.useMemo(() => {
    const obj = conjurePublishCard;
    return obj.withLivePublishCard(stateFromStores1, stateFromStores2);
  }, items6);
  const items7 = [c14];
  const items8 = [projectId];
  const obj8 = projectId(504);
  const stateFromStores3 = obj8.useStateFromStores(items7, () => ConjureChatStore.isThinking(projectId), items8);
  const items9 = [c14];
  const items10 = [projectId];
  const obj9 = projectId(504);
  const stateFromStores4 = obj9.useStateFromStores(items9, () => ConjureChatStore.isCompacting(projectId), items10);
  const items11 = [c14];
  const items12 = [projectId];
  const obj10 = projectId(504);
  const stateFromStores5 = obj10.useStateFromStores(items11, () => ConjureChatStore.isSaving(projectId), items12);
  const items13 = [c14];
  const items14 = [projectId];
  const obj11 = projectId(504);
  const stateFromStores6 = obj11.useStateFromStores(items13, () => ConjureChatStore.getThinkingActivity(projectId), items14);
  const items15 = [c14];
  const items16 = [projectId];
  const obj12 = projectId(504);
  const stateFromStores7 = obj12.useStateFromStores(items15, () => ConjureChatStore.getProjectUsage(projectId), items16);
  let tmp20 = stateFromStores(stateFromStores1.useState(null), 2);
  [tmp21, tmp22] = tmp20;
  let c8 = tmp22;
  let tmp23 = null == tmp21;
  if (!tmp23) {
    tmp23 = stateFromStores3 && tmp21 === projectId;
  }
  if (!tmp23) {
    tmp22(null);
  }
  const items17 = [projectId];
  let tmp27 = stateFromStores3;
  const callback = obj3.useCallback(() => _undefined((arg0) => {
    let tmp = null;
    if (arg0 !== projectId) {
      tmp = projectId;
    }
    return tmp;
  }), items17);
  if (stateFromStores3) {
    tmp27 = tmp21 === projectId;
  }
  const items18 = [set];
  const items19 = [projectId];
  const tmp2Result = tmp2(504);
  const stateFromStores8 = tmp2Result.useStateFromStores(items18, () => ConjureConnectionStore.getConnState(projectId), items19);
  const items20 = [tmp12];
  const items21 = [projectId];
  const tmp2Result16 = tmp2(504);
  stateFromStores9 = tmp2Result16.useStateFromStores(items20, () => ConjureChatStore.hasLoadedHistory(projectId), items21);
  const items22 = [tmp12];
  const items23 = [projectId];
  const tmp2Result17 = tmp2(504);
  const stateFromStores10 = tmp2Result17.useStateFromStores(items22, () => ConjureChatStore.isHistoryUnavailable(projectId), items23);
  const tmp2Result18 = tmp2(12393);
  const chatEmptyStateResult = tmp2Result18.chatEmptyState({ historyLoaded: stateFromStores9, historyUnavailable: stateFromStores10, connState: stateFromStores8 });
  const tmp2Result19 = tmp2(12394);
  const conjureScopeSetupPending = tmp2Result19.useConjureScopeSetupPending(projectId);
  render_id = null;
  const tmp2Result20 = tmp2(12394);
  const conjureHeldPrompt = tmp2Result20.useConjureHeldPrompt(projectId);
  if (memo.length > 0) {
    let num2 = 1;
    render_id = memo[memo.length - 1].render_id;
  }
  const items24 = [memo];
  set = obj3.useMemo(() => {
    const obj = ConjureTodoState;
    return obj.supersededChecklists(memo);
  }, items24);
  const items25 = [memo1];
  const items26 = [projectId];
  const tmp2Result21 = tmp2(504);
  stateFromStores11 = tmp2Result21.useStateFromStores(items25, () => {
    const settings = ConjureSettingsStore.getSettings(projectId);
    let secrets;
    if (settings != null) {
      secrets = settings.secrets;
    }
    return secrets;
  }, items26);
  const items27 = [memo, stateFromStores11];
  memo1 = obj3.useMemo(() => {
    const obj = ConjureSecretRequestState;
    return obj.secretRequestStatuses(memo, stateFromStores11);
  }, items27);
  [c14, c15] = stateFromStores(obj3.useState(f116216), 2);
  stateFromStores(obj3.useState(f116216), 2);
  onToggleChecklist = obj3.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined2((get) => {
      const obj = projectId(closure_2_2[25]);
      return obj.toggleConjureCard(get, closure_0, closure_1);
    });
  }, []);
  const items28 = [memo];
  closure_17 = obj3.useMemo(() => {
    const obj = conjurePendingPlan;
    return obj.planVersions(memo);
  }, items28);
  [c18, c19] = stateFromStores(obj3.useState(f116219), 2);
  stateFromStores(obj3.useState(f116219), 2);
  onTogglePlan = obj3.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined3((get) => {
      const obj = projectId(closure_2_2[25]);
      return obj.toggleConjureCard(get, closure_0, closure_1);
    });
  }, []);
  const items29 = [memo];
  closure_21 = obj3.useMemo(() => {
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
  }, items29);
  const items30 = [projectId];
  closure_22 = obj3.useCallback(() => {
    const sendConjureCardReply = conjureAttachmentDrafts.sendConjureCardReply;
    conjureAttachmentDrafts;
    const intl = intl5.intl;
    sendConjureCardReply(projectId, intl.string(_modDef3864.EMgIuY));
  }, items30);
  const items31 = [projectId];
  closure_23 = obj3.useCallback((implementation_prompt) => {
    const obj = conjureAttachmentDrafts;
    obj.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items31);
  const items32 = [projectId];
  [tmp40, tmp41] = stateFromStores(tmp5(12405)(projectId), 2);
  const items33 = [projectId];
  stateFromStores(tmp5(12405)(projectId), 2);
  const callback1 = obj3.useCallback(() => {
    const intl = intl5.intl;
    authStore(projectId, intl.string(_modDef3864["t5CN3+"]));
  }, items32);
  closure_24 = obj3.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
    const obj = conjureAttachmentDrafts;
    const obj2 = { clarificationAnswers, attachments };
    obj.sendConjureCardReply(projectId, implementation_prompt, obj2);
  }, items33);
  [c25, c26] = stateFromStores(obj3.useState(null), 2);
  stateFromStores(obj3.useState(null), 2);
  const tmp19Result14 = stateFromStores(obj3.useState(null), 2);
  dismissedAppBuildRequestId = tmp19Result14[0];
  onDismissAppBuildRequest = tmp19Result14[1];
  const tmp46 = tmp5(12406)(projectId);
  sent = tmp46.sent;
  const request = tmp46.request;
  id = undefined;
  if (request != null) {
    id = request.id;
  }
  const items34 = [id, sent];
  let tmp50 = tmp49;
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
  }, items34);
  if ("open" !== stateFromStores8) {
    let str = "connecting";
    tmp50 = "connecting" === stateFromStores8;
  }
  canSend = tmp50;
  const items35 = [memo];
  memo2 = obj3.useMemo(() => {
    const obj = conjurePendingPlan;
    return obj.pendingPlanRenderId(memo);
  }, items35);
  const arr = Array.from(memo1, (arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return "" + tmp + ":" + tmp2;
  });
  joined = arr.join(",");
  const items36 = [tmp50, memo2, joined, dismissedAppBuildRequestId];
  const items37 = [memo];
  const memo3 = obj3.useMemo(() => ({ canSend, pendingPlanId: memo2, secretStatusesKey: joined, dismissedAppBuildRequestId }), items36);
  memo4 = obj3.useMemo(() => {
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
  }, items37);
  const items38 = [memo, memo4];
  memo5 = obj3.useMemo(() => {
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
  }, items38);
  let tmp56 = null != memo5;
  if (tmp56) {
    tmp56 = memo5.steps.length > 0 || memo5.tasks.length > 0;
  }
  const items39 = [memo5];
  let memo6 = obj3.useMemo(() => {
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
  }, items39);
  [obj21, c36] = stateFromStores(obj3.useState(null), 2);
  stateFromStores(obj3.useState(null), 2);
  [tmp61, c37] = stateFromStores(obj3.useState(64), 2);
  stateFromStores(obj3.useState(64), 2);
  const tmp19Result17 = stateFromStores(obj3.useState(false), 2);
  first1 = tmp19Result17[0];
  closure_39 = tmp19Result17[1];
  const callback3 = obj3.useCallback((nativeEvent) => {
    let closure_0 = Math.round(nativeEvent.nativeEvent.layout.height);
    let tmp = _undefined5((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
    closure_39(true);
  }, []);
  bound = tmp61;
  const tmp2Result22 = tmp2(1381);
  if (!tmp2Result22.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp61, fadingEdgeLength);
  }
  obj3.useRef(null);
  closure_42 = obj3.useRef(null);
  ref = obj3.useRef(false);
  ref2 = obj3.useRef(true);
  ref3 = obj3.useRef(0);
  ref4 = obj3.useRef(0);
  [tmp69, c47] = stateFromStores(obj3.useState(false), 2);
  stateFromStores(obj3.useState(false), 2);
  ref5 = obj3.useRef(false);
  callback4 = obj3.useCallback(() => {
    ref5.current = true;
    _undefined6(true);
  }, []);
  closure_50 = obj3.useRef({ viewportHeight: 0, contentHeight: 0, measuredRowCount: null });
  ref6 = obj3.useRef({ rowCount: 0, historySettled: false });
  callback5 = obj3.useCallback((arg0) => {
    let contentHeight;
    let viewportHeight;
    let tmp = arg0;
    const current = closure_50.current;
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
  const items40 = [callback5, callback4];
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
              const current = ref.current || "reveal" !== closure_1_52();
              if (!current) {
                closure_1_49();
              }
            });
          });
        }
      } else {
        callback4();
      }
    }
  }, items40);
  historySettled = tmp73;
  const items41 = [memo.length, stateFromStores9 || stateFromStores10, callback6];
  const layoutEffect = obj3.useLayoutEffect(() => {
    const obj = { rowCount: memo.length, historySettled };
    ref6.current = obj;
    let closure_0 = requestAnimationFrame(callback6);
    return () => cancelAnimationFrame(closure_0);
  }, items41);
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
    ref3.current = timestamp + c18;
    ref4.current = timestamp + 2000;
  }, []);
  const items42 = [projectId, callback8];
  const effect1 = obj3.useEffect(() => {
    ref2.current = true;
    callback8();
  }, items42);
  const items43 = [stateFromStores9, callback8];
  const effect2 = obj3.useEffect(() => {
    const tmp = stateFromStores9;
    if (tmp) {
      callback8();
    }
  }, items43);
  ref7 = obj3.useRef(null);
  const items44 = [callback6];
  const callback9 = obj3.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    ref7.current = height;
    let current = ref7.current;
    const obj = conjureTranscriptScroll;
    if (obj.keepsBottomOnShrink(current, height, closure_42.current)) {
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
    closure_50.current.viewportHeight = height;
    callback6();
  }, items44);
  closure_58 = obj3.useRef(null);
  [tmp81, tmp82] = stateFromStores(obj3.useState(null), 2);
  c59 = tmp82;
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
  const items45 = [projectId, stateFromStores1, memo, callback10];
  const effect3 = obj3.useEffect(() => {
    let obj = projectId(dependencyMap[26]);
    const takeArrivedPlanResult = obj.takeArrivedPlan(closure_58, projectId, stateFromStores1);
    const tmp = projectId;
    const tmp3 = projectId;
    projectId = takeArrivedPlanResult;
    let current = closure_42.current;
    const tmp2 = dependencyMap;
    if (null != takeArrivedPlanResult) {
      if (null == current) {
        const findIndexResult = memo.findIndex((render_id) => render_id.render_id === takeArrivedPlanResult);
        num = 0;
        if (findIndexResult >= 0) {
          closure_44.current = false;
          closure_43.current = false;
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
  }, items45);
  ref10 = obj3.useRef(false);
  const items46 = [first1, callback4];
  const effect4 = obj3.useEffect(() => {
    if (first1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(callback4, 3000);
      return () => clearTimeout(closure_0);
    }
  }, items46);
  const items47 = [projectId];
  const callback11 = obj3.useCallback(() => {
    React4(projectId);
  }, items47);
  const callback12 = obj3.useCallback(() => {
    ref2.current = false;
    ref9.current = true;
  }, []);
  [tmp95, c64] = stateFromStores(obj3.useState(false), 2);
  stateFromStores(obj3.useState(false), 2);
  ref11 = obj3.useRef(null);
  ref12 = obj3.useRef(0);
  callback13 = obj3.useCallback(() => {
    const current = ref11.current;
    const current2 = closure_42.current;
    if (null != current) {
      const current3 = ref.current;
      let layout;
      if (current3 != null) {
        layout = current3.getLayout(current);
      }
    }
    let tmp5 = null != current2;
    const tmp4 = c64;
    if (tmp5) {
      tmp5 = null != tmp;
    }
    if (tmp5) {
      tmp5 = tmp.y >= current2.offsetY + current2.viewportHeight - ref12.current;
    }
    tmp4(tmp5);
  }, []);
  const items48 = [callback5, callback4, callback7, callback10, callback13];
  const items49 = [callback6, callback7, callback8, callback13];
  const callback14 = obj3.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    closure_42.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
    if (!ref5.current) {
      const tmp3 = callback5(closure_42.current);
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
  }, items48);
  const callback15 = obj3.useCallback((arg0, contentHeight) => {
    closure_50.current.contentHeight = contentHeight;
    closure_50.current.measuredRowCount = ref6.current.rowCount;
    callback6();
    if (!ref10.current) {
      tmp2.current = true;
      callback8();
    }
    const timestamp = Date.now();
    const current = ref2.current && timestamp < ref3.current;
    if (current) {
      const _Math = Math;
      ref3.current = Math.min(timestamp + c18, ref4.current);
      callback7();
    }
    const current2 = closure_42.current;
    if (null != current2) {
      let tmp13;
      const obj2 = { contentHeight };
      const obj = conjureTranscriptScroll;
      const isNearBottomResult = obj.isNearBottom(current2);
      const merged = Object.assign(current2);
      if (isNearBottomResult) {
        const _Math2 = Math;
        obj2.offsetY = Math.max(0, contentHeight - current2.viewportHeight);
        tmp13 = obj2;
      } else {
        tmp13 = obj2;
      }
      tmp12.current = tmp13;
      if (ref.current) {
        tmp14.current = false;
        const current3 = ref.current;
        if (current3 != null) {
          current3.scrollToEnd({ animated: true });
        }
      }
      callback13();
    }
  }, items49);
  const items50 = [callback13];
  const memo7 = obj3.useMemo(() => {
    const obj = { itemVisiblePercentThreshold: projectId(dependencyMap[39]).MIN_VISIBLE_PERCENT };
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
  }, items50);
  if (stateFromStores5) {
    const intl3 = tmp2(1125).intl;
    memo6 = intl3.string(tmp5(3864).mKK6wB);
  } else if (stateFromStores4) {
    const intl2 = tmp2(1125).intl;
    memo6 = intl2.string(tmp5(3864).xnCAaP);
  } else if (memo6 == null) {
    let intl = tmp2(1125).intl;
    memo6 = intl.string(tmp5(3864).L9EDub);
  }
  const items51 = [memo, memo4];
  let tmp102;
  const memo8 = obj3.useMemo(() => {
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
  }, items51);
  if (null != memo4) {
    tmp102 = memo[memo4];
  }
  let checklistLiveResult = null == tmp102;
  if (!checklistLiveResult) {
    const tmp2Result23 = tmp2(12399);
    checklistLiveResult = tmp2Result23.checklistLive(tmp102);
  }
  let conjureTurnStartedAtResult;
  if (null != tmp102) {
    const tmp2Result24 = tmp2(12413);
    conjureTurnStartedAtResult = tmp2Result24.conjureTurnStartedAt(tmp102);
  }
  const items52 = [memo5];
  let tmp106;
  const memo9 = obj3.useMemo(() => {
    let runningTodoAgentsResult;
    if (null != memo5) {
      const obj = ConjureTodoAgents;
      runningTodoAgentsResult = obj.runningTodoAgents(tmp.tasks);
    } else {
      runningTodoAgentsResult = [];
    }
    return runningTodoAgentsResult;
  }, items52);
  if (null != memo4) {
    let render_id2;
    if (memo[memo4] != null) {
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
    if (tmp56) {
      tmp111 = null;
      if (tmp109) {
        tmp111 = memo6;
      }
    }
  }
  const items53 = [bound, memo4, callback13];
  const effect5 = obj3.useEffect(() => {
    ref11.current = memo4;
    ref12.current = bound;
    let closure_0 = requestAnimationFrame(callback13);
    return () => cancelAnimationFrame(closure_0);
  }, items53);
  const items54 = [memo];
  closure_68 = obj3.useMemo(() => {
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
  }, items54);
  const items55 = [memo];
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
  }, items55);
  const items56 = [bound, memo4];
  const callback17 = obj3.useCallback(() => {
    if (null != memo4) {
      ref2.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items56);
  const callback18 = obj3.useCallback(() => {
    const current = closure_42.current;
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
  closure_72 = obj3.useCallback((arg0) => {
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
  const items57 = [num];
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
  }, items57);
  const items58 = [projectId];
  const items59 = [projectId];
  const callback19 = obj3.useCallback((arg0, arg1) => {
    ref.current = true;
    authStore(projectId, arg0, arg1);
  }, items58);
  let connectionLabelResult = null;
  const callback20 = obj3.useCallback(() => {
    metroImportAll(projectId);
  }, items59);
  if ("open" !== stateFromStores8) {
    const tmp2Result25 = tmp2(12416);
    connectionLabelResult = tmp2Result25.connectionLabel(stateFromStores8);
  }
  const obj6 = { style: tmp.container, children: null };
  const tmp2Result26 = tmp2(10875);
  const conjureControlActive = tmp2Result26.useConjureControlActive(projectId);
  const items60 = [c15(tmp5(12417), { thinking: stateFromStores3, bleedBottom: bottom }), , ];
  const obj13 = { style: tmp.transcriptArea, children: items64 };
  if (first1) {
    const obj14 = { clearance: tmp61, children: c15(FlashList, obj15) };
    obj15 = {
      ref,
      fadingEdgeLength,
      removeClippedSubviews: tmp2Result27.isIOS() && undefined,
      viewabilityConfig: memo7,
      onViewableItemsChanged: callback16,
      onScroll: callback14,
      onLayout: callback9,
      onScrollBeginDrag: callback12,
      onContentSizeChange: callback15,
      onStartReached: callback11,
      scrollEventThrottle: 16,
      keyboardShouldPersistTaps: "handled",
      contentInset: tmp127,
      ListHeaderComponent: tmp122Result,
      style: items61,
      contentContainerStyle: items62,
      data: memo,
      extraData: memo3,
      maintainVisibleContentPosition: obj22,
      keyExtractor(render_id) {
          return render_id.render_id;
        },
      ListFooterComponent: closure_17(tmp132, obj24),
      ListEmptyComponent: tmp122Result10,
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
          let tmp21;
          let tmp23;
          ({ item, index } = arg0);
          const obj = { projectId, message: item, groupStart: flag, first: 0 === index, isNewest: item.render_id === render_id, checklistSuperseded: set.has(item.render_id), secretRequestStatus: str, checklistExpanded: obj3.conjureCardExpanded(c14, item.render_id, obj2.has(item.render_id)), onToggleChecklist, planVersion: version, planSuperseded: true === superseded, planExpanded: conjureCardExpanded(tmp10, render_id, true === superseded1), onTogglePlan, replied: closure_68.get(item.render_id), onJumpToReplied, onApprovePlan: tmp14, onPickIdea: tmp16, onAnswerClarification: tmp17, clarificationDismissed: tmp18, onDismissClarification, onCardInputFocusChange: tmp20, canSend, appBuildRequestDismissed: tmp21, onDismissAppBuildRequest, onRestoreVersion: tmp23 };
          flag = closure_21[index];
          const tmp = closure_15;
          const tmp3 = ConjureMessageRowDefault;
          if (flag == null) {
            flag = true;
          }
          str = memo1.get(item.render_id);
          obj2 = set;
          if (str == null) {
            str = "open";
          }
          obj3 = conjureCardOverrides;
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
          conjureCardExpanded = conjureCardOverrides.conjureCardExpanded;
          render_id = item.render_id;
          conjureCardOverrides;
          const value4 = obj4.get(item.render_id);
          superseded1 = undefined;
          tmp10 = c18;
          if (value4 != null) {
            superseded1 = value4.superseded;
          }
          tmp14 = undefined;
          if (canSend) {
            if (item.render_id === memo2) {
              tmp14 = closure_22;
            }
          }
          tmp16 = undefined;
          if (canSend) {
            tmp16 = closure_23;
          }
          tmp17 = undefined;
          if (canSend) {
            tmp17 = closure_24;
          }
          tmp20 = undefined;
          tmp18 = null != item.clarification && item.clarification.id === c25;
          const tmp4Result2 = PlatformUtils;
          if (!tmp4Result2.isIOS()) {
            tmp20 = closure_72;
          }
          tmp23 = undefined;
          tmp21 = null != item.appBuildRequest && item.appBuildRequest.id === first;
          if (!stateFromStores3) {
            tmp23 = dependencyMap;
          }
          return tmp(tmp3, obj);
        }
    };
    FlashList = tmp2(7280).FlashList;
    tmp2Result27 = tmp2(1381);
    tmp2Result27.isIOS() && undefined;
    tmp127 = undefined;
    const tmp124 = c25;
    const tmp2Result28 = tmp2(1381);
    if (tmp2Result28.isIOS()) {
      tmp127 = { top: num };
      const obj16 = { top: num };
    }
    tmp122Result = null;
    const tmp2Result29 = tmp2(1381);
    if (!tmp2Result29.isIOS()) {
      tmp122Result = null;
      if (num > 0) {
        const obj17 = { style: obj18 };
        obj18 = { height: num };
        tmp122Result = tmp122(tmp121, obj17);
      }
    }
    items61 = [tmp.transcript, , ];
    const tmp2Result30 = tmp2(1381);
    let tmp130 = !tmp2Result30.isIOS();
    tmp2Result30.isIOS();
    if (tmp130) {
      tmp130 = { marginBottom: tmp61 - bound };
      const obj19 = { marginBottom: tmp61 - bound };
    }
    items61[1] = tmp130;
    items61[2] = !tmp69 && tmp.transcriptHidden;
    items62 = [tmp.transcriptContent, ];
    items62[1] = { paddingBottom: bound + tmp5(587).space.PX_8 };
    let AUTOSCROLL_THRESHOLD;
    const obj20 = { paddingBottom: bound + tmp5(587).space.PX_8 };
    if (!tmp87) {
      AUTOSCROLL_THRESHOLD = tmp2(12411).AUTOSCROLL_THRESHOLD;
    }
    const obj23 = { projectId, messages: memo, draftHasText: tmp40, onAskForIdeas: tmp134, onShow: callback18 };
    tmp134 = undefined;
    obj22 = { startRenderingFromBottom: true, autoscrollToBottomThreshold: AUTOSCROLL_THRESHOLD };
    tmp132 = onToggleChecklist;
    const tmp5Result = tmp5(12420);
    if (tmp50) {
      tmp134 = callback1;
    }
    obj24 = { children: items63 };
    items63 = [c15(tmp5Result, obj23), ];
    const obj25 = { projectId };
    items63[1] = c15(tmp2(12278).ConjureHostApprovalCards, obj25);
    tmp122Result10 = null;
    if ("loading" !== chatEmptyStateResult) {
      let AyiQEp;
      const obj26 = { style: tmp.placeholder, children: c15(Text, obj27) };
      Text = tmp2(5271).Text;
      const intl4 = tmp2(1125).intl;
      const string = intl4.string;
      if ("unavailable" === chatEmptyStateResult) {
        AyiQEp = tmp5(3864).Td4Sf4;
      } else {
        AyiQEp = tmp5(3864).AyiQEp;
      }
      obj27 = { variant: "text-sm/normal", color: "text-muted", children: string(AyiQEp) };
      tmp122Result10 = tmp122(tmp121, obj26);
    }
    tmp122Result11 = tmp122(tmp124, obj14);
  } else {
    const obj28 = { style: tmp.transcript };
    tmp122Result11 = tmp122(tmp121, obj28);
  }
  items64 = [tmp122Result11, , ];
  let tmp122Result12 = null;
  if (tmp27) {
    const obj29 = { projectId };
    tmp122Result12 = tmp122(tmp5(12592), obj29);
  }
  items64[1] = tmp122Result12;
  let tmp122Result13 = null;
  if (null != tmp111) {
    const obj30 = { line: tmp111, onJumpToActivity: callback17, bottom: tmp5(587).space.PX_12 + tmp61, todos: memo8, todosLive: checklistLiveResult, agents: memo9 };
    const tmp5Result4 = tmp5(12593);
    tmp122Result13 = tmp122(tmp5Result4, obj30);
  }
  items64[2] = tmp122Result13;
  items60[1] = closure_17(stateFromStores2, obj13);
  const obj31 = { style: tmp.bottomStack, onLayout: callback3, children: null };
  const obj32 = { projectId, thinking: stateFromStores3, turnStartedAt: conjureTurnStartedAtResult, remixStartedAt: conjureRemixStartedAt, compacting: stateFromStores4, saving: stateFromStores5, recalling: tmp140, activity: stateFromStores6, projectUsage: stateFromStores7, connLabel: connectionLabelResult, controlling: conjureControlActive, connFailed: "failed" === stateFromStores8, thinkingOpen: tmp27, onToggleThinking: callback };
  tmp140 = "loading" === chatEmptyStateResult;
  const tmp5Result5 = tmp5(12596);
  if (tmp140) {
    tmp140 = 0 === memo.length;
  }
  const items65 = [c15(tmp5Result5, obj32), , ];
  if (null == tmp8) {
    if (null == tmp6) {
      if (null == tmp7) {
        let tmp122Result14 = null;
        const obj33 = { style: notices, children: items66 };
        if (null != tmp8) {
          const obj34 = { style: tmp.notice, children: c15(tmp2(8011).InlineNotice, obj35) };
          obj35 = { type: "critical", role: "alert", message: tmp8.message, action: obj36 };
          obj36 = { text: tmp8.retry.text, onPress: tmp8.retry.onClick };
          tmp122Result14 = tmp122(tmp121, obj34);
        }
        items66 = [tmp122Result14, , , , ];
        let tmp122Result15 = null;
        if (null != tmp6) {
          const obj37 = { style: tmp.notice, children: c15(tmp2(8011).InlineNotice, obj38) };
          obj38 = { type: "warning", role: "status", message: null, onDismiss: null };
          ({ message: obj55.message, onDismiss: obj55.onDismiss } = tmp6);
          tmp122Result15 = tmp122(tmp121, obj37);
        }
        items66[1] = tmp122Result15;
        let tmp122Result16 = null;
        if (null != tmp7) {
          let str3 = "warning";
          const obj39 = { style: tmp.notice, children: c15(InlineNotice, obj40) };
          InlineNotice = tmp2(8011).InlineNotice;
          if (tmp7.blocked) {
            str3 = "critical";
          }
          obj40 = { type: str3, role: str4, message: tmp7.message };
          str4 = "status";
          if (tmp7.blocked) {
            str4 = "alert";
          }
          tmp122Result16 = tmp122(tmp121, obj39);
        }
        items66[2] = tmp122Result16;
        let tmp122Result17 = null;
        if (null != tmp46.request) {
          const obj41 = { style: tmp.notice, children: c15(tmp5(12578), obj42, tmp46.request.id) };
          obj42 = { projectId, request: tmp46.request, canSend: tmp50, onDismiss: tmp46.close, onSent: callback2 };
          tmp122Result17 = tmp122(tmp121, obj41);
        }
        items66[3] = tmp122Result17;
        let tmp122Result18 = null;
        if (conjureScopeSetupPending) {
          const obj43 = { style: tmp.notice, children: c15(tmp5(12605), obj44) };
          obj44 = { projectId };
          tmp122Result18 = tmp122(tmp121, obj43);
        }
        items66[4] = tmp122Result18;
        items65[1] = closure_17(stateFromStores2, obj33);
        const obj45 = { projectId, canSend: tmp50, inputLocked: conjureScopeSetupPending, aiPaused: true === blocked, running: stateFromStores3, onSend: callback19, onInterrupt: tmp148, onDraftHasTextChange: tmp41, hidden, onSendToOtherProjects: open };
        blocked = undefined;
        const tmp5Result6 = tmp5(12606);
        if (tmp7 != null) {
          blocked = tmp7.blocked;
        }
        tmp148 = undefined;
        if (stateFromStores3) {
          tmp148 = callback20;
        }
        open = undefined;
        if (null == tmp46.request) {
          open = tmp46.open;
        }
        items65[2] = c15(tmp5Result6, obj45, conjureHeldPrompt);
        obj31.children = items65;
        items60[2] = closure_17(stateFromStores2, obj31);
        obj6.children = items60;
        return closure_17(stateFromStores2, obj6);
      }
    }
  }
  notices = tmp.notices;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function TranscriptFade(children) {
  let obj6;
  let transcript;
  let transcript2;
  const obj = react2;
  const cResult = obj.c(15);
  children = children.children;
  const clearance = children.clearance;
  const tmp3 = closure_24();
  const obj2 = PlatformUtils;
  if (obj2.isIOS()) {
    let tmp4;
    let tmp8;
    let tmp19;
    ({ transcript, transcript: transcript2 } = tmp3);
    if (cResult[0] !== tmp3.maskSolid) {
      const obj3 = { style: tmp3.maskSolid };
      const tmp7 = closure_15(View, obj3);
      cResult[0] = tmp3.maskSolid;
      cResult[1] = tmp7;
      tmp4 = tmp7;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] !== tmp3.maskFade) {
      const obj4 = { style: tmp3.maskFade, colors: items, locations, start, end };
      const tmp15 = closure_15(LinearGradientDefault, obj4);
      cResult[2] = tmp3.maskFade;
      cResult[3] = tmp15;
      tmp8 = tmp15;
    } else {
      tmp8 = cResult[3];
    }
    const _Math = Math;
    const bound = Math.max(0, clearance - c19);
    if (cResult[4] !== bound) {
      const obj5 = { style: obj6 };
      obj6 = { height: bound };
      const tmp22 = closure_15(View, obj5);
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
          const tmp30 = closure_15(_modDef7026, obj7);
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
    const tmp26 = closure_17(View, obj8);
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
  const tmp = closure_24();
  let tmp3 = children;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const obj2 = { style: tmp.transcript, maskElement: closure_17(View, obj3), children };
    obj3 = { style: tmp.transcript, children: items };
    items = [, , ];
    const obj4 = { style: tmp.maskSolid };
    const tmp6 = _modDef7026;
    items[0] = closure_15(View, obj4);
    const obj5 = { style: tmp.maskFade, colors: items, locations, start, end };
    items[1] = closure_15(LinearGradientDefault, obj5);
    const obj6 = { style: obj7 };
    const _Math = Math;
    obj7 = { height: Math.max(0, clearance - c19) };
    items[2] = closure_15(View, obj6);
    tmp3 = closure_15(tmp6, obj2);
  }
  return tmp3;
});
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeChat.tsx");

export default tmp5;
