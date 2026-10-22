// Module ID: 14587
// Function ID: 14588
// Name: maybeConvertPrivateChannel
// Dependencies: [4821, 7308, 7396, 2]
// Exports: default

// Module 14587 (maybeConvertPrivateChannel)
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7308 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7396 */;
import ChannelStore from "ChannelStore" /* 4821 */;
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
