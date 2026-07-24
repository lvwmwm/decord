// Module ID: 8969
// Function ID: 70653
// Name: ClearAllIncomingRequestsConfirmationModal
// Dependencies: [57, 31, 27, 33, 4130, 689, 4337, 3830, 1212, 8962, 5121, 8518, 7729, 4126, 4543, 2]
// Exports: default

// Module 8969 (ClearAllIncomingRequestsConfirmationModal)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "column", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, height: "100%", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.root = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.closeButton = { marginRight: 8, alignSelf: "flex-end" };
_createForOfIteratorHelperLoose.content = { flexGrow: 1, padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { display: "flex", flexDirection: "column", height: "100%", marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.container = obj2;
let obj3 = { flexGrow: 0, flexShrink: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_24, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.footer = obj3;
let obj4 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.header = obj4;
let obj1 = { flexGrow: 1, padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.headerText = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj5 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.body = { padding: require("_createForOfIteratorHelperLoose").space.PX_24, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let obj6 = { padding: require("_createForOfIteratorHelperLoose").space.PX_24, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.noticeHeader = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj7 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.buttonWrapper = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj8 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmation.tsx");

export default function ClearAllIncomingRequestsConfirmationModal(incomingRequestCount) {
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const _require = tmp2[1];
  callback = React.useCallback(() => {
    callback(false);
    let arr = callback(callback1[6]);
    arr = arr.pop();
  }, []);
  const callback1 = React.useCallback(() => {
    callback(false);
    const intl = callback(callback1[8]).intl;
    callback(callback1[7]).presentFailedToast(intl.string(callback(callback1[8]).t.R0RpRX));
  }, []);
  const items = [callback, callback1];
  const callback2 = React.useCallback(() => {
    callback(true);
    const result = callback(callback1[9]).clearPendingRelationships();
    const obj = callback(callback1[9]);
    result.then(callback).catch(callback1);
  }, items);
  let obj = { top: true };
  obj = { style: tmp.root };
  obj = { accessibilityRole: "button" };
  let intl = _require(callback1[8]).intl;
  obj.accessibilityLabel = intl.string(_require(callback1[8]).t.cpT0Cq);
  obj.source = callback(callback1[12]);
  const items1 = [tmp.closeButton];
  obj.style = items1;
  obj.onPress = function onPress() {
    return callback(callback1[6]).pop();
  };
  const items2 = [callback2(callback(callback1[11]), obj), ];
  const obj1 = { style: tmp.container };
  const obj2 = { style: tmp.content };
  const obj3 = {};
  const obj4 = { style: tmp.header };
  const obj5 = { style: tmp.headerText, variant: "text-lg/bold" };
  const intl2 = _require(callback1[8]).intl;
  obj5.children = intl2.string(_require(callback1[8]).t.eVjfAu);
  obj4.children = callback2(_require(callback1[13]).Text, obj5);
  const items3 = [callback2(closure_5, obj4), ];
  const obj6 = { style: tmp.body };
  const obj7 = { style: tmp.noticeHeader, variant: "text-xs/normal", color: "mobile-text-heading-primary" };
  const intl3 = _require(callback1[8]).intl;
  obj7.children = intl3.format(_require(callback1[8]).t.jaXsA3, { incomingRequestCount: incomingRequestCount.incomingPendingRequestCount });
  obj6.children = callback2(_require(callback1[13]).Text, obj7);
  items3[1] = callback2(closure_5, obj6);
  obj3.children = items3;
  obj2.children = callback3(closure_8, obj3);
  const items4 = [callback2(closure_6, obj2), ];
  const obj8 = { style: tmp.footer };
  const obj9 = { bottom: true };
  const obj10 = {};
  const obj11 = { style: tmp.buttonWrapper };
  const obj12 = { disabled: first, loading: first, variant: "destructive", size: "md" };
  const intl4 = _require(callback1[8]).intl;
  obj12.text = intl4.string(_require(callback1[8]).t.Eq9seb);
  obj12.onPress = callback2;
  obj12.grow = true;
  obj11.children = callback2(_require(callback1[14]).Button, obj12);
  const items5 = [callback2(closure_5, obj11), ];
  const obj13 = { style: tmp.buttonWrapper };
  const obj14 = { variant: "secondary", size: "md", text: null, onPress: null, grow: true };
  const intl5 = _require(callback1[8]).intl;
  obj14.text = intl5.string(_require(callback1[8]).t["ETE/oC"]);
  obj14.onPress = callback(callback1[6]).pop;
  obj13.children = callback2(_require(callback1[14]).Button, obj14);
  items5[1] = callback2(closure_5, obj13);
  obj10.children = items5;
  obj9.children = callback3(closure_8, obj10);
  obj8.children = callback2(_require(callback1[10]).SafeAreaPaddingView, obj9);
  items4[1] = callback2(closure_5, obj8);
  obj1.children = items4;
  items2[1] = callback3(closure_5, obj1);
  obj.children = items2;
  obj.children = callback3(closure_5, obj);
  return callback2(_require(callback1[10]).SafeAreaPaddingView, obj);
};
