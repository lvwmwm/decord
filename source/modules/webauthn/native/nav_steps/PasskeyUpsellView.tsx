// Module ID: 13507
// Function ID: 102501
// Name: PasskeyUpsellView
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 13507 (PasskeyUpsellView)
import closure_3 from "result";
import closure_4 from "result";
import result from "result";
import { WebAuthnScreens } from "result";
import { HelpdeskArticles } from "result";
import { ContentDismissActionType } from "result";
import result from "result";
import result from "result";
import result from "result";

({ View: closure_5, Image: closure_6, ScrollView: closure_7 } = result);
({ jsx: closure_11, jsxs: closure_12 } = result);
result = {};
result = { backgroundColor: require("result").colors.BACKGROUND_BASE_LOW };
result.container = result;
const obj1 = { "Null": 0.129, "Null": 1, paddingHorizontal: require("result").space.PX_16 };
result.scrollViewContainer = obj1;
const obj2 = { "Null": null, "Null": null, gap: require("result").space.PX_16 };
result.headerContainer = obj2;
result.headerImage = { direction: "checkIsOnChannelNavigationRoute", style: "<string:3844887040>", borderWidth: "<string:158435740>" };
result.headerText = { textAlign: "center" };
result.circleIcon = { backgroundColor: require("result").colors.BACKGROUND_BASE_LOWEST, width: require("result").space.PX_32, height: require("result").space.PX_32, borderRadius: require("result").radii.round };
const obj3 = { backgroundColor: require("result").colors.BACKGROUND_BASE_LOWEST, width: require("result").space.PX_32, height: require("result").space.PX_32, borderRadius: require("result").radii.round };
result.listContainer = { gap: require("result").space.PX_24, marginLeft: require("result").space.PX_8, marginRight: require("result").space.PX_8 };
const obj4 = { gap: require("result").space.PX_24, marginLeft: require("result").space.PX_8, marginRight: require("result").space.PX_8 };
result.row = { gap: require("result").space.PX_8 };
result.text = { flex: 1 };
const obj5 = { gap: require("result").space.PX_8 };
result.buttonContainer = { gap: require("result").space.PX_16, alignItems: "center" };
result = result.createStyles(result);
result = result.fileFinishedImporting("modules/webauthn/native/nav_steps/PasskeyUpsellView.tsx");

