// Module ID: 16428
// Function ID: 128017
// Name: Header
// Dependencies: [31, 27, 33, 4130, 689, 5121, 4126, 14106, 1212, 1557, 4543, 1456, 2]
// Exports: default

// Module 16428 (Header)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function Header(arg0) {
  let description;
  let title;
  ({ description, title } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { top: true, style: tmp.headerContainer };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  const items = [callback(require(4126) /* Text */.Text, obj), , ];
  obj = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: description };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  items[2] = callback(importDefault(14106), { style: tmp.separator });
  obj.children = items;
  return callback2(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
}
function Footer(arg0) {
  let canProceedToNextStep;
  let nextStep;
  let onProceed;
  let submitting;
  ({ canProceedToNextStep, nextStep, onProceed, submitting } = arg0);
  if (null == nextStep) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t["4cAsqe"]);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t["bm6P5/"]);
  }
  let obj = {};
  const items = [_createForOfIteratorHelperLoose().footerContainer, ];
  obj = { paddingBottom: importDefault(1557)().bottom };
  items[1] = obj;
  obj.style = items;
  obj = { loading: submitting, disabled: !canProceedToNextStep, text: stringResult, onPress: onProceed };
  obj.children = callback(require(4543) /* Button */.Button, obj);
  return callback(closure_4, obj);
}
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, height: "100%" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scrollContainer = { flexGrow: 1 };
_createForOfIteratorHelperLoose.headerContainer = { position: "relative", paddingTop: 48, paddingBottom: 8, paddingHorizontal: 16, alignItems: "center" };
_createForOfIteratorHelperLoose.title = { marginTop: 12, textAlign: "center" };
_createForOfIteratorHelperLoose.subtitle = { marginTop: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.separator = { marginTop: 24 };
_createForOfIteratorHelperLoose.footerContainer = { width: "100%", padding: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierEditStep.tsx");

export default function GuildRoleSubscriptionTierEditStep(scrollable) {
  let obj = Object.create(null);
  obj.scrollable = 0;
  const merged = Object.assign(scrollable, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  obj = navigation(onProceed[11]);
  navigation = obj.useNavigation();
  const nextStep = merged.nextStep;
  onProceed = merged.onProceed;
  const items = [navigation, nextStep, onProceed];
  const callback = React.useCallback(() => {
    if (null != onProceed) {
      onProceed();
    } else if (null != nextStep) {
      navigation.push(nextStep);
    }
  }, items);
  if (false !== scrollable.scrollable) {
    obj = { style: tmp3.container };
    const obj1 = {};
    const merged1 = Object.assign(merged);
    const items1 = [callback(Header, obj1), , ];
    const obj2 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false };
    const items2 = [tmp3.scrollContainer];
    obj2.contentContainerStyle = items2;
    obj2.children = merged.children;
    items1[1] = callback(closure_5, obj2);
    const obj3 = {};
    const merged2 = Object.assign(merged);
    obj3["onProceed"] = callback;
    items1[2] = callback(Footer, obj3);
    obj.children = items1;
    let obj4 = obj;
  } else {
    obj4 = { style: tmp3.container };
    const obj5 = {};
    const merged3 = Object.assign(merged);
    const items3 = [callback(Header, obj5), merged.children, ];
    const obj6 = {};
    const merged4 = Object.assign(merged);
    obj6["onProceed"] = callback;
    items3[2] = callback(Footer, obj6);
    obj4.children = items3;
  }
  return closure_7(closure_4, obj4);
};
