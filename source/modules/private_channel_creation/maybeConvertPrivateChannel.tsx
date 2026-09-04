// Module ID: 7687
// Function ID: 7688
// Name: maybeConvertPrivateChannel
// Dependencies: [1386, 7161, 4494, 2]
// Exports: default

// Module 7687 (maybeConvertPrivateChannel)
import _modDef4494 from "module_4494" /* 4494 */;
import FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID from "FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID" /* 7161 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = _modDef4494.ensurePrivateChannel(channel.recipients);
      const obj = _modDef4494;
    }
    return ensurePrivateChannelResult;
  }
};
