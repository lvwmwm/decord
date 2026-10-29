// Module ID: 10089
// Function ID: 10090
// Name: openPinnedMessages
// Dependencies: [10090, 5188, 2]
// Exports: default

// Module 10089 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 5188 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10090 */;
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
