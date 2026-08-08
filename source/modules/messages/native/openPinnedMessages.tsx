// Module ID: 11078
// Function ID: 11079
// Name: openPinnedMessages
// Dependencies: [9669, 4159, 2]
// Exports: default

// Module 11078 (openPinnedMessages)
import { ChannelDetailsNavigatorScreens as closure_2 } from "ChannelDetailsNavigatorScreens";

const result = require("set").fileFinishedImporting("modules/messages/native/openPinnedMessages.tsx");

export default function openPinnedMessages(arg0, arg1) {
  let obj = require(4159) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (tmp) {
    obj = { initialRouteName: null, channelId: null, source: null };
    obj[0] = constants.PINNED_MESSAGES;
    obj[1] = arg0;
    obj[2] = arg1;
    rootNavigationRef.navigate("sidebar", obj);
  }
};
