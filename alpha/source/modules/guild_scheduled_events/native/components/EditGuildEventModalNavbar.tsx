// Module ID: 7992
// Function ID: 7993
// Name: EditGuildEventModalNavbar
// Dependencies: [32, 19, 17, 21, 5306, 7971, 1255, 7415, 5929, 1113, 7427, 7430, 2]
// Exports: default

// Module 7992 (EditGuildEventModalNavbar)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1113 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import AssetRegistryDefault from "AssetRegistry" /* 7430 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 7971 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 4, paddingVertical: 8 }, headerTitle: { lineHeight: 28 }, buttonContainer: { width: 60 }, rightButton: { marginLeft: 12 } });
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx");

export default function EditGuildEventModalNavbar(screen) {
  let HeaderActionButton;
  let intl;
  let intl2;
  let items;
  let items1;
  let obj5;
  let tmp6;
  let tmp7;
  screen = screen.screen;
  const onClose = screen.onClose;
  const tmp = closure_7();
  if (EditGuildEventUtils.EditGuildEventScreens.CHANNEL_SELECTOR === screen) {
    items = [1, 3];
  } else if (EditGuildEventUtils.EditGuildEventScreens.DETAILS === screen) {
    items = [2, 3];
  } else if (EditGuildEventUtils.EditGuildEventScreens.PREVIEW === screen) {
    items = [3, 3];
  } else {
    const tmp2Result = GlobalUtils;
    tmp2Result.assertNever(screen);
  }
  [tmp6, tmp7] = items;
  const obj = { top: true, style: tmp.header, children: items1 };
  const obj2 = { style: tmp.buttonContainer };
  _slicedToArray(items, 2);
  const SafeAreaPaddingView = tmp2(7415).SafeAreaPaddingView;
  items1 = [hasOwnProperty(View, obj2), , ];
  const obj3 = { style: tmp.headerTitle, variant: "body-sm/medium", color: "text-default", children: intl.format(intl3.t["42HaFY"], { step: tmp6, total: tmp7 }) };
  const Text = tmp2(5929).Text;
  intl = tmp2(1113).intl;
  items1[1] = hasOwnProperty(Text, obj3);
  const obj4 = { style: tmp.buttonContainer, children: hasOwnProperty(HeaderActionButton, obj5) };
  obj5 = { accessibilityLabel: intl2.string(intl3.t.cpT0Cq), onPress: onClose, source: AssetRegistryDefault, style: tmp.rightButton };
  HeaderActionButton = tmp2(7427).HeaderActionButton;
  intl2 = tmp2(1113).intl;
  items1[2] = hasOwnProperty(View, obj4);
  return metroRequire(SafeAreaPaddingView, obj);
};
