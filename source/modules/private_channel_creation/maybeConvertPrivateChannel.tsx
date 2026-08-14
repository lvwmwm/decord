// Module ID: 7281
// Function ID: 7282
// Name: maybeConvertPrivateChannel
// Dependencies: [1391, 5904, 4355, 2]
// Exports: default

// Module 7281 (maybeConvertPrivateChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4355").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== require(5904) /* FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID */.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = importDefault(4355).ensurePrivateChannel(channel.recipients);
      const obj = importDefault(4355);
    }
    return ensurePrivateChannelResult;
  }
};
