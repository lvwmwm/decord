// Module ID: 9888
// Function ID: 76544
// Name: MessagePreview
// Dependencies: [0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295]
// Exports: ForwardPreview

// Module 9888 (MessagePreview)
import closure_3 from "__exportStarResult1";
import { View } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function MessagePreview(content) {
  let attachmentCount;
  let message;
  ({ message, attachmentCount } = content);
  const arg1 = attachmentCount;
  let importDefault;
  if (attachmentCount > 0) {
    let TEXT_SUBTLE = importDefault(dependencyMap[4]).colors.TEXT_DEFAULT;
  } else {
    TEXT_SUBTLE = importDefault(dependencyMap[4]).colors.TEXT_SUBTLE;
  }
  let obj = arg1(dependencyMap[3]);
  obj = { seeMoreLabelColor: TEXT_SUBTLE };
  const tmp6 = obj.createNativeStyleProperties(obj)(importDefault(dependencyMap[5])());
  importDefault = tmp6;
  const items = [tmp6.seeMoreLabelColor, attachmentCount];
  const callback = React.useCallback((message) => {
    message.contextType = attachmentCount(closure_2[6]).MessageContextType.SEARCH;
    const obj = {};
    let num = 2;
    if (attachmentCount > 0) {
      num = 1;
    }
    obj.numberOfLines = num;
    obj.seeMoreLabelColor = tmp6.seeMoreLabelColor;
    message.truncation = obj;
    message.message.edited = "";
  }, items);
  const memo = React.useMemo(() => {
    let tmp = tmp6(closure_2[7]);
    tmp = new tmp();
    tmp.setOptions({});
    return tmp;
  }, []);
  obj = { -1034289856: "<string:553648726>", -1031355792: "<string:68987969>", modifyRow: callback };
  const obj1 = { messageSnapshots: [], content: content.contentMessage.content };
  const tmp = importDefault(dependencyMap[5])();
  obj.message = message.merge(obj1);
  obj.rowGenerator = memo;
  return callback(importDefault(dependencyMap[8]), obj);
}
({ jsx: closure_5, jsxs: closure_6 } = __exportStarResult1);
__exportStarResult1 = {};
__exportStarResult1 = { x: null, "Null": null, "Null": null, gap: require("__exportStarResult1").space.PX_12 };
__exportStarResult1.forwardPreview = __exportStarResult1;
__exportStarResult1.quote = { backgroundColor: require("__exportStarResult1").colors.BORDER_SUBTLE };
__exportStarResult1.contentWrapper = { padding: "EMTLOT", T: "ChatArrowRightIcon", container: "png", _desired: "SERVER_GUIDE_CHANNEL_SELECTED" };
const obj1 = { backgroundColor: require("__exportStarResult1").colors.BORDER_SUBTLE };
__exportStarResult1.attachmentPreview = { borderRadius: require("__exportStarResult1").radii.sm };
const obj2 = { borderRadius: require("__exportStarResult1").radii.sm };
__exportStarResult1.attachmentPreviewVideo = { backgroundColor: require("__exportStarResult1").colors.BLACK };
__exportStarResult1.videoThumbnail = { "Bool(false)": null, "Bool(false)": "stretch", "Bool(false)": "row", "Bool(false)": 10 };
__exportStarResult1.playIcon = {};
__exportStarResult1.attachmentPreviewOverflow = { position: "relative" };
const obj4 = { gap: "contain", padding: false, backgroundColor: require("__exportStarResult1").colors.BACKGROUND_MOD_STRONG, borderRadius: require("__exportStarResult1").radii.sm, marginTop: false, "Bool(true)": false, "Bool(true)": false, "Bool(true)": false, "Bool(true)": false, "Bool(true)": true, "Bool(true)": true, "Bool(true)": 0.5 };
__exportStarResult1.overflowCount = obj4;
__exportStarResult1.attachmentRow = {};
__exportStarResult1.largeIcon = { bhk: false, bic: "internal" };
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
const obj3 = { backgroundColor: require("__exportStarResult1").colors.BLACK };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/forwarding/native/ForwardPreview.tsx");

