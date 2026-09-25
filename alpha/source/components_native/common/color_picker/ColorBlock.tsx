// Module ID: 14130
// Function ID: 14131
// Name: ColorBlock
// Dependencies: [19, 17, 21, 4829, 576, 1092, 5428, 4680, 1177, 11045, 2]

// Module 14130 (ColorBlock)
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import _modDef11045 from "module_11045" /* 11045 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
const obj = { colorBlock: { minWidth: 44, height: 44, borderRadius: nativeDefault.radii.xl, marginHorizontal: 12, marginVertical: 8, justifyContent: "center", alignItems: "center" } };
const styles = createStyles.createStyles(obj);
let obj3 = { minWidth: 44, height: 44, borderRadius: nativeDefault.radii.xl, marginHorizontal: 12, marginVertical: 8, justifyContent: "center", alignItems: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/color_picker/ColorBlock.tsx");

export default noop.memo((color) => {
  color = color.color;
  ({ style, selected } = color);
  if (selected === undefined) {
    selected = false;
  }
  const onSelect = color.onSelect;
  const tmp = styles();
  let unsafe_rawColors = dependencyMap;
  const v = utils_ColorUtils.int2hsv(color).v;
  if (null != onSelect) {
    const obj2 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, style: null, children: null };
    const tmp2Result = tmp2(4680);
    obj2.accessibilityLabel = tmp2Result.hexToColorName(tmp2(1092).int2hex(color), true);
    const obj3 = { selected };
    obj2.accessibilityState = obj3;
    obj2.onPress = function onPress() {
      return onSelect(color);
    };
    const items = [tmp.colorBlock, style, ];
    const obj4 = { backgroundColor: null };
    const tmp2Result4 = tmp2(1092);
    obj4.backgroundColor = tmp2(1092).int2hex(color);
    items[2] = obj4;
    obj2.style = items;
    if (!selected) {
      obj2.children = null;
      let tmp10Result1 = tmp6(tmp2(5428).PressableOpacity, obj2);
    } else {
      const obj5 = { source: _modDef11045, color: null };
      if (v < 0.5) {
        unsafe_rawColors = tmp8(576).unsafe_rawColors;
        let BLACK2 = unsafe_rawColors.WHITE;
      } else {
        BLACK2 = tmp8(576).unsafe_rawColors.BLACK;
      }
      obj5.color = BLACK2;
      tmp6(tmp2(1177).Icon, obj5);
    }
    const tmp2Result5 = tmp2(1092);
  } else {
    const obj6 = { style: null, children: null };
    const items1 = [tmp.colorBlock, style, ];
    const obj7 = { backgroundColor: tmp2(1092).int2hex(color) };
    items1[2] = obj7;
    obj6.style = items1;
    if (!selected) {
      obj6.children = null;
      tmp10Result1 = tmp10(tmp11, obj6);
    } else {
      const obj8 = { source: _modDef11045, color: null };
      if (v < 0.5) {
        let BLACK = tmp3(576).unsafe_rawColors.WHITE;
      } else {
        BLACK = tmp3(576).unsafe_rawColors.BLACK;
      }
      obj8.color = BLACK;
      tmp10(tmp2(1177).Icon, obj8);
    }
    tmp11 = View;
    const tmp2Result6 = tmp2(1092);
  }
  return tmp10Result1;
});
export const useStyles = styles;
