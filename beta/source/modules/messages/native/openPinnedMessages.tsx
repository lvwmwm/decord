// Module ID: 11775
// Function ID: 11776
// Name: openPinnedMessages
// Dependencies: [11257, 4649, 2]
// Exports: default

// Module 11775 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4649 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11257 */;
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
