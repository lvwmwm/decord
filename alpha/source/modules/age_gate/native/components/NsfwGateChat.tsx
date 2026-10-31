// Module ID: 11216
// Function ID: 11217
// Name: NsfwGateChat
// Dependencies: [19, 17, 21, 5014, 575, 5717, 11217, 5624, 1113, 2]
// Exports: default

// Module 11216 (NsfwGateChat)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import AssetRegistryDefault from "AssetRegistry" /* 11217 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ View: c3, StyleSheet } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, border: obj3, description: { marginTop: 16, textAlign: "center" } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateChat.tsx");

export default function NsfwGateChat() {
  let intl;
  let items;
  let items1;
  const tmp = closure_7();
  const obj = { children: items };
  items = [, ];
  const obj2 = { style: tmp.border };
  items[0] = React3(_false, obj2);
  const obj3 = { style: tmp.container, children: items1 };
  const obj4 = { source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items1 = [React3(tmp2, obj4), ];
  const obj5 = { style: tmp.description, variant: "text-md/medium", color: "text-muted", children: intl.string(intl2.t.W4Qyxr) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1[1] = React3(Text, obj5);
  items[1] = hasOwnProperty(_false, obj3);
  return hasOwnProperty(metroRequire, obj);
};
