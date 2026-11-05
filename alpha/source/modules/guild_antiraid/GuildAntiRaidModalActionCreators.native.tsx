// Module ID: 16053
// Function ID: 16054
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8629, 6882, 16054, 2123, 2]
// Exports: openReportRaidModal

// Module 16053 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8629 */;
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
  obj.pushLazy(asyncRequire(16054, dependencyMap.paths), obj2, closure_3);
}
