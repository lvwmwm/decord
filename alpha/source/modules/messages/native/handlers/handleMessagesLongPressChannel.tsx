// Module ID: 10837
// Function ID: 10838
// Name: handleMessagesLongPressChannel
// Dependencies: [5419, 9684, 2]
// Exports: handleMessagesLongPressChannel

// Module 10837 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 5419 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 9684 */;
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
