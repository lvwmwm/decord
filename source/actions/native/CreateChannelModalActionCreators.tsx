// Module ID: 8412
// Function ID: 66953
// Dependencies: [1352, 1348, 4138, 4337, 8408, 1934, 2]

// Module 8412
import { CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES as closure_3 } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("transitionToChannel").fileFinishedImporting("actions/native/CreateChannelModalActionCreators.tsx");

export default {
  CREATE_CHANNEL_MODAL_KEY: "CREATE_CHANNEL_MODAL_KEY",
  open(arg0, guildId) {
    const self = this;
    if (null != guildId) {
      let obj = importDefault(4337);
      obj = {};
      let tmp;
      if (null != arg0) {
        tmp = arg0;
      }
      obj.channelType = tmp;
      obj.guildId = guildId;
      let tmp2;
      if (null != arg2) {
        tmp2 = arg2;
      }
      obj.categoryId = tmp2;
      let tmp3;
      if (null != arg3) {
        tmp3 = arg3;
      }
      obj.cloneChannelId = tmp3;
      obj.onChannelCreated = function onChannelCreated(channelId) {
        self.close();
        const channel = outer1_4.getChannel(channelId);
        let hasItem = null != arg1 && null != channel;
        if (hasItem) {
          hasItem = outer1_3.has(channel.type);
        }
        if (hasItem) {
          self(outer1_2[2]).transitionToChannel(channelId);
          const obj = self(outer1_2[2]);
        }
      };
      obj.pushLazy(self(1934)(8408, dependencyMap.paths), obj, "CREATE_CHANNEL_MODAL_KEY");
      const tmp8 = self(1934)(8408, dependencyMap.paths);
    }
  },
  close() {
    importDefault(4337).popWithKey("CREATE_CHANNEL_MODAL_KEY");
  }
};
