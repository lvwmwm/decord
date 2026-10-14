// Module ID: 14571
// Function ID: 14572
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8052, 5939, 14572, 2000, 2]
// Exports: openReportRaidModal

// Module 14571 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5939 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8052 */;
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
  obj.pushLazy(asyncRequire(14572, dependencyMap.paths), obj2, closure_3);
};
