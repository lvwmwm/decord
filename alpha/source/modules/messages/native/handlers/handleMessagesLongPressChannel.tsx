// Module ID: 11576
// Function ID: 11577
// Name: handleMessagesLongPressChannel
// Dependencies: [6041, 10161, 2]
// Exports: handleMessagesLongPressChannel

// Module 11576 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 6041 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 10161 */;
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
