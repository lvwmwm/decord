// Module ID: 10236
// Function ID: 79156
// Name: PreviewIcon
// Dependencies: []

// Module 10236 (PreviewIcon)
function PreviewIcon(icon) {
  icon = icon.icon;
  let obj = Object.create(null);
  obj.icon = 0;
  const merged = Object.assign(icon, obj);
  if ("image" === icon) {
    obj = {};
    const merged1 = Object.assign(merged);
    return callback(arg1(dependencyMap[4]).ImageIcon, obj);
  } else if ("video" === icon) {
    const obj1 = {};
    const merged2 = Object.assign(merged);
    return callback(arg1(dependencyMap[5]).VideoIcon, obj1);
  } else if ("audio" === icon) {
    const obj2 = {};
    const merged3 = Object.assign(merged);
    return callback(arg1(dependencyMap[6]).MusicIcon, obj2);
  } else if ("attachment" === icon) {
    const obj3 = {};
    const merged4 = Object.assign(merged);
    return callback(arg1(dependencyMap[7]).AttachmentIcon, obj3);
  } else if ("link" === icon) {
    const obj4 = {};
    const merged5 = Object.assign(merged);
    return callback(arg1(dependencyMap[8]).LinkIcon, obj4);
  } else if ("sticker" === icon) {
    const obj5 = {};
    const merged6 = Object.assign(merged);
    return callback(arg1(dependencyMap[9]).StickerIcon, obj5);
  } else if ("call-active" === icon) {
    const obj6 = {};
    const merged7 = Object.assign(merged);
    return callback(arg1(dependencyMap[10]).PhoneCallIcon, obj6);
  } else if ("call-ended" === icon) {
    obj = {};
    const merged8 = Object.assign(merged);
    return callback(arg1(dependencyMap[11]).PhoneHangUpIcon, obj);
  }
}
class ChannelRowPreview {
  constructor(arg0) {
    ({ message, channel, layout, lineClamp } = global);
    if (lineClamp === undefined) {
      lineClamp = 1;
    }
    ({ variant, color } = global);
    tmp = importDefault(dependencyMap[14])("ChannelRowPreview");
    obj = arg1(dependencyMap[12]);
    fontScale = obj.useFontScale();
    obj2 = arg1(dependencyMap[15]);
    formattedMessagePreview = obj2.useFormattedMessagePreview(message, channel);
    obj3 = arg1(dependencyMap[16]);
    layoutStyles = obj3.getLayoutStyles(layout);
    tmp5 = arg1(dependencyMap[17]);
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
          tmp8 = f79162;
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
      obj2 = { -9223372036854775808: true, filter: true };
      obj2.minHeight = tmp6;
      obj1.style = obj2;
      tmp12 = arg1;
      tmp13 = dependencyMap;
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
      obj3.style = { maxHeight: "\u{1F4A0}", XHR_READYSTATE_DONE: 6 };
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
      items1[0] = tmp11(arg1(dependencyMap[18]).Text, obj3);
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
    ({ lineClamp: closure_0, gifAutoPlay } = global);
    ({ message, messageSizeCacheRef, maxHeight, backgroundColor } = global);
    if (gifAutoPlay === undefined) {
      gifAutoPlay = false;
    }
    closure_1 = gifAutoPlay;
    closure_2 = undefined;
    defineProperty = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    tmp = closure_1(closure_2[19])();
    obj = arg1(closure_2[20]);
    obj = { seeMoreLabelColor: closure_1(closure_2[21]).colors.TEXT_DEFAULT };
    closure_2 = obj.createNativeStyleProperties(obj)(tmp);
    RenderEmbeds = arg1(closure_2[22]).RenderEmbeds;
    setting = RenderEmbeds.getSetting();
    defineProperty = setting;
    InlineEmbedMedia = arg1(closure_2[22]).InlineEmbedMedia;
    setting1 = InlineEmbedMedia.getSetting();
    closure_4 = setting1;
    InlineAttachmentMedia = arg1(closure_2[22]).InlineAttachmentMedia;
    setting2 = InlineAttachmentMedia.getSetting();
    closure_5 = setting2;
    items = [, , , ];
    items[0] = setting;
    items[1] = setting1;
    items[2] = setting2;
    items[3] = gifAutoPlay;
    memo = defineProperty.useMemo(() => {
      let tmp = gifAutoPlay(closure_2[23]);
      tmp = new tmp();
      tmp.setOptions({ renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReactions: false, animateEmoji: false, gifAutoPlay, renderReplies: false, renderCodedLinks: false, renderGiftCode: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, renderComponents: false, ignoreMentioned: true, enableSwipeActions: false, renderExecutedCommands: false, useAlternateEmbedColors: true });
      return tmp;
    }, items);
    obj1 = { lineHeight: 3, fontSize: null };
    obj1.modifyRow = function modifyRow(arg0) {
      arg0.contextType = callback(seeMoreLabelColor[25]).MessageContextType.SEARCH;
      if (null != callback) {
        const obj = { numberOfLines: callback, seeMoreLabelColor: seeMoreLabelColor.seeMoreLabelColor };
        arg0.truncation = obj;
      }
    };
    obj1.message = message;
    obj1.rowGenerator = memo;
    obj1.messageSizeCacheRef = messageSizeCacheRef;
    obj1.maxHeight = maxHeight;
    obj1.backgroundColor = backgroundColor;
    obj1.gradientStyles = global.gradientStyles;
    return jsx(closure_1(closure_2[24]), obj1);
  }
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importAllResult.memo((arg0) => {
  let channelId;
  let color;
  let guildId;
  let layout;
  let markup;
  let muted;
  ({ markup, channelId, guildId, muted, layout, color } = arg0);
  const fontScale = arg1(dependencyMap[12]).useFontScale();
  const obj = arg1(dependencyMap[12]);
  return arg1(dependencyMap[13]).renderMessagePreviewMarkup({ content, muted, guildId, channelId, layout, color, fontScale });
});
const tmp2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo((message) => {
  const arg1 = message;
  let obj = arg1(dependencyMap[26]);
  const items = [closure_5];
  const items1 = [message.message.author.id];
  const stateFromStores = obj.useStateFromStores(items, () => blockedOrIgnored.isBlockedOrIgnored(arg0.message.author.id), items1);
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
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/ChannelRowPreview.tsx");

export { ChannelRowPreview };
export { NativeChannelRowPreview };
export const NativeMessageChannelRowPreview = memoResult;
