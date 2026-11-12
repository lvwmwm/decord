// Module ID: 14497
// Function ID: 14498
// Name: GuildPromptsActionCreators
// Dependencies: [572, 2]
// Exports: viewPrompt

// Module 14497 (GuildPromptsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

function viewPrompt(REAL_NAME_PROMPT, guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "GUILD_PROMPT_VIEWED", prompt: REAL_NAME_PROMPT, guildId };
  obj.dispatch(obj2);
}
const result = size.fileFinishedImporting("modules/guild/GuildPromptsActionCreators.tsx");

export default { viewPrompt };
export { viewPrompt };
