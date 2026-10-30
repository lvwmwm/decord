// Module ID: 10116
// Function ID: 10117
// Name: openPinnedMessages
// Dependencies: [10117, 5194, 2]
// Exports: default

// Module 10116 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 5194 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10117 */;
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
