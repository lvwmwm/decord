// Module ID: 16808
// Function ID: 16809
// Dependencies: [19, 21, 5925, 15757, 15759, 2]

// Module 16808
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(require(5925) /* canReviewGuildMemberApplications */.useCanReviewGuildMemberApplications(guildId) ? 15757 : 15759), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
