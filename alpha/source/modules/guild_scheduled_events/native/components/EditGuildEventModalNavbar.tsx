// Module ID: 8979
// Function ID: 8980
// Name: EditGuildEventModalNavbar
// Dependencies: [32, 19, 17, 21, 5009, 8959, 1380, 7142, 7286, 5619, 1114, 7552, 8351, 2]
// Exports: default

// Module 8979 (EditGuildEventModalNavbar)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1114 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7142 */;
import AssetRegistryDefault from "AssetRegistry" /* 8351 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 8959 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 4, paddingVertical: 8 }, headerTitle: { lineHeight: 28, textTransform: "uppercase" }, buttonContainer: { width: 60 }, rightButton: { marginLeft: 12 } });
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx");

export default function EditGuildEventModalNavbar(screen) {
  let HeaderActionButton;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let obj6;
  let tmp7;
  let tmp8;
  screen = screen.screen;
  const onClose = screen.onClose;
  const tmp = closure_7();
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("EditGuildEventModalNavbar", "text-xs/bold");
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
  [tmp7, tmp8] = items;
  const obj2 = { top: true, style: tmp.header, children: items1 };
  const obj3 = { style: tmp.buttonContainer };
  _slicedToArray(items, 2);
  const SafeAreaPaddingView = tmp2(7286).SafeAreaPaddingView;
  items1 = [hasOwnProperty(View, obj3), , ];
  const obj4 = { style: items2, variant: typeConsolidationEyebrow.variant, color: "text-default", children: intl.format(intl3.t["42HaFY"], { step: tmp7, total: tmp8 }) };
  items2 = [tmp.headerTitle, typeConsolidationEyebrow.style];
  const Text = tmp2(5619).Text;
  intl = tmp2(1114).intl;
  items1[1] = hasOwnProperty(Text, obj4);
  const obj5 = { style: tmp.buttonContainer, children: hasOwnProperty(HeaderActionButton, obj6) };
  obj6 = { accessibilityLabel: intl2.string(intl3.t.cpT0Cq), onPress: onClose, source: AssetRegistryDefault, style: tmp.rightButton };
  HeaderActionButton = tmp2(7552).HeaderActionButton;
  intl2 = tmp2(1114).intl;
  items1[2] = hasOwnProperty(View, obj5);
  return metroRequire(SafeAreaPaddingView, obj2);
};
