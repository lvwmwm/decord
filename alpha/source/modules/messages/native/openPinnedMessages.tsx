// Module ID: 11317
// Function ID: 11318
// Name: openPinnedMessages
// Dependencies: [10580, 4723, 2]
// Exports: default

// Module 11317 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4723 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10580 */;
import size from "module_2" /* 2 */;

const constants = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
const result = size.fileFinishedImporting("modules/messages/native/openPinnedMessages.tsx");

export default function openPinnedMessages(channelId, source) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp) {
    const obj2 = { initialRouteName: constants.PINNED_MESSAGES, channelId, source };
    rootNavigationRef.navigate("sidebar", obj2);
  }
};
