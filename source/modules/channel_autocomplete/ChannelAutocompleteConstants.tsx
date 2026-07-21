// Module ID: 4564
// Function ID: 40000
// Name: MENTION_SENTINEL
// Dependencies: [284214097]
// Exports: formatGameMentionRaw

// Module 4564 (MENTION_SENTINEL)
const tmp2 = /^<@\$(\d+)>/;
const regExp = new RegExp(tmp2.source.replace(/^\^/, ""), "g");
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/channel_autocomplete/ChannelAutocompleteConstants.tsx");

export const MENTION_SENTINEL = "@";
export const CHANNEL_SENTINEL = "#";
export const EMOJI_SENTINEL = ":";
export const REACTION_START_SENTINEL = "+:";
export const REACTION_END_SENTINEL = ":";
export const COMMAND_SENTINEL = "/";
export const formatGameMentionRaw = function formatGameMentionRaw(arg0) {
  return "<@$" + arg0 + ">";
};
export const GAME_MENTION_RAW_RE = tmp2;
export const GAME_MENTION_RAW_RE_GLOBAL = regExp;
