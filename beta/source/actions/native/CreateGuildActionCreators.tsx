// Module ID: 13698
// Function ID: 13699
// Name: CreateGuildActionCreators
// Dependencies: [4843, 1071, 8051, 2]
// Exports: showInstantInviteModal

// Module 13698 (CreateGuildActionCreators)
import Constants from "Constants" /* 1071 */;
import GuildChannelStore from "GuildChannelStore" /* 4843 */;
import size from "module_2" /* 2 */;

const InstantInviteSources = Constants.InstantInviteSources;
let result = size.fileFinishedImporting("actions/native/CreateGuildActionCreators.tsx");

export function showInstantInviteModal(arg0) {
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
}
