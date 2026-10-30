// Module ID: 15173
// Function ID: 15174
// Name: maybeConvertPrivateChannel
// Dependencies: [4858, 7390, 7479, 2]
// Exports: default

// Module 15173 (maybeConvertPrivateChannel)
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7390 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7479 */;
import ChannelStore from "ChannelStore" /* 4858 */;
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
