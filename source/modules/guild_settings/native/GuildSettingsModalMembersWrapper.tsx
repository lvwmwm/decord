// Module ID: 16344
// Function ID: 127602
// Dependencies: [31, 33, 5645, 15296, 15298, 2]

// Module 16344
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo((guildId) => {
  guildId = guildId.guildId;
  if (obj.useCanReviewGuildMemberApplications(guildId)) {
    let tmp4 = 15296;
  } else {
    tmp4 = 15298;
  }
  return jsx(importDefault(tmp4), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
