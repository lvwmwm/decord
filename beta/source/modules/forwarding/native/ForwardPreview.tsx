// Module ID: 11191
// Function ID: 11192
// Name: ForwardPreview
// Dependencies: [19, 17, 21, 4836, 576, 4767, 7583, 7374, 8112, 11192, 5081, 12, 11193, 1115, 11195, 8176, 5401, 9571, 5899, 1478, 8276, 4832, 11197, 2]
// Exports: ForwardPreview

// Module 11191 (ForwardPreview)
import _mod12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import utils_ImageUtilsDefault from "utils/ImageUtils" /* 1478 */;
import useThemeDefault from "useTheme" /* 4767 */;
import Text_Text from "Text/Text" /* 4832 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 5081 */;
import FastImageDefault from "FastImage" /* 5899 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 7583 */;
import ChatItemDefault from "ChatItem" /* 8112 */;
import CirclePlayIcon from "CirclePlayIcon" /* 8176 */;
import ClipView from "ClipView" /* 8276 */;
import ForwardPreviewUtils from "ForwardPreviewUtils" /* 11192 */;
import MosaicMediaType from "MosaicMediaType" /* 11193 */;
import CheckpointForwardPreviewDefault from "CheckpointForwardPreview" /* 11197 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const ClipViewDefault = ClipView;
let importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
let size1;
let size2;
function MessagePreview(contentMessage) {
  let TEXT_SUBTLE;
  let attachmentCount;
  let closure_1;
  let message;
  let obj3;
  ({ message, attachmentCount } = contentMessage);
  importDefault = undefined;
  contentMessage = contentMessage.contentMessage;
  const tmp3 = useThemeDefault();
  if (attachmentCount > 0) {
    TEXT_SUBTLE = tmp(576).colors.TEXT_DEFAULT;
  } else {
    TEXT_SUBTLE = tmp(576).colors.TEXT_SUBTLE;
  }
  let obj = attachmentCount(4836);
  const tmp4 = obj.createNativeStyleProperties({ seeMoreLabelColor: TEXT_SUBTLE })(tmp3);
  importDefault = tmp4;
  const items = [tmp4.seeMoreLabelColor, attachmentCount];
  const callback = react.useCallback((message) => {
    message.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
    let num = 2;
    if (attachmentCount > 0) {
      num = 1;
    }
    const obj = { numberOfLines: num, expandable: false, seeMoreLabel: "...", seeMoreLabelColor: closure_1.seeMoreLabelColor };
    message.truncation = obj;
    message.message.edited = "";
  }, items);
  const memo = react.useMemo(() => {
    const obj = new closure_1(dependencyMap[7])();
    obj.setOptions({ renderEmbeds: false, renderReactions: false, inlineEmbedMedia: false, inlineAttachmentMedia: false, animateEmoji: true, gifAutoPlay: false, timestampHourCycle: 0, renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderComponents: false, renderThreadEmbeds: false, renderReplies: false, renderCommunicationDisabled: false, renderAttachments: false, renderExecutedCommands: false, renderPolls: false, renderSharedClientTheme: false, renderForumPostActions: false, ignoreMentioned: false, ignoreEmbedDescriptionCache: false, forceHideSimpleEmbedContent: false, enableSwipeActions: false, useAlternateEmbedColors: false });
    return obj;
  }, []);
  const obj2 = { pointerEvents: "none", horizontalOffset: 0, modifyRow: callback, message: message.merge(obj3), rowGenerator: memo };
  obj3 = { messageSnapshots: [], content: contentMessage.content };
  const tmpResult = ChatItemDefault;
  return closure_5(tmpResult, obj2);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = 56;
let createStyles = createStyles_mod;
let obj = { forwardPreview: obj2, quote: size, contentWrapper: { flexDirection: "column", flex: 1, paddingVertical: 4, gap: 6 }, attachmentPreview: size1, attachmentPreviewVideo: obj3, videoThumbnail: { position: "absolute", top: 0, left: 0, opacity: 0.6 }, playIcon: { position: "absolute", top: 0, left: 0, margin: 16, zIndex: 100 }, attachmentPreviewOverflow: { position: "relative" }, overflowCount: size2, attachmentRow: { flexDirection: "row", alignItems: "center", gap: 6 }, largeIcon: { width: 20, height: 20 } };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" };
createStyles = createStyles.createStyles;
size = { width: 4, height: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: 2 };
size1 = { position: "relative", width: 56, height: 56, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj3 = { backgroundColor: nativeDefault.colors.BLACK };
size2 = { position: "absolute", bottom: 0, right: 0, alignItems: "center", justifyContent: "center", textAlign: "center", width: 24, height: 24, lineHeight: 24, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardPreview.tsx");

export const ForwardPreview = function ForwardPreview(message) {
  let attachments;
  let channel;
  let contentMessage;
  let embeds;
  let forwardOptions;
  let hasContent;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj10;
  let obj11;
  let obj15;
  let obj19;
  let obj29;
  let obj5;
  let obj8;
  let size1;
  let size2;
  let tmp17;
  let tmp22;
  let tmp2Result2;
  let tmp6;
  let tmp7;
  let tmp8;
  message = message.message;
  ({ channel, forwardOptions } = message);
  const tmp = closure_8();
  let obj = ForwardPreviewUtils;
  const forwardPreviewContent = obj.useForwardPreviewContent({ message, channel, forwardOptions });
  ({ attachments, embeds, hasContent, contentMessage } = forwardPreviewContent);
  const obj2 = checkpoint_CheckpointMessageComponentUtils;
  const checkpointDataFromMessage = obj2.getCheckpointDataFromMessage(contentMessage);
  if (attachments.length > 0) {
    let formatToPlainStringResult;
    let AttachmentIcon;
    const tmp2Result = _mod12;
    const countByResult = tmp2Result.countBy(attachments, (proxy_url) => {
      const obj = MosaicMediaType;
      return obj.getMosaicMediaTypeForAttachment(proxy_url, true);
    });
    let num = countByResult.IMAGE;
    if (num == null) {
      num = 0;
    }
    let num2 = countByResult.VIDEO;
    if (num2 == null) {
      num2 = 0;
    }
    if (num > 0) {
      if (num2 > 0) {
        const intl4 = tmp2(1115).intl;
        const obj3 = { image_count: num, video_count: num2 };
        formatToPlainStringResult = intl4.formatToPlainString(tmp2(1115).t.Lr0Top, obj3);
        AttachmentIcon = tmp2(11195).ImagesIcon;
      }
      if (num2 > 0) {
        if (attachments.length === num2) {
          const obj4 = { style: items, children: items1 };
          items = [, ];
          ({ attachmentPreview: arr[0], attachmentPreviewVideo: arr[1] } = tmp);
          size = { style: tmp.videoThumbnail, source: obj5, width: v56, height: v56 };
          obj5 = { uri: obj19.getMobileOptimizedSrc(attachments[0].proxy_url, v56, v56, "png") };
          const tmp28 = FastImageDefault;
          obj19 = utils_ImageUtilsDefault;
          items1 = [hasOwnProperty(tmp28, size), ];
          const obj6 = { style: tmp.playIcon, size: "md", color: "white" };
          items1[1] = hasOwnProperty(CirclePlayIcon.CirclePlayIcon, obj6);
          tmp6 = metroRequire(View, obj4);
          tmp7 = AttachmentIcon;
          tmp8 = formatToPlainStringResult;
        }
      }
      if (attachments.length > 0) {
        const obj7 = { style: tmp.attachmentPreview, children: hasOwnProperty(tmp22, size1) };
        size1 = { source: obj8, width: v56, height: v56 };
        obj8 = { uri: obj15.getMobileOptimizedSrc(attachments[0].proxy_url, v56, v56) };
        tmp22 = FastImageDefault;
        obj15 = utils_ImageUtilsDefault;
        tmp6 = hasOwnProperty(View, obj7);
        tmp7 = AttachmentIcon;
        tmp8 = formatToPlainStringResult;
      } else {
        const first = embeds[0];
        let proxyURL;
        if (first != null) {
          const thumbnail = first.thumbnail;
          if (thumbnail != null) {
            proxyURL = thumbnail.proxyURL;
          }
        }
        tmp6 = null;
        tmp7 = AttachmentIcon;
        tmp8 = formatToPlainStringResult;
        if (null != proxyURL) {
          const obj9 = { style: tmp.attachmentPreview, children: hasOwnProperty(tmp17, size2) };
          size2 = { source: obj10, width: v56, height: v56 };
          obj10 = { uri: obj11.getMobileOptimizedSrc(embeds[0].thumbnail.proxyURL, v56, v56) };
          tmp17 = FastImageDefault;
          obj11 = utils_ImageUtilsDefault;
          tmp6 = hasOwnProperty(View, obj9);
          tmp7 = AttachmentIcon;
          tmp8 = formatToPlainStringResult;
        }
      }
    }
    if (num2 > 0) {
      const intl3 = tmp2(1115).intl;
      const obj12 = { count: num2 };
      formatToPlainStringResult = intl3.formatToPlainString(tmp2(1115).t.SJ6pPX, obj12);
      AttachmentIcon = tmp2(8176).CirclePlayIcon;
    } else if (num > 0) {
      let ImagesIcon;
      const intl2 = tmp2(1115).intl;
      const obj13 = { count: num };
      const formatToPlainStringResult1 = intl2.formatToPlainString(intl5.t.h4pFfU, obj13);
      if (1 === num) {
        ImagesIcon = tmp2(5401).ImageIcon;
      } else {
        ImagesIcon = tmp2(11195).ImagesIcon;
      }
      AttachmentIcon = ImagesIcon;
      formatToPlainStringResult = formatToPlainStringResult1;
    } else {
      const intl = tmp2(1115).intl;
      const obj14 = { count: attachments.length };
      formatToPlainStringResult = intl.formatToPlainString(tmp2(1115).t["89ihS8"], obj14);
      AttachmentIcon = tmp2(9571).AttachmentIcon;
    }
  } else {
    tmp6 = null;
    tmp7 = null;
    tmp8 = null;
  }
  let tmp33 = tmp6;
  if (attachments.length > 1) {
    tmp33 = tmp6;
    if (null != tmp6) {
      const size3 = { shape: ClipView.CutoutShape.RoundedRect, x: 28, y: 28, width: 32, height: 32, cornerRadius: 12 };
      const obj17 = { cutouts: items2, children: tmp6 };
      items2 = [size3];
      const obj16 = { style: tmp.attachmentPreviewOverflow, children: items3 };
      items3 = [hasOwnProperty(ClipViewDefault, obj17), ];
      const obj18 = { style: tmp.overflowCount, variant: "text-xs/semibold", color: "text-default", children: items4 };
      items4 = ["+", attachments.length - 1];
      items3[1] = metroRequire(Text_Text.Text, obj18);
      tmp33 = metroRequire(View, obj16);
    }
  }
  const obj20 = { style: tmp.forwardPreview, children: items5 };
  items5 = [, , , ];
  const obj21 = { style: tmp.quote };
  items5[0] = hasOwnProperty(View, obj21);
  let tmp36Result = null != checkpointDataFromMessage;
  const obj22 = { style: tmp.contentWrapper, children: items6 };
  if (tmp36Result) {
    const obj23 = { variant: "text-md/medium", children: tmp2Result2.getCheckpointLabel(checkpointDataFromMessage) };
    const Text = tmp2(4832).Text;
    tmp2Result2 = checkpoint_CheckpointMessageComponentUtils;
    tmp36Result = tmp36(Text, obj23);
  }
  items6 = [tmp36Result, , ];
  let tmp36Result5 = hasContent;
  if (tmp36Result5) {
    const obj24 = { message, contentMessage, attachmentCount: attachments.length };
    tmp36Result5 = tmp36(MessagePreview, obj24);
  }
  items6[1] = tmp36Result5;
  let tmp34Result = length > 0;
  if (tmp34Result) {
    let tmp36Result6 = null != tmp7;
    const obj25 = { style: tmp.attachmentRow, children: items7 };
    if (tmp36Result6) {
      let str2 = "custom";
      if (hasContent) {
        str2 = "sm";
      }
      const obj26 = { size: str2, style: !hasContent && tmp.largeIcon, color: "text-muted" };
      tmp36Result6 = tmp36(tmp7, obj26);
    }
    items7 = [tmp36Result6, ];
    let tmp36Result7 = null != tmp8;
    if (tmp36Result7) {
      let str3 = "text-md/medium";
      const Text2 = tmp2(4832).Text;
      if (hasContent) {
        str3 = "text-sm/medium";
      }
      const obj27 = { variant: str3, color: "text-muted", children: tmp8 };
      tmp36Result7 = tmp36(Text2, obj27);
    }
    items7[1] = tmp36Result7;
    tmp34Result = tmp34(tmp35, obj25);
  }
  items6[2] = tmp34Result;
  items5[1] = metroRequire(View, obj22);
  items5[2] = tmp33;
  let tmp36Result8 = null != checkpointDataFromMessage;
  if (tmp36Result8) {
    const obj28 = { style: tmp.attachmentPreview, children: hasOwnProperty(CheckpointForwardPreviewDefault, obj29) };
    obj29 = { checkpointData: checkpointDataFromMessage };
    tmp36Result8 = tmp36(tmp35, obj28);
  }
  items5[3] = tmp36Result8;
  return metroRequire(View, obj20);
};
