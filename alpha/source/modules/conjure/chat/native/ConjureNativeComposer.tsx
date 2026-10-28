// Module ID: 12551
// Function ID: 12552
// Name: ConjureNativeComposer
// Dependencies: [5, 32, 19, 17, 5005, 10747, 12342, 21, 587, 5004, 1125, 3863, 558, 576, 5288, 7989, 10448, 12552, 10854, 12343, 12554, 12553, 12344, 12556, 12234, 12391, 12206, 12236, 504, 12517, 12306, 12559, 10682, 12307, 12320, 12561, 5246, 12255, 12563, 12422, 12564, 5716, 12566, 12569, 5270, 9795, 10880, 12570, 5070, 2]
// Exports: default

// Module 12551 (ConjureNativeComposer)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5246 */;
import useToken from "useToken" /* 5288 */;
import SendMessageIcon from "SendMessageIcon" /* 5716 */;
import ImageCarousel from "ImageCarousel" /* 10448 */;
import MusicIcon from "MusicIcon" /* 10682 */;
import PlusLargeIcon from "PlusLargeIcon" /* 10880 */;
import ConjureAttachmentTypes from "ConjureAttachmentTypes" /* 12206 */;
import conjureStoredAttachments2 from "conjureStoredAttachments" /* 12234 */;
import ConjureModelSettingsSheet from "ConjureModelSettingsSheet" /* 12255 */;
import FileUpIcon from "FileUpIcon" /* 12320 */;
import ConjureChatActionCreators from "ConjureChatActionCreators" /* 12343 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 12344 */;
import conjureMentions from "conjureMentions" /* 12391 */;
import StopIcon from "StopIcon" /* 12422 */;
import conjurePickedFiles from "conjurePickedFiles" /* 12517 */;
import conjureComposerPills from "conjureComposerPills" /* 12552 */;
import ChatInputParser from "ChatInputParser" /* 12553 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 12554 */;
import ImagesIcon from "ImagesIcon" /* 12559 */;
import ChatArrowRightIcon from "ChatArrowRightIcon" /* 12561 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 12563 */;
import FiltersHorizontalIcon from "FiltersHorizontalIcon" /* 12564 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 12566 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5005 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 10747 */;
import ConjureComposerDraftStore from "ConjureComposerDraftStore" /* 12342 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ConjureModelSettingsSheetDefault = ConjureModelSettingsSheet;
let arr, c1, closure_1, closure_2, getItemKey, map, nativeEvent, set, types;

let StyleSheet;
let closure_12;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj2;
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
    const intl3 = intl5.intl;
    const obj3 = { name: draft.name };
    formatToPlainStringResult = intl3.formatToPlainString(_modDef3863.MWTYwv, obj3);
  } else if (null != draft.errorText) {
    const intl2 = intl5.intl;
    const obj5 = { name: null, error: null };
    ({ name: obj2.name, errorText: obj2.error } = draft);
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3863.U2WbGx, obj5);
  } else {
    const intl = intl5.intl;
    const obj = { name: draft.name };
    formatToPlainStringResult = intl.formatToPlainString(intl5.t.MJHFt9, obj);
  }
  return formatToPlainStringResult;
}
({ ActivityIndicator: metroRequire, View: metroImportDefault, StyleSheet } = react_native);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { pill: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, color: nativeDefault.colors.MENTION_FOREGROUND, borderRadius: nativeDefault.radii.xs };
let closure_14 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { container: obj4, box: obj5, boxFocused: obj6, boxContents: obj7, input: obj8, draftCarousel: { marginBottom: 0 }, draftOverlay: obj9, trailingButton: size, trailingSlot: { alignItems: "center", justifyContent: "center" }, sendButtonActive: obj10, sendIconActive: obj11 };
obj4 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj5 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, overflow: "hidden" };
obj6 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
obj7 = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
obj8 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_4 };
obj9 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX };
let merged = Object.assign(StyleSheet.absoluteFillObject);
size = { width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH, height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT };
obj10 = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
obj11 = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
let closure_15 = createStyles(obj3);
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
      const intl = tmp(1125).intl;
      const obj3 = { name: draft.name };
      const formatToPlainStringResult = intl.formatToPlainString(intl5.t.FxKgb3, obj3);
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
        WarningIcon = tmp(7989).WarningIcon;
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
  const obj3 = { itemKey: String(draft.localId), uri: str, fileName: null, isImage: contentType.startsWith("image/"), isVideo: contentType2.startsWith("video/"), accessibilityLabel: draftAccessibilityLabel(draft), removeAccessibilityLabel: intl.formatToPlainString(intl5.t.FxKgb3, obj4), onRemove: callback, children: tmp7Result };
  const ImageCarouselTile = ImageCarousel.ImageCarouselTile;
  str = draft.previewUrl;
  if (str == null) {
    str = "";
  }
  ({ name: obj2.fileName, contentType } = draft);
  contentType2 = draft.contentType;
  intl = tmp2(1125).intl;
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
      WarningIcon = tmp2(7989).WarningIcon;
      tmp7Result = tmp7(metroImportDefault, obj7);
    }
  }
  return unpackModuleId(ImageCarouselTile, obj3);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeComposer.tsx");

export default function ConjureNativeComposer(projectId) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let boxFocused;
  let c18;
  let c19;
  let callback12Result;
  let canSend;
  let inputLocked;
  let intl2;
  let items26;
  let items28;
  let items29;
  let items30;
  let num;
  let obj11;
  let obj7;
  let obj9;
  let string;
  let tmp14;
  let tmp23;
  let tmp28Result;
  let zZ9NgM;
  projectId = projectId.projectId;
  ({ canSend, inputLocked } = projectId);
  if (inputLocked === undefined) {
    inputLocked = false;
  }
  let flag = projectId.aiPaused;
  if (flag === undefined) {
    flag = false;
  }
  let running = projectId.running;
  let onSend = projectId.onSend;
  const onInterrupt = projectId.onInterrupt;
  const onDraftHasTextChange = projectId.onDraftHasTextChange;
  let flag2 = projectId.hidden;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const onSendToOtherProjects = projectId.onSendToOtherProjects;
  canSend = undefined;
  let str;
  let closure_9;
  let closure_10;
  let callback;
  let pill;
  let callback1;
  closure_15 = undefined;
  getItemKey = undefined;
  let ref;
  c18 = undefined;
  c19 = undefined;
  let first1;
  let closure_21;
  let closure_22;
  let conjureStoredAttachments;
  let memo;
  let start;
  let closure_26;
  let callback5;
  let onRemove;
  let callback6;
  let callback8;
  let callback9;
  let closure_32;
  let sendable;
  let callback10;
  let stateFromStores1;
  let callback11;
  let callback12;
  if (canSend) {
    canSend = !inputLocked;
  }
  if (canSend) {
    canSend = !flag;
  }
  let obj = flag2;
  let tmp = onDraftHasTextChange;
  const first = onDraftHasTextChange(flag2.useState(() => {
    const obj = conjureComposerPills;
    return obj.decodeConjurePills(ConjureComposerDraftStore.getDraft(projectId));
  }), 1)[0];
  const tmp3 = onDraftHasTextChange(flag2.useState(first.text), 2);
  str = tmp3[0];
  closure_9 = tmp3[1];
  let tmp4 = projectId;
  let tmp5 = onSend;
  let obj2 = projectId(onSend[18]);
  const conjureLinkPrefetch = obj2.useConjureLinkPrefetch(str);
  closure_10 = flag2.useRef(first.pills);
  flag2.useRef(str);
  let items = [str];
  const effect = flag2.useEffect(() => {
    ref.current = str;
  }, items);
  let items1 = [projectId];
  callback = flag2.useCallback((chat) => {
    const setComposerDraft = ConjureChatActionCreators.setComposerDraft;
    ConjureChatActionCreators;
    const obj = conjureComposerPills;
    setComposerDraft(projectId, obj.encodeConjurePills(chat, closure_10.current));
    closure_9(chat);
  }, items1);
  let tmp9 = callback1();
  pill = tmp9;
  let items2 = [tmp9];
  callback1 = flag2.useCallback((arr, arg1) => {
    const updateTextBlocks = ChatInputNativeCommandsDefault.updateTextBlocks;
    const current = ref.current;
    ChatInputNativeCommandsDefault;
    const conjurePillNodes = conjureComposerPills.conjurePillNodes;
    const current2 = closure_10.current;
    conjureComposerPills;
    const obj = ChatInputParser;
    updateTextBlocks(current, conjurePillNodes(arr, current2, obj.convertToNativeStyle(pill.pill)), arg1);
  }, items2);
  const tmp11 = "" !== str.trim();
  closure_15 = tmp11;
  const items3 = [tmp11, onDraftHasTextChange];
  const effect1 = flag2.useEffect(() => {
    let tmpResult;
    if (onDraftHasTextChange != null) {
      tmpResult = tmp(closure_15);
    }
    return tmpResult;
  }, items3);
  [num, tmp14] = onDraftHasTextChange(flag2.useState(null), 2);
  getItemKey = tmp14;
  const tmp13 = onDraftHasTextChange(flag2.useState(null), 2);
  ref = flag2.useRef(null);
  const tmp16 = onDraftHasTextChange(flag2.useState(projectId), 2);
  if (tmp16[0] !== projectId) {
    tmp16[1](projectId);
    tmp14(null);
  }
  const items4 = [projectId];
  const effect2 = obj.useEffect(() => {
    const obj = conjureComposerPills;
    const decodeConjurePillsResult = obj.decodeConjurePills(ConjureComposerDraftStore.getDraft(projectId));
    closure_10.current = decodeConjurePillsResult.pills;
    closure_9(decodeConjurePillsResult.text);
    const obj2 = ChatInputNativeCommandsDefault;
    obj2.setText(ref.current, decodeConjurePillsResult.text);
    callback1(decodeConjurePillsResult.text);
  }, items4);
  const items5 = [flag2];
  const effect3 = obj.useEffect(() => {
    const tmp = flag2;
    if (tmp) {
      const obj = ChatInputNativeCommandsDefault;
      obj.blur(ref.current);
    }
  }, items5);
  const tmp4Result = tmp4(tmp5[22]);
  const conjureAttachmentDraftList = tmp4Result.useConjureAttachmentDraftList(projectId, "chat");
  let tmpResult = tmp(obj.useState(false), 2);
  [boxFocused, c18] = tmpResult;
  [tmp23, c19] = tmp(obj.useState(null), 2);
  tmp(obj.useState(null), 2);
  const callback2 = obj.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.height);
  }, []);
  const tmpResult4 = tmp(obj.useState(null), 2);
  first1 = tmpResult4[0];
  closure_21 = tmpResult4[1];
  const items6 = [callback, str, callback1];
  const callback3 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.text !== str) {
      callback(nativeEvent.text);
      callback1(nativeEvent.text, nativeEvent.editId);
    }
    let end = null;
    const tmp5 = closure_21;
    if (nativeEvent.start === nativeEvent.end) {
      end = nativeEvent.end;
    }
    tmp5(end);
  }, items6);
  const tmp29 = running(tmp5[23])(projectId);
  closure_22 = tmp29;
  const tmp4Result8 = tmp4(tmp5[24]);
  conjureStoredAttachments = tmp4Result8.useConjureStoredAttachments(projectId);
  const items7 = [str, first1, canSend, flag2];
  memo = obj.useMemo(() => {
    let result = null;
    if (null != first1) {
      result = null;
      if (canSend) {
        result = null;
        if (!flag2) {
          const obj = conjureMentions;
          result = obj.findConjureMentionQuery(str, tmp);
        }
      }
    }
    return result;
  }, items7);
  start = undefined;
  if (memo != null) {
    start = memo.start;
  }
  if (start == null) {
    start = null;
  }
  const items8 = [start, projectId];
  const effect4 = obj.useEffect(() => {
    if (null != start) {
      const obj = conjureStoredAttachments2;
      conjureStoredAttachments = obj.fetchConjureStoredAttachments(projectId);
    }
  }, items8);
  const items9 = [memo, tmp29, conjureStoredAttachments];
  const items10 = [memo, callback, str, callback1, projectId];
  const memo1 = obj.useMemo(() => {
    let items;
    if (null == memo) {
      items = [];
    } else {
      const obj = conjureMentions;
      items = obj.filterConjureMentionCandidates(closure_22, conjureStoredAttachments, tmp.text);
    }
    return items;
  }, items9);
  const callback4 = obj.useCallback((kind) => {
    let conjureFilePillIconResult;
    if (null != memo) {
      let combined;
      let name;
      const current = closure_10.current;
      if ("user" === kind.kind) {
        const _HermesInternal2 = HermesInternal;
        combined = "<@" + kind.user.id + ">";
      } else {
        const _HermesInternal = HermesInternal;
        combined = "<file:" + kind.file.id + ">";
      }
      if ("user" === kind.kind) {
        const obj = projectId(onSend[17]);
        name = obj.conjureUserPillLabel(kind.user.id);
      } else {
        name = kind.file.name;
      }
      const obj2 = projectId(onSend[17]);
      const conjurePillTextResult = obj2.conjurePillText(current, name, combined);
      running = conjurePillTextResult;
      const obj3 = { raw: combined, icon: conjureFilePillIconResult };
      conjureFilePillIconResult = null;
      set = current.set;
      if ("user" !== kind.kind) {
        const obj4 = projectId(onSend[17]);
        conjureFilePillIconResult = obj4.conjureFilePillIcon();
      }
      const result = set(conjurePillTextResult, obj3);
      const _HermesInternal3 = HermesInternal;
      const combined1 = "" + conjurePillTextResult + " ";
      const sum = str.slice(0, tmp.start) + combined1;
      const sum1 = sum + str.slice(tmp.end);
      const sum2 = tmp.start + combined1.length;
      callback(sum1);
      closure_21(sum2);
      const obj5 = running(onSend[20]);
      obj5.setText(ref.current, sum1);
      const obj6 = running(onSend[20]);
      obj6.setSelectedRange(ref.current, sum2, 0);
      callback1(sum1);
      let hasItem = "file" === kind.kind;
      if (hasItem) {
        const CONJURE_VIEWABLE_IMAGE_TYPES = projectId(onSend[26]).CONJURE_VIEWABLE_IMAGE_TYPES;
        hasItem = CONJURE_VIEWABLE_IMAGE_TYPES.has(kind.file.content_type);
      }
      if (hasItem) {
        const obj7 = projectId(onSend[27]);
        const attachmentUrl = obj7.getAttachmentUrl(current, kind.file.id);
        attachmentUrl.then((icon) => {
          const value = current.get(running);
          if (null != value) {
            value.icon = icon;
            callback1(ref.current);
          }
        }, () => {

        });
      }
    }
  }, items10);
  const tmp4Result9 = tmp4(tmp5[14]);
  const token = tmp4Result9.useToken(tmp28(tmp5[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const tmp4Result10 = tmp4(tmp5[14]);
  const token1 = tmp4Result10.useToken(tmp28(tmp5[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  const tmp4Result11 = tmp4(tmp5[14]);
  const token2 = tmp4Result11.useToken(tmp28(tmp5[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  const tmp4Result12 = tmp4(tmp5[14]);
  const token3 = tmp4Result12.useToken(tmp28(tmp5[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const items11 = [str];
  const tmp4Result13 = tmp4(tmp5[28]);
  const stateFromStores = tmp4Result13.useStateFromStores(items11, () => str.useReducedMotion);
  const bound = Math.max(0, (token1 - token) / 2);
  const bound1 = Math.min(pill, Math.max(0, (token - 20) / 2));
  let _Math = Math;
  const _Math2 = Math;
  const minResult = min(120, max(token, num));
  const tmp44 = closure_15();
  closure_26 = tmp44;
  const items12 = [projectId];
  callback5 = obj.useCallback((arr) => {
    if (0 !== arr.length) {
      const CONJURE_MAX_ATTACHMENTS_PER_MESSAGE = ConjureAttachmentTypes.CONJURE_MAX_ATTACHMENTS_PER_MESSAGE;
      let obj3 = conjureAttachmentDrafts;
      const diff = CONJURE_MAX_ATTACHMENTS_PER_MESSAGE - obj3.getConjureAttachmentDrafts(projectId, "chat").length;
      const tmp12 = projectId;
      if (arr.length > diff) {
        const intl = tmp10(1125).intl;
        const formatToPlainString = intl.formatToPlainString;
        let obj = { count: ConjureAttachmentTypes.CONJURE_MAX_ATTACHMENTS_PER_MESSAGE };
        const Q0aCVZ = _modDef3863.Q0aCVZ;
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
          const obj2 = projectId(onSend[26]);
          const tmp = projectId;
          const tmp2 = onSend;
          if (!obj2.isConjureAttachmentWithinLimit(name.size, name.contentType)) {
            obj3 = { draft: obj4 };
            obj4 = { status: "error", errorText: tmpResult.conjureAttachmentTooLargeText(name.contentType) };
            const merged = Object.assign(obj);
            tmpResult = tmp(tmp2[22]);
          }
          return obj3;
        }
        const obj5 = {
          draft: obj6,
          upload() {
            const obj = projectId(onSend[29]);
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
  }, items12);
  const items13 = [projectId];
  onRemove = obj.useCallback((arg0) => {
    const obj = conjureAttachmentDrafts;
    return obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
  }, items13);
  const items14 = [callback5];
  callback6 = obj.useCallback(onInterrupt(function*(arg0, value) {
    let c2;
    let closure_0;
    if (onSend === 2) {
      onSend = 3;
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
        onSend = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            onSend = 3;
            throw value;
          } else if (arg0 === 2) {
            onSend = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            projectId = callback5;
            c1 = 1;
            const obj2 = projectId(onSend[29]);
            onSend = 1;
            const obj5 = { value: obj2.pickConjurePhotos("mixed", projectId(onSend[26]).CONJURE_MAX_ATTACHMENTS_PER_MESSAGE), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          onSend = 3;
          throw value;
        } else if (arg0 === 2) {
          onSend = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          projectId(value);
          onSend = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp9) {
        onSend = 3;
        throw tmp9;
      }
    }
  }), items14);
  const items15 = [callback5, canSend];
  const callback7 = obj.useCallback((nativeEvent) => {
    let obj2;
    let type;
    let url;
    ({ url, type } = nativeEvent.nativeEvent);
    const tmp = canSend;
    if (tmp) {
      const obj = { uri: url, name: obj2.pickedName(url, null), contentType: type, size: null };
      obj2 = conjurePickedFiles;
      const tmp2 = callback5;
      if (type == null) {
        type = "application/octet-stream";
      }
      const items = [obj];
      tmp2(items);
    }
  }, items15);
  const useCallback = obj.useCallback;
  projectId = onInterrupt((types) => {
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
              let obj2 = types(onSend[30]);
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
              closure_1_27(types.map((uri) => {
                let obj2;
                const obj = { uri: uri.uri, name: obj2.pickedName(uri.uri, uri.name), contentType: str, size };
                str = uri.type;
                obj2 = types(closure_1_2[29]);
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
  const items16 = [callback5];
  callback8 = useCallback(function() {
    return closure_0(...arguments);
  }, items16);
  const items17 = [onSendToOtherProjects, callback];
  callback9 = obj.useCallback(() => {
    const current = ref.current;
    if (onSendToOtherProjects != null) {
      const withConjureMentionNames = projectId(onSend[25]).withConjureMentionNames;
      const tmp4 = projectId(onSend[25]);
      let obj = projectId(onSend[17]);
      tmp(withConjureMentionNames(obj.encodeConjurePills(current, closure_10.current)), function() {
        if (ref.current === current) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          closure_10.current = new Map();
          map = new Map();
          callback("");
          const obj = ChatInputNativeCommandsDefault;
          obj.setText(ref.current, "");
        }
      });
    }
  }, items17);
  const items18 = [callback6, callback8, onSendToOtherProjects, callback9];
  const memo2 = obj.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items2;
    const obj = { label: intl.string(_modDef3863["51+9lc"]), IconComponent: ImagesIcon.ImagesIcon, action: callback6 };
    intl = intl5.intl;
    let items = [obj, , ];
    const obj2 = {
      label: intl2.string(_modDef3863["10ljr2"]),
      IconComponent: MusicIcon.MusicIcon,
      action() {
        const items = [projectId(onSend[33]).types.audio];
        return callback8(items);
      }
    };
    intl2 = intl5.intl;
    items[1] = obj2;
    const obj3 = {
      label: intl3.string(_modDef3863.aotDee),
      IconComponent: FileUpIcon.FileUpIcon,
      action() {
        return callback8();
      }
    };
    intl3 = intl5.intl;
    items[2] = obj3;
    if (null != onSendToOtherProjects) {
      const obj4 = { label: intl4.string(_modDef3863["5HmLrK"]), IconComponent: ChatArrowRightIcon.ChatArrowRightIcon, action: callback9 };
      intl4 = tmp2(1125).intl;
      const items1 = [obj4];
      items2 = items1;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items, items2, 3);
    return items;
  }, items18);
  const everyResult = conjureAttachmentDraftList.every((status) => "ready" === status.status);
  const tmp52 = "" !== str.trim() || conjureAttachmentDraftList.length > 0;
  closure_32 = tmp52;
  sendable = tmp53;
  const items19 = [onSend, projectId, canSend && tmp52 && everyResult, callback, str];
  callback10 = obj.useCallback(function() {
    const tmp = sendable;
    if (tmp) {
      const obj = conjureComposerPills;
      const encodeConjurePillsResult = obj.encodeConjurePills(str, closure_10.current);
      const obj2 = conjureAttachmentDrafts;
      const result = obj2.takeConjureAttachmentRefs(projectId, "chat");
      let tmp9;
      const tmp5 = closure_10;
      const tmp8 = onSend;
      if (result.length > 0) {
        tmp9 = result;
      }
      tmp8(encodeConjurePillsResult, tmp9);
      const _Map = Map;
      const self = this;
      const self2 = this;
      tmp5.current = new Map();
      map = new Map();
      callback("");
      const obj3 = ChatInputNativeCommandsDefault;
      obj3.setText(ref.current, "");
      _undefined3(null);
      _undefined(null);
    }
  }, items19);
  const items20 = [closure_9];
  const items21 = [projectId];
  const tmp4Result14 = tmp4(tmp5[28]);
  stateFromStores1 = tmp4Result14.useStateFromStores(items20, () => {
    const modelSettings = ConjureModelSettingsStore.getModelSettings(projectId);
    let tierSettings;
    if (modelSettings != null) {
      tierSettings = modelSettings.tierSettings;
    }
    return null != tierSettings;
  }, items21);
  const items22 = [projectId];
  callback11 = obj.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: unpackModuleId(ConjureModelSettingsSheetDefault, obj2), key: ConjureModelSettingsSheet.CONJURE_MODEL_SETTINGS_SHEET_KEY };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items22);
  const items23 = [tmp52, running, stateFromStores1, canSend && tmp52 && everyResult];
  const memo3 = obj.useMemo(() => {
    str = "send";
    let str2 = "send";
    if (!closure_32) {
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
  }, items23);
  const items24 = [tmp44, canSend, onInterrupt, callback11, callback10];
  callback12 = obj.useCallback((key) => {
    let intl;
    let intl2;
    let intl3;
    let tmp14;
    if ("stop" === key.key) {
      const obj2 = { style: closure_26.trailingButton, IconComponent: StopIcon.StopIcon, onPress: onInterrupt, disabled: null == onInterrupt, accessibilityLabel: intl2.string(_modDef3863.wiguT0) };
      const tmp18 = ChatInputActionButtonDefault;
      intl2 = intl5.intl;
      tmp14 = unpackModuleId(tmp18, obj2);
    } else if ("models" === key.key) {
      const obj = { style: closure_26.trailingButton, IconComponent: FiltersHorizontalIcon.FiltersHorizontalIcon, onPress: callback11, disabled: !canSend, accessibilityLabel: intl.string(_modDef3863["3E7Yc0"]) };
      const tmp4 = ChatInputActionButtonDefault;
      intl = intl5.intl;
      tmp14 = unpackModuleId(tmp4, obj);
    } else {
      ({ trailingButton: obj3.style, sendButtonActive: obj3.activeStyle, sendIconActive: obj3.activeIconStyle } = closure_26);
      const obj5 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: SendMessageIcon.SendMessageIcon, accessibilityLabel: intl3.string(intl5.t.TXNS7S), onPress: callback10, disabled: !key.sendable };
      const tmp31 = ChatInputActionButtonDefault;
      intl3 = intl5.intl;
      tmp14 = unpackModuleId(tmp31, obj5);
    }
    return tmp14;
  }, items24);
  const items25 = [callback12];
  const callback13 = obj.useCallback((arg0, arg1, state, cleanup) => {
    const obj = { state, cleanup, withBounce: true, children: callback12(arg1) };
    const tmp = ChatInputActionButtonTransitionItemDefault;
    return unpackModuleId(tmp, obj, arg0);
  }, items25);
  const callback14 = obj.useCallback(() => _undefined2(true), []);
  let obj3 = { style: tmp44.container, children: items26 };
  const callback15 = obj.useCallback(() => _undefined2(false), []);
  items26 = [ref(tmp28(tmp5[43]), { projectId, suggestions: memo1, onSelect: callback4 }), , , , ];
  let tmp64Result = null;
  if (null != tmp23) {
    let obj4 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp23 };
    tmp64Result = tmp64(tmp4(tmp5[44]).Text, obj4);
  }
  items26[1] = tmp64Result;
  items26[2] = conjureAttachmentDraftList.map((errorText) => {
    let intl;
    let obj3;
    let tmp = null;
    if (null != errorText.errorText) {
      const obj = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: intl.formatToPlainString(running(onSend[11]).U2WbGx, obj3) };
      const Text = projectId(onSend[44]).Text;
      intl = projectId(onSend[10]).intl;
      obj3 = { name: null, error: null };
      ({ name: obj2.name, errorText: obj2.error } = errorText);
      tmp = ref(Text, obj, errorText.localId);
    }
    return tmp;
  });
  let tmp64Result2 = null;
  if (conjureAttachmentDraftList.length > 0) {
    let obj5 = {
      visible: true,
      style: tmp44.draftCarousel,
      children: conjureAttachmentDraftList.map((draft) => {
          const obj = { draft, onRemove };
          return unpackModuleId(closure_18, obj, draft.localId);
        })
    };
    const ImageCarouselRow = tmp4(tmp5[16]).ImageCarouselRow;
    tmp64Result2 = tmp64(ImageCarouselRow, obj5);
  }
  items26[3] = tmp64Result2;
  const items27 = [tmp44.box, ];
  if (boxFocused) {
    boxFocused = tmp44.boxFocused;
  }
  let obj6 = { style: items27, children: callback(canSend, obj7) };
  items27[1] = boxFocused;
  obj7 = { style: tmp44.boxContents, children: items28 };
  const obj8 = { style: { paddingBottom: bound }, children: ref(tmp4(tmp5[45]).ContextMenu, obj9) };
  obj9 = {
    items: memo2,
    align: "above",
    children(arg0) {
      let accessibilityActions;
      let intl;
      let onAccessibilityAction;
      let onPress;
      ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
      const obj = { ref, IconComponent: PlusLargeIcon.PlusLargeIcon, onPress, disabled: !canSend, accessibilityLabel: intl.string(_modDef3863.hFS71Z), accessibilityActions, onAccessibilityAction };
      const tmp = ChatInputActionButtonDefault;
      intl = intl5.intl;
      return unpackModuleId(tmp, obj);
    }
  };
  items28 = [ref(canSend, obj8), , ];
  const obj10 = { style: items29, children: ref(tmp28Result, obj11) };
  items29 = [tmp44.input, { marginBottom: bound, height: minResult }];
  obj11 = { ref, editable: canSend, shouldShowCursor: true, maxHeight: 120, verticalInset: bound1, placeholder: string(zZ9NgM), accessibilityLabel: intl2.string(running(tmp5[11]).ldNl9x), onBeginFocus: callback14, onEndBlur: callback15, onChangeContentSize: callback2, onSelectionOrTextChange: callback3, onPasteImage: callback7 };
  tmp28Result = running(tmp5[47]);
  let intl = tmp4(tmp5[10]).intl;
  string = intl.string;
  const tmp28Result2 = running(tmp5[11]);
  if (flag) {
    zZ9NgM = tmp28Result2.Z0hyNL;
  } else if (inputLocked) {
    zZ9NgM = tmp28Result2.GcFRaY;
  } else if (canSend) {
    zZ9NgM = running ? tmp28Result2["0BJa/0"] : tmp28Result2.TEeU7z;
  } else {
    zZ9NgM = tmp28Result2.zZ9NgM;
  }
  intl2 = tmp4(tmp5[10]).intl;
  items28[1] = ref(canSend, obj10);
  const obj12 = { style: items30, children: callback12Result };
  items30 = [tmp44.trailingSlot, { width: token2 + 2 * token3, height: token1 }];
  if (stateFromStores) {
    callback12Result = callback12(memo3[0]);
  } else {
    const obj13 = { items: memo3, renderItem: callback13, getItemKey };
    callback12Result = tmp64(tmp4(tmp5[48]).TransitionGroup, obj13);
  }
  items28[2] = ref(canSend, obj12);
  items26[4] = ref(canSend, obj6);
  return callback(canSend, obj3);
};
