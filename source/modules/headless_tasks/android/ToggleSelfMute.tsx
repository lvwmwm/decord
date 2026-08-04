// Module ID: 16894
// Function ID: 16895
// Name: promise
// Dependencies: [1372, 16890, 5869, 10764, 2]

// Module 16894 (promise)
import ensureGuildLoaded from "ensureGuildLoaded";

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
