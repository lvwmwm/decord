// Module ID: 13749
// Function ID: 13750
// Name: showThreadBrowserModal
// Dependencies: [10411, 8398, 4971, 2]
// Exports: default

// Module 13749 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4971 */;
import ThreadUtils from "ThreadUtils" /* 8398 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10411 */;
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
