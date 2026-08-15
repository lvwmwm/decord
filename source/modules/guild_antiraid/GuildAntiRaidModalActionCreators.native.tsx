// Module ID: 13423
// Function ID: 13424
// Name: openReportRaidModal
// Dependencies: [8235, 5260, 13424, 2007, 2]
// Exports: openReportRaidModal

// Module 13423 (openReportRaidModal)
import { GUILD_REPORT_RAID_MOBILE_KEY as closure_3 } from "GUILD_REPORT_RAID_MOBILE_KEY";

const result = require("ReportModal").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = importDefault(5260);
  obj = {
    onCloseModal() {
      callback(table[1]).popWithKey(closure_3);
    },
    guildId: id
  };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(13424, dependencyMap.paths), obj, closure_3);
};
