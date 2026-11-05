// Module ID: 18818
// Function ID: 18819
// Name: ForYouLoadMore
// Dependencies: [19, 17, 6996, 21, 5143, 563, 5770, 1113, 2]
// Exports: ForYouLoadMore

// Module 18818 (ForYouLoadMore)
import Fragment from "Fragment" /* 21 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import intl2 from "intl" /* 1113 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 6996 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ ActivityIndicator: c2, View: c3 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 8, marginBottom: 24, marginHorizontal: 16, height: 42 } });
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouLoadMore.tsx");

export function ForYouLoadMore(onPressLoad) {
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
    const Button = tmp2(5770).Button;
    intl = tmp2(1113).intl;
    tmp4Result = tmp4(Button, obj3);
  }
  return <tmp5 style={tmp.container}>{tmp4Result}</tmp5>;
}
