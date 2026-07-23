// Module ID: 4336
// Function ID: 38288
// Name: transitionToStream
// Dependencies: [1348, 4098, 4337, 4341, 2]
// Exports: default

// Module 4336 (transitionToStream)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("module_4337").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    importDefault(4098).hideActionSheet();
    const obj = importDefault(4098);
    importDefault(4337).popAll();
    const obj2 = importDefault(4337);
    require(4341) /* getVoiceChannelKeyByChannelId */.openGuildVoiceModal(channel, "Go Live");
    const obj3 = require(4341) /* getVoiceChannelKeyByChannelId */;
  }
};
