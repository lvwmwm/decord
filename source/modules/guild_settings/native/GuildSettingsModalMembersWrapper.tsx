// Module ID: 17469
// Function ID: 17470
// Dependencies: [19, 21, 6119, 16388, 16390, 2]

// Module 17469
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 6119 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 16388 : 16390), { guildId });
});
const result = require("set").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
