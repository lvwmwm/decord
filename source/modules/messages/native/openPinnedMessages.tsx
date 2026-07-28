// Module ID: 9489
// Function ID: 73892
// Name: openPinnedMessages
// Dependencies: [9076, 4017, 2]
// Exports: default

// Module 9489 (openPinnedMessages)
import { ChannelDetailsNavigatorScreens as closure_2 } from "ChannelDetailsNavigatorScreens";

const result = require("set").fileFinishedImporting("modules/messages/native/openPinnedMessages.tsx");

export default function openPinnedMessages(channelId, source) {
  let obj = require(4017) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (tmp) {
    obj = { initialRouteName: constants.PINNED_MESSAGES, channelId, source };
    rootNavigationRef.navigate("sidebar", obj);
  }
};
