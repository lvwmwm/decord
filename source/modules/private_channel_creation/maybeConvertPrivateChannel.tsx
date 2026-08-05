// Module ID: 7108
// Function ID: 7109
// Name: maybeConvertPrivateChannel
// Dependencies: [1372, 5737, 4265, 2]
// Exports: default

// Module 7108 (maybeConvertPrivateChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4265").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== require(5737) /* FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID */.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = importDefault(4265).ensurePrivateChannel(channel.recipients);
      const obj = importDefault(4265);
    }
    return ensurePrivateChannelResult;
  }
};
