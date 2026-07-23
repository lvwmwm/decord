// Module ID: 16626
// Function ID: 129662
// Name: promise
// Dependencies: [1348, 16623, 10748, 10733, 2]

// Module 16626 (promise)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getDeafStates").fileFinishedImporting("modules/headless_tasks/android/ToggleDeafen.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    let closure_0 = arg0;
    outer1_1(outer1_2[1]).awaitStorage(() => {
      const channel = outer2_3.getChannel(callback);
      const deafStates = channelId(outer2_2[2]).getDeafStates(channel);
      const obj = channelId(outer2_2[2]);
      channelId(outer2_2[3]).createDeafHandler(deafStates).onPress();
      callback(true);
    });
  });
};
