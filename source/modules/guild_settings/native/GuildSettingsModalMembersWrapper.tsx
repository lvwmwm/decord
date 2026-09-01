// Module ID: 17233
// Function ID: 17234
// Dependencies: [19, 21, 6111, 16157, 16159, 2]

// Module 17233
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 6111 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 16157 : 16159), { guildId });
});
const result = require("set").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
