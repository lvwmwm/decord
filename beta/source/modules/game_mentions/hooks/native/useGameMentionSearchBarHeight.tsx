// Module ID: 11881
// Function ID: 11882
// Name: useGameMentionSearchBarHeight
// Dependencies: [17, 9578, 2]
// Exports: default

// Module 11881 (useGameMentionSearchBarHeight)
import react_native from "react-native" /* 17 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 9578 */;
import size from "module_2" /* 2 */;

const StyleSheet = react_native.StyleSheet;
let c3 = "text-sm/semibold";
let c4 = "text-sm/medium";
const result = size.fileFinishedImporting("modules/game_mentions/hooks/native/useGameMentionSearchBarHeight.tsx");

export default function useGameMentionSearchBarHeight() {
  const obj = useScaledTextLineHeight;
  const sum = 24 + obj.useScaledTextLineHeight(c3);
  const obj2 = useScaledTextLineHeight;
  return sum + obj2.useScaledTextLineHeight(c4) + 12 + StyleSheet.hairlineWidth;
};
export const GAME_MENTION_SEARCH_BAR_TITLE_VARIANT = "text-sm/semibold";
export const GAME_MENTION_SEARCH_BAR_DESCRIPTION_VARIANT = "text-sm/medium";
export const GAME_MENTION_SEARCH_BAR_HEADER_PADDING_VERTICAL = 12;
export const GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM = 12;
