// Module ID: 16152
// Function ID: 16153
// Name: ICYMILoading
// Dependencies: [19, 17, 21, 16091, 576, 12136, 4566, 16130, 2]
// Exports: ICYMILoading

// Module 16152 (ICYMILoading)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import useChatPlaceholderAnimatedStylesDefault from "useChatPlaceholderAnimatedStyles" /* 12136 */;
import ICYMIShared from "ICYMIShared" /* 16130 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16091 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function ICYMILoadingItem() {
  let avatarTitle;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let result;
  let result1;
  let result2;
  let subtitle;
  let title;
  const tmp = closure_8();
  const tmp2 = useChatPlaceholderAnimatedStylesDefault({ visible: true, animated: true });
  const memo = react.useMemo(() => {
    const obj = { avatarTitle: Math.floor(10 * Math.random()), title: Math.floor(10 * Math.random()), subtitle: Math.floor(10 * Math.random()) };
    return obj;
  }, []);
  let obj = { children: items7 };
  const obj2 = { style: tmp.container, children: items3 };
  const obj3 = { style: tmp.avatarRow, children: items1 };
  ({ avatarTitle, title, subtitle } = memo);
  const obj4 = { style: items };
  items = [, , ];
  ({ backgroundColor: arr[0], avatar: arr[1] } = tmp);
  items[2] = tmp2;
  items1 = [hasOwnProperty(ReanimatedRexportDefault.View, obj4), ];
  const obj5 = { style: items2 };
  items2 = [, , , ];
  ({ backgroundColor: arr3[0], avatarTitle: arr3[1] } = tmp);
  items2[2] = tmp2;
  const obj6 = { width: "" + (result - Math.floor(result)) * 30 + 30 + "%" };
  View = ReanimatedRexportDefault.View;
  result = 100 * Math.sin(avatarTitle);
  items2[3] = obj6;
  items1[1] = hasOwnProperty(View, obj5);
  items3 = [metroRequire(View, obj3), , , ];
  const obj7 = { style: items4 };
  items4 = [, , , ];
  ({ backgroundColor: arr5[0], title: arr5[1] } = tmp);
  items4[2] = tmp2;
  const obj8 = { width: "" + (result1 - Math.floor(result1)) * 25 + 75 + "%" };
  const View2 = ReanimatedRexportDefault.View;
  result1 = 100 * Math.sin(title);
  items4[3] = obj8;
  items3[1] = hasOwnProperty(View2, obj7);
  const obj9 = { style: items5 };
  items5 = [, , , ];
  ({ backgroundColor: arr6[0], subtitle: arr6[1] } = tmp);
  items5[2] = tmp2;
  const obj10 = { width: "" + (result2 - Math.floor(result2)) * 25 + 75 + "%" };
  const View3 = ReanimatedRexportDefault.View;
  result2 = 100 * Math.sin(subtitle);
  items5[3] = obj10;
  items3[2] = hasOwnProperty(View3, obj9);
  const obj11 = { style: items6 };
  items6 = [, , ];
  ({ backgroundColor: arr7[0], image: arr7[1] } = tmp);
  items6[2] = tmp2;
  items3[3] = hasOwnProperty(ReanimatedRexportDefault.View, obj11);
  items7 = [metroRequire(View, obj2), hasOwnProperty(ICYMIShared.Separator, {})];
  return metroRequire(metroImportDefault, obj);
}
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let closure_8 = createICYMIStyles.createICYMIStyles((marginBottom) => {
  let size1;
  const obj = { backgroundColor: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, container: { padding: marginBottom.margin }, avatarRow: { flexDirection: "row", alignItems: "center", marginBottom: marginBottom.margin }, avatar: size, avatarTitle: { height: 18, borderRadius: 10, flexShrink: 1 }, title: { height: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, borderRadius: 10, flexShrink: 1 }, subtitle: { height: nativeDefault.space.PX_16, marginBottom: marginBottom.margin, borderRadius: 10, flexShrink: 1 }, image: size1, separator: {} };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE });
  size = { width: 40, height: 40, borderRadius: nativeDefault.radii.md, marginRight: nativeDefault.space.PX_12 };
  ({ height: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, borderRadius: 10, flexShrink: 1 });
  ({ height: nativeDefault.space.PX_16, marginBottom: marginBottom.margin, borderRadius: 10, flexShrink: 1 });
  size1 = { width: "100%", height: 240, borderRadius: nativeDefault.radii.lg };
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/icymi/native/ICYMILoading.tsx");

export const ICYMILoading = function ICYMILoading() {
  let items;
  const obj = { children: items };
  items = [hasOwnProperty(ICYMILoadingItem, {}), hasOwnProperty(ICYMILoadingItem, {})];
  return metroRequire(metroImportDefault, obj);
};
