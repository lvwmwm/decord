// Module ID: 16609
// Function ID: 16610
// Dependencies: [19, 21, 5793, 15558, 15560, 2]

// Module 16609
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(require(5793) /* canReviewGuildMemberApplications */.useCanReviewGuildMemberApplications(guildId) ? 15558 : 15560), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
