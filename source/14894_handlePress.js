// Module ID: 14894
// Function ID: 112226
// Name: handlePress
// Dependencies: []
// Exports: default, getScaledGuildMFAWarningHeight

// Module 14894 (handlePress)
function handlePress() {
  return _handlePress(...arguments);
}
function _handlePress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handlePress = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const Image = arg1(dependencyMap[2]).Image;
const tmp3 = arg1(dependencyMap[3]);
const HelpdeskArticles = tmp3.HelpdeskArticles;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.MFAWarning = obj;
obj.MFAWarningIcon = { en-AU: null, previewDisabled: "0068bea3a7b26b1d06c599bf3096c534", MUR: "channels-empty" };
const tmp4 = arg1(dependencyMap[4]);
obj.MFAWarningLink = { color: importDefault(dependencyMap[6]).unsafe_rawColors.BLUE_345, fontFamily: tmp3.Fonts.PRIMARY_SEMIBOLD };
let closure_8 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[6]).unsafe_rawColors.BLUE_345, fontFamily: tmp3.Fonts.PRIMARY_SEMIBOLD };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_sidebar/native/GuildMFAWarning.tsx");

export default function GuildMFAWarning() {
  const tmp = callback4();
  let obj = { accessibilityRole: "button", style: tmp.MFAWarning, onPress: handlePress };
  obj = { style: tmp.MFAWarningIcon, source: importDefault(dependencyMap[12]) };
  const items = [callback2(Image, obj), ];
  obj = {};
  const intl = arg1(dependencyMap[14]).intl;
  const items1 = [intl.string(arg1(dependencyMap[14]).t.ZIf8Ag), ];
  const obj1 = { style: tmp.MFAWarningLink };
  const intl2 = arg1(dependencyMap[14]).intl;
  const items2 = [null, intl2.string(arg1(dependencyMap[14]).t.hvVgAZ)];
  obj1.children = items2;
  items1[1] = callback3(arg1(dependencyMap[15]).LegacyText, obj1);
  obj.children = items1;
  items[1] = callback3(arg1(dependencyMap[13]).Text, obj);
  obj.children = items;
  return callback3(arg1(dependencyMap[11]).PressableOpacity, obj);
};
export const getScaledGuildMFAWarningHeight = function getScaledGuildMFAWarningHeight(fontScale) {
  return 83 + 5 * arg1(dependencyMap[7]).scaleTextLineHeight("text-xs/medium", fontScale) + 10 + 10;
};
