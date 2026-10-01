// Module ID: 8995
// Function ID: 8996
// Name: DatePickerActionSheet
// Dependencies: [32, 19, 17, 21, 4836, 576, 4800, 1364, 6570, 6619, 8996, 1115, 5275, 4566, 1177, 4837, 4832, 5282, 4767, 6383, 4421, 6571, 8997, 4685, 2]
// Exports: default

// Module 8995 (DatePickerActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import _modDef4421 from "module_4421" /* 4421 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import timing from "timing" /* 4837 */;
import react_native2 from "react-native" /* 5275 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6570 */;
import ActionSheetCloseButton from "ActionSheetCloseButton" /* 6619 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let metroImportDefault;
let metroRequire;
let obj2;
function ActionSheetHeader(handleSubmit) {
  let ActionSheetHeaderPressableText;
  let ActionSheetHeaderPressableText2;
  let handleCancel;
  let intl;
  let intl2;
  let obj3;
  let obj5;
  let obj6;
  let title;
  let tmp4Result;
  ({ title, handleCancel } = handleSubmit);
  handleSubmit = handleSubmit.handleSubmit;
  const obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid();
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  if (isAndroidResult) {
    const obj2 = { title, trailing: metroRequire(ActionSheetCloseButton.ActionSheetCloseButton, obj3) };
    obj3 = { onPress: handleCancel };
    tmp4Result = tmp4(BottomSheetTitleHeader, obj2);
  } else {
    const obj4 = { title, leading: metroRequire(ActionSheetHeaderPressableText, obj5), trailing: metroRequire(ActionSheetHeaderPressableText2, obj6) };
    obj5 = { onPress: handleCancel, label: intl.string(intl5.t["ETE/oC"]) };
    ActionSheetHeaderPressableText = tmp(8996).ActionSheetHeaderPressableText;
    intl = tmp(1115).intl;
    obj6 = { onPress: handleSubmit, label: intl2.string(intl5.t["R3BPH+"]) };
    ActionSheetHeaderPressableText2 = tmp(8996).ActionSheetHeaderPressableText;
    intl2 = tmp(1115).intl;
    tmp4Result = tmp4(BottomSheetTitleHeader, obj4);
  }
  return tmp4Result;
}
function DateRangeError(show) {
  let items1;
  let obj4;
  let str;
  show = show.show;
  const errorText = show.errorText;
  const tmp = closure_8();
  const ref = react.useRef(null);
  const items = [show];
  const effect = react.useEffect(() => {
    const obj = react_native2;
    const obj2 = { ref, delay: 200 };
    const result = obj.setAccessibilityFocus(obj2);
  }, items);
  let obj = show(4566);
  const tmp4 = show;
  class A {
    constructor() {
      let num;
      let num3;
      let num4;
      let withTiming2;
      let withTiming3;
      const obj = { easing: native.STANDARD_EASING, duration: num };
      num = 150;
      if (show) {
        num = 200;
      }
      let num2 = 0;
      const withTiming = timing.withTiming;
      timing;
      if (show) {
        num2 = 1;
      }
      const obj2 = { opacity: withTiming(num2, obj), maxHeight: withTiming2(num3, obj), paddingVertical: withTiming3(num4, obj) };
      num3 = 0;
      withTiming2 = timing.withTiming;
      timing;
      if (show) {
        num3 = 500;
      }
      num4 = 0;
      withTiming3 = timing.withTiming;
      timing;
      if (show) {
        num4 = 12;
      }
      return obj2;
    }
  }
  let obj2 = { STANDARD_EASING: show(1177).STANDARD_EASING, show, withTiming: show(4837).withTiming };
  A.__closure = obj2;
  A.__workletHash = 11991491746736;
  A.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(A);
  const obj3 = { style: items1, accessibilityElementsHidden: !show, importantForAccessibility: str, children: closure_6(View, obj4) };
  items1 = [tmp.rangeErrorContainer, animatedStyle];
  str = "no-hide-descendants";
  View = ref(4566).View;
  if (show) {
    str = "auto";
  }
  obj4 = { ref, accessible: true, accessibilityRole: "alert", style: tmp.rangeError, children: closure_6(tmp4(4832).Text, { variant: "text-md/medium", color: "text-feedback-critical", children: errorText }) };
  return closure_6(View, obj3);
}
function ActionSheetFooter(arg0) {
  let Text;
  let Text2;
  let canSubmit;
  let handleCancel;
  let handleSubmit;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj4;
  let obj6;
  ({ handleCancel, handleSubmit, canSubmit } = arg0);
  const tmp = closure_9();
  let tmp4 = null;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = { style: tmp.footer, children: items };
    const obj3 = { shrink: true, size: "md", variant: "secondary", textElement: metroRequire(Text, obj4), accessibilityLabel: intl2.string(intl5.t["ETE/oC"]), style: tmp.actionButton, onPress: handleCancel };
    const BaseTextButton = tmp2(5282).BaseTextButton;
    obj4 = { variant: "text-md/semibold", children: intl.string(intl5.t["ETE/oC"]) };
    Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    intl2 = tmp2(1115).intl;
    items = [metroRequire(BaseTextButton, obj3), ];
    const obj5 = { shrink: true, disabled: !canSubmit, size: "md", variant: "secondary", textElement: metroRequire(Text2, obj6), accessibilityLabel: intl4.string(intl5.t["cY+Oob"]), style: tmp.actionButton, onPress: handleSubmit };
    const BaseTextButton2 = tmp2(5282).BaseTextButton;
    obj6 = { variant: "text-md/semibold", children: intl3.string(intl5.t["cY+Oob"]) };
    Text2 = tmp2(4832).Text;
    intl3 = tmp2(1115).intl;
    intl4 = tmp2(1115).intl;
    items[1] = metroRequire(BaseTextButton2, obj5);
    tmp4 = metroImportDefault(View, obj2);
  }
  return tmp4;
}
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { rangeErrorContainer: { justifyContent: "flex-start" }, rangeError: obj2, datetimePickerContainer: { display: "flex", alignItems: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, padding: 12, marginHorizontal: 12, borderRadius: nativeDefault.radii.sm };
let closure_8 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles({ footer: { marginVertical: 6, paddingHorizontal: 12, display: "flex", flexDirection: "row", justifyContent: "flex-end" }, actionButton: { marginLeft: 24 } });
const __initData = { code: "function DatePickerActionSheetTsx1(){const{STANDARD_EASING,show,withTiming}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:show?200:150};return{opacity:withTiming(show?1:0,animationSettings),maxHeight:withTiming(show?500:0,animationSettings),paddingVertical:withTiming(show?12:0,animationSettings)};}" };
let result = size.fileFinishedImporting("components_native/DatePickerActionSheet.tsx");

export default function DatePickerActionSheet(mode) {
  let FsJO55;
  let R7r9VN;
  let _undefined;
  let c10;
  let c11;
  let c9;
  let first;
  let formatToPlainString;
  let formatToPlainString2;
  let items1;
  let maximumDate;
  let obj4;
  let obj6;
  let onCancel;
  let startDate;
  let str4;
  let tmp10;
  let tmp11Result;
  let str = mode.mode;
  if (str === undefined) {
    str = "date";
  }
  let title = mode.title;
  if (title === undefined) {
    let tmp = maximumDate;
    let tmp2 = dependencyMap;
    const intl = maximumDate(1115).intl;
    title = intl.string(maximumDate(1115).t.epc9sr);
  }
  ({ startDate, maximumDate } = mode);
  const minimumDate = mode.minimumDate;
  ({ onSubmit: dependencyMap, onCancel } = mode);
  startDate = undefined;
  let date;
  let closure_6;
  let first1;
  closure_8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  let ref;
  const requireDateChanged = mode.requireDateChanged;
  let tmp3 = closure_8();
  if (startDate == null) {
    let tmp4 = globalThis;
    const _Date = Date;
    const self = this;
    const self2 = this;
    startDate = new Date();
  }
  let obj = startDate;
  const tmp5 = onCancel(startDate.useState(startDate), 2);
  date = tmp5[0];
  closure_6 = tmp5[1];
  let tmp6 = onCancel(startDate.useState(!requireDateChanged), 2);
  first1 = tmp6[0];
  closure_8 = tmp6[1];
  [c9, c10] = onCancel(startDate.useState(true), 2);
  const tmp8 = onCancel(startDate.useState(true), 2);
  [tmp10, c11] = onCancel(startDate.useState(false), 2);
  const tmp9 = onCancel(startDate.useState(false), 2);
  const tmp13 = minimumDate(4767)();
  ref = startDate.useRef(date);
  date = undefined;
  if (null != maximumDate) {
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    date = new Date(maximumDate.getFullYear() + 1, 0, 1, 0, -1);
  }
  let date1;
  if (null != minimumDate) {
    const _Date3 = Date;
    const self5 = this;
    const self6 = this;
    date1 = new Date(minimumDate.getFullYear(), 0, 1, 0);
  }
  const items = [date];
  const effect = obj.useEffect(() => {
    ref.current = current;
  }, items);
  const tmp19 = minimumDate(6383)(() => {
    ref.current = startDate;
    if (onCancel != null) {
      tmp();
    }
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  });
  const tmp20 = minimumDate(6383)(() => {
    let tmp = first1;
    const current = ref.current;
    if (first1) {
      tmp = c9;
    }
    if (tmp) {
      dependencyMap(_modDef4421(current));
    }
    const tmp6 = c9;
    if (tmp6) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    } else {
      _undefined(true);
    }
  });
  const obj2 = { onDismiss: onCancel, header: closure_6(c10, { title, handleCancel: tmp19, handleSubmit: tmp20 }), children: items1 };
  const tmp21 = minimumDate(6383)((getTime) => {
    if (null != getTime) {
      const tmp2 = null == minimumDate && null == maximumDate;
      if (!tmp2) {
        let tmp4 = null == obj2;
        const tmp3 = c10;
        if (!tmp4) {
          const time = getTime.getTime();
          tmp4 = time >= obj2.getTime();
        }
        if (tmp4) {
          let tmp6 = null == maximumDate;
          const obj = maximumDate;
          if (!tmp6) {
            const time1 = getTime.getTime();
            tmp6 = time1 <= obj.getTime();
          }
          tmp4 = tmp6;
        }
        tmp3(tmp4);
      }
      _undefined(false);
      closure_8(true);
      closure_6(getTime);
    }
  });
  BottomSheet = maximumDate(6571).BottomSheet;
  let tmp26 = tmp10;
  const tmp22 = first1;
  if (tmp26) {
    let tmp27 = null == minimumDate;
    if (!tmp27) {
      let time = date.getTime();
      tmp27 = time >= minimumDate.getTime();
    }
    tmp26 = !tmp27;
  }
  const obj3 = { show: tmp26, errorText: formatToPlainString(FsJO55, obj4) };
  const intl2 = tmp23(1115).intl;
  formatToPlainString = intl2.formatToPlainString;
  FsJO55 = tmp23(1115).t.FsJO55;
  let str2 = "lll";
  let str3 = "lll";
  const format = tmp11(4421)(minimumDate).format;
  minimumDate(4421)(minimumDate);
  if ("date" === str) {
    str3 = "L";
  }
  obj4 = { minDate: format(str3) };
  items1 = [closure_6(ref, obj3), , , ];
  if (tmp10) {
    let tmp31 = null == maximumDate;
    if (!tmp31) {
      let time1 = date.getTime();
      tmp31 = time1 <= maximumDate.getTime();
    }
  }
  const obj5 = { show: tmp10, errorText: formatToPlainString2(R7r9VN, obj6) };
  const intl3 = tmp23(1115).intl;
  formatToPlainString2 = intl3.formatToPlainString;
  R7r9VN = tmp23(1115).t.R7r9VN;
  const format2 = tmp11(4421)(maximumDate).format;
  minimumDate(4421)(maximumDate);
  if ("date" === str) {
    str2 = "L";
  }
  obj6 = { maxDate: format2(str2) };
  items1[1] = closure_6(ref, obj5);
  const obj7 = { style: tmp3.datetimePickerContainer, children: closure_6(tmp11Result, { theme: str4, date, onDateChange: tmp21, maximumDate: date, minimumDate: date1, mode: str }) };
  str4 = "dark";
  tmp11Result = minimumDate(8997);
  const tmp23Result = maximumDate(4685);
  const tmp34 = date;
  if (tmp23Result.isThemeLight(tmp13)) {
    str4 = "light";
  }
  items1[2] = closure_6(tmp34, obj7);
  items1[3] = closure_6(ActionSheetFooter, { handleCancel: tmp19, handleSubmit: tmp20, canSubmit: first1 });
  return tmp22(BottomSheet, obj2);
};
