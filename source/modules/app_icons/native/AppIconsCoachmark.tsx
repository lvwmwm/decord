// Module ID: 15656
// Function ID: 120718
// Name: AppIconsCoachmarkActionSheet
// Dependencies: [31, 27, 1849, 1345, 33, 4130, 689, 566, 3776, 4098, 5187, 15657, 1273, 9418, 4126, 1212, 4543, 7443, 2]
// Exports: default

// Module 15656 (AppIconsCoachmarkActionSheet)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: 0 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.info = { alignItems: "center" };
_createForOfIteratorHelperLoose.image = { alignSelf: "center", marginBottom: 20 };
_createForOfIteratorHelperLoose.nitroWheel = { marginRight: 8 };
_createForOfIteratorHelperLoose.titleContainer = { display: "flex", flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.subtitle = { marginTop: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.footer = { marginTop: 20, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginTop: 20, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_icons/native/AppIconsCoachmark.tsx");

export default function AppIconsCoachmarkActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = markAsDismissed(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getCurrentUser());
  let obj1 = importDefault(3776);
  const items1 = [markAsDismissed];
  const callback = React.useCallback(() => {
    outer1_1(outer1_2[9]).hideActionSheet();
    if (null != markAsDismissed) {
      markAsDismissed(outer1_7.DISMISS);
    }
  }, items1);
  obj = {
    onDismiss() {
      return markAsDismissed(outer1_7.DISMISS);
    },
    contentStyles: tmp.container
  };
  obj = { style: tmp.info };
  obj1 = { source: importDefault(15657), style: tmp.image };
  const items2 = [callback(closure_4, obj1), , ];
  const obj2 = { style: tmp.titleContainer };
  const obj3 = { source: importDefault(9418), size: markAsDismissed(1273).IconSizes.MEDIUM, style: tmp.nitroWheel, disableColor: true };
  const items3 = [callback(markAsDismissed(1273).Icon, obj3), ];
  const obj4 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = markAsDismissed(1212).intl;
  obj4.children = intl.string(markAsDismissed(1212).t.EfA4Cq);
  items3[1] = callback(markAsDismissed(4126).Text, obj4);
  obj2.children = items3;
  items2[1] = callback2(closure_5, obj2);
  const obj5 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle };
  const intl2 = markAsDismissed(1212).intl;
  const string = intl2.string;
  const t = markAsDismissed(1212).t;
  if (isPremiumResult) {
    let stringResult = string(t.IgchKK);
  } else {
    stringResult = string(t.D0XzaS);
  }
  obj5.children = stringResult;
  items2[2] = callback(markAsDismissed(4126).Text, obj5);
  obj.children = items2;
  const items4 = [callback2(closure_5, obj), ];
  const obj6 = { style: tmp.footer };
  const obj7 = {};
  const intl3 = markAsDismissed(1212).intl;
  obj7.text = intl3.string(markAsDismissed(1212).t.Pt547C);
  obj7.onPress = function onPress() {
    outer1_1(outer1_2[9]).hideActionSheet();
    if (null != markAsDismissed) {
      markAsDismissed(outer1_7.PRIMARY);
    }
    const obj = outer1_1(outer1_2[9]);
    const result = markAsDismissed(outer1_2[17]).navigateToAppIconSettings();
  };
  const items5 = [callback(markAsDismissed(4543).Button, obj7), ];
  const obj8 = { variant: "secondary" };
  const intl4 = markAsDismissed(1212).intl;
  obj8.text = intl4.string(markAsDismissed(1212).t.iSrIIZ);
  obj8.onPress = callback;
  items5[1] = callback(markAsDismissed(4543).Button, obj8);
  obj6.children = items5;
  items4[1] = callback2(closure_5, obj6);
  obj.children = items4;
  return callback2(markAsDismissed(5187).BottomSheet, obj);
};
