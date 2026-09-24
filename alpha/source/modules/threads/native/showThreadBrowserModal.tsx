// Module ID: 11317
// Function ID: 11318
// Name: showThreadBrowserModal
// Dependencies: [11268, 8110, 4687, 2]
// Exports: default

// Module 11317 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4687 */;
import ThreadUtils from "ThreadUtils" /* 8110 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11268 */;
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
