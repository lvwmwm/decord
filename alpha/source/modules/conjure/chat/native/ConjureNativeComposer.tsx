// Module ID: 17322
// Function ID: 17323
// Name: ConjureNativeComposer
// Dependencies: [5, 32, 19, 17, 5081, 13227, 17182, 21, 587, 5092, 1126, 3849, 558, 576, 4818, 7572, 10019, 17323, 11664, 17180, 504, 17060, 17306, 12797, 11585, 10248, 12798, 15840, 5056, 17099, 11937, 17222, 15280, 5040, 11945, 5088, 10309, 9363, 11951, 4827, 2]

// Module 17322 (ConjureNativeComposer)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import useToken from "useToken" /* 4818 */;
import SendMessageIcon from "SendMessageIcon" /* 5040 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5056 */;
import ImageCarousel from "ImageCarousel" /* 10019 */;
import MusicIcon from "MusicIcon" /* 10248 */;
import PlusLargeIcon from "PlusLargeIcon" /* 10309 */;
import ImagesIcon from "ImagesIcon" /* 11585 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 11664 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 11937 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 11945 */;
import keepLocalCopy from "keepLocalCopy" /* 12798 */;
import FiltersHorizontalIcon from "FiltersHorizontalIcon" /* 15280 */;
import FileUpIcon from "FileUpIcon" /* 15840 */;
import ConjureAttachmentTypes from "ConjureAttachmentTypes" /* 17060 */;
import ConjureModelSettingsSheet from "ConjureModelSettingsSheet" /* 17099 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 17180 */;
import StopIcon from "StopIcon" /* 17222 */;
import conjurePickedFiles from "conjurePickedFiles" /* 17306 */;
import ConjureChatActionCreators from "ConjureChatActionCreators" /* 17323 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 13227 */;
import ConjureComposerDraftStore_mod from "ConjureComposerDraftStore" /* 17182 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ConjureModelSettingsSheetDefault = ConjureModelSettingsSheet;
let _require, arr, c1, closure_1, closure_14, closure_2, maxHeight, types;

let StyleSheet;
let closure_12;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let unpackModuleId;
function trailingItemKey(key) {
  return key.key;
}
function draftAccessibilityLabel(draft) {
  let formatToPlainStringResult;
  if ("uploading" === draft.status) {
    const intl3 = intl4.intl;
    const obj3 = { name: draft.name };
    formatToPlainStringResult = intl3.formatToPlainString(_modDef3849.MWTYwv, obj3);
  } else if (null != draft.errorText) {
    const intl2 = intl4.intl;
    const obj5 = { name: null, error: null };
    ({ name: obj2.name, errorText: obj2.error } = draft);
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3849.U2WbGx, obj5);
  } else {
    const intl = intl4.intl;
    const obj = { name: draft.name };
    formatToPlainStringResult = intl.formatToPlainString(intl4.t.MJHFt9, obj);
  }
  return formatToPlainStringResult;
}
let react = react_mod;
({ ActivityIndicator: metroRequire, View: metroImportDefault, StyleSheet } = react_native);
let ConjureComposerDraftStore = ConjureComposerDraftStore_mod;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let c13 = 120;
const PX_8 = nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { container: obj2, box: obj3, boxFocused: obj4, boxContents: obj5, input: obj6, draftCarousel: { marginBottom: 0 }, draftOverlay: obj7, trailingButton: size, trailingSlot: { alignItems: "center", justifyContent: "center" }, sendButtonActive: obj8, sendIconActive: obj9 };
obj2 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, overflow: "hidden" };
obj4 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
obj5 = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
obj6 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_4 };
obj7 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX };
let merged = Object.assign(StyleSheet.absoluteFillObject);
size = { width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH, height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT };
obj8 = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
obj9 = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeDraftTile(draft) {
  let WarningIcon;
  let obj6;
  let obj8;
  const obj = react2;
  const cResult = obj.c(25);
  draft = draft.draft;
  const onRemove = draft.onRemove;
  const tmp4 = closure_15();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.TEXT_OVERLAY_LIGHT);
  if (cResult[0] === draft.localId) {
    let tmp7;
    let tmp11;
    let tmp13;
    let tmp15;
    let tmp18;
    let tmp21;
    if (cResult[1] === onRemove) {
      tmp7 = cResult[2];
    }
    const _String = String;
    const StringResult = String(draft.localId);
    let str = draft.previewUrl;
    if (str == null) {
      str = "";
    }
    const name = draft.name;
    if (cResult[3] !== draft.contentType) {
      const contentType = draft.contentType;
      const startsWithResult = contentType.startsWith("image/");
      cResult[3] = draft.contentType;
      cResult[4] = startsWithResult;
      tmp11 = startsWithResult;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] !== draft.contentType) {
      const contentType2 = draft.contentType;
      const startsWithResult1 = contentType2.startsWith("video/");
      cResult[5] = draft.contentType;
      cResult[6] = startsWithResult1;
      tmp13 = startsWithResult1;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== draft) {
      const tmp17 = draftAccessibilityLabel(draft);
      cResult[7] = draft;
      cResult[8] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] !== draft.name) {
      const intl = tmp(1126).intl;
      const obj3 = { name: draft.name };
      const formatToPlainStringResult = intl.formatToPlainString(intl4.t.FxKgb3, obj3);
      cResult[9] = draft.name;
      cResult[10] = formatToPlainStringResult;
      tmp18 = formatToPlainStringResult;
    } else {
      tmp18 = cResult[10];
    }
    if (cResult[11] === draft.status) {
      if (cResult[12] === token) {
        let tmp20;
        if (cResult[13] === tmp4) {
          tmp20 = cResult[14];
        }
        if (cResult[15] === draft.name) {
          if (cResult[16] === tmp7) {
            if (cResult[17] === StringResult) {
              if (cResult[18] === str) {
                if (cResult[19] === tmp11) {
                  if (cResult[20] === tmp13) {
                    if (cResult[21] === tmp15) {
                      if (cResult[22] === tmp18) {
                        let tmp27;
                        if (cResult[23] === tmp20) {
                          tmp27 = cResult[24];
                        }
                        return tmp27;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj4 = { itemKey: StringResult, uri: str, fileName: name, isImage: tmp11, isVideo: tmp13, accessibilityLabel: tmp15, removeAccessibilityLabel: tmp18, onRemove: tmp7, children: tmp20 };
        const tmp29 = unpackModuleId(ImageCarousel.ImageCarouselTile, obj4);
        cResult[15] = draft.name;
        cResult[16] = tmp7;
        cResult[17] = StringResult;
        cResult[18] = str;
        cResult[19] = tmp11;
        cResult[20] = tmp13;
        cResult[21] = tmp15;
        cResult[22] = tmp18;
        cResult[23] = tmp20;
        cResult[24] = tmp29;
        tmp27 = tmp29;
      }
    }
    if ("uploading" === draft.status) {
      const obj5 = { style: tmp4.draftOverlay, children: unpackModuleId(metroRequire, obj6) };
      obj6 = { size: "small", color: token };
      tmp21 = unpackModuleId(metroImportDefault, obj5);
    } else {
      tmp21 = null;
      if ("error" === draft.status) {
        const obj7 = { style: tmp4.draftOverlay, children: unpackModuleId(WarningIcon, obj8) };
        obj8 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
        WarningIcon = tmp(7572).WarningIcon;
        tmp21 = unpackModuleId(metroImportDefault, obj7);
      }
    }
    cResult[11] = draft.status;
    cResult[12] = token;
    cResult[13] = tmp4;
    cResult[14] = tmp21;
    tmp20 = tmp21;
  }
  const fn = function n() {
    return onRemove(draft.localId);
  };
  cResult[0] = draft.localId;
  cResult[1] = onRemove;
  cResult[2] = fn;
  tmp7 = fn;
}) : (function ConjureNativeDraftTile(draft) {
  let WarningIcon;
  let contentType;
  let contentType2;
  let intl;
  let obj13;
  let obj4;
  let obj6;
  let str;
  let tmp7Result;
  draft = draft.draft;
  const onRemove = draft.onRemove;
  const tmp = closure_15();
  const items = [onRemove, draft.localId];
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.TEXT_OVERLAY_LIGHT);
  const callback = react.useCallback(() => onRemove(draft.localId), items);
  const obj3 = { itemKey: String(draft.localId), uri: str, fileName: null, isImage: contentType.startsWith("image/"), isVideo: contentType2.startsWith("video/"), accessibilityLabel: draftAccessibilityLabel(draft), removeAccessibilityLabel: intl.formatToPlainString(intl4.t.FxKgb3, obj4), onRemove: callback, children: tmp7Result };
  const ImageCarouselTile = ImageCarousel.ImageCarouselTile;
  str = draft.previewUrl;
  if (str == null) {
    str = "";
  }
  ({ name: obj2.fileName, contentType } = draft);
  contentType2 = draft.contentType;
  intl = tmp2(1126).intl;
  obj4 = { name: draft.name };
  if ("uploading" === draft.status) {
    const obj5 = { style: tmp.draftOverlay, children: unpackModuleId(metroRequire, obj6) };
    obj6 = { size: "small", color: token };
    tmp7Result = tmp7(metroImportDefault, obj5);
  } else {
    tmp7Result = null;
    if ("error" === draft.status) {
      const obj7 = { style: tmp.draftOverlay, children: unpackModuleId(WarningIcon, obj13) };
      obj13 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
      WarningIcon = tmp2(7572).WarningIcon;
      tmp7Result = tmp7(metroImportDefault, obj7);
    }
  }
  return unpackModuleId(ImageCarouselTile, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeComposer(projectId) {
  let c13;
  let closure_10;
  let closure_12;
  let closure_5;
  let items4;
  let onPress;
  let onPress2;
  let onSend;
  let running;
  let stopped;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp17;
  let tmp18;
  let tmp5;
  let tmp = projectId;
  let tmp2 = onSend;
  let obj = projectId(onSend[13]);
  const cResult = obj.c(149);
  projectId = projectId.projectId;
  const canSend = projectId.canSend;
  ({ running, stopped, onSend } = projectId);
  const onInterrupt = projectId.onInterrupt;
  const onDraftHasTextChange = projectId.onDraftHasTextChange;
  const hidden = projectId.hidden;
  let tmp4 = undefined !== hidden && hidden;
  react = tmp4;
  if (cResult[0] !== projectId) {
    const fn = function s() {
      return ConjureComposerDraftStore.getDraft(projectId);
    };
    cResult[0] = projectId;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  let obj2 = react;
  let tmp6 = onDraftHasTextChange;
  let tmp7 = onDraftHasTextChange(react.useState(tmp5), 2);
  const first = tmp7[0];
  const tmp9 = tmp7[1];
  let closure_7 = tmp9;
  if (cResult[2] !== projectId) {
    class M {
      constructor(draft) {
        const obj = ConjureChatActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_7(draft);
      }
    }
    cResult[2] = projectId;
    cResult[3] = M;
    tmp10 = M;
  } else {
    class M {
      constructor(draft) {
        const obj = ConjureChatActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_7(draft);
      }
    }
  }
  M = tmp10;
  if (cResult[4] !== first) {
    class M {
      constructor(draft) {
        const obj = ConjureChatActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_7(draft);
      }
    }
    cResult[4] = first;
    cResult[5] = tmp12;
    tmp11 = tmp12;
  } else {
    class M {
      constructor(draft) {
        const obj = ConjureChatActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_7(draft);
      }
    }
  }
  let closure_9 = tmp13;
  if (cResult[6] === "" !== tmp11) {
    let tmp25;
    let tmp24;
    let tmp29;
    let tmp28;
    class M {
      constructor(draft) {
        const obj = ConjureChatActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_7(draft);
      }
    }
    const effect = obj2.useEffect(G, items4);
    [tmp17, tmp18] = tmp6(obj2.useState(null), 2);
    ConjureComposerDraftStore = tmp18;
    tmp6(obj2.useState(null), 2);
    const ref = obj2.useRef(null);
    const tmp6Result4 = tmp6(obj2.useState(projectId), 2);
    if (tmp6Result4[0] !== projectId) {
      class M {
        constructor(draft) {
          const obj = ConjureChatActionCreators;
          obj.setComposerDraft(projectId, draft);
          closure_7(draft);
        }
      }
      tmp9(ConjureComposerDraftStore.getDraft(projectId));
      tmp18(null);
    }
    if (cResult[10] !== projectId) {
      class M {
        constructor(draft) {
          const obj = ConjureChatActionCreators;
          obj.setComposerDraft(projectId, draft);
          closure_7(draft);
        }
      }
      let items = [projectId];
      cResult[10] = projectId;
      cResult[11] = tmp26;
      cResult[12] = items;
      tmp25 = items;
      tmp24 = tmp26;
    } else {
      class M {
        constructor(draft) {
          const obj = ConjureChatActionCreators;
          obj.setComposerDraft(projectId, draft);
          closure_7(draft);
        }
      }
      tmp25 = cResult[12];
    }
    const effect1 = obj2.useEffect(tmp24, tmp25);
    if (cResult[13] !== tmp4) {
      class W {
        constructor() {
          const tmp = closure_5;
          if (tmp) {
            const obj = ChatInputNativeCommandsDefault;
            obj.blur(ref.current);
          }
        }
      }
      const items1 = [tmp4];
      cResult[13] = tmp4;
      cResult[14] = W;
      cResult[15] = items1;
      tmp29 = items1;
      tmp28 = W;
    } else {
      class W {
        constructor() {
          const tmp = closure_5;
          if (tmp) {
            const obj = ChatInputNativeCommandsDefault;
            obj.blur(ref.current);
          }
        }
      }
      tmp29 = cResult[15];
    }
    const effect2 = obj2.useEffect(tmp28, tmp29);
    let tmpResult = tmp(tmp2[19]);
    let str = "chat";
    const conjureAttachmentDraftList = tmpResult.useConjureAttachmentDraftList(projectId, "chat");
    [r10104, closure_12] = tmp6(obj2.useState(false), 2);
    tmp6(obj2.useState(false), 2);
    [r10109, c13] = tmp6(obj2.useState(null), 2);
    const _Symbol = Symbol;
    tmp6(obj2.useState(null), 2);
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class W {
        constructor() {
          const tmp = closure_5;
          if (tmp) {
            const obj = ChatInputNativeCommandsDefault;
            obj.blur(ref.current);
          }
        }
      }
      cResult[16] = tmp36;
    } else {
      class W {
        constructor() {
          const tmp = closure_5;
          if (tmp) {
            const obj = ChatInputNativeCommandsDefault;
            obj.blur(ref.current);
          }
        }
      }
    }
    if (cResult[17] === tmp10) {
      let tmp44;
      let tmp43;
      let tmp55;
      class W {
        constructor() {
          const tmp = closure_5;
          if (tmp) {
            const obj = ChatInputNativeCommandsDefault;
            obj.blur(ref.current);
          }
        }
      }
      const tmpResult6 = tmp(tmp2[14]);
      const token = tmpResult6.useToken(canSend(tmp2[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
      const tmpResult7 = tmp(tmp2[14]);
      const token1 = tmpResult7.useToken(canSend(tmp2[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
      const tmpResult8 = tmp(tmp2[14]);
      const token2 = tmpResult8.useToken(canSend(tmp2[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
      const _Symbol2 = Symbol;
      const tmpResult9 = tmp(tmp2[14]);
      const token3 = tmpResult9.useToken(canSend(tmp2[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        class W {
          constructor() {
            const tmp = closure_5;
            if (tmp) {
              const obj = ChatInputNativeCommandsDefault;
              obj.blur(ref.current);
            }
          }
        }
        const items2 = [M];
        class Ce {
          constructor() {
            return M.useReducedMotion;
          }
        }
        cResult[20] = items2;
        cResult[21] = Ce;
        tmp44 = Ce;
        tmp43 = items2;
      } else {
        class W {
          constructor() {
            const tmp = closure_5;
            if (tmp) {
              const obj = ChatInputNativeCommandsDefault;
              obj.blur(ref.current);
            }
          }
        }
        tmp44 = cResult[21];
      }
      const tmpResult10 = tmp(tmp2[20]);
      const stateFromStores = tmpResult10.useStateFromStores(tmp43, tmp44);
      let _Math = Math;
      const bound = Math.max(0, (token1 - token) / 2);
      const _Math2 = Math;
      const _Math3 = Math;
      const bound1 = Math.min(closure_14, Math.max(0, (token - 20) / 2));
      const _Math4 = Math;
      const _Math5 = Math;
      const tmp49 = c13;
      if (tmp17 == null) {
        class W {
          constructor() {
            const tmp = closure_5;
            if (tmp) {
              const obj = ChatInputNativeCommandsDefault;
              obj.blur(ref.current);
            }
          }
        }
      }
      min(tmp49, max(token, tmp17));
      closure_14 = closure_15();
      closure_15();
      if (cResult[22] !== projectId) {
        class W {
          constructor() {
            const tmp = closure_5;
            if (tmp) {
              const obj = ChatInputNativeCommandsDefault;
              obj.blur(ref.current);
            }
          }
        }
        cResult[22] = projectId;
        class Ce {
          constructor() {
            return M.useReducedMotion;
          }
        }
        cResult[23] = tmp54;
      } else {
        class W {
          constructor() {
            const tmp = closure_5;
            if (tmp) {
              const obj = ChatInputNativeCommandsDefault;
              obj.blur(ref.current);
            }
          }
        }
      }
      class G {
        constructor() {
          let tmpResult;
          if (onDraftHasTextChange != null) {
            tmpResult = tmp(closure_9);
          }
          return tmpResult;
        }
      }
      if (cResult[24] !== projectId) {
        class Ee {
          constructor(arg0) {
            const obj = conjureAttachmentDrafts;
            return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
          }
        }
        cResult[24] = projectId;
        class Ce {
          constructor() {
            return M.useReducedMotion;
          }
        }
        cResult[25] = Ee;
        tmp55 = Ee;
      } else {
        class Ee {
          constructor(arg0) {
            const obj = conjureAttachmentDrafts;
            return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
          }
        }
      }
      Ee = tmp55;
      if (cResult[26] !== tmp53) {
        class Ee {
          constructor(arg0) {
            const obj = conjureAttachmentDrafts;
            return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
          }
        }
        _require = onInterrupt(function*(arg0, value) {
          let obj2;
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
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
              c2 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_0 = closure_1_15;
                  c1 = 1;
                  c2 = 1;
                  const obj5 = { value: obj2.pickConjurePhotos("any", closure_0(onSend[21]).CONJURE_MAX_ATTACHMENTS_PER_MESSAGE), done: false };
                  obj2 = closure_0(onSend[22]);
                  return obj5;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_0(value);
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp9) {
              c2 = 3;
              throw tmp9;
            }
          }
        });
        function t18() {
          return closure_0(...arguments);
        }
        class Ce {
          constructor() {
            return M.useReducedMotion;
          }
        }
        cResult[26] = tmp53;
        cResult[27] = t18;
      } else {
        class Ee {
          constructor(arg0) {
            const obj = conjureAttachmentDrafts;
            return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
          }
        }
      }
      if (cResult[28] === tmp53) {
        let tmp59;
        let tmp63;
        let tmp67;
        class Ee {
          constructor(arg0) {
            const obj = conjureAttachmentDrafts;
            return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
          }
        }
        if (cResult[31] !== tmp53) {
          class Ee {
            constructor(arg0) {
              const obj = conjureAttachmentDrafts;
              return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
            }
          }
          _require = onInterrupt((types) => {
            let c3 = 0;
            let c4 = 0;
            return (function*(arg0, value) {
              if (c4 === 2) {
                c4 = 3;
                let str = "Generator functions may not be called on executing generators";
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  return { value, done: true };
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  c4 = 2;
                  if (0 === c3) {
                    if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      return { value, done: true };
                    } else {
                      closure_2 = tmp4;
                      closure_1 = tmp;
                      types = undefined;
                      let obj2 = types(onSend[23]);
                      c3 = 1;
                      c4 = 1;
                      const obj5 = { pickMultiple: true, types };
                      const obj6 = { value: obj2.handleDocumentSelection(obj5), done: false };
                      return obj6;
                    }
                  } else if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    let obj = { value, done: true };
                    return obj;
                  } else {
                    types = value;
                    if (null != types) {
                      closure_1_15(types.map((uri) => {
                        let obj2;
                        let str;
                        const obj = { uri: uri.uri, name: obj2.pickedName(uri.uri, uri.name), contentType: str, size };
                        str = uri.type;
                        obj2 = types(closure_1_2[22]);
                        if (str == null) {
                          str = "application/octet-stream";
                        }
                        size = uri.size;
                        if (size == null) {
                          size = null;
                        }
                        return obj;
                      }));
                    }
                    c4 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp16) {
                  c4 = 3;
                  throw tmp16;
                }
              }
            })();
          });
          function t20() {
            return closure_0(...arguments);
          }
          class Ce {
            constructor() {
              return M.useReducedMotion;
            }
          }
          cResult[31] = tmp53;
          cResult[32] = t20;
        } else {
          class Ee {
            constructor(arg0) {
              const obj = conjureAttachmentDrafts;
              return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
            }
          }
        }
        t20 = tmp58;
        class Ce {
          constructor() {
            return M.useReducedMotion;
          }
        }
        if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
          class Ee {
            constructor(arg0) {
              const obj = conjureAttachmentDrafts;
              return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
            }
          }
          const stringResult = obj9.string(canSend(tmp2[11])["51+9lc"]);
          class Ce {
            constructor() {
              return M.useReducedMotion;
            }
          }
          cResult[33] = stringResult;
          tmp59 = stringResult;
        } else {
          class Ee {
            constructor(arg0) {
              const obj = conjureAttachmentDrafts;
              return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
            }
          }
        }
        if (cResult[34] !== tmp56) {
          class Ee {
            constructor(arg0) {
              const obj = conjureAttachmentDrafts;
              return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
            }
          }
          tmp62[0] = tmp59;
          tmp62[1] = tmp(tmp2[24]).ImagesIcon;
          class Ce {
            constructor() {
              return M.useReducedMotion;
            }
          }
          cResult[34] = tmp56;
          cResult[35] = tmp62;
        } else {
          class Ee {
            constructor(arg0) {
              const obj = conjureAttachmentDrafts;
              return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
          class Ee {
            constructor(arg0) {
              const obj = conjureAttachmentDrafts;
              return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
            }
          }
          const stringResult1 = obj10.string(canSend(tmp2[11])["10ljr2"]);
          class Ce {
            constructor() {
              return M.useReducedMotion;
            }
          }
          cResult[36] = stringResult1;
          tmp63 = stringResult1;
        } else {
          class Ee {
            constructor(arg0) {
              const obj = conjureAttachmentDrafts;
              return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
            }
          }
        }
        if (cResult[37] !== tmp58) {
          class Ee {
            constructor(arg0) {
              const obj = conjureAttachmentDrafts;
              return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
            }
          }
          tmp66[0] = tmp63;
          tmp66[1] = tmp(tmp2[25]).MusicIcon;
          class Ce {
            constructor() {
              return M.useReducedMotion;
            }
          }
          cResult[37] = tmp58;
          cResult[38] = tmp66;
        } else {
          class Ee {
            constructor(arg0) {
              const obj = conjureAttachmentDrafts;
              return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
            }
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
          class Ee {
            constructor(arg0) {
              const obj = conjureAttachmentDrafts;
              return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
            }
          }
          const stringResult2 = obj11.string(canSend(tmp2[11]).aotDee);
          class Ce {
            constructor() {
              return M.useReducedMotion;
            }
          }
          cResult[39] = stringResult2;
          tmp67 = stringResult2;
        } else {
          class Ee {
            constructor(arg0) {
              const obj = conjureAttachmentDrafts;
              return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
            }
          }
        }
        if (cResult[40] !== tmp58) {
          class Ee {
            constructor(arg0) {
              const obj = conjureAttachmentDrafts;
              return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
            }
          }
          tmp70[0] = tmp67;
          tmp70[1] = tmp(tmp2[27]).FileUpIcon;
          class Ce {
            constructor() {
              return M.useReducedMotion;
            }
          }
          cResult[40] = tmp58;
          cResult[41] = tmp70;
        } else {
          class Ee {
            constructor(arg0) {
              const obj = conjureAttachmentDrafts;
              return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
            }
          }
        }
        if (cResult[42] === tmp61) {
          class Ee {
            constructor(arg0) {
              const obj = conjureAttachmentDrafts;
              return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
            }
          }
        }
        const items3 = [tmp61, tmp65, tmp69];
        cResult[42] = tmp61;
        cResult[43] = tmp65;
        cResult[44] = tmp69;
        cResult[45] = items3;
      }
      class Ue {
        constructor(nativeEvent) {
          let obj2;
          let type;
          let url;
          ({ url, type } = nativeEvent.nativeEvent);
          const tmp = canSend;
          if (tmp) {
            const obj = { uri: url, name: obj2.pickedName(url, null), contentType: type, size: null };
            obj2 = conjurePickedFiles;
            const tmp2 = closure_1_15;
            if (type == null) {
              type = "application/octet-stream";
            }
            const items = [obj];
            tmp2(items);
          }
        }
      }
      cResult[28] = tmp53;
      cResult[29] = canSend;
      cResult[30] = Ue;
    }
    function de(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      if (nativeEvent.text !== first) {
        M(nativeEvent.text);
      }
    }
    cResult[17] = tmp10;
    cResult[18] = first;
    cResult[19] = de;
  }
  class G {
    constructor() {
      let tmpResult;
      if (onDraftHasTextChange != null) {
        tmpResult = tmp(closure_9);
      }
      return tmpResult;
    }
  }
  items4 = [tmp13, onDraftHasTextChange];
  cResult[7] = onDraftHasTextChange;
  cResult[8] = G;
  cResult[9] = items4;
}) : (function ConjureNativeComposer(projectId) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let boxFocused;
  let c13;
  let c14;
  let callback9Result;
  let closure_10;
  let intl2;
  let items19;
  let items21;
  let items22;
  let items23;
  let num;
  let obj12;
  let obj14;
  let obj16;
  let string;
  let tmp21;
  let tmp24Result;
  let tmp8;
  let zZ9NgM;
  projectId = projectId.projectId;
  const canSend = projectId.canSend;
  let running = projectId.running;
  let flag = projectId.stopped;
  if (flag === undefined) {
    flag = false;
  }
  const onSend = projectId.onSend;
  const onInterrupt = projectId.onInterrupt;
  const onDraftHasTextChange = projectId.onDraftHasTextChange;
  let flag2 = projectId.hidden;
  if (flag2 === undefined) {
    flag2 = false;
  }
  maxHeight = undefined;
  c14 = undefined;
  closure_15 = undefined;
  let callback3;
  let onRemove;
  let callback4;
  let callback6;
  let closure_20;
  let sendable;
  let callback7;
  let stateFromStores1;
  let callback8;
  let callback9;
  let obj = onDraftHasTextChange;
  let tmp = onInterrupt;
  let tmp2 = onInterrupt(onDraftHasTextChange.useState(() => ConjureComposerDraftStore.getDraft(projectId)), 2);
  let str = tmp2[0];
  const tmp3 = tmp2[1];
  let closure_8 = tmp3;
  let items = [projectId];
  const callback = onDraftHasTextChange.useCallback((draft) => {
    const obj = ConjureChatActionCreators;
    obj.setComposerDraft(projectId, draft);
    closure_8(draft);
  }, items);
  let tmp5 = "" !== str.trim();
  ConjureComposerDraftStore = tmp5;
  const items1 = [tmp5, onDraftHasTextChange];
  const effect = onDraftHasTextChange.useEffect(() => {
    let tmpResult;
    if (onDraftHasTextChange != null) {
      tmpResult = tmp(closure_10);
    }
    return tmpResult;
  }, items1);
  let tmp7 = onInterrupt(onDraftHasTextChange.useState(null), 2);
  [num, tmp8] = tmp7;
  let c11 = tmp8;
  const ref = onDraftHasTextChange.useRef(null);
  const tmp10 = onInterrupt(onDraftHasTextChange.useState(projectId), 2);
  if (tmp10[0] !== projectId) {
    tmp10[1](projectId);
    let tmp12 = ConjureComposerDraftStore;
    tmp3(ConjureComposerDraftStore.getDraft(projectId));
    tmp8(null);
  }
  const items2 = [projectId];
  const effect1 = obj.useEffect(() => {
    const obj = ChatInputNativeCommandsDefault;
    obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
  }, items2);
  const items3 = [flag2];
  const effect2 = obj.useEffect(() => {
    const tmp = flag2;
    if (tmp) {
      const obj = ChatInputNativeCommandsDefault;
      obj.blur(ref.current);
    }
  }, items3);
  let tmp18 = running;
  let obj2 = projectId(running[19]);
  const conjureAttachmentDraftList = obj2.useConjureAttachmentDraftList(projectId, "chat");
  let tmpResult = tmp(obj.useState(false), 2);
  [boxFocused, c13] = tmpResult;
  [tmp21, c14] = tmp(obj.useState(null), 2);
  const items4 = [callback, str];
  tmp(obj.useState(null), 2);
  const callback1 = obj.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.height);
  }, []);
  const callback2 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.text !== str) {
      callback(nativeEvent.text);
    }
  }, items4);
  let obj3 = projectId(running[14]);
  const token = obj3.useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj4 = projectId(running[14]);
  const token1 = obj4.useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj5 = projectId(running[14]);
  const token2 = obj5.useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let obj6 = projectId(running[14]);
  const token3 = obj6.useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const items5 = [closure_8];
  const obj7 = projectId(running[20]);
  const stateFromStores = obj7.useStateFromStores(items5, () => closure_8.useReducedMotion);
  const bound = Math.max(0, (token1 - token) / 2);
  const bound1 = Math.min(c14, Math.max(0, (token - 20) / 2));
  let _Math = Math;
  const _Math2 = Math;
  const minResult = min(maxHeight, max(token, num));
  const tmp34 = closure_15();
  closure_15 = tmp34;
  const items6 = [projectId];
  callback3 = obj.useCallback((arr) => {
    if (0 !== arr.length) {
      const CONJURE_MAX_ATTACHMENTS_PER_MESSAGE = ConjureAttachmentTypes.CONJURE_MAX_ATTACHMENTS_PER_MESSAGE;
      let obj3 = conjureAttachmentDrafts;
      const diff = CONJURE_MAX_ATTACHMENTS_PER_MESSAGE - obj3.getConjureAttachmentDrafts(projectId, "chat").length;
      const tmp12 = projectId;
      if (arr.length > diff) {
        const intl = tmp10(1126).intl;
        const formatToPlainString = intl.formatToPlainString;
        let obj = { count: ConjureAttachmentTypes.CONJURE_MAX_ATTACHMENTS_PER_MESSAGE };
        const Q0aCVZ = _modDef3849.Q0aCVZ;
        _undefined3(formatToPlainString(Q0aCVZ, obj));
        const _Math = Math;
        const substr = arr.slice(0, Math.max(0, diff));
        arr = substr;
      } else {
        let tmp = _undefined3;
        let tmp2 = null;
        _undefined3(null);
      }
      const mapped = arr.map((name) => {
        let obj4;
        let obj6;
        let tmpResult;
        let closure_0 = name;
        let obj = { name: name.name, contentType: name.contentType, previewUrl: name.uri };
        if (null != name.size) {
          let obj3;
          const obj2 = projectId(running[21]);
          const tmp = projectId;
          const tmp2 = running;
          if (!obj2.isConjureAttachmentWithinLimit(name.size, name.contentType)) {
            obj3 = { draft: obj4 };
            obj4 = { status: "error", errorText: tmpResult.conjureAttachmentTooLargeText(name.contentType) };
            const merged = Object.assign(obj);
            tmpResult = tmp(tmp2[19]);
          }
          return obj3;
        }
        const obj5 = {
          draft: obj6,
          upload() {
            const obj = projectId(running[22]);
            return obj.uploadConjurePickedFile(closure_2_0, name);
          }
        };
        obj6 = { status: "uploading" };
        const merged1 = Object.assign(obj);
        obj3 = obj5;
      });
      const tmp10Result = conjureAttachmentDrafts;
      const result = tmp10Result.addConjureAttachmentDrafts(tmp12, "chat", mapped);
    }
  }, items6);
  const items7 = [projectId];
  onRemove = obj.useCallback((arg0) => {
    const obj = conjureAttachmentDrafts;
    return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
  }, items7);
  const items8 = [callback3];
  callback4 = obj.useCallback(onSend(function*(arg0, value) {
    let c2;
    let closure_0;
    if (running === 2) {
      running = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        running = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            running = 3;
            throw value;
          } else if (arg0 === 2) {
            running = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            projectId = callback3;
            c1 = 1;
            const obj2 = projectId(running[22]);
            running = 1;
            const obj5 = { value: obj2.pickConjurePhotos("any", projectId(running[21]).CONJURE_MAX_ATTACHMENTS_PER_MESSAGE), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          running = 3;
          throw value;
        } else if (arg0 === 2) {
          running = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          projectId(value);
          running = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp9) {
        running = 3;
        throw tmp9;
      }
    }
  }), items8);
  const items9 = [callback3, canSend];
  const callback5 = obj.useCallback((nativeEvent) => {
    let obj2;
    let type;
    let url;
    ({ url, type } = nativeEvent.nativeEvent);
    const tmp = canSend;
    if (tmp) {
      const obj = { uri: url, name: obj2.pickedName(url, null), contentType: type, size: null };
      obj2 = conjurePickedFiles;
      const tmp2 = callback3;
      if (type == null) {
        type = "application/octet-stream";
      }
      const items = [obj];
      tmp2(items);
    }
  }, items9);
  const useCallback = obj.useCallback;
  projectId = onSend((types) => {
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0, value) {
      if (c4 === 2) {
        c4 = 3;
        str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp4;
              closure_1 = tmp;
              types = undefined;
              let obj2 = types(running[23]);
              c3 = 1;
              c4 = 1;
              const obj5 = { pickMultiple: true, types };
              const obj6 = { value: obj2.handleDocumentSelection(obj5), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            types = value;
            if (null != types) {
              closure_1_16(types.map((uri) => {
                let obj2;
                const obj = { uri: uri.uri, name: obj2.pickedName(uri.uri, uri.name), contentType: str, size };
                str = uri.type;
                obj2 = types(closure_1_2[22]);
                if (str == null) {
                  str = "application/octet-stream";
                }
                size = uri.size;
                if (size == null) {
                  size = null;
                }
                return obj;
              }));
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          c4 = 3;
          throw tmp16;
        }
      }
    })();
  });
  const items10 = [callback3];
  callback6 = useCallback(function() {
    return closure_0(...arguments);
  }, items10);
  const items11 = [callback4, callback6];
  const memo = obj.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    const obj = { label: intl.string(_modDef3849["51+9lc"]), IconComponent: ImagesIcon.ImagesIcon, action: callback4 };
    intl = intl4.intl;
    let items = [obj, , ];
    const obj2 = {
      label: intl2.string(_modDef3849["10ljr2"]),
      IconComponent: MusicIcon.MusicIcon,
      action() {
        const items = [projectId(running[26]).types.audio];
        return callback6(items);
      }
    };
    intl2 = intl4.intl;
    items[1] = obj2;
    const obj3 = {
      label: intl3.string(_modDef3849.aotDee),
      IconComponent: FileUpIcon.FileUpIcon,
      action() {
        return callback6();
      }
    };
    intl3 = intl4.intl;
    items[2] = obj3;
    return items;
  }, items11);
  const everyResult = conjureAttachmentDraftList.every((status) => "ready" === status.status);
  const tmp41 = "" !== str.trim() || conjureAttachmentDraftList.length > 0;
  closure_20 = tmp41;
  sendable = tmp42;
  const items12 = [onSend, projectId, canSend && tmp41 && everyResult, callback, str];
  callback7 = obj.useCallback(() => {
    const tmp = sendable;
    if (tmp) {
      const obj = conjureAttachmentDrafts;
      const result = obj.takeConjureAttachmentRefs(projectId, "chat");
      let tmp7;
      const tmp5 = onSend;
      if (result.length > 0) {
        tmp7 = result;
      }
      tmp5("chat", tmp7);
      callback("");
      const obj2 = ChatInputNativeCommandsDefault;
      obj2.setText(ref.current, "");
      _undefined3(null);
      _undefined(null);
    }
  }, items12);
  const items13 = [callback];
  const items14 = [projectId];
  const tmp17Result = projectId(tmp18[20]);
  stateFromStores1 = tmp17Result.useStateFromStores(items13, () => {
    const modelSettings = ConjureModelSettingsStore.getModelSettings(projectId);
    let tierSettings;
    if (modelSettings != null) {
      tierSettings = modelSettings.tierSettings;
    }
    return null != tierSettings;
  }, items14);
  const items15 = [projectId];
  callback8 = obj.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: unpackModuleId(ConjureModelSettingsSheetDefault, obj2), key: ConjureModelSettingsSheet.CONJURE_MODEL_SETTINGS_SHEET_KEY };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items15);
  const items16 = [tmp41, running, stateFromStores1, canSend && tmp41 && everyResult];
  const memo1 = obj.useMemo(() => {
    str = "send";
    let str2 = "send";
    if (!closure_20) {
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
  }, items16);
  const items17 = [tmp34, canSend, onInterrupt, callback8, callback7];
  callback9 = obj.useCallback((key) => {
    let intl;
    let intl2;
    let intl3;
    let tmp14;
    if ("stop" === key.key) {
      const obj2 = { style: closure_15.trailingButton, IconComponent: StopIcon.StopIcon, onPress: onInterrupt, disabled: null == onInterrupt, accessibilityLabel: intl2.string(_modDef3849.wiguT0) };
      const tmp18 = ChatInputActionButtonDefault;
      intl2 = intl4.intl;
      tmp14 = unpackModuleId(tmp18, obj2);
    } else if ("models" === key.key) {
      const obj = { style: closure_15.trailingButton, IconComponent: FiltersHorizontalIcon.FiltersHorizontalIcon, onPress: callback8, disabled: !canSend, accessibilityLabel: intl.string(_modDef3849["3E7Yc0"]) };
      const tmp4 = ChatInputActionButtonDefault;
      intl = intl4.intl;
      tmp14 = unpackModuleId(tmp4, obj);
    } else {
      ({ trailingButton: obj3.style, sendButtonActive: obj3.activeStyle, sendIconActive: obj3.activeIconStyle } = closure_15);
      const obj5 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: SendMessageIcon.SendMessageIcon, accessibilityLabel: intl3.string(intl4.t.TXNS7S), onPress: callback7, disabled: !key.sendable };
      const tmp31 = ChatInputActionButtonDefault;
      intl3 = intl4.intl;
      tmp14 = unpackModuleId(tmp31, obj5);
    }
    return tmp14;
  }, items17);
  const items18 = [callback9];
  const callback10 = obj.useCallback((arg0, arg1, state, cleanup) => {
    const obj = { state, cleanup, withBounce: true, children: callback9(arg1) };
    const tmp = ChatInputActionButtonTransitionItemDefault;
    return unpackModuleId(tmp, obj, arg0);
  }, items18);
  const callback11 = obj.useCallback(() => _undefined2(true), []);
  let tmp53 = null;
  const obj8 = { style: tmp34.container, children: items19 };
  const callback12 = obj.useCallback(() => _undefined2(false), []);
  if (null != tmp21) {
    const obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp21 };
    tmp53 = c11(tmp17(tmp18[35]).Text, obj9);
  }
  items19 = [
    tmp53,
    conjureAttachmentDraftList.map((errorText) => {
      let intl;
      let obj3;
      let tmp = null;
      if (null != errorText.errorText) {
        const obj = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: intl.formatToPlainString(canSend(running[11]).U2WbGx, obj3) };
        const Text = projectId(running[35]).Text;
        intl = projectId(running[10]).intl;
        obj3 = { name: null, error: null };
        ({ name: obj2.name, errorText: obj2.error } = errorText);
        tmp = _undefined(Text, obj, errorText.localId);
      }
      return tmp;
    }),
  ,

  ];
  let tmp55 = null;
  if (conjureAttachmentDraftList.length > 0) {
    const obj10 = {
      visible: true,
      style: tmp34.draftCarousel,
      children: conjureAttachmentDraftList.map((draft) => {
          const obj = { draft, onRemove };
          return unpackModuleId(closure_18, obj, draft.localId);
        })
    };
    const ImageCarouselRow = tmp17(tmp18[16]).ImageCarouselRow;
    tmp55 = c11(ImageCarouselRow, obj10);
  }
  items19[2] = tmp55;
  const items20 = [tmp34.box, ];
  if (boxFocused) {
    boxFocused = tmp34.boxFocused;
  }
  items20[1] = boxFocused;
  const obj11 = { style: items20, children: ref(str, obj12) };
  obj12 = { style: tmp34.boxContents, children: items21 };
  const obj13 = { style: { paddingBottom: bound }, children: c11(projectId(tmp18[37]).ContextMenu, obj14) };
  obj14 = {
    items: memo,
    align: "above",
    children(arg0) {
      let accessibilityActions;
      let intl;
      let onAccessibilityAction;
      let onPress;
      ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
      const obj = { ref, IconComponent: PlusLargeIcon.PlusLargeIcon, onPress, disabled: !canSend, accessibilityLabel: intl.string(_modDef3849.hFS71Z), accessibilityActions, onAccessibilityAction };
      const tmp = ChatInputActionButtonDefault;
      intl = intl4.intl;
      return unpackModuleId(tmp, obj);
    }
  };
  items21 = [c11(str, obj13), , ];
  const obj15 = { style: items22, children: c11(tmp24Result, obj16) };
  items22 = [tmp34.input, { marginBottom: bound, height: minResult }];
  obj16 = { ref, editable: canSend, shouldShowCursor: true, maxHeight, verticalInset: bound1, placeholder: string(zZ9NgM), accessibilityLabel: intl2.string(canSend(tmp18[11]).ldNl9x), onBeginFocus: callback11, onEndBlur: callback12, onChangeContentSize: callback1, onSelectionOrTextChange: callback2, onPasteImage: callback5 };
  tmp24Result = canSend(tmp18[38]);
  let intl = tmp17(tmp18[10]).intl;
  string = intl.string;
  const tmp24Result2 = canSend(tmp18[11]);
  if (flag) {
    zZ9NgM = tmp24Result2.mPB3eo;
  } else if (canSend) {
    zZ9NgM = running ? tmp24Result2["0BJa/0"] : tmp24Result2.TEeU7z;
  } else {
    zZ9NgM = tmp24Result2.zZ9NgM;
  }
  intl2 = tmp17(tmp18[10]).intl;
  items21[1] = c11(str, obj15);
  const obj17 = { style: items23, children: callback9Result };
  items23 = [tmp34.trailingSlot, { width: token2 + 2 * token3, height: token1 }];
  if (stateFromStores) {
    callback9Result = callback9(memo1[0]);
  } else {
    const obj18 = { items: memo1, renderItem: callback10, getItemKey: callback3 };
    callback9Result = tmp57(tmp17(tmp18[39]).TransitionGroup, obj18);
  }
  items21[2] = c11(str, obj17);
  items19[3] = c11(str, obj11);
  return ref(str, obj8);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeComposer.tsx");

export default tmp6;
