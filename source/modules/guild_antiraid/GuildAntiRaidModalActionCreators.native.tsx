// Module ID: 13240
// Function ID: 13241
// Name: openReportRaidModal
// Dependencies: [8063, 4507, 13241, 1988, 2]
// Exports: openReportRaidModal

// Module 13240 (openReportRaidModal)
import { GUILD_REPORT_RAID_MOBILE_KEY as closure_3 } from "GUILD_REPORT_RAID_MOBILE_KEY";

const result = require("ReportModal").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = importDefault(4507);
  obj = {
    onCloseModal() {
      callback(table[1]).popWithKey(closure_3);
    },
    guildId: id
  };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(13241, dependencyMap.paths), obj, closure_3);
};
