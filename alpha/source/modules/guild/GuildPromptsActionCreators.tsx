// Module ID: 13422
// Function ID: 13423
// Name: GuildPromptsActionCreators
// Dependencies: [584, 2]
// Exports: viewPrompt

// Module 13422 (GuildPromptsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

function viewPrompt(REAL_NAME_PROMPT, guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "GUILD_PROMPT_VIEWED", prompt: REAL_NAME_PROMPT, guildId };
  obj.dispatch(obj2);
}
const result = size.fileFinishedImporting("modules/guild/GuildPromptsActionCreators.tsx");

export default { viewPrompt };
export { viewPrompt };
