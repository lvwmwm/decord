// Module ID: 16414
// Function ID: 128141
// Dependencies: [31, 33, 12561, 15366, 15368, 2]

// Module 16414
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo((guildId) => {
  guildId = guildId.guildId;
  if (obj.useCanReviewGuildMemberApplications(guildId)) {
    let tmp4 = 15366;
  } else {
    tmp4 = 15368;
  }
  return jsx(importDefault(tmp4), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
