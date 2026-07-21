// Module ID: 10029
// Function ID: 77473
// Dependencies: [616628224, 609091584, 508821504, 587202560]

// Module 10029
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_2) {
    importDefault(dependencyMap[0]).pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), closure_2, "GUILD_DIRECTORY_ADD_MODAL_KEY");
  },
  close() {
    importDefault(dependencyMap[0]).popWithKey("GUILD_DIRECTORY_ADD_MODAL_KEY");
  }
};
