// Module ID: 9958
// Function ID: 76940
// Dependencies: [771751955, 704643079, 1761607696, 3204448271]
// Exports: default

// Module 9958
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const Permissions = arg1(dependencyMap[2]).Permissions;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  let canChatInGuildResult = null != guildId;
  if (canChatInGuildResult) {
    canChatInGuildResult = closure_0.canChatInGuild(guildId);
  }
  if (canChatInGuildResult) {
    canChatInGuildResult = closure_1.can(Permissions.ADD_REACTIONS, getGuildId);
  }
  if (!canChatInGuildResult) {
    canChatInGuildResult = getGuildId.isPrivate();
  }
  return canChatInGuildResult;
};
