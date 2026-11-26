// Module ID: 15380
// Function ID: 15381
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [10597, 6130, 15381, 2120, 2]
// Exports: openReportRaidModal

// Module 15380 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 10597 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildAntiRaidConstants.GUILD_REPORT_RAID_MOBILE_KEY;
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export function openReportRaidModal(id) {
  let obj = ModalActionCreatorsDefault;
  const obj2 = {
    onCloseModal: function handleClose() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_1_3);
    },
    guildId: id
  };
  obj.pushLazy(asyncRequire(15381, dependencyMap.paths), obj2, closure_3);
}
