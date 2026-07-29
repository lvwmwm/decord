// Module ID: 4394
// Function ID: 4395
// Name: transitionToStream
// Dependencies: [1372, 4157, 4395, 4399, 2]
// Exports: default

// Module 4394 (transitionToStream)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4395").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    importDefault(4157).hideActionSheet();
    const obj = importDefault(4157);
    importDefault(4395).popAll();
    const obj2 = importDefault(4395);
    require(4399) /* openChannelCallModal */.openGuildVoiceModal(channel, "Go Live");
    const obj3 = require(4399) /* openChannelCallModal */;
  }
};
