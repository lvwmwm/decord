// Module ID: 9363
// Function ID: 73068
// Name: toggleGuildExpandedState
// Dependencies: [686, 2]
// Exports: initiateEmojiInteraction, toggleGuildExpandedState

// Module 9363 (toggleGuildExpandedState)
const result = require("set").fileFinishedImporting("modules/emojis/EmojiActionCreators.tsx");

export const toggleGuildExpandedState = function toggleGuildExpandedState(guildId) {
  let obj = importDefault(686);
  obj = { type: "TOGGLE_GUILD_EXPANDED_STATE", guildId };
  obj.dispatch(obj);
};
export const initiateEmojiInteraction = function initiateEmojiInteraction(AutocompleteWrapperShown) {
  let obj = importDefault(686);
  obj = { type: "EMOJI_INTERACTION_INITIATED", interaction: AutocompleteWrapperShown };
  obj.dispatch(obj);
};
