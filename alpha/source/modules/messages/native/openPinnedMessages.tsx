// Module ID: 10274
// Function ID: 10275
// Name: openPinnedMessages
// Dependencies: [10275, 5345, 2]
// Exports: default

// Module 10274 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 5345 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10275 */;
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
