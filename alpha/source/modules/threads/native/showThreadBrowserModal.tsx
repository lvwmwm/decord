// Module ID: 11129
// Function ID: 11130
// Name: showThreadBrowserModal
// Dependencies: [10267, 8471, 5322, 2]
// Exports: default

// Module 11129 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 5322 */;
import ThreadUtils from "ThreadUtils" /* 8471 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10267 */;
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
