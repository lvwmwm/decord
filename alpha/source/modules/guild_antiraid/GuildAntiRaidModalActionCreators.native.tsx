// Module ID: 15387
// Function ID: 15388
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [10598, 6130, 15388, 2120, 2]
// Exports: openReportRaidModal

// Module 15387 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 10598 */;
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
  obj.pushLazy(asyncRequire(15388, dependencyMap.paths), obj2, closure_3);
}
