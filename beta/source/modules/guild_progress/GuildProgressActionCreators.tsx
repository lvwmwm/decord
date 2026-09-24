// Module ID: 12676
// Function ID: 12677
// Name: GuildProgressActionCreators
// Dependencies: [577, 2]

// Module 12676 (GuildProgressActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_progress/GuildProgressActionCreators.tsx");

export default {
  createProgress(id) {
    DispatcherDefault.dispatch({ type: "GUILD_PROGRESS_INITIALIZE", guildId: id });
  },
  markCompletedProgressSeen(id) {
    importDefault = id;
    DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "GUILD_PROGRESS_COMPLETED_SEEN", guildId }));
  },
  dismissProgress(id) {
    DispatcherDefault.dispatch({ type: "GUILD_PROGRESS_DISMISS", guildId: id });
  }
};
