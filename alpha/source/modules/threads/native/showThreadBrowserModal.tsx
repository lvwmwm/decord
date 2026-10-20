// Module ID: 10682
// Function ID: 10683
// Name: showThreadBrowserModal
// Dependencies: [9952, 8256, 5112, 2]
// Exports: default

// Module 10682 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 5112 */;
import ThreadUtils from "ThreadUtils" /* 8256 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 9952 */;
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
