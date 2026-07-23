// Module ID: 9190
// Function ID: 71972
// Name: ConfirmEmailChangeStart
// Dependencies: [5, 57, 31, 27, 1849, 33, 4130, 1456, 566, 9191, 668, 4030, 3831, 1212, 9192, 4126, 4543, 2]
// Exports: default

// Module 9190 (ConfirmEmailChangeStart)
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
let closure_8;
let require = arg1;
({ View: closure_6, Image: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, padding: 16, alignItems: "center", justifyContent: "center" }, image: { height: 190, width: 220, resizeMode: "contain" }, title: { marginTop: 16, textAlign: "center" }, body: { marginTop: 8, lineHeight: 18, textAlign: "center" }, button: { marginTop: 16, width: "100%" } });
const result = require("result").fileFinishedImporting("modules/verification/native/components/ConfirmEmailChangeStart.tsx");

export default function ConfirmEmailChangeStart() {
  const tmp = callback4();
  const require = tmp;
  let obj = require(1456) /* useNavigation */;
  const navigation = obj.useNavigation();
  let obj1 = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_9.getCurrentUser());
  const tmp4 = callback(React.useState(false), 2);
  const dependencyMap = tmp4[1];
  // CreateGeneratorClosureLongIndex (0x67)
  [][0] = navigation;
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { oldEmail: stateFromStores.email };
    obj = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false };
    obj1 = { style: tmp.container };
    const obj2 = { style: tmp.image, source: navigation(9192) };
    const items1 = [callback2(closure_7, obj2), , , ];
    const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj3.children = intl2.string(require(1212) /* getSystemLocale */.t.dQ71Wa);
    items1[1] = callback2(require(4126) /* Text */.Text, obj3);
    items1[2] = intl.format(require(1212) /* getSystemLocale */.t.oMFSgi, obj).map((children) => {
      const obj = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children };
      return outer1_10(tmp(table[15]).Text, obj, arg1);
    });
    const obj4 = { style: tmp.button };
    const obj5 = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj5.text = intl3.string(require(1212) /* getSystemLocale */.t.rXV81H);
    obj5.onPress = tmp5;
    obj5.loading = tmp4[0];
    obj5.grow = true;
    obj4.children = callback2(require(4543) /* Button */.Button, obj5);
    items1[3] = callback2(closure_6, obj4);
    obj1.children = items1;
    obj.children = callback3(closure_6, obj1);
    return callback2(closure_8, obj);
  }
};
