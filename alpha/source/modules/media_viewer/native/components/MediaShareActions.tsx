// Module ID: 7774
// Function ID: 7775
// Name: MediaShareActions
// Dependencies: [19, 7775, 2044, 5049, 7800, 1074, 7016, 21, 563, 7015, 7574, 4796, 7705, 4979, 7801, 7701, 6605, 4524, 7810, 4522, 11162, 4840, 4691, 11158, 1980, 11142, 7805, 4777, 1115, 11171, 12452, 4771, 12495, 11222, 5388, 6613, 6615, 2]
// Exports: default

// Module 7774 (MediaShareActions)
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ToastUtils from "ToastUtils" /* 4524 */;
import useChatLayout from "useChatLayout" /* 4691 */;
import LinkIcon from "LinkIcon" /* 4771 */;
import DownloadIcon from "DownloadIcon" /* 4777 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import transitionToChannel from "transitionToChannel" /* 4840 */;
import MediaFormatTesters from "MediaFormatTesters" /* 4979 */;
import ImageWarningIcon from "ImageWarningIcon" /* 5388 */;
import ClipboardUtils from "ClipboardUtils" /* 6605 */;
import ActionSheet from "ActionSheet" /* 6613 */;
import ActionSheetRow from "ActionSheetRow" /* 6615 */;
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 7701 */;
import MediaSourceUtil from "MediaSourceUtil" /* 7705 */;
import showShareActionSheet from "showShareActionSheet" /* 7801 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 7810 */;
import ForwardModalUtils from "ForwardModalUtils" /* 11162 */;
import ForwardingIconDefault from "ForwardingIcon" /* 11171 */;
import ChatArrowRightIcon from "ChatArrowRightIcon" /* 11222 */;
import ShareIcon from "ShareIcon" /* 12452 */;
import WindowLaunchIcon from "WindowLaunchIcon" /* 12495 */;
import noop from "module_19" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 7775 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import MessageStore from "MessageStore" /* 5049 */;
import MessagePreviewStore from "MessagePreviewStore" /* 7800 */;

