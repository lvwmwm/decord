// Module ID: 9599
// Function ID: 9600
// Name: openPinnedMessages
// Dependencies: [9600, 4938, 2]
// Exports: default

// Module 9599 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4938 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 9600 */;
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
