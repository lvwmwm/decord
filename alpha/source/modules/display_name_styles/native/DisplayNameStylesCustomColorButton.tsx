// Module ID: 17329
// Function ID: 17330
// Name: DisplayNameStylesCustomColorButton
// Dependencies: [19, 17, 21, 5014, 575, 1090, 17330, 1113, 16466, 17331, 2]
// Exports: default

// Module 17329 (DisplayNameStylesCustomColorButton)
import nativeDefault from "native" /* 575 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1090 */;
import intl2 from "intl" /* 1113 */;
import useCustomSwatchA11yDefault from "useCustomSwatchA11y" /* 17330 */;
import EyeDropperIcon2 from "EyeDropperIcon" /* 17331 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ Pressable: c3, StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles((color) => {
  let BACKGROUND_MOD_SUBTLE;
  let obj3;
  let obj5;
  let size1;
  size = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40, borderRadius: nativeDefault.radii.sm, overflow: "hidden", flexDirection: "row", backgroundColor: BACKGROUND_MOD_SUBTLE };
  if (null != color) {
    const obj2 = utils_ColorUtils;
    BACKGROUND_MOD_SUBTLE = obj2.int2hex(color);
  } else {
    BACKGROUND_MOD_SUBTLE = tmp(575).colors.BACKGROUND_MOD_SUBTLE;
  }
  const obj = { button: size, border: obj3, selected: { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND }, iconOverlay: obj5, iconBacking: { padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: "white" }, icon: size1 };
  obj3 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm };
  const merged = Object.assign(React3.absoluteFillObject);
  obj5 = { alignItems: "center", justifyContent: "center" };
  ({ borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND });
  const merged1 = Object.assign(React3.absoluteFillObject);
  ({ padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: "white" });
  size1 = { width: tmp(575).space.PX_20, height: tmp(575).space.PX_20 };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesCustomColorButton.tsx");

export default function DisplayNameStylesCustomColorButton(onPress) {
  let EyeDropperIcon;
  let activeColors;
  let customColorDescription;
  let iconContrast;
  let isSelected;
  let items1;
  let obj4;
  let obj5;
  let showGummyStripes;
  let str;
  ({ activeColors, isSelected, showGummyStripes } = onPress);
  onPress = onPress.onPress;
  if (showGummyStripes === undefined) {
    showGummyStripes = false;
  }
  let tmp2;
  const tmp = closure_8;
  if (isSelected) {
    let first;
    if (activeColors != null) {
      first = activeColors[0];
    }
    tmp2 = first;
  }
  const tmpResult = tmp(tmp2);
  let items = activeColors;
  const tmp8 = useCustomSwatchA11yDefault;
  if (activeColors == null) {
    items = [];
  }
  ({ customColorDescription, iconContrast } = tmp8({ selectedColors: items, hasCustomPalette: isSelected, hasCustomSwatchSelected: isSelected }));
  const obj = { style: tmpResult.button, onPress, accessibilityRole: "button", accessibilityState: { selected: isSelected }, accessibilityLabel: customColorDescription, children: items1 };
  tmp8({ selectedColors: items, hasCustomPalette: isSelected, hasCustomSwatchSelected: isSelected });
  const tmp10 = metroImportDefault;
  const tmp11 = _false;
  if (customColorDescription == null) {
    const intl = intl2.intl;
    customColorDescription = intl.string(intl2.t["FHBa/1"]);
  }
  if (showGummyStripes) {
    showGummyStripes = null != activeColors;
  }
  if (showGummyStripes) {
    const obj2 = { colors: activeColors };
    showGummyStripes = metroRequire(tmp6(16466), obj2);
  }
  items1 = [showGummyStripes, , ];
  const items2 = [tmpResult.border, ];
  if (isSelected) {
    isSelected = tmpResult.selected;
  }
  items2[1] = isSelected;
  items1[1] = metroRequire(hasOwnProperty, { style: items2, pointerEvents: "none" });
  let needsBacking;
  const obj3 = { style: tmpResult.iconOverlay, pointerEvents: "none", children: metroRequire(hasOwnProperty, obj4) };
  if (iconContrast != null) {
    needsBacking = iconContrast.needsBacking;
  }
  obj4 = { style: true === needsBacking && tmpResult.iconBacking, children: metroRequire(EyeDropperIcon, obj5) };
  obj5 = { size: "custom", style: tmpResult.icon, color: str };
  EyeDropperIcon = EyeDropperIcon2.EyeDropperIcon;
  if (null == iconContrast) {
    str = tmp6(575).colors.ICON_DEFAULT;
  } else {
    str = "white";
    if (iconContrast.useDarkIcon) {
      str = "black";
    }
  }
  items1[2] = metroRequire(hasOwnProperty, obj3);
  return tmp10(tmp11, obj);
};
