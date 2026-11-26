// Module ID: 12505
// Function ID: 12506
// Name: handleMessagesLongPressChannel
// Dependencies: [6346, 12506, 2]
// Exports: handleMessagesLongPressChannel

// Module 12505 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 6346 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 12506 */;
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
