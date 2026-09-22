// Module ID: 12909
// Function ID: 12910
// Name: GuildPromptsActionCreators
// Dependencies: [573, 2]
// Exports: viewPrompt

// Module 12909 (GuildPromptsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

function viewPrompt(REAL_NAME_PROMPT, guildId) {
  importDefault = REAL_NAME_PROMPT;
  dependencyMap = guildId;
  DispatcherDefault.wait(() => {
    DispatcherDefault.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: _prompt, guildId });
  });
}
const result = size.fileFinishedImporting("modules/guild/GuildPromptsActionCreators.tsx");

export default { viewPrompt };
export { viewPrompt };
