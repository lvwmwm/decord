// Module ID: 13635
// Function ID: 13636
// Name: openReportRaidModal
// Dependencies: [7871, 4689, 13636, 2010, 2]
// Exports: openReportRaidModal

// Module 13635 (openReportRaidModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;
import GUILD_REPORT_RAID_MOBILE_KEY from "GUILD_REPORT_RAID_MOBILE_KEY" /* 7871 */;

let closure_3 = GUILD_REPORT_RAID_MOBILE_KEY.GUILD_REPORT_RAID_MOBILE_KEY;
const result = set.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = _modDef4689;
  obj = {
    onCloseModal() {
      callback(table[1]).popWithKey(closure_3);
    },
    guildId: id
  };
  obj.pushLazy(asyncRequireImpl(13636, dependencyMap.paths), obj, closure_3);
};
