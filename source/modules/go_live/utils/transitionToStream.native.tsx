// Module ID: 4337
// Function ID: 38300
// Name: transitionToStream
// Dependencies: [1348, 4099, 4338, 4342, 2]
// Exports: default

// Module 4337 (transitionToStream)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("module_4338").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    importDefault(4099).hideActionSheet();
    const obj = importDefault(4099);
    importDefault(4338).popAll();
    const obj2 = importDefault(4338);
    require(4342) /* getVoiceChannelKeyByChannelId */.openGuildVoiceModal(channel, "Go Live");
    const obj3 = require(4342) /* getVoiceChannelKeyByChannelId */;
  }
};
