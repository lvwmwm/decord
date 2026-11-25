// Module ID: 12109
// Function ID: 12110
// Name: openPinnedMessages
// Dependencies: [11363, 5189, 2]
// Exports: default

// Module 12109 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 5189 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11363 */;
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
