// Module ID: 13516
// Function ID: 13517
// Name: openReportRaidModal
// Dependencies: [8276, 4611, 13517, 2009, 2]
// Exports: openReportRaidModal

// Module 13516 (openReportRaidModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;
import GUILD_REPORT_RAID_MOBILE_KEY from "GUILD_REPORT_RAID_MOBILE_KEY" /* 8276 */;

let closure_3 = GUILD_REPORT_RAID_MOBILE_KEY.GUILD_REPORT_RAID_MOBILE_KEY;
const result = set.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = _modDef4611;
  obj = {
    onCloseModal() {
      callback(table[1]).popWithKey(closure_3);
    },
    guildId: id
  };
  obj.pushLazy(asyncRequireImpl(13517, dependencyMap.paths), obj, closure_3);
};
