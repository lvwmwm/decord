// Module ID: 19822
// Function ID: 19823
// Name: GuildSettingsModalMembersWrapper
// Dependencies: [19, 21, 7438, 18650, 18652, 2]

// Module 19822 (GuildSettingsModalMembersWrapper)
import Fragment from "Fragment" /* 21 */;
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 7438 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function GuildSettingsModalMembersWrapper(guildId) {
  guildId = guildId.guildId;
  const obj = canReviewGuildMemberApplications;
  return jsx(importDefault(obj.useCanReviewGuildMemberApplications(guildId) ? 18650 : 18652), { guildId });
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
