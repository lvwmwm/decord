// Module ID: 10022
// Function ID: 10023
// Name: openPinnedMessages
// Dependencies: [10023, 5149, 2]
// Exports: default

// Module 10022 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 5149 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10023 */;
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
