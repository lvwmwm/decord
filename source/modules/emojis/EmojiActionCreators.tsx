// Module ID: 9319
// Function ID: 72805
// Name: toggleGuildExpandedState
// Dependencies: [646840323, 899088385]
// Exports: initiateEmojiInteraction, toggleGuildExpandedState

// Module 9319 (toggleGuildExpandedState)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/emojis/EmojiActionCreators.tsx");

export const toggleGuildExpandedState = function toggleGuildExpandedState(guildId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "TOGGLE_GUILD_EXPANDED_STATE", guildId };
  obj.dispatch(obj);
};
export const initiateEmojiInteraction = function initiateEmojiInteraction(AutocompleteWrapperShown) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "EMOJI_INTERACTION_INITIATED", interaction: AutocompleteWrapperShown };
  obj.dispatch(obj);
};
