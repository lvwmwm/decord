// Module ID: 11242
// Function ID: 11243
// Name: handleMessagesLongPressChannel
// Dependencies: [5981, 10038, 2]
// Exports: handleMessagesLongPressChannel

// Module 11242 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 5981 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 10038 */;
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
