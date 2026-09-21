// Module ID: 11267
// Function ID: 11268
// Name: showThreadBrowserModal
// Dependencies: [11221, 8028, 4617, 2]
// Exports: default

// Module 11267 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4617 */;
import ThreadUtils from "ThreadUtils" /* 8028 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11221 */;
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
