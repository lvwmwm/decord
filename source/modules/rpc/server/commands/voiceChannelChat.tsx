// Module ID: 13435
// Function ID: 103340
// Dependencies: [4033, 653, 10499, 13436, 10496, 2]

// Module 13435
import ME from "ME";

const RPCErrors = ME.RPCErrors;
let obj = {
  scope: require("RPC_SCOPE_CONFIG").RPC_LOCAL_SCOPE,
  validation(boolean) {
    let obj = importDefault(10499)(boolean);
    obj = { open: boolean.boolean() };
    return obj.keys(obj);
  },
  handler(args) {
    let obj = require(13436) /* toggleVoiceChannelChat */;
    const result = obj.toggleVoiceChannelChat(args.args.open);
    if (null == result) {
      let tmp4 = importDefault(10496);
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
