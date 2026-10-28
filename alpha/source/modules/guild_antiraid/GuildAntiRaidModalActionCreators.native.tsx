// Module ID: 15476
// Function ID: 15477
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8419, 6707, 15477, 1999, 2]
// Exports: openReportRaidModal

// Module 15476 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8419 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildAntiRaidConstants.GUILD_REPORT_RAID_MOBILE_KEY;
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = ModalActionCreatorsDefault;
  const obj2 = {
    onCloseModal: function handleClose() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_1_3);
    },
    guildId: id
  };
  obj.pushLazy(asyncRequire(15477, dependencyMap.paths), obj2, closure_3);
};
