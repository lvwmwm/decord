// Module ID: 10996
// Function ID: 10997
// Name: showThreadBrowserModal
// Dependencies: [10137, 8347, 5199, 2]
// Exports: default

// Module 10996 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 5199 */;
import ThreadUtils from "ThreadUtils" /* 8347 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10137 */;
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
