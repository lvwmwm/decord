// Module ID: 16963
// Function ID: 16964
// Dependencies: [19, 21, 7268, 15894, 15896, 2]

// Module 16963
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 7268 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 15894 : 15896), { guildId });
});
const result = require("set").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
