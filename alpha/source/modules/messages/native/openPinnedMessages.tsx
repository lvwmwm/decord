// Module ID: 10023
// Function ID: 10024
// Name: openPinnedMessages
// Dependencies: [10024, 5151, 2]
// Exports: default

// Module 10023 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 5151 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10024 */;
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
