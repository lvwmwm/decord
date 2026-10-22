// Module ID: 15708
// Function ID: 15709
// Name: voiceChannelChat
// Dependencies: [6364, 1087, 11421, 15709, 9233, 2]

// Module 15708 (voiceChannelChat)
import Constants2 from "Constants" /* 6364 */;
import RPCErrorDefault from "RPCError" /* 9233 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 11421 */;
import toggleVoiceChannelChat from "toggleVoiceChannelChat" /* 15709 */;
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
