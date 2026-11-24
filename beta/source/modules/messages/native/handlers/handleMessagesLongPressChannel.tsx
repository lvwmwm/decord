// Module ID: 12026
// Function ID: 12027
// Name: handleMessagesLongPressChannel
// Dependencies: [5948, 10416, 2]
// Exports: handleMessagesLongPressChannel

// Module 12026 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 5948 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 10416 */;
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
