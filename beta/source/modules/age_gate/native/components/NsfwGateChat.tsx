// Module ID: 12160
// Function ID: 12161
// Name: NsfwGateChat
// Dependencies: [19, 17, 21, 4836, 576, 12161, 4832, 1115, 2]
// Exports: default

// Module 12160 (NsfwGateChat)
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import AssetRegistryDefault from "AssetRegistry" /* 12161 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ View: c3, Image: closure_4, StyleSheet } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, border: obj3, description: { marginTop: 16, textAlign: "center" } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateChat.tsx");

export default function NsfwGateChat() {
  let intl;
  let items;
  let items1;
  const tmp = closure_8();
  const obj = { children: items };
  items = [, ];
  const obj2 = { style: tmp.border };
  items[0] = hasOwnProperty(_false, obj2);
  const obj3 = { style: tmp.container, children: items1 };
  items1 = [, ];
  const obj4 = { source: AssetRegistryDefault };
  items1[0] = hasOwnProperty(React3, obj4);
  const obj5 = { style: tmp.description, variant: "text-md/medium", color: "text-muted", children: intl.string(intl2.t.W4Qyxr) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1[1] = hasOwnProperty(Text, obj5);
  items[1] = metroRequire(_false, obj3);
  return metroRequire(metroImportDefault, obj);
};
