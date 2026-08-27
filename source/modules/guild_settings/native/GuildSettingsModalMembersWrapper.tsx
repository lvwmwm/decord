// Module ID: 17146
// Function ID: 17147
// Dependencies: [19, 21, 6063, 16070, 16072, 2]

// Module 17146
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 6063 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 16070 : 16072), { guildId });
});
const result = require("set").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
