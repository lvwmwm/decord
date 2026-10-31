// Module ID: 12514
// Function ID: 12515
// Name: ConjureConnectToolSheet
// Dependencies: [19, 17, 21, 5014, 575, 12515, 7358, 5711, 5964, 1113, 3868, 7366, 7321, 5624, 6977, 5634, 12516, 2]
// Exports: default

// Module 12514 (ConjureConnectToolSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl10 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ToastUtils from "ToastUtils" /* 5711 */;
import AlertModal from "AlertModal" /* 5964 */;
import ClipboardUtils from "ClipboardUtils" /* 7358 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, section: obj3, actions: obj4, action: { flex: 1 }, failedRow: obj5, failedText: { flexShrink: 1 } };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/external_connections/native/ConjureConnectToolSheet.tsx");

export default function ConjureConnectToolSheet(projectId) {
  let BottomSheetTitleHeader;
  let Button;
  let Button2;
  let EQ8k1i;
  let Text5;
  let format;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl8;
  let intl9;
  let items2;
  let items3;
  let items4;
  let items5;
  let loading;
  let mint;
  let obj12;
  let obj14;
  let obj16;
  let obj20;
  let obj3;
  let obj4;
  let obj9;
  let tmp2Result;
  let tmp7Result;
  let connection;
  mint = undefined;
  projectId = projectId.projectId;
  let tmp = closure_7();
  let obj = connection(12515);
  const mcpConnectionPanel = obj.useMcpConnectionPanel(projectId);
  connection = mcpConnectionPanel.connection;
  ({ loading, mint } = mcpConnectionPanel);
  const items = [connection];
  const failed = mcpConnectionPanel.failed;
  const items1 = [mint];
  const callback = react.useCallback(() => {
    if (null != connection) {
      const obj = ClipboardUtils;
      obj.copy(tmp.url);
      const obj2 = ToastUtils;
      obj2.presentLinkCopied();
    }
  }, items);
  const callback1 = react.useCallback(() => {
    let intl;
    let intl2;
    let intl3;
    const tmp = AlertModal;
    const showConfirmModal = tmp.showConfirmModal;
    const obj = {
      key: "ConjureConnectToolRegenerate",
      title: intl.string(_modDef3868.avUWNd),
      content: intl2.string(_modDef3868.YSh8bL),
      confirmText: intl3.string(_modDef3868.Ise9RO),
      onConfirm() {
        mint(true);
      }
    };
    intl = intl10.intl;
    intl2 = intl10.intl;
    intl3 = intl10.intl;
    showConfirmModal(obj);
  }, items1);
  let obj2 = { header: closure_5(BottomSheetTitleHeader, obj3), children: closure_6(View, obj4) };
  const ActionSheet = connection(7366).ActionSheet;
  obj3 = { title: intl.string(mint(3868)["7937yd"]) };
  BottomSheetTitleHeader = connection(7321).BottomSheetTitleHeader;
  intl = connection(1113).intl;
  obj4 = { style: tmp.content, children: items2 };
  const obj5 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(mint(3868).WltAg2) };
  const Text = connection(5624).Text;
  intl2 = connection(1113).intl;
  items2 = [closure_5(Text, obj5), , ];
  if (null != connection) {
    const obj6 = { style: tmp.section, children: items3 };
    const obj7 = { variant: "text-xs/semibold", color: "text-muted", children: intl4.string(mint(3868).UCwV3L) };
    const Text3 = tmp2(5624).Text;
    intl4 = tmp2(1113).intl;
    items3 = [closure_5(Text3, obj7), , , ];
    const obj8 = { variant: "primary", children: closure_5(connection(5624).Text, obj9) };
    const Card = tmp2(6977).Card;
    obj9 = { variant: "text-sm/normal", color: "text-default", selectable: true, children: connection.url };
    items3[1] = closure_5(Card, obj8);
    const obj10 = { style: tmp.actions, children: items4 };
    const obj11 = { style: tmp.action, children: closure_5(Button, obj12) };
    obj12 = { variant: "primary", size: "md", text: intl5.string(connection(1113).t.OpuAlK), onPress: callback };
    Button = tmp2(5634).Button;
    intl5 = tmp2(1113).intl;
    items4 = [closure_5(View, obj11), ];
    const obj13 = { style: tmp.action, children: closure_5(Button2, obj14) };
    obj14 = { variant: "secondary", size: "md", text: intl6.string(mint(3868).FBKOBq), loading, onPress: callback1 };
    Button2 = tmp2(5634).Button;
    intl6 = tmp2(1113).intl;
    items4[1] = closure_5(View, obj13);
    items3[2] = closure_6(View, obj10);
    const obj15 = { variant: "text-xs/normal", color: "text-muted", children: format(EQ8k1i, obj16) };
    const Text4 = tmp2(5624).Text;
    const intl7 = tmp2(1113).intl;
    format = intl7.format;
    obj16 = { time: tmp2Result.formatMcpConnectionExpiry(connection) };
    EQ8k1i = tmp8(3868).EQ8k1i;
    tmp2Result = connection(12516);
    items3[3] = closure_5(Text4, obj15);
    tmp7Result = tmp9(tmp10, obj6);
  } else {
    tmp7Result = null;
    if (loading) {
      const obj17 = { variant: "text-sm/normal", color: "text-muted", children: intl3.string(mint(3868).Q6xQTM) };
      const Text2 = tmp2(5624).Text;
      intl3 = tmp2(1113).intl;
      tmp7Result = tmp7(Text2, obj17);
    }
  }
  items2[1] = tmp7Result;
  let tmp9Result2 = null;
  if (failed) {
    const obj18 = { style: tmp.failedRow, accessibilityRole: "alert", children: items5 };
    const obj19 = { style: tmp.failedText, children: closure_5(Text5, obj20) };
    obj20 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl8.string(mint(3868).IAF2eN) };
    Text5 = tmp2(5624).Text;
    intl8 = tmp2(1113).intl;
    items5 = [closure_5(View, obj19), ];
    const obj21 = {
      variant: "secondary",
      size: "sm",
      text: intl9.string(mint(3868)["eHMX/v"]),
      loading,
      onPress() {
          mint(false);
        }
    };
    const Button3 = tmp2(5634).Button;
    intl9 = tmp2(1113).intl;
    items5[1] = closure_5(Button3, obj21);
    tmp9Result2 = tmp9(tmp10, obj18);
  }
  items2[2] = tmp9Result2;
  return closure_5(ActionSheet, obj2);
};
export const CONJURE_CONNECT_TOOL_SHEET_KEY = "ConjureConnectToolSheet";
