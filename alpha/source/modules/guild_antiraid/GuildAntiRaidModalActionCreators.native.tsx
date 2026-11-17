// Module ID: 16447
// Function ID: 16448
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [9265, 6833, 16448, 2121, 2]
// Exports: openReportRaidModal

// Module 16447 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 9265 */;
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
  obj.pushLazy(asyncRequire(16448, dependencyMap.paths), obj2, closure_3);
}
