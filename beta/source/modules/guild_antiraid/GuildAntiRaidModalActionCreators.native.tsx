// Module ID: 15195
// Function ID: 15196
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8764, 6429, 15196, 2119, 2]
// Exports: openReportRaidModal

// Module 15195 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8764 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildAntiRaidConstants.GUILD_REPORT_RAID_MOBILE_KEY;
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export function openReportRaidModal(id) {
  let obj = ModalActionCreatorsDefault;
  const obj2 = {
    onCloseModal: function handleClose() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_1_3);
    },
    guildId: id
  };
  obj.pushLazy(asyncRequire(15196, dependencyMap.paths), obj2, closure_3);
}
