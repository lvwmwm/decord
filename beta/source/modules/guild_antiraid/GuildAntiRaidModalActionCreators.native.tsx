// Module ID: 14272
// Function ID: 14273
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8311, 4993, 14273, 1984, 2]
// Exports: openReportRaidModal

// Module 14272 (GuildAntiRaidModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8311 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildAntiRaidConstants.GUILD_REPORT_RAID_MOBILE_KEY;
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14273, dependencyMap.paths), {
    onCloseModal() {
      ModalActionCreatorsDefault.popWithKey(closure_1_3);
    },
    guildId: id
  }, closure_3);
};
