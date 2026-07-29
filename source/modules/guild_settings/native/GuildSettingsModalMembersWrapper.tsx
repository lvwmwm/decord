// Module ID: 16489
// Function ID: 16490
// Dependencies: [19, 21, 12626, 15439, 15441, 2]

// Module 16489
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(require(12626) /* canReviewGuildMemberApplications */.useCanReviewGuildMemberApplications(guildId) ? 15439 : 15441), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
