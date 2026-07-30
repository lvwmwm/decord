// Module ID: 6038
// Function ID: 6039
// Name: maybeConvertPrivateChannel
// Dependencies: [1372, 5657, 4199, 2]
// Exports: default

// Module 6038 (maybeConvertPrivateChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4199").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== require(5657) /* FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID */.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = importDefault(4199).ensurePrivateChannel(channel.recipients);
      const obj = importDefault(4199);
    }
    return ensurePrivateChannelResult;
  }
};
