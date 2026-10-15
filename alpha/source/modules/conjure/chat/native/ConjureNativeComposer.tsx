// Module ID: 12215
// Function ID: 12216
// Name: ConjureNativeComposer
// Dependencies: [5, 32, 19, 17, 5140, 10899, 12033, 21, 587, 5151, 1126, 3862, 558, 576, 4874, 7788, 10237, 12216, 12217, 12031, 12219, 12070, 504, 11518, 12185, 11506, 12222, 10471, 11507, 11541, 5115, 11576, 12224, 12091, 12225, 5099, 12227, 12230, 5147, 10542, 9583, 12231, 4883, 2]

// Module 12215 (ConjureNativeComposer)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import _modDef3862 from "module_3862" /* 3862 */;
import useToken from "useToken" /* 4874 */;
import SendMessageIcon from "SendMessageIcon" /* 5099 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5115 */;
import ImageCarousel from "ImageCarousel" /* 10237 */;
import MusicIcon from "MusicIcon" /* 10471 */;
import PlusLargeIcon from "PlusLargeIcon" /* 10542 */;
import keepLocalCopy from "keepLocalCopy" /* 11507 */;
import ConjureAttachmentTypes from "ConjureAttachmentTypes" /* 11518 */;
import FileUpIcon from "FileUpIcon" /* 11541 */;
import ConjureModelSettingsSheet from "ConjureModelSettingsSheet" /* 11576 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 12031 */;
import conjureMentions from "conjureMentions" /* 12070 */;
import StopIcon from "StopIcon" /* 12091 */;
import conjurePickedFiles from "conjurePickedFiles" /* 12185 */;
import ConjureChatActionCreators from "ConjureChatActionCreators" /* 12216 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 12217 */;
import ImagesIcon from "ImagesIcon" /* 12222 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 12224 */;
import FiltersHorizontalIcon from "FiltersHorizontalIcon" /* 12225 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 12227 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5140 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 10899 */;
import ConjureComposerDraftStore_mod from "ConjureComposerDraftStore" /* 12033 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5151 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ConjureModelSettingsSheetDefault = ConjureModelSettingsSheet;
let arr, c1, closure_1, closure_2, getItemKey, maxHeight, types;

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
    formatToPlainStringResult = intl3.formatToPlainString(_modDef3862.MWTYwv, obj3);
  } else if (null != draft.errorText) {
    const intl2 = intl4.intl;
    const obj5 = { name: null, error: null };
    ({ name: obj2.name, errorText: obj2.error } = draft);
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3862.U2WbGx, obj5);
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
        WarningIcon = tmp(7788).WarningIcon;
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
      WarningIcon = tmp2(7788).WarningIcon;
      tmp7Result = tmp7(metroImportDefault, obj7);
    }
  }
  return unpackModuleId(ImageCarouselTile, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeComposer(projectId) {
  let c13;
  let closure_10;
  let closure_12;
  let closure_5;
  let items2;
  let obj4;
  let onPress;
  let onPress2;
  let onRemove;
  let onSend;
  let running;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp17;
  let tmp36;
  let tmp5;
  let tmp = projectId;
  let tmp2 = onSend;
  let obj = projectId(onSend[13]);
  const cResult = obj.c(165);
  projectId = projectId.projectId;
  const canSend = projectId.canSend;
  ({ running, onSend } = projectId);
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
  const tmp7 = onDraftHasTextChange(react.useState(tmp5), 2);
  const first = tmp7[0];
  let tmp9 = tmp7[1];
  let closure_7 = tmp9;
  if (cResult[2] !== projectId) {
    class P {
      constructor(draft) {
        const obj = ConjureChatActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_7(draft);
      }
    }
    cResult[2] = projectId;
    cResult[3] = P;
    tmp10 = P;
  } else {
    class P {
      constructor(draft) {
        const obj = ConjureChatActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_7(draft);
      }
    }
  }
  P = tmp10;
  if (cResult[4] !== first) {
    class P {
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
    class P {
      constructor(draft) {
        const obj = ConjureChatActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_7(draft);
      }
    }
  }
  let closure_9 = tmp13;
  if (cResult[6] === "" !== tmp11) {
    let tmp24;
    let tmp23;
    let tmp27;
    let tmp26;
    class P {
      constructor(draft) {
        const obj = ConjureChatActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_7(draft);
      }
    }
    const effect = obj2.useEffect(L, items2);
    [r10058, tmp17] = onDraftHasTextChange(obj2.useState(null), 2);
    ConjureComposerDraftStore = tmp17;
    onDraftHasTextChange(obj2.useState(null), 2);
    const ref = obj2.useRef(null);
    const tmp6Result5 = onDraftHasTextChange(obj2.useState(projectId), 2);
    if (tmp6Result5[0] !== projectId) {
      class P {
        constructor(draft) {
          const obj = ConjureChatActionCreators;
          obj.setComposerDraft(projectId, draft);
          closure_7(draft);
        }
      }
      tmp9(ConjureComposerDraftStore.getDraft(projectId));
      tmp17(null);
    }
    if (cResult[10] !== projectId) {
      class F {
        constructor() {
          const obj = ChatInputNativeCommandsDefault;
          obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
        }
      }
      let items = [projectId];
      cResult[10] = projectId;
      cResult[11] = F;
      cResult[12] = items;
      tmp24 = items;
      tmp23 = F;
    } else {
      class F {
        constructor() {
          const obj = ChatInputNativeCommandsDefault;
          obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
        }
      }
      tmp24 = cResult[12];
    }
    const effect1 = obj2.useEffect(tmp23, tmp24);
    if (cResult[13] !== tmp4) {
      class K {
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
      cResult[14] = items1;
      cResult[15] = K;
      tmp27 = K;
      tmp26 = items1;
    } else {
      class K {
        constructor() {
          const tmp = closure_5;
          if (tmp) {
            const obj = ChatInputNativeCommandsDefault;
            obj.blur(ref.current);
          }
        }
      }
      tmp27 = cResult[15];
    }
    const effect2 = obj2.useEffect(tmp27, tmp26);
    let tmpResult = tmp(tmp2[19]);
    const str = "chat";
    const conjureAttachmentDraftList = tmpResult.useConjureAttachmentDraftList(projectId, "chat");
    [r10102, closure_12] = onDraftHasTextChange(obj2.useState(false), 2);
    onDraftHasTextChange(obj2.useState(false), 2);
    [r10107, c13] = onDraftHasTextChange(obj2.useState(null), 2);
    const _Symbol = Symbol;
    onDraftHasTextChange(obj2.useState(null), 2);
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class K {
        constructor() {
          const tmp = closure_5;
          if (tmp) {
            const obj = ChatInputNativeCommandsDefault;
            obj.blur(ref.current);
          }
        }
      }
      cResult[16] = tmp34;
    } else {
      class K {
        constructor() {
          const tmp = closure_5;
          if (tmp) {
            const obj = ChatInputNativeCommandsDefault;
            obj.blur(ref.current);
          }
        }
      }
    }
    [tmp36, PX_8] = onDraftHasTextChange(obj2.useState(null), 2);
    onDraftHasTextChange(obj2.useState(null), 2);
    if (cResult[17] === tmp10) {
      class K {
        constructor() {
          const tmp = closure_5;
          if (tmp) {
            const obj = ChatInputNativeCommandsDefault;
            obj.blur(ref.current);
          }
        }
      }
      closure_15 = canSend(tmp2[20])(projectId);
      const tmp39 = canSend(tmp2[20])(projectId);
      if (cResult[20] === canSend) {
        class K {
          constructor() {
            const tmp = closure_5;
            if (tmp) {
              const obj = ChatInputNativeCommandsDefault;
              obj.blur(ref.current);
            }
          }
        }
      }
      let result = null;
      if (null != tmp36) {
        class K {
          constructor() {
            const tmp = closure_5;
            if (tmp) {
              const obj = ChatInputNativeCommandsDefault;
              obj.blur(ref.current);
            }
          }
        }
        if (canSend) {
          class K {
            constructor() {
              const tmp = closure_5;
              if (tmp) {
                const obj = ChatInputNativeCommandsDefault;
                obj.blur(ref.current);
              }
            }
          }
          if (!tmp4) {
            class K {
              constructor() {
                const tmp = closure_5;
                if (tmp) {
                  const obj = ChatInputNativeCommandsDefault;
                  obj.blur(ref.current);
                }
              }
            }
            result = obj4.findConjureMentionQuery(first, tmp36);
          }
        }
      }
      cResult[20] = canSend;
      cResult[21] = tmp36;
      cResult[22] = tmp4;
      cResult[23] = first;
      cResult[24] = result;
    }
    function ue(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      if (nativeEvent.text !== first) {
        P(nativeEvent.text);
      }
      let end = null;
      const tmp3 = PX_8;
      if (nativeEvent.start === nativeEvent.end) {
        end = nativeEvent.end;
      }
      tmp3(end);
    }
    cResult[17] = tmp10;
    class L {
      constructor() {
        let tmpResult;
        if (onDraftHasTextChange != null) {
          tmpResult = tmp(closure_9);
        }
        return tmpResult;
      }
    }
    cResult[18] = first;
    cResult[19] = ue;
  }
  class L {
    constructor() {
      let tmpResult;
      if (onDraftHasTextChange != null) {
        tmpResult = tmp(closure_9);
      }
      return tmpResult;
    }
  }
  items2 = [tmp13, onDraftHasTextChange];
  cResult[6] = "" !== tmp11;
  cResult[7] = onDraftHasTextChange;
  cResult[8] = L;
  cResult[9] = items2;
}) : (function ConjureNativeComposer(projectId) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let boxFocused;
  let c13;
  let c14;
  let callback10Result;
  let closure_10;
  let closure_16;
  let intl2;
  let items22;
  let items24;
  let items25;
  let items26;
  let num;
  let obj12;
  let obj14;
  let obj16;
  let string;
  let tmp21;
  let tmp26Result;
  let tmp8;
  let zZ9NgM;
  projectId = projectId.projectId;
  const canSend = projectId.canSend;
  let running = projectId.running;
  const onSend = projectId.onSend;
  const onInterrupt = projectId.onInterrupt;
  const onDraftHasTextChange = projectId.onDraftHasTextChange;
  let flag = projectId.hidden;
  if (flag === undefined) {
    flag = false;
  }
  maxHeight = undefined;
  c14 = undefined;
  let first;
  getItemKey = undefined;
  let closure_17;
  let memo;
  let closure_19;
  let callback4;
  let onRemove;
  let callback5;
  let callback7;
  let closure_24;
  let sendable;
  let callback8;
  let stateFromStores1;
  let callback9;
  let callback10;
  let obj = onDraftHasTextChange;
  let tmp = onInterrupt;
  let tmp2 = onInterrupt(onDraftHasTextChange.useState(() => ConjureComposerDraftStore.getDraft(projectId)), 2);
  let str = tmp2[0];
  let tmp3 = tmp2[1];
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
  [num, tmp8] = onInterrupt(onDraftHasTextChange.useState(null), 2);
  let c11 = tmp8;
  const tmp7 = onInterrupt(onDraftHasTextChange.useState(null), 2);
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
  const items3 = [flag];
  const effect2 = obj.useEffect(() => {
    const tmp = flag;
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
  tmp(obj.useState(null), 2);
  const callback1 = obj.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.height);
  }, []);
  const tmpResult4 = tmp(obj.useState(null), 2);
  first = tmpResult4[0];
  getItemKey = tmpResult4[1];
  const items4 = [callback, str];
  const callback2 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.text !== str) {
      callback(nativeEvent.text);
    }
    let end = null;
    const tmp3 = closure_16;
    if (nativeEvent.start === nativeEvent.end) {
      end = nativeEvent.end;
    }
    tmp3(end);
  }, items4);
  const tmp27 = canSend(running[20])(projectId);
  closure_17 = tmp27;
  const items5 = [str, first, canSend, flag];
  memo = obj.useMemo(() => {
    let result = null;
    if (null != first) {
      result = null;
      if (canSend) {
        result = null;
        if (!flag) {
          const obj = conjureMentions;
          result = obj.findConjureMentionQuery(str, tmp);
        }
      }
    }
    return result;
  }, items5);
  const items6 = [memo, tmp27];
  const items7 = [memo, callback, str];
  const memo1 = obj.useMemo(() => {
    let items;
    if (null == memo) {
      items = [];
    } else {
      const obj = conjureMentions;
      items = obj.filterConjureMentionCandidates(closure_17, tmp.text);
    }
    return items;
  }, items6);
  const callback3 = obj.useCallback((username) => {
    if (null != memo) {
      const obj = conjureMentions;
      const iter = obj.insertConjureMention(str, tmp, username);
      callback(iter.value);
      closure_16(iter.caret);
      const obj2 = ChatInputNativeCommandsDefault;
      obj2.setText(ref.current, iter.value);
      const obj3 = ChatInputNativeCommandsDefault;
      obj3.setSelectedRange(ref.current, iter.caret, 0);
    }
  }, items7);
  let obj3 = projectId(running[14]);
  const token = obj3.useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj4 = projectId(running[14]);
  const token1 = obj4.useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj5 = projectId(running[14]);
  const token2 = obj5.useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let obj6 = projectId(running[14]);
  const token3 = obj6.useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const items8 = [closure_8];
  const obj7 = projectId(running[22]);
  const stateFromStores = obj7.useStateFromStores(items8, () => closure_8.useReducedMotion);
  const bound = Math.max(0, (token1 - token) / 2);
  const bound1 = Math.min(c14, Math.max(0, (token - 20) / 2));
  let _Math = Math;
  const _Math2 = Math;
  const minResult = min(maxHeight, max(token, num));
  const tmp40 = first();
  closure_19 = tmp40;
  const items9 = [projectId];
  callback4 = obj.useCallback((arr) => {
    if (0 !== arr.length) {
      const CONJURE_MAX_ATTACHMENTS_PER_MESSAGE = ConjureAttachmentTypes.CONJURE_MAX_ATTACHMENTS_PER_MESSAGE;
      let obj3 = conjureAttachmentDrafts;
      const diff = CONJURE_MAX_ATTACHMENTS_PER_MESSAGE - obj3.getConjureAttachmentDrafts(projectId, "chat").length;
      const tmp12 = projectId;
      if (arr.length > diff) {
        const intl = tmp10(1126).intl;
        const formatToPlainString = intl.formatToPlainString;
        let obj = { count: ConjureAttachmentTypes.CONJURE_MAX_ATTACHMENTS_PER_MESSAGE };
        const Q0aCVZ = _modDef3862.Q0aCVZ;
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
          const obj2 = projectId(running[23]);
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
            const obj = projectId(running[24]);
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
  }, items9);
  const items10 = [projectId];
  onRemove = obj.useCallback((arg0) => {
    const obj = conjureAttachmentDrafts;
    return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
  }, items10);
  const items11 = [callback4];
  callback5 = obj.useCallback(onSend(function*(arg0, value) {
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
            projectId = callback4;
            c1 = 1;
            const obj2 = projectId(running[24]);
            running = 1;
            const obj5 = { value: obj2.pickConjurePhotos("mixed", projectId(running[23]).CONJURE_MAX_ATTACHMENTS_PER_MESSAGE), done: false };
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
  }), items11);
  const items12 = [callback4, canSend];
  const callback6 = obj.useCallback((nativeEvent) => {
    let obj2;
    let type;
    let url;
    ({ url, type } = nativeEvent.nativeEvent);
    const tmp = canSend;
    if (tmp) {
      const obj = { uri: url, name: obj2.pickedName(url, null), contentType: type, size: null };
      obj2 = conjurePickedFiles;
      const tmp2 = callback4;
      if (type == null) {
        type = "application/octet-stream";
      }
      const items = [obj];
      tmp2(items);
    }
  }, items12);
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
              let obj2 = types(running[25]);
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
              closure_1_20(types.map((uri) => {
                let obj2;
                const obj = { uri: uri.uri, name: obj2.pickedName(uri.uri, uri.name), contentType: str, size };
                str = uri.type;
                obj2 = types(closure_1_2[24]);
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
  const items13 = [callback4];
  callback7 = useCallback(function() {
    return closure_0(...arguments);
  }, items13);
  const items14 = [callback5, callback7];
  const memo2 = obj.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    const obj = { label: intl.string(_modDef3862["51+9lc"]), IconComponent: ImagesIcon.ImagesIcon, action: callback5 };
    intl = intl4.intl;
    let items = [obj, , ];
    const obj2 = {
      label: intl2.string(_modDef3862["10ljr2"]),
      IconComponent: MusicIcon.MusicIcon,
      action() {
        const items = [projectId(running[28]).types.audio];
        return callback7(items);
      }
    };
    intl2 = intl4.intl;
    items[1] = obj2;
    const obj3 = {
      label: intl3.string(_modDef3862.aotDee),
      IconComponent: FileUpIcon.FileUpIcon,
      action() {
        return callback7();
      }
    };
    intl3 = intl4.intl;
    items[2] = obj3;
    return items;
  }, items14);
  const everyResult = conjureAttachmentDraftList.every((status) => "ready" === status.status);
  const tmp47 = "" !== str.trim() || conjureAttachmentDraftList.length > 0;
  closure_24 = tmp47;
  sendable = tmp48;
  const items15 = [onSend, projectId, canSend && tmp47 && everyResult, callback, str, tmp27];
  callback8 = obj.useCallback(() => {
    const tmp = sendable;
    if (tmp) {
      const obj = conjureAttachmentDrafts;
      const result = obj.takeConjureAttachmentRefs(projectId, "chat");
      let tmp9;
      const obj2 = conjureMentions;
      const result1 = obj2.encodeConjureMentions(str, closure_17);
      const tmp5 = onSend;
      if (result.length > 0) {
        tmp9 = result;
      }
      tmp5(result1, tmp9);
      callback("");
      const obj3 = ChatInputNativeCommandsDefault;
      obj3.setText(ref.current, "");
      _undefined3(null);
      _undefined(null);
    }
  }, items15);
  const items16 = [callback];
  const items17 = [projectId];
  const tmp17Result = projectId(tmp18[22]);
  stateFromStores1 = tmp17Result.useStateFromStores(items16, () => {
    const modelSettings = ConjureModelSettingsStore.getModelSettings(projectId);
    let tierSettings;
    if (modelSettings != null) {
      tierSettings = modelSettings.tierSettings;
    }
    return null != tierSettings;
  }, items17);
  const items18 = [projectId];
  callback9 = obj.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: unpackModuleId(ConjureModelSettingsSheetDefault, obj2), key: ConjureModelSettingsSheet.CONJURE_MODEL_SETTINGS_SHEET_KEY };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items18);
  const items19 = [tmp47, running, stateFromStores1, canSend && tmp47 && everyResult];
  const memo3 = obj.useMemo(() => {
    str = "send";
    let str2 = "send";
    if (!closure_24) {
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
  }, items19);
  const items20 = [tmp40, canSend, onInterrupt, callback9, callback8];
  callback10 = obj.useCallback((key) => {
    let intl;
    let intl2;
    let intl3;
    let tmp14;
    if ("stop" === key.key) {
      const obj2 = { style: closure_19.trailingButton, IconComponent: StopIcon.StopIcon, onPress: onInterrupt, disabled: null == onInterrupt, accessibilityLabel: intl2.string(_modDef3862.wiguT0) };
      const tmp18 = ChatInputActionButtonDefault;
      intl2 = intl4.intl;
      tmp14 = unpackModuleId(tmp18, obj2);
    } else if ("models" === key.key) {
      const obj = { style: closure_19.trailingButton, IconComponent: FiltersHorizontalIcon.FiltersHorizontalIcon, onPress: callback9, disabled: !canSend, accessibilityLabel: intl.string(_modDef3862["3E7Yc0"]) };
      const tmp4 = ChatInputActionButtonDefault;
      intl = intl4.intl;
      tmp14 = unpackModuleId(tmp4, obj);
    } else {
      ({ trailingButton: obj3.style, sendButtonActive: obj3.activeStyle, sendIconActive: obj3.activeIconStyle } = closure_19);
      const obj5 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: SendMessageIcon.SendMessageIcon, accessibilityLabel: intl3.string(intl4.t.TXNS7S), onPress: callback8, disabled: !key.sendable };
      const tmp31 = ChatInputActionButtonDefault;
      intl3 = intl4.intl;
      tmp14 = unpackModuleId(tmp31, obj5);
    }
    return tmp14;
  }, items20);
  const items21 = [callback10];
  const callback11 = obj.useCallback((arg0, arg1, state, cleanup) => {
    const obj = { state, cleanup, withBounce: true, children: callback10(arg1) };
    const tmp = ChatInputActionButtonTransitionItemDefault;
    return unpackModuleId(tmp, obj, arg0);
  }, items21);
  const callback12 = obj.useCallback(() => _undefined2(true), []);
  const obj8 = { style: tmp40.container, children: items22 };
  const callback13 = obj.useCallback(() => _undefined2(false), []);
  items22 = [c11(tmp26(tmp18[37]), { users: memo1, onSelect: callback3 }), , , , ];
  let tmp59Result = null;
  if (null != tmp21) {
    const obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp21 };
    tmp59Result = tmp59(tmp17(tmp18[38]).Text, obj9);
  }
  items22[1] = tmp59Result;
  items22[2] = conjureAttachmentDraftList.map((errorText) => {
    let intl;
    let obj3;
    let tmp = null;
    if (null != errorText.errorText) {
      const obj = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: intl.formatToPlainString(canSend(running[11]).U2WbGx, obj3) };
      const Text = projectId(running[38]).Text;
      intl = projectId(running[10]).intl;
      obj3 = { name: null, error: null };
      ({ name: obj2.name, errorText: obj2.error } = errorText);
      tmp = _undefined(Text, obj, errorText.localId);
    }
    return tmp;
  });
  let tmp59Result2 = null;
  if (conjureAttachmentDraftList.length > 0) {
    const obj10 = {
      visible: true,
      style: tmp40.draftCarousel,
      children: conjureAttachmentDraftList.map((draft) => {
          const obj = { draft, onRemove };
          return unpackModuleId(closure_18, obj, draft.localId);
        })
    };
    const ImageCarouselRow = tmp17(tmp18[16]).ImageCarouselRow;
    tmp59Result2 = tmp59(ImageCarouselRow, obj10);
  }
  items22[3] = tmp59Result2;
  const items23 = [tmp40.box, ];
  if (boxFocused) {
    boxFocused = tmp40.boxFocused;
  }
  items23[1] = boxFocused;
  const obj11 = { style: items23, children: ref(str, obj12) };
  obj12 = { style: tmp40.boxContents, children: items24 };
  const obj13 = { style: { paddingBottom: bound }, children: c11(projectId(tmp18[40]).ContextMenu, obj14) };
  obj14 = {
    items: memo2,
    align: "above",
    children(arg0) {
      let accessibilityActions;
      let intl;
      let onAccessibilityAction;
      let onPress;
      ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
      const obj = { ref, IconComponent: PlusLargeIcon.PlusLargeIcon, onPress, disabled: !canSend, accessibilityLabel: intl.string(_modDef3862.hFS71Z), accessibilityActions, onAccessibilityAction };
      const tmp = ChatInputActionButtonDefault;
      intl = intl4.intl;
      return unpackModuleId(tmp, obj);
    }
  };
  items24 = [c11(str, obj13), , ];
  const obj15 = { style: items25, children: c11(tmp26Result, obj16) };
  items25 = [tmp40.input, { marginBottom: bound, height: minResult }];
  obj16 = { ref, editable: canSend, shouldShowCursor: true, maxHeight, verticalInset: bound1, placeholder: string(zZ9NgM), accessibilityLabel: intl2.string(canSend(tmp18[11]).ldNl9x), onBeginFocus: callback12, onEndBlur: callback13, onChangeContentSize: callback1, onSelectionOrTextChange: callback2, onPasteImage: callback6 };
  tmp26Result = canSend(tmp18[41]);
  let intl = tmp17(tmp18[10]).intl;
  string = intl.string;
  const tmp26Result2 = canSend(tmp18[11]);
  if (canSend) {
    zZ9NgM = running ? tmp26Result2["0BJa/0"] : tmp26Result2.TEeU7z;
  } else {
    zZ9NgM = tmp26Result2.zZ9NgM;
  }
  intl2 = tmp17(tmp18[10]).intl;
  items24[1] = c11(str, obj15);
  const obj17 = { style: items26, children: callback10Result };
  items26 = [tmp40.trailingSlot, { width: token2 + 2 * token3, height: token1 }];
  if (stateFromStores) {
    callback10Result = callback10(memo3[0]);
  } else {
    const obj18 = { items: memo3, renderItem: callback11, getItemKey };
    callback10Result = tmp59(tmp17(tmp18[42]).TransitionGroup, obj18);
  }
  items24[2] = c11(str, obj17);
  items22[4] = c11(str, obj11);
  return ref(str, obj8);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeComposer.tsx");

export default tmp6;
