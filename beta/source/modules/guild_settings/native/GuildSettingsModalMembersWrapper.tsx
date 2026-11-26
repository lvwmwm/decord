// Module ID: 19893
// Function ID: 19894
// Name: GuildSettingsModalMembersWrapper
// Dependencies: [19, 21, 6884, 18230, 18232, 2]

// Module 19893 (GuildSettingsModalMembersWrapper)
import Fragment from "Fragment" /* 21 */;
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 6884 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function GuildSettingsModalMembersWrapper(guildId) {
  guildId = guildId.guildId;
  const obj = canReviewGuildMemberApplications;
  return jsx(importDefault(obj.useCanReviewGuildMemberApplications(guildId) ? 18230 : 18232), { guildId });
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
