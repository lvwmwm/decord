// Module ID: 10465
// Function ID: 10466
// Name: showThreadBrowserModal
// Dependencies: [10419, 7204, 4695, 2]
// Exports: default

// Module 10465 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4695 */;
import ThreadUtils from "ThreadUtils" /* 7204 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10419 */;
import size from "module_2" /* 2 */;

const constants = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
let result = size.fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  const obj = ThreadUtils;
  const result = obj.trackThreadBrowserOpened();
  const obj2 = RootNavigationRef;
  const rootNavigationRef = obj2.getRootNavigationRef();
  const tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
  if (tmp2) {
    const obj3 = { channelId: id.id, initialRouteName: constants.THREADS };
    rootNavigationRef.navigate("sidebar", obj3);
  }
};