require = fn;
function useMediaShareActions(source) {
  source = source.source;
  let disableDownload = source.disableDownload;
  const shareable = source.shareable;
  let obscure;
  let action;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  let canForwardMessage;
  let videoSourceType;
  let mobileMediaViewerShareExperimentEnabled;
  const channelId = source.channelId;
  const messageId = source.messageId;
  let items = [obscure, messageId, action];
  let items1 = [channelId, messageId];
  const stateFromStores = source(shareable[8]).useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != channelId) {
      tmp2 = null;
      if (null != messageId) {
        let message = MessageStore.getMessage(tmp, tmp3);
        if (message == null) {
          message = MessagePreviewStore.getMessage(tmp3);
        }
        if (message == null) {
          message = ICYMIStore.getMessage(tmp3);
        }
        tmp2 = message;
      }
    }
    return tmp2;
  }, items1);
  let obj = source(shareable[8]);
  let result = source(shareable[9]).shouldAgeVerifyForExplicitMedia();
  let obj2 = source(shareable[9]);
  obscure = source(shareable[10]).getAttachmentObscurityProps({ attachment: source, shouldObscureSpoiler: true, enabledContentHarmTypeFlags: 0, shouldAgeVerify: result }).obscure;
  const items2 = [source];
  action = channelId.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (null != source.videoURI) {
      const result = MediaSourceUtil.downloadMediaAssetWithContentType(tmp3.videoURI, constants2.VIDEO, tmp3.contentType);
    } else if (null != tmp3.sourceURI) {
      const result1 = MediaFormatTesters.urlMatchesFileExtension(tmp3.sourceURI, React7);
      const result2 = MediaSourceUtil.downloadMediaAssetWithContentType(tmp3.sourceURI, result1 ? tmp11.GIF : tmp11.IMAGE, tmp3.contentType);
    }
  }, items2);
  const items3 = [source];
  const callback1 = channelId.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    showShareActionSheet.showShareActionSheet({ source }, constants.MEDIA_VIEWER);
    const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMediaViewerShareButtonTapped();
  }, items3);
  let uri = source.shareURI;
  if (uri == null) {
    uri = source.videoURI;
  }
  if (uri == null) {
    uri = source.sourceURI;
  }
  if (uri == null) {
    uri = source.uri;
  }
  const items4 = [uri];
  callback2 = obj4.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    ClipboardUtils.copy(uri);
    ToastUtils.presentLinkCopied();
    const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMediaViewerLinkCopied({ href: uri, success: true });
  }, items4);
  const items5 = [source];
  callback3 = obj4.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (null != source.sourceURI) {
      const obj3 = {
        href: tmp3.sourceURI,
        onConfirm() {
            disableDownload(shareable[19]).openURL(sourceURI.sourceURI);
          }
      };
      MaskedLinkUtils.handleClick(obj3);
    }
  }, items5);
  const items6 = [stateFromStores, source];
  callback4 = obj4.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (null != stateFromStores) {
      if ("embed" !== source.accessoryType) {
        const attachmentId = tmp8.attachmentId;
        if (null != attachmentId) {
          const obj3 = { message: tmp3, source: "media-viewer", initialSelectedDestinations: "Array", forwardOptions: "MESSAGE_REACTION_ADD" };
          const obj4 = { onlyAttachmentIds: null };
          const items = [attachmentId];
          obj4.onlyAttachmentIds = items;
          obj3.forwardOptions = obj4;
          ForwardModalUtils.openForwardModal(obj3);
        }
      } else {
        const obj6 = { message: tmp3, source: "media-viewer", initialSelectedDestinations: "Array", forwardOptions: "MESSAGE_REACTION_ADD" };
        const obj7 = { onlyEmbedIndices: null };
        const items1 = [tmp8.mediaIndex];
        obj7.onlyEmbedIndices = items1;
        obj6.forwardOptions = obj7;
        ForwardModalUtils.openForwardModal(obj6);
      }
    }
  }, items6);
  const items7 = [source];
  callback5 = obj4.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (tmp4) {
      ({ channelId, messageId } = tmp3);
      const obj2 = transitionToChannel;
      const isChatLockedOpen = useChatLayout.getChatLayout().isChatLockedOpen;
      const obj4 = { navigationReplace: !isChatLockedOpen };
      obj2.transitionToMessage(channelId, messageId, obj4);
      const tmp6 = !isChatLockedOpen;
    }
  }, items7);
  const items8 = [source];
  callback6 = obj4.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const attachmentId = source.attachmentId;
    if (tmp5) {
      const obj2 = { messageId: null, channelId: null, attachmentId: null };
      ({ messageId: obj3.messageId, channelId: obj3.channelId } = tmp4);
      obj2.attachmentId = attachmentId;
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11158, dependencyMap.paths), closure_11, obj2);
      const tmpResult = ActionSheetActionCreatorsDefault;
    }
  }, items8);
  let obj3 = source(shareable[10]);
  canForwardMessage = source(shareable[25]).useCanForwardMessage(stateFromStores);
  if (canForwardMessage) {
    let tmp13 = null != source.attachmentId;
    if (!tmp13) {
      tmp13 = "embed" === source.accessoryType;
    }
    canForwardMessage = tmp13;
  }
  let tmpResult = source(shareable[25]);
  videoSourceType = source(shareable[12]).getVideoSourceType(source);
  const tmpResult3 = source(shareable[12]);
  mobileMediaViewerShareExperimentEnabled = source(shareable[26]).useMobileMediaViewerShareExperimentEnabled("mediaViewerCopyLink");
  const items9 = [mobileMediaViewerShareExperimentEnabled, disableDownload, callback2, callback4, callback5, callback3, callback6, action, callback1, obscure, shareable, canForwardMessage, videoSourceType, , , ];
  ({ channelId: arr10[13], messageId: arr10[14], disableDownload: arr10[15] } = source);
  return channelId.useMemo(() => {
    disableDownload = true === disableDownload;
    if (!disableDownload) {
      disableDownload = videoSourceType === MediaSourceUtil.VideoSourceType.WEB_FILE_IFRAME;
    }
    if (!disableDownload) {
      disableDownload = source.disableDownload;
    }
    const items = [];
    if (!disableDownload) {
      const obj = { IconComponent: DownloadIcon.DownloadIcon, label: null, action: null };
      const intl = util.intl;
      obj.label = intl.string(util.t["R3BPH+"]);
      obj.action = action;
      items.push(obj);
    }
    if (canForwardMessage) {
      const obj2 = { IconComponent: ForwardingIconDefault, label: null, action: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.I3ltXO);
      obj2.action = callback4;
      items.push(obj2);
    }
    let tmp21 = shareable;
    if (shareable) {
      const obj3 = { IconComponent: ShareIcon.ShareIcon, label: null, action: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(util.t.RDE0Sc);
      obj3.action = callback1;
      items.push(obj3);
    }
    if (tmp21) {
      tmp21 = mobileMediaViewerShareExperimentEnabled;
    }
    if (tmp21) {
      const obj4 = { IconComponent: LinkIcon.LinkIcon, label: null, action: null };
      const intl4 = util.intl;
      obj4.label = intl4.string(util.t["92CPQ+"]);
      obj4.action = callback2;
      items.push(obj4);
    }
    const obj5 = { IconComponent: WindowLaunchIcon.WindowLaunchIcon, label: null, action: null };
    const intl5 = util.intl;
    obj5.label = intl5.string(util.t.q5jLJB);
    obj5.action = callback3;
    items.push(obj5);
    if (tmp39) {
      const obj6 = { IconComponent: ChatArrowRightIcon.ChatArrowRightIcon, label: null, action: null };
      const intl6 = util.intl;
      obj6.label = intl6.string(util.t["+TSRGD"]);
      obj6.action = callback5;
      items.push(obj6);
    }
    if (obscure) {
      const obj7 = { IconComponent: ImageWarningIcon.ImageWarningIcon, label: null, action: null };
      const intl7 = util.intl;
      obj7.label = intl7.string(util.t.ZH7P2h);
      obj7.action = callback6;
      items.push(obj7);
    }
    return items;
  }, items9);
}
const Constants = fn(1074);
({ AnalyticsSections: closure_8, GIF_RE_IOS: closure_9, MediaType: c10 } = Constants);
let closure_11 = fn(7016).EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaShareActions.tsx");

export default function MediaShareActionSheet(source) {
  const obj2 = { children: null };
  const arr = useMediaShareActions({ source: source.source, disableDownload: source.disableDownload, shareable: source.shareable });
  let obj = { source: source.source, disableDownload: source.disableDownload, shareable: source.shareable };
  obj2.children = jsx(ActionSheetRow.ActionSheetRow.Group, {
    hasIcons: true,
    children: useMediaShareActions({ source: source.source, disableDownload: source.disableDownload, shareable: source.shareable }).map((IconComponent, index) => {
      const obj = { icon: jsx(ActionSheetRow.ActionSheetRow.Icon, { IconComponent: IconComponent.IconComponent }), onPress: null, label: null };
      ({ action: obj.onPress, label: obj.label } = IconComponent);
      return jsx(ActionSheetRow.ActionSheetRow, { icon: jsx(ActionSheetRow.ActionSheetRow.Icon, { IconComponent: IconComponent.IconComponent }), onPress: null, label: null }, index);
    })
  });
  return jsx(ActionSheet.ActionSheet, { children: null });
};
export { useMediaShareActions };
