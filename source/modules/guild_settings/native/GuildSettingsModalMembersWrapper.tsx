// Module ID: 17489
// Function ID: 17490
// Dependencies: [19, 21, 6120, 16407, 16409, 2]

// Module 17489
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 6120 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 16407 : 16409), { guildId });
});
const result = require("set").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
