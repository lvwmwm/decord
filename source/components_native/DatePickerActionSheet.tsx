// Module ID: 8382
// Function ID: 66726
// Name: closeActionSheet
// Dependencies: []
// Exports: default

// Module 8382 (closeActionSheet)
function closeActionSheet() {
  importDefault(dependencyMap[6]).hideActionSheet();
}
function ActionSheetHeader(handleSubmit) {
  let handleCancel;
  let title;
  ({ title, handleCancel } = handleSubmit);
  let obj = arg1(dependencyMap[7]);
  const BottomSheetTitleHeader = arg1(dependencyMap[8]).BottomSheetTitleHeader;
  if (isAndroidResult) {
    obj = { title };
    obj = { onPress: handleCancel };
    obj.trailing = callback2(tmp3(tmp4[9]).ActionSheetCloseButton, obj);
    let tmp2Result = tmp2(BottomSheetTitleHeader, obj);
  } else {
    const obj1 = { title };
    const obj2 = { onPress: handleCancel };
    const intl = tmp3(tmp4[11]).intl;
    obj2.label = intl.string(tmp3(tmp4[11]).t.ETE/oC);
    obj1.leading = callback2(tmp3(tmp4[10]).ActionSheetHeaderPressableText, obj2);
    const obj3 = { onPress: handleSubmit.handleSubmit };
    const intl2 = tmp3(tmp4[11]).intl;
    obj3.label = intl2.string(tmp3(tmp4[11]).t.R3BPH+);
    obj1.trailing = callback2(tmp3(tmp4[10]).ActionSheetHeaderPressableText, obj3);
    tmp2Result = tmp2(BottomSheetTitleHeader, obj1);
  }
  return tmp2Result;
}
function DateRangeError(show) {
  show = show.show;
  const arg1 = show;
  const tmp = callback4();
  const ref = React.useRef(null);
  const importDefault = ref;
  const items = [show];
  const effect = React.useEffect(() => {
    let obj = show(closure_2[12]);
    obj = { ref, delay: 200 };
    const result = obj.setAccessibilityFocus(obj);
  }, items);
  let obj = arg1(dependencyMap[13]);
  class A {
    constructor() {
      obj = { easing: show(closure_2[14]).STANDARD_EASING };
      num = 150;
      if (show) {
        num = 200;
      }
      obj.duration = num;
      obj = {};
      obj3 = show(closure_2[15]);
      num2 = 0;
      if (show) {
        num2 = 1;
      }
      obj.opacity = obj3.withTiming(num2, obj);
      obj4 = show(closure_2[15]);
      num3 = 0;
      if (show) {
        num3 = 500;
      }
      obj.maxHeight = obj4.withTiming(num3, obj);
      obj5 = show(closure_2[15]);
      num4 = 0;
      if (show) {
        num4 = 12;
      }
      obj.paddingVertical = obj5.withTiming(num4, obj);
      return obj;
    }
  }
  obj = { STANDARD_EASING: arg1(dependencyMap[14]).STANDARD_EASING, show, withTiming: arg1(dependencyMap[15]).withTiming };
  A.__closure = obj;
  A.__workletHash = 11991491746736;
  A.__initData = closure_10;
  const animatedStyle = obj.useAnimatedStyle(A);
  obj = { style: items1, accessibilityElementsHidden: !show };
  const items1 = [tmp.rangeErrorContainer, animatedStyle];
  let str = "no-hide-descendants";
  if (show) {
    str = "auto";
  }
  obj.importantForAccessibility = str;
  const obj2 = { hasMaxConnections: "<string:3566272514>", isBoostOnlySubscription: "<string:1239547905>", children: show.errorText };
  obj.children = callback2(View, { ref, style: tmp.rangeError, children: callback2(arg1(dependencyMap[16]).Text, obj2) });
  return callback2(importDefault(dependencyMap[13]).View, obj);
}
function ActionSheetFooter(arg0) {
  let canSubmit;
  let handleCancel;
  let handleSubmit;
  ({ handleCancel, handleSubmit, canSubmit } = arg0);
  const tmp = callback5();
  let obj = arg1(dependencyMap[7]);
  let tmp2 = null;
  if (obj.isAndroid()) {
    obj = { style: tmp.footer };
    obj = { "Bool(false)": "Array", "Bool(false)": "isArray", "Bool(false)": "valueOf" };
    const obj1 = { variant: "text-md/semibold" };
    const intl = arg1(dependencyMap[11]).intl;
    obj1.children = intl.string(arg1(dependencyMap[11]).t.ETE/oC);
    obj.textElement = callback2(arg1(dependencyMap[16]).Text, obj1);
    const intl2 = arg1(dependencyMap[11]).intl;
    obj.accessibilityLabel = intl2.string(arg1(dependencyMap[11]).t.ETE/oC);
    obj.style = tmp.actionButton;
    obj.onPress = handleCancel;
    const items = [callback2(arg1(dependencyMap[17]).BaseTextButton, obj), ];
    const obj2 = { disabled: !canSubmit };
    const obj3 = { variant: "text-md/semibold" };
    const intl3 = arg1(dependencyMap[11]).intl;
    obj3.children = intl3.string(arg1(dependencyMap[11]).t.cY+Oob);
    obj2.textElement = callback2(arg1(dependencyMap[16]).Text, obj3);
    const intl4 = arg1(dependencyMap[11]).intl;
    obj2.accessibilityLabel = intl4.string(arg1(dependencyMap[11]).t.cY+Oob);
    obj2.style = tmp.actionButton;
    obj2.onPress = handleSubmit;
    items[1] = callback2(arg1(dependencyMap[17]).BaseTextButton, obj2);
    obj.children = items;
    tmp2 = callback3(View, obj);
  }
  return tmp2;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { rangeErrorContainer: { justifyContent: "flex-start" } };
obj = { "Bool(true)": "r", 918434703: "_randomPrefix", -1682033114: "r", backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.rangeError = obj;
obj.datetimePickerContainer = { <string:29557293>: true, <string:45941405>: true };
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
let closure_9 = arg1(dependencyMap[4]).createStyles({ footer: { onPress: null, style: "\u{1F9D0}", accessibilityRole: 10, variant: 29, color: null }, actionButton: { marginLeft: 24 } });
let closure_10 = { code: "function DatePickerActionSheetTsx1(){const{STANDARD_EASING,show,withTiming}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:show?200:150};return{opacity:withTiming(show?1:0,animationSettings),maxHeight:withTiming(show?500:0,animationSettings),paddingVertical:withTiming(show?12:0,animationSettings)};}" };
const obj4 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("components_native/DatePickerActionSheet.tsx");

export default function DatePickerActionSheet(mode) {
  let maximumDate;
  let onCancel;
  let startDate;
  let tmp13;
  let str = mode.mode;
  if (str === undefined) {
    str = "date";
  }
  let title = mode.title;
  if (title === undefined) {
    const intl = arg1(dependencyMap[11]).intl;
    title = intl.string(arg1(dependencyMap[11]).t.epc9sr);
  }
  ({ startDate, maximumDate } = mode);
  const arg1 = maximumDate;
  const minimumDate = mode.minimumDate;
  const importDefault = minimumDate;
  ({ onSubmit: closure_2, onCancel } = mode);
  const callback = onCancel;
  let React;
  let View;
  let callback2;
  let first1;
  let callback4;
  let closure_9;
  let closure_10;
  let closure_11;
  let closure_12;
  function isAboveMin(first) {
    let tmp = null == minimumDate;
    if (!tmp) {
      const time = first.getTime();
      tmp = time >= minimumDate.getTime();
    }
    return tmp;
  }
  const DateRangeError = isAboveMin;
  function isBelowMax(first) {
    let tmp = null == maximumDate;
    if (!tmp) {
      const time = first.getTime();
      tmp = time <= maximumDate.getTime();
    }
    return tmp;
  }
  const ActionSheetFooter = isBelowMax;
  if (null == startDate) {
    const _Date = Date;
    startDate = new Date();
  }
  React = startDate;
  const tmp7 = callback(React.useState(startDate), 2);
  const first = tmp7[0];
  View = first;
  callback2 = tmp7[1];
  const tmp9 = callback(React.useState(!mode.requireDateChanged), 2);
  first1 = tmp9[0];
  callback4 = tmp9[1];
  const tmp3 = callback4();
  [closure_9, closure_10] = callback(React.useState(true), 2);
  const tmp11 = callback(React.useState(true), 2);
  [tmp13, closure_11] = callback(React.useState(false), 2);
  const tmp12 = callback(React.useState(false), 2);
  closure_12 = React.useRef(first);
  let date;
  if (null != maximumDate) {
    const _Date2 = Date;
    date = new Date(maximumDate.getFullYear() + 1, 0, 1, 0, -1);
  }
  let date1;
  if (null != minimumDate) {
    const _Date3 = Date;
    date1 = new Date(minimumDate.getFullYear(), 0, 1, 0);
  }
  const items = [first];
  const effect = React.useEffect(() => {
    closure_12.current = first;
  }, items);
  const tmp24 = importDefault(dependencyMap[19])(() => {
    closure_12.current = startDate;
    if (null != onCancel) {
      onCancel();
    }
    _undefined();
  });
  const tmp25 = importDefault(dependencyMap[19])(() => {
    let tmp = first1;
    if (first1) {
      tmp = closure_9;
    }
    if (tmp) {
      callback(minimumDate(callback[20])(ref.current));
    }
    if (closure_9) {
      _undefined();
    } else {
      _undefined(true);
    }
  });
  const tmp14 = importDefault(dependencyMap[18])();
  let obj = { onDismiss: onCancel };
  obj = { title, handleCancel: tmp24, handleSubmit: tmp25 };
  obj.header = callback2(closure_12, obj);
  obj = {};
  let tmp30 = tmp13;
  if (tmp13) {
    tmp30 = !isAboveMin(first);
  }
  obj.show = tmp30;
  const intl2 = arg1(dependencyMap[11]).intl;
  const obj1 = {};
  let obj4 = importDefault(dependencyMap[20])(minimumDate);
  obj1.minDate = obj4.format("L");
  obj.errorText = intl2.formatToPlainString(arg1(dependencyMap[11]).t.FsJO55, obj1);
  const items1 = [callback2(DateRangeError, obj), , , ];
  const obj2 = {};
  if (tmp13) {
    tmp13 = !isBelowMax(first);
  }
  obj2.show = tmp13;
  const intl3 = arg1(dependencyMap[11]).intl;
  const obj3 = {};
  const tmp26 = importDefault(dependencyMap[19])((first) => {
    if (null != first) {
      let tmp2 = null == minimumDate;
      if (tmp2) {
        tmp2 = null == maximumDate;
      }
      if (!tmp2) {
        let tmp6 = isAboveMin(first);
        if (tmp6) {
          tmp6 = isBelowMax(first);
        }
        closure_10(tmp6);
        const tmp4 = closure_10;
      }
      _undefined(false);
      callback3(true);
      callback2(first);
    }
  });
  const tmp27 = first1;
  const tmp28 = callback2;
  const tmp29 = DateRangeError;
  const tmp31 = callback2;
  const tmp32 = DateRangeError;
  obj3.maxDate = importDefault(dependencyMap[20])(maximumDate).format("L");
  obj2.errorText = intl3.formatToPlainString(arg1(dependencyMap[11]).t.R7r9VN, obj3);
  items1[1] = tmp31(tmp32, obj2);
  obj4 = { style: tmp3.datetimePickerContainer };
  const obj5 = {};
  const obj8 = importDefault(dependencyMap[20])(maximumDate);
  const tmp33 = callback2;
  const tmp34 = View;
  const tmp35 = callback2;
  const tmp36 = importDefault(dependencyMap[22]);
  let str2 = "dark";
  if (obj11.isThemeLight(tmp14)) {
    str2 = "light";
  }
  obj5.theme = str2;
  obj5.date = first;
  obj5.onDateChange = tmp26;
  obj5.maximumDate = date;
  obj5.minimumDate = date1;
  obj5.mode = str;
  obj4.children = tmp35(tmp36, obj5);
  items1[2] = tmp33(tmp34, obj4);
  items1[3] = callback2(ActionSheetFooter, { handleCancel: tmp24, handleSubmit: tmp25, canSubmit: first1 });
  obj.children = items1;
  return tmp27(arg1(dependencyMap[21]).BottomSheet, obj);
};
