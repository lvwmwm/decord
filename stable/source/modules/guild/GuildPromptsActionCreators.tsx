// Module ID: 12191
// Function ID: 12192
// Name: GuildPromptsActionCreators
// Dependencies: [585, 2]
// Exports: viewPrompt

// Module 12191 (GuildPromptsActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

function viewPrompt(REAL_NAME_PROMPT, guildId) {
  let _prompt;
  importDefault = REAL_NAME_PROMPT;
  dependencyMap = guildId;
  let obj = DispatcherDefault;
  obj.wait(() => {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_PROMPT_VIEWED", prompt: _prompt, guildId };
    obj.dispatch(obj2);
  });
}
const result = size.fileFinishedImporting("modules/guild/GuildPromptsActionCreators.tsx");

export default { viewPrompt };
export { viewPrompt };
