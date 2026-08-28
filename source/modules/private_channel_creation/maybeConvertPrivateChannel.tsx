// Module ID: 7446
// Function ID: 7447
// Name: maybeConvertPrivateChannel
// Dependencies: [1391, 6033, 4459, 2]
// Exports: default

// Module 7446 (maybeConvertPrivateChannel)
import _modDef4459 from "module_4459" /* 4459 */;
import FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID from "FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID" /* 6033 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = _modDef4459.ensurePrivateChannel(channel.recipients);
      const obj = _modDef4459;
    }
    return ensurePrivateChannelResult;
  }
};
