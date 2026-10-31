// Module ID: 12792
// Function ID: 12793
// Name: ConjureNativeComposer
// Dependencies: [5, 32, 19, 17, 5015, 10865, 12581, 10527, 21, 575, 5014, 1113, 3868, 5596, 10526, 8026, 12793, 10974, 12582, 1375, 12795, 12794, 12583, 12797, 12486, 12634, 12459, 12488, 504, 12761, 11099, 12800, 10758, 11100, 12559, 11170, 5258, 12505, 12802, 12663, 12803, 5729, 12805, 9874, 10828, 12808, 5080, 12814, 5624, 2]
// Exports: default

// Module 12792 (ConjureNativeComposer)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5258 */;
import useToken from "useToken" /* 5596 */;
import SendMessageIcon from "SendMessageIcon" /* 5729 */;
import ImageCarousel from "ImageCarousel" /* 10526 */;
import ImageCarouselConstants from "ImageCarouselConstants" /* 10527 */;
import MusicIcon from "MusicIcon" /* 10758 */;
import PlusLargeIcon from "PlusLargeIcon" /* 10828 */;
import ChatArrowRightIcon from "ChatArrowRightIcon" /* 11170 */;
import conjureStoredAttachments2 from "conjureStoredAttachments" /* 12486 */;
import ConjureModelSettingsSheet from "ConjureModelSettingsSheet" /* 12505 */;
import FileUpIcon from "FileUpIcon" /* 12559 */;
import ConjureChatActionCreators from "ConjureChatActionCreators" /* 12582 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 12583 */;
import conjureMentions from "conjureMentions" /* 12634 */;
import StopIcon from "StopIcon" /* 12663 */;
import conjurePickedFiles from "conjurePickedFiles" /* 12761 */;
import conjureComposerPills from "conjureComposerPills" /* 12793 */;
import ChatInputParser from "ChatInputParser" /* 12794 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 12795 */;
import ImagesIcon from "ImagesIcon" /* 12800 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 12802 */;
import FiltersHorizontalIcon from "FiltersHorizontalIcon" /* 12803 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 12805 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 10865 */;
import ConjureComposerDraftStore from "ConjureComposerDraftStore" /* 12581 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const ConjureModelSettingsSheetDefault = ConjureModelSettingsSheet;
let arr, c1, closure_1, closure_19, closure_2, map, nativeEvent, set, types;

let StyleSheet;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj2;
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
function ConjureNativeDraftTile(draft) {
  let WarningIcon;
  let contentType;
  let contentType2;
  let formatToPlainStringResult;
  let intl4;
  let obj10;
  let obj20;
  let obj8;
  let str;
  let tmp7Result;
  draft = draft.draft;
  const onRemove = draft.onRemove;
  const tmp = closure_16();
  const items = [onRemove, draft.localId];
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.TEXT_OVERLAY_LIGHT);
  const callback = react.useCallback(() => onRemove(draft.localId), items);
  const obj3 = { itemKey: String(draft.localId), uri: str, fileName: null, isImage: contentType.startsWith("image/"), isVideo: contentType2.startsWith("video/"), accessibilityLabel: formatToPlainStringResult, removeAccessibilityLabel: intl4.formatToPlainString(intl5.t.FxKgb3, obj8), onRemove: callback, children: tmp7Result };
  const ImageCarouselTile = ImageCarousel.ImageCarouselTile;
  str = draft.previewUrl;
  if (str == null) {
    str = "";
  }
  ({ name: obj2.fileName, contentType } = draft);
  contentType2 = draft.contentType;
  if ("uploading" === draft.status) {
    const intl3 = tmp2(1113).intl;
    const obj5 = { name: draft.name };
    formatToPlainStringResult = intl3.formatToPlainString(tmp4(3868).MWTYwv, obj5);
  } else if (null != draft.errorText) {
    const intl2 = tmp2(1113).intl;
    const obj6 = { name: null, error: null };
    ({ name: obj4.name, errorText: obj4.error } = draft);
    formatToPlainStringResult = intl2.formatToPlainString(tmp4(3868).U2WbGx, obj6);
  } else {
    const intl = tmp2(1113).intl;
    const obj7 = { name: draft.name };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1113).t.MJHFt9, obj7);
  }
  intl4 = tmp2(1113).intl;
  obj8 = { name: draft.name };
  if ("uploading" === draft.status) {
    const obj9 = { style: tmp.draftOverlay, children: authStore2(metroRequire, obj10) };
    obj10 = { size: "small", color: token };
    tmp7Result = tmp7(metroImportAll, obj9);
  } else {
    tmp7Result = null;
    if ("error" === draft.status) {
      const obj19 = { style: tmp.draftOverlay, children: authStore2(WarningIcon, obj20) };
      obj20 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
      WarningIcon = tmp2(8026).WarningIcon;
      tmp7Result = tmp7(metroImportAll, obj19);
    }
  }
  return authStore2(ImageCarouselTile, obj3);
}
({ ActivityIndicator: metroRequire, Pressable: metroImportDefault, View: metroImportAll, StyleSheet } = react_native);
const IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING = ImageCarouselConstants.IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { pill: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, color: nativeDefault.colors.MENTION_FOREGROUND, borderRadius: nativeDefault.radii.xs };
let closure_15 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { container: obj4, containerFlushTop: { paddingTop: 0 }, box: obj5, boxFocused: obj6, boxContentsStacked: obj7, actionsRow: obj8, actionsAccessory: { flex: 1, flexDirection: "row" }, boxContents: obj9, input: obj10, inputStacked: obj11, draftCarousel: { marginTop: -IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING, marginBottom: 0 }, draftOverlay: obj12, trailingButton: size, trailingSlot: { alignItems: "center", justifyContent: "center" }, sendButtonActive: obj13, sendIconActive: obj14, sendingButton: obj15 };
obj4 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj5 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, overflow: "hidden" };
obj6 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
obj7 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.space.PX_4 };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
obj9 = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
obj10 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_4 };
obj11 = { paddingHorizontal: nativeDefault.space.PX_4 };
obj12 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX };
let merged = Object.assign(StyleSheet.absoluteFillObject);
size = { width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH, height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT };
obj13 = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
obj14 = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
obj15 = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
let closure_16 = createStyles(obj3);
let c19 = 1;
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeComposer.tsx");

export default function ConjureNativeComposer(projectId) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let boxFocused;
  let c26;
  let c27;
  let callback14Result;
  let canSend;
  let inputLocked;
  let intl2;
  let items31;
  let items33;
  let items36;
  let num2;
  let obj4;
  let obj6;
  let obj7;
  let placeholder;
  let sending;
  let stackedAccessory;
  let tmp15;
  let tmp26;
  let tmp34Result;
  let tmp88;
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
  const onSendFiles = projectId.onSendFiles;
  ({ stackedAccessory, placeholder, sending } = projectId);
  if (sending === undefined) {
    sending = false;
  }
  const focusRequest = projectId.focusRequest;
  const blurRequest = projectId.blurRequest;
  canSend = undefined;
  let closure_12;
  let str;
  let closure_14;
  closure_15 = undefined;
  let getItemKey;
  let pill;
  let callback1;
  let closure_20;
  let c21;
  let ref;
  let conjureAttachmentDraftList;
  let first1;
  let closure_25;
  c26 = undefined;
  c27 = undefined;
  let callback2;
  let first2;
  let closure_30;
  let closure_31;
  let conjureStoredAttachments;
  let memo1;
  let start;
  let closure_35;
  let callback6;
  let onRemove;
  let callback7;
  let callback9;
  let callback10;
  let closure_41;
  let sendable;
  let callback11;
  let callback12;
  let stateFromStores1;
  let callback13;
  let token4;
  let callback14;
  if (canSend) {
    canSend = !inputLocked;
  }
  if (canSend) {
    canSend = !flag;
  }
  if (canSend) {
    canSend = !sending;
  }
  let tmp = null != onSendFiles;
  closure_12 = tmp;
  let obj = flag2;
  let tmp2 = onDraftHasTextChange;
  let num = 1;
  const first = onDraftHasTextChange(flag2.useState(() => {
    const obj = conjureComposerPills;
    return obj.decodeConjurePills(ConjureComposerDraftStore.getDraft(projectId));
  }), 1)[0];
  let tmp4 = onDraftHasTextChange(flag2.useState(first.text), 2);
  str = tmp4[0];
  closure_14 = tmp4[1];
  let tmp5 = projectId;
  let obj2 = projectId(onSend[17]);
  const conjureLinkPrefetch = obj2.useConjureLinkPrefetch(str);
  closure_15 = flag2.useRef(first.pills);
  flag2.useRef(str);
  let items = [str];
  const effect = flag2.useEffect(() => {
    ref.current = str;
  }, items);
  let items1 = [projectId];
  getItemKey = flag2.useCallback((current) => {
    const setComposerDraft = ConjureChatActionCreators.setComposerDraft;
    ConjureChatActionCreators;
    const obj = conjureComposerPills;
    setComposerDraft(projectId, obj.encodeConjurePills(current, closure_15.current));
    closure_14(current);
  }, items1);
  let tmp10 = closure_15();
  pill = tmp10;
  let items2 = [tmp10];
  callback1 = flag2.useCallback((arr, arg1) => {
    let isIOSResult = null == arg1;
    if (isIOSResult) {
      const obj = PlatformUtils;
      isIOSResult = obj.isIOS();
    }
    if (!isIOSResult) {
      const updateTextBlocks = ChatInputNativeCommandsDefault.updateTextBlocks;
      const current = ref.current;
      ChatInputNativeCommandsDefault;
      const conjurePillNodes = conjureComposerPills.conjurePillNodes;
      const current2 = closure_15.current;
      conjureComposerPills;
      const obj2 = ChatInputParser;
      updateTextBlocks(current, conjurePillNodes(arr, current2, obj2.convertToNativeStyle(pill.pill)), arg1);
    }
  }, items2);
  const tmp12 = "" !== str.trim();
  closure_20 = tmp12;
  const items3 = [tmp12, onDraftHasTextChange];
  const effect1 = flag2.useEffect(() => {
    let tmpResult;
    if (onDraftHasTextChange != null) {
      tmpResult = tmp(closure_20);
    }
    return tmpResult;
  }, items3);
  let tmp14 = onDraftHasTextChange(flag2.useState(null), 2);
  [num2, tmp15] = tmp14;
  c21 = tmp15;
  ref = flag2.useRef(null);
  const tmp17 = onDraftHasTextChange(flag2.useState(projectId), 2);
  if (tmp17[0] !== projectId) {
    let tmp18 = tmp17[1](projectId);
    tmp15(null);
  }
  const items4 = [projectId];
  const effect2 = obj.useEffect(() => {
    const obj = conjureComposerPills;
    const decodeConjurePillsResult = obj.decodeConjurePills(ConjureComposerDraftStore.getDraft(projectId));
    closure_15.current = decodeConjurePillsResult.pills;
    closure_14(decodeConjurePillsResult.text);
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
  const tmp5Result = tmp5(onSend[22]);
  conjureAttachmentDraftList = tmp5Result.useConjureAttachmentDraftList(projectId, "chat");
  const tmp2Result = tmp2(obj.useState([]), 2);
  first1 = tmp2Result[0];
  closure_25 = tmp2Result[1];
  const items6 = [tmp, first1, conjureAttachmentDraftList];
  const memo = obj.useMemo(() => {
    let mapped;
    const tmp = closure_12;
    if (tmp) {
      mapped = first1.map((localId) => {
        let errorText;
        let file;
        ({ file, errorText } = localId);
        const obj = { localId: localId.localId, name: file.name, contentType: file.contentType, status: str, errorText, previewUrl: file.uri };
        str = "ready";
        if (null != errorText) {
          str = "error";
        }
        return obj;
      });
    } else {
      mapped = conjureAttachmentDraftList;
    }
    return mapped;
  }, items6);
  [boxFocused, c26] = tmp2(obj.useState(false), 2);
  tmp2(obj.useState(false), 2);
  [tmp26, c27] = tmp2(obj.useState(null), 2);
  tmp2(obj.useState(null), 2);
  callback2 = obj.useCallback(() => {
    const obj = ChatInputNativeCommandsDefault;
    obj.focus(ref.current);
    const obj2 = ChatInputNativeCommandsDefault;
    obj2.openSystemKeyboard(ref.current);
  }, []);
  const items7 = [focusRequest, callback2];
  const effect4 = obj.useEffect(() => {
    if (null != focusRequest) {
      callback2();
    }
  }, items7);
  const items8 = [blurRequest];
  const effect5 = obj.useEffect(() => {
    if (null != blurRequest) {
      const obj = ChatInputNativeCommandsDefault;
      obj.blur(ref.current);
    }
  }, items8);
  const callback3 = obj.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.height);
  }, []);
  const tmp2Result6 = tmp2(obj.useState(null), 2);
  first2 = tmp2Result6[0];
  closure_30 = tmp2Result6[1];
  const items9 = [getItemKey, str, callback1];
  const callback4 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.text !== str) {
      callback(nativeEvent.text);
      callback1(nativeEvent.text, nativeEvent.editId);
    }
    let end = null;
    const tmp5 = closure_30;
    if (nativeEvent.start === nativeEvent.end) {
      end = nativeEvent.end;
    }
    tmp5(end);
  }, items9);
  const tmp35 = running(onSend[23])(projectId);
  closure_31 = tmp35;
  const tmp5Result9 = tmp5(onSend[24]);
  conjureStoredAttachments = tmp5Result9.useConjureStoredAttachments(projectId);
  const items10 = [str, first2, canSend, flag2, tmp];
  memo1 = obj.useMemo(() => {
    let result = null;
    if (null != first2) {
      result = null;
      if (canSend) {
        result = null;
        if (!flag2) {
          result = null;
          if (!closure_12) {
            const obj = conjureMentions;
            result = obj.findConjureMentionQuery(str, tmp);
          }
        }
      }
    }
    return result;
  }, items10);
  start = undefined;
  if (memo1 != null) {
    start = memo1.start;
  }
  if (start == null) {
    start = null;
  }
  const items11 = [start, projectId];
  const effect6 = obj.useEffect(() => {
    if (null != start) {
      const obj = conjureStoredAttachments2;
      conjureStoredAttachments = obj.fetchConjureStoredAttachments(projectId);
    }
  }, items11);
  const items12 = [memo1, tmp35, conjureStoredAttachments];
  const memo2 = obj.useMemo(() => {
    let items;
    if (null == memo1) {
      items = [];
    } else {
      const obj = conjureMentions;
      items = obj.filterConjureMentionCandidates(closure_31, conjureStoredAttachments, tmp.text);
    }
    return items;
  }, items12);
  const items13 = [memo1, getItemKey, str, callback1, projectId];
  const callback5 = obj.useCallback((kind) => {
    let conjureFilePillIconResult;
    if (null != memo1) {
      let combined;
      let name;
      const current = closure_15.current;
      if ("user" === kind.kind) {
        const _HermesInternal2 = HermesInternal;
        combined = "<@" + kind.user.id + ">";
      } else {
        const _HermesInternal = HermesInternal;
        combined = "<file:" + kind.file.id + ">";
      }
      if ("user" === kind.kind) {
        const obj = projectId(onSend[16]);
        name = obj.conjureUserPillLabel(kind.user.id);
      } else {
        name = kind.file.name;
      }
      const obj2 = projectId(onSend[16]);
      const conjurePillTextResult = obj2.conjurePillText(current, name, combined);
      running = conjurePillTextResult;
      const obj3 = { raw: combined, icon: conjureFilePillIconResult };
      conjureFilePillIconResult = null;
      set = current.set;
      if ("user" !== kind.kind) {
        const obj4 = projectId(onSend[16]);
        conjureFilePillIconResult = obj4.conjureFilePillIcon();
      }
      const result = set(conjurePillTextResult, obj3);
      const _HermesInternal3 = HermesInternal;
      const combined1 = "" + conjurePillTextResult + " ";
      const sum = str.slice(0, tmp.start) + combined1;
      const sum1 = sum + str.slice(tmp.end);
      const sum2 = tmp.start + combined1.length;
      callback(sum1);
      closure_30(sum2);
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
  }, items13);
  const tmp5Result10 = tmp5(onSend[13]);
  const token = tmp5Result10.useToken(tmp34(tmp6[9]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const tmp5Result11 = tmp5(onSend[13]);
  const token1 = tmp5Result11.useToken(tmp34(tmp6[9]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  const tmp5Result12 = tmp5(onSend[13]);
  const token2 = tmp5Result12.useToken(tmp34(tmp6[9]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  const tmp5Result13 = tmp5(onSend[13]);
  const token3 = tmp5Result13.useToken(tmp34(tmp6[9]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const items14 = [focusRequest];
  const tmp5Result14 = tmp5(onSend[28]);
  const stateFromStores = tmp5Result14.useStateFromStores(items14, () => focusRequest.useReducedMotion);
  const bound = Math.max(0, (token1 - token) / 2);
  const bound1 = Math.min(closure_14, Math.max(0, (token - 20) / 2));
  let _Math = Math;
  const _Math2 = Math;
  const minResult = min(120, max(token, num2));
  const _Math3 = Math;
  const min2 = Math.min;
  if (undefined !== stackedAccessory) {
    num = 2;
  }
  const bound2 = Math.max(min2(120, 20 * num + 2 * bound1), minResult);
  const tmp51 = ref();
  closure_35 = tmp51;
  const items15 = [projectId, tmp, first1.length];
  callback6 = obj.useCallback((arr) => {
    let substr;
    if (0 !== arr.length) {
      let length;
      if (closure_12) {
        let tmp4 = first1;
        length = first1.length;
      } else {
        let tmp = projectId;
        let tmp2 = onSend;
        let obj = projectId(onSend[22]);
        let tmp3 = substr;
        length = obj.getConjureAttachmentDrafts(substr, "chat").length;
      }
      const diff = projectId(onSend[26]).CONJURE_MAX_ATTACHMENTS_PER_MESSAGE - length;
      substr = arr;
      if (arr.length > diff) {
        const intl = projectId(onSend[11]).intl;
        const formatToPlainString = intl.formatToPlainString;
        let obj2 = { count: projectId(onSend[26]).CONJURE_MAX_ATTACHMENTS_PER_MESSAGE };
        const Q0aCVZ = running(onSend[12]).Q0aCVZ;
        _undefined3(formatToPlainString(Q0aCVZ, obj2));
        const _Math = Math;
        substr = arr.slice(0, Math.max(0, diff));
        arr = substr;
      } else {
        _undefined3(null);
      }
      if (closure_12) {
        closure_25((arg0) => {
          const items = [
            ...arg0,
            ...substr.map((file) => {
              let result;
              const obj = { localId: +closure_19, file, errorText: result };
              closure_19 = tmp + 1;
              result = undefined;
              if (null != file.size) {
                const obj2 = substr(closure_1_2[26]);
                const tmp3 = substr;
                const tmp4 = closure_1_2;
                if (!obj2.isConjureAttachmentWithinLimit(file.size, file.contentType)) {
                  const tmp3Result = tmp3(tmp4[22]);
                  result = tmp3Result.conjureAttachmentTooLargeText(file.contentType);
                }
              }
              return obj;
            })
          ];
          return items;
        });
      } else {
        const mapped = arr.map((name) => {
          let obj4;
          let obj6;
          let tmpResult;
          let closure_0 = name;
          let obj = { name: name.name, contentType: name.contentType, previewUrl: name.uri };
          if (null != name.size) {
            let obj3;
            const obj2 = substr(onSend[26]);
            const tmp = substr;
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
              return obj.uploadConjurePickedFile(substr, name);
            }
          };
          obj6 = { status: "uploading" };
          const merged1 = Object.assign(obj);
          obj3 = obj5;
        });
        let obj3 = projectId(onSend[22]);
        let result = obj3.addConjureAttachmentDrafts(substr, "chat", mapped);
      }
    }
  }, items15);
  const items16 = [projectId, tmp];
  onRemove = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    const tmp = closure_12;
    if (tmp) {
      closure_25((arr) => arr.filter((localId) => localId.localId !== closure_1_0));
    } else {
      const obj = conjureAttachmentDrafts;
      const result = obj.removeConjureAttachmentDraft(projectId, "chat", arg0);
    }
  }, items16);
  const items17 = [callback6];
  callback7 = obj.useCallback(onInterrupt(function*(arg0, value) {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            projectId = callback6;
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp9) {
        onSend = 3;
        throw tmp9;
      }
    }
  }), items17);
  const items18 = [callback6, canSend];
  const callback8 = obj.useCallback((nativeEvent) => {
    let obj2;
    let type;
    let url;
    ({ url, type } = nativeEvent.nativeEvent);
    const tmp = canSend;
    if (tmp) {
      const obj = { uri: url, name: obj2.pickedName(url, null), contentType: type, size: null };
      obj2 = conjurePickedFiles;
      const tmp2 = callback6;
      if (type == null) {
        type = "application/octet-stream";
      }
      const items = [obj];
      tmp2(items);
    }
  }, items18);
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_1_36(types.map((uri) => {
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp16) {
          c4 = 3;
          throw tmp16;
        }
      }
    })();
  });
  const items19 = [callback6];
  callback9 = useCallback(function() {
    return closure_0(...arguments);
  }, items19);
  const items20 = [onSendToOtherProjects, getItemKey];
  callback10 = obj.useCallback(() => {
    const current = ref.current;
    if (onSendToOtherProjects != null) {
      const withConjureMentionNames = projectId(onSend[25]).withConjureMentionNames;
      const tmp4 = projectId(onSend[25]);
      let obj = projectId(onSend[16]);
      tmp(withConjureMentionNames(obj.encodeConjurePills(current, closure_15.current)), function() {
        if (ref.current === current) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          closure_15.current = new Map();
          map = new Map();
          callback("");
          const obj = ChatInputNativeCommandsDefault;
          obj.setText(ref.current, "");
        }
      });
    }
  }, items20);
  const items21 = [callback7, callback9, onSendToOtherProjects, callback10];
  const memo3 = obj.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items2;
    const obj = { label: intl.string(_modDef3868["51+9lc"]), IconComponent: ImagesIcon.ImagesIcon, action: callback7 };
    intl = intl5.intl;
    let items = [obj, , ];
    const obj2 = {
      label: intl2.string(_modDef3868["10ljr2"]),
      IconComponent: MusicIcon.MusicIcon,
      action() {
        const items = [projectId(onSend[33]).types.audio];
        return callback9(items);
      }
    };
    intl2 = intl5.intl;
    items[1] = obj2;
    const obj3 = {
      label: intl3.string(_modDef3868.aotDee),
      IconComponent: FileUpIcon.FileUpIcon,
      action() {
        return callback9();
      }
    };
    intl3 = intl5.intl;
    items[2] = obj3;
    if (null != onSendToOtherProjects) {
      const obj4 = { label: intl4.string(_modDef3868["5HmLrK"]), IconComponent: ChatArrowRightIcon.ChatArrowRightIcon, action: callback10 };
      intl4 = tmp2(1113).intl;
      const items1 = [obj4];
      items2 = items1;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items, items2, 3);
    return items;
  }, items21);
  const everyResult = memo.every((status) => "ready" === status.status);
  let tmp60 = "" !== str.trim();
  const tmp53 = onInterrupt;
  if (!tmp60) {
    tmp60 = !tmp && memo.length > 0;
  }
  closure_41 = tmp60;
  sendable = tmp62;
  const items22 = [getItemKey];
  callback11 = obj.useCallback(() => {
    closure_15.current = new Map();
    new Map();
    callback("");
    const obj = ChatInputNativeCommandsDefault;
    obj.setText(ref.current, "");
    _undefined3(null);
    _undefined(null);
  }, items22);
  const items23 = [onSend, onSendFiles, first1, projectId, canSend && tmp60 && everyResult, str, callback11];
  callback12 = obj.useCallback(tmp53(function*(arg0, value) {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            const tmp27 = sendable;
            if (tmp27) {
              const obj2 = tmp3(onSend[16]);
              const encodeConjurePillsResult = obj2.encodeConjurePills(str, ref.current);
              const tmp10 = onSend;
              const tmp9 = tmp3;
              if (null == onSendFiles) {
                const tmp9Result = tmp9(tmp10[22]);
                const result = tmp9Result.takeConjureAttachmentRefs(projectId, "chat");
                if (onSend != null) {
                  let tmp19;
                  if (result.length > 0) {
                    tmp19 = result;
                  }
                  tmp18(encodeConjurePillsResult, tmp19);
                }
                callback11();
              } else {
                c1 = 1;
                onSend = 1;
                const obj5 = { value: tmp14(encodeConjurePillsResult, first1.map((file) => file.file)), done: false };
                return obj5;
              }
            }
          }
        } else if (arg0 === 1) {
          onSend = 3;
          throw value;
        } else if (arg0 === 2) {
          onSend = 3;
          const obj = { value, done: true };
          return obj;
        } else if (value) {
          closure_128_25([]);
          closure_128_43();
        }
        onSend = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp23) {
        onSend = 3;
        throw tmp23;
      }
    }
  }), items23);
  const items24 = [blurRequest];
  const items25 = [projectId];
  const tmp5Result15 = tmp5(onSend[28]);
  stateFromStores1 = tmp5Result15.useStateFromStores(items24, () => {
    const modelSettings = ConjureModelSettingsStore.getModelSettings(projectId);
    let tierSettings;
    if (modelSettings != null) {
      tierSettings = modelSettings.tierSettings;
    }
    return null != tierSettings;
  }, items25);
  const items26 = [projectId];
  callback13 = obj.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: authStore2(ConjureModelSettingsSheetDefault, obj2), key: ConjureModelSettingsSheet.CONJURE_MODEL_SETTINGS_SHEET_KEY };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items26);
  const tmp5Result16 = tmp5(onSend[13]);
  token4 = tmp5Result16.useToken(tmp34(tmp6[9]).colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT);
  const items27 = [sending, tmp60, running, stateFromStores1, canSend && tmp60 && everyResult];
  const memo4 = obj.useMemo(() => {
    str = "sending";
    if (!sending) {
      let str2 = "send";
      let str3 = "send";
      if (!closure_41) {
        let str4 = "stop";
        if (!running) {
          const tmp3 = stateFromStores1;
          if (tmp3) {
            str2 = "models";
          }
          str4 = str2;
        }
        str3 = str4;
      }
      str = str3;
    }
    const items = [];
    const obj = { key: str, sendable };
    items[0] = obj;
    return items;
  }, items27);
  const items28 = [tmp51, token4, canSend, onInterrupt, callback13, callback12];
  callback14 = obj.useCallback((key) => {
    let intl;
    let intl2;
    let intl3;
    let items;
    let obj3;
    let tmp14;
    if ("sending" === key.key) {
      const obj2 = { style: items, accessibilityState: { busy: true }, children: authStore2(metroRequire, obj3) };
      items = [, ];
      ({ trailingButton: arr[0], sendingButton: arr[1] } = closure_35);
      obj3 = { size: "small", color: token4 };
      tmp14 = authStore2(metroImportAll, obj2);
    } else if ("stop" === key.key) {
      const obj4 = { style: closure_35.trailingButton, IconComponent: StopIcon.StopIcon, onPress: onInterrupt, disabled: null == onInterrupt, accessibilityLabel: intl2.string(_modDef3868.wiguT0) };
      const tmp18 = ChatInputActionButtonDefault;
      intl2 = intl5.intl;
      tmp14 = authStore2(tmp18, obj4);
    } else if ("models" === key.key) {
      const obj = { style: closure_35.trailingButton, IconComponent: FiltersHorizontalIcon.FiltersHorizontalIcon, onPress: callback13, disabled: !canSend, accessibilityLabel: intl.string(_modDef3868["3E7Yc0"]) };
      const tmp4 = ChatInputActionButtonDefault;
      intl = intl5.intl;
      tmp14 = authStore2(tmp4, obj);
    } else {
      ({ trailingButton: obj5.style, sendButtonActive: obj5.activeStyle, sendIconActive: obj5.activeIconStyle } = closure_35);
      const obj9 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: SendMessageIcon.SendMessageIcon, accessibilityLabel: intl3.string(intl5.t.TXNS7S), onPress: callback12, disabled: !key.sendable };
      const tmp37 = ChatInputActionButtonDefault;
      intl3 = intl5.intl;
      tmp14 = authStore2(tmp37, obj9);
    }
    return tmp14;
  }, items28);
  const items29 = [callback14];
  const callback15 = obj.useCallback((arg0, arg1, state, cleanup) => {
    const obj = { state, cleanup, withBounce: true, children: callback14(arg1) };
    const tmp = ChatInputActionButtonTransitionItemDefault;
    return authStore2(tmp, obj, arg0);
  }, items29);
  const callback16 = obj.useCallback(() => _undefined2(true), []);
  let tmp73 = null != tmp26;
  const callback17 = obj.useCallback(() => _undefined2(false), []);
  if (!tmp73) {
    tmp73 = memo.length > 0;
  }
  if (!tmp73) {
    tmp73 = memo2.length > 0;
  }
  let num3 = 0;
  if (undefined === stackedAccessory) {
    num3 = bound;
  }
  let obj3 = { style: { paddingBottom: num3 }, children: closure_12(tmp5(tmp6[43]).ContextMenu, obj4) };
  obj4 = {
    items: memo3,
    align: "above",
    children(arg0) {
      let accessibilityActions;
      let intl;
      let onAccessibilityAction;
      let onPress;
      ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
      const obj = { ref, IconComponent: PlusLargeIcon.PlusLargeIcon, onPress, disabled: !canSend, accessibilityLabel: intl.string(_modDef3868.hFS71Z), accessibilityActions, onAccessibilityAction };
      const tmp = ChatInputActionButtonDefault;
      intl = intl5.intl;
      return authStore2(tmp, obj);
    }
  };
  const tmp74Result = closure_12(sending, obj3);
  const items30 = [undefined !== stackedAccessory ? tmp51.inputStacked : tmp51.input, ];
  let num4 = 0;
  const tmp77 = onSendFiles;
  if (undefined === stackedAccessory) {
    num4 = bound;
  }
  let obj5 = { style: items30, onPress: callback2, disabled: minResult >= bound2, accessible: false, children: closure_12(sending, obj6) };
  items30[1] = { marginBottom: num4, height: bound2 };
  obj6 = { style: { height: minResult }, children: closure_12(tmp34Result, obj7) };
  obj7 = { ref, editable: canSend, shouldShowCursor: true, maxHeight: 120, verticalInset: bound1, placeholder, accessibilityLabel: intl2.string(tmp34(tmp6[12]).ldNl9x), onBeginFocus: callback16, onEndBlur: callback17, onChangeContentSize: callback3, onSelectionOrTextChange: callback4, onPasteImage: callback8 };
  tmp34Result = running(onSend[45]);
  if (placeholder == null) {
    let zZ9NgM;
    let intl = tmp5(tmp6[11]).intl;
    const string = intl.string;
    const tmp34Result2 = running(onSend[12]);
    if (flag) {
      zZ9NgM = tmp34Result2.Z0hyNL;
    } else if (inputLocked) {
      zZ9NgM = tmp34Result2.GcFRaY;
    } else if (canSend) {
      zZ9NgM = running ? tmp34Result2["0BJa/0"] : tmp34Result2.TEeU7z;
    } else {
      zZ9NgM = tmp34Result2.zZ9NgM;
    }
    placeholder = string(zZ9NgM);
  }
  intl2 = tmp5(tmp6[11]).intl;
  const tmp74Result5 = closure_12(tmp77, obj5);
  const obj8 = { style: items31, children: callback14Result };
  items31 = [tmp51.trailingSlot, { width: token2 + 2 * token3, height: token1 }];
  if (stateFromStores) {
    callback14Result = callback14(memo4[0]);
  } else {
    let obj9 = { items: memo4, renderItem: callback15, getItemKey };
    callback14Result = tmp74(tmp5(tmp6[46]).TransitionGroup, obj9);
  }
  const tmp74Result6 = closure_12(sending, obj8);
  const items32 = [tmp51.container, ];
  const obj10 = { style: items32, children: items33 };
  const tmp85 = undefined !== stackedAccessory && !tmp73 && tmp51.containerFlushTop;
  items32[1] = tmp85;
  items33 = [closure_12(tmp34(tmp6[47]), { projectId, suggestions: memo2, onSelect: callback5 }), , , , ];
  let tmp74Result7 = null;
  if (null != tmp26) {
    const obj11 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp26 };
    tmp74Result7 = tmp74(tmp5(tmp6[48]).Text, obj11);
  }
  items33[1] = tmp74Result7;
  items33[2] = memo.map((errorText) => {
    let intl;
    let obj3;
    let tmp = null;
    if (null != errorText.errorText) {
      const obj = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: intl.formatToPlainString(running(onSend[12]).U2WbGx, obj3) };
      const Text = projectId(onSend[48]).Text;
      intl = projectId(onSend[11]).intl;
      obj3 = { name: null, error: null };
      ({ name: obj2.name, errorText: obj2.error } = errorText);
      tmp = closure_12(Text, obj, errorText.localId);
    }
    return tmp;
  });
  let tmp74Result8 = null;
  if (memo.length > 0) {
    const obj12 = {
      visible: true,
      style: tmp51.draftCarousel,
      children: memo.map((draft) => {
          const obj = { draft, onRemove };
          return authStore2(ConjureNativeDraftTile, obj, draft.localId);
        })
    };
    const ImageCarouselRow = tmp5(tmp6[14]).ImageCarouselRow;
    tmp74Result8 = tmp74(ImageCarouselRow, obj12);
  }
  items33[3] = tmp74Result8;
  const items34 = [tmp51.box, ];
  if (boxFocused) {
    boxFocused = tmp51.boxFocused;
  }
  items34[1] = boxFocused;
  const obj14 = { style: null, children: null };
  const obj13 = { style: items34, children: str(sending, tmp88) };
  if (undefined !== stackedAccessory) {
    obj14.style = tmp51.boxContentsStacked;
    const items35 = [tmp74Result5, ];
    const obj15 = { style: tmp51.actionsRow, children: items36 };
    items36 = [tmp74Result, , ];
    const obj16 = { style: tmp51.actionsAccessory, children: stackedAccessory };
    items36[1] = closure_12(sending, obj16);
    items36[2] = tmp74Result6;
    items35[1] = str(sending, obj15);
    obj14.children = items35;
    tmp88 = obj14;
  } else {
    obj14.style = tmp51.boxContents;
    const items37 = [tmp74Result, tmp74Result5, tmp74Result6];
    obj14.children = items37;
    tmp88 = obj14;
  }
  items33[4] = closure_12(sending, obj13);
  return str(sending, obj10);
};
