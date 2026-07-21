// Module ID: 11768
// Function ID: 91359
// Name: showInstantInviteModal
// Dependencies: []
// Exports: showInstantInviteModal

// Module 11768 (showInstantInviteModal)
let closure_2 = importDefault(dependencyMap[0]);
const InstantInviteSources = arg1(dependencyMap[1]).InstantInviteSources;
const result = arg1(dependencyMap[3]).fileFinishedImporting("actions/native/CreateGuildActionCreators.tsx");

export const showInstantInviteModal = function showInstantInviteModal(guildId) {
  const arg1 = guildId;
  const result = closure_2.addConditionalChangeListener(() => {
    const defaultChannel = defaultChannel.getDefaultChannel(arg0);
    const arg0 = defaultChannel;
    let flag = null == defaultChannel;
    if (!flag) {
      const _setImmediate = setImmediate;
      setImmediate(() => {
        let obj = defaultChannel(closure_1[2]);
        obj = { source: constants.GUILD_CREATE };
        const result = obj.showInstantInviteActionSheet(defaultChannel, obj);
      });
      flag = false;
    }
    return flag;
  });
};
