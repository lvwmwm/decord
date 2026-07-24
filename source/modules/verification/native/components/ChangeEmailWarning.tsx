// Module ID: 9223
// Function ID: 72161
// Name: ChangeEmailWarning
// Dependencies: [31, 27, 1849, 9221, 653, 33, 4130, 689, 1456, 566, 675, 668, 5807, 4126, 1212, 4543, 9217, 2]
// Exports: default

// Module 9223 (ChangeEmailWarning)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { COMMON_SCAMS_EDUCATION_HC_ARTICLE as closure_7 } from "ChangeEmailReasons";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_4;
let closure_5;
let closure_9;
const require = arg1;
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, padding: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.body = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
_createForOfIteratorHelperLoose.buttonContainer = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/verification/native/components/ChangeEmailWarning.tsx");

export default function ChangeEmailWarning(changeEmailReason) {
  changeEmailReason = changeEmailReason.changeEmailReason;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = changeEmailReason(1456);
  const navigation = obj.useNavigation();
  let obj1 = changeEmailReason(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [navigation, changeEmailReason];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.getCurrentUser());
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false };
    obj = { style: tmp.container };
    const items2 = [callback(changeEmailReason(5807).TrafficConeSpotIllustration, {}), , , ];
    obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
    const intl = changeEmailReason(1212).intl;
    obj1.children = intl.string(changeEmailReason(1212).t.hhR7gX);
    items2[1] = callback(changeEmailReason(4126).Text, obj1);
    const obj2 = { style: tmp.body, accessibilityRole: "header", variant: "text-md/normal", color: "mobile-text-heading-primary" };
    const intl2 = changeEmailReason(1212).intl;
    const obj3 = { hcArticle: closure_7 };
    const items3 = [intl2.format(changeEmailReason(1212).t.rqWXUf, obj3), "\n\n", ];
    const intl3 = changeEmailReason(1212).intl;
    items3[2] = intl3.string(changeEmailReason(1212).t["3LW10C"]);
    obj2.children = items3;
    items2[2] = callback2(changeEmailReason(4126).Text, obj2);
    const obj4 = { style: tmp.buttonContainer };
    const obj5 = { size: "md", variant: "tertiary", text: null, onPress: null, shrink: true };
    const intl4 = changeEmailReason(1212).intl;
    obj5.text = intl4.string(changeEmailReason(1212).t.rwTBFs);
    obj5.onPress = tmp4;
    const items4 = [callback(changeEmailReason(4543).Button, obj5), ];
    const obj6 = { size: "md", variant: "primary", text: null, onPress: null, shrink: true };
    const intl5 = changeEmailReason(1212).intl;
    obj6.text = intl5.string(changeEmailReason(1212).t["ETE/oC"]);
    obj6.onPress = function onPress() {
      return navigation(outer1_2[16]).close();
    };
    items4[1] = callback(changeEmailReason(4543).Button, obj6);
    obj4.children = items4;
    items2[3] = callback2(closure_4, obj4);
    obj.children = items2;
    obj.children = callback2(closure_4, obj);
    tmp5 = callback(closure_5, obj);
  }
  return tmp5;
};
