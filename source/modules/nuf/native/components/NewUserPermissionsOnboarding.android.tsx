// Module ID: 11717
// Function ID: 91006
// Name: NewUserPermissionsOnboarding
// Dependencies: [31, 27, 33, 4130, 5084, 689, 4126, 4543, 1212, 2]
// Exports: default

// Module 11717 (NewUserPermissionsOnboarding)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ View: closure_2, ScrollView: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { scrollContainer: { minHeight: "100%" }, container: { flexGrow: 1, alignItems: "center", justifyContent: "center" } };
_createForOfIteratorHelperLoose = { paddingTop: 80 + require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
_createForOfIteratorHelperLoose.alertContainer = _createForOfIteratorHelperLoose;
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_ACTIVE, alignItems: "center", maxWidth: 290 };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_HIGH);
_createForOfIteratorHelperLoose.alert = obj1;
_createForOfIteratorHelperLoose.alertContent = { paddingVertical: 24, paddingHorizontal: 24, alignItems: "center" };
_createForOfIteratorHelperLoose.alertTitle = { paddingBottom: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.alertSubtitle = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, textAlign: "center" };
_createForOfIteratorHelperLoose.buttonWrapper = { flexDirection: "row" };
let obj2 = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, textAlign: "center" };
_createForOfIteratorHelperLoose.primaryButtonContainer = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj3 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.trailing = { flexGrow: 0, padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { flexGrow: 0, padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/nuf/native/components/NewUserPermissionsOnboarding.android.tsx");

export default function NewUserPermissionsOnboarding(showSkip) {
  let header;
  let loading;
  let onAllow;
  let onDontAllow;
  let subtitle;
  let title;
  let trailing;
  let flag = showSkip.showSkip;
  ({ title, subtitle, header, trailing, loading } = showSkip);
  if (flag === undefined) {
    flag = true;
  }
  ({ onAllow, onDontAllow } = showSkip);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { contentContainerStyle: tmp.scrollContainer };
  obj = { style: tmp.container };
  obj = { style: tmp.alertContainer };
  const obj1 = {};
  const items = [header, ];
  const obj2 = { style: tmp.alert };
  const obj3 = { style: tmp.alertContent };
  const obj4 = { style: tmp.alertTitle, variant: "heading-lg/bold", color: "text-default", children: title };
  const items1 = [callback(require(4126) /* Text */.Text, obj4), , , ];
  const obj5 = { style: tmp.alertSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
  items1[1] = callback(require(4126) /* Text */.Text, obj5);
  const obj6 = {};
  const items2 = [tmp.buttonWrapper, ];
  let primaryButtonContainer = flag;
  if (flag) {
    primaryButtonContainer = tmp.primaryButtonContainer;
  }
  items2[1] = primaryButtonContainer;
  obj6.style = items2;
  const obj7 = { variant: "primary", size: "md" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj7.text = intl.string(require(1212) /* getSystemLocale */.t["2nYlT2"]);
  obj7.onPress = onAllow;
  obj7.loading = loading;
  obj7.grow = true;
  obj6.children = callback(require(4543) /* Button */.Button, obj7);
  items1[2] = callback(closure_2, obj6);
  if (flag) {
    const obj8 = { style: tmp.buttonWrapper };
    const obj9 = { variant: "secondary" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj9.text = intl2.string(require(1212) /* getSystemLocale */.t["5Wxrcd"]);
    obj9.onPress = onDontAllow;
    obj9.grow = true;
    obj8.children = callback(require(4543) /* Button */.Button, obj9);
    flag = callback(closure_2, obj8);
  }
  items1[3] = flag;
  obj3.children = items1;
  obj2.children = closure_5(closure_2, obj3);
  items[1] = callback(closure_2, obj2);
  obj1.children = items;
  obj.children = closure_5(closure_2, obj1);
  obj.children = callback(closure_2, obj);
  const items3 = [callback(closure_2, obj), callback(closure_2, { style: tmp.trailing, children: trailing })];
  obj.children = items3;
  return closure_5(closure_3, obj);
};
