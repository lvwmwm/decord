// Module ID: 9202
// Function ID: 9203
// Name: ClearAllIncomingRequestsConfirmation
// Dependencies: [32, 19, 17, 21, 4836, 576, 5039, 4527, 1115, 9195, 6544, 9203, 6510, 4832, 5281, 2]
// Exports: default

// Module 9202 (ClearAllIncomingRequestsConfirmation)
import nativeDefault from "native" /* 576 */;
import intl6 from "intl" /* 1115 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9195 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: obj2, closeButton: { marginRight: 8, alignSelf: "flex-end" }, content: obj3, container: obj4, footer: obj5, header: obj6, headerText: obj7, body: obj8, noticeHeader: obj9, buttonWrapper: obj10 };
obj2 = { display: "flex", flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%", paddingTop: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 1, padding: nativeDefault.space.PX_16 };
obj4 = { display: "flex", flexDirection: "column", height: "100%", marginTop: nativeDefault.space.PX_24 };
obj5 = { flexGrow: 0, flexShrink: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
obj6 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
obj7 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
obj8 = { padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj9 = { marginBottom: nativeDefault.space.PX_4 };
obj10 = { marginBottom: nativeDefault.space.PX_4 };
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmation.tsx");

export default function ClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let Button;
  let Button2;
  let SafeAreaPaddingView2;
  let Text;
  let Text2;
  let _undefined;
  let c0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj10;
  let obj12;
  let obj13;
  let obj15;
  let obj17;
  let obj2;
  let obj6;
  let obj8;
  let tmp3;
  _require = undefined;
  incomingPendingRequestCount = incomingPendingRequestCount.incomingPendingRequestCount;
  const tmp = closure_10();
  const tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c0] = tmp2;
  const callback = react.useCallback(() => {
    _undefined(false);
    const arr = ModalActionCreatorsDefault;
    arr.pop();
  }, []);
  const callback1 = react.useCallback(() => {
    _undefined(false);
    const presentFailedToast = ToastUtils.presentFailedToast;
    ToastUtils;
    const intl = intl6.intl;
    presentFailedToast(intl.string(intl6.t.R0RpRX));
  }, []);
  const items = [callback, callback1];
  const callback2 = react.useCallback(() => {
    _undefined(true);
    const obj = RelationshipActionCreatorsDefault;
    const result = obj.clearPendingRelationships();
    const nextPromise = result.then(callback);
    nextPromise.catch(callback1);
  }, items);
  let obj = { top: true, children: closure_9(closure_5, obj2) };
  obj2 = { style: tmp.root, children: items2 };
  const SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
  const obj3 = {
    accessibilityRole: "button",
    accessibilityLabel: intl.string(require("intl").t.cpT0Cq),
    source: callback(callback1[12]),
    style: items1,
    onPress() {
      const arr = callback(callback1[6]);
      return arr.pop();
    }
  };
  const tmp7 = callback(callback1[11]);
  intl = require("intl").intl;
  items1 = [tmp.closeButton];
  items2 = [closure_7(tmp7, obj3), ];
  const obj4 = { style: tmp.container, children: items4 };
  const obj5 = { style: tmp.content, children: closure_9(closure_8, obj6) };
  obj6 = { children: items3 };
  const obj7 = { style: tmp.header, children: closure_7(Text, obj8) };
  obj8 = { style: tmp.headerText, variant: "text-lg/bold", children: intl2.string(require("intl").t.eVjfAu) };
  Text = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items3 = [closure_7(closure_5, obj7), ];
  const obj9 = { style: tmp.body, children: closure_7(Text2, obj10) };
  obj10 = { style: tmp.noticeHeader, variant: "text-xs/normal", color: "mobile-text-heading-primary", children: intl3.format(require("intl").t.jaXsA3, { incomingRequestCount: incomingPendingRequestCount }) };
  Text2 = require("Text/Text").Text;
  intl3 = require("intl").intl;
  items3[1] = closure_7(closure_5, obj9);
  items4 = [closure_7(closure_6, obj5), ];
  const obj11 = { style: tmp.footer, children: closure_7(SafeAreaPaddingView2, obj12) };
  obj12 = { bottom: true, children: closure_9(closure_8, obj13) };
  obj13 = { children: items5 };
  const obj14 = { style: tmp.buttonWrapper, children: closure_7(Button, obj15) };
  SafeAreaPaddingView2 = require("common/SafeAreaView").SafeAreaPaddingView;
  obj15 = { disabled: tmp3, loading: tmp3, variant: "destructive", size: "md", text: intl4.string(require("intl").t.Eq9seb), onPress: callback2, grow: true };
  Button = require("components/Button/Button").Button;
  intl4 = require("intl").intl;
  items5 = [closure_7(closure_5, obj14), ];
  const obj16 = { style: tmp.buttonWrapper, children: closure_7(Button2, obj17) };
  obj17 = { variant: "secondary", size: "md", text: intl5.string(require("intl").t["ETE/oC"]), onPress: callback(callback1[6]).pop, grow: true };
  Button2 = require("components/Button/Button").Button;
  intl5 = require("intl").intl;
  items5[1] = closure_7(closure_5, obj16);
  items4[1] = closure_7(closure_5, obj11);
  items2[1] = closure_9(closure_5, obj4);
  return closure_7(SafeAreaPaddingView, obj);
};
