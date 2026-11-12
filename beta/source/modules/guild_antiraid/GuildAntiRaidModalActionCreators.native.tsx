// Module ID: 16138
// Function ID: 16139
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8587, 6831, 16139, 2118, 2]
// Exports: openReportRaidModal

// Module 16138 (GuildAntiRaidModalActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8587 */;
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
  obj.pushLazy(asyncRequire(16139, dependencyMap.paths), obj2, closure_3);
}
