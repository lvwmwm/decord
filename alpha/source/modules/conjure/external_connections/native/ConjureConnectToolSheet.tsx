// Module ID: 11766
// Function ID: 11767
// Name: ConjureConnectToolSheet
// Dependencies: [19, 17, 21, 5096, 587, 558, 576, 11767, 6891, 4810, 5310, 1126, 3849, 6844, 5092, 6186, 5384, 11768, 6904, 2]

// Module 11766 (ConjureConnectToolSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl10 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import ToastUtils from "ToastUtils" /* 4810 */;
import AlertModal from "AlertModal" /* 5310 */;
import ClipboardUtils from "ClipboardUtils" /* 6891 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5096 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let showConfirmModalResult;

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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureConnectToolSheet(projectId) {
  let Button;
  let Button2;
  let EQ8k1i;
  let connection;
  let failed;
  let format;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items1;
  let loading;
  let mint;
  let obj11;
  let obj13;
  let obj15;
  let obj8;
  let tmp14;
  let tmp6;
  let tmpResult;
  let tmp = connection;
  let obj = connection(576);
  const cResult = obj.c(24);
  projectId = projectId.projectId;
  const tmp4 = closure_7();
  let obj2 = connection(11767);
  const mcpConnectionPanel = obj2.useMcpConnectionPanel(projectId);
  connection = mcpConnectionPanel.connection;
  ({ loading, failed, mint } = mcpConnectionPanel);
  if (cResult[0] !== connection) {
    const fn = function l() {
      if (null != connection) {
        const obj = ClipboardUtils;
        obj.copy(tmp.url);
        const obj2 = ToastUtils;
        obj2.presentLinkCopied();
      }
    };
    cResult[0] = connection;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== mint) {
    class C {
      constructor() {
        tmp = closure_0(closure_2[10]);
        obj = { key: "VibegrationsConnectToolRegenerate", title: null, content: null, confirmText: null, onConfirm: null };
        showConfirmModal = tmp.showConfirmModal;
        intl = closure_0(closure_2[11]).intl;
        obj.title = intl.string(closure_1(closure_2[12]).avUWNd);
        intl2 = closure_0(closure_2[11]).intl;
        obj.content = intl2.string(closure_1(closure_2[12]).YSh8bL);
        intl3 = closure_0(closure_2[11]).intl;
        obj.confirmText = intl3.string(closure_1(closure_2[12]).Ise9RO);
        obj.onConfirm = function onConfirm() {
          mint(true);
        };
        showConfirmModalResult = showConfirmModal(obj);
        return;
      }
    }
    cResult[2] = mint;
    cResult[3] = C;
  } else {
    class C {
      constructor() {
        tmp = closure_0(closure_2[10]);
        obj = { key: "VibegrationsConnectToolRegenerate", title: null, content: null, confirmText: null, onConfirm: null };
        showConfirmModal = tmp.showConfirmModal;
        intl = closure_0(closure_2[11]).intl;
        obj.title = intl.string(closure_1(closure_2[12]).avUWNd);
        intl2 = closure_0(closure_2[11]).intl;
        obj.content = intl2.string(closure_1(closure_2[12]).YSh8bL);
        intl3 = closure_0(closure_2[11]).intl;
        obj.confirmText = intl3.string(closure_1(closure_2[12]).Ise9RO);
        obj.onConfirm = function onConfirm() {
          mint(true);
        };
        showConfirmModalResult = showConfirmModal(obj);
        return;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        tmp = closure_0(closure_2[10]);
        obj = { key: "VibegrationsConnectToolRegenerate", title: null, content: null, confirmText: null, onConfirm: null };
        showConfirmModal = tmp.showConfirmModal;
        intl = closure_0(closure_2[11]).intl;
        obj.title = intl.string(closure_1(closure_2[12]).avUWNd);
        intl2 = closure_0(closure_2[11]).intl;
        obj.content = intl2.string(closure_1(closure_2[12]).YSh8bL);
        intl3 = closure_0(closure_2[11]).intl;
        obj.confirmText = intl3.string(closure_1(closure_2[12]).Ise9RO);
        obj.onConfirm = function onConfirm() {
          mint(true);
        };
        showConfirmModalResult = showConfirmModal(obj);
        return;
      }
    }
    const obj3 = { title: intl.string(mint(3849)["7937yd"]) };
    const BottomSheetTitleHeader = tmp(6844).BottomSheetTitleHeader;
    intl = tmp(1126).intl;
    cResult[4] = closure_5(BottomSheetTitleHeader, obj3);
    const tmp10 = closure_5(BottomSheetTitleHeader, obj3);
  } else {
    class C {
      constructor() {
        tmp = closure_0(closure_2[10]);
        obj = { key: "VibegrationsConnectToolRegenerate", title: null, content: null, confirmText: null, onConfirm: null };
        showConfirmModal = tmp.showConfirmModal;
        intl = closure_0(closure_2[11]).intl;
        obj.title = intl.string(closure_1(closure_2[12]).avUWNd);
        intl2 = closure_0(closure_2[11]).intl;
        obj.content = intl2.string(closure_1(closure_2[12]).YSh8bL);
        intl3 = closure_0(closure_2[11]).intl;
        obj.confirmText = intl3.string(closure_1(closure_2[12]).Ise9RO);
        obj.onConfirm = function onConfirm() {
          mint(true);
        };
        showConfirmModalResult = showConfirmModal(obj);
        return;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        tmp = closure_0(closure_2[10]);
        obj = { key: "VibegrationsConnectToolRegenerate", title: null, content: null, confirmText: null, onConfirm: null };
        showConfirmModal = tmp.showConfirmModal;
        intl = closure_0(closure_2[11]).intl;
        obj.title = intl.string(closure_1(closure_2[12]).avUWNd);
        intl2 = closure_0(closure_2[11]).intl;
        obj.content = intl2.string(closure_1(closure_2[12]).YSh8bL);
        intl3 = closure_0(closure_2[11]).intl;
        obj.confirmText = intl3.string(closure_1(closure_2[12]).Ise9RO);
        obj.onConfirm = function onConfirm() {
          mint(true);
        };
        showConfirmModalResult = showConfirmModal(obj);
        return;
      }
    }
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(mint(3849).WltAg2) };
    const Text = tmp(5092).Text;
    intl2 = tmp(1126).intl;
    cResult[5] = closure_5(Text, obj4);
    const tmp13 = closure_5(Text, obj4);
  } else {
    class C {
      constructor() {
        tmp = closure_0(closure_2[10]);
        obj = { key: "VibegrationsConnectToolRegenerate", title: null, content: null, confirmText: null, onConfirm: null };
        showConfirmModal = tmp.showConfirmModal;
        intl = closure_0(closure_2[11]).intl;
        obj.title = intl.string(closure_1(closure_2[12]).avUWNd);
        intl2 = closure_0(closure_2[11]).intl;
        obj.content = intl2.string(closure_1(closure_2[12]).YSh8bL);
        intl3 = closure_0(closure_2[11]).intl;
        obj.confirmText = intl3.string(closure_1(closure_2[12]).Ise9RO);
        obj.onConfirm = function onConfirm() {
          mint(true);
        };
        showConfirmModalResult = showConfirmModal(obj);
        return;
      }
    }
  }
  if (cResult[6] === connection) {
    class C {
      constructor() {
        tmp = closure_0(closure_2[10]);
        obj = { key: "VibegrationsConnectToolRegenerate", title: null, content: null, confirmText: null, onConfirm: null };
        showConfirmModal = tmp.showConfirmModal;
        intl = closure_0(closure_2[11]).intl;
        obj.title = intl.string(closure_1(closure_2[12]).avUWNd);
        intl2 = closure_0(closure_2[11]).intl;
        obj.content = intl2.string(closure_1(closure_2[12]).YSh8bL);
        intl3 = closure_0(closure_2[11]).intl;
        obj.confirmText = intl3.string(closure_1(closure_2[12]).Ise9RO);
        obj.onConfirm = function onConfirm() {
          mint(true);
        };
        showConfirmModalResult = showConfirmModal(obj);
        return;
      }
    }
  }
  if (null != connection) {
    class C {
      constructor() {
        tmp = closure_0(closure_2[10]);
        obj = { key: "VibegrationsConnectToolRegenerate", title: null, content: null, confirmText: null, onConfirm: null };
        showConfirmModal = tmp.showConfirmModal;
        intl = closure_0(closure_2[11]).intl;
        obj.title = intl.string(closure_1(closure_2[12]).avUWNd);
        intl2 = closure_0(closure_2[11]).intl;
        obj.content = intl2.string(closure_1(closure_2[12]).YSh8bL);
        intl3 = closure_0(closure_2[11]).intl;
        obj.confirmText = intl3.string(closure_1(closure_2[12]).Ise9RO);
        obj.onConfirm = function onConfirm() {
          mint(true);
        };
        showConfirmModalResult = showConfirmModal(obj);
        return;
      }
    }
    const obj5 = { style: tmp4.section, children: items };
    const obj6 = { variant: "text-xs/semibold", color: "text-muted", children: intl4.string(mint(3849).UCwV3L) };
    const Text3 = tmp(5092).Text;
    intl4 = tmp(1126).intl;
    items = [closure_5(Text3, obj6), , , ];
    const obj7 = { variant: "primary", children: closure_5(tmp(5092).Text, obj8) };
    const Card = tmp(6186).Card;
    obj8 = { variant: "text-sm/normal", color: "text-default", selectable: true, children: connection.url };
    items[1] = closure_5(Card, obj7);
    const obj9 = { style: tmp4.actions, children: items1 };
    const obj10 = { style: tmp4.action, children: closure_5(Button, obj11) };
    obj11 = { variant: "primary", size: "md", text: intl5.string(tmp(1126).t.OpuAlK), onPress: tmp6 };
    Button = tmp(5384).Button;
    intl5 = tmp(1126).intl;
    items1 = [closure_5(View, obj10), ];
    const obj12 = { style: tmp4.action, children: closure_5(Button2, obj13) };
    obj13 = { variant: "secondary", size: "md", text: intl6.string(mint(3849).FBKOBq), loading, onPress: tmp7 };
    Button2 = tmp(5384).Button;
    intl6 = tmp(1126).intl;
    items1[1] = closure_5(View, obj12);
    items[2] = closure_6(View, obj9);
    const obj14 = { variant: "text-xs/normal", color: "text-muted", children: format(EQ8k1i, obj15) };
    const Text4 = tmp(5092).Text;
    const intl7 = tmp(1126).intl;
    format = intl7.format;
    obj15 = { time: tmpResult.formatMcpConnectionExpiry(connection) };
    EQ8k1i = mint(3849).EQ8k1i;
    tmpResult = tmp(11768);
    items[3] = closure_5(Text4, obj14);
    tmp14 = closure_6(View, obj5);
  } else {
    class C {
      constructor() {
        tmp = closure_0(closure_2[10]);
        obj = { key: "VibegrationsConnectToolRegenerate", title: null, content: null, confirmText: null, onConfirm: null };
        showConfirmModal = tmp.showConfirmModal;
        intl = closure_0(closure_2[11]).intl;
        obj.title = intl.string(closure_1(closure_2[12]).avUWNd);
        intl2 = closure_0(closure_2[11]).intl;
        obj.content = intl2.string(closure_1(closure_2[12]).YSh8bL);
        intl3 = closure_0(closure_2[11]).intl;
        obj.confirmText = intl3.string(closure_1(closure_2[12]).Ise9RO);
        obj.onConfirm = function onConfirm() {
          mint(true);
        };
        showConfirmModalResult = showConfirmModal(obj);
        return;
      }
    }
    if (loading) {
      class C {
        constructor() {
          tmp = closure_0(closure_2[10]);
          obj = { key: "VibegrationsConnectToolRegenerate", title: null, content: null, confirmText: null, onConfirm: null };
          showConfirmModal = tmp.showConfirmModal;
          intl = closure_0(closure_2[11]).intl;
          obj.title = intl.string(closure_1(closure_2[12]).avUWNd);
          intl2 = closure_0(closure_2[11]).intl;
          obj.content = intl2.string(closure_1(closure_2[12]).YSh8bL);
          intl3 = closure_0(closure_2[11]).intl;
          obj.confirmText = intl3.string(closure_1(closure_2[12]).Ise9RO);
          obj.onConfirm = function onConfirm() {
            mint(true);
          };
          showConfirmModalResult = showConfirmModal(obj);
          return;
        }
      }
      const obj16 = { variant: "text-sm/normal", color: "text-muted", children: intl3.string(mint(3849).Q6xQTM) };
      const Text2 = tmp(5092).Text;
      intl3 = tmp(1126).intl;
      tmp14 = closure_5(Text2, obj16);
    }
  }
  cResult[6] = connection;
  cResult[7] = tmp6;
  cResult[8] = tmp7;
  cResult[9] = loading;
  cResult[10] = tmp4.action;
  cResult[11] = tmp4.actions;
  cResult[12] = tmp4.section;
  cResult[13] = tmp14;
}) : (function ConjureConnectToolSheet(projectId) {
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
  let obj = connection(11767);
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
      key: "VibegrationsConnectToolRegenerate",
      title: intl.string(_modDef3849.avUWNd),
      content: intl2.string(_modDef3849.YSh8bL),
      confirmText: intl3.string(_modDef3849.Ise9RO),
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
  const ActionSheet = connection(6904).ActionSheet;
  obj3 = { title: intl.string(mint(3849)["7937yd"]) };
  BottomSheetTitleHeader = connection(6844).BottomSheetTitleHeader;
  intl = connection(1126).intl;
  obj4 = { style: tmp.content, children: items2 };
  const obj5 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(mint(3849).WltAg2) };
  const Text = connection(5092).Text;
  intl2 = connection(1126).intl;
  items2 = [closure_5(Text, obj5), , ];
  if (null != connection) {
    const obj6 = { style: tmp.section, children: items3 };
    const obj7 = { variant: "text-xs/semibold", color: "text-muted", children: intl4.string(mint(3849).UCwV3L) };
    const Text3 = tmp2(5092).Text;
    intl4 = tmp2(1126).intl;
    items3 = [closure_5(Text3, obj7), , , ];
    const obj8 = { variant: "primary", children: closure_5(connection(5092).Text, obj9) };
    const Card = tmp2(6186).Card;
    obj9 = { variant: "text-sm/normal", color: "text-default", selectable: true, children: connection.url };
    items3[1] = closure_5(Card, obj8);
    const obj10 = { style: tmp.actions, children: items4 };
    const obj11 = { style: tmp.action, children: closure_5(Button, obj12) };
    obj12 = { variant: "primary", size: "md", text: intl5.string(connection(1126).t.OpuAlK), onPress: callback };
    Button = tmp2(5384).Button;
    intl5 = tmp2(1126).intl;
    items4 = [closure_5(View, obj11), ];
    const obj13 = { style: tmp.action, children: closure_5(Button2, obj14) };
    obj14 = { variant: "secondary", size: "md", text: intl6.string(mint(3849).FBKOBq), loading, onPress: callback1 };
    Button2 = tmp2(5384).Button;
    intl6 = tmp2(1126).intl;
    items4[1] = closure_5(View, obj13);
    items3[2] = closure_6(View, obj10);
    const obj15 = { variant: "text-xs/normal", color: "text-muted", children: format(EQ8k1i, obj16) };
    const Text4 = tmp2(5092).Text;
    const intl7 = tmp2(1126).intl;
    format = intl7.format;
    obj16 = { time: tmp2Result.formatMcpConnectionExpiry(connection) };
    EQ8k1i = tmp8(3849).EQ8k1i;
    tmp2Result = connection(11768);
    items3[3] = closure_5(Text4, obj15);
    tmp7Result = tmp9(tmp10, obj6);
  } else {
    tmp7Result = null;
    if (loading) {
      const obj17 = { variant: "text-sm/normal", color: "text-muted", children: intl3.string(mint(3849).Q6xQTM) };
      const Text2 = tmp2(5092).Text;
      intl3 = tmp2(1126).intl;
      tmp7Result = tmp7(Text2, obj17);
    }
  }
  items2[1] = tmp7Result;
  let tmp9Result2 = null;
  if (failed) {
    const obj18 = { style: tmp.failedRow, accessibilityRole: "alert", children: items5 };
    const obj19 = { style: tmp.failedText, children: closure_5(Text5, obj20) };
    obj20 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl8.string(mint(3849).IAF2eN) };
    Text5 = tmp2(5092).Text;
    intl8 = tmp2(1126).intl;
    items5 = [closure_5(View, obj19), ];
    const obj21 = {
      variant: "secondary",
      size: "sm",
      text: intl9.string(mint(3849)["eHMX/v"]),
      loading,
      onPress() {
          mint(false);
        }
    };
    const Button3 = tmp2(5384).Button;
    intl9 = tmp2(1126).intl;
    items5[1] = closure_5(Button3, obj21);
    tmp9Result2 = tmp9(tmp10, obj18);
  }
  items2[2] = tmp9Result2;
  return closure_5(ActionSheet, obj2);
});
const result = size.fileFinishedImporting("modules/conjure/external_connections/native/ConjureConnectToolSheet.tsx");

export default tmp4;
export const CONJURE_CONNECT_TOOL_SHEET_KEY = "ConjureConnectToolSheet";
