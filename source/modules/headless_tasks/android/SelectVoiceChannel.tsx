// Module ID: 17091
// Function ID: 17092
// Name: promise
// Dependencies: [1391, 4415, 17084, 5169, 4553, 4352, 2]

// Module 17091 (promise)
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";

const require = arg1;
let result = require("module_17084").fileFinishedImporting("modules/headless_tasks/android/SelectVoiceChannel.tsx");

export default (arg0) => {
  let importDefault;
  let require;
  ({ channelId: require, connectToVoice: importDefault } = arg0);
  return new Promise((arg0) => {
    let closure_0 = arg0;
    outer1_1(outer1_2[2]).awaitStorage(() => {
      if (outer1_1) {
        const voiceChannel = outer2_1(outer2_2[3]).selectVoiceChannel(callback);
        const obj = outer2_1(outer2_2[3]);
      }
      if (outer2_4.getChannelId() === callback) {
        const channel = outer2_3.getChannel(tmp5);
        if (null != channel) {
          const result = outer2_0(outer2_2[4]).navigateToVoiceChannel(channel);
          const obj3 = outer2_0(outer2_2[4]);
        }
      } else {
        outer2_0(outer2_2[5]).transitionToChannel(tmp5);
        const obj2 = outer2_0(outer2_2[5]);
      }
      callback(true);
    });
  });
};
