// Module ID: 16824
// Function ID: 16825
// Dependencies: [19, 21, 5946, 15775, 15777, 2]

// Module 16824
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(require(5946) /* canReviewGuildMemberApplications */.useCanReviewGuildMemberApplications(guildId) ? 15775 : 15777), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
