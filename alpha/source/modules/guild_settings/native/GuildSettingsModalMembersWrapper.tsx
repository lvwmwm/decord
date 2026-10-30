// Module ID: 19758
// Function ID: 19759
// Name: GuildSettingsModalMembersWrapper
// Dependencies: [19, 21, 7432, 18595, 18597, 2]

// Module 19758 (GuildSettingsModalMembersWrapper)
import Fragment from "Fragment" /* 21 */;
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 7432 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function GuildSettingsModalMembersWrapper(guildId) {
  guildId = guildId.guildId;
  const obj = canReviewGuildMemberApplications;
  return jsx(importDefault(obj.useCanReviewGuildMemberApplications(guildId) ? 18595 : 18597), { guildId });
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
