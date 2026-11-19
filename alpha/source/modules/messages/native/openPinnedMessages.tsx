// Module ID: 10468
// Function ID: 10469
// Name: openPinnedMessages
// Dependencies: [10469, 4969, 2]
// Exports: default

// Module 10468 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4969 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10469 */;
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
