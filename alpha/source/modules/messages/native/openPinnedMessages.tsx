// Module ID: 11208
// Function ID: 11209
// Name: openPinnedMessages
// Dependencies: [11209, 5487, 2]
// Exports: default

// Module 11208 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 5487 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11209 */;
import size from "module_2" /* 2 */;

const constants = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
const result = size.fileFinishedImporting("modules/messages/native/openPinnedMessages.tsx");

export default function openPinnedMessages(channelId, source) {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  const tmp = null != rootNavigationRef && rootNavigationRef.isReady();
  if (tmp) {
    const obj2 = { initialRouteName: constants.PINNED_MESSAGES, channelId, source };
    rootNavigationRef.navigate("sidebar", obj2);
  }
};
