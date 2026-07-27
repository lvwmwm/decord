// Module ID: 13500
// Function ID: 103799
// Dependencies: [4034, 653, 10557, 13501, 10554, 2]

// Module 13500
import ME from "ME";

const RPCErrors = ME.RPCErrors;
let obj = {
  scope: require("RPC_SCOPE_CONFIG").RPC_LOCAL_SCOPE,
  validation(boolean) {
    let obj = importDefault(10557)(boolean);
    obj = { open: boolean.boolean() };
    return obj.keys(obj);
  },
  handler(args) {
    let obj = require(13501) /* toggleVoiceChannelChat */;
    const result = obj.toggleVoiceChannelChat(args.args.open);
    if (null == result) {
      let tmp4 = importDefault(10554);
      obj = { errorCode: RPCErrors.INVALID_CHANNEL };
      const prototype = tmp4.prototype;
      tmp4 = new tmp4(obj, "Not connected to a guild voice channel");
      throw tmp4;
    } else {
      obj = {};
      ({ channelId: obj2.channel_id, chatOpen: obj2.chat_open } = result);
      return obj;
    }
  }
};
let result = require("createRpcJoiSchemaObject").fileFinishedImporting("modules/rpc/server/commands/voiceChannelChat.tsx");

export default { [ME.RPCCommands.TOGGLE_VOICE_CHANNEL_CHAT]: obj };
