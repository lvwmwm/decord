// Module ID: 11158
// Function ID: 11159
// Name: showThreadBrowserModal
// Dependencies: [10290, 8450, 5347, 2]
// Exports: default

// Module 11158 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 5347 */;
import ThreadUtils from "ThreadUtils" /* 8450 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10290 */;
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
