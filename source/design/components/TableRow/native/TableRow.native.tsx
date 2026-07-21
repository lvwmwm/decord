// Module ID: 5428
// Function ID: 46504
// Name: TableRowInner
// Dependencies: []

// Module 5428 (TableRowInner)
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
    obj = {};
    ({ draggable, dragHandlePressableProps, height } = global);
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    MobileVisualRefreshExperiment = arg1(dependencyMap[5]).MobileVisualRefreshExperiment;
    enabled = MobileVisualRefreshExperiment.useConfig({ location: "TableRow" }).enabled;
    context = importAll.useContext(arg1(dependencyMap[6]).TableRowGroupContext);
    tmp4 = !context;
    if (tmp4) {
      flag = true;
      tmp4 = true === end;
    }
    obj2 = arg1(dependencyMap[7]);
    token = obj2.useToken(importDefault(dependencyMap[4]).modules.mobile.TABLE_ROW_BORDER_RADIUS);
    tmp6 = jsx;
    obj = { "Null": null, "Null": null, "Null": null };
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
    tmp6Result = tmp6(arg1(dependencyMap[8]).InternalCard, obj);
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
        tmp14 = arg1;
        tmp15 = dependencyMap;
        num = 9;
        obj3 = {};
        obj3.adjustSpacingForIcon = null != icon;
        items[1] = jsx(arg1(dependencyMap[9]).TableRowDivider, obj3);
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
    tmp = importDefault(dependencyMap[5])("TableRowInner");
    tmp2 = undefined;
    if (importAll.isValidElement(trailing)) {
      tmp3 = arg1;
      tmp4 = dependencyMap;
      num = 12;
      if (trailing.type === arg1(dependencyMap[12]).TableRowTrailingText) {
        tmp2 = trailing;
      }
    }
    obj = arg1(dependencyMap[13]);
    fontScale = obj.useFontScale();
    obj2 = arg1(dependencyMap[14]);
    if (obj2.isAndroid()) {
      num3 = 1.2;
      tmp6 = fontScale > 1.2;
    } else {
      num2 = 1.5;
      tmp6 = fontScale > 1.5;
    }
    tmp7 = f46507(true === disabled, null != tmp2, tmp6, tmp);
    obj3 = arg1(dependencyMap[7]);
    token = obj3.useToken(importDefault(dependencyMap[4]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
    obj4 = arg1(dependencyMap[7]);
    obj = { style: items };
    items = [, ];
    items[0] = tmp7.row;
    items[1] = { borderRadius, height };
    token1 = obj4.useToken(importDefault(dependencyMap[4]).modules.mobile.TABLE_ROW_LABEL_COLOR);
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
      tmp18 = arg1;
      tmp19 = dependencyMap;
      num4 = 15;
      obj2 = {};
      str = "xs";
      obj2.size = "xs";
      obj2.style = tmp7.dragHandle;
      str2 = "children";
      obj1["children"] = jsx(arg1(dependencyMap[15]).DragIcon, obj2);
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
    if (!importAll.isValidElement(label)) {
      tmp29 = arg1;
      tmp30 = dependencyMap;
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
      obj6.children = label;
      tmp28Result = tmp28(arg1(dependencyMap[16]).Text, obj6);
    }
    items2 = [, ];
    items2[0] = tmp28Result;
    tmp31 = null != subLabel;
    if (tmp31) {
      tmp32 = importAll;
      tmp34Result = subLabel;
      if (!importAll.isValidElement(subLabel)) {
        tmp35 = arg1;
        tmp36 = dependencyMap;
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
        obj7.children = subLabel;
        tmp34Result = tmp34(arg1(dependencyMap[16]).Text, obj7);
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
      tmp44 = arg1;
      tmp45 = dependencyMap;
      num7 = 11;
      arrow = jsx(arg1(dependencyMap[11]).TableRowArrow, {});
    }
    items1[4] = arrow;
    obj.children = items1;
    return tmp10(tmp11, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
({ Pressable: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[2]));
let closure_9 = { padding: 0 };
const tmp3 = arg1(dependencyMap[2]);
let closure_10 = arg1(dependencyMap[3]).createStyles((arg0, arg1, arg2) => {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let obj = {};
  obj = { padding: importDefault(dependencyMap[4]).modules.mobile.TABLE_ROW_PADDING, minHeight: importDefault(dependencyMap[4]).modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center" };
  let str = "row";
  let str2 = "center";
  let num = 1;
  if (arg0) {
    num = 0.5;
  }
  obj.opacity = num;
  let md;
  if (flag) {
    md = importDefault(dependencyMap[4]).radii.md;
  }
  obj.borderRadius = md;
  obj.row = obj;
  obj = { minWidth: importDefault(dependencyMap[4]).modules.mobile.TABLE_ROW_ICON_SIZE, marginEnd: importDefault(dependencyMap[4]).modules.mobile.TABLE_ROW_PADDING, alignItems: str2, justifyContent: str2 };
  obj.iconContainer = obj;
  let num2 = 18;
  obj.trailing = { marginStart: 18 };
  const obj1 = { borderRadius: true, borderWidth: true, padding: true, paddingBottom: true, flexDirection: true };
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
TableRow.Icon = arg1(dependencyMap[10]).TableRowIcon;
TableRow.Arrow = arg1(dependencyMap[11]).TableRowArrow;
TableRow.TrailingText = arg1(dependencyMap[12]).TableRowTrailingText;
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("design/components/TableRow/native/TableRow.native.tsx");

export { TableRow };
export { TableRowInner };
