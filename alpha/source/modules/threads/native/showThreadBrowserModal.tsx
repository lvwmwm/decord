// Module ID: 11126
// Function ID: 11127
// Name: showThreadBrowserModal
// Dependencies: [10258, 8417, 5315, 2]
// Exports: default

// Module 11126 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 5315 */;
import ThreadUtils from "ThreadUtils" /* 8417 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10258 */;
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
