// Module ID: 7254
// Function ID: 7255
// Name: maybeConvertPrivateChannel
// Dependencies: [1391, 5882, 4354, 2]
// Exports: default

// Module 7254 (maybeConvertPrivateChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4354").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== require(5882) /* FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID */.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = importDefault(4354).ensurePrivateChannel(channel.recipients);
      const obj = importDefault(4354);
    }
    return ensurePrivateChannelResult;
  }
};
