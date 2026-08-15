// Module ID: 16870
// Function ID: 16871
// Dependencies: [19, 21, 7230, 15825, 15827, 2]

// Module 16870
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(require(7230) /* canReviewGuildMemberApplications */.useCanReviewGuildMemberApplications(guildId) ? 15825 : 15827), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
