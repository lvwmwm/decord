// Module ID: 9012
// Function ID: 9013
// Name: CreateChannelModalActionCreators
// Dependencies: [4861, 4857, 5745, 6731, 8987, 2000, 2]

// Module 9012 (CreateChannelModalActionCreators)
import ChannelRecord from "ChannelRecord" /* 4861 */;
import transitionToChannel from "transitionToChannel" /* 5745 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import ChannelStore from "ChannelStore" /* 4857 */;
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
      const tmp10 = self(2000)(8987, dependencyMap.paths);
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
