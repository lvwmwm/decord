// Module ID: 11099
// Function ID: 11100
// Name: showThreadBrowserModal
// Dependencies: [11051, 7883, 4495, 2]
// Exports: default

// Module 11099 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4495 */;
import ThreadUtils from "ThreadUtils" /* 7883 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11051 */;
import size from "module_2" /* 2 */;

const constants = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
let result = size.fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  const result = ThreadUtils.trackThreadBrowserOpened();
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp2) {
    const obj3 = { channelId: id.id, initialRouteName: constants.THREADS };
    rootNavigationRef.navigate("sidebar", obj3);
  }
};
