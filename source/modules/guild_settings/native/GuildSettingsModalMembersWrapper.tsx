// Module ID: 16630
// Function ID: 16631
// Dependencies: [19, 21, 5805, 15577, 15579, 2]

// Module 16630
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(require(5805) /* canReviewGuildMemberApplications */.useCanReviewGuildMemberApplications(guildId) ? 15577 : 15579), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
