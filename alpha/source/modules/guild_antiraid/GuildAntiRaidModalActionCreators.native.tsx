// Module ID: 14868
// Function ID: 14869
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8262, 6150, 14869, 2000, 2]
// Exports: openReportRaidModal

// Module 14868 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8262 */;
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
  obj.pushLazy(asyncRequire(14869, dependencyMap.paths), obj2, closure_3);
};
