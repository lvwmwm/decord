// Module ID: 11235
// Function ID: 11236
// Name: showThreadBrowserModal
// Dependencies: [11186, 8026, 4615, 2]
// Exports: default

// Module 11235 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4615 */;
import ThreadUtils from "ThreadUtils" /* 8026 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11186 */;
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
