// Module ID: 16731
// Function ID: 16732
// Name: VibegrationsNativeComposer
// Dependencies: [5, 32, 19, 17, 4879, 16717, 12904, 21, 587, 4890, 1126, 3723, 6747, 558, 576, 4580, 4803, 10360, 8700, 11602, 16715, 504, 7285, 11020, 4854, 16572, 11868, 16698, 14804, 4841, 11876, 4886, 10689, 7579, 11881, 4589, 2]

// Module 16731 (VibegrationsNativeComposer)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import useToken from "useToken" /* 4580 */;
import SendMessageIcon from "SendMessageIcon" /* 4841 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4854 */;
import VibegrationsTypes from "VibegrationsTypes" /* 6747 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 8700 */;
import ImageCarousel from "ImageCarousel" /* 10360 */;
import PlusLargeIcon from "PlusLargeIcon" /* 10689 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 11602 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 11868 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 11876 */;
import VibegrationsConnectionStore2 from "VibegrationsConnectionStore" /* 12904 */;
import FiltersHorizontalIcon from "FiltersHorizontalIcon" /* 14804 */;
import VibegrationsModelSettingsSheet from "VibegrationsModelSettingsSheet" /* 16572 */;
import StopIcon from "StopIcon" /* 16698 */;
import vibegrationsAttachmentDrafts from "vibegrationsAttachmentDrafts" /* 16715 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import VibegrationsComposerDraftStore_mod from "VibegrationsComposerDraftStore" /* 16717 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const VibegrationsModelSettingsSheetDefault = VibegrationsModelSettingsSheet;
const VibegrationsConnectionStore = VibegrationsConnectionStore2;
let _require, arr, projectId;

let StyleSheet;
let closure_12;
let map1;
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
function trailingItemKey(key) {
  return key.key;
}
function tooLargeText(contentType) {
  let formatVibegrationsAttachmentLimit;
  let obj2;
  const intl = intl4.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { size: formatVibegrationsAttachmentLimit(obj2.vibegrationsAttachmentLimit(contentType)) };
  const cI7t94 = _modDef3723.cI7t94;
  formatVibegrationsAttachmentLimit = VibegrationsTypes.formatVibegrationsAttachmentLimit;
  VibegrationsTypes;
  obj2 = VibegrationsTypes;
  return formatToPlainString(cI7t94, obj);
}
function draftAccessibilityLabel(draft) {
  let formatToPlainStringResult;
  if ("uploading" === draft.status) {
    const intl3 = intl4.intl;
    const obj3 = { name: draft.name };
    formatToPlainStringResult = intl3.formatToPlainString(_modDef3723.sFX7H4, obj3);
  } else if (null != draft.errorText) {
    const intl2 = intl4.intl;
    const obj5 = { name: null, error: null };
    ({ name: obj2.name, errorText: obj2.error } = draft);
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3723.ZOkckv, obj5);
  } else {
    const intl = intl4.intl;
    const obj = { name: draft.name };
    formatToPlainStringResult = intl.formatToPlainString(intl4.t.MJHFt9, obj);
  }
  return formatToPlainStringResult;
}
({ ActivityIndicator: metroRequire, View: metroImportDefault, StyleSheet } = react_native);
let VibegrationsComposerDraftStore = VibegrationsComposerDraftStore_mod;
const uploadAttachmentBytes = VibegrationsConnectionStore2.uploadAttachmentBytes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let c14 = 120;
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
let closure_16 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((draft) => {
  let WarningIcon;
  let obj6;
  let obj8;
  const obj = react2;
  const cResult = obj.c(25);
  draft = draft.draft;
  const onRemove = draft.onRemove;
  const tmp4 = closure_16();
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
        const tmp29 = closure_12(ImageCarousel.ImageCarouselTile, obj4);
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
      const obj5 = { style: tmp4.draftOverlay, children: closure_12(metroRequire, obj6) };
      obj6 = { size: "small", color: token };
      tmp21 = closure_12(metroImportDefault, obj5);
    } else {
      tmp21 = null;
      if ("error" === draft.status) {
        const obj7 = { style: tmp4.draftOverlay, children: closure_12(WarningIcon, obj8) };
        obj8 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
        WarningIcon = tmp(4803).WarningIcon;
        tmp21 = closure_12(metroImportDefault, obj7);
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
  const tmp = closure_16();
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
    const obj5 = { style: tmp.draftOverlay, children: closure_12(metroRequire, obj6) };
    obj6 = { size: "small", color: token };
    tmp7Result = tmp7(metroImportDefault, obj5);
  } else {
    tmp7Result = null;
    if ("error" === draft.status) {
      const obj7 = { style: tmp.draftOverlay, children: closure_12(WarningIcon, obj13) };
      obj13 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
      WarningIcon = tmp2(4803).WarningIcon;
      tmp7Result = tmp7(metroImportDefault, obj7);
    }
  }
  return closure_12(ImageCarouselTile, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let closure_13;
  let closure_9;
  let items3;
  let obj9;
  let onPress;
  let onPress2;
  let onSend;
  let running;
  let stopped;
  let str;
  let tmp15;
  let tmp16;
  let tmp4;
  let tmp62;
  let tmp8;
  let tmp9;
  let tmp = projectId;
  let tmp2 = onSend;
  let obj = projectId(onSend[14]);
  const cResult = obj.c(142);
  projectId = projectId.projectId;
  const canSend = projectId.canSend;
  ({ running, stopped, onSend } = projectId);
  const onInterrupt = projectId.onInterrupt;
  const onDraftHasTextChange = projectId.onDraftHasTextChange;
  if (cResult[0] !== projectId) {
    const fn = function s() {
      return VibegrationsComposerDraftStore.getDraft(projectId);
    };
    let num = 0;
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
    class B {
      constructor(draft) {
        const obj = VibegrationsActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_6(draft);
      }
    }
    cResult[2] = projectId;
    cResult[3] = B;
    tmp8 = B;
  } else {
    class B {
      constructor(draft) {
        const obj = VibegrationsActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_6(draft);
      }
    }
  }
  B = tmp8;
  if (cResult[4] !== str) {
    class B {
      constructor(draft) {
        const obj = VibegrationsActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_6(draft);
      }
    }
    cResult[4] = str;
    cResult[5] = tmp10;
    tmp9 = tmp10;
  } else {
    class B {
      constructor(draft) {
        const obj = VibegrationsActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_6(draft);
      }
    }
  }
  const tmp11 = "" !== tmp9;
  const useReducedMotion = tmp11;
  if (cResult[6] === tmp11) {
    let tmp23;
    let tmp22;
    class B {
      constructor(draft) {
        const obj = VibegrationsActionCreators;
        obj.setComposerDraft(projectId, draft);
        closure_6(draft);
      }
    }
    const effect = obj2.useEffect(G, items3);
    [tmp15, tmp16] = tmp5(obj2.useState(null), 2);
    VibegrationsComposerDraftStore = tmp16;
    const tmp5Result = tmp5(obj2.useState(null), 2);
    const ref = obj2.useRef(null);
    const tmp5Result4 = tmp5(obj2.useState(projectId), 2);
    if (tmp5Result4[0] !== projectId) {
      class B {
        constructor(draft) {
          const obj = VibegrationsActionCreators;
          obj.setComposerDraft(projectId, draft);
          closure_6(draft);
        }
      }
      const tmp19 = VibegrationsComposerDraftStore;
      const tmp7Result = tmp7(VibegrationsComposerDraftStore.getDraft(projectId));
      tmp16(null);
    }
    if (cResult[10] !== projectId) {
      class F {
        constructor() {
          const obj = ChatInputNativeCommandsDefault;
          obj.setText(ref.current, VibegrationsComposerDraftStore.getDraft(projectId));
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
          obj.setText(ref.current, VibegrationsComposerDraftStore.getDraft(projectId));
        }
      }
      tmp23 = cResult[12];
    }
    const effect1 = obj2.useEffect(tmp22, tmp23);
    let tmpResult = tmp(tmp2[20]);
    let str2 = "chat";
    const vibegrationsAttachmentDraftList = tmpResult.useVibegrationsAttachmentDraftList(projectId, "chat");
    [r10092, uploadAttachmentBytes] = tmp5(obj2.useState(false), 2);
    tmp5(obj2.useState(false), 2);
    [r10097, closure_12] = tmp5(obj2.useState(null), 2);
    const _Symbol = Symbol;
    let str3 = "react.memo_cache_sentinel";
    tmp5(obj2.useState(null), 2);
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          const obj = ChatInputNativeCommandsDefault;
          obj.setText(ref.current, VibegrationsComposerDraftStore.getDraft(projectId));
        }
      }
      cResult[13] = tmp29;
    } else {
      class F {
        constructor() {
          const obj = ChatInputNativeCommandsDefault;
          obj.setText(ref.current, VibegrationsComposerDraftStore.getDraft(projectId));
        }
      }
    }
    if (cResult[14] === tmp8) {
      let tmp36;
      let tmp35;
      let tmp46;
      class F {
        constructor() {
          const obj = ChatInputNativeCommandsDefault;
          obj.setText(ref.current, VibegrationsComposerDraftStore.getDraft(projectId));
        }
      }
      const tmpResult6 = tmp(tmp2[15]);
      const token = tmpResult6.useToken(canSend(tmp2[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
      const tmpResult7 = tmp(tmp2[15]);
      const token1 = tmpResult7.useToken(canSend(tmp2[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
      const tmpResult8 = tmp(tmp2[15]);
      const token2 = tmpResult8.useToken(canSend(tmp2[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
      const _Symbol2 = Symbol;
      const tmpResult9 = tmp(tmp2[15]);
      const token3 = tmpResult9.useToken(canSend(tmp2[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            const obj = ChatInputNativeCommandsDefault;
            obj.setText(ref.current, VibegrationsComposerDraftStore.getDraft(projectId));
          }
        }
        const items1 = [useReducedMotion];
        function de() {
          return useReducedMotion.useReducedMotion;
        }
        cResult[17] = items1;
        cResult[18] = de;
        tmp36 = de;
        tmp35 = items1;
      } else {
        class F {
          constructor() {
            const obj = ChatInputNativeCommandsDefault;
            obj.setText(ref.current, VibegrationsComposerDraftStore.getDraft(projectId));
          }
        }
        tmp36 = cResult[18];
      }
      const tmpResult10 = tmp(tmp2[21]);
      const stateFromStores = tmpResult10.useStateFromStores(tmp35, tmp36);
      let _Math = Math;
      const bound = Math.max(0, (token1 - token) / 2);
      const _Math2 = Math;
      const _Math3 = Math;
      const bound1 = Math.min(Ce, Math.max(0, (token - 20) / 2));
      const _Math4 = Math;
      const _Math5 = Math;
      const tmp41 = Ie;
      if (tmp15 == null) {
        class F {
          constructor() {
            const obj = ChatInputNativeCommandsDefault;
            obj.setText(ref.current, VibegrationsComposerDraftStore.getDraft(projectId));
          }
        }
      }
      min(tmp41, max(token, tmp15));
      class G {
        constructor() {
          let tmpResult;
          if (onDraftHasTextChange != null) {
            tmpResult = tmp(useReducedMotion);
          }
          return tmpResult;
        }
      }
      if (cResult[19] !== projectId) {
        class Ie {
          constructor(arg0) {
            if (0 !== projectId.length) {
              tmp10 = closure_0;
              tmp11 = closure_2;
              VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE = closure_0(closure_2[12]).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE;
              obj3 = closure_0(closure_2[20]);
              str = "chat";
              tmp12 = projectId;
              diff = VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE - obj3.getVibegrationsAttachmentDrafts(projectId, "chat").length;
              if (projectId.length > diff) {
                tmp4 = closure_12;
                intl = tmp10(tmp11[10]).intl;
                tmp5 = closure_1;
                formatToPlainString = intl.formatToPlainString;
                obj = { count: null };
                DlX57a = closure_1(tmp11[11]).DlX57a;
                obj.count = tmp10(tmp11[12]).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE;
                tmp6 = closure_12(formatToPlainString(DlX57a, obj));
                tmp7 = globalThis;
                _Math = Math;
                substr = projectId.slice(0, Math.max(0, diff));
                arr = substr;
                if (0 === substr.length) {
                  return;
                }
              } else {
                tmp = closure_12;
                tmp2 = null;
                tmp3 = closure_12(null);
                arr = projectId;
              }
              mapped = arr.map((name) => {
                let cI7t94;
                let formatToPlainString;
                let formatVibegrationsAttachmentLimit;
                let obj3;
                let obj4;
                let obj6;
                let tmp7Result2;
                let closure_0 = name;
                let obj = { name: name.name, contentType: name.contentType, previewUrl: name.uri };
                if (null != name.size) {
                  const obj8 = projectId(onSend[12]);
                  if (!obj8.isVibegrationsAttachmentWithinLimit(name.size, name.contentType)) {
                    const obj2 = { draft: obj3 };
                    obj3 = { status: "error", errorText: formatToPlainString(cI7t94, obj4) };
                    let tmp = obj3;
                    const merged = Object.assign(obj);
                    const contentType = name.contentType;
                    const intl = tmp7(tmp8[10]).intl;
                    formatToPlainString = intl.formatToPlainString;
                    obj4 = { size: formatVibegrationsAttachmentLimit(tmp7Result2.vibegrationsAttachmentLimit(contentType)) };
                    cI7t94 = canSend(tmp8[11]).cI7t94;
                    formatVibegrationsAttachmentLimit = tmp7(tmp8[12]).formatVibegrationsAttachmentLimit;
                    projectId(onSend[12]);
                    tmp7Result2 = projectId(onSend[12]);
                    return obj2;
                  }
                }
                closure_0 = onInterrupt(function*() {
                  let c2;
                  let c3;
                  let closure_1;
                  let obj;
                  let tmp;
                  const _fetch = fetch;
                  yield fetch(tmp.uri);
                  tmp = yield arg1.blob();
                  const obj9 = tmp(onSend[12]);
                  if (obj9.isVibegrationsAttachmentWithinLimit(tmp.size, tmp.contentType)) {
                    obj = closure_3_11(tmp, tmp, tmp.name, tmp.contentType);
                  } else {
                    obj = { errorText: onPress2(tmp.contentType) };
                  }
                  return obj;
                });
                const obj5 = {
                  draft: obj6,
                  upload() {
                    return closure_0(...arguments);
                  }
                };
                obj6 = { status: "uploading" };
                const merged1 = Object.assign(obj);
                return obj5;
              });
              tmp10Result = tmp10(tmp11[20]);
              result = tmp10Result.addVibegrationsAttachmentDrafts(tmp12, "chat", mapped);
            }
            return;
          }
        }
        cResult[19] = projectId;
        cResult[20] = Ie;
      } else {
        class Ie {
          constructor(arg0) {
            if (0 !== projectId.length) {
              tmp10 = closure_0;
              tmp11 = closure_2;
              VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE = closure_0(closure_2[12]).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE;
              obj3 = closure_0(closure_2[20]);
              str = "chat";
              tmp12 = projectId;
              diff = VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE - obj3.getVibegrationsAttachmentDrafts(projectId, "chat").length;
              if (projectId.length > diff) {
                tmp4 = closure_12;
                intl = tmp10(tmp11[10]).intl;
                tmp5 = closure_1;
                formatToPlainString = intl.formatToPlainString;
                obj = { count: null };
                DlX57a = closure_1(tmp11[11]).DlX57a;
                obj.count = tmp10(tmp11[12]).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE;
                tmp6 = closure_12(formatToPlainString(DlX57a, obj));
                tmp7 = globalThis;
                _Math = Math;
                substr = projectId.slice(0, Math.max(0, diff));
                arr = substr;
                if (0 === substr.length) {
                  return;
                }
              } else {
                tmp = closure_12;
                tmp2 = null;
                tmp3 = closure_12(null);
                arr = projectId;
              }
              mapped = arr.map((name) => {
                let cI7t94;
                let formatToPlainString;
                let formatVibegrationsAttachmentLimit;
                let obj3;
                let obj4;
                let obj6;
                let tmp7Result2;
                let closure_0 = name;
                let obj = { name: name.name, contentType: name.contentType, previewUrl: name.uri };
                if (null != name.size) {
                  const obj8 = projectId(onSend[12]);
                  if (!obj8.isVibegrationsAttachmentWithinLimit(name.size, name.contentType)) {
                    const obj2 = { draft: obj3 };
                    obj3 = { status: "error", errorText: formatToPlainString(cI7t94, obj4) };
                    let tmp = obj3;
                    const merged = Object.assign(obj);
                    const contentType = name.contentType;
                    const intl = tmp7(tmp8[10]).intl;
                    formatToPlainString = intl.formatToPlainString;
                    obj4 = { size: formatVibegrationsAttachmentLimit(tmp7Result2.vibegrationsAttachmentLimit(contentType)) };
                    cI7t94 = canSend(tmp8[11]).cI7t94;
                    formatVibegrationsAttachmentLimit = tmp7(tmp8[12]).formatVibegrationsAttachmentLimit;
                    projectId(onSend[12]);
                    tmp7Result2 = projectId(onSend[12]);
                    return obj2;
                  }
                }
                closure_0 = onInterrupt(function*() {
                  let c2;
                  let c3;
                  let closure_1;
                  let obj;
                  let tmp;
                  const _fetch = fetch;
                  yield fetch(tmp.uri);
                  tmp = yield arg1.blob();
                  const obj9 = tmp(onSend[12]);
                  if (obj9.isVibegrationsAttachmentWithinLimit(tmp.size, tmp.contentType)) {
                    obj = closure_3_11(tmp, tmp, tmp.name, tmp.contentType);
                  } else {
                    obj = { errorText: onPress2(tmp.contentType) };
                  }
                  return obj;
                });
                const obj5 = {
                  draft: obj6,
                  upload() {
                    return closure_0(...arguments);
                  }
                };
                obj6 = { status: "uploading" };
                const merged1 = Object.assign(obj);
                return obj5;
              });
              tmp10Result = tmp10(tmp11[20]);
              result = tmp10Result.addVibegrationsAttachmentDrafts(tmp12, "chat", mapped);
            }
            return;
          }
        }
      }
      Ie = tmp45;
      if (cResult[21] !== projectId) {
        class Ce {
          constructor(arg0) {
            const obj = vibegrationsAttachmentDrafts;
            return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
          }
        }
        cResult[21] = projectId;
        cResult[22] = Ce;
        tmp46 = Ce;
      } else {
        class Ce {
          constructor(arg0) {
            const obj = vibegrationsAttachmentDrafts;
            return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
          }
        }
      }
      Ce = tmp46;
      if (cResult[23] !== tmp45) {
        class Ce {
          constructor(arg0) {
            const obj = vibegrationsAttachmentDrafts;
            return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
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
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: "IconComponent" };
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
                  const obj4 = { mediaType: "any", selectionLimit: tmp(onSend[12]).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE, skipProcessing: true };
                  const launchImageLibraryAsync = canSend(onSend[22]).launchImageLibraryAsync;
                  const tmp17 = canSend(onSend[22]);
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
                  Ie(assets.map((uri) => {
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
                return { value: "IconComponent", done: "IconComponent" };
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
        cResult[23] = tmp45;
        cResult[24] = fn2;
      } else {
        class Ce {
          constructor(arg0) {
            const obj = vibegrationsAttachmentDrafts;
            return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
          }
        }
      }
      if (cResult[25] === tmp45) {
        let tmp50;
        let tmp54;
        class Ce {
          constructor(arg0) {
            const obj = vibegrationsAttachmentDrafts;
            return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
          }
        }
        if (cResult[28] !== tmp45) {
          class Ce {
            constructor(arg0) {
              const obj = vibegrationsAttachmentDrafts;
              return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
            }
          }
          _require = onInterrupt(function*(arg0, value) {
            let obj2;
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
                return { value: "IconComponent", done: "IconComponent" };
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
                    obj2 = tmp(onSend[23]);
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
                    Ie(tmp.map((uri) => {
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
                  return { value: "IconComponent", done: "IconComponent" };
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
          class Ce {
            constructor(arg0) {
              const obj = vibegrationsAttachmentDrafts;
              return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
          class Ce {
            constructor(arg0) {
              const obj = vibegrationsAttachmentDrafts;
              return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
            }
          }
          const stringResult = obj9.string(canSend(tmp2[11]).xE6M2k);
          cResult[30] = stringResult;
          tmp50 = stringResult;
        } else {
          class Ce {
            constructor(arg0) {
              const obj = vibegrationsAttachmentDrafts;
              return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
            }
          }
        }
        if (cResult[31] !== tmp47) {
          class Ce {
            constructor(arg0) {
              const obj = vibegrationsAttachmentDrafts;
              return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
            }
          }
          tmp53[0] = tmp50;
          tmp53[1] = tmp47;
          cResult[31] = tmp47;
          cResult[32] = tmp53;
        } else {
          class Ce {
            constructor(arg0) {
              const obj = vibegrationsAttachmentDrafts;
              return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
            }
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
          class Ce {
            constructor(arg0) {
              const obj = vibegrationsAttachmentDrafts;
              return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
            }
          }
          const stringResult1 = obj10.string(canSend(tmp2[11]).DN7KeU);
          cResult[33] = stringResult1;
          tmp54 = stringResult1;
        } else {
          class Ce {
            constructor(arg0) {
              const obj = vibegrationsAttachmentDrafts;
              return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
            }
          }
        }
        if (cResult[34] !== tmp49) {
          class Ce {
            constructor(arg0) {
              const obj = vibegrationsAttachmentDrafts;
              return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
            }
          }
          tmp57[0] = tmp54;
          tmp57[1] = tmp49;
          cResult[34] = tmp49;
          cResult[35] = tmp57;
        } else {
          class Ce {
            constructor(arg0) {
              const obj = vibegrationsAttachmentDrafts;
              return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
            }
          }
        }
        if (cResult[36] === tmp52) {
          let tmp59;
          class Ce {
            constructor(arg0) {
              const obj = vibegrationsAttachmentDrafts;
              return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
            }
          }
          if (cResult[39] !== vibegrationsAttachmentDraftList) {
            let tmp60;
            class Ce {
              constructor(arg0) {
                const obj = vibegrationsAttachmentDrafts;
                return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
              }
            }
            if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
              class Ge {
                constructor(status) {
                  return "ready" === status.status;
                }
              }
              cResult[41] = Ge;
              tmp60 = Ge;
            } else {
              class Ge {
                constructor(status) {
                  return "ready" === status.status;
                }
              }
            }
            const everyResult = vibegrationsAttachmentDraftList.every(tmp60);
            cResult[39] = vibegrationsAttachmentDraftList;
            cResult[40] = everyResult;
            tmp59 = everyResult;
          } else {
            class Ge {
              constructor(status) {
                return "ready" === status.status;
              }
            }
          }
          if (cResult[42] === vibegrationsAttachmentDraftList.length) {
            class Ge {
              constructor(status) {
                return "ready" === status.status;
              }
            }
            closure_16 = tmp64;
            if (cResult[45] === onSend) {
              class Ge {
                constructor(status) {
                  return "ready" === status.status;
                }
              }
            }
            function we() {
              const tmp = closure_16;
              if (tmp) {
                const obj = vibegrationsAttachmentDrafts;
                const result = obj.takeVibegrationsAttachmentRefs(projectId, "chat");
                let tmp7;
                const tmp5 = onSend;
                if (result.length > 0) {
                  tmp7 = result;
                }
                tmp5("chat", tmp7);
                B("");
                const obj2 = ChatInputNativeCommandsDefault;
                obj2.setText(ref.current, "");
                const tmp16 = closure_12(null);
                tmp16(null);
              }
            }
            cResult[45] = onSend;
            cResult[46] = projectId;
            cResult[47] = canSend && tmp62 && tmp59;
            cResult[48] = tmp8;
            cResult[49] = str;
            cResult[50] = we;
          }
          const tmp63 = "" !== str.trim() || vibegrationsAttachmentDraftList.length > 0;
          cResult[42] = vibegrationsAttachmentDraftList.length;
          cResult[43] = str;
          cResult[44] = tmp63;
          tmp62 = tmp63;
        }
        const items2 = [tmp52, tmp56];
        cResult[36] = tmp52;
        cResult[37] = tmp56;
        cResult[38] = items2;
      }
      function xe(nativeEvent) {
        let str2;
        let type;
        let url;
        ({ url, type } = nativeEvent.nativeEvent);
        const tmp = canSend;
        if (tmp) {
          const obj = { uri: url, name: str2, contentType: type, size: null };
          const parts = url.split("/");
          str2 = parts.at(-1);
          const tmp2 = Ie;
          if (str2 == null) {
            str2 = "attachment";
          }
          if (type == null) {
            type = "application/octet-stream";
          }
          const items = [obj];
          tmp2(items);
        }
      }
      cResult[25] = tmp45;
      cResult[26] = canSend;
      cResult[27] = xe;
    }
    function ce(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      if (nativeEvent.text !== str) {
        B(nativeEvent.text);
      }
    }
    cResult[14] = tmp8;
    cResult[15] = str;
    cResult[16] = ce;
    class G {
      constructor() {
        let tmpResult;
        if (onDraftHasTextChange != null) {
          tmpResult = tmp(useReducedMotion);
        }
        return tmpResult;
      }
    }
  }
  class G {
    constructor() {
      let tmpResult;
      if (onDraftHasTextChange != null) {
        tmpResult = tmp(useReducedMotion);
      }
      return tmpResult;
    }
  }
  items3 = [tmp11, onDraftHasTextChange];
  cResult[6] = tmp11;
  cResult[7] = onDraftHasTextChange;
  cResult[8] = G;
  cResult[9] = items3;
}) : ((projectId) => {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let boxFocused;
  let c12;
  let c13;
  let callback9Result;
  let closure_9;
  let intl2;
  let items18;
  let items20;
  let items21;
  let items22;
  let nm4w9P;
  let num;
  let obj12;
  let obj14;
  let obj16;
  let string;
  let tmp20;
  let tmp23Result;
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
  const onDraftHasTextChange = projectId.onDraftHasTextChange;
  c12 = undefined;
  c13 = undefined;
  let closure_14;
  let callback3;
  let onRemove;
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
  let tmp2 = onInterrupt(onDraftHasTextChange.useState(() => VibegrationsComposerDraftStore.getDraft(projectId)), 2);
  let str = tmp2[0];
  let tmp3 = tmp2[1];
  let closure_7 = tmp3;
  let items = [projectId];
  const callback = onDraftHasTextChange.useCallback((draft) => {
    const obj = VibegrationsActionCreators;
    obj.setComposerDraft(projectId, draft);
    closure_7(draft);
  }, items);
  let tmp5 = "" !== str.trim();
  VibegrationsComposerDraftStore = tmp5;
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
  let c10 = tmp8;
  const ref = onDraftHasTextChange.useRef(null);
  const tmp10 = onInterrupt(onDraftHasTextChange.useState(projectId), 2);
  if (tmp10[0] !== projectId) {
    const tmp11 = tmp10[1](projectId);
    let tmp12 = VibegrationsComposerDraftStore;
    tmp3(VibegrationsComposerDraftStore.getDraft(projectId));
    tmp8(null);
  }
  const items2 = [projectId];
  const effect1 = obj.useEffect(() => {
    const obj = ChatInputNativeCommandsDefault;
    obj.setText(ref.current, VibegrationsComposerDraftStore.getDraft(projectId));
  }, items2);
  let tmp17 = running;
  let obj2 = projectId(running[20]);
  const vibegrationsAttachmentDraftList = obj2.useVibegrationsAttachmentDraftList(projectId, "chat");
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
  let obj3 = projectId(running[15]);
  const token = obj3.useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj4 = projectId(running[15]);
  const token1 = obj4.useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj5 = projectId(running[15]);
  const token2 = obj5.useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let obj6 = projectId(running[15]);
  const token3 = obj6.useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const obj7 = projectId(running[21]);
  const items4 = [callback];
  const stateFromStores = obj7.useStateFromStores(items4, () => callback.useReducedMotion);
  const bound = Math.max(0, (token1 - token) / 2);
  let tmp31 = closure_14;
  const bound1 = Math.min(callback3, Math.max(0, (token - 20) / 2));
  let _Math = Math;
  const _Math2 = Math;
  if (num == null) {
    num = 0;
  }
  const minResult = min(tmp31, max(token, num));
  const tmp33 = onRemove();
  closure_14 = tmp33;
  const items5 = [projectId];
  callback3 = obj.useCallback((arr) => {
    if (0 !== arr.length) {
      const VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE = VibegrationsTypes.VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE;
      let obj3 = vibegrationsAttachmentDrafts;
      str = "chat";
      const diff = VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE - obj3.getVibegrationsAttachmentDrafts(projectId, "chat").length;
      const tmp12 = projectId;
      if (arr.length > diff) {
        let tmp4 = _undefined3;
        let intl = tmp10(1126).intl;
        let formatToPlainString = intl.formatToPlainString;
        let obj = { count: tmp10(6747).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE };
        const DlX57a = _modDef3723.DlX57a;
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
            const obj9 = name(closure_2_2[12]);
            if (obj9.isVibegrationsAttachmentWithinLimit(size.size, closure_129_0.contentType)) {
              value = closure_2_11(size, size, closure_129_0.name, closure_129_0.contentType);
            } else {
              value = { errorText: closure_2_18(closure_129_0.contentType) };
            }
            return value;
          });
          return obj(...arguments);
        };
        value = { name: name.name, contentType: name.contentType, previewUrl: name.uri };
        if (null != name.size) {
          const obj8 = projectId(running[12]);
          if (!obj8.isVibegrationsAttachmentWithinLimit(name.size, name.contentType)) {
            const obj2 = { draft: obj3 };
            obj3 = { status: "error", errorText: formatToPlainString(cI7t94, obj4) };
            const merged = Object.assign(value);
            const contentType = name.contentType;
            const intl = tmp7(tmp8[10]).intl;
            formatToPlainString = intl.formatToPlainString;
            obj4 = { size: formatVibegrationsAttachmentLimit(tmp7Result2.vibegrationsAttachmentLimit(contentType)) };
            cI7t94 = canSend(tmp8[11]).cI7t94;
            formatVibegrationsAttachmentLimit = tmp7(tmp8[12]).formatVibegrationsAttachmentLimit;
            projectId(running[12]);
            tmp7Result2 = projectId(running[12]);
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
  }, items5);
  const items6 = [projectId];
  onRemove = obj.useCallback((arg0) => {
    const obj = vibegrationsAttachmentDrafts;
    return obj.removeVibegrationsAttachmentDraft(projectId, "chat", arg0);
  }, items6);
  const items7 = [callback3];
  callback4 = obj.useCallback(onSend(function*(arg0, value) {
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
        return { value: "IconComponent", done: "IconComponent" };
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
            const obj4 = { mediaType: "any", selectionLimit: tmp(running[12]).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE, skipProcessing: true };
            const launchImageLibraryAsync = tmp4(running[22]).launchImageLibraryAsync;
            const tmp17 = tmp4(running[22]);
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
            closure_129_15(assets.map((uri) => {
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
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp19) {
        c3 = 3;
        throw tmp19;
      }
    }
  }), items7);
  const items8 = [callback3, canSend];
  const callback5 = obj.useCallback((nativeEvent) => {
    let str2;
    let type;
    let url;
    ({ url, type } = nativeEvent.nativeEvent);
    const tmp = canSend;
    if (tmp) {
      const obj = { uri: url, name: str2, contentType: type, size: null };
      const parts = url.split("/");
      str2 = parts.at(-1);
      const tmp2 = callback3;
      if (str2 == null) {
        str2 = "attachment";
      }
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
        return { value: "IconComponent", done: "IconComponent" };
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
            const obj2 = tmp(running[23]);
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
          return { value: "IconComponent", done: "IconComponent" };
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
    const obj = { label: intl.string(_modDef3723.xE6M2k), action: callback4 };
    intl = intl4.intl;
    const items = [obj, ];
    const obj2 = { label: intl2.string(_modDef3723.DN7KeU), action: callback6 };
    intl2 = intl4.intl;
    items[1] = obj2;
    return items;
  }, items10);
  const everyResult = vibegrationsAttachmentDraftList.every((status) => "ready" === status.status);
  const tmp40 = "" !== str.trim() || vibegrationsAttachmentDraftList.length > 0;
  closure_19 = tmp40;
  sendable = tmp41;
  const items11 = [onSend, projectId, canSend && tmp40 && everyResult, callback, str];
  callback7 = obj.useCallback(() => {
    const tmp = sendable;
    if (tmp) {
      const obj = vibegrationsAttachmentDrafts;
      const result = obj.takeVibegrationsAttachmentRefs(projectId, "chat");
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
  const items12 = [c10];
  const items13 = [projectId];
  const tmp16Result = projectId(tmp17[21]);
  stateFromStores1 = tmp16Result.useStateFromStores(items12, () => {
    const modelSettings = VibegrationsConnectionStore.getModelSettings(projectId);
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
    const obj = { content: _undefined2(VibegrationsModelSettingsSheetDefault, obj2), key: VibegrationsModelSettingsSheet.VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY };
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
      const obj2 = { style: closure_14.trailingButton, IconComponent: StopIcon.StopIcon, onPress: onInterrupt, disabled: null == onInterrupt, accessibilityLabel: intl2.string(_modDef3723.KdgI4k) };
      const tmp18 = ChatInputActionButtonDefault;
      intl2 = intl4.intl;
      tmp14 = _undefined2(tmp18, obj2);
    } else if ("models" === key.key) {
      const obj = { style: closure_14.trailingButton, IconComponent: FiltersHorizontalIcon.FiltersHorizontalIcon, onPress: callback8, disabled: !canSend, accessibilityLabel: intl.string(_modDef3723["2NWMqY"]) };
      const tmp4 = ChatInputActionButtonDefault;
      intl = intl4.intl;
      tmp14 = _undefined2(tmp4, obj);
    } else {
      ({ trailingButton: obj3.style, sendButtonActive: obj3.activeStyle, sendIconActive: obj3.activeIconStyle } = closure_14);
      const obj5 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: SendMessageIcon.SendMessageIcon, accessibilityLabel: intl3.string(intl4.t.TXNS7S), onPress: callback7, disabled: !key.sendable };
      const tmp31 = ChatInputActionButtonDefault;
      intl3 = intl4.intl;
      tmp14 = _undefined2(tmp31, obj5);
    }
    return tmp14;
  }, items16);
  const items17 = [callback9];
  const callback10 = obj.useCallback((arg0, arg1, state, cleanup) => {
    const obj = { state, cleanup, withBounce: true, children: callback9(arg1) };
    const tmp = ChatInputActionButtonTransitionItemDefault;
    return _undefined2(tmp, obj, arg0);
  }, items17);
  const callback11 = obj.useCallback(() => _undefined2(true), []);
  let obj8 = { style: tmp33.container, children: items18 };
  let tmp52 = null;
  const callback12 = obj.useCallback(() => _undefined2(false), []);
  if (null != tmp20) {
    let obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp20 };
    tmp52 = c12(tmp16(tmp17[31]).Text, obj9);
  }
  items18 = [
    tmp52,
    vibegrationsAttachmentDraftList.map((errorText) => {
      let intl;
      let obj3;
      let tmp = null;
      if (null != errorText.errorText) {
        const obj = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: intl.formatToPlainString(canSend(running[11]).ZOkckv, obj3) };
        const Text = projectId(running[31]).Text;
        intl = projectId(running[10]).intl;
        obj3 = { name: null, error: null };
        ({ name: obj2.name, errorText: obj2.error } = errorText);
        tmp = _undefined2(Text, obj, errorText.localId);
      }
      return tmp;
    }),
  ,

  ];
  let tmp54 = null;
  if (vibegrationsAttachmentDraftList.length > 0) {
    const obj10 = {
      visible: true,
      style: tmp33.draftCarousel,
      children: vibegrationsAttachmentDraftList.map((draft) => {
          const obj = { draft, onRemove };
          return _undefined2(closure_20, obj, draft.localId);
        })
    };
    const ImageCarouselRow = tmp16(tmp17[17]).ImageCarouselRow;
    tmp54 = c12(ImageCarouselRow, obj10);
  }
  items18[2] = tmp54;
  const items19 = [tmp33.box, ];
  if (boxFocused) {
    boxFocused = tmp33.boxFocused;
  }
  items19[1] = boxFocused;
  const obj11 = { style: items19, children: c13(closure_7, obj12) };
  obj12 = { style: tmp33.boxContents, children: items20 };
  const obj13 = { style: { paddingBottom: bound }, children: c12(projectId(tmp17[33]).ContextMenu, obj14) };
  obj14 = {
    items: memo,
    align: "above",
    children(arg0) {
      let accessibilityActions;
      let intl;
      let onAccessibilityAction;
      let onPress;
      ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
      const obj = { ref, IconComponent: PlusLargeIcon.PlusLargeIcon, onPress, disabled: !canSend, accessibilityLabel: intl.string(_modDef3723.gUn10I), accessibilityActions, onAccessibilityAction };
      const tmp = ChatInputActionButtonDefault;
      intl = intl4.intl;
      return _undefined2(tmp, obj);
    }
  };
  items20 = [c12(closure_7, obj13), , ];
  const obj15 = { style: items21, children: c12(tmp23Result, obj16) };
  items21 = [tmp33.input, { marginBottom: bound, height: minResult }];
  obj16 = { ref, editable: canSend, shouldShowCursor: true, maxHeight: tmp31, verticalInset: bound1, placeholder: string(nm4w9P), accessibilityLabel: intl2.string(canSend(tmp17[11]).OPr66w), onBeginFocus: callback11, onEndBlur: callback12, onChangeContentSize: callback1, onSelectionOrTextChange: callback2, onPasteImage: callback5 };
  tmp23Result = canSend(tmp17[34]);
  let intl = tmp16(tmp17[10]).intl;
  string = intl.string;
  const tmp23Result2 = canSend(tmp17[11]);
  if (flag) {
    nm4w9P = tmp23Result2.JeM47J;
  } else if (canSend) {
    nm4w9P = running ? tmp23Result2["67PpcP"] : tmp23Result2.ahRdoJ;
  } else {
    nm4w9P = tmp23Result2.nm4w9P;
  }
  intl2 = tmp16(tmp17[10]).intl;
  items20[1] = c12(closure_7, obj15);
  const obj17 = { style: items22, children: callback9Result };
  items22 = [tmp33.trailingSlot, { width: token2 + 2 * token3, height: token1 }];
  if (stateFromStores) {
    callback9Result = callback9(memo1[0]);
  } else {
    const obj18 = { items: memo1, renderItem: callback10, getItemKey: callback4 };
    callback9Result = tmp56(tmp16(tmp17[35]).TransitionGroup, obj18);
  }
  items20[2] = c12(closure_7, obj17);
  items18[3] = c12(closure_7, obj11);
  return c13(closure_7, obj8);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeComposer.tsx");

export default tmp6;
