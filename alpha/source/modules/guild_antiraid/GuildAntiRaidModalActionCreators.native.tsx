// Module ID: 15251
// Function ID: 15252
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8385, 6673, 15252, 1999, 2]
// Exports: openReportRaidModal

// Module 15251 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8385 */;
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
  obj.pushLazy(asyncRequire(15252, dependencyMap.paths), obj2, closure_3);
};
