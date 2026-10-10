// Module ID: 6279
// Function ID: 6280
// Name: ConfirmEmailChangeStart
// Dependencies: [5, 32, 19, 17, 1390, 21, 5092, 1503, 504, 6280, 1105, 5636, 4809, 1126, 6156, 6281, 5088, 5379, 2]
// Exports: default

// Module 6279 (ConfirmEmailChangeStart)
import Text_Text from "Text/Text" /* 5088 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1390 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, navigation;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ container: { flex: 1, padding: 16, alignItems: "center", justifyContent: "center" }, image: { height: 190, width: 220, resizeMode: "contain" }, title: { marginTop: 16, textAlign: "center" }, body: { marginTop: 8, lineHeight: 18, textAlign: "center" }, button: { marginTop: 16, width: "100%" } });
const result = size.fileFinishedImporting("modules/verification/native/components/ConfirmEmailChangeStart.tsx");

export default function ConfirmEmailChangeStart() {
  let Button;
  let body;
  let currentUser;
  let first;
  let intl2;
  let intl3;
  let items1;
  let obj5;
  let obj9;
  let tmp = closure_11();
  _require = tmp;
  const tmp3 = dependencyMap;
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  let obj2 = require("get initialized");
  const items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  [first, dependencyMap] = react.useState(false);
  [][0] = navigation;
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp2(1126).intl;
    let obj3 = { oldEmail: stateFromStores.email };
    let obj4 = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: closure_10(closure_6, obj5) };
    obj5 = { style: tmp.container, children: items1 };
    let obj6 = { style: tmp.image, source: navigation(6281) };
    const formatResult = intl.format(require("intl").t.oMFSgi, obj3);
    const tmp14 = navigation(6156);
    items1 = [closure_9(tmp14, obj6), , , ];
    let obj7 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl2.string(tmp2(1126).t.dQ71Wa) };
    const Text = tmp2(5088).Text;
    intl2 = tmp2(1126).intl;
    items1[1] = closure_9(Text, obj7);
    items1[2] = formatResult.map((children, index) => {
      const obj = { style: body.body, variant: "text-sm/medium", color: "text-default", children };
      return React4(Text_Text.Text, obj, index);
    });
    let obj8 = { style: tmp.button, children: closure_9(Button, obj9) };
    obj9 = { text: intl3.string(require("intl").t.rXV81H), onPress: tmp8, loading: first, grow: true };
    Button = tmp2(5379).Button;
    intl3 = tmp2(1126).intl;
    items1[3] = closure_9(closure_6, obj8);
    return closure_9(closure_7, obj4);
  }
};
