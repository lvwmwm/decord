// Module ID: 16482
// Function ID: 127337
// Name: promise
// Dependencies: []

// Module 16482 (promise)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/headless_tasks/android/Disconnect.tsx");

export default (channelId) => {
  const arg1 = channelId.channelId;
  return new Promise((arg0) => {
    const channelId = arg0;
    callback(closure_2[1]).awaitStorage(() => {
      const channel = channel.getChannel(arg0);
      if (null != channel) {
        arg0(closure_2[2]).handleDisconnect(channel);
        const obj = arg0(closure_2[2]);
      }
      arg0(true);
    });
  });
};
