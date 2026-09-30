// Module ID: 10629
// Function ID: 10630
// Name: showThreadBrowserModal
// Dependencies: [10580, 7395, 4723, 2]
// Exports: default

// Module 10629 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4723 */;
import ThreadUtils from "ThreadUtils" /* 7395 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10580 */;
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
