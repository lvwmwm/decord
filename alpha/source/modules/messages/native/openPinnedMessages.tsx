// Module ID: 9847
// Function ID: 9848
// Name: openPinnedMessages
// Dependencies: [9848, 5033, 2]
// Exports: default

// Module 9847 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 5033 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 9848 */;
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
