// Module ID: 4571
// Function ID: 4572
// Name: transitionToStream
// Dependencies: [1391, 4310, 4572, 4576, 2]
// Exports: default

// Module 4571 (transitionToStream)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4572").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    importDefault(4310).hideActionSheet();
    const obj = importDefault(4310);
    importDefault(4572).popAll();
    const obj2 = importDefault(4572);
    require(4576) /* openChannelCallModal */.openGuildVoiceModal(channel, "Go Live");
    const obj3 = require(4576) /* openChannelCallModal */;
  }
};
