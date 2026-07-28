// Module ID: 16454
// Function ID: 128302
// Dependencies: [31, 33, 12604, 15406, 15408, 2]

// Module 16454
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo((guildId) => {
  guildId = guildId.guildId;
  if (obj.useCanReviewGuildMemberApplications(guildId)) {
    let tmp4 = 15406;
  } else {
    tmp4 = 15408;
  }
  return jsx(importDefault(tmp4), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
