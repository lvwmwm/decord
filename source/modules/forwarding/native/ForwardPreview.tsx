// Module ID: 9896
// Function ID: 76609
// Name: MessagePreview
// Dependencies: [31, 27, 33, 4130, 689, 4066, 7808, 7621, 9293, 9897, 1881, 9898, 22, 9899, 1212, 9901, 9851, 4644, 9657, 5085, 1449, 7873, 4126, 2684, 7824, 2]
// Exports: ForwardPreview

// Module 9896 (MessagePreview)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function MessagePreview(content) {
  let attachmentCount;
  let message;
  ({ message, attachmentCount } = content);
  let importDefault;
  if (attachmentCount > 0) {
    let TEXT_SUBTLE = importDefault(689).colors.TEXT_DEFAULT;
  } else {
    TEXT_SUBTLE = importDefault(689).colors.TEXT_SUBTLE;
  }
  let obj = attachmentCount(4130);
  obj = { seeMoreLabelColor: TEXT_SUBTLE };
  const tmp6 = obj.createNativeStyleProperties(obj)(importDefault(4066)());
  importDefault = tmp6;
  const items = [tmp6.seeMoreLabelColor, attachmentCount];
  const callback = React.useCallback((message) => {
    message.contextType = attachmentCount(outer1_2[6]).MessageContextType.SEARCH;
    const obj = { numberOfLines: null, expandable: false, seeMoreLabel: "..." };
    let num = 2;
    if (attachmentCount > 0) {
      num = 1;
    }
    obj.numberOfLines = num;
    obj.seeMoreLabelColor = _undefined.seeMoreLabelColor;
    message.truncation = obj;
    message.message.edited = "";
  }, items);
  const memo = React.useMemo(() => {
    let tmp = _undefined(outer1_2[7]);
    tmp = new tmp();
    tmp.setOptions({ renderEmbeds: false, renderReactions: false, inlineEmbedMedia: false, inlineAttachmentMedia: false, animateEmoji: true, gifAutoPlay: false, timestampHourCycle: 0, renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderComponents: false, renderThreadEmbeds: false, renderReplies: false, renderCommunicationDisabled: false, renderAttachments: false, renderExecutedCommands: false, renderPolls: false, renderSharedClientTheme: false, renderForumPostActions: false, ignoreMentioned: false, ignoreEmbedDescriptionCache: false, forceHideSimpleEmbedContent: false, enableSwipeActions: false, useAlternateEmbedColors: false });
    return tmp;
  }, []);
  obj = { pointerEvents: "none", horizontalOffset: 0, modifyRow: callback };
  const obj1 = { messageSnapshots: [], content: content.contentMessage.content };
  let tmp = importDefault(4066)();
  obj.message = message.merge(obj1);
  obj.rowGenerator = memo;
  return callback(importDefault(9293), obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12, alignItems: "center" };
