// Module ID: 10130
// Function ID: 78391
// Name: showThreadBrowserModal
// Dependencies: [9140, 7022, 3982, 2]
// Exports: default

// Module 10130 (showThreadBrowserModal)
import { ChannelDetailsNavigatorScreens as closure_2 } from "ChannelDetailsNavigatorScreens";

let result = require("getRootNavigationRef").fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  let obj = require(7022) /* getAccessibilityLabelFormatter */;
  const result = obj.trackThreadBrowserOpened();
  const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  const obj2 = require(3982) /* getRootNavigationRef */;
  if (tmp2) {
    obj = { channelId: id.id, initialRouteName: constants.THREADS };
    rootNavigationRef.navigate("sidebar", obj);
  }
};
