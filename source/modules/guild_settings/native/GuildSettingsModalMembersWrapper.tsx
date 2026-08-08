// Module ID: 16727
// Function ID: 16728
// Dependencies: [19, 21, 5884, 15676, 15678, 2]

// Module 16727
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(require(5884) /* canReviewGuildMemberApplications */.useCanReviewGuildMemberApplications(guildId) ? 15676 : 15678), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
