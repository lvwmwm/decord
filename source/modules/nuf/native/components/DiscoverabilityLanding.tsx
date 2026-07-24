// Module ID: 11810
// Function ID: 91691
// Name: DiscoverabilityLanding
// Dependencies: [31, 27, 11733, 653, 33, 4130, 689, 5052, 1557, 4098, 11811, 1934, 5084, 5085, 11812, 4126, 1212, 7636, 11760, 4543, 2]
// Exports: default

// Module 11810 (DiscoverabilityLanding)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { useContactSyncModalStore } from "initialValues";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerContainer = { flexGrow: 0, justifyContent: "center", marginBottom: 24 };
_createForOfIteratorHelperLoose.header = { paddingHorizontal: 16, alignItems: "center" };
_createForOfIteratorHelperLoose.image = { width: "100%", marginHorizontal: 0 };
_createForOfIteratorHelperLoose.button = { flexGrow: 0, marginHorizontal: 16, marginBottom: 24 };
_createForOfIteratorHelperLoose.title = { textAlign: "center", marginTop: 16 };
_createForOfIteratorHelperLoose.subtitle = { textAlign: "center", marginTop: 8 };
_createForOfIteratorHelperLoose.formRow = { paddingVertical: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let obj1 = { paddingVertical: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let obj2 = {};
const merged = Object.assign(require("createTextStyle")(require("ME").Fonts.PRIMARY_SEMIBOLD, require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE, 16));
_createForOfIteratorHelperLoose.formText = obj2;
_createForOfIteratorHelperLoose.footerContainer = { flexGrow: 1, width: "100%" };
_createForOfIteratorHelperLoose.info = { paddingHorizontal: 16, marginTop: 8, marginBottom: 24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("initialValues").fileFinishedImporting("modules/nuf/native/components/DiscoverabilityLanding.tsx");

export default function DiscoverabilityLanding(onNext) {
  const tmp = _createForOfIteratorHelperLoose();
  onNext = onNext.onNext;
  const tmp2 = useContactSyncModalStore();
  let allowEmail = tmp2.allowEmail;
  const allowPhone = tmp2.allowPhone;
  const items = [allowPhone, allowEmail];
  React = React.useCallback(() => {
    let obj = allowEmail(allowPhone[9]);
    obj = { allowPhone, allowEmail };
    obj.openLazy(onNext(allowPhone[11])(allowPhone[10], allowPhone.paths), "Discoverability Landing", obj);
  }, items);
  let obj = { style: tmp.container };
  obj = { paddingTop: onNext(allowPhone[12]).NAV_BAR_HEIGHT + 32, paddingBottom: allowEmail(allowPhone[8])().bottom + 16 };
  obj.contentContainerStyle = obj;
  obj = { style: tmp.headerContainer };
  const obj1 = { style: tmp.header };
  const obj2 = { resizeMode: "contain", style: tmp.image, source: allowEmail(allowPhone[14]) };
  const items1 = [callback(allowEmail(allowPhone[13]), obj2), , ];
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = onNext(allowPhone[16]).intl;
  obj3.children = intl.string(onNext(allowPhone[16]).t.n8nw6j);
  items1[1] = callback(onNext(allowPhone[15]).Text, obj3);
  const obj4 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-subtle" };
  const intl2 = onNext(allowPhone[16]).intl;
  obj4.children = intl2.string(onNext(allowPhone[16]).t.KMW0kP);
  items1[2] = callback(onNext(allowPhone[15]).Text, obj4);
  obj1.children = items1;
  obj.children = callback2(closure_4, obj1);
  const items2 = [callback(closure_4, obj), ];
  const obj5 = { style: tmp.footerContainer };
  const obj6 = { DEPRECATED_style: tmp.formRow };
  const obj7 = { style: tmp.formText };
  const intl3 = onNext(allowPhone[16]).intl;
  obj7.text = intl3.string(onNext(allowPhone[16]).t.gMUgpv);
  obj6.label = callback(onNext(allowPhone[17]).FormRow.Label, obj7);
  obj6.onPress = onNext(allowPhone[18]).toggleDiscoverabilityForUser;
  if (!allowEmail) {
    allowEmail = allowPhone;
  }
  obj6.selected = allowEmail;
  const items3 = [callback(onNext(allowPhone[17]).FormCheckboxRow, obj6), , ];
  const obj8 = { style: tmp.info, variant: "heading-deprecated-12/medium", color: "text-default" };
  const intl4 = onNext(allowPhone[16]).intl;
  const items4 = [intl4.string(onNext(allowPhone[16]).t["DGZg+k"]), " ", ];
  const intl5 = onNext(allowPhone[16]).intl;
  items4[2] = intl5.format(onNext(allowPhone[16]).t.QmF5z4, {
    learnMoreHook(children) {
      const obj = { onPress: result, variant: "text-sm/medium", color: "text-link", children };
      return outer1_7(onNext(allowPhone[15]).Text, obj, arg1);
    }
  });
  obj8.children = items4;
  items3[1] = callback2(onNext(allowPhone[15]).Text, obj8);
  const obj10 = { style: tmp.button };
  const obj11 = {};
  const intl6 = onNext(allowPhone[16]).intl;
  obj11.text = intl6.string(onNext(allowPhone[16]).t.PDTjLN);
  obj11.onPress = function onPress() {
    return onNext();
  };
  obj11.grow = true;
  obj10.children = callback(onNext(allowPhone[19]).Button, obj11);
  items3[2] = callback(closure_4, obj10);
  obj5.children = items3;
  items2[1] = callback2(closure_4, obj5);
  obj.children = items2;
  return callback2(closure_5, obj);
};
