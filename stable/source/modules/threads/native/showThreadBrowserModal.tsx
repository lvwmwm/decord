// Module ID: 10351
// Function ID: 10352
// Name: showThreadBrowserModal
// Dependencies: [9626, 7918, 4977, 2]
// Exports: default

// Module 10351 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4977 */;
import ThreadUtils from "ThreadUtils" /* 7918 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 9626 */;
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
