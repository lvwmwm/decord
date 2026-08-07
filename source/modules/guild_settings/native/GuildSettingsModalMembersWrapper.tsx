// Module ID: 16650
// Function ID: 16651
// Dependencies: [19, 21, 5824, 15601, 15603, 2]

// Module 16650
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(require(5824) /* canReviewGuildMemberApplications */.useCanReviewGuildMemberApplications(guildId) ? 15601 : 15603), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