_createForOfIteratorHelperLoose.forwardPreview = _createForOfIteratorHelperLoose;
let obj1 = { width: 4, height: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderRadius: 2 };
_createForOfIteratorHelperLoose.quote = obj1;
_createForOfIteratorHelperLoose.contentWrapper = { flexDirection: "column", flex: 1, paddingVertical: 4, gap: 6 };
let obj2 = { position: "relative", width: 56, height: 56, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.attachmentPreview = obj2;
_createForOfIteratorHelperLoose.attachmentPreviewVideo = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK };
_createForOfIteratorHelperLoose.videoThumbnail = { position: "absolute", top: 0, left: 0, opacity: 0.6 };
_createForOfIteratorHelperLoose.playIcon = { position: "absolute", top: 0, left: 0, margin: 16, zIndex: 100 };
_createForOfIteratorHelperLoose.attachmentPreviewOverflow = { position: "relative" };
let obj4 = { position: "absolute", bottom: 0, right: 0, alignItems: "center", justifyContent: "center", textAlign: "center", width: 24, height: 24, lineHeight: 24, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.overflowCount = obj4;
_createForOfIteratorHelperLoose.attachmentRow = { flexDirection: "row", alignItems: "center", gap: 6 };
_createForOfIteratorHelperLoose.largeIcon = { width: 20, height: 20 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK };
const result = require("jsxProd").fileFinishedImporting("modules/forwarding/native/ForwardPreview.tsx");

export const ForwardPreview = function ForwardPreview(message) {
  let attachments;
  let channel;
  let contentMessage;
  let embeds;
  let forwardOptions;
  let hasContent;
  message = message.message;
  ({ channel, forwardOptions } = message);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(9897) /* useForwardPreviewContent */;
  const forwardPreviewContent = obj.useForwardPreviewContent({ message, channel, forwardOptions });
  ({ attachments, embeds, hasContent, contentMessage } = forwardPreviewContent);
  let checkpointData = null;
  if (contentMessage.components.length > 0) {
    checkpointData = null;
    if (contentMessage.components[0].type === require(1881) /* PermissionOverwriteType */.ComponentType.CHECKPOINT_CARD) {
      checkpointData = contentMessage.components[0].checkpointData;
    }
  }
  let tmp6 = null;
  if (null != checkpointData) {
    const cardId = checkpointData.cardId;
    let num3 = 0;
    if (null != cardId) {
      num3 = cardId;
    }
    tmp6 = require(9898) /* items */.CHECKPOINT_PERSONA_COLORS[num3];
  }
  if (null != tmp6) {
    const primaryColor = tmp6.primaryColor;
  }
  if (attachments.length > 0) {
    let obj1 = require(22) /* apply */;
    const countByResult = obj1.countBy(attachments, (proxy_url) => outer1_0(outer1_2[13]).getMosaicMediaTypeForAttachment(proxy_url, true));
    const IMAGE = countByResult.IMAGE;
    let num5 = 0;
    if (null != IMAGE) {
      num5 = IMAGE;
    }
    const VIDEO = countByResult.VIDEO;
    let num6 = 0;
    if (null != VIDEO) {
      num6 = VIDEO;
    }
    if (num5 > 0) {
      if (num6 > 0) {
        const intl4 = require(1212) /* getSystemLocale */.intl;
        obj = { image_count: num5, video_count: num6 };
        let formatToPlainStringResult = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.Lr0Top, obj);
        let AttachmentIcon = require(9901) /* ImagesIcon */.ImagesIcon;
      }
      if (num6 > 0) {
        if (length === num6) {
          obj = {};
          const items = [, ];
          ({ attachmentPreview: arr[0], attachmentPreviewVideo: arr[1] } = tmp);
          obj.style = items;
          obj1 = { style: tmp.videoThumbnail };
          const obj2 = {};
          let obj17 = importDefault(1449);
          obj2.uri = obj17.getMobileOptimizedSrc(attachments[0].proxy_url, 56, 56, "png");
          obj1.source = obj2;
          obj1.width = 56;
          obj1.height = 56;
          const items1 = [callback(importDefault(5085), obj1), ];
          const obj3 = { style: tmp.playIcon, size: "md", color: "white" };
          items1[1] = callback(require(9851) /* CirclePlayIcon */.CirclePlayIcon, obj3);
          obj.children = items1;
          let tmp11 = callback2(View, obj);
          let tmp9 = formatToPlainStringResult;
          let tmp10 = AttachmentIcon;
          const tmp47 = importDefault(5085);
        }
      }
      if (length > 0) {
        const obj4 = { style: tmp.attachmentPreview };
        const obj5 = { source: null, width: 56, height: 56 };
        const obj6 = {};
        let obj13 = importDefault(1449);
        obj6.uri = obj13.getMobileOptimizedSrc(attachments[0].proxy_url, 56, 56);
        obj5.source = obj6;
        obj4.children = callback(importDefault(5085), obj5);
        tmp11 = callback(View, obj4);
        tmp9 = formatToPlainStringResult;
        tmp10 = AttachmentIcon;
        const tmp41 = importDefault(5085);
      } else {
        const first = embeds[0];
        let proxyURL;
        if (null != first) {
          const thumbnail = first.thumbnail;
          if (null != thumbnail) {
            proxyURL = thumbnail.proxyURL;
          }
        }
        tmp9 = formatToPlainStringResult;
        tmp10 = AttachmentIcon;
        tmp11 = null;
        if (null != proxyURL) {
          const obj7 = { style: tmp.attachmentPreview };
          const obj8 = { source: null, width: 56, height: 56 };
          let obj9 = {};
          obj9 = importDefault(1449);
          obj9.uri = obj9.getMobileOptimizedSrc(embeds[0].thumbnail.proxyURL, 56, 56);
          obj8.source = obj9;
          obj7.children = callback(importDefault(5085), obj8);
          tmp11 = callback(View, obj7);
          tmp9 = formatToPlainStringResult;
          tmp10 = AttachmentIcon;
          const tmp35 = importDefault(5085);
        }
      }
    }
    if (num6 > 0) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      const obj10 = { count: num6 };
      formatToPlainStringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.SJ6pPX, obj10);
      AttachmentIcon = require(9851) /* CirclePlayIcon */.CirclePlayIcon;
    } else if (num5 > 0) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const obj11 = { count: num5 };
      if (1 === num5) {
        let ImagesIcon = require(4644) /* ImageIcon */.ImageIcon;
      } else {
        ImagesIcon = require(9901) /* ImagesIcon */.ImagesIcon;
      }
      AttachmentIcon = ImagesIcon;
      formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.h4pFfU, obj11);
      const formatToPlainStringResult1 = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.h4pFfU, obj11);
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      const obj12 = { count: length };
      formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["89ihS8"], obj12);
      AttachmentIcon = require(9657) /* AttachmentIcon */.AttachmentIcon;
    }
  } else {
    tmp9 = null;
    tmp10 = null;
    tmp11 = null;
  }
  let tmp51 = tmp11;
  if (attachments.length > 1) {
    tmp51 = tmp11;
    if (null != tmp11) {
      obj13 = { shape: require(7873) /* SolidCutout */.CutoutShape.RoundedRect, x: 28, y: 28, width: 32, height: 32, cornerRadius: 12 };
      const obj14 = { style: tmp.attachmentPreviewOverflow };
      const obj15 = {};
      const items2 = [obj13];
      obj15.cutouts = items2;
      obj15.children = tmp11;
      const items3 = [callback(importDefault(7873), obj15), ];
      const obj16 = { style: tmp.overflowCount, variant: "text-xs/semibold", color: "text-default" };
      const items4 = ["+", length - 1];
      obj16.children = items4;
      items3[1] = callback2(require(4126) /* Text */.Text, obj16);
      obj14.children = items3;
      tmp51 = callback2(View, obj14);
    }
  }
  obj17 = { style: tmp.forwardPreview };
  const items5 = [callback(View, { style: tmp.quote }), , , ];
  const obj19 = { style: tmp.contentWrapper };
  let tmp54 = null != checkpointData;
  if (tmp54) {
    const obj20 = { variant: "text-md/medium" };
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj20.children = intl5.string(importDefault(2684).goiR2u);
    tmp54 = callback(require(4126) /* Text */.Text, obj20);
  }
  const items6 = [tmp54, , ];
  let tmp59 = hasContent;
  if (hasContent) {
    const obj21 = { message, contentMessage, attachmentCount: length };
    tmp59 = callback(MessagePreview, obj21);
  }
  items6[1] = tmp59;
  let tmp63Result = length > 0;
  if (tmp63Result) {
    const obj22 = { style: tmp.attachmentRow };
    let tmp66Result = null != tmp10;
    if (tmp66Result) {
      const obj23 = {};
      let str3 = "custom";
      if (hasContent) {
        str3 = "sm";
      }
      obj23.size = str3;
      obj23.style = !hasContent && tmp.largeIcon;
      obj23.color = "text-muted";
      tmp66Result = callback(tmp10, obj23);
      const tmp66 = callback;
    }
    const items7 = [tmp66Result, ];
    let tmp68Result = null != tmp9;
    if (tmp68Result) {
      const obj24 = {};
      let str5 = "text-md/medium";
      if (hasContent) {
        str5 = "text-sm/medium";
      }
      obj24.variant = str5;
      obj24.color = "text-muted";
      obj24.children = tmp9;
      tmp68Result = callback(require(4126) /* Text */.Text, obj24);
      const tmp68 = callback;
    }
    items7[1] = tmp68Result;
    obj22.children = items7;
    tmp63Result = callback2(View, obj22);
    const tmp63 = callback2;
    const tmp64 = View;
  }
  items6[2] = tmp63Result;
  obj19.children = items6;
  items5[1] = callback2(View, obj19);
  items5[2] = tmp51;
  let tmp72Result = null != checkpointData;
  if (tmp72Result) {
    const obj25 = { style: tmp.attachmentPreview };
    const obj26 = { style: null, width: 56, height: 56 };
    const obj27 = { backgroundColor: primaryColor };
    obj26.style = obj27;
    const obj28 = {};
    const tmp72 = callback;
    const tmp73 = View;
    const tmp74 = callback;
    const tmp77 = importDefault(5085);
    const cardId2 = checkpointData.cardId;
    let num35 = 0;
    if (null != cardId2) {
      num35 = cardId2;
    }
    obj28.uri = require(7824) /* items */.getCardAssetUrl(num35);
    obj26.source = obj28;
    obj25.children = tmp74(tmp77, obj26);
    tmp72Result = tmp72(tmp73, obj25);
    const obj32 = require(7824) /* items */;
  }
  items5[3] = tmp72Result;
  obj17.children = items5;
  return callback2(View, obj17);
};
