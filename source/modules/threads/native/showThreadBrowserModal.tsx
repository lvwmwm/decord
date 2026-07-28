// Module ID: 10102
// Function ID: 78151
// Name: showThreadBrowserModal
// Dependencies: [9076, 6074, 4017, 2]
// Exports: default

// Module 10102 (showThreadBrowserModal)
import { ChannelDetailsNavigatorScreens as closure_2 } from "ChannelDetailsNavigatorScreens";

let result = require("getRootNavigationRef").fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  let obj = require(6074) /* getAccessibilityLabelFormatter */;
  const result = obj.trackThreadBrowserOpened();
  const rootNavigationRef = require(4017) /* getRootNavigationRef */.getRootNavigationRef();
  const obj2 = require(4017) /* getRootNavigationRef */;
  if (tmp2) {
    obj = { channelId: id.id, initialRouteName: constants.THREADS };
    rootNavigationRef.navigate("sidebar", obj);
  }
};
