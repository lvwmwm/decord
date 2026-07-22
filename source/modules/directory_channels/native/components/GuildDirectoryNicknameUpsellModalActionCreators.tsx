// Module ID: 11683
// Function ID: 90653
// Dependencies: []

// Module 11683
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_2) {
    importDefault(dependencyMap[0]).pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), closure_2, "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY");
  },
  close() {
    importDefault(dependencyMap[0]).popWithKey("GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY");
  }
};
