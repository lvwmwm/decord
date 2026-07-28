// Module ID: 16740
// Function ID: 130382
// Name: promise
// Dependencies: [1348, 4237, 16733, 4979, 4376, 4173, 2]

// Module 16740 (promise)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
let result = require("module_16733").fileFinishedImporting("modules/headless_tasks/android/SelectVoiceChannel.tsx");

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
        const channel = outer2_3.getChannel(callback);
        if (null != channel) {
          const result = outer2_0(outer2_2[4]).navigateToVoiceChannel(channel);
          const obj3 = outer2_0(outer2_2[4]);
        }
      } else {
        outer2_0(outer2_2[5]).transitionToChannel(callback);
        const obj2 = outer2_0(outer2_2[5]);
      }
      callback(true);
    });
  });
};
