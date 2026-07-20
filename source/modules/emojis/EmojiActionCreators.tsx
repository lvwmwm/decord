// Module ID: 9315
// Function ID: 72780
// Name: toggleGuildExpandedState
// Dependencies: []
// Exports: initiateEmojiInteraction, toggleGuildExpandedState

// Module 9315 (toggleGuildExpandedState)
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
