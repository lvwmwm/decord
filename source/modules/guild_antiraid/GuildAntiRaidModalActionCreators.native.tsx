// Module ID: 13078
// Function ID: 101027
// Name: openReportRaidModal
// Dependencies: [7775, 4372, 13079, 1935, 2]
// Exports: openReportRaidModal

// Module 13078 (openReportRaidModal)
import { GUILD_REPORT_RAID_MOBILE_KEY as closure_3 } from "GUILD_REPORT_RAID_MOBILE_KEY";

const result = require("ReportModal").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = importDefault(4372);
  obj = {
    onCloseModal() {
      outer1_1(outer1_2[1]).popWithKey(outer1_3);
    },
    guildId: id
  };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(13079, dependencyMap.paths), obj, closure_3);
};
