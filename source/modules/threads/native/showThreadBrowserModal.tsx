// Module ID: 9653
// Function ID: 9654
// Name: showThreadBrowserModal
// Dependencies: [9588, 7161, 4136, 2]
// Exports: default

// Module 9653 (showThreadBrowserModal)
import { ChannelDetailsNavigatorScreens as closure_2 } from "ChannelDetailsNavigatorScreens";

let result = require("getRootNavigationRef").fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  let obj = require(7161) /* getAccessibilityLabelFormatter */;
  const result = obj.trackThreadBrowserOpened();
  const rootNavigationRef = require(4136) /* getRootNavigationRef */.getRootNavigationRef();
  const obj2 = require(4136) /* getRootNavigationRef */;
  if (tmp2) {
    obj = { channelId: null, initialRouteName: null };
    obj[0] = id.id;
    obj[1] = constants.THREADS;
    rootNavigationRef.navigate("sidebar", obj);
  }
};
