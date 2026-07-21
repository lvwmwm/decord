// Module ID: 13274
// Function ID: 100830
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: []
// Exports: default

// Module 13274 (getCurrentEmbeddedActivityChannel)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return channel.getChannel(connectedActivityChannelId.getConnectedActivityChannelId());
};
