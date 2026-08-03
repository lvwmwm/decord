// Module ID: 16578
// Function ID: 16579
// Dependencies: [19, 21, 5764, 15528, 15530, 2]

// Module 16578
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(require(5764) /* canReviewGuildMemberApplications */.useCanReviewGuildMemberApplications(guildId) ? 15528 : 15530), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
