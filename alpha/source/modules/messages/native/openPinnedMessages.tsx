// Module ID: 12491
// Function ID: 12492
// Name: openPinnedMessages
// Dependencies: [10828, 5430, 2]
// Exports: default

// Module 12491 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 5430 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10828 */;
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
