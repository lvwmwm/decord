// Module ID: 12159
// Function ID: 12160
// Name: openPinnedMessages
// Dependencies: [11409, 5220, 2]
// Exports: default

// Module 12159 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 5220 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11409 */;
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
