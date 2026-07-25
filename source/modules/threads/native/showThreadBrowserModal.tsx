// Module ID: 10062
// Function ID: 78021
// Name: showThreadBrowserModal
// Dependencies: [9032, 6040, 3983, 2]
// Exports: default

// Module 10062 (showThreadBrowserModal)
import { ChannelDetailsNavigatorScreens as closure_2 } from "ChannelDetailsNavigatorScreens";

let result = require("getRootNavigationRef").fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  let obj = require(6040) /* getAccessibilityLabelFormatter */;
  const result = obj.trackThreadBrowserOpened();
  const rootNavigationRef = require(3983) /* getRootNavigationRef */.getRootNavigationRef();
  const obj2 = require(3983) /* getRootNavigationRef */;
  if (tmp2) {
    obj = { channelId: id.id, initialRouteName: constants.THREADS };
    rootNavigationRef.navigate("sidebar", obj);
  }
};
