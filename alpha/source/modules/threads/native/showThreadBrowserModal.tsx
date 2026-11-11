// Module ID: 10936
// Function ID: 10937
// Name: showThreadBrowserModal
// Dependencies: [10834, 8942, 5430, 2]
// Exports: default

// Module 10936 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 5430 */;
import ThreadUtils from "ThreadUtils" /* 8942 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10834 */;
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
