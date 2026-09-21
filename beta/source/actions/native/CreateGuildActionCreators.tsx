// Module ID: 12893
// Function ID: 12894
// Name: CreateGuildActionCreators
// Dependencies: [2100, 1078, 10055, 2]
// Exports: showInstantInviteModal

// Module 12893 (CreateGuildActionCreators)
import GuildChannelStore from "GuildChannelStore" /* 2100 */;

const require = fn;
const InstantInviteSources = fn(1078).InstantInviteSources;
const size = fn(2);
let result = size.fileFinishedImporting("actions/native/CreateGuildActionCreators.tsx");

export const showInstantInviteModal = function showInstantInviteModal(arg0) {
  closure_0 = arg0;
  let result = GuildChannelStore.addConditionalChangeListener(() => {
    defaultChannel = GuildChannelStore.getDefaultChannel(defaultChannel);
    let flag = null == defaultChannel;
    if (!flag) {
      const _setImmediate = setImmediate;
      setImmediate(() => {
        const result = defaultChannel(dependencyMap[2]).showInstantInviteActionSheet(defaultChannel, { source: constants.GUILD_CREATE });
      });
      flag = false;
    }
    return flag;
  });
};
