// Module ID: 11786
// Function ID: 11787
// Name: ConjureNativeChat
// Dependencies: [32, 19, 17, 1999, 11215, 11230, 11232, 11216, 21, 587, 683, 5092, 558, 576, 504, 11787, 11788, 1631, 11208, 11789, 11790, 11217, 11791, 11793, 11794, 11795, 11796, 1126, 3849, 11797, 11799, 11792, 1382, 11801, 11802, 11803, 11804, 11805, 11248, 11806, 5088, 11809, 8625, 11937, 11938, 11941, 7571, 11950, 5391, 6243, 2]

// Module 11786 (ConjureNativeChat)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import intl5 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import _modDef3849 from "module_3849" /* 3849 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import _modDef6243 from "module_6243" /* 6243 */;
import conjureChatTurns from "conjureChatTurns" /* 11217 */;
import conjurePublishCard from "conjurePublishCard" /* 11789 */;
import ConjureTodoState from "ConjureTodoState" /* 11791 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 11792 */;
import ConjureSecretRequestState from "ConjureSecretRequestState" /* 11793 */;
import conjurePendingPlan from "conjurePendingPlan" /* 11794 */;
import ConjureChatGrouping from "ConjureChatGrouping" /* 11795 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 11796 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 11803 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 11804 */;
import ConjureMessageRowDefault from "ConjureMessageRow" /* 11809 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 1999 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 11215 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 11230 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 11232 */;
import ConjureChatStore from "ConjureChatStore" /* 11216 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let autoscrollToBottomThreshold, fadingEdgeLength, map, nativeEvent, set, viewableItems;

let c10;
let c9;
let closure_15;
let closure_16;
let metroImportAll;
let metroImportDefault;
let obj3;
let obj4;
let obj5;
let _slicedToArray = _slicedToArray_mod;
let View = react_native.View;
let ConjureConnectionStore = ConjureConnectionStore_mod;
({ ensureConnection: metroImportDefault, interruptTurn: metroImportAll, loadOlderHistory: c9, sendUserMessage: c10 } = ConjureConnectionStore);
ConjureConnectionStore = ConjureConnectionStore_mod;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let c17 = 0.2;
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
let obj2 = { container: { flex: 1 }, transcript: { flex: 1 }, maskSolid: { flex: 1, backgroundColor: BLACK }, maskFade: { height: 52 }, transcriptArea: { flex: 1, position: "relative" }, transcriptContent: obj3, bottomStack: { position: "absolute", left: 0, right: 0, bottom: 0 }, notice: obj4, placeholder: obj5 };
obj3 = { paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj4 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingBottom: nativeDefault.space.PX_8 };
obj5 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
let closure_24 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeChat(projectId) {
  let closure_3;
  let closure_5;
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
  let stateFromStores9;
  let tmp10;
  let tmp36;
  let tmp76;
  let tmp77;
  let tmp8;
  let tmp9;
  let transcriptTopInset;
  let tmp = projectId;
  const tmp2 = projectId;
  let tmp3 = stateFromStores;
  let tmp4 = stateFromStores;
  let obj = projectId(stateFromStores[13]);
  const cResult = obj.c(259);
  projectId = projectId.projectId;
  ({ transcriptTopInset, onRestoreVersion } = projectId);
  const hidden = projectId.hidden;
  closure_24();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp11 = stateFromStores9;
    items = [stateFromStores9];
    const fn = function w() {
      return "active" === stateFromStores9.getState();
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
  const tmp2Result = tmp2(tmp4[14]);
  stateFromStores = tmp2Result.useStateFromStores(tmp8, tmp9, tmp10);
  onRestoreVersion(tmp4[15])(projectId);
  onRestoreVersion(tmp4[16])(projectId);
  const tmp2Result15 = tmp2(tmp4[16]);
  const conjureRemixStartedAt = tmp2Result15.useConjureRemixStartedAt(projectId);
  const bottom = onRestoreVersion(tmp4[17])().bottom;
  if (cResult[3] === stateFromStores) {
    let tmp16;
    let tmp17;
    let tmp22;
    let tmp25;
    let tmp24;
    let tmp29;
    let tmp31;
    let tmp30;
    if (cResult[4] === projectId) {
      tmp16 = cResult[5];
      tmp17 = cResult[6];
    }
    const obj4 = stateFromStores3;
    const effect = stateFromStores3.useEffect(tmp16, tmp17);
    let tmp19 = tmp;
    const tmp2Result16 = tmp2(tmp4[18]);
    const ackConjureProjectWhileViewing = tmp2Result16.useAckConjureProjectWhileViewing(projectId);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ConjureChatStore];
      cResult[7] = items2;
      tmp22 = items2;
    } else {
      tmp22 = cResult[7];
    }
    if (cResult[8] !== projectId) {
      class U {
        constructor() {
          return ConjureChatStore.getMessages(projectId);
        }
      }
      const items3 = [projectId];
      cResult[8] = projectId;
      cResult[9] = items3;
      cResult[10] = U;
      tmp25 = U;
      tmp24 = items3;
    } else {
      class U {
        constructor() {
          return ConjureChatStore.getMessages(projectId);
        }
      }
      tmp25 = cResult[10];
    }
    const tmp2Result17 = tmp2(tmp4[14]);
    const stateFromStores1 = tmp2Result17.useStateFromStores(tmp22, tmp25, tmp24);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class U {
        constructor() {
          return ConjureChatStore.getMessages(projectId);
        }
      }
      const items4 = [ConjurePublishStatusStore];
      cResult[11] = items4;
      tmp29 = items4;
    } else {
      class U {
        constructor() {
          return ConjureChatStore.getMessages(projectId);
        }
      }
    }
    if (cResult[12] !== projectId) {
      class U {
        constructor() {
          return ConjureChatStore.getMessages(projectId);
        }
      }
      const items5 = [projectId];
      cResult[12] = projectId;
      cResult[13] = tmp32;
      cResult[14] = items5;
      tmp31 = items5;
      tmp30 = tmp32;
    } else {
      class U {
        constructor() {
          return ConjureChatStore.getMessages(projectId);
        }
      }
      tmp31 = cResult[14];
    }
    const tmp2Result18 = tmp2(tmp4[14]);
    const stateFromStores2 = tmp2Result18.useStateFromStores(tmp29, tmp30, tmp31);
    if (cResult[15] === stateFromStores1) {
      let tmp40;
      let tmp42;
      let tmp41;
      let tmp47;
      let tmp49;
      let tmp48;
      let tmp54;
      let tmp56;
      let tmp55;
      let tmp61;
      let tmp63;
      let tmp62;
      let tmp68;
      let tmp70;
      let tmp69;
      let tmp83;
      let tmp85;
      let tmp84;
      let tmp90;
      let tmp92;
      let tmp91;
      let tmp96;
      let tmp98;
      let tmp97;
      class U {
        constructor() {
          return ConjureChatStore.getMessages(projectId);
        }
      }
      _slicedToArray = tmp36;
      const _Symbol3 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
        const items6 = [ConjureChatStore];
        cResult[18] = items6;
        tmp40 = items6;
      } else {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
      }
      if (cResult[19] !== projectId) {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
        const items7 = [projectId];
        cResult[19] = projectId;
        cResult[20] = tmp43;
        cResult[21] = items7;
        tmp42 = items7;
        tmp41 = tmp43;
      } else {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
        tmp42 = cResult[21];
      }
      const tmp2Result19 = tmp2(tmp4[14]);
      stateFromStores3 = tmp2Result19.useStateFromStores(tmp40, tmp41, tmp42);
      const _Symbol4 = Symbol;
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
        const items8 = [ConjureChatStore];
        cResult[22] = items8;
        tmp47 = items8;
      } else {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
      }
      if (cResult[23] !== projectId) {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
        const items9 = [projectId];
        cResult[23] = projectId;
        cResult[24] = tmp50;
        cResult[25] = items9;
        tmp49 = items9;
        tmp48 = tmp50;
      } else {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
        tmp49 = cResult[25];
      }
      const tmp2Result20 = tmp2(tmp4[14]);
      const stateFromStores4 = tmp2Result20.useStateFromStores(tmp47, tmp48, tmp49);
      const _Symbol5 = Symbol;
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
        const items10 = [ConjureChatStore];
        cResult[26] = items10;
        tmp54 = items10;
      } else {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
      }
      if (cResult[27] !== projectId) {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
        const items11 = [projectId];
        cResult[27] = projectId;
        cResult[28] = tmp57;
        cResult[29] = items11;
        tmp56 = items11;
        tmp55 = tmp57;
      } else {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
        tmp56 = cResult[29];
      }
      const tmp2Result21 = tmp2(tmp4[14]);
      const stateFromStores5 = tmp2Result21.useStateFromStores(tmp54, tmp55, tmp56);
      const _Symbol6 = Symbol;
      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
        const items12 = [ConjureChatStore];
        cResult[30] = items12;
        tmp61 = items12;
      } else {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
      }
      if (cResult[31] !== projectId) {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
        const items13 = [projectId];
        cResult[31] = projectId;
        cResult[32] = tmp64;
        cResult[33] = items13;
        tmp63 = items13;
        tmp62 = tmp64;
      } else {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
        tmp63 = cResult[33];
      }
      const tmp2Result22 = tmp2(tmp4[14]);
      const stateFromStores6 = tmp2Result22.useStateFromStores(tmp61, tmp62, tmp63);
      const _Symbol7 = Symbol;
      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
        const items14 = [ConjureChatStore];
        cResult[34] = items14;
        tmp68 = items14;
      } else {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
      }
      if (cResult[35] !== projectId) {
        class Se {
          constructor() {
            return ConjureChatStore.getProjectUsage(projectId);
          }
        }
        const items15 = [projectId];
        cResult[35] = projectId;
        cResult[36] = Se;
        cResult[37] = items15;
        tmp70 = items15;
        tmp69 = Se;
      } else {
        class Se {
          constructor() {
            return ConjureChatStore.getProjectUsage(projectId);
          }
        }
        tmp70 = cResult[37];
      }
      class O {
        constructor() {
          const tmp = stateFromStores;
          if (tmp) {
            metroImportDefault(projectId);
          }
        }
      }
      const tmp2Result23 = tmp2(tmp4[14]);
      const stateFromStores7 = tmp2Result23.useStateFromStores(tmp68, tmp69, tmp70);
      [tmp76, tmp77] = obj4.useState(null);
      View = tmp77;
      let tmp78 = null == tmp76;
      _slicedToArray(obj4.useState(null), 2);
      if (!tmp78) {
        class Se {
          constructor() {
            return ConjureChatStore.getProjectUsage(projectId);
          }
        }
        tmp78 = tmp79;
      }
      if (!tmp78) {
        class Se {
          constructor() {
            return ConjureChatStore.getProjectUsage(projectId);
          }
        }
      }
      if (cResult[38] !== projectId) {
        class Se {
          constructor() {
            return ConjureChatStore.getProjectUsage(projectId);
          }
        }
        cResult[38] = projectId;
        cResult[39] = tmp81;
      } else {
        class Se {
          constructor() {
            return ConjureChatStore.getProjectUsage(projectId);
          }
        }
      }
      const _Symbol8 = Symbol;
      if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
        class Se {
          constructor() {
            return ConjureChatStore.getProjectUsage(projectId);
          }
        }
        const items16 = [ConjureConnectionStore];
        cResult[40] = items16;
        tmp83 = items16;
      } else {
        class Se {
          constructor() {
            return ConjureChatStore.getProjectUsage(projectId);
          }
        }
      }
      if (cResult[41] !== projectId) {
        class Se {
          constructor() {
            return ConjureChatStore.getProjectUsage(projectId);
          }
        }
        const items17 = [projectId];
        cResult[41] = projectId;
        cResult[42] = tmp86;
        cResult[43] = items17;
        tmp85 = items17;
        tmp84 = tmp86;
      } else {
        class Se {
          constructor() {
            return ConjureChatStore.getProjectUsage(projectId);
          }
        }
        tmp85 = cResult[43];
      }
      const tmp2Result24 = tmp2(tmp4[14]);
      const stateFromStores8 = tmp2Result24.useStateFromStores(tmp83, tmp84, tmp85);
      const _Symbol9 = Symbol;
      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
        class Se {
          constructor() {
            return ConjureChatStore.getProjectUsage(projectId);
          }
        }
        const items18 = [ConjureChatStore];
        cResult[44] = items18;
        tmp90 = items18;
      } else {
        class Se {
          constructor() {
            return ConjureChatStore.getProjectUsage(projectId);
          }
        }
      }
      if (cResult[45] !== projectId) {
        class Pe {
          constructor() {
            return ConjureChatStore.hasLoadedHistory(projectId);
          }
        }
        const items19 = [projectId];
        cResult[45] = projectId;
        cResult[46] = Pe;
        cResult[47] = items19;
        tmp92 = items19;
        tmp91 = Pe;
      } else {
        class Pe {
          constructor() {
            return ConjureChatStore.hasLoadedHistory(projectId);
          }
        }
        tmp92 = cResult[47];
      }
      const tmp2Result25 = tmp2(tmp4[14]);
      stateFromStores9 = tmp2Result25.useStateFromStores(tmp90, tmp91, tmp92);
      const _Symbol10 = Symbol;
      if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
        class Pe {
          constructor() {
            return ConjureChatStore.hasLoadedHistory(projectId);
          }
        }
        const items20 = [ConjureChatStore];
        cResult[48] = items20;
        tmp96 = items20;
      } else {
        class Pe {
          constructor() {
            return ConjureChatStore.hasLoadedHistory(projectId);
          }
        }
      }
      if (cResult[49] !== projectId) {
        class He {
          constructor() {
            return ConjureChatStore.isHistoryUnavailable(projectId);
          }
        }
        const items21 = [projectId];
        cResult[49] = projectId;
        cResult[50] = He;
        cResult[51] = items21;
        tmp98 = items21;
        tmp97 = He;
      } else {
        class He {
          constructor() {
            return ConjureChatStore.isHistoryUnavailable(projectId);
          }
        }
        tmp98 = cResult[51];
      }
      const tmp2Result26 = tmp2(tmp4[14]);
      const stateFromStores10 = tmp2Result26.useStateFromStores(tmp96, tmp97, tmp98);
      if (cResult[52] === stateFromStores8) {
        class He {
          constructor() {
            return ConjureChatStore.isHistoryUnavailable(projectId);
          }
        }
      }
      let obj2 = { historyLoaded: stateFromStores9, historyUnavailable: stateFromStores10, connState: stateFromStores8 };
      const tmp2Result27 = tmp2(tmp4[20]);
      cResult[52] = stateFromStores8;
      cResult[53] = stateFromStores9;
      cResult[54] = stateFromStores10;
      cResult[55] = tmp2Result27.chatEmptyState(obj2);
      const chatEmptyStateResult = tmp2Result27.chatEmptyState(obj2);
    }
    const tmp2Result28 = tmp2(tmp4[19]);
    const withLivePublishCardResult = tmp2Result28.withLivePublishCard(stateFromStores1, stateFromStores2);
    cResult[15] = stateFromStores1;
    cResult[16] = stateFromStores2;
    cResult[17] = withLivePublishCardResult;
    tmp36 = withLivePublishCardResult;
  }
  class O {
    constructor() {
      const tmp = stateFromStores;
      if (tmp) {
        metroImportDefault(projectId);
      }
    }
  }
  const items22 = [stateFromStores, projectId];
  cResult[3] = stateFromStores;
  cResult[4] = projectId;
  cResult[5] = O;
  cResult[6] = items22;
  tmp17 = items22;
  tmp16 = O;
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
  let c19;
  let c27;
  let c28;
  let c34;
  let c35;
  let c45;
  let closure_17;
  let hidden;
  let items53;
  let items54;
  let items55;
  let items56;
  let items57;
  let obj15;
  let obj18;
  let obj19;
  let obj22;
  let obj24;
  let obj30;
  let obj32;
  let onDismissClarification;
  let tmp109;
  let tmp21;
  let tmp22;
  let tmp2Result25;
  let tmp40;
  let tmp41;
  let tmp56;
  let tmp68;
  let tmp93Result;
  let tmp93Result6;
  let tmp96;
  const f110647 = () => {
    map = new Map();
    return map;
  };
  const f110650 = () => {
    map = new Map();
    return map;
  };
  projectId = projectId.projectId;
  let num = projectId.transcriptTopInset;
  if (num === undefined) {
    num = 0;
  }
  ({ onRestoreVersion: importDefault, hidden } = projectId);
  if (hidden === undefined) {
    hidden = false;
  }
  let stateFromStores;
  let stateFromStores2;
  let stateFromStores3;
  let stateFromStores9;
  let render_id;
  let render_id1;
  set = undefined;
  let stateFromStores11;
  let memo1;
  c14 = undefined;
  c15 = undefined;
  let onToggleChecklist;
  autoscrollToBottomThreshold = undefined;
  c18 = undefined;
  fadingEdgeLength = undefined;
  let onTogglePlan;
  let closure_21;
  let closure_22;
  let onPickIdea;
  let conjureReminder;
  closure_25 = undefined;
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
  let tmp = conjureReminder();
  let tmp2 = projectId;
  let tmp3 = stateFromStores;
  let obj = projectId(stateFromStores[14]);
  items = [stateFromStores3];
  stateFromStores = obj.useStateFromStores(items, () => "active" === stateFromStores3.getState(), []);
  let tmp5 = importDefault;
  let tmp6 = require("useConjureIncompleteAppNotice")(projectId);
  let tmp7 = require("useConjureRemixNotice")(projectId);
  let obj2 = projectId(stateFromStores[16]);
  const conjureRemixStartedAt = obj2.useConjureRemixStartedAt(projectId);
  let obj3 = stateFromStores2;
  const items1 = [stateFromStores, projectId];
  const bottom = require("useSafeAreaInsets")().bottom;
  const effect = stateFromStores2.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      metroImportDefault(projectId);
    }
  }, items1);
  const obj4 = projectId(stateFromStores[18]);
  const ackConjureProjectWhileViewing = obj4.useAckConjureProjectWhileViewing(projectId);
  let tmp11 = c14;
  const items2 = [c14];
  const items3 = [projectId];
  const obj5 = projectId(stateFromStores[14]);
  const stateFromStores1 = obj5.useStateFromStores(items2, () => ConjureChatStore.getMessages(projectId), items3);
  const items4 = [stateFromStores11];
  const items5 = [projectId];
  const obj6 = projectId(stateFromStores[14]);
  stateFromStores2 = obj6.useStateFromStores(items4, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
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
  const items7 = [c14];
  const items8 = [projectId];
  const obj7 = projectId(stateFromStores[14]);
  stateFromStores3 = obj7.useStateFromStores(items7, () => ConjureChatStore.isThinking(projectId), items8);
  const items9 = [c14];
  const items10 = [projectId];
  const obj8 = projectId(stateFromStores[14]);
  const stateFromStores4 = obj8.useStateFromStores(items9, () => ConjureChatStore.isCompacting(projectId), items10);
  const items11 = [c14];
  const items12 = [projectId];
  const obj9 = projectId(stateFromStores[14]);
  const stateFromStores5 = obj9.useStateFromStores(items11, () => ConjureChatStore.isSaving(projectId), items12);
  const items13 = [c14];
  const items14 = [projectId];
  const obj10 = projectId(stateFromStores[14]);
  const stateFromStores6 = obj10.useStateFromStores(items13, () => ConjureChatStore.getThinkingActivity(projectId), items14);
  const items15 = [c14];
  const items16 = [projectId];
  const obj11 = projectId(stateFromStores[14]);
  const stateFromStores7 = obj11.useStateFromStores(items15, () => ConjureChatStore.getProjectUsage(projectId), items16);
  let tmp19 = stateFromStores1;
  [tmp21, tmp22] = stateFromStores1(stateFromStores2.useState(null), 2);
  let c7 = tmp22;
  let tmp23 = null == tmp21;
  const tmp20 = stateFromStores1(stateFromStores2.useState(null), 2);
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
  const tmp2Result = tmp2(tmp3[14]);
  const stateFromStores8 = tmp2Result.useStateFromStores(items18, () => ConjureConnectionStore.getConnState(projectId), items19);
  const items20 = [tmp11];
  const items21 = [projectId];
  const tmp2Result15 = tmp2(tmp3[14]);
  stateFromStores9 = tmp2Result15.useStateFromStores(items20, () => ConjureChatStore.hasLoadedHistory(projectId), items21);
  const items22 = [tmp11];
  const items23 = [projectId];
  const tmp2Result16 = tmp2(tmp3[14]);
  const stateFromStores10 = tmp2Result16.useStateFromStores(items22, () => ConjureChatStore.isHistoryUnavailable(projectId), items23);
  const tmp2Result17 = tmp2(tmp3[20]);
  const chatEmptyStateResult = tmp2Result17.chatEmptyState({ historyLoaded: stateFromStores9, historyUnavailable: stateFromStores10, connState: stateFromStores8 });
  render_id = null;
  if (memo.length > 0) {
    render_id = memo[memo.length - 1].render_id;
  }
  const findLastResult = memo.findLast((role) => {
    let turnSettledResult = "assistant" === role.role;
    if (turnSettledResult) {
      const obj = projectId(stateFromStores[21]);
      turnSettledResult = obj.turnSettled(role);
    }
    return turnSettledResult;
  });
  render_id1 = undefined;
  if (findLastResult != null) {
    render_id1 = findLastResult.render_id;
  }
  if (render_id1 == null) {
    render_id1 = null;
  }
  const items24 = [memo];
  set = obj3.useMemo(() => {
    const obj = ConjureTodoState;
    return obj.supersededChecklists(memo);
  }, items24);
  const items25 = [memo1];
  const items26 = [projectId];
  const tmp2Result18 = tmp2(tmp3[14]);
  stateFromStores11 = tmp2Result18.useStateFromStores(items25, () => {
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
  [c14, c15] = tmp19(obj3.useState(f110647), 2);
  tmp19(obj3.useState(f110647), 2);
  onToggleChecklist = obj3.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined2((get) => {
      const obj = projectId(stateFromStores[22]);
      return obj.toggleChecklist(get, closure_0, closure_1);
    });
  }, []);
  const items28 = [memo];
  autoscrollToBottomThreshold = obj3.useMemo(() => {
    const obj = conjurePendingPlan;
    return obj.planVersions(memo);
  }, items28);
  [c18, c19] = tmp19(obj3.useState(f110650), 2);
  tmp19(obj3.useState(f110650), 2);
  onTogglePlan = obj3.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined3((get) => {
      const obj = projectId(stateFromStores[24]);
      return obj.togglePlanCard(get, closure_0, closure_1);
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
    sendConjureCardReply(projectId, intl.string(_modDef3849.EMgIuY));
  }, items30);
  const items31 = [projectId];
  onPickIdea = obj3.useCallback((implementation_prompt) => {
    const obj = conjureAttachmentDrafts;
    obj.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items31);
  [tmp40, tmp41] = tmp19(tmp5(tmp3[29])(projectId), 2);
  tmp19(tmp5(tmp3[29])(projectId), 2);
  const tmp2Result19 = tmp2(tmp3[30]);
  conjureReminder = tmp2Result19.useConjureReminder(projectId, memo, tmp40);
  const items32 = [projectId];
  closure_25 = obj3.useCallback(() => {
    const intl = intl5.intl;
    authStore(projectId, intl.string(_modDef3849["t5CN3+"]));
  }, items32);
  const items33 = [projectId];
  closure_26 = obj3.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
    const obj = conjureAttachmentDrafts;
    const obj2 = { clarificationAnswers, attachments };
    obj.sendConjureCardReply(projectId, implementation_prompt, obj2);
  }, items33);
  [c27, c28] = tmp19(obj3.useState(null), 2);
  let tmp45 = tmp44;
  tmp19(obj3.useState(null), 2);
  if (!tmp45) {
    let str = "connecting";
    tmp45 = "connecting" === stateFromStores8;
  }
  canSend = tmp45;
  const items34 = [memo];
  memo2 = obj3.useMemo(() => {
    const obj = conjurePendingPlan;
    return obj.pendingPlanRenderId(memo);
  }, items34);
  const arr = Array.from(memo1, (arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return "" + tmp + ":" + tmp2;
  });
  joined = arr.join(",");
  const items35 = [conjureReminder, tmp45, memo2, joined];
  const items36 = [memo];
  const memo3 = obj3.useMemo(() => ({ reminder: conjureReminder, canSend, pendingPlanId: memo2, secretStatusesKey: joined }), items35);
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
  }, items36);
  const items37 = [memo, memo4];
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
  }, items37);
  let tmp51 = null != memo5;
  if (tmp51) {
    tmp51 = memo5.steps.length > 0 || memo5.tasks.length > 0;
  }
  const items38 = [memo5];
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
  }, items38);
  [obj19, c34] = tmp19(obj3.useState(null), 2);
  tmp19(obj3.useState(null), 2);
  [tmp56, c35] = tmp19(obj3.useState(64), 2);
  tmp19(obj3.useState(64), 2);
  const callback1 = obj3.useCallback((nativeEvent) => {
    let closure_0 = Math.round(nativeEvent.nativeEvent.layout.height);
    let tmp = _undefined5((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  bound = tmp56;
  const tmp2Result20 = tmp2(tmp3[32]);
  if (!tmp2Result20.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp56, fadingEdgeLength);
  }
  obj3.useRef(null);
  ref = obj3.useRef(null);
  ref2 = obj3.useRef(false);
  ref3 = obj3.useRef(true);
  ref4 = obj3.useRef(0);
  ref5 = obj3.useRef(0);
  callback2 = obj3.useCallback(() => {
    const animationFrame = requestAnimationFrame(() => {
      if (ref2.current) {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd({ animated: false });
        }
      }
    });
  }, []);
  callback3 = obj3.useCallback(() => {
    const timestamp = Date.now();
    ref4.current = timestamp + c18;
    ref5.current = timestamp + 2000;
  }, []);
  const items39 = [projectId, callback3];
  const effect1 = obj3.useEffect(() => {
    ref3.current = true;
    callback3();
  }, items39);
  const items40 = [stateFromStores9, callback3];
  const effect2 = obj3.useEffect(() => {
    const tmp = stateFromStores9;
    if (tmp) {
      callback3();
    }
  }, items40);
  const items41 = [projectId];
  const callback4 = obj3.useCallback(() => {
    React4(projectId);
  }, items41);
  const callback5 = obj3.useCallback(() => {
    ref3.current = false;
  }, []);
  [tmp68, c45] = tmp19(obj3.useState(false), 2);
  tmp19(obj3.useState(false), 2);
  ref6 = obj3.useRef(null);
  ref7 = obj3.useRef(0);
  callback6 = obj3.useCallback(() => {
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
  const items42 = [callback6];
  const items43 = [callback2, callback6];
  const callback7 = obj3.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    ref.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
    callback6();
  }, items42);
  const callback8 = obj3.useCallback((arg0, contentHeight) => {
    const timestamp = Date.now();
    const current = ref3.current && timestamp < ref4.current;
    if (current) {
      const _Math = Math;
      ref4.current = Math.min(timestamp + c18, ref5.current);
      callback2();
    }
    const current2 = ref.current;
    if (null != current2) {
      let obj;
      if (current2.contentHeight - current2.offsetY - current2.viewportHeight <= c17 * current2.viewportHeight) {
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
  }, items43);
  const items44 = [callback6];
  const memo7 = obj3.useMemo(() => {
    const obj = { itemVisiblePercentThreshold: projectId(stateFromStores[33]).MIN_VISIBLE_PERCENT };
    return obj;
  }, []);
  const callback9 = obj3.useCallback((viewableItems) => {
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
  }, items44);
  if (stateFromStores5) {
    const intl3 = tmp2(tmp3[27]).intl;
    memo6 = intl3.string(tmp5(tmp3[28]).mKK6wB);
  } else if (stateFromStores4) {
    const intl2 = tmp2(tmp3[27]).intl;
    memo6 = intl2.string(tmp5(tmp3[28]).xnCAaP);
  } else if (memo6 == null) {
    let intl = tmp2(tmp3[27]).intl;
    memo6 = intl.string(tmp5(tmp3[28]).L9EDub);
  }
  const items45 = [memo, memo4];
  let tmp75;
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
  }, items45);
  if (null != memo4) {
    tmp75 = memo[memo4];
  }
  let checklistLiveResult = null == tmp75;
  if (!checklistLiveResult) {
    const tmp2Result21 = tmp2(tmp3[22]);
    checklistLiveResult = tmp2Result21.checklistLive(tmp75);
  }
  let conjureTurnStartedAtResult;
  if (null != tmp75) {
    const tmp2Result22 = tmp2(tmp3[34]);
    conjureTurnStartedAtResult = tmp2Result22.conjureTurnStartedAt(tmp75);
  }
  const items46 = [memo5];
  let tmp79;
  const memo9 = obj3.useMemo(() => {
    let runningTodoAgentsResult;
    if (null != memo5) {
      const obj = ConjureTodoAgents;
      runningTodoAgentsResult = obj.runningTodoAgents(tmp.tasks);
    } else {
      runningTodoAgentsResult = [];
    }
    return runningTodoAgentsResult;
  }, items46);
  if (null != memo4) {
    let render_id2;
    if (memo[memo4] != null) {
      render_id2 = tmp80.render_id;
    }
    tmp79 = render_id2;
  }
  let tmp82 = null != tmp79;
  if (tmp82) {
    tmp82 = null != obj19 && !obj19.has(tmp79) || tmp68;
    null != obj19 && !obj19.has(tmp79) || tmp68;
  }
  let tmp84 = null;
  if (stateFromStores3) {
    tmp84 = null;
    if (tmp51) {
      tmp84 = null;
      if (tmp82) {
        tmp84 = memo6;
      }
    }
  }
  const items47 = [bound, memo4, callback6];
  const effect3 = obj3.useEffect(() => {
    ref6.current = memo4;
    ref7.current = bound;
    let closure_0 = requestAnimationFrame(callback6);
    return () => cancelAnimationFrame(closure_0);
  }, items47);
  const items48 = [memo];
  closure_49 = obj3.useMemo(() => {
    map = new Map();
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if ("assistant" === nextResult.role) {
        if (null != tmp3.in_reply_to) {
          let obj2 = ConjureRepliedMessage;
          let repliedMessageResult = obj2.repliedMessage(memo, tmp3.in_reply_to);
          if (null != repliedMessageResult) {
            let result = map.set(tmp3.render_id, tmp10);
          }
        }
      }
      continue;
    }
    return map;
  }, items48);
  const items49 = [memo];
  onJumpToReplied = obj3.useCallback((arg0) => {
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
  }, items49);
  const items50 = [bound, memo4];
  const items51 = [projectId];
  const callback10 = obj3.useCallback(() => {
    if (null != memo4) {
      ref3.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items50);
  const items52 = [projectId];
  const callback11 = obj3.useCallback((arg0, arg1) => {
    ref2.current = true;
    authStore(projectId, arg0, arg1);
  }, items51);
  let connectionLabelResult = null;
  const callback12 = obj3.useCallback(() => {
    metroImportAll(projectId);
  }, items52);
  if ("open" !== stateFromStores8) {
    const tmp2Result23 = tmp2(tmp3[37]);
    connectionLabelResult = tmp2Result23.connectionLabel(stateFromStores8);
  }
  const obj12 = { style: tmp.container, children: items53 };
  const tmp2Result24 = tmp2(tmp3[38]);
  const conjureControlActive = tmp2Result24.useConjureControlActive(projectId);
  items53 = [c15(tmp5(tmp3[39]), { thinking: stateFromStores3, bleedBottom: bottom }), , ];
  const obj13 = { style: tmp.transcriptArea, children: items56 };
  const obj14 = { clearance: tmp56, children: c15(FlashList, obj15) };
  obj15 = {
    ref,
    fadingEdgeLength,
    removeClippedSubviews: tmp2Result25.isIOS() && undefined,
    viewabilityConfig: memo7,
    onViewableItemsChanged: callback9,
    onScroll: callback7,
    onScrollBeginDrag: callback5,
    onContentSizeChange: callback8,
    onStartReached: callback4,
    scrollEventThrottle: 16,
    contentInset: tmp96,
    ListHeaderComponent: tmp93Result,
    style: items54,
    contentContainerStyle: items55,
    data: memo,
    extraData: memo3,
    maintainVisibleContentPosition: obj22,
    keyExtractor(render_id) {
      return render_id.render_id;
    },
    ListEmptyComponent: tmp93Result6,
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
      let tmp4;
      let version;
      ({ item, index } = arg0);
      const obj = { projectId, message: item, groupStart: flag, first: 0 === index, isNewest: item.render_id === render_id, hostsReminder: item.render_id === render_id1, reminder: tmp4, checklistSuperseded: set.has(item.render_id), secretRequestStatus: str, checklistExpanded: obj3.checklistExpanded(c14, item.render_id, obj2.has(item.render_id)), onToggleChecklist, planVersion: version, planSuperseded: true === superseded, planExpanded: planCardExpanded(tmp11, render_id, true === superseded1), onTogglePlan, replied: closure_49.get(item.render_id), onJumpToReplied, onApprovePlan: tmp15, onPickIdea, onAskForIdeas: tmp17, onAnswerClarification: tmp18, clarificationDismissed: tmp19, onDismissClarification, onRestoreVersion: tmp21 };
      flag = closure_21[index];
      const tmp = authStore3;
      const tmp3 = ConjureMessageRowDefault;
      if (flag == null) {
        flag = true;
      }
      tmp4 = null;
      if (item.render_id === render_id1) {
        tmp4 = conjureReminder;
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
      planCardExpanded = tmp5(11794).planCardExpanded;
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
        tmp21 = importDefault;
      }
      return tmp(tmp3, obj);
    }
  };
  FlashList = tmp2(tmp3[42]).FlashList;
  tmp2Result25 = tmp2(tmp3[32]);
  tmp2Result25.isIOS() && undefined;
  tmp96 = undefined;
  const tmp2Result26 = tmp2(tmp3[32]);
  const tmp94 = closure_25;
  if (tmp2Result26.isIOS()) {
    tmp96 = { top: num };
    const obj16 = { top: num };
  }
  tmp93Result = null;
  const tmp2Result27 = tmp2(tmp3[32]);
  if (!tmp2Result27.isIOS()) {
    tmp93Result = null;
    if (num > 0) {
      const obj17 = { style: obj18 };
      obj18 = { height: num };
      tmp93Result = tmp93(tmp92, obj17);
    }
  }
  items54 = [tmp.transcript, ];
  const tmp2Result28 = tmp2(tmp3[32]);
  let tmp99 = !tmp2Result28.isIOS();
  tmp2Result28.isIOS();
  if (tmp99) {
    tmp99 = { marginBottom: tmp56 - bound };
    const obj20 = { marginBottom: tmp56 - bound };
  }
  items54[1] = tmp99;
  items55 = [tmp.transcriptContent, { paddingBottom: bound + tmp5(tmp3[9]).space.PX_8 }];
  let tmp100 = "loading" === chatEmptyStateResult;
  tmp93Result6 = null;
  obj22 = { startRenderingFromBottom: true, autoscrollToBottomThreshold };
  ({ paddingBottom: bound + tmp5(tmp3[9]).space.PX_8 });
  if (!tmp100) {
    let AyiQEp;
    const obj23 = { style: tmp.placeholder, children: c15(Text, obj24) };
    Text = tmp2(tmp3[40]).Text;
    const intl4 = tmp2(tmp3[27]).intl;
    const string = intl4.string;
    if ("unavailable" === chatEmptyStateResult) {
      AyiQEp = tmp5(tmp3[28]).Td4Sf4;
    } else {
      AyiQEp = tmp5(tmp3[28]).AyiQEp;
    }
    obj24 = { variant: "text-sm/normal", color: "text-muted", children: string(AyiQEp) };
    tmp93Result6 = tmp93(tmp92, obj23);
  }
  items56 = [c15(tmp94, obj14), , ];
  let tmp93Result7 = null;
  if (tmp27) {
    const obj25 = { projectId };
    tmp93Result7 = tmp93(tmp5(tmp3[43]), obj25);
  }
  items56[1] = tmp93Result7;
  let tmp93Result8 = null;
  if (null != tmp84) {
    const obj26 = { line: tmp84, onJumpToActivity: callback10, bottom: tmp5(tmp3[9]).space.PX_12 + tmp56, todos: memo8, todosLive: checklistLiveResult, agents: memo9 };
    const tmp5Result = tmp5(tmp3[44]);
    tmp93Result8 = tmp93(tmp5Result, obj26);
  }
  items56[2] = tmp93Result8;
  items53[1] = onToggleChecklist(memo, obj13);
  const obj27 = { style: tmp.bottomStack, onLayout: callback1, children: items57 };
  const obj28 = { projectId, thinking: stateFromStores3, turnStartedAt: conjureTurnStartedAtResult, remixStartedAt: conjureRemixStartedAt, compacting: stateFromStores4, saving: stateFromStores5, recalling: tmp100, activity: stateFromStores6, projectUsage: stateFromStores7, connLabel: connectionLabelResult, controlling: conjureControlActive, connFailed: "failed" === stateFromStores8, thinkingOpen: tmp27, onToggleThinking: callback };
  const tmp5Result3 = tmp5(tmp3[45]);
  if (tmp100) {
    tmp100 = 0 === memo.length;
  }
  items57 = [c15(tmp5Result3, obj28), , , ];
  let tmp93Result9 = null;
  if (null != tmp7) {
    const obj29 = { style: tmp.notice, children: c15(tmp2(tmp3[46]).NewInlineNotice, obj30) };
    obj30 = { type: "critical", role: "alert", message: null, action: null };
    ({ message: obj46.message, retry: obj46.action } = tmp7);
    tmp93Result9 = tmp93(tmp92, obj29);
  }
  items57[1] = tmp93Result9;
  let tmp93Result10 = null;
  if (null != tmp6) {
    const obj31 = { style: tmp.notice, children: c15(tmp2(tmp3[46]).NewInlineNotice, obj32) };
    obj32 = { type: "warning", role: "status", message: null, onDismiss: null };
    ({ message: obj48.message, onDismiss: obj48.onDismiss } = tmp6);
    tmp93Result10 = tmp93(tmp92, obj31);
  }
  items57[2] = tmp93Result10;
  const obj33 = { projectId, canSend: tmp45, running: stateFromStores3, onSend: callback11, onInterrupt: tmp109, onDraftHasTextChange: tmp41, hidden };
  tmp109 = undefined;
  const tmp5Result4 = tmp5(tmp3[47]);
  if (stateFromStores3) {
    tmp109 = callback12;
  }
  items57[3] = c15(tmp5Result4, obj33);
  items53[2] = onToggleChecklist(memo, obj27);
  return onToggleChecklist(memo, obj12);
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
      const tmp7 = authStore3(View, obj3);
      cResult[0] = tmp3.maskSolid;
      cResult[1] = tmp7;
      tmp4 = tmp7;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] !== tmp3.maskFade) {
      const obj4 = { style: tmp3.maskFade, colors: items, locations, start, end };
      const tmp15 = authStore3(LinearGradientDefault, obj4);
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
      const tmp22 = authStore3(View, obj5);
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
          const tmp30 = authStore3(_modDef6243, obj7);
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
    const tmp26 = authStore4(View, obj8);
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
    const obj2 = { style: tmp.transcript, maskElement: authStore4(View, obj3), children };
    obj3 = { style: tmp.transcript, children: items };
    items = [, , ];
    const obj4 = { style: tmp.maskSolid };
    const tmp6 = _modDef6243;
    items[0] = authStore3(View, obj4);
    const obj5 = { style: tmp.maskFade, colors: items, locations, start, end };
    items[1] = authStore3(LinearGradientDefault, obj5);
    const obj6 = { style: obj7 };
    const _Math = Math;
    obj7 = { height: Math.max(0, clearance - c19) };
    items[2] = authStore3(View, obj6);
    tmp3 = authStore3(tmp6, obj2);
  }
  return tmp3;
});
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeChat.tsx");

export default tmp5;
