// Module ID: 19189
// Function ID: 19190
// Name: GuildSettingsModalMembersWrapper
// Dependencies: [19, 21, 558, 576, 7396, 18059, 18061, 2]

// Module 19189 (GuildSettingsModalMembersWrapper)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 7396 */;
import GuildSettingsModalMembersWithTabsDefault from "GuildSettingsModalMembersWithTabs" /* 18059 */;
import GuildSettingsModalMembersDefault from "GuildSettingsModalMembers" /* 18061 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModalMembersWrapper(guildId) {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(4);
  guildId = guildId.guildId;
  const obj2 = canReviewGuildMemberApplications;
  if (obj2.useCanReviewGuildMemberApplications(guildId)) {
    let tmp7;
    if (cResult[0] !== guildId) {
      const tmp10 = jsx(GuildSettingsModalMembersWithTabsDefault, { guildId });
      cResult[0] = guildId;
      cResult[1] = tmp10;
      tmp7 = tmp10;
    } else {
      tmp7 = cResult[1];
    }
    tmp3 = tmp7;
  } else if (cResult[2] !== guildId) {
    const tmp6 = jsx(GuildSettingsModalMembersDefault, { guildId });
    cResult[2] = guildId;
    cResult[3] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[3];
  }
  return tmp3;
}) : (function GuildSettingsModalMembersWrapper(guildId) {
  guildId = guildId.guildId;
  const obj = canReviewGuildMemberApplications;
  return jsx(importDefault(obj.useCanReviewGuildMemberApplications(guildId) ? 18059 : 18061), { guildId });
}));
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
