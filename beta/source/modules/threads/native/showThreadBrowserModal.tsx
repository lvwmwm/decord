// Module ID: 10426
// Function ID: 10427
// Name: showThreadBrowserModal
// Dependencies: [10377, 7200, 4693, 2]
// Exports: default

// Module 10426 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import ThreadUtils from "ThreadUtils" /* 7200 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10377 */;
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
