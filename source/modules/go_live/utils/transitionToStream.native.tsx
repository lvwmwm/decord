// Module ID: 4459
// Function ID: 4460
// Name: transitionToStream
// Dependencies: [1372, 4223, 4460, 4464, 2]
// Exports: default

// Module 4459 (transitionToStream)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4460").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    importDefault(4223).hideActionSheet();
    const obj = importDefault(4223);
    importDefault(4460).popAll();
    const obj2 = importDefault(4460);
    require(4464) /* openChannelCallModal */.openGuildVoiceModal(channel, "Go Live");
    const obj3 = require(4464) /* openChannelCallModal */;
  }
};
