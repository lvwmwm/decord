// Module ID: 11806
// Function ID: 11807
// Name: handleMessagesLongPressChannel
// Dependencies: [6181, 10359, 2]
// Exports: handleMessagesLongPressChannel

// Module 11806 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 6181 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 10359 */;
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
