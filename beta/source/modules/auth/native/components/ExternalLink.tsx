// Module ID: 15604
// Function ID: 15605
// Name: ExternalLink
// Dependencies: [19, 17, 21, 4836, 576, 6363, 1485, 6393, 1115, 4832, 5745, 5281, 2]
// Exports: default

// Module 15604 (ExternalLink)
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ Linking: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  let space;
  let space2;
  let str;
  const container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%", display: "flex", justifyContent: str, paddingLeft: arg0 ? space.PX_24 : space.PX_16, paddingRight: arg0 ? space2.PX_24 : space2.PX_16 };
  str = "center";
  if (arg0) {
    str = "space-between";
  }
  space = tmp(576).space;
  space2 = tmp(576).space;
  return { container, description: { textAlign: "center", marginTop: 8 } };
});
const result = size.fileFinishedImporting("modules/auth/native/components/ExternalLink.tsx");

export default function ExternalLink(externalURL) {
  let closure_1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let items4;
  externalURL = externalURL.externalURL;
  importDefault = undefined;
  let onPress;
  const tmp = closure_9(require("useWideAuthView")());
  const obj = externalURL(onPress[6]);
  importDefault = obj.useNavigation();
  const items = [externalURL];
  onPress = react.useCallback(() => {
    React3.openURL(externalURL);
  }, items);
  const items1 = [onPress];
  const effect = react.useEffect(() => {
    callback();
  }, items1);
  const obj2 = { alwaysBounceVertical: false, keyboardShouldPersistTaps: "handled", contentContainerStyle: tmp.container, children: items3 };
  const obj3 = { children: items2 };
  const obj4 = { children: intl.string(externalURL(onPress[8]).t["0Niu/F"]) };
  const tmp4 = require("AuthHeader");
  intl = externalURL(onPress[8]).intl;
  items2 = [closure_7(tmp4, obj4), ];
  const obj5 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: intl2.string(externalURL(onPress[8]).t.nToOEg) };
  const Text = externalURL(onPress[9]).Text;
  intl2 = externalURL(onPress[8]).intl;
  items2[1] = closure_7(Text, obj5);
  items3 = [closure_8(closure_6, obj3), ];
  const obj6 = { children: items4 };
  const ButtonGroup = externalURL(onPress[10]).ButtonGroup;
  const obj7 = { shrink: true, variant: "primary", text: intl3.string(externalURL(onPress[8]).t["2ixEBi"]), onPress };
  const Button = externalURL(onPress[11]).Button;
  intl3 = externalURL(onPress[8]).intl;
  items4 = [closure_7(Button, obj7), ];
  const obj8 = {
    shrink: true,
    variant: "secondary",
    text: intl4.string(externalURL(onPress[8]).t.j3cG2p),
    onPress() {
      return closure_1.pop();
    }
  };
  const Button2 = externalURL(onPress[11]).Button;
  intl4 = externalURL(onPress[8]).intl;
  items4[1] = closure_7(Button2, obj8);
  items3[1] = closure_8(ButtonGroup, obj6);
  return closure_8(closure_5, obj2);
};
