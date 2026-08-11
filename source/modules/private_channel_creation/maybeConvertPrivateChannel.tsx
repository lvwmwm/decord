// Module ID: 7215
// Function ID: 7216
// Name: maybeConvertPrivateChannel
// Dependencies: [1391, 5843, 4313, 2]
// Exports: default

// Module 7215 (maybeConvertPrivateChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4313").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== require(5843) /* FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID */.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = importDefault(4313).ensurePrivateChannel(channel.recipients);
      const obj = importDefault(4313);
    }
    return ensurePrivateChannelResult;
  }
};
