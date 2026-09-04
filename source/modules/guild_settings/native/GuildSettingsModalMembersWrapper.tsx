// Module ID: 17569
// Function ID: 17570
// Dependencies: [19, 21, 7204, 16493, 16495, 2]

// Module 17569
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 7204 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 16493 : 16495), { guildId });
});
const result = require("set").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
