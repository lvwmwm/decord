// Module ID: 16493
// Function ID: 127385
// Name: promise
// Dependencies: []

// Module 16493 (promise)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/headless_tasks/android/ToggleDeafen.tsx");

export default (channelId) => {
  const arg1 = channelId.channelId;
  return new Promise((arg0) => {
    const channelId = arg0;
    callback(closure_2[1]).awaitStorage(() => {
      const channel = channel.getChannel(arg0);
      const deafStates = arg0(closure_2[2]).getDeafStates(channel);
      const obj = arg0(closure_2[2]);
      arg0(closure_2[3]).createDeafHandler(deafStates).onPress();
      arg0(true);
    });
  });
};
