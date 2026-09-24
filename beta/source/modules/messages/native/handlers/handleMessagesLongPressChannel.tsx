// Module ID: 11739
// Function ID: 11740
// Name: handleMessagesLongPressChannel
// Dependencies: [4935, 11740, 2]
// Exports: handleMessagesLongPressChannel

// Module 11739 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 4935 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 11740 */;
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
