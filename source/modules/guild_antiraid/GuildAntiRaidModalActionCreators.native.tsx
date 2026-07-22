// Module ID: 12856
// Function ID: 98243
// Name: openReportRaidModal
// Dependencies: []
// Exports: openReportRaidModal

// Module 12856 (openReportRaidModal)
let closure_3 = require(dependencyMap[0]).GUILD_REPORT_RAID_MOBILE_KEY;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = importDefault(dependencyMap[1]);
  obj = {
    onCloseModal() {
      callback(closure_2[1]).popWithKey(closure_3);
    },
    guildId: id
  };
  obj.pushLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), obj, closure_3);
};
