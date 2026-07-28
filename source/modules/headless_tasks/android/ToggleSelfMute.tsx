// Module ID: 16737
// Function ID: 130366
// Name: promise
// Dependencies: [1348, 16733, 10753, 10773, 2]

// Module 16737 (promise)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getMuteStates").fileFinishedImporting("modules/headless_tasks/android/ToggleSelfMute.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    let closure_0 = arg0;
    outer1_1(outer1_2[1]).awaitStorage(() => {
      const channel = outer2_3.getChannel(callback);
      const muteStates = channelId(outer2_2[2]).getMuteStates({ channel });
      const obj = channelId(outer2_2[2]);
      channelId(outer2_2[3]).createMuteHandler(muteStates).onPress();
      callback(true);
    });
  });
};
