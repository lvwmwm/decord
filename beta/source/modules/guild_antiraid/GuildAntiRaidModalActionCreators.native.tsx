// Module ID: 14232
// Function ID: 14233
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8274, 4959, 14233, 1980, 2]
// Exports: openReportRaidModal

// Module 14232 (GuildAntiRaidModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8274 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildAntiRaidConstants.GUILD_REPORT_RAID_MOBILE_KEY;
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14233, dependencyMap.paths), {
    onCloseModal() {
      ModalActionCreatorsDefault.popWithKey(closure_1_3);
    },
    guildId: id
  }, closure_3);
};
