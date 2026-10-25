// Module ID: 15769
// Function ID: 15770
// Name: voiceChannelChat
// Dependencies: [6378, 1087, 11473, 15770, 9264, 2]

// Module 15769 (voiceChannelChat)
import Constants2 from "Constants" /* 6378 */;
import RPCErrorDefault from "RPCError" /* 9264 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 11473 */;
import toggleVoiceChannelChat from "toggleVoiceChannelChat" /* 15770 */;
import Constants from "Constants" /* 1087 */;
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
