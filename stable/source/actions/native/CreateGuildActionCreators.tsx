// Module ID: 12877
// Function ID: 12878
// Name: CreateGuildActionCreators
// Dependencies: [2012, 1074, 9950, 2]
// Exports: showInstantInviteModal

// Module 12877 (CreateGuildActionCreators)
import GuildChannelStore from "GuildChannelStore" /* 2012 */;

const require = fn;
const InstantInviteSources = fn(1074).InstantInviteSources;
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
