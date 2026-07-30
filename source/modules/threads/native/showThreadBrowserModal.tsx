// Module ID: 10119
// Function ID: 10120
// Name: showThreadBrowserModal
// Dependencies: [9096, 6090, 4041, 2]
// Exports: default

// Module 10119 (showThreadBrowserModal)
import { ChannelDetailsNavigatorScreens as closure_2 } from "ChannelDetailsNavigatorScreens";

let result = require("getRootNavigationRef").fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  let obj = require(6090) /* getAccessibilityLabelFormatter */;
  const result = obj.trackThreadBrowserOpened();
  const rootNavigationRef = require(4041) /* getRootNavigationRef */.getRootNavigationRef();
  const obj2 = require(4041) /* getRootNavigationRef */;
  if (tmp2) {
    obj = { channelId: null, initialRouteName: null };
    obj[0] = id.id;
    obj[1] = constants.THREADS;
    rootNavigationRef.navigate("sidebar", obj);
  }
};
