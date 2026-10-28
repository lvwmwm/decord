// Module ID: 13724
// Function ID: 13725
// Name: CreateGuildActionCreators
// Dependencies: [4933, 1087, 9082, 2]
// Exports: showInstantInviteModal

// Module 13724 (CreateGuildActionCreators)
import Constants from "Constants" /* 1087 */;
import GuildChannelStore from "GuildChannelStore" /* 4933 */;
import size from "module_2" /* 2 */;

const InstantInviteSources = Constants.InstantInviteSources;
let result = size.fileFinishedImporting("actions/native/CreateGuildActionCreators.tsx");

export const showInstantInviteModal = function showInstantInviteModal(arg0) {
  let closure_0 = arg0;
  let result = GuildChannelStore.addConditionalChangeListener(() => {
    const defaultChannel = GuildChannelStore.getDefaultChannel(closure_0);
    let flag = null == defaultChannel;
    if (!flag) {
      const _setImmediate = setImmediate;
      setImmediate(() => {
        const obj = closure_2_0(closure_2_1[2]);
        const obj2 = { source: constants.GUILD_CREATE };
        const result = obj.showInstantInviteActionSheet(defaultChannel, obj2);
      });
      flag = false;
    }
    return flag;
  });
};
