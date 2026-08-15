// Module ID: 7502
// Function ID: 7503
// Name: maybeConvertPrivateChannel
// Dependencies: [1391, 5389, 4770, 2]
// Exports: default

// Module 7502 (maybeConvertPrivateChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4770").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== require(5389) /* FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID */.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = importDefault(4770).ensurePrivateChannel(channel.recipients);
      const obj = importDefault(4770);
    }
    return ensurePrivateChannelResult;
  }
};
