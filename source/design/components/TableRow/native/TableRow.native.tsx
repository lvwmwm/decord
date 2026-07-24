// Module ID: 5165
// Function ID: 44973
// Name: TableRowInner
// Dependencies: [31, 27, 33, 4130, 689, 1324, 5166, 3834, 5167, 5125, 5170, 5171, 5174, 4549, 477, 5175, 4126, 2]

// Module 5165 (TableRowInner)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
class TableRow {
  constructor(arg0) {
    ({ icon, disabled } = global);
    ({ label, subLabel, trailing, arrow, onPress } = global);
    if (disabled === undefined) {
      disabled = false;
    }
    ({ variant, start, end, labelLineClamp, subLabelLineClamp } = global);
    if (variant === undefined) {
      variant = "default";
    }
    obj = { label: 0, subLabel: 0, icon: 0, trailing: 0, arrow: 0, onPress: 0, disabled: 0, start: 0, end: 0, labelLineClamp: 0, subLabelLineClamp: 0, variant: 0, draggable: 0, dragHandlePressableProps: 0, height: 0 };
    ({ draggable, dragHandlePressableProps, height } = global);
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    MobileVisualRefreshExperiment = require("useIsMobileVisualRefreshExperimentEnabled").MobileVisualRefreshExperiment;
    enabled = MobileVisualRefreshExperiment.useConfig({ location: "TableRow" }).enabled;
    context = result.useContext(require("context").TableRowGroupContext);
    tmp4 = !context;
    if (tmp4) {
      flag = true;
      tmp4 = true === end;
    }
    obj2 = require("map");
    token = obj2.useToken(require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_BORDER_RADIUS);
    tmp6 = jsx;
    obj = { radius: null, shadow: "none", border: "none" };
    obj.radius = token;
    str = undefined;
    if (enabled) {
      str = "muted";
    }
    obj.variant = str;
    tmp7 = !context;
    if (tmp7) {
      flag2 = true;
      tmp7 = true === start;
    }
    obj.start = tmp7;
    obj.end = tmp4;
    obj.onPress = onPress;
    obj.disabled = disabled;
    obj.style = jsxs;
    merged1 = Object.assign(merged);
    obj1 = { height, label, subLabel, icon, trailing, arrow };
    obj1.disabled = disabled;
    obj1.labelLineClamp = labelLineClamp;
    obj1.subLabelLineClamp = subLabelLineClamp;
    obj1.variant = variant;
    obj1.draggable = draggable;
    obj1.dragHandlePressableProps = dragHandlePressableProps;
    obj1.isRefreshEnabled = enabled;
    obj["children"] = jsx(TableRowInner, obj1);
    tmp6Result = tmp6(require("getCardBackgroundToken").InternalCard, obj);
    tmp10 = tmp6Result;
    if (!context) {
      tmp10 = tmp6Result;
      if (!tmp4) {
        tmp11 = jsxs;
        tmp12 = Fragment;
        obj2 = {};
        items = [, ];
        items[0] = tmp6Result;
        tmp13 = jsx;
        tmp14 = closure_0;
        tmp15 = closure_2;
        num = 9;
        obj3 = {};
        obj3.adjustSpacingForIcon = null != icon;
        items[1] = jsx(require("TableRowDivider").TableRowDivider, obj3);
        obj2.children = items;
        tmp10 = jsxs(Fragment, obj2);
      }
    }
    return tmp10;
  }
}
class TableRowInner {
  constructor(arg0) {
    ({ label, subLabel, icon, trailing, arrow, variant } = global);
    ({ labelLineClamp, subLabelLineClamp, disabled } = global);
    if (variant === undefined) {
      variant = "default";
    }
    flag = global.draggable;
    if (flag === undefined) {
      flag = false;
    }
    dragHandlePressableProps = global.dragHandlePressableProps;
    ({ borderRadius, height } = global);
    tmp = require("useIsMobileVisualRefreshExperimentEnabled")("TableRowInner");
    tmp2 = undefined;
    if (result.isValidElement(trailing)) {
      tmp3 = closure_0;
      tmp4 = closure_2;
      num = 12;
      if (trailing.type === require("TableRowTrailingText").TableRowTrailingText) {
        tmp2 = trailing;
      }
    }
    obj = require("getFontScale");
    fontScale = obj.useFontScale();
    obj2 = require("set");
    if (obj2.isAndroid()) {
      num3 = 1.2;
      tmp6 = fontScale > 1.2;
    } else {
      num2 = 1.5;
      tmp6 = fontScale > 1.5;
    }
    tmp7 = f44976(true === disabled, null != tmp2, tmp6, tmp);
    obj3 = require("map");
    token = obj3.useToken(require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
    obj4 = require("map");
    obj = { style: items };
    items = [, ];
    items[0] = tmp7.row;
    items[1] = { borderRadius, height };
    token1 = obj4.useToken(require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_LABEL_COLOR);
    tmp10 = jsxs;
    tmp11 = View;
    if (flag) {
      tmp12 = jsx;
      tmp13 = Pressable;
      obj1 = {};
      tmp14 = obj1;
      tmp15 = dragHandlePressableProps;
      merged = Object.assign(dragHandlePressableProps);
      tmp17 = jsx;
      tmp18 = closure_0;
      tmp19 = closure_2;
      num4 = 15;
      obj2 = {};
      str = "xs";
      obj2.size = "xs";
      obj2.style = tmp7.dragHandle;
      str2 = "children";
      obj1["children"] = jsx(require("DragIcon").DragIcon, obj2);
      flag = jsx(Pressable, obj1);
    }
    items1 = [, , , , ];
    items1[0] = flag;
    tmp20 = null != icon;
    if (tmp20) {
      tmp21 = jsx;
      tmp22 = View;
      obj3 = {};
      obj3.style = tmp7.iconContainer;
      obj3.children = icon;
      tmp20 = jsx(View, obj3);
    }
    items1[1] = tmp20;
    obj4 = { style: tmp7.content };
    obj5 = { style: tmp7.labels };
    tmp23 = jsxs;
    tmp24 = View;
    tmp25 = jsxs;
    tmp26 = View;
    tmp28Result = label;
    if (!result.isValidElement(label)) {
      tmp29 = closure_0;
      tmp30 = closure_2;
      num5 = 16;
      tmp28 = jsx;
      obj6 = {};
      obj6.variant = token;
      str3 = "text-feedback-critical";
      str4 = "danger";
      if ("danger" !== variant) {
        str3 = token1;
      }
      obj6.color = str3;
      obj6.lineClamp = labelLineClamp;
      obj6.includeFontPadding = true;
      obj6.children = label;
      tmp28Result = tmp28(require("Text").Text, obj6);
    }
    items2 = [, ];
    items2[0] = tmp28Result;
    tmp31 = null != subLabel;
    if (tmp31) {
      tmp32 = result;
      tmp34Result = subLabel;
      if (!result.isValidElement(subLabel)) {
        tmp35 = closure_0;
        tmp36 = closure_2;
        num6 = 16;
        tmp34 = jsx;
        obj7 = {};
        str5 = "text-xs/medium";
        obj7.variant = "text-xs/medium";
        str6 = "text-subtle";
        str7 = "danger";
        if ("danger" === variant) {
          str6 = "text-feedback-critical";
        }
        obj7.color = str6;
        obj7.lineClamp = subLabelLineClamp;
        obj7.includeFontPadding = true;
        obj7.children = subLabel;
        tmp34Result = tmp34(require("Text").Text, obj7);
      }
      tmp31 = tmp34Result;
    }
    items2[1] = tmp31;
    obj5.children = items2;
    items3 = [, ];
    items3[0] = tmp25(tmp26, obj5);
    tmp37 = null != tmp2;
    if (tmp37) {
      tmp38 = jsx;
      tmp39 = View;
      obj8 = {};
      items4 = [, ];
      ({ trailing: arr5[0], trailingText: arr5[1] } = tmp7);
      obj8.style = items4;
      obj8.children = tmp2;
      tmp37 = jsx(View, obj8);
    }
    items3[1] = tmp37;
    obj4.children = items3;
    items1[2] = tmp23(tmp24, obj4);
    tmp40 = null != trailing && null == tmp2;
    if (tmp40) {
      tmp41 = jsx;
      tmp42 = View;
      obj9 = {};
      obj9.style = tmp7.trailing;
      obj9.children = trailing;
      tmp40 = jsx(View, obj9);
    }
    items1[3] = tmp40;
    if (arrow) {
      tmp43 = jsx;
      tmp44 = closure_0;
      tmp45 = closure_2;
      num7 = 11;
      arrow = jsx(require("TableRowArrow").TableRowArrow, {});
    }
    items1[4] = arrow;
    obj.children = items1;
    return tmp10(tmp11, obj);
  }
}
({ Pressable: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = { padding: 0 };
let closure_10 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1, arg2) => {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let obj = {};
  obj = { padding: importDefault(689).modules.mobile.TABLE_ROW_PADDING, minHeight: importDefault(689).modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center" };
  let str = "row";
  let str2 = "center";
  let num = 1;
  if (arg0) {
    num = 0.5;
  }
  obj.opacity = num;
  let md;
  if (flag) {
    md = importDefault(689).radii.md;
  }
  obj.borderRadius = md;
  obj.row = obj;
  obj = { minWidth: importDefault(689).modules.mobile.TABLE_ROW_ICON_SIZE, marginEnd: importDefault(689).modules.mobile.TABLE_ROW_PADDING, alignItems: str2, justifyContent: str2 };
  obj.iconContainer = obj;
  let num2 = 18;
  obj.trailing = { marginStart: 18 };
  const obj1 = { flexShrink: 1, flexGrow: 1, flexDirection: null, alignItems: null, justifyContent: "space-between" };
  if (arg2) {
    str = "column";
  }
  obj1.flexDirection = str;
  if (arg2) {
    str2 = "stretch";
  }
  obj1.alignItems = str2;
  obj.content = obj1;
  const obj2 = {};
  let str3 = "100%";
  if (arg1) {
    str3 = "100%";
  }
  obj2.width = str3;
  let num3;
  if (arg1) {
    if (!arg2) {
      num3 = 1;
    }
  }
  obj2.flexGrow = num3;
  let num4 = 1;
  if (arg1) {
    num4 = 1;
  }
  obj2.flexShrink = num4;
  let str4;
  if (arg1) {
    if (!arg2) {
      str4 = "70%";
    }
  }
  obj2.maxWidth = str4;
  obj.labels = obj2;
  const obj3 = { flexShrink: 1 };
  if (arg2) {
    num2 = 0;
  }
  obj3.marginStart = num2;
  obj.trailingText = obj3;
  obj.dragHandle = { marginEnd: 8 };
  return obj;
});
TableRow.Icon = require("TableRowIcon").TableRowIcon;
TableRow.Arrow = require("TableRowArrow").TableRowArrow;
TableRow.TrailingText = require("TableRowTrailingText").TableRowTrailingText;
const result = require("jsxProd").fileFinishedImporting("design/components/TableRow/native/TableRow.native.tsx");

export { TableRow };
export { TableRowInner };
