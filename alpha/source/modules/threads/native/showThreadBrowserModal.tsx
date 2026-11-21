// Module ID: 13871
// Function ID: 13872
// Name: showThreadBrowserModal
// Dependencies: [10531, 8518, 5090, 2]
// Exports: default

// Module 13871 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 5090 */;
import ThreadUtils from "ThreadUtils" /* 8518 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10531 */;
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
