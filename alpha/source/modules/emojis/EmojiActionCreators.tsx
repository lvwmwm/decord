// Module ID: 9919
// Function ID: 9920
// Name: emojis/EmojiActionCreators
// Dependencies: [572, 2]
// Exports: initiateEmojiInteraction, toggleGuildExpandedState

// Module 9919 (emojis/EmojiActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emojis/EmojiActionCreators.tsx");

export function toggleGuildExpandedState(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "TOGGLE_GUILD_EXPANDED_STATE", guildId };
  obj.dispatch(obj2);
}
export function initiateEmojiInteraction(AutocompleteWrapperShown) {
  const obj = DispatcherDefault;
  const obj2 = { type: "EMOJI_INTERACTION_INITIATED", interaction: AutocompleteWrapperShown };
  obj.dispatch(obj2);
}
