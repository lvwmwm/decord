// Module ID: 10255
// Function ID: 79267
// Name: PreviewIcon
// Dependencies: [31, 27, 3767, 33, 4644, 10159, 9076, 9657, 4074, 10256, 9085, 9134, 4549, 10258, 1324, 10234, 10261, 9889, 4126, 4066, 4130, 689, 3834, 3803, 7621, 9293, 7808, 7625, 566, 2]

// Module 10255 (PreviewIcon)
import importAllResult from "result";
import { View } from "processColorOrThrow";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";

let closure_6;
let closure_7;
const require = arg1;
function PreviewIcon(icon) {
  icon = icon.icon;
  let obj = Object.create(null);
  obj.icon = 0;
  const merged = Object.assign(icon, obj);
  if ("image" === icon) {
    obj = {};
    const merged1 = Object.assign(merged);
    return callback(require(4644) /* ImageIcon */.ImageIcon, obj);
  } else if ("video" === icon) {
    const obj1 = {};
    const merged2 = Object.assign(merged);
    return callback(require(10159) /* VideoIcon */.VideoIcon, obj1);
  } else if ("audio" === icon) {
    const obj2 = {};
    const merged3 = Object.assign(merged);
    return callback(require(9076) /* MusicIcon */.MusicIcon, obj2);
  } else if ("attachment" === icon) {
    const obj3 = {};
    const merged4 = Object.assign(merged);
    return callback(require(9657) /* AttachmentIcon */.AttachmentIcon, obj3);
  } else if ("link" === icon) {
    const obj4 = {};
    const merged5 = Object.assign(merged);
    return callback(require(4074) /* LinkIcon */.LinkIcon, obj4);
  } else if ("sticker" === icon) {
    const obj5 = {};
    const merged6 = Object.assign(merged);
    return callback(require(10256) /* StickerIcon */.StickerIcon, obj5);
  } else if ("call-active" === icon) {
    const obj6 = {};
    const merged7 = Object.assign(merged);
    return callback(require(9085) /* PhoneCallIcon */.PhoneCallIcon, obj6);
  } else if ("call-ended" === icon) {
    obj = {};
    const merged8 = Object.assign(merged);
    return callback(require(9134) /* PhoneHangUpIcon */.PhoneHangUpIcon, obj);
  }
}
class ChannelRowPreview {
  constructor(arg0) {
    ({ message, channel, layout, lineClamp } = global);
    if (lineClamp === undefined) {
      lineClamp = 1;
    }
    ({ variant, color } = global);
    tmp = require("useIsMobileVisualRefreshExperimentEnabled")("ChannelRowPreview");
    obj = require("getFontScale");
    fontScale = obj.useFontScale();
    obj2 = require("isMessageContentPreviewable");
    formattedMessagePreview = obj2.useFormattedMessagePreview(message, channel);
    obj3 = require("getLayoutStyles");
    layoutStyles = obj3.getLayoutStyles(layout);
    tmp5 = require("scaleLineHeight");
    if (null == formattedMessagePreview) {
      return null;
    } else {
      ({ authorLabel, color: color2, trailingIcon } = formattedMessagePreview);
      if (null != color) {
        color2 = color;
      }
      type = formattedMessagePreview.type;
      str = "text";
      if ("text" === type) {
        text = formattedMessagePreview.text;
      } else {
        str2 = "markup";
        if ("markup" === type) {
          obj = {};
          tmp7 = jsx;
          tmp8 = f79273;
          if ("markup" === formattedMessagePreview.type) {
            content = formattedMessagePreview.markup;
          } else {
            content = formattedMessagePreview.message.content;
          }
          obj.markup = content;
          obj.channelId = message.channel_id;
          obj.guildId = channel.guild_id;
          obj.muted = global.muted;
          obj.layout = layout;
          obj.color = color2;
          text = tmp7(tmp8, obj);
        } else {
          str3 = "message";
        }
      }
      obj1 = {};
      obj2 = { flexDirection: "row", alignItems: "center" };
      obj2.minHeight = tmp6;
      obj1.style = obj2;
      tmp12 = closure_0;
      tmp13 = closure_2;
      num = 18;
      tmp9 = jsxs;
      tmp10 = View;
      tmp11 = jsxs;
      obj3 = {};
      obj3.lineClamp = lineClamp;
      if (null == variant) {
        str4 = "text-sm/normal";
        if (!tmp) {
          str4 = layoutStyles.messagePreview.text.variant;
        }
        variant = str4;
      }
      obj3.variant = variant;
      num2 = 1.75;
      obj3.maxFontSizeMultiplier = 1.75;
      obj3.color = color2;
      obj3.style = { paddingBottom: 2, flexShrink: 1 };
      combined = null != authorLabel;
      if (combined) {
        tmp15 = globalThis;
        _HermesInternal = HermesInternal;
        str5 = "";
        str6 = ": ";
        combined = "" + authorLabel + ": ";
      }
      items = [, ];
      items[0] = combined;
      items[1] = text;
      obj3.children = items;
      items1 = [, ];
      items1[0] = tmp11(require("Text").Text, obj3);
      tmp16 = null != trailingIcon;
      if (tmp16) {
        tmp17 = jsx;
        tmp18 = PreviewIcon;
        obj4 = {};
        obj4.icon = trailingIcon;
        obj4.size = layoutStyles.messagePreview.messageTypeIconSizeNew;
        obj4.color = color2;
        obj5 = {};
        num3 = 4;
        obj5.marginLeft = 4;
        obj4.style = obj5;
        tmp16 = jsx(PreviewIcon, obj4);
      }
      items1[1] = tmp16;
      obj1.children = items1;
      return tmp9(tmp10, obj1);
    }
  }
}
class NativeChannelRowPreview {
  constructor(arg0) {
    ({ lineClamp, gifAutoPlay } = global);
    ({ message, messageSizeCacheRef, maxHeight, backgroundColor } = global);
    if (gifAutoPlay === undefined) {
      gifAutoPlay = false;
    }
    c1 = gifAutoPlay;
    c2 = undefined;
    useToken = undefined;
    c4 = undefined;
    c5 = undefined;
    InlineEmbedMedia = undefined;
    ({ gradientStyles, textColor } = global);
    tmp = require("useTheme")();
    obj = require("_createForOfIteratorHelperLoose");
    obj = { seeMoreLabelColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
    c2 = obj.createNativeStyleProperties(obj)(tmp);
    obj3 = require("map");
    useToken = obj3.useToken(textColor);
    RenderEmbeds = require("explicitContentFromProto").RenderEmbeds;
    setting = RenderEmbeds.getSetting();
    c4 = setting;
    InlineEmbedMedia = require("explicitContentFromProto").InlineEmbedMedia;
    setting1 = InlineEmbedMedia.getSetting();
    c5 = setting1;
    InlineAttachmentMedia = require("explicitContentFromProto").InlineAttachmentMedia;
    setting2 = InlineAttachmentMedia.getSetting();
    InlineEmbedMedia = setting2;
    items = [, , , ];
    items[0] = setting;
    items[1] = setting1;
    items[2] = setting2;
    items[3] = gifAutoPlay;
    memo = useToken.useMemo(() => {
      let tmp = gifAutoPlay(seeMoreLabelColor[24]);
      tmp = new tmp();
      tmp.setOptions({ renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReactions: false, animateEmoji: false, gifAutoPlay, renderReplies: false, renderCodedLinks: false, renderGiftCode: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, renderComponents: false, ignoreMentioned: true, enableSwipeActions: false, renderExecutedCommands: false, useAlternateEmbedColors: true });
      return tmp;
    }, items);
    obj1 = { pointerEvents: "none", horizontalOffset: 0 };
    obj1.modifyRow = function modifyRow(message) {
      let seeMoreLabelColor;
      message.contextType = outer1_0(seeMoreLabelColor[26]).MessageContextType.SEARCH;
      if (null != closure_3) {
        let obj = outer1_0(seeMoreLabelColor[27]);
        const processColorOrThrowResult = obj.processColorOrThrow(closure_3);
      }
      while (true) {
        let tmp5 = processColorOrThrowResult;
        if (null == processColorOrThrowResult) {
          break;
        } else {
          let tmp6 = processColorOrThrowResult;
          message.message.textColor = processColorOrThrowResult;
          break;
        }
        let tmp7 = closure_0;
        if (null != closure_0) {
          obj = { numberOfLines: null, expandable: false, seeMoreLabel: "..." };
          let tmp8 = closure_0;
          obj.numberOfLines = closure_0;
          let tmp9 = processColorOrThrowResult;
          if (null != processColorOrThrowResult) {
            seeMoreLabelColor = processColorOrThrowResult;
          } else {
            let tmp10 = seeMoreLabelColor;
            seeMoreLabelColor = seeMoreLabelColor.seeMoreLabelColor;
          }
          obj.seeMoreLabelColor = seeMoreLabelColor;
          message.truncation = obj;
        }
      }
    };
    obj1.message = message;
    obj1.rowGenerator = memo;
    obj1.messageSizeCacheRef = messageSizeCacheRef;
    obj1.maxHeight = maxHeight;
    obj1.backgroundColor = backgroundColor;
    obj1.gradientStyles = gradientStyles;
    return InlineEmbedMedia(require("DCDChatItem"), obj1);
  }
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = importAllResult.memo((arg0) => {
  let channelId;
  let color;
  let guildId;
  let layout;
  let markup;
  let muted;
  ({ markup, channelId, guildId, muted, layout, color } = arg0);
  const fontScale = require(4549) /* getFontScale */.useFontScale();
  const obj = require(4549) /* getFontScale */;
  return require(10258) /* getRules */.renderMessagePreviewMarkup({ content, muted, guildId, channelId, layout, color, fontScale });
});
const memoResult = importAllResult.memo((message) => {
  const _require = message;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [message.message.author.id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.isBlockedOrIgnored(message.message.author.id), items1);
  if (obj2.isMessageContentPreviewable(message.message)) {
    if (!stateFromStores) {
      obj = {};
      const merged = Object.assign(message);
      let tmp7 = callback(NativeChannelRowPreview, obj);
    }
    return tmp7;
  }
  obj = {};
  const merged1 = Object.assign(message);
  tmp7 = callback(ChannelRowPreview, obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/ChannelRowPreview.tsx");

export { ChannelRowPreview };
export { NativeChannelRowPreview };
export const NativeMessageChannelRowPreview = memoResult;
