// Module ID: 10997
// Function ID: 10998
// Name: openPinnedMessages
// Dependencies: [9588, 4136, 2]
// Exports: default

// Module 10997 (openPinnedMessages)
import { ChannelDetailsNavigatorScreens as closure_2 } from "ChannelDetailsNavigatorScreens";

const result = require("set").fileFinishedImporting("modules/messages/native/openPinnedMessages.tsx");

export default function openPinnedMessages(arg0, arg1) {
  let obj = require(4136) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (tmp) {
    obj = { initialRouteName: null, channelId: null, source: null };
    obj[0] = constants.PINNED_MESSAGES;
    obj[1] = arg0;
    obj[2] = arg1;
    rootNavigationRef.navigate("sidebar", obj);
  }
};
