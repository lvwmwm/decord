// Module ID: 11874
// Function ID: 11875
// Name: AppLauncherButtonIcon
// Dependencies: [109, 19, 17, 21, 558, 576, 4747, 1616, 10689, 5890, 2]

// Module 11874 (AppLauncherButtonIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 4747 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let style;

let closure_3 = ["style"];
const View = react_native.View;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let items;
  let items1;
  let tmp10;
  let tmp12Result;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(8);
  if (cResult[0] !== style) {
    style = style.style;
    const tmp8 = _objectWithoutProperties(style, closure_3);
    cResult[0] = style;
    cResult[1] = tmp8;
    cResult[2] = style;
    tmp5 = style;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = useKeyboardTypeDefault();
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { overflow: "hidden" };
    cResult[3] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === tmp9) {
    if (cResult[5] === tmp4) {
      let tmp11;
      if (cResult[6] === tmp5) {
        tmp11 = cResult[7];
      }
      return tmp11;
    }
  }
  if (tmp9 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER) {
    const obj4 = { style: items };
    const PlusLargeIcon = tmp(10689).PlusLargeIcon;
    const merged = Object.assign(tmp4);
    items = [tmp5, ];
    const obj5 = { transform: items1 };
    items1 = [{ rotate: "45deg" }];
    items[1] = obj5;
    tmp12Result = tmp12(PlusLargeIcon, obj4);
  } else {
    const obj6 = { style: tmp5 };
    const AppsIcon = tmp(5890).AppsIcon;
    const merged1 = Object.assign(tmp4);
    tmp12Result = tmp12(AppsIcon, obj6);
  }
  const tmp12Result2 = <tmp13 style={tmp10}>{tmp12Result}</tmp13>;
  cResult[4] = tmp9;
  cResult[5] = tmp4;
  cResult[6] = tmp5;
  cResult[7] = tmp12Result2;
  tmp11 = tmp12Result2;
}) : ((style) => {
  let items;
  let items1;
  let tmp4Result;
  style = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const tmp3 = useKeyboardTypeDefault();
  if (tmp3 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER) {
    const obj2 = { style: items };
    const PlusLargeIcon = tmp6(10689).PlusLargeIcon;
    const merged1 = Object.assign(merged);
    items = [style, ];
    const obj3 = { transform: items1 };
    items1 = [{ rotate: "45deg" }];
    items[1] = obj3;
    tmp4Result = tmp4(PlusLargeIcon, obj2);
  } else {
    const obj4 = { style };
    const AppsIcon = tmp6(5890).AppsIcon;
    const merged2 = Object.assign(merged);
    tmp4Result = tmp4(AppsIcon, obj4);
  }
  return <tmp5 style={{ overflow: "hidden" }}>{tmp4Result}</tmp5>;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherButtonIcon.tsx");

export const AppLauncherButtonIcon = tmp3;
