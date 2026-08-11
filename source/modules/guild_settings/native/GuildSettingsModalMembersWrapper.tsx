// Module ID: 16748
// Function ID: 16749
// Dependencies: [19, 21, 5884, 15701, 15703, 2]

// Module 16748
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(require(5884) /* canReviewGuildMemberApplications */.useCanReviewGuildMemberApplications(guildId) ? 15701 : 15703), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
