// Module ID: 6840
// Function ID: 6841
// Name: ConfirmEmailChangeStart
// Dependencies: [5, 32, 19, 17, 1376, 21, 4758, 1488, 504, 6841, 1098, 4660, 4458, 1119, 6842, 4754, 5188, 2]
// Exports: default

// Module 6840 (ConfirmEmailChangeStart)
import Text_Text from "Text/Text" /* 4754 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4758);
let closure_12 = createStyles.createStyles({ container: { flex: 1, padding: 16, alignItems: "center", justifyContent: "center" }, image: { height: 190, width: 220, resizeMode: "contain" }, title: { marginTop: 16, textAlign: "center" }, body: { marginTop: 8, lineHeight: 18, textAlign: "center" }, button: { marginTop: 16, width: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/ConfirmEmailChangeStart.tsx");

export default function ConfirmEmailChangeStart() {
  const tmp = closure_12();
  _require = tmp;
  const navigation = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp6[1];
  [][0] = navigation;
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp2(1119).intl;
    let obj3 = { oldEmail: stateFromStores.email };
    let obj4 = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
    const obj5 = { style: tmp.container, children: null };
    let obj6 = { style: tmp.image, source: navigation(6842) };
    const items1 = [closure_10(closure_7, obj6), , , ];
    let obj7 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp2(1119).intl;
    obj7.children = intl2.string(tmp2(1119).t.dQ71Wa);
    items1[1] = closure_10(tmp2(4754).Text, obj7);
    items1[2] = intl.format(tmp2(1119).t.oMFSgi, obj3).map((children, index) => v65535(Text_Text.Text, { style: body.body, variant: "text-sm/medium", color: "text-default", children }, index));
    let obj8 = { style: tmp.button, children: null };
    const obj9 = { text: null, onPress: null, loading: null, grow: true };
    const intl3 = tmp2(1119).intl;
    obj9.text = intl3.string(tmp2(1119).t.rXV81H);
    obj9.onPress = tmp7;
    obj9.loading = tmp6[0];
    obj8.children = closure_10(tmp2(5188).Button, obj9);
    items1[3] = closure_10(closure_6, obj8);
    obj5.children = items1;
    obj4.children = closure_11(closure_6, obj5);
    return closure_10(closure_8, obj4);
  }
  let obj2 = require("initialize");
};
