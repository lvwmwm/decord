// Module ID: 16405
// Function ID: 16406
// Name: VibegrationsNativeComposer
// Dependencies: [5, 32, 19, 17, 4826, 16406, 12644, 1086, 21, 588, 4837, 1127, 3718, 5372, 558, 576, 8493, 16391, 4535, 504, 5463, 10775, 4801, 16266, 11613, 15549, 14524, 4778, 11621, 16407, 4833, 5436, 6026, 10455, 7366, 8065, 4544, 2]

// Module 16405 (VibegrationsNativeComposer)
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import intl4 from "intl" /* 1127 */;
import _modDef3718 from "module_3718" /* 3718 */;
import SendMessageIcon from "SendMessageIcon" /* 4778 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4801 */;
import VibegrationsTypes from "VibegrationsTypes" /* 5372 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 8493 */;
import PlusLargeIcon from "PlusLargeIcon" /* 10455 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 11613 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 11621 */;
import VibegrationsConnectionStore2 from "VibegrationsConnectionStore" /* 12644 */;
import FiltersHorizontalIcon from "FiltersHorizontalIcon" /* 14524 */;
import StopIcon from "StopIcon" /* 15549 */;
import VibegrationsModelSettingsSheet from "VibegrationsModelSettingsSheet" /* 16266 */;
import vibegrationsAttachmentDrafts from "vibegrationsAttachmentDrafts" /* 16391 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 4826 */;
import VibegrationsComposerDraftStore_mod from "VibegrationsComposerDraftStore" /* 16406 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const VibegrationsModelSettingsSheetDefault = VibegrationsModelSettingsSheet;
const VibegrationsConnectionStore = VibegrationsConnectionStore2;
let _require, arr, projectId;

let closure_12;
let map1;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
function trailingItemKey(key) {
  return key.key;
}
function tooLargeText(contentType) {
  let formatVibegrationsAttachmentLimit;
  let obj2;
  const intl = intl4.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { size: formatVibegrationsAttachmentLimit(obj2.vibegrationsAttachmentLimit(contentType)) };
  const cI7t94 = _modDef3718.cI7t94;
  formatVibegrationsAttachmentLimit = VibegrationsTypes.formatVibegrationsAttachmentLimit;
  VibegrationsTypes;
  obj2 = VibegrationsTypes;
  return formatToPlainString(cI7t94, obj);
}
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
let AccessibilityStore = AccessibilityStore_mod;
let VibegrationsComposerDraftStore = VibegrationsComposerDraftStore_mod;
const uploadAttachmentBytes = VibegrationsConnectionStore2.uploadAttachmentBytes;
const Fonts = Constants.Fonts;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { container: obj2, box: obj3, boxFocused: obj4, boxContents: obj5, input: obj6, inputText: obj7, inputPlaceholder: obj8, draftRow: obj9, draftPill: obj10, draftName: { flexShrink: 1 }, trailingButton: size, trailingSlot: { alignItems: "center", justifyContent: "center" }, sendButtonActive: obj11, sendIconActive: obj12 };
obj2 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, overflow: "hidden" };
obj4 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
obj5 = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
obj6 = { flex: 1, paddingVertical: 0, paddingHorizontal: nativeDefault.space.PX_4, maxHeight: 120, justifyContent: "center" };
obj7 = { fontSize: 16, lineHeight: 20, fontFamily: Fonts.PRIMARY_NORMAL, color: nativeDefault.colors.TEXT_DEFAULT, includeFontPadding: false };
obj8 = { color: nativeDefault.colors.TEXT_MUTED };
obj9 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingLeft: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4 };
size = { width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH, height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT };
obj11 = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
obj12 = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
let closure_15 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let closure_13;
  let closure_8;
  let first;
  let obj9;
  let onDismissTip;
  let onPress;
  let onPress2;
  let onSend;
  let running;
  let stopped;
  let tipOpen;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp19;
  let tmp20;
  let tmp31;
  let tmp32;
  let tmp39;
  let tmp40;
  let tmp43;
  let tmp47;
  let tmp5;
  let tmp54;
  let tmp = projectId;
  let tmp2 = onSend;
  let obj = projectId(onSend[15]);
  const cResult = obj.c(138);
  projectId = projectId.projectId;
  const canSend = projectId.canSend;
  ({ running, stopped, onSend } = projectId);
  const onInterrupt = projectId.onInterrupt;
  ({ tipOpen, onDismissTip } = projectId);
  let obj2 = first;
  const ref = first.useRef(null);
  if (cResult[0] !== projectId) {
    const fn = function b() {
      return VibegrationsComposerDraftStore.getDraft(projectId);
    };
    let num = 0;
    cResult[0] = projectId;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const tmp6 = onDismissTip;
  let tmp7 = onDismissTip(obj2.useState(tmp5), 2);
  first = tmp7[0];
  let tmp9 = tmp7[1];
  let closure_6 = tmp9;
  if (cResult[2] !== projectId) {
    class M {
      constructor(draft) {
        const obj = VibegrationsActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_6(draft);
      }
    }
    cResult[2] = projectId;
    cResult[3] = M;
    tmp10 = M;
  } else {
    class M {
      constructor(draft) {
        const obj = VibegrationsActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_6(draft);
      }
    }
  }
  M = tmp10;
  [tmp12, tmp13] = tmp6(obj2.useState(null), 2);
  AccessibilityStore = tmp13;
  tmp6(obj2.useState(null), 2);
  const ref1 = obj2.useRef(null);
  const tmp6Result4 = tmp6(obj2.useState(projectId), 2);
  if (tmp6Result4[0] !== projectId) {
    class M {
      constructor(draft) {
        const obj = VibegrationsActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_6(draft);
      }
    }
    tmp9(ref1.getDraft(projectId));
    tmp13(null);
  }
  if (cResult[4] !== projectId) {
    class G {
      constructor() {
        const current = ref1.current;
        if (current != null) {
          current.setText(VibegrationsComposerDraftStore.getDraft(projectId));
        }
      }
    }
    let items = [projectId];
    cResult[4] = projectId;
    cResult[5] = G;
    cResult[6] = items;
    tmp20 = items;
    tmp19 = G;
  } else {
    class G {
      constructor() {
        const current = ref1.current;
        if (current != null) {
          current.setText(VibegrationsComposerDraftStore.getDraft(projectId));
        }
      }
    }
    tmp20 = cResult[6];
  }
  const effect = obj2.useEffect(tmp19, tmp20);
  const tmpResult = tmp(tmp2[17]);
  const vibegrationsAttachmentDraftList = tmpResult.useVibegrationsAttachmentDraftList(projectId, "chat");
  [r10076, VibegrationsConnectionStore] = tmp6(obj2.useState(false), 2);
  tmp6(obj2.useState(false), 2);
  [r10081, uploadAttachmentBytes] = tmp6(obj2.useState(null), 2);
  tmp6(obj2.useState(null), 2);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class G {
      constructor() {
        const current = ref1.current;
        if (current != null) {
          current.setText(VibegrationsComposerDraftStore.getDraft(projectId));
        }
      }
    }
    cResult[7] = tmp25;
  } else {
    class G {
      constructor() {
        const current = ref1.current;
        if (current != null) {
          current.setText(VibegrationsComposerDraftStore.getDraft(projectId));
        }
      }
    }
  }
  const tmpResult6 = tmp(tmp2[18]);
  const token = tmpResult6.useToken(canSend(tmp2[9]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const tmpResult7 = tmp(tmp2[18]);
  const token1 = tmpResult7.useToken(canSend(tmp2[9]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  const tmpResult8 = tmp(tmp2[18]);
  const token2 = tmpResult8.useToken(canSend(tmp2[9]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  const tmpResult9 = tmp(tmp2[18]);
  const token3 = tmpResult9.useToken(canSend(tmp2[9]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class G {
      constructor() {
        const current = ref1.current;
        if (current != null) {
          current.setText(VibegrationsComposerDraftStore.getDraft(projectId));
        }
      }
    }
    let items1 = [AccessibilityStore];
    function se() {
      return tmp13.useReducedMotion;
    }
    cResult[8] = items1;
    cResult[9] = se;
    tmp32 = se;
    tmp31 = items1;
  } else {
    class G {
      constructor() {
        const current = ref1.current;
        if (current != null) {
          current.setText(VibegrationsComposerDraftStore.getDraft(projectId));
        }
      }
    }
    tmp32 = cResult[9];
  }
  const tmpResult10 = tmp(tmp2[19]);
  const stateFromStores = tmpResult10.useStateFromStores(tmp31, tmp32);
  const bound = Math.max(0, (token1 - token) / 2);
  const bound1 = Math.min(Ie, Math.max(0, (token - 20) / 2));
  let tmp36 = null != tmp12;
  if (tmp36) {
    class G {
      constructor() {
        const current = ref1.current;
        if (current != null) {
          current.setText(VibegrationsComposerDraftStore.getDraft(projectId));
        }
      }
    }
    tmp36 = Math.ceil(tmp12) + 2 * bound1 > 120;
  }
  closure_12 = closure_15();
  const tmp37 = closure_15();
  if (cResult[10] !== projectId) {
    class G {
      constructor() {
        const current = ref1.current;
        if (current != null) {
          current.setText(VibegrationsComposerDraftStore.getDraft(projectId));
        }
      }
    }
    cResult[10] = projectId;
    cResult[11] = tmp39;
  } else {
    class G {
      constructor() {
        const current = ref1.current;
        if (current != null) {
          current.setText(VibegrationsComposerDraftStore.getDraft(projectId));
        }
      }
    }
  }
  tmp39 = tmp38;
  if (cResult[12] !== projectId) {
    class Ie {
      constructor(arg0) {
        const obj = vibegrationsAttachmentDrafts;
        return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
      }
    }
    cResult[12] = projectId;
    cResult[13] = Ie;
    tmp40 = Ie;
  } else {
    class Ie {
      constructor(arg0) {
        const obj = vibegrationsAttachmentDrafts;
        return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
      }
    }
  }
  Ie = tmp40;
  if (cResult[14] !== tmp38) {
    class Ie {
      constructor(arg0) {
        const obj = vibegrationsAttachmentDrafts;
        return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
      }
    }
    _require = onInterrupt(function*(arg0, value) {
      if (c3 === 2) {
        c3 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp4;
              tmp = undefined;
              const obj4 = { mediaType: "any", selectionLimit: tmp(onSend[13]).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE, skipProcessing: true };
              const launchImageLibraryAsync = canSend(onSend[20]).launchImageLibraryAsync;
              const tmp17 = canSend(onSend[20]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: launchImageLibraryAsync(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            tmp = value;
            const didCancel = tmp.didCancel || null == tmp.assets;
            if (!didCancel) {
              const assets = tmp.assets;
              closure_1_13(assets.map((uri) => {
                let fileName;
                let str4;
                const obj = { uri: uri.uri, name: fileName, contentType: str4, size: null };
                ({ uri, fileName } = uri);
                if (null == fileName) {
                  const parts = uri.split("/");
                  let str3 = parts.at(-1);
                  if (str3 == null) {
                    str3 = "attachment";
                  }
                  fileName = str3;
                }
                str4 = uri.mimeType;
                if (str4 == null) {
                  str4 = uri.fileType;
                }
                if (str4 == null) {
                  str4 = uri.type;
                }
                if (str4 == null) {
                  str4 = "application/octet-stream";
                }
                return obj;
              }));
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp19) {
          c3 = 3;
          throw tmp19;
        }
      }
    });
    const fn2 = function() {
      return closure_0(...arguments);
    };
    cResult[14] = tmp38;
    cResult[15] = fn2;
  } else {
    class Ie {
      constructor(arg0) {
        const obj = vibegrationsAttachmentDrafts;
        return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
      }
    }
  }
  if (cResult[16] !== tmp38) {
    class Ie {
      constructor(arg0) {
        const obj = vibegrationsAttachmentDrafts;
        return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
      }
    }
    _require = onInterrupt(function*(arg0, value) {
      let obj2;
      if (c3 === 2) {
        c3 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_1 = tmp4;
              tmp = undefined;
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj2.handleDocumentSelection({ pickMultiple: true }), done: false };
              obj2 = tmp(onSend[21]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            tmp = value;
            if (null != tmp) {
              closure_1_13(tmp.map((uri) => {
                let name;
                let str4;
                const obj = { uri: uri.uri, name, contentType: str4, size };
                ({ uri, name } = uri);
                if (null == name) {
                  const parts = uri.split("/");
                  let str3 = parts.at(-1);
                  if (str3 == null) {
                    str3 = "attachment";
                  }
                  name = str3;
                }
                str4 = uri.type;
                if (str4 == null) {
                  str4 = "application/octet-stream";
                }
                size = uri.size;
                if (size == null) {
                  size = null;
                }
                return obj;
              }));
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    });
    const fn3 = function() {
      return closure_0(...arguments);
    };
    cResult[16] = tmp38;
    cResult[17] = fn3;
  } else {
    class Ie {
      constructor(arg0) {
        const obj = vibegrationsAttachmentDrafts;
        return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
      }
    }
  }
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class Ie {
      constructor(arg0) {
        const obj = vibegrationsAttachmentDrafts;
        return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
      }
    }
    const stringResult = obj9.string(canSend(tmp2[12]).xE6M2k);
    cResult[18] = stringResult;
    tmp43 = stringResult;
  } else {
    class Ie {
      constructor(arg0) {
        const obj = vibegrationsAttachmentDrafts;
        return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
      }
    }
  }
  if (cResult[19] !== tmp41) {
    class Ie {
      constructor(arg0) {
        const obj = vibegrationsAttachmentDrafts;
        return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
      }
    }
    tmp46[0] = tmp43;
    tmp46[1] = tmp41;
    cResult[19] = tmp41;
    cResult[20] = tmp46;
  } else {
    class Ie {
      constructor(arg0) {
        const obj = vibegrationsAttachmentDrafts;
        return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
      }
    }
  }
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    class Ie {
      constructor(arg0) {
        const obj = vibegrationsAttachmentDrafts;
        return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
      }
    }
    const stringResult1 = obj10.string(canSend(tmp2[12]).DN7KeU);
    cResult[21] = stringResult1;
    tmp47 = stringResult1;
  } else {
    class Ie {
      constructor(arg0) {
        const obj = vibegrationsAttachmentDrafts;
        return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
      }
    }
  }
  if (cResult[22] !== tmp42) {
    class Ie {
      constructor(arg0) {
        const obj = vibegrationsAttachmentDrafts;
        return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
      }
    }
    tmp50[0] = tmp47;
    tmp50[1] = tmp42;
    cResult[22] = tmp42;
    cResult[23] = tmp50;
  } else {
    class Ie {
      constructor(arg0) {
        const obj = vibegrationsAttachmentDrafts;
        return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
      }
    }
  }
  if (cResult[24] === tmp45) {
    let tmp51;
    class Ie {
      constructor(arg0) {
        const obj = vibegrationsAttachmentDrafts;
        return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
      }
    }
    if (cResult[27] !== vibegrationsAttachmentDraftList) {
      let tmp52;
      class Ie {
        constructor(arg0) {
          const obj = vibegrationsAttachmentDrafts;
          return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
        }
      }
      if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
        class Be {
          constructor(status) {
            return "ready" === status.status;
          }
        }
        cResult[29] = Be;
        tmp52 = Be;
      } else {
        class Be {
          constructor(status) {
            return "ready" === status.status;
          }
        }
      }
      const everyResult = vibegrationsAttachmentDraftList.every(tmp52);
      cResult[27] = vibegrationsAttachmentDraftList;
      cResult[28] = everyResult;
      tmp51 = everyResult;
    } else {
      class Be {
        constructor(status) {
          return "ready" === status.status;
        }
      }
    }
    if (cResult[30] === vibegrationsAttachmentDraftList.length) {
      class Be {
        constructor(status) {
          return "ready" === status.status;
        }
      }
      closure_15 = tmp56;
      if (cResult[33] === onDismissTip) {
        class Be {
          constructor(status) {
            return "ready" === status.status;
          }
        }
      }
      class Le {
        constructor() {
          const tmp = closure_15;
          if (tmp) {
            if (onDismissTip != null) {
              tmp2();
            }
            const obj = vibegrationsAttachmentDrafts;
            const result = obj.takeVibegrationsAttachmentRefs(projectId, "chat");
            let tmp10;
            const tmp8 = onSend;
            const tmp9 = first;
            if (result.length > 0) {
              tmp10 = result;
            }
            tmp8(tmp9, tmp10);
            const current = ref1.current;
            const tmp13 = M("");
            if (current != null) {
              current.setText("");
            }
            uploadAttachmentBytes(null);
            tmp13(null);
          }
        }
      }
      cResult[33] = onDismissTip;
      cResult[34] = onSend;
      cResult[35] = projectId;
      cResult[36] = canSend && tmp54 && tmp51;
      cResult[37] = tmp10;
      cResult[38] = first;
      cResult[39] = Le;
    }
    let str = "";
    cResult[30] = vibegrationsAttachmentDraftList.length;
    cResult[31] = first;
    cResult[32] = tmp55;
    tmp54 = tmp55;
  }
  const items2 = [tmp45, tmp49];
  cResult[24] = tmp45;
  cResult[25] = tmp49;
  cResult[26] = items2;
}) : ((projectId) => {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let boxFocused;
  let c11;
  let c12;
  let callback7Result;
  let intl2;
  let items15;
  let items17;
  let items18;
  let items19;
  let items20;
  let nm4w9P;
  let obj13;
  let obj15;
  let string;
  let tmp20;
  let tmp7;
  let tmp8;
  projectId = projectId.projectId;
  const canSend = projectId.canSend;
  let running = projectId.running;
  let flag = projectId.stopped;
  if (flag === undefined) {
    flag = false;
  }
  const onSend = projectId.onSend;
  const onInterrupt = projectId.onInterrupt;
  let flag2 = projectId.tipOpen;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const onDismissTip = projectId.onDismissTip;
  c11 = undefined;
  c12 = undefined;
  let closure_13;
  let callback2;
  closure_15 = undefined;
  let callback3;
  let callback4;
  let closure_18;
  let sendable;
  let callback5;
  let stateFromStores1;
  let callback6;
  let callback7;
  let obj = onDismissTip;
  const ref = onDismissTip.useRef(null);
  let tmp2 = onInterrupt;
  let tmp3 = onInterrupt(onDismissTip.useState(() => VibegrationsComposerDraftStore.getDraft(projectId)), 2);
  let str = tmp3[0];
  let tmp4 = tmp3[1];
  let closure_7 = tmp4;
  let items = [projectId];
  const onChange = onDismissTip.useCallback((draft) => {
    const obj = VibegrationsActionCreators;
    obj.setComposerDraft(projectId, draft);
    closure_7(draft);
  }, items);
  const tmp6 = onInterrupt(onDismissTip.useState(null), 2);
  [tmp7, tmp8] = tmp6;
  VibegrationsComposerDraftStore = tmp8;
  const ref1 = onDismissTip.useRef(null);
  let tmp10 = onInterrupt(onDismissTip.useState(projectId), 2);
  if (tmp10[0] !== projectId) {
    const tmp11 = tmp10[1](projectId);
    let tmp12 = VibegrationsComposerDraftStore;
    tmp4(VibegrationsComposerDraftStore.getDraft(projectId));
    tmp8(null);
  }
  let items1 = [projectId];
  const effect = obj.useEffect(() => {
    const current = ref1.current;
    if (current != null) {
      current.setText(VibegrationsComposerDraftStore.getDraft(projectId));
    }
  }, items1);
  let tmp17 = running;
  let obj2 = projectId(running[17]);
  const vibegrationsAttachmentDraftList = obj2.useVibegrationsAttachmentDraftList(projectId, "chat");
  [boxFocused, c11] = tmp2(obj.useState(false), 2);
  const tmp2Result = tmp2(obj.useState(false), 2);
  [tmp20, c12] = tmp2(obj.useState(null), 2);
  tmp2(obj.useState(null), 2);
  const callback1 = obj.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.contentSize.height);
  }, []);
  let obj3 = projectId(running[18]);
  const token = obj3.useToken(canSend(running[9]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj4 = projectId(running[18]);
  const token1 = obj4.useToken(canSend(running[9]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj5 = projectId(running[18]);
  const token2 = obj5.useToken(canSend(running[9]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let obj6 = projectId(running[18]);
  const token3 = obj6.useToken(canSend(running[9]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let obj7 = projectId(running[19]);
  const items2 = [onChange];
  const stateFromStores = obj7.useStateFromStores(items2, () => callback.useReducedMotion);
  const bound = Math.max(0, (token1 - token) / 2);
  const bound1 = Math.min(callback2, Math.max(0, (token - 20) / 2));
  let tmp30 = null != tmp7;
  if (tmp30) {
    let _Math = Math;
    let num = 120;
    tmp30 = Math.ceil(tmp7) + 2 * bound1 > 120;
  }
  let tmp31 = closure_15();
  closure_13 = tmp31;
  const items3 = [projectId];
  callback2 = obj.useCallback((arr) => {
    if (0 !== arr.length) {
      const VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE = VibegrationsTypes.VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE;
      let obj3 = vibegrationsAttachmentDrafts;
      str = "chat";
      const diff = VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE - obj3.getVibegrationsAttachmentDrafts(projectId, "chat").length;
      const tmp12 = projectId;
      if (arr.length > diff) {
        let tmp4 = _undefined3;
        let intl = tmp10(1127).intl;
        let formatToPlainString = intl.formatToPlainString;
        let obj = { count: tmp10(5372).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE };
        const DlX57a = _modDef3718.DlX57a;
        _undefined3(formatToPlainString(DlX57a, obj));
        const tmp7 = globalThis;
        const _Math = Math;
        const substr = arr.slice(0, Math.max(0, diff));
        arr = substr;
      } else {
        let tmp = _undefined3;
        const tmp3 = _undefined3(null);
      }
      const mapped = arr.map((name) => {
        let cI7t94;
        let formatToPlainString;
        let formatVibegrationsAttachmentLimit;
        let obj3;
        let obj4;
        let obj6;
        let tmp7Result2;
        let closure_0 = name;
        let value = function _upload2() {
          const obj = onSend(function*() {
            let c2;
            let c3;
            let closure_1;
            const _fetch = fetch;
            yield fetch(name.uri);
            size = yield arg1.blob();
            const obj9 = name(closure_2_2[13]);
            if (obj9.isVibegrationsAttachmentWithinLimit(size.size, closure_129_0.contentType)) {
              value = closure_2_11(size, size, closure_129_0.name, closure_129_0.contentType);
            } else {
              value = { errorText: closure_2_17(closure_129_0.contentType) };
            }
            return value;
          });
          return obj(...arguments);
        };
        value = { name: name.name, contentType: name.contentType };
        if (null != name.size) {
          const obj8 = projectId(running[13]);
          if (!obj8.isVibegrationsAttachmentWithinLimit(name.size, name.contentType)) {
            const obj2 = { draft: obj3 };
            obj3 = { status: "error", errorText: formatToPlainString(cI7t94, obj4) };
            const merged = Object.assign(value);
            const contentType = name.contentType;
            const intl = tmp7(tmp8[11]).intl;
            formatToPlainString = intl.formatToPlainString;
            obj4 = { size: formatVibegrationsAttachmentLimit(tmp7Result2.vibegrationsAttachmentLimit(contentType)) };
            cI7t94 = canSend(tmp8[12]).cI7t94;
            formatVibegrationsAttachmentLimit = tmp7(tmp8[13]).formatVibegrationsAttachmentLimit;
            projectId(running[13]);
            tmp7Result2 = projectId(running[13]);
            return obj2;
          }
        }
        const obj5 = {
          draft: obj6,
          upload() {
            return obj(...arguments);
          }
        };
        obj6 = { status: "uploading" };
        const merged1 = Object.assign(value);
        return obj5;
      });
      const tmp10Result = vibegrationsAttachmentDrafts;
      const result = tmp10Result.addVibegrationsAttachmentDrafts(tmp12, "chat", mapped);
    }
  }, items3);
  const items4 = [projectId];
  closure_15 = obj.useCallback((arg0) => {
    const obj = vibegrationsAttachmentDrafts;
    return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
  }, items4);
  const items5 = [callback2];
  callback3 = obj.useCallback(onSend(function*(arg0, value) {
    let c2;
    let closure_0;
    let closure_1;
    if (c3 === 2) {
      c3 = 3;
      str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
        c3 = 2;
        if (0 === running) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp = undefined;
            const obj4 = { mediaType: "any", selectionLimit: tmp(running[13]).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE, skipProcessing: true };
            const launchImageLibraryAsync = tmp4(running[20]).launchImageLibraryAsync;
            const tmp17 = tmp4(running[20]);
            running = 1;
            c3 = 1;
            const obj5 = { value: launchImageLibraryAsync(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          tmp = value;
          const didCancel = tmp.didCancel || null == tmp.assets;
          if (!didCancel) {
            const assets = tmp.assets;
            closure_129_14(assets.map((uri) => {
              let fileName;
              let str4;
              const obj = { uri: uri.uri, name: fileName, contentType: str4, size: null };
              ({ uri, fileName } = uri);
              if (null == fileName) {
                const parts = uri.split("/");
                let str3 = parts.at(-1);
                if (str3 == null) {
                  str3 = "attachment";
                }
                fileName = str3;
              }
              str4 = uri.mimeType;
              if (str4 == null) {
                str4 = uri.fileType;
              }
              if (str4 == null) {
                str4 = uri.type;
              }
              if (str4 == null) {
                str4 = "application/octet-stream";
              }
              return obj;
            }));
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp19) {
        c3 = 3;
        throw tmp19;
      }
    }
  }), items5);
  const items6 = [callback2];
  callback4 = obj.useCallback(onSend(function*(arg0, value) {
    let c2;
    let closure_0;
    if (c3 === 2) {
      c3 = 3;
      str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
        c3 = 2;
        if (0 === running) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp4;
            tmp = undefined;
            const obj2 = tmp(running[21]);
            running = 1;
            c3 = 1;
            const obj5 = { value: obj2.handleDocumentSelection({ pickMultiple: true }), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          tmp = value;
          if (null != tmp) {
            closure_129_14(tmp.map((uri) => {
              let name;
              let str4;
              const obj = { uri: uri.uri, name, contentType: str4, size };
              ({ uri, name } = uri);
              if (null == name) {
                const parts = uri.split("/");
                let str3 = parts.at(-1);
                if (str3 == null) {
                  str3 = "attachment";
                }
                name = str3;
              }
              str4 = uri.type;
              if (str4 == null) {
                str4 = "application/octet-stream";
              }
              size = uri.size;
              if (size == null) {
                size = null;
              }
              return obj;
            }));
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp15) {
        c3 = 3;
        throw tmp15;
      }
    }
  }), items6);
  const items7 = [callback4, callback3];
  const memo = obj.useMemo(() => {
    let intl;
    let intl2;
    const obj = { label: intl.string(_modDef3718.xE6M2k), action: callback3 };
    intl = intl4.intl;
    const items = [obj, ];
    const obj2 = { label: intl2.string(_modDef3718.DN7KeU), action: callback4 };
    intl2 = intl4.intl;
    items[1] = obj2;
    return items;
  }, items7);
  const everyResult = vibegrationsAttachmentDraftList.every((status) => "ready" === status.status);
  const tmp37 = "" !== str.trim() || vibegrationsAttachmentDraftList.length > 0;
  closure_18 = tmp37;
  sendable = tmp38;
  const items8 = [onDismissTip, onSend, projectId, tmp38, onChange, str];
  callback5 = obj.useCallback(() => {
    const tmp = sendable;
    if (tmp) {
      if (onDismissTip != null) {
        tmp2();
      }
      const obj = vibegrationsAttachmentDrafts;
      const result = obj.takeVibegrationsAttachmentRefs(projectId, "chat");
      let tmp10;
      const tmp8 = onSend;
      if (result.length > 0) {
        tmp10 = result;
      }
      tmp8("chat", tmp10);
      callback("");
      const current = ref1.current;
      if (current != null) {
        current.setText("");
      }
      _undefined3(null);
      _undefined(null);
    }
  }, items8);
  const items9 = [ref1];
  const items10 = [projectId];
  const tmp16Result = projectId(tmp17[19]);
  stateFromStores1 = tmp16Result.useStateFromStores(items9, () => {
    const modelSettings = VibegrationsConnectionStore.getModelSettings(projectId);
    let tierSettings;
    if (modelSettings != null) {
      tierSettings = modelSettings.tierSettings;
    }
    return null != tierSettings;
  }, items10);
  const items11 = [projectId];
  callback6 = obj.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: _undefined3(VibegrationsModelSettingsSheetDefault, obj2), key: VibegrationsModelSettingsSheet.VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items11);
  const items12 = [tmp37, running, stateFromStores1, tmp38];
  const memo1 = obj.useMemo(() => {
    str = "send";
    let str2 = "send";
    if (!closure_18) {
      let str3 = "stop";
      if (!running) {
        const tmp2 = stateFromStores1;
        if (tmp2) {
          str = "models";
        }
        str3 = str;
      }
      str2 = str3;
    }
    const items = [];
    const obj = { key: str2, sendable };
    items[0] = obj;
    return items;
  }, items12);
  const items13 = [tmp31, canSend, onInterrupt, callback6, callback5];
  callback7 = obj.useCallback((key) => {
    let intl;
    let intl2;
    let intl3;
    let tmp14;
    if ("stop" === key.key) {
      const obj2 = { style: closure_13.trailingButton, IconComponent: StopIcon.StopIcon, onPress: onInterrupt, disabled: null == onInterrupt, accessibilityLabel: intl2.string(_modDef3718.KdgI4k) };
      const tmp18 = ChatInputActionButtonDefault;
      intl2 = intl4.intl;
      tmp14 = _undefined3(tmp18, obj2);
    } else if ("models" === key.key) {
      const obj = { style: closure_13.trailingButton, IconComponent: FiltersHorizontalIcon.FiltersHorizontalIcon, onPress: callback6, disabled: !canSend, accessibilityLabel: intl.string(_modDef3718["2NWMqY"]) };
      const tmp4 = ChatInputActionButtonDefault;
      intl = intl4.intl;
      tmp14 = _undefined3(tmp4, obj);
    } else {
      ({ trailingButton: obj3.style, sendButtonActive: obj3.activeStyle, sendIconActive: obj3.activeIconStyle } = closure_13);
      const obj5 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: SendMessageIcon.SendMessageIcon, accessibilityLabel: intl3.string(intl4.t.TXNS7S), onPress: callback5, disabled: !key.sendable };
      const tmp31 = ChatInputActionButtonDefault;
      intl3 = intl4.intl;
      tmp14 = _undefined3(tmp31, obj5);
    }
    return tmp14;
  }, items13);
  const items14 = [callback7];
  const callback8 = obj.useCallback((arg0, arg1, state, cleanup) => {
    const obj = { state, cleanup, withBounce: true, children: callback7(arg1) };
    const tmp = ChatInputActionButtonTransitionItemDefault;
    return _undefined3(tmp, obj, arg0);
  }, items14);
  const callback9 = obj.useCallback(() => _undefined2(true), []);
  let obj8 = { ref, style: tmp31.container, children: items15 };
  let tmp49 = null;
  const callback10 = obj.useCallback(() => _undefined2(false), []);
  if (null != onDismissTip) {
    let obj9 = { targetRef: ref, visible: flag2, onDismiss: onDismissTip };
    tmp49 = c12(tmp22(tmp17[29]), obj9);
  }
  items15 = [tmp49, , , ];
  let tmp51 = null;
  if (null != tmp20) {
    const obj10 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp20 };
    tmp51 = c12(tmp16(tmp17[30]).Text, obj10);
  }
  items15[1] = tmp51;
  let tmp53 = null;
  if (vibegrationsAttachmentDraftList.length > 0) {
    const obj11 = {
      style: tmp31.draftRow,
      children: vibegrationsAttachmentDraftList.map((children) => {
          let intl;
          let intl2;
          let items;
          let items1;
          let obj3;
          let tmp4 = null;
          const obj = { style: closure_13.draftPill, children: items };
          const tmp3 = closure_13;
          if ("uploading" === children.status) {
            const obj2 = { size: "small", accessibilityLabel: intl.formatToPlainString(canSend(running[12]).sFX7H4, obj3) };
            intl = projectId(running[11]).intl;
            obj3 = { name: children.name };
            tmp4 = _undefined3(str, obj2);
          }
          items = [tmp4, , ];
          str = "text-default";
          const obj4 = { style: tmp3.draftName, children: items1 };
          const Text = projectId(running[30]).Text;
          if ("error" === children.status) {
            str = "text-feedback-critical";
          }
          items1 = [, ];
          const obj5 = { variant: "text-xs/medium", color: str, lineClamp: 1, children: children.name };
          items1[0] = _undefined3(Text, obj5);
          let tmp10Result = null;
          if (null != children.errorText) {
            const obj6 = { variant: "text-xs/normal", color: "text-feedback-critical", children: children.errorText };
            tmp10Result = tmp10(tmp11(tmp12[30]).Text, obj6);
          }
          items1[1] = tmp10Result;
          items[1] = closure_13(closure_7, obj4);
          const obj7 = {
            accessibilityRole: "button",
            accessibilityLabel: intl2.string(canSend(running[12])["3HWvgk"]),
            hitSlop: 12,
            onPress() {
              return closure_15(children.localId);
            },
            children: _undefined3(projectId(running[32]).CircleXIcon, { size: "xs" })
          };
          const PressableOpacity = tmp11(tmp12[31]).PressableOpacity;
          intl2 = tmp11(tmp12[11]).intl;
          items[2] = _undefined3(PressableOpacity, obj7);
          return closure_13(closure_7, obj, children.localId);
        })
    };
    tmp53 = c12(tmp48, obj11);
  }
  items15[2] = tmp53;
  const items16 = [tmp31.box, ];
  if (boxFocused) {
    boxFocused = tmp31.boxFocused;
  }
  items16[1] = boxFocused;
  const obj12 = { style: items16, children: closure_13(closure_7, obj13) };
  obj13 = { style: tmp31.boxContents, children: items17 };
  const obj14 = { style: { paddingBottom: bound }, children: c12(projectId(tmp17[34]).ContextMenu, obj15) };
  obj15 = {
    items: memo,
    align: "above",
    children(arg0) {
      let accessibilityActions;
      let intl;
      let onAccessibilityAction;
      let onPress;
      let ref;
      ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
      const obj = { ref, IconComponent: PlusLargeIcon.PlusLargeIcon, onPress, disabled: !canSend, accessibilityLabel: intl.string(_modDef3718.gUn10I), accessibilityActions, onAccessibilityAction };
      const tmp = ChatInputActionButtonDefault;
      intl = intl4.intl;
      return _undefined3(tmp, obj);
    }
  };
  items17 = [c12(closure_7, obj14), , ];
  const obj16 = { multiline: true, allowRedesignTextInput: false, showBorder: false, showTopContainer: false, ref: ref1, style: items18, inputTextStyle: items19, textAlignVertical: "center", editable: canSend, placeholder: string(nm4w9P), placeholderTextColor: tmp31.inputPlaceholder.color, accessibilityLabel: intl2.string(canSend(tmp17[12]).OPr66w), value: str, onChange, onFocus: callback9, onBlur: callback10, onContentSizeChange: callback1, scrollEnabled: tmp30 };
  items18 = [tmp31.input, { marginBottom: bound, minHeight: token }];
  items19 = [tmp31.inputText, { paddingTop: bound1, paddingBottom: bound1 }];
  const tmp22Result = canSend(tmp17[35]);
  let intl = tmp16(tmp17[11]).intl;
  string = intl.string;
  const tmp22Result2 = canSend(tmp17[12]);
  if (flag) {
    nm4w9P = tmp22Result2.JeM47J;
  } else if (canSend) {
    nm4w9P = running ? tmp22Result2["67PpcP"] : tmp22Result2.ahRdoJ;
  } else {
    nm4w9P = tmp22Result2.nm4w9P;
  }
  intl2 = tmp16(tmp17[11]).intl;
  items17[1] = c12(tmp22Result, obj16);
  const obj17 = { style: items20, children: callback7Result };
  items20 = [tmp31.trailingSlot, { width: token2 + 2 * token3, height: token1 }];
  if (stateFromStores) {
    callback7Result = callback7(memo1[0]);
  } else {
    const obj18 = { items: memo1, renderItem: callback8, getItemKey: callback3 };
    callback7Result = tmp55(tmp16(tmp17[36]).TransitionGroup, obj18);
  }
  items17[2] = c12(closure_7, obj17);
  items15[3] = c12(closure_7, obj12);
  return closure_13(closure_7, obj8);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeComposer.tsx");

export default tmp5;
