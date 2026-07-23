// Module ID: 12970
// Function ID: 100399
// Name: openReportRaidModal
// Dependencies: [7703, 4337, 12971, 1934, 2]
// Exports: openReportRaidModal

// Module 12970 (openReportRaidModal)
import { GUILD_REPORT_RAID_MOBILE_KEY as closure_3 } from "GUILD_REPORT_RAID_MOBILE_KEY";

const result = require("ReportModal").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = importDefault(4337);
  obj = {
    onCloseModal() {
      outer1_1(outer1_2[1]).popWithKey(outer1_3);
    },
    guildId: id
  };
  obj.pushLazy(require(1934) /* maybeLoadBundle */(12971, dependencyMap.paths), obj, closure_3);
};
