// Module ID: 9580
// Function ID: 9581
// Name: openPinnedMessages
// Dependencies: [9581, 4937, 2]
// Exports: default

// Module 9580 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4937 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 9581 */;
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
