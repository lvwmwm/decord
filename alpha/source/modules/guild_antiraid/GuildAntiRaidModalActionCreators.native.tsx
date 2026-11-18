// Module ID: 15114
// Function ID: 15115
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8676, 6337, 15115, 2121, 2]
// Exports: openReportRaidModal

// Module 15114 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8676 */;
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
  obj.pushLazy(asyncRequire(15115, dependencyMap.paths), obj2, closure_3);
}
