// Module ID: 16497
// Function ID: 127405
// Name: promise
// Dependencies: []

// Module 16497 (promise)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/headless_tasks/android/SelectVoiceChannel.tsx");

export default (arg0) => {
  ({ channelId: closure_0, connectToVoice: closure_1 } = arg0);
  return new Promise((arg0) => {
    callback(closure_2[2]).awaitStorage(() => {
      if (callback) {
        const voiceChannel = callback(closure_2[3]).selectVoiceChannel(arg0);
        const obj = callback(closure_2[3]);
      }
      if (channelId.getChannelId() === arg0) {
        const channel = channel.getChannel(arg0);
        if (null != channel) {
          const result = arg0(closure_2[4]).navigateToVoiceChannel(channel);
          const obj3 = arg0(closure_2[4]);
        }
      } else {
        arg0(closure_2[5]).transitionToChannel(arg0);
        const obj2 = arg0(closure_2[5]);
      }
      arg0(true);
    });
  });
};
