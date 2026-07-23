// Module ID: 6997
// Function ID: 55945
// Name: maybeConvertPrivateChannel
// Dependencies: [1348, 5606, 4140, 2]
// Exports: default

// Module 6997 (maybeConvertPrivateChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("module_4140").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(channelId) {
  if (channelId !== require(5606) /* FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID */.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(channelId);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = importDefault(4140).ensurePrivateChannel(channel.recipients);
      const obj = importDefault(4140);
    }
    return ensurePrivateChannelResult;
  }
};
