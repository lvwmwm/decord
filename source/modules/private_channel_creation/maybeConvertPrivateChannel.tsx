// Module ID: 5988
// Function ID: 53262
// Name: maybeConvertPrivateChannel
// Dependencies: [1348, 5604, 4141, 2]
// Exports: default

// Module 5988 (maybeConvertPrivateChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("module_4141").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(channelId) {
  if (channelId !== require(5604) /* FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID */.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(channelId);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = importDefault(4141).ensurePrivateChannel(channel.recipients);
      const obj = importDefault(4141);
    }
    return ensurePrivateChannelResult;
  }
};
