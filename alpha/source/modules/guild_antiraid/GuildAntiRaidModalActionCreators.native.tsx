// Module ID: 15330
// Function ID: 15331
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [10552, 6099, 15331, 2119, 2]
// Exports: openReportRaidModal

// Module 15330 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 10552 */;
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
  obj.pushLazy(asyncRequire(15331, dependencyMap.paths), obj2, closure_3);
}
