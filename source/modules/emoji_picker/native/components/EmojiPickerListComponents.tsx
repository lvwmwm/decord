// Module ID: 9355
// Function ID: 73022
// Name: NSFW_ROW_HEIGHT
// Dependencies: []

// Module 9355 (NSFW_ROW_HEIGHT)
let LABEL_BOTTOM_PADDING;
let LABEL_TOP_PADDING;
let NSFW_ROW_HEIGHT;
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ LABEL_BOTTOM_PADDING, LABEL_TOP_PADDING, NSFW_ROW_HEIGHT } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, paddingTop: LABEL_TOP_PADDING, paddingBottom: LABEL_BOTTOM_PADDING };
obj.section = obj;
obj1 = { 9223372036854775807: "git", 0: "git+https://github.com/mrousavy/nitro.git", 9223372036854775807: "version=$(node -p \"require('./package.json').version\") && sed -i '' \"s/#define NITRO_VERSION \\\".*\\\"/#define NITRO_VERSION \\\"$version\\\"/\" ./cpp/utils/NitroDefines.hpp", 9223372036854775807: "bun run write-native-version", 0: "rm -rf lib && bun typecheck && bob build", 9223372036854775807: "tsc --noEmit", 9223372036854775807: "eslint \"**/*.{js,ts,tsx}\" --fix", height: NSFW_ROW_HEIGHT, borderRadius: importDefault(dependencyMap[5]).radii.sm, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_NORMAL };
obj.nsfwContainer = obj1;
obj.nsfwText = { paddingHorizontal: null, paddingVertical: 1 };
let closure_6 = obj1.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(() => {
  const tmp = callback3();
  let obj = { style: tmp.nsfwContainer };
  obj = { source: importDefault(dependencyMap[7]), size: arg1(dependencyMap[6]).Icon.Sizes.SMALL };
  const items = [callback(arg1(dependencyMap[6]).Icon, obj), ];
  obj = { delete: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001191393554252316, dispatch: 557056.0015292466, raw: 1112527108802911800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, style: tmp.nsfwText };
  const intl = arg1(dependencyMap[9]).intl;
  obj.children = intl.string(arg1(dependencyMap[9]).t.SLzV5z);
  items[1] = callback(arg1(dependencyMap[8]).Text, obj);
  obj.children = items;
  return callback2(View, obj);
});
const memoResult1 = importAllResult.memo((useTier0UpsellContent) => {
  let isSectionNitroLocked;
  let label;
  ({ label, isSectionNitroLocked } = useTier0UpsellContent);
  let obj = { style: callback3().section };
  if (isSectionNitroLocked) {
    obj = { useTier0UpsellContent: useTier0UpsellContent.useTier0UpsellContent };
    isSectionNitroLocked = callback(arg1(dependencyMap[10]).PremiumUpsellGradientBackground, obj);
  }
  const items = [isSectionNitroLocked, ];
  let tmp6 = null;
  if ("" !== label) {
    obj = { children: label };
    tmp6 = callback(arg1(dependencyMap[8]).Text, obj);
  }
  items[1] = tmp6;
  obj.children = items;
  return closure_5(View, obj);
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponents.tsx");

export const NSFWRow = memoResult;
export const Section = memoResult1;
