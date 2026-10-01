// Module ID: 11970
// Function ID: 11971
// Name: GuildProgressActionCreators
// Dependencies: [573, 2]

// Module 11970 (GuildProgressActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

let importDefault;

let obj = {
  createProgress(id) {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_PROGRESS_INITIALIZE", guildId: id };
    obj.dispatch(obj2);
  },
  markCompletedProgressSeen(id) {
    let guildId;
    importDefault = id;
    let obj = DispatcherDefault;
    obj.wait(() => {
      const obj = DispatcherDefault;
      const obj2 = { type: "GUILD_PROGRESS_COMPLETED_SEEN", guildId };
      return obj.dispatch(obj2);
    });
  },
  dismissProgress(id) {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_PROGRESS_DISMISS", guildId: id };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("modules/guild_progress/GuildProgressActionCreators.tsx");

export default obj;
