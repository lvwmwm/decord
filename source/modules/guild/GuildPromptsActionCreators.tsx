// Module ID: 11673
// Function ID: 90563
// Name: viewPrompt
// Dependencies: [646840323, 899088385]
// Exports: viewPrompt

// Module 11673 (viewPrompt)
function viewPrompt(REAL_NAME_PROMPT, closure_0) {
  const importDefault = REAL_NAME_PROMPT;
  const dependencyMap = closure_0;
  importDefault(dependencyMap[0]).wait(() => {
    let obj = arg0(arg1[0]);
    obj = { type: "GUILD_PROMPT_VIEWED", prompt: arg0, guildId: arg1 };
    obj.dispatch(obj);
  });
}
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild/GuildPromptsActionCreators.tsx");

export default { viewPrompt };
export { viewPrompt };
