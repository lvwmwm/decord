// Module ID: 14583
// Function ID: 14584
// Name: CreateGuildActionCreators
// Dependencies: [5073, 1072, 9270, 2]
// Exports: showInstantInviteModal

// Module 14583 (CreateGuildActionCreators)
import Constants from "Constants" /* 1072 */;
import GuildChannelStore from "GuildChannelStore" /* 5073 */;
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
