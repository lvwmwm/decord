// Module ID: 13453
// Function ID: 13454
// Name: maybeConvertPrivateChannel
// Dependencies: [2063, 6910, 7001, 2]
// Exports: default

// Module 13453 (maybeConvertPrivateChannel)
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 6910 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7001 */;
import ChannelStore from "ChannelStore" /* 2063 */;
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
