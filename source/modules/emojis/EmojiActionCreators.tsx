// Module ID: 9348
// Function ID: 9349
// Name: toggleGuildExpandedState
// Dependencies: [709, 2]
// Exports: initiateEmojiInteraction, toggleGuildExpandedState

// Module 9348 (toggleGuildExpandedState)
const result = require("set").fileFinishedImporting("modules/emojis/EmojiActionCreators.tsx");

export const toggleGuildExpandedState = function toggleGuildExpandedState(guildId) {
  let obj = importDefault(709);
  obj = { type: "TOGGLE_GUILD_EXPANDED_STATE", guildId };
  obj.dispatch(obj);
};
export const initiateEmojiInteraction = function initiateEmojiInteraction(AutocompleteWrapperShown) {
  let obj = importDefault(709);
  obj = { type: "EMOJI_INTERACTION_INITIATED", interaction: AutocompleteWrapperShown };
  obj.dispatch(obj);
};
