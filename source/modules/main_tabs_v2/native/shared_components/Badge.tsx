// Module ID: 9120
// Function ID: 71410
// Name: DEFAULT_BADGE_SIZE
// Dependencies: []

// Module 9120 (DEFAULT_BADGE_SIZE)
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj1 = arg1(dependencyMap[3]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
obj.badge = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.badgeClassic = obj1;
obj.mask = {};
let closure_2 = obj1.createStyles(obj);
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function Badge(size) {
  let badgeStyle;
  let style;
  let num = size.size;
  if (num === undefined) {
    num = 12;
  }
  let num2 = size.maskSize;
  if (num2 === undefined) {
    num2 = 4;
  }
  let flag = size.classic;
  if (flag === undefined) {
    flag = false;
  }
  const maskColor = size.maskColor;
  ({ style, badgeStyle } = size);
  const tmp = callback();
  const sum = num + 2 * num2;
  let tmp3;
  if (null != maskColor) {
    let obj = { backgroundColor: maskColor, height: sum, width: sum, borderRadius: sum / 2 };
    tmp3 = obj;
  }
  obj = { style: items, children: tmp4(tmp5, { style: items1 }) };
  const items = [tmp.mask, tmp3, style];
  const items1 = [flag ? tmp.badgeClassic : tmp.badge, , ];
  obj = { height: num, width: num, borderRadius: num / 2 };
  items1[1] = obj;
  items1[2] = badgeStyle;
  return <View {...obj} />;
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/Badge.tsx");

export default memoResult;
export const DEFAULT_BADGE_SIZE = 12;
export const CHANNEL_BADGE_SIZE = 8;
export const DEFAULT_BADGE_MASK_SIZE = 4;
