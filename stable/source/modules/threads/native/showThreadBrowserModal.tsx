// Module ID: 11258
// Function ID: 11259
// Name: showThreadBrowserModal
// Dependencies: [11209, 8055, 4646, 2]
// Exports: default

// Module 11258 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4646 */;
import ThreadUtils from "ThreadUtils" /* 8055 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11209 */;
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
