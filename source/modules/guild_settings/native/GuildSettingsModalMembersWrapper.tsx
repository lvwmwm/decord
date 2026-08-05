// Module ID: 16590
// Function ID: 16591
// Dependencies: [19, 21, 5778, 15539, 15541, 2]

// Module 16590
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(require(5778) /* canReviewGuildMemberApplications */.useCanReviewGuildMemberApplications(guildId) ? 15539 : 15541), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
