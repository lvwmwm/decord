// Module ID: 12245
// Function ID: 12246
// Name: ConjureNativeChat
// Dependencies: [32, 19, 17, 2001, 10668, 10684, 10686, 10669, 21, 587, 683, 4969, 558, 576, 504, 12246, 12247, 1633, 10692, 12248, 12249, 12250, 12252, 12253, 12254, 12255, 12256, 1128, 3830, 12257, 12259, 5649, 12260, 10670, 12251, 1384, 12263, 12264, 12265, 12266, 12267, 10731, 12268, 12271, 11757, 5220, 12294, 7206, 12432, 12433, 12436, 7940, 12418, 12445, 5244, 6952, 2]

// Module 12245 (ConjureNativeChat)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import intl5 from "intl" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import _modDef3830 from "module_3830" /* 3830 */;
import LinearGradientDefault from "LinearGradient" /* 5244 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5649 */;
import _modDef6952 from "module_6952" /* 6952 */;
import conjureChatTurns from "conjureChatTurns" /* 10670 */;
import conjurePublishCard from "conjurePublishCard" /* 12248 */;
import ConjureTodoState from "ConjureTodoState" /* 12250 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 12251 */;
import ConjureSecretRequestState from "ConjureSecretRequestState" /* 12252 */;
import conjureCardOverrides from "conjureCardOverrides" /* 12253 */;
import conjurePendingPlan from "conjurePendingPlan" /* 12254 */;
import ConjureChatGrouping from "ConjureChatGrouping" /* 12255 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 12256 */;
import ConjureAppBuildRequest from "ConjureAppBuildRequest" /* 12260 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 12265 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 12266 */;
import ConjureMessageRowDefault from "ConjureMessageRow" /* 12294 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AppStateStore_mod from "AppStateStore" /* 2001 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 10668 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10684 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10686 */;
import ConjureChatStore from "ConjureChatStore" /* 10669 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
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
  let tmp26;
  let tmp5;
  let tmp6;
  let tmp7;
  let transcriptTopInset;
  let tmp = projectId;
  let tmp2 = num;
  let obj = projectId(num[13]);
  const cResult = obj.c(283);
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
      let tmp18 = ConjureChatStore;
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
      class Q {
        constructor() {
          return closure_12.getPublishStatus(projectId);
        }
      }
      const items5 = [projectId];
      class R {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[12] = projectId;
      cResult[13] = Q;
      cResult[14] = items5;
      tmp24 = items5;
      tmp23 = Q;
    } else {
      class Q {
        constructor() {
          return closure_12.getPublishStatus(projectId);
        }
      }
      tmp24 = cResult[14];
    }
    const tmpResult16 = tmp(tmp2[14]);
    const stateFromStores2 = tmpResult16.useStateFromStores(tmp22, tmp23, tmp24);
    if (cResult[15] === stateFromStores1) {
      let tmp29;
      let tmp31;
      let tmp30;
      let tmp34;
      let tmp36;
      let tmp35;
      let tmp39;
      let tmp41;
      let tmp40;
      let tmp44;
      let tmp46;
      let tmp45;
      let tmp49;
      let tmp51;
      let tmp50;
      let tmp62;
      let tmp64;
      let tmp63;
      let tmp66;
      let tmp68;
      let tmp67;
      let tmp70;
      let tmp72;
      let tmp71;
      class Q {
        constructor() {
          return closure_12.getPublishStatus(projectId);
        }
      }
      react = tmp26;
      const _Symbol3 = Symbol;
      class R {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      if (tmp28 === Symbol.for("react.memo_cache_sentinel")) {
        class Q {
          constructor() {
            return closure_12.getPublishStatus(projectId);
          }
        }
        const items6 = [ConjureChatStore];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[18] = items6;
        tmp29 = items6;
      } else {
        class Q {
          constructor() {
            return closure_12.getPublishStatus(projectId);
          }
        }
      }
      if (cResult[19] !== projectId) {
        class Q {
          constructor() {
            return closure_12.getPublishStatus(projectId);
          }
        }
        const items7 = [projectId];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[19] = projectId;
        cResult[20] = tmp32;
        cResult[21] = items7;
        tmp31 = items7;
        tmp30 = tmp32;
      } else {
        class Q {
          constructor() {
            return closure_12.getPublishStatus(projectId);
          }
        }
        tmp31 = cResult[21];
      }
      const tmpResult17 = tmp(tmp2[14]);
      const stateFromStores3 = tmpResult17.useStateFromStores(tmp29, tmp30, tmp31);
      const _Symbol4 = Symbol;
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        class Q {
          constructor() {
            return closure_12.getPublishStatus(projectId);
          }
        }
        const items8 = [ConjureChatStore];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[22] = items8;
        tmp34 = items8;
      } else {
        class Q {
          constructor() {
            return closure_12.getPublishStatus(projectId);
          }
        }
      }
      if (cResult[23] !== projectId) {
        class Q {
          constructor() {
            return closure_12.getPublishStatus(projectId);
          }
        }
        const items9 = [projectId];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[23] = projectId;
        cResult[24] = tmp37;
        cResult[25] = items9;
        tmp36 = items9;
        tmp35 = tmp37;
      } else {
        class Q {
          constructor() {
            return closure_12.getPublishStatus(projectId);
          }
        }
        tmp36 = cResult[25];
      }
      const tmpResult18 = tmp(tmp2[14]);
      const stateFromStores4 = tmpResult18.useStateFromStores(tmp34, tmp35, tmp36);
      const _Symbol5 = Symbol;
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        class Q {
          constructor() {
            return closure_12.getPublishStatus(projectId);
          }
        }
        const items10 = [ConjureChatStore];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[26] = items10;
        tmp39 = items10;
      } else {
        class Q {
          constructor() {
            return closure_12.getPublishStatus(projectId);
          }
        }
      }
      if (cResult[27] !== projectId) {
        class Q {
          constructor() {
            return closure_12.getPublishStatus(projectId);
          }
        }
        const items11 = [projectId];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[27] = projectId;
        cResult[28] = tmp42;
        cResult[29] = items11;
        tmp41 = items11;
        tmp40 = tmp42;
      } else {
        class Q {
          constructor() {
            return closure_12.getPublishStatus(projectId);
          }
        }
        tmp41 = cResult[29];
      }
      const tmpResult19 = tmp(tmp2[14]);
      const stateFromStores5 = tmpResult19.useStateFromStores(tmp39, tmp40, tmp41);
      const _Symbol6 = Symbol;
      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
        class Q {
          constructor() {
            return closure_12.getPublishStatus(projectId);
          }
        }
        const items12 = [ConjureChatStore];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[30] = items12;
        tmp44 = items12;
      } else {
        class Q {
          constructor() {
            return closure_12.getPublishStatus(projectId);
          }
        }
      }
      if (cResult[31] !== projectId) {
        class Q {
          constructor() {
            return closure_12.getPublishStatus(projectId);
          }
        }
        const items13 = [projectId];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[31] = projectId;
        cResult[32] = tmp47;
        cResult[33] = items13;
        tmp46 = items13;
        tmp45 = tmp47;
      } else {
        class Q {
          constructor() {
            return closure_12.getPublishStatus(projectId);
          }
        }
        tmp46 = cResult[33];
      }
      const tmpResult20 = tmp(tmp2[14]);
      const stateFromStores6 = tmpResult20.useStateFromStores(tmp44, tmp45, tmp46);
      const _Symbol7 = Symbol;
      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
        class Q {
          constructor() {
            return closure_12.getPublishStatus(projectId);
          }
        }
        const items14 = [ConjureChatStore];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[34] = items14;
        tmp49 = items14;
      } else {
        class Q {
          constructor() {
            return closure_12.getPublishStatus(projectId);
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
        tmp51 = items15;
        tmp50 = Se;
      } else {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
        tmp51 = cResult[37];
      }
      const tmpResult21 = tmp(tmp2[14]);
      const stateFromStores7 = tmpResult21.useStateFromStores(tmp49, tmp50, tmp51);
      const tmp55 = stateFromStores(obj4.useState(null), 2);
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
      AppStateStore = tmp55[1];
      let tmp57 = null == tmp56;
      if (!tmp57) {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
        tmp57 = tmp58;
      }
      if (!tmp57) {
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
        cResult[39] = tmp60;
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
        tmp62 = items16;
      } else {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
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
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[41] = projectId;
        cResult[42] = Ee;
        cResult[43] = items17;
        tmp64 = items17;
        tmp63 = Ee;
      } else {
        class Ee {
          constructor() {
            return closure_11.getConnState(projectId);
          }
        }
        tmp64 = cResult[43];
      }
      const tmpResult22 = tmp(tmp2[14]);
      const stateFromStores8 = tmpResult22.useStateFromStores(tmp62, tmp63, tmp64);
      const _Symbol9 = Symbol;
      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
        class Ee {
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
        tmp66 = items18;
      } else {
        class Ee {
          constructor() {
            return closure_11.getConnState(projectId);
          }
        }
      }
      if (cResult[45] !== projectId) {
        class Fe {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
        const items19 = [projectId];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[45] = projectId;
        cResult[46] = Fe;
        cResult[47] = items19;
        tmp68 = items19;
        tmp67 = Fe;
      } else {
        class Fe {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
        tmp68 = cResult[47];
      }
      const tmpResult23 = tmp(tmp2[14]);
      const stateFromStores9 = tmpResult23.useStateFromStores(tmp66, tmp67, tmp68);
      const _Symbol10 = Symbol;
      if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
        class Fe {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
        const items20 = [ConjureChatStore];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[48] = items20;
        tmp70 = items20;
      } else {
        class Fe {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
      }
      if (cResult[49] !== projectId) {
        class Fe {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
        const items21 = [projectId];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[49] = projectId;
        cResult[50] = tmp73;
        cResult[51] = items21;
        tmp72 = items21;
        tmp71 = tmp73;
      } else {
        class Fe {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
        tmp72 = cResult[51];
      }
      const tmpResult24 = tmp(tmp2[14]);
      const stateFromStores10 = tmpResult24.useStateFromStores(tmp70, tmp71, tmp72);
      if (cResult[52] === stateFromStores8) {
        class Fe {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
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
    tmp26 = withLivePublishCardResult;
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
  let c36;
  let c37;
  let c47;
  let hidden;
  let items55;
  let items56;
  let items57;
  let items58;
  let items59;
  let items60;
  let obj15;
  let obj18;
  let obj19;
  let obj23;
  let obj25;
  let obj31;
  let obj32;
  let obj34;
  let obj36;
  let onDismissClarification;
  let open;
  let tmp101;
  let tmp105;
  let tmp107;
  let tmp118;
  let tmp21;
  let tmp22;
  let tmp2Result23;
  let tmp38;
  let tmp39;
  let tmp59;
  let tmp71;
  let tmp98Result;
  let tmp98Result7;
  const f113507 = () => {
    map = new Map();
    return map;
  };
  const f113510 = () => {
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
  let bound;
  let ref;
  let ref2;
  let ref3;
  let ref4;
  let ref5;
  let callback4;
  let callback5;
  c47 = undefined;
  let ref6;
  let ref7;
  let callback8;
  let closure_51;
  let onJumpToReplied;
  let ref8;
  let ref9;
  let closure_55;
  let tmp = closure_24();
  let tmp2 = projectId;
  let tmp3 = dependencyMap;
  let obj = projectId(504);
  items = [memo];
  const stateFromStores = obj.useStateFromStores(items, () => "active" === memo.getState(), []);
  let tmp5 = num;
  let tmp6 = num(12246)(projectId);
  const tmp7 = num(12247)(projectId);
  let obj2 = projectId(12247);
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
  const obj4 = projectId(10692);
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
  const tmp2Result16 = tmp2(12249);
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
  [c14, c15] = stateFromStores(obj3.useState(f113507), 2);
  stateFromStores(obj3.useState(f113507), 2);
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
  [c18, c19] = stateFromStores(obj3.useState(f113510), 2);
  stateFromStores(obj3.useState(f113510), 2);
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
    sendConjureCardReply(projectId, intl.string(_modDef3830.EMgIuY));
  }, items30);
  const items31 = [projectId];
  closure_23 = obj3.useCallback((implementation_prompt) => {
    const obj = conjureAttachmentDrafts;
    obj.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items31);
  const items32 = [projectId];
  [tmp38, tmp39] = stateFromStores(tmp5(12257)(projectId), 2);
  const items33 = [projectId];
  stateFromStores(tmp5(12257)(projectId), 2);
  const callback1 = obj3.useCallback(() => {
    const intl = intl5.intl;
    authStore(projectId, intl.string(_modDef3830["t5CN3+"]));
  }, items32);
  closure_24 = obj3.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
    const obj = conjureAttachmentDrafts;
    const obj2 = { clarificationAnswers, attachments };
    obj.sendConjureCardReply(projectId, implementation_prompt, obj2);
  }, items33);
  [c25, c26] = stateFromStores(obj3.useState(null), 2);
  stateFromStores(obj3.useState(null), 2);
  const tmp19Result11 = stateFromStores(obj3.useState(null), 2);
  dismissedAppBuildRequestId = tmp19Result11[0];
  onDismissAppBuildRequest = tmp19Result11[1];
  const tmp44 = tmp5(12259)(projectId);
  sent = tmp44.sent;
  const request = tmp44.request;
  id = undefined;
  if (request != null) {
    id = request.id;
  }
  const items34 = [id, sent];
  let tmp48 = tmp47;
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
    tmp48 = "connecting" === stateFromStores8;
  }
  canSend = tmp48;
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
  const items36 = [tmp48, memo2, joined, dismissedAppBuildRequestId];
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
  let tmp54 = null != memo5;
  if (tmp54) {
    tmp54 = memo5.steps.length > 0 || memo5.tasks.length > 0;
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
  [obj18, c36] = stateFromStores(obj3.useState(null), 2);
  stateFromStores(obj3.useState(null), 2);
  [tmp59, c37] = stateFromStores(obj3.useState(64), 2);
  stateFromStores(obj3.useState(64), 2);
  const callback3 = obj3.useCallback((nativeEvent) => {
    let closure_0 = Math.round(nativeEvent.nativeEvent.layout.height);
    let tmp = _undefined5((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  bound = tmp59;
  const tmp2Result18 = tmp2(1384);
  if (!tmp2Result18.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp59, fadingEdgeLength);
  }
  obj3.useRef(null);
  ref = obj3.useRef(null);
  ref2 = obj3.useRef(false);
  ref3 = obj3.useRef(true);
  ref4 = obj3.useRef(0);
  ref5 = obj3.useRef(0);
  callback4 = obj3.useCallback(() => {
    const animationFrame = requestAnimationFrame(() => {
      if (ref2.current) {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd({ animated: false });
        }
      }
    });
  }, []);
  callback5 = obj3.useCallback(() => {
    const timestamp = Date.now();
    ref4.current = timestamp + c18;
    ref5.current = timestamp + 2000;
  }, []);
  const items40 = [projectId, callback5];
  const effect1 = obj3.useEffect(() => {
    ref3.current = true;
    callback5();
  }, items40);
  const items41 = [stateFromStores9, callback5];
  const effect2 = obj3.useEffect(() => {
    const tmp = stateFromStores9;
    if (tmp) {
      callback5();
    }
  }, items41);
  const items42 = [projectId];
  const callback6 = obj3.useCallback(() => {
    React4(projectId);
  }, items42);
  const callback7 = obj3.useCallback(() => {
    ref3.current = false;
  }, []);
  [tmp71, c47] = stateFromStores(obj3.useState(false), 2);
  stateFromStores(obj3.useState(false), 2);
  ref6 = obj3.useRef(null);
  ref7 = obj3.useRef(0);
  callback8 = obj3.useCallback(() => {
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
  const items43 = [callback8];
  const items44 = [callback4, callback8];
  const callback9 = obj3.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    ref.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
    callback8();
  }, items43);
  const callback10 = obj3.useCallback((arg0, contentHeight) => {
    const timestamp = Date.now();
    const current = ref3.current && timestamp < ref4.current;
    if (current) {
      const _Math = Math;
      ref4.current = Math.min(timestamp + c18, ref5.current);
      callback4();
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
      callback8();
    }
  }, items44);
  const items45 = [callback8];
  const memo7 = obj3.useMemo(() => {
    const obj = { itemVisiblePercentThreshold: projectId(dependencyMap[36]).MIN_VISIBLE_PERCENT };
    return obj;
  }, []);
  const callback11 = obj3.useCallback((viewableItems) => {
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
    callback8();
  }, items45);
  if (stateFromStores5) {
    const intl3 = tmp2(1128).intl;
    memo6 = intl3.string(tmp5(3830).mKK6wB);
  } else if (stateFromStores4) {
    const intl2 = tmp2(1128).intl;
    memo6 = intl2.string(tmp5(3830).xnCAaP);
  } else if (memo6 == null) {
    let intl = tmp2(1128).intl;
    memo6 = intl.string(tmp5(3830).L9EDub);
  }
  const items46 = [memo, memo4];
  let tmp78;
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
  }, items46);
  if (null != memo4) {
    tmp78 = memo[memo4];
  }
  let checklistLiveResult = null == tmp78;
  if (!checklistLiveResult) {
    const tmp2Result19 = tmp2(12250);
    checklistLiveResult = tmp2Result19.checklistLive(tmp78);
  }
  let conjureTurnStartedAtResult;
  if (null != tmp78) {
    const tmp2Result20 = tmp2(12264);
    conjureTurnStartedAtResult = tmp2Result20.conjureTurnStartedAt(tmp78);
  }
  const items47 = [memo5];
  let tmp82;
  const memo9 = obj3.useMemo(() => {
    let runningTodoAgentsResult;
    if (null != memo5) {
      const obj = ConjureTodoAgents;
      runningTodoAgentsResult = obj.runningTodoAgents(tmp.tasks);
    } else {
      runningTodoAgentsResult = [];
    }
    return runningTodoAgentsResult;
  }, items47);
  if (null != memo4) {
    let render_id1;
    if (memo[memo4] != null) {
      render_id1 = tmp83.render_id;
    }
    tmp82 = render_id1;
  }
  let tmp85 = null != tmp82;
  if (tmp85) {
    tmp85 = null != obj18 && !obj18.has(tmp82) || tmp71;
    null != obj18 && !obj18.has(tmp82) || tmp71;
  }
  let tmp87 = null;
  if (stateFromStores3) {
    tmp87 = null;
    if (tmp54) {
      tmp87 = null;
      if (tmp85) {
        tmp87 = memo6;
      }
    }
  }
  const items48 = [bound, memo4, callback8];
  const effect3 = obj3.useEffect(() => {
    ref6.current = memo4;
    ref7.current = bound;
    let closure_0 = requestAnimationFrame(callback8);
    return () => cancelAnimationFrame(closure_0);
  }, items48);
  const items49 = [memo];
  closure_51 = obj3.useMemo(() => {
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
  }, items49);
  const items50 = [memo];
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
  }, items50);
  const items51 = [bound, memo4];
  const callback12 = obj3.useCallback(() => {
    if (null != memo4) {
      ref3.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items51);
  const callback13 = obj3.useCallback(() => {
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
  closure_55 = obj3.useCallback((arg0) => {
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
  const items52 = [num];
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
  }, items52);
  const items53 = [projectId];
  const items54 = [projectId];
  const callback14 = obj3.useCallback((arg0, arg1) => {
    ref2.current = true;
    authStore(projectId, arg0, arg1);
  }, items53);
  let connectionLabelResult = null;
  const callback15 = obj3.useCallback(() => {
    metroImportAll(projectId);
  }, items54);
  if ("open" !== stateFromStores8) {
    const tmp2Result21 = tmp2(12267);
    connectionLabelResult = tmp2Result21.connectionLabel(stateFromStores8);
  }
  const obj12 = { style: tmp.container, children: items55 };
  const tmp2Result22 = tmp2(10731);
  const conjureControlActive = tmp2Result22.useConjureControlActive(projectId);
  items55 = [c15(tmp5(12268), { thinking: stateFromStores3, bleedBottom: bottom }), , ];
  const obj13 = { style: tmp.transcriptArea, children: items59 };
  const obj14 = { clearance: tmp59, children: c15(FlashList, obj15) };
  obj15 = {
    ref,
    fadingEdgeLength,
    removeClippedSubviews: tmp2Result23.isIOS() && undefined,
    viewabilityConfig: memo7,
    onViewableItemsChanged: callback11,
    onScroll: callback9,
    onScrollBeginDrag: callback7,
    onContentSizeChange: callback10,
    onStartReached: callback6,
    scrollEventThrottle: 16,
    keyboardShouldPersistTaps: "handled",
    contentInset: tmp101,
    ListHeaderComponent: tmp98Result,
    style: items56,
    contentContainerStyle: items57,
    data: memo,
    extraData: memo3,
    maintainVisibleContentPosition: { startRenderingFromBottom: true, autoscrollToBottomThreshold: 0.2 },
    keyExtractor(render_id) {
      return render_id.render_id;
    },
    ListFooterComponent: closure_17(tmp105, obj23),
    ListEmptyComponent: tmp98Result7,
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
      let version;
      ({ item, index } = arg0);
      const obj = { projectId, message: item, groupStart: flag, first: 0 === index, isNewest: item.render_id === render_id, checklistSuperseded: set.has(item.render_id), secretRequestStatus: str, checklistExpanded: obj3.conjureCardExpanded(c14, item.render_id, obj2.has(item.render_id)), onToggleChecklist, planVersion: version, planSuperseded: true === superseded, planExpanded: conjureCardExpanded(tmp10, render_id, true === superseded1), onTogglePlan, replied: closure_51.get(item.render_id), onJumpToReplied, onApprovePlan: tmp14, onPickIdea: tmp16, onAnswerClarification: tmp17, clarificationDismissed: tmp18, onDismissClarification, onCardInputFocusChange: tmp20, canSend, appBuildRequestDismissed: tmp21, onDismissAppBuildRequest, onRestoreVersion: tmp23 };
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
        tmp20 = closure_55;
      }
      tmp23 = undefined;
      tmp21 = null != item.appBuildRequest && item.appBuildRequest.id === first;
      if (!stateFromStores3) {
        tmp23 = dependencyMap;
      }
      return tmp(tmp3, obj);
    }
  };
  FlashList = tmp2(7206).FlashList;
  tmp2Result23 = tmp2(1384);
  tmp2Result23.isIOS() && undefined;
  tmp101 = undefined;
  const tmp2Result24 = tmp2(1384);
  const tmp99 = c25;
  if (tmp2Result24.isIOS()) {
    tmp101 = { top: num };
    const obj16 = { top: num };
  }
  tmp98Result = null;
  const tmp2Result25 = tmp2(1384);
  if (!tmp2Result25.isIOS()) {
    tmp98Result = null;
    if (num > 0) {
      const obj17 = { style: obj19 };
      obj19 = { height: num };
      tmp98Result = tmp98(tmp97, obj17);
    }
  }
  items56 = [tmp.transcript, ];
  const tmp2Result26 = tmp2(1384);
  let tmp104 = !tmp2Result26.isIOS();
  tmp2Result26.isIOS();
  if (tmp104) {
    tmp104 = { marginBottom: tmp59 - bound };
    const obj20 = { marginBottom: tmp59 - bound };
  }
  items56[1] = tmp104;
  items57 = [tmp.transcriptContent, { paddingBottom: bound + tmp5(587).space.PX_8 }];
  const obj22 = { projectId, messages: memo, draftHasText: tmp38, onAskForIdeas: tmp107, onShow: callback13 };
  tmp107 = undefined;
  ({ paddingBottom: bound + tmp5(587).space.PX_8 });
  tmp105 = onToggleChecklist;
  const tmp5Result = tmp5(12271);
  if (tmp48) {
    tmp107 = callback1;
  }
  obj23 = { children: items58 };
  items58 = [c15(tmp5Result, obj22), c15(tmp2(11757).ConjureHostApprovalCards, { projectId })];
  let tmp108 = "loading" === chatEmptyStateResult;
  tmp98Result7 = null;
  if (!tmp108) {
    let AyiQEp;
    const obj24 = { style: tmp.placeholder, children: c15(Text, obj25) };
    Text = tmp2(5220).Text;
    const intl4 = tmp2(1128).intl;
    const string = intl4.string;
    if ("unavailable" === chatEmptyStateResult) {
      AyiQEp = tmp5(3830).Td4Sf4;
    } else {
      AyiQEp = tmp5(3830).AyiQEp;
    }
    obj25 = { variant: "text-sm/normal", color: "text-muted", children: string(AyiQEp) };
    tmp98Result7 = tmp98(tmp97, obj24);
  }
  items59 = [c15(tmp99, obj14), , ];
  let tmp98Result8 = null;
  if (tmp27) {
    const obj26 = { projectId };
    tmp98Result8 = tmp98(tmp5(12432), obj26);
  }
  items59[1] = tmp98Result8;
  let tmp98Result9 = null;
  if (null != tmp87) {
    const obj27 = { line: tmp87, onJumpToActivity: callback12, bottom: tmp5(587).space.PX_12 + tmp59, todos: memo8, todosLive: checklistLiveResult, agents: memo9 };
    const tmp5Result4 = tmp5(12433);
    tmp98Result9 = tmp98(tmp5Result4, obj27);
  }
  items59[2] = tmp98Result9;
  items55[1] = closure_17(stateFromStores2, obj13);
  const obj28 = { style: tmp.bottomStack, onLayout: callback3, children: items60 };
  const obj29 = { projectId, thinking: stateFromStores3, turnStartedAt: conjureTurnStartedAtResult, remixStartedAt: conjureRemixStartedAt, compacting: stateFromStores4, saving: stateFromStores5, recalling: tmp108, activity: stateFromStores6, projectUsage: stateFromStores7, connLabel: connectionLabelResult, controlling: conjureControlActive, connFailed: "failed" === stateFromStores8, thinkingOpen: tmp27, onToggleThinking: callback };
  const tmp5Result5 = tmp5(12436);
  if (tmp108) {
    tmp108 = 0 === memo.length;
  }
  items60 = [c15(tmp5Result5, obj29), , , , ];
  let tmp98Result10 = null;
  if (null != tmp7) {
    const obj30 = { style: tmp.notice, children: c15(tmp2(7940).NewInlineNotice, obj31) };
    obj31 = { type: "critical", role: "alert", message: tmp7.message, action: obj32 };
    obj32 = { text: tmp7.retry.text, onPress: tmp7.retry.onClick };
    tmp98Result10 = tmp98(tmp97, obj30);
  }
  items60[1] = tmp98Result10;
  let tmp98Result11 = null;
  if (null != tmp6) {
    const obj33 = { style: tmp.notice, children: c15(tmp2(7940).NewInlineNotice, obj34) };
    obj34 = { type: "warning", role: "status", message: null, onDismiss: null };
    ({ message: obj49.message, onDismiss: obj49.onDismiss } = tmp6);
    tmp98Result11 = tmp98(tmp97, obj33);
  }
  items60[2] = tmp98Result11;
  let tmp98Result12 = null;
  if (null != tmp44.request) {
    const obj35 = { style: tmp.notice, children: c15(tmp5(12418), obj36, tmp44.request.id) };
    obj36 = { projectId, request: tmp44.request, canSend: tmp48, onDismiss: tmp44.close, onSent: callback2 };
    tmp98Result12 = tmp98(tmp97, obj35);
  }
  items60[3] = tmp98Result12;
  const obj37 = { projectId, canSend: tmp48, running: stateFromStores3, onSend: callback14, onInterrupt: tmp118, onDraftHasTextChange: tmp39, hidden, onSendToOtherProjects: open };
  tmp118 = undefined;
  const tmp5Result6 = tmp5(12445);
  if (stateFromStores3) {
    tmp118 = callback15;
  }
  open = undefined;
  if (null == tmp44.request) {
    open = tmp44.open;
  }
  items60[4] = c15(tmp5Result6, obj37);
  items55[2] = closure_17(stateFromStores2, obj28);
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
          const tmp30 = closure_15(_modDef6952, obj7);
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
    const tmp6 = _modDef6952;
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
