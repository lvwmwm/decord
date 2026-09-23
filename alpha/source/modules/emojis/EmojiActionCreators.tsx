// Module ID: 10674
// Function ID: 10675
// Name: emojis/EmojiActionCreators
// Dependencies: [573, 2]
// Exports: initiateEmojiInteraction, toggleGuildExpandedState

// Module 10674 (emojis/EmojiActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emojis/EmojiActionCreators.tsx");

export const toggleGuildExpandedState = function toggleGuildExpandedState(guildId) {
  DispatcherDefault.dispatch({ type: "TOGGLE_GUILD_EXPANDED_STATE", guildId });
};
export const initiateEmojiInteraction = function initiateEmojiInteraction(AutocompleteWrapperShown) {
  DispatcherDefault.dispatch({ type: "EMOJI_INTERACTION_INITIATED", interaction: AutocompleteWrapperShown });
};
