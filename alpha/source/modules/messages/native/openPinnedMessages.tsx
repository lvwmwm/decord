// Module ID: 10314
// Function ID: 10315
// Name: openPinnedMessages
// Dependencies: [10315, 5323, 2]
// Exports: default

// Module 10314 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 5323 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10315 */;
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
