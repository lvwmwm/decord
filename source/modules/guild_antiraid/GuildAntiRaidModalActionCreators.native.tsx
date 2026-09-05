// Module ID: 13963
// Function ID: 13964
// Name: openReportRaidModal
// Dependencies: [8016, 4763, 13964, 1896, 2]
// Exports: openReportRaidModal

// Module 13963 (openReportRaidModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;
import GUILD_REPORT_RAID_MOBILE_KEY from "GUILD_REPORT_RAID_MOBILE_KEY" /* 8016 */;

let closure_3 = GUILD_REPORT_RAID_MOBILE_KEY.GUILD_REPORT_RAID_MOBILE_KEY;
const result = set.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = _modDef4763;
  obj = {
    onCloseModal() {
      callback(table[1]).popWithKey(closure_3);
    },
    guildId: id
  };
  obj.pushLazy(asyncRequireImpl(13964, dependencyMap.paths), obj, closure_3);
};
