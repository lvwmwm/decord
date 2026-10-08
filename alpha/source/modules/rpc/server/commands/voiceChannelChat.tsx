// Module ID: 14598
// Function ID: 14599
// Name: voiceChannelChat
// Dependencies: [5635, 1085, 11137, 14599, 11134, 2]

// Module 14598 (voiceChannelChat)
import Constants2 from "Constants" /* 5635 */;
import RPCErrorDefault from "RPCError" /* 11134 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 11137 */;
import toggleVoiceChannelChat from "toggleVoiceChannelChat" /* 14599 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const RPC_LOCAL_SCOPE = Constants2.RPC_LOCAL_SCOPE;
const RPCErrors = Constants.RPCErrors;
let obj = {
  scope: RPC_LOCAL_SCOPE,
  validation(boolean) {
    const obj = createRpcJoiSchemaObjectDefault(boolean);
    const obj2 = { open: boolean.boolean() };
    return obj.keys(obj2);
  },
  handler(args) {
    const open = args.args.open;
    const obj = toggleVoiceChannelChat;
    const result = obj.toggleVoiceChannelChat(open);
    if (null == result) {
      const self = this;
      const self2 = this;
      const obj3 = { errorCode: RPCErrors.INVALID_CHANNEL };
      const tmp6 = new RPCErrorDefault(obj3, "Not connected to a guild voice channel");
      throw tmp6;
    } else {
      const obj5 = { channel_id: null, chat_open: null };
      ({ channelId: obj2.channel_id, chatOpen: obj2.chat_open } = result);
      return obj5;
    }
  }
};
let result = size.fileFinishedImporting("modules/rpc/server/commands/voiceChannelChat.tsx");

export default { [Constants.RPCCommands.TOGGLE_VOICE_CHANNEL_CHAT]: obj };
