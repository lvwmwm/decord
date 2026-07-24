// Module ID: 9632
// Function ID: 74943
// Name: GIFPickerCategoryView
// Dependencies: [31, 27, 653, 33, 4130, 689, 1212, 8473, 5085, 9633, 9431, 4126, 2]
// Exports: default

// Module 9632 (GIFPickerCategoryView)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
({ StyleSheet, View: closure_4, TouchableOpacity: closure_5 } = get_ActivityIndicator);
require("ME").GIFPickerResultTypes;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.gifImage = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, flex: 1 };
const obj2 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2["backgroundColor"] = require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK;
obj2["borderRadius"] = require("_createForOfIteratorHelperLoose").radii.xs;
obj2["opacity"] = 0.6;
_createForOfIteratorHelperLoose.gifOverlay = obj2;
let obj3 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj3["margin"] = require("_createForOfIteratorHelperLoose").space.PX_8;
obj3["justifyContent"] = "center";
obj3["flexDirection"] = "row";
obj3["alignItems"] = "center";
_createForOfIteratorHelperLoose.categoryName = obj3;
const obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, flex: 1 };
_createForOfIteratorHelperLoose.categoryNameIcon = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_4 };
const result = require("ME").fileFinishedImporting("modules/gif_picker/native/GIFPickerCategoryView.tsx");

export default function GIFPickerCategoryView(onSelectCategory) {
  onSelectCategory = onSelectCategory.onSelectCategory;
  const item = onSelectCategory.item;
  const tmp = _createForOfIteratorHelperLoose();
  const items = [onSelectCategory, item];
  const callback = React.useCallback(() => {
    onSelectCategory(item.type, item.name);
  }, items);
  const intl = onSelectCategory(1212).intl;
  let obj = { categoryName: item.name };
  const formatToPlainStringResult = intl.formatToPlainString(onSelectCategory(1212).t["j+63pw"], obj);
  obj = { style: tmp.container, onPress: callback, accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult };
  const merged = Object.assign(item(8473)(callback, formatToPlainStringResult));
  obj = { style: tmp.gifImage, source: obj1 };
  const items1 = [callback(item(5085), obj), callback(closure_4, { style: tmp.gifOverlay }), ];
  const obj3 = { style: tmp.categoryName, accessible: false };
  if (item.type === GIFPickerResultTypes.TRENDING_GIFS) {
    const obj4 = { size: "sm", style: tmp.categoryNameIcon, color: item(689).colors.WHITE };
    let tmp9 = callback(onSelectCategory(9633).AnalyticsIcon, obj4);
  } else {
    tmp9 = null;
    if (item.type === GIFPickerResultTypes.FAVORITES) {
      const obj5 = { size: "sm", style: tmp.categoryNameIcon, color: item(689).colors.WHITE };
      tmp9 = callback(onSelectCategory(9431).StarIcon, obj5);
    }
  }
  const items2 = [tmp9, ];
  const obj6 = { variant: "text-sm/semibold", color: "text-overlay-light", maxFontSizeMultiplier: 2, accessible: false, children: item.name };
  items2[1] = callback(onSelectCategory(4126).Text, obj6);
  obj3.children = items2;
  items1[2] = closure_8(closure_4, obj3);
  obj["children"] = items1;
  return closure_8(closure_5, obj);
};
