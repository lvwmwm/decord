// Module ID: 12391
// Function ID: 12392
// Name: AppLauncherButtonIcon
// Dependencies: [109, 19, 17, 21, 558, 568, 4627, 1614, 11257, 5280, 2]

// Module 12391 (AppLauncherButtonIcon)
import c from "c" /* 568 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 4627 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const KeyboardTypes = PlusLargeIcon(1614);
const AppsIcon = PlusLargeIcon(5280);
const PlusLargeIcon2 = PlusLargeIcon(11257);
require = fn;
let closure_3 = ["style"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherButtonIcon.tsx");

export const AppLauncherButtonIcon = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let PlusLargeIcon = require;
  let obj = dependencyMap;
  const cResult = c.c(8);
  if (cResult[0] !== style) {
    style = style.style;
    const tmp6 = _objectWithoutProperties(style, closure_3);
    cResult[0] = style;
    cResult[1] = tmp6;
    cResult[2] = style;
    let tmp3 = style;
    let tmp2 = tmp6;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const tmp7 = useKeyboardTypeDefault();
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { overflow: "hidden" };
    cResult[3] = obj3;
    let tmp8 = obj3;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp7) {
    if (cResult[5] === tmp2) {
      if (cResult[6] === tmp3) {
        return cResult[7];
      }
    }
  }
  let obj4 = { style: tmp8, children: null };
  if (tmp7 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER) {
    PlusLargeIcon = PlusLargeIcon2.PlusLargeIcon;
    obj = {};
    const merged = Object.assign(tmp2);
    const items = [tmp3, ];
    const obj5 = { transform: null };
    const items1 = [{ rotate: "45deg" }];
    obj5.transform = items1;
    items[1] = obj5;
    obj.style = items;
    let tmp9Result = tmp9(PlusLargeIcon, obj);
  } else {
    const obj6 = { style: tmp3 };
    const merged1 = Object.assign(tmp2);
    tmp9Result = tmp9(AppsIcon.AppsIcon, obj6);
  }
  obj4.children = tmp9Result;
  obj4 = tmp9(View, obj4);
  cResult[4] = tmp7;
  cResult[5] = tmp2;
  cResult[6] = tmp3;
  cResult[7] = obj4;
}) : ((style) => {
  style = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const obj = { style: { overflow: "hidden" }, children: null };
  if (tmp3 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER) {
    const obj2 = {};
    const merged1 = Object.assign(merged);
    const items = [style, ];
    const obj3 = { transform: null };
    const items1 = [{ rotate: "45deg" }];
    obj3.transform = items1;
    items[1] = obj3;
    obj2.style = items;
    let tmp4Result = tmp4(tmp6(11257).PlusLargeIcon, obj2);
  } else {
    const obj4 = { style };
    const merged2 = Object.assign(merged);
    tmp4Result = tmp4(tmp6(5280).AppsIcon, obj4);
  }
  obj.children = tmp4Result;
  return <View style={{ overflow: "hidden" }}>{null}</View>;
});
