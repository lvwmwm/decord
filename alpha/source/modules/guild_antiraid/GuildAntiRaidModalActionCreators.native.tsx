// Module ID: 15016
// Function ID: 15017
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8330, 6620, 15017, 2002, 2]
// Exports: openReportRaidModal

// Module 15016 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6620 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8330 */;
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
  obj.pushLazy(asyncRequire(15017, dependencyMap.paths), obj2, closure_3);
};
