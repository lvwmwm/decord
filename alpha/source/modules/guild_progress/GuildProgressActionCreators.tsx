// Module ID: 12210
// Function ID: 12211
// Name: GuildProgressActionCreators
// Dependencies: [584, 2]

// Module 12210 (GuildProgressActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let obj = {
  createProgress(id) {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_PROGRESS_INITIALIZE", guildId: id };
    obj.dispatch(obj2);
  },
  markCompletedProgressSeen(id) {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_PROGRESS_COMPLETED_SEEN", guildId: id };
    obj.dispatch(obj2);
  },
  dismissProgress(id) {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_PROGRESS_DISMISS", guildId: id };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("modules/guild_progress/GuildProgressActionCreators.tsx");

export default obj;
