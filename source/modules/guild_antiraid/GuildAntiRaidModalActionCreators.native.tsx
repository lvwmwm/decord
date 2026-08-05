// Module ID: 13189
// Function ID: 13190
// Name: openReportRaidModal
// Dependencies: [7905, 4460, 13190, 1959, 2]
// Exports: openReportRaidModal

// Module 13189 (openReportRaidModal)
import { GUILD_REPORT_RAID_MOBILE_KEY as closure_3 } from "GUILD_REPORT_RAID_MOBILE_KEY";

const result = require("ReportModal").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = importDefault(4460);
  obj = {
    onCloseModal() {
      callback(table[1]).popWithKey(closure_3);
    },
    guildId: id
  };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(13190, dependencyMap.paths), obj, closure_3);
};
