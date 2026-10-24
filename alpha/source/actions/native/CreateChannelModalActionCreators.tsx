// Module ID: 8975
// Function ID: 8976
// Name: CreateChannelModalActionCreators
// Dependencies: [4827, 4823, 5707, 6672, 8950, 2002, 2]

// Module 8975 (CreateChannelModalActionCreators)
import ChannelRecord from "ChannelRecord" /* 4827 */;
import transitionToChannel from "transitionToChannel" /* 5707 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import ChannelStore from "ChannelStore" /* 4823 */;
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
      const tmp10 = self(2002)(8950, dependencyMap.paths);
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
