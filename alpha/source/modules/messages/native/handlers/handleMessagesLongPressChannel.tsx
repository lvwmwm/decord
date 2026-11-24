// Module ID: 11918
// Function ID: 11919
// Name: handleMessagesLongPressChannel
// Dependencies: [6675, 11919, 2]
// Exports: handleMessagesLongPressChannel

// Module 11918 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 6675 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 11919 */;
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
