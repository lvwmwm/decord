// Module ID: 16295
// Function ID: 16296
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [9190, 6785, 16296, 2118, 2]
// Exports: openReportRaidModal

// Module 16295 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 9190 */;
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
  obj.pushLazy(asyncRequire(16296, dependencyMap.paths), obj2, closure_3);
}
