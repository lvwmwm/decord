// Module ID: 13569
// Function ID: 104323
// Name: styles
// Dependencies: [31, 27, 33, 4130, 689, 665, 4660, 3974, 1273, 9985, 2]

// Module 13569 (styles)
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let obj = {};
obj = { minWidth: 44, height: 44, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, marginHorizontal: 12, marginVertical: 8, justifyContent: "center", alignItems: "center" };
obj.colorBlock = obj;
const styles = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo((color) => {
  let selected;
  let style;
  color = color.color;
  ({ style, selected } = color);
  if (selected === undefined) {
    selected = false;
  }
  const onSelect = color.onSelect;
  const tmp = styles();
  let obj = color(665);
  const v = obj.int2hsv(color).v;
  if (null != onSelect) {
    obj = { accessibilityRole: "button" };
    let obj3 = color(3974);
    let obj4 = color(665);
    obj.accessibilityLabel = obj3.hexToColorName(obj4.int2hex(color), true);
    obj = { selected };
    obj.accessibilityState = obj;
    obj.onPress = function onPress() {
      return onSelect(color);
    };
    const items = [tmp.colorBlock, style, ];
    const obj1 = { backgroundColor: color(665).int2hex(color) };
    items[2] = obj1;
    obj.style = items;
    if (!selected) {
      obj.children = null;
      let tmp25Result = tmp12(color(4660).PressableOpacity, obj);
    } else {
      const obj2 = { source: onSelect(9985) };
      if (v < 0.5) {
        let BLACK2 = onSelect(689).unsafe_rawColors.WHITE;
      } else {
        BLACK2 = onSelect(689).unsafe_rawColors.BLACK;
      }
      obj2.color = BLACK2;
      jsx(color(1273).Icon, { source: onSelect(9985) });
      const tmp16 = jsx;
    }
    const obj8 = color(665);
    tmp12 = jsx;
  } else {
    obj3 = {};
    const items1 = [tmp.colorBlock, style, ];
    obj4 = { backgroundColor: color(665).int2hex(color) };
    items1[2] = obj4;
    obj3.style = items1;
    if (!selected) {
      obj3.children = null;
      tmp25Result = tmp25(tmp26, obj3);
    } else {
      const obj5 = { source: onSelect(9985) };
      if (v < 0.5) {
        let BLACK = onSelect(689).unsafe_rawColors.WHITE;
      } else {
        BLACK = onSelect(689).unsafe_rawColors.BLACK;
      }
      obj5.color = BLACK;
      jsx(color(1273).Icon, { source: onSelect(9985) });
      const tmp2 = jsx;
    }
    const obj12 = color(665);
    tmp25 = jsx;
    tmp26 = View;
  }
  return tmp25Result;
});
const result = require("jsxProd").fileFinishedImporting("components_native/common/color_picker/ColorBlock.tsx");

export default memoResult;
export const useStyles = styles;
