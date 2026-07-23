// Module ID: 10098
// Function ID: 78197
// Name: showThreadBrowserModal
// Dependencies: [9102, 7023, 3982, 2]
// Exports: default

// Module 10098 (showThreadBrowserModal)
import { ChannelDetailsNavigatorScreens as closure_2 } from "ChannelDetailsNavigatorScreens";

let result = require("getRootNavigationRef").fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  let obj = require(7023) /* getAccessibilityLabelFormatter */;
  const result = obj.trackThreadBrowserOpened();
  const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  const obj2 = require(3982) /* getRootNavigationRef */;
  if (tmp2) {
    obj = { channelId: id.id, initialRouteName: constants.THREADS };
    rootNavigationRef.navigate("sidebar", obj);
  }
};
