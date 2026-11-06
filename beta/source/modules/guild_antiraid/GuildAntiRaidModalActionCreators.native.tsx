// Module ID: 15789
// Function ID: 15790
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8483, 6744, 15790, 1994, 2]
// Exports: openReportRaidModal

// Module 15789 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8483 */;
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
  obj.pushLazy(asyncRequire(15790, dependencyMap.paths), obj2, closure_3);
}
