// Module ID: 16211
// Function ID: 125326
// Dependencies: []

// Module 16211
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo((guildId) => {
  guildId = guildId.guildId;
  if (obj.useCanReviewGuildMemberApplications(guildId)) {
    let tmp4 = tmp3[3];
  } else {
    tmp4 = tmp3[4];
  }
  return jsx(importDefault(tmp4), { guildId });
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
