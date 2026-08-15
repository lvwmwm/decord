// Module ID: 9883
// Function ID: 9884
// Name: transitionToStream
// Dependencies: [1391, 4342, 5260, 8663, 2]
// Exports: default

// Module 9883 (transitionToStream)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_5260").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    importDefault(4342).hideActionSheet();
    const obj = importDefault(4342);
    importDefault(5260).popAll();
    const obj2 = importDefault(5260);
    require(8663) /* openChannelCallModal */.openGuildVoiceModal(channel, "Go Live");
    const obj3 = require(8663) /* openChannelCallModal */;
  }
};
