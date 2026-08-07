// Module ID: 4506
// Function ID: 4507
// Name: transitionToStream
// Dependencies: [1372, 4270, 4507, 4511, 2]
// Exports: default

// Module 4506 (transitionToStream)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4507").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    importDefault(4270).hideActionSheet();
    const obj = importDefault(4270);
    importDefault(4507).popAll();
    const obj2 = importDefault(4507);
    require(4511) /* openChannelCallModal */.openGuildVoiceModal(channel, "Go Live");
    const obj3 = require(4511) /* openChannelCallModal */;
  }
};
