// Module ID: 10030
// Function ID: 77497
// Dependencies: [616693760, 609157120, 508887040, 587268096]

// Module 10030
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
