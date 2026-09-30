// Module ID: 11283
// Function ID: 11284
// Name: handleMessagesLongPressChannel
// Dependencies: [5011, 11284, 2]
// Exports: handleMessagesLongPressChannel

// Module 11283 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 5011 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 11284 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesLongPressChannel.tsx");

export const handleMessagesLongPressChannel = function handleMessagesLongPressChannel(data) {
  ({ guildId, channelId, messageId, originalLink } = data.data);
  if (null != channelId) {
    if (originalLink == null) {
      originalLink = ChannelUtils.getChannelPermalink(guildId, channelId, messageId);
    }
    if (null != originalLink) {
      const obj2 = { urlString: originalLink, guildId, channelId, messageId };
      showLongPressURLActionSheetDefault(obj2);
    }
  }
};
