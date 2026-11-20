// Module ID: 15064
// Function ID: 15065
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8644, 6310, 15065, 2119, 2]
// Exports: openReportRaidModal

// Module 15064 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8644 */;
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
  obj.pushLazy(asyncRequire(15065, dependencyMap.paths), obj2, closure_3);
}
