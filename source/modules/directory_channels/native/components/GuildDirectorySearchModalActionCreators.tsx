// Module ID: 10022
// Function ID: 77436
// Dependencies: []

// Module 10022
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(dependencyMap[0]).pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), { channel: channel.channel }, "GUILD_DIRECTORY_SEARCH_MODAL_KEY");
  },
  close() {
    importDefault(dependencyMap[0]).popWithKey("GUILD_DIRECTORY_SEARCH_MODAL_KEY");
  }
};
