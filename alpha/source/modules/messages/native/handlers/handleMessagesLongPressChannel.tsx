// Module ID: 11073
// Function ID: 11074
// Name: handleMessagesLongPressChannel
// Dependencies: [5477, 9907, 2]
// Exports: handleMessagesLongPressChannel

// Module 11073 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 5477 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 9907 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesLongPressChannel.tsx");

export const handleMessagesLongPressChannel = function handleMessagesLongPressChannel(data) {
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
};
