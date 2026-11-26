// Module ID: 16413
// Function ID: 16414
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [9256, 6838, 16414, 2121, 2]
// Exports: openReportRaidModal

// Module 16413 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 9256 */;
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
  obj.pushLazy(asyncRequire(16414, dependencyMap.paths), obj2, closure_3);
}
