// Module ID: 13704
// Function ID: 13705
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [7654, 5069, 13705, 1981, 2]
// Exports: openReportRaidModal

// Module 13704 (GuildAntiRaidModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 7654 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildAntiRaidConstants.GUILD_REPORT_RAID_MOBILE_KEY;
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13705, dependencyMap.paths), {
    onCloseModal() {
      ModalActionCreatorsDefault.popWithKey(closure_1_3);
    },
    guildId: id
  }, closure_3);
};
