// Module ID: 13218
// Function ID: 13219
// Name: openReportRaidModal
// Dependencies: [7933, 4490, 13219, 1959, 2]
// Exports: openReportRaidModal

// Module 13218 (openReportRaidModal)
import { GUILD_REPORT_RAID_MOBILE_KEY as closure_3 } from "GUILD_REPORT_RAID_MOBILE_KEY";

const result = require("ReportModal").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = importDefault(4490);
  obj = {
    onCloseModal() {
      callback(table[1]).popWithKey(closure_3);
    },
    guildId: id
  };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(13219, dependencyMap.paths), obj, closure_3);
};
