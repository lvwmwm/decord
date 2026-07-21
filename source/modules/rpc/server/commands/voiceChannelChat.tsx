// Module ID: 13314
// Function ID: 101151
// Dependencies: []

// Module 13314
const _module = require(dependencyMap[1]);
const RPCErrors = _module.RPCErrors;
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/rpc/server/commands/voiceChannelChat.tsx");

export default {
  [_module.RPCCommands.TOGGLE_VOICE_CHANNEL_CHAT]: {
    scope: require(dependencyMap[0]).RPC_LOCAL_SCOPE,
    validation(boolean) {
      let obj = importDefault(dependencyMap[2])(boolean);
      obj = { open: boolean.boolean() };
      return obj.keys(obj);
    },
    handler(args) {
      let obj = require(dependencyMap[3]);
      const result = obj.toggleVoiceChannelChat(args.args.open);
      if (null == result) {
        let tmp4 = importDefault(dependencyMap[4]);
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
  }
};
