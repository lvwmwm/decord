// Module ID: 17171
// Function ID: 17172
// Name: ConjureNativeChat
// Dependencies: [32, 19, 17, 1999, 13218, 13229, 13230, 12998, 21, 587, 683, 5092, 558, 576, 504, 17172, 1631, 11414, 17173, 17174, 12999, 17175, 17177, 17178, 17179, 17180, 1126, 3849, 17181, 17183, 17176, 1382, 17185, 17186, 17187, 17188, 17189, 11427, 17190, 5088, 17193, 8625, 17316, 17317, 17318, 7571, 17322, 5391, 6243, 2]

// Module 17171 (ConjureNativeChat)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import intl5 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import _modDef3849 from "module_3849" /* 3849 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import _modDef6243 from "module_6243" /* 6243 */;
import conjureChatTurns from "conjureChatTurns" /* 12999 */;
import conjurePublishCard from "conjurePublishCard" /* 17173 */;
import ConjureTodoState from "ConjureTodoState" /* 17175 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 17176 */;
import ConjureSecretRequestState from "ConjureSecretRequestState" /* 17177 */;
import conjurePendingPlan from "conjurePendingPlan" /* 17178 */;
import ConjureChatGrouping from "ConjureChatGrouping" /* 17179 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 17180 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 17187 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 17188 */;
import ConjureMessageRowDefault from "ConjureMessageRow" /* 17193 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 1999 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 13218 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 13229 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 13230 */;
import ConjureChatStore from "ConjureChatStore" /* 12998 */;
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
let obj2 = { container: { flex: 1 }, transcript: { flex: 1 }, maskSolid: { flex: 1, backgroundColor: BLACK }, maskFade: { height: 52 }, transcriptArea: { flex: 1, position: "relative" }, transcriptContent: obj3, bottomStack: { position: "absolute", left: 0, right: 0, bottom: 0 }, incompleteNotice: obj4, placeholder: obj5 };
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
  let stateFromStores10;
  let stateFromStores3;
  let tmp10;
  let tmp34;
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
    let tmp11 = stateFromStores10;
    items = [stateFromStores10];
    const fn = function w() {
      return "active" === stateFromStores10.getState();
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
  const bottom = onRestoreVersion(tmp4[16])().bottom;
  if (cResult[3] === stateFromStores) {
    let tmp14;
    let tmp15;
    let tmp20;
    let tmp23;
    let tmp22;
    let tmp27;
    let tmp29;
    let tmp28;
    if (cResult[4] === projectId) {
      tmp14 = cResult[5];
      tmp15 = cResult[6];
    }
    let obj3 = stateFromStores3;
    const effect = stateFromStores3.useEffect(tmp14, tmp15);
    let tmp17 = tmp;
    let tmp18 = tmp3;
    const tmp2Result15 = tmp2(tmp4[17]);
    const ackConjureProjectWhileViewing = tmp2Result15.useAckConjureProjectWhileViewing(projectId);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      let tmp21 = ConjureChatStore;
      const items2 = [ConjureChatStore];
      cResult[7] = items2;
      tmp20 = items2;
    } else {
      tmp20 = cResult[7];
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
      tmp23 = U;
      tmp22 = items3;
    } else {
      class U {
        constructor() {
          return ConjureChatStore.getMessages(projectId);
        }
      }
      tmp23 = cResult[10];
    }
    const tmp2Result16 = tmp2(tmp4[14]);
    const stateFromStores1 = tmp2Result16.useStateFromStores(tmp20, tmp23, tmp22);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class U {
        constructor() {
          return ConjureChatStore.getMessages(projectId);
        }
      }
      const items4 = [ConjurePublishStatusStore];
      cResult[11] = items4;
      tmp27 = items4;
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
      cResult[13] = tmp30;
      cResult[14] = items5;
      tmp29 = items5;
      tmp28 = tmp30;
    } else {
      class U {
        constructor() {
          return ConjureChatStore.getMessages(projectId);
        }
      }
      tmp29 = cResult[14];
    }
    const tmp2Result17 = tmp2(tmp4[14]);
    const stateFromStores2 = tmp2Result17.useStateFromStores(tmp27, tmp28, tmp29);
    if (cResult[15] === stateFromStores1) {
      let tmp38;
      let tmp40;
      let tmp39;
      let tmp44;
      let tmp46;
      let tmp45;
      let tmp51;
      let tmp53;
      let tmp52;
      let tmp58;
      let tmp60;
      let tmp59;
      let tmp68;
      let tmp67;
      let tmp83;
      let tmp85;
      let tmp84;
      let tmp89;
      let tmp91;
      let tmp90;
      let tmp95;
      let tmp97;
      let tmp96;
      let tmp102;
      let tmp104;
      let tmp103;
      class U {
        constructor() {
          return ConjureChatStore.getMessages(projectId);
        }
      }
      _slicedToArray = tmp34;
      const _Symbol3 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
        const items6 = [ConjureChatStore];
        cResult[18] = items6;
        tmp38 = items6;
      } else {
        class U {
          constructor() {
            return ConjureChatStore.getMessages(projectId);
          }
        }
      }
      if (cResult[19] !== projectId) {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items7 = [projectId];
        cResult[19] = projectId;
        cResult[20] = Z;
        cResult[21] = items7;
        tmp40 = items7;
        tmp39 = Z;
      } else {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        tmp40 = cResult[21];
      }
      const tmp2Result18 = tmp2(tmp4[14]);
      stateFromStores3 = tmp2Result18.useStateFromStores(tmp38, tmp39, tmp40);
      const _Symbol4 = Symbol;
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items8 = [ConjureChatStore];
        cResult[22] = items8;
        tmp44 = items8;
      } else {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[23] !== projectId) {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items9 = [projectId];
        cResult[23] = projectId;
        cResult[24] = tmp47;
        cResult[25] = items9;
        tmp46 = items9;
        tmp45 = tmp47;
      } else {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        tmp46 = cResult[25];
      }
      const tmp2Result19 = tmp2(tmp4[14]);
      const stateFromStores4 = tmp2Result19.useStateFromStores(tmp44, tmp45, tmp46);
      const _Symbol5 = Symbol;
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items10 = [ConjureChatStore];
        cResult[26] = items10;
        tmp51 = items10;
      } else {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[27] !== projectId) {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items11 = [projectId];
        cResult[27] = projectId;
        cResult[28] = tmp54;
        cResult[29] = items11;
        tmp53 = items11;
        tmp52 = tmp54;
      } else {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        tmp53 = cResult[29];
      }
      const tmp2Result20 = tmp2(tmp4[14]);
      const stateFromStores5 = tmp2Result20.useStateFromStores(tmp51, tmp52, tmp53);
      const _Symbol6 = Symbol;
      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items12 = [ConjureChatStore];
        cResult[30] = items12;
        tmp58 = items12;
      } else {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[31] !== projectId) {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items13 = [projectId];
        cResult[31] = projectId;
        cResult[32] = tmp61;
        cResult[33] = items13;
        tmp60 = items13;
        tmp59 = tmp61;
      } else {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        tmp60 = cResult[33];
      }
      const tmp2Result21 = tmp2(tmp4[14]);
      const stateFromStores6 = tmp2Result21.useStateFromStores(tmp58, tmp59, tmp60);
      const _Symbol7 = Symbol;
      class O {
        constructor() {
          const tmp = stateFromStores;
          if (tmp) {
            metroImportDefault(projectId);
          }
        }
      }
      if (cResult[35] !== projectId) {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items14 = [projectId];
        cResult[35] = projectId;
        cResult[36] = tmp69;
        cResult[37] = items14;
        tmp68 = items14;
        tmp67 = tmp69;
      } else {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        tmp68 = cResult[37];
      }
      const tmp2Result22 = tmp2(tmp4[14]);
      const stateFromStores7 = tmp2Result22.useStateFromStores(tmp66, tmp67, tmp68);
      [tmp76, tmp77] = obj3.useState(null);
      View = tmp77;
      let tmp78 = null == tmp76;
      _slicedToArray(obj3.useState(null), 2);
      if (!tmp78) {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        tmp78 = tmp79;
      }
      if (!tmp78) {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[38] !== projectId) {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        cResult[38] = projectId;
        cResult[39] = tmp81;
      } else {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
      }
      const _Symbol8 = Symbol;
      if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
        const items15 = [ConjureConnectionStore];
        cResult[40] = items15;
        tmp83 = items15;
      } else {
        class Z {
          constructor() {
            return ConjureChatStore.isThinking(projectId);
          }
        }
      }
      if (cResult[41] !== projectId) {
        class Te {
          constructor() {
            return ConjureConnectionStore.getConnState(projectId);
          }
        }
        const items16 = [projectId];
        cResult[41] = projectId;
        cResult[42] = Te;
        cResult[43] = items16;
        tmp85 = items16;
        tmp84 = Te;
      } else {
        class Te {
          constructor() {
            return ConjureConnectionStore.getConnState(projectId);
          }
        }
        tmp85 = cResult[43];
      }
      const tmp2Result23 = tmp2(tmp4[14]);
      const stateFromStores8 = tmp2Result23.useStateFromStores(tmp83, tmp84, tmp85);
      const _Symbol9 = Symbol;
      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
        class Te {
          constructor() {
            return ConjureConnectionStore.getConnState(projectId);
          }
        }
        const items17 = [ConjureConnectionStore];
        cResult[44] = items17;
        tmp89 = items17;
      } else {
        class Te {
          constructor() {
            return ConjureConnectionStore.getConnState(projectId);
          }
        }
      }
      if (cResult[45] !== projectId) {
        class Fe {
          constructor() {
            return ConjureConnectionStore.isChatStopped(projectId);
          }
        }
        const items18 = [projectId];
        cResult[45] = projectId;
        cResult[46] = Fe;
        cResult[47] = items18;
        tmp91 = items18;
        tmp90 = Fe;
      } else {
        class Fe {
          constructor() {
            return ConjureConnectionStore.isChatStopped(projectId);
          }
        }
        tmp91 = cResult[47];
      }
      const tmp2Result24 = tmp2(tmp4[14]);
      const stateFromStores9 = tmp2Result24.useStateFromStores(tmp89, tmp90, tmp91);
      const _Symbol10 = Symbol;
      if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
        class Fe {
          constructor() {
            return ConjureConnectionStore.isChatStopped(projectId);
          }
        }
        const items19 = [ConjureChatStore];
        cResult[48] = items19;
        tmp95 = items19;
      } else {
        class Fe {
          constructor() {
            return ConjureConnectionStore.isChatStopped(projectId);
          }
        }
      }
      if (cResult[49] !== projectId) {
        class Fe {
          constructor() {
            return ConjureConnectionStore.isChatStopped(projectId);
          }
        }
        const items20 = [projectId];
        cResult[49] = projectId;
        cResult[50] = tmp98;
        cResult[51] = items20;
        tmp97 = items20;
        tmp96 = tmp98;
      } else {
        class Fe {
          constructor() {
            return ConjureConnectionStore.isChatStopped(projectId);
          }
        }
        tmp97 = cResult[51];
      }
      const tmp2Result25 = tmp2(tmp4[14]);
      stateFromStores10 = tmp2Result25.useStateFromStores(tmp95, tmp96, tmp97);
      const _Symbol11 = Symbol;
      if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
        class Fe {
          constructor() {
            return ConjureConnectionStore.isChatStopped(projectId);
          }
        }
        const items21 = [ConjureChatStore];
        cResult[52] = items21;
        tmp102 = items21;
      } else {
        class Fe {
          constructor() {
            return ConjureConnectionStore.isChatStopped(projectId);
          }
        }
      }
      if (cResult[53] !== projectId) {
        class Oe {
          constructor() {
            return ConjureChatStore.isHistoryUnavailable(projectId);
          }
        }
        const items22 = [projectId];
        cResult[53] = projectId;
        cResult[54] = Oe;
        cResult[55] = items22;
        tmp104 = items22;
        tmp103 = Oe;
      } else {
        class Oe {
          constructor() {
            return ConjureChatStore.isHistoryUnavailable(projectId);
          }
        }
        tmp104 = cResult[55];
      }
      const tmp2Result26 = tmp2(tmp4[14]);
      const stateFromStores11 = tmp2Result26.useStateFromStores(tmp102, tmp103, tmp104);
      if (cResult[56] === stateFromStores8) {
        class Oe {
          constructor() {
            return ConjureChatStore.isHistoryUnavailable(projectId);
          }
        }
      }
      let obj2 = { historyLoaded: stateFromStores10, historyUnavailable: stateFromStores11, connState: stateFromStores8 };
      const tmp2Result27 = tmp2(tmp4[19]);
      cResult[56] = stateFromStores8;
      cResult[57] = stateFromStores10;
      cResult[58] = stateFromStores11;
      cResult[59] = tmp2Result27.chatEmptyState(obj2);
      const chatEmptyStateResult = tmp2Result27.chatEmptyState(obj2);
    }
    const tmp2Result28 = tmp2(tmp4[18]);
    const withLivePublishCardResult = tmp2Result28.withLivePublishCard(stateFromStores1, stateFromStores2);
    cResult[15] = stateFromStores1;
    cResult[16] = stateFromStores2;
    cResult[17] = withLivePublishCardResult;
    tmp34 = withLivePublishCardResult;
  }
  class O {
    constructor() {
      const tmp = stateFromStores;
      if (tmp) {
        metroImportDefault(projectId);
      }
    }
  }
  const items23 = [stateFromStores, projectId];
  cResult[3] = stateFromStores;
  cResult[4] = projectId;
  cResult[5] = O;
  cResult[6] = items23;
  tmp15 = items23;
  tmp14 = O;
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
  let obj29;
  let onDismissClarification;
  let tmp107;
  let tmp19;
  let tmp20;
  let tmp2Result27;
  let tmp39;
  let tmp40;
  let tmp55;
  let tmp67;
  let tmp92Result;
  let tmp92Result5;
  let tmp95;
  const f128342 = () => {
    map = new Map();
    return map;
  };
  const f128345 = () => {
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
  let stateFromStores10;
  let render_id;
  let render_id1;
  set = undefined;
  let stateFromStores12;
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
  let obj2 = stateFromStores2;
  const items1 = [stateFromStores, projectId];
  const bottom = require("useSafeAreaInsets")().bottom;
  const effect = stateFromStores2.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      metroImportDefault(projectId);
    }
  }, items1);
  let obj3 = projectId(stateFromStores[17]);
  const ackConjureProjectWhileViewing = obj3.useAckConjureProjectWhileViewing(projectId);
  const obj4 = projectId(stateFromStores[14]);
  const items2 = [c14];
  const items3 = [projectId];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => ConjureChatStore.getMessages(projectId), items3);
  const items4 = [stateFromStores12];
  const items5 = [projectId];
  const obj5 = projectId(stateFromStores[14]);
  stateFromStores2 = obj5.useStateFromStores(items4, () => {
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
  const obj6 = projectId(stateFromStores[14]);
  stateFromStores3 = obj6.useStateFromStores(items7, () => ConjureChatStore.isThinking(projectId), items8);
  const items9 = [c14];
  const items10 = [projectId];
  const obj7 = projectId(stateFromStores[14]);
  const stateFromStores4 = obj7.useStateFromStores(items9, () => ConjureChatStore.isCompacting(projectId), items10);
  const items11 = [c14];
  const items12 = [projectId];
  const obj8 = projectId(stateFromStores[14]);
  const stateFromStores5 = obj8.useStateFromStores(items11, () => ConjureChatStore.isSaving(projectId), items12);
  const items13 = [c14];
  const items14 = [projectId];
  const obj9 = projectId(stateFromStores[14]);
  const stateFromStores6 = obj9.useStateFromStores(items13, () => ConjureChatStore.getThinkingActivity(projectId), items14);
  const items15 = [c14];
  const items16 = [projectId];
  const obj10 = projectId(stateFromStores[14]);
  const stateFromStores7 = obj10.useStateFromStores(items15, () => ConjureChatStore.getProjectUsage(projectId), items16);
  let tmp17 = stateFromStores1;
  let tmp18 = stateFromStores1(stateFromStores2.useState(null), 2);
  [tmp19, tmp20] = tmp18;
  let c7 = tmp20;
  let tmp21 = null == tmp19;
  if (!tmp21) {
    tmp21 = stateFromStores3 && tmp19 === projectId;
  }
  if (!tmp21) {
    tmp20(null);
  }
  const items17 = [projectId];
  let tmp25 = stateFromStores3;
  const callback = obj2.useCallback(() => _undefined((arg0) => {
    let tmp = null;
    if (arg0 !== projectId) {
      tmp = projectId;
    }
    return tmp;
  }), items17);
  if (stateFromStores3) {
    tmp25 = tmp19 === projectId;
  }
  const items18 = [set];
  const items19 = [projectId];
  const tmp2Result = tmp2(tmp3[14]);
  const stateFromStores8 = tmp2Result.useStateFromStores(items18, () => ConjureConnectionStore.getConnState(projectId), items19);
  const items20 = [set];
  const items21 = [projectId];
  const tmp2Result16 = tmp2(tmp3[14]);
  const stateFromStores9 = tmp2Result16.useStateFromStores(items20, () => ConjureConnectionStore.isChatStopped(projectId), items21);
  const items22 = [tmp9];
  const items23 = [projectId];
  const tmp2Result17 = tmp2(tmp3[14]);
  stateFromStores10 = tmp2Result17.useStateFromStores(items22, () => ConjureChatStore.hasLoadedHistory(projectId), items23);
  const items24 = [tmp9];
  const items25 = [projectId];
  const tmp2Result18 = tmp2(tmp3[14]);
  const stateFromStores11 = tmp2Result18.useStateFromStores(items24, () => ConjureChatStore.isHistoryUnavailable(projectId), items25);
  const tmp2Result19 = tmp2(tmp3[19]);
  const chatEmptyStateResult = tmp2Result19.chatEmptyState({ historyLoaded: stateFromStores10, historyUnavailable: stateFromStores11, connState: stateFromStores8 });
  render_id = null;
  if (memo.length > 0) {
    render_id = memo[memo.length - 1].render_id;
  }
  const findLastResult = memo.findLast((role) => {
    let turnSettledResult = "assistant" === role.role;
    if (turnSettledResult) {
      const obj = projectId(stateFromStores[20]);
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
  const items26 = [memo];
  set = obj2.useMemo(() => {
    const obj = ConjureTodoState;
    return obj.supersededChecklists(memo);
  }, items26);
  const items27 = [memo1];
  const items28 = [projectId];
  const tmp2Result20 = tmp2(tmp3[14]);
  stateFromStores12 = tmp2Result20.useStateFromStores(items27, () => {
    const settings = ConjureSettingsStore.getSettings(projectId);
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
  [c14, c15] = tmp17(obj2.useState(f128342), 2);
  tmp17(obj2.useState(f128342), 2);
  onToggleChecklist = obj2.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined2((get) => {
      const obj = projectId(stateFromStores[21]);
      return obj.toggleChecklist(get, closure_0, closure_1);
    });
  }, []);
  const items30 = [memo];
  autoscrollToBottomThreshold = obj2.useMemo(() => {
    const obj = conjurePendingPlan;
    return obj.planVersions(memo);
  }, items30);
  [c18, c19] = tmp17(obj2.useState(f128345), 2);
  tmp17(obj2.useState(f128345), 2);
  onTogglePlan = obj2.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined3((get) => {
      const obj = projectId(stateFromStores[23]);
      return obj.togglePlanCard(get, closure_0, closure_1);
    });
  }, []);
  const items31 = [memo];
  closure_21 = obj2.useMemo(() => {
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
  closure_22 = obj2.useCallback(() => {
    const sendConjureCardReply = conjureAttachmentDrafts.sendConjureCardReply;
    conjureAttachmentDrafts;
    const intl = intl5.intl;
    sendConjureCardReply(projectId, intl.string(_modDef3849.EMgIuY));
  }, items32);
  const items33 = [projectId];
  onPickIdea = obj2.useCallback((implementation_prompt) => {
    const obj = conjureAttachmentDrafts;
    obj.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items33);
  [tmp39, tmp40] = tmp17(tmp5(tmp3[28])(projectId), 2);
  tmp17(tmp5(tmp3[28])(projectId), 2);
  const tmp2Result21 = tmp2(tmp3[29]);
  conjureReminder = tmp2Result21.useConjureReminder(projectId, memo, tmp39);
  const items34 = [projectId];
  closure_25 = obj2.useCallback(() => {
    const intl = intl5.intl;
    authStore(projectId, intl.string(_modDef3849["t5CN3+"]));
  }, items34);
  const items35 = [projectId];
  closure_26 = obj2.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
    const obj = conjureAttachmentDrafts;
    const obj2 = { clarificationAnswers, attachments };
    obj.sendConjureCardReply(projectId, implementation_prompt, obj2);
  }, items35);
  [c27, c28] = tmp17(obj2.useState(null), 2);
  let tmp44 = tmp43;
  tmp17(obj2.useState(null), 2);
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
  [obj19, c34] = tmp17(obj2.useState(null), 2);
  tmp17(obj2.useState(null), 2);
  [tmp55, c35] = tmp17(obj2.useState(64), 2);
  tmp17(obj2.useState(64), 2);
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
  const tmp2Result22 = tmp2(tmp3[31]);
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
    ref4.current = timestamp + c18;
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
    React4(projectId);
  }, items43);
  const callback5 = obj2.useCallback(() => {
    ref3.current = false;
  }, []);
  [tmp67, c45] = tmp17(obj2.useState(false), 2);
  tmp17(obj2.useState(false), 2);
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
  }, items45);
  const items46 = [callback6];
  const memo7 = obj2.useMemo(() => {
    const obj = { itemVisiblePercentThreshold: projectId(stateFromStores[32]).MIN_VISIBLE_PERCENT };
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
    const intl3 = tmp2(tmp3[26]).intl;
    memo6 = intl3.string(tmp5(tmp3[27]).mKK6wB);
  } else if (stateFromStores4) {
    const intl2 = tmp2(tmp3[26]).intl;
    memo6 = intl2.string(tmp5(tmp3[27]).xnCAaP);
  } else if (memo6 == null) {
    let intl = tmp2(tmp3[26]).intl;
    memo6 = intl.string(tmp5(tmp3[27]).L9EDub);
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
    const tmp2Result23 = tmp2(tmp3[21]);
    checklistLiveResult = tmp2Result23.checklistLive(tmp74);
  }
  let conjureTurnStartedAtResult;
  if (null != tmp74) {
    const tmp2Result24 = tmp2(tmp3[33]);
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
    authStore(projectId, arg0, arg1);
  }, items53);
  let connectionLabelResult = null;
  const callback12 = obj2.useCallback(() => {
    metroImportAll(projectId);
  }, items54);
  if ("open" !== stateFromStores8) {
    const tmp2Result25 = tmp2(tmp3[36]);
    connectionLabelResult = tmp2Result25.connectionLabel(stateFromStores8);
  }
  const obj11 = { style: tmp.container, children: items55 };
  const tmp2Result26 = tmp2(tmp3[37]);
  const conjureControlActive = tmp2Result26.useConjureControlActive(projectId);
  items55 = [c15(tmp5(tmp3[38]), { thinking: stateFromStores3, bleedBottom: bottom }), , ];
  const obj12 = { style: tmp.transcriptArea, children: items58 };
  const obj13 = { clearance: tmp55, children: c15(FlashList, obj14) };
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
    ListEmptyComponent: tmp92Result5,
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
      planCardExpanded = tmp5(17178).planCardExpanded;
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
  FlashList = tmp2(tmp3[41]).FlashList;
  tmp2Result27 = tmp2(tmp3[31]);
  tmp2Result27.isIOS() && undefined;
  tmp95 = undefined;
  const tmp2Result28 = tmp2(tmp3[31]);
  const tmp93 = closure_25;
  if (tmp2Result28.isIOS()) {
    tmp95 = { top: num };
    const obj15 = { top: num };
  }
  tmp92Result = null;
  const tmp2Result29 = tmp2(tmp3[31]);
  if (!tmp2Result29.isIOS()) {
    tmp92Result = null;
    if (num > 0) {
      const obj16 = { style: obj17 };
      obj17 = { height: num };
      tmp92Result = tmp92(tmp91, obj16);
    }
  }
  items56 = [tmp.transcript, ];
  const tmp2Result30 = tmp2(tmp3[31]);
  let tmp98 = !tmp2Result30.isIOS();
  tmp2Result30.isIOS();
  if (tmp98) {
    tmp98 = { marginBottom: tmp55 - bound };
    const obj18 = { marginBottom: tmp55 - bound };
  }
  items56[1] = tmp98;
  items57 = [tmp.transcriptContent, { paddingBottom: bound + tmp5(tmp3[9]).space.PX_8 }];
  let tmp99 = "loading" === chatEmptyStateResult;
  tmp92Result5 = null;
  obj21 = { startRenderingFromBottom: true, autoscrollToBottomThreshold };
  ({ paddingBottom: bound + tmp5(tmp3[9]).space.PX_8 });
  if (!tmp99) {
    let AyiQEp;
    const obj22 = { style: tmp.placeholder, children: c15(Text, obj23) };
    Text = tmp2(tmp3[39]).Text;
    const intl4 = tmp2(tmp3[26]).intl;
    const string = intl4.string;
    if ("unavailable" === chatEmptyStateResult) {
      AyiQEp = tmp5(tmp3[27]).Td4Sf4;
    } else {
      AyiQEp = tmp5(tmp3[27]).AyiQEp;
    }
    obj23 = { variant: "text-sm/normal", color: "text-muted", children: string(AyiQEp) };
    tmp92Result5 = tmp92(tmp91, obj22);
  }
  items58 = [c15(tmp93, obj13), , ];
  let tmp92Result6 = null;
  if (tmp25) {
    const obj24 = { projectId };
    tmp92Result6 = tmp92(tmp5(tmp3[42]), obj24);
  }
  items58[1] = tmp92Result6;
  let tmp92Result7 = null;
  if (null != tmp83) {
    const obj25 = { line: tmp83, onJumpToActivity: callback10, bottom: tmp5(tmp3[9]).space.PX_12 + tmp55, todos: memo8, todosLive: checklistLiveResult, agents: memo9 };
    const tmp5Result = tmp5(tmp3[43]);
    tmp92Result7 = tmp92(tmp5Result, obj25);
  }
  items58[2] = tmp92Result7;
  items55[1] = onToggleChecklist(memo, obj12);
  const obj26 = { style: tmp.bottomStack, onLayout: callback1, children: items59 };
  const obj27 = { projectId, thinking: stateFromStores3, turnStartedAt: conjureTurnStartedAtResult, compacting: stateFromStores4, saving: stateFromStores5, recalling: tmp99, activity: stateFromStores6, projectUsage: stateFromStores7, connLabel: connectionLabelResult, controlling: conjureControlActive, connFailed: "failed" === stateFromStores8, thinkingOpen: tmp25, onToggleThinking: callback };
  const tmp5Result3 = tmp5(tmp3[44]);
  if (tmp99) {
    tmp99 = 0 === memo.length;
  }
  items59 = [c15(tmp5Result3, obj27), , ];
  let tmp92Result8 = null;
  if (null != tmp6) {
    const obj28 = { style: tmp.incompleteNotice, children: c15(tmp2(tmp3[45]).NewInlineNotice, obj29) };
    obj29 = { type: "warning", role: "status", message: null, onDismiss: null };
    ({ message: obj46.message, onDismiss: obj46.onDismiss } = tmp6);
    tmp92Result8 = tmp92(tmp91, obj28);
  }
  items59[1] = tmp92Result8;
  const obj30 = { projectId, canSend: tmp44, running: stateFromStores3, stopped: stateFromStores9, onSend: callback11, onInterrupt: tmp107, onDraftHasTextChange: tmp40, hidden };
  tmp107 = undefined;
  const tmp5Result4 = tmp5(tmp3[46]);
  if (stateFromStores3) {
    tmp107 = callback12;
  }
  items59[2] = c15(tmp5Result4, obj30);
  items55[2] = onToggleChecklist(memo, obj26);
  return onToggleChecklist(memo, obj11);
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
