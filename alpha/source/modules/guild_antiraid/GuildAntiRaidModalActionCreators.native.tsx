// Module ID: 15750
// Function ID: 15751
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8475, 6738, 15751, 1995, 2]
// Exports: openReportRaidModal

// Module 15750 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8475 */;
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
  obj.pushLazy(asyncRequire(15751, dependencyMap.paths), obj2, closure_3);
}
