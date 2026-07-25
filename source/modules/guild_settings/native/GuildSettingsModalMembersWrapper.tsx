// Module ID: 16402
// Function ID: 128094
// Dependencies: [31, 33, 12560, 15353, 15355, 2]

// Module 16402
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo((guildId) => {
  guildId = guildId.guildId;
  if (obj.useCanReviewGuildMemberApplications(guildId)) {
    let tmp4 = 15353;
  } else {
    tmp4 = 15355;
  }
  return jsx(importDefault(tmp4), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
