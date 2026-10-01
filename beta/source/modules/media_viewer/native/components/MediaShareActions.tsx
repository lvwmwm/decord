// Module ID: 7782
// Function ID: 7783
// Name: MediaShareActions
// Dependencies: [19, 7783, 2045, 5056, 7808, 1074, 7021, 21, 563, 7020, 7582, 4800, 7713, 4986, 7809, 7709, 6610, 4527, 7818, 4525, 11176, 4847, 4695, 11172, 1981, 11156, 7813, 4781, 1115, 11185, 12470, 4775, 12512, 11236, 5395, 6618, 6620, 2]
// Exports: default

// Module 7782 (MediaShareActions)
import Fragment from "Fragment" /* 21 */;
import intl8 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import useChatLayout from "useChatLayout" /* 4695 */;
import LinkIcon from "LinkIcon" /* 4775 */;
import DownloadIcon from "DownloadIcon" /* 4781 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import MediaFormatTesters from "MediaFormatTesters" /* 4986 */;
import ImageWarningIcon from "ImageWarningIcon" /* 5395 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import ActionSheet2 from "ActionSheet" /* 6618 */;
import ActionSheetRow2 from "ActionSheetRow" /* 6620 */;
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants" /* 7021 */;
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 7709 */;
import MediaSourceUtil from "MediaSourceUtil" /* 7713 */;
import showShareActionSheet from "showShareActionSheet" /* 7809 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 7818 */;
import ForwardModalUtils from "ForwardModalUtils" /* 11176 */;
import ForwardingIconDefault from "ForwardingIcon" /* 11185 */;
import ChatArrowRightIcon from "ChatArrowRightIcon" /* 11236 */;
import ShareIcon from "ShareIcon" /* 12470 */;
import WindowLaunchIcon from "WindowLaunchIcon" /* 12512 */;
import react from "react" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 7783 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MessageStore from "MessageStore" /* 5056 */;
import MessagePreviewStore from "MessagePreviewStore" /* 7808 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
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
  let tmp = source;
  let tmp2 = shareable;
  let obj = source(shareable[8]);
  let items = [obscure, messageId, action];
  let items1 = [channelId, messageId];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  let obj2 = source(shareable[9]);
  let result = obj2.shouldAgeVerifyForExplicitMedia();
  let obj3 = source(shareable[10]);
  obscure = obj3.getAttachmentObscurityProps({ attachment: source, shouldObscureSpoiler: true, enabledContentHarmTypeFlags: 0, shouldAgeVerify: result }).obscure;
  let obj4 = channelId;
  const items2 = [source];
  action = channelId.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (null != source.videoURI) {
      const obj2 = MediaSourceUtil;
      const result = obj2.downloadMediaAssetWithContentType(tmp3.videoURI, callback2.VIDEO, tmp3.contentType);
    } else if (null != source.sourceURI) {
      const obj3 = MediaFormatTesters;
      const result1 = obj3.urlMatchesFileExtension(tmp3.sourceURI, React4);
      const obj4 = MediaSourceUtil;
      const result2 = obj4.downloadMediaAssetWithContentType(tmp3.sourceURI, result1 ? tmp11.GIF : tmp11.IMAGE, tmp3.contentType);
    }
  }, items2);
  const items3 = [source];
  const callback1 = channelId.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = showShareActionSheet;
    const obj3 = { source };
    obj2.showShareActionSheet(obj3, metroImportAll.MEDIA_VIEWER);
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
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = ClipboardUtils;
    obj2.copy(uri);
    const obj3 = ToastUtils;
    obj3.presentLinkCopied();
    const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
    const obj4 = { href: uri, success: true };
    const result = MediaViewerAnalytics.trackMediaViewerLinkCopied(obj4);
  }, items4);
  const items5 = [source];
  callback3 = obj4.useCallback(() => {
    let sourceURI;
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (null != source.sourceURI) {
      const obj3 = {
        href: tmp3.sourceURI,
        onConfirm() {
            const obj = disableDownload(shareable[19]);
            obj.openURL(sourceURI.sourceURI);
          }
      };
      const obj2 = MaskedLinkUtils;
      obj2.handleClick(obj3);
    }
  }, items5);
  const items6 = [stateFromStores, source];
  callback4 = obj4.useCallback(() => {
    let items;
    let items1;
    let obj4;
    let obj7;
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (null != stateFromStores) {
      if ("embed" !== source.accessoryType) {
        const attachmentId = tmp8.attachmentId;
        if (null != attachmentId) {
          const obj3 = { message: stateFromStores, source: "media-viewer", initialSelectedDestinations: "Array", forwardOptions: obj4 };
          obj4 = { onlyAttachmentIds: items };
          items = [attachmentId];
          const obj5 = ForwardModalUtils;
          obj5.openForwardModal(obj3);
        }
      } else {
        const obj6 = { message: stateFromStores, source: "media-viewer", initialSelectedDestinations: "Array", forwardOptions: obj7 };
        obj7 = { onlyEmbedIndices: items1 };
        items1 = [source.mediaIndex];
        const obj2 = ForwardModalUtils;
        obj2.openForwardModal(obj6);
      }
    }
  }, items6);
  const items7 = [source];
  callback5 = obj4.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const tmp4 = null != ChannelStore.getChannel(source.channelId) && null != source.channelId && null != source.messageId;
    if (tmp4) {
      const transitionToMessage = transitionToChannel.transitionToMessage;
      ({ channelId, messageId } = source);
      transitionToChannel;
      const obj2 = useChatLayout;
      const isChatLockedOpen = obj2.getChatLayout().isChatLockedOpen;
      const obj3 = { navigationReplace: !isChatLockedOpen };
      transitionToMessage(channelId, messageId, obj3);
    }
  }, items7);
  const items8 = [source];
  callback6 = obj4.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const attachmentId = source.attachmentId;
    const tmp2 = dependencyMap;
    const tmp5 = null != attachmentId && null != source.channelId && null != source.messageId;
    if (tmp5) {
      const obj2 = { messageId: null, channelId: null, attachmentId };
      ({ messageId: obj3.messageId, channelId: obj3.channelId } = source);
      const tmpResult = ActionSheetActionCreatorsDefault;
      tmpResult.openLazy(asyncRequire(11172, tmp2.paths), closure_11, obj2);
    }
  }, items8);
  let tmpResult = tmp(tmp2[25]);
  canForwardMessage = tmpResult.useCanForwardMessage(stateFromStores);
  if (canForwardMessage) {
    let tmp13 = null != source.attachmentId;
    if (!tmp13) {
      tmp13 = "embed" === source.accessoryType;
    }
    canForwardMessage = tmp13;
  }
  const tmpResult3 = tmp(tmp2[12]);
  videoSourceType = tmpResult3.getVideoSourceType(source);
  const tmpResult4 = tmp(tmp2[26]);
  mobileMediaViewerShareExperimentEnabled = tmpResult4.useMobileMediaViewerShareExperimentEnabled("mediaViewerCopyLink");
  const items9 = [mobileMediaViewerShareExperimentEnabled, disableDownload, callback2, callback4, callback5, callback3, callback6, action, callback1, obscure, shareable, canForwardMessage, videoSourceType, , , ];
  ({ channelId: arr10[13], messageId: arr10[14], disableDownload: arr10[15] } = source);
  return obj4.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    disableDownload = true === disableDownload || videoSourceType === MediaSourceUtil.VideoSourceType.WEB_FILE_IFRAME || source.disableDownload;
    const items = [];
    if (!disableDownload) {
      const push = items.push;
      const obj = { IconComponent: DownloadIcon.DownloadIcon, label: intl.string(intl8.t["R3BPH+"]), action };
      intl = intl8.intl;
      push(obj);
    }
    const tmp13 = canForwardMessage;
    if (tmp13) {
      const push2 = items.push;
      const obj2 = { IconComponent: ForwardingIconDefault, label: intl2.string(intl8.t.I3ltXO), action: callback4 };
      intl2 = intl8.intl;
      push2(obj2);
    }
    let tmp22 = shareable;
    if (tmp22) {
      const push3 = items.push;
      const obj3 = { IconComponent: ShareIcon.ShareIcon, label: intl3.string(intl8.t.RDE0Sc), action: callback1 };
      intl3 = intl8.intl;
      push3(obj3);
    }
    if (tmp22) {
      tmp22 = mobileMediaViewerShareExperimentEnabled;
    }
    if (tmp22) {
      const push4 = items.push;
      const obj4 = { IconComponent: LinkIcon.LinkIcon, label: intl4.string(intl8.t["92CPQ+"]), action: callback2 };
      intl4 = intl8.intl;
      push4(obj4);
    }
    const push5 = items.push;
    const obj5 = { IconComponent: WindowLaunchIcon.WindowLaunchIcon, label: intl5.string(intl8.t.q5jLJB), action: callback3 };
    intl5 = intl8.intl;
    push5(obj5);
    const tmp40 = null != source.channelId && null != source.messageId;
    if (tmp40) {
      const push6 = items.push;
      const obj6 = { IconComponent: ChatArrowRightIcon.ChatArrowRightIcon, label: intl6.string(intl8.t["+TSRGD"]), action: callback5 };
      intl6 = intl8.intl;
      push6(obj6);
    }
    const tmp49 = obscure;
    if (tmp49) {
      const push7 = items.push;
      const obj7 = { IconComponent: ImageWarningIcon.ImageWarningIcon, label: intl7.string(intl8.t.ZH7P2h), action: callback6 };
      intl7 = intl8.intl;
      push7(obj7);
    }
    return items;
  }, items9);
}
({ AnalyticsSections: metroImportAll, GIF_RE_IOS: c9, MediaType: c10 } = Constants);
let closure_11 = ExplicitMediaRedactionConstants.EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaShareActions.tsx");

export default function MediaShareActionSheet(source) {
  let obj = { source: source.source, disableDownload: source.disableDownload, shareable: source.shareable };
  const arr = useMediaShareActions(obj);
  const ActionSheet = ActionSheet2.ActionSheet;
  ({
    hasIcons: true,
    children: arr.map((IconComponent, index) => {
      const obj = { icon: null, onPress: null, label: null };
      const ActionSheetRow = ActionSheetRow2.ActionSheetRow;
      ({ action: obj.onPress, label: obj.label } = IconComponent);
      return <ActionSheetRow key={arg1} icon={null} onPress={null} label={null} />;
    })
  });
  const Group = ActionSheetRow2.ActionSheetRow.Group;
  return <ActionSheet>{null}</ActionSheet>;
};
export { useMediaShareActions };
