// Module ID: 7509
// Function ID: 60148
// Name: FormTextColors
// Dependencies: [4294967295, 0, 0, 0, 0, 0]

// Module 7509 (FormTextColors)
import { jsx } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

let closure_3 = __exportStarResult1.createStyles((arg0) => {
  let obj = {};
  obj = { color: arg1(dependencyMap[3]).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
  obj.primary = obj;
  obj = {};
  let num = 16;
  if ("small" === arg0) {
    num = 12;
  }
  obj.fontSize = num;
  let num2 = 22;
  if ("small" === arg0) {
    num2 = 16;
  }
  obj.lineHeight = num2;
  obj.text = obj;
  return obj;
});
let obj = {};
obj = { color: require("__exportStarResult1").unsafe_rawColors.BRAND_500 };
obj.BRAND = obj;
__exportStarResult1 = { color: require("__exportStarResult1").unsafe_rawColors.RED_400 };
obj.RED = __exportStarResult1;
const importAllResult = importAll(dependencyMap[0]);
obj.GREEN = { color: require("__exportStarResult1").unsafe_rawColors.GREEN_360 };
const obj2 = { color: require("__exportStarResult1").unsafe_rawColors.GREEN_360 };
obj.YELLOW = { color: require("__exportStarResult1").unsafe_rawColors.YELLOW_300 };
const obj3 = { color: require("__exportStarResult1").unsafe_rawColors.YELLOW_300 };
obj.LINK = { color: require("__exportStarResult1").unsafe_rawColors.BLUE_345 };
const obj4 = { color: require("__exportStarResult1").unsafe_rawColors.BLUE_345 };
obj.WHITE = { color: require("__exportStarResult1").unsafe_rawColors.WHITE };
const obj5 = { color: require("__exportStarResult1").unsafe_rawColors.WHITE };
const forwardRefResult = importAllResult.forwardRef((size, ref) => {
  let str = size.size;
  if (str === undefined) {
    str = "medium";
  }
  let primary = size.color;
  const tmp = callback(str);
  const obj = { ref };
  const items = [tmp.text, , ];
  if (null == primary) {
    primary = tmp.primary;
  }
  items[1] = primary;
  items[2] = size.style;
  obj.style = items;
  obj.children = size.children;
  return jsx(ref(dependencyMap[5]).LegacyText, obj);
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("design/void/Form/native/FormText.tsx");

export default forwardRefResult;
export const FormTextColors = obj;
