// Module ID: 10530
// Function ID: 10531
// Name: openPinnedMessages
// Dependencies: [10531, 5090, 2]
// Exports: default

// Module 10530 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 5090 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10531 */;
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