export const ForwardPreview = function ForwardPreview(message) {
  let attachments;
  let channel;
  let contentMessage;
  let embeds;
  let forwardOptions;
  let hasContent;
  message = message.message;
  ({ channel, forwardOptions } = message);
  const tmp = __exportStarResult1();
  let obj = arg1(dependencyMap[9]);
  const forwardPreviewContent = obj.useForwardPreviewContent({ message, channel, forwardOptions });
  ({ attachments, embeds, hasContent, contentMessage } = forwardPreviewContent);
  let checkpointData = null;
  if (contentMessage.components.length > 0) {
    checkpointData = null;
    if (contentMessage.components[0].type === arg1(dependencyMap[10]).ComponentType.CHECKPOINT_CARD) {
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
    tmp6 = arg1(dependencyMap[11]).CHECKPOINT_PERSONA_COLORS[num3];
  }
  if (null != tmp6) {
    const primaryColor = tmp6.primaryColor;
  }
  if (attachments.length > 0) {
    let obj1 = arg1(dependencyMap[12]);
    const countByResult = obj1.countBy(attachments, (proxy_url) => callback(closure_2[13]).getMosaicMediaTypeForAttachment(proxy_url, true));
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
        const intl4 = arg1(dependencyMap[14]).intl;
        obj = { image_count: num5, video_count: num6 };
        let formatToPlainStringResult = intl4.formatToPlainString(arg1(dependencyMap[14]).t.Lr0Top, obj);
        let AttachmentIcon = arg1(dependencyMap[15]).ImagesIcon;
      }
      if (num6 > 0) {
        if (length === num6) {
          obj = {};
          const items = [, ];
          ({ attachmentPreview: arr[0], attachmentPreviewVideo: arr[1] } = tmp);
          obj.style = items;
          obj1 = { style: tmp.videoThumbnail };
          const obj2 = {};
          let obj17 = importDefault(dependencyMap[20]);
          obj2.uri = obj17.getMobileOptimizedSrc(attachments[0].proxy_url, 56, 56, "png");
          obj1.source = obj2;
          obj1.width = 56;
          obj1.height = 56;
          const items1 = [callback(importDefault(dependencyMap[19]), obj1), ];
          const obj3 = { -318614188: null, 1020595765: "null", 1406296506: null, style: tmp.playIcon };
          items1[1] = callback(arg1(dependencyMap[16]).CirclePlayIcon, obj3);
          obj.children = items1;
          let tmp11 = callback2(View, obj);
          let tmp9 = formatToPlainStringResult;
          let tmp10 = AttachmentIcon;
          const tmp47 = importDefault(dependencyMap[19]);
        }
      }
      if (length > 0) {
        const obj4 = { style: tmp.attachmentPreview };
        const obj5 = {};
        const obj6 = {};
        let obj13 = importDefault(dependencyMap[20]);
        obj6.uri = obj13.getMobileOptimizedSrc(attachments[0].proxy_url, 56, 56);
        obj5.source = obj6;
        obj4.children = callback(importDefault(dependencyMap[19]), obj5);
        tmp11 = callback(View, obj4);
        tmp9 = formatToPlainStringResult;
        tmp10 = AttachmentIcon;
        const tmp41 = importDefault(dependencyMap[19]);
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
          const obj8 = {};
          let obj9 = {};
          obj9 = importDefault(dependencyMap[20]);
          obj9.uri = obj9.getMobileOptimizedSrc(embeds[0].thumbnail.proxyURL, 56, 56);
          obj8.source = obj9;
          obj7.children = callback(importDefault(dependencyMap[19]), obj8);
          tmp11 = callback(View, obj7);
          tmp9 = formatToPlainStringResult;
          tmp10 = AttachmentIcon;
          const tmp35 = importDefault(dependencyMap[19]);
        }
      }
    }
    if (num6 > 0) {
      const intl3 = arg1(dependencyMap[14]).intl;
      const obj10 = { count: num6 };
      formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[14]).t.SJ6pPX, obj10);
      AttachmentIcon = arg1(dependencyMap[16]).CirclePlayIcon;
    } else if (num5 > 0) {
      const intl2 = arg1(dependencyMap[14]).intl;
      const obj11 = { count: num5 };
      if (1 === num5) {
        let ImagesIcon = arg1(dependencyMap[17]).ImageIcon;
      } else {
        ImagesIcon = arg1(dependencyMap[15]).ImagesIcon;
      }
      AttachmentIcon = ImagesIcon;
      formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[14]).t.h4pFfU, obj11);
      const formatToPlainStringResult1 = intl2.formatToPlainString(arg1(dependencyMap[14]).t.h4pFfU, obj11);
    } else {
      const intl = arg1(dependencyMap[14]).intl;
      const obj12 = { count: length };
      formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[14]).t.89ihS8, obj12);
      AttachmentIcon = arg1(dependencyMap[18]).AttachmentIcon;
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
      obj13 = { shape: arg1(dependencyMap[21]).CutoutShape.RoundedRect };
      const obj14 = { style: tmp.attachmentPreviewOverflow };
      const obj15 = {};
      const items2 = [obj13];
      obj15.cutouts = items2;
      obj15.children = tmp11;
      const items3 = [callback(importDefault(dependencyMap[21]), obj15), ];
      const obj16 = { style: tmp.overflowCount };
      const items4 = ["fill", length - 1];
      obj16.children = items4;
      items3[1] = callback2(arg1(dependencyMap[22]).Text, obj16);
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
    const intl5 = arg1(dependencyMap[14]).intl;
    obj20.children = intl5.string(importDefault(dependencyMap[23]).goiR2u);
    tmp54 = callback(arg1(dependencyMap[22]).Text, obj20);
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
      tmp68Result = callback(arg1(dependencyMap[22]).Text, obj24);
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
    const obj26 = {};
    const obj27 = { backgroundColor: primaryColor };
    obj26.style = obj27;
    const obj28 = {};
    const tmp72 = callback;
    const tmp73 = View;
    const tmp74 = callback;
    const tmp77 = importDefault(dependencyMap[19]);
    const cardId2 = checkpointData.cardId;
    let num35 = 0;
    if (null != cardId2) {
      num35 = cardId2;
    }
    obj28.uri = arg1(dependencyMap[24]).getCardAssetUrl(num35);
    obj26.source = obj28;
    obj25.children = tmp74(tmp77, obj26);
    tmp72Result = tmp72(tmp73, obj25);
    const obj32 = arg1(dependencyMap[24]);
  }
  items5[3] = tmp72Result;
  obj17.children = items5;
  return callback2(View, obj17);
};
