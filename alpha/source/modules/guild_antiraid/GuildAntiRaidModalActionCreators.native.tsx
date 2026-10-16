// Module ID: 14901
// Function ID: 14902
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8267, 6152, 14902, 2002, 2]
// Exports: openReportRaidModal

// Module 14901 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8267 */;
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
  obj.pushLazy(asyncRequire(14902, dependencyMap.paths), obj2, closure_3);
};
