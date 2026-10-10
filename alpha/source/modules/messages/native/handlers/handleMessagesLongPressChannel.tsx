// Module ID: 10738
// Function ID: 10739
// Name: handleMessagesLongPressChannel
// Dependencies: [5414, 9673, 2]
// Exports: handleMessagesLongPressChannel

// Module 10738 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 5414 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 9673 */;
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
