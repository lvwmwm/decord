// Module ID: 12043
// Function ID: 12044
// Name: ConjureNativeChat
// Dependencies: [32, 19, 17, 2001, 10898, 10913, 10915, 10899, 21, 587, 683, 5154, 558, 576, 504, 12044, 12045, 1633, 10920, 12046, 12047, 12048, 12050, 12051, 12052, 12053, 12054, 1128, 3865, 12055, 10900, 12049, 1384, 12057, 12058, 12059, 12060, 12061, 10955, 12062, 12065, 5150, 12089, 7038, 12229, 12230, 12233, 7791, 12242, 5454, 6467, 2]

// Module 12043 (ConjureNativeChat)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import intl5 from "intl" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import _modDef3865 from "module_3865" /* 3865 */;
import LinearGradientDefault from "LinearGradient" /* 5454 */;
import _modDef6467 from "module_6467" /* 6467 */;
import conjureChatTurns from "conjureChatTurns" /* 10900 */;
import conjurePublishCard from "conjurePublishCard" /* 12046 */;
import ConjureTodoState from "ConjureTodoState" /* 12048 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 12049 */;
import ConjureSecretRequestState from "ConjureSecretRequestState" /* 12050 */;
import conjureCardOverrides from "conjureCardOverrides" /* 12051 */;
import conjurePendingPlan from "conjurePendingPlan" /* 12052 */;
import ConjureChatGrouping from "ConjureChatGrouping" /* 12053 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 12054 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 12059 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 12060 */;
import ConjureMessageRowDefault from "ConjureMessageRow" /* 12089 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 2001 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 10898 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10913 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10915 */;
import ConjureChatStore from "ConjureChatStore" /* 10899 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5154 */;
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
  let canSend;
  let closure_3;
  let closure_5;
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
  let stateFromStores;
  let stateFromStores3;
  let stateFromStores9;
  let tmp28;
  let tmp59;
  let tmp6;
  let tmp60;
  let tmp7;
  let tmp8;
  let transcriptTopInset;
  let tmp = projectId;
  const tmp2 = stateFromStores;
  let obj = projectId(stateFromStores[13]);
  const cResult = obj.c(262);
  projectId = projectId.projectId;
  ({ transcriptTopInset, onRestoreVersion } = projectId);
  const hidden = projectId.hidden;
  if (undefined !== transcriptTopInset) {
    let tmp4 = transcriptTopInset;
  }
  let tmp5 = closure_23();
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
    tmp8 = items1;
    tmp6 = items;
    tmp7 = T;
  } else {
    [tmp6, tmp7, tmp8] = cResult;
  }
  const tmpResult = tmp(tmp2[14]);
  stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7, tmp8);
  onRestoreVersion(tmp2[15])(projectId);
  onRestoreVersion(tmp2[16])(projectId);
  const tmpResult14 = tmp(tmp2[16]);
  const conjureRemixStartedAt = tmpResult14.useConjureRemixStartedAt(projectId);
  const bottom = onRestoreVersion(tmp2[17])().bottom;
  if (cResult[3] === stateFromStores) {
    let tmp14;
    let tmp15;
    let tmp19;
    let tmp22;
    let tmp21;
    let tmp24;
    let tmp26;
    let tmp25;
    if (cResult[4] === projectId) {
      tmp14 = cResult[5];
      tmp15 = cResult[6];
    }
    let tmp16 = stateFromStores3;
    const effect = stateFromStores3.useEffect(tmp14, tmp15);
    class T {
      constructor() {
        return "active" === closure_6.getState();
      }
    }
    const ackConjureProjectWhileViewing = obj4.useAckConjureProjectWhileViewing(projectId, stateFromStores);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ConjureChatStore];
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[7] = items2;
      tmp19 = items2;
    } else {
      tmp19 = cResult[7];
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
      tmp22 = V;
      tmp21 = items3;
    } else {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      tmp22 = cResult[10];
    }
    const tmpResult15 = tmp(tmp2[14]);
    const stateFromStores1 = tmpResult15.useStateFromStores(tmp19, tmp22, tmp21);
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
      tmp24 = items4;
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
      tmp26 = items5;
      tmp25 = J;
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
      tmp26 = cResult[14];
    }
    const tmpResult16 = tmp(tmp2[14]);
    const stateFromStores2 = tmpResult16.useStateFromStores(tmp24, tmp25, tmp26);
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
      let tmp66;
      let tmp68;
      let tmp67;
      let tmp71;
      let tmp73;
      let tmp72;
      let tmp76;
      let tmp78;
      let tmp77;
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
      _slicedToArray = tmp28;
      const _Symbol3 = Symbol;
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      if (tmp30 === Symbol.for("react.memo_cache_sentinel")) {
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
        tmp31 = items6;
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
        cResult[20] = tmp34;
        cResult[21] = items7;
        tmp33 = items7;
        tmp32 = tmp34;
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
        tmp33 = cResult[21];
      }
      const tmpResult17 = tmp(tmp2[14]);
      stateFromStores3 = tmpResult17.useStateFromStores(tmp31, tmp32, tmp33);
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
        tmp36 = items8;
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
        cResult[24] = tmp39;
        cResult[25] = items9;
        tmp38 = items9;
        tmp37 = tmp39;
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
        tmp38 = cResult[25];
      }
      const tmpResult18 = tmp(tmp2[14]);
      const stateFromStores4 = tmpResult18.useStateFromStores(tmp36, tmp37, tmp38);
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
        tmp41 = items10;
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
        cResult[28] = tmp44;
        cResult[29] = items11;
        tmp43 = items11;
        tmp42 = tmp44;
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
        tmp43 = cResult[29];
      }
      const tmpResult19 = tmp(tmp2[14]);
      const stateFromStores5 = tmpResult19.useStateFromStores(tmp41, tmp42, tmp43);
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
        tmp46 = items12;
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
        cResult[32] = tmp49;
        cResult[33] = items13;
        tmp48 = items13;
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
        tmp48 = cResult[33];
      }
      const tmpResult20 = tmp(tmp2[14]);
      const stateFromStores6 = tmpResult20.useStateFromStores(tmp46, tmp47, tmp48);
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
        tmp51 = items14;
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
        cResult[36] = tmp54;
        cResult[37] = items15;
        tmp53 = items15;
        tmp52 = tmp54;
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
        tmp53 = cResult[37];
      }
      const tmpResult21 = tmp(tmp2[14]);
      const stateFromStores7 = tmpResult21.useStateFromStores(tmp51, tmp52, tmp53);
      class N {
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
      [tmp59, tmp60] = tmp58;
      View = tmp60;
      let tmp61 = null == tmp59;
      if (!tmp61) {
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
        tmp61 = tmp62;
      }
      if (!tmp61) {
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
        cResult[39] = tmp64;
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
        tmp66 = items16;
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
        cResult[42] = tmp69;
        cResult[43] = items17;
        tmp68 = items17;
        tmp67 = tmp69;
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
        tmp68 = cResult[43];
      }
      const tmpResult22 = tmp(tmp2[14]);
      const stateFromStores8 = tmpResult22.useStateFromStores(tmp66, tmp67, tmp68);
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
        tmp71 = items18;
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
        const items19 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[45] = projectId;
        cResult[46] = tmp74;
        cResult[47] = items19;
        tmp73 = items19;
        tmp72 = tmp74;
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
        tmp73 = cResult[47];
      }
      const tmpResult23 = tmp(tmp2[14]);
      stateFromStores9 = tmpResult23.useStateFromStores(tmp71, tmp72, tmp73);
      const _Symbol10 = Symbol;
      if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
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
        const items20 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[48] = items20;
        tmp76 = items20;
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
        tmp78 = items21;
        tmp77 = Be;
      } else {
        class Be {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
        tmp78 = cResult[51];
      }
      const tmpResult24 = tmp(tmp2[14]);
      const stateFromStores10 = tmpResult24.useStateFromStores(tmp76, tmp77, tmp78);
      if (cResult[52] === stateFromStores8) {
        class Be {
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
    tmp28 = withLivePublishCardResult;
  }
  class N {
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
  cResult[5] = N;
  cResult[6] = items22;
  tmp15 = items22;
  tmp14 = N;
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
  let c33;
  let c34;
  let c44;
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
  let obj31;
  let obj33;
  let onDismissClarification;
  let tmp102;
  let tmp112;
  let tmp21;
  let tmp22;
  let tmp2Result23;
  let tmp38;
  let tmp39;
  let tmp56;
  let tmp5Result;
  let tmp68;
  let tmp94Result;
  let tmp94Result6;
  let tmp97;
  const f111651 = () => {
    map = new Map();
    return map;
  };
  const f111654 = () => {
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
  let dismissedAppBuildRequestId;
  let onDismissAppBuildRequest;
  let canSend;
  let memo2;
  let joined;
  let memo4;
  let memo5;
  c33 = undefined;
  c34 = undefined;
  let bound;
  let ref;
  let ref2;
  let ref3;
  let ref4;
  let ref5;
  let callback3;
  let callback4;
  c44 = undefined;
  let ref6;
  let ref7;
  let callback7;
  let closure_48;
  let onJumpToReplied;
  let tmp = closure_23();
  let tmp2 = projectId;
  let tmp3 = stateFromStores;
  let obj = projectId(stateFromStores[14]);
  items = [stateFromStores3];
  stateFromStores = obj.useStateFromStores(items, () => "active" === stateFromStores3.getState(), []);
  let tmp5 = importDefault;
  let tmp6 = require("useConjureIncompleteAppNotice")(projectId);
  const tmp7 = require("useConjureRemixNotice")(projectId);
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
  const ackConjureProjectWhileViewing = obj4.useAckConjureProjectWhileViewing(projectId, stateFromStores);
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
  const items20 = [c14];
  const items21 = [projectId];
  const tmp2Result14 = tmp2(tmp3[14]);
  stateFromStores9 = tmp2Result14.useStateFromStores(items20, () => ConjureChatStore.hasLoadedHistory(projectId), items21);
  const items22 = [c14];
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
  [c13, c14] = tmp19(obj3.useState(f111651), 2);
  tmp19(obj3.useState(f111651), 2);
  onToggleChecklist = obj3.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined2((get) => {
      const obj = projectId(stateFromStores[23]);
      return obj.toggleConjureCard(get, closure_0, closure_1);
    });
  }, []);
  const items28 = [memo];
  closure_16 = obj3.useMemo(() => {
    const obj = conjurePendingPlan;
    return obj.planVersions(memo);
  }, items28);
  [c17, c18] = tmp19(obj3.useState(f111654), 2);
  tmp19(obj3.useState(f111654), 2);
  onTogglePlan = obj3.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined3((get) => {
      const obj = projectId(stateFromStores[23]);
      return obj.toggleConjureCard(get, closure_0, closure_1);
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
    sendConjureCardReply(projectId, intl.string(_modDef3865.EMgIuY));
  }, items30);
  const items31 = [projectId];
  onPickIdea = obj3.useCallback((implementation_prompt) => {
    const obj = conjureAttachmentDrafts;
    obj.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items31);
  const items32 = [projectId];
  [tmp38, tmp39] = tmp19(tmp5(tmp3[29])(projectId), 2);
  const items33 = [projectId];
  tmp19(tmp5(tmp3[29])(projectId), 2);
  const callback1 = obj3.useCallback(() => {
    const intl = intl5.intl;
    authStore(projectId, intl.string(_modDef3865["t5CN3+"]));
  }, items32);
  closure_23 = obj3.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
    const obj = conjureAttachmentDrafts;
    const obj2 = { clarificationAnswers, attachments };
    obj.sendConjureCardReply(projectId, implementation_prompt, obj2);
  }, items33);
  [c24, c25] = tmp19(obj3.useState(null), 2);
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
  [obj18, c33] = tmp19(obj3.useState(null), 2);
  tmp19(obj3.useState(null), 2);
  [tmp56, c34] = tmp19(obj3.useState(64), 2);
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
  const tmp2Result18 = tmp2(tmp3[32]);
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
  [tmp68, c44] = tmp19(obj3.useState(false), 2);
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
    const tmp4 = c44;
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
    const obj = { itemVisiblePercentThreshold: projectId(stateFromStores[33]).MIN_VISIBLE_PERCENT };
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
    const tmp2Result19 = tmp2(tmp3[21]);
    checklistLiveResult = tmp2Result19.checklistLive(tmp75);
  }
  let conjureTurnStartedAtResult;
  if (null != tmp75) {
    const tmp2Result20 = tmp2(tmp3[34]);
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
  closure_48 = obj3.useMemo(() => {
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
    const tmp2Result21 = tmp2(tmp3[37]);
    connectionLabelResult = tmp2Result21.connectionLabel(stateFromStores8);
  }
  const obj12 = { style: tmp.container, children: items53 };
  const tmp2Result22 = tmp2(tmp3[38]);
  const conjureControlActive = tmp2Result22.useConjureControlActive(projectId);
  items53 = [onToggleChecklist(tmp5(tmp3[39]), { thinking: stateFromStores3, bleedBottom: bottom }), , ];
  const obj13 = { style: tmp.transcriptArea, children: items56 };
  const obj14 = { clearance: tmp56, children: onToggleChecklist(FlashList, obj15) };
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
    contentInset: tmp97,
    ListHeaderComponent: tmp94Result,
    style: items54,
    contentContainerStyle: items55,
    data: memo,
    extraData: memo3,
    maintainVisibleContentPosition: { startRenderingFromBottom: true, autoscrollToBottomThreshold: 0.2 },
    keyExtractor(render_id) {
      return render_id.render_id;
    },
    ListFooterComponent: onToggleChecklist(tmp5Result, obj22),
    ListEmptyComponent: tmp94Result6,
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
      let tmp21;
      let version;
      ({ item, index } = arg0);
      const obj = { projectId, message: item, groupStart: flag, first: 0 === index, isNewest: item.render_id === render_id, checklistSuperseded: set.has(item.render_id), secretRequestStatus: str, checklistExpanded: obj3.conjureCardExpanded(c13, item.render_id, obj2.has(item.render_id)), onToggleChecklist, planVersion: version, planSuperseded: true === superseded, planExpanded: conjureCardExpanded(tmp10, render_id, true === superseded1), onTogglePlan, replied: closure_48.get(item.render_id), onJumpToReplied, onApprovePlan: tmp14, onPickIdea, onAnswerClarification: tmp16, clarificationDismissed: tmp17, onDismissClarification, canSend, appBuildRequestDismissed: tmp19, onDismissAppBuildRequest, onRestoreVersion: tmp21 };
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
      obj3 = conjureCardOverrides;
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
      conjureCardExpanded = tmp4(12051).conjureCardExpanded;
      render_id = item.render_id;
      conjureCardOverrides;
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
      tmp21 = undefined;
      tmp17 = null != item.clarification && item.clarification.id === c24;
      tmp19 = null != item.appBuildRequest && item.appBuildRequest.id === first;
      if (!stateFromStores3) {
        tmp21 = importDefault;
      }
      return tmp(tmp3, obj);
    }
  };
  FlashList = tmp2(tmp3[43]).FlashList;
  tmp2Result23 = tmp2(tmp3[32]);
  tmp2Result23.isIOS() && undefined;
  tmp97 = undefined;
  const tmp2Result24 = tmp2(tmp3[32]);
  const tmp95 = c24;
  if (tmp2Result24.isIOS()) {
    tmp97 = { top: num };
    const obj16 = { top: num };
  }
  tmp94Result = null;
  const tmp2Result25 = tmp2(tmp3[32]);
  if (!tmp2Result25.isIOS()) {
    tmp94Result = null;
    if (num > 0) {
      const obj17 = { style: obj19 };
      obj19 = { height: num };
      tmp94Result = tmp94(tmp93, obj17);
    }
  }
  items54 = [tmp.transcript, ];
  const tmp2Result26 = tmp2(tmp3[32]);
  let tmp100 = !tmp2Result26.isIOS();
  tmp2Result26.isIOS();
  if (tmp100) {
    tmp100 = { marginBottom: tmp56 - bound };
    const obj20 = { marginBottom: tmp56 - bound };
  }
  items54[1] = tmp100;
  items55 = [tmp.transcriptContent, { paddingBottom: bound + tmp5(tmp3[9]).space.PX_8 }];
  obj22 = { projectId, messages: memo, draftHasText: tmp38, onAskForIdeas: tmp102, onShow: callback12 };
  tmp102 = undefined;
  ({ paddingBottom: bound + tmp5(tmp3[9]).space.PX_8 });
  tmp5Result = tmp5(tmp3[40]);
  if (tmp45) {
    tmp102 = callback1;
  }
  let tmp103 = "loading" === chatEmptyStateResult;
  tmp94Result6 = null;
  if (!tmp103) {
    let AyiQEp;
    const obj23 = { style: tmp.placeholder, children: onToggleChecklist(Text, obj24) };
    Text = tmp2(tmp3[41]).Text;
    const intl4 = tmp2(tmp3[27]).intl;
    const string = intl4.string;
    if ("unavailable" === chatEmptyStateResult) {
      AyiQEp = tmp5(tmp3[28]).Td4Sf4;
    } else {
      AyiQEp = tmp5(tmp3[28]).AyiQEp;
    }
    obj24 = { variant: "text-sm/normal", color: "text-muted", children: string(AyiQEp) };
    tmp94Result6 = tmp94(tmp93, obj23);
  }
  items56 = [onToggleChecklist(tmp95, obj14), , ];
  let tmp94Result7 = null;
  if (tmp27) {
    const obj25 = { projectId };
    tmp94Result7 = tmp94(tmp5(tmp3[44]), obj25);
  }
  items56[1] = tmp94Result7;
  let tmp94Result8 = null;
  if (null != tmp84) {
    const obj26 = { line: tmp84, onJumpToActivity: callback11, bottom: tmp5(tmp3[9]).space.PX_12 + tmp56, todos: memo8, todosLive: checklistLiveResult, agents: memo9 };
    const tmp5Result4 = tmp5(tmp3[45]);
    tmp94Result8 = tmp94(tmp5Result4, obj26);
  }
  items56[2] = tmp94Result8;
  items53[1] = closure_16(memo, obj13);
  const obj27 = { style: tmp.bottomStack, onLayout: callback2, children: items57 };
  const obj28 = { projectId, thinking: stateFromStores3, turnStartedAt: conjureTurnStartedAtResult, remixStartedAt: conjureRemixStartedAt, compacting: stateFromStores4, saving: stateFromStores5, recalling: tmp103, activity: stateFromStores6, projectUsage: stateFromStores7, connLabel: connectionLabelResult, controlling: conjureControlActive, connFailed: "failed" === stateFromStores8, thinkingOpen: tmp27, onToggleThinking: callback };
  const tmp5Result5 = tmp5(tmp3[46]);
  if (tmp103) {
    tmp103 = 0 === memo.length;
  }
  items57 = [onToggleChecklist(tmp5Result5, obj28), , , ];
  let tmp94Result9 = null;
  if (null != tmp7) {
    const obj29 = { style: tmp.notice, children: onToggleChecklist(tmp2(tmp3[47]).NewInlineNotice, obj30) };
    obj30 = { type: "critical", role: "alert", message: tmp7.message, action: obj31 };
    obj31 = { text: tmp7.retry.text, onPress: tmp7.retry.onClick };
    tmp94Result9 = tmp94(tmp93, obj29);
  }
  items57[1] = tmp94Result9;
  let tmp94Result10 = null;
  if (null != tmp6) {
    const obj32 = { style: tmp.notice, children: onToggleChecklist(tmp2(tmp3[47]).NewInlineNotice, obj33) };
    obj33 = { type: "warning", role: "status", message: null, onDismiss: null };
    ({ message: obj48.message, onDismiss: obj48.onDismiss } = tmp6);
    tmp94Result10 = tmp94(tmp93, obj32);
  }
  items57[2] = tmp94Result10;
  const obj34 = { projectId, canSend: tmp45, running: stateFromStores3, onSend: callback13, onInterrupt: tmp112, onDraftHasTextChange: tmp39, hidden };
  tmp112 = undefined;
  const tmp5Result6 = tmp5(tmp3[48]);
  if (stateFromStores3) {
    tmp112 = callback14;
  }
  items57[3] = onToggleChecklist(tmp5Result6, obj34);
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
          const tmp30 = authStore3(_modDef6467, obj7);
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
    const tmp6 = _modDef6467;
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
