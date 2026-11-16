// Module ID: 20603
// Function ID: 20604
// Name: GuildSettingsModalMembersWrapper
// Dependencies: [19, 21, 7279, 19410, 19412, 2]

// Module 20603 (GuildSettingsModalMembersWrapper)
import Fragment from "Fragment" /* 21 */;
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 7279 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function GuildSettingsModalMembersWrapper(guildId) {
  guildId = guildId.guildId;
  const obj = canReviewGuildMemberApplications;
  return jsx(importDefault(obj.useCanReviewGuildMemberApplications(guildId) ? 19410 : 19412), { guildId });
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
