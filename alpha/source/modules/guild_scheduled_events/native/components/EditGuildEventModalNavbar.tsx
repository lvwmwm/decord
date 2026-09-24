// Module ID: 9876
// Function ID: 9877
// Name: EditGuildEventModalNavbar
// Dependencies: [32, 19, 17, 21, 4829, 9873, 1370, 7312, 7456, 4825, 1115, 7707, 7325, 2]
// Exports: default

// Module 9876 (EditGuildEventModalNavbar)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4825 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7312 */;
import _modDef7325 from "module_7325" /* 7325 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7456 */;
import HeaderActionButton from "HeaderActionButton" /* 7707 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9873 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let closure_7 = createStyles.createStyles({ header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 4, paddingVertical: 8 }, headerTitle: { lineHeight: 28, textTransform: "uppercase" }, buttonContainer: { width: 60 }, rightButton: { marginLeft: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx");

export default function EditGuildEventModalNavbar(screen) {
  screen = screen.screen;
  const tmp = closure_7();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("EditGuildEventModalNavbar", "text-xs/bold");
  if (EditGuildEventUtils.EditGuildEventScreens.CHANNEL_SELECTOR === screen) {
    let items = [1, 3];
  } else if (tmp2(9873).EditGuildEventScreens.DETAILS === screen) {
    items = [2, 3];
  } else if (tmp2(9873).EditGuildEventScreens.PREVIEW === screen) {
    items = [3, 3];
  } else {
    tmp2(1370).assertNever(screen);
    const tmp2Result = tmp2(1370);
  }
  [tmp7, tmp8] = items;
  const obj2 = { top: true, style: tmp.header, children: null };
  const items1 = [hasOwnProperty(View, { style: tmp.buttonContainer }), , ];
  const obj4 = { style: null, variant: typeConsolidationEyebrow.variant, color: "text-default", children: null };
  const items2 = [tmp.headerTitle, typeConsolidationEyebrow.style];
  obj4.style = items2;
  const intl = tmp2(1115).intl;
  obj4.children = intl.format(util.t["42HaFY"], { step: tmp7, total: tmp8 });
  items1[1] = hasOwnProperty(Text_Text.Text, obj4);
  const obj5 = { style: tmp.buttonContainer, children: null };
  const obj6 = { accessibilityLabel: null, onPress: null, source: null, style: null };
  const intl2 = tmp2(1115).intl;
  obj6.accessibilityLabel = intl2.string(util.t.cpT0Cq);
  obj6.onPress = screen.onClose;
  obj6.source = _modDef7325;
  obj6.style = tmp.rightButton;
  obj5.children = hasOwnProperty(HeaderActionButton.HeaderActionButton, obj6);
  items1[2] = hasOwnProperty(View, obj5);
  obj2.children = items1;
  return timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj2);
};
