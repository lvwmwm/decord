// Module ID: 7505
// Function ID: 60136
// Name: FormTextColors
// Dependencies: [4294967295, 0, 0, 0]

// Module 7505 (FormTextColors)
import { jsx } from "result";
import result from "result";

let closure_3 = result.createStyles((arg0) => {
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
obj = { color: importDefault(dependencyMap[4]).unsafe_rawColors.BRAND_500 };
obj.BRAND = obj;
result = { color: importDefault(dependencyMap[4]).unsafe_rawColors.RED_400 };
obj.RED = result;
const importAllResult = importAll(dependencyMap[0]);
obj.GREEN = { color: importDefault(dependencyMap[4]).unsafe_rawColors.GREEN_360 };
const obj2 = { color: importDefault(dependencyMap[4]).unsafe_rawColors.GREEN_360 };
obj.YELLOW = { color: importDefault(dependencyMap[4]).unsafe_rawColors.YELLOW_300 };
const obj3 = { color: importDefault(dependencyMap[4]).unsafe_rawColors.YELLOW_300 };
obj.LINK = { color: importDefault(dependencyMap[4]).unsafe_rawColors.BLUE_345 };
const obj4 = { color: importDefault(dependencyMap[4]).unsafe_rawColors.BLUE_345 };
obj.WHITE = { color: importDefault(dependencyMap[4]).unsafe_rawColors.WHITE };
const obj5 = { color: importDefault(dependencyMap[4]).unsafe_rawColors.WHITE };
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
result = arg1(dependencyMap[6]).fileFinishedImporting("design/void/Form/native/FormText.tsx");

export default forwardRefResult;
export const FormTextColors = obj;
