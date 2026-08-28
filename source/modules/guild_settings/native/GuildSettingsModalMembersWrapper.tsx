// Module ID: 17164
// Function ID: 17165
// Dependencies: [19, 21, 6076, 16088, 16090, 2]

// Module 17164
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 6076 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 16088 : 16090), { guildId });
});
const result = require("set").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
