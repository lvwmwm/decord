// Module ID: 13508
// Function ID: 13509
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [7459, 5039, 13509, 1981, 2]
// Exports: openReportRaidModal

// Module 13508 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 7459 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildAntiRaidConstants.GUILD_REPORT_RAID_MOBILE_KEY;
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = ModalActionCreatorsDefault;
  const obj2 = {
    onCloseModal() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_1_3);
    },
    guildId: id
  };
  obj.pushLazy(asyncRequire(13509, dependencyMap.paths), obj2, closure_3);
};
