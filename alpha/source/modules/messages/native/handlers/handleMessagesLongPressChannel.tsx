// Module ID: 11170
// Function ID: 11171
// Name: handleMessagesLongPressChannel
// Dependencies: [5949, 9985, 2]
// Exports: handleMessagesLongPressChannel

// Module 11170 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 5949 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 9985 */;
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
