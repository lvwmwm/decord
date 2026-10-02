// Module ID: 7177
// Function ID: 7178
// Name: maybeConvertPrivateChannel
// Dependencies: [2051, 6643, 4850, 2]
// Exports: default

// Module 7177 (maybeConvertPrivateChannel)
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4850 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 6643 */;
import ChannelStore from "ChannelStore" /* 2051 */;
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
