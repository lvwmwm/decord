// Module ID: 13780
// Function ID: 13781
// Name: showThreadBrowserModal
// Dependencies: [10469, 8399, 4969, 2]
// Exports: default

// Module 13780 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4969 */;
import ThreadUtils from "ThreadUtils" /* 8399 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10469 */;
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
