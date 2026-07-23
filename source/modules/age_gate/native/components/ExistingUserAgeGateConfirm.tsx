// Module ID: 15985
// Function ID: 123600
// Name: ExistingUserAgeGateConfirm
// Dependencies: [5, 57, 31, 27, 653, 33, 4130, 1456, 5121, 4126, 1212, 5459, 1920, 4543, 2]
// Exports: default

// Module 15985 (ExistingUserAgeGateConfirm)
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ container: { padding: 16, flex: 1, alignItems: "center", justifyContent: "center" }, header: { textAlign: "center", marginBottom: 8 }, body: { textAlign: "center", lineHeight: 20, marginBottom: 16 }, buttonWrapper: { width: "100%" } });
const result = require("result").fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateConfirm.tsx");

export default function ExistingUserAgeGateConfirm(age) {
  const onConfirm = age.onConfirm;
  let importDefault;
  let dependencyMap;
  function _handleConfirm() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _handleConfirm(tmp);
    return obj(...arguments);
  }
  const tmp = callback4();
  let obj = onConfirm(1456);
  importDefault = obj.useNavigation();
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  obj = { top: true, style: tmp.container };
  obj = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = onConfirm(1212).intl;
  obj.children = intl.format(onConfirm(1212).t.wumolR, { age: age.age });
  const items = [callback2(onConfirm(4126).Text, obj), , ];
  const obj1 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default" };
  const intl2 = onConfirm(1212).intl;
  const obj2 = { helpURL: importDefault(1920).getArticleURL(HelpdeskArticles.AGE_GATE) };
  obj1.children = intl2.format(onConfirm(1212).t.n3QjDE, obj2);
  items[1] = callback2(onConfirm(5459).TextWithIOSLinkWorkaround, obj1);
  const obj3 = { style: tmp.buttonWrapper };
  const obj4 = { loading: first, disabled: first };
  const intl3 = onConfirm(1212).intl;
  obj4.text = intl3.string(onConfirm(1212).t["6tahin"]);
  obj4.onPress = function handleConfirm() {
    return _handleConfirm(...arguments);
  };
  obj4.grow = true;
  obj3.children = callback2(onConfirm(4543).Button, obj4);
  items[2] = callback2(View, obj3);
  obj.children = items;
  return callback3(onConfirm(5121).SafeAreaPaddingView, obj);
};
