// Module ID: 11303
// Function ID: 11304
// Name: showThreadBrowserModal
// Dependencies: [11257, 8060, 4649, 2]
// Exports: default

// Module 11303 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4649 */;
import ThreadUtils from "ThreadUtils" /* 8060 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11257 */;
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
