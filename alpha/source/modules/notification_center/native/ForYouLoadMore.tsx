// Module ID: 16811
// Function ID: 16812
// Name: ForYouLoadMore
// Dependencies: [19, 17, 6064, 21, 5091, 558, 576, 573, 5376, 1126, 2]

// Module 16811 (ForYouLoadMore)
import Fragment from "Fragment" /* 21 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 6064 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ ActivityIndicator: c2, View: c3 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 8, marginBottom: 24, marginHorizontal: 16, height: 42 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForYouLoadMore(onPressLoad) {
  let intl;
  let loading;
  let tmp10Result;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(8);
  onPressLoad = onPressLoad.onPressLoad;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [NotificationCenterItemsStore];
    const fn = function f() {
      return loading.loading;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === stateFromStores) {
    let tmp9;
    if (cResult[3] === onPressLoad) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.container) {
      let tmp13;
      if (cResult[6] === tmp9) {
        tmp13 = cResult[7];
      }
      return tmp13;
    }
    const tmp16 = <_false style={tmp4.container}>{tmp9}</_false>;
    cResult[5] = tmp4.container;
    cResult[6] = tmp9;
    cResult[7] = tmp16;
    tmp13 = tmp16;
  }
  if (stateFromStores) {
    tmp10Result = tmp10(React2, {});
  } else {
    const obj3 = { variant: "secondary", grow: true, size: "md", text: intl.string(intl2.t["Q/LSXp"]), onPress: onPressLoad };
    const Button = tmp(5376).Button;
    intl = tmp(1126).intl;
    tmp10Result = tmp10(Button, obj3);
  }
  cResult[2] = stateFromStores;
  cResult[3] = onPressLoad;
  cResult[4] = tmp10Result;
  tmp9 = tmp10Result;
}) : (function ForYouLoadMore(onPressLoad) {
  let intl;
  let loading;
  let tmp4Result;
  onPressLoad = onPressLoad.onPressLoad;
  const items = [NotificationCenterItemsStore];
  const tmp = closure_6();
  const obj = useStateFromStores;
  if (obj.useStateFromStores(items, () => loading.loading)) {
    tmp4Result = tmp4(React2, {});
  } else {
    const obj3 = { variant: "secondary", grow: true, size: "md", text: intl.string(intl2.t["Q/LSXp"]), onPress: onPressLoad };
    const Button = tmp2(5376).Button;
    intl = tmp2(1126).intl;
    tmp4Result = tmp4(Button, obj3);
  }
  return <tmp5 style={tmp.container}>{tmp4Result}</tmp5>;
});
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouLoadMore.tsx");

export const ForYouLoadMore = tmp4;
