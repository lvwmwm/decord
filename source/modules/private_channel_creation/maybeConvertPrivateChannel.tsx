// Module ID: 7154
// Function ID: 7155
// Name: maybeConvertPrivateChannel
// Dependencies: [1372, 5783, 4312, 2]
// Exports: default

// Module 7154 (maybeConvertPrivateChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4312").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== require(5783) /* FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID */.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = importDefault(4312).ensurePrivateChannel(channel.recipients);
      const obj = importDefault(4312);
    }
    return ensurePrivateChannelResult;
  }
};
