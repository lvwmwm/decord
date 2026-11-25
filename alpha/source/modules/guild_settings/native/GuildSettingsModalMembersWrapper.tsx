// Module ID: 20028
// Function ID: 20029
// Name: GuildSettingsModalMembersWrapper
// Dependencies: [19, 21, 7590, 18368, 18370, 2]

// Module 20028 (GuildSettingsModalMembersWrapper)
import Fragment from "Fragment" /* 21 */;
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 7590 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function GuildSettingsModalMembersWrapper(guildId) {
  guildId = guildId.guildId;
  const obj = canReviewGuildMemberApplications;
  return jsx(importDefault(obj.useCanReviewGuildMemberApplications(guildId) ? 18368 : 18370), { guildId });
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
