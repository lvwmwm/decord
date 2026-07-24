// Module ID: 7637
// Function ID: 60776
// Name: FormCTA
// Dependencies: [31, 27, 482, 33, 4130, 689, 1273, 7638, 5158, 7639, 2]
// Exports: default

// Module 7637 (FormCTA)
import "result";
import { View } from "get ActivityIndicator";
import { Fonts } from "sum";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.form = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { fontSize: require("_createForOfIteratorHelperLoose").space.PX_16, lineHeight: 18, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, fontFamily: Fonts.PRIMARY_SEMIBOLD };
let obj2 = { fontSize: 12, lineHeight: 18, color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, fontFamily: Fonts.PRIMARY_MEDIUM };
_createForOfIteratorHelperLoose.description = obj2;
let obj1 = { fontSize: require("_createForOfIteratorHelperLoose").space.PX_16, lineHeight: 18, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, fontFamily: Fonts.PRIMARY_SEMIBOLD };
_createForOfIteratorHelperLoose.icon = { width: require("_createForOfIteratorHelperLoose").space.PX_40, height: require("_createForOfIteratorHelperLoose").space.PX_40 };
_createForOfIteratorHelperLoose.completedIcon = { opacity: 0.3 };
let obj3 = { width: require("_createForOfIteratorHelperLoose").space.PX_40, height: require("_createForOfIteratorHelperLoose").space.PX_40 };
_createForOfIteratorHelperLoose.completedText = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
const result = require("sum").fileFinishedImporting("design/void/Form/native/FormCTA.tsx");

export default function FormCTA(arg0) {
  let completed;
  let iconContainerStyle;
  let iconSource;
  let iconStyle;
  let importDefault;
  let onLongPress;
  let onPress;
  let style;
  let subtitle;
  let title;
  let titleStyle;
  let variant;
  ({ title, titleStyle, subtitle, completed } = arg0);
  ({ iconSource, trailing: importDefault, onPress, onLongPress, variant } = arg0);
  function renderTrailing() {
    if (completed) {
      const obj = { checked: true };
      let tmp = outer1_4(completed(outer1_2[7]).FormCheckbox, obj);
    } else {
      tmp = closure_1;
      if (null == closure_1) {
        tmp = outer1_4(outer1_1(outer1_2[8]).Arrow, {});
      }
    }
    return tmp;
  }
  ({ style, iconStyle, iconContainerStyle } = arg0);
  let tmp = _createForOfIteratorHelperLoose();
  let tmp3Result = null;
  if (null != iconSource) {
    let obj = {};
    const items = [iconContainerStyle, ];
    let completedIcon = null;
    if (completed) {
      completedIcon = tmp.completedIcon;
    }
    items[1] = completedIcon;
    obj.style = items;
    obj = {};
    const items1 = [tmp.icon, iconStyle];
    obj.style = items1;
    obj.source = iconSource;
    obj.size = completed(1273).Icon.Sizes.CUSTOM;
    obj.disableColor = true;
    obj.children = jsx(completed(1273).Icon, {});
    tmp3Result = <View />;
    const tmp3 = jsx;
    const tmp4 = View;
  }
  let tmp10Result = null;
  if (undefined !== subtitle) {
    obj = {};
    const items2 = [tmp.description, ];
    let completedText = null;
    if (completed) {
      completedText = tmp.completedText;
    }
    items2[1] = completedText;
    obj.style = items2;
    obj.text = subtitle;
    tmp10Result = jsx(importDefault(5158).SubLabel, {});
    const tmp10 = jsx;
  }
  if ("row-button" === variant) {
    const obj1 = { arrow: false, onPress, onLongPress };
    const obj2 = { checked: completed };
    obj1.accessibilityState = obj2;
    const obj3 = {};
    const items3 = [tmp.title, , ];
    let completedText1;
    if (completed) {
      completedText1 = tmp.completedText;
    }
    items3[1] = completedText1;
    items3[2] = titleStyle;
    obj3.style = items3;
    obj3.text = title;
    obj1.label = jsx(importDefault(5158).Label, {});
    obj1.subLabel = tmp10Result;
    obj1.trailing = renderTrailing();
    obj1.icon = tmp3Result;
    let tmp21Result = tmp16(completed(7639).RowButton, obj1);
  } else {
    const obj4 = { start: true, end: true, variant, onPress, onLongPress };
    const items4 = [tmp.form, style];
    obj4.DEPRECATED_style = items4;
    const obj5 = { checked: completed };
    obj4.accessibilityState = obj5;
    const obj6 = {};
    const items5 = [tmp.title, , ];
    let completedText2;
    if (completed) {
      completedText2 = tmp.completedText;
    }
    items5[1] = completedText2;
    items5[2] = titleStyle;
    obj6.style = items5;
    obj6.text = title;
    obj4.label = jsx(importDefault(5158).Label, {});
    obj4.subLabel = tmp10Result;
    obj4.trailing = renderTrailing();
    obj4.leading = tmp3Result;
    tmp21Result = tmp21(importDefault(5158), obj4);
    const tmp24 = importDefault(5158);
  }
  return tmp21Result;
};
