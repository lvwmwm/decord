// Module ID: 11135
// Function ID: 11136
// Name: showThreadBrowserModal
// Dependencies: [10264, 8421, 5317, 2]
// Exports: default

// Module 11135 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 5317 */;
import ThreadUtils from "ThreadUtils" /* 8421 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10264 */;
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
