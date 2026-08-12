// Module ID: 9781
// Function ID: 9782
// Name: showThreadBrowserModal
// Dependencies: [9714, 7280, 4200, 2]
// Exports: default

// Module 9781 (showThreadBrowserModal)
import { ChannelDetailsNavigatorScreens as closure_2 } from "ChannelDetailsNavigatorScreens";

let result = require("getRootNavigationRef").fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  let obj = require(7280) /* getAccessibilityLabelFormatter */;
  const result = obj.trackThreadBrowserOpened();
  const rootNavigationRef = require(4200) /* getRootNavigationRef */.getRootNavigationRef();
  const obj2 = require(4200) /* getRootNavigationRef */;
  if (tmp2) {
    obj = { channelId: null, initialRouteName: null };
    obj[0] = id.id;
    obj[1] = constants.THREADS;
    rootNavigationRef.navigate("sidebar", obj);
  }
};
