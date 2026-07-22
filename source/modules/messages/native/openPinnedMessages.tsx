// Module ID: 9485
// Function ID: 73926
// Name: openPinnedMessages
// Dependencies: []
// Exports: default

// Module 9485 (openPinnedMessages)
let closure_2 = require(dependencyMap[0]).ChannelDetailsNavigatorScreens;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/messages/native/openPinnedMessages.tsx");

export default function openPinnedMessages(channelId, source) {
  let obj = require(dependencyMap[1]);
  const rootNavigationRef = obj.getRootNavigationRef();
  if (tmp) {
    obj = { initialRouteName: constants.PINNED_MESSAGES, channelId, source };
    rootNavigationRef.navigate("sidebar", obj);
  }
};
