// Module ID: 17851
// Function ID: 17852
// Name: promise
// Dependencies: [1386, 17852, 9012, 2]

// Module 17851 (promise)
import closure_3 from "ensureGuildLoaded" /* 1386 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/headless_tasks/android/Disconnect.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    closure_1_1(closure_1_2[1]).awaitStorage(() => {
      const channel = closure_2_3.getChannel(callback);
      if (null != channel) {
        channelId(closure_2_2[2]).handleDisconnect(channel);
        const obj = channelId(closure_2_2[2]);
      }
      callback(true);
    });
  });
};
