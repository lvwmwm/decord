// Module ID: 11739
// Function ID: 11740
// Name: openPinnedMessages
// Dependencies: [11221, 4617, 2]
// Exports: default

// Module 11739 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4617 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11221 */;
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
