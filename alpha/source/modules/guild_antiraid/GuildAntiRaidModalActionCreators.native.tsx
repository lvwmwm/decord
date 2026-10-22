// Module ID: 15166
// Function ID: 15167
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8372, 6657, 15167, 2002, 2]
// Exports: openReportRaidModal

// Module 15166 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8372 */;
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
  obj.pushLazy(asyncRequire(15167, dependencyMap.paths), obj2, closure_3);
};
