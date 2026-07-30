// Module ID: 16483
// Function ID: 16484
// Dependencies: [19, 21, 12620, 15433, 15435, 2]

// Module 16483
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(require(12620) /* canReviewGuildMemberApplications */.useCanReviewGuildMemberApplications(guildId) ? 15433 : 15435), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
