// Module ID: 13679
// Function ID: 105014
// Name: PasskeyUpsellView
// Dependencies: [57, 31, 27, 13675, 653, 1345, 33, 4130, 689, 1456, 1212, 13680, 13681, 5087, 1920, 5121, 13684, 4126, 477, 4543, 9237, 2]
// Exports: default

// Module 13679 (PasskeyUpsellView)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { WebAuthnScreens } from "WebAuthnScreens";
import { HelpdeskArticles } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_5, Image: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, flexDirection: "column", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { flexGrow: 1, justifyContent: "space-between", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.scrollViewContainer = obj1;
let obj2 = { alignItems: "center", justifyContent: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.headerContainer = obj2;
_createForOfIteratorHelperLoose.headerImage = { height: 190, width: 220, resizeMode: "contain" };
_createForOfIteratorHelperLoose.headerText = { textAlign: "center" };
_createForOfIteratorHelperLoose.circleIcon = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, width: require("_createForOfIteratorHelperLoose").space.PX_32, height: require("_createForOfIteratorHelperLoose").space.PX_32, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, width: require("_createForOfIteratorHelperLoose").space.PX_32, height: require("_createForOfIteratorHelperLoose").space.PX_32, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.listContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_24, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8, marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj5 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "center" };
_createForOfIteratorHelperLoose.row = obj5;
_createForOfIteratorHelperLoose.text = { flex: 1 };
let obj4 = { gap: require("_createForOfIteratorHelperLoose").space.PX_24, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8, marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.buttonContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj6 = { gap: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/webauthn/native/nav_steps/PasskeyUpsellView.tsx");

export default function PasskeyUpsellView() {
  let dependencyMap;
  let tmp5;
  function onRegisterSuccess(onCancel, arg1) {
    const obj = {};
    const merged = Object.assign(onCancel);
    const intl = navigation(outer1_2[10]).intl;
    obj["name"] = intl.string(navigation(outer1_2[10]).t["8H5RmH"]);
    navigation.push(outer1_8.NAME, obj);
  }
  function onCancel() {
    callback(outer1_2[11]).markDismissed(outer1_10.USER_DISMISS);
    const obj = callback(outer1_2[11]);
    const result = callback(outer1_2[12]).closePasskeyUpsellModal();
  }
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  const tmp2 = _createForOfIteratorHelperLoose();
  const importDefault = onRegisterSuccess(onCancel.useState(""), 2)[1];
  const tmp3 = onRegisterSuccess(onCancel.useState(""), 2);
  [tmp5, dependencyMap] = onRegisterSuccess(onCancel.useState(false), 2);
  const items = [navigation];
  const layoutEffect = onCancel.useLayoutEffect(() => {
    const obj = { headerLeft: navigation(outer1_2[13]).getHeaderCloseButton(onCancel) };
    navigation.setOptions(obj);
  }, items);
  let obj1 = importDefault(1920);
  const articleURL = obj1.getArticleURL(HelpdeskArticles.SETTING_UP_TWO_FACTOR);
  obj = { bottom: true, style: tmp2.container };
  obj = { contentContainerStyle: tmp2.scrollViewContainer };
  obj1 = { style: tmp2.headerContainer };
  const obj2 = { source: importDefault(13684), style: tmp2.headerImage };
  const items1 = [callback(closure_6, obj2), , ];
  const obj3 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp2.headerText };
  let intl = navigation(1212).intl;
  obj3.children = intl.string(navigation(1212).t.CjleBl);
  items1[1] = callback(navigation(4126).Text, obj3);
  const obj4 = { variant: "heading-md/normal", color: "text-default", style: tmp2.headerText };
  let obj8 = navigation(477);
  const tmp10 = closure_7;
  const tmp11 = closure_5;
  const tmp4 = onRegisterSuccess(onCancel.useState(false), 2);
  const intl2 = navigation(1212).intl;
  const string = intl2.string;
  const t = navigation(1212).t;
  if (isIOSResult) {
    let stringResult = string(t["7yxR9t"]);
  } else {
    stringResult = string(t.d6uxJy);
  }
  obj4.children = stringResult;
  items1[2] = callback(navigation(4126).Text, obj4);
  obj1.children = items1;
  const items2 = [callback2(tmp11, obj1), , ];
  const obj5 = { style: tmp2.listContainer };
  const obj6 = { style: tmp2.row };
  const items3 = [callback(closure_5, { style: tmp2.circleIcon }), ];
  obj8 = { variant: "heading-md/normal", color: "text-default", style: tmp2.text };
  const intl3 = navigation(1212).intl;
  obj8.children = intl3.string(navigation(1212).t.HtqVkj);
  items3[1] = callback(navigation(4126).Text, obj8);
  obj6.children = items3;
  const items4 = [callback2(closure_5, obj6), ];
  const obj9 = { style: tmp2.row };
  const items5 = [callback(closure_5, { style: tmp2.circleIcon }), ];
  const obj11 = { variant: "heading-md/normal", color: "text-default", style: tmp2.text };
  isIOSResult = obj8.isIOS();
  const obj10 = { style: tmp2.circleIcon };
  const obj7 = { style: tmp2.circleIcon };
  const tmp16 = callback;
  const obj17 = navigation(477);
  const intl4 = navigation(1212).intl;
  const string2 = intl4.string;
  const t2 = navigation(1212).t;
  if (isIOSResult1) {
    let string2Result = string2(t2.U409I8);
  } else {
    string2Result = string2(t2.uYfqlo);
  }
  obj11.children = string2Result;
  items5[1] = tmp16(navigation(4126).Text, obj11);
  obj9.children = items5;
  items4[1] = callback2(closure_5, obj9);
  obj5.children = items4;
  items2[1] = callback2(closure_5, obj5);
  const obj12 = { style: tmp2.buttonContainer };
  const obj13 = { variant: "text-sm/semibold", color: "text-brand" };
  const intl5 = navigation(1212).intl;
  obj13.children = intl5.format(navigation(1212).t.OeGXVv, { learnMoreLink: articleURL });
  const items6 = [callback(navigation(4126).Text, obj13), , ];
  const obj14 = {};
  const intl6 = navigation(1212).intl;
  const string3 = intl6.string;
  const t3 = navigation(1212).t;
  if (tmp5) {
    let string3Result = string3(t3.wePEBF);
  } else {
    string3Result = string3(t3.NIFmCJ);
  }
  obj14.text = string3Result;
  obj14.onPress = function onPress() {
    let obj = callback(outer1_2[11]);
    obj.markDismissed(outer1_10.TAKE_ACTION);
    obj = { setRegistering: closure_2, setError: callback, onRegisterSuccess };
    callback(outer1_2[20]).registerPasskey(obj);
  };
  obj14.size = "lg";
  obj14.disabled = tmp5;
  obj14.loading = tmp5;
  obj14.grow = true;
  items6[1] = callback(navigation(4543).Button, obj14);
  const obj15 = { text: null, onPress: null, size: "lg", variant: "secondary", grow: true };
  const intl7 = navigation(1212).intl;
  const string4 = intl7.string;
  const t4 = navigation(1212).t;
  if (tmp5) {
    let string4Result = string4(t4.wePEBF);
  } else {
    string4Result = string4(t4["7J6/nG"]);
  }
  obj15.text = string4Result;
  obj15.onPress = onCancel;
  items6[2] = callback(navigation(4543).Button, obj15);
  obj12.children = items6;
  items2[2] = callback2(closure_5, obj12);
  obj.children = items2;
  obj.children = callback2(tmp10, obj);
  return callback(navigation(5121).SafeAreaPaddingView, obj);
};
