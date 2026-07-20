// Module ID: 5761
// Function ID: 49326
// Name: getCurrentVoiceChannel
// Dependencies: []
// Exports: default

// Module 5761 (getCurrentVoiceChannel)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/rpc/helpers/getCurrentVoiceChannel.tsx");

export default function getCurrentVoiceChannel() {
  const id = store.getId();
  const voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, store.getSessionId());
  let channelId;
  if (null != voiceStateForSession) {
    channelId = voiceStateForSession.channelId;
  }
  return channel.getChannel(channelId);
};
