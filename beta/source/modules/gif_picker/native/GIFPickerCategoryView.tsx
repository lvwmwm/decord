// Module ID: 9844
// Function ID: 9845
// Name: GIFPickerCategoryView
// Dependencies: [19, 17, 1074, 21, 4836, 576, 1115, 9040, 5899, 9845, 9698, 4832, 2]
// Exports: default

// Module 9844 (GIFPickerCategoryView)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import FastImageDefault from "FastImage" /* 5899 */;
import reactDefault from "react" /* 9040 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ StyleSheet, View: closure_4, TouchableOpacity: hasOwnProperty } = react_native);
const GIFPickerResultTypes = Constants.GIFPickerResultTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, gifImage: obj3, gifOverlay: obj4, categoryName: obj5, categoryNameIcon: obj6 };
obj2 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.xs, flex: 1 };
obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.BLACK, borderRadius: nativeDefault.radii.xs, opacity: 0.6 };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { margin: nativeDefault.space.PX_8, justifyContent: "center", flexDirection: "row", alignItems: "center" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { marginRight: nativeDefault.space.PX_4 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerCategoryView.tsx");

export default function GIFPickerCategoryView(onSelectCategory) {
  let items1;
  let items2;
  let tmp10Result;
  onSelectCategory = onSelectCategory.onSelectCategory;
  const item = onSelectCategory.item;
  const tmp = closure_9();
  const items = [onSelectCategory, item];
  const callback = react.useCallback(() => {
    onSelectCategory(item.type, item.name);
  }, items);
  const intl = intl2.intl;
  const obj = { categoryName: item.name };
  const formatToPlainStringResult = intl.formatToPlainString(intl2.t["j+63pw"], obj);
  const obj2 = { style: tmp.container, onPress: callback, accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, children: items1 };
  const merged = Object.assign(reactDefault(callback, formatToPlainStringResult));
  items1 = [, , ];
  const obj3 = { style: tmp.gifImage, source: { uri: item.src } };
  items1[0] = metroImportDefault(FastImageDefault, obj3);
  const obj4 = { style: tmp.gifOverlay };
  items1[1] = metroImportDefault(React3, obj4);
  const obj5 = { style: tmp.categoryName, accessible: false, children: items2 };
  const tmp11 = React3;
  const tmp8 = hasOwnProperty;
  if (item.type === GIFPickerResultTypes.TRENDING_GIFS) {
    const obj6 = { size: "sm", style: tmp.categoryNameIcon, color: nativeDefault.colors.WHITE };
    const AnalyticsIcon = tmp3(9845).AnalyticsIcon;
    tmp10Result = tmp10(AnalyticsIcon, obj6);
  } else {
    tmp10Result = null;
    if (item.type === tmp12.FAVORITES) {
      const obj7 = { size: "sm", style: tmp.categoryNameIcon, color: nativeDefault.colors.WHITE };
      const StarIcon = tmp3(9698).StarIcon;
      tmp10Result = tmp10(StarIcon, obj7);
    }
  }
  items2 = [tmp10Result, ];
  const obj8 = { variant: "text-sm/semibold", color: "text-overlay-light", maxFontSizeMultiplier: 2, accessible: false, children: item.name };
  items2[1] = metroImportDefault(Text_Text.Text, obj8);
  items1[2] = metroImportAll(tmp11, obj5);
  return metroImportAll(tmp8, obj2);
};
