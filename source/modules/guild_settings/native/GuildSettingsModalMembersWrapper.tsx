// Module ID: 16817
// Function ID: 16818
// Dependencies: [19, 21, 5925, 15766, 15768, 2]

// Module 16817
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(require(5925) /* canReviewGuildMemberApplications */.useCanReviewGuildMemberApplications(guildId) ? 15766 : 15768), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
