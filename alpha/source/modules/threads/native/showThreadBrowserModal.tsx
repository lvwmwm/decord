// Module ID: 10882
// Function ID: 10883
// Name: showThreadBrowserModal
// Dependencies: [10026, 8306, 5152, 2]
// Exports: default

// Module 10882 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 5152 */;
import ThreadUtils from "ThreadUtils" /* 8306 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10026 */;
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
