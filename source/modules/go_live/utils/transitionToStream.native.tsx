// Module ID: 4508
// Function ID: 4509
// Name: transitionToStream
// Dependencies: [1391, 4271, 4509, 4513, 2]
// Exports: default

// Module 4508 (transitionToStream)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4509").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    importDefault(4271).hideActionSheet();
    const obj = importDefault(4271);
    importDefault(4509).popAll();
    const obj2 = importDefault(4509);
    require(4513) /* openChannelCallModal */.openGuildVoiceModal(channel, "Go Live");
    const obj3 = require(4513) /* openChannelCallModal */;
  }
};
