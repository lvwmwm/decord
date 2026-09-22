// Module ID: 18089
// Function ID: 18090
// Name: GuildSettingsModalMembersWrapper
// Dependencies: [19, 21, 558, 568, 7508, 16922, 16924, 2]

// Module 18089 (GuildSettingsModalMembersWrapper)
import c from "c" /* 568 */;
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 7508 */;
import GuildSettingsModalMembersWithTabsDefault from "GuildSettingsModalMembersWithTabs" /* 16922 */;
import GuildSettingsModalMembersDefault from "GuildSettingsModalMembers" /* 16924 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let tmp = dependencyMap;
  const cResult = c.c(4);
  guildId = guildId.guildId;
  if (obj2.useCanReviewGuildMemberApplications(guildId)) {
    if (cResult[0] !== guildId) {
      const obj3 = { guildId };
      tmp = jsx(GuildSettingsModalMembersWithTabsDefault, { guildId });
      cResult[0] = guildId;
      cResult[1] = tmp;
    }
  } else {
    if (cResult[2] !== guildId) {
      const obj4 = { guildId };
      const tmp6 = jsx(GuildSettingsModalMembersDefault, { guildId });
      cResult[2] = guildId;
      cResult[3] = tmp6;
      let tmp3 = tmp6;
    } else {
      tmp3 = cResult[3];
    }
    return tmp3;
  }
}) : ((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 16922 : 16924), { guildId });
}));
