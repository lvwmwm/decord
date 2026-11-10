// Module ID: 10263
// Function ID: 10264
// Name: openPinnedMessages
// Dependencies: [10264, 5317, 2]
// Exports: default

// Module 10263 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 5317 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10264 */;
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
