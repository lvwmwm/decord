// Module ID: 8349
// Function ID: 65851
// Name: useMediaShareActions
// Dependencies: [31, 8350, 1348, 4349, 8375, 653, 6835, 33, 624, 6834, 7898, 4098, 8320, 4317, 8376, 8322, 8380, 3827, 9904, 4138, 3984, 9900, 1934, 9570, 4080, 1212, 9912, 12254, 10189, 9958, 4639, 5498, 5500, 2]
// Exports: default

// Module 8349 (useMediaShareActions)
import ActionSheet from "ActionSheet";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import { EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_11 } from "USER_SETTING_ACTION_SHEET_KEY";
import { jsx } from "set";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
function useMediaShareActions(source) {
  source = source.source;
  const disableDownload = source.disableDownload;
  const shareable = source.shareable;
  let canForwardMessage;
  let videoSourceType;
  const channelId = source.channelId;
  const messageId = source.messageId;
  let obj = source(shareable[8]);
  let items = [obscure, messageId, callback];
  let items1 = [channelId, messageId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = null;
    if (null != channelId) {
      tmp = null;
      if (null != messageId) {
        let message = obscure.getMessage(channelId, messageId);
        if (null == message) {
          message = callback.getMessage(messageId);
        }
        if (null == message) {
          message = messageId.getMessage(messageId);
        }
        tmp = message;
      }
    }
    return tmp;
  }, items1);
  let result = source(shareable[9]).shouldAgeVerifyForExplicitMedia();
  let obj2 = source(shareable[9]);
  obj = { attachment: source, shouldObscureSpoiler: true, enabledContentHarmTypeFlags: 0, shouldAgeVerify: result };
  obscure = source(shareable[10]).getAttachmentObscurityProps(obj).obscure;
  const items2 = [source];
  callback = channelId.useCallback(() => {
    disableDownload(shareable[11]).hideActionSheet();
    if (null != source.videoURI) {
      const result = source(shareable[12]).downloadMediaAssetWithContentType(source.videoURI, callback3.VIDEO, source.contentType);
      const obj2 = source(shareable[12]);
    } else if (null != source.sourceURI) {
      const result1 = source(shareable[13]).urlMatchesFileExtension(source.sourceURI, callback2);
      const obj3 = source(shareable[13]);
      const result2 = source(shareable[12]).downloadMediaAssetWithContentType(source.sourceURI, result1 ? tmp15.GIF : tmp15.IMAGE, source.contentType);
      const obj4 = source(shareable[12]);
    }
  }, items2);
  const items3 = [source];
  const callback1 = channelId.useCallback(() => {
    let obj = disableDownload(shareable[11]);
    obj.hideActionSheet();
    obj = { source };
    source(shareable[14]).showShareActionSheet(obj, callback1.MEDIA_VIEWER);
    const MediaViewerAnalytics = source(shareable[15]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMediaViewerShareButtonTapped();
  }, items3);
  const items4 = [source];
  const callback2 = channelId.useCallback(() => {
    let obj = disableDownload(shareable[11]);
    obj.hideActionSheet();
    if (null != source.sourceURI) {
      obj = {
        href: source.sourceURI,
        onConfirm() {
            disableDownload(shareable[17]).openURL(outer1_0.sourceURI);
          }
      };
      source(shareable[16]).handleClick(obj);
      const obj2 = source(shareable[16]);
    }
  }, items4);
  const items5 = [stateFromStores, source];
  const callback3 = channelId.useCallback(() => {
    let obj = disableDownload(shareable[11]);
    obj.hideActionSheet();
    if (null != stateFromStores) {
      if ("embed" !== source.accessoryType) {
        const attachmentId = source.attachmentId;
        if (null != attachmentId) {
          obj = { message: stateFromStores, source: "media-viewer", initialSelectedDestinations: undefined };
          obj = {};
          const items = [attachmentId];
          obj.onlyAttachmentIds = items;
          obj.forwardOptions = obj;
          source(shareable[18]).openForwardModal(obj);
          const obj5 = source(shareable[18]);
        }
      } else {
        let obj1 = source(shareable[18]);
        obj1 = { message: stateFromStores, source: "media-viewer", initialSelectedDestinations: undefined };
        const obj2 = {};
        const items1 = [source.mediaIndex];
        obj2.onlyEmbedIndices = items1;
        obj1.forwardOptions = obj2;
        obj1.openForwardModal(obj1);
      }
    }
  }, items5);
  const items6 = [source];
  const callback4 = channelId.useCallback(() => {
    let channelId;
    let messageId;
    let obj = disableDownload(shareable[11]);
    obj.hideActionSheet();
    let tmp2 = null != stateFromStores.getChannel(source.channelId);
    if (tmp2) {
      tmp2 = null != source.channelId;
    }
    if (tmp2) {
      tmp2 = null != source.messageId;
    }
    if (tmp2) {
      obj = {};
      ({ channelId, messageId } = source);
      const obj2 = source(shareable[19]);
      const obj4 = source(shareable[20]);
      obj.navigationReplace = !source(shareable[20]).getChatLayout().isChatLockedOpen || undefined;
      obj2.transitionToMessage(channelId, messageId, obj);
      const tmp8 = !source(shareable[20]).getChatLayout().isChatLockedOpen || undefined;
    }
  }, items6);
  const items7 = [source];
  const callback5 = channelId.useCallback(() => {
    let obj = disableDownload(shareable[11]);
    obj.hideActionSheet();
    const attachmentId = source.attachmentId;
    let tmp2 = null != attachmentId;
    if (tmp2) {
      tmp2 = null != source.channelId;
    }
    if (tmp2) {
      tmp2 = null != source.messageId;
    }
    if (tmp2) {
      obj = {};
      ({ messageId: obj3.messageId, channelId: obj3.channelId } = source);
      obj.attachmentId = attachmentId;
      disableDownload(shareable[11]).openLazy(source(shareable[22])(shareable[21], shareable.paths), callback4, obj);
      const obj2 = disableDownload(shareable[11]);
    }
  }, items7);
  let obj3 = source(shareable[10]);
  canForwardMessage = source(shareable[23]).useCanForwardMessage(stateFromStores);
  if (canForwardMessage) {
    let tmp11 = null != source.attachmentId;
    if (!tmp11) {
      tmp11 = "embed" === source.accessoryType;
    }
    canForwardMessage = tmp11;
  }
  let obj5 = source(shareable[23]);
  videoSourceType = source(shareable[12]).getVideoSourceType(source);
  const items8 = [disableDownload, callback3, callback4, callback2, callback5, callback, callback1, obscure, shareable, canForwardMessage, videoSourceType, , ];
  ({ channelId: arr9[11], messageId: arr9[12] } = source);
  return channelId.useMemo(() => {
    const items = [];
    let tmp = true !== disableDownload;
    if (tmp) {
      tmp = videoSourceType !== source(shareable[12]).VideoSourceType.WEB_FILE_IFRAME;
    }
    if (tmp) {
      let obj = { IconComponent: source(shareable[24]).DownloadIcon };
      const intl = source(shareable[25]).intl;
      obj.label = intl.string(source(shareable[25]).t["R3BPH+"]);
      obj.action = callback;
      items.push(obj);
    }
    if (canForwardMessage) {
      obj = { IconComponent: disableDownload(shareable[26]) };
      const intl2 = source(shareable[25]).intl;
      obj.label = intl2.string(source(shareable[25]).t.I3ltXO);
      obj.action = callback3;
      items.push(obj);
    }
    if (shareable) {
      obj = { IconComponent: source(shareable[27]).ShareIcon };
      const intl3 = source(shareable[25]).intl;
      obj.label = intl3.string(source(shareable[25]).t.RDE0Sc);
      obj.action = callback1;
      items.push(obj);
    }
    const obj1 = { IconComponent: source(shareable[28]).WindowLaunchIcon };
    const intl4 = source(shareable[25]).intl;
    obj1.label = intl4.string(source(shareable[25]).t.q5jLJB);
    obj1.action = callback2;
    items.push(obj1);
    let tmp19 = null != source.channelId;
    if (tmp19) {
      tmp19 = null != source.messageId;
    }
    if (tmp19) {
      const obj2 = { IconComponent: source(shareable[29]).ChatArrowRightIcon };
      const intl5 = source(shareable[25]).intl;
      obj2.label = intl5.string(source(shareable[25]).t["+TSRGD"]);
      obj2.action = callback4;
      items.push(obj2);
    }
    if (obscure) {
      const obj3 = { IconComponent: source(shareable[30]).ImageWarningIcon };
      const intl6 = source(shareable[25]).intl;
      obj3.label = intl6.string(source(shareable[25]).t.ZH7P2h);
      obj3.action = callback5;
      items.push(obj3);
    }
    return items;
  }, items8);
}
({ AnalyticsSections: closure_8, GIF_RE_IOS: closure_9, MediaType: closure_10 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/media_viewer/native/components/MediaShareActions.tsx");

export default function MediaShareActionSheet(source) {
  let obj = { source: source.source, disableDownload: source.disableDownload, shareable: source.shareable };
  obj = {};
  obj = { hasIcons: true };
  obj.children = useMediaShareActions(obj).map((IconComponent) => {
    let obj = {};
    obj = { IconComponent: IconComponent.IconComponent };
    obj.icon = outer1_12(outer1_0(outer1_2[32]).ActionSheetRow.Icon, obj);
    ({ action: obj.onPress, label: obj.label } = IconComponent);
    return outer1_12(outer1_0(outer1_2[32]).ActionSheetRow, obj, arg1);
  });
  obj.children = jsx(require(5500) /* ActionSheetRowIcon */.ActionSheetRow.Group, { hasIcons: true });
  return jsx(require(5498) /* ActionSheet */.ActionSheet, { hasIcons: true });
};
export { useMediaShareActions };
