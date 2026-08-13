// Module ID: 17085
// Function ID: 17086
// Name: promise
// Dependencies: [1391, 17086, 9198, 2]

// Module 17085 (promise)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("_handleToggleVideo").fileFinishedImporting("modules/headless_tasks/android/Disconnect.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    let closure_0 = arg0;
    outer1_1(outer1_2[1]).awaitStorage(() => {
      const channel = outer2_3.getChannel(callback);
      if (null != channel) {
        channelId(outer2_2[2]).handleDisconnect(channel);
        const obj = channelId(outer2_2[2]);
      }
      callback(true);
    });
  });
};
