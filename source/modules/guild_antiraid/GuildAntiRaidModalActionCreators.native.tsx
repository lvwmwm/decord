// Module ID: 13391
// Function ID: 13392
// Name: openReportRaidModal
// Dependencies: [8189, 4572, 13392, 2007, 2]
// Exports: openReportRaidModal

// Module 13391 (openReportRaidModal)
import { GUILD_REPORT_RAID_MOBILE_KEY as closure_3 } from "GUILD_REPORT_RAID_MOBILE_KEY";

const result = require("ReportModal").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = importDefault(4572);
  obj = {
    onCloseModal() {
      callback(table[1]).popWithKey(closure_3);
    },
    guildId: id
  };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(13392, dependencyMap.paths), obj, closure_3);
};
