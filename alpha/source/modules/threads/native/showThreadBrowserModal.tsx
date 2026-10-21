// Module ID: 10826
// Function ID: 10827
// Name: showThreadBrowserModal
// Dependencies: [9982, 8284, 5133, 2]
// Exports: default

// Module 10826 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 5133 */;
import ThreadUtils from "ThreadUtils" /* 8284 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 9982 */;
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
