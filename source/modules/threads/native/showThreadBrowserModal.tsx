// Module ID: 10275
// Function ID: 10276
// Name: showThreadBrowserModal
// Dependencies: [9280, 7148, 4107, 2]
// Exports: default

// Module 10275 (showThreadBrowserModal)
import { ChannelDetailsNavigatorScreens as closure_2 } from "ChannelDetailsNavigatorScreens";

let result = require("getRootNavigationRef").fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  let obj = require(7148) /* getAccessibilityLabelFormatter */;
  const result = obj.trackThreadBrowserOpened();
  const rootNavigationRef = require(4107) /* getRootNavigationRef */.getRootNavigationRef();
  const obj2 = require(4107) /* getRootNavigationRef */;
  if (tmp2) {
    obj = { channelId: null, initialRouteName: null };
    obj[0] = id.id;
    obj[1] = constants.THREADS;
    rootNavigationRef.navigate("sidebar", obj);
  }
};
