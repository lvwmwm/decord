// Module ID: 14119
// Function ID: 14120
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8026, 5941, 14120, 2000, 2]
// Exports: openReportRaidModal

// Module 14119 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8026 */;
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
  obj.pushLazy(asyncRequire(14120, dependencyMap.paths), obj2, closure_3);
};
