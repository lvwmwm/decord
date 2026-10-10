// Module ID: 8605
// Function ID: 8606
// Name: CreateChannelModalActionCreators
// Dependencies: [2069, 2065, 5103, 5934, 8578, 2000, 2]

// Module 8605 (CreateChannelModalActionCreators)
import ChannelRecord from "ChannelRecord" /* 2069 */;
import transitionToChannel from "transitionToChannel" /* 5103 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import size from "module_2" /* 2 */;

const isGuildReadableType = ChannelRecord.isGuildReadableType;
const CREATE_CHANNEL_MODAL_KEY = "CREATE_CHANNEL_MODAL_KEY";
let obj = {
  CREATE_CHANNEL_MODAL_KEY: "CREATE_CHANNEL_MODAL_KEY",
  open(channelType, guildId, arg2, arg3) {
    let tmp2;
    let tmp3;
    const self = this;
    if (null != guildId) {
      const pushLazy = ModalActionCreatorsDefault.pushLazy;
      ModalActionCreatorsDefault;
      let obj = {
        channelType,
        guildId,
        categoryId: tmp2,
        cloneChannelId: tmp3,
        onChannelCreated(id, arg1) {
            self.close();
            const channel = ChannelStore.getChannel(id);
            const tmp3 = null != arg1 && null != channel && isGuildReadableType(channel.type);
            if (tmp3) {
              const obj = transitionToChannel;
              obj.transitionToChannel(id);
            }
          }
      };
      tmp3 = arg3;
      const tmp10 = self(2000)(8578, dependencyMap.paths);
      pushLazy(tmp10, obj, CREATE_CHANNEL_MODAL_KEY);
      tmp2 = arg2;
    }
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(CREATE_CHANNEL_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("actions/native/CreateChannelModalActionCreators.tsx");

export default obj;
