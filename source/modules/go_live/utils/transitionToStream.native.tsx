// Module ID: 4549
// Function ID: 4550
// Name: transitionToStream
// Dependencies: [1391, 4310, 4550, 4554, 2]
// Exports: default

// Module 4549 (transitionToStream)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4550").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    importDefault(4310).hideActionSheet();
    const obj = importDefault(4310);
    importDefault(4550).popAll();
    const obj2 = importDefault(4550);
    require(4554) /* openChannelCallModal */.openGuildVoiceModal(channel, "Go Live");
    const obj3 = require(4554) /* openChannelCallModal */;
  }
};
