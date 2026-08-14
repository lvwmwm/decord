// Module ID: 11069
// Function ID: 11070
// Name: openPinnedMessages
// Dependencies: [9729, 4198, 2]
// Exports: default

// Module 11069 (openPinnedMessages)
import { ChannelDetailsNavigatorScreens as closure_2 } from "ChannelDetailsNavigatorScreens";

const result = require("set").fileFinishedImporting("modules/messages/native/openPinnedMessages.tsx");

export default function openPinnedMessages(arg0, arg1) {
  let obj = require(4198) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (tmp) {
    obj = { initialRouteName: null, channelId: null, source: null };
    obj[0] = constants.PINNED_MESSAGES;
    obj[1] = arg0;
    obj[2] = arg1;
    rootNavigationRef.navigate("sidebar", obj);
  }
};
