// Module ID: 16800
// Function ID: 16801
// Name: ForYouLoadMore
// Dependencies: [19, 17, 7912, 21, 4790, 558, 568, 565, 5220, 1119, 2]

// Module 16800 (ForYouLoadMore)
import useStateFromStores from "useStateFromStores" /* 565 */;
import c from "c" /* 568 */;
import noop from "module_19" /* 19 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 7912 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c2, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 8, marginBottom: 24, marginHorizontal: 16, height: 42 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouLoadMore.tsx");

export const ForYouLoadMore = ReactCompilerGating.isReactCompilerEnabled() ? ((onPressLoad) => {
  const cResult = c.c(8);
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
  const stateFromStores = useStateFromStores.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === onPressLoad) {
      if (cResult[5] === tmp4.container) {
        if (cResult[6] === tmp9) {
          let tmp13 = cResult[7];
        }
        return tmp13;
      }
      const obj2 = { style: tmp4.container, children: cResult[4] };
      const tmp16 = <React3 style={tmp4.container}>{cResult[4]}</React3>;
      cResult[5] = tmp4.container;
      cResult[6] = cResult[4];
      cResult[7] = tmp16;
      tmp13 = tmp16;
    }
  }
  if (stateFromStores) {
    let tmp10Result = tmp10(React2, {});
  } else {
    const obj3 = { variant: "secondary", grow: true, size: "md", text: null, onPress: null };
    const intl = tmp(1119).intl;
    obj3.text = intl.string(tmp(1119).t["Q/LSXp"]);
    obj3.onPress = onPressLoad;
    tmp10Result = tmp10(tmp(5220).Button, obj3);
  }
  cResult[2] = stateFromStores;
  cResult[3] = onPressLoad;
  cResult[4] = tmp10Result;
}) : ((onPressLoad) => {
  const tmp = closure_6();
  const items = [NotificationCenterItemsStore];
  const obj2 = { style: tmp.container, children: null };
  if (obj.useStateFromStores(items, () => loading.loading)) {
    let tmp4Result = tmp4(React2, {});
  } else {
    const obj3 = { variant: "secondary", grow: true, size: "md", text: null, onPress: null };
    const intl = tmp2(1119).intl;
    obj3.text = intl.string(tmp2(1119).t["Q/LSXp"]);
    obj3.onPress = onPressLoad.onPressLoad;
    tmp4Result = tmp4(tmp2(5220).Button, obj3);
  }
  obj2.children = tmp4Result;
  return <React3 style={tmp.container}>{null}</React3>;
});
