// Module ID: 14795
// Function ID: 14796
// Name: voiceChannelChat
// Dependencies: [4663, 1078, 9580, 14796, 9577, 2]

// Module 14795 (voiceChannelChat)
import Constants2 from "Constants" /* 4663 */;
import RPCErrorDefault from "RPCError" /* 9577 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9580 */;
import toggleVoiceChannelChat from "toggleVoiceChannelChat" /* 14796 */;
import Constants from "Constants" /* 1078 */;
import size from "module_2" /* 2 */;

const RPCErrors = Constants.RPCErrors;
let result = size.fileFinishedImporting("modules/rpc/server/commands/voiceChannelChat.tsx");

export default {
  [Constants.RPCCommands.TOGGLE_VOICE_CHANNEL_CHAT]: {
    scope: Constants2.RPC_LOCAL_SCOPE,
    validation(boolean) {
      const obj = createRpcJoiSchemaObjectDefault(boolean);
      return obj.keys({ open: boolean.boolean() });
    },
    handler(args) {
      const result = toggleVoiceChannelChat.toggleVoiceChannelChat(args.args.open);
      if (null == result) {
        const obj3 = { errorCode: RPCErrors.INVALID_CHANNEL };
        const tmp8 = new RPCErrorDefault(obj3, "Not connected to a guild voice channel");
        throw tmp8;
      } else {
        ({ channelId: obj2.channel_id, chatOpen: obj2.chat_open } = result);
        return { channel_id: null, chat_open: null };
      }
    }
  }
};
