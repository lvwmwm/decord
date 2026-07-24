// Module ID: 8433
// Function ID: 67003
// Name: closeActionSheet
// Dependencies: [57, 31, 27, 33, 4130, 689, 4098, 477, 5186, 5499, 8434, 1212, 4539, 3991, 1273, 4131, 4126, 4544, 4066, 8435, 3712, 5187, 8437, 3976, 2]
// Exports: default

// Module 8433 (closeActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function closeActionSheet() {
  importDefault(4098).hideActionSheet();
}
function ActionSheetHeader(handleSubmit) {
  let handleCancel;
  let title;
  ({ title, handleCancel } = handleSubmit);
  let obj = require(477) /* set */;
  const BottomSheetTitleHeader = require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader;
  if (isAndroidResult) {
    obj = { title };
    obj = { onPress: handleCancel };
    obj.trailing = callback(tmp3(5499).ActionSheetCloseButton, obj);
    let tmp2Result = tmp2(BottomSheetTitleHeader, obj);
  } else {
    const obj1 = { title };
    const obj2 = { onPress: handleCancel };
    const intl = tmp3(1212).intl;
    obj2.label = intl.string(tmp3(1212).t["ETE/oC"]);
    obj1.leading = callback(tmp3(8434).ActionSheetHeaderPressableText, obj2);
    const obj3 = { onPress: handleSubmit.handleSubmit };
    const intl2 = tmp3(1212).intl;
    obj3.label = intl2.string(tmp3(1212).t["R3BPH+"]);
    obj1.trailing = callback(tmp3(8434).ActionSheetHeaderPressableText, obj3);
    tmp2Result = tmp2(BottomSheetTitleHeader, obj1);
  }
  return tmp2Result;
}
function DateRangeError(show) {
  show = show.show;
  const tmp = _createForOfIteratorHelperLoose();
  const ref = React.useRef(null);
  const items = [show];
  const effect = React.useEffect(() => {
    let obj = show(outer1_2[12]);
    obj = { ref, delay: 200 };
    const result = obj.setAccessibilityFocus(obj);
  }, items);
  let obj = show(3991);
  class A {
    constructor() {
      obj = { easing: show(outer1_2[14]).STANDARD_EASING };
      num = 150;
      if (show) {
        num = 200;
      }
      obj.duration = num;
      obj = {};
      obj3 = show(outer1_2[15]);
      num2 = 0;
      if (show) {
        num2 = 1;
      }
      obj.opacity = obj3.withTiming(num2, obj);
      obj4 = show(outer1_2[15]);
      num3 = 0;
      if (show) {
        num3 = 500;
      }
      obj.maxHeight = obj4.withTiming(num3, obj);
      obj5 = show(outer1_2[15]);
      num4 = 0;
      if (show) {
        num4 = 12;
      }
      obj.paddingVertical = obj5.withTiming(num4, obj);
      return obj;
    }
  }
  obj = { STANDARD_EASING: show(1273).STANDARD_EASING, show, withTiming: show(4131).withTiming };
  A.__closure = obj;
  A.__workletHash = 11991491746736;
  A.__initData = closure_10;
  const animatedStyle = obj.useAnimatedStyle(A);
  obj = { style: items1, accessibilityElementsHidden: !show };
  items1 = [tmp.rangeErrorContainer, animatedStyle];
  let str = "no-hide-descendants";
  if (show) {
    str = "auto";
  }
  obj.importantForAccessibility = str;
  const obj1 = { ref, accessible: true, accessibilityRole: "alert", style: tmp.rangeError };
  const obj2 = { variant: "text-md/medium", color: "text-overlay-light", children: show.errorText };
  obj1.children = callback(show(4126).Text, obj2);
  obj.children = callback(View, obj1);
  return callback(ref(3991).View, obj);
}
function ActionSheetFooter(arg0) {
  let canSubmit;
  let handleCancel;
  let handleSubmit;
  ({ handleCancel, handleSubmit, canSubmit } = arg0);
  const tmp = callback3();
  let obj = require(477) /* set */;
  let tmp2 = null;
  if (obj.isAndroid()) {
    obj = { style: tmp.footer };
    obj = { shrink: true, size: "md", variant: "secondary" };
    const obj1 = { variant: "text-md/semibold" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.children = intl.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
    obj.textElement = callback(require(4126) /* Text */.Text, obj1);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.accessibilityLabel = intl2.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
    obj.style = tmp.actionButton;
    obj.onPress = handleCancel;
    const items = [callback(require(4544) /* CollapsingText */.BaseTextButton, obj), ];
    const obj2 = { shrink: true, disabled: !canSubmit, size: "md", variant: "secondary" };
    const obj3 = { variant: "text-md/semibold" };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj3.children = intl3.string(require(1212) /* getSystemLocale */.t["cY+Oob"]);
    obj2.textElement = callback(require(4126) /* Text */.Text, obj3);
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj2.accessibilityLabel = intl4.string(require(1212) /* getSystemLocale */.t["cY+Oob"]);
    obj2.style = tmp.actionButton;
    obj2.onPress = handleSubmit;
    items[1] = callback(require(4544) /* CollapsingText */.BaseTextButton, obj2);
    obj.children = items;
    tmp2 = callback2(View, obj);
  }
  return tmp2;
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { rangeErrorContainer: { justifyContent: "flex-start" } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_CRITICAL, padding: 12, marginHorizontal: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.rangeError = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.datetimePickerContainer = { display: "flex", alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ footer: { marginVertical: 6, paddingHorizontal: 12, display: "flex", flexDirection: "row", justifyContent: "flex-end" }, actionButton: { marginLeft: 24 } });
let closure_10 = { code: "function DatePickerActionSheetTsx1(){const{STANDARD_EASING,show,withTiming}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:show?200:150};return{opacity:withTiming(show?1:0,animationSettings),maxHeight:withTiming(show?500:0,animationSettings),paddingVertical:withTiming(show?12:0,animationSettings)};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("components_native/DatePickerActionSheet.tsx");

export default function DatePickerActionSheet(mode) {
  let c10;
  let c11;
  let c9;
  let dependencyMap;
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
    const intl = maximumDate(1212).intl;
    title = intl.string(maximumDate(1212).t.epc9sr);
  }
  ({ startDate, maximumDate } = mode);
  const minimumDate = mode.minimumDate;
  ({ onSubmit: dependencyMap, onCancel } = mode);
  startDate = undefined;
  let first;
  let callback;
  let first1;
  let _createForOfIteratorHelperLoose;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  let closure_12;
  function isAboveMin(first) {
    let tmp = null == minimumDate;
    if (!tmp) {
      const time = first.getTime();
      tmp = time >= minimumDate.getTime();
    }
    return tmp;
  }
  function isBelowMax(first) {
    let tmp = null == maximumDate;
    if (!tmp) {
      const time = first.getTime();
      tmp = time <= maximumDate.getTime();
    }
    return tmp;
  }
  if (null == startDate) {
    const _Date = Date;
    startDate = new Date();
  }
  const tmp7 = onCancel(startDate.useState(startDate), 2);
  first = tmp7[0];
  callback = tmp7[1];
  const tmp9 = onCancel(startDate.useState(!mode.requireDateChanged), 2);
  first1 = tmp9[0];
  _createForOfIteratorHelperLoose = tmp9[1];
  const tmp3 = _createForOfIteratorHelperLoose();
  [c9, c10] = onCancel(startDate.useState(true), 2);
  const tmp11 = onCancel(startDate.useState(true), 2);
  [tmp13, c11] = onCancel(startDate.useState(false), 2);
  const tmp12 = onCancel(startDate.useState(false), 2);
  closure_12 = startDate.useRef(first);
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
  const effect = startDate.useEffect(() => {
    closure_12.current = first;
  }, items);
  const tmp24 = minimumDate(8435)(() => {
    closure_12.current = startDate;
    if (null != onCancel) {
      onCancel();
    }
    _undefined();
  });
  const tmp25 = minimumDate(8435)(() => {
    let tmp = first1;
    if (first1) {
      tmp = c9;
    }
    if (tmp) {
      callback(minimumDate(outer1_2[20])(ref.current));
    }
    if (c9) {
      _undefined();
    } else {
      _undefined(true);
    }
  });
  const tmp14 = minimumDate(4066)();
  let obj = { onDismiss: onCancel };
  obj = { title, handleCancel: tmp24, handleSubmit: tmp25 };
  obj.header = callback(closure_12, obj);
  obj = {};
  let tmp30 = tmp13;
  if (tmp13) {
    tmp30 = !isAboveMin(first);
  }
  obj.show = tmp30;
  const intl2 = maximumDate(1212).intl;
  const obj1 = {};
  let obj4 = minimumDate(3712)(minimumDate);
  obj1.minDate = obj4.format("L");
  obj.errorText = intl2.formatToPlainString(maximumDate(1212).t.FsJO55, obj1);
  const items1 = [callback(isAboveMin, obj), , , ];
  const obj2 = {};
  if (tmp13) {
    tmp13 = !isBelowMax(first);
  }
  obj2.show = tmp13;
  const intl3 = maximumDate(1212).intl;
  const obj3 = {};
  const tmp26 = minimumDate(8435)((first) => {
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
        c10(tmp6);
        const tmp4 = c10;
      }
      _undefined(false);
      callback3(true);
      callback2(first);
    }
  });
  const tmp27 = first1;
  const tmp28 = callback;
  const tmp29 = isAboveMin;
  const tmp31 = callback;
  const tmp32 = isAboveMin;
  obj3.maxDate = minimumDate(3712)(maximumDate).format("L");
  obj2.errorText = intl3.formatToPlainString(maximumDate(1212).t.R7r9VN, obj3);
  items1[1] = tmp31(tmp32, obj2);
  obj4 = { style: tmp3.datetimePickerContainer };
  const obj5 = {};
  const obj8 = minimumDate(3712)(maximumDate);
  const tmp33 = callback;
  const tmp34 = first;
  const tmp35 = callback;
  const tmp36 = minimumDate(8437);
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
  items1[3] = callback(isBelowMax, { handleCancel: tmp24, handleSubmit: tmp25, canSubmit: first1 });
  obj.children = items1;
  return tmp27(maximumDate(5187).BottomSheet, obj);
};
