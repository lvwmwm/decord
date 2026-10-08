// Module ID: 14022
// Function ID: 14023
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8018, 5940, 14023, 1999, 2]
// Exports: openReportRaidModal

// Module 14022 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8018 */;
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
  obj.pushLazy(asyncRequire(14023, dependencyMap.paths), obj2, closure_3);
};
