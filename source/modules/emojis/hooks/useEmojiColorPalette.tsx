// Module ID: 9423
// Function ID: 73341
// Name: useEmojiColorPalette
// Dependencies: []
// Exports: useEmojiColorPalette

// Module 9423 (useEmojiColorPalette)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/emojis/hooks/useEmojiColorPalette.tsx");

export const useEmojiColorPalette = function useEmojiColorPalette(burst_colors) {
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => saturation.saturation);
  const obj = arg1(dependencyMap[2]);
  const items1 = [closure_3];
  const stateFromStores1 = arg1(dependencyMap[2]).useStateFromStores(items1, () => callback(closure_1[3]).isThemeDark(theme.theme));
  const obj2 = arg1(dependencyMap[2]);
  return arg1(dependencyMap[4]).buildEmojiColorPalette(burst_colors, stateFromStores, stateFromStores1);
};
