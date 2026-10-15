// Module ID: 10583
// Function ID: 10584
// Name: showThreadBrowserModal
// Dependencies: [9848, 8140, 5033, 2]
// Exports: default

// Module 10583 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 5033 */;
import ThreadUtils from "ThreadUtils" /* 8140 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 9848 */;
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
