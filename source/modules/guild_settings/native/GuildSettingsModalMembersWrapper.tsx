// Module ID: 16736
// Function ID: 16737
// Dependencies: [19, 21, 5884, 15684, 15686, 2]

// Module 16736
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(require(5884) /* canReviewGuildMemberApplications */.useCanReviewGuildMemberApplications(guildId) ? 15684 : 15686), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
