// Module ID: 15710
// Function ID: 15711
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8441, 6731, 15711, 2000, 2]
// Exports: openReportRaidModal

// Module 15710 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8441 */;
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
  obj.pushLazy(asyncRequire(15711, dependencyMap.paths), obj2, closure_3);
}
