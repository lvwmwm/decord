// Module ID: 11454
// Function ID: 11455
// Name: showThreadBrowserModal
// Dependencies: [11363, 8143, 5189, 2]
// Exports: default

// Module 11454 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 5189 */;
import ThreadUtils from "ThreadUtils" /* 8143 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11363 */;
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
