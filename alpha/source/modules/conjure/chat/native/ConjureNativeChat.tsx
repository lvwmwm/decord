// Module ID: 11796
// Function ID: 11797
// Name: ConjureNativeChat
// Dependencies: [32, 19, 17, 1999, 10663, 10678, 10680, 10664, 21, 587, 683, 5096, 558, 576, 504, 11797, 11798, 1631, 10685, 11799, 11800, 11801, 11803, 11804, 11805, 11806, 1126, 3849, 11807, 10665, 11802, 1382, 11809, 11810, 11811, 11812, 11813, 10721, 11814, 11817, 5092, 11841, 6818, 11973, 11974, 11977, 7577, 11986, 5396, 6247, 2]

// Module 11796 (ConjureNativeChat)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import intl5 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import _modDef3849 from "module_3849" /* 3849 */;
import LinearGradientDefault from "LinearGradient" /* 5396 */;
import _modDef6247 from "module_6247" /* 6247 */;
import conjureChatTurns from "conjureChatTurns" /* 10665 */;
import conjurePublishCard from "conjurePublishCard" /* 11799 */;
import ConjureTodoState from "ConjureTodoState" /* 11801 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 11802 */;
import ConjureSecretRequestState from "ConjureSecretRequestState" /* 11803 */;
import conjurePendingPlan from "conjurePendingPlan" /* 11804 */;
import ConjureChatGrouping from "ConjureChatGrouping" /* 11805 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 11806 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 11811 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 11812 */;
import ConjureMessageRowDefault from "ConjureMessageRow" /* 11841 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 1999 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 10663 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10678 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10680 */;
import ConjureChatStore from "ConjureChatStore" /* 10664 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5096 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let fadingEdgeLength, map, nativeEvent, set, viewableItems;

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
let c17 = 500;
let c18 = 52;
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
let closure_23 = createStyles(obj2);
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
  const cResult = obj.c(260);
  projectId = projectId.projectId;
  ({ transcriptTopInset, onRestoreVersion } = projectId);
  const hidden = projectId.hidden;
  closure_23();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [stateFromStores9];
    class T {
      constructor() {
        return "active" === closure_6.getState();
      }
    }
    const items1 = [];
    cResult[0] = items;
    cResult[1] = T;
    cResult[2] = items1;
    tmp10 = items1;
    tmp8 = items;
    tmp9 = T;
  } else {
    [tmp8, tmp9, tmp10] = cResult;
  }
  const tmp2Result = tmp2(tmp4[14]);
  stateFromStores = tmp2Result.useStateFromStores(tmp8, tmp9, tmp10);
  onRestoreVersion(tmp4[15])(projectId);
  let tmp14 = onRestoreVersion(tmp4[16])(projectId);
  const tmp2Result15 = tmp2(tmp4[16]);
  const conjureRemixStartedAt = tmp2Result15.useConjureRemixStartedAt(projectId);
  const bottom = onRestoreVersion(tmp4[17])().bottom;
  if (cResult[3] === stateFromStores) {
    let tmp16;
    let tmp17;
    let tmp21;
    let tmp24;
    let tmp23;
    let tmp28;
    let tmp30;
    let tmp29;
    if (cResult[4] === projectId) {
      tmp16 = cResult[5];
      tmp17 = cResult[6];
    }
    const obj4 = stateFromStores3;
    const effect = stateFromStores3.useEffect(tmp16, tmp17);
    class T {
      constructor() {
        return "active" === closure_6.getState();
      }
    }
    let tmp19 = tmp3;
    const tmp2Result16 = tmp2(tmp4[18]);
    const ackConjureProjectWhileViewing = tmp2Result16.useAckConjureProjectWhileViewing(projectId);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ConjureChatStore];
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[7] = items2;
      tmp21 = items2;
    } else {
      tmp21 = cResult[7];
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
      tmp24 = V;
      tmp23 = items3;
    } else {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      tmp24 = cResult[10];
    }
    const tmp2Result17 = tmp2(tmp4[14]);
    const stateFromStores1 = tmp2Result17.useStateFromStores(tmp21, tmp24, tmp23);
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
      tmp28 = items4;
    } else {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
    }
    if (cResult[12] !== projectId) {
      class J {
        constructor() {
          publishStatus = closure_12.getPublishStatus(projectId);
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
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[12] = projectId;
      cResult[13] = J;
      cResult[14] = items5;
      tmp30 = items5;
      tmp29 = J;
    } else {
      class J {
        constructor() {
          publishStatus = closure_12.getPublishStatus(projectId);
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
      tmp30 = cResult[14];
    }
    const tmp2Result18 = tmp2(tmp4[14]);
    const stateFromStores2 = tmp2Result18.useStateFromStores(tmp28, tmp29, tmp30);
    if (cResult[15] === stateFromStores1) {
      let tmp39;
      let tmp41;
      let tmp40;
      let tmp46;
      let tmp48;
      let tmp47;
      let tmp53;
      let tmp55;
      let tmp54;
      let tmp60;
      let tmp62;
      let tmp61;
      let tmp67;
      let tmp69;
      let tmp68;
      let tmp83;
      let tmp85;
      let tmp84;
      let tmp90;
      let tmp92;
      let tmp91;
      let tmp96;
      let tmp98;
      let tmp97;
      class J {
        constructor() {
          publishStatus = closure_12.getPublishStatus(projectId);
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
      _slicedToArray = tmp34;
      const _Symbol3 = Symbol;
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      if (tmp38 === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[18] = items6;
        tmp39 = items6;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        const items7 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[19] = projectId;
        cResult[20] = tmp42;
        cResult[21] = items7;
        tmp41 = items7;
        tmp40 = tmp42;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        tmp41 = cResult[21];
      }
      const tmp2Result19 = tmp2(tmp4[14]);
      stateFromStores3 = tmp2Result19.useStateFromStores(tmp39, tmp40, tmp41);
      const _Symbol4 = Symbol;
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        const items8 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[22] = items8;
        tmp46 = items8;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
      if (cResult[23] !== projectId) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        const items9 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[23] = projectId;
        cResult[24] = tmp49;
        cResult[25] = items9;
        tmp48 = items9;
        tmp47 = tmp49;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        tmp48 = cResult[25];
      }
      const tmp2Result20 = tmp2(tmp4[14]);
      const stateFromStores4 = tmp2Result20.useStateFromStores(tmp46, tmp47, tmp48);
      const _Symbol5 = Symbol;
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        const items10 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[26] = items10;
        tmp53 = items10;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
      if (cResult[27] !== projectId) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        const items11 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[27] = projectId;
        cResult[28] = tmp56;
        cResult[29] = items11;
        tmp55 = items11;
        tmp54 = tmp56;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        tmp55 = cResult[29];
      }
      const tmp2Result21 = tmp2(tmp4[14]);
      const stateFromStores5 = tmp2Result21.useStateFromStores(tmp53, tmp54, tmp55);
      const _Symbol6 = Symbol;
      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        const items12 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[30] = items12;
        tmp60 = items12;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
      if (cResult[31] !== projectId) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        const items13 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[31] = projectId;
        cResult[32] = tmp63;
        cResult[33] = items13;
        tmp62 = items13;
        tmp61 = tmp63;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        tmp62 = cResult[33];
      }
      const tmp2Result22 = tmp2(tmp4[14]);
      const stateFromStores6 = tmp2Result22.useStateFromStores(tmp60, tmp61, tmp62);
      const _Symbol7 = Symbol;
      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        const items14 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[34] = items14;
        tmp67 = items14;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
      if (cResult[35] !== projectId) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        const items15 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[35] = projectId;
        cResult[36] = tmp70;
        cResult[37] = items15;
        tmp69 = items15;
        tmp68 = tmp70;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        tmp69 = cResult[37];
      }
      class H {
        constructor() {
          tmp = closure_2;
          if (tmp) {
            tmp2 = ensureConnection;
            tmp3 = projectId;
            tmp4 = ensureConnection(projectId);
          }
          return;
        }
      }
      const tmp2Result23 = tmp2(tmp4[14]);
      const stateFromStores7 = tmp2Result23.useStateFromStores(tmp67, tmp68, tmp69);
      [tmp76, tmp77] = obj4.useState(null);
      View = tmp77;
      let tmp78 = null == tmp76;
      _slicedToArray(obj4.useState(null), 2);
      if (!tmp78) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        tmp78 = tmp79;
      }
      if (!tmp78) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
      if (cResult[38] !== projectId) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        cResult[38] = projectId;
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[39] = tmp81;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
      const _Symbol8 = Symbol;
      if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        const items16 = [ConjureConnectionStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[40] = items16;
        tmp83 = items16;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
      if (cResult[41] !== projectId) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        const items17 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[41] = projectId;
        cResult[42] = tmp86;
        cResult[43] = items17;
        tmp85 = items17;
        tmp84 = tmp86;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        tmp85 = cResult[43];
      }
      const tmp2Result24 = tmp2(tmp4[14]);
      const stateFromStores8 = tmp2Result24.useStateFromStores(tmp83, tmp84, tmp85);
      const _Symbol9 = Symbol;
      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
        const items18 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[44] = items18;
        tmp90 = items18;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
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
      if (cResult[45] !== projectId) {
        class Re {
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
        cResult[46] = Re;
        cResult[47] = items19;
        tmp92 = items19;
        tmp91 = Re;
      } else {
        class Re {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
        tmp92 = cResult[47];
      }
      const tmp2Result25 = tmp2(tmp4[14]);
      stateFromStores9 = tmp2Result25.useStateFromStores(tmp90, tmp91, tmp92);
      const _Symbol10 = Symbol;
      if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
        class Re {
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
        tmp96 = items20;
      } else {
        class Re {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
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
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[49] = projectId;
        cResult[50] = Le;
        cResult[51] = items21;
        tmp98 = items21;
        tmp97 = Le;
      } else {
        class Le {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
        tmp98 = cResult[51];
      }
      const tmp2Result26 = tmp2(tmp4[14]);
      const stateFromStores10 = tmp2Result26.useStateFromStores(tmp96, tmp97, tmp98);
      if (cResult[52] === stateFromStores8) {
        class Le {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
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
    tmp34 = withLivePublishCardResult;
  }
  class H {
    constructor() {
      tmp = closure_2;
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
  cResult[5] = H;
  cResult[6] = items22;
  tmp17 = items22;
  tmp16 = H;
}) : (function ConjureNativeChat(projectId) {
  let FlashList;
  let Text;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let _undefined5;
  let c13;
  let c14;
  let c18;
  let c24;
  let c25;
  let c31;
  let c32;
  let c42;
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
  let tmp100;
  let tmp110;
  let tmp21;
  let tmp22;
  let tmp2Result23;
  let tmp38;
  let tmp39;
  let tmp54;
  let tmp5Result;
  let tmp66;
  let tmp92Result;
  let tmp92Result6;
  let tmp95;
  const f110818 = () => {
    map = new Map();
    return map;
  };
  const f110821 = () => {
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
  set = undefined;
  let stateFromStores11;
  let memo1;
  c13 = undefined;
  c14 = undefined;
  let onToggleChecklist;
  let closure_16;
  c17 = undefined;
  fadingEdgeLength = undefined;
  let onTogglePlan;
  let closure_20;
  let closure_21;
  let onPickIdea;
  closure_23 = undefined;
  c24 = undefined;
  c25 = undefined;
  let canSend;
  let memo2;
  let joined;
  let memo4;
  let memo5;
  c31 = undefined;
  c32 = undefined;
  let bound;
  let ref;
  let ref2;
  let ref3;
  let ref4;
  let ref5;
  let callback3;
  let callback4;
  c42 = undefined;
  let ref6;
  let ref7;
  let callback7;
  let closure_46;
  let onJumpToReplied;
  let tmp = closure_23();
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
  const items4 = [memo1];
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
  const items18 = [stateFromStores11];
  const items19 = [projectId];
  const tmp2Result = tmp2(tmp3[14]);
  const stateFromStores8 = tmp2Result.useStateFromStores(items18, () => ConjureConnectionStore.getConnState(projectId), items19);
  const items20 = [tmp11];
  const items21 = [projectId];
  const tmp2Result14 = tmp2(tmp3[14]);
  stateFromStores9 = tmp2Result14.useStateFromStores(items20, () => ConjureChatStore.hasLoadedHistory(projectId), items21);
  const items22 = [tmp11];
  const items23 = [projectId];
  const tmp2Result15 = tmp2(tmp3[14]);
  const stateFromStores10 = tmp2Result15.useStateFromStores(items22, () => ConjureChatStore.isHistoryUnavailable(projectId), items23);
  const tmp2Result16 = tmp2(tmp3[20]);
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
  const items25 = [c13];
  const items26 = [projectId];
  const tmp2Result17 = tmp2(tmp3[14]);
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
  [c13, c14] = tmp19(obj3.useState(f110818), 2);
  tmp19(obj3.useState(f110818), 2);
  onToggleChecklist = obj3.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined2((get) => {
      const obj = projectId(stateFromStores[21]);
      return obj.toggleChecklist(get, closure_0, closure_1);
    });
  }, []);
  const items28 = [memo];
  closure_16 = obj3.useMemo(() => {
    const obj = conjurePendingPlan;
    return obj.planVersions(memo);
  }, items28);
  [c17, c18] = tmp19(obj3.useState(f110821), 2);
  tmp19(obj3.useState(f110821), 2);
  onTogglePlan = obj3.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined3((get) => {
      const obj = projectId(stateFromStores[23]);
      return obj.togglePlanCard(get, closure_0, closure_1);
    });
  }, []);
  const items29 = [memo];
  closure_20 = obj3.useMemo(() => {
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
  closure_21 = obj3.useCallback(() => {
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
  const items32 = [projectId];
  [tmp38, tmp39] = tmp19(tmp5(tmp3[28])(projectId), 2);
  const items33 = [projectId];
  tmp19(tmp5(tmp3[28])(projectId), 2);
  const callback1 = obj3.useCallback(() => {
    const intl = intl5.intl;
    authStore(projectId, intl.string(_modDef3849["t5CN3+"]));
  }, items32);
  closure_23 = obj3.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
    const obj = conjureAttachmentDrafts;
    const obj2 = { clarificationAnswers, attachments };
    obj.sendConjureCardReply(projectId, implementation_prompt, obj2);
  }, items33);
  [c24, c25] = tmp19(obj3.useState(null), 2);
  let tmp43 = tmp42;
  tmp19(obj3.useState(null), 2);
  if (!tmp43) {
    let str = "connecting";
    tmp43 = "connecting" === stateFromStores8;
  }
  canSend = tmp43;
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
  const items35 = [tmp43, memo2, joined];
  const items36 = [memo];
  const memo3 = obj3.useMemo(() => ({ canSend, pendingPlanId: memo2, secretStatusesKey: joined }), items35);
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
  let tmp49 = null != memo5;
  if (tmp49) {
    tmp49 = memo5.steps.length > 0 || memo5.tasks.length > 0;
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
  [obj18, c31] = tmp19(obj3.useState(null), 2);
  tmp19(obj3.useState(null), 2);
  [tmp54, c32] = tmp19(obj3.useState(64), 2);
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
  bound = tmp54;
  const tmp2Result18 = tmp2(tmp3[31]);
  if (!tmp2Result18.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp54, fadingEdgeLength);
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
    ref4.current = timestamp + c17;
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
  [tmp66, c42] = tmp19(obj3.useState(false), 2);
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
    const tmp4 = c42;
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
      ref4.current = Math.min(timestamp + c17, ref5.current);
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
    const obj = { itemVisiblePercentThreshold: projectId(stateFromStores[32]).MIN_VISIBLE_PERCENT };
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
    const intl3 = tmp2(tmp3[26]).intl;
    memo6 = intl3.string(tmp5(tmp3[27]).mKK6wB);
  } else if (stateFromStores4) {
    const intl2 = tmp2(tmp3[26]).intl;
    memo6 = intl2.string(tmp5(tmp3[27]).xnCAaP);
  } else if (memo6 == null) {
    let intl = tmp2(tmp3[26]).intl;
    memo6 = intl.string(tmp5(tmp3[27]).L9EDub);
  }
  const items45 = [memo, memo4];
  let tmp73;
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
    tmp73 = memo[memo4];
  }
  let checklistLiveResult = null == tmp73;
  if (!checklistLiveResult) {
    const tmp2Result19 = tmp2(tmp3[21]);
    checklistLiveResult = tmp2Result19.checklistLive(tmp73);
  }
  let conjureTurnStartedAtResult;
  if (null != tmp73) {
    const tmp2Result20 = tmp2(tmp3[33]);
    conjureTurnStartedAtResult = tmp2Result20.conjureTurnStartedAt(tmp73);
  }
  const items46 = [memo5];
  let tmp77;
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
      render_id1 = tmp78.render_id;
    }
    tmp77 = render_id1;
  }
  let tmp80 = null != tmp77;
  if (tmp80) {
    tmp80 = null != obj18 && !obj18.has(tmp77) || tmp66;
    null != obj18 && !obj18.has(tmp77) || tmp66;
  }
  let tmp82 = null;
  if (stateFromStores3) {
    tmp82 = null;
    if (tmp49) {
      tmp82 = null;
      if (tmp80) {
        tmp82 = memo6;
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
  closure_46 = obj3.useMemo(() => {
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
  const items51 = [projectId];
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
  const items52 = [projectId];
  const callback13 = obj3.useCallback((arg0, arg1) => {
    ref2.current = true;
    authStore(projectId, arg0, arg1);
  }, items51);
  let connectionLabelResult = null;
  const callback14 = obj3.useCallback(() => {
    metroImportAll(projectId);
  }, items52);
  if ("open" !== stateFromStores8) {
    const tmp2Result21 = tmp2(tmp3[36]);
    connectionLabelResult = tmp2Result21.connectionLabel(stateFromStores8);
  }
  const obj12 = { style: tmp.container, children: items53 };
  const tmp2Result22 = tmp2(tmp3[37]);
  const conjureControlActive = tmp2Result22.useConjureControlActive(projectId);
  items53 = [onToggleChecklist(tmp5(tmp3[38]), { thinking: stateFromStores3, bleedBottom: bottom }), , ];
  const obj13 = { style: tmp.transcriptArea, children: items56 };
  const obj14 = { clearance: tmp54, children: onToggleChecklist(FlashList, obj15) };
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
    contentInset: tmp95,
    ListHeaderComponent: tmp92Result,
    style: items54,
    contentContainerStyle: items55,
    data: memo,
    extraData: memo3,
    maintainVisibleContentPosition: { startRenderingFromBottom: true, autoscrollToBottomThreshold: 0.2 },
    keyExtractor(render_id) {
      return render_id.render_id;
    },
    ListFooterComponent: onToggleChecklist(tmp5Result, obj22),
    ListEmptyComponent: tmp92Result6,
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
      let tmp10;
      let tmp14;
      let tmp16;
      let tmp17;
      let tmp19;
      let version;
      ({ item, index } = arg0);
      const obj = { projectId, message: item, groupStart: flag, first: 0 === index, isNewest: item.render_id === render_id, checklistSuperseded: set.has(item.render_id), secretRequestStatus: str, checklistExpanded: obj3.checklistExpanded(c13, item.render_id, obj2.has(item.render_id)), onToggleChecklist, planVersion: version, planSuperseded: true === superseded, planExpanded: planCardExpanded(tmp10, render_id, true === superseded1), onTogglePlan, replied: closure_46.get(item.render_id), onJumpToReplied, onApprovePlan: tmp14, onPickIdea, onAnswerClarification: tmp16, clarificationDismissed: tmp17, onDismissClarification, onRestoreVersion: tmp19 };
      flag = closure_20[index];
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
      obj3 = ConjureTodoState;
      const value = closure_16.get(item.render_id);
      version = undefined;
      if (value != null) {
        version = value.version;
      }
      const value3 = obj4.get(item.render_id);
      superseded = undefined;
      if (value3 != null) {
        superseded = value3.superseded;
      }
      planCardExpanded = tmp4(11804).planCardExpanded;
      render_id = item.render_id;
      conjurePendingPlan;
      const value4 = obj4.get(item.render_id);
      superseded1 = undefined;
      tmp10 = c17;
      if (value4 != null) {
        superseded1 = value4.superseded;
      }
      tmp14 = undefined;
      if (canSend) {
        if (item.render_id === memo2) {
          tmp14 = closure_21;
        }
      }
      tmp16 = undefined;
      if (canSend) {
        tmp16 = closure_23;
      }
      tmp19 = undefined;
      tmp17 = null != item.clarification && item.clarification.id === c24;
      if (!stateFromStores3) {
        tmp19 = importDefault;
      }
      return tmp(tmp3, obj);
    }
  };
  FlashList = tmp2(tmp3[42]).FlashList;
  tmp2Result23 = tmp2(tmp3[31]);
  tmp2Result23.isIOS() && undefined;
  tmp95 = undefined;
  const tmp2Result24 = tmp2(tmp3[31]);
  const tmp93 = c24;
  if (tmp2Result24.isIOS()) {
    tmp95 = { top: num };
    const obj16 = { top: num };
  }
  tmp92Result = null;
  const tmp2Result25 = tmp2(tmp3[31]);
  if (!tmp2Result25.isIOS()) {
    tmp92Result = null;
    if (num > 0) {
      const obj17 = { style: obj19 };
      obj19 = { height: num };
      tmp92Result = tmp92(tmp91, obj17);
    }
  }
  items54 = [tmp.transcript, ];
  const tmp2Result26 = tmp2(tmp3[31]);
  let tmp98 = !tmp2Result26.isIOS();
  tmp2Result26.isIOS();
  if (tmp98) {
    tmp98 = { marginBottom: tmp54 - bound };
    const obj20 = { marginBottom: tmp54 - bound };
  }
  items54[1] = tmp98;
  items55 = [tmp.transcriptContent, { paddingBottom: bound + tmp5(tmp3[9]).space.PX_8 }];
  obj22 = { projectId, messages: memo, draftHasText: tmp38, onAskForIdeas: tmp100, onShow: callback12 };
  tmp100 = undefined;
  ({ paddingBottom: bound + tmp5(tmp3[9]).space.PX_8 });
  tmp5Result = tmp5(tmp3[39]);
  if (tmp43) {
    tmp100 = callback1;
  }
  let tmp101 = "loading" === chatEmptyStateResult;
  tmp92Result6 = null;
  if (!tmp101) {
    let AyiQEp;
    const obj23 = { style: tmp.placeholder, children: onToggleChecklist(Text, obj24) };
    Text = tmp2(tmp3[40]).Text;
    const intl4 = tmp2(tmp3[26]).intl;
    const string = intl4.string;
    if ("unavailable" === chatEmptyStateResult) {
      AyiQEp = tmp5(tmp3[27]).Td4Sf4;
    } else {
      AyiQEp = tmp5(tmp3[27]).AyiQEp;
    }
    obj24 = { variant: "text-sm/normal", color: "text-muted", children: string(AyiQEp) };
    tmp92Result6 = tmp92(tmp91, obj23);
  }
  items56 = [onToggleChecklist(tmp93, obj14), , ];
  let tmp92Result7 = null;
  if (tmp27) {
    const obj25 = { projectId };
    tmp92Result7 = tmp92(tmp5(tmp3[43]), obj25);
  }
  items56[1] = tmp92Result7;
  let tmp92Result8 = null;
  if (null != tmp82) {
    const obj26 = { line: tmp82, onJumpToActivity: callback11, bottom: tmp5(tmp3[9]).space.PX_12 + tmp54, todos: memo8, todosLive: checklistLiveResult, agents: memo9 };
    const tmp5Result4 = tmp5(tmp3[44]);
    tmp92Result8 = tmp92(tmp5Result4, obj26);
  }
  items56[2] = tmp92Result8;
  items53[1] = closure_16(memo, obj13);
  const obj27 = { style: tmp.bottomStack, onLayout: callback2, children: items57 };
  const obj28 = { projectId, thinking: stateFromStores3, turnStartedAt: conjureTurnStartedAtResult, remixStartedAt: conjureRemixStartedAt, compacting: stateFromStores4, saving: stateFromStores5, recalling: tmp101, activity: stateFromStores6, projectUsage: stateFromStores7, connLabel: connectionLabelResult, controlling: conjureControlActive, connFailed: "failed" === stateFromStores8, thinkingOpen: tmp27, onToggleThinking: callback };
  const tmp5Result5 = tmp5(tmp3[45]);
  if (tmp101) {
    tmp101 = 0 === memo.length;
  }
  items57 = [onToggleChecklist(tmp5Result5, obj28), , , ];
  let tmp92Result9 = null;
  if (null != tmp7) {
    const obj29 = { style: tmp.notice, children: onToggleChecklist(tmp2(tmp3[46]).NewInlineNotice, obj30) };
    obj30 = { type: "critical", role: "alert", message: null, action: null };
    ({ message: obj45.message, retry: obj45.action } = tmp7);
    tmp92Result9 = tmp92(tmp91, obj29);
  }
  items57[1] = tmp92Result9;
  let tmp92Result10 = null;
  if (null != tmp6) {
    const obj31 = { style: tmp.notice, children: onToggleChecklist(tmp2(tmp3[46]).NewInlineNotice, obj32) };
    obj32 = { type: "warning", role: "status", message: null, onDismiss: null };
    ({ message: obj47.message, onDismiss: obj47.onDismiss } = tmp6);
    tmp92Result10 = tmp92(tmp91, obj31);
  }
  items57[2] = tmp92Result10;
  const obj33 = { projectId, canSend: tmp43, running: stateFromStores3, onSend: callback13, onInterrupt: tmp110, onDraftHasTextChange: tmp39, hidden };
  tmp110 = undefined;
  const tmp5Result6 = tmp5(tmp3[47]);
  if (stateFromStores3) {
    tmp110 = callback14;
  }
  items57[3] = onToggleChecklist(tmp5Result6, obj33);
  items53[2] = closure_16(memo, obj27);
  return closure_16(memo, obj12);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function TranscriptFade(children) {
  let obj6;
  let transcript;
  let transcript2;
  const obj = react2;
  const cResult = obj.c(15);
  children = children.children;
  const clearance = children.clearance;
  const tmp3 = closure_23();
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
    const bound = Math.max(0, clearance - c18);
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
          const tmp30 = authStore3(_modDef6247, obj7);
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
  const tmp = closure_23();
  let tmp3 = children;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const obj2 = { style: tmp.transcript, maskElement: authStore4(View, obj3), children };
    obj3 = { style: tmp.transcript, children: items };
    items = [, , ];
    const obj4 = { style: tmp.maskSolid };
    const tmp6 = _modDef6247;
    items[0] = authStore3(View, obj4);
    const obj5 = { style: tmp.maskFade, colors: items, locations, start, end };
    items[1] = authStore3(LinearGradientDefault, obj5);
    const obj6 = { style: obj7 };
    const _Math = Math;
    obj7 = { height: Math.max(0, clearance - c18) };
    items[2] = authStore3(View, obj6);
    tmp3 = authStore3(tmp6, obj2);
  }
  return tmp3;
});
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeChat.tsx");

export default tmp5;
