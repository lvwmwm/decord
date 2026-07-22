// Module ID: 8406
// Function ID: 66916
// Dependencies: []

// Module 8406
let closure_3 = require(dependencyMap[0]).CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES;
let closure_4 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("actions/native/CreateChannelModalActionCreators.tsx");

export default {
  CREATE_CHANNEL_MODAL_KEY: "CREATE_CHANNEL_MODAL_KEY",
  open(arg0, guildId) {
    const require = this;
    if (null != guildId) {
      let obj = importDefault(dependencyMap[3]);
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
        const channel = channel.getChannel(channelId);
        let hasItem = null != arg1 && null != channel;
        if (hasItem) {
          hasItem = set.has(channel.type);
        }
        if (hasItem) {
          self(closure_2[2]).transitionToChannel(channelId);
          const obj = self(closure_2[2]);
        }
      };
      obj.pushLazy(require(dependencyMap[5])(dependencyMap[4], dependencyMap.paths), obj, "CREATE_CHANNEL_MODAL_KEY");
      const tmp8 = require(dependencyMap[5])(dependencyMap[4], dependencyMap.paths);
    }
  },
  close() {
    importDefault(dependencyMap[3]).popWithKey("CREATE_CHANNEL_MODAL_KEY");
  }
};
