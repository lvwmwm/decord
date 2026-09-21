// Module ID: 11229
// Function ID: 11230
// Name: showThreadBrowserModal
// Dependencies: [11180, 8023, 4614, 2]
// Exports: default

// Module 11229 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4614 */;
import ThreadUtils from "ThreadUtils" /* 8023 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11180 */;
import size from "module_2" /* 2 */;

const constants = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
let result = size.fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  const result = ThreadUtils.trackThreadBrowserOpened();
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp2) {
    const obj3 = { channelId: id.id, initialRouteName: constants.THREADS };
    rootNavigationRef.navigate("sidebar", obj3);
  }
};
