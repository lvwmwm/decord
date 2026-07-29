// Module ID: 13567
// Function ID: 13568
// Dependencies: [4092, 676, 10629, 13568, 10626, 2]

// Module 13567
import ME from "ME";

const RPCErrors = ME.RPCErrors;
let obj = {
  scope: require("RPC_SCOPE_CONFIG").RPC_LOCAL_SCOPE,
  validation(boolean) {
    let obj = importDefault(10629)(boolean);
    obj = { open: boolean.boolean() };
    return obj.keys(obj);
  },
  handler(args) {
    let obj = require(13568) /* toggleVoiceChannelChat */;
    const result = obj.toggleVoiceChannelChat(args.args.open);
    if (null == result) {
      obj = { errorCode: null };
      obj[0] = RPCErrors.INVALID_CHANNEL;
      const tmp8 = new importDefault(10626)(obj, "Not connected to a guild voice channel");
      throw tmp8;
    } else {
      obj = { channel_id: null, chat_open: null };
      ({ channelId: obj2[0], chatOpen: obj2[1] } = result);
      return obj;
    }
  }
};
let result = require("createRpcJoiSchemaObject").fileFinishedImporting("modules/rpc/server/commands/voiceChannelChat.tsx");

export default { [ME.RPCCommands.TOGGLE_VOICE_CHANNEL_CHAT]: obj };
