// Module ID: 9568
// Function ID: 9569
// Name: ChannelRowPreview
// Dependencies: [19, 17, 4479, 21, 5401, 9569, 9366, 9571, 4775, 9573, 7305, 7307, 5288, 9575, 9553, 9580, 9578, 4832, 4767, 4836, 576, 4531, 2021, 7374, 8112, 7583, 7378, 504, 2]

// Module 9568 (ChannelRowPreview)
import react_native from "react-native" /* 17 */;
import UserSettings from "UserSettings" /* 2021 */;
import useToken from "useToken" /* 4531 */;
import LinkIcon2 from "LinkIcon" /* 4775 */;
import createStyles from "createStyles" /* 4836 */;
import useFontScale from "useFontScale" /* 5288 */;
import ImageIcon2 from "ImageIcon" /* 5401 */;
import PhoneCallIcon2 from "PhoneCallIcon" /* 7305 */;
import PhoneHangUpIcon2 from "PhoneHangUpIcon" /* 7307 */;
import RowGeneratorDefault from "RowGenerator" /* 7374 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 7583 */;
import MusicIcon2 from "MusicIcon" /* 9366 */;
import useFormattedMessagePreview from "useFormattedMessagePreview" /* 9553 */;
import VideoIcon2 from "VideoIcon" /* 9569 */;
import AttachmentIcon2 from "AttachmentIcon" /* 9571 */;
import StickerIcon2 from "StickerIcon" /* 9573 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 9575 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 9578 */;
import ChannelListLayout from "ChannelListLayout" /* 9580 */;
import react_mod from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let metroImportDefault;
let metroRequire;
let tmp;
let tmp2;
const Text_Text = tmp(4832);
const react_native2 = tmp2(7378);
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
  constructor(arg0) {
    let authorLabel;
    let channel;
    let color;
    let items;
    let items1;
    let layout;
    let lineClamp;
    let message;
    let muted;
    let obj6;
    let trailingIcon;
    let variant;
    ({ message, channel, layout, lineClamp } = arg0);
    if (lineClamp === undefined) {
      lineClamp = 1;
    }
    ({ variant, color, muted } = arg0);
    const obj = useFontScale;
    const fontScale = obj.useFontScale();
    const obj2 = useFormattedMessagePreview;
    const formattedMessagePreview = obj2.useFormattedMessagePreview(message, channel);
    const obj3 = ChannelListLayout;
    const layoutStyles = obj3.getLayoutStyles(layout);
    useScaledTextLineHeight;
    if (null == formattedMessagePreview) {
      return null;
    } else {
      let text;
      ({ authorLabel, trailingIcon } = formattedMessagePreview);
      if (color == null) {
        color = formattedMessagePreview.color;
      }
      const type = formattedMessagePreview.type;
      if ("text" === type) {
        text = formattedMessagePreview.text;
      } else if ("markup" === type) {
        let content;
        const tmp8 = metroRequire;
        const tmp9 = closure_9;
        if ("markup" === formattedMessagePreview.type) {
          content = formattedMessagePreview.markup;
        } else {
          content = formattedMessagePreview.message.content;
        }
        const obj4 = { markup: content, channelId: message.channel_id, guildId: channel.guild_id, muted, layout, color };
        text = tmp8(tmp9, obj4);
      }
      const obj5 = { style: obj6, children: items1 };
      obj6 = { flexDirection: "row", alignItems: "center", minHeight: tmp7 };
      const obj7 = { lineClamp, variant, maxFontSizeMultiplier: 1.75, color, style: { paddingBottom: 2, flexShrink: 1 }, children: items };
      const Text = Text_Text.Text;
      const tmp11 = View;
      if (variant == null) {
        variant = "text-sm/normal";
      }
      let combined = null != authorLabel;
      if (combined) {
        const _HermesInternal = HermesInternal;
        combined = "" + authorLabel + ": ";
      }
      items = [combined, text];
      items1 = [metroImportDefault(Text, obj7), ];
      let tmp14 = null != trailingIcon;
      if (tmp14) {
        const obj8 = { icon: trailingIcon, size: layoutStyles.messagePreview.messageTypeIconSizeNew, color, style: { marginLeft: 4 } };
        tmp14 = metroRequire(PreviewIcon, obj8);
      }
      items1[1] = tmp14;
      return metroImportDefault(tmp11, obj5);
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
    const tmp = gifAutoPlay(4767)();
    let obj = createStyles;
    let obj2 = { seeMoreLabelColor: gifAutoPlay(576).colors.TEXT_DEFAULT };
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
    return setting2(gifAutoPlay(8112), obj4);
  }
}
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_9 = react.memo((arg0) => {
  let channelId;
  let color;
  let guildId;
  let layout;
  let markup;
  let muted;
  ({ markup, channelId, guildId, muted, layout, color } = arg0);
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const obj2 = MessagePreviewMarkup;
  return obj2.renderMessagePreviewMarkup({ content, muted, guildId, channelId, layout, color, fontScale });
});
const memoResult = react.memo((message) => {
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
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/ChannelRowPreview.tsx");

export { ChannelRowPreview };
export { NativeChannelRowPreview };
export const NativeMessageChannelRowPreview = memoResult;
