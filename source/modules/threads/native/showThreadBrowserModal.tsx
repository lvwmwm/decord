// Module ID: 10894
// Function ID: 10895
// Name: showThreadBrowserModal
// Dependencies: [10847, 7713, 4336, 2]
// Exports: default

// Module 10894 (showThreadBrowserModal)
import set from "set" /* 2 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4336 */;
import getAccessibilityLabelFormatter from "getAccessibilityLabelFormatter" /* 7713 */;
import ChannelDetailsNavigatorScreens from "ChannelDetailsNavigatorScreens" /* 10847 */;

let closure_2 = ChannelDetailsNavigatorScreens.ChannelDetailsNavigatorScreens;
let result = set.fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  let obj = getAccessibilityLabelFormatter;
  const result = obj.trackThreadBrowserOpened();
  const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
  const obj2 = getRootNavigationRef;
  if (tmp2) {
    obj = { channelId: null, initialRouteName: null };
    obj[0] = id.id;
    obj[1] = constants.THREADS;
    rootNavigationRef.navigate("sidebar", obj);
  }
};
