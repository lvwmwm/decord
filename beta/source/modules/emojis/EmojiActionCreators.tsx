// Module ID: 9794
// Function ID: 9795
// Name: emojis/EmojiActionCreators
// Dependencies: [573, 2]
// Exports: initiateEmojiInteraction, toggleGuildExpandedState

// Module 9794 (emojis/EmojiActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emojis/EmojiActionCreators.tsx");

export const toggleGuildExpandedState = function toggleGuildExpandedState(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "TOGGLE_GUILD_EXPANDED_STATE", guildId };
  obj.dispatch(obj2);
};
export const initiateEmojiInteraction = function initiateEmojiInteraction(AutocompleteWrapperShown) {
  const obj = DispatcherDefault;
  const obj2 = { type: "EMOJI_INTERACTION_INITIATED", interaction: AutocompleteWrapperShown };
  obj.dispatch(obj2);
};
