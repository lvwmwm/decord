// Module ID: 10595
// Function ID: 10596
// Name: showThreadBrowserModal
// Dependencies: [9863, 8144, 5036, 2]
// Exports: default

// Module 10595 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 5036 */;
import ThreadUtils from "ThreadUtils" /* 8144 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 9863 */;
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
