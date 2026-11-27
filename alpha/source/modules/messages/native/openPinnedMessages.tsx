// Module ID: 12167
// Function ID: 12168
// Name: openPinnedMessages
// Dependencies: [11410, 5220, 2]
// Exports: default

// Module 12167 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 5220 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11410 */;
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
