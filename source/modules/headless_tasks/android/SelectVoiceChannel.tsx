// Module ID: 16937
// Function ID: 16938
// Name: promise
// Dependencies: [1372, 4373, 16930, 5128, 4511, 4310, 2]

// Module 16937 (promise)
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";

const require = arg1;
let result = require("module_16930").fileFinishedImporting("modules/headless_tasks/android/SelectVoiceChannel.tsx");

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
