// Module ID: 12120
// Function ID: 12121
// Name: ConjureNativeChat
// Dependencies: [32, 19, 17, 2001, 10978, 10993, 10995, 10979, 21, 587, 683, 5191, 558, 576, 504, 12121, 12122, 1633, 11001, 12123, 12124, 12125, 12127, 12128, 12129, 12130, 12131, 1128, 3883, 12132, 10980, 12126, 1384, 12134, 12135, 12136, 12137, 12138, 11037, 12139, 12142, 11660, 5187, 12165, 7091, 12306, 12307, 12310, 7837, 12319, 5491, 6520, 2]

// Module 12120 (ConjureNativeChat)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import intl5 from "intl" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import _modDef3883 from "module_3883" /* 3883 */;
import LinearGradientDefault from "LinearGradient" /* 5491 */;
import _modDef6520 from "module_6520" /* 6520 */;
import conjureChatTurns from "conjureChatTurns" /* 10980 */;
import conjurePublishCard from "conjurePublishCard" /* 12123 */;
import ConjureTodoState from "ConjureTodoState" /* 12125 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 12126 */;
import ConjureSecretRequestState from "ConjureSecretRequestState" /* 12127 */;
import conjureCardOverrides from "conjureCardOverrides" /* 12128 */;
import conjurePendingPlan from "conjurePendingPlan" /* 12129 */;
import ConjureChatGrouping from "ConjureChatGrouping" /* 12130 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 12131 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 12136 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 12137 */;
import ConjureMessageRowDefault from "ConjureMessageRow" /* 12165 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AppStateStore_mod from "AppStateStore" /* 2001 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 10978 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10993 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10995 */;
import ConjureChatStore from "ConjureChatStore" /* 10979 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5191 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let fadingEdgeLength, map, nativeEvent, set, viewableItems;

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
let react = react_mod;
const View = react_native.View;
let AppStateStore = AppStateStore_mod;
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
let obj2 = { container: { flex: 1 }, transcript: { flex: 1 }, maskSolid: { flex: 1, backgroundColor: BLACK }, maskFade: { height: 52 }, transcriptArea: { flex: 1, position: "relative" }, transcriptContent: obj3, bottomStack: { position: "absolute", left: 0, right: 0, bottom: 0 }, notice: obj4, placeholder: obj5 };
obj3 = { paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj4 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingBottom: nativeDefault.space.PX_8 };
obj5 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
let closure_24 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeChat(projectId) {
  let canSend;
  let closure_4;
  let num;
  let onDismissAppBuildRequest;
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
  let ref8;
  let ref9;
  let state;
  let tmp27;
  let tmp5;
  let tmp6;
  let tmp7;
  let transcriptTopInset;
  let tmp = projectId;
  let tmp2 = num;
  let obj = projectId(num[13]);
  const cResult = obj.c(271);
  projectId = projectId.projectId;
  ({ transcriptTopInset, onRestoreVersion } = projectId);
  const hidden = projectId.hidden;
  num = 0;
  if (undefined !== transcriptTopInset) {
    num = transcriptTopInset;
  }
  let tmp4 = closure_24();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = AppStateStore;
    items = [AppStateStore];
    class R {
      constructor() {
        return "active" === closure_6.getState();
      }
    }
    const items1 = [];
    cResult[0] = items;
    cResult[1] = R;
    cResult[2] = items1;
    tmp5 = items;
    tmp6 = R;
    tmp7 = items1;
  } else {
    [tmp5, tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(tmp2[14]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6, tmp7);
  let tmp10 = onRestoreVersion(tmp2[15])(projectId);
  onRestoreVersion(tmp2[16])(projectId);
  const tmpResult14 = tmp(tmp2[16]);
  const conjureRemixStartedAt = tmpResult14.useConjureRemixStartedAt(projectId);
  const bottom = onRestoreVersion(tmp2[17])().bottom;
  if (cResult[3] === stateFromStores) {
    let tmp13;
    let tmp14;
    let tmp17;
    let tmp20;
    let tmp19;
    let tmp22;
    let tmp24;
    let tmp23;
    if (cResult[4] === projectId) {
      tmp13 = cResult[5];
      tmp14 = cResult[6];
    }
    const obj4 = react;
    const effect = react.useEffect(tmp13, tmp14);
    class R {
      constructor() {
        return "active" === closure_6.getState();
      }
    }
    const ackConjureProjectWhileViewing = obj5.useAckConjureProjectWhileViewing(projectId, stateFromStores);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ConjureChatStore];
      class R {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[7] = items2;
      tmp17 = items2;
    } else {
      tmp17 = cResult[7];
    }
    if (cResult[8] !== projectId) {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      const items3 = [projectId];
      class R {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[8] = projectId;
      cResult[9] = items3;
      cResult[10] = V;
      tmp20 = V;
      tmp19 = items3;
    } else {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      tmp20 = cResult[10];
    }
    const tmpResult15 = tmp(tmp2[14]);
    const stateFromStores1 = tmpResult15.useStateFromStores(tmp17, tmp20, tmp19);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      const items4 = [ConjurePublishStatusStore];
      class R {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[11] = items4;
      tmp22 = items4;
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
      class R {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[12] = projectId;
      cResult[13] = tmp25;
      cResult[14] = items5;
      tmp24 = items5;
      tmp23 = tmp25;
    } else {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      tmp24 = cResult[14];
    }
    const tmpResult16 = tmp(tmp2[14]);
    const stateFromStores2 = tmpResult16.useStateFromStores(tmp22, tmp23, tmp24);
    if (cResult[15] === stateFromStores1) {
      let tmp30;
      let tmp32;
      let tmp31;
      let tmp35;
      let tmp37;
      let tmp36;
      let tmp40;
      let tmp42;
      let tmp41;
      let tmp45;
      let tmp47;
      let tmp46;
      let tmp50;
      let tmp52;
      let tmp51;
      let tmp63;
      let tmp65;
      let tmp64;
      let tmp67;
      let tmp69;
      let tmp68;
      let tmp72;
      let tmp74;
      let tmp73;
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      react = tmp27;
      const _Symbol3 = Symbol;
      class R {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      if (tmp29 === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items6 = [ConjureChatStore];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[18] = items6;
        tmp30 = items6;
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
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[19] = projectId;
        cResult[20] = tmp33;
        cResult[21] = items7;
        tmp32 = items7;
        tmp31 = tmp33;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp32 = cResult[21];
      }
      const tmpResult17 = tmp(tmp2[14]);
      const stateFromStores3 = tmpResult17.useStateFromStores(tmp30, tmp31, tmp32);
      const _Symbol4 = Symbol;
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items8 = [ConjureChatStore];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[22] = items8;
        tmp35 = items8;
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
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[23] = projectId;
        cResult[24] = tmp38;
        cResult[25] = items9;
        tmp37 = items9;
        tmp36 = tmp38;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp37 = cResult[25];
      }
      const tmpResult18 = tmp(tmp2[14]);
      const stateFromStores4 = tmpResult18.useStateFromStores(tmp35, tmp36, tmp37);
      const _Symbol5 = Symbol;
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items10 = [ConjureChatStore];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[26] = items10;
        tmp40 = items10;
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
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[27] = projectId;
        cResult[28] = tmp43;
        cResult[29] = items11;
        tmp42 = items11;
        tmp41 = tmp43;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp42 = cResult[29];
      }
      const tmpResult19 = tmp(tmp2[14]);
      const stateFromStores5 = tmpResult19.useStateFromStores(tmp40, tmp41, tmp42);
      const _Symbol6 = Symbol;
      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items12 = [ConjureChatStore];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[30] = items12;
        tmp45 = items12;
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
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[31] = projectId;
        cResult[32] = tmp48;
        cResult[33] = items13;
        tmp47 = items13;
        tmp46 = tmp48;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp47 = cResult[33];
      }
      const tmpResult20 = tmp(tmp2[14]);
      const stateFromStores6 = tmpResult20.useStateFromStores(tmp45, tmp46, tmp47);
      const _Symbol7 = Symbol;
      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items14 = [ConjureChatStore];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[34] = items14;
        tmp50 = items14;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
      }
      if (cResult[35] !== projectId) {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
        const items15 = [projectId];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[35] = projectId;
        cResult[36] = Se;
        cResult[37] = items15;
        tmp52 = items15;
        tmp51 = Se;
      } else {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
        tmp52 = cResult[37];
      }
      const tmpResult21 = tmp(tmp2[14]);
      const stateFromStores7 = tmpResult21.useStateFromStores(tmp50, tmp51, tmp52);
      const tmp56 = stateFromStores(obj4.useState(null), 2);
      class N {
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
      AppStateStore = tmp56[1];
      let tmp58 = null == tmp57;
      if (!tmp58) {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
        tmp58 = tmp59;
      }
      if (!tmp58) {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
      }
      if (cResult[38] !== projectId) {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
        cResult[38] = projectId;
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[39] = tmp61;
      } else {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
      }
      const _Symbol8 = Symbol;
      if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
        const items16 = [ConjureConnectionStore];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[40] = items16;
        tmp63 = items16;
      } else {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
      }
      if (cResult[41] !== projectId) {
        class Ae {
          constructor() {
            return closure_11.getConnState(projectId);
          }
        }
        const items17 = [projectId];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[41] = projectId;
        cResult[42] = Ae;
        cResult[43] = items17;
        tmp65 = items17;
        tmp64 = Ae;
      } else {
        class Ae {
          constructor() {
            return closure_11.getConnState(projectId);
          }
        }
        tmp65 = cResult[43];
      }
      const tmpResult22 = tmp(tmp2[14]);
      const stateFromStores8 = tmpResult22.useStateFromStores(tmp63, tmp64, tmp65);
      const _Symbol9 = Symbol;
      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
        class Ae {
          constructor() {
            return closure_11.getConnState(projectId);
          }
        }
        const items18 = [ConjureChatStore];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[44] = items18;
        tmp67 = items18;
      } else {
        class Ae {
          constructor() {
            return closure_11.getConnState(projectId);
          }
        }
      }
      if (cResult[45] !== projectId) {
        class Ae {
          constructor() {
            return closure_11.getConnState(projectId);
          }
        }
        const items19 = [projectId];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[45] = projectId;
        cResult[46] = tmp70;
        cResult[47] = items19;
        tmp69 = items19;
        tmp68 = tmp70;
      } else {
        class Ae {
          constructor() {
            return closure_11.getConnState(projectId);
          }
        }
        tmp69 = cResult[47];
      }
      const tmpResult23 = tmp(tmp2[14]);
      const stateFromStores9 = tmpResult23.useStateFromStores(tmp67, tmp68, tmp69);
      const _Symbol10 = Symbol;
      if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
        class Ae {
          constructor() {
            return closure_11.getConnState(projectId);
          }
        }
        const items20 = [ConjureChatStore];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[48] = items20;
        tmp72 = items20;
      } else {
        class Ae {
          constructor() {
            return closure_11.getConnState(projectId);
          }
        }
      }
      if (cResult[49] !== projectId) {
        class Le {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
        const items21 = [projectId];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[49] = projectId;
        cResult[50] = Le;
        cResult[51] = items21;
        tmp74 = items21;
        tmp73 = Le;
      } else {
        class Le {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
        tmp74 = cResult[51];
      }
      const tmpResult24 = tmp(tmp2[14]);
      const stateFromStores10 = tmpResult24.useStateFromStores(tmp72, tmp73, tmp74);
      if (cResult[52] === stateFromStores8) {
        class Le {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
      }
      let obj2 = { historyLoaded: stateFromStores9, historyUnavailable: stateFromStores10, connState: stateFromStores8 };
      const tmpResult25 = tmp(tmp2[20]);
      cResult[52] = stateFromStores8;
      cResult[53] = stateFromStores9;
      cResult[54] = stateFromStores10;
      cResult[55] = tmpResult25.chatEmptyState(obj2);
      const chatEmptyStateResult = tmpResult25.chatEmptyState(obj2);
    }
    const tmpResult26 = tmp(tmp2[19]);
    const withLivePublishCardResult = tmpResult26.withLivePublishCard(stateFromStores1, stateFromStores2);
    cResult[15] = stateFromStores1;
    cResult[16] = stateFromStores2;
    cResult[17] = withLivePublishCardResult;
    tmp27 = withLivePublishCardResult;
  }
  class N {
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
  cResult[5] = N;
  cResult[6] = items22;
  tmp14 = items22;
  tmp13 = N;
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
  let c25;
  let c26;
  let c34;
  let c35;
  let c45;
  let hidden;
  let items54;
  let items55;
  let items56;
  let items57;
  let items58;
  let items59;
  let obj15;
  let obj18;
  let obj19;
  let obj23;
  let obj25;
  let obj31;
  let obj32;
  let obj34;
  let onDismissClarification;
  let tmp102;
  let tmp104;
  let tmp114;
  let tmp21;
  let tmp22;
  let tmp2Result23;
  let tmp38;
  let tmp39;
  let tmp56;
  let tmp68;
  let tmp95Result;
  let tmp95Result6;
  let tmp98;
  const f112079 = () => {
    map = new Map();
    return map;
  };
  const f112082 = () => {
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
  let onPickIdea;
  closure_24 = undefined;
  c25 = undefined;
  c26 = undefined;
  let dismissedAppBuildRequestId;
  let onDismissAppBuildRequest;
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
  let callback3;
  let callback4;
  c45 = undefined;
  let ref6;
  let ref7;
  let callback7;
  let closure_49;
  let onJumpToReplied;
  let ref8;
  let ref9;
  let closure_53;
  let tmp = closure_24();
  let tmp2 = projectId;
  let tmp3 = dependencyMap;
  let obj = projectId(504);
  items = [memo];
  const stateFromStores = obj.useStateFromStores(items, () => "active" === memo.getState(), []);
  let tmp5 = num;
  let tmp6 = num(12121)(projectId);
  const tmp7 = num(12122)(projectId);
  let obj2 = projectId(12122);
  const conjureRemixStartedAt = obj2.useConjureRemixStartedAt(projectId);
  let obj3 = stateFromStores1;
  const items1 = [stateFromStores, projectId];
  const bottom = num(1633)().bottom;
  const effect = stateFromStores1.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      metroImportDefault(projectId);
    }
  }, items1);
  const obj4 = projectId(11001);
  const ackConjureProjectWhileViewing = obj4.useAckConjureProjectWhileViewing(projectId, stateFromStores);
  const items2 = [c14];
  const items3 = [projectId];
  const obj5 = projectId(504);
  stateFromStores1 = obj5.useStateFromStores(items2, () => ConjureChatStore.getMessages(projectId), items3);
  const items4 = [stateFromStores11];
  const items5 = [projectId];
  const obj6 = projectId(504);
  const stateFromStores2 = obj6.useStateFromStores(items4, () => ConjurePublishStatusStore.getPublishStatus(projectId), items5);
  const items6 = [stateFromStores1, stateFromStores2];
  memo = stateFromStores1.useMemo(() => {
    const obj = conjurePublishCard;
    return obj.withLivePublishCard(stateFromStores1, stateFromStores2);
  }, items6);
  const items7 = [c14];
  const items8 = [projectId];
  const obj7 = projectId(504);
  const stateFromStores3 = obj7.useStateFromStores(items7, () => ConjureChatStore.isThinking(projectId), items8);
  const items9 = [c14];
  const items10 = [projectId];
  const obj8 = projectId(504);
  const stateFromStores4 = obj8.useStateFromStores(items9, () => ConjureChatStore.isCompacting(projectId), items10);
  const items11 = [c14];
  const items12 = [projectId];
  const obj9 = projectId(504);
  const stateFromStores5 = obj9.useStateFromStores(items11, () => ConjureChatStore.isSaving(projectId), items12);
  const items13 = [c14];
  const items14 = [projectId];
  const obj10 = projectId(504);
  const stateFromStores6 = obj10.useStateFromStores(items13, () => ConjureChatStore.getThinkingActivity(projectId), items14);
  const items15 = [c14];
  const items16 = [projectId];
  const obj11 = projectId(504);
  const stateFromStores7 = obj11.useStateFromStores(items15, () => ConjureChatStore.getProjectUsage(projectId), items16);
  let tmp19 = stateFromStores;
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
  const items20 = [c14];
  const items21 = [projectId];
  const tmp2Result14 = tmp2(504);
  stateFromStores9 = tmp2Result14.useStateFromStores(items20, () => ConjureChatStore.hasLoadedHistory(projectId), items21);
  const items22 = [c14];
  const items23 = [projectId];
  const tmp2Result15 = tmp2(504);
  const stateFromStores10 = tmp2Result15.useStateFromStores(items22, () => ConjureChatStore.isHistoryUnavailable(projectId), items23);
  const tmp2Result16 = tmp2(12124);
  const chatEmptyStateResult = tmp2Result16.chatEmptyState({ historyLoaded: stateFromStores9, historyUnavailable: stateFromStores10, connState: stateFromStores8 });
  render_id = null;
  if (memo.length > 0) {
    render_id = memo[memo.length - 1].render_id;
  }
  const items24 = [memo];
  set = obj3.useMemo(() => {
    const obj = ConjureTodoState;
    return obj.supersededChecklists(memo);
  }, items24);
  const items25 = [memo1];
  const items26 = [projectId];
  const tmp2Result17 = tmp2(504);
  stateFromStores11 = tmp2Result17.useStateFromStores(items25, () => {
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
  [c14, c15] = tmp19(obj3.useState(f112079), 2);
  tmp19(obj3.useState(f112079), 2);
  onToggleChecklist = obj3.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined2((get) => {
      const obj = projectId(closure_2_2[23]);
      return obj.toggleConjureCard(get, closure_0, closure_1);
    });
  }, []);
  const items28 = [memo];
  closure_17 = obj3.useMemo(() => {
    const obj = conjurePendingPlan;
    return obj.planVersions(memo);
  }, items28);
  [c18, c19] = tmp19(obj3.useState(f112082), 2);
  tmp19(obj3.useState(f112082), 2);
  onTogglePlan = obj3.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined3((get) => {
      const obj = projectId(closure_2_2[23]);
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
    sendConjureCardReply(projectId, intl.string(_modDef3883.EMgIuY));
  }, items30);
  const items31 = [projectId];
  onPickIdea = obj3.useCallback((implementation_prompt) => {
    const obj = conjureAttachmentDrafts;
    obj.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items31);
  const items32 = [projectId];
  [tmp38, tmp39] = tmp19(tmp5(12132)(projectId), 2);
  const items33 = [projectId];
  tmp19(tmp5(12132)(projectId), 2);
  const callback1 = obj3.useCallback(() => {
    const intl = intl5.intl;
    authStore(projectId, intl.string(_modDef3883["t5CN3+"]));
  }, items32);
  closure_24 = obj3.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
    const obj = conjureAttachmentDrafts;
    const obj2 = { clarificationAnswers, attachments };
    obj.sendConjureCardReply(projectId, implementation_prompt, obj2);
  }, items33);
  [c25, c26] = tmp19(obj3.useState(null), 2);
  tmp19(obj3.useState(null), 2);
  const tmp19Result11 = tmp19(obj3.useState(null), 2);
  dismissedAppBuildRequestId = tmp19Result11[0];
  onDismissAppBuildRequest = tmp19Result11[1];
  let tmp45 = tmp44;
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
  const items35 = [tmp45, memo2, joined, dismissedAppBuildRequestId];
  const items36 = [memo];
  const memo3 = obj3.useMemo(() => ({ canSend, pendingPlanId: memo2, secretStatusesKey: joined, dismissedAppBuildRequestId }), items35);
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
  [obj18, c34] = tmp19(obj3.useState(null), 2);
  tmp19(obj3.useState(null), 2);
  [tmp56, c35] = tmp19(obj3.useState(64), 2);
  tmp19(obj3.useState(64), 2);
  const callback2 = obj3.useCallback((nativeEvent) => {
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
  const tmp2Result18 = tmp2(1384);
  if (!tmp2Result18.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp56, fadingEdgeLength);
  }
  obj3.useRef(null);
  ref = obj3.useRef(null);
  ref2 = obj3.useRef(false);
  ref3 = obj3.useRef(true);
  ref4 = obj3.useRef(0);
  ref5 = obj3.useRef(0);
  callback3 = obj3.useCallback(() => {
    const animationFrame = requestAnimationFrame(() => {
      if (ref2.current) {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd({ animated: false });
        }
      }
    });
  }, []);
  callback4 = obj3.useCallback(() => {
    const timestamp = Date.now();
    ref4.current = timestamp + c18;
    ref5.current = timestamp + 2000;
  }, []);
  const items39 = [projectId, callback4];
  const effect1 = obj3.useEffect(() => {
    ref3.current = true;
    callback4();
  }, items39);
  const items40 = [stateFromStores9, callback4];
  const effect2 = obj3.useEffect(() => {
    const tmp = stateFromStores9;
    if (tmp) {
      callback4();
    }
  }, items40);
  const items41 = [projectId];
  const callback5 = obj3.useCallback(() => {
    React4(projectId);
  }, items41);
  const callback6 = obj3.useCallback(() => {
    ref3.current = false;
  }, []);
  [tmp68, c45] = tmp19(obj3.useState(false), 2);
  tmp19(obj3.useState(false), 2);
  ref6 = obj3.useRef(null);
  ref7 = obj3.useRef(0);
  callback7 = obj3.useCallback(() => {
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
  const items42 = [callback7];
  const items43 = [callback3, callback7];
  const callback8 = obj3.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    ref.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
    callback7();
  }, items42);
  const callback9 = obj3.useCallback((arg0, contentHeight) => {
    const timestamp = Date.now();
    const current = ref3.current && timestamp < ref4.current;
    if (current) {
      const _Math = Math;
      ref4.current = Math.min(timestamp + c18, ref5.current);
      callback3();
    }
    const current2 = ref.current;
    if (null != current2) {
      let obj;
      const viewportHeight = current2.viewportHeight;
      if (current2.contentHeight - current2.offsetY - viewportHeight <= 0.2 * viewportHeight) {
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
      callback7();
    }
  }, items43);
  const items44 = [callback7];
  const memo7 = obj3.useMemo(() => {
    const obj = { itemVisiblePercentThreshold: projectId(dependencyMap[33]).MIN_VISIBLE_PERCENT };
    return obj;
  }, []);
  const callback10 = obj3.useCallback((viewableItems) => {
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
    callback7();
  }, items44);
  if (stateFromStores5) {
    const intl3 = tmp2(1128).intl;
    memo6 = intl3.string(tmp5(3883).mKK6wB);
  } else if (stateFromStores4) {
    const intl2 = tmp2(1128).intl;
    memo6 = intl2.string(tmp5(3883).xnCAaP);
  } else if (memo6 == null) {
    let intl = tmp2(1128).intl;
    memo6 = intl.string(tmp5(3883).L9EDub);
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
    const tmp2Result19 = tmp2(12125);
    checklistLiveResult = tmp2Result19.checklistLive(tmp75);
  }
  let conjureTurnStartedAtResult;
  if (null != tmp75) {
    const tmp2Result20 = tmp2(12135);
    conjureTurnStartedAtResult = tmp2Result20.conjureTurnStartedAt(tmp75);
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
    let render_id1;
    if (memo[memo4] != null) {
      render_id1 = tmp80.render_id;
    }
    tmp79 = render_id1;
  }
  let tmp82 = null != tmp79;
  if (tmp82) {
    tmp82 = null != obj18 && !obj18.has(tmp79) || tmp68;
    null != obj18 && !obj18.has(tmp79) || tmp68;
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
  const items47 = [bound, memo4, callback7];
  const effect3 = obj3.useEffect(() => {
    ref6.current = memo4;
    ref7.current = bound;
    let closure_0 = requestAnimationFrame(callback7);
    return () => cancelAnimationFrame(closure_0);
  }, items47);
  const items48 = [memo];
  closure_49 = obj3.useMemo(() => {
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
  const callback11 = obj3.useCallback(() => {
    if (null != memo4) {
      ref3.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items50);
  const callback12 = obj3.useCallback(() => {
    const current = ref.current;
    let tmp = null != current;
    if (tmp) {
      const viewportHeight = current.viewportHeight;
      tmp = current.contentHeight - current.offsetY - viewportHeight <= 0.2 * viewportHeight;
    }
    if (tmp) {
      ref2.current = true;
    }
  }, []);
  ref8 = obj3.useRef(false);
  ref9 = obj3.useRef(false);
  closure_53 = obj3.useCallback((arg0) => {
    let tmp2 = arg0;
    const tmp = ref8;
    if (arg0) {
      tmp2 = !ref9.current;
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
  const items51 = [num];
  const effect4 = obj3.useEffect(() => {
    ref9.current = num > 0;
    let current = ref9.current && ref8.current;
    if (current) {
      ref8.current = false;
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
  }, items51);
  const items52 = [projectId];
  const items53 = [projectId];
  const callback13 = obj3.useCallback((arg0, arg1) => {
    ref2.current = true;
    authStore(projectId, arg0, arg1);
  }, items52);
  let connectionLabelResult = null;
  const callback14 = obj3.useCallback(() => {
    metroImportAll(projectId);
  }, items53);
  if ("open" !== stateFromStores8) {
    const tmp2Result21 = tmp2(12138);
    connectionLabelResult = tmp2Result21.connectionLabel(stateFromStores8);
  }
  const obj12 = { style: tmp.container, children: items54 };
  const tmp2Result22 = tmp2(11037);
  const conjureControlActive = tmp2Result22.useConjureControlActive(projectId);
  items54 = [c15(tmp5(12139), { thinking: stateFromStores3, bleedBottom: bottom }), , ];
  const obj13 = { style: tmp.transcriptArea, children: items58 };
  const obj14 = { clearance: tmp56, children: c15(FlashList, obj15) };
  obj15 = {
    ref,
    fadingEdgeLength,
    removeClippedSubviews: tmp2Result23.isIOS() && undefined,
    viewabilityConfig: memo7,
    onViewableItemsChanged: callback10,
    onScroll: callback8,
    onScrollBeginDrag: callback6,
    onContentSizeChange: callback9,
    onStartReached: callback5,
    scrollEventThrottle: 16,
    contentInset: tmp98,
    ListHeaderComponent: tmp95Result,
    style: items55,
    contentContainerStyle: items56,
    data: memo,
    extraData: memo3,
    maintainVisibleContentPosition: { startRenderingFromBottom: true, autoscrollToBottomThreshold: 0.2 },
    keyExtractor(render_id) {
      return render_id.render_id;
    },
    ListFooterComponent: closure_17(tmp102, obj23),
    ListEmptyComponent: tmp95Result6,
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
      let tmp19;
      let tmp20;
      let tmp22;
      let version;
      ({ item, index } = arg0);
      const obj = { projectId, message: item, groupStart: flag, first: 0 === index, isNewest: item.render_id === render_id, checklistSuperseded: set.has(item.render_id), secretRequestStatus: str, checklistExpanded: obj3.conjureCardExpanded(c14, item.render_id, obj2.has(item.render_id)), onToggleChecklist, planVersion: version, planSuperseded: true === superseded, planExpanded: conjureCardExpanded(tmp10, render_id, true === superseded1), onTogglePlan, replied: closure_49.get(item.render_id), onJumpToReplied, onApprovePlan: tmp14, onPickIdea, onAnswerClarification: tmp16, clarificationDismissed: tmp17, onDismissClarification, onClarificationInputFocusChange: tmp19, canSend, appBuildRequestDismissed: tmp20, onDismissAppBuildRequest, onRestoreVersion: tmp22 };
      flag = closure_21[index];
      const tmp = authStore3;
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
        tmp16 = closure_24;
      }
      tmp19 = undefined;
      tmp17 = null != item.clarification && item.clarification.id === c25;
      const tmp4Result2 = PlatformUtils;
      if (!tmp4Result2.isIOS()) {
        tmp19 = closure_53;
      }
      tmp22 = undefined;
      tmp20 = null != item.appBuildRequest && item.appBuildRequest.id === first;
      if (!stateFromStores3) {
        tmp22 = dependencyMap;
      }
      return tmp(tmp3, obj);
    }
  };
  FlashList = tmp2(7091).FlashList;
  tmp2Result23 = tmp2(1384);
  tmp2Result23.isIOS() && undefined;
  tmp98 = undefined;
  const tmp2Result24 = tmp2(1384);
  const tmp96 = c25;
  if (tmp2Result24.isIOS()) {
    tmp98 = { top: num };
    const obj16 = { top: num };
  }
  tmp95Result = null;
  const tmp2Result25 = tmp2(1384);
  if (!tmp2Result25.isIOS()) {
    tmp95Result = null;
    if (num > 0) {
      const obj17 = { style: obj19 };
      obj19 = { height: num };
      tmp95Result = tmp95(tmp94, obj17);
    }
  }
  items55 = [tmp.transcript, ];
  const tmp2Result26 = tmp2(1384);
  let tmp101 = !tmp2Result26.isIOS();
  tmp2Result26.isIOS();
  if (tmp101) {
    tmp101 = { marginBottom: tmp56 - bound };
    const obj20 = { marginBottom: tmp56 - bound };
  }
  items55[1] = tmp101;
  items56 = [tmp.transcriptContent, { paddingBottom: bound + tmp5(587).space.PX_8 }];
  const obj22 = { projectId, messages: memo, draftHasText: tmp38, onAskForIdeas: tmp104, onShow: callback12 };
  tmp104 = undefined;
  ({ paddingBottom: bound + tmp5(587).space.PX_8 });
  tmp102 = onToggleChecklist;
  const tmp5Result = tmp5(12142);
  if (tmp45) {
    tmp104 = callback1;
  }
  obj23 = { children: items57 };
  items57 = [c15(tmp5Result, obj22), c15(tmp2(11660).ConjureHostApprovalCards, { projectId })];
  let tmp105 = "loading" === chatEmptyStateResult;
  tmp95Result6 = null;
  if (!tmp105) {
    let AyiQEp;
    const obj24 = { style: tmp.placeholder, children: c15(Text, obj25) };
    Text = tmp2(5187).Text;
    const intl4 = tmp2(1128).intl;
    const string = intl4.string;
    if ("unavailable" === chatEmptyStateResult) {
      AyiQEp = tmp5(3883).Td4Sf4;
    } else {
      AyiQEp = tmp5(3883).AyiQEp;
    }
    obj25 = { variant: "text-sm/normal", color: "text-muted", children: string(AyiQEp) };
    tmp95Result6 = tmp95(tmp94, obj24);
  }
  items58 = [c15(tmp96, obj14), , ];
  let tmp95Result7 = null;
  if (tmp27) {
    const obj26 = { projectId };
    tmp95Result7 = tmp95(tmp5(12306), obj26);
  }
  items58[1] = tmp95Result7;
  let tmp95Result8 = null;
  if (null != tmp84) {
    const obj27 = { line: tmp84, onJumpToActivity: callback11, bottom: tmp5(587).space.PX_12 + tmp56, todos: memo8, todosLive: checklistLiveResult, agents: memo9 };
    const tmp5Result4 = tmp5(12307);
    tmp95Result8 = tmp95(tmp5Result4, obj27);
  }
  items58[2] = tmp95Result8;
  items54[1] = closure_17(stateFromStores2, obj13);
  const obj28 = { style: tmp.bottomStack, onLayout: callback2, children: items59 };
  const obj29 = { projectId, thinking: stateFromStores3, turnStartedAt: conjureTurnStartedAtResult, remixStartedAt: conjureRemixStartedAt, compacting: stateFromStores4, saving: stateFromStores5, recalling: tmp105, activity: stateFromStores6, projectUsage: stateFromStores7, connLabel: connectionLabelResult, controlling: conjureControlActive, connFailed: "failed" === stateFromStores8, thinkingOpen: tmp27, onToggleThinking: callback };
  const tmp5Result5 = tmp5(12310);
  if (tmp105) {
    tmp105 = 0 === memo.length;
  }
  items59 = [c15(tmp5Result5, obj29), , , ];
  let tmp95Result9 = null;
  if (null != tmp7) {
    const obj30 = { style: tmp.notice, children: c15(tmp2(7837).NewInlineNotice, obj31) };
    obj31 = { type: "critical", role: "alert", message: tmp7.message, action: obj32 };
    obj32 = { text: tmp7.retry.text, onPress: tmp7.retry.onClick };
    tmp95Result9 = tmp95(tmp94, obj30);
  }
  items59[1] = tmp95Result9;
  let tmp95Result10 = null;
  if (null != tmp6) {
    const obj33 = { style: tmp.notice, children: c15(tmp2(7837).NewInlineNotice, obj34) };
    obj34 = { type: "warning", role: "status", message: null, onDismiss: null };
    ({ message: obj49.message, onDismiss: obj49.onDismiss } = tmp6);
    tmp95Result10 = tmp95(tmp94, obj33);
  }
  items59[2] = tmp95Result10;
  const obj35 = { projectId, canSend: tmp45, running: stateFromStores3, onSend: callback13, onInterrupt: tmp114, onDraftHasTextChange: tmp39, hidden };
  tmp114 = undefined;
  const tmp5Result6 = tmp5(12319);
  if (stateFromStores3) {
    tmp114 = callback14;
  }
  items59[3] = c15(tmp5Result6, obj35);
  items54[2] = closure_17(stateFromStores2, obj28);
  return closure_17(stateFromStores2, obj12);
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
          const tmp30 = authStore3(_modDef6520, obj7);
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
    const tmp6 = _modDef6520;
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
