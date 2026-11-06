// Module ID: 11780
// Function ID: 11781
// Name: handleMessagesLongPressChannel
// Dependencies: [6204, 10319, 2]
// Exports: handleMessagesLongPressChannel

// Module 11780 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 6204 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 10319 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesLongPressChannel.tsx");

export function handleMessagesLongPressChannel(data) {
  let channelId;
  let guildId;
  let messageId;
  let originalLink;
  ({ guildId, channelId, messageId, originalLink } = data.data);
  if (null != channelId) {
    if (originalLink == null) {
      const obj = ChannelUtils;
      originalLink = obj.getChannelPermalink(guildId, channelId, messageId);
    }
    if (null != originalLink) {
      const obj2 = { urlString: originalLink, guildId, channelId, messageId };
      showLongPressURLActionSheetDefault(obj2);
    }
  }
}
