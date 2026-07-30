// Module ID: 9333
// Function ID: 9334
// Name: toggleGuildExpandedState
// Dependencies: [709, 2]
// Exports: initiateEmojiInteraction, toggleGuildExpandedState

// Module 9333 (toggleGuildExpandedState)
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
