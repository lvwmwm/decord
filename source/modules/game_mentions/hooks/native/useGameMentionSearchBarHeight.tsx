// Module ID: 11464
// Function ID: 88967
// Name: useGameMentionSearchBarHeight
// Dependencies: [27, 9889, 2]
// Exports: default

// Module 11464 (useGameMentionSearchBarHeight)
import { StyleSheet } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/game_mentions/hooks/native/useGameMentionSearchBarHeight.tsx");

export default function useGameMentionSearchBarHeight() {
  const sum = 24 + require(9889) /* scaleLineHeight */.useScaledTextLineHeight("text-sm/semibold");
  const obj = require(9889) /* scaleLineHeight */;
  return sum + require(9889) /* scaleLineHeight */.useScaledTextLineHeight("text-sm/medium") + 12 + StyleSheet.hairlineWidth;
};
export const GAME_MENTION_SEARCH_BAR_TITLE_VARIANT = "text-sm/semibold";
export const GAME_MENTION_SEARCH_BAR_DESCRIPTION_VARIANT = "text-sm/medium";
export const GAME_MENTION_SEARCH_BAR_HEADER_PADDING_VERTICAL = 12;
export const GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM = 12;
