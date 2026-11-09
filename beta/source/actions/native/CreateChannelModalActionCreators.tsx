// Module ID: 9114
// Function ID: 9115
// Name: CreateChannelModalActionCreators
// Dependencies: [4993, 4989, 5885, 6799, 9106, 2118, 2]

// Module 9114 (CreateChannelModalActionCreators)
import ChannelRecord from "ChannelRecord" /* 4993 */;
import transitionToChannel from "transitionToChannel" /* 5885 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import ChannelStore from "ChannelStore" /* 4989 */;
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
      const tmp10 = self(2118)(9106, dependencyMap.paths);
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
