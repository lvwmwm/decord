// Module ID: 11721
// Function ID: 91012
// Name: ContactSyncLandingOnboardingRedesign
// Dependencies: [5, 31, 27, 4344, 33, 4130, 689, 5084, 4675, 11722, 4126, 1212, 4543, 11723, 11715, 2]
// Exports: default

// Module 11721 (ContactSyncLandingOnboardingRedesign)
import closure_3 from "_createForOfIteratorHelperLoose";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { NativePermissionTypes } from "NativePermissionStatus";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: -require("_createForOfIteratorHelperLoose").space.PX_32 - require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
let obj1 = { height: 135, width: 216, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.headerImage = obj1;
const tmp4 = -require("_createForOfIteratorHelperLoose").space.PX_32;
_createForOfIteratorHelperLoose.title = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.subtitle = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj4 = { height: 48, width: "100%", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.buttonContainer = obj4;
let obj3 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.trailing = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_4, justifyContent: "flex-end", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj5 = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_4, justifyContent: "flex-end", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncLandingOnboardingRedesign.tsx");

export default function ContactSyncLandingOnboardingRedesign(onNext) {
  let discoverabilityEnabled;
  let error;
  let loading;
  let setDiscoverabilityEnabled;
  onNext = onNext.onNext;
  ({ loading, error, discoverabilityEnabled, setDiscoverabilityEnabled } = onNext);
  const tmp2 = _createForOfIteratorHelperLoose();
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [onNext];
  let obj = {};
  obj = { style: tmp2.content };
  obj = { resizeMode: "contain", style: tmp2.headerImage };
  callback = React.useCallback(callback(tmp), items);
  obj.source = importDefault(11722);
  const items1 = [callback2(closure_6, obj), , , , ];
  const obj1 = { style: tmp2.title, variant: "heading-xl/bold" };
  const intl = onNext(1212).intl;
  obj1.children = intl.string(onNext(1212).t["/G+nci"]);
  items1[1] = callback2(onNext(4126).Text, obj1);
  const obj2 = { style: tmp2.subtitle, variant: "text-sm/medium" };
  const intl2 = onNext(1212).intl;
  obj2.children = intl2.string(onNext(1212).t.G8zcHt);
  items1[2] = callback2(onNext(4126).Text, obj2);
  const obj3 = { style: tmp2.buttonContainer };
  const obj4 = { variant: "primary", size: "lg" };
  const intl3 = onNext(1212).intl;
  obj4.text = intl3.string(onNext(1212).t.LhlgY9);
  obj4.onPress = callback;
  obj4.loading = loading;
  obj3.children = callback2(onNext(4543).Button, obj4);
  items1[3] = callback2(closure_5, obj3);
  items1[4] = callback2(importDefault(11723), { error });
  obj.children = items1;
  const items2 = [callback3(closure_5, obj), callback2(closure_5, { style: tmp2.trailing, children: callback2(importDefault(11715), { discoverabilityEnabled, onValueChanged: setDiscoverabilityEnabled }) })];
  obj.children = items2;
  return callback3(closure_10, obj);
};
