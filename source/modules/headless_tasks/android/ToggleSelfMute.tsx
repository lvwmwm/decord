// Module ID: 17752
// Function ID: 17753
// Name: promise
// Dependencies: [1386, 17748, 6198, 10108, 2]

// Module 17752 (promise)
import closure_3 from "ensureGuildLoaded" /* 1386 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/headless_tasks/android/ToggleSelfMute.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    closure_1_1(closure_1_2[1]).awaitStorage(() => {
      const channel = closure_2_3.getChannel(callback);
      const muteStates = channelId(closure_2_2[2]).getMuteStates({ channel });
      const obj = channelId(closure_2_2[2]);
      channelId(closure_2_2[3]).createMuteHandler(muteStates).onPress();
      callback(true);
    });
  });
};
