// Module ID: 6022
// Function ID: 53382
// Name: maybeConvertPrivateChannel
// Dependencies: [1348, 5639, 4175, 2]
// Exports: default

// Module 6022 (maybeConvertPrivateChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("module_4175").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(channelId) {
  if (channelId !== require(5639) /* FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID */.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(channelId);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = importDefault(4175).ensurePrivateChannel(channel.recipients);
      const obj = importDefault(4175);
    }
    return ensurePrivateChannelResult;
  }
};
