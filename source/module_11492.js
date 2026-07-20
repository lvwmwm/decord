// Module ID: 11492
// Function ID: 89577
// Dependencies: []

// Module 11492
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_progress/GuildProgressActionCreators.tsx");

export default {
  createProgress(id) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "GUILD_PROGRESS_INITIALIZE", guildId: id };
    obj.dispatch(obj);
  },
  markCompletedProgressSeen(id) {
    const importDefault = id;
    importDefault(dependencyMap[0]).wait(() => {
      let obj = arg0(closure_1[0]);
      obj = { type: "GUILD_PROGRESS_COMPLETED_SEEN", guildId: arg0 };
      return obj.dispatch(obj);
    });
  },
  dismissProgress(id) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "GUILD_PROGRESS_DISMISS", guildId: id };
    obj.dispatch(obj);
  }
};
