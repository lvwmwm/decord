// Module ID: 16391
// Function ID: 127926
// Dependencies: [31, 33, 5645, 15343, 15345, 2]

// Module 16391
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo((guildId) => {
  guildId = guildId.guildId;
  if (obj.useCanReviewGuildMemberApplications(guildId)) {
    let tmp4 = 15343;
  } else {
    tmp4 = 15345;
  }
  return jsx(importDefault(tmp4), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
