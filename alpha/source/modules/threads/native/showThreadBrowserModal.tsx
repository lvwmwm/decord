// Module ID: 10316
// Function ID: 10317
// Name: showThreadBrowserModal
// Dependencies: [9600, 7904, 4938, 2]
// Exports: default

// Module 10316 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4938 */;
import ThreadUtils from "ThreadUtils" /* 7904 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 9600 */;
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
