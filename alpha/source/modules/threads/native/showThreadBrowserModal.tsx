// Module ID: 15170
// Function ID: 15171
// Name: showThreadBrowserModal
// Dependencies: [11209, 9019, 5487, 2]
// Exports: default

// Module 15170 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 5487 */;
import ThreadUtils from "ThreadUtils" /* 9019 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11209 */;
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
