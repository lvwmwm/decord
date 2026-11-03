// Module ID: 10266
// Function ID: 10267
// Name: openPinnedMessages
// Dependencies: [10267, 5322, 2]
// Exports: default

// Module 10266 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 5322 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10267 */;
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
