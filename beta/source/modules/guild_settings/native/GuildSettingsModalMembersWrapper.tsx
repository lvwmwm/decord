// Module ID: 17454
// Function ID: 17455
// Name: GuildSettingsModalMembersWrapper
// Dependencies: [19, 21, 6682, 16220, 16222, 2]

// Module 17454 (GuildSettingsModalMembersWrapper)
import Fragment from "Fragment" /* 21 */;
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 6682 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let guildId;

const jsx = Fragment.jsx;
const memoResult = react.memo((guildId) => {
  guildId = guildId.guildId;
  const obj = canReviewGuildMemberApplications;
  return jsx(importDefault(obj.useCanReviewGuildMemberApplications(guildId) ? 16220 : 16222), { guildId });
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
