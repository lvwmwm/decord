// Module ID: 10982
// Function ID: 10983
// Name: openPinnedMessages
// Dependencies: [10419, 4695, 2]
// Exports: default

// Module 10982 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4695 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10419 */;
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
