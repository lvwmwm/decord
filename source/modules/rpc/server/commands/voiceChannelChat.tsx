// Module ID: 14436
// Function ID: 14437
// Dependencies: [4383, 673, 9486, 14437, 9483, 2]

// Module 14436
import set from "set" /* 2 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4383 */;
import prototypeDefault from "prototype" /* 9483 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9486 */;
import toggleVoiceChannelChat from "toggleVoiceChannelChat" /* 14437 */;
import ME from "ME" /* 673 */;

const RPCErrors = ME.RPCErrors;
let obj = {
  scope: RPC_SCOPE_CONFIG.RPC_LOCAL_SCOPE,
  validation(boolean) {
    let obj = createRpcJoiSchemaObjectDefault(boolean);
    obj = { open: boolean.boolean() };
    return obj.keys(obj);
  },
  handler(args) {
    let obj = toggleVoiceChannelChat;
    const result = obj.toggleVoiceChannelChat(args.args.open);
    if (null == result) {
      obj = { errorCode: null };
      obj[0] = RPCErrors.INVALID_CHANNEL;
      const tmp8 = new prototypeDefault(obj, "Not connected to a guild voice channel");
      throw tmp8;
    } else {
      obj = { channel_id: null, chat_open: null };
      ({ channelId: obj2[0], chatOpen: obj2[1] } = result);
      return obj;
    }
  }
};
let result = set.fileFinishedImporting("modules/rpc/server/commands/voiceChannelChat.tsx");

export default { [ME.RPCCommands.TOGGLE_VOICE_CHANNEL_CHAT]: obj };
