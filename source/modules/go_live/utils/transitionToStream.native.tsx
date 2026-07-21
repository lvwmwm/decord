// Module ID: 4332
// Function ID: 38248
// Name: transitionToStream
// Dependencies: [249495552, 324599808, 37093376, 493617152, 125829120]
// Exports: default

// Module 4332 (transitionToStream)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  const channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    importDefault(dependencyMap[1]).hideActionSheet();
    const obj = importDefault(dependencyMap[1]);
    importDefault(dependencyMap[2]).popAll();
    const obj2 = importDefault(dependencyMap[2]);
    arg1(dependencyMap[3]).openGuildVoiceModal(channel, "Go Live");
    const obj3 = arg1(dependencyMap[3]);
  }
};
