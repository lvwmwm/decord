// Module ID: 14830
// Function ID: 111765
// Name: TypingIndicator
// Dependencies: []
// Exports: TypingIndicator

// Module 14830 (TypingIndicator)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = arg1(dependencyMap[3]).createStyles((arg0) => {
  let obj = {};
  obj = { "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009459692418833874, "Bool(true)": 0.0000000000000000000000000017299758377292168, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017525034138530457, borderColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
  obj.ellipsisWrapper = obj;
  obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null };
  const unsafe_rawColors = importDefault(dependencyMap[4]).unsafe_rawColors;
  obj.backgroundColor = arg0 ? unsafe_rawColors.BRAND_200 : unsafe_rawColors.BRAND_500;
  obj.ellipsis = obj;
  const obj1 = { "Null": null, "Null": null };
  const unsafe_rawColors2 = importDefault(dependencyMap[4]).unsafe_rawColors;
  obj1.backgroundColor = arg0 ? unsafe_rawColors2.BRAND_500 : unsafe_rawColors2.WHITE;
  obj.ellipsisDot = obj1;
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/typing_indicators/TypingIndicator.tsx");

export const TypingIndicator = function TypingIndicator(style) {
  let obj = arg1(dependencyMap[6]);
  const tmp2 = callback(obj.isThemeLight(importDefault(dependencyMap[5])()));
  obj = { style: items, children: jsx(arg1(dependencyMap[7]).Ellipsis, obj) };
  const items = [tmp2.ellipsisWrapper, style.style];
  obj = { style: items1, dotStyle: tmp2.ellipsisDot, disableScale: true };
  const items1 = [tmp2.ellipsis];
  return <View {...obj} />;
};
