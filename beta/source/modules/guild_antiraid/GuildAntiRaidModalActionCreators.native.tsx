// Module ID: 13510
// Function ID: 13511
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [7463, 5040, 13511, 1987, 2]
// Exports: openReportRaidModal

// Module 13510 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 7463 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildAntiRaidConstants.GUILD_REPORT_RAID_MOBILE_KEY;
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = ModalActionCreatorsDefault;
  const obj2 = {
    onCloseModal() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_1_3);
    },
    guildId: id
  };
  obj.pushLazy(asyncRequire(13511, dependencyMap.paths), obj2, closure_3);
};
