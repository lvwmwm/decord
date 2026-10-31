// Module ID: 14343
// Function ID: 14344
// Name: CreateGuildActionCreators
// Dependencies: [4944, 1072, 9118, 2]
// Exports: showInstantInviteModal

// Module 14343 (CreateGuildActionCreators)
import Constants from "Constants" /* 1072 */;
import GuildChannelStore from "GuildChannelStore" /* 4944 */;
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
