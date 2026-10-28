// Module ID: 13925
// Function ID: 13926
// Name: CreateGuildActionCreators
// Dependencies: [4934, 1084, 9083, 2]
// Exports: showInstantInviteModal

// Module 13925 (CreateGuildActionCreators)
import Constants from "Constants" /* 1084 */;
import GuildChannelStore from "GuildChannelStore" /* 4934 */;
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
