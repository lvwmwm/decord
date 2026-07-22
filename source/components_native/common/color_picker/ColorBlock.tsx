// Module ID: 13455
// Function ID: 102167
// Name: styles
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 13455 (styles)
import { View } from "__exportStarResult1";
import { jsx } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import importAllResult from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

let obj = {};
obj = { "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, borderRadius: require("__exportStarResult1").radii.xl };
obj.colorBlock = obj;
const styles = __exportStarResult1.createStyles(obj);
const result = __exportStarResult1.fileFinishedImporting("components_native/common/color_picker/ColorBlock.tsx");

export default require("__exportStarResult1").memo((color) => {
  let selected;
  let style;
  color = color.color;
  const arg1 = color;
  ({ style, selected } = color);
  if (selected === undefined) {
    selected = false;
  }
  const onSelect = color.onSelect;
  const importDefault = onSelect;
  const tmp = styles();
  let obj = arg1(dependencyMap[5]);
  const v = obj.int2hsv(color).v;
  if (null != onSelect) {
    obj = { accessibilityRole: "button" };
    let obj3 = arg1(dependencyMap[7]);
    let obj4 = arg1(dependencyMap[5]);
    obj.accessibilityLabel = obj3.hexToColorName(obj4.int2hex(color), true);
    obj = { selected };
    obj.accessibilityState = obj;
    obj.onPress = function onPress() {
      return onSelect(color);
    };
    const items = [tmp.colorBlock, style, ];
    const obj1 = { backgroundColor: arg1(dependencyMap[5]).int2hex(color) };
    items[2] = obj1;
    obj.style = items;
    if (!selected) {
      obj.children = null;
      let tmp25Result = tmp12(arg1(dependencyMap[6]).PressableOpacity, obj);
    } else {
      const obj2 = { source: importDefault(dependencyMap[9]) };
      if (v < 0.5) {
        let BLACK2 = importDefault(dependencyMap[4]).unsafe_rawColors.WHITE;
      } else {
        BLACK2 = importDefault(dependencyMap[4]).unsafe_rawColors.BLACK;
      }
      obj2.color = BLACK2;
      jsx(arg1(dependencyMap[8]).Icon, obj2);
      const tmp16 = jsx;
    }
    const obj8 = arg1(dependencyMap[5]);
    const tmp12 = jsx;
  } else {
    obj3 = {};
    const items1 = [tmp.colorBlock, style, ];
    obj4 = { backgroundColor: arg1(dependencyMap[5]).int2hex(color) };
    items1[2] = obj4;
    obj3.style = items1;
    if (!selected) {
      obj3.children = null;
      tmp25Result = tmp25(tmp26, obj3);
    } else {
      const obj5 = { source: importDefault(dependencyMap[9]) };
      if (v < 0.5) {
        let BLACK = importDefault(dependencyMap[4]).unsafe_rawColors.WHITE;
      } else {
        BLACK = importDefault(dependencyMap[4]).unsafe_rawColors.BLACK;
      }
      obj5.color = BLACK;
      jsx(arg1(dependencyMap[8]).Icon, obj5);
      const tmp2 = jsx;
    }
    const obj12 = arg1(dependencyMap[5]);
    const tmp25 = jsx;
    const tmp26 = View;
  }
  return tmp25Result;
});
export const useStyles = styles;
