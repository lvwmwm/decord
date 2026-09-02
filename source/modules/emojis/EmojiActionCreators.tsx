// Module ID: 9113
// Function ID: 9114
// Name: toggleGuildExpandedState
// Dependencies: [706, 2]
// Exports: initiateEmojiInteraction, toggleGuildExpandedState

// Module 9113 (toggleGuildExpandedState)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const result = set.fileFinishedImporting("modules/emojis/EmojiActionCreators.tsx");

export const toggleGuildExpandedState = function toggleGuildExpandedState(guildId) {
  let obj = dispatcherDefault;
  obj = { type: "TOGGLE_GUILD_EXPANDED_STATE", guildId };
  obj.dispatch(obj);
};
export const initiateEmojiInteraction = function initiateEmojiInteraction(AutocompleteWrapperShown) {
  let obj = dispatcherDefault;
  obj = { type: "EMOJI_INTERACTION_INITIATED", interaction: AutocompleteWrapperShown };
  obj.dispatch(obj);
};
