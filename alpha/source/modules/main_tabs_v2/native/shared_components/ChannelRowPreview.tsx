// Module ID: 11185
// Function ID: 11186
// Name: ChannelRowPreview
// Dependencies: [19, 17, 5112, 21, 8751, 11186, 10894, 10671, 5882, 11188, 9969, 9971, 5796, 11165, 11190, 11195, 11197, 11208, 5399, 5170, 575, 5754, 4995, 8469, 10023, 8802, 8473, 504, 2]

// Module 11185 (ChannelRowPreview)
import react_native from "react-native" /* 17 */;
import UserSettings from "UserSettings" /* 4995 */;
import createStyles from "createStyles" /* 5170 */;
import useToken from "useToken" /* 5754 */;
import LinkIcon2 from "LinkIcon" /* 5882 */;
import RowGeneratorDefault from "RowGenerator" /* 8469 */;
import ImageIcon2 from "ImageIcon" /* 8751 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 8802 */;
import PhoneCallIcon2 from "PhoneCallIcon" /* 9969 */;
import PhoneHangUpIcon2 from "PhoneHangUpIcon" /* 9971 */;
import AttachmentIcon2 from "AttachmentIcon" /* 10671 */;
import MusicIcon2 from "MusicIcon" /* 10894 */;
import VideoIcon2 from "VideoIcon" /* 11186 */;
import StickerIcon2 from "StickerIcon" /* 11188 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 11197 */;
import react_mod from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 5112 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let metroImportDefault;
let metroRequire;
let tmp2;
const react_native2 = tmp2(8473);
function PreviewIcon(icon) {
  icon = icon.icon;
  const merged = Object.assign(icon, Object.assign({ icon: 0 }));
  if ("image" === icon) {
    const obj2 = {};
    const ImageIcon = ImageIcon2.ImageIcon;
    const merged1 = Object.assign(merged);
    return metroRequire(ImageIcon, obj2);
  } else if ("video" === icon) {
    const obj3 = {};
    const VideoIcon = VideoIcon2.VideoIcon;
    const merged2 = Object.assign(merged);
    return metroRequire(VideoIcon, obj3);
  } else if ("audio" === icon) {
    const obj4 = {};
    const MusicIcon = MusicIcon2.MusicIcon;
    const merged3 = Object.assign(merged);
    return metroRequire(MusicIcon, obj4);
  } else if ("attachment" === icon) {
    const obj5 = {};
    const AttachmentIcon = AttachmentIcon2.AttachmentIcon;
    const merged4 = Object.assign(merged);
    return metroRequire(AttachmentIcon, obj5);
  } else if ("link" === icon) {
    const obj6 = {};
    const LinkIcon = LinkIcon2.LinkIcon;
    const merged5 = Object.assign(merged);
    return metroRequire(LinkIcon, obj6);
  } else if ("sticker" === icon) {
    const obj7 = {};
    const StickerIcon = StickerIcon2.StickerIcon;
    const merged6 = Object.assign(merged);
    return metroRequire(StickerIcon, obj7);
  } else if ("call-active" === icon) {
    const obj8 = {};
    const PhoneCallIcon = PhoneCallIcon2.PhoneCallIcon;
    const merged7 = Object.assign(merged);
    return metroRequire(PhoneCallIcon, obj8);
  } else if ("call-ended" === icon) {
    const obj = {};
    const PhoneHangUpIcon = PhoneHangUpIcon2.PhoneHangUpIcon;
    const merged8 = Object.assign(merged);
    return metroRequire(PhoneHangUpIcon, obj);
  }
}
class ChannelRowPreview {
  constructor(message) {
    let authorLabel;
    let color;
    let combined;
    let items1;
    let mentions;
    let obj6;
    let trailingIcon;
    let type;
    let variant;
    message = message.message;
    const channel = message.channel;
    const layout = message.layout;
    let num = message.lineClamp;
    if (num === undefined) {
      num = 1;
    }
    const muted = message.muted;
    ({ variant, color } = message);
    color = undefined;
    let content;
    const tmp = message;
    let obj = message(layout[12]);
    const fontScale = obj.useFontScale();
    let obj2 = message(layout[13]);
    const formattedMessagePreview = obj2.useFormattedMessagePreview(message, channel);
    const obj3 = message(layout[14]);
    const layoutStyles = obj3.getLayoutStyles(layout);
    const obj4 = message(layout[15]);
    const scaleTextLineHeightResult = obj4.scaleTextLineHeight(layoutStyles.messagePreview.text.variant, fontScale);
    const tmp2 = layout;
    if (color == null) {
      let color1;
      if (formattedMessagePreview != null) {
        color1 = formattedMessagePreview.color;
      }
      color = color1;
    }
    let type1;
    if (formattedMessagePreview != null) {
      type1 = formattedMessagePreview.type;
    }
    if ("markup" === type1) {
      content = formattedMessagePreview.markup;
    } else if ("message" === type1) {
      content = formattedMessagePreview.message.content;
    }
    const items = [content, muted, channel.guild_id, message.channel_id, layout, color, fontScale];
    const memo = muted.useMemo(() => {
      let result;
      if (null != content) {
        const obj2 = { content: tmp, muted, guildId: channel.guild_id, channelId: message.channel_id, layout, color, fontScale };
        const obj = MessagePreviewMarkup;
        result = obj.renderMeasuredMessagePreviewMarkup(obj2);
      }
      return result;
    }, items);
    if (null == formattedMessagePreview) {
      return null;
    } else {
      let text;
      ({ authorLabel, trailingIcon, type } = formattedMessagePreview);
      if ("text" === type) {
        text = formattedMessagePreview.text;
      } else if ("markup" === type) {
        let content1;
        if (memo != null) {
          content1 = memo.content;
        }
        text = content1;
      }
      const obj5 = { style: obj6, children: items1 };
      obj6 = { flexDirection: "row", alignItems: "center", minHeight: scaleTextLineHeightResult };
      const obj7 = { lineClamp: num, variant, maxFontSizeMultiplier: 1.75, color, leadingContent: combined, mentions, style: { paddingBottom: 2, flexShrink: 1 }, children: text };
      const MessagePreviewParagraph = tmp(tmp2[17]).MessagePreviewParagraph;
      const tmp11 = closure_7;
      const tmp12 = fontScale;
      if (variant == null) {
        variant = "body-sm/normal";
      }
      combined = undefined;
      if (null != authorLabel) {
        const _HermesInternal = HermesInternal;
        combined = "" + authorLabel + ": ";
      }
      mentions = undefined;
      if (memo != null) {
        mentions = memo.mentions;
      }
      items1 = [content(MessagePreviewParagraph, obj7), ];
      let tmp13Result = null != trailingIcon;
      if (tmp13Result) {
        const obj8 = { icon: trailingIcon, size: layoutStyles.messagePreview.messageTypeIconSizeNew, color, style: { marginLeft: 4 } };
        tmp13Result = tmp13(PreviewIcon, obj8);
      }
      items1[1] = tmp13Result;
      return tmp11(tmp12, obj5);
    }
  }
}
class NativeChannelRowPreview {
  constructor(arg0) {
    let closure_3;
    let gifAutoPlay;
    let gradientColors;
    let gradientStyles;
    let maxHeight;
    let message;
    let messageSizeCacheRef;
    let require;
    let seeMoreLabelColor;
    let textColor;
    ({ lineClamp: require, gifAutoPlay } = arg0);
    ({ message, messageSizeCacheRef, maxHeight } = arg0);
    if (gifAutoPlay === undefined) {
      gifAutoPlay = false;
    }
    ({ textColor, gradientStyles, gradientColors } = arg0);
    const tmp = gifAutoPlay(5399)();
    let obj = createStyles;
    let obj2 = { seeMoreLabelColor: gifAutoPlay(575).colors.TEXT_DEFAULT };
    dependencyMap = obj.createNativeStyleProperties(obj2)(tmp);
    const obj3 = useToken;
    react = obj3.useToken(textColor);
    const RenderEmbeds = UserSettings.RenderEmbeds;
    const setting = RenderEmbeds.getSetting();
    const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
    const setting1 = InlineEmbedMedia.getSetting();
    const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
    const setting2 = InlineAttachmentMedia.getSetting();
    const items = [setting, setting1, setting2, gifAutoPlay];
    const memo = react.useMemo(() => {
      const obj = new RowGeneratorDefault();
      const obj2 = { renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReactions: false, animateEmoji: false, gifAutoPlay, renderReplies: false, renderCodedLinks: false, renderGiftCode: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, enableSwipeActions: false, renderExecutedCommands: false, useAlternateEmbedColors: true };
      obj.setOptions(obj2);
      return obj;
    }, items);
    const obj4 = {
      pointerEvents: "none",
      horizontalOffset: 0,
      modifyRow(message) {
        let processColorOrThrowResult;
        message.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
        if (null != closure_3) {
          try {
            const tmp2Result = react_native2;
            processColorOrThrowResult = tmp2Result.processColorOrThrow(tmp4);
          } catch (err) {
          }
        }
        if (null != processColorOrThrowResult) {
          message.message.textColor = processColorOrThrowResult;
        }
        if (null != _require) {
          const obj = { numberOfLines: tmp6, expandable: false, seeMoreLabel: "...", seeMoreLabelColor: processColorOrThrowResult };
          if (processColorOrThrowResult == null) {
            processColorOrThrowResult = seeMoreLabelColor.seeMoreLabelColor;
          }
          message.truncation = obj;
        }
      },
      message,
      rowGenerator: memo,
      messageSizeCacheRef,
      maxHeight,
      gradientStyles,
      gradientColors
    };
    return setting2(gifAutoPlay(10023), obj4);
  }
}
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const memoResult = react.memo(function NativeMessageChannelRowPreview(message) {
  _require = message;
  const items = [RelationshipStore];
  const items1 = [message.message.author.id];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.isBlockedOrIgnored(message.message.author.id), items1);
  const obj2 = require("useFormattedMessagePreview");
  if (obj2.isMessageContentPreviewable(message.message)) {
    let tmp7;
    if (!stateFromStores) {
      const obj3 = {};
      const merged = Object.assign(message);
      tmp7 = closure_6(NativeChannelRowPreview, obj3);
    }
    return tmp7;
  }
  const obj4 = {};
  const merged1 = Object.assign(message);
  tmp7 = closure_6(ChannelRowPreview, obj4);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/ChannelRowPreview.tsx");

export { ChannelRowPreview };
export { NativeChannelRowPreview };
export const NativeMessageChannelRowPreview = memoResult;
