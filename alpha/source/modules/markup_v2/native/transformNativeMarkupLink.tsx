// Module ID: 7742
// Function ID: 7743
// Name: transformNativeMarkupLink
// Dependencies: [5486, 5492, 5497, 7740, 7743, 5500, 2]
// Exports: transformNativeLink

// Module 7742 (transformNativeMarkupLink)
import MarkupTypes from "MarkupTypes" /* 5486 */;
import UnicodeSanitizationUtils from "UnicodeSanitizationUtils" /* 5492 */;
import ChannelLinkUrls from "ChannelLinkUrls" /* 7743 */;
import size from "module_2" /* 2 */;

function stripCredentialsForDisplay(url) {
  try {
    const _URL = URL;
    const uRL = new URL(url);
    uRL.username = "";
    uRL.password = "";
    return UnicodeSanitizationUtils.safelyMakeUrlHumanReadable(uRL);
  } catch (err) {
    return tmp;
  }
}
const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupLink.tsx");

export const transformNativeLink = function transformNativeLink(value, channelId, transformNativeInline) {
  ({ text, url, title } = value);
  if (null != text) {
    if (0 !== text.length) {
      const obj = { type: MarkupTypes.AST_KEY.LINK, content: transformNativeInline(text, channelId), target: url, title };
      return obj;
    }
  }
  const parseChannelLinkUrlResult = ChannelLinkUrls.parseChannelLinkUrl(url);
  if (null != parseChannelLinkUrlResult) {
    const guildIdFromChannelId = tmp4(5497).getGuildIdFromChannelId(channelId.channelId);
    channelId = parseChannelLinkUrlResult.parentChannelId;
    const tmp4Result = tmp4(5497);
    let channel = tmp4(5497).getChannel(parseChannelLinkUrlResult.channelId, null);
    if (channel == null) {
      let channel1 = null;
      if (null != channelId) {
        channel1 = tmp4(5497).getChannel(channelId, null);
        const tmp4Result8 = tmp4(5497);
      }
      channel = channel1;
    }
    if (null == channel) {
      const tmp4Result9 = tmp4(5497);
      const guildId = parseChannelLinkUrlResult.guildId;
      if (channelId == null) {
        channelId = parseChannelLinkUrlResult.channelId;
      }
      let handleUnknownChannelResult = tmp4Result9.handleUnknownChannel(guildId, channelId, parseChannelLinkUrlResult.messageId, guildIdFromChannelId, url);
    } else {
      const tmp4Result10 = tmp4(5497);
      handleUnknownChannelResult = tmp4Result10.parseChannel(channel, parseChannelLinkUrlResult.messageId, guildIdFromChannelId, url);
    }
    const tmp4Result7 = tmp4(5497);
    return tmp4(7740).applyChannelMentionIcons(handleUnknownChannelResult);
  } else {
    const matchAttachmentUrlResult = tmp4(5500).matchAttachmentUrl(url);
    if (null != matchAttachmentUrlResult) {
      const name = matchAttachmentUrlResult.name;
      const obj3 = { type: tmp4(5486).AST_KEY.ATTACHMENT_LINK, content: null, attachmentUrl: null, attachmentName: null };
      const obj4 = { type: tmp4(5486).AST_KEY.TEXT, content: name };
      const items = [obj4];
      obj3.content = items;
      obj3.attachmentUrl = url;
      obj3.attachmentName = name;
      let obj5 = obj3;
    } else {
      obj5 = { type: tmp4(5486).AST_KEY.LINK, content: null, target: null, title: "a" };
      const obj6 = { type: tmp4(5486).AST_KEY.TEXT, content: stripCredentialsForDisplay(url) };
      const items1 = [obj6];
      obj5.content = items1;
      obj5.target = url;
      const tmp8 = stripCredentialsForDisplay(url);
    }
    return obj5;
  }
};
