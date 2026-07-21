// Module ID: 6992
// Function ID: 55900
// Name: maybeConvertPrivateChannel
// Dependencies: []
// Exports: default

// Module 6992 (maybeConvertPrivateChannel)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(channelId) {
  if (channelId !== arg1(dependencyMap[1]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    const channel = channel.getChannel(channelId);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = importDefault(dependencyMap[2]).ensurePrivateChannel(channel.recipients);
      const obj = importDefault(dependencyMap[2]);
    }
    return ensurePrivateChannelResult;
  }
};
