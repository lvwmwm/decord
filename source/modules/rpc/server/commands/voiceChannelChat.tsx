// Module ID: 13544
// Function ID: 103972
// Dependencies: [4068, 653, 10595, 13545, 10592, 2]

// Module 13544
import ME from "ME";

const RPCErrors = ME.RPCErrors;
let obj = {
  scope: require("RPC_SCOPE_CONFIG").RPC_LOCAL_SCOPE,
  validation(boolean) {
    let obj = importDefault(10595)(boolean);
    obj = { open: boolean.boolean() };
    return obj.keys(obj);
  },
  handler(args) {
    let obj = require(13545) /* toggleVoiceChannelChat */;
    const result = obj.toggleVoiceChannelChat(args.args.open);
    if (null == result) {
      let tmp4 = importDefault(10592);
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
