// Module ID: 18851
// Function ID: 18852
// Name: ConjureSetupAskBar
// Dependencies: [19, 17, 21, 5043, 575, 18723, 18524, 5634, 1112, 4245, 5641, 7944, 7247, 2]
// Exports: default

// Module 18851 (ConjureSetupAskBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import openConjureSetupAskFormDefault from "openConjureSetupAskForm" /* 18723 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { bar: obj2, label: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, paddingRight: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, flexDirection: "row", flexWrap: "wrap", alignItems: "baseline", columnGap: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/setup_asks/native/ConjureSetupAskBar.tsx");

export default function ConjureSetupAskBar(projectId) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let obj5;
  projectId = projectId.projectId;
  const ask = projectId.ask;
  const onDismiss = projectId.onDismiss;
  const tmp = closure_7();
  const items = [ask, projectId];
  const callback = react.useCallback(() => openConjureSetupAskFormDefault(projectId, ask.form), items);
  const obj = { style: tmp.bar, children: items2 };
  const obj2 = { style: tmp.label, children: items1 };
  const obj3 = { variant: "body-sm/semibold", color: "text-default", children: intl.string(ask(4245).DLw3tf) };
  const tmp3 = ask(18524);
  const Text = projectId(5634).Text;
  intl = projectId(1112).intl;
  items1 = [closure_5(Text, obj3), ];
  const obj4 = { variant: "body-sm/normal", color: "text-muted", children: intl2.formatToPlainString(ask(4245).GCBZ4y, obj5) };
  const Text2 = projectId(5634).Text;
  intl2 = projectId(1112).intl;
  obj5 = { count: ask.needed };
  items1[1] = closure_5(Text2, obj4);
  items2 = [closure_6(View, obj2), , ];
  const obj6 = { variant: "primary", size: "sm", text: intl3.string(ask(4245).OCzOAI), onPress: callback };
  const Button = projectId(5641).Button;
  intl3 = projectId(1112).intl;
  items2[1] = closure_5(Button, obj6);
  const obj7 = { variant: "tertiary", size: "sm", icon: closure_5(projectId(7247).XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: intl4.string(ask(4245)["920tul"]) };
  const IconButton = projectId(7944).IconButton;
  intl4 = projectId(1112).intl;
  items2[2] = closure_5(IconButton, obj7);
  return closure_6(tmp3, obj);
};
