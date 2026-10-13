// Module ID: 13956
// Function ID: 13957
// Name: maybeConvertPrivateChannel
// Dependencies: [2065, 6924, 7015, 2]
// Exports: default

// Module 13956 (maybeConvertPrivateChannel)
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 6924 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7015 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    const channel = ChannelStore.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      const obj = ChannelActionCreatorsDefault;
      ensurePrivateChannelResult = obj.ensurePrivateChannel(channel.recipients);
    }
    return ensurePrivateChannelResult;
  }
};
