// Module ID: 16048
// Function ID: 16049
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8575, 6824, 16049, 2118, 2]
// Exports: openReportRaidModal

// Module 16048 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8575 */;
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
  obj.pushLazy(asyncRequire(16049, dependencyMap.paths), obj2, closure_3);
}
