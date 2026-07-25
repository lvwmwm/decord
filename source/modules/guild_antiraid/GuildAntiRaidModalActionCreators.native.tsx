// Module ID: 13033
// Function ID: 100849
// Name: openReportRaidModal
// Dependencies: [7739, 4338, 13034, 1935, 2]
// Exports: openReportRaidModal

// Module 13033 (openReportRaidModal)
import { GUILD_REPORT_RAID_MOBILE_KEY as closure_3 } from "GUILD_REPORT_RAID_MOBILE_KEY";

const result = require("ReportModal").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = importDefault(4338);
  obj = {
    onCloseModal() {
      outer1_1(outer1_2[1]).popWithKey(outer1_3);
    },
    guildId: id
  };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(13034, dependencyMap.paths), obj, closure_3);
};
