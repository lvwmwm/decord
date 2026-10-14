// Module ID: 16750
// Function ID: 16751
// Name: ConjureNativeComposer
// Dependencies: [5, 32, 19, 17, 4879, 12904, 16736, 21, 587, 4890, 1126, 3723, 558, 576, 4580, 4803, 10360, 8700, 11602, 16723, 504, 6747, 16722, 11020, 4854, 16578, 11868, 16709, 14808, 4841, 11876, 4886, 10689, 7579, 11881, 4589, 2]

// Module 16750 (ConjureNativeComposer)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import useToken from "useToken" /* 4580 */;
import SendMessageIcon from "SendMessageIcon" /* 4841 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4854 */;
import ConjureTypes from "ConjureTypes" /* 6747 */;
import ConjureActionCreators from "ConjureActionCreators" /* 8700 */;
import ImageCarousel from "ImageCarousel" /* 10360 */;
import PlusLargeIcon from "PlusLargeIcon" /* 10689 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 11602 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 11868 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 11876 */;
import FiltersHorizontalIcon from "FiltersHorizontalIcon" /* 14808 */;
import ConjureModelSettingsSheet from "ConjureModelSettingsSheet" /* 16578 */;
import StopIcon from "StopIcon" /* 16709 */;
import conjurePickedFiles from "conjurePickedFiles" /* 16722 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 16723 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 12904 */;
import ConjureComposerDraftStore_mod from "ConjureComposerDraftStore" /* 16736 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ConjureModelSettingsSheetDefault = ConjureModelSettingsSheet;
let _require, arr, c1, c3, getItemKey, projectId;

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
    formatToPlainStringResult = intl3.formatToPlainString(_modDef3723.MWTYwv, obj3);
  } else if (null != draft.errorText) {
    const intl2 = intl4.intl;
    const obj5 = { name: null, error: null };
    ({ name: obj2.name, errorText: obj2.error } = draft);
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3723.U2WbGx, obj5);
  } else {
    const intl = intl4.intl;
    const obj = { name: draft.name };
    formatToPlainStringResult = intl.formatToPlainString(intl4.t.MJHFt9, obj);
  }
  return formatToPlainStringResult;
}
({ ActivityIndicator: metroRequire, View: metroImportDefault, StyleSheet } = react_native);
let ConjureConnectionStore = ConjureConnectionStore_mod;
let ConjureComposerDraftStore = ConjureComposerDraftStore_mod;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let c13 = 120;
let PX_8 = nativeDefault.space.PX_8;
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
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((draft) => {
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
        WarningIcon = tmp(4803).WarningIcon;
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
}) : ((draft) => {
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
      WarningIcon = tmp2(4803).WarningIcon;
      tmp7Result = tmp7(metroImportDefault, obj7);
    }
  }
  return unpackModuleId(ImageCarouselTile, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let closure_11;
  let closure_13;
  let closure_14;
  let closure_9;
  let items3;
  let onPress;
  let onPress2;
  let onSend;
  let running;
  let stopped;
  let str;
  let tmp15;
  let tmp16;
  let tmp4;
  let tmp64;
  let tmp9;
  let tmp = projectId;
  let tmp2 = onSend;
  let obj = projectId(onSend[13]);
  const cResult = obj.c(142);
  projectId = projectId.projectId;
  const canSend = projectId.canSend;
  ({ running, stopped, onSend } = projectId);
  const onInterrupt = projectId.onInterrupt;
  const onDraftHasTextChange = projectId.onDraftHasTextChange;
  if (cResult[0] !== projectId) {
    const fn = function s() {
      return ConjureComposerDraftStore.getDraft(projectId);
    };
    cResult[0] = projectId;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  let obj2 = str;
  let tmp5 = onDraftHasTextChange;
  const tmp6 = onDraftHasTextChange(str.useState(tmp4), 2);
  str = tmp6[0];
  let tmp7 = tmp6[1];
  let closure_6 = tmp7;
  if (cResult[2] !== projectId) {
    class U {
      constructor(draft) {
        const obj = ConjureActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_6(draft);
      }
    }
    cResult[2] = projectId;
    cResult[3] = U;
  } else {
    class U {
      constructor(draft) {
        const obj = ConjureActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_6(draft);
      }
    }
  }
  U = tmp8;
  if (cResult[4] !== str) {
    class U {
      constructor(draft) {
        const obj = ConjureActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_6(draft);
      }
    }
    cResult[4] = str;
    cResult[5] = tmp10;
    tmp9 = tmp10;
  } else {
    class U {
      constructor(draft) {
        const obj = ConjureActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_6(draft);
      }
    }
  }
  const useReducedMotion = tmp11;
  if (cResult[6] === "" !== tmp9) {
    let tmp23;
    let tmp22;
    class U {
      constructor(draft) {
        const obj = ConjureActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_6(draft);
      }
    }
    const effect = obj2.useEffect(L, items3);
    [tmp15, tmp16] = tmp5(obj2.useState(null), 2);
    ConjureConnectionStore = tmp16;
    const tmp5Result = tmp5(obj2.useState(null), 2);
    const ref = obj2.useRef(null);
    const tmp5Result4 = tmp5(obj2.useState(projectId), 2);
    if (tmp5Result4[0] !== projectId) {
      class U {
        constructor(draft) {
          const obj = ConjureActionCreators;
          obj.setComposerDraft(projectId, draft);
          closure_6(draft);
        }
      }
      tmp7(ref.getDraft(projectId));
      tmp16(null);
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
      tmp23 = items;
      tmp22 = F;
    } else {
      class F {
        constructor() {
          const obj = ChatInputNativeCommandsDefault;
          obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
        }
      }
      tmp23 = cResult[12];
    }
    const effect1 = obj2.useEffect(tmp22, tmp23);
    let tmpResult = tmp(tmp2[19]);
    const conjureAttachmentDraftList = tmpResult.useConjureAttachmentDraftList(projectId, "chat");
    [r10092, closure_11] = tmp5(obj2.useState(false), 2);
    tmp5(obj2.useState(false), 2);
    [r10097, closure_12] = tmp5(obj2.useState(null), 2);
    const _Symbol = Symbol;
    tmp5(obj2.useState(null), 2);
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          const obj = ChatInputNativeCommandsDefault;
          obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
        }
      }
      cResult[13] = tmp29;
    } else {
      class F {
        constructor() {
          const obj = ChatInputNativeCommandsDefault;
          obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
        }
      }
    }
    if (cResult[14] === tmp8) {
      let tmp36;
      let tmp35;
      let tmp47;
      class F {
        constructor() {
          const obj = ChatInputNativeCommandsDefault;
          obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
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
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            const obj = ChatInputNativeCommandsDefault;
            obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
          }
        }
        const items1 = [useReducedMotion];
        function me() {
          return useReducedMotion.useReducedMotion;
        }
        cResult[17] = items1;
        cResult[18] = me;
        tmp36 = me;
        tmp35 = items1;
      } else {
        class F {
          constructor() {
            const obj = ChatInputNativeCommandsDefault;
            obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
          }
        }
        tmp36 = cResult[18];
      }
      const tmpResult10 = tmp(tmp2[20]);
      const stateFromStores = tmpResult10.useStateFromStores(tmp35, tmp36);
      let _Math = Math;
      const bound = Math.max(0, (token1 - token) / 2);
      const _Math2 = Math;
      const _Math3 = Math;
      const bound1 = Math.min(PX_8, Math.max(0, (token - 20) / 2));
      const _Math4 = Math;
      const _Math5 = Math;
      const tmp41 = c13;
      if (tmp15 == null) {
        class F {
          constructor() {
            const obj = ChatInputNativeCommandsDefault;
            obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
          }
        }
      }
      min(tmp41, max(token, tmp15));
      class L {
        constructor() {
          let tmpResult;
          if (onDraftHasTextChange != null) {
            tmpResult = tmp(useReducedMotion);
          }
          return tmpResult;
        }
      }
      c13 = tmp44;
      if (cResult[19] !== projectId) {
        class F {
          constructor() {
            const obj = ChatInputNativeCommandsDefault;
            obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
          }
        }
        cResult[19] = projectId;
        cResult[20] = tmp46;
      } else {
        class F {
          constructor() {
            const obj = ChatInputNativeCommandsDefault;
            obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
          }
        }
      }
      PX_8 = tmp45;
      if (cResult[21] !== projectId) {
        class F {
          constructor() {
            const obj = ChatInputNativeCommandsDefault;
            obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
          }
        }
        cResult[21] = projectId;
        cResult[22] = tmp48;
        tmp47 = tmp48;
      } else {
        class F {
          constructor() {
            const obj = ChatInputNativeCommandsDefault;
            obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
          }
        }
      }
      const onRemove = tmp47;
      if (cResult[23] !== tmp45) {
        class F {
          constructor() {
            const obj = ChatInputNativeCommandsDefault;
            obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
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
                  closure_0 = closure_1_14;
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
        const fn2 = function() {
          return closure_0(...arguments);
        };
        cResult[23] = tmp45;
        cResult[24] = fn2;
      } else {
        class F {
          constructor() {
            const obj = ChatInputNativeCommandsDefault;
            obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
          }
        }
      }
      if (cResult[25] === tmp45) {
        let tmp52;
        let tmp56;
        class F {
          constructor() {
            const obj = ChatInputNativeCommandsDefault;
            obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
          }
        }
        if (cResult[28] !== tmp45) {
          class F {
            constructor() {
              const obj = ChatInputNativeCommandsDefault;
              obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
            }
          }
          _require = onInterrupt(function*(arg0, value) {
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
                    let obj2 = tmp(onSend[23]);
                    c2 = 1;
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
                    closure_1_14(tmp.map((uri) => {
                      let obj2;
                      const obj = { uri: uri.uri, name: obj2.pickedName(uri.uri, uri.name), contentType: str, size };
                      str = uri.type;
                      obj2 = closure_1_0(closure_1_2[22]);
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
          cResult[28] = tmp45;
          cResult[29] = fn3;
        } else {
          class F {
            constructor() {
              const obj = ChatInputNativeCommandsDefault;
              obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              const obj = ChatInputNativeCommandsDefault;
              obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
            }
          }
          const stringResult = obj9.string(canSend(tmp2[11])["49L+4L"]);
          cResult[30] = stringResult;
          tmp52 = stringResult;
        } else {
          class F {
            constructor() {
              const obj = ChatInputNativeCommandsDefault;
              obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
            }
          }
        }
        if (cResult[31] !== tmp49) {
          class F {
            constructor() {
              const obj = ChatInputNativeCommandsDefault;
              obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
            }
          }
          tmp55[0] = tmp52;
          tmp55[1] = tmp49;
          cResult[31] = tmp49;
          cResult[32] = tmp55;
        } else {
          class F {
            constructor() {
              const obj = ChatInputNativeCommandsDefault;
              obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
            }
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              const obj = ChatInputNativeCommandsDefault;
              obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
            }
          }
          const stringResult1 = obj10.string(canSend(tmp2[11]).z61ajL);
          cResult[33] = stringResult1;
          tmp56 = stringResult1;
        } else {
          class F {
            constructor() {
              const obj = ChatInputNativeCommandsDefault;
              obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
            }
          }
        }
        if (cResult[34] !== tmp51) {
          class F {
            constructor() {
              const obj = ChatInputNativeCommandsDefault;
              obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
            }
          }
          tmp59[0] = tmp56;
          tmp59[1] = tmp51;
          cResult[34] = tmp51;
          cResult[35] = tmp59;
        } else {
          class F {
            constructor() {
              const obj = ChatInputNativeCommandsDefault;
              obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
            }
          }
        }
        if (cResult[36] === tmp54) {
          let tmp61;
          class F {
            constructor() {
              const obj = ChatInputNativeCommandsDefault;
              obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
            }
          }
          if (cResult[39] !== conjureAttachmentDraftList) {
            let tmp62;
            class F {
              constructor() {
                const obj = ChatInputNativeCommandsDefault;
                obj.setText(ref.current, ConjureComposerDraftStore.getDraft(projectId));
              }
            }
            if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
              class Le {
                constructor(status) {
                  return "ready" === status.status;
                }
              }
              cResult[41] = Le;
              tmp62 = Le;
            } else {
              class Le {
                constructor(status) {
                  return "ready" === status.status;
                }
              }
            }
            const everyResult = conjureAttachmentDraftList.every(tmp62);
            cResult[39] = conjureAttachmentDraftList;
            cResult[40] = everyResult;
            tmp61 = everyResult;
          } else {
            class Le {
              constructor(status) {
                return "ready" === status.status;
              }
            }
          }
          if (cResult[42] === conjureAttachmentDraftList.length) {
            class Le {
              constructor(status) {
                return "ready" === status.status;
              }
            }
            let closure_16 = tmp66;
            if (cResult[45] === onSend) {
              class Le {
                constructor(status) {
                  return "ready" === status.status;
                }
              }
            }
            function ze() {
              const tmp = closure_16;
              if (tmp) {
                const obj = conjureAttachmentDrafts;
                const result = obj.takeConjureAttachmentRefs(projectId, "chat");
                let tmp7;
                const tmp5 = onSend;
                if (result.length > 0) {
                  tmp7 = result;
                }
                tmp5("chat", tmp7);
                U("");
                const obj2 = ChatInputNativeCommandsDefault;
                obj2.setText(ref.current, "");
                const tmp16 = closure_12(null);
                tmp16(null);
              }
            }
            cResult[45] = onSend;
            cResult[46] = projectId;
            cResult[47] = canSend && tmp64 && tmp61;
            cResult[48] = tmp8;
            cResult[49] = str;
            cResult[50] = ze;
          }
          const tmp65 = "" !== str.trim() || conjureAttachmentDraftList.length > 0;
          cResult[42] = conjureAttachmentDraftList.length;
          cResult[43] = str;
          cResult[44] = tmp65;
          tmp64 = tmp65;
        }
        const items2 = [tmp54, tmp58];
        cResult[36] = tmp54;
        cResult[37] = tmp58;
        cResult[38] = items2;
      }
      class Ee {
        constructor(nativeEvent) {
          let obj2;
          let type;
          let url;
          ({ url, type } = nativeEvent.nativeEvent);
          const tmp = canSend;
          if (tmp) {
            const obj = { uri: url, name: obj2.pickedName(url, null), contentType: type, size: null };
            obj2 = conjurePickedFiles;
            const tmp2 = PX_8;
            if (type == null) {
              type = "application/octet-stream";
            }
            const items = [obj];
            tmp2(items);
          }
        }
      }
      cResult[25] = tmp45;
      cResult[26] = canSend;
      cResult[27] = Ee;
    }
    function se(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      if (nativeEvent.text !== str) {
        U(nativeEvent.text);
      }
    }
    cResult[14] = tmp8;
    cResult[15] = str;
    cResult[16] = se;
    class L {
      constructor() {
        let tmpResult;
        if (onDraftHasTextChange != null) {
          tmpResult = tmp(useReducedMotion);
        }
        return tmpResult;
      }
    }
  }
  class L {
    constructor() {
      let tmpResult;
      if (onDraftHasTextChange != null) {
        tmpResult = tmp(useReducedMotion);
      }
      return tmpResult;
    }
  }
  items3 = [tmp11, onDraftHasTextChange];
  cResult[6] = "" !== tmp9;
  cResult[7] = onDraftHasTextChange;
  cResult[8] = L;
  cResult[9] = items3;
}) : ((projectId) => {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let boxFocused;
  let c12;
  let callback9Result;
  let intl2;
  let items18;
  let items20;
  let items21;
  let items22;
  let num;
  let obj12;
  let obj14;
  let obj16;
  let onRemove;
  let string;
  let tmp20;
  let tmp23Result;
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
  c12 = undefined;
  c13 = undefined;
  let closure_14;
  let callback3;
  getItemKey = undefined;
  let callback4;
  let callback6;
  let closure_19;
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
  let closure_7 = tmp3;
  let items = [projectId];
  const callback = onDraftHasTextChange.useCallback((draft) => {
    const obj = ConjureActionCreators;
    obj.setComposerDraft(projectId, draft);
    closure_7(draft);
  }, items);
  let tmp5 = "" !== str.trim();
  let closure_9 = tmp5;
  const items1 = [tmp5, onDraftHasTextChange];
  const effect = onDraftHasTextChange.useEffect(() => {
    let tmpResult;
    if (onDraftHasTextChange != null) {
      tmpResult = tmp(closure_9);
    }
    return tmpResult;
  }, items1);
  let tmp7 = onInterrupt(onDraftHasTextChange.useState(null), 2);
  [num, tmp8] = tmp7;
  ConjureComposerDraftStore = tmp8;
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
  let obj2 = projectId(running[19]);
  const conjureAttachmentDraftList = obj2.useConjureAttachmentDraftList(projectId, "chat");
  let tmpResult = tmp(obj.useState(false), 2);
  [boxFocused, c12] = tmpResult;
  [tmp20, c13] = tmp(obj.useState(null), 2);
  const items3 = [callback, str];
  tmp(obj.useState(null), 2);
  const callback1 = obj.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.height);
  }, []);
  const callback2 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.text !== str) {
      callback(nativeEvent.text);
    }
  }, items3);
  let obj3 = projectId(running[14]);
  const token = obj3.useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj4 = projectId(running[14]);
  const token1 = obj4.useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj5 = projectId(running[14]);
  const token2 = obj5.useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let obj6 = projectId(running[14]);
  const token3 = obj6.useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const items4 = [callback];
  const obj7 = projectId(running[20]);
  const stateFromStores = obj7.useStateFromStores(items4, () => callback.useReducedMotion);
  const bound = Math.max(0, (token1 - token) / 2);
  let tmp31 = c13;
  const bound1 = Math.min(closure_14, Math.max(0, (token - 20) / 2));
  let _Math = Math;
  const _Math2 = Math;
  const minResult = min(tmp31, max(token, num));
  const tmp33 = callback3();
  closure_14 = tmp33;
  const items5 = [projectId];
  callback3 = obj.useCallback((arr) => {
    if (0 !== arr.length) {
      const CONJURE_MAX_ATTACHMENTS_PER_MESSAGE = ConjureTypes.CONJURE_MAX_ATTACHMENTS_PER_MESSAGE;
      let obj3 = conjureAttachmentDrafts;
      const diff = CONJURE_MAX_ATTACHMENTS_PER_MESSAGE - obj3.getConjureAttachmentDrafts(projectId, "chat").length;
      const tmp12 = projectId;
      if (arr.length > diff) {
        const intl = tmp10(1126).intl;
        const formatToPlainString = intl.formatToPlainString;
        let obj = { count: ConjureTypes.CONJURE_MAX_ATTACHMENTS_PER_MESSAGE };
        const Q0aCVZ = _modDef3723.Q0aCVZ;
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
  }, items5);
  const items6 = [projectId];
  getItemKey = obj.useCallback((arg0) => {
    const obj = conjureAttachmentDrafts;
    return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
  }, items6);
  const items7 = [callback3];
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
  }), items7);
  const items8 = [callback3, canSend];
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
  }, items8);
  const items9 = [callback3];
  callback6 = obj.useCallback(onSend(function*(arg0, value) {
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
            let obj2 = tmp(running[23]);
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
            closure_129_15(tmp.map((uri) => {
              let obj2;
              const obj = { uri: uri.uri, name: obj2.pickedName(uri.uri, uri.name), contentType: str, size };
              str = uri.type;
              obj2 = closure_1_0(closure_1_2[22]);
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
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp15) {
        c3 = 3;
        throw tmp15;
      }
    }
  }), items9);
  const items10 = [callback6, callback4];
  const memo = obj.useMemo(() => {
    let intl;
    let intl2;
    const obj = { label: intl.string(_modDef3723["49L+4L"]), action: callback4 };
    intl = intl4.intl;
    const items = [obj, ];
    const obj2 = { label: intl2.string(_modDef3723.z61ajL), action: callback6 };
    intl2 = intl4.intl;
    items[1] = obj2;
    return items;
  }, items10);
  const everyResult = conjureAttachmentDraftList.every((status) => "ready" === status.status);
  const tmp40 = "" !== str.trim() || conjureAttachmentDraftList.length > 0;
  closure_19 = tmp40;
  sendable = tmp41;
  const items11 = [onSend, projectId, canSend && tmp40 && everyResult, callback, str];
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
  }, items11);
  const items12 = [closure_9];
  const items13 = [projectId];
  const tmp16Result = projectId(running[20]);
  stateFromStores1 = tmp16Result.useStateFromStores(items12, () => {
    const modelSettings = ConjureConnectionStore.getModelSettings(projectId);
    let tierSettings;
    if (modelSettings != null) {
      tierSettings = modelSettings.tierSettings;
    }
    return null != tierSettings;
  }, items13);
  const items14 = [projectId];
  callback8 = obj.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: unpackModuleId(ConjureModelSettingsSheetDefault, obj2), key: ConjureModelSettingsSheet.CONJURE_MODEL_SETTINGS_SHEET_KEY };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items14);
  const items15 = [tmp40, running, stateFromStores1, canSend && tmp40 && everyResult];
  const memo1 = obj.useMemo(() => {
    str = "send";
    let str2 = "send";
    if (!closure_19) {
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
  }, items15);
  const items16 = [tmp33, canSend, onInterrupt, callback8, callback7];
  callback9 = obj.useCallback((key) => {
    let intl;
    let intl2;
    let intl3;
    let tmp14;
    if ("stop" === key.key) {
      const obj2 = { style: closure_14.trailingButton, IconComponent: StopIcon.StopIcon, onPress: onInterrupt, disabled: null == onInterrupt, accessibilityLabel: intl2.string(_modDef3723.wiguT0) };
      const tmp18 = ChatInputActionButtonDefault;
      intl2 = intl4.intl;
      tmp14 = unpackModuleId(tmp18, obj2);
    } else if ("models" === key.key) {
      const obj = { style: closure_14.trailingButton, IconComponent: FiltersHorizontalIcon.FiltersHorizontalIcon, onPress: callback8, disabled: !canSend, accessibilityLabel: intl.string(_modDef3723["3E7Yc0"]) };
      const tmp4 = ChatInputActionButtonDefault;
      intl = intl4.intl;
      tmp14 = unpackModuleId(tmp4, obj);
    } else {
      ({ trailingButton: obj3.style, sendButtonActive: obj3.activeStyle, sendIconActive: obj3.activeIconStyle } = closure_14);
      const obj5 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: SendMessageIcon.SendMessageIcon, accessibilityLabel: intl3.string(intl4.t.TXNS7S), onPress: callback7, disabled: !key.sendable };
      const tmp31 = ChatInputActionButtonDefault;
      intl3 = intl4.intl;
      tmp14 = unpackModuleId(tmp31, obj5);
    }
    return tmp14;
  }, items16);
  const items17 = [callback9];
  const callback10 = obj.useCallback((arg0, arg1, state, cleanup) => {
    const obj = { state, cleanup, withBounce: true, children: callback9(arg1) };
    const tmp = ChatInputActionButtonTransitionItemDefault;
    return unpackModuleId(tmp, obj, arg0);
  }, items17);
  const callback11 = obj.useCallback(() => _undefined2(true), []);
  let tmp52 = null;
  const obj8 = { style: tmp33.container, children: items18 };
  const callback12 = obj.useCallback(() => _undefined2(false), []);
  if (null != tmp20) {
    const obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp20 };
    tmp52 = ref(tmp16(tmp17[31]).Text, obj9);
  }
  items18 = [
    tmp52,
    conjureAttachmentDraftList.map((errorText) => {
      let intl;
      let obj3;
      let tmp = null;
      if (null != errorText.errorText) {
        const obj = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: intl.formatToPlainString(canSend(running[11]).U2WbGx, obj3) };
        const Text = projectId(running[31]).Text;
        intl = projectId(running[10]).intl;
        obj3 = { name: null, error: null };
        ({ name: obj2.name, errorText: obj2.error } = errorText);
        tmp = ref(Text, obj, errorText.localId);
      }
      return tmp;
    }),
  ,

  ];
  let tmp54 = null;
  if (conjureAttachmentDraftList.length > 0) {
    const obj10 = {
      visible: true,
      style: tmp33.draftCarousel,
      children: conjureAttachmentDraftList.map((draft) => {
          const obj = { draft, onRemove };
          return unpackModuleId(closure_18, obj, draft.localId);
        })
    };
    const ImageCarouselRow = tmp16(tmp17[16]).ImageCarouselRow;
    tmp54 = ref(ImageCarouselRow, obj10);
  }
  items18[2] = tmp54;
  const items19 = [tmp33.box, ];
  if (boxFocused) {
    boxFocused = tmp33.boxFocused;
  }
  items19[1] = boxFocused;
  const obj11 = { style: items19, children: c12(closure_7, obj12) };
  obj12 = { style: tmp33.boxContents, children: items20 };
  const obj13 = { style: { paddingBottom: bound }, children: ref(projectId(running[33]).ContextMenu, obj14) };
  obj14 = {
    items: memo,
    align: "above",
    children(arg0) {
      let accessibilityActions;
      let intl;
      let onAccessibilityAction;
      let onPress;
      ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
      const obj = { ref, IconComponent: PlusLargeIcon.PlusLargeIcon, onPress, disabled: !canSend, accessibilityLabel: intl.string(_modDef3723.hFS71Z), accessibilityActions, onAccessibilityAction };
      const tmp = ChatInputActionButtonDefault;
      intl = intl4.intl;
      return unpackModuleId(tmp, obj);
    }
  };
  items20 = [ref(closure_7, obj13), , ];
  const obj15 = { style: items21, children: ref(tmp23Result, obj16) };
  items21 = [tmp33.input, { marginBottom: bound, height: minResult }];
  obj16 = { ref, editable: canSend, shouldShowCursor: true, maxHeight: tmp31, verticalInset: bound1, placeholder: string(zZ9NgM), accessibilityLabel: intl2.string(canSend(running[11]).ldNl9x), onBeginFocus: callback11, onEndBlur: callback12, onChangeContentSize: callback1, onSelectionOrTextChange: callback2, onPasteImage: callback5 };
  tmp23Result = canSend(running[34]);
  let intl = tmp16(tmp17[10]).intl;
  string = intl.string;
  const tmp23Result2 = canSend(running[11]);
  if (flag) {
    zZ9NgM = tmp23Result2.mPB3eo;
  } else if (canSend) {
    zZ9NgM = running ? tmp23Result2["0BJa/0"] : tmp23Result2.TEeU7z;
  } else {
    zZ9NgM = tmp23Result2.zZ9NgM;
  }
  intl2 = tmp16(tmp17[10]).intl;
  items20[1] = ref(closure_7, obj15);
  const obj17 = { style: items22, children: callback9Result };
  items22 = [tmp33.trailingSlot, { width: token2 + 2 * token3, height: token1 }];
  if (stateFromStores) {
    callback9Result = callback9(memo1[0]);
  } else {
    const obj18 = { items: memo1, renderItem: callback10, getItemKey };
    callback9Result = tmp56(tmp16(tmp17[35]).TransitionGroup, obj18);
  }
  items20[2] = ref(closure_7, obj17);
  items18[3] = ref(closure_7, obj11);
  return c12(closure_7, obj8);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeComposer.tsx");

export default tmp6;
