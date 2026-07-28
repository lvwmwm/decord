// Module ID: 4371
// Function ID: 38415
// Name: transitionToStream
// Dependencies: [1348, 4133, 4372, 4376, 2]
// Exports: default

// Module 4371 (transitionToStream)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("module_4372").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    importDefault(4133).hideActionSheet();
    const obj = importDefault(4133);
    importDefault(4372).popAll();
    const obj2 = importDefault(4372);
    require(4376) /* getVoiceChannelKeyByChannelId */.openGuildVoiceModal(channel, "Go Live");
    const obj3 = require(4376) /* getVoiceChannelKeyByChannelId */;
  }
};
