// Module ID: 16510
// Function ID: 127492
// Name: promise
// Dependencies: [256]

// Module 16510 (promise)
import frozen from "frozen";

const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/headless_tasks/android/ToggleSelfMute.tsx");

export default (channelId) => {
  const arg1 = channelId.channelId;
  return new Promise((arg0) => {
    const channelId = arg0;
    callback(closure_2[1]).awaitStorage(() => {
      const channel = channel.getChannel(arg0);
      const muteStates = arg0(closure_2[2]).getMuteStates({ channel });
      const obj = arg0(closure_2[2]);
      arg0(closure_2[3]).createMuteHandler(muteStates).onPress();
      arg0(true);
    });
  });
};
