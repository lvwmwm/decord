// Module ID: 10035
// Function ID: 77538
// Dependencies: []

// Module 10035
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_2) {
    importDefault(dependencyMap[0]).pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), closure_2, "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY");
  },
  close() {
    importDefault(dependencyMap[0]).popWithKey("GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY");
  }
};
