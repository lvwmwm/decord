// Module ID: 15100
// Function ID: 15101
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8645, 6308, 15101, 2121, 2]
// Exports: openReportRaidModal

// Module 15100 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8645 */;
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
  obj.pushLazy(asyncRequire(15101, dependencyMap.paths), obj2, closure_3);
}