export default function PasskeyUpsellView() {
  let tmp5;
  function onRegisterSuccess(closure_4, arg1) {
    const obj = {};
    const merged = Object.assign(closure_4);
    const intl = navigation(closure_2[10]).intl;
    obj["name"] = intl.string(navigation(closure_2[10]).t.8H5RmH);
    navigation.push(constants.NAME, obj);
  }
  function onCancel() {
    callback(closure_2[11]).markDismissed(constants2.USER_DISMISS);
    const obj = callback(closure_2[11]);
    const result = callback(closure_2[12]).closePasskeyUpsellModal();
  }
  const React = onCancel;
  let obj = arg1(dependencyMap[9]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const tmp2 = result();
  const importDefault = onRegisterSuccess(React.useState(""), 2)[1];
  const tmp3 = onRegisterSuccess(React.useState(""), 2);
  [tmp5, closure_2] = onRegisterSuccess(React.useState(false), 2);
  const items = [navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = { headerLeft: navigation(closure_2[13]).getHeaderCloseButton(onCancel) };
    navigation.setOptions(obj);
  }, items);
  let obj1 = importDefault(dependencyMap[14]);
  const articleURL = obj1.getArticleURL(HelpdeskArticles.SETTING_UP_TWO_FACTOR);
  obj = { bottom: true, style: tmp2.container };
  obj = { contentContainerStyle: tmp2.scrollViewContainer };
  obj1 = { style: tmp2.headerContainer };
  const obj2 = { source: importDefault(dependencyMap[16]), style: tmp2.headerImage };
  const items1 = [callback(closure_6, obj2), , ];
  const obj3 = { style: tmp2.headerText };
  const intl = arg1(dependencyMap[10]).intl;
  obj3.children = intl.string(arg1(dependencyMap[10]).t.CjleBl);
  items1[1] = callback(arg1(dependencyMap[17]).Text, obj3);
  const obj4 = { style: tmp2.headerText };
  let obj8 = arg1(dependencyMap[18]);
  const tmp10 = closure_7;
  const tmp11 = closure_5;
  const tmp4 = onRegisterSuccess(React.useState(false), 2);
  const intl2 = arg1(dependencyMap[10]).intl;
  const string = intl2.string;
  const t = arg1(dependencyMap[10]).t;
  if (isIOSResult) {
    let stringResult = string(t.7yxR9t);
  } else {
    stringResult = string(t.d6uxJy);
  }
  obj4.children = stringResult;
  items1[2] = callback(arg1(dependencyMap[17]).Text, obj4);
  obj1.children = items1;
  const items2 = [callback2(tmp11, obj1), , ];
  const obj5 = { style: tmp2.listContainer };
  const obj6 = { style: tmp2.row };
  const items3 = [callback(closure_5, { style: tmp2.circleIcon }), ];
  obj8 = { style: tmp2.text };
  const intl3 = arg1(dependencyMap[10]).intl;
  obj8.children = intl3.string(arg1(dependencyMap[10]).t.HtqVkj);
  items3[1] = callback(arg1(dependencyMap[17]).Text, obj8);
  obj6.children = items3;
  const items4 = [callback2(closure_5, obj6), ];
  const obj9 = { style: tmp2.row };
  const items5 = [callback(closure_5, { style: tmp2.circleIcon }), ];
  const obj11 = { style: tmp2.text };
  const isIOSResult = obj8.isIOS();
  const obj10 = { style: tmp2.circleIcon };
  const obj7 = { style: tmp2.circleIcon };
  const tmp16 = callback;
  const obj17 = arg1(dependencyMap[18]);
  const intl4 = arg1(dependencyMap[10]).intl;
  const string2 = intl4.string;
  const t2 = arg1(dependencyMap[10]).t;
  if (isIOSResult1) {
    let string2Result = string2(t2.U409I8);
  } else {
    string2Result = string2(t2.uYfqlo);
  }
  obj11.children = string2Result;
  items5[1] = tmp16(arg1(dependencyMap[17]).Text, obj11);
  obj9.children = items5;
  items4[1] = callback2(closure_5, obj9);
  obj5.children = items4;
  items2[1] = callback2(closure_5, obj5);
  const obj12 = { style: tmp2.buttonContainer };
  const obj13 = { hasMaxConnections: "png", isBoostOnlySubscription: "absolute" };
  const intl5 = arg1(dependencyMap[10]).intl;
  obj13.children = intl5.format(arg1(dependencyMap[10]).t.OeGXVv, { learnMoreLink: articleURL });
  const items6 = [callback(arg1(dependencyMap[19]).TextWithIOSLinkWorkaround, obj13), , ];
  const obj14 = {};
  const intl6 = arg1(dependencyMap[10]).intl;
  const string3 = intl6.string;
  const t3 = arg1(dependencyMap[10]).t;
  if (tmp5) {
    let string3Result = string3(t3.wePEBF);
  } else {
    string3Result = string3(t3.NIFmCJ);
  }
  obj14.text = string3Result;
  obj14.onPress = function onPress() {
    let obj = callback(closure_2[11]);
    obj.markDismissed(constants2.TAKE_ACTION);
    obj = { setRegistering: closure_2, setError: callback, onRegisterSuccess };
    callback(closure_2[21]).registerPasskey(obj);
  };
  obj14.size = "lg";
  obj14.disabled = tmp5;
  obj14.loading = tmp5;
  obj14.grow = true;
  items6[1] = callback(arg1(dependencyMap[20]).Button, obj14);
  const obj15 = {};
  const intl7 = arg1(dependencyMap[10]).intl;
  const string4 = intl7.string;
  const t4 = arg1(dependencyMap[10]).t;
  if (tmp5) {
    let string4Result = string4(t4.wePEBF);
  } else {
    string4Result = string4(t4.7J6/nG);
  }
  obj15.text = string4Result;
  obj15.onPress = onCancel;
  items6[2] = callback(arg1(dependencyMap[20]).Button, obj15);
  obj12.children = items6;
  items2[2] = callback2(closure_5, obj12);
  obj.children = items2;
  obj.children = callback2(tmp10, obj);
  return callback(arg1(dependencyMap[15]).SafeAreaPaddingView, obj);
};
