// Module ID: 4548
// Function ID: 4549
// Name: transitionToStream
// Dependencies: [1391, 4312, 4549, 4553, 2]
// Exports: default

// Module 4548 (transitionToStream)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4549").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    importDefault(4312).hideActionSheet();
    const obj = importDefault(4312);
    importDefault(4549).popAll();
    const obj2 = importDefault(4549);
    require(4553) /* openChannelCallModal */.openGuildVoiceModal(channel, "Go Live");
    const obj3 = require(4553) /* openChannelCallModal */;
  }
};
