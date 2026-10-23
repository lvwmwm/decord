// Module ID: 11274
// Function ID: 11275
// Name: handleMessagesLongPressChannel
// Dependencies: [5992, 10067, 2]
// Exports: handleMessagesLongPressChannel

// Module 11274 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 5992 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 10067 */;
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
