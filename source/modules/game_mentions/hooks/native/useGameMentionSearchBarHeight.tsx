// Module ID: 11820
// Function ID: 11821
// Name: useGameMentionSearchBarHeight
// Dependencies: [17, 9502, 2]
// Exports: default

// Module 11820 (useGameMentionSearchBarHeight)
import { StyleSheet } from "get ActivityIndicator";

let c3 = "text-sm/semibold";
let c4 = "text-sm/medium";
const result = require("set").fileFinishedImporting("modules/game_mentions/hooks/native/useGameMentionSearchBarHeight.tsx");

export default function useGameMentionSearchBarHeight() {
  const sum = 24 + require(9502) /* map */.useScaledTextLineHeight(c3);
  const obj = require(9502) /* map */;
  return sum + require(9502) /* map */.useScaledTextLineHeight(c4) + 12 + StyleSheet.hairlineWidth;
};
export const GAME_MENTION_SEARCH_BAR_TITLE_VARIANT = "text-sm/semibold";
export const GAME_MENTION_SEARCH_BAR_DESCRIPTION_VARIANT = "text-sm/medium";
export const GAME_MENTION_SEARCH_BAR_HEADER_PADDING_VERTICAL = 12;
export const GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM = 12;
