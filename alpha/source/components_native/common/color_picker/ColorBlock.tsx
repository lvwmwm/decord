// Module ID: 16439
// Function ID: 16440
// Name: ColorBlock
// Dependencies: [19, 17, 21, 5014, 575, 1090, 6980, 5011, 1187, 11591, 2]

// Module 16439 (ColorBlock)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1090 */;
import ColorUtils from "ColorUtils" /* 5011 */;
import AssetRegistryDefault from "AssetRegistry" /* 11591 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let color;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { colorBlock: obj2 };
obj2 = { minWidth: 44, height: 44, borderRadius: nativeDefault.radii.xl, marginHorizontal: 12, marginVertical: 8, justifyContent: "center", alignItems: "center" };
const styles = createStyles.createStyles(obj);
const memoResult = react.memo((color) => {
  let BLACK;
  let BLACK2;
  let hexToColorName;
  let items;
  let items1;
  let obj3;
  let selected;
  let style;
  let tmp11Result;
  let tmp2Result4;
  let tmp2Result5;
  let tmp2Result6;
  let tmp7Result;
  let tmp7Result2;
  color = color.color;
  ({ style, selected } = color);
  if (selected === undefined) {
    selected = false;
  }
  const onSelect = color.onSelect;
  const tmp = styles();
  const obj = utils_ColorUtils;
  const v = obj.int2hsv(color).v;
  if (null != onSelect) {
    const obj2 = {
      accessibilityRole: "button",
      accessibilityLabel: hexToColorName(tmp2Result4.int2hex(color), true),
      accessibilityState: obj3,
      onPress() {
          return onSelect(color);
        },
      style: items,
      children: tmp7Result
    };
    const PressableOpacity = tmp2(6980).PressableOpacity;
    hexToColorName = ColorUtils.hexToColorName;
    ColorUtils;
    items = [tmp.colorBlock, style, ];
    obj3 = { selected };
    tmp2Result4 = utils_ColorUtils;
    const obj4 = { backgroundColor: tmp2Result5.int2hex(color) };
    items[2] = obj4;
    tmp7Result = null;
    tmp2Result5 = utils_ColorUtils;
    if (selected) {
      const obj5 = { source: AssetRegistryDefault, color: BLACK2 };
      const Icon2 = tmp2(1187).Icon;
      if (v < 0.5) {
        BLACK2 = tmp10(575).unsafe_rawColors.WHITE;
      } else {
        BLACK2 = tmp10(575).unsafe_rawColors.BLACK;
      }
      tmp7Result = tmp7(Icon2, obj5);
    }
    tmp7Result2 = tmp7(PressableOpacity, obj2);
  } else {
    const obj6 = { style: items1, children: tmp11Result };
    items1 = [tmp.colorBlock, style, ];
    const obj7 = { backgroundColor: tmp2Result6.int2hex(color) };
    items1[2] = obj7;
    tmp11Result = null;
    const tmp12 = View;
    tmp2Result6 = utils_ColorUtils;
    if (selected) {
      const obj8 = { source: AssetRegistryDefault, color: BLACK };
      const Icon = tmp2(1187).Icon;
      if (v < 0.5) {
        BLACK = tmp4(575).unsafe_rawColors.WHITE;
      } else {
        BLACK = tmp4(575).unsafe_rawColors.BLACK;
      }
      tmp11Result = tmp11(Icon, obj8);
    }
    tmp7Result2 = tmp11(tmp12, obj6);
  }
  return tmp7Result2;
});
const result = size.fileFinishedImporting("components_native/common/color_picker/ColorBlock.tsx");

export default memoResult;
export const useStyles = styles;
