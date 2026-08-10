// Module ID: 13312
// Function ID: 13313
// Name: openReportRaidModal
// Dependencies: [8123, 4509, 13313, 1988, 2]
// Exports: openReportRaidModal

// Module 13312 (openReportRaidModal)
import { GUILD_REPORT_RAID_MOBILE_KEY as closure_3 } from "GUILD_REPORT_RAID_MOBILE_KEY";

const result = require("ReportModal").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = importDefault(4509);
  obj = {
    onCloseModal() {
      callback(table[1]).popWithKey(closure_3);
    },
    guildId: id
  };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(13313, dependencyMap.paths), obj, closure_3);
};
