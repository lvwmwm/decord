// Module ID: 10658
// Function ID: 10659
// Name: showThreadBrowserModal
// Dependencies: [9927, 8190, 5073, 2]
// Exports: default

// Module 10658 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 5073 */;
import ThreadUtils from "ThreadUtils" /* 8190 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 9927 */;
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
