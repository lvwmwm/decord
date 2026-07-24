// Module ID: 11711
// Function ID: 90863
// Name: viewPrompt
// Dependencies: [686, 2]
// Exports: viewPrompt

// Module 11711 (viewPrompt)
function viewPrompt(REAL_NAME_PROMPT, closure_0) {
  const importDefault = REAL_NAME_PROMPT;
  const dependencyMap = closure_0;
  importDefault(686).wait(() => {
    let obj = REAL_NAME_PROMPT(table[0]);
    obj = { type: "GUILD_PROMPT_VIEWED", prompt: REAL_NAME_PROMPT, guildId: table };
    obj.dispatch(obj);
  });
}
const result = require("set").fileFinishedImporting("modules/guild/GuildPromptsActionCreators.tsx");

export default { viewPrompt };
export { viewPrompt };
