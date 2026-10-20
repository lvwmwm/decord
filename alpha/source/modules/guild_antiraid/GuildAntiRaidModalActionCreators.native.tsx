// Module ID: 15034
// Function ID: 15035
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8334, 6623, 15035, 2002, 2]
// Exports: openReportRaidModal

// Module 15034 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8334 */;
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
  obj.pushLazy(asyncRequire(15035, dependencyMap.paths), obj2, closure_3);
};
