// Module ID: 11948
// Function ID: 11949
// Name: openPinnedMessages
// Dependencies: [11262, 4685, 2]
// Exports: default

// Module 11948 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4685 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11262 */;
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
