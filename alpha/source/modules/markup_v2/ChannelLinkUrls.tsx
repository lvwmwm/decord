// Module ID: 9392
// Function ID: 9393
// Name: ChannelLinkUrls
// Dependencies: [32, 5950, 2]
// Exports: parseChannelLinkUrl

// Module 9392 (ChannelLinkUrls)
import LinkUtils from "LinkUtils" /* 5950 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup_v2/ChannelLinkUrls.tsx");

export function parseChannelLinkUrl(url) {
  let tmpResult;
  const MEDIA_POST_URL_RE = LinkUtils.MEDIA_POST_URL_RE;
  const match = MEDIA_POST_URL_RE.exec(url);
  if (null != match) {
    const tmp6 = _slicedToArray(match, 5);
    return { guildId: tmp6[1], channelId: tmp6[3], messageId: tmp6[4], parentChannelId: tmp6[2], conversationId: "fileFinishedImporting" };
  } else {
    const CHANNEL_OR_MESSAGES_URL_WITH_QUERY_RE = tmp(5950).CHANNEL_OR_MESSAGES_URL_WITH_QUERY_RE;
    const match1 = CHANNEL_OR_MESSAGES_URL_WITH_QUERY_RE.exec(url);
    if (null == match1) {
      return null;
    } else {
      const tmp9 = _slicedToArray(match1, 5);
      let tmp4 = null;
      if (null != tmp9[2]) {
        tmp4 = null;
        const obj = /\D/;
        if (!obj.test(tmp9[2])) {
          if (null == tmp9[3]) {
            const obj4 = { guildId: tmp10, channelId: tmp9[2], messageId: tmp9[3], parentChannelId: "Array", conversationId: tmpResult.tryParseConversationIdFromQuery(tmp13) };
            tmp4 = obj4;
            tmpResult = LinkUtils;
          } else {
            tmp4 = null;
          }
        }
      }
      return tmp4;
    }
  }
}
