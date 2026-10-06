// Module ID: 10712
// Function ID: 10713
// Name: showThreadBrowserModal
// Dependencies: [10666, 7420, 4743, 2]
// Exports: default

// Module 10712 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4743 */;
import ThreadUtils from "ThreadUtils" /* 7420 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10666 */;
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
